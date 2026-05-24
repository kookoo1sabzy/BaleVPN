package ai.bale.proxy.bale

import android.content.Context
import android.content.SharedPreferences

/**
 * `TokenStore` backed by an Android `SharedPreferences` slot.
 * Used by the app to persist Bale's `access_token` across
 * process restarts.
 *
 * Single key, ASCII payload — Bale's access_token is a base64-
 * shaped string that fits the SharedPreferences String storage
 * with no encoding work. We round-trip through `String(bytes,
 * Charsets.UTF_8)` so the Rust side gets a raw `[u8]` matching
 * what `BaleAuth::submit_otp` produces.
 *
 * Thread-safe — SharedPreferences itself is documented as safe
 * for concurrent reads and writes (each commit/apply atomic at
 * the file level).
 */
class SharedPrefsTokenStore(
    context:        Context,
    private val key:    String = DEFAULT_KEY,
    private val prefs:  SharedPreferences =
        context.applicationContext.getSharedPreferences(DEFAULT_FILE, Context.MODE_PRIVATE),
) : BaleSignalingNative.JavaTokenStore {

    override fun load(): ByteArray? =
        prefs.getString(key, null)?.toByteArray(Charsets.UTF_8)

    override fun save(bytes: ByteArray) {
        // Plain SharedPreferences.Editor — the `edit { … }` KTX
        // extension lives in `androidx.core` which the shared
        // (KMP) module deliberately doesn't depend on.
        prefs.edit().putString(key, bytes.toString(Charsets.UTF_8)).apply()
    }

    override fun clear() {
        prefs.edit().remove(key).apply()
    }

    companion object {
        /** Shared with the legacy code that wrote directly to
         *  the `"config"` file under the `"token"` key. Keeping
         *  the same path means existing users don't need to
         *  re-auth after the migration. */
        const val DEFAULT_FILE = "config"
        const val DEFAULT_KEY  = "token"
    }
}
