package ai.bale.proxy

import android.util.Log

/**
 * Internal raw JNI surface for `liblktunnel.so`. Not part of the
 * public Kotlin API — the [LkTunnel] class wraps the per-tunnel
 * methods, and the SOCKS5 / network-binder / native-error pieces
 * have their own thin facades elsewhere in the module.
 *
 * Data path is JNI-free: outbound IP from the NAT/TUN dispatcher
 * flows to LK via `lktunnel_send` (Rust-internal, no JNI); inbound
 * IP from LK goes straight into `server::inject_packet` inside the
 * shim. Kotlin never touches a packet byte.
 */
internal object NativeJni {
    private const val TAG = "NativeBridge"

    init {
        // Triggering LkNative.<clinit> guarantees the
        // `lkjingle_peerconnection_so → lktunnel` load order; NativeJni's
        // externs work even when LkNative hasn't been touched yet.
        LkNative.nativeVersion()
    }

    // ── Native SOCKS5 server ───────────────────────────────────────────────
    //
    // Process-wide singleton implemented in lktunnel-rust's
    // `socks5.rs`. All calls are safe from any thread; the native
    // side posts work onto the shared dispatcher.

    @JvmStatic external fun socks5Start(port: Int)
    @JvmStatic external fun socks5Stop()
    @JvmStatic external fun socks5IsRunning(): Boolean
    @JvmStatic external fun socks5ActiveConnections(): Int
    @JvmStatic external fun socks5TotalAccepted(): Long
    @JvmStatic external fun socks5SetDebug(enabled: Boolean)

    /** Toggle verbose logging in the native NAT layer. Sticky /
     *  process-wide. Wrapped by [LkTunnel.setDebug]. */
    @JvmStatic external fun natSetDebug(enabled: Boolean)

    /** Drain queued native errors and dispatch each via [onNativeError].
     *  Schedule from a Kotlin loop (BaleApp does so every ~1 s). */
    @JvmStatic external fun drainNativeErrors()

    /** Async error sink. */
    @JvmStatic
    fun onNativeError(sid: Long, op: String, code: Int, message: String) {
        // No listener registry yet under the new API; surface to logcat.
        Log.w(TAG, "native error sid=$sid op=$op code=$code: $message")
    }
}
