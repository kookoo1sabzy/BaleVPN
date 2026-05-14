package ai.bale.proxy

import android.content.ActivityNotFoundException
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.graphics.Typeface
import android.net.Uri
import android.os.Build
import android.view.Gravity
import android.view.Menu
import android.view.MenuItem
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat

/**
 * Common parent for every Activity in the app. Provides the action-bar overflow
 * menu (About / TCP debug / View app logs) so it's available everywhere — login
 * flow, contacts, server clients management, etc. Subclasses can still inflate
 * their own menu XML or call menu.add(...) on top of this; just call super
 * before/after their additions.
 */
abstract class BaseActivity : AppCompatActivity() {

    protected companion object {
        const val MENU_ABOUT     = 1001
        const val MENU_TCP_DEBUG = 1002
        const val MENU_APP_LOGS  = 1003
        const val ABOUT_EMAIL    = "kookoo.sabzy@proton.me"
        const val ABOUT_REPO     = "https://github.com/kookoo1sabzy/BaleVPN"
        // GitHub auto-redirects this to the most recent non-prerelease's HTML
        // page; the user picks the APK from there. We don't link the asset
        // directly because release filenames are versioned and there's no
        // stable "latest APK" URL without renaming the gradle output.
        const val ABOUT_LATEST   = "https://github.com/kookoo1sabzy/BaleVPN/releases/latest"
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menu.add(0, MENU_ABOUT,     0, "About")
            .setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER)
        menu.add(0, MENU_TCP_DEBUG, 0, tcpDebugTitle())
            .setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER)
        menu.add(0, MENU_APP_LOGS,  0, "View app logs")
            .setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER)
        return true
    }

    override fun onPrepareOptionsMenu(menu: Menu): Boolean {
        // Refresh the TCP-debug item's title every time the menu is opened so it
        // reflects the current toggle state without us having to invalidate it
        // from random places that flip the flag.
        menu.findItem(MENU_TCP_DEBUG)?.title = tcpDebugTitle()
        return super.onPrepareOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean = when (item.itemId) {
        MENU_ABOUT -> { showAboutDialog(); true }
        MENU_TCP_DEBUG -> {
            BaleServerService.debug = !BaleServerService.debug
            invalidateOptionsMenu()
            Toast.makeText(this,
                "TCP debug ${if (BaleServerService.debug) "ON" else "OFF"}",
                Toast.LENGTH_SHORT).show()
            true
        }
        MENU_APP_LOGS -> { showAppLogsDialog(); true }
        else -> super.onOptionsItemSelected(item)
    }

    private fun tcpDebugTitle(): String =
        "TCP debug " + if (BaleServerService.debug) "ON" else "OFF"

    // ── About ────────────────────────────────────────────────────────────────

    private fun showAboutDialog() {
        val dp  = resources.displayMetrics.density
        val pad = (24 * dp).toInt()

        val layout = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(pad, pad, pad, (8 * dp).toInt())
            gravity = Gravity.CENTER_HORIZONTAL
        }

        layout.addView(TextView(this).apply {
            text     = "“Voices that can’t be silenced.”"
            textSize = 16f
            typeface = Typeface.create(Typeface.SERIF, Typeface.ITALIC)
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, 0, 0, (24 * dp).toInt())
        })
        layout.addView(TextView(this).apply {
            text     = "For bug reports and ideas, contact:"
            textSize = 14f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, 0, 0, (4 * dp).toInt())
        })
        layout.addView(TextView(this).apply {
            text       = ABOUT_EMAIL
            textSize   = 15f
            typeface   = Typeface.MONOSPACE
            gravity    = Gravity.CENTER_HORIZONTAL
            paintFlags = paintFlags or android.graphics.Paint.UNDERLINE_TEXT_FLAG
            setTextColor(ContextCompat.getColor(context, android.R.color.holo_blue_dark))
            setOnClickListener { sendEmail(ABOUT_EMAIL) }
        })
        layout.addView(TextView(this).apply {
            text     = "Source code:"
            textSize = 14f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, (16 * dp).toInt(), 0, (4 * dp).toInt())
        })
        layout.addView(TextView(this).apply {
            text       = ABOUT_REPO
            textSize   = 13f
            typeface   = Typeface.MONOSPACE
            gravity    = Gravity.CENTER_HORIZONTAL
            paintFlags = paintFlags or android.graphics.Paint.UNDERLINE_TEXT_FLAG
            setTextColor(ContextCompat.getColor(context, android.R.color.holo_blue_dark))
            setOnClickListener { openUrl(ABOUT_REPO) }
        })
        layout.addView(TextView(this).apply {
            text     = "Download the latest APK from:"
            textSize = 14f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, (16 * dp).toInt(), 0, (4 * dp).toInt())
        })
        layout.addView(TextView(this).apply {
            text       = ABOUT_LATEST
            textSize   = 13f
            typeface   = Typeface.MONOSPACE
            gravity    = Gravity.CENTER_HORIZONTAL
            paintFlags = paintFlags or android.graphics.Paint.UNDERLINE_TEXT_FLAG
            setTextColor(ContextCompat.getColor(context, android.R.color.holo_blue_dark))
            setOnClickListener { openUrl(ABOUT_LATEST) }
        })
        layout.addView(TextView(this).apply {
            text     = "Version ${appVersion()}"
            textSize = 12f
            alpha    = 0.6f
            gravity  = Gravity.CENTER_HORIZONTAL
            setPadding(0, (20 * dp).toInt(), 0, 0)
        })

        AlertDialog.Builder(this)
            .setTitle("About ${getString(R.string.app_name)}")
            .setView(layout)
            .setPositiveButton("Close", null)
            .show()
    }

    // ── App logs ─────────────────────────────────────────────────────────────

    private fun showAppLogsDialog() {
        val logs = readLogs()
        val dp   = resources.displayMetrics.density
        val pad  = (12 * dp).toInt()

        val tv = TextView(this).apply {
            text     = logs
            typeface = Typeface.MONOSPACE
            textSize = 11f
            setTextIsSelectable(true)
            setPadding(pad, pad, pad, pad)
        }
        val scroll = ScrollView(this).apply {
            addView(tv)
            // Auto-scroll to bottom (most recent entries) once laid out.
            post { fullScroll(ScrollView.FOCUS_DOWN) }
        }

        AlertDialog.Builder(this)
            .setTitle("App logs")
            .setView(scroll)
            .setPositiveButton("Copy") { _, _ ->
                val cm = getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                cm.setPrimaryClip(ClipData.newPlainText("BaleProxy logs", logs))
                Toast.makeText(this, "Copied to clipboard", Toast.LENGTH_SHORT).show()
            }
            .setNegativeButton("Close", null)
            .show()
    }

    /** Read the last ~500 lines of logcat for this process, filtered to only
     *  the tags we use. Without the tag filter, the dialog is dominated by
     *  framework UI noise (TextView, InsetsController, ActivityThread,
     *  WindowOnBackDispatcher, ImeTracker, etc.) that's irrelevant to the
     *  app's behaviour. The trailing `*:S` silences every other tag. */
    private fun readLogs(): String =
        try {
            Runtime.getRuntime()
                .exec(arrayOf(
                    "logcat", "-d", "-t", "500",
                    "BaleProxy:V", "BaleVPN:V", "BaleSocks5:V", "ContactsActivity:V", "UserCache:V",
                    "nat:V", "tcp-session:V", "udp-session:V",
                    "*:S"
                ))
                .inputStream.bufferedReader().use { it.readText() }
        } catch (e: Exception) {
            "Failed to read logs: ${e.message}"
        }

    // ── Helpers (used by the About dialog and shareable with subclasses) ─────

    protected fun appVersion(): String =
        try {
            val info = packageManager.getPackageInfo(packageName, 0)
            val code = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P)
                info.longVersionCode
            else
                @Suppress("DEPRECATION") info.versionCode.toLong()
            "${info.versionName} ($code)"
        } catch (_: Exception) { "unknown" }

    protected fun sendEmail(address: String) {
        val intent = Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:$address")).apply {
            putExtra(Intent.EXTRA_SUBJECT, "${getString(R.string.app_name)} feedback")
        }
        try { startActivity(intent) }
        catch (_: ActivityNotFoundException) {
            Toast.makeText(this, "No email app installed; address: $address", Toast.LENGTH_LONG).show()
        }
    }

    protected fun openUrl(url: String) {
        try { startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url))) }
        catch (_: ActivityNotFoundException) {
            Toast.makeText(this, "No browser installed; URL: $url", Toast.LENGTH_LONG).show()
        }
    }
}
