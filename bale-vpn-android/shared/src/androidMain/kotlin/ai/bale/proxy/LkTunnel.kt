package ai.bale.proxy

import ai.bale.proxy.tunnel.DataTransport
import ai.bale.proxy.tunnel.LiveKitStats
import kotlinx.coroutines.CompletableDeferred

/**
 * LiveKit-backed tunnel handle. The object IS the [DataTransport]
 * for the Bale services — there's no separate Kotlin transport
 * wrapper. Owns the LK side, exposes live room status, and after
 * [startServer] / [attachTun] also owns the matching NAT or TUN
 * session.
 *
 *   val t = LkTunnel()
 *   t.connect(url, jwt)              // suspends until peer joins
 *   t.startServer()                  // -- or --
 *   // t.attachTun(fd)
 *   ...
 *   t.disconnect()
 *
 * `disconnect()` / `close()` are idempotent and run `Drop` on the
 * Rust side (aborts the per-tunnel task, fires `Room::close()`,
 * destroys the NAT/TUN session if one was started).
 */
class LkTunnel : DataTransport, AutoCloseable {

    @Volatile private var handle: Long = 0L

    /** Latest room status surfaced by the LK tokio worker. Updated
     *  in lock-step with the underlying `onEvent` stream. */
    @Volatile override var isConnected: Boolean = false
        private set
    @Volatile var peerCount: Int = 0
        private set
    @Volatile var lastError: String? = null
        private set
    override val hasPeer: Boolean get() = peerCount > 0
    @Volatile override var onDisconnected: (() -> Unit)? = null
    @Volatile override var lastStats: LiveKitStats? = null
        private set

    /** Optional notifier fired after every state change (in addition
     *  to [onDisconnected] which only fires on the disconnected
     *  transition). Null = poll-only. */
    @Volatile var onStateChange: (() -> Unit)? = null

    /** Cheap native probe — does the Rust side still consider the
     *  tunnel alive? Differs from [isConnected] only in narrow race
     *  windows around close. All native-dispatching accessors share
     *  the same monitor as [close] so a concurrent `close` can't
     *  free the underlying `Box<LkTunnel>` while we're holding the
     *  handle past the null-check. */
    @Synchronized
    fun isConnectedNative(): Boolean =
        handle != 0L && LkTunnelNative.nativeIsConnected(handle)

    /** The currently-active native observer (owning its own connect
     *  signal). Each [connect] call creates a fresh [NativeObserver]
     *  and registers it via [LkTunnelNative.nativeConnect] — Rust
     *  holds it through a per-tunnel GlobalRef. After [close] the
     *  reference is cleared; late events from the previous Rust
     *  tunnel fire on its old observer and are silently dropped by
     *  the `observer === this` identity check. */
    @Volatile private var observer: NativeObserver? = null

    /**
     * Connect to a LiveKit room. Suspends until a remote peer joins,
     * or fails (auth / network / no-peer-timeout). Native side returns
     * the handle immediately — actual dial + peer-wait run in the
     * background; this function awaits the matching observer event.
     *
     * Set-up (precondition checks, attempt install, native dial,
     * handle install) is serialised under the instance monitor with
     * [close]. The actual `await` happens outside the monitor — a
     * concurrent `close()` can still take the lock and complete the
     * attempt's signal exceptionally to unstick us. Concurrent
     * `connect()` from another thread fails fast on the precondition
     * check.
     */
    override suspend fun connect(url: String, token: String) {
        val obs = synchronized(this) {
            check(handle == 0L) { "LkTunnel.connect: already connected" }
            check(observer == null) { "LkTunnel.connect: connect already in flight or still attached" }
            NativeObserver().also { observer = it }
        }
        val h = LkTunnelNative.nativeConnect(url, token, obs)
        if (h == 0L) {
            synchronized(this) {
                if (observer === obs) observer = null
            }
            throw IllegalStateException("LkTunnel.connect: nativeConnect returned 0")
        }
        synchronized(this) { handle = h }
        try {
            obs.signal.await()   // observer success completes normally; close() / `error` / `disconnected` throw
        } catch (t: Throwable) {
            close()
            throw t
        }
    }

    /** Enable server-mode NAT for this tunnel — inbound IP packets
     *  are routed to a fresh `NatDispatcher` and forwarded to the
     *  internet via host sockets. */
    @Synchronized
    fun startServer() {
        val h = handle; if (h != 0L) LkTunnelNative.nativeStartServer(h)
    }

    /** Hand the VpnService TUN fd to the tunnel. Client mode is
     *  implied — Rust assumes ownership of the fd and closes it on
     *  detach. */
    @Synchronized
    fun attachTun(fd: Int) {
        val h = handle; if (h != 0L) LkTunnelNative.nativeAttachTun(h, fd)
    }

    /** RX/TX counters as `[rxPkts, rxBytes, txPkts, txBytes]`, or
     *  null if no mode is set yet. */
    @Synchronized
    fun stats(): LongArray? {
        val h = handle; if (h == 0L) return null
        return LkTunnelNative.nativeStats(h)
    }

