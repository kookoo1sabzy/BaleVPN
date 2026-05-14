package ai.bale.proxy

import ai.bale.proxy.bale.CallEntity
import ai.bale.proxy.tunnel.LiveKitStats
import ai.bale.proxy.tunnel.PacketStats
import android.app.*
import android.content.Intent
import android.os.Build
import android.util.Log
import kotlinx.coroutines.*
import java.util.concurrent.ConcurrentHashMap

private const val TAG                = "BaleProxy"
// Auto-reject a pending caller after this — caller has likely given up and the notification is stale.
private const val PENDING_TIMEOUT_MS = 60 * 1000L
// How often the pending sweep loop runs.
private const val PENDING_CHECK_MS   = 15_000L
// How often the UI snapshot loop refreshes per-client stats.
private const val STATS_REFRESH_MS   = 500L

class BaleServerService : Service() {

    data class ClientInfo(
        val callId:       Long,
        val callerId:     Long,
        val connectedAt:  Long,
        val rxPkts: Long, val rxBytes: Long,
        val txPkts: Long, val txBytes: Long,
        // Latest WebRTC transport stats from this client's LiveKit room. Null when
        // the SDK hasn't reported a nominated candidate-pair yet (usually the first
        // ~1 s after connect).
        val lkStats:      LiveKitStats? = null,
        // Aggregated TCP/UDP flow stats from the native NAT layer (NatDispatcher).
        // Null when the session has no flows yet or has been torn down.
        val packetStats:  PacketStats? = null,
    )

    data class PendingCall(
        val callId:     Long,
        val callerId:   Long,
        val entity:     CallEntity?,
        val callerName: String? = null,
        val receivedAt: Long    = System.currentTimeMillis(),
    )

    // Recreated whenever the service is (re)started — once cancelled, a CoroutineScope
    // is dead. Without this, an Android low-memory restart or a rapid stop→start
    // toggle would leave us with a cancelled scope; scope.launch would silently no-op
    // and incoming-call updates would be received but never dispatched.
    private var scope = CoroutineScope(Dispatchers.Default + SupervisorJob())
    // Tracks whether we've launched our background loops on the current scope. Reset
    // whenever the scope is rebuilt so a restarted service relaunches them, but stays
    // true across redundant onStartCommand calls (which Android may issue when the
    // activity calls startService more than once).
    private var loopsStarted = false

    private class Client(
        val callId:      Long,
        val callerId:    Long = 0L,
        val transport:   LkTunnel,
        val connectedAt: Long = System.currentTimeMillis(),
        // Display name resolved at connect time; reused on disconnect so the
        // notification reads the same name even if the WS is being torn down
        // by the time disconnect fires.
        @Volatile var resolvedName: String? = null,
    )

    private val clients     = ConcurrentHashMap<Long, Client>()
    private val pendingMap  = ConcurrentHashMap<Long, PendingCall>()

