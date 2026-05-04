package ai.bale.proxy

/* =====================================================================================
 * Userspace TCP/IP stack for the Android VPN-server mode.
 *
 * One PacketProcessor per connected peer. Inbound IPv4 packets arrive (over LiveKit)
 * via process(); the stack routes them through real internet sockets using java.nio
 * and synthesises response IP packets back to the peer via the onSend callback.
 *
 * Threading model
 *   All session state mutates on a single dedicated dispatcher (`bale-nat`). The only
 *   multi-writer point is the inbound `incoming` queue. close() is signal-only — actual
 *   cleanup runs in mainLoop's finally block on the same dispatcher, so foreign-thread
 *   close() can never race with TCP/UDP map mutations.
 *
 * TCP features
 *   • Full state machine: SYN_RCVD → ESTABLISHED → FIN_WAIT_1/2 / CLOSING /
 *     CLOSE_WAIT → LAST_ACK → TIME_WAIT → CLOSED.
 *   • SYN-ACK retransmission with its own RTO branch (no zombie SYN_RCVD sessions).
 *   • Duplicate-SYN detection: same-ISN SYN re-sends SYN-ACK without recreating session.
 *   • Options: MSS=1460 advertised in SYN-ACK; window scaling (RFC 7323) shift=4 →
 *     up to 1 MB advertised window; SACK-Permitted + SACK consumption (RFC 2018).
 *   • Loss recovery: RFC 6298 RTO with Karn's algorithm; RFC 5681 fast retransmit
 *     (3 dup-ACK fallback); RFC 6675 IsLost — fast-recovery on the *first* dup-ACK
 *     whose SACK info implies a hole; RFC 8985 Tail Loss Probe with RTO push;
 *     NewReno step 5 — partial ACKs during recovery don't deflate cwnd.
 *   • Multi-segment partial-ACK retransmit (`retransmitAllHoles`), bounded by cwnd-pipe.
 *   • Zero-window probe with exponential backoff.
 *   • SWS-avoidance window updates (0→positive *and* growth ≥ MSS).
 *   • Stray-segment RST handling per RFC 793 §3.4 (RST vs RST+ACK by input flags).
 *   • R2 retry budget — close after MAX_RTO_RETRIES (9) consecutive RTOs.
 *   • Karn's algorithm honoured on every retransmit path (RTO / TLP / ZWP / fast-rtx).
 *
 * UDP features
 *   • Per-flow connected DatagramChannel (no InetSocketAddress allocation per packet).
 *   • Outbound responses > MTU are IP-fragmented in-process via buildUdpFragments.
 *   • Transient PortUnreachableException is logged but doesn't tear down the flow.
 *
 * IP features
 *   • Inbound fragment reassembly bounded by MAX_FRAG_BUFS (64 streams) and
 *     MAX_FRAG_BYTES_PER (64 KB each), with 30 s expiry.
 *   • DF=1 set on every outbound packet (RFC 6864 atomic datagrams).
 *
 * Backpressure / rate limiting
 *   Per-direction token bucket with 1 s burst capacity. Charges include 40 B IP+TCP
 *   headers. Upload: dequeued IP packet held in pendingUpPkt until tokens refill.
 *   Download: TCP socket reads paused (OP_READ removed) so the kernel's receive
 *   buffer fills and standard TCP flow-control throttles the upstream server.
 *
 * Loop architecture
 *   Single Selector for both TCP and UDP, blocked on select(timeoutMs) where the
 *   timeout is the minimum of pending throttle deadlines and the next per-session
 *   timer. Deadline-based timers (RTO / TLP / ZWP / TIME_WAIT) — no scope.launch
 *   per-timer; everything fires from fireTcpTimers in the loop.
 *
 * Diagnostics
 *   dbg{} blocks are zero-cost when the `debug` toggle is off (lambda body never
 *   evaluated). Hot-path events (retransmit, throttle pause, OOO drop, fragment
 *   expiry, RTO/TLP fires, RTT samples) all gate behind it.
 * ===================================================================================== */

import kotlinx.coroutines.*
import java.net.*
import java.nio.ByteBuffer
import java.nio.channels.CancelledKeyException
import java.nio.channels.DatagramChannel
import java.nio.channels.SelectionKey
import java.nio.channels.Selector
import java.nio.channels.SocketChannel
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.Executors
import kotlin.math.abs
import kotlin.random.Random

private class TokenBucket {
    @Volatile var ratePerSec: Long = 0L   // 0 = unlimited
    @Volatile var lastDropMs: Long = 0L   // wall-clock ms of most recent drop; 0 = never dropped
    // Mutable state — NatDispatcher single-thread access only.
    var tokens = 0L
    var lastMs  = System.currentTimeMillis()

    fun refill() {
        val rate = ratePerSec; if (rate <= 0L) return
        val now = System.currentTimeMillis()
        val elapsed = (now - lastMs).coerceAtLeast(0L)
        if (elapsed > 0L) { tokens = minOf(rate, tokens + elapsed * rate / 1000L); lastMs = now }
    }

    // Single-threaded access only (NatDispatcher).
    fun tryConsume(bytes: Long): Boolean {
        val rate = ratePerSec; if (rate <= 0L) return true
        refill()
        return if (tokens >= bytes) { tokens -= bytes; true } else { lastDropMs = System.currentTimeMillis(); false }
    }

    /** Ms to wait before `bytes` tokens will be available (0 if unlimited or already available). */
    fun msUntilAvailable(bytes: Long): Long {
        val rate = ratePerSec; if (rate <= 0L) return 0L
        val deficit = (bytes - tokens).coerceAtLeast(0L)
        return deficit * 1000L / rate + 1L   // +1 ms rounding safety
    }
}

// Inbound queue capacity. Producer (process()) drops on full — drop-tail backpressure to TUN.
private const val MAX_INCOMING_PKTS  = 512
// Global TCP-window backpressure: when the inbound queue is filling, we shrink the
// advertised window (rwnd) on every active TCP session so the peer's TCP stack stops
// sending instead of having its packets dropped at our queue. Below LO the queue is
// considered uncongested (scale = 1.0 = full window). Between LO and HI we scale
// linearly down to 0. At/above HI we advertise a near-zero window — the peer freezes
// its sender and waits for a window update. The choice of 50%/90% leaves headroom so
// transient bursts don't trigger throttling.
private const val GLOBAL_RWND_LO = 0.50f
private const val GLOBAL_RWND_HI = 0.90f
// Fragment-reassembly DoS bounds.
private const val MAX_FRAG_BUFS      = 64       // max distinct in-flight reassembly streams
private const val MAX_FRAG_BYTES_PER = 65535    // max bytes per stream (RFC 791 datagram cap)
// Idle-session timeouts.
private const val TCP_IDLE_MS      = 5 * 60 * 1000L
private const val UDP_IDLE_MS      = 2 * 60 * 1000L
// Hashed-wheel slot interval and slot counts (= idleMs / checkMs + 1).
private const val SESSION_CHECK_MS = 30_000L
private const val TCP_SLOTS        = 11
private const val UDP_SLOTS        = 5
// On-the-wire MSS for the IP packets we synthesize back to the peer (1500-byte MTU minus headers).
private const val TCP_MSS          = 1460   // 1500 − 20 IP − 20 TCP
private const val UDP_MSS          = 1472   // 1500 − 20 IP −  8 UDP

private val EMPTY = ByteArray(0)

