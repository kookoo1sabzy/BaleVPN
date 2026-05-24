package ai.bale.proxy

import kotlin.coroutines.Continuation
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException

/**
 * JVM-side counterpart to `jni_shared::spawn_with_continuation`.
 *
 * Pattern: a Kotlin `suspend` function that talks to native code
 * wraps the call in `suspendCancellableCoroutine` and hands a
 * `NativeContinuation` instance to the native side. Native
 * spawns the future on the shared tokio runtime; when it
 * completes, native attaches a JVM thread and calls one of
 * `onSuccess(result)` or `onError(message)`. No JNI thread is
 * blocked during the call.
 *
 * Result marshaling:
 *  - Primitive returns are boxed (`Boolean` → `java.lang.Boolean`,
 *    `Long` → `java.lang.Long`); the `result as T` cast unboxes
 *    automatically on the Kotlin side.
 *  - Strings come back as `String?`.
 *  - `Unit` returns: native passes `null` and the cast `null as Unit`
 *    works (Kotlin's quirky `Unit?` is the trick).
 *
 * The class is intentionally untyped on the JVM (`Any?`) — type
 * safety happens via the unchecked cast inside [onSuccess]. Each
 * call site asserts its expected `T` through the
 * `suspendCancellableCoroutine` parameter; if native returns the
 * wrong shape we'd hit a ClassCastException on resume, which
 * surfaces as a coroutine failure rather than a silent corruption.
 */
class NativeContinuation<T>(private val cont: Continuation<T>) {
    @Suppress("unused", "UNCHECKED_CAST")
    fun onSuccess(result: Any?) {
        try {
            cont.resume(result as T)
        } catch (t: Throwable) {
            // Defensive — if the cast / resume fires anything weird,
            // turn it into a structured failure rather than letting
            // it crash the JNI dispatch thread.
            cont.resumeWithException(t)
        }
    }

    @Suppress("unused")
    fun onError(message: String) {
        cont.resumeWithException(NativeException(message))
    }
}

/** Thrown by [NativeContinuation.onError] — wraps the native-side
 *  failure message so callers can `catch (e: NativeException)`
 *  rather than the generic RuntimeException. */
class NativeException(message: String) : RuntimeException(message)
