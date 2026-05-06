package ai.bale.proxy

import android.content.ActivityNotFoundException
import android.content.Intent
import android.graphics.Typeface
import android.net.Uri
import android.net.VpnService
import android.os.Build
import android.os.Bundle
import android.os.PowerManager
import android.provider.Settings
import android.view.Gravity
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import com.google.android.material.button.MaterialButton
import com.google.android.material.button.MaterialButtonToggleGroup
import kotlinx.coroutines.*

class MainActivity : AppCompatActivity() {

    private lateinit var toggleMode:    MaterialButtonToggleGroup
    private lateinit var btnModeClient: MaterialButton
    private lateinit var btnModeServer: MaterialButton
    private lateinit var tvWsStatus:    TextView
    private lateinit var btnWs:         MaterialButton

    private lateinit var tvSelfName:    TextView

    // Client section
    private lateinit var layoutClient:  LinearLayout
    private lateinit var tvPeer:        TextView
    private lateinit var btnSelectPeer: MaterialButton
    private lateinit var btnVpn:        MaterialButton
    private lateinit var tvStats:       TextView

    // Server section
    private lateinit var layoutServer:      LinearLayout
    private lateinit var tvServerStatus:    TextView
    private lateinit var tvPendingHeader:   TextView
    private lateinit var llPending:         LinearLayout
    private lateinit var btnManageContacts: MaterialButton
    private lateinit var btnManageClients:  MaterialButton

    private lateinit var btnLogout: MaterialButton

    private val prefs          by lazy { getSharedPreferences("config", MODE_PRIVATE) }
    private val uiScope        = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private var pollJob: Job?  = null
    private var updatingToggle = false

    private val pendingRowViews = mutableMapOf<Long, View>()

    private companion object {
        const val VPN_REQUEST = 1
        const val MENU_ABOUT  = 1
        const val ABOUT_EMAIL = "kookoo.sabzy@proton.me"
        const val ABOUT_REPO  = "https://github.com/kookoo1sabzy/BaleVPN"
    }