class PacketProcessor(
    private val onSend: (ByteArray) -> Unit,
    private val log:    (String) -> Unit = ::println,
) {
    // ── Diagnostics ───────────────────────────────────────────────────────────
    /** When false, dbg{} blocks are zero-cost (lambda + string interpolation skipped). */
    @Volatile var debug: Boolean = false
    private inline fun dbg(msg: () -> String) { if (debug) log(msg()) }

    // ── Dispatcher ────────────────────────────────────────────────────────────
    // Single thread that owns all session state. Easier than fine-grained locking
    // when the workload is "TCP state machine" rather than "throughput contention".
    private val NatDispatcher: CoroutineDispatcher = Executors.newSingleThreadExecutor { r ->
        Thread(r, "bale-nat").apply { isDaemon = true }
    }.asCoroutineDispatcher()
    private val scope = CoroutineScope(NatDispatcher + SupervisorJob())

    // ── Live counters ─────────────────────────────────────────────────────────
    // @Volatile because the UI thread reads them for stats display. Writes only
    // ever happen on NatDispatcher, so no atomicity needed for ++ updates.
    @Volatile var rxPkts = 0L; @Volatile var rxBytes = 0L   // client → internet (charged after upload bucket admits)
    @Volatile var txPkts = 0L; @Volatile var txBytes = 0L   // internet → client (charged at sendToClient)

    // ── Rate limiting (per direction) ────────────────────────────────────────
    private val upBucket   = TokenBucket()   // gates client → internet (drops drain rate of `incoming`)
    private val downBucket = TokenBucket()   // gates internet → client (pauses TCP socket reads, drops UDP)
    /** Setting these to 0 disables the cap (the bucket short-circuits in tryConsume). */
    var limitUpBps:   Long get() = upBucket.ratePerSec;   set(v) { upBucket.ratePerSec   = v }
    var limitDownBps: Long get() = downBucket.ratePerSec; set(v) { downBucket.ratePerSec = v }
    /** True if either bucket dropped a packet in the last 2 s — surfaced to UI for "red" indicator. */
    val isThrottled: Boolean get() {
        val now = System.currentTimeMillis()
        return (upBucket.ratePerSec   > 0L && now - upBucket.lastDropMs   < 2_000L) ||
               (downBucket.ratePerSec > 0L && now - downBucket.lastDropMs < 2_000L)
    }

    // Outbound to peer. Called by every TCP/UDP session for synthesised IP packets.
    // For UDP we apply the download bucket here (drop on empty); for TCP we apply
    // backpressure earlier at the socket-read stage so this lambda always sends.
    private val sendToClient: (ByteArray) -> Unit = { data ->
        val proto = if (data.size >= 20) data[9].toInt() and 0xFF else 0
        val drop  = proto == 17 && !downBucket.tryConsume(data.size.toLong())
        if (!drop) { txPkts++; txBytes += data.size.toLong(); onSend(data) }
    }

    // ── Inbound packet flow (mainLoop is the single consumer) ─────────────────
    private data class FlowKey(val srcIp: Int, val srcPort: Int, val dstIp: Int, val dstPort: Int)

    /** Multi-writer, single-reader queue. process() drops here when full. */
    private val incoming = ArrayBlockingQueue<ByteArray>(MAX_INCOMING_PKTS)
    /** Multiplier applied to every TcpSession's advertised receive window. Updated
     *  once per mainLoop iteration from `incoming` queue depth — see updateGlobalPressure(). */
    @Volatile private var globalRwndScale: Float = 1f
    /** Last scale we proactively pushed window-update ACKs for. Debounces the per-session
     *  fan-out so we only re-notify when the scale changes meaningfully (≥0.1) or
     *  transitions out of the closed-window state. */
    private var lastNotifiedRwndScale: Float = 1f
    /** Packet that was dequeued but couldn't be processed because the upload bucket was empty.
     *  Re-tried at the head of the next drainIncoming cycle — gives proper backpressure
     *  rather than dropping bytes the source has already committed to. */
    private var pendingUpPkt: ByteArray? = null
    /** TCP sessions whose download bucket emptied mid-read. Their selector key has had
     *  OP_READ cleared; mainLoop's resumeThrottled re-enables it once the deadline passes. */
    private val downloadThrottledKeys = ArrayList<SelectionKey>()

    // ── NIO ──────────────────────────────────────────────────────────────────
    /** One Selector for TCP and UDP combined, so mainLoop can block on a single select(). */
    private val selector = Selector.open()

    // ── Session tables (NatDispatcher-only access) ───────────────────────────
    private val tcp = HashMap<FlowKey, TcpSession>()
    private val udp = HashMap<FlowKey, UdpSession>()
    /** Hashed-wheel idle sweepers. Each session lives in exactly one bucket; cleanupLoop
     *  rotates one bucket per SESSION_CHECK_MS and either closes (idle past timeout) or
     *  re-buckets each entry. O(1) per insertion, no per-session timer object. */
    private val tcpWheel    = Array(TCP_SLOTS) { ArrayList<TcpSession>() }
    private var tcpWheelPos = 0
    private val udpWheel    = Array(UDP_SLOTS) { ArrayList<UdpSession>() }
    private var udpWheelPos = 0

    private data class FragKey(val src: Int, val dst: Int, val proto: Int, val id: Int)
    private class FragBuffer(val createdAt: Long = System.currentTimeMillis()) {
        var firstHdr: ByteArray? = null
        val frags = mutableListOf<Pair<Int, ByteArray>>()
        var lastSeen = false
        var totalPayloadLen = 0
        var receivedBytes  = 0          // running sum to enforce per-buffer cap
    }
    private val fragBufs = HashMap<FragKey, FragBuffer>()

    init {
        scope.launch { mainLoop() }
        scope.launch { cleanupLoop() }
    }

    // Enqueue a raw IP packet from the TUN read loop (may be called from any thread).
    // Drops silently when the queue is full; wakeup() lets mainLoop drain immediately.
    fun process(pkt: ByteArray) {
        if (incoming.offer(pkt)) selector.wakeup()
        else dbg { "drop: incoming queue full (${pkt.size}B, cap=$MAX_INCOMING_PKTS)" }
    }

    private fun processPacket(pkt: ByteArray) {
        if (pkt.size < 20 || (pkt[0].toInt() and 0xF0) != 0x40) {
            dbg { "drop: not IPv4 len=${pkt.size}" }
            return
        }
        val ihl      = (pkt[0].toInt() and 0x0F) * 4
        val flagsOff = u16(pkt, 6)
        val mf       = (flagsOff and 0x2000) != 0
        val fragOff  = (flagsOff and 0x1FFF) * 8

        if (mf || fragOff != 0) { handleFragment(pkt, ihl, mf, fragOff); return }

        if (pkt.size < ihl + 8) return

        val proto = pkt[9].toInt() and 0xFF
        val srcI  = ip4Int(pkt, 12)
        val dstI  = ip4Int(pkt, 16)
        when (proto) {
            6  -> handleTcp(pkt, ihl, srcI, dstI)
            17 -> handleUdp(pkt, ihl, srcI, dstI)
            else -> dbg { "drop: unknown proto=$proto src=${ip4Str(srcI)} dst=${ip4Str(dstI)}" }
        }
    }

    private fun handleFragment(pkt: ByteArray, ihl: Int, mf: Boolean, fragOff: Int) {
        val id    = u16(pkt, 4)
        val proto = pkt[9].toInt() and 0xFF
        val key   = FragKey(ip4Int(pkt, 12), ip4Int(pkt, 16), proto, id)

        // DoS bound: cap distinct in-flight reassembly streams. Evict oldest if at limit.
        if (key !in fragBufs && fragBufs.size >= MAX_FRAG_BUFS) {
            val oldestKey = fragBufs.entries.minByOrNull { it.value.createdAt }?.key
            if (oldestKey != null) {
                fragBufs.remove(oldestKey)
                dbg { "frag: evicted oldest reassembly (cap=$MAX_FRAG_BUFS reached)" }
            }
        }

        val payload = pkt.copyOfRange(ihl, pkt.size)
        val buf     = fragBufs.getOrPut(key) { FragBuffer() }

        // DoS bound: cap total payload bytes per reassembly stream.
        if (buf.receivedBytes + payload.size > MAX_FRAG_BYTES_PER) {
            fragBufs.remove(key)
            dbg { "frag: stream id=$id exceeded $MAX_FRAG_BYTES_PER bytes — dropped" }
            return
        }
        buf.receivedBytes += payload.size

        if (fragOff == 0) buf.firstHdr = pkt.copyOf(ihl)
        buf.frags.add(fragOff to payload)
        if (!mf) { buf.lastSeen = true; buf.totalPayloadLen = fragOff + payload.size }

        if (!buf.lastSeen) return

        buf.frags.sortBy { it.first }
        var expected = 0
        for ((off, data) in buf.frags) { if (off != expected) return; expected += data.size }

        val hdr = buf.firstHdr ?: return
        fragBufs.remove(key)

        val reassembled = ByteArray(ihl + buf.totalPayloadLen)
        hdr.copyInto(reassembled)
        for ((off, data) in buf.frags) data.copyInto(reassembled, ihl + off)
        putU16(reassembled, 2, reassembled.size)
        reassembled[6] = (hdr[6].toInt() and 0x40).toByte()
        reassembled[7] = 0
        putU16(reassembled, 10, 0)
        putU16(reassembled, 10, csumFinish(csumRange(0, reassembled, 0, ihl)))

        dbg { "defrag: id=$id proto=$proto totalLen=${buf.totalPayloadLen}" }
        // Process directly rather than re-queueing — avoid losing reassembled work
        // if `incoming` happens to be full at this moment.
        processPacket(reassembled)
    }

    // Public shutdown — may be called from any thread. We just signal mainLoop to exit;
    // it serializes all the actual session/state cleanup onto its own dispatcher in the
    // `finally` block. Touching tcp/udp/tcpWheel/etc. from a foreign thread races with
    // the loop's mutations and produces transient null values during HashMap rehash.
    fun close() {
        scope.cancel()
        runCatching { selector.wakeup() }   // unblock mainLoop's select() so it can exit promptly
    }

    private fun notifyTcpWrite(s: TcpSession) { s.channel.keyFor(selector)?.takeIf { it.isValid }?.also { it.interestOpsOr(SelectionKey.OP_WRITE); selector.wakeup() } }
    private fun notifyTcpRead(s: TcpSession)  { s.channel.keyFor(selector)?.takeIf { it.isValid }?.also { it.interestOpsOr(SelectionKey.OP_READ);  selector.wakeup() } }
    private fun registerUdp(ch: DatagramChannel, s: UdpSession) {
        try { ch.register(selector, SelectionKey.OP_READ, s) }
        catch (e: Exception) { dbg { "UDP :${s.dstPort} register failed: ${e.message}" } }
    }

    private suspend fun cleanupLoop() {
        while (scope.isActive) {
            delay(SESSION_CHECK_MS)
            val now = System.currentTimeMillis()
            tcpWheelPos = (tcpWheelPos + 1) % TCP_SLOTS
            val tcpBucket = tcpWheel[tcpWheelPos]; tcpWheel[tcpWheelPos] = ArrayList()
            for (s in tcpBucket) {
                if (s.closed) continue
                val remaining = s.lastActivityMs + TCP_IDLE_MS - now
                if (remaining <= 0) { dbg { "TCP :${s.dPort} idle close (${TCP_IDLE_MS / 1000}s no activity)" }; s.close() }
                else {
                    val ticks = ((remaining + SESSION_CHECK_MS - 1) / SESSION_CHECK_MS).toInt().coerceIn(1, TCP_SLOTS - 1)
                    tcpWheel[(tcpWheelPos + ticks) % TCP_SLOTS].add(s)
                }
            }
            udpWheelPos = (udpWheelPos + 1) % UDP_SLOTS
            val udpBucket = udpWheel[udpWheelPos]; udpWheel[udpWheelPos] = ArrayList()
            for (s in udpBucket) {
                if (s.closed) continue
                val remaining = s.lastActivityMs + UDP_IDLE_MS - now
                if (remaining <= 0) { dbg { "UDP :${s.cPort} idle close (${UDP_IDLE_MS / 1000}s no activity)" }; s.close() }
                else {
                    val ticks = ((remaining + SESSION_CHECK_MS - 1) / SESSION_CHECK_MS).toInt().coerceIn(1, UDP_SLOTS - 1)
                    udpWheel[(udpWheelPos + ticks) % UDP_SLOTS].add(s)
                }
            }
            val fragsBefore = fragBufs.size
            fragBufs.entries.removeAll { now - it.value.createdAt > 30_000 }
            val expired = fragsBefore - fragBufs.size
            if (expired > 0) dbg { "expired $expired fragment buffer(s) (>30s incomplete)" }
        }
    }

    private suspend fun mainLoop() {
        val tcpReadBuf = ByteBuffer.allocate(TCP_MSS)
        val udpBuf     = ByteBuffer.allocate(65535)
        try {
            while (scope.isActive) {
                drainIncoming()
                // Recompute global rwnd scale from current queue depth, *after* drain so
                // recent consumption is reflected. If the scale rose enough, fan window
                // updates out to all sessions to wake any stalled peers.
                updateGlobalPressure()
                resumeThrottled()
                val nextTimerMs = fireTcpTimers()

                // Compute select timeout: minimum of pending deadlines. With deadline-based
                // timers we no longer need to cap aggressively for timer continuations.
                var timeoutMs = 1_000L
                val pending = pendingUpPkt
                if (pending != null) {
                    val ms = upBucket.msUntilAvailable(pending.size.toLong())
                    if (ms in 1L until timeoutMs) timeoutMs = ms
                }
                if (downloadThrottledKeys.isNotEmpty()) {
                    val now = System.currentTimeMillis()
                    for (i in downloadThrottledKeys.indices) {
                        val s = downloadThrottledKeys[i].attachment() as? TcpSession ?: continue
                        val d = s.downloadPausedUntilMs - now
                        if (d in 1L until timeoutMs) timeoutMs = d
                    }
                }
                if (nextTimerMs != Long.MAX_VALUE) {
                    val d = nextTimerMs - System.currentTimeMillis()
                    if (d in 1L until timeoutMs) timeoutMs = d
                    else if (d <= 0L) timeoutMs = 1L
                }

                // Block until events arrive, wakeup() is called, or the timeout elapses.
                selector.select(timeoutMs)
                if (selector.selectedKeys().isNotEmpty()) handleSelected(tcpReadBuf, udpBuf)

                // Yield so other coroutines on this single-threaded dispatcher (cleanup loop,
                // etc.) get a turn between iterations.
                yield()
            }
        } finally {
            // Runs on NatDispatcher → no concurrent access to tcp/udp/wheels/etc.
            // This is the single point where session and queue cleanup happens.
            runCatching {
                incoming.clear()
                pendingUpPkt = null
                downloadThrottledKeys.clear()
                tcp.values.toList().forEach { runCatching { it.close() } }
                tcp.clear(); for (b in tcpWheel) b.clear()
                udp.values.toList().forEach { runCatching { it.close() } }
                udp.clear(); for (b in udpWheel) b.clear()
                fragBufs.clear()
            }
            runCatching { selector.close() }
        }
    }

    // Compute the global receive-window scale from current `incoming` queue depth and
    // proactively notify TCP sessions when the window has grown enough that previously-
    // stalled peers might benefit from an immediate ACK with the larger window.
    //
    // Shrinks aren't proactively pushed — natural ACK traffic carries the smaller value,
    // and the queue filling implies packets are arriving fast enough that ACKs flow
    // anyway. Pushing a flurry of window-update ACKs on every shrink would just add work.
    private fun updateGlobalPressure() {
        val ratio = incoming.size.toFloat() / MAX_INCOMING_PKTS
        val newScale = when {
            ratio <= GLOBAL_RWND_LO -> 1f
            ratio >= GLOBAL_RWND_HI -> 0f
            else                    -> 1f - (ratio - GLOBAL_RWND_LO) / (GLOBAL_RWND_HI - GLOBAL_RWND_LO)
        }
        val prev = globalRwndScale
        if (newScale == prev) return
        globalRwndScale = newScale
        if (debug && (newScale == 0f) != (prev == 0f)) {
            log("global rwnd scale ${"%.2f".format(prev)} → ${"%.2f".format(newScale)} (queue=${incoming.size}/$MAX_INCOMING_PKTS)")
        }
        // Window grew enough to be worth re-advertising? Push window updates so any
        // peer that stalled at scale=0 (or shrank its window proportionally) resumes.
        val grewMeaningfully = newScale - lastNotifiedRwndScale >= 0.1f ||
                               (lastNotifiedRwndScale == 0f && newScale > 0f)
        if (grewMeaningfully) {
            lastNotifiedRwndScale = newScale
            for (s in tcp.values) s.onGlobalRwndGrew()
        } else if (newScale == 0f) {
            // Record the closed state so the next "grew" trigger fires reliably.
            lastNotifiedRwndScale = 0f
        }
    }

    // Drain queued upload packets, respecting the upload token bucket.
    // Fragments bypass the bucket — only the reassembled packet is counted.
    private fun drainIncoming() {
        val pending = pendingUpPkt
        if (pending != null) {
            if (!upBucket.tryConsume(pending.size.toLong())) return
            pendingUpPkt = null
            rxPkts++; rxBytes += pending.size.toLong()
            processPacket(pending)
        }
        while (true) {
            val pkt = incoming.poll() ?: break
            val flagsOff = if (pkt.size >= 8) u16(pkt, 6) else 0
            val isFrag   = (flagsOff and 0x3FFF) != 0
            if (!isFrag) {
                if (!upBucket.tryConsume(pkt.size.toLong())) {
                    pendingUpPkt = pkt
                    dbg { "upload throttled: hold ${pkt.size}B (refill in ${upBucket.msUntilAvailable(pkt.size.toLong())}ms)" }
                    break
                }
                rxPkts++; rxBytes += pkt.size.toLong()
            }
            processPacket(pkt)
        }
    }

    // Fire any TCP timers (RTO / ZWP / TIME_WAIT) whose deadline has elapsed. Returns the
    // earliest pending deadline across all sessions (Long.MAX_VALUE if none) so mainLoop
    // can sleep until the next firing.
    private fun fireTcpTimers(): Long {
        if (tcp.isEmpty()) return Long.MAX_VALUE
        val now = System.currentTimeMillis()
        var pendingClose: ArrayList<TcpSession>? = null
        var earliest = Long.MAX_VALUE
        for (s in tcp.values) {
            if (s.closed) continue
            if (s.fireTimers(now)) {
                if (pendingClose == null) pendingClose = ArrayList()
                pendingClose.add(s)
            } else {
                val d = s.nextDeadlineMs()
                if (d < earliest) earliest = d
            }
        }
        pendingClose?.forEach { it.close() }
        return earliest
    }

    // Re-enable any TCP sessions whose download throttle pause has expired.
    private fun resumeThrottled() {
        if (downloadThrottledKeys.isEmpty()) return
        downBucket.refill()
        val now = System.currentTimeMillis()
        val iter = downloadThrottledKeys.iterator()
        while (iter.hasNext()) {
            val key = iter.next()
            val s   = key.attachment() as? TcpSession
            if (s == null || s.closed || now >= s.downloadPausedUntilMs) {
                if (s != null && !s.closed) {
                    s.downloadPaused = false
                    if (key.isValid) key.interestOpsOr(SelectionKey.OP_READ)
                    dbg { "TCP ${s.dPort} download throttle resumed" }
                }
                iter.remove()
            }
        }
    }

    private fun handleSelected(tcpReadBuf: ByteBuffer, udpBuf: ByteBuffer) {
        val selected = selector.selectedKeys()
        val iter = selected.iterator()
        while (iter.hasNext()) {
            val key = iter.next(); iter.remove()
            if (!key.isValid) continue
            try {
                when (val a = key.attachment()) {
                    is TcpSession -> handleTcpKey(key, a, tcpReadBuf)
                    is UdpSession -> handleUdpKey(key, a, udpBuf)
                }
            } catch (e: CancelledKeyException) {
                dbg { "selector key cancelled: ${e.message}" }
            }
        }
    }

    private fun handleTcpKey(key: SelectionKey, s: TcpSession, tcpReadBuf: ByteBuffer) {
        val ch = key.channel() as SocketChannel
        if (key.isConnectable) {
            val ok = try { ch.finishConnect(); true }
                     catch (e: Exception) { dbg { "TCP ${s.dPort} finishConnect failed: ${e.message}" }; false }
            if (key.isValid) key.interestOps(if (ok) SelectionKey.OP_READ else 0)
            if (ok) s.onConnected() else s.onConnectFailed()
        }
        if (key.isValid && key.isReadable && !s.readPaused && !s.downloadPaused) {
            drain@ while (key.isValid && !s.readPaused && !s.downloadPaused) {
                tcpReadBuf.clear()
                val n = try { ch.read(tcpReadBuf) }
                        catch (e: Exception) { dbg { "TCP ${s.dPort} read error: ${e.message}" }; -1 }
                when {
                    n < 0 -> { s.onEof(); break@drain }
                    n > 0 -> {
                        tcpReadBuf.flip()
                        val data = ByteArray(n).also { tcpReadBuf.get(it) }
                        // Charge the bucket for the on-the-wire bytes (payload + 20 IP + 20 TCP),
                        // not just the payload — otherwise the limit silently leaks ~3% of headers.
                        val wireBytes = (n + 40).toLong()
                        if (!downBucket.tryConsume(wireBytes)) {
                            // Deliver this last batch, then pause reads until bucket refills.
                            downBucket.tokens = 0L
                            s.downloadPaused = true
                            val pauseMs = downBucket.msUntilAvailable((TCP_MSS + 40).toLong())
                            s.downloadPausedUntilMs = System.currentTimeMillis() + pauseMs
                            if (key.isValid) key.interestOps(key.interestOps() and SelectionKey.OP_READ.inv())
                            downloadThrottledKeys.add(key)
                            dbg { "TCP ${s.dPort} download throttled, pausing reads for ${pauseMs}ms" }
                        }
                        s.onDataFromServer(data)
                        s.lastActivityMs = System.currentTimeMillis()
                        if (s.downloadPaused) break@drain
                    }
                    else -> break@drain
                }
            }
            if ((s.readPaused || s.downloadPaused) && key.isValid)
                key.interestOps(key.interestOps() and SelectionKey.OP_READ.inv())
        }
        if (key.isValid && key.isWritable) {
            var written = 0
            write@ while (s.writeQueue.isNotEmpty()) {
                val buf = s.writeQueue.first()
                val before = buf.remaining()
                val ok = try { ch.write(buf); true }
                         catch (e: Exception) { dbg { "TCP ${s.dPort} write error: ${e.message}" }; false }
                if (!ok) { s.close(); break@write }
                written += before - buf.remaining()
                if (buf.hasRemaining()) break@write
                s.writeQueue.removeFirst()
            }
            if (key.isValid && s.writeQueue.isEmpty()) key.interestOps(key.interestOps() and SelectionKey.OP_WRITE.inv())
            if (written > 0) s.onWritten(written)
        }
    }

    private fun handleUdpKey(key: SelectionKey, s: UdpSession, udpBuf: ByteBuffer) {
        if (!key.isReadable) return
        if (s.closed) { key.cancel(); return }
        val ch = key.channel() as DatagramChannel
        while (true) {
            udpBuf.clear()
            val n = try { ch.read(udpBuf) }
                    catch (e: Exception) { dbg { "UDP :${s.dstPort} read error: ${e.message}" }; -1 }
            if (n <= 0) break
            udpBuf.flip()
            val data = ByteArray(n).also { udpBuf.get(it) }
            s.onReceive(data, 0, n)
            s.lastActivityMs = System.currentTimeMillis()
        }
    }

    // ── TCP ───────────────────────────────────────────────────────────────────

    // Parses TCP options. Returns (sackPermitted, blocks, wsShift) where:
    //   - blocks  is a flat LongArray of interleaved [left, right] SACK pairs (size = 2 * N).
    //   - wsShift is the peer's window-scale shift (-1 if option absent), capped at 14 per RFC 7323.
    private fun parseTcpOpts(pkt: ByteArray, ihl: Int, dOff: Int): Triple<Boolean, LongArray, Int> {
        var sackPermitted = false
        var wsShift = -1
        var nBlocks = 0
        val temp = LongArray(8)   // capacity for up to 4 blocks
        var i = ihl + 20; val end = ihl + dOff
        while (i < end) {
            when (val kind = pkt[i].toInt() and 0xFF) {
                0    -> break
                1    -> i++
                else -> {
                    if (i + 1 >= end) break
                    val len = pkt[i + 1].toInt() and 0xFF
                    if (len < 2 || i + len > end) break
                    when (kind) {
                        3 -> if (len >= 3) wsShift = (pkt[i + 2].toInt() and 0xFF).coerceAtMost(14)
                        4 -> sackPermitted = true
                        5 -> {
                            var j = i + 2
                            while (j + 8 <= i + len && nBlocks < 4) {
                                temp[nBlocks * 2]     = u32(pkt, j)
                                temp[nBlocks * 2 + 1] = u32(pkt, j + 4)
                                nBlocks++
                                j += 8
                            }
                        }
                    }
                    i += len
                }
            }
        }
        val blocks = if (nBlocks == 0) EMPTY_LONGS else temp.copyOf(nBlocks * 2)
        return Triple(sackPermitted, blocks, wsShift)
    }

    private fun handleTcp(pkt: ByteArray, ihl: Int, srcI: Int, dstI: Int) {
        if (pkt.size < ihl + 20) return
        val sPort  = u16(pkt, ihl);  val dPort = u16(pkt, ihl + 2)
        val seq    = u32(pkt, ihl + 4)
        val ackNum = u32(pkt, ihl + 8)
        val dOff   = (pkt[ihl + 12].toInt() and 0xF0) shr 2
        val flags  = pkt[ihl + 13].toInt() and 0xFF
        val win    = u16(pkt, ihl + 14)
        val payOff = ihl + dOff
        if (dOff < 20 || payOff > pkt.size) return
        val payLen = pkt.size - payOff

        val key = FlowKey(srcI, sPort, dstI, dPort)

        if (flags and 0x04 != 0) { tcp.remove(key)?.close(); return }

        val (clientSackOk, sackBlocks, clientWsShift) = if (dOff > 20) parseTcpOpts(pkt, ihl, dOff)
                                                        else Triple(false, EMPTY_LONGS, -1)

        if (flags and 0x02 != 0 && flags and 0x10 == 0) {
            // Duplicate SYN with the same ISN: just resend the SYN-ACK; don't recreate the session,
            // otherwise the client's eventual ACK (which carries the original ISN+1) won't match.
            val existing = tcp[key]
            if (existing != null && !existing.closed && existing.clientIsn == seq) {
                dbg { "TCP $dPort duplicate SYN (isn=$seq) — resending SYN-ACK" }
                existing.resendSynAck()
                return
            }
            tcp.remove(key)?.close()
            val s = TcpSession(srcI, dstI, sPort, dPort, seq, sendToClient,
                               { tcp.remove(key) },
                               { notifyTcpWrite(it) },
                               { notifyTcpRead(it) },
                               clientSackOk, clientWsShift, log, { debug },
                               { globalRwndScale })
            tcp[key] = s
            tcpWheel[(tcpWheelPos + TCP_SLOTS - 1) % TCP_SLOTS].add(s)
            dbg { "TCP $dPort new session (src=${ip4Str(srcI)}:$sPort dst=${ip4Str(dstI)}:$dPort sack=$clientSackOk ws=$clientWsShift)" }
            s.startConnect(InetSocketAddress(int4ToAddr(dstI), dPort))
            if (!s.closed) try { s.channel.register(selector, SelectionKey.OP_CONNECT, s) }
                           catch (e: Exception) { dbg { "TCP $dPort register failed: ${e.message}" } }
            return
        }
        // Pass the original packet (with payload offset/length) — receive() copies only on
        // OOO buffering; the in-order path delivers via ByteBuffer.wrap without copying.
        tcp[key]?.also { s ->
            s.receive(flags, seq, ackNum, win, pkt, payOff, payLen, sackBlocks)
            s.lastActivityMs = System.currentTimeMillis()
        } ?: run {
            // RFC 793 §3.4: stray segment for an unknown 4-tuple → reset.
            //   - If the segment had ACK: reply with RST, seq = their ACK, no ACK flag.
            //   - Otherwise: reply with RST+ACK, seq = 0, ack = their seq + len (+1 if FIN).
            val ackForRst = (seq + payLen + if (flags and 0x01 != 0) 1L else 0L) and 0xFFFFFFFFL
            val hadAck    = flags and 0x10 != 0
            val seqForRst = if (hadAck) ackNum else 0L
            val rstFlags  = if (hadAck) 0x04 else 0x14
            sendToClient(buildTcpPkt(dstI, srcI, dPort, sPort, seqForRst, ackForRst, rstFlags, EMPTY))
        }
    }

    // ── UDP ───────────────────────────────────────────────────────────────────

    private fun handleUdp(pkt: ByteArray, ihl: Int, srcI: Int, dstI: Int) {
        if (pkt.size < ihl + 8) return
        val sPort   = u16(pkt, ihl); val dPort = u16(pkt, ihl + 2)
        val key     = FlowKey(srcI, sPort, dstI, dPort)
        val session = udp.getOrPut(key) {
            dbg { "UDP new session (src=${ip4Str(srcI)}:$sPort dst=${ip4Str(dstI)}:$dPort)" }
            UdpSession(srcI, sPort, dstI, dPort, sendToClient, { udp.remove(key) }, log, { debug })
                .also { registerUdp(it.channel, it); udpWheel[(udpWheelPos + UDP_SLOTS - 1) % UDP_SLOTS].add(it) }
        }
        session.send(pkt, ihl + 8, pkt.size - ihl - 8)
        session.lastActivityMs = System.currentTimeMillis()
    }
}

