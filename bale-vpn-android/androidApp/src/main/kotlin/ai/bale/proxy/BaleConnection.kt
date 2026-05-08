package ai.bale.proxy

import ai.bale.proxy.bale.BaleWsClient
import ai.bale.proxy.bale.CallEntity
import android.content.Context
import android.util.Log
import io.ktor.client.*
import io.ktor.client.engine.okhttp.*
import io.ktor.client.plugins.websocket.*

private const val TAG = "BaleProxy"

/**
 * Owns the single Bale WebSocket and decides when it should be up.
 *
 * The desired state is a function of three inputs:
 *   - `mode` (read from prefs): "client" or "server"
 *   - `isForeground`: app process visibility (driven by ProcessLifecycleOwner)
 *   - `userInitiatedDisconnect`: sticky server-mode flag set by btnWs Disconnect
 *
 * Rules:
 *   - client mode → WS up iff app is foreground AND no VPN is currently running.
 *     A live VPN doesn't need WS for steady-state traffic (it flows on the LiveKit
 *     data channel). When the VPN needs WS for signaling — initial StartCall and
 *     reconnect attempts — `BaleVpnService.resolveWs()` brings it up explicitly,
 *     bypassing reconcile, and TunnelManager's onTunnelReady callback hands
 *     control back to reconcile which drops it again.
 *   - server mode → WS up iff `!userInitiatedDisconnect`, regardless of foreground;
 *     the server foreground service must stay reachable while the user has the
 *     app backgrounded so incoming calls can still be answered.
 *
 * `reconcile()` brings actual state in line with desired. Every event that could
 * change one of the inputs (lifecycle foreground/background, mode switch, btnWs
 * Connect/Disconnect) updates inputs first then calls reconcile().
 */
object BaleConnection {
    private var http: HttpClient? = null
    private lateinit var appContext: Context
    var client: BaleWsClient? = null
        private set

    val isReady get() = client?.ready == true

    // Set by BaleServerService while server mode is active.
    @Volatile var onCallReceived: ((Long, CallEntity?) -> Unit)? = null
    @Volatile var onCallEnded:    ((Long) -> Unit)?              = null

    /** Server-mode sticky disconnect intent. Process-scoped, ignored in client mode. */
    @Volatile var userInitiatedDisconnect: Boolean = false
    /** Driven by ProcessLifecycleOwner (BaleApp). Read by reconcile(). */
    @Volatile var isForeground: Boolean = false
    /** Set when Bale signals our token is dead (4401 close or 401/403 upgrade).
     *  MainActivity polls this in tick() and routes the user to relogin. */
    @Volatile var sessionExpired: Boolean = false

    private var callEndedRemover: (() -> Unit)? = null

    fun init(context: Context) { appContext = context.applicationContext }

    /** Bring the WS up or down to match the desired state. Idempotent. */
    fun reconcile() {
        if (!::appContext.isInitialized) return
        val prefs = appContext.getSharedPreferences("config", Context.MODE_PRIVATE)
        val token = prefs.getString("token", "").orEmpty()
        if (token.isEmpty()) return
        val mode = prefs.getString("mode", "client") ?: "client"
        val want = when (mode) {
            "server" -> !userInitiatedDisconnect
            else     -> isForeground && !BaleVpnService.isRunning
        }
        when {
            want  && client == null -> connect(token)
            !want && client != null -> disconnect()
        }
    }

    fun connect(token: String) {
        if (client != null) { Log.d(TAG, "BaleConnection.connect: already connected, skipping"); return }
        if (token.isBlank())  { Log.w(TAG, "BaleConnection.connect: empty token, skipping"); return }
        Log.d(TAG, "BaleConnection.connect: creating WS client")
        http   = HttpClient(OkHttp) { install(WebSockets) }
        val ws = BaleWsClient(
            httpClient      = http!!,
            accessToken     = token,
            log             = { msg -> Log.d(TAG, msg) },
            onCallReceived  = { callId, call ->
                val cb = BaleConnection.onCallReceived
                if (cb == null) Log.w(TAG, "BaleConnection: callReceived $callId but no subscriber registered")
                cb?.invoke(callId, call)
            },
        )
        // Token-expired path: wipe the saved token, drop the WS, raise the
        // sessionExpired flag for MainActivity.tick() to act on. Clearing the
        // token also makes reconcile() short-circuit (its empty-token guard
        // prevents an immediate re-dial with the same dead credential).
        ws.onTokenExpired = {
            Log.w(TAG, "BaleConnection: session expired — clearing token")
            appContext.getSharedPreferences("config", Context.MODE_PRIVATE)
                .edit().remove("token").apply()
            sessionExpired   = true
            callEndedRemover?.invoke(); callEndedRemover = null
            client = null
            http?.close(); http = null
        }
        ws.connect()
        callEndedRemover = ws.addOnCallEnded { id -> BaleConnection.onCallEnded?.invoke(id) }
        client = ws
    }

    fun disconnect() {
        Log.d(TAG, "BaleConnection.disconnect")
        // Don't null onCallReceived / onCallEnded — those are subscriptions installed
        // by BaleServerService and live for the service's lifetime, not the WS's.
        // Clearing them here would break a WS disconnect→reconnect cycle: the next
        // BaleWsClient would have no subscriber to dispatch incoming-call updates to.
        // The lambdas are designed to be safe when no service instance is registered
        // (they just log a warning and return).
        callEndedRemover?.invoke(); callEndedRemover = null
        client?.disconnect(); client = null
        http?.close();        http   = null
    }
}