    private val notifPermLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()) {}

    private val batteryOptLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()) {}

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        if (prefs.getString("token", "").isNullOrEmpty()) {
            startActivity(Intent(this, PhoneAuthActivity::class.java))
            finish()
            return
        }

        setContentView(R.layout.activity_main)

        toggleMode    = findViewById(R.id.toggleMode)
        btnModeClient = findViewById(R.id.btnModeClient)
        btnModeServer = findViewById(R.id.btnModeServer)
        tvSelfName    = findViewById(R.id.tvSelfName)
        tvWsStatus    = findViewById(R.id.tvWsStatus)
        btnWs         = findViewById(R.id.btnWs)
        layoutClient  = findViewById(R.id.layoutClient)
        tvPeer        = findViewById(R.id.tvPeer)
        btnSelectPeer = findViewById(R.id.btnSelectPeer)
        btnVpn        = findViewById(R.id.btnVpn)
        tvStats       = findViewById(R.id.tvStats)
        layoutServer       = findViewById(R.id.layoutServer)
        tvServerStatus     = findViewById(R.id.tvServerStatus)
        tvPendingHeader    = findViewById(R.id.tvPendingHeader)
        llPending          = findViewById(R.id.llPending)
        btnManageContacts  = findViewById(R.id.btnManageContacts)
        btnManageClients   = findViewById(R.id.btnManageAdmission)
        btnLogout     = findViewById(R.id.btnLogout)

        applyMode(prefs.getString("mode", "client") ?: "client")

        toggleMode.addOnButtonCheckedListener { _, checkedId, isChecked ->
            if (!isChecked || updatingToggle) return@addOnButtonCheckedListener
            val mode = if (checkedId == R.id.btnModeClient) "client" else "server"
            prefs.edit().putString("mode", mode).apply()
            switchToMode(mode)
        }

        btnWs.setOnClickListener {
            if (BaleConnection.client != null) {
                // Disconnect path needs pre-cleanup: send discardCall to every
                // connected/pending peer over the still-alive WS so they tear down
                // immediately instead of spending 15s × 5 reconnect attempts.
                btnWs.isEnabled = false
                uiScope.launch {
                    try {
                        if (BaleServerService.isRunning) BaleServerService.disconnectAllClients()
                    } finally {
                        BaleConnection.userInitiatedDisconnect = true
                        BaleConnection.reconcile()
                        btnWs.isEnabled = true
                    }
                }
            } else {
                BaleConnection.userInitiatedDisconnect = false
                BaleConnection.reconcile()
            }
        }
        btnVpn.setOnClickListener {
            if (BaleVpnService.isRunning) stopVpn() else prepareVpn()
        }
        btnSelectPeer.setOnClickListener {
            startActivity(Intent(this, ContactsActivity::class.java))
        }
        btnManageContacts.setOnClickListener {
            startActivity(Intent(this, ContactsActivity::class.java).apply {
                putExtra(ContactsActivity.EXTRA_MODE, ContactsActivity.MODE_MANAGE)
            })
        }
        btnManageClients.setOnClickListener {
            startActivity(Intent(this, ServerClientsActivity::class.java))
        }
        btnLogout.setOnClickListener { logout() }

        requestBackgroundPermissions()
    }

    private fun applyMode(mode: String) {
        updatingToggle = true
        toggleMode.check(if (mode == "server") R.id.btnModeServer else R.id.btnModeClient)
        updatingToggle = false
        showModeLayout(mode)
    }

    private fun switchToMode(mode: String) {
        if (mode == "server") {
            if (BaleVpnService.isRunning) stopVpn()
            ensureServerRunning()
        } else {
            if (BaleServerService.isRunning) stopServer()
        }
        // Mode pref is already updated by the toggle listener; reconcile applies the
        // new mode's WS rule (client→up while foreground, server→up unless sticky
        // disconnect).
        BaleConnection.reconcile()
        showModeLayout(mode)
    }

    // Server mode is implicit: toggling into server mode starts the foreground service.
    // Always call startService unconditionally — we don't trust BaleServerService.isRunning
    // because that @Volatile flag can stay true after the OS kills the service without
    // calling onDestroy. Android dedups startService for an already-running service
    // (it just re-fires onStartCommand, which we made idempotent).
    // WS state is handled by BaleConnection.reconcile() at the caller.
    private fun ensureServerRunning() {
        val token = prefs.getString("token", "").orEmpty()
        if (token.isEmpty()) return
        startService(Intent(this, BaleServerService::class.java))
    }

    private fun showModeLayout(mode: String) {
        layoutClient.visibility = if (mode == "server") View.GONE else View.VISIBLE
        layoutServer.visibility = if (mode == "server") View.VISIBLE else View.GONE
    }

    private fun requestBackgroundPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (ContextCompat.checkSelfPermission(this,
                    android.Manifest.permission.POST_NOTIFICATIONS) !=
                android.content.pm.PackageManager.PERMISSION_GRANTED)
                notifPermLauncher.launch(android.Manifest.permission.POST_NOTIFICATIONS)
        }
        val pm = getSystemService(PowerManager::class.java)
        if (!pm.isIgnoringBatteryOptimizations(packageName)) {
            batteryOptLauncher.launch(
                Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS).also {
                    it.data = Uri.parse("package:$packageName")
                }
            )
        }
    }

    override fun onResume() {
        super.onResume()
        val mode = prefs.getString("mode", "client") ?: "client"
        applyMode(mode)

        // WS lifecycle is driven by BaleApp's ProcessLifecycleOwner observer
        // (connect on foreground, disconnect on background). No need to touch
        // BaleConnection here.

        // Server mode is "always on" while selected — auto-start if it's not running yet
        // (e.g., after a reboot, after the OS killed the service, or first launch).
        if (mode == "server") ensureServerRunning()

        pollJob?.cancel()
        pollJob = uiScope.launch {
            while (isActive) { tick(); delay(500) }
        }
    }

    override fun onPause() { pollJob?.cancel(); super.onPause() }
    override fun onDestroy() { uiScope.cancel(); super.onDestroy() }

    private fun tick() {
        val mode           = prefs.getString("mode", "client") ?: "client"
        val wsReady        = BaleConnection.isReady
        val serviceRunning = BaleVpnService.isRunning || BaleServerService.isRunning

        tvWsStatus.text = "WebSocket: " + when {
            wsReady                       -> "Connected"
            BaleConnection.client != null -> "Connecting…"
            else                          -> "Disconnected"
        }
        tvWsStatus.visibility = View.VISIBLE

        // Logged-in account name — populated by BaleWsClient.loadSelf() once
        // the WS handshakes. Falls back to "User #<id>" if Bale didn't return
        // a display name (self isn't usually in your own contact list).
        val self = BaleConnection.client?.self
        if (self != null) {
            val display = self.name?.takeIf { it.isNotBlank() } ?: "User #${self.id}"
            tvSelfName.text       = "Signed in as $display"
            tvSelfName.visibility = View.VISIBLE
        } else {
            tvSelfName.visibility = View.GONE
        }

        // The WS button only makes sense in server mode — that's where the user might
        // legitimately want to force-tear-down (which also disconnects all clients).
        // In client mode the WS comes and goes automatically with the app lifecycle and
        // VPN reconnects, so a manual button would just be a footgun.
        if (mode == "server") {
            btnWs.visibility = View.VISIBLE
            btnWs.text       = if (BaleConnection.client != null) "Disconnect" else "Connect"
        } else {
            btnWs.visibility = View.GONE
        }

        // Lock the toggle while the VPN client is actively running — there's already an
        // explicit Disconnect button for that, so an accidental toggle tap would just
        // be destructive. Server mode is the opposite: the toggle is the ONLY way to
        // stop the server (there's no separate Stop Server button), so it must stay
        // enabled while the server runs.
        val lockToggle = BaleVpnService.isRunning
        toggleMode.isEnabled    = !lockToggle
        btnModeClient.isEnabled = !lockToggle
        btnModeServer.isEnabled = !lockToggle

        if (mode == "client") tickClient(wsReady) else tickServer(wsReady)

        btnLogout.isEnabled = !serviceRunning
    }

    // ── Client tick ───────────────────────────────────────────────────────────

    private fun tickClient(wsReady: Boolean) {
        val peerId   = prefs.getString("peerId",   "").orEmpty()
        val peerName = prefs.getString("peerName", "").orEmpty()
        val running  = BaleVpnService.isRunning

        if (peerId.isEmpty()) {
            tvPeer.visibility       = View.GONE
            btnVpn.visibility       = View.GONE
            btnSelectPeer.text      = "Select Peer"
            btnSelectPeer.isEnabled = wsReady
        } else {
            tvPeer.visibility = View.VISIBLE
            tvPeer.text       = if (peerName.isNotEmpty()) "Server: $peerName\nID: $peerId"
                                else "Server ID: $peerId"
            val connected = BaleVpnService.isConnected
            btnVpn.visibility       = View.VISIBLE
            // Tap-to-cancel during the connect window: text reflects the action the tap
            // will trigger, not the current state, so users aren't surprised when
            // tapping "Connecting…" stops the attempt.
            btnVpn.text             = when {
                connected -> "Disconnect VPN"
                running   -> "Cancel (Connecting…)"
                else      -> "Start VPN"
            }
            btnVpn.isEnabled        = running || wsReady
            btnSelectPeer.text      = "Change Peer"
            btnSelectPeer.isEnabled = !running && wsReady

            if (connected) {
                val rxKB = "%.1f".format(BaleVpnService.rxBytes / 1024f)
                val txKB = "%.1f".format(BaleVpnService.txBytes / 1024f)
                tvStats.text       = "↑ ${BaleVpnService.rxPkts}pkt / ${rxKB}KB   ↓ ${BaleVpnService.txPkts}pkt / ${txKB}KB"
                tvStats.visibility = View.VISIBLE
            } else {
                tvStats.visibility = View.GONE
            }
        }
    }

    // ── Server tick ───────────────────────────────────────────────────────────

    private fun tickServer(wsReady: Boolean) {
        val running     = BaleServerService.isRunning
        val infos       = BaleServerService.getClientInfos()
        val pending     = BaleServerService.getPendingCalls()
        val wsAttached  = BaleConnection.client != null

        // Without the WS the server can't receive incoming-call updates. Distinguish
        // "user manually disconnected" (no client at all) from "client exists but is
        // mid-handshake / reconnecting" so the message is honest.
        tvServerStatus.text = when {
            running && !wsAttached        -> "Server running — WebSocket disconnected (tap Connect)"
            running && !wsReady           -> "Server running — reconnecting WebSocket…"
            running && infos.isNotEmpty() -> "Server Active — ${infos.size} client(s)"
            running                       -> "Server Active — waiting…"
            wsReady                       -> "Starting server…"
            else                          -> "Waiting for connection…"
        }

        syncPendingRows(pending)

        btnManageClients.visibility = if (running) View.VISIBLE else View.GONE
    }

    private fun syncPendingRows(calls: List<BaleServerService.PendingCall>) {
        val currentIds = calls.map { it.callId }.toSet()
        val toRemove = pendingRowViews.keys.filter { it !in currentIds }
        toRemove.forEach { id -> llPending.removeView(pendingRowViews.remove(id)) }
        for (call in calls) {
            pendingRowViews.getOrPut(call.callId) {
                buildPendingRow(call).also { llPending.addView(it) }
            }
            updatePendingRow(pendingRowViews[call.callId]!!, call)
        }
        val hasPending = calls.isNotEmpty()
        tvPendingHeader.visibility = if (hasPending) View.VISIBLE else View.GONE
        llPending.visibility       = if (hasPending) View.VISIBLE else View.GONE
    }

    private fun buildPendingRow(call: BaleServerService.PendingCall): View {
        val dp  = resources.displayMetrics.density
        val row = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(0, (6 * dp).toInt(), 0, (6 * dp).toInt())
        }
        val tvInfo = TextView(this).apply {
            typeface  = android.graphics.Typeface.MONOSPACE
            textSize  = 11f
            alpha     = 0.8f
        }
        val btnRow = LinearLayout(this).apply {
            orientation  = LinearLayout.HORIZONTAL
            layoutParams = LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT)
        }
        val btnStyle = com.google.android.material.R.attr.materialButtonOutlinedStyle
        val hPad = (8 * dp).toInt(); val vPad = (2 * dp).toInt()
        fun makeBtn(label: String, onClick: () -> Unit) =
            MaterialButton(this, null, btnStyle).apply {
                text     = label; textSize = 10f
                setPadding(hPad, vPad, hPad, vPad); insetTop = 0; insetBottom = 0
                layoutParams = LinearLayout.LayoutParams(0,
                    LinearLayout.LayoutParams.WRAP_CONTENT, 1f).also { it.setMargins((2*dp).toInt(),0,(2*dp).toInt(),0) }
                setOnClickListener { onClick() }
            }

        btnRow.addView(makeBtn("Allow")  { BaleServerService.acceptPending(call.callId, call.callerId != 0L) })
        btnRow.addView(makeBtn("Reject") { BaleServerService.rejectPending(call.callId) })

        row.addView(tvInfo)
        row.addView(btnRow)
        row.tag = tvInfo
        return row
    }

    private fun updatePendingRow(row: View, call: BaleServerService.PendingCall) {
        val tv   = row.tag as? TextView ?: return
        val wait = (System.currentTimeMillis() - call.receivedAt) / 1000
        val who  = when {
            call.callerName != null -> "${call.callerName}  (ID: ${call.callerId})"
            call.callerId   != 0L   -> "ID: ${call.callerId}"
            else                    -> "Unknown caller"
        }
        tv.text = "$who\nwaiting ${wait}s"
    }

    // ── VPN ───────────────────────────────────────────────────────────────────

    private fun prepareVpn() {
        val intent = VpnService.prepare(this)
        if (intent != null) startActivityForResult(intent, VPN_REQUEST) else startVpn()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == VPN_REQUEST && resultCode == RESULT_OK) startVpn()
    }

    private fun startVpn() {
        val peerId   = prefs.getString("peerId",   "").orEmpty()
        val peerType = prefs.getString("peerType", "1")?.toIntOrNull() ?: 1
        Intent(this, BaleVpnService::class.java).also {
            it.putExtra(BaleVpnService.EXTRA_PEER_ID,   peerId.toInt())
            it.putExtra(BaleVpnService.EXTRA_PEER_TYPE, peerType)
            startService(it)
        }
    }

    private fun stopVpn() {
        Intent(this, BaleVpnService::class.java).also {
            it.action = BaleVpnService.ACTION_STOP; startService(it)
        }
    }

    // ── Server ────────────────────────────────────────────────────────────────

    private fun stopServer() {
        Intent(this, BaleServerService::class.java).also {
            it.action = BaleServerService.ACTION_STOP; startService(it)
        }
    }

    // ── Logout ────────────────────────────────────────────────────────────────

    private fun logout() {
        // Defensive: stop both services even though btnLogout is gated behind
        // !serviceRunning. Clearing prefs while a VPN is still routing traffic with
        // a cached token would be a surprising leak.
        if (BaleVpnService.isRunning)    stopVpn()
        if (BaleServerService.isRunning) stopServer()
        BaleConnection.disconnect()
        prefs.edit().clear().apply()
        startActivity(Intent(this, PhoneAuthActivity::class.java))
        finishAffinity()
    }

    // ── About menu ────────────────────────────────────────────────────────────

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menu.add(0, MENU_ABOUT, 0, "About")
            .setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == MENU_ABOUT) { showAboutDialog(); return true }
        return super.onOptionsItemSelected(item)
    }

    private fun showAboutDialog() {
        val dp = resources.displayMetrics.density
        val pad = (24 * dp).toInt()

        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(pad, pad, pad, (8 * dp).toInt())
            gravity = Gravity.CENTER_HORIZONTAL
        }

        val tvMotto = TextView(this).apply {
            text     = "“Voices that can’t be silenced.”"
            textSize = 16f
            typeface = Typeface.create(Typeface.SERIF, Typeface.ITALIC)
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, 0, 0, (24 * dp).toInt())
        }

        val tvBody = TextView(this).apply {
            text     = "For bug reports and ideas, contact:"
            textSize = 14f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, 0, 0, (4 * dp).toInt())
        }

        val tvEmail = TextView(this).apply {
            text     = ABOUT_EMAIL
            textSize = 15f
            typeface = Typeface.MONOSPACE
            gravity  = Gravity.CENTER_HORIZONTAL
            paintFlags = paintFlags or android.graphics.Paint.UNDERLINE_TEXT_FLAG
            setTextColor(ContextCompat.getColor(context, android.R.color.holo_blue_dark))
            setOnClickListener { sendEmail(ABOUT_EMAIL) }
        }

        val tvRepoLabel = TextView(this).apply {
            text     = "Source code:"
            textSize = 14f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, (16 * dp).toInt(), 0, (4 * dp).toInt())
        }

        val tvRepo = TextView(this).apply {
            text     = ABOUT_REPO
            textSize = 13f
            typeface = Typeface.MONOSPACE
            gravity  = Gravity.CENTER_HORIZONTAL
            paintFlags = paintFlags or android.graphics.Paint.UNDERLINE_TEXT_FLAG
            setTextColor(ContextCompat.getColor(context, android.R.color.holo_blue_dark))
            setOnClickListener { openUrl(ABOUT_REPO) }
        }

        val tvVersion = TextView(this).apply {
            text     = "Version ${appVersion()}"
            textSize = 12f
            alpha    = 0.6f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, (20 * dp).toInt(), 0, 0)
        }

        layout.addView(tvMotto)
        layout.addView(tvBody)
        layout.addView(tvEmail)
        layout.addView(tvRepoLabel)
        layout.addView(tvRepo)
        layout.addView(tvVersion)

        AlertDialog.Builder(this)
            .setTitle("About ${getString(R.string.app_name)}")
            .setView(layout)
            .setPositiveButton("Close", null)
            .show()
    }

    private fun appVersion(): String =
        try {
            val info = packageManager.getPackageInfo(packageName, 0)
            val code = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) info.longVersionCode else @Suppress("DEPRECATION") info.versionCode.toLong()
            "${info.versionName} ($code)"
        } catch (_: Exception) { "unknown" }

    private fun sendEmail(address: String) {
        val intent = Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:$address")).apply {
            putExtra(Intent.EXTRA_SUBJECT, "${getString(R.string.app_name)} feedback")
        }
        try {
            startActivity(intent)
        } catch (_: ActivityNotFoundException) {
            Toast.makeText(this, "No email app installed; address: $address", Toast.LENGTH_LONG).show()
        }
    }

    private fun openUrl(url: String) {
        try {
            startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
        } catch (_: ActivityNotFoundException) {
            Toast.makeText(this, "No browser installed; URL: $url", Toast.LENGTH_LONG).show()
        }
    }
}