// ── TCP session ───────────────────────────────────────────────────────────────

private class SndSeg(val seq: Long, val data: ByteArray, var sacked: Boolean = false)

private val EMPTY_LONGS = LongArray(0)

// ── TCP per-session sizing ───────────────────────────────────────────────────
private const val MAX_SND_BUF  = 1024            // segments — hard cap on cwnd/ssthresh growth
private const val OOO_BUF_MAX  = 64              // out-of-order segments held while awaiting in-order arrival
private const val RCV_BUF_MAX  = 1024 * 1024     // 1 MB per-session receive buffer (writeQueue + ooo)
private const val RCV_WIN_MAX  = 65535           // u16 max — TCP window field cap before scaling

// ── TCP congestion control & timing ──────────────────────────────────────────
private const val INIT_CWND       = 10           // RFC 6928 initial congestion window
private const val DUP_ACK_THRESH  = 3            // RFC 5681 fast-retransmit threshold; also reused by IsLost
private const val RTO_INITIAL     = 1_000L
private const val RTO_MIN         = 200L
private const val RTO_MAX         = 60_000L
private const val TIME_WAIT_MS    = 10_000L      // 2 × MSL before TIME_WAIT closes
private const val SSTHRESH_MIN    = 4            // floor for ssthresh after loss (segments); kept low so very-lossy
                                                 // small flows can converge to AIMD equilibrium without self-inducing loss
