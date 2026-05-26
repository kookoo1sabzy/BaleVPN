package ai.bale.proxy

import ai.bale.proxy.tunnel.DataTransport
import ai.bale.proxy.tunnel.LiveKitStats
import kotlinx.coroutines.CancellationException
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
     *  windows around close. Concurrent JNI calls are safe via the
     *  Rust-side handle registry (each call holds its own
     *  `Arc<LkTunnel>` for the duration); we don't need a Kotlin
     *  monitor to guard against the close path freeing the
     *  allocation underneath us. */
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
        connectWithRole(url, token, serverRole = false)
    }

    /** Server-role variant of [connect]. The native tunnel is
     *  constructed with [`TunnelRole::Server`] — the client-QUIC
     *  auto-warm is suppressed so the caller's later [startServer]
     *  claims the QUIC role uncontested. Suspends until a remote
     *  peer joins. */
    suspend fun connectAsServer(url: String, token: String) {
        connectWithRole(url, token, serverRole = true)
    }

    private suspend fun connectWithRole(url: String, token: String, serverRole: Boolean) {
        val obs = synchronized(this) {
            check(handle == 0L) { "LkTunnel.connect: already connected" }
            check(observer == null) { "LkTunnel.connect: connect already in flight or still attached" }
            NativeObserver().also { observer = it }
        }
        val h = if (serverRole) {
            LkTunnelNative.nativeConnectServer(url, token, obs)
        } else {
            LkTunnelNative.nativeConnect(url, token, obs)
        }
        if (h == 0L) {
            synchronized(this) {
                if (observer === obs) observer = null
            }
            throw IllegalStateException("LkTunnel.connect: native ctor returned 0")
        }
        synchronized(this) { handle = h }
        try {
            obs.signal.await()   // observer success completes normally; close() / `error` / `disconnected` throw
        } catch (t: Throwable) {
            close()
            throw t
        }
    }

    // ── JNI-dispatching methods ──────────────────────────────
    //
    // None of these need a Kotlin monitor: the Rust side holds
    // an Arc<LkTunnel> per in-flight call (via the handle
    // registry in `lktunnel-android/src/libjni.rs`), so a
    // concurrent close can't free the allocation underneath
    // them. Removing @Synchronized lets the stats poller, the
    // SOCKS5 toggle, the disconnect path, and any other JNI
    // call run truly concurrently — the previous serialisation
    // here was the root cause of UI freezes when one of them
    // happened to be slow.

    /** Enable server-mode NAT for this tunnel — inbound IP packets
     *  are routed to a fresh `NatDispatcher` and forwarded to the
     *  internet via host sockets. Tunnel must have been brought
     *  up with [connectAsServer]; calling on a client-role tunnel
     *  is a no-op on the native side (logged warning). */
    fun startServer() {
        val h = handle; if (h != 0L) LkTunnelNative.nativeStartServer(h)
    }

    /** Hand the VpnService TUN fd to the tunnel. Client mode is
     *  implied — Rust assumes ownership of the fd and closes it on
     *  detach. */
    fun attachTun(fd: Int) {
        val h = handle; if (h != 0L) LkTunnelNative.nativeAttachTun(h, fd)
    }

    /** Drop the TUN bridge: closes the fd, deregisters from the mio
     *  reactor, stops routing inbound IP packets to it. Idempotent.
     *  The LK tunnel + SOCKS5 listener (if up) keep running. */
    fun detachTun() {
        val h = handle; if (h != 0L) LkTunnelNative.nativeDetachTun(h)
    }

    /** Idempotently bring up the QUIC client connection to the peer.
     *  Safe to call multiple times; subsequent calls just return.
     *  Blocks briefly while the QUIC handshake completes (typically
     *  a couple of RTTs over the LK channel). Returns true on success.
     *
     *  Pre-warms the QUIC connection at tunnel startup so toggling
     *  the SOCKS5 listener later is instantaneous (no per-toggle
     *  handshake). */
    fun ensureQuicClient(): Boolean {
        val h = handle; if (h == 0L) return false
        return LkTunnelNative.nativeEnsureQuicClient(h)
    }

    /** Start a SOCKS5 listener on `127.0.0.1:port` that pumps every
     *  accepted connection through a QUIC stream multiplexed over
     *  this tunnel's LK channel. Pass `port = 0` for an OS-assigned
     *  port; returns the actual bound port, or `0` on failure (check
     *  logcat for the cause).
     *
     *  Blocks briefly while the QUIC handshake with the peer
     *  completes. Safe to call once per tunnel; subsequent calls
     *  without an intervening [disableSocks5Server] no-op and return
     *  `0`. */
    fun enableSocks5Server(port: Int): Int {
        val h = handle; if (h == 0L) return 0
        return LkTunnelNative.nativeEnableSocks5(h, port)
    }

    /** True once the persistent QUIC client to the peer is up. The
     *  SOCKS5 listener binds before this completes (enable is async), so
     *  the UI gates the displayed proxy address on this — a bound
     *  listener with no QUIC can't actually reach the peer yet. */
    fun isQuicConnected(): Boolean {
        val h = handle; if (h == 0L) return false
        return LkTunnelNative.nativeIsQuicConnected(h)
    }

    /** Idempotent — aborts the SOCKS5 accept loop. The persistent
     *  QUIC client connection stays up so re-enabling SOCKS5 later
     *  is instantaneous (no fresh handshake). The QUIC client is
     *  torn down only when the whole tunnel disconnects. */
    fun disableSocks5Server() {
        val h = handle; if (h != 0L) LkTunnelNative.nativeDisableSocks5(h)
    }

    /** RX/TX counters as `[rxPkts, rxBytes, txPkts, txBytes]`, or
     *  null if no mode is set yet. */
    fun stats(): LongArray? {
        val h = handle; if (h == 0L) return null
        return LkTunnelNative.nativeStats(h)
    }

    /** Per-flow NAT stats (server mode only). 20-long fixed layout —
     *  see `lktunnel-android/src/server.rs::flow_stats` for the
     *  field order. */
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
        val wasConnected = isConnected
        if (h != 0L) {
            handle = 0L
            isConnected = false
            peerCount = 0
            LkTunnelNative.nativeDisconnect(h)
        }
        // Synthesize globalLifecycleObserver(false) when we were
        // connected. Rust's `TunnelInner::teardown` fires its own
        // process-wide observer, but on Android the two are wired
        // through different paths (Kotlin NativeObserver bridges
        // JNI events into a Kotlin globalLifecycleObserver). The
        // identity check below nulls the Kotlin observer before
        // the JNI Disconnected event arrives, so it gets dropped
        // — fire here to bridge the gap.
        if (wasConnected) {
            globalLifecycleObserver?.invoke(false)
        }
        // Detach the current observer so its events stop affecting
        // this instance's state, and unstick any `connect()` still
        // awaiting it (Rust teardown doesn't synthesise a
        // `disconnected` event for an explicit close). The signal
        // completes EXCEPTIONALLY (with a sentinel) so callers
        // that await `connect()` exit the suspending await, but
        // CancellationException is used (not IllegalStateException)
        // so a try/catch on the call site treats it as a normal
        // mid-flight teardown rather than crashing the caller —
        // an explicit close() while connect() is still suspending
        // is the expected shape when the user presses Stop during
        // dial.
        observer?.let {
            observer = null
            if (!it.signal.isCompleted) {
                it.signal.completeExceptionally(
                    CancellationException("LkTunnel: closed during connect"))
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
            // Process-wide LK lifecycle observer — mirrors the
            // Rust binary's `set_global_observer` pattern. Set by
            // BaleConnection at app startup to forward
            // Connected/Disconnected into `signaling.setCallActive`.
            // Lets any LkTunnel built anywhere in the process
            // auto-pause the WS without per-call wiring.
            when (kind) {
                "connected"    -> globalLifecycleObserver?.invoke(true)
                "disconnected" -> globalLifecycleObserver?.invoke(false)
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

        /** Process-wide LK lifecycle hook. Fires on `connected` /
         *  `disconnected` for every LkTunnel anywhere in the
         *  process. Set once by [BaleConnection.init] to forward
         *  into the WS rule engine. Last writer wins.
         *  Functionally equivalent to lktunnel-rust's
         *  `set_global_observer`. */
        @JvmStatic
        @Volatile var globalLifecycleObserver: ((Boolean) -> Unit)? = null

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
    @JvmStatic external fun nativeIsQuicConnected(handle: Long): Boolean
    @JvmStatic external fun nativeStartServer(handle: Long)
    /** Construct a server-role tunnel (vs `nativeConnect`'s
     *  client default). The role is fixed at construction; the
     *  client-QUIC auto-warm respects it. */
    @JvmStatic external fun nativeConnectServer(
        url:      String,
        token:    String,
        observer: Observer,
    ): Long
    @JvmStatic external fun nativeAttachTun(handle: Long, fd: Int)
    @JvmStatic external fun nativeDetachTun(handle: Long)
    @JvmStatic external fun nativeEnsureQuicClient(handle: Long): Boolean
    @JvmStatic external fun nativeEnableSocks5(handle: Long, port: Int): Int
    @JvmStatic external fun nativeDisableSocks5(handle: Long)
    @JvmStatic external fun nativeStats(handle: Long): LongArray?
    @JvmStatic external fun nativeFlowStats(handle: Long): LongArray?
    @JvmStatic external fun nativeDisconnect(handle: Long)
}
