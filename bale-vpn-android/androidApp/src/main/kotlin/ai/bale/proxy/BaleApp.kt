package ai.bale.proxy

import android.app.Application
import android.os.Handler
import android.os.Looper
import android.util.Log
import androidx.lifecycle.DefaultLifecycleObserver
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.ProcessLifecycleOwner

private const val TAG = "BaleProxy"

/** Wires app-process foreground state into BaleConnection.reconcile(). */
class BaleApp : Application() {
    override fun onCreate() {
        super.onCreate()
        // CRITICAL load order: liblktunnel_native.so (C++) MUST load
        // before liblktunnel.so (Rust). The Rust .so references
        // lktunnel_inject_packet which lives in the C++ side, and
        // Android's bionic linker does eager symbol resolution at
        // dlopen — if the C++ .so isn't already in the global
        // namespace, dlopen on the Rust .so fails with
        // "cannot locate symbol lktunnel_inject_packet".
        //
        BaleConnection.init(this)
        UserCache.init(this)
        installMainLoopCrashRecovery()
        installNativeErrorPoller()
        // Single load-time sanity check — the LK runtime and NAT
        // dispatcher both live in `liblktunnel.so`; one version
        // probe confirms the .so loaded and the JNI symbols
        // resolved.
        try {
            Log.i(TAG, "Rust shim up: ver=${LkNative.nativeVersion()}")
        } catch (t: Throwable) {
            Log.e(TAG, "Rust shim failed to load", t)
        }
        ProcessLifecycleOwner.get().lifecycle.addObserver(object : DefaultLifecycleObserver {
            override fun onStart(owner: LifecycleOwner) {
                BaleConnection.isForeground = true
                BaleConnection.reconcile()
            }
            override fun onStop(owner: LifecycleOwner) {
                BaleConnection.isForeground = false
                BaleConnection.reconcile()
            }
        })
    }

    /**
     * Wraps the Main looper in a try/catch so a coroutine-borne crash from a
     * dependency (notably LiveKit's CommunicationWorkaroundImpl which can fail with
     * UnsupportedOperationException when AudioFlinger refuses an AudioTrack during
     * rapid reconnects) doesn't take the whole process down. The failing message
     * is dropped, the looper re-enters, and our foreground services keep running.
     *
     * Side effects to be aware of:
     *  - The Activity that was mid-processing its message ends up in a slightly
     *    inconsistent state. Anything that depends on completing that callback
     *    won't, but subsequent input events / lifecycle callbacks resume normally.
     *  - This is a runtime-recovery patch, not a fix. The right primary fix is
     *    avoiding the rapid-LK-reconnect pattern that makes AudioFlinger run out
     *    of tracks; the server-side throttle in BaleServerService is that fix,
     *    this handler is just a safety net for cases the throttle can't catch.
     */
    /**
     * Drives [NativeJni.drainNativeErrors] on a 1-second main-thread cadence.
     * The native side queues errors (TUN write failures, etc.) without ever
     * touching JVM; this poller picks them up on a thread that already has a
     * JNIEnv and fans them out to the registered error listeners. Keeps the
     * dispatcher and libwebrtc threads JVM-free — they used to pay a
     * temporary AttachCurrentThread+Detach for each fired error.
     */
    private fun installNativeErrorPoller() {
        val handler = Handler(Looper.getMainLooper())
        val poller = object : Runnable {
            override fun run() {
                try { NativeErrorBridge.drain() }
                catch (t: Throwable) { Log.e(TAG, "drainNativeErrors threw", t) }
                handler.postDelayed(this, 1_000L)
            }
        }
        handler.postDelayed(poller, 1_000L)
    }

    private fun installMainLoopCrashRecovery() {
        Handler(Looper.getMainLooper()).post(object : Runnable {
            override fun run() {
                while (true) {
                    try {
                        Looper.loop()
                    } catch (e: Throwable) {
                        // Defensive: never rethrow. App stays alive.
                        Log.e(TAG, "Main loop crash recovered: ${e::class.simpleName}: ${e.message}", e)
                    }
                }
            }
        })
    }
}