private const val MAX_RTO_RETRIES = 9            // RFC 9293 R2 — close session after this many consecutive RTOs
private const val PTO_MIN_MS      = 10L          // RFC 8985 §6.2.1 minimum probe-timeout

// ── TCP options we advertise in our SYN-ACK ──────────────────────────────────
private const val OUR_MSS         = 1460         // 1500-MTU minus IP+TCP headers
private const val OUR_RECV_WSCALE = 4            // RFC 7323 window-scale shift; factor 16 → up to ~1 MB window

private enum class TcpState {
    SYN_RCVD,
    ESTABLISHED,
    FIN_WAIT_1, FIN_WAIT_2, CLOSING,   // active close: we sent FIN first
    CLOSE_WAIT, LAST_ACK,              // passive close: client sent FIN first
    TIME_WAIT,
    CLOSED
}

class TcpSession(
    private val clientIp:        Int,
    private val dstIp:           Int,
    private val cPort:           Int,
    val dPort:                   Int,
    clientIsn:                   Long,
    private val send:            (ByteArray) -> Unit,
    private val onRemove:        () -> Unit = {},
    private val onNeedWrite:     (TcpSession) -> Unit = {},
    private val onNeedRead:      (TcpSession) -> Unit = {},
    clientSackPermitted:         Boolean = false,
    clientWsShift:               Int = -1,    // peer's window-scale shift; -1 = WS not negotiated
    private val log:             (String) -> Unit = ::println,
    private val isDebug:         () -> Boolean = { false },
    /** Global receive-window scale [0.0, 1.0] driven by PacketProcessor's inbound queue
     *  depth. Read every time we build a TCP header so window changes propagate without
     *  per-session bookkeeping. */
    private val rwndScale:       () -> Float = { 1f },
) {
    private inline fun dbg(msg: () -> String) { if (isDebug()) log(msg()) }

    // ── Window scaling (RFC 7323) ─────────────────────────────────────────────
    // Both directions scale iff peer included WS in their SYN. Without WS, all
    // window fields are interpreted unshifted and rcvWScale stays 0.
    private val wsActive:   Boolean = clientWsShift >= 0
    private val sendWScale: Int     = if (wsActive) clientWsShift else 0     // shift applied to incoming window field
    private val recvWScale: Int     = if (wsActive) OUR_RECV_WSCALE else 0   // shift we advertise in our SYN-ACK

    // ── Upstream socket ───────────────────────────────────────────────────────
    /** SocketChannel to the real internet destination. Registered with PacketProcessor's selector. */
    val channel = SocketChannel.open().also { it.configureBlocking(false) }
    /** Data we've queued to send TO the real server. Drained on OP_WRITE; partial writes leave
     *  the head buffer with remaining() > 0 to be retried next time. */
    val writeQueue = ArrayDeque<ByteBuffer>()

    // ── Pause flags (suppress server-socket reads) ────────────────────────────
    /** TCP-level pause: set when our send buffer to peer is full (sndWnd=0 or pipe ≥ cwnd*MSS).
     *  Cleared on new ACK / window-update. */
    var readPaused             = false
    /** Rate-limit pause: set when download bucket runs dry mid-read. */
    var downloadPaused         = false
    var downloadPausedUntilMs  = 0L
    /** Updated on each TCP read/write event; read by cleanupLoop to detect idle sessions. */
    var lastActivityMs         = System.currentTimeMillis()

    // ── Connection identity ───────────────────────────────────────────────────
    /** Peer's initial sequence number — used by PacketProcessor to detect duplicate SYN
     *  (same ISN ⇒ resend SYN-ACK without recreating the session). */
    val clientIsn: Long = clientIsn
    private var state = TcpState.SYN_RCVD

    // ── Send-side sequence space (host byte order, low 32 bits significant) ──
    /** sndNxt — next byte we'll send. Initial value is random per RFC 9293. */
    private var ourSeq    = Random.nextInt().toLong() and 0xFFFFFFFFL
    /** rcvNxt — next byte we expect from peer. Initialized to clientIsn + 1 (SYN consumes 1). */
    private var ourAck    = (clientIsn + 1L) and 0xFFFFFFFFL
    /** Smallest unACKed seq. Advances on every new ACK; equals ourSeq when nothing in flight. */
    private var sndUna    = ourSeq
    /** Seq of our FIN if we sent one (so handleNewAck can detect it being ACKed). */
    private var ourFinSeq: Long? = null

    // ── Retry budget ──────────────────────────────────────────────────────────
    /** True between sending the SYN-ACK and seeing the third-leg ACK. Drives SYN-ACK
     *  retransmission via the dedicated RTO branch. */
    private var synAckOutstanding = false
    /** Consecutive RTO firings without any new ACK — reset to 0 on every new ACK.
     *  Session is closed when this exceeds MAX_RTO_RETRIES. */
    private var rtoRetries        = 0

    // ── Loss recovery ─────────────────────────────────────────────────────────
    private var dupAckCount    = 0      // RFC 5681 fallback: enter fast-recovery on the 3rd dup-ACK
    private var inFastRecovery = false
    /** sndNxt at fast-recovery entry. We exit recovery the moment a new ACK reaches it. */
    private var recoverPoint   = 0L

    // ── Congestion control ────────────────────────────────────────────────────
    private var cwnd     = INIT_CWND      // current congestion window in *segments*
    private var ssthresh = MAX_SND_BUF    // slow-start threshold in *segments*
    private var acksInCa = 0              // CA accumulator: +1 to cwnd every cwnd ACKs
    private var rto      = RTO_INITIAL    // current retransmission timeout (ms)
    /** Peer's advertised receive window in BYTES (already left-shifted by sendWScale).
     *  0 ⇒ persist timer (zero-window probe) takes over until peer reopens. */
    private var sndWnd        = RCV_WIN_MAX
    private var zwpBackoff    = 0         // exponential backoff index for ZWP firing interval

    // ── Timer deadlines (Long.MAX_VALUE = unscheduled) ───────────────────────
    // Polled by PacketProcessor.fireTcpTimers once per mainLoop iteration. Replaces
    // per-timer scope.launch { delay() } so per-ACK overhead stays at one Long write.
    var rtoDeadlineMs:      Long = Long.MAX_VALUE   // retransmit timeout
    var zwpDeadlineMs:      Long = Long.MAX_VALUE   // zero-window probe
    var timeWaitDeadlineMs: Long = Long.MAX_VALUE   // 2 × MSL wait before close
    var tlpDeadlineMs:      Long = Long.MAX_VALUE   // RFC 8985 tail loss probe

    // ── RTT estimator (RFC 6298) ─────────────────────────────────────────────
    private var srtt      = 0L     // smoothed RTT (ms); 0 ⇒ no sample yet
    private var rttvar    = 500L   // RTT variance (ms)
    /** End-seq of the segment currently under RTT measurement, or null if none.
     *  Cleared on every retransmit path (Karn's algorithm — no sample on retransmits). */
    private var rttSeq:   Long? = null
    private var rttSentAt = 0L     // wall-clock at which rttSeq's segment was originally sent

    // ── SACK state ────────────────────────────────────────────────────────────
    private var sackPermitted = clientSackPermitted
    /** Send retransmit queue: every segment we transmitted and that hasn't been
     *  cumulatively ACKed yet. Used for retransmits and SACK marking. */
    private val sndBuf      = ArrayDeque<SndSeg>()
    /** Running sum of `data.size` across sndBuf segments currently flagged sacked.
     *  pipe() = flightSize() − sackedBytes (RFC 6675). */
    private var sackedBytes = 0L

    // ── Out-of-order receive buffer ──────────────────────────────────────────
    /** Inbound segments arriving past ourAck, awaiting in-order delivery. Bounded
     *  by OOO_BUF_MAX entries — segments above the cap are dropped (peer will retry). */
    private val oooBuffer      = HashMap<Long, ByteArray>()
    private var oooBufferBytes = 0

    /** Peer's FIN seq if it arrived out-of-order. Drained when ourAck reaches it. */
    private var pendingFinAtSeq: Long? = null
    /** Bytes currently sitting in writeQueue, drives rcvAvail() and SWS-avoidance. */
    private var writeQueueBytes  = 0
    /** rcvAvail at the last time we put a window value in an outgoing packet — used by
     *  SWS-avoidance (RFC 9293 §3.8.6.2.2) to suppress sub-MSS window updates. */
    private var lastAdvertisedAvail = 0

    var closed = false

    private fun seq32After(a: Long, b: Long): Boolean {
        val d = (a - b) and 0xFFFFFFFFL
        return d in 1L..0x7FFFFFFFL
    }

    private fun flightSize(): Long = (ourSeq - sndUna) and 0xFFFFFFFFL

    // RFC 6675 "pipe": bytes assumed to still be in the network — flight minus segments
    // the receiver has SACKed. Used for cwnd-based send pacing during recovery.
    private fun pipe(): Long = (flightSize() - sackedBytes).coerceAtLeast(0L)

    // Local receive buffer headroom in bytes (pre-pressure-scale).
    private fun rcvAvail(): Int = (RCV_BUF_MAX - writeQueueBytes - oooBufferBytes).coerceAtLeast(0)
    // What we will *actually* advertise: local headroom multiplied by the global
    // pressure scale. If the inbound queue is congested this shrinks toward 0,
    // pushing TCP-level backpressure all the way to the peer's send path.
    private fun effectiveRcvAvail(): Int = (rcvAvail() * rwndScale()).toInt().coerceAtLeast(0)
    // Field value to put in outgoing TCP header (post-handshake): scaled by recvWScale, capped at u16.
    private fun rcvWindow(): Int {
        val avail = effectiveRcvAvail()
        lastAdvertisedAvail = avail
        return (avail shr recvWScale).coerceAtMost(RCV_WIN_MAX)
    }
    // Field value to use in our SYN-ACK: window scaling MUST NOT be applied to the SYN-ACK itself.
    private fun rcvWindowSyn(): Int {
        val avail = effectiveRcvAvail()
        lastAdvertisedAvail = avail
        return avail.coerceAtMost(RCV_WIN_MAX)
    }

    private fun pkt(seq: Long = ourSeq, flags: Int, payload: ByteArray = EMPTY): ByteArray {
        // Include SACK blocks in ACKs (but not in SYN-ACK — that uses buildTcpPkt directly).
        val opts = if (sackPermitted && oooBuffer.isNotEmpty() && flags and 0x10 != 0 && flags and 0x02 == 0)
            sackOptBytes(computeSackBlocks()) else EMPTY
        return buildTcpPkt(dstIp, clientIp, dPort, cPort, seq, ourAck, flags, payload,
                           window = rcvWindow(), options = opts)
    }

    // ── Connect ───────────────────────────────────────────────────────────────

    fun startConnect(addr: InetSocketAddress) {
        try { channel.connect(addr) } catch (e: Exception) {
            log("TCP $dPort connect error: ${e.message}"); onConnectFailed()
        }
    }

    // SYN-ACK options: always advertise MSS, plus WS / SACK-Permitted if peer requested them.
    // Padding chosen so the total option block is always a multiple of 4 bytes.
    private fun synAckOpts(): ByteArray {
        val mssHi = (OUR_MSS ushr 8).toByte(); val mssLo = OUR_MSS.toByte()
        val ws    = recvWScale.toByte()
        return when {
            wsActive && sackPermitted -> byteArrayOf(2, 4, mssHi, mssLo, 1, 3, 3, ws, 1, 1, 4, 2)
            wsActive                  -> byteArrayOf(2, 4, mssHi, mssLo, 1, 3, 3, ws)
            sackPermitted             -> byteArrayOf(2, 4, mssHi, mssLo, 1, 1, 4, 2)
            else                      -> byteArrayOf(2, 4, mssHi, mssLo)
        }
    }

    fun onConnected() {
        if (closed) return
        sendSynAck()
        state = TcpState.SYN_RCVD
    }

    private fun sendSynAck() {
        send(buildTcpPkt(dstIp, clientIp, dPort, cPort,
                         (ourSeq - 1L) and 0xFFFFFFFFL, ourAck, 0x12, EMPTY,
                         window = rcvWindowSyn(), options = synAckOpts()))
        synAckOutstanding = true
        // Arm RTO so we retransmit the SYN-ACK if the client's ACK is lost.
        if (rtoDeadlineMs == Long.MAX_VALUE) rtoDeadlineMs = System.currentTimeMillis() + rto
    }

    // Called by PacketProcessor when a duplicate SYN with the same ISN arrives.
    fun resendSynAck() {
        if (closed || state != TcpState.SYN_RCVD) return
        sendSynAck()
    }

    fun onConnectFailed() {
        if (closed) return
        log("TCP $dPort connect failed")
        send(pkt(flags = 0x04))      // RST with seq=ourSeq so client's window check accepts it
        close()
    }

    // ── Server-side events ────────────────────────────────────────────────────

    fun onDataFromServer(data: ByteArray) {
        if (closed) return
        when (state) {
            TcpState.ESTABLISHED, TcpState.CLOSE_WAIT -> {
                val seq = ourSeq
                ourSeq = (ourSeq + data.size.toLong()) and 0xFFFFFFFFL
                sndBuf.addLast(SndSeg(seq, data))
                send(pkt(seq, 0x18, data))
                if (rttSeq == null) { rttSeq = (seq + data.size.toLong()) and 0xFFFFFFFFL; rttSentAt = System.currentTimeMillis() }
                scheduleRto()
                scheduleTlp()
                if (sndWnd == 0 || pipe() >= minOf(cwnd, MAX_SND_BUF).toLong() * TCP_MSS) readPaused = true
            }
            else -> {}
        }
    }

    fun onEof() {
        if (closed) return
        when (state) {
            TcpState.ESTABLISHED -> { sendFin(); state = TcpState.FIN_WAIT_1 }
            TcpState.CLOSE_WAIT  -> { sendFin(); state = TcpState.LAST_ACK }
            else                 -> close()
        }
    }

    fun onWritten(n: Int) {
        val prevAvail = effectiveRcvAvail()
        writeQueueBytes = (writeQueueBytes - n).coerceAtLeast(0)
        val newAvail = effectiveRcvAvail()
        // Send a window update when:
        //   - we just transitioned from a closed window (anti-deadlock), or
        //   - the window has grown by at least MSS since the last advertisement
        //     (RFC 9293 silly-window-syndrome avoidance).
        if ((prevAvail == 0 && newAvail > 0) ||
            (newAvail - lastAdvertisedAvail >= OUR_MSS)) {
            send(pkt(flags = 0x10))
        }
    }

    // Called by PacketProcessor when the global rwnd scale rises (queue drained). The
    // session's effective window may have grown even though its local buffer didn't
    // change — push an ACK so a peer that stalled at scale=0 wakes up.
    fun onGlobalRwndGrew() {
        if (closed || (state != TcpState.ESTABLISHED && state != TcpState.CLOSE_WAIT)) return
        val newAvail = effectiveRcvAvail()
        if ((lastAdvertisedAvail == 0 && newAvail > 0) ||
            (newAvail - lastAdvertisedAvail >= OUR_MSS)) {
            send(pkt(flags = 0x10))
        }
    }

    // ── Client-side packets ───────────────────────────────────────────────────

    // payload/off/len point into the inbound IP packet — no copy. receiveData wraps the slice
    // for in-order delivery and copies only when buffering out-of-order.
    fun receive(flags: Int, seq: Long, ackNum: Long, window: Int,
                payload: ByteArray, payOff: Int, payLen: Int,
                sackBlocks: LongArray = EMPTY_LONGS) {
        if (closed) return
        // RST is short-circuited in PacketProcessor.handleTcp before reaching us.
        updateSndWnd(window)

        when (state) {
            TcpState.SYN_RCVD    -> rxSynRcvd(flags, seq, ackNum, payload, payOff, payLen)
            TcpState.ESTABLISHED -> rxEstablished(flags, seq, ackNum, payload, payOff, payLen, sackBlocks)
            TcpState.FIN_WAIT_1  -> rxFinWait1(flags, seq, ackNum, payload, payOff, payLen, sackBlocks)
            TcpState.FIN_WAIT_2  -> rxFinWait2(flags, seq, ackNum, payload, payOff, payLen, sackBlocks)
            TcpState.CLOSING     -> rxClosing(flags, ackNum)
            TcpState.CLOSE_WAIT  -> rxCloseWait(flags, ackNum, sackBlocks)
            TcpState.LAST_ACK    -> rxLastAck(flags, ackNum)
            TcpState.TIME_WAIT   -> { if (flags and 0x01 != 0) send(pkt(flags = 0x10)) }
            TcpState.CLOSED      -> {}
        }
    }

    private fun rxSynRcvd(flags: Int, seq: Long, ackNum: Long, payload: ByteArray, payOff: Int, payLen: Int) {
        // Pure-SYN duplicates are handled in PacketProcessor.handleTcp before this point.
        if (flags and 0x10 != 0 && ackNum == ourSeq) {
            // Client has acked our SYN-ACK — handshake done.
            synAckOutstanding = false
            rtoDeadlineMs = Long.MAX_VALUE
            rtoRetries    = 0
            state = TcpState.ESTABLISHED
            if (payLen > 0) receiveData(seq, payload, payOff, payLen)
            if (flags and 0x01 != 0) clientFin(seq, payLen)
        }
    }

    private fun rxEstablished(flags: Int, seq: Long, ackNum: Long, payload: ByteArray, payOff: Int, payLen: Int,
                               sackBlocks: LongArray) {
        if (flags and 0x10 != 0) onAck(ackNum, sackBlocks)
        if (payLen > 0) receiveData(seq, payload, payOff, payLen)
        if (flags and 0x01 != 0) clientFin(seq, payLen)
    }

    private fun rxFinWait1(flags: Int, seq: Long, ackNum: Long, payload: ByteArray, payOff: Int, payLen: Int,
                            sackBlocks: LongArray) {
        if (payLen > 0) receiveData(seq, payload, payOff, payLen)
        if (flags and 0x10 != 0) {
            onAck(ackNum, sackBlocks)
            if (ourFinSeq != null && ackNum == ourSeq) {
                ourFinSeq = null; rtoDeadlineMs = Long.MAX_VALUE
                state = TcpState.FIN_WAIT_2
            }
        }
        // clientFin checks state after possible FIN_WAIT_2 transition above
        if (flags and 0x01 != 0) clientFin(seq, payLen)
    }

    private fun rxFinWait2(flags: Int, seq: Long, ackNum: Long, payload: ByteArray, payOff: Int, payLen: Int,
                            sackBlocks: LongArray) {
        if (flags and 0x10 != 0) onAck(ackNum, sackBlocks)
        if (payLen > 0) receiveData(seq, payload, payOff, payLen)
        if (flags and 0x01 != 0) clientFin(seq, payLen)
    }

    private fun rxClosing(flags: Int, ackNum: Long) {
        if (flags and 0x10 != 0 && ourFinSeq != null && ackNum == ourSeq) {
            ourFinSeq = null; rtoDeadlineMs = Long.MAX_VALUE
            state = TcpState.TIME_WAIT; scheduleTimeWait()
        }
    }

    private fun rxCloseWait(flags: Int, ackNum: Long, sackBlocks: LongArray) {
        if (flags and 0x10 != 0) onAck(ackNum, sackBlocks)
        // client has half-closed; no more data expected from them
    }

    private fun rxLastAck(flags: Int, ackNum: Long) {
        if (flags and 0x10 != 0 && ourFinSeq != null && ackNum == ourSeq) {
            ourFinSeq = null; close()
        }
    }

    // Handles an incoming FIN from the client (may be out-of-order).
    private fun clientFin(seq: Long, payloadSize: Int) {
        val finAt = (seq + payloadSize.toLong()) and 0xFFFFFFFFL
        if (finAt == ourAck) doClientFin()
        else if (pendingFinAtSeq == null || seq32After(finAt, pendingFinAtSeq!!)) pendingFinAtSeq = finAt
    }

    // Processes an in-order client FIN: increments ACK, sends ACK, transitions state.
    private fun doClientFin() {
        ourAck = (ourAck + 1L) and 0xFFFFFFFFL
        send(pkt(flags = 0x10))
        when (state) {
            TcpState.ESTABLISHED -> {
                runCatching { channel.socket().shutdownOutput() }  // half-close server write
                state = TcpState.CLOSE_WAIT
            }
            TcpState.FIN_WAIT_1  -> state = TcpState.CLOSING          // simultaneous close
            TcpState.FIN_WAIT_2  -> { state = TcpState.TIME_WAIT; scheduleTimeWait() }
            else                 -> close()
        }
    }

    private fun sendFin() {
        val finSeq = ourSeq
        ourSeq = (ourSeq + 1L) and 0xFFFFFFFFL
        ourFinSeq = finSeq
        send(pkt(finSeq, 0x11))   // FIN+ACK
        rtoDeadlineMs = System.currentTimeMillis() + rto
    }

    private fun scheduleTimeWait() {
        timeWaitDeadlineMs = System.currentTimeMillis() + TIME_WAIT_MS
    }

    // ── Data delivery ─────────────────────────────────────────────────────────

    private fun receiveData(seq: Long, payload: ByteArray, off: Int, len: Int) {
        when {
            seq == ourAck           -> { deliverData(payload, off, len); flushOooBuffer() }
            seq32After(seq, ourAck) -> {
                if (!oooBuffer.containsKey(seq) && oooBuffer.size < OOO_BUF_MAX) {
                    // Out-of-order: must copy because the inbound packet is short-lived.
                    val copy = payload.copyOfRange(off, off + len)
                    oooBuffer[seq] = copy; oooBufferBytes += len
                    dbg { "TCP $dPort OOO buffered seq=$seq len=$len (slots=${oooBuffer.size}/$OOO_BUF_MAX)" }
                } else if (oooBuffer.size >= OOO_BUF_MAX) {
                    dbg { "TCP $dPort OOO buffer full, dropping seq=$seq len=$len" }
                }
                send(pkt(flags = 0x10))
            }
            else -> {
                // seq < ourAck: partially overlapping retransmit — deliver the new tail if any
                val seqEnd = (seq + len.toLong()) and 0xFFFFFFFFL
                if (seq32After(seqEnd, ourAck)) {
                    val trim = ((ourAck - seq) and 0xFFFFFFFFL).toInt()
                    deliverData(payload, off + trim, len - trim)
                    flushOooBuffer()
                } else {
                    send(pkt(flags = 0x10))   // fully duplicate
                }
            }
        }
    }

    // Delivers data into the write queue without sending an ACK. ByteBuffer.wrap is zero-copy:
    // the underlying array is retained by the buffer until the channel write consumes it.
    // The caller (flushOooBuffer) sends one cumulative ACK after all segments are delivered.
    private fun deliverData(data: ByteArray, off: Int, len: Int) {
        writeQueueBytes += len
        writeQueue.addLast(ByteBuffer.wrap(data, off, len))
        onNeedWrite(this)
        ourAck = (ourAck + len.toLong()) and 0xFFFFFFFFL
    }

    private fun flushOooBuffer() {
        flush@ while (true) {
            // Exact match: next expected byte is exactly the start of a buffered segment.
            val exact = oooBuffer.remove(ourAck)
            if (exact != null) { oooBufferBytes -= exact.size; deliverData(exact, 0, exact.size); continue@flush }
            // Partial overlap: a buffered segment starts before ourAck but its tail is new.
            // This happens when a large in-order retransmit jumped ourAck past an OOO entry's start.
            var overlapKey: Long? = null
            for ((oooSeq, oooData) in oooBuffer) {
                val oooEnd = (oooSeq + oooData.size.toLong()) and 0xFFFFFFFFL
                if (seq32After(ourAck, oooSeq) && seq32After(oooEnd, ourAck)) { overlapKey = oooSeq; break }
            }
            val oSeq = overlapKey ?: break
            val oData = oooBuffer.remove(oSeq)!!
            oooBufferBytes -= oData.size
            val trim = ((ourAck - oSeq) and 0xFFFFFFFFL).toInt()
            deliverData(oData, trim, oData.size - trim)
        }
        send(pkt(flags = 0x10))
        val finAt = pendingFinAtSeq
        if (finAt != null && finAt == ourAck) { pendingFinAtSeq = null; doClientFin() }
    }

    // ── Congestion control & retransmit ───────────────────────────────────────

    private fun onAck(ackNum: Long, sackBlocks: LongArray) {
        if (seq32After(sndUna, ackNum)) return   // stale — ackNum before sndUna, ignore
        when {
            seq32After(ackNum, sndUna) -> {
                if (seq32After(ackNum, ourSeq)) return
                handleNewAck(ackNum, sackBlocks)
            }
            ackNum == sndUna && sndBuf.isNotEmpty() -> handleDupAck(sackBlocks)
        }
    }

    // New ACK: advances sndUna.
    private fun handleNewAck(ackNum: Long, sackBlocks: LongArray) {
        sndUna = ackNum; dupAckCount = 0; rtoRetries = 0
        // A genuinely new ACK arrived: any pending probe is moot.
        tlpDeadlineMs = Long.MAX_VALUE

        // RTT sample: if the tracked segment is now fully acked, measure.
        val rttS = rttSeq
        if (rttS != null && !seq32After(rttS, ackNum)) {
            updateRtt(System.currentTimeMillis() - rttSentAt)
            rttSeq = null
        }

        while (sndBuf.isNotEmpty()) {
            val seg    = sndBuf.first()
            val segEnd = (seg.seq + seg.data.size) and 0xFFFFFFFFL
            if (!seq32After(segEnd, ackNum)) {
                if (seg.sacked) sackedBytes -= seg.data.size.toLong()
                sndBuf.removeFirst()
            } else break
        }
        if (sackedBytes < 0) sackedBytes = 0   // defensive: keep nonnegative on bookkeeping drift

        processSackBlocks(sackBlocks)

        if (inFastRecovery) {
            if (!seq32After(recoverPoint, ackNum)) {
                // Full ACK: ackNum reached recoverPoint → exit recovery, deflate
                cwnd = ssthresh; acksInCa = 0; inFastRecovery = false
                dbg { "TCP $dPort recovery exit cwnd=$cwnd" }
            } else {
                // Partial ACK during recovery: per RFC 6675 retransmit all unsacked holes,
                // and per RFC 5681 §3.2 step 5 *don't* deflate cwnd here — keeping the dup-ACK
                // inflation lets onDataFromServer push new data alongside the retransmits, so
                // the cycle is no longer "1 RTT recovery + 1 RTT new-data" but a single RTT.
                retransmitAllHoles()
            }
        } else {
            if (cwnd < ssthresh) cwnd = minOf(cwnd + 1, MAX_SND_BUF)
            else if (++acksInCa >= cwnd) { cwnd = minOf(cwnd + 1, MAX_SND_BUF); acksInCa = 0 }
        }

        if (sndBuf.isEmpty() && ourFinSeq == null) {
            rtoDeadlineMs = Long.MAX_VALUE
        } else {
            // RFC 6298 §5.3: restart retransmit timer on each new ACK while data is outstanding.
            rtoDeadlineMs = System.currentTimeMillis() + rto
        }
        if (readPaused && sndWnd > 0 && pipe() < cwnd.toLong() * TCP_MSS) { readPaused = false; onNeedRead(this) }
    }

    // Duplicate ACK: sndUna unchanged.
    private fun handleDupAck(sackBlocks: LongArray) {
        processSackBlocks(sackBlocks)
        if (inFastRecovery) {
            // Each dup ACK during recovery signals one segment left the network; inflate cwnd.
            cwnd = minOf(cwnd + 1, MAX_SND_BUF)
            if (readPaused && sndWnd > 0 && pipe() < cwnd.toLong() * TCP_MSS) { readPaused = false; onNeedRead(this) }
            return
        }
        // RFC 6675 §5: enter fast-recovery as soon as SACK info indicates loss. This is what
        // makes single-dup-ACK responses to a TLP probe trigger immediate recovery instead of
        // waiting for the RFC 5681 3-dup-ACK threshold (which usually never arrives on tail loss).
        if (sackPermitted && hasLostSegment()) {
            enterFastRecovery()
            return
        }
        // RFC 5681 fallback: classic 3-dup-ACK threshold (no SACK, or insufficient evidence yet).
        if (++dupAckCount == DUP_ACK_THRESH) enterFastRecovery()
    }

    private fun enterFastRecovery() {
        ssthresh = maxOf((flightSize() / (2L * TCP_MSS)).toInt(), SSTHRESH_MIN)
        cwnd = ssthresh + DUP_ACK_THRESH                          // inflate cwnd
        recoverPoint = ourSeq                                     // sndNxt at recovery entry
        inFastRecovery = true; dupAckCount = 0; acksInCa = 0
        retransmitAllHoles()                                      // RFC 6675: retransmit holes within cwnd-pipe budget
        dbg { "TCP $dPort fast-recovery cwnd→$cwnd ssthresh=$ssthresh recover@$recoverPoint" }
    }

    // RFC 6675 §4 IsLost approximation: returns true if any unsacked segment in sndBuf has
    // at least DupThresh SACKed segments after it. Strong evidence of loss versus mere
    // reordering, so we can skip the 3-dup-ACK wait and recover immediately.
    // Single reverse pass: count SACKed seen so far; an unsacked segment is "lost" the
    // moment we've already seen DupThresh SACKed segments after its position.
    private fun hasLostSegment(): Boolean {
        if (sndBuf.size < DUP_ACK_THRESH) return false
        var sackedAfter = 0
        for (i in sndBuf.indices.reversed()) {
            if (sndBuf[i].sacked) sackedAfter++
            else if (sackedAfter >= DUP_ACK_THRESH) return true
        }
        return false
    }

    // RFC 6298 RTT estimator update.
    private fun updateRtt(sample: Long) {
        val r = sample.coerceAtLeast(1L)
        if (srtt == 0L) {
            srtt   = r
            rttvar = r / 2
        } else {
            rttvar = (3 * rttvar + abs(srtt - r)) / 4   // β = 1/4
            srtt   = (7 * srtt   + r)                 / 8    // α = 1/8
        }
        rto = (srtt + maxOf(1L, 4 * rttvar)).coerceIn(RTO_MIN, RTO_MAX)
        dbg { "TCP $dPort RTT sample=${r}ms srtt=${srtt}ms rttvar=${rttvar}ms rto=${rto}ms" }
    }

    private fun retransmitFirst() {
        if (rttSeq != null) rttSeq = null   // Karn's algorithm
        for (i in sndBuf.indices) {
            val seg = sndBuf[i]
            if (seg.sacked) continue
            // For the first segment, sndUna may sit mid-segment after a partial ACK.
            val off      = if (i == 0) ((sndUna - seg.seq) and 0xFFFFFFFFL).toInt().coerceIn(0, seg.data.size) else 0
            val startSeq = if (i == 0) sndUna else seg.seq
            send(buildTcpPkt(dstIp, clientIp, dPort, cPort, startSeq, ourAck, 0x18,
                             seg.data, off, seg.data.size - off, rcvWindow()))
            return
        }
        val finSeq = ourFinSeq ?: return
        send(pkt(finSeq, 0x11))
    }

    // RFC 6675-style: retransmit unsacked holes in one shot, bounded by the (cwnd - pipe)
    // budget so a large `cwnd` doesn't produce a huge burst that overwhelms the channel.
    // Always sends at least one segment to make forward progress.
    private fun retransmitAllHoles() {
        if (rttSeq != null) rttSeq = null   // Karn's algorithm
        val budget = (cwnd.toLong() * TCP_MSS - pipe()).coerceAtLeast(TCP_MSS.toLong())
        var sent = 0L
        var any = false
        for (i in sndBuf.indices) {
            val seg = sndBuf[i]
            if (seg.sacked) continue
            val off      = if (i == 0) ((sndUna - seg.seq) and 0xFFFFFFFFL).toInt().coerceIn(0, seg.data.size) else 0
            val segLen   = seg.data.size - off
            if (any && sent + segLen > budget) break   // budget exhausted; first segment always goes
            val startSeq = if (i == 0) sndUna else seg.seq
            send(buildTcpPkt(dstIp, clientIp, dPort, cPort, startSeq, ourAck, 0x18,
                             seg.data, off, segLen, rcvWindow()))
            sent += segLen.toLong()
            any = true
        }
        if (!any) {
            val finSeq = ourFinSeq ?: return
            send(pkt(finSeq, 0x11))
        }
    }

    // ── SACK helpers ──────────────────────────────────────────────────────────

    // SACK blocks are flat LongArrays of interleaved [left, right] pairs (size = 2 * N).

    // Mark sndBuf segments as SACKed when fully covered by a received SACK block.
    private fun processSackBlocks(blocks: LongArray) {
        if (!sackPermitted || blocks.isEmpty()) return
        for (i in sndBuf.indices) {
            val seg = sndBuf[i]
            if (seg.sacked) continue
            val segEnd       = (seg.seq + seg.data.size.toLong()) and 0xFFFFFFFFL
            val unackedStart = if (i == 0) sndUna else seg.seq   // account for partial ACK on seg 0
            var j = 0
            while (j < blocks.size) {
                val left  = blocks[j]
                val right = blocks[j + 1]
                if (!seq32After(left, unackedStart) && !seq32After(segEnd, right)) {
                    seg.sacked = true
                    sackedBytes += seg.data.size.toLong()
                    break
                }
                j += 2
            }
        }
    }

    // Compute up to 4 merged SACK blocks from oooBuffer, sorted by sequence number.
    // Returns interleaved [left, right] LongArray.
    private fun computeSackBlocks(): LongArray {
        if (oooBuffer.isEmpty()) return EMPTY_LONGS
        val sorted = oooBuffer.entries.sortedWith { a, b ->
            if (a.key == b.key) 0 else if (seq32After(a.key, b.key)) 1 else -1
        }
        val merged = LongArray(8)   // up to 4 blocks * 2 longs
        var n = 0
        var left  = sorted[0].key
        var right = (sorted[0].key + sorted[0].value.size.toLong()) and 0xFFFFFFFFL
        for (i in 1 until sorted.size) {
            val s = sorted[i]
            val e = (s.key + s.value.size.toLong()) and 0xFFFFFFFFL
            if (!seq32After(s.key, right)) {              // adjacent or overlapping — extend
                if (seq32After(e, right)) right = e
            } else {
                if (n < 4) { merged[n * 2] = left; merged[n * 2 + 1] = right; n++ }
                left = s.key; right = e
            }
        }
        if (n < 4) { merged[n * 2] = left; merged[n * 2 + 1] = right; n++ }
        return merged.copyOf(n * 2)
    }

    // Build TCP SACK option bytes: NOP NOP kind=5 len [left right]*  (multiple of 4 bytes)
    private fun sackOptBytes(blocks: LongArray): ByteArray {
        val nBlocks = blocks.size / 2
        val opt = ByteArray(4 + nBlocks * 8)
        opt[0] = 1; opt[1] = 1                              // NOP NOP
        opt[2] = 5; opt[3] = (2 + nBlocks * 8).toByte()
        var o = 4
        var i = 0
        while (i < blocks.size) {
            putU32(opt, o, blocks[i]); putU32(opt, o + 4, blocks[i + 1])
            o += 8
            i += 2
        }
        return opt
    }

    // ── Zero-window probe (persist timer) ─────────────────────────────────────

    private fun updateSndWnd(newWnd: Int) {
        val wasZero = sndWnd == 0
        // Per RFC 7323, the window field carries an unsigned 16-bit value that the receiver
        // must left-shift by the negotiated send-side window scale.
        sndWnd = if (sendWScale > 0) newWnd shl sendWScale else newWnd
        if (sndWnd > 0) {
            if (wasZero) { zwpDeadlineMs = Long.MAX_VALUE; zwpBackoff = 0 }
            if (readPaused && pipe() < minOf(cwnd, MAX_SND_BUF).toLong() * TCP_MSS) {
                readPaused = false; onNeedRead(this)
            }
        } else if (!wasZero) {
            scheduleZwp()
        }
    }

    private fun scheduleZwp() {
        if (closed || zwpDeadlineMs != Long.MAX_VALUE) return
        val delayMs = minOf(rto shl zwpBackoff.coerceAtMost(6), RTO_MAX)
        zwpDeadlineMs = System.currentTimeMillis() + delayMs
    }

    // Called by PacketProcessor.mainLoop when zwpDeadlineMs has elapsed.
    fun fireZwp() {
        zwpDeadlineMs = Long.MAX_VALUE
        if (closed || sndWnd > 0) { zwpBackoff = 0; return }
        dbg { "TCP $dPort zero-window probe (backoff=$zwpBackoff sndWnd=$sndWnd)" }
        sendZwpProbe()
        zwpBackoff = (zwpBackoff + 1).coerceAtMost(6)
        scheduleZwp()   // re-arm with backed-off interval
    }

    // Sends a 1-byte probe at sndUna. The client's ACK will carry its current window,
    // which updateSndWnd will use to unblock reads if the window has reopened.
    private fun sendZwpProbe() {
        if (sndBuf.isEmpty()) { send(pkt(flags = 0x10)); return }
        // Karn's algorithm: ZWP retransmits a byte that's already been sent — don't sample RTT.
        if (rttSeq != null) rttSeq = null
        val seg = sndBuf.first()
        val off = ((sndUna - seg.seq) and 0xFFFFFFFFL).toInt().coerceIn(0, seg.data.size - 1)
        send(buildTcpPkt(dstIp, clientIp, dPort, cPort, sndUna, ourAck, 0x18,
                         seg.data, off, 1, rcvWindow()))
    }

    private fun scheduleRto() {
        if (closed || rtoDeadlineMs != Long.MAX_VALUE) return
        rtoDeadlineMs = System.currentTimeMillis() + rto
    }

    // RFC 8985 §6.2: schedule a Tail Loss Probe to fire when there's outstanding data.
    // The probe causes the receiver to ACK (or dup-ACK with SACK), which either resolves
    // the gap or triggers fast-recovery — far quicker than the RTO path that drops cwnd
    // to 1 and goes back to slow-start. Each new data send can arm a fresh probe; the
    // tlpDeadlineMs guard prevents double-scheduling while one is already in flight.
    private fun scheduleTlp() {
        if (closed || sndBuf.isEmpty()) return
        if (tlpDeadlineMs != Long.MAX_VALUE) return
        val srttEst = if (srtt > 0L) srtt else RTO_INITIAL / 2
        // Linux-style PTO: max(2 * srtt, 10 ms), capped at rto so it can't fire after RTO.
        val pto = (2 * srttEst).coerceAtLeast(PTO_MIN_MS).coerceAtMost(rto)
        tlpDeadlineMs = System.currentTimeMillis() + pto
    }

    // Called by PacketProcessor.mainLoop when tlpDeadlineMs has elapsed.
    fun fireTlp() {
        tlpDeadlineMs = Long.MAX_VALUE
        if (closed || sndBuf.isEmpty()) return
        // Karn's algorithm: don't sample RTT on a retransmitted segment, otherwise we'd
        // measure original-send → ACK and corrupt the smoothed estimator with huge values.
        if (rttSeq != null) rttSeq = null
        // Retransmit the most-recently sent unacked segment to elicit an ACK / SACK.
        val seg = sndBuf.last()
        val off = if (sndBuf.size == 1)
            ((sndUna - seg.seq) and 0xFFFFFFFFL).toInt().coerceIn(0, seg.data.size)
        else 0
        val startSeq = if (sndBuf.size == 1) sndUna else seg.seq
        send(buildTcpPkt(dstIp, clientIp, dPort, cPort, startSeq, ourAck, 0x18,
                         seg.data, off, seg.data.size - off, rcvWindow()))
        dbg { "TCP $dPort TLP probe (seq=$startSeq len=${seg.data.size - off})" }
        // Defer RTO so the probe has a full RTO window to elicit a response. Without this,
        // RTO can fire before the probe's ACK could possibly arrive (RTT-bound), wasting
        // the probe and triggering the costly slow-start path anyway.
        rtoDeadlineMs = System.currentTimeMillis() + rto
    }

    // Called by PacketProcessor.mainLoop when rtoDeadlineMs has elapsed.
    // Returns true if the session must be closed by the caller — never closes inline,
    // because PacketProcessor.fireTcpTimers iterates `tcp.values` and a self-close would
    // mutate the map mid-iteration (ConcurrentModificationException).
    fun fireRto(): Boolean {
        rtoDeadlineMs = Long.MAX_VALUE
        if (closed) return false

        // Retransmit the SYN-ACK if we never got the third leg of the handshake.
        if (synAckOutstanding && state == TcpState.SYN_RCVD) {
            if (++rtoRetries > MAX_RTO_RETRIES) {
                log("TCP $dPort giving up on SYN-ACK after $MAX_RTO_RETRIES retries")
                return true
            }
            rto = minOf(rto * 2, RTO_MAX)
            dbg { "TCP $dPort SYN-ACK retransmit (try=$rtoRetries next-rto=${rto}ms)" }
            sendSynAck()
            rtoDeadlineMs = System.currentTimeMillis() + rto
            return false
        }

        if (sndBuf.isEmpty() && ourFinSeq == null) return false
        if (++rtoRetries > MAX_RTO_RETRIES) {
            log("TCP $dPort giving up after $MAX_RTO_RETRIES RTOs")
            return true
        }
        inFastRecovery = false; dupAckCount = 0
        for (i in sndBuf.indices) sndBuf[i].sacked = false   // RFC 6675: retransmit all on RTO
        sackedBytes = 0L
        ssthresh = maxOf((flightSize() / (2L * TCP_MSS)).toInt(), SSTHRESH_MIN); cwnd = 1; acksInCa = 0
        rto = minOf(rto * 2, RTO_MAX)
        dbg { "TCP $dPort RTO retransmit (try=$rtoRetries flight=${flightSize()}B cwnd→1 ssthresh→$ssthresh next-rto=${rto}ms)" }
        retransmitFirst()
        rtoDeadlineMs = System.currentTimeMillis() + rto   // re-arm
        return false
    }

    /** Earliest pending timer deadline (Long.MAX_VALUE if none active). */
    fun nextDeadlineMs(): Long =
        minOf(rtoDeadlineMs, zwpDeadlineMs, timeWaitDeadlineMs, tlpDeadlineMs)

    /** Fires any timers whose deadline is ≤ `now`. Returns true if the session should be closed. */
    fun fireTimers(now: Long): Boolean {
        if (closed) return false
        if (timeWaitDeadlineMs <= now) {
            timeWaitDeadlineMs = Long.MAX_VALUE
            dbg { "TCP $dPort TIME_WAIT expired, closing" }
            return true   // caller closes outside the iteration
        }
        // TLP runs first because it's strictly earlier. Its body pushes rtoDeadlineMs out by
        // a full RTO, so the immediately-following RTO check below sees a future deadline.
        // That avoids double-retransmits when mainLoop happens to wake with both expired.
        if (tlpDeadlineMs <= now)              fireTlp()
        if (rtoDeadlineMs <= now && !closed) {
            // RTO may demand close (retry budget exhausted). Surface that so the caller
            // closes us outside its `tcp.values` iteration.
            if (fireRto()) return true
        }
        if (zwpDeadlineMs <= now && !closed)   fireZwp()
        return false
    }

    fun close() {
        if (!closed) {
            closed = true
            state = TcpState.CLOSED
            downloadPaused = false; downloadPausedUntilMs = 0L
            rtoDeadlineMs = Long.MAX_VALUE
            zwpDeadlineMs = Long.MAX_VALUE
            timeWaitDeadlineMs = Long.MAX_VALUE
            tlpDeadlineMs = Long.MAX_VALUE
            sndBuf.clear(); sackedBytes = 0L
            oooBuffer.clear(); oooBufferBytes = 0
            pendingFinAtSeq = null; writeQueueBytes = 0; writeQueue.clear()
            runCatching { channel.close() }
            onRemove()
        }
    }
}

