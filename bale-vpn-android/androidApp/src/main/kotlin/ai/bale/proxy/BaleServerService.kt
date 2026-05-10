package ai.bale.proxy

import ai.bale.proxy.bale.CallEntity
import ai.bale.proxy.livekit.AndroidLiveKitTransport
import ai.bale.proxy.tunnel.DataTransport
import ai.bale.proxy.tunnel.LiveKitStats
import ai.bale.proxy.tunnel.TFrame
import ai.bale.proxy.tunnel.lkDecode
import ai.bale.proxy.tunnel.lkEncode
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
// Max wait for the caller to actually join our LK room after we acceptCall — covers Bale push + caller LK handshake + SDK propagation.
private const val PEER_JOIN_TIMEOUT_MS = 5_000L
// How often the UI snapshot loop refreshes per-client stats.
private const val STATS_REFRESH_MS   = 500L

class BaleServerService : Service() {

    data class ClientInfo(
        val callId:       Long,
        val callerId:     Long,
        val connectedAt:  Long,
        val rxPkts: Long, val rxBytes: Long,
        val txPkts: Long, val txBytes: Long,
        val limitUpBps:   Long    = 0,
        val limitDownBps: Long    = 0,
        val isThrottled:  Boolean = false,
        // Latest TCP/UDP/IP stats from this client's PacketProcessor (null until the
        // first snapshot has been computed). Read by ClientStatsActivity.
        val packetStats:  PacketStats? = null,
        // Latest WebRTC transport stats from this client's LiveKit room. Null when
        // the SDK hasn't reported a nominated candidate-pair yet (usually the first
        // ~1 s after connect).
        val lkStats:      LiveKitStats? = null,
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
        val transport:   DataTransport,
        val processor:   PacketProcessor,
        val connectedAt: Long = System.currentTimeMillis(),
        // Display name resolved at connect time; reused on disconnect so the
        // notification reads the same name even if the WS is being torn down
        // by the time disconnect fires.
        @Volatile var resolvedName: String? = null,
    )

    private val clients     = ConcurrentHashMap<Long, Client>()
    private val pendingMap  = ConcurrentHashMap<Long, PendingCall>()
    private val callerLimits = ConcurrentHashMap<Long, Pair<Long, Long>>()  // callerId → (upBps, downBps)

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
        // Default per-client cap. Stored as bytes/sec (the token-bucket charges packet sizes
        // in bytes), expressed to the user in kilobits/sec. 62_500 B/s = 500 kbps.
        // Every client is rate-limited; there is no "unlimited".
        const val DEFAULT_LIMIT_BPS: Long = 62_500L    // 500 kbps
        // Hard ceiling for per-caller overrides. The UI dialog clamps input here; AdmissionStore
        // clamps stored values too so a hand-edited shared_prefs/config.xml can't smuggle in a
        // 100 Mbps override.
        const val MAX_LIMIT_BPS:     Long = 125_000L   // 1000 kbps = 1 Mbps

