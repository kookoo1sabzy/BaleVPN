package ai.bale.proxy

import ai.bale.proxy.bale.CallEntity
import ai.bale.proxy.livekit.AndroidLiveKitTransport
import ai.bale.proxy.tunnel.DataTransport
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
private const val IDLE_TIMEOUT_MS    = 5 * 60 * 1000L
private const val IDLE_CHECK_MS      = 60 * 1000L
// Auto-reject pending calls older than this. The caller has likely given up by now and
// may already have hung up on their side; we don't want a stale notification to linger.
private const val PENDING_TIMEOUT_MS = 60 * 1000L
// How long a freshly-accepted client gets to complete LiveKit peer-join before we'll
// consider replacing it with a new call from the same caller. Prevents reconnect-storm
// thrashing where a misbehaving client keeps starting new calls before its previous
// LiveKit room can finish setting up.
private const val ESTABLISH_GRACE_MS = 8 * 1000L

class BaleServerService : Service() {

    data class ClientInfo(
        val callId:       Long,
        val callerId:     Long,
        val connectedAt:  Long,
        val lastActivity: Long,
        val rxPkts: Long, val rxBytes: Long,
        val txPkts: Long, val txBytes: Long,
        val limitUpBps:   Long    = 0,
        val limitDownBps: Long    = 0,
        val isThrottled:  Boolean = false,
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
        @Volatile var lastActivity: Long = System.currentTimeMillis(),
    )

    private val clients     = ConcurrentHashMap<Long, Client>()
    private val pendingMap  = ConcurrentHashMap<Long, PendingCall>()
    private val callerLimits = ConcurrentHashMap<Long, Pair<Long, Long>>()  // callerId → (upBps, downBps)

    companion object {
        const val ACTION_STOP = "ai.bale.proxy.SERVER_STOP"
        private const val NOTIF_ID         = 2
        private const val PENDING_NOTIF_ID = 3
        private const val CHANNEL          = "bale_server"
        // Default per-client cap. Stored as bytes/sec (the token-bucket charges packet sizes
        // in bytes), but expressed to the user in kilobits/sec. 37_500 B/s = 300 kbps.
        // Every client is rate-limited; there is no "unlimited".
        const val DEFAULT_LIMIT_BPS: Long = 37_500L   // 300 kbps

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
            instance?.scope?.launch { instance?.doRejectPending(callId) }
        }

