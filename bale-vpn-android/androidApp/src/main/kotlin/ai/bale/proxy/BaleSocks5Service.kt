package ai.bale.proxy

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.IBinder
import android.util.Log
import android.widget.Toast
import kotlinx.coroutines.*

private const val TAG = "BaleSocks5"

/** Foreground service that owns the native SOCKS5 listener. Independent
 *  of BaleVpnService — the listener can be running while the VPN is off
 *  and vice versa, but the destination sockets only route through the
 *  VPN's TUN when it's up, so we refuse to start without VPN.
 *
 *  All listener logic lives in C++ (`nat/socks5_server.cc`); this
 *  service just owns the foreground notification + the lifecycle + a
 *  polling loop that surfaces the active-connection count to the UI. */
class BaleSocks5Service : Service() {

    private var notifChannelReady = false
    private val scope             = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private var pollJob: Job?     = null

    companion object {
        const val EXTRA_PORT  = "port"
        const val ACTION_STOP = "ai.bale.proxy.SOCKS5_STOP"
        private const val NOTIF_ID  = 3
        private const val CHANNEL   = "socks5"
        private const val POLL_MS   = 500L

        @Volatile var isRunning       = false
        @Volatile var port:    Int    = 0
        @Volatile var connectionCount: Int = 0
            private set

        // UI listener — MainActivity registers itself to receive count
        // updates for live display. Volatile so background threads see writes.
        @Volatile private var listener: ((Int) -> Unit)? = null
        fun setListener(cb: ((Int) -> Unit)?) { listener = cb }

        private fun notifyCount(n: Int) {
            if (connectionCount == n) return
            connectionCount = n
            listener?.invoke(n)
        }
    }

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            stopServer()
            stopSelf()
            return START_NOT_STICKY
        }
        // OS-restart (sticky redelivery) passes a null intent or no extra; fall
        // back to the last user-configured port persisted by MainActivity.
        val p = intent?.getIntExtra(EXTRA_PORT, -1)?.takeIf { it in 1..65535 }
            ?: getSharedPreferences("config", MODE_PRIVATE).getInt("socks5_port", 1080)
        startServer(p)
        return START_STICKY
    }

    private fun startServer(p: Int) {
        // SOCKS5 server is a feature on top of the VPN — destination sockets
        // default-route through the TUN, which only exists while the VPN is
        // running. Without VPN, traffic would silently fall back to WiFi and
        // bypass everything the user enabled this for. Bail and let
        // MainActivity sync the toggle state.
        if (!BaleVpnService.isRunning) {
            Toast.makeText(this, "Start the VPN first", Toast.LENGTH_LONG).show()
            stopForegroundCompat()
            stopSelf()
            return
        }
        if (isRunning) {
            if (port == p) return                       // already on the right port
            stopServer()
        }
        startForeground(NOTIF_ID, buildNotification(p))
        // Native bind is async (work is posted to the dispatcher); confirm
        // by polling isRunning briefly. If it never comes up we surface a
        // toast and stop the service.
        Socks5Bridge.setDebug(BaleServerService.debug)
        Socks5Bridge.start(p)
        scope.launch {
            // Give the dispatcher a few ticks to bind. Realistic bind
            // failures (port in use, perm denied) surface immediately.
            var attempts = 10
            while (attempts-- > 0 && !Socks5Bridge.isRunning()) delay(50)
            if (Socks5Bridge.isRunning()) {
                port      = p
                isRunning = true
                Log.d(TAG, "started on :$p")
                startPollLoop()
            } else {
                Toast.makeText(this@BaleSocks5Service,
                    "SOCKS5: could not bind :$p", Toast.LENGTH_LONG).show()
                stopForegroundCompat()
                stopSelf()
            }
        }
    }

    private fun stopServer() {
        if (!isRunning && !Socks5Bridge.isRunning()) return
        Socks5Bridge.stop()
        isRunning       = false
        port            = 0
        connectionCount = 0
        listener?.invoke(0)
        pollJob?.cancel(); pollJob = null
        stopForegroundCompat()
        Log.d(TAG, "stopped")
    }

    private fun startPollLoop() {
        pollJob?.cancel()
        pollJob = scope.launch {
            while (isActive && isRunning) {
                notifyCount(Socks5Bridge.activeConnections())
                delay(POLL_MS)
            }
        }
    }

    @Suppress("DEPRECATION")
    private fun stopForegroundCompat() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N)
            stopForeground(STOP_FOREGROUND_REMOVE)
        else
            stopForeground(true)
    }

    override fun onDestroy() {
        stopServer()
        scope.cancel()
        super.onDestroy()
    }

    private fun ensureChannel() {
        if (notifChannelReady || Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return
        val mgr = getSystemService(NotificationManager::class.java)
        val ch  = NotificationChannel(CHANNEL, "SOCKS5 proxy", NotificationManager.IMPORTANCE_LOW)
        ch.setShowBadge(false)
        mgr.createNotificationChannel(ch)
        notifChannelReady = true
    }

    private fun buildNotification(p: Int): Notification {
        ensureChannel()
        val tap = PendingIntent.getActivity(
            this, 0,
            Intent(this, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP),
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
        )
        val builder = Notification.Builder(this, CHANNEL)
            .setContentTitle("SOCKS5 proxy")
            .setContentText("Listening on :$p")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setOngoing(true)
            .setContentIntent(tap)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            builder.setForegroundServiceBehavior(Notification.FOREGROUND_SERVICE_IMMEDIATE)
        }
        return builder.build()
    }
}
