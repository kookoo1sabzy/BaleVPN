package ai.bale.proxy

import ai.bale.proxy.bale.BaleEvent
import ai.bale.proxy.bale.EndReason
import ai.bale.proxy.bale.PlaceCallResult
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Intent
import android.content.pm.PackageManager
import android.net.VpnService
import android.os.Build
import android.os.ParcelFileDescriptor
import android.os.PowerManager
import android.util.Log
import android.widget.Toast
import androidx.core.content.ContextCompat
import kotlinx.coroutines.*

private const val TAG = "BaleProxy"

class BaleVpnService : VpnService() {

    private var tunFd:     ParcelFileDescriptor? = null
    /** Peer id we dialled — stored so reconnect logic and the
     *  stats UI can correlate the live session to a contact. */
    private var dialedPeerId: String? = null
    /** The LiveKit data-channel transport. Present once
     *  startVpn has begun setup. */
    private var transport: LkTunnel?            = null
    /** Per-session subscriber on [BaleSignaling.events] for the
     *  narrow CallEnded(Rejected) early-teardown path. Cancelled
     *  in [stopVpn] so the next session's startVpn installs a
     *  fresh collector against the correct `peerId`. */
    private var eventsJob: Job?                  = null
    private var wakeLock:  PowerManager.WakeLock? = null
    private val scope = CoroutineScope(Dispatchers.Default + SupervisorJob())
    /** Independent scope for teardown work. Kept outside [scope]
     *  so `stopVpn()`'s internal `scope.cancelChildren()` can't
     *  self-cancel the coroutine that called it. Currently
     *  no-op (stopVpn is fully sync) but adding any suspend
     *  call inside stopVpn would immediately turn the self-
     *  cancel into a wedge — keep the scopes separate. */
    private val teardownScope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    @Volatile private var stopped = false

