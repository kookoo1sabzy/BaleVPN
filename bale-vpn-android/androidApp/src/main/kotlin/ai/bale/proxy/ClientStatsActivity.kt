package ai.bale.proxy

import ai.bale.proxy.tunnel.LiveKitStats
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
        val uptimeSec = (System.currentTimeMillis() - info.connectedAt) / 1000
        addHeader("Caller ${info.callerId}  ·  uptime ${fmtDuration(uptimeSec)}")

        addSection("Transport (LiveKit)", buildTransportRows(info.lkStats, info.rxBytes, info.txBytes, info.rxPkts, info.txPkts))

        val ps = info.packetStats
        if (ps == null) {
            addSection("TCP", listOf("(no snapshot yet)" to ""))
        } else {
            addSection("TCP", buildTcpRows(ps))
            addSection("UDP", listOf("Active flows" to ps.udpFlows.toString()))
            addSection("System", buildSystemRows(ps))
        }
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

    private fun buildTcpRows(ps: PacketStats): List<Pair<String, String>> {
        val rows = mutableListOf<Pair<String, String>>()
        rows += "Active flows"  to ps.tcpFlows.toString()
        if (ps.stateBreakdown.isNotEmpty()) {
            rows += "States" to ps.stateBreakdown.entries
                .sortedByDescending { it.value }
                .joinToString("  ") { "${it.key}=${it.value}" }
        }
        rows += "SRTT min / med / max" to "${ps.srttMinMs} / ${ps.srttMedianMs} / ${ps.srttMaxMs} ms"
        rows += "RTTVar median"        to "${ps.rttvarMedianMs} ms"
        rows += "RTO median"           to "${ps.rtoMedianMs} ms"
        rows += "cwnd avg"             to "%.1f MSS".format(ps.cwndAvgSegs)
        rows += "FlightSize"           to fmtBytes(ps.flightTotalBytes)
        rows += "Retransmits (RTO)"    to ps.rtoRetxTotal.toString()
        rows += "Fast retransmits"     to ps.fastRetxTotal.toString()
        rows += "TLP fires"            to ps.tlpFiresTotal.toString()
        rows += "SACK losses"          to ps.sackLossesTotal.toString()
        return rows
    }

    private fun buildSystemRows(ps: PacketStats): List<Pair<String, String>> = listOf(
        "Incoming queue"     to "${ps.incomingQueueDepth} (${ps.incomingDrops} drops)",
        "Fragment streams"   to ps.fragmentStreams.toString(),
        "Global rwnd scale"  to "%.2f".format(ps.globalRwndScale),
    )

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
