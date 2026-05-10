package ai.bale.proxy

import android.graphics.Color
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.app.AlertDialog
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton
import kotlinx.coroutines.*

class ServerClientsActivity : BaseActivity() {

    private lateinit var llClients: LinearLayout
    private lateinit var tvEmpty:   TextView

    private val uiScope = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private var pollJob: Job? = null
    private val nameCache    = mutableMapOf<Long, String>()
    private val rowViews     = mutableMapOf<Long, View>()    // key = callerId (>0) or -callId (unknown)
    private val sampleCache  = mutableMapOf<Long, Sample>()  // rowKey → last byte counters + ts

    private data class Sample(val rxBytes: Long, val txBytes: Long, val timeMs: Long)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val prefs = getSharedPreferences("config", MODE_PRIVATE)
        AdmissionStore.init(prefs)
        BlacklistStore.init(prefs)
        setContentView(R.layout.activity_server_clients)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.title = "Manage Clients"

        llClients = findViewById(R.id.llClients)
        tvEmpty   = findViewById(R.id.tvEmpty)
    }

    override fun onResume() {
        super.onResume()
        // If the server isn't running, the screen has nothing to manage — bail out
        // immediately rather than show an empty list with no explanation.
        if (!BaleServerService.isRunning) { finish(); return }
        pollJob?.cancel()
        pollJob = uiScope.launch {
            while (isActive) {
                if (!BaleServerService.isRunning) { finish(); break }
                syncList(); delay(500)
            }
        }
    }

    override fun onPause()  { pollJob?.cancel(); super.onPause() }
    override fun onSupportNavigateUp(): Boolean { finish(); return true }
    override fun onDestroy() { uiScope.cancel(); super.onDestroy() }

    // Overflow menu (About / TCP debug toggle / View app logs) lives in BaseActivity.

    companion object {
        // Hard ceiling for per-client bandwidth caps. Derived from the shared
        // BaleServerService.MAX_LIMIT_BPS so the dialog and AdmissionStore agree
        // on the cap. 125_000 B/s × 8 / 1000 = 1000 kbps = 1 Mbps.
        private val MAX_LIMIT_KBPS: Long = BaleServerService.MAX_LIMIT_BPS * 8L / 1_000L
    }

    // ── Unified list ──────────────────────────────────────────────────────────

    /** Visual grouping for separator placement. Two consecutive entries with
     *  different groups get a divider between them. */
    private enum class Group { CONNECTED, ALLOWED, BLOCKED, OTHER }

    private fun buildSeparator(): View {
        val dp = resources.displayMetrics.density
        return View(this).apply {
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, (1 * dp).toInt()
            ).also {
                it.topMargin    = (8 * dp).toInt()
                it.bottomMargin = (8 * dp).toInt()
            }
            setBackgroundColor(Color.argb(60, 128, 128, 128))
        }
    }

    private data class Entry(
        val rowKey:    Long,
        val callerId:  Long,
        val isAllowed: Boolean,
        val isBlocked: Boolean,
        val info:      BaleServerService.ClientInfo?,
    )

    private fun buildEntries(): List<Entry> {
        val infos     = BaleServerService.getClientInfos()
        val allowed   = AdmissionStore.getAll()
        val blocked   = BlacklistStore.getAll()
        val connected = infos.associateBy { if (it.callerId != 0L) it.callerId else -it.callId }

        val entries = mutableListOf<Entry>()
        // Connected clients first (shown in green or red-throttle).
        for (info in infos) {
            val key = if (info.callerId != 0L) info.callerId else -info.callId
            entries.add(Entry(key, info.callerId, info.callerId in allowed, info.callerId in blocked, info))
        }
        // Allowed but not currently connected.
        for (id in allowed.sorted()) {
            if (id !in connected) entries.add(Entry(id, id, true, false, null))
        }
        // Blocked callers go last — auto-rejected on next attempt, listed here so
        // the user can unblock them.
        for (id in blocked.sorted()) {
            if (id !in connected && id !in allowed) entries.add(Entry(id, id, false, true, null))
        }
        return entries
    }

    private fun syncList() {
        val entries = buildEntries()
        val entryKeys = entries.map { it.rowKey }.toSet()

        // Drop stale row state for entries that no longer exist.
        val stale = rowViews.keys.filter { it !in entryKeys }
        stale.forEach { k -> rowViews.remove(k); sampleCache.remove(k) }

        // Detach every child and re-attach in the correct order. Reusing existing
        // row Views (rather than buildRow each time) preserves their tag triple and
        // avoids flicker — Android batches removeAllViews + addView within the same
        // measure-layout cycle so the user sees the final result on the next frame.
        // Separator lines are inserted between group transitions (connected → allowed
        // → blocked) so the three categories read at a glance.
        llClients.removeAllViews()
        var prevGroup: Group? = null
        for (entry in entries) {
            val group = when {
                entry.info != null -> Group.CONNECTED
                entry.isAllowed    -> Group.ALLOWED
                entry.isBlocked    -> Group.BLOCKED
                else               -> Group.OTHER
            }
            if (prevGroup != null && prevGroup != group) llClients.addView(buildSeparator())
            prevGroup = group

            val row = rowViews[entry.rowKey] ?: buildRow(entry).also { rowViews[entry.rowKey] = it }
            llClients.addView(row)
            updateRow(row, entry)
        }

        tvEmpty.visibility = if (entries.isEmpty()) View.VISIBLE else View.GONE

        // Kick off name loads for any unknown IDs
        for (entry in entries) {
            if (entry.callerId > 0 && nameCache[entry.callerId] == null) {
                uiScope.launch {
                    val name = withContext(Dispatchers.IO) {
                        BaleConnection.client?.loadUserName(entry.callerId.toInt())
                    }
                    if (name != null) nameCache[entry.callerId] = name
                }
            }
        }
    }

    private fun buildRow(entry: Entry): View {
        val dp  = resources.displayMetrics.density
        val row = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(0, (8 * dp).toInt(), 0, (8 * dp).toInt())
        }
        val tvInfo = TextView(this).apply {
            typeface = android.graphics.Typeface.MONOSPACE
            textSize = 13f
        }
        val tvStats = TextView(this).apply {
            typeface  = android.graphics.Typeface.MONOSPACE
            textSize  = 11f
            alpha     = 0.7f
            visibility = View.GONE
        }
        // Vertical container that holds 1–2 horizontal sub-rows of action buttons.
        // We wrap to 2 rows so 4 buttons aren't squeezed into a single line on narrow phones.
        val btnRow = LinearLayout(this).apply {
            orientation  = LinearLayout.VERTICAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT)
            setPadding(0, (4 * dp).toInt(), 0, 0)
        }

        row.addView(tvInfo)
        row.addView(tvStats)
        row.addView(btnRow)
        row.tag = Triple(tvInfo, tvStats, btnRow)
        return row
    }

    private fun updateRow(row: View, entry: Entry) {
        val (tvInfo, tvStats, btnRowAny) = row.tag as Triple<*, *, *>
        val infoTv  = tvInfo   as TextView
        val statsTv = tvStats  as TextView
        val btnRow  = btnRowAny as LinearLayout

        val dp       = resources.displayMetrics.density
        val btnStyle = com.google.android.material.R.attr.materialButtonOutlinedStyle
        val hPad     = (8 * dp).toInt(); val vPad = (2 * dp).toInt()
        val gap      = (6 * dp).toInt()
        // Each button gets weight=1 inside its row, so a row with 1 button stretches it
        // full-width and a row with 2 splits 50/50. Touch targets stay finger-friendly
        // even on narrow phones.
        fun makeBtn(label: String, isFirstInRow: Boolean, onClick: () -> Unit) =
            MaterialButton(this, null, btnStyle).apply {
                text     = label; textSize = 11f
                setPadding(hPad, vPad, hPad, vPad); insetTop = 0; insetBottom = 0
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
                    .also { it.setMargins(if (isFirstInRow) 0 else gap, 0, 0, 0) }
                setOnClickListener { onClick() }
            }

        val name = nameCache[entry.callerId]
        val label = when {
            name != null          -> "$name\n${entry.callerId}"
            entry.callerId != 0L  -> "${entry.callerId}"
            else                  -> "Unknown (call ${entry.info?.callId ?: "?"})"
        }
        // Inline membership tag, mirroring the "Blocked" tag — so an at-a-glance
        // scan tells you which list a row is in (allow, block, or neither).
        val labelWithStatus = when {
            entry.isBlocked -> "$label  ·  Blocked"
            entry.isAllowed -> "$label  ·  Allowed"
            else            -> label
        }

        if (entry.info != null) {
            val now      = System.currentTimeMillis()
            val uptime   = (now - entry.info.connectedAt) / 1000
            val rxKB     = "%.1f".format(entry.info.rxBytes / 1024f)
            val txKB     = "%.1f".format(entry.info.txBytes / 1024f)
            val upLimit  = if (entry.info.limitUpBps   > 0) " cap:${fmtRate(entry.info.limitUpBps)}"   else ""
            val dnLimit  = if (entry.info.limitDownBps > 0) " cap:${fmtRate(entry.info.limitDownBps)}" else ""
            val throttled = entry.info.isThrottled

            // Compute instantaneous rate from the previous sample (≈ 500 ms window).
            val prev = sampleCache[entry.rowKey]
            val rxRate: Long
            val txRate: Long
            if (prev != null && now > prev.timeMs) {
                val dtMs = now - prev.timeMs
                rxRate = ((entry.info.rxBytes - prev.rxBytes) * 1000L / dtMs).coerceAtLeast(0L)
                txRate = ((entry.info.txBytes - prev.txBytes) * 1000L / dtMs).coerceAtLeast(0L)
            } else { rxRate = 0L; txRate = 0L }
            sampleCache[entry.rowKey] = Sample(entry.info.rxBytes, entry.info.txBytes, now)

            infoTv.text      = labelWithStatus
            infoTv.setTextColor(if (throttled) Color.parseColor("#C62828") else Color.parseColor("#2E7D32"))
            statsTv.text     = "connected ${uptime}s  ↑ ${fmtRate(rxRate)} (${rxKB}KB)$upLimit  ↓ ${fmtRate(txRate)} (${txKB}KB)$dnLimit"
            statsTv.visibility = View.VISIBLE
            row.setBackgroundColor(if (throttled) Color.argb(20, 200, 0, 0) else Color.argb(20, 0, 180, 0))
        } else if (entry.isBlocked) {
            // Greyed-out for blocked rows — strikethrough effect via reduced alpha.
            infoTv.text      = labelWithStatus
            infoTv.setTextColor(resolveDefaultTextColor())
            infoTv.alpha     = 0.5f
            statsTv.visibility = View.GONE
            row.setBackgroundColor(Color.argb(15, 128, 128, 128))
        } else {
            infoTv.text      = labelWithStatus
            infoTv.setTextColor(resolveDefaultTextColor())
            infoTv.alpha     = 1.0f
            statsTv.visibility = View.GONE
            row.setBackgroundColor(Color.TRANSPARENT)
        }

        // Rebuild button rows. Order is Disconnect, Remove, Limit, Stats — ordered roughly
        // by how disruptive the action is, with read-only Stats last. Buttons are wrapped
        // 2-per-row so 4 of them don't crowd a single line. Blocked rows show only Unblock.
        btnRow.removeAllViews()
        val actions = mutableListOf<Pair<String, () -> Unit>>()
        // The row gets rebuilt on the next 500 ms poll, so visual cues (button
        // disappearing, row vanishing for offline+allowed) can feel like nothing
        // happened. A short Toast confirms each action so the user sees the click
        // landed before the row mutates. `name` was already resolved above for the row label.
        val who  = name ?: (if (entry.callerId > 0L) "${entry.callerId}" else "this caller")

        if (entry.isBlocked) {
            actions += "Unblock" to {
                BlacklistStore.remove(entry.callerId)
                Toast.makeText(this, "Unblocked $who", Toast.LENGTH_SHORT).show()
            }
        } else {
            // Disconnect: kick the active session only. Doesn't blacklist — caller
            // is free to call back. To permanently bar a caller, the user rejects
            // them in the pending notification (which routes through rejectPending,
            // which blacklists).
            if (entry.info != null) actions += "Disconnect" to {
                BaleServerService.disconnectClient(entry.info.callId)
                Toast.makeText(this, "Disconnected $who", Toast.LENGTH_SHORT).show()
            }
            // Remove: drop from allow-list AND kick the active session if any.
            // Future calls land in pending; the running session ends now.
            if (entry.isAllowed) actions += "Remove" to {
                AdmissionStore.remove(entry.callerId)
                if (entry.info != null) BaleServerService.disconnectClient(entry.info.callId)
                Toast.makeText(this, "Removed $who from allow list", Toast.LENGTH_SHORT).show()
            }
            if (entry.info != null) {
                actions += "Limit" to { showLimitDialog(entry.info) }
                actions += "Stats" to {
                    startActivity(android.content.Intent(this, ClientStatsActivity::class.java)
                        .putExtra(ClientStatsActivity.EXTRA_CALL_ID, entry.info.callId))
                }
            }
        }
        val rows = actions.chunked(2)
        // Pad short trailing rows with invisible spacers only when there's a wider row
        // above — a single-row layout (e.g. lone "Remove") should still stretch full-width.
        val widestRow = rows.maxOfOrNull { it.size } ?: 0
        rows.forEachIndexed { rowIdx, chunk ->
            val sub = LinearLayout(this).apply {
                orientation  = LinearLayout.HORIZONTAL
                layoutParams = LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT
                ).also { if (rowIdx > 0) it.topMargin = gap }
            }
            chunk.forEachIndexed { i, (label, onClick) ->
                sub.addView(makeBtn(label, isFirstInRow = (i == 0), onClick = onClick))
            }
            repeat(widestRow - chunk.size) {
                sub.addView(View(this).apply {
                    layoutParams = LinearLayout.LayoutParams(0, 0, 1f)
                        .also { it.setMargins(gap, 0, 0, 0) }
                })
            }
            btnRow.addView(sub)
        }
    }

    /** Formats a bytes/sec rate in network-conventional bit units (kbps / Mbps).
     *  Bandwidth is conventionally quoted in bits per second; only cumulative byte
     *  counters are shown in bytes elsewhere in the row. */
    private fun fmtRate(bytesPerSec: Long): String {
        val bps = bytesPerSec * 8L
        return when {
            bps >= 1_000_000L -> "%.1fMbps".format(bps / 1_000_000.0)
            bps >= 1_000L     -> "%.0fkbps".format(bps / 1_000.0)
            else              -> "${bps}bps"
        }
    }

    private fun showLimitDialog(info: BaleServerService.ClientInfo) {
        val dp = resources.displayMetrics.density
        fun makeLimitField(hint: String, currentBytesPerSec: Long): EditText {
            // Pre-fill always shows a value: stored limit if set, otherwise the default cap.
            val effectiveBps = if (currentBytesPerSec > 0L) currentBytesPerSec else BaleServerService.DEFAULT_LIMIT_BPS
            val currentKbps  = bytesPerSecToKbps(effectiveBps).coerceIn(1L, MAX_LIMIT_KBPS).toString()
            return EditText(this).apply {
                this.hint      = hint
                inputType      = android.text.InputType.TYPE_CLASS_NUMBER
                setText(currentKbps)
                layoutParams   = LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT)
                    .also { it.bottomMargin = (8 * dp).toInt() }
            }
        }
        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding((24 * dp).toInt(), (12 * dp).toInt(), (24 * dp).toInt(), 0)
        }
        val etUp   = makeLimitField("Upload limit kbps (1–$MAX_LIMIT_KBPS)",   info.limitUpBps)
        val etDown = makeLimitField("Download limit kbps (1–$MAX_LIMIT_KBPS)", info.limitDownBps)
        layout.addView(etUp)
        layout.addView(etDown)

        AlertDialog.Builder(this)
            .setTitle("Bandwidth Limit (max ${MAX_LIMIT_KBPS}kbps)")
            .setView(layout)
            .setPositiveButton("Apply") { _, _ ->
                // Always-on cap: clamp to [1, MAX]. There is no "unlimited" sentinel.
                val upKbps   = (etUp.text.toString().toLongOrNull()   ?: MAX_LIMIT_KBPS).coerceIn(1L, MAX_LIMIT_KBPS)
                val downKbps = (etDown.text.toString().toLongOrNull() ?: MAX_LIMIT_KBPS).coerceIn(1L, MAX_LIMIT_KBPS)
                BaleServerService.setClientLimit(info.callId, kbpsToBytesPerSec(upKbps), kbpsToBytesPerSec(downKbps))
            }
            .setNegativeButton("Cancel", null)
            .show()
    }

    // kbps ↔ bytes/sec helpers. 1 kbps = 1000 bits/sec = 125 bytes/sec.
    private fun kbpsToBytesPerSec(kbps: Long): Long = kbps * 1_000L / 8L
    private fun bytesPerSecToKbps(bytesPerSec: Long): Long = bytesPerSec * 8L / 1_000L

    private fun resolveDefaultTextColor(): Int {
        val a = theme.obtainStyledAttributes(intArrayOf(android.R.attr.textColorPrimary))
        val color = a.getColor(0, Color.BLACK)
        a.recycle()
        return color
    }
}