// ── UDP session ───────────────────────────────────────────────────────────────

class UdpSession(
    private val clientIp: Int,
    val cPort:            Int,
    val dstIp:            Int,
    val dstPort:          Int,
    private val send:     (ByteArray) -> Unit,
    private val onRemove: () -> Unit,
    private val log:      (String) -> Unit = ::println,
    private val isDebug:  () -> Boolean    = { false },
) {
    private inline fun dbg(msg: () -> String) { if (isDebug()) log(msg()) }

    // Connect the channel up front so receive returns datagrams from this peer only and
    // the kernel doesn't allocate a fresh InetSocketAddress for the source on each packet.
    val channel = DatagramChannel.open().also {
        it.configureBlocking(false)
        try { it.connect(InetSocketAddress(int4ToAddr(dstIp), dstPort)) }
        catch (e: Exception) { dbg { "UDP :$dstPort connect failed: ${e.message}" } }
    }
    var closed         = false
    var lastActivityMs = System.currentTimeMillis()

    fun send(payload: ByteArray, payloadOff: Int, payloadLen: Int) {
        if (closed) return
        try {
            val n = channel.write(ByteBuffer.wrap(payload, payloadOff, payloadLen))
            if (n < payloadLen) dbg { "UDP :$dstPort partial write ($n/$payloadLen) — datagram dropped" }
        } catch (e: java.net.PortUnreachableException) {
            // Transient: ICMP Port Unreachable received on the connected channel.
            // Don't close — the destination may simply have a brief outage.
            dbg { "UDP :$dstPort port unreachable; ignoring" }
        } catch (e: Exception) {
            dbg { "UDP :$dstPort write failed: ${e.message} — closing session" }
            close()
        }
    }

    fun onReceive(data: ByteArray, dataOff: Int, dataLen: Int) {
        if (closed) return
        buildUdpFragments(dstIp, clientIp, dstPort, cPort, data, dataOff, dataLen).forEach(send)
    }

    fun close() { if (!closed) { closed = true; runCatching { channel.close() }; onRemove() } }
}