    companion object {
        const val ACTION_STOP = "ai.bale.proxy.SERVER_STOP"
        private const val NOTIF_ID         = 2
        private const val PENDING_NOTIF_ID = 3
        // LOW-importance channel for the silent informational notifications:
        // foreground service status + per-client connect/disconnect events.
        private const val CHANNEL          = "bale_server"
        // HIGH-importance channel — only the pending-admission notification
        // posts here, since it requires the user to allow/reject before the
        // call can proceed. Heads-up + sound is appropriate.
        private const val ALERT_CHANNEL    = "bale_server_alerts"
        // Per-callerId connect/disconnect events sit on a separate id range so they
        // don't collide with the foreground / pending notifications. Each caller
        // gets a stable id derived from their callerId, so a "disconnected" alert
        // replaces an older "connected" alert from the same caller.
        private const val CLIENT_EVENT_NOTIF_BASE = 1_000
        // Cap on simultaneously-connected clients. Hard limit matches the Node side's
        // SNAT pool size (10.8.0.2–10.8.0.254 = 253 slots) so the two platforms behave
        // identically when paired with the same kind of peer. The user-facing default
        // is 5 — most people have 2-3 devices, the extra headroom covers occasional
        // family/guest peers.
        const val MAX_CLIENTS_DEFAULT: Int = 5
        const val MAX_CLIENTS_LIMIT:   Int = 253

        fun getMaxClients(prefs: android.content.SharedPreferences): Int =
            prefs.getInt("maxClients", MAX_CLIENTS_DEFAULT).coerceIn(1, MAX_CLIENTS_LIMIT)
        fun setMaxClients(prefs: android.content.SharedPreferences, n: Int) {
            prefs.edit().putInt("maxClients", n.coerceIn(1, MAX_CLIENTS_LIMIT)).apply()
        }

        @Volatile var isRunning   = false
        @Volatile var clientCount = 0
        // User-facing verbose-logging toggle. Propagates to the native NAT
        // layer (per-flow TCP/UDP sessions + dispatcher) so retransmits,
        // cwnd-limited stalls, fragment activity, etc. surface to logcat.
        @Volatile var debug: Boolean = false
            set(value) {
                field = value
                LkTunnel.setDebug(value)
                instance?.getSharedPreferences("config", MODE_PRIVATE)
                    ?.edit()?.putBoolean("packet_debug", value)?.apply()
            }
        @Volatile private var instance:        BaleServerService? = null
        @Volatile private var clientSnapshot:  List<ClientInfo>   = emptyList()
        @Volatile private var pendingSnapshot: List<PendingCall>  = emptyList()

        fun getClientInfos():  List<ClientInfo>  = clientSnapshot
        fun getPendingCalls(): List<PendingCall> = pendingSnapshot

        fun disconnectClient(callId: Long) {
            instance?.scope?.launch { instance?.doDisconnect(callId) }
        }

        // Tear down every active client and pending request. Suspends until each
        // client has had its discardCall sent and its LiveKit room closed, so the
        // caller can safely tear down the WS afterwards without the per-client
        // discardCall RPCs racing the WS shutdown.
        suspend fun disconnectAllClients() {
            val inst = instance ?: return
            val ids = inst.clients.keys.toList()
            Log.d(TAG, "Server: disconnecting all ${ids.size} clients (user request)")
            // Send discardCall + close transports concurrently — each one waits on
            // its own RPC, but they don't need to block each other.
            coroutineScope {
                ids.forEach { id -> launch { inst.doDisconnect(id) } }
            }
            if (inst.pendingMap.isNotEmpty()) {
                val pendingIds = inst.pendingMap.keys.toList()
                Log.d(TAG, "Server: rejecting ${pendingIds.size} pending requests")
                coroutineScope {
                    pendingIds.forEach { id -> launch { inst.doRejectPending(id) } }
                }
            }
        }

        fun blockClient(callId: Long, callerId: Long) {
            if (callerId != 0L) AdmissionStore.remove(callerId)
            instance?.scope?.launch { instance?.doDisconnect(callId) }
        }

        fun acceptPending(callId: Long, addToList: Boolean) {
            instance?.scope?.launch { instance?.doAcceptPending(callId, addToList) }
        }

        fun rejectPending(callId: Long) {
            // UI-driven rejection: also blacklist so the caller can't keep
            // re-sending the same incoming call. Internal paths (sweep
            // timeout, bulk WS-teardown) call doRejectPending directly with
            // addToBlacklist=false.
            instance?.scope?.launch { instance?.doRejectPending(callId, addToBlacklist = true) }
        }

    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) { stopServer(); return START_NOT_STICKY }

        Log.d(TAG, "BaleServerService: starting")
        // Replace a cancelled scope from a previous stopServer()/onDestroy() so the
        // new lifecycle gets a working CoroutineScope. When that happens we also need
        // to re-launch the sweep loops on the new scope.
        if (!scope.isActive) {
            scope = CoroutineScope(Dispatchers.Default + SupervisorJob())
            loopsStarted = false
            Log.d(TAG, "BaleServerService: rebuilt cancelled scope")
        }
        instance  = this
        isRunning = true
        startForeground(NOTIF_ID, buildNotification())

