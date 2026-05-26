# R8 / ProGuard keep rules for the release build.
#
# The transport is webrtc-rs (pure Rust) — there's no libwebrtc Java
# sidecar AAR anymore, so the old `-keep class livekit.org.**` rules
# (which protected the webrtc-sdk's `FindClass("livekit/org/...")`
# lookups) are gone.

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

# JNI result/marshaling classes the bale-signaling Rust shim looks up
# via `env.find_class(...)` in JNI_OnLoad (bale-signaling-android
# libjni.rs) and then constructs / populates by field — e.g.
# NativePlaceCallResult, NativeContactPage. R8 can't see native
# FindClass, so without this it strips/renames the whole package and
# the app aborts at load with
# `ClassNotFoundException: ai.bale.proxy.bale.NativePlaceCallResult`.
# Keep the class names AND members (ctors/fields) the native side uses.
-keep class ai.bale.proxy.bale.** { *; }
