package ai.bale.proxy

import ai.bale.proxy.bale.BaleWsClient
import ai.bale.proxy.tunnel.BaleClientSignaling
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Intent
import android.content.pm.PackageManager
import android.net.VpnService
import android.os.Build
import android.os.ParcelFileDescriptor
import android.os.PowerManager
import android.system.Os
import android.util.Log
import android.widget.Toast
import androidx.core.content.ContextCompat
import kotlinx.coroutines.*
import java.io.FileDescriptor

private const val TAG = "BaleProxy"

class BaleVpnService : VpnService() {

    private var tunFd:     ParcelFileDescriptor? = null
    /** The signaling strategy that owns the call-setup leg (Bale RPC handshake
     *  vs. direct URL+token). Resolved from intent extras in onStartCommand and
     *  injected into [startVpn]; nulled by [stopVpn]. */
    private var signaling: BaleClientSignaling?       = null
    /** The LiveKit data-channel transport. Always present once startVpn has
     *  begun setup, regardless of which BaleClientSignaling produced the room. */
    private var transport: LkTunnel?            = null
    private var wakeLock:  PowerManager.WakeLock? = null
    private val scope = CoroutineScope(Dispatchers.Default + SupervisorJob())
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
         *  preference flips (Advanced → Stay in room) reach the
         *  currently-attached tunnel without waiting for a fresh
         *  startVpn. Set by `startVpn` after `transport.connect`,
         *  cleared by `stopVpn`. */
        @Volatile private var liveTransport: LkTunnel? = null
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            Log.d(TAG, "VpnService: received STOP action (stopped=$stopped isRunning=$isRunning)")
            stopVpn()
            // Re-entrancy guard: stopVpn() returns early if `stopped` was
            // already set by a prior call (e.g. startVpn's finally block,
            // onPermanentDisconnect). When the user later presses the
            // Disconnect button, the STOP intent must still tear the
            // service down and clear the UI flags — otherwise the button
            // appears to "do nothing" because the service is in a
            // half-shut state. Force-clear flags and stopSelf() here
            // unconditionally so the UI poll observes the off state and
            // the system actually destroys the service.
            isRunning = false
            isConnected = false
            stopSelf()
            return START_NOT_STICKY
        }

        val signaling = signalingFromIntent(intent) ?: run {
            Log.d(TAG, "VpnService: no signaling available, aborting")
            return START_NOT_STICKY
        }

        isRunning = true
        startForeground(NOTIF_ID, buildNotification())
        val pm = getSystemService(PowerManager::class.java)
        wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "BaleProxy:VpnWakeLock").also { it.acquire() }
        scope.launch { startVpn(signaling) }
        return START_STICKY
    }

    /** Build the Bale [BaleClientSignaling] strategy from intent extras / prefs.
     *  Returns null if there's no peer to dial, which short-circuits the
     *  service startup. */
    private fun signalingFromIntent(intent: Intent?): BaleClientSignaling? {
        val prefs    = getSharedPreferences("config", MODE_PRIVATE)
        val peerId   = intent?.getIntExtra(EXTRA_PEER_ID, 0)?.takeIf { it != 0 }
            ?: prefs.getString("peerId", "")?.toIntOrNull()
            ?: return null
        val peerType = intent?.getIntExtra(EXTRA_PEER_TYPE, 1)
            ?: prefs.getString("peerType", "1")?.toIntOrNull() ?: 1
        Log.d(TAG, "VpnService: injecting BaleClientSignaling peer=$peerId type=$peerType")
        return BaleClientSignaling(
            getBale       = ::resolveWs,
            peerId        = peerId,
            peerType      = peerType,
            log           = { msg -> Log.d(TAG, msg) },
            onTunnelReady = { BaleConnection.reconcile() },
        )
    }

    // Lazy WS resolver — brings the BaleConnection back up if the lifecycle
    // observer has torn it down (e.g., app was backgrounded). Used by
    // BaleClientSignaling; not relevant for DirectSignaling.
    //
    // Bypasses reconcile because reconcile's rule says "client mode + VPN
    // running → WS down", which is exactly the state we're in. We need WS
    // briefly for signaling, then onTunnelReady → reconcile drops it again.
    private suspend fun resolveWs(): BaleWsClient? {
        if (BaleConnection.client == null) {
            val token = getSharedPreferences("config", MODE_PRIVATE).getString("token", "").orEmpty()
            if (token.isEmpty()) { Log.e(TAG, "VPN: no saved token"); return null }
            BaleConnection.userInitiatedDisconnect = false
            BaleConnection.connect(token)
        }
        return BaleConnection.client
    }

    /** VPN bring-up. The injected [signaling] handles the call-setup leg
     *  (Bale RPC handshake); everything from the native session id and TUN
     *  forward is identical regardless of how the call was established. */
    private suspend fun startVpn(signaling: BaleClientSignaling) {
        this.signaling = signaling
        try {
            Log.d(TAG, "VPN: starting (${signaling::class.simpleName})")

            // Pre-flight the WS so a stuck handshake aborts silently instead of
            // tripping the permanent-disconnect alert from signaling.connect.
            // The user already sees the WS status indicator in the UI.
            val ws = resolveWs() ?: return
            if (!ws.ready) {
                var retries = 0
                while (!ws.ready && retries++ < 20) delay(500)
                if (!ws.ready) { Log.e(TAG, "VPN: WS not ready after 10s"); return }
            }
            Log.d(TAG, "VPN: WS ready")

            val transport = LkTunnel()
            this.transport = transport

            signaling.onPermanentDisconnect = { rejected ->
                Log.d(TAG, "VPN: permanent disconnect — stopping service (rejected=$rejected)")
                // High-importance notification (audible) — the user may have
                // backgrounded the app. Tap routes back to MainActivity so they
                // can reconnect.
                val title = if (rejected) "Bale VPN — rejected"
                            else          "Bale VPN — disconnected"
                val text  = if (rejected) "The server rejected the connection."
                            else          "Could not reach the server. Tap to reconnect."
                showAlert(title, text)
                scope.launch { stopVpn() }
            }

            // Dial the call BEFORE touching TUN — if we establish TUN first,
            // apps route into a half-up VPN whose tunnel isn't ready yet,
            // packets queue, TCP SYNs time out. The signaling impl already
            // fired onPermanentDisconnect on failure, so we just return.
            if (!signaling.connect(transport)) {
                Log.e(TAG, "VPN: signaling.connect returned false"); return
            }
            isConnected = true

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
            rxPkts = 0; rxBytes = 0; txPkts = 0; txBytes = 0
            liveTransport = transport
            Log.d(TAG, "VPN: native bridge attached")

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

            // (SOCKS5-from-UI option removed; BaleSocks5Service still
            // exists in the codebase but is never started from here.)

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
        signaling?.stop();      signaling = null
        transport?.disconnect(); transport = null
        liveTransport = null
        tunFd?.close(); tunFd = null
        scope.coroutineContext.cancelChildren()
        // SOCKS5 server is meaningful only while VPN is up — its destination
        // sockets route via the TUN by default; without VPN they'd silently
        // fall back to the underlying network. Stop it explicitly.
        if (BaleSocks5Service.isRunning) {
            startService(Intent(this, BaleSocks5Service::class.java)
                .setAction(BaleSocks5Service.ACTION_STOP))
        }
        // VPN no longer running; let reconcile re-apply the foreground rule
        // (so the WS comes back up if the user is still in the app).
        BaleConnection.reconcile()
        stopSelf()
    }


    override fun onDestroy() { Log.d(TAG, "VpnService: onDestroy"); stopVpn(); scope.cancel(); super.onDestroy() }

    // ── IPv6 rejection ────────────────────────────────────────────────────────────
    // Send ICMPv6 Destination Unreachable (no route) so apps fail fast and use IPv4.

    private fun rejectIpv6(pkt: ByteArray, len: Int, tunFd: FileDescriptor) {
        if (len < 40) return
        // Never reply to an ICMPv6 error (types 0–127) to avoid error loops.
        val nextHdr = pkt[6].toInt() and 0xFF
        if (nextHdr == 58 && len > 40 && (pkt[40].toInt() and 0xFF) < 128) return
        val srcIp      = ipv6Str(pkt, 8)
        val dstIp      = ipv6Str(pkt, 24)
        val excerptLen = minOf(len, 1232)
        val icmpLen    = 8 + excerptLen
        val icmp       = ByteArray(icmpLen)
        icmp[0] = 1   // type: Destination Unreachable
        icmp[1] = 0   // code: no route to destination
        pkt.copyInto(icmp, 8, 0, excerptLen)
        val pseudo = pseudoV6(dstIp, srcIp, 58, icmpLen)
        putU16(icmp, 2, checksum(pseudo + icmp))
        val reply = ipv6Header(dstIp, srcIp, 58, icmpLen) + icmp
        try { Os.write(tunFd, reply, 0, reply.size) } catch (_: Exception) {}
    }

    private fun ipv6Header(src: String, dst: String, nextHdr: Int, payLen: Int): ByteArray {
        val hdr = ByteArray(40)
        hdr[0] = 0x60.toByte()
        putU16(hdr, 4, payLen)
        hdr[6] = nextHdr.toByte()
        hdr[7] = 64
        putIpv6(hdr, 8, src)
        putIpv6(hdr, 24, dst)
        return hdr
    }

    private fun pseudoV6(src: String, dst: String, proto: Int, len: Int): ByteArray {
        val p = ByteArray(40)
        putIpv6(p, 0, src); putIpv6(p, 16, dst)
        putU32(p, 32, len); p[39] = proto.toByte()
        return p
    }

    private fun checksum(data: ByteArray): Int {
        var sum = 0
        for (i in 0 until data.size - 1 step 2)
            sum += ((data[i].toInt() and 0xFF) shl 8) or (data[i + 1].toInt() and 0xFF)
        if (data.size % 2 != 0) sum += (data.last().toInt() and 0xFF) shl 8
        while (sum shr 16 != 0) sum = (sum and 0xFFFF) + (sum shr 16)
        return sum.inv() and 0xFFFF
    }

    private fun ipv6Str(buf: ByteArray, off: Int): String {
        val g = (0 until 16 step 2).map { i ->
            ((buf[off + i].toInt() and 0xFF) shl 8) or (buf[off + i + 1].toInt() and 0xFF)
        }
        var bestStart = -1; var bestLen = 0; var curStart = -1; var curLen = 0
        for (i in g.indices) {
            if (g[i] == 0) { if (curStart < 0) { curStart = i; curLen = 0 }; curLen++
                if (curLen > bestLen) { bestLen = curLen; bestStart = curStart }
            } else { curStart = -1; curLen = 0 }
        }
        if (bestLen < 2) return g.joinToString(":") { it.toString(16) }
        val left  = g.subList(0, bestStart).joinToString(":") { it.toString(16) }
        val right = g.subList(bestStart + bestLen, 8).joinToString(":") { it.toString(16) }
        return when { left.isEmpty() && right.isEmpty() -> "::"; left.isEmpty() -> "::$right"; right.isEmpty() -> "$left::"; else -> "$left::$right" }
    }

    private fun putIpv6(buf: ByteArray, off: Int, ip: String) {
        if (ip == "::") return
        val groups: List<String> = if ("::" in ip) {
            val (l, r) = ip.split("::", limit = 2)
            val lg = if (l.isEmpty()) emptyList() else l.split(":")
            val rg = if (r.isEmpty()) emptyList() else r.split(":")
            lg + List(8 - lg.size - rg.size) { "0" } + rg
        } else ip.split(":")
        groups.forEachIndexed { i, g ->
            val v = g.ifEmpty { "0" }.toInt(16)
            buf[off + i * 2] = (v shr 8).toByte(); buf[off + i * 2 + 1] = v.toByte()
        }
    }

    private fun putU16(buf: ByteArray, off: Int, v: Int) { buf[off] = (v shr 8).toByte(); buf[off + 1] = v.toByte() }
    private fun putU32(buf: ByteArray, off: Int, v: Int) { putU16(buf, off, v shr 16); putU16(buf, off + 2, v) }

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
