package ai.bale.proxy.bale

import ai.bale.proxy.proto.ProtoReader
import ai.bale.proxy.proto.ProtoWriter
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.ResponseException
import io.ktor.client.plugins.websocket.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.websocket.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlin.coroutines.CoroutineContext

private const val WS_HOST       = "next-ws.bale.ai"
private const val WS_PATH       = "/ws/"
private const val PROTO_VERSION = 1
private const val API_VERSION   = 151668L

data class CallEntity(
    val callId:    Long,
    val token:     String,
    val room:      String,
    val url:       String,
    val isLivekit: Boolean,
    val callerId:  Long = 0L,  // caller's Bale user ID, extracted from push participants if available
)

class BaleWsClient(
    private val httpClient: HttpClient,
    val accessToken:        String,
    dispatcher:             CoroutineContext = Dispatchers.Default,
    private val log:        (String) -> Unit = ::println,
    private val onCallReceived: (callId: Long, call: CallEntity?) -> Unit = { _, _ -> },
) {
    // Multi-subscriber: client-mode TunnelManager and server-mode BaleServerService each
    // subscribe independently via addOnCallEnded(); a single var would let them overwrite
    // each other. Copy-on-write with @Volatile keeps fire reads lock-free; subscribe/
    // unsubscribe happen at service lifecycle boundaries so the rare add/remove race is fine.
    @kotlin.concurrent.Volatile
    private var callEndedListeners: List<(Long) -> Unit> = emptyList()

    /** Multi-subscriber listener for callAccepted — Bale's notification to the
     *  caller that the callee ran AcceptCall and is on its way to the LK room.
     *  Used by TunnelManager to gate "join LK room" on the actual server
     *  acceptance instead of joining an empty room speculatively. */
    @kotlin.concurrent.Volatile
    private var callAcceptedListeners: List<(Long) -> Unit> = emptyList()

    /** Fired once when Bale closes the WS with code 4401 (or rejects the upgrade
     *  with HTTP 401/403) — the token is dead and reconnecting won't help.
     *  Caller should clear the saved token and route the user to relogin. */
    @kotlin.concurrent.Volatile
    var onTokenExpired: (() -> Unit)? = null

    /** Fired when the handshake response carries a different proto/api version
     *  than this build expects — the app needs to be updated. Caller should
     *  surface a non-relogin "please update" banner and not retry. */
    @kotlin.concurrent.Volatile
    var onVersionMismatch: (() -> Unit)? = null

    fun addOnCallEnded(cb: (Long) -> Unit): () -> Unit {
        callEndedListeners = callEndedListeners + cb
        return { callEndedListeners = callEndedListeners - cb }
    }

    private fun fireCallEnded(callId: Long) {
        callEndedListeners.forEach { runCatching { it(callId) } }
    }

    fun addOnCallAccepted(cb: (Long) -> Unit): () -> Unit {
        callAcceptedListeners = callAcceptedListeners + cb
        return { callAcceptedListeners = callAcceptedListeners - cb }
    }

    private fun fireCallAccepted(callId: Long) {
        callAcceptedListeners.forEach { runCatching { it(callId) } }
    }

    var ready = false
        private set

    private val scope   = CoroutineScope(dispatcher + SupervisorJob())
    // Long-lived scope for cleanup tasks that need to outlive `scope` (which is
    // cancelled by disconnect()). Never cancelled by us — survives until the
    // BaleWsClient instance itself is GC'd.
    private val cleanupScope = CoroutineScope(SupervisorJob())
    // Mutated only inside stateMutex.withLock; @Volatile gives visibility for
    // the unlocked reads in encodePing (where the value is just a non-load-
    // bearing sequence number on the ping frame).
    @kotlin.concurrent.Volatile
    private var rpcIdx  = 1
    /** Tracked per outgoing RPC so handleRpc can log which service/method's
     *  response just landed instead of just an opaque idx number. */
    private data class PendingRpc(
        val service:  String,
        val method:   String,
        val deferred: CompletableDeferred<ByteArray>,
    )
    private val pending = mutableMapOf<Int, PendingRpc>()
    // Serializes access to `pending` and `rpcIdx`. Both are touched from rpcCall
    // (caller's coroutine), handleRpc (runLoop's coroutine), and disconnect
    // (any thread); the mutex makes those three orderable without a shared
    // dispatcher.
    private val stateMutex = Mutex()
    private val sendCh  = Channel<ByteArray>(Channel.UNLIMITED)
    // Last inbound-frame timestamp (epoch ms). Updated on every received frame
    // and read by the liveness coroutine to detect a zombie WS — TCP socket
    // appears open but no application traffic flows. @Volatile so the read on
    // the timer coroutine sees writes from the read coroutine without locking.
    @kotlin.concurrent.Volatile
    private var lastInboundTs = 0L
    // RPC idx of the active SubscribeToUpdates stream. Bale's server-side
    // periodically completes/errors the stream (after some N events or N
    // minutes — empirically observed); when that happens we get an RPC
    // response with this idx, no payload, err=true. The web app's behaviour
    // is to re-subscribe on completion; without that we silently stop seeing
    // call/message events while WS heartbeats keep flowing.
    @kotlin.concurrent.Volatile
    private var subscribeIdx = -1
    // Set by handleFrame's case=5 when the server reports an incompatible
    // proto/api version. Read by the WS body's read loop (close + break) and
    // by runLoop (fire callback + break the outer retry loop).
    @kotlin.concurrent.Volatile
    private var versionMismatchSeen = false

    fun connect() {
        log("[BaleProxy] BaleWsClient.connect() called")
        scope.launch { runLoop() }
    }

    fun disconnect() {
        log("[BaleProxy] BaleWsClient.disconnect() called")
        ready = false
        // Drain pending under the same mutex other accessors use, on a scope
        // that survives the upcoming scope.cancel(). Awaiting callers see
        // their CancellationException within a millisecond as this dispatches.
        cleanupScope.launch {
            val drained = stateMutex.withLock {
                val list = pending.values.toList()
                pending.clear()
                list
            }
            drained.forEach { it.deferred.completeExceptionally(CancellationException("WS disconnected")) }
        }
        scope.cancel()
    }

    private suspend fun runLoop() {
        log("[BaleProxy] WS runLoop started")
        while (scope.isActive) {
            // Set inside the WS body or the catch block when we detect a permanent
            // auth failure (Bale's 4401 close code, or a 401/403 on upgrade). When
            // true, we fire onTokenExpired and break out of the retry loop instead
            // of falling through to the 5 s delay — reconnecting with a dead token
            // would just spin forever.
            var tokenExpired = false
            // Reset the version-mismatch flag at the top of each attempt — if the
            // previous session ended for a different reason (network drop, etc.)
            // we want a clean slate on the next attempt.
            versionMismatchSeen = false
            try {
                log("[BaleProxy] WS connecting to $WS_HOST...")
                httpClient.webSocket(
                    method    = HttpMethod.Get,
                    host      = WS_HOST,
                    port      = 443,
                    path      = WS_PATH,
                    request   = {
                        url.protocol = URLProtocol.WSS
                        header("Cookie",      "access_token=$accessToken")
                        header("Origin",      "https://web.bale.ai")
                        header("User-Agent",  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36")
                    }
                ) {
                    log("[BaleProxy] WS socket open, sending handshake")
                    send(Frame.Binary(true, encodeHandshake()))
                    lastInboundTs = System.currentTimeMillis()
                    val sender = launch {
                        for (data in sendCh) send(Frame.Binary(true, data))
                    }
                    // Liveness check — runs every 10 s. Sends a ping unless the
                    // socket has been silent for 30 s, in which case we close it
                    // ourselves so the runLoop's outer reconnect kicks in. The
                    // existing reactive ping in handleFrame's case 4 still fires
                    // on incoming pongs; the slight redundancy is harmless and
                    // avoids breaking the existing handshake cycle.
                    val liveness = launch {
                        while (isActive) {
                            delay(10_000)
                            val idle = System.currentTimeMillis() - lastInboundTs
                            if (idle > 30_000) {
                                log("[BaleProxy] WS idle ${idle}ms — closing zombie connection")
                                close(CloseReason(CloseReason.Codes.GOING_AWAY, "ping timeout"))
                                break
                            }
                            // Halfway to zombie threshold and the WS still hasn't
                            // heard back from Bale — surface it so a slow-fail is
                            // visible before we actually close. Bale normally
                            // sends a weakEvent every ~4 s; idle > 15 s means
                            // either the connection is stalling or Bale's
                            // upstream is having a bad time.
                            if (idle > 15_000) {
                                log("[BaleProxy] WS idle ${idle}ms — no inbound, sending ping (zombie close at 30s)")
                            }
                            send(Frame.Binary(true, encodePing()))
                        }
                    }
                    for (frame in incoming) {
                        lastInboundTs = System.currentTimeMillis()
                        if (frame is Frame.Binary) handleFrame(frame.data)
                        if (versionMismatchSeen) {
                            close(CloseReason(CloseReason.Codes.PROTOCOL_ERROR, "version mismatch"))
                            break
                        }
                    }
                    liveness.cancel()
                    sender.cancel()
                    // Channel exited because the server closed it. Inspect the close
                    // reason so we can distinguish "expired token" from a network drop.
                    val cr = closeReason.await()
                    if (cr?.code == 4401.toShort()) {
                        log("[BaleProxy] WS close 4401 — token expired")
                        tokenExpired = true
                    } else {
                        log("[BaleProxy] WS session closed (code=${cr?.code} reason=${cr?.message})")
                    }
                }
            } catch (e: CancellationException) {
                // Normal teardown — disconnect() called scope.cancel(). Don't
                // log it as an error and don't swallow it: rethrow so structured
                // concurrency can propagate the cancellation cleanly. The
                // outer while-loop's `scope.isActive` check will then exit.
                throw e
            } catch (e: ResponseException) {
                val status = e.response.status.value
                if (status == 401 || status == 403) {
                    log("[BaleProxy] WS upgrade rejected $status — token expired")
                    tokenExpired = true
                } else {
                    log("[BaleProxy] WS upgrade failed: $status")
                }
            } catch (e: Exception) {
                log("[BaleProxy] WS exception: ${e::class.simpleName}: ${e.message}")
            }
            ready = false
            if (tokenExpired) {
                onTokenExpired?.invoke()
                break
            }
            if (versionMismatchSeen) {
                onVersionMismatch?.invoke()
                break
            }
            if (scope.isActive) { log("[BaleProxy] WS reconnecting in 5s..."); delay(5_000) }
        }
        log("[BaleProxy] WS runLoop exiting")
    }

    /** Friendly name for the top-level inbound WS frame field tag. Pong (4) is
     *  not listed because handleFrame suppresses its log line. */
    private fun frameKindName(f: Int): String = when (f) {
        1 -> "RPC response / push"
        2 -> "Push update"
        3 -> "Terminate session"
        5 -> "Handshake response"
        else -> "field=$f (unknown)"
    }

    /** Friendly name for xC update tags handled via the `else` branch of
     *  parseXC. The call* tags (52807–52810) have their own cases and are
     *  intentionally absent here. See CLAUDE.md for the full table. */
    private fun xcUpdateName(f: Int): String = when (f) {
        19   -> "messageRead"        // someone read a message in one of our chats
        50   -> "messageReadByMe"    // we read a message (sync to our other clients)
        55   -> "newMessage"
        85   -> "emptyUpdate"        // Bale's stream heartbeat / sync marker
        else -> "field=$f"
    }

    private suspend fun handleFrame(buf: ByteArray) {
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            val (f, w) = r.tag()
            // Only log frame kind for the rare/interesting ones (terminate,
            // handshake response). RPC responses log themselves with method
            // names; push updates are mostly weakEvent heartbeats and
            // parseXC logs the meaningful contents. Pongs are silent —
            // liveness/zombie logs catch heartbeat issues.
            if (f == 3 || f == 5) log("[BaleProxy] WS frame: ${frameKindName(f)}")
            when (f) {
                1 -> handleRpc(r.bytes())
                2 -> handlePushContainer(r.bytes())
                // Pong — just acknowledge it (the liveness coroutine refreshes
                // lastInboundTs from the read loop). Don't send a ping back here:
                // the liveness coroutine is the sole heartbeat source. Replying
                // with a ping would create a tight pong→ping→pong feedback loop.
                4 -> r.bytes()
                5 -> {
                    // Handshake response — parse proto+api version inline. The body
                    // is a wrapped int32 + int64 inside a bytes field; we walk
                    // those manually rather than pulling in a generated decoder
                    // for one tiny struct.
                    val body = r.bytes()
                    var proto = 0; var api = 0L
                    val br = ProtoReader(body)
                    while (br.hasMore()) {
                        val (bf, bw) = br.tag()
                        when (bf) {
                            1 -> proto = br.varint().toInt()
                            2 -> api   = br.varint()
                            else -> br.skip(bw)
                        }
                    }
                    if (proto != PROTO_VERSION || api != API_VERSION) {
                        log("[BaleProxy] WS version mismatch: server proto=$proto api=$api, expected proto=$PROTO_VERSION api=$API_VERSION")
                        versionMismatchSeen = true
                        return
                    }
                    ready = true
                    log("[BaleProxy] WS handshake complete — ready=true")
                    subscribeUpdates()
                    scope.launch { loadSelf() }
                }
                else -> r.skip(w)
            }
        }
    }

    private suspend fun handleRpc(buf: ByteArray) {
        val r = ProtoReader(buf)
        var idx = 0; var payload: ByteArray? = null; var errBytes: ByteArray? = null
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> errBytes = r.bytes()
                2 -> payload  = r.bytes()
                3 -> idx      = r.varint().toInt()
                else -> r.skip(w)
            }
        }
        val err = errBytes != null
        val (entry, sizeAfter) = stateMutex.withLock {
            val e = pending.remove(idx)
            e to pending.size
        }
        if (entry != null) {
            val errMsg = errBytes?.let { decodeRpcError(it) }
            log("[BaleProxy] WS RPC ← ${entry.service}/${entry.method} idx=$idx ${if (err) "ERR ($errMsg)" else "ok"} ${payload?.size ?: 0}B (pending=$sizeAfter)")
            if (err) entry.deferred.completeExceptionally(Exception("RPC error: $errMsg"))
            else     entry.deferred.complete(payload ?: ByteArray(0))
        } else if (idx == subscribeIdx && (err || payload == null)) {
            // SubscribeToUpdates stream ended. Bale's server enforces a hard
            // 30 s deadline on this RPC and closes it with code 4
            // (DEADLINE_EXCEEDED) on schedule — the web app sees the same
            // thing and silently re-subscribes via retry(). We do the same:
            // log only if it's not the expected rotation, so a genuine
            // failure (auth, malformed request, etc.) still surfaces.
            val rotation = isExpectedSubscribeRotation(errBytes, payload)
            if (!rotation) {
                val errMsg = errBytes?.let { decodeRpcError(it) } ?: "complete"
                log("[BaleProxy] WS subscribe stream ended (idx=$idx $errMsg) — re-subscribing")
            }
            subscribeUpdates()
        } else if (payload != null && !err) {
            handleUpdate(payload)
        } else {
            val errMsg = errBytes?.let { decodeRpcError(it) }
            log("[BaleProxy] WS RPC idx=$idx dropped (err=$errMsg payload=${payload != null})")
        }
    }

    /** True for the routine 30 s `DEADLINE_EXCEEDED` (gRPC code 4) close
     *  Bale uses to rotate the SubscribeToUpdates stream. Anything else
     *  (auth failure, malformed request, network blip presented as a code)
     *  is a real failure worth logging. */
    private fun isExpectedSubscribeRotation(errBytes: ByteArray?, payload: ByteArray?): Boolean {
        if (errBytes == null) return false
        val r = ProtoReader(errBytes)
        var code = 0
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> code = r.varint().toInt()
                else -> r.skip(w)
            }
        }
        return code == 4 && payload == null
    }

    /** Bale RPC error envelope: { f1 code int32, f2 message string }. Falls
     *  back to a hex dump if the bytes don't look like a known shape. */
    private fun decodeRpcError(buf: ByteArray): String {
        if (buf.isEmpty()) return "empty"
        val r = ProtoReader(buf)
        var code = 0
        var message = ""
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> code    = r.varint().toInt()
                2 -> message = r.string()
                else -> r.skip(w)
            }
        }
        return if (message.isNotBlank()) "code=$code message=\"$message\""
               else if (code != 0)       "code=$code"
               else                      "raw=${buf.joinToString("") { "%02x".format(it) }}"
    }

    // Field-2 WS frame = outer container; field 1 = SubscribeResponse bytes
    private suspend fun handlePushContainer(buf: ByteArray) {
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            val (f, w) = r.tag()
            if (f == 1) handleUpdate(r.bytes()) else r.skip(w)
        }
    }

    // SubscribeResponse schema (verified against Bale's web bundle):
    //   1 = update (xC union — call/message events)
    //   2 = routeId      (int32, internal routing — silent)
    //   3 = sequence     (int32, monotonic per-stream — silent)
    //   4 = timestamp    (int64 ms since epoch — silent)
    //   5 = weakEvent    (sub-message — silent; Bale's idle heartbeat)
    //   6 = mtupdate     (sub-message)
    //   7 = updates      (sub-message)
    // Most pushes from Bale are weakEvent heartbeats every ~4 s. Logging
    // them just clutters the output. Liveness is already visible through the
    // "WS idle Nms — sending ping" warning when the stream actually goes
    // quiet, so silence the happy-path noise here. parseXC still logs every
    // meaningful event (calls, messages, etc).
    private suspend fun handleUpdate(buf: ByteArray) {
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1    -> parseXC(r.bytes())
                2, 3, 4, 5 -> r.skip(w)                       // routeId/seq/timestamp/weakEvent — silent
                6    -> { r.bytes(); log("[BaleProxy] WS update mtupdate") }
                7    -> { r.bytes(); log("[BaleProxy] WS update updates batch") }
                else -> {
                    log("[BaleProxy] WS SubscribeResponse: unknown field=$f wire=$w")
                    r.skip(w)
                }
            }
        }
    }

    private suspend fun parseXC(buf: ByteArray) {
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                52807 -> {
                    val raw = r.bytes()
                    log("[BaleProxy] WS callStarted raw: ${dumpFields(raw)}")
                    parseCallResponse(raw)?.let {
                        log("[BaleProxy] WS callStarted callId=${it.callId} isLivekit=${it.isLivekit} callerId=${it.callerId}")
                        onCallReceived(it.callId, it)
                    }
                }
                52808 -> {
                    // Caller-side notification that the callee ran AcceptCall.
                    // Fired to subscribers (TunnelManager) so they can gate
                    // joining the LK room on this signal rather than joining
                    // an empty room and waiting hopefully.
                    val raw = r.bytes()
                    parseCallResponse(raw)?.let {
                        log("[BaleProxy] WS callAccepted callId=${it.callId} isLivekit=${it.isLivekit} callerId=${it.callerId}")
                        fireCallAccepted(it.callId)
                    } ?: log("[BaleProxy] WS callAccepted (couldn't parse body)")
                }
                52809 -> {
                    val raw = r.bytes()
                    val callId = parseCallId(raw)
                    log("[BaleProxy] WS callEnded callId=$callId raw: ${dumpFields(raw)}")
                    if (callId != 0L) fireCallEnded(callId)
                }
                52810 -> {
                    val raw = r.bytes()
                    log("[BaleProxy] WS callReceived raw: ${dumpFields(raw)}")
                    val (callId, callerId) = parseCallReceived(raw)
                    log("[BaleProxy] WS callReceived callId=$callId callerId=$callerId")
                    if (callId != 0L) onCallReceived(callId,
                        if (callerId != 0L) CallEntity(callId, "", "", "", false, callerId) else null)
                }
                else  -> {
                    // Silent for documented chat-housekeeping events that we
                    // don't act on (new chat messages, read receipts, the
                    // empty stream-marker). Unknown tags still log so a
                    // protocol regression doesn't go invisible.
                    when (f) {
                        19, 50, 55, 85 -> { /* messageRead, messageReadByMe, newMessage, emptyUpdate */ }
                        else -> log("[BaleProxy] WS xC event: ${xcUpdateName(f)}")
                    }
                    r.skip(w)
                }
            }
        }
    }

    // callEnded can carry callId either as a bare varint (field 1) or wrapped inside a
    // nested CallEntity-like message (field 1 length-delimited, with callId at its field 1).
    // Try both shapes; first non-zero match wins.
    private fun parseCallId(buf: ByteArray): Long {
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when {
                f == 1 && w == 0 -> return r.varint()
                f == 1 && w == 2 -> {
                    val inner = r.bytes()
                    val ir = ProtoReader(inner)
                    while (ir.hasMore()) {
                        val (innerF, innerW) = ir.tag()
                        if (innerF == 1 && innerW == 0) return ir.varint()
                        ir.skip(innerW)
                    }
                }
                else -> r.skip(w)
            }
        }
        return 0L
    }

    private fun parseCallReceived(buf: ByteArray): Pair<Long, Long> {
        val r = ProtoReader(buf); var id = 0L; var callerId = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when {
                f == 1 && w == 0 -> id = r.varint()
                w == 2 && callerId == 0L -> callerId = parseParticipantId(r.bytes())
                else -> r.skip(w)
            }
        }
        return id to callerId
    }

    fun parseCallResponse(buf: ByteArray): CallEntity? {
        val r = ProtoReader(buf); var call: CallEntity? = null; var outerCallerId = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when {
                f == 1 -> call = parseCallEntity(r.bytes())
                w == 2 && outerCallerId == 0L -> outerCallerId = parseParticipantId(r.bytes())
                else -> r.skip(w)
            }
        }
        // Prefer the inner adminUid (reliable for callStarted on the callee side).
        // Fall back to a participant-list scan only when the inner CallEntity didn't
        // carry an adminUid for some reason.
        return call?.let { if (it.callerId == 0L && outerCallerId != 0L) it.copy(callerId = outerCallerId) else it }
    }

    // Extracts a Bale user ID from a participant bytes field.
    // Bale uses two peer formats; user IDs are always int32 values in a plausible range.
    // We collect all varint fields and return the first one in [100, Int.MAX_VALUE].
    // This filters out peerType (1–2) and accessHash (very large int64).
    private fun parseParticipantId(buf: ByteArray): Long {
        val r = ProtoReader(buf)
        val varints = mutableListOf<Long>()
        while (r.hasMore()) {
            try {
                val (_, w) = r.tag()
                when (w) {
                    0 -> varints.add(r.varint())
                    2 -> r.bytes()
                    else -> r.skip(w)
                }
            } catch (_: Exception) { break }
        }
        return varints.firstOrNull { it in 100L..Int.MAX_VALUE } ?: 0L
    }

    fun parseCallEntity(buf: ByteArray): CallEntity {
        val r = ProtoReader(buf)
        var id = 0L; var token = ""; var room = ""; var url = ""; var lk = false; var callerId = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1  -> id    = r.varint()
                2  -> token = r.string()
                3  -> room  = r.string()
                4  -> url   = parseWrapped(r.bytes())
                // field 8 = adminUid (call initiator). For server-mode incoming calls
                // this is the *caller*; field 9 ("peer") is the other party in the call
                // ref, which from the callee's perspective is SELF — using it would
                // give us our own uid back as the callerId.
                8  -> callerId = r.varint()
                12 -> lk    = r.varint() != 0L
                else -> r.skip(w)
            }
        }
        return CallEntity(id, token, room, url, lk, callerId)
    }

    private fun parseWrapped(buf: ByteArray): String {
        val r = ProtoReader(buf); var s = ""
        while (r.hasMore()) { val (f, w) = r.tag(); if (f == 1) s = r.string() else r.skip(w) }
        return s
    }

    // ── RPC helpers ────────────────────────────────────────────────────────────

    suspend fun rpcCall(service: String, method: String, payload: ByteArray): ByteArray {
        // Lock around the rpcIdx++ / pending-add pair so handleRpc and
        // disconnect can't observe a half-built state. The send itself goes
        // through the channel and doesn't need the lock.
        val (idx, d) = stateMutex.withLock {
            val i = rpcIdx++
            val deferred = CompletableDeferred<ByteArray>()
            pending[i] = PendingRpc(service, method, deferred)
            i to deferred
        }
        rawSend(encodeRpc(service, method, payload, idx))
        // try/finally ensures the pending entry is removed regardless of how
        // the await ends — success, timeout, or scope cancellation. Without
        // this, dead entries accumulate forever across reconnect storms.
        return try {
            withTimeout(30_000) { d.await() }
        } finally {
            stateMutex.withLock { pending.remove(idx) }
        }
    }

    private suspend fun subscribeUpdates() {
        val idx = stateMutex.withLock { rpcIdx++ }
        subscribeIdx = idx
        sendCh.trySend(encodeRpc("bale.maviz.v1.MavizStream", "SubscribeToUpdates", ByteArray(0), idx))
    }

    private fun rawSend(data: ByteArray) { sendCh.trySend(data) }

    // ── Meet RPCs ──────────────────────────────────────────────────────────────

    suspend fun startCall(peerId: Int, peerType: Int): CallEntity? {
        log("[BaleProxy] startCall peerId=$peerId peerType=$peerType")
        return try {
            val rid     = System.currentTimeMillis()
            val peer    = ProtoWriter().int32(1, peerType).int32(2, peerId).build()
            val lkCall  = ProtoWriter().bytes(1, peer).int64(2, rid).build()
            val payload = ProtoWriter().bytes(1, peer).int64(2, rid).bytes(6, lkCall).build()
            val result  = parseCallResponse(rpcCall("bale.meet.v1.Meet", "StartCall", payload))
            log("[BaleProxy] startCall result: callId=${result?.callId} isLivekit=${result?.isLivekit} url=${result?.url}")
            result
        } catch (e: Exception) {
            log("[BaleProxy] startCall failed: ${e.message}"); null
        }
    }

    suspend fun acceptCall(callId: Long): CallEntity? {
        log("[BaleProxy] acceptCall callId=$callId")
        return try {
            val payload = ProtoWriter().int64(1, callId).build()
            val result  = parseCallResponse(rpcCall("bale.meet.v1.Meet", "AcceptCall", payload))
            log("[BaleProxy] acceptCall result: callId=${result?.callId} isLivekit=${result?.isLivekit}")
            result
        } catch (e: Exception) {
            log("[BaleProxy] acceptCall failed: ${e.message}"); null
        }
    }

    // Per-uid name cache, populated lazily by loadUserName. Reset when the WS
    // reconnects (a new BaleWsClient is constructed).
    private val userNameCache = mutableMapOf<Int, String?>()
    private val userNameCacheMutex = Mutex()

    /** Returns the display name for a Bale user ID, or null if unknown.
     *
     *  Uses Users/LoadUsers with accessHash=0 — same RPC and parsing as
     *  loadSelf(). The caller might not be in our contacts list (server-mode
     *  use case), so we don't depend on GetContacts. UserEntity field 3 is the
     *  full name, field 9 is the @-handle nick (wrapped string); we prefer
     *  name and fall back to nick. */
    suspend fun loadUserName(userId: Int): String? {
        if (userId <= 0) return null
        userNameCacheMutex.withLock { if (userNameCache.containsKey(userId)) return userNameCache[userId] }

        val peer    = ProtoWriter().int32(1, userId).int64(2, 0L).build()
        val payload = ProtoWriter().bytes(1, peer).build()
        val name = try {
            val resp = rpcCall("bale.users.v1.Users", "LoadUsers", payload)
            val r = ProtoReader(resp)
            var entity: ByteArray? = null
            while (r.hasMore()) {
                val (f, w) = r.tag()
                if (f == 1) { entity = r.bytes(); break } else r.skip(w)
            }
            if (entity == null) null else {
                val ur = ProtoReader(entity)
                var en = ""; var enick = ""
                while (ur.hasMore()) {
                    val (f, w) = ur.tag()
                    when (f) {
                        3 -> en = ur.string()
                        9 -> {
                            val nb = ur.bytes()
                            val nr = ProtoReader(nb)
                            while (nr.hasMore()) {
                                val (nf, nw) = nr.tag()
                                if (nf == 1) enick = nr.string() else nr.skip(nw)
                            }
                        }
                        else -> ur.skip(w)
                    }
                }
                en.takeIf { it.isNotBlank() } ?: enick.takeIf { it.isNotBlank() }
            }
        } catch (e: Exception) {
            log("[BaleProxy] loadUserName($userId): RPC failed: ${e::class.simpleName}: ${e.message}")
            null
        }
        userNameCacheMutex.withLock { userNameCache[userId] = name }
        return name
    }

    /** Logged-in account info — populated by loadSelf() once the WS is up. */
    data class SelfInfo(val id: Int, val name: String?)

    @kotlin.concurrent.Volatile
    var self: SelfInfo? = null
        private set

    /** Decode the user_id from the JWT payload and resolve a display name via
     *  Users/LoadUsers over the WebSocket RPC. Bale returns the caller's own
     *  entity when queried with self uid. `self` is populated whenever the
     *  JWT decodes — even if LoadUsers fails — so the UI can fall back to
     *  "User #<id>". Returns null only when the JWT itself is unparseable. */
    suspend fun loadSelf(): SelfInfo? {
        val uid = decodeJwtUserId(accessToken) ?: return null

        val peer    = ProtoWriter().int32(1, uid).int64(2, 0L).build()
        val payload = ProtoWriter().bytes(1, peer).build()

        var name: String? = null
        try {
            val resp = rpcCall("bale.users.v1.Users", "LoadUsers", payload)
            val r = ProtoReader(resp)
            var entity: ByteArray? = null
            while (r.hasMore()) {
                val (f, w) = r.tag()
                if (f == 1) { entity = r.bytes(); break } else r.skip(w)
            }
            if (entity != null) {
                // UserEntity: field 3 = name string, field 9 = nick wrapped-string
                val ur = ProtoReader(entity)
                var en = ""; var enick = ""
                while (ur.hasMore()) {
                    val (f, w) = ur.tag()
                    when (f) {
                        3 -> en = ur.string()
                        9 -> {
                            val nb = ur.bytes()
                            val nr = ProtoReader(nb)
                            while (nr.hasMore()) {
                                val (nf, nw) = nr.tag()
                                if (nf == 1) enick = nr.string() else nr.skip(nw)
                            }
                        }
                        else -> ur.skip(w)
                    }
                }
                name = en.takeIf { it.isNotBlank() } ?: enick.takeIf { it.isNotBlank() }
            }
        } catch (e: Exception) {
            log("[BaleProxy] loadSelf: LoadUsers RPC failed: ${e::class.simpleName}: ${e.message}")
        }

        val info = SelfInfo(uid, name)
        self = info
        log("[BaleProxy] loadSelf: id=${info.id} name=${info.name ?: "(none)"}")
        return info
    }

    private fun decodeJwtUserId(jwt: String): Int? {
        val parts = jwt.split('.')
        if (parts.size < 2) return null
        val bytes = base64UrlDecode(parts[1]) ?: return null
        val json = bytes.decodeToString()
        // Same approach as Node's loadSelf: regex pluck `"user_id":<digits>`
        // from the JSON. Bale nests this under "payload":{…} but a flat regex
        // catches it regardless of nesting depth.
        return Regex(""""user_id"\s*:\s*(\d+)""").find(json)?.groupValues?.get(1)?.toIntOrNull()
    }

    /** Base64url (RFC 4648 §5) decoder. Hand-rolled to keep this file
     *  free of kotlin.io.encoding.Base64 (still ExperimentalEncodingApi in
     *  Kotlin 1.9; opt-in placement around a single expression is brittle). */
    private fun base64UrlDecode(s: String): ByteArray? {
        val out = ByteArray((s.length * 6) / 8 + 1)
        var pos = 0
        var buf = 0
        var bits = 0
        for (c in s) {
            if (c == '=') break
            val v = when (c) {
                in 'A'..'Z' -> c - 'A'
                in 'a'..'z' -> c - 'a' + 26
                in '0'..'9' -> c - '0' + 52
                '-', '+'    -> 62
                '_', '/'    -> 63
                else        -> return null
            }
            buf = (buf shl 6) or v
            bits += 6
            if (bits >= 8) {
                bits -= 8
                out[pos++] = ((buf shr bits) and 0xFF).toByte()
            }
        }
        return out.copyOf(pos)
    }

    private suspend fun grpcWebPost(service: String, method: String, payload: ByteArray): ByteArray {
        val frame = ByteArray(5 + payload.size)
        frame[1] = (payload.size shr 24).toByte(); frame[2] = (payload.size shr 16).toByte()
        frame[3] = (payload.size shr  8).toByte(); frame[4] = payload.size.toByte()
        payload.copyInto(frame, 5)
        val resp: ByteArray = httpClient.post("https://$WS_HOST/$service/$method") {
            header("Content-Type", "application/grpc-web+proto")
            header("X-Grpc-Web",  "1")
            header("Origin",      "https://web.bale.ai")
            header("Cookie",      "access_token=$accessToken")
            setBody(frame)
        }.body()
        var pos = 0; var data: ByteArray? = null
        while (pos + 5 <= resp.size) {
            val flag = resp[pos].toInt() and 0xFF
            val len  = ((resp[pos+1].toInt() and 0xFF) shl 24) or ((resp[pos+2].toInt() and 0xFF) shl 16) or
                       ((resp[pos+3].toInt() and 0xFF) shl  8) or  (resp[pos+4].toInt() and 0xFF)
            pos += 5
            if (flag and 0x80 == 0) data = resp.sliceArray(pos until pos + len)
            pos += len
        }
        return data ?: ByteArray(0)
    }

    suspend fun discardCall(callId: Long) {
        log("[BaleProxy] discardCall callId=$callId")
        try {
            val payload = ProtoWriter().int64(1, callId).build()
            rpcCall("bale.meet.v1.Meet", "DiscardCall", payload)
        } catch (e: Exception) {
            log("[BaleProxy] discardCall failed: ${e.message}")
        }
    }

    // ── Debug helpers ──────────────────────────────────────────────────────────

    // Returns a human-readable dump of all proto fields at one level, with bytes sub-fields
    // expanded one level deeper. Used only for call notification debugging.
    private fun dumpFields(buf: ByteArray, indent: String = ""): String {
        val sb = StringBuilder()
        val r = ProtoReader(buf)
        while (r.hasMore()) {
            try {
                val (f, w) = r.tag()
                when (w) {
                    0 -> { val v = r.varint(); sb.append("${indent}f$f=$v ") }
                    2 -> {
                        val b = r.bytes()
                        sb.append("${indent}f$f[${b.size}]{")
                        // Try to expand as nested proto (heuristic: starts with valid tag)
                        if (b.isNotEmpty() && b[0].toInt() and 0x07 in 0..5) {
                            sb.append(dumpFields(b, ""))
                        } else {
                            sb.append(b.take(16).joinToString("") { "%02x".format(it) })
                        }
                        sb.append("} ")
                    }
                    else -> r.skip(w)
                }
            } catch (_: Exception) { break }
        }
        return sb.toString().trim()
    }

    // ── Frame builders ─────────────────────────────────────────────────────────

    private fun encodeHandshake() = ProtoWriter()
        .bytes(3, ProtoWriter().int32(1, PROTO_VERSION).int64(2, API_VERSION).build())
        .build()

    private fun encodePing() = ProtoWriter()
        .bytes(2, ProtoWriter().int32(1, rpcIdx).build())
        .build()

    private fun encodeRpc(service: String, method: String, payload: ByteArray, idx: Int) =
        ProtoWriter().bytes(1, ProtoWriter()
            .string(1, service).string(2, method).bytes(3, payload).int64(5, idx.toLong()).build())
            .build()
}