        val prefs = getSharedPreferences("config", MODE_PRIVATE)
        AdmissionStore.init(prefs)
        BlacklistStore.init(prefs)
        debug           = prefs.getBoolean("packet_debug",     false)

        // Always re-register; idempotent and ensures the latest lambda is in place
        // even if onStartCommand is called multiple times for the same instance.
        BaleConnection.onCallReceived = { callId, call ->
            // Route through the live `instance`, not the captured one — if this
            // service has been stopped and replaced, the captured `scope` would be
            // dead and the launch would silently no-op.
            val live = instance
            if (live == null || !live.scope.isActive) {
                Log.w(TAG, "Server: callReceived $callId arrived but service scope is gone (instance=${live != null})")
            } else {
                live.scope.launch { live.checkAndHandleCall(callId, call) }
            }
        }
        // The peer may hang up before the LiveKit ParticipantDisconnected event arrives
        // (or before the user has even decided on a pending call). React to the WS
        // callEnded so stale clients/notifications get cleaned up immediately.
        BaleConnection.onCallEnded = { callId ->
            val live = instance
            if (live != null && live.scope.isActive) {
                live.scope.launch { live.onCallEndedRemote(callId) }
            }
        }

        if (!loopsStarted) {
            loopsStarted = true
            scope.launch { pendingSweepLoop() }
            scope.launch { statsLoop() }
        }

        // Bring up the WS if the rules allow (i.e., the user hasn't pressed Disconnect
        // in server mode). Goes through reconcile() so we don't override the sticky flag.
        BaleConnection.reconcile()