    /** Per-flow NAT stats (server mode only). 20-long fixed layout —
     *  see `lktunnel-android/src/server.rs::flow_stats` for the
     *  field order. */
    @Synchronized
    fun flowStats(): LongArray? {
        val h = handle; if (h == 0L) return null
        return LkTunnelNative.nativeFlowStats(h)
    }

    /** [DataTransport] teardown. Identical to [close]. */
    override fun disconnect() = close()

    /** Drop the tunnel. Idempotent. */
    @Synchronized
    override fun close() {
        val h = handle
        if (h != 0L) {
            handle = 0L
            isConnected = false
            peerCount = 0
            LkTunnelNative.nativeDisconnect(h)
        }
        // Detach the current observer so its events stop affecting
        // this instance's state, and unstick any `connect()` still
        // awaiting it (Rust teardown doesn't synthesise a
        // `disconnected` event for an explicit close).
        observer?.let {
            observer = null
            if (!it.signal.isCompleted) {
                it.signal.completeExceptionally(IllegalStateException("LkTunnel: closed during connect"))
            }
        }
    }

    @Suppress("ProtectedInFinal")
    protected fun finalize() {
        close()
    }

    /** Per-connect-attempt observer. One instance per [connect] call —
     *  Rust holds a per-tunnel `GlobalRef` to it for the life of its
     *  `Box<LkTunnel>`, which is what isolates events between
     *  successive connect attempts on the same Kotlin instance.
     *  Owns its own connect-wait latch in [signal] so a stale event
     *  from a previous Rust tunnel can never complete a fresh
     *  attempt's signal.
     *
     *  Events from a Rust tunnel that's no longer current (e.g. a
     *  late event fired from h1 after `close()` + reconnect to h2)
     *  reach the *old* observer; the `observer === this` identity
     *  check at the top of [onEvent] drops them. State updates and
     *  signal resolution only happen for the current observer. */
    private inner class NativeObserver : LkTunnelNative.Observer {
        val signal: CompletableDeferred<Unit> = CompletableDeferred()

        override fun onEvent(kind: String, info: String) {
            // Identity check under the same monitor that `close` /
            // `connect` use to mutate `observer`. Old observers
            // silently drop their events.
            val isCurrent = synchronized(this@LkTunnel) { observer === this }
            if (!isCurrent) return

            val wasConnected = isConnected
            when (kind) {
                "connected"    -> isConnected = true
                "disconnected" -> { isConnected = false; peerCount = 0 }
                "peer_joined"  -> peerCount++
                "peer_left"    -> { if (peerCount > 0) peerCount-- }
                "error"        -> lastError = info
            }
            // Resolve the connect-wait latch. After the first
            // terminal event the signal stays completed, so
            // subsequent steady-state events (peer_joined / peer_left)
            // skip this branch.
            if (!signal.isCompleted) {
                when (kind) {
                    "connected" -> signal.complete(Unit)
                    "error"     -> signal.completeExceptionally(
                        IllegalStateException("LkTunnel: $info"))
                    "disconnected" -> signal.completeExceptionally(
                        IllegalStateException("LkTunnel: disconnected before connect ($info)"))
                    else -> { /* peer_joined / peer_left while still connecting — ignore */ }
                }
            }
            onStateChange?.invoke()
            if (wasConnected && !isConnected) {
                onDisconnected?.invoke()
            }
        }
    }

    companion object {
        init {
            // Ensure liblktunnel.so is loaded before the first JNI call.
            LkNative.nativeVersion()
        }

        /** Toggle verbose logging in the native NAT layer. Hot-path
         *  log points (RTO/fast retransmits, cwnd-limited stalls,
         *  host-side EAGAIN, fragment reassembly, periodic stats
         *  snapshot) are gated on this flag. Sticky / process-wide. */
        @JvmStatic
        fun setDebug(enabled: Boolean) = NativeJni.natSetDebug(enabled)
    }
}

internal object LkTunnelNative {
    /** Lifecycle observer — fires on the LK tokio worker (a
     *  JVM-attached daemon thread). The Kotlin [LkTunnel] wraps this
     *  with its own state-tracking impl so callers don't have to. */
    interface Observer {
        fun onEvent(kind: String, info: String)
    }

    @JvmStatic external fun nativeConnect(
        url:      String,
        token:    String,
        observer: Observer,
    ): Long

    @JvmStatic external fun nativeIsConnected(handle: Long): Boolean
    @JvmStatic external fun nativeStartServer(handle: Long)
    @JvmStatic external fun nativeAttachTun(handle: Long, fd: Int)
    @JvmStatic external fun nativeStats(handle: Long): LongArray?
    @JvmStatic external fun nativeFlowStats(handle: Long): LongArray?
    @JvmStatic external fun nativeDisconnect(handle: Long)
}