    companion object {
        const val EXTRA_PEER_ID   = "peerId"
        const val EXTRA_PEER_TYPE = "peerType"
        const val ACTION_STOP     = "ai.bale.proxy.STOP"
        private const val NOTIF_ID = 1
        private const val CHANNEL  = "vpn"
        private const val ALERT_CHANNEL  = "vpn_alerts"
        private const val ALERT_NOTIF_ID = 2
        // @Volatile — both flags are written from the service's
        // Dispatchers.Default coroutines (startVpn / stopVpn /
        // onPermanentDisconnect) and read from the Main-thread UI
        // poller. Without the barrier the UI sees stale `true` after
        // a permanent disconnect, the Disconnect button persists, and
        // tapping it just bounces an ACTION_STOP intent off a dead
        // service that no longer touches these flags.
        @Volatile var isRunning   = false
        @Volatile var isConnected = false
        @Volatile var rxPkts: Long = 0; @Volatile var rxBytes: Long = 0
        @Volatile var txPkts: Long = 0; @Volatile var txBytes: Long = 0


        // Public IPv4 CIDR blocks: 0.0.0.0/0 minus RFC1918, loopback, link-local.
        val PUBLIC_IPV4_ROUTES = listOf(
            "1.0.0.0" to 8,   "2.0.0.0" to 7,   "4.0.0.0" to 6,   "8.0.0.0" to 7,
            "11.0.0.0" to 8,  "12.0.0.0" to 6,  "16.0.0.0" to 4,  "32.0.0.0" to 3,
            "64.0.0.0" to 3,  "96.0.0.0" to 5,  "104.0.0.0" to 5, "112.0.0.0" to 5,
            "120.0.0.0" to 6, "124.0.0.0" to 7, "126.0.0.0" to 8,
            "128.0.0.0" to 3, "160.0.0.0" to 5, "168.0.0.0" to 8,
            "169.0.0.0" to 9, "169.128.0.0" to 10, "169.192.0.0" to 11, "169.224.0.0" to 12,
            "169.240.0.0" to 13, "169.248.0.0" to 14, "169.252.0.0" to 15, "169.255.0.0" to 16,
            "170.0.0.0" to 7, "172.0.0.0" to 12, "172.32.0.0" to 11, "172.64.0.0" to 10,
            "172.128.0.0" to 9, "173.0.0.0" to 8, "174.0.0.0" to 7, "176.0.0.0" to 4,
            "192.0.0.0" to 10, "192.64.0.0" to 10, "192.128.0.0" to 11, "192.160.0.0" to 13,
            "192.169.0.0" to 16, "192.170.0.0" to 15, "192.172.0.0" to 14, "192.176.0.0" to 12,
            "192.192.0.0" to 10, "193.0.0.0" to 8, "194.0.0.0" to 7, "196.0.0.0" to 6,
            "200.0.0.0" to 5, "208.0.0.0" to 4,
        )

        /** Live reference to the running VPN's transport, so mid-session
         *  preference flips (VPN / SOCKS5 toggles) reach the currently-
         *  attached tunnel without waiting for a fresh startVpn. Set by
         *  `startVpn` after `transport.connect`, cleared by `stopVpn`. */
        @Volatile private var liveTransport: LkTunnel? = null

        /** Live reference to the running service instance — needed to
         *  construct `VpnService.Builder()` at runtime (the Builder is
         *  an inner class of `VpnService` and must be instantiated
         *  against an active service). Set in `onCreate`, cleared in
         *  `onDestroy`. */
        @Volatile private var instance: BaleVpnService? = null

        /** Bring up the TUN at runtime against the live tunnel.
         *  Assumes the user has already granted VPN permission via
         *  `VpnService.prepare(...)` in an Activity context. Returns
         *  true on success; false if no live tunnel or no service
         *  instance or `establish()` failed (e.g. permission missing). */
        @JvmStatic
        fun enableTun(): Boolean {
            val svc = instance ?: return false
            val t   = liveTransport ?: return false
            return svc.attachTunNow(t)
        }

        /** Drop the TUN at runtime: the LK tunnel + SOCKS5 listener
         *  (if up) stay running, but the device's own traffic stops
         *  routing through the tunnel. Idempotent. */
        @JvmStatic
        fun disableTun() {
            liveTransport?.detachTun()
        }

        /** Currently-bound SOCKS5 port (0 = not running). Surfaced so the
         *  UI can label the toggle with the active port. */
        @Volatile var socks5Port: Int = 0

        /** Enable the LAN-facing SOCKS5 listener on the live VPN tunnel.
         *  Returns the bound port (matches `port` unless `0` was passed
         *  for OS-assign), or `0` on failure / no live tunnel. Returns as
         *  soon as the listener binds; the QUIC handshake to the peer
         *  warms in the background, so a non-zero return does NOT mean the
         *  proxy is usable yet — gate on [`quicConnected`]. */
        @JvmStatic
        fun enableSocks5(port: Int): Int {
            val t = liveTransport ?: return 0
            val bound = t.enableSocks5Server(port)
            socks5Port = bound
            return bound
        }

        /** True once the QUIC client to the peer is up — i.e. the SOCKS5
         *  proxy can actually carry traffic. The UI shows the proxy
         *  address only when this is true. */
        @JvmStatic
        fun quicConnected(): Boolean = liveTransport?.isQuicConnected() ?: false

        /** Tear down the SOCKS5 listener. Idempotent. */
        @JvmStatic
        fun disableSocks5() {
            liveTransport?.disableSocks5Server()
            socks5Port = 0
        }
    }

    override fun onCreate() {
        super.onCreate()
        instance = this
    }

