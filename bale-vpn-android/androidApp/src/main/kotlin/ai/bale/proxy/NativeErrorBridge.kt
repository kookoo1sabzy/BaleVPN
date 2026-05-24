package ai.bale.proxy

/** Public surface for the native error queue. Native producers
 *  (dispatcher, libwebrtc threads) push errors into a C++ queue
 *  without ever touching JVM — keeping the data path JVM-free even
 *  on the rare error path. [drain] picks them up on the calling
 *  thread (which already has a JNIEnv) and fans them out to the
 *  bridge-level error listeners.
 *
 *  Called from a 1-second main-thread poller installed by BaleApp. */
object NativeErrorBridge {
    fun drain() = NativeJni.drainNativeErrors()
}
