package ai.bale.proxy

import ai.bale.proxy.bale.BaleWsClient
import ai.bale.proxy.livekit.AndroidLiveKitTransport
import ai.bale.proxy.tunnel.TunnelConfig
import ai.bale.proxy.tunnel.TunnelManager
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Intent
import android.net.VpnService
import android.os.Build
import android.os.ParcelFileDescriptor
import android.os.PowerManager
import android.system.ErrnoException
import android.system.Os
import android.system.OsConstants
import android.system.StructPollfd
import android.util.Log
import android.widget.Toast
import kotlinx.coroutines.*
import java.io.FileOutputStream

private const val TAG = "BaleProxy"

class BaleVpnService : VpnService() {

    private var tunFd:    ParcelFileDescriptor? = null
    private var tunnel:   TunnelManager?        = null
    private var wakeLock: PowerManager.WakeLock? = null
    private val scope = CoroutineScope(Dispatchers.Default + SupervisorJob())

    companion object {
        const val EXTRA_PEER_ID   = "peerId"
        const val EXTRA_PEER_TYPE = "peerType"
        const val ACTION_STOP     = "ai.bale.proxy.STOP"
        private const val NOTIF_ID = 1
        private const val CHANNEL  = "vpn"
        private const val ALERT_CHANNEL  = "vpn_alerts"
        private const val ALERT_NOTIF_ID = 2
        var isRunning   = false
        var isConnected = false
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
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            Log.d(TAG, "VpnService: received STOP action")
            stopVpn(); return START_NOT_STICKY
        }

        val prefs    = getSharedPreferences("config", MODE_PRIVATE)
        val peerId   = intent?.getIntExtra(EXTRA_PEER_ID, 0)?.takeIf { it != 0 }
            ?: prefs.getString("peerId",   "")?.toIntOrNull()
            ?: run { Log.d(TAG, "VpnService: no peerId available, aborting"); return START_NOT_STICKY }
        val peerType = intent?.getIntExtra(EXTRA_PEER_TYPE, 1)
            ?: prefs.getString("peerType", "1")?.toIntOrNull() ?: 1
        Log.d(TAG, "VpnService: onStartCommand peerId=$peerId peerType=$peerType")

