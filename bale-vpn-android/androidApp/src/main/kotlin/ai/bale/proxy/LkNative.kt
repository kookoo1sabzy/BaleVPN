package ai.bale.proxy

/**
 * JNI bootstrapper / version-probe for `liblktunnel.so`. The real
 * tunnel surface is [LkTunnel] (handle-based, per-instance Observer).
 * This object exists only to anchor `System.loadLibrary` and expose
 * the build's version string for a startup sanity check.
 */
object LkNative {

    init {
        // The transport is webrtc-rs (pure Rust), statically linked into
        // liblktunnel.so — there's no separate libwebrtc native lib
        // (liblkjingle_peerconnection_so.so) to load anymore.
        System.loadLibrary("lktunnel")
    }

    /** Version string baked at compile time. Smoke test the .so. */
    @JvmStatic external fun nativeVersion(): String
}
