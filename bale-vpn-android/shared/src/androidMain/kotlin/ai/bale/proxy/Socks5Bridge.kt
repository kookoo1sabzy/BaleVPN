package ai.bale.proxy

/** Public API for the native SOCKS5 server.
 *
 *  Lifecycle:
 *
 *    Socks5Bridge.start(port)         // idempotent; restart-on-port-change
 *    Socks5Bridge.activeConnections()  // live count for UI
 *    Socks5Bridge.stop()
 *
 *  All calls are safe from any thread. The native side serialises work
 *  onto the shared dispatcher. */
object Socks5Bridge {
    fun start(port: Int)        = NativeJni.socks5Start(port)
    fun stop()                  = NativeJni.socks5Stop()
    fun isRunning(): Boolean    = NativeJni.socks5IsRunning()
    fun activeConnections(): Int = NativeJni.socks5ActiveConnections()
    fun totalAccepted(): Long   = NativeJni.socks5TotalAccepted()
    fun setDebug(enabled: Boolean) = NativeJni.socks5SetDebug(enabled)
}