// ── Packet builders ───────────────────────────────────────────────────────────

internal fun buildTcpPkt(
    sIp: Int, dIp: Int, sPort: Int, dPort: Int,
    seq: Long, ack: Long, flags: Int,
    payload: ByteArray, payloadOff: Int = 0, payloadLen: Int = payload.size,
    window: Int = 65535,
    options: ByteArray = EMPTY,          // must be a multiple of 4 bytes
): ByteArray {
    val optLen    = options.size          // already padded by callers
    val tcpHdrLen = 20 + optLen
    val pkt       = ByteArray(20 + tcpHdrLen + payloadLen)
    // TCP header at offset 20
    putU16(pkt, 20, sPort); putU16(pkt, 22, dPort)
    putU32(pkt, 24, seq);   putU32(pkt, 28, ack)
    pkt[32] = ((tcpHdrLen / 4) shl 4).toByte()   // data offset
    pkt[33] = flags.toByte(); putU16(pkt, 34, window)
    if (optLen > 0) options.copyInto(pkt, 40)
    val payStart = 40 + optLen
    if (payloadLen > 0) payload.copyInto(pkt, payStart, payloadOff, payloadOff + payloadLen)
    val tcpLen = tcpHdrLen + payloadLen
    putU16(pkt, 36, csumFinish(csumRange(csumPseudo(sIp, dIp, 6, tcpLen), pkt, 20, tcpLen)))
    // IP header at offset 0
    pkt[0] = 0x45.toByte(); putU16(pkt, 2, pkt.size)
    putU16(pkt, 6, 0x4000)             // DF=1 (don't fragment); MF=0; offset=0
    pkt[8] = 64; pkt[9] = 6
    putI32(pkt, 12, sIp); putI32(pkt, 16, dIp)
    putU16(pkt, 10, csumFinish(csumRange(0, pkt, 0, 20)))
    return pkt
}

