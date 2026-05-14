package ai.bale.proxy

import android.content.SharedPreferences

/** Persisted allow-list of callers admitted to use the server.
 *
 *  Wire format inside the SharedPreferences `"config"` key `admissionList`:
 *      "<id>[,<id>]…"
 *
 *  Older builds stored an optional `:upBps:downBps` suffix per entry for the
 *  per-caller bandwidth caps feature; the limit columns are now dropped on
 *  load so the prefs file silently migrates the first time the new build
 *  reads it. */
object AdmissionStore {
    private const val KEY = "admissionList"
    private lateinit var prefs: SharedPreferences

    fun init(prefs: SharedPreferences) { this.prefs = prefs }

    fun isAllowed(callerId: Long): Boolean = callerId > 0L && load().contains(callerId)

    fun getAll(): Set<Long> = load()

    fun add(callerId: Long) {
        if (callerId <= 0L) return
        val ids = load()
        if (ids.add(callerId)) save(ids)
        // Mutual exclusion with BlacklistStore: a caller can't be both allowed
        // and blocked at the same time. Adding here un-blocks.
        BlacklistStore.remove(callerId)
    }

    fun remove(callerId: Long) {
        val ids = load()
        if (ids.remove(callerId)) save(ids)
    }

    private fun load(): MutableSet<Long> {
        if (!::prefs.isInitialized) return mutableSetOf()
        val raw = prefs.getString(KEY, "") ?: return mutableSetOf()
        if (raw.isEmpty()) return mutableSetOf()
        val out = mutableSetOf<Long>()
        for (entry in raw.split(",")) {
            // Tolerate the legacy "id:up:down" form by reading only the
            // first colon-segment; subsequent fields (limits) are discarded.
            val id = entry.substringBefore(':').trim().toLongOrNull() ?: continue
            if (id > 0L) out.add(id)
        }
        return out
    }

    private fun save(ids: Set<Long>) {
        prefs.edit().putString(KEY, ids.joinToString(",")).apply()
    }
}
