package ai.bale.proxy.bale

import ai.bale.proxy.NativeContinuation
import kotlinx.coroutines.suspendCancellableCoroutine

/** Outcome of [BaleAuth.startPhoneAuth]. */
data class BaleStartResult(
    val transactionHash: String,
    val isRegistered:    Boolean,
)

/** Outcome of [BaleAuth.submitOtp] / [BaleAuth.submitSignupName]. */
sealed interface BaleAuthOutcome {
    /** Caller is signed in; persist [accessToken] in the
     *  [BaleSignalingNative.JavaTokenStore] you'll hand to
     *  `BaleSignaling`. */
    data class Authenticated(val accessToken: String) : BaleAuthOutcome
    /** Unknown phone. Collect a display name and hand it to
     *  [BaleAuth.submitSignupName] along with the same
     *  [transactionHash]. */
    data class NeedsSignupName(val transactionHash: String) : BaleAuthOutcome
    /** RPC or transport failure. The Rust side already logged
     *  details; surface to the user as a generic "try again". */
    data object Failed : BaleAuthOutcome
}

/**
 * Kotlin facade over the Bale auth flow. Each method is a
 * `suspend fun` that runs the underlying JNI call on
 * `Dispatchers.IO` — the JNI side blocks on a tokio runtime
 * internally, so we don't want to pin the Main thread.
 *
 * Typical usage:
 *
 *   val auth = BaleAuth()
 *   val start = auth.startPhoneAuth("+989121234567")
 *   when (val r = auth.submitOtp(start.transactionHash, "12345")) {
 *     is BaleAuthOutcome.Authenticated   -> tokenStore.save(r.accessToken.toByteArray())
 *     is BaleAuthOutcome.NeedsSignupName -> // prompt for name, then submitSignupName
 *     BaleAuthOutcome.Failed             -> // show error
 *   }
 */
class BaleAuth {

    /** Send an SMS code. Throws [IllegalStateException] on
     *  network / transport failure (Rust logged details). */
    suspend fun startPhoneAuth(phone: String): BaleStartResult {
        val raw: String? = suspendCancellableCoroutine { cont ->
            BaleAuthNative.nativeStartPhoneAuth(phone, NativeContinuation(cont))
        }
        if (raw == null) throw IllegalStateException("StartPhoneAuth RPC failed")
        // shape: "<hash>:<0|1>"
        val parts = raw.split(":", limit = 2)
        require(parts.size == 2) { "unexpected startPhoneAuth response: $raw" }
        return BaleStartResult(
            transactionHash = parts[0],
            isRegistered    = parts[1] == "1",
        )
    }

    /** Submit the SMS code. [BaleAuthOutcome.NeedsSignupName]
     *  covers both the legacy `PHONE_NUMBER_UNOCCUPIED` gRPC
     *  error and the new empty-JWT response Bale switched to. */
    suspend fun submitOtp(transactionHash: String, code: String): BaleAuthOutcome {
        val raw: String? = suspendCancellableCoroutine { cont ->
            BaleAuthNative.nativeSubmitOtp(transactionHash, code, NativeContinuation(cont))
        }
        return decodeAuth(raw)
    }

    /** Finalise signup. Called after [submitOtp] returned
     *  [BaleAuthOutcome.NeedsSignupName]. */
    suspend fun submitSignupName(transactionHash: String, name: String): BaleAuthOutcome {
        val raw: String? = suspendCancellableCoroutine { cont ->
            BaleAuthNative.nativeSubmitSignupName(transactionHash, name, NativeContinuation(cont))
        }
        return decodeAuth(raw)
    }

    private fun decodeAuth(raw: String?): BaleAuthOutcome {
        if (raw == null) return BaleAuthOutcome.Failed
        return when {
            raw.startsWith("AUTH:")         -> BaleAuthOutcome.Authenticated(raw.removePrefix("AUTH:"))
            raw.startsWith("NEEDS_SIGNUP:") -> BaleAuthOutcome.NeedsSignupName(raw.removePrefix("NEEDS_SIGNUP:"))
            else                            -> BaleAuthOutcome.Failed
        }
    }
}