internal fun buildUdpPkt(
    sIp: Int, dIp: Int, sPort: Int, dPort: Int,
    payload: ByteArray, payloadOff: Int = 0, payloadLen: Int = payload.size,
): ByteArray {
    val pkt = ByteArray(28 + payloadLen)
    // UDP header at offset 20; checksum field pkt[26:28] = 0 from ByteArray init
    putU16(pkt, 20, sPort); putU16(pkt, 22, dPort); putU16(pkt, 24, 8 + payloadLen)
    if (payloadLen > 0) payload.copyInto(pkt, 28, payloadOff, payloadOff + payloadLen)
    val udpLen = 8 + payloadLen
    putU16(pkt, 26, csumFinish(csumRange(csumPseudo(sIp, dIp, 17, udpLen), pkt, 20, udpLen)))
    // IP header at offset 0; checksum field pkt[10:12] = 0 from ByteArray init
    pkt[0] = 0x45.toByte(); putU16(pkt, 2, 28 + payloadLen)
    putU16(pkt, 6, 0x4000)             // DF=1 for unfragmented datagrams
    pkt[8] = 64; pkt[9] = 17
    putI32(pkt, 12, sIp); putI32(pkt, 16, dIp)
    putU16(pkt, 10, csumFinish(csumRange(0, pkt, 0, 20)))
    return pkt
}