        return START_STICKY
    }

    private suspend fun checkAndHandleCall(callId: Long, call: CallEntity?) {
        val callerId = call?.callerId ?: 0L
        Log.d(TAG, "Server: incoming call $callId callerId=$callerId allowed=${AdmissionStore.isAllowed(callerId)}")

        // Bale fans out two updates per incoming call: callReceived (52810, sometimes
        // with an empty participants list → callerId=0) and callStarted (52807, with
        // adminUid). The order isn't guaranteed. If we get the callerId=0 variant
        // first, defer — creating a pending entry now would surface as "unknown
        // caller" in the UI. The follow-up will carry the real caller id.
        if (callerId == 0L) {
            Log.d(TAG, "Server: callId=$callId arrived without callerId — deferring (waiting for paired update)")
            return
        }

        // Blocked callers are rejected silently — no notification, no pending entry.
        // Their last-known disconnect already showed up in the UI; this is just the
        // gate that enforces "we said we were done with you".
        if (BlacklistStore.isBlocked(callerId)) {
            Log.d(TAG, "Server: rejecting blacklisted callerId=$callerId (callId=$callId)")
            BaleConnection.client?.discardCall(callId)
            return
        }

        // Capacity gate. Applies to allowed and not-yet-allowed callers alike — a
        // pending entry queued past the cap would just stall waiting for a slot
        // that may never open. Rejection is silent (no blacklist) so the caller is
        // free to re-call once a slot frees up.
        val maxClients = getMaxClients(getSharedPreferences("config", MODE_PRIVATE))
        if (clients.size >= maxClients) {
            Log.d(TAG, "Server: rejecting callerId=$callerId — at capacity ${clients.size}/$maxClients")
            BaleConnection.client?.discardCall(callId)
            return
        }

        if (AdmissionStore.isAllowed(callerId)) {
            // New call from the same caller always wins — handleCall replaces any
            // existing client locally. Clear any leftover pending entry first so
            // the UI doesn't show a stale "pending" row for an already-accepted
            // client (can happen if admission state changed mid-flight).
            if (pendingMap.remove(callId) != null) {
                pendingSnapshot = pendingMap.values.toList()
                cancelPendingNotificationIfEmpty()
                updateNotification()
            }
            handleCall(callId, call)
        } else {
            // If there's already a pending request from the same caller, replace it.
            val dup = pendingMap.values.firstOrNull { it.callerId == callerId }
            if (dup != null) {
                Log.d(TAG, "Server: replacing duplicate pending call ${dup.callId} from callerId=$callerId")
                pendingMap.remove(dup.callId)
                BaleConnection.client?.discardCall(dup.callId)
            }
            // Resolve the caller name synchronously before posting so the
            // notification reads "Joe wants to connect" on first appearance.
            // Cached after first hit; only the first new caller per service
            // lifetime pays the contact-list HTTP fetch.
            val resolvedName = if (callerId != 0L) {
                try { BaleConnection.client?.loadUserName(callerId.toInt()) } catch (_: Exception) { null }
            } else null
            Log.d(TAG, "Server: pending callerId=$callerId resolved='${resolvedName ?: "<null>"}'")
            val pending = PendingCall(callId, callerId, call, callerName = resolvedName)
            pendingMap[callId] = pending
            pendingSnapshot = pendingMap.values.toList()
            updateNotification()
            showPendingNotification(callerId, callerName = resolvedName)
        }
    }

    private suspend fun doAcceptPending(callId: Long, addToList: Boolean) {
        val pending = pendingMap.remove(callId) ?: return
        pendingSnapshot = pendingMap.values.toList()
        // Re-check capacity at accept time. The caller might have been queued
        // at the limit; in the time since, other slots may have filled up.
        val maxClients = getMaxClients(getSharedPreferences("config", MODE_PRIVATE))
        if (clients.size >= maxClients) {
            Log.d(TAG, "Server: cannot accept pending $callId — at capacity ${clients.size}/$maxClients")
            cancelPendingNotificationIfEmpty()
            updateNotification()
            BaleConnection.client?.discardCall(callId)
            return
        }
        if (addToList && pending.callerId != 0L) AdmissionStore.add(pending.callerId)
        cancelPendingNotificationIfEmpty()
        updateNotification()
        handleCall(callId, pending.entity)
    }

    private suspend fun doRejectPending(callId: Long, addToBlacklist: Boolean = false) {
        val pending = pendingMap.remove(callId) ?: return
        pendingSnapshot = pendingMap.values.toList()
        cancelPendingNotificationIfEmpty()
        updateNotification()
        Log.d(TAG, "Server: rejecting call $callId callerId=${pending.callerId} block=$addToBlacklist")
        BaleConnection.client?.discardCall(callId)
        // Only the user's explicit Reject in the pending notification flows in
        // here with addToBlacklist=true. Sweep timeout and bulk-WS-teardown
        // paths leave the caller out of the blacklist — those aren't user
        // rejections, just side effects.
        if (addToBlacklist && pending.callerId != 0L) BlacklistStore.add(pending.callerId)
    }

    private suspend fun handleCall(callId: Long, incomingCall: CallEntity?) {
        Log.d(TAG, "Server: handling call $callId hasEntity=${incomingCall != null}")
        val ws = BaleConnection.client ?: return

        val accepted = ws.acceptCall(callId) ?: run { Log.w(TAG, "Server: acceptCall failed for $callId"); return }
        val isLivekit = incomingCall?.isLivekit == true || accepted.isLivekit
        Log.d(TAG, "Server: acceptCall done isLivekit=$isLivekit token.len=${accepted.token.length}")
        if (!isLivekit || accepted.token.isEmpty()) { Log.w(TAG, "Server: no LK creds for $callId"); return }

        val callerId = incomingCall?.callerId ?: 0L
        // Dedup by callerId: if the same caller already has an active client
        // (e.g., reconnected before we received the previous callEnded, or the
        // LiveKit ParticipantDisconnected hasn't fired yet), tear the old one
        // down. Local cleanup only — Bale's discardCall scopes at the
        // caller↔callee session level and would kill the new call too.
        if (callerId != 0L) {
            val existing = clients.values.firstOrNull { it.callerId == callerId }
            if (existing != null) {
                Log.d(TAG, "Server: replacing existing client ${existing.callId} from callerId=$callerId (local cleanup only)")
                cleanupClientLocal(existing.callId)
            }
        }

        // Resolve caller name now so both connect AND disconnect events show
        // the same label. loadUserName caches after first hit, so subsequent
        // calls are effectively free.
        val callerName: String? = if (callerId != 0L) {
            try { ws.loadUserName(callerId.toInt()) } catch (_: Exception) { null }
        } else null

        acceptAndStart(callId, callerId, callerName, accepted.url, accepted.token)
    }

    /** Builds the Client / transport / NAT-side tunnel for an accepted call.
     *  Called by handleCall once LK creds are in hand from the acceptCall RPC. */
    private suspend fun acceptAndStart(
        callId: Long, callerId: Long, callerName: String?,
        url: String, token: String,
    ) {
        val transport = LkTunnel()
        val client = Client(callId, callerId, transport, resolvedName = callerName)

        transport.onDisconnected = {
            Log.d(TAG, "Server: client $callId disconnected")
            val removed = clients.remove(callId)?.also { it.transport.disconnect() }
            clientCount = clients.size
            rebuildSnapshot()
            updateNotification()
            postClientEvent(callerId, "disconnected", removed?.resolvedName ?: callerName)
        }

        clients[callId] = client
        clientCount = clients.size
        rebuildSnapshot()
        updateNotification()
        postClientEvent(callerId, "connected", callerName)

        Log.d(TAG, "Server: joining LK room for call $callId")
        // Rust handles the LK data channel internally — once connect returns,
        // inbound packets flow Rust → NAT → host sockets and outbound flow
        // back the other way. If connect throws (ICE failure, peer never
        // joined within Rust's PEER_WAIT_MS, etc.) we tear the call down
        // cleanly so we don't leak the tunnel or leave UI stale.
        try {
            transport.connect(url, token)
            // LK is up — pick server mode on the underlying tunnel so the
            // Rust shim wires the NAT dispatcher for this call.
            transport.startServer()
        } catch (e: Exception) {
            Log.w(TAG, "Server: transport.connect failed for $callId: ${e::class.simpleName}: ${e.message}")
            try { transport.disconnect() } catch (_: Exception) {}
            clients.remove(callId)
            clientCount = clients.size
            rebuildSnapshot()
            updateNotification()
            try { BaleConnection.client?.discardCall(callId) } catch (_: Exception) {}
            postClientEvent(callerId, "disconnected", callerName)
        }
    }

    // Auto-reject pending calls that have been waiting too long — the caller has likely
    // hung up by now and the notification is just clutter.
    private suspend fun pendingSweepLoop() {
        while (true) {
            delay(PENDING_CHECK_MS)
            val now    = System.currentTimeMillis()
            val expired = pendingMap.values.filter { now - it.receivedAt > PENDING_TIMEOUT_MS }
            for (p in expired) {
                Log.d(TAG, "Server: pending call ${p.callId} timed out — auto-rejecting")
                doRejectPending(p.callId)
            }
        }
    }

    // Called when the WS reports that a call ended (peer hung up, network drop, etc.).
    // Tear down the matching client or pending entry so we don't leak state until the
    // 5-minute idle sweep or a LiveKit-side event finally fires.
    private suspend fun onCallEndedRemote(callId: Long) {
        if (clients.containsKey(callId)) {
            Log.d(TAG, "Server: callEnded $callId — tearing down active client")
            doDisconnect(callId)
        }
        if (pendingMap.containsKey(callId)) {
            Log.d(TAG, "Server: callEnded $callId — dropping pending entry (caller hung up)")
            pendingMap.remove(callId)
            pendingSnapshot = pendingMap.values.toList()
            cancelPendingNotificationIfEmpty()
            updateNotification()
        }
    }

    private suspend fun statsLoop() {
        while (true) {
            delay(STATS_REFRESH_MS)
            if (clients.isNotEmpty()) rebuildSnapshot()
        }
    }


    private fun rebuildSnapshot() {
        clientSnapshot = clients.values.map { c ->
            // [rxPkts, rxBytes, txPkts, txBytes] — atomics on the
            // native side, lock-free read. May be null in the brief
            // window between connect attempt and startServer; fall
            // back to zeros so the UI doesn't blank.
            val s = c.transport.stats() ?: longArrayOf(0, 0, 0, 0)
            ClientInfo(
                callId       = c.callId,
                callerId     = c.callerId,
                connectedAt  = c.connectedAt,
                rxPkts       = s[0],
                rxBytes      = s[1],
                txPkts       = s[2],
                txBytes      = s[3],
                lkStats      = c.transport.lastStats,
                packetStats  = c.transport.flowStats()?.let(PacketStats::fromLongs),
            )
        }.sortedBy { it.connectedAt }
    }

    private suspend fun doDisconnect(callId: Long) {
        clients.remove(callId)?.also {
            Log.d(TAG, "Server: forcibly disconnecting $callId")
            BaleConnection.client?.discardCall(callId)
            // transport.disconnect() closes the LkTunnel handle, whose
            // Drop tears down the NAT session AND the LK side in one
            // shot. Order matters for the inverse case (cleanup-after-
            // crash) but not here.
            it.transport.disconnect()
            clientCount = clients.size
            rebuildSnapshot()
            updateNotification()
            postClientEvent(it.callerId, "disconnected", it.resolvedName)
        }
    }

    // Like doDisconnect but skips the discardCall RPC. Used for dedup-replace where
    // the "old" call may have already ended on the peer's side; sending discardCall
    // for it triggers Bale to also end the *new* call we're about to accept (Bale
    // appears to scope discardCall at the caller↔callee session level, not per-callId).
    private fun cleanupClientLocal(callId: Long) {
        clients.remove(callId)?.also {
            Log.d(TAG, "Server: local cleanup of $callId")
            runCatching { it.transport.disconnect() }
            clientCount = clients.size
            rebuildSnapshot()
            updateNotification()
        }
    }

    private fun stopServer() {
        Log.d(TAG, "BaleServerService: stopping")
        isRunning       = false
        clientCount     = 0
        clientSnapshot  = emptyList()
        pendingSnapshot = emptyList()
        loopsStarted    = false
        // Only clear the global callback registration if `this` is still the
        // active instance — otherwise a concurrent onStartCommand for a successor
        // service may have already installed its lambdas, and nulling them here
        // would silently break the new service.
        if (instance === this) {
            instance        = null
            BaleConnection.onCallReceived = null
            BaleConnection.onCallEnded    = null
        }
        // Notify all connected and pending clients that the call is ended so their VPNs stop.
        val ws = BaleConnection.client
        val allCallIds = clients.keys.toList() + pendingMap.keys.toList()
        if (ws != null && allCallIds.isNotEmpty()) {
            CoroutineScope(Dispatchers.IO).launch {
                allCallIds.forEach { id -> try { ws.discardCall(id) } catch (_: Exception) {} }
            }
        }
        clients.values.forEach { it.transport.disconnect() }
        clients.clear()
        pendingMap.clear()
        cancelPendingNotification()
        scope.cancel()
        stopSelf()
    }

    override fun onDestroy() { Log.d(TAG, "BaleServerService: onDestroy"); stopServer(); super.onDestroy() }
    override fun onBind(intent: Intent?) = null

    // ── Notifications ─────────────────────────────────────────────────────────

    private fun ensureChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val mgr = getSystemService(NotificationManager::class.java)
            if (mgr.getNotificationChannel(CHANNEL) == null) {
                val ch = NotificationChannel(CHANNEL, "VPN Server", NotificationManager.IMPORTANCE_LOW)
                ch.setShowBadge(false)
                mgr.createNotificationChannel(ch)
            }
            if (mgr.getNotificationChannel(ALERT_CHANNEL) == null) {
                val ch = NotificationChannel(ALERT_CHANNEL, "Connection Requests", NotificationManager.IMPORTANCE_HIGH)
                mgr.createNotificationChannel(ch)
            }
        }
    }

    private fun buildNotification(): Notification {
        ensureChannel()
        // The WS is the only way incoming-call updates reach the server. If it's
        // down, surface that — otherwise the body just shows the live state when
        // there's something interesting to report (clients connected or pending).
        val wsAttached = BaleConnection.client != null
        val wsReady    = BaleConnection.isReady
        val text = when {
            !wsAttached -> "WebSocket disconnected — no incoming calls"
            !wsReady    -> "Reconnecting WebSocket… (no incoming calls)"
            clientCount > 0 || pendingMap.isNotEmpty() -> buildList {
                if (clientCount > 0)         add("$clientCount connected")
                if (pendingMap.isNotEmpty()) add("${pendingMap.size} pending")
            }.joinToString(" • ")
            else -> ""  // idle — no body text, just the title
        }
        val b = Notification.Builder(this, CHANNEL)
            .setContentTitle("Bale VPN — Server")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setOngoing(true)
        if (text.isNotEmpty()) b.setContentText(text)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S)
            b.setForegroundServiceBehavior(Notification.FOREGROUND_SERVICE_IMMEDIATE)
        return b.build()
    }

    private fun updateNotification() {
        getSystemService(NotificationManager::class.java).notify(NOTIF_ID, buildNotification())
    }

    private fun showPendingNotification(callerId: Long, callerName: String?) {
        ensureChannel()
        val callerLabel = when {
            callerName != null  -> callerName
            callerId   != 0L    -> "ID $callerId"
            else                -> "unknown caller"
        }
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_SINGLE_TOP or Intent.FLAG_ACTIVITY_CLEAR_TOP
        }
        val pi = PendingIntent.getActivity(this, PENDING_NOTIF_ID, intent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)
        val n = Notification.Builder(this, ALERT_CHANNEL)
            .setContentTitle("Bale VPN — Connection Request")
            .setContentText("$callerLabel wants to connect")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentIntent(pi)
            .setAutoCancel(true)
            .build()
        getSystemService(NotificationManager::class.java).notify(PENDING_NOTIF_ID, n)
    }

    private fun cancelPendingNotificationIfEmpty() {
        if (pendingMap.isEmpty()) cancelPendingNotification()
    }

    private fun cancelPendingNotification() {
        getSystemService(NotificationManager::class.java).cancel(PENDING_NOTIF_ID)
    }

    // Transient connect/disconnect alert. Caller passes the pre-resolved name
    // when available (handleCall does the lookup once at connect time, then
    // disconnect callbacks use the cached value on Client.resolvedName). Falls
    // back to a fresh lookup, then to "ID $callerId" if everything fails.
    private fun postClientEvent(callerId: Long, event: String, knownName: String? = null) {
        scope.launch {
            val name = knownName ?: if (callerId != 0L) {
                try { BaleConnection.client?.loadUserName(callerId.toInt()) } catch (_: Exception) { null }
            } else null
            val label = name?.takeIf { it.isNotBlank() }
                ?: if (callerId != 0L) "ID $callerId" else "unknown caller"
            Log.d(TAG, "Server: postClientEvent callerId=$callerId resolved='$label' event=$event")
            showClientEventNotification(callerId, label, event)
        }
    }

    private fun showClientEventNotification(callerId: Long, label: String, event: String) {
        val n = Notification.Builder(this, CHANNEL)
            .setContentTitle("Bale VPN — Server")
            .setContentText("$label $event")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setAutoCancel(true)
            .build()
        // Stable per-caller id so a "disconnected" alert replaces an earlier
        // "connected" alert from the same caller — the user sees the latest
        // state, not a stack of stale events.
        val id = CLIENT_EVENT_NOTIF_BASE + (callerId.rem(10_000).toInt().let { if (it < 0) it + 10_000 else it })
        getSystemService(NotificationManager::class.java).notify(id, n)
    }
}