        @Volatile var isRunning   = false
        @Volatile var clientCount = 0
        // Toggle verbose PacketProcessor diagnostics; setter propagates to live processors and persists.
        @Volatile var debug: Boolean = false
            set(value) {
                field = value
                val inst = instance
                inst?.clients?.values?.forEach { it.processor.debug = value }
                inst?.getSharedPreferences("config", MODE_PRIVATE)
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

        fun setClientLimit(callId: Long, upBps: Long, downBps: Long) {
            val inst = instance ?: return
            inst.clients[callId]?.also { c ->
                c.processor.limitUpBps   = upBps
                c.processor.limitDownBps = downBps
                if (c.callerId != 0L) {
                    inst.callerLimits[c.callerId] = upBps to downBps
                    // Persist only for admitted callers. AdmissionStore.setLimit returns
                    // false when the caller isn't in the allow-list — that's a session-only
                    // override and matches the user's "limits stick to admissions" mental model.
                    AdmissionStore.setLimit(c.callerId, upBps, downBps)
                }
            }
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
        // Hydrate per-caller limits from the merged admission store so a
        // service restart re-applies the same caps when those callers reconnect.
        callerLimits.clear()
        callerLimits.putAll(AdmissionStore.getAllLimits().filterValues { it.first > 0L || it.second > 0L })
        debug = prefs.getBoolean("packet_debug", false)

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

        val callerId  = incomingCall?.callerId ?: 0L
        // Dedup by callerId: if the same caller already has an active client (e.g.,
        // they reconnected before we received the callEnded for the previous call,
        // or the LiveKit ParticipantDisconnected event hasn't fired yet), tear down
        // the old entry first. Local-only cleanup (no discardCall) — Bale appears
        // to end ALL calls in the caller↔callee pair when discardCall fires for one
        // of them, which would also kill the brand-new call we're handling now.
        if (callerId != 0L) {
            val existing = clients.values.firstOrNull { it.callerId == callerId }
            if (existing != null) {
                Log.d(TAG, "Server: replacing existing client ${existing.callId} from callerId=$callerId with new $callId (local cleanup only)")
                cleanupClientLocal(existing.callId)
            }
        }
        val transport = AndroidLiveKitTransport(applicationContext)
        val processor = PacketProcessor(
            onSend = { pkt -> transport.send(lkEncode(TFrame.Ip(pkt))) },
            log = { msg -> Log.d(TAG, msg) },
        )
        processor.debug = debug
        // Every client is capped — start from the default, then apply a per-caller override
        // if one was set (only if positive; legacy 0 values mean "unlimited" which we no longer allow).
        processor.limitUpBps   = DEFAULT_LIMIT_BPS
        processor.limitDownBps = DEFAULT_LIMIT_BPS
        callerLimits[callerId]?.let { (up, down) ->
            if (up > 0L)   processor.limitUpBps   = up
            if (down > 0L) processor.limitDownBps = down
        }

        // Resolve the caller's display name now (sync) so we have it for both
        // the connect event AND the future disconnect event. loadUserName is
        // cached after first hit, so this is effectively free on subsequent
        // calls; the first call pays a single contact-list HTTP fetch.
        val callerName: String? = if (callerId != 0L) {
            try { ws.loadUserName(callerId.toInt()) } catch (_: Exception) { null }
        } else null

        val client = Client(callId, callerId, transport, processor, resolvedName = callerName)

        transport.onData = { data ->
            (lkDecode(data) as? TFrame.Ip)?.let { client.processor.process(it.data) }
        }
        transport.onDisconnected = {
            Log.d(TAG, "Server: client $callId disconnected")
            val removed = clients.remove(callId)?.also { it.processor.close() }
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
        transport.connect(accepted.url, accepted.token)

        // Watchdog: the LK session token can keep us connected for hours even
        // with nobody on the other side, so if the caller never actually joins
        // (e.g., their VPN was cancelled before the room handshake completed)
        // we tear the call down ourselves to free resources. The identity
        // check on `transport` ensures we don't kill a fresh client that
        // replaced this one in the meantime.
        scope.launch {
            delay(PEER_JOIN_TIMEOUT_MS)
            val current = clients[callId]
            if (current?.transport === transport && !transport.hasPeer) {
                Log.d(TAG, "Server: peer never joined call $callId — disconnecting")
                doDisconnect(callId)
            }
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
            ClientInfo(
                callId       = c.callId,
                callerId     = c.callerId,
                connectedAt  = c.connectedAt,
                rxPkts       = c.processor.rxPkts,
                rxBytes      = c.processor.rxBytes,
                txPkts       = c.processor.txPkts,
                txBytes      = c.processor.txBytes,
                limitUpBps   = c.processor.limitUpBps,
                limitDownBps = c.processor.limitDownBps,
                isThrottled  = c.processor.isThrottled,
                packetStats  = c.processor.lastSnapshot,
                lkStats      = c.transport.lastStats,
            )
        }.sortedBy { it.connectedAt }
    }

    private suspend fun doDisconnect(callId: Long) {
        clients.remove(callId)?.also {
            Log.d(TAG, "Server: forcibly disconnecting $callId")
            BaleConnection.client?.discardCall(callId)
            it.transport.disconnect()
            it.processor.close()
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
            runCatching { it.processor.close() }
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
        clients.values.forEach { it.transport.disconnect(); it.processor.close() }
        clients.clear()
        pendingMap.clear()
        callerLimits.clear()
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