        fun setClientLimit(callId: Long, upBps: Long, downBps: Long) {
            val inst = instance ?: return
            inst.clients[callId]?.also { c ->
                c.processor.limitUpBps   = upBps
                c.processor.limitDownBps = downBps
                if (c.callerId != 0L) inst.callerLimits[c.callerId] = upBps to downBps
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
            scope.launch { idleSweepLoop() }
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

        if (AdmissionStore.isAllowed(callerId)) {
            // Throttle reconnect storms: if the same caller already has an active
            // client whose LiveKit room hasn't yet completed peer-join, ignore this
            // new call instead of accepting and immediately replacing it. Replacing
            // before the previous LK can establish creates an endless cycle where the
            // peer never gets a chance to actually join any of the rooms we accepted.
            val existing = clients.values.firstOrNull { it.callerId == callerId }
            if (existing != null && !existing.transport.hasPeer) {
                val ageMs = System.currentTimeMillis() - existing.connectedAt
                if (ageMs < ESTABLISH_GRACE_MS) {
                    Log.d(TAG, "Server: dropping call $callId — existing client ${existing.callId} from callerId=$callerId still establishing (age=${ageMs}ms, no peer yet). Letting it finish first.")
                    return
                }
            }
            // If a previous variant of the same call somehow created a pending entry
            // (e.g., admission-list state changed mid-flight), clear it before handing
            // off to handleCall so the UI doesn't show a leftover "pending" row for an
            // already-accepted client.
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
            val pending = PendingCall(callId, callerId, call)
            pendingMap[callId] = pending
            pendingSnapshot = pendingMap.values.toList()
            updateNotification()
            showPendingNotification(callerId, callerName = null)
            scope.launch { fetchAndApplyName(callId, callerId) }
        }
    }

    private suspend fun fetchAndApplyName(callId: Long, callerId: Long) {
        val name = BaleConnection.client?.loadUserName(callerId.toInt()) ?: return
        pendingMap.computeIfPresent(callId) { _, v -> v.copy(callerName = name) }
        pendingSnapshot = pendingMap.values.toList()
        showPendingNotification(callerId, callerName = name)
    }

    private suspend fun doAcceptPending(callId: Long, addToList: Boolean) {
        val pending = pendingMap.remove(callId) ?: return
        pendingSnapshot = pendingMap.values.toList()
        if (addToList && pending.callerId != 0L) AdmissionStore.add(pending.callerId)
        cancelPendingNotificationIfEmpty()
        updateNotification()
        handleCall(callId, pending.entity)
    }

    private suspend fun doRejectPending(callId: Long) {
        val pending = pendingMap.remove(callId) ?: return
        pendingSnapshot = pendingMap.values.toList()
        cancelPendingNotificationIfEmpty()
        updateNotification()
        Log.d(TAG, "Server: rejecting call $callId callerId=${pending.callerId}")
        BaleConnection.client?.discardCall(callId)
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
            onSend = { pkt ->
                clients[callId]?.also { it.lastActivity = System.currentTimeMillis() }
                transport.send(lkEncode(TFrame.Ip(pkt)))
            },
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

        val client = Client(callId, callerId, transport, processor)

        transport.onData = { data ->
            client.lastActivity = System.currentTimeMillis()
            (lkDecode(data) as? TFrame.Ip)?.let { client.processor.process(it.data) }
        }
        transport.onDisconnected = {
            Log.d(TAG, "Server: client $callId disconnected")
            clients.remove(callId)?.also { it.processor.close() }
            clientCount = clients.size
            rebuildSnapshot()
            updateNotification()
        }

        clients[callId] = client
        clientCount = clients.size
        rebuildSnapshot()
        updateNotification()

        Log.d(TAG, "Server: joining LK room for call $callId")
        transport.connect(accepted.url, accepted.token)
    }

    private suspend fun idleSweepLoop() {
        while (true) {
            delay(IDLE_CHECK_MS)
            val now = System.currentTimeMillis()
            clients.values
                .filter { now - it.lastActivity > IDLE_TIMEOUT_MS }
                .forEach { c ->
                    Log.d(TAG, "Server: idle timeout for call ${c.callId}")
                    doDisconnect(c.callId)
                }
        }
    }

    // Auto-reject pending calls that have been waiting too long — the caller has likely
    // hung up by now and the notification is just clutter.
    private suspend fun pendingSweepLoop() {
        while (true) {
            delay(15_000L)
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
            delay(500)
            if (clients.isNotEmpty()) rebuildSnapshot()
        }
    }

    private fun rebuildSnapshot() {
        clientSnapshot = clients.values.map { c ->
            ClientInfo(
                callId       = c.callId,
                callerId     = c.callerId,
                connectedAt  = c.connectedAt,
                lastActivity = c.lastActivity,
                rxPkts       = c.processor.rxPkts,
                rxBytes      = c.processor.rxBytes,
                txPkts       = c.processor.txPkts,
                txBytes      = c.processor.txBytes,
                limitUpBps   = c.processor.limitUpBps,
                limitDownBps = c.processor.limitDownBps,
                isThrottled  = c.processor.isThrottled,
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
        }
    }

    private fun buildNotification(): Notification {
        ensureChannel()
        // The WS is the only way incoming-call updates reach the server. If it's down
        // the service can't accept anyone, so surface that prominently — otherwise the
        // notification reads "Waiting for clients…" while we're actually deaf.
        val wsAttached = BaleConnection.client != null
        val wsReady    = BaleConnection.isReady
        val text = when {
            !wsAttached                   -> "WebSocket disconnected — no incoming calls"
            !wsReady                      -> "Reconnecting WebSocket… (no incoming calls)"
            clientCount == 0 && pendingMap.isEmpty() -> "Waiting for clients…"
            else -> buildList {
                if (clientCount > 0)        add("$clientCount connected")
                if (pendingMap.isNotEmpty()) add("${pendingMap.size} pending")
            }.joinToString(" • ")
        }
        val b = Notification.Builder(this, CHANNEL)
            .setContentTitle("Bale VPN — Server")
            .setContentText(text)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setOngoing(true)
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
        val n = Notification.Builder(this, CHANNEL)
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
}
