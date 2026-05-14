package ai.bale.proxy

import ai.bale.proxy.tunnel.LiveKitStats
import ai.bale.proxy.tunnel.PacketStats
import android.graphics.Color
import android.graphics.Typeface
import android.os.Bundle
import android.view.Gravity
import android.view.View
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import kotlinx.coroutines.*

/** Per-client TCP/UDP/transport telemetry. Reached from the "Stats" button on a
 *  row in [ServerClientsActivity]. Auto-refreshes every 1 s; finishes itself if
 *  the server stops or the target client disconnects. */
class ClientStatsActivity : BaseActivity() {

    companion object {
        const val EXTRA_CALL_ID = "callId"
        private const val POLL_MS = 1_000L
    }

    private lateinit var llRoot: LinearLayout
    private val uiScope = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private var pollJob: Job? = null
    private var callId: Long = 0L

    // Previous sample for computing instantaneous bandwidth. The activity
    // polls at POLL_MS so dt ≈ 1 s; the resulting rate is the moving
    // average over that window. Reset to -1 ms on entry to mark "no
    // previous sample yet" so the first render shows "—" rather than a
    // misleading huge number.
    private var lastRxBytes:  Long = 0
    private var lastTxBytes:  Long = 0
    private var lastSampleMs: Long = -1L

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        callId = intent.getLongExtra(EXTRA_CALL_ID, 0L)
        if (callId == 0L) { finish(); return }

        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.title = "Client Stats"

