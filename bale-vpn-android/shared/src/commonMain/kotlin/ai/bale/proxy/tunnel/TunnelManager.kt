package ai.bale.proxy.tunnel

import ai.bale.proxy.bale.BaleWsClient
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import kotlin.coroutines.CoroutineContext

data class TunnelConfig(
    val serverPeerId:   Int,
    val serverPeerType: Int = 1,
)

// Max wait for the server's callAccepted push after StartCall — covers manual admission (server user has to tap "allow" in a notification).
private const val CALL_ACCEPTED_TIMEOUT_MS = 90_000L
// Max wait for the peer to show up in the LK room after callAccepted.
private const val PEER_TIMEOUT_MS         = 5_000L

class TunnelManager(
    /** Resolved at every (re)connect attempt — lets the caller bring up a torn-down
     *  WS lazily (e.g., after the app was backgrounded and the lifecycle observer
     *  disconnected it). Return null to abort with no further retries. */
    private val getBale:       suspend () -> BaleWsClient?,
    dispatcher:                CoroutineContext = Dispatchers.Default,
    private val log:           (String) -> Unit = ::println,
    private val newTransport:  () -> DataTransport,
    /** Fired once after every successful (re)connect — i.e. each time
     *  startWebRtcTunnel returns true (initial connect + every reconnect).
     *  Used by callers that want to release the WS now that signaling is done. */
    private val onTunnelReady: () -> Unit = {},
) {
    var config:                TunnelConfig?                       = null
    var onPacket:              ((ByteArray) -> Unit)?              = null
    /** Called when the tunnel gives up. `rejected = true` means the server peer
     *  ended one of our calls (admin Reject, peer hangup, etc.); `rejected =
     *  false` means we exhausted reconnect attempts. The UI uses this to show
     *  a clear "Server rejected" notification instead of a generic failure. */
    var onPermanentDisconnect: ((rejected: Boolean) -> Unit)?      = null

    private val scope            = CoroutineScope(dispatcher + SupervisorJob())
    private var transport        = newTransport()
    // @Volatile because it's written from at least three thread sources —
    // stop() (caller's thread), the addOnCallEnded callback (WS reader's
    // dispatcher), and transport.onDisconnected (LiveKit SDK thread) — and
    // read from tight `while (!stopped) delay(...)` loops where the JIT
    // could otherwise hoist the read.
    @Volatile
    private var stopped          = false
    /** The callId of the in-flight call. */
    @Volatile
    private var currentCallId: Long = 0L
    /** Held while a connect cycle is in flight; tryLock() guards against
     *  concurrent invocations (e.g., two onDisconnected events from different
     *  threads racing into the same handler). */
    private val connectMutex    = Mutex()
    private var callEndedRemover:    (() -> Unit)? = null
    private var callAcceptedRemover: (() -> Unit)? = null

    fun stop() {
        stopped = true
        callEndedRemover?.invoke();    callEndedRemover    = null
        callAcceptedRemover?.invoke(); callAcceptedRemover = null
        transport.disconnect()
        scope.coroutineContext.cancelChildren()
    }

    /** `off`/`len` let the TUN read loop pass its shared buffer directly without
     *  an intermediate `copyOf` — the framing alloc absorbs the slice in one go.
     *  Default args keep no-offset callers (e.g. server NAT egress) unchanged. */
    fun sendPacket(data: ByteArray, off: Int = 0, len: Int = data.size) {
        transport.send(lkEncodeIp(data, off, len))
    }

    /** Single connect attempt — no auto-retry. On any failure (callAccepted
     *  timeout, peer didn't join, server rejected) we fire onPermanentDisconnect
     *  and let the user decide whether to try again. Re-entrant guard: a second
     *  call while one is in flight returns false immediately. */
    suspend fun connect(): Boolean {
        if (stopped) return false
        if (!connectMutex.tryLock()) {
            log("[BaleProxy] connect: already in progress, skipping")
            return false
        }
        try {
            transport.disconnect()
            transport = newTransport()
            val ok = try {
                startWebRtcTunnel()
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                log("[BaleProxy] connect: failed — ${e::class.simpleName}: ${e.message}")
                false
            }
            if (!ok && !stopped) onPermanentDisconnect?.invoke(/* rejected = */ false)
            return ok
        } finally {
            connectMutex.unlock()
        }
    }

    /** StartCall → wait for callAccepted → join LK → wait for peer → tunnel ready.
     *  Returns false on failure. callEnded for the current call trips a permanent
     *  stop with rejected=true. */
    private suspend fun startWebRtcTunnel(): Boolean {
        val cfg = config ?: run { log("[BaleProxy] WebRTC: no config"); return false }
        val bale = getBale() ?: run { log("[BaleProxy] WebRTC: WS unavailable"); return false }
        if (!bale.ready) {
            var retries = 0
            while (!bale.ready && retries++ < 20) delay(500)
            if (!bale.ready) { log("[BaleProxy] WebRTC: WS not ready"); return false }
        }
        log("[BaleProxy] WebRTC: calling peer ${cfg.serverPeerId}…")
        val call = bale.startCall(cfg.serverPeerId, cfg.serverPeerType)
            ?: run { log("[BaleProxy] WebRTC: StartCall failed"); return false }
        if (!call.isLivekit || call.token.isEmpty()) {
            log("[BaleProxy] WebRTC: no LiveKit credentials in response")
            return false
        }
        currentCallId = call.callId

        // callEnded for the current call — server explicitly rejected/hung up.
        // Trip permanent stop regardless of which phase we're in.
        callEndedRemover?.invoke()
        callEndedRemover = bale.addOnCallEnded { callId ->
            if (callId == currentCallId && !stopped) {
                log("[BaleProxy] WebRTC: callEnded for current callId=$callId — server rejected, stopping")
                scope.launch {
                    stopped = true
                    transport.disconnect()
                    onPermanentDisconnect?.invoke(/* rejected = */ true)
                }
            }
        }

        // Wait for callAccepted from the server before joining the LK room.
        // If callEnded arrives first, the listener above already triggered the
        // permanent stop — we'll see stopped=true and bail out cleanly.
        log("[BaleProxy] WebRTC: waiting for callAccepted…")
        val accepted = CompletableDeferred<Boolean>()
        callAcceptedRemover?.invoke()
        callAcceptedRemover = bale.addOnCallAccepted { callId ->
            if (callId == currentCallId) accepted.complete(true)
        }
        try {
            withTimeout(CALL_ACCEPTED_TIMEOUT_MS) {
                while (!accepted.isCompleted && !stopped) {
                    delay(200)
                }
            }
        } catch (e: TimeoutCancellationException) {
            log("[BaleProxy] WebRTC: callAccepted timeout — server didn't accept in ${CALL_ACCEPTED_TIMEOUT_MS / 1000}s")
            return false
        }
        if (stopped) return false
        log("[BaleProxy] WebRTC: callAccepted — joining ${call.url}")

        transport.onData         = { data -> (lkDecode(data) as? TFrame.Ip)?.let { onPacket?.invoke(it.data) } }
        transport.onDisconnected = {
            // No auto-reconnect — fire permanent stop and let the user retry
            // manually via the disconnect notification.
            if (!stopped) {
                stopped = true
                scope.launch { onPermanentDisconnect?.invoke(/* rejected = */ false) }
            }
        }
        transport.connect(call.url, call.token)

        // Wait for the peer to actually appear in the LK room. With
        // callAccepted received, the server is racing in — sub-second on a
        // healthy network. 2 s is enough margin.
        val deadline = System.currentTimeMillis() + PEER_TIMEOUT_MS
        while (System.currentTimeMillis() < deadline && scope.isActive && !stopped) {
            if (transport.hasPeer) break
            delay(200)
        }
        if (!transport.hasPeer || stopped) {
            log("[BaleProxy] WebRTC: no peer joined after ${PEER_TIMEOUT_MS / 1000}s — aborting attempt")
            transport.disconnect()
            return false
        }

        log("[BaleProxy] WebRTC: tunnel ready")
        onTunnelReady()
        return true
    }
}
