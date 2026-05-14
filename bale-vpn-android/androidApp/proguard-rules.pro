# R8 / ProGuard keep rules for the release build.
#
# The prebuilt `liblkjingle_peerconnection_so.so` (bundled by the
# `livekit/webrtc-sdk` AAR under the `livekit.org.*` prefix) does
# extensive `env->FindClass("livekit/org/...")` lookups inside
# `JNI_OnLoad`. With the default R8 rules those classes get stripped
# because no Java code references them directly — the native side then
# hits an internal assertion and aborts with SIGTRAP/TRAP_BRKPT before
# any user code runs. Notably the webrtc shim looks up
# `livekit.org.jni_zero.JniInit` during `initialize_android`, so the
# keep needs to cover the whole `livekit.org.**` namespace, not just
# `livekit.org.webrtc.**`.

-keep class livekit.org.** { *; }
-keep interface livekit.org.** { *; }
-keepclassmembers class livekit.org.** { *; }

# Anything with a native method — keep both the class and the
# native method signatures so JNI symbol resolution still works.
-keepclasseswithmembernames class * {
    native <methods>;
}

# Our own JNI surfaces (Rust side calls back into these via JNI).
-keep class ai.bale.proxy.LkNative { *; }
-keep class ai.bale.proxy.NativeJni { *; }
-keep class ai.bale.proxy.LkTunnel { *; }
-keep class ai.bale.proxy.LkTunnel$* { *; }
