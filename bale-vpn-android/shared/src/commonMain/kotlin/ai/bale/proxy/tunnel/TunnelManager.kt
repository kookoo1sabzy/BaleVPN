package ai.bale.proxy.tunnel

import ai.bale.proxy.bale.BaleWsClient
import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext

data class TunnelConfig(
    val serverPeerId:   Int,
    val serverPeerType: Int = 1,
)

private const val MAX_RECONNECT_ATTEMPTS = 5
private const val PEER_TIMEOUT_MS        = 15_000L

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
    private var reconnecting     = false
    private var stopped          = false
    private val seenCallIds      = mutableSetOf<Long>()
    private var callEndedRemover: (() -> Unit)? = null

    fun stop() {
        stopped = true
        callEndedRemover?.invoke(); callEndedRemover = null
        transport.disconnect()
        scope.coroutineContext.cancelChildren()
    }

    fun sendPacket(data: ByteArray) {
        transport.send(lkEncode(TFrame.Ip(data)))
    }

    suspend fun startWebRtcTunnel(): Boolean {
        val cfg = config ?: run { log("[BaleProxy] WebRTC: no config"); return false }
        // Resolve the WS afresh on every (re)connect attempt — the previous one may
        // have been torn down by the lifecycle observer while the app was backgrounded.
        // getBale() is responsible for bringing it back up; we wait for it to be ready.
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
        seenCallIds.add(call.callId)
        // Stop the VPN if Bale signals that any call we initiated has ended.
        // Multiple reconnect cycles re-register; drop the previous registration first.
        // Re-subscribes against whatever WS instance is current right now — survives
        // disconnect/reconnect cycles since we're hooking into the live one.
        callEndedRemover?.invoke()
        callEndedRemover = bale.addOnCallEnded { callId ->
            if (callId in seenCallIds && !stopped) {
                log("[BaleProxy] WebRTC: callEnded for tracked callId=$callId — server rejected, stopping")
                scope.launch {
                    stopped = true
                    transport.disconnect()
                    onPermanentDisconnect?.invoke(/* rejected = */ true)
                }
            }
        }
        log("[BaleProxy] WebRTC: joining ${call.url}")
        transport.onData         = { data -> (lkDecode(data) as? TFrame.Ip)?.let { onPacket?.invoke(it.data) } }
        transport.onDisconnected = { if (!stopped) scope.launch { reconnect() } }
        transport.connect(call.url, call.token)

        // Wait for the server to join the room. If nobody appears within PEER_TIMEOUT_MS,
        // the server rejected or is not running — treat as a connection failure.
        val deadline = System.currentTimeMillis() + PEER_TIMEOUT_MS
        while (System.currentTimeMillis() < deadline && scope.isActive && !stopped) {
            if (transport.hasPeer) break
            delay(500)
        }
        if (!transport.hasPeer || stopped) {
            log("[BaleProxy] WebRTC: no peer joined after ${PEER_TIMEOUT_MS / 1000}s — aborting")
            transport.disconnect()
            return false
        }

        log("[BaleProxy] WebRTC: tunnel ready")
        onTunnelReady()
        return true
    }

    private suspend fun reconnect() {
        if (reconnecting || stopped) return
        reconnecting = true
        log("[BaleProxy] Reconnect: disconnected")
        try {
            transport.disconnect()
            var attempt = 0
            while (scope.isActive && !stopped) {
                attempt++
                if (attempt > MAX_RECONNECT_ATTEMPTS) {
                    log("[BaleProxy] Reconnect: giving up after $MAX_RECONNECT_ATTEMPTS attempts")
                    onPermanentDisconnect?.invoke(/* rejected = */ false)
                    break
                }
                val delaySec = minOf(attempt * 3, 30)
                log("[BaleProxy] Reconnect: attempt $attempt in ${delaySec}s…")
                delay(delaySec * 1_000L)
                transport = newTransport()
                try {
                    if (startWebRtcTunnel()) {
                        log("[BaleProxy] Reconnect: OK (attempt $attempt)")
                        break
                    }
                } catch (e: Exception) {
                    log("[BaleProxy] Reconnect: attempt $attempt failed — ${e::class.simpleName}: ${e.message}")
                }
            }
        } finally {
            reconnecting = false
        }
    }
}
