package ai.bale.proxy.tunnel

import ai.bale.proxy.bale.BaleWsClient
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import java.util.concurrent.atomic.AtomicBoolean
import kotlin.coroutines.CoroutineContext

/** Bale call-signaling impl: lazy-resolves the WS, places a StartCall, then
 *  immediately joins the LiveKit room with the returned credentials. We do
 *  NOT wait for Bale's `callAccepted` push — the server can take a while to
 *  decide (manual admission UI on the callee), and the LK room is already
 *  live as soon as StartCall returns. Joining straight away lets us:
 *    * surface the connection-attempt UI to the user without delay,
 *    * give the LK room a participant to look at on the server side.
 *
 *  If the call ends up rejected (Bale push `callEnded` for our callId), we
 *  leave the LK room and fire [onPermanentDisconnect]`(rejected = true)`.
 *
 *  Single-attempt — no auto-retry. On any failure (transport drop, peer-wait
 *  timeout, explicit rejection) fires [onPermanentDisconnect] and the user
 *  decides whether to retry via the dropped-VPN notification. */
class BaleClientSignaling(
    /** Resolved at every connect attempt so the caller can lazily bring a
     *  torn-down WS back up (e.g., after the app was backgrounded). */
    private val getBale:       suspend () -> BaleWsClient?,
    private val peerId:        Int,
    private val peerType:      Int,
    private val log:           (String) -> Unit = ::println,
    /** Fires once a successful connect has produced a live transport — used
     *  by the caller to drop the WS now that signaling is done. */
    private val onTunnelReady: () -> Unit       = {},
    dispatcher:                CoroutineContext = Dispatchers.Default,
) {

    /** Fires when the call ends permanently — either explicitly
     *  rejected by the peer (`rejected = true`) or dropped
     *  unexpectedly. */
    var onPermanentDisconnect: ((rejected: Boolean) -> Unit)? = null

    private val scope         = CoroutineScope(dispatcher + SupervisorJob())
    @Volatile private var stopped       = false
    @Volatile private var currentCallId = 0L
    /** True iff the failure path was triggered by Bale's `callEnded`
     *  push (i.e. the server explicitly rejected). Set synchronously
     *  inside the callEnded listener so any concurrent
     *  `firePermanentDisconnect()` reader sees the right value
     *  regardless of which path fires first. */
    @Volatile private var rejected      = false
    /** Single-shot guard around `onPermanentDisconnect`. The connect
     *  failure paths (callEnded, transport.onDisconnected,
     *  signalAndJoin return-false) can race; only the first writer
     *  fires the callback. */
    private val disconnectFired = AtomicBoolean(false)
    private val connectMutex    = Mutex()
    private var callEndedRemover: (() -> Unit)? = null

    fun stop() {
        stopped = true
        callEndedRemover?.invoke(); callEndedRemover = null
        scope.coroutineContext.cancelChildren()
    }

    /** Idempotent: at most one call ever invokes `onPermanentDisconnect`,
     *  with the `rejected` value as of fire-time. */
    private fun firePermanentDisconnect() {
        if (disconnectFired.compareAndSet(false, true)) {
            val r = rejected
            scope.launch { onPermanentDisconnect?.invoke(r) }
        }
    }

    suspend fun connect(transport: DataTransport): Boolean {
        if (stopped) return false
        if (!connectMutex.tryLock()) {
            log("[BaleProxy] connect: already in progress, skipping")
            return false
        }
        try {
            val ok = try { signalAndJoin(transport) }
                     catch (e: CancellationException) { throw e }
                     catch (e: Exception) {
                         log("[BaleProxy] connect: failed — ${e::class.simpleName}: ${e.message}")
                         false
                     }
            if (!ok) firePermanentDisconnect()
            return ok
        } finally {
            connectMutex.unlock()
        }
    }

    private suspend fun signalAndJoin(transport: DataTransport): Boolean {
        val bale = getBale() ?: run { log("[BaleProxy] WebRTC: WS unavailable"); return false }
        if (!bale.ready) {
            var r = 0
            while (!bale.ready && r++ < 20) delay(500)
            if (!bale.ready) { log("[BaleProxy] WebRTC: WS not ready"); return false }
        }

        log("[BaleProxy] WebRTC: calling peer $peerId…")
        val call = bale.startCall(peerId, peerType)
            ?: run { log("[BaleProxy] WebRTC: StartCall failed"); return false }
        if (!call.isLivekit || call.token.isEmpty()) {
            log("[BaleProxy] WebRTC: no LiveKit credentials"); return false
        }
        currentCallId = call.callId

        // Register the rejection listener BEFORE joining — Bale can push
        // `callEnded` while we're still dialling the LK room (peer hit
        // Reject quickly, or the server admission flow rejected
        // silently). The listener sets `rejected` / `stopped`
        // synchronously so any concurrent connect-failure path (the
        // wrapper's catch, transport.onDisconnected) reads
        // `rejected = true` when it fires `firePermanentDisconnect`.
        callEndedRemover?.invoke()
        callEndedRemover = bale.addOnCallEnded { id ->
            if (id == currentCallId && !stopped) {
                log("[BaleProxy] WebRTC: callEnded for current callId=$id — server rejected")
                rejected = true
                stopped  = true
                // Disconnect the transport to unstick a suspended
                // `transport.connect`; the single-shot
                // `firePermanentDisconnect` runs from whichever of the
                // failure paths wins the CAS.
                scope.launch {
                    transport.disconnect()
                    firePermanentDisconnect()
                }
            }
        }

        log("[BaleProxy] WebRTC: joining ${call.url} (not waiting for callAccepted)")

        transport.onDisconnected = {
            // A "natural" drop (data channel died, no rejection) keeps
            // `rejected = false`. If callEnded got here first it
            // already set rejected=true synchronously; we just CAS-fire.
            stopped = true
            firePermanentDisconnect()
        }
        // transport.connect suspends until a remote peer is present in the room
        // (handled inside lktunnel's connect task). If the peer never shows up
        // within the Rust-side PEER_WAIT_MS window the call throws, which we
        // catch in `connect()` and turn into onPermanentDisconnect.
        transport.connect(call.url, call.token)
        // If a tear-down (stop() or callEnded) raced with the join, the
        // onDisconnected hook may have already disconnected — call it again
        // defensively. transport.disconnect is idempotent on the SDK side.
        if (stopped) { transport.disconnect(); return false }

        log("[BaleProxy] WebRTC: tunnel ready")
        onTunnelReady()
        return true
    }
}
