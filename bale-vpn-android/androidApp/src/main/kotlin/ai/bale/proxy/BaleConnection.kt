package ai.bale.proxy

import ai.bale.proxy.bale.BaleEvent
import ai.bale.proxy.bale.BaleSignaling
import ai.bale.proxy.bale.SharedPrefsTokenStore
import android.content.Context
import android.util.Log
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch

private const val TAG = "BaleProxy"

/**
 * Process-singleton owning the [BaleSignaling] instance.
 *
 * **The Rust rule engine owns WS lifecycle decisions.** This
 * Kotlin layer just pushes inputs and observes status. Inputs:
 *   - `setForeground(bool)` from `ProcessLifecycleOwner` in `BaleApp`
 *   - `sig.connect()` / `sig.disconnect()` from UI buttons + auth flow
 *   - `set_incoming_handler` from `BaleServerService` (auto-flips
 *     mode to Server on the Rust side)
 *   - LK Connected/Disconnected, observed by the global lktunnel
 *     observer Rust installs in `BaleSignaling::new` — fires
 *     `set_call_active(...)` so WS pauses for the duration of a
 *     call in client mode.
 *
 * No Kotlin-side rule remains; no reconcile loop, no sticky
 * flags. [connect] / [disconnect] are thin auth-flow helpers
 * that just persist the token and call into the Rust API.
 */
object BaleConnection {

    private lateinit var appContext: Context
    private val scope = CoroutineScope(Dispatchers.Default + SupervisorJob())

    @Volatile var signaling: BaleSignaling? = null
        private set

    /** Cached "who am I" pair. Refreshed by [refreshSelfInfoLoop]
     *  while the WS is up; cleared when it drops. */
    @Volatile var selfInfo: Pair<String, String?>? = null
        private set

    // ── Sticky terminal flags (set by Rust event callbacks,
    //    cleared by UI after routing to the recovery screen) ──

    /** Set when Bale rejects our token (4401 / 401 / 403). The
     *  UI tick clears it after routing to PhoneAuthActivity. */
    @Volatile var sessionExpired: Boolean = false
    /** Set when the server reports a proto/api version mismatch.
     *  Relogin won't help — UI surfaces a "please update". */
    @Volatile var versionMismatch: Boolean = false

    // ── Read-through state surface ───────────────────────────
    //
    // No Kotlin-side parallel flags. Each accessor reads from
    // the Rust BaleSignaling, which is the single source of
    // truth (`isConnected` = WS handshake done; `isConnectRequested`
    // = API-level intent, true during reconnect-backoff too).

    /** True once the WS handshake has completed. */
    val isReady: Boolean get() = signaling?.isConnected == true

    /** True from `connect()` until `disconnect()`. Stays true
     *  during the run loop's reconnect-backoff window. UI uses
     *  this to render "Connecting…" between Disconnected and
     *  Connected. */
    val isConnectRequested: Boolean get() = signaling?.isConnectRequested == true

    /** True while the run loop is mid-connect / mid-reconnect.
     *  UI binds to this for the "Connecting…" label — separate
     *  from [isConnectRequested] (intent only). */
    val isAttemptingConnect: Boolean get() = signaling?.isAttemptingConnect == true

    fun init(context: Context) {
        appContext = context.applicationContext
        if (signaling == null) {
            val store = SharedPrefsTokenStore(appContext)
            signaling = BaleSignaling(store).also { sig ->
                scope.launch { bridgeEvents(sig) }
                scope.launch { refreshSelfInfoLoop(sig) }
                // No mode push here — `server_active` is driven
                // by the actual server foreground service running
                // (or not). Default is `false` (client semantics).
                // BaleServerService.onStartCommand will push true
                // if/when the user is in server mode.

                // Auto-load the persisted token on cold start so
                // the WS rule engine has a token to evaluate
                // against. Without this, a fresh app launch in
                // client mode never brings the WS up (the rule
                // sees token=None and parks the run loop).
                // `sig.connect()` is the existing safe path that
                // loads from SharedPrefsTokenStore and pushes
                // into set_token; doing it from `BaleSignaling`'s
                // constructor crashed on JNI thread state.
                // No-op if there's no token saved (returns
                // NotAuthenticated; ignored).
                scope.launch { sig.connect() }
            }
            // Mirror the Rust binary's global LK observer:
            // any LkTunnel anywhere in the process flips the WS
            // rule engine's call_active on Connected/Disconnected.
            // No per-call wiring needed in BaleVpnService /
            // BaleServerService.
            LkTunnel.globalLifecycleObserver = { active ->
                signaling?.setCallActive(active)
            }
        }
    }

    /** Auth-completion helper: persist the token to the same
     *  SharedPrefs slot [SharedPrefsTokenStore] reads from,
     *  then call into Rust `connect()` (which clears
     *  user_disconnect and installs the token via `set_token`).
     *  The Rust rule engine evaluates and brings the WS up.
     */
    fun connect(token: String) {
        if (!::appContext.isInitialized) return
        appContext.getSharedPreferences(SharedPrefsTokenStore.DEFAULT_FILE, Context.MODE_PRIVATE)
            .edit().putString(SharedPrefsTokenStore.DEFAULT_KEY, token).apply()
        signaling?.let { sig -> scope.launch { sig.connect() } }
    }

    /** Sign-out / "really stop" helper. Calls Rust `disconnect()`
     *  which flips `user_disconnect=true` (sticky in the rule
     *  engine until the next `connect()`). Token is preserved
     *  in the store unless the caller separately clears it. */
    fun disconnect() {
        signaling?.let { sig -> scope.launch { sig.disconnect() } }
    }

    /** Bridge [BaleSignaling.events] → the sticky flags
     *  `MainActivity.tick` polls. */
    private suspend fun bridgeEvents(sig: BaleSignaling) {
        sig.events.collect { ev ->
            when (ev) {
                is BaleEvent.AuthExpired -> {
                    Log.w(TAG, "BaleConnection: session expired — clearing token")
                    appContext.getSharedPreferences(SharedPrefsTokenStore.DEFAULT_FILE, Context.MODE_PRIVATE)
                        .edit().remove(SharedPrefsTokenStore.DEFAULT_KEY).apply()
                    sessionExpired = true
                    // Rust side already cleared its TokenStore via
                    // its on_auth_expired callback; no extra
                    // disconnect() call needed (the run loop has
                    // already exited terminally).
                }
                is BaleEvent.ProtocolObsolete -> {
                    Log.w(TAG, "BaleConnection: protocol obsolete — app needs update")
                    versionMismatch = true
                }
                // SessionReady / SessionEnded / CallEnded /
                // ContactsChanged are consumed by domain
                // services. BaleConnection only bridges WS
                // lifecycle here.
                else -> Unit
            }
        }
    }

    /** Periodically refresh [selfInfo] while the WS is up. The
     *  signaling layer caches `whoami` + display-name on the
     *  Rust side; this loop just surfaces them to a sync
     *  Kotlin field for the UI tick. Cheap — both calls hit
     *  the in-memory cache once `load_self` has populated it. */
    private suspend fun refreshSelfInfoLoop(sig: BaleSignaling) {
        while (true) {
            if (sig.isConnected) {
                val peerId = try { sig.whoami() } catch (_: Throwable) { null }
                if (peerId != null) {
                    val name = try { sig.fetchDisplayName(peerId) } catch (_: Throwable) { null }
                    selfInfo = peerId to name
                }
            } else {
                selfInfo = null
            }
            delay(2_000)
        }
    }
}