        val dp = resources.displayMetrics.density
        llRoot = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding((16 * dp).toInt(), (16 * dp).toInt(), (16 * dp).toInt(), (16 * dp).toInt())
        }
        setContentView(ScrollView(this).apply { addView(llRoot) })
    }

    override fun onResume() {
        super.onResume()
        if (!BaleServerService.isRunning) { finish(); return }
        pollJob?.cancel()
        pollJob = uiScope.launch {
            while (isActive) {
                if (!BaleServerService.isRunning) { finish(); break }
                val info = BaleServerService.getClientInfos().firstOrNull { it.callId == callId }
                if (info == null) { finish(); break }
                render(info)
                delay(POLL_MS)
            }
        }
    }

    override fun onPause()  { pollJob?.cancel(); super.onPause() }
    override fun onSupportNavigateUp(): Boolean { finish(); return true }
    override fun onDestroy() { uiScope.cancel(); super.onDestroy() }

    // ── Rendering ──────────────────────────────────────────────────────────────

    private fun render(info: BaleServerService.ClientInfo) {
        llRoot.removeAllViews()

        // Header — caller id + uptime in seconds
        val now       = System.currentTimeMillis()
        val uptimeSec = (now - info.connectedAt) / 1000
        addHeader("Caller ${info.callerId}  ·  uptime ${fmtDuration(uptimeSec)}")

        // Instantaneous bandwidth from delta-bytes / delta-time. -1 for
        // "no sample yet"; render() takes care of the "—" display.
        val rxRateBps: Long
        val txRateBps: Long
        if (lastSampleMs > 0L && now > lastSampleMs) {
            val dtMs = now - lastSampleMs
            rxRateBps = ((info.rxBytes - lastRxBytes) * 8000L / dtMs).coerceAtLeast(0L)
            txRateBps = ((info.txBytes - lastTxBytes) * 8000L / dtMs).coerceAtLeast(0L)
        } else {
            rxRateBps = -1L
            txRateBps = -1L
        }
        lastRxBytes  = info.rxBytes
        lastTxBytes  = info.txBytes
        lastSampleMs = now

        addSection("Bandwidth", listOf(
            "↑ uplink (client → internet)" to fmtRate(rxRateBps),
            "↓ downlink (internet → client)" to fmtRate(txRateBps),
        ))

        addSection("Transport (LiveKit)", buildTransportRows(info.lkStats, info.rxBytes, info.txBytes, info.rxPkts, info.txPkts))

        // NAT-layer stats (native NatDispatcher + per-flow TCP/UDP sessions).
        // Null until the first flow lands; we still want a section so users
        // see the placeholder rather than a missing pane.
        val ps = info.packetStats
        if (ps != null) {
            addSection("TCP", buildTcpRows(ps))
            addSection("UDP", listOf("Active flows" to ps.udpFlows.toString()))
        } else {
            addSection("TCP/UDP", listOf("(no flows yet)" to ""))
        }
    }

    private fun buildTcpRows(ps: PacketStats): List<Pair<String, String>> {
        val rows = mutableListOf<Pair<String, String>>()
        rows += "Active flows" to ps.tcpFlows.toString()

        // Render only non-zero state buckets so the table stays readable.
        val states = ps.tcpStateCounts.withIndex()
            .filter { (_, c) -> c > 0 }
            .joinToString("  ") { (i, c) -> "${PacketStats.STATE_NAMES[i]}=$c" }
        if (states.isNotEmpty()) rows += "States" to states

        // SRTT/RTTVar/RTO are 0 when no flow has been sampled yet — render
        // a dash to make that visible rather than misleading 0 ms.
        rows += "SRTT min / med / max" to
            (if (ps.srttMedianMs > 0) "${ps.srttMinMs} / ${ps.srttMedianMs} / ${ps.srttMaxMs} ms" else "—")
        rows += "RTTVar median"        to (if (ps.rttvarMedianMs > 0) "${ps.rttvarMedianMs} ms" else "—")
        rows += "RTO median"           to (if (ps.rtoMedianMs    > 0) "${ps.rtoMedianMs} ms"    else "—")
        rows += "FlightSize"           to fmtBytes(ps.flightTotalBytes)
        rows += "Retransmits (RTO)"    to ps.rtoRetxTotal.toString()
        return rows
    }

    private fun buildTransportRows(
        lk: LiveKitStats?,
        rxBytes: Long, txBytes: Long, rxPkts: Long, txPkts: Long,
    ): List<Pair<String, String>> {
        val rows = mutableListOf<Pair<String, String>>()
        if (lk != null) {
            rows += "RTT" to (if (lk.rttMs >= 0) "${lk.rttMs} ms" else "—")
            rows += "WebRTC bytes ↑" to (if (lk.bytesSent     >= 0) fmtBytes(lk.bytesSent)     else "—")
            rows += "WebRTC bytes ↓" to (if (lk.bytesReceived >= 0) fmtBytes(lk.bytesReceived) else "—")
            rows += "WebRTC pkts ↑"  to (if (lk.packetsSent     >= 0) lk.packetsSent.toString()     else "—")
            rows += "WebRTC pkts ↓"  to (if (lk.packetsReceived >= 0) lk.packetsReceived.toString() else "—")
        } else {
            rows += "(awaiting first stats)" to ""
        }
        rows += "IP packets ↑" to "$rxPkts (${fmtBytes(rxBytes)})"
        rows += "IP packets ↓" to "$txPkts (${fmtBytes(txBytes)})"
        return rows
    }

    // ── View builders ──────────────────────────────────────────────────────────

    private fun addHeader(text: String) {
        val dp = resources.displayMetrics.density
        llRoot.addView(TextView(this).apply {
            this.text = text
            textSize = 14f
            setTypeface(Typeface.MONOSPACE, Typeface.BOLD)
            setPadding(0, 0, 0, (12 * dp).toInt())
        })
    }

    private fun addSection(title: String, rows: List<Pair<String, String>>) {
        val dp = resources.displayMetrics.density
        llRoot.addView(TextView(this).apply {
            this.text = title
            textSize = 13f
            setTypeface(null, Typeface.BOLD)
            alpha = 0.7f
            setPadding(0, (10 * dp).toInt(), 0, (4 * dp).toInt())
        })
        for ((label, value) in rows) llRoot.addView(buildKvRow(label, value))
        llRoot.addView(View(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, (1 * dp).toInt()
            ).also { it.topMargin = (8 * dp).toInt() }
            setBackgroundColor(Color.argb(40, 128, 128, 128))
        })
    }

    private fun buildKvRow(label: String, value: String): View {
        val dp = resources.displayMetrics.density
        return LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            setPadding(0, (3 * dp).toInt(), 0, (3 * dp).toInt())
            addView(TextView(this@ClientStatsActivity).apply {
                text = label
                textSize = 12f
                typeface = Typeface.MONOSPACE
                alpha = 0.8f
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
            })
            addView(TextView(this@ClientStatsActivity).apply {
                text = value
                textSize = 12f
                typeface = Typeface.MONOSPACE
                gravity = Gravity.END
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
            })
        }
    }

    // ── Formatters ─────────────────────────────────────────────────────────────

    private fun fmtBytes(b: Long): String = when {
        b < 0L         -> "—"
        b < 1024L      -> "${b}B"
        b < 1_048_576L -> "%.1fKB".format(b / 1024.0)
        b < 1_073_741_824L -> "%.1fMB".format(b / 1_048_576.0)
        else           -> "%.1fGB".format(b / 1_073_741_824.0)
    }

    private fun fmtRate(bitsPerSec: Long): String = when {
        bitsPerSec < 0L          -> "—"
        bitsPerSec >= 1_000_000L -> "%.1f Mbps".format(bitsPerSec / 1_000_000.0)
        bitsPerSec >= 1_000L     -> "%.0f kbps".format(bitsPerSec / 1_000.0)
        else                     -> "$bitsPerSec bps"
    }

    private fun fmtDuration(sec: Long): String {
        val h = sec / 3600
        val m = (sec / 60) % 60
        val s = sec % 60
        return if (h > 0) "${h}h${m}m${s}s" else if (m > 0) "${m}m${s}s" else "${s}s"
    }
}
