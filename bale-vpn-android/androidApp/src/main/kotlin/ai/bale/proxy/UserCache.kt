package ai.bale.proxy

import ai.bale.proxy.bale.UserEntity
import android.content.Context
import android.util.Log
import kotlinx.coroutines.*
import org.json.JSONArray
import org.json.JSONObject
import java.io.File

/**
 * Persistent uid → UserEntity cache. Backs the contact-list lazy loader so
 * users seen on previous launches render instantly without hitting LoadUsers.
 *
 * Storage: a single JSON file in `context.cacheDir/user_cache.json`. Reads
 * happen lazily on first access; writes are debounced (300 ms after the last
 * mutation) so a batch of putAll calls collapses into one fsync.
 *
 * accessHash doubles as a cache-invalidation token. When a fresh GetContacts
 * response carries a different accessHash for a uid we have cached, callers
 * (ContactsActivity) discard the cached entry and re-fetch via LoadUsers.
 */
object UserCache {
    private const val TAG     = "UserCache"
    private const val FLUSH_DELAY_MS = 300L

    private var file: File?              = null
    private val map  = HashMap<Int, UserEntity>()
    private var loaded = false
    private val scope  = CoroutineScope(Dispatchers.IO + SupervisorJob())
    private var flushJob: Job? = null

    fun init(context: Context) {
        if (file != null) return
        file = File(context.cacheDir, "user_cache.json")
        loadFromDisk()
    }

    @Synchronized
    operator fun get(uid: Int): UserEntity? = map[uid]

    @Synchronized
    fun put(user: UserEntity) {
        if (user.id <= 0) return
        map[user.id] = user.copy(loaded = true)
        scheduleFlush()
    }

    @Synchronized
    fun putAll(users: Collection<UserEntity>) {
        var changed = false
        for (u in users) {
            if (u.id <= 0) continue
            map[u.id] = u.copy(loaded = true)
            changed = true
        }
        if (changed) scheduleFlush()
    }

    private fun scheduleFlush() {
        flushJob?.cancel()
        flushJob = scope.launch {
            delay(FLUSH_DELAY_MS)
            flushToDisk()
        }
    }

    @Synchronized
    private fun loadFromDisk() {
        if (loaded) return
        loaded = true
        val f = file ?: return
        if (!f.exists()) return
        try {
            val arr = JSONArray(f.readText())
            for (i in 0 until arr.length()) {
                val o = arr.getJSONObject(i)
                val uid = o.optInt("id", 0)
                if (uid <= 0) continue
                map[uid] = UserEntity(
                    id         = uid,
                    name       = o.optString("name", ""),
                    nick       = o.optString("nick", ""),
                    phone      = o.optString("phone", ""),
                    accessHash = o.optLong("accessHash", 0L),
                )
            }
            Log.d(TAG, "loaded ${map.size} entries from $f")
        } catch (e: Exception) {
            Log.w(TAG, "load failed (${e.message}) — starting empty")
            map.clear()
        }
    }

    private fun flushToDisk() {
        val f = file ?: return
        val snapshot = synchronized(this) { map.values.toList() }
        try {
            val arr = JSONArray()
            for (u in snapshot) {
                arr.put(JSONObject().apply {
                    put("id",         u.id)
                    put("name",       u.name)
                    put("nick",       u.nick)
                    put("phone",      u.phone)
                    put("accessHash", u.accessHash)
                })
            }
            // Atomic-ish write: temp file → rename. Avoids leaving a half-written
            // JSON if the process is killed mid-write.
            val tmp = File(f.parentFile, f.name + ".tmp")
            tmp.writeText(arr.toString())
            if (!tmp.renameTo(f)) { tmp.copyTo(f, overwrite = true); tmp.delete() }
        } catch (e: Exception) {
            Log.w(TAG, "flush failed: ${e.message}")
        }
    }
}