    /** Build a VpnService TUN and hand its fd to the live tunnel.
     *  Called from the companion `enableTun()` when the user toggles
     *  the VPN switch on at runtime. Assumes VPN permission was
     *  already granted via `VpnService.prepare(...)` in an Activity
     *  context; if not, `establish()` returns null and we surface
     *  false so MainActivity can re-prompt. */
    private fun attachTunNow(transport: LkTunnel): Boolean {
        val builder = Builder()
            .setSession("Bale VPN")
            .addAddress("10.8.0.2", 24)
            .addRoute("::", 0)
            .addDnsServer("8.8.8.8")
            .addDnsServer("217.218.155.155")
            .setMtu(1000)
            .addDisallowedApplication(packageName)
        for ((addr, prefix) in PUBLIC_IPV4_ROUTES) builder.addRoute(addr, prefix)
        val fd = builder.establish() ?: run {
            Log.e(TAG, "VPN: runtime TUN establish failed (permission not granted?)")
            return false
        }
        Log.d(TAG, "VPN: runtime TUN up (10.8.0.2/24)")
        transport.attachTun(fd.detachFd())
        return true
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            Log.d(TAG, "VpnService: received STOP action (stopped=$stopped isRunning=$isRunning)")
            // Update the UI-visible flags inline so a poll right
            // after pressing Disconnect observes the off state
            // immediately. The actual teardown (transport JNI
            // disconnect + scope cancel) runs on a background
            // dispatcher so Android's 30s onStartCommand budget
            // isn't blocked by the LkTunnel `Drop` chain (which
            // contends with the stats-poller JNI on the
            // LkTunnel-instance @Synchronized lock). Without
            // this we'd ANR — observed in the wild after the
            // QUIC keeper started holding a strong Inner ref.
            isRunning = false
            isConnected = false
            teardownScope.launch { stopVpn() }
            stopSelf()
            return START_NOT_STICKY
        }

        val peerId = peerIdFromIntent(intent) ?: run {
            Log.d(TAG, "VpnService: no peer to dial, aborting")
            return START_NOT_STICKY
        }
        dialedPeerId = peerId

