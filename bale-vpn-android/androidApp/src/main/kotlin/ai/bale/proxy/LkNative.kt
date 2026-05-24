package ai.bale.proxy

/**
 * JNI bootstrapper / version-probe for `liblktunnel.so`. The real
 * tunnel surface is [LkTunnel] (handle-based, per-instance Observer).
 * This object exists only to anchor `System.loadLibrary` and expose
 * the build's version string for a startup sanity check.
 */
object LkNative {

    init {
        // The LK Rust SDK's `webrtc-sys` doesn't statically link
        // libwebrtc on Android — it delegates back through the
        // prefixed Java factories (livekit.org.webrtc.*), whose JNI
        // methods live in liblkjingle_peerconnection_so.so (bundled
        // by io.github.webrtc-sdk:android-prefixed). Without this
        // load, `Room::connect` blows up the first time it
        // instantiates SoftwareVideoEncoderFactory with
        // UnsatisfiedLinkError on `nativeCreateFactory`.
        //
        // Loaded BEFORE `lktunnel` because the Rust .so's
        // `JNI_OnLoad` immediately calls `initialize_android`, which
        // touches the prefixed Java factories on its way through
        // webrtc-sys's Android shim.
        System.loadLibrary("lkjingle_peerconnection_so")
        System.loadLibrary("lktunnel")
    }

    /** Version string baked at compile time. Smoke test the .so. */
    @JvmStatic external fun nativeVersion(): String
}