// Fragments a UDP datagram into IP fragments that each fit within MTU (≤ 1500 bytes).
// The first fragment carries the UDP header; subsequent fragments carry raw payload slices.
// Each fragment's payload must be a multiple of 8 bytes except the last one (RFC 791).
internal fun buildUdpFragments(
    sIp: Int, dIp: Int, sPort: Int, dPort: Int,
    payload: ByteArray, payloadOff: Int, payloadLen: Int,
): List<ByteArray> {
    if (payloadLen <= UDP_MSS) return listOf(buildUdpPkt(sIp, dIp, sPort, dPort, payload, payloadOff, payloadLen))
    val id = Random.nextInt(0x10000)
    val result = mutableListOf<ByteArray>()
    // First fragment: IP header (20) + UDP header (8) + up to (UDP_MSS - 8) bytes of payload
    val firstPayload = UDP_MSS - 8   // 1464 bytes, multiple of 8 ✓
    val udpTotalLen  = 8 + payloadLen
    // Build first fragment with UDP header
    val frag0 = ByteArray(20 + 8 + firstPayload)
    putU16(frag0, 20, sPort); putU16(frag0, 22, dPort); putU16(frag0, 24, udpTotalLen)
    payload.copyInto(frag0, 28, payloadOff, payloadOff + firstPayload)
    // Checksum spans the entire UDP datagram (pseudo-header + UDP header + ALL payload bytes).
    var udpCsum = csumPseudo(sIp, dIp, 17, udpTotalLen)
    udpCsum = csumRange(udpCsum, frag0, 20, 8 + firstPayload)
    udpCsum = csumRange(udpCsum, payload, payloadOff + firstPayload, payloadLen - firstPayload)
    putU16(frag0, 26, csumFinish(udpCsum))
    // IP header: MF=1, fragment offset=0
    frag0[0] = 0x45.toByte(); putU16(frag0, 2, frag0.size)
    putU16(frag0, 4, id); putU16(frag0, 6, 0x2000)   // flags=MF, offset=0
    frag0[8] = 64; frag0[9] = 17
    putI32(frag0, 12, sIp); putI32(frag0, 16, dIp)
    putU16(frag0, 10, csumFinish(csumRange(0, frag0, 0, 20)))
    result.add(frag0)
    // Subsequent fragments: each carries up to 1480 bytes (multiple of 8) of original payload.
    // Fragment offset is measured in units of 8 bytes from start of original IP payload (UDP header + data).
    val fragDataMax = 1480   // 1500 - 20 IP header, and 1480 is divisible by 8
    var offset8 = (8 + firstPayload) / 8   // offset of next fragment in 8-byte units
    var pos = payloadOff + firstPayload
    while (pos < payloadOff + payloadLen) {
        val remaining = payloadOff + payloadLen - pos
        val chunk = minOf(remaining, fragDataMax)
        val mf = if (pos + chunk < payloadOff + payloadLen) 0x2000 else 0x0000
        val frag = ByteArray(20 + chunk)
        payload.copyInto(frag, 20, pos, pos + chunk)
        frag[0] = 0x45.toByte(); putU16(frag, 2, frag.size)
        putU16(frag, 4, id); putU16(frag, 6, mf or offset8)
        frag[8] = 64; frag[9] = 17
        putI32(frag, 12, sIp); putI32(frag, 16, dIp)
        putU16(frag, 10, csumFinish(csumRange(0, frag, 0, 20)))
        result.add(frag)
        offset8 += chunk / 8
        pos += chunk
    }
    return result
}

// ── Checksum ──────────────────────────────────────────────────────────────────

// Returns the RFC 793 pseudo-header sum (carries not yet folded).
private fun csumPseudo(sIp: Int, dIp: Int, proto: Int, len: Int): Int =
    ((sIp ushr 16) and 0xFFFF) + (sIp and 0xFFFF) +
    ((dIp ushr 16) and 0xFFFF) + (dIp and 0xFFFF) + proto + len

// Accumulates 16-bit one's-complement sum over b[off .. off+len-1] into init.
private fun csumRange(init: Int, b: ByteArray, off: Int, len: Int): Int {
    var s = init; var i = off; val end = off + len
    while (i + 1 < end) { s += ((b[i++].toInt() and 0xFF) shl 8) or (b[i++].toInt() and 0xFF) }
    if ((len and 1) != 0) s += (b[end - 1].toInt() and 0xFF) shl 8
    return s
}

// Folds carries and returns the one's complement.
private fun csumFinish(s: Int): Int {
    var r = s; while (r shr 16 != 0) r = (r and 0xFFFF) + (r shr 16); return r.inv() and 0xFFFF
}

// ── Address helpers ───────────────────────────────────────────────────────────

private fun ip4Int(b: ByteArray, o: Int) =
    ((b[o].toInt() and 0xFF) shl 24) or ((b[o+1].toInt() and 0xFF) shl 16) or
    ((b[o+2].toInt() and 0xFF) shl 8)  or  (b[o+3].toInt() and 0xFF)

private fun ip4Int(a: InetAddress) = ip4Int(a.address, 0)

private fun ip4Str(ip: Int) =
    "${(ip ushr 24) and 0xFF}.${(ip ushr 16) and 0xFF}.${(ip ushr 8) and 0xFF}.${ip and 0xFF}"

private fun int4ToAddr(ip: Int): InetAddress =
    InetAddress.getByAddress(byteArrayOf((ip ushr 24).toByte(), (ip ushr 16).toByte(), (ip ushr 8).toByte(), ip.toByte()))

// ── Wire helpers ──────────────────────────────────────────────────────────────

internal fun u16(b: ByteArray, o: Int) = ((b[o].toInt() and 0xFF) shl 8) or (b[o+1].toInt() and 0xFF)
internal fun u32(b: ByteArray, o: Int): Long = (u16(b, o).toLong() shl 16) or u16(b, o+2).toLong()
internal fun putU16(b: ByteArray, o: Int, v: Int)  { b[o] = (v shr 8).toByte(); b[o+1] = v.toByte() }
internal fun putU16(b: ByteArray, o: Int, v: Long) = putU16(b, o, v.toInt())
internal fun putU32(b: ByteArray, o: Int, v: Long) { putU16(b, o, (v shr 16).toInt()); putU16(b, o+2, v.toInt()) }
internal fun putI32(b: ByteArray, o: Int, v: Int)  { b[o] = (v ushr 24).toByte(); b[o+1] = (v ushr 16).toByte(); b[o+2] = (v ushr 8).toByte(); b[o+3] = v.toByte() }
