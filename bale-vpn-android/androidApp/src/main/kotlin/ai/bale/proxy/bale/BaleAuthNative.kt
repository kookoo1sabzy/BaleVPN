package ai.bale.proxy.bale

import ai.bale.proxy.NativeContinuation

/**
 * JNI binding for `bale-signaling`'s `BaleAuth` surface. All
 * methods are static and stateless on the Rust side (one shared
 * `reqwest::Client` lives behind a OnceCell).
 *
 * Each method takes a `NativeContinuation<String?>` — native
 * spawns the RPC on the shared tokio runtime, returns
 * immediately, then invokes `cont.onSuccess(encoded)` /
 * `cont.onError(msg)` when the response is in.
 *
 * The success string is a compact encoded payload the Kotlin
 * wrapper (`BaleAuth.kt`) decodes:
 *
 *   `startPhoneAuth(phone)` → `"<txhash>:<isRegistered 0|1>"` or `null` on RPC failure.
 *   `submitOtp(tx, code)`   → `"AUTH:<access_token>"` or `"NEEDS_SIGNUP:<tx>"` or `null`.
 *   `submitSignupName(tx, name)` → same shape as `submitOtp`.
 *
 * The compact string encoding avoids the JNI cost of building
 * a typed sealed-class hierarchy for what amounts to two-state
 * payloads. The Kotlin wrapper parses + exposes typed results.
 */
internal object BaleAuthNative {

    init { System.loadLibrary("bale_signaling") }

    @JvmStatic external fun nativeStartPhoneAuth  (phone: String, cont: NativeContinuation<String?>)
    @JvmStatic external fun nativeSubmitOtp       (tx: String, code: String, cont: NativeContinuation<String?>)
    @JvmStatic external fun nativeSubmitSignupName(tx: String, name: String, cont: NativeContinuation<String?>)
}
