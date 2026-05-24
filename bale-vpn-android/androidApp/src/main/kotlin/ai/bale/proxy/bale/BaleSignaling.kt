package ai.bale.proxy.bale

import ai.bale.proxy.NativeContinuation
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.suspendCancellableCoroutine


/** Bale call-end reason. Mirrors the `EndReason` enum on the
 *  Rust side. The wire encoding is documented in
 *  [BaleSignalingNative.SignalingObserver.onCallEnded]. */
sealed interface EndReason {
    data object Rejected     : EndReason
    data object CallerHangup : EndReason
    data object Timeout      : EndReason
    data object NetworkDrop  : EndReason
    data class  Other(val code: Int) : EndReason

    companion object {
        fun fromCode(c: Int): EndReason = when (c) {
            0    -> Rejected
            1    -> CallerHangup
            2    -> Timeout
            3    -> NetworkDrop
            else -> Other(c - 100)        // Rust adds 100 for Other(code)
        }
    }
}

/** Decision returned by [BaleIncomingHandler.decide]. */
sealed interface CallDecision {
    data object Accept         : CallDecision
    data object Reject         : CallDecision
    data object SilentlyIgnore : CallDecision
}

/** Async admission policy for incoming calls. The wrapper
 *  bridges this to the JNI `JavaIncomingHandler` interface
 *  internally. Implementations may suspend (e.g. to wait on a
 *  notification's Allow / Reject button); the JNI side runs the
 *  call on tokio's blocking pool so a long suspend doesn't pin
 *  the Rust runtime. */
fun interface BaleIncomingHandler {
    suspend fun decide(peerId: String, displayName: String?): CallDecision
}

/** What [BaleSignaling.placeCall] returns. Mirrors the
 *  `PlaceCallError` enum on the Rust side. */
sealed interface PlaceCallResult {
    data class Ok(val url: String, val token: String, val peerId: String) : PlaceCallResult
    data object Rejected         : PlaceCallResult
    data object NoPeer           : PlaceCallResult
    data object NotAuthenticated : PlaceCallResult
    data object Transport        : PlaceCallResult
}

/** Page of contact peer ids, plus an opaque cursor to fetch the
 *  next page. `nextCursor=null` means the list is exhausted. */
data class ContactPage(
    val peerIds:    List<String>,
    val nextCursor: String?,
)

/** Streaming events from the signaling layer. Collect on the
 *  Main dispatcher to update UI. */
sealed interface BaleEvent {
    data object AuthExpired      : BaleEvent
    data object ProtocolObsolete : BaleEvent
    /** Accepted incoming call's LK creds. Server-mode consumers
     *  build an LkTunnel and start NAT in response. */
    data class  SessionReady(val peerId: String, val url: String, val token: String) : BaleEvent
    /** Any tracked call (outgoing or incoming) has ended.
     *  Apps disambiguate direction from their own per-peer state. */
    data class  CallEnded   (val peerId: String, val reason: EndReason) : BaleEvent
    data object ContactsChanged  : BaleEvent
}

/**
 * Idiomatic Kotlin wrapper around the `bale-signaling` JNI
 * surface. Manages the native handle, bridges callbacks into a
 * Kotlin [SharedFlow], and exposes every operation as a
 * `suspend fun`.
 *
 * Lifetime: hold a single instance per process. Pass a
 * [BaleSignalingNative.JavaTokenStore] at construction (the
 * Android app typically uses a SharedPreferences-backed impl).
 * Call [close] to free the native handle.
 *
 *   val sig = BaleSignaling(SharedPrefsTokenStore(ctx))
 *   sig.events.onEach { ev -> /* react */ }.launchIn(scope)
 *   sig.connect()
 *
 *   val r = sig.placeCall("1234567890")
 *   if (r is PlaceCallResult.Ok) {
 *       lkTunnel.connect(r.url, r.token)
 *   }
 */