        isRunning = true
        startForeground(NOTIF_ID, buildNotification())
        val pm = getSystemService(PowerManager::class.java)
        wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "BaleProxy:VpnWakeLock").also { it.acquire() }
        scope.launch { startVpn(peerId) }
        return START_STICKY
    }

    /** Resolve the peer to dial from intent extras / prefs. The
     *  peer is the Bale `uid` as a decimal string — matches the
     *  shape `BaleSignaling.placeCall` consumes. */
    private fun peerIdFromIntent(intent: Intent?): String? {
        val prefs = getSharedPreferences("config", MODE_PRIVATE)
        val fromIntent = intent?.getIntExtra(EXTRA_PEER_ID, 0)?.takeIf { it != 0 }
        val fromPrefs  = prefs.getString("peerId", "")?.toIntOrNull()
        return (fromIntent ?: fromPrefs)?.toString()
    }

    /** Ensure the WS is up before placing a call. We need it briefly
     *  for `place_call`; once the LK side is up the Rust rule engine's
     *  call_active gate (auto-flipped by the global LK observer) pauses
     *  the WS again. */
    private suspend fun ensureWsUp(): Boolean {
        val sig = BaleConnection.signaling ?: run {
            Log.e(TAG, "VPN: BaleSignaling not initialised")
            return false
        }
        val token = getSharedPreferences("config", MODE_PRIVATE)
            .getString("token", "").orEmpty()
        if (token.isEmpty()) { Log.e(TAG, "VPN: no saved token"); return false }
        // sig.connect() clears user_disconnect and installs the token;
        // the Rust rule engine evaluates and brings the WS up.
        if (!sig.isConnected) sig.connect()
        // Wait up to 10s for the WS handshake to complete.
        var retries = 0
        while (!sig.isConnected && retries++ < 20) delay(500)
        return sig.isConnected
    }

    /** VPN bring-up. Places the call via `signaling.placeCall(peerId)`,
     *  hands the resulting LK creds to the transport, and parks until
     *  cancelled. The permanent-disconnect surface is `LkTunnel`'s
     *  own `onDisconnected` callback — WS-side terminal pushes are
     *  intentionally ignored so transient WS errors can't drop the
     *  live call. */
    private suspend fun startVpn(peerId: String) {
        try {
            Log.d(TAG, "VPN: starting dial → $peerId")

            val sig = BaleConnection.signaling ?: run {
                Log.e(TAG, "VPN: BaleSignaling not initialised"); return
            }
            // No setMode push — the rule engine's server-vs-client
            // semantics are driven by `server_active`, which is
            // false here (we're starting the client VPN, not the
            // server service). Default is client semantics.

            // Pre-flight the WS so a stuck handshake aborts
            // silently instead of stalling the dial.
            if (!ensureWsUp()) {
                Log.e(TAG, "VPN: WS not ready after 10s")
                return
            }
            Log.d(TAG, "VPN: WS ready")

            val transport = LkTunnel()
            this.transport = transport

            // LK room-close hook — fires when the server peer
            // leaves the room (LkTunnel detects the empty room
            // and emits "disconnected"). Without this, the only
            // teardown signal is Bale's CallEnded over the WS,
            // which arrives 30s+ late (server-side push pipeline
            // is slow / racy under cardinality-violation
            // re-subscribes). The LK side knows immediately, so
            // hook directly to flip the UI without waiting.
            transport.onDisconnected = {
                Log.d(TAG, "VPN: LkTunnel disconnected — server left room")
                onPermanentDisconnect(rejected = false)
            }

            // WS-event listener for any CallEnded targeting our
            // peer. Server-side reject pushes CallEnded with
            // discard_reason — we don't have a confirmed mapping
            // to EndReason.Rejected yet (map_discard_reason in
            // Rust returns Other(code) for everything), so we
            // can't filter by reason. The peer-match guard alone
            // is enough: a CallEnded for the specific peer we
            // dialled is the server's authoritative "this call
            // is over" signal. Reason is used only for UI
            // labelling.
            eventsJob = scope.launch {
                sig.events.collect { ev ->
                    if (ev is BaleEvent.CallEnded && ev.peerId == peerId) {
                        val rejected = ev.reason == EndReason.Rejected
                        Log.d(TAG, "VPN: WS callEnded for our peer (reason=${ev.reason}) — tearing down")
                        onPermanentDisconnect(rejected = rejected)
                    }
                }
            }

            // Dial the call BEFORE touching TUN — if TUN comes up
            // first, apps route into a half-up VPN whose tunnel
            // isn't ready yet and TCP SYNs time out.
            val placed = sig.placeCall(peerId)
            val (lkUrl, lkToken) = when (placed) {
                is PlaceCallResult.Ok -> placed.url to placed.token
                PlaceCallResult.Rejected -> {
                    Log.w(TAG, "VPN: placeCall rejected"); onPermanentDisconnect(rejected = true); return
                }
                PlaceCallResult.NoPeer, PlaceCallResult.NotAuthenticated, PlaceCallResult.Transport -> {
                    Log.w(TAG, "VPN: placeCall failed: $placed"); onPermanentDisconnect(rejected = false); return
                }
            }

            transport.connect(lkUrl, lkToken)
            isConnected = true

            // ── VPN / SOCKS5 mode selection ─────────────────────────────
            //
            // Two independent toggles, persisted by MainActivity. Both are
            // read once at this point in startVpn — runtime toggles via the
            // UI persist immediately but only take full effect on the NEXT
            // Start cycle (TUN attach/detach at runtime would need a
            // separate native API). SOCKS5 IS hot-toggleable via the
            // companion `enableSocks5` / `disableSocks5` methods.
            val cfg = getSharedPreferences("config", MODE_PRIVATE)
            val vpnEnabled    = cfg.getBoolean("vpn_enabled",    true)
            val socks5Enabled = cfg.getBoolean("socks5_enabled", false)
            val socks5PortPref = cfg.getInt("socks5_port", 1080)
            Log.d(TAG, "VPN: mode vpn=$vpnEnabled socks5=$socks5Enabled port=$socks5PortPref")

            liveTransport = transport
            socks5Port = 0
            rxPkts = 0; rxBytes = 0; txPkts = 0; txBytes = 0

            // The Rust core auto-warms the QUIC client when the LK
            // tunnel transitions to Connected in client-role mode
            // (no NAT / no QUIC server handle installed), so we
            // don't need an explicit ensureQuicClient call here.
            // First toggle of SOCKS5 will hit the already-up QUIC.

            // Auto-enable SOCKS5 if the user toggled it on. The
            // QUIC handshake to the peer's acceptor may race the
            // peer's `start_server` call; Rust's `ensure_quic_client`
            // retries with backoff for up to 30s so this call
            // succeeds even when the server side comes up slightly
            // after we do.
            // SOCKS5 enable returns as soon as the listener binds — the
            // QUIC handshake is warmed in the background on the Rust side
            // (enable_socks5_server), so this no longer blocks VPN bring-up.
            if (socks5Enabled) {
                Log.d(TAG, "VPN: enabling SOCKS5 on port $socks5PortPref")
                val bound = transport.enableSocks5Server(socks5PortPref)
                if (bound != 0) {
                    socks5Port = bound
                    Log.d(TAG, "VPN: SOCKS5 listening on $bound")
                } else {
                    Log.w(TAG, "VPN: SOCKS5 enable failed")
                }
            }

            if (!vpnEnabled) {
                // VPN OFF: no TUN, no Builder().establish(). The tunnel
                // is up + SOCKS5 may be listening; the service just
                // parks until the user taps Disconnect. Apps on this
                // device hit the network directly (or via the SOCKS5
                // listener if they're configured to use it).
                Log.d(TAG, "VPN: TUN skipped (vpn_enabled=false) — tunnel-only mode")
                // Skip the TUN establish block below by jumping to the
                // post-attach path. We accomplish this by wrapping the
                // TUN block in an `if (vpnEnabled)` — see below.
            }

            if (vpnEnabled) {
            // Establish TUN — tunnel is up and ready to carry packets.
            // Client mode is implied by `attachTun`; no separate call needed.
            //
            // Bypass the VPN for our own app via addDisallowedApplication:
            // every socket the app opens (Bale WS, LK signaling over Rust,
            // LK media UDP via libwebrtc, gRPC-web auth) skips the TUN
            // entirely. Required because the Rust LiveKit SDK doesn't
            // expose a per-socket protect() hook or
            // networkIgnoreMask = ADAPTER_TYPE_VPN, so we can't selectively
            // bypass control-plane sockets the way we used to with the
            // Kotlin LK SDK. Coarse but correct: nothing the app initiates
            // ever loops through its own VPN.
            //
            // SOCKS5-forwarded destination sockets opened from this app
            // therefore also bypass — LAN clients SOCKS5-ing through us
            // reach destinations via the device's underlying WiFi/cellular
            // directly, not via the Bale tunnel. Forcing them through the
            // TUN with android_setsocknetwork() doesn't work: the bound
            // socket exits TUN with src=WiFi-IP (no VPN address for a
            // disallowed-app socket), and TUN-arrived replies are never
            // delivered to the disallowed-app socket.
            // IPv4-only carrier, IPv6 black-holed at the route layer to
            // prevent leakage. We deliberately don't `addAddress(<v6>, …)`
            // because Samsung Knox-patched devices reject every IPv6
            // address we've tried (ULA `fd00::2`, doc-prefix `2001:db8::2`)
            // at the JNI gate with `VpnJni: Invalid address`.
            //
            // `addRoute("::", 0)` steers v6 traffic into `tun0` so the
            // device's underlying interface (WiFi / cellular) can't
            // carry it — without this, v6 packets would just bypass
            // the VPN entirely. With the route installed but no v6
            // source address on the TUN, the kernel's source-address
            // selection fails at `connect()` time with
            // `EADDRNOTAVAIL`. Apps see the v6 attempt fail
            // immediately and Happy Eyeballs falls back to v4 within
            // ms. No leak, fast fallback.
            //
            // MTU sized to fit our payload inside a single Opus RTP
            // packet. Opus RTP (RFC 7587) is one-Opus-frame-per-packet
            // — no fragmentation framing — and the practical max
            // payload is ~1275 B. Our wire frame is `FRAME_TYPE_IP`
            // (1 B) + IP packet, so an MTU of 1200 keeps us safely
            // below the Opus ceiling with headroom for RTP/SRTP/UDP/IP
            // overhead on the wire.
            val builder = Builder()
                .setSession("Bale VPN")
                .addAddress("10.8.0.2", 24)
                .addRoute("::", 0)
                .addDnsServer("8.8.8.8")
                .addDnsServer("217.218.155.155") // Iran's DNS server
                .setMtu(1000)
                .addDisallowedApplication(packageName)

            for ((addr, prefix) in PUBLIC_IPV4_ROUTES) builder.addRoute(addr, prefix)

            val fd = builder.establish() ?: run { Log.e(TAG, "VPN: TUN establish failed"); return }
            tunFd = fd
            Log.d(TAG, "VPN: TUN up (10.8.0.2/24)")

            // ParcelFileDescriptor.detachFd transfers fd ownership to
            // native; we must NOT call tunFd.close() any more. The
            // tunnel's Drop (on close()) closes the fd as part of
            // native teardown.
            transport.attachTun(fd.detachFd())
            tunFd = null
            Log.d(TAG, "VPN: native bridge attached")
            } // end if (vpnEnabled)

            // Poll the native counters so MainActivity's 500 ms tick can read
            // them from the companion fields.
            scope.launch {
                while (isActive) {
                    val t = transport ?: break
                    val s = t.stats()
                    if (s != null && s.size == 4) {
                        // rx = client→server (TUN→DC) → UI "↑ uploaded"
                        // tx = server→client (DC→TUN) → UI "↓ downloaded"
                        rxPkts = s[0]; rxBytes = s[1]
                        txPkts = s[2]; txBytes = s[3]
                    }
                    delay(500)
                }
            }

            // Park until cancelled. The native dispatcher is doing all the
            // per-packet work; we keep the service alive so the foreground
            // notification, wake-lock, and signaling callbacks stay in place.
            Log.d(TAG, "VPN: connected ✓ — yielding to native dispatcher")
            try {
                while (scope.isActive) delay(60_000)
            } catch (_: CancellationException) { /* stopVpn cancels us */ }
        } catch (e: CancellationException) {
            Log.d(TAG, "VPN: startVpn cancelled (${e.message})")
            throw e
        } catch (e: Exception) {
            Log.e(TAG, "startVpn: exception: ${e::class.simpleName}: ${e.message}", e)
        } finally {
            Log.d(TAG, "startVpn: finally — calling stopVpn (isRunning=$isRunning)")
            stopVpn()
        }
    }

    /** Single point that the events-collect coroutine + each
     *  `placeCall` failure path call into. Posts the alert and
     *  bounces the VPN. Mirrors the pre-migration
     *  `signaling.onPermanentDisconnect` lambda. */
    private fun onPermanentDisconnect(rejected: Boolean) {
        Log.d(TAG, "VPN: permanent disconnect — stopping service (rejected=$rejected)")
        val title = if (rejected) "Bale VPN — rejected"
                    else          "Bale VPN — disconnected"
        val text  = if (rejected) "The server rejected the connection."
                    else          "Could not reach the server. Tap to reconnect."
        showAlert(title, text)
        // Flip the UI-visible flags inline (same pattern as the
        // ACTION_STOP handler). Without this, MainActivity's 500ms
        // tick keeps seeing isRunning=true until the queued
        // stopVpn coroutine actually lands — which can be delayed
        // by dispatcher contention or an in-flight LkTunnel Drop,
        // and the user perceives the disconnect as "stuck" until
        // they manually press Disconnect.
        isRunning = false
        isConnected = false
        teardownScope.launch { stopVpn() }
    }

    @Synchronized
    private fun stopVpn() {
        // Idempotent: stopVpn is called from at least three places that can
        // race — startVpn()'s finally block, onPermanentDisconnect, and
        // onDestroy. Without this guard, the second caller hits
        // `WakeLock under-locked` because the ref-counted release goes
        // negative once the first caller has already released it.
        if (stopped) return
        stopped = true
        Log.d(TAG, "stopVpn: isRunning=$isRunning isConnected=$isConnected")
        isRunning   = false
        isConnected = false
        try { wakeLock?.release() } catch (_: Exception) {}
        wakeLock = null
        // transport.disconnect() closes the LkTunnel handle, whose
        // Drop tears down the NAT/TUN session and the LK side in one
        // shot (closes the TUN fd, aborts the per-tunnel task, fires
        // Room::close). The local tunFd is only non-null in the
        // window before detachFd transferred ownership.
        dialedPeerId = null
        eventsJob?.cancel(); eventsJob = null
        transport?.disconnect(); transport = null
        liveTransport = null
        tunFd?.close(); tunFd = null
        // SOCKS5 listener was aborted by transport.disconnect
        // (via the native socks5_handle drop). Reset the UI-
        // visible port flag so MainActivity.tick renders
        // "stopped" immediately instead of waiting for a poll
        // path to clear it.
        socks5Port = 0
        scope.coroutineContext.cancelChildren()
        // SOCKS5-over-QUIC is torn down by LkTunnel::disconnect() above
        // (the native side aborts the listener task + drops the QUIC
        // client). No extra Kotlin-side stop needed. The WS auto-restores
        // when the LK tunnel emits Disconnected (Rust global LK observer
        // flips call_active back to false → rule engine re-spawns the
        // run loop).
        stopSelf()
    }


    override fun onDestroy() {
        Log.d(TAG, "VpnService: onDestroy")
        stopVpn()
        scope.cancel()
        teardownScope.cancel()
        instance = null
        super.onDestroy()
    }

    // ── Notification ──────────────────────────────────────────────────────────────

    private fun buildNotification(): Notification {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val mgr = getSystemService(NotificationManager::class.java)
            val ch  = NotificationChannel(CHANNEL, "VPN", NotificationManager.IMPORTANCE_LOW)
            ch.setShowBadge(false)
            mgr.createNotificationChannel(ch)
        }
        val builder = Notification.Builder(this, CHANNEL)
            .setContentTitle("Bale VPN")
            .setContentText("VPN active")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setOngoing(true)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            builder.setForegroundServiceBehavior(Notification.FOREGROUND_SERVICE_IMMEDIATE)
        }
        return builder.build()
    }

    // Separate channel + notification id for "VPN dropped" alerts. The ongoing
    // foreground notification uses CHANNEL/NOTIF_ID; alerts must be a different
    // id so they don't replace each other, and a different channel so the user
    // gets sound/vibration despite the foreground channel being LOW importance.
    private fun showAlert(title: String, text: String) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val mgr = getSystemService(NotificationManager::class.java)
            val ch  = NotificationChannel(ALERT_CHANNEL, "VPN alerts", NotificationManager.IMPORTANCE_HIGH)
            mgr.createNotificationChannel(ch)
        }
        val tap = android.app.PendingIntent.getActivity(
            this, 0,
            Intent(this, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP),
            android.app.PendingIntent.FLAG_UPDATE_CURRENT or android.app.PendingIntent.FLAG_IMMUTABLE,
        )
        val n = Notification.Builder(this, ALERT_CHANNEL)
            .setContentTitle(title)
            .setContentText(text)
            .setSmallIcon(android.R.drawable.stat_notify_error)
            .setAutoCancel(true)
            .setContentIntent(tap)
            .build()
        getSystemService(NotificationManager::class.java).notify(ALERT_NOTIF_ID, n)
    }

}