        isRunning = true
        startForeground(NOTIF_ID, buildNotification())
        val pm = getSystemService(PowerManager::class.java)
        wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "BaleProxy:VpnWakeLock").also { it.acquire() }
        scope.launch { startVpn(peerId, peerType) }
        return START_STICKY
    }

    // Lazy WS resolver: brings the BaleConnection back up if the lifecycle observer
    // has torn it down (e.g., app was backgrounded and the LiveKit channel later
    // dropped, kicking off a TunnelManager reconnect attempt). Returns null only if
    // we genuinely have nothing to work with (no token saved).
    private suspend fun resolveWs(): BaleWsClient? {
        // Bypass reconcile here — its rule says "client mode + VPN running → WS down",
        // which is exactly the state we're in. We need WS *briefly* for signaling.
        // After connect() returns, onTunnelReady → reconcile() drops it again.
        if (BaleConnection.client == null) {
            val token = getSharedPreferences("config", MODE_PRIVATE).getString("token", "").orEmpty()
            if (token.isEmpty()) { Log.e(TAG, "VPN: no saved token"); return null }
            BaleConnection.userInitiatedDisconnect = false
            BaleConnection.connect(token)
        }
        return BaleConnection.client
    }

    private suspend fun startVpn(peerId: Int, peerType: Int) {
        try {
            Log.d(TAG, "VPN: starting (peer=$peerId type=$peerType)")

            // 1. Bring the WS up and wait for it to finish handshaking
            val ws = resolveWs() ?: return
            if (!ws.ready) {
                var retries = 0
                while (!ws.ready && retries++ < 20) delay(500)
                if (!ws.ready) { Log.e(TAG, "VPN: WS not ready after 10s"); return }
            }
            Log.d(TAG, "VPN: WS ready")

            // 2. Establish TUN interface — DNS goes to server (NAT handles it)
            val builder = Builder()
                .setSession("Bale VPN")
                .addAddress("10.8.0.2", 24)
                .addDnsServer("8.8.8.8")
                .addDnsServer("217.218.155.155") // Iran's DNS server
                .setMtu(1500)
                .addDisallowedApplication(packageName)
            for ((addr, prefix) in PUBLIC_IPV4_ROUTES) builder.addRoute(addr, prefix)
            builder.addRoute("::", 0)
            val fd = builder.establish() ?: run { Log.e(TAG, "VPN: TUN establish failed"); return }
            tunFd = fd
            Log.d(TAG, "VPN: TUN up (10.8.0.2/24)")

            // 3. Wire up TunnelManager. resolveWs runs fresh on every (re)connect
            // attempt so a backgrounded-then-dropped session can heal itself; the
            // onTunnelReady callback hands WS state back to reconcile() once
            // signaling is done so the WS drops out from under us when not needed.
            val mgr = TunnelManager(
                getBale       = ::resolveWs,
                log           = { msg -> Log.d(TAG, msg) },
                newTransport  = { AndroidLiveKitTransport(applicationContext) },
                onTunnelReady = { BaleConnection.reconcile() },
            )
            tunnel  = mgr
            mgr.config = TunnelConfig(serverPeerId = peerId, serverPeerType = peerType)

            // 4. Wire inject callback: packets from server → TUN
            val out = FileOutputStream(fd.fileDescriptor)
            rxPkts = 0; rxBytes = 0; txPkts = 0; txBytes = 0
            mgr.onPacket = { pkt ->
                try {
                    txBytes += pkt.size; txPkts++
                    out.write(pkt)
                } catch (_: Exception) {}
            }

            // 5. Call the peer → get LiveKit credentials → join room
            mgr.onPermanentDisconnect = { rejected ->
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
            // Single attempt — no auto-retry. On failure, TunnelManager has
            // already fired onPermanentDisconnect (which posts the alert
            // notification and stops the VPN); the user retries by tapping it.
            if (!mgr.connect()) { Log.e(TAG, "VPN: WebRTC tunnel failed"); return }
            isConnected = true
            Log.d(TAG, "VPN: connected ✓")

            // 6. Read loop: raw IP packets from TUN → server via LiveKit LOSSY.
            //
            // The VpnService TUN fd on this Android version is in O_NONBLOCK mode and
            // refuses to be cleared with fcntl(F_SETFL) (the driver reapplies the flag).
            // So we use the canonical Linux pattern: poll(2) waits in the kernel for
            // POLLIN, then read(2) is guaranteed to return data immediately. This is
            // efficient (no busy-looping, no spinning on EAGAIN) and works regardless
            // of the fd's blocking mode.
            val tunFdNative = fd.fileDescriptor
            val pollFd = StructPollfd().apply {
                this.fd  = tunFdNative
                events   = OsConstants.POLLIN.toShort()
            }
            val pollFds = arrayOf(pollFd)
            val buf     = ByteArray(65536)
            Log.d(TAG, "VPN: entering TUN read loop (scope.isActive=${scope.isActive})")
            while (scope.isActive) {
                // Wait for data. 1 s timeout so we periodically re-check scope.isActive
                // / isRunning and can exit cleanly if stopVpn flips them while we're
                // parked in poll().
                val ready = try {
                    withContext(Dispatchers.IO) { Os.poll(pollFds, 1_000) }
                } catch (e: ErrnoException) {
                    if (e.errno == OsConstants.EINTR) continue
                    if (!isRunning || e.errno == OsConstants.EBADF) {
                        Log.d(TAG, "VPN: TUN poll interrupted by shutdown (errno=${e.errno})"); break
                    }
                    throw e
                }
                if (ready == 0) continue                                   // timed out, loop and re-check
                if ((pollFd.revents.toInt() and OsConstants.POLLIN) == 0) continue

                val n = try {
                    Os.read(tunFdNative, buf, 0, buf.size)
                } catch (e: ErrnoException) {
                    if (e.errno == OsConstants.EAGAIN) continue
                    if (e.errno == OsConstants.EINTR) continue
                    if (!isRunning || e.errno == OsConstants.EBADF) {
                        Log.d(TAG, "VPN: TUN read interrupted by shutdown (errno=${e.errno})"); break
                    }
                    throw e
                }
                if (n < 0) {
                    Log.w(TAG, "VPN: TUN read returned n=$n — exiting loop (isRunning=$isRunning isConnected=$isConnected)")
                    break
                }
                if (n == 0) continue
                rxBytes += n; rxPkts++
                // IPv6: reject immediately with ICMPv6 Destination Unreachable so apps
                // fall back to IPv4 fast instead of waiting for TCP timeout.
                if (n >= 40 && (buf[0].toInt() and 0xF0) == 0x60) {
                    rejectIpv6(buf, n, out)
                } else {
                    // Pass (buf, 0, n) instead of buf.copyOf(n) — the lk-frame
                    // alloc inside sendPacket absorbs the slice, saving one
                    // full-payload copy per packet on the hottest path.
                    mgr.sendPacket(buf, 0, n)
                }
            }
            Log.d(TAG, "VPN: TUN read loop exited cleanly (scope.isActive=${scope.isActive})")
        } catch (e: CancellationException) {
            Log.d(TAG, "VPN: startVpn cancelled (${e.message})")
            throw e
        } catch (e: Exception) {
            Log.e(TAG, "startVpn: exception: ${e::class.simpleName}: ${e.message}", e)
        } finally {
            Log.d(TAG, "startVpn: finally block — calling stopVpn (isRunning=$isRunning)")
            stopVpn()
        }
    }

    private fun stopVpn() {
        Log.d(TAG, "stopVpn: isRunning=$isRunning isConnected=$isConnected")
        isRunning   = false
        isConnected = false
        wakeLock?.release(); wakeLock = null
        tunnel?.stop()
        tunFd?.close(); tunFd = null
        scope.coroutineContext.cancelChildren()
        // VPN no longer running; let reconcile re-apply the foreground rule
        // (so the WS comes back up if the user is still in the app).
        BaleConnection.reconcile()
        stopSelf()
    }

    override fun onDestroy() { Log.d(TAG, "VpnService: onDestroy"); stopVpn(); scope.cancel(); super.onDestroy() }

    // ── IPv6 rejection ────────────────────────────────────────────────────────────
    // Send ICMPv6 Destination Unreachable (no route) so apps fail fast and use IPv4.

    private fun rejectIpv6(pkt: ByteArray, len: Int, out: FileOutputStream) {
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
        try { out.write(ipv6Header(dstIp, srcIp, 58, icmpLen) + icmp) } catch (_: Exception) {}
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