class BaleSignaling(
    tokenStore: BaleSignalingNative.JavaTokenStore,
) : AutoCloseable {

    private val _events = MutableSharedFlow<BaleEvent>(
        // Replay 0 — observers subscribe before connect() in
        // practice, so missed events are rare; we'd rather not
        // hold stale events forever in the buffer.
        replay = 0,
        extraBufferCapacity = 64,
    )
    val events: SharedFlow<BaleEvent> = _events.asSharedFlow()

    private val observer = object : BaleSignalingNative.SignalingObserver {
        override fun onAuthExpired()      { emit(BaleEvent.AuthExpired) }
        override fun onProtocolObsolete() { emit(BaleEvent.ProtocolObsolete) }
        override fun onSessionReady(peerId: String, url: String, token: String) {
            emit(BaleEvent.SessionReady(peerId, url, token))
        }
        override fun onCallEnded(peerId: String, endReasonCode: Int) {
            emit(BaleEvent.CallEnded(peerId, EndReason.fromCode(endReasonCode)))
        }
        override fun onContactsChanged() { emit(BaleEvent.ContactsChanged) }
    }

    private val handle: Long = BaleSignalingNative.nativeCreate(tokenStore, observer)

    /** Fire-and-forget into the SharedFlow. Drops the event if
     *  the buffer is somehow full (64 events is plenty for the
     *  rate any reasonable app expects). */
    private fun emit(ev: BaleEvent) {
        _events.tryEmit(ev)
    }

    // ── lifecycle ─────────────────────────────────────────────
    //
    // Each call hands a `NativeContinuation` to native; the
    // shared tokio runtime drives the actual work, and the
    // continuation resumes back on the caller's dispatcher.
    // No `withContext(Dispatchers.IO)` needed — the native
    // call is non-blocking.

    suspend fun connect(): Boolean = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeConnect(handle, NativeContinuation(cont))
    }
    suspend fun disconnect(): Unit? = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeDisconnect(handle, NativeContinuation(cont))
    }
    suspend fun signOut(): Unit? = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeSignOut(handle, NativeContinuation(cont))
    }
    /** App-foreground input to the Rust rule engine. WS goes
     *  down in background (client mode) and back up in
     *  foreground. Sync — no continuation. */
    fun setForeground(fg: Boolean) = BaleSignalingNative.nativeSetForeground(handle, fg)

    /** LK call active input. Call `true` when an LkTunnel is
     *  constructed, `false` when it's torn down. WS rule engine
     *  pauses in client mode while active. */
    fun setCallActive(active: Boolean) = BaleSignalingNative.nativeSetCallActive(handle, active)

    /** Server foreground service running. Drives the rule
     *  engine's server-vs-client semantics. */
    fun setServerActive(active: Boolean) = BaleSignalingNative.nativeSetServerActive(handle, active)
    val isConnected:        Boolean get() = BaleSignalingNative.nativeIsConnected(handle)
    /** True while the run loop is actively trying to connect /
     *  reconnect — UI's "Connecting…" indicator. */
    val isAttemptingConnect: Boolean get() = BaleSignalingNative.nativeIsAttemptingConnect(handle)
    val isAuthenticated:    Boolean get() = BaleSignalingNative.nativeIsAuthenticated(handle)
    /** True from [connect] until [disconnect]. Use this (not
     *  [isConnected]) to ask "should I be connected?" — it
     *  stays true during the run loop's reconnect-backoff
     *  window. */
    val isConnectRequested: Boolean get() = BaleSignalingNative.nativeIsConnectRequested(handle)

    // ── identity ──────────────────────────────────────────────

    /** Returns the signed-in user's peer id, or `null` if not
     *  signed in / not yet resolved. */
    suspend fun whoami(): String? = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeWhoami(handle, NativeContinuation(cont))
    }
    /** Validate that a string round-trips back to a peer id the
     *  impl recognises. Returns the canonical id string on
     *  success. */
    suspend fun resolvePeer(s: String): String? = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeResolvePeer(handle, s, NativeContinuation(cont))
    }
    /** Cached display-name lookup. Returns `null` if the impl
     *  hasn't seen this peer yet — use [fetchDisplayName] to
     *  trigger an RPC. */
    fun peerDisplayName(peerId: String): String? =
        BaleSignalingNative.nativePeerDisplayName(handle, peerId)
    /** First-time display-name fetch over RPC. Subsequent
     *  [peerDisplayName] calls return cached. */
    suspend fun fetchDisplayName(peerId: String): String? = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeFetchDisplayName(handle, peerId, NativeContinuation(cont))
    }

    // ── client side ───────────────────────────────────────────

    suspend fun placeCall(peerId: String): PlaceCallResult {
        val r: NativePlaceCallResult? = suspendCancellableCoroutine { cont ->
            BaleSignalingNative.nativePlaceCall(handle, peerId, NativeContinuation(cont))
        }
        if (r == null) return PlaceCallResult.Transport
        return when (r.errorCode) {
            0 -> PlaceCallResult.Ok(
                url    = r.url   .orEmpty(),
                token  = r.token .orEmpty(),
                peerId = r.peerId.orEmpty(),
            )
            1 -> PlaceCallResult.Rejected
            2 -> PlaceCallResult.NoPeer
            3 -> PlaceCallResult.NotAuthenticated
            else -> PlaceCallResult.Transport
        }
    }

    // ── server side ───────────────────────────────────────────

    /** Install (or replace) the admission policy. The JNI side
     *  invokes [BaleIncomingHandler.decide] on a worker thread;
     *  it can suspend freely. */
    fun setIncomingHandler(handler: BaleIncomingHandler) {
        // Bridge suspend → sync — the JNI decide() is blocking
        // on the Rust side via spawn_blocking, so a runBlocking
        // here is safe (we're already on a worker thread).
        val bridge = object : BaleSignalingNative.JavaIncomingHandler {
            override fun decide(peerId: String, displayName: String?): Int = runBlocking {
                when (handler.decide(peerId, displayName)) {
                    CallDecision.Accept         -> 0
                    CallDecision.Reject         -> 1
                    CallDecision.SilentlyIgnore -> 2
                }
            }
        }
        BaleSignalingNative.nativeSetIncomingHandler(handle, bridge)
    }

    // ── contacts ──────────────────────────────────────────────

    suspend fun listContacts(
        query:  String? = null,
        cursor: String? = null,
        limit:  Int     = 50,
    ): ContactPage {
        val raw: NativeContactPage? = suspendCancellableCoroutine { cont ->
            BaleSignalingNative.nativeListContacts(handle, query, cursor, limit,
                NativeContinuation(cont))
        }
        return if (raw == null) ContactPage(emptyList(), null)
               else             ContactPage(raw.peerIds.toList(), raw.nextCursor)
    }
    /** Look up peer(s) globally by phone number. Returns 0 or 1
     *  matches typically. **Caveat:** on Bale this also adds the
     *  match to the contact list as a side effect — the
     *  underlying `ImportContacts` RPC conflates lookup and
     *  add. To make intent explicit at the call site, follow up
     *  with [addToContacts] even though it's a no-op on Bale. */
    suspend fun searchContactByPhone(phone: String): List<String> {
        val arr: Array<String> = suspendCancellableCoroutine { cont ->
            BaleSignalingNative.nativeSearchContactByPhone(handle, phone,
                NativeContinuation(cont))
        }
        return arr.toList()
    }
    /** Commit a peer found via [searchContactByPhone] to
     *  contacts. No-op on Bale (search already added). Returns
     *  true on success. */
    suspend fun addToContacts(peerId: String): Boolean = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeAddToContacts(handle, peerId, NativeContinuation(cont))
    }
    suspend fun removeContact(peerId: String): Boolean = suspendCancellableCoroutine { cont ->
        BaleSignalingNative.nativeRemoveContact(handle, peerId, NativeContinuation(cont))
    }

    /** Drops the native handle. Subsequent operations are no-ops
     *  (calls on a destroyed handle are guarded inside the
     *  native shim). Safe to call multiple times. */
    @Volatile private var closed: Boolean = false
    override fun close() {
        if (closed) return
        closed = true
        BaleSignalingNative.nativeDestroy(handle)
    }

    protected fun finalize() { close() }
}
