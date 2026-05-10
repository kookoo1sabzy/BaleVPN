package ai.bale.proxy

import android.content.SharedPreferences

/** Persisted block-list of caller user IDs.
 *
 *  A blocked caller's incoming calls are auto-rejected (`discardCall`) by
 *  [BaleServerService.checkAndHandleCall] without ever entering the pending
 *  flow — no notification, no admission prompt. Mirrors the Node-side
 *  `BlacklistStore` in `bale-vpn-node/src/blacklist.js`.
 *
 *  Mutually exclusive with [AdmissionStore]: blocking a caller removes them
 *  from the allow-list, and adding to the allow-list removes them from the
 *  block-list. Same prefs file (`"config"`), separate key (`"blacklist"`).
 *
 *  Wire format inside the SharedPreferences `"config"` key `blacklist`:
 *      "<id>[,<id>]…"
 *  (Bare IDs only — there's no per-caller state to carry, unlike AdmissionStore.) */
object BlacklistStore {
    private const val KEY = "blacklist"
    private lateinit var prefs: SharedPreferences

    fun init(prefs: SharedPreferences) { this.prefs = prefs }

    fun isBlocked(callerId: Long): Boolean = callerId > 0L && load().contains(callerId)

    fun getAll(): Set<Long> = load()

    /** Adds `callerId` to the block-list. Also removes it from the allow-list
     *  (mutual exclusion). Returns true when the entry was newly added. */
    fun add(callerId: Long): Boolean {
        if (callerId <= 0L) return false
        val ids = load().toMutableSet()
        val newlyAdded = ids.add(callerId)
        if (newlyAdded) save(ids)
        AdmissionStore.remove(callerId)
        return newlyAdded
    }

    /** Removes `callerId` from the block-list. Does not auto-add to the
     *  allow-list — that's a separate explicit action. */
    fun remove(callerId: Long): Boolean {
        val ids = load().toMutableSet()
        if (!ids.remove(callerId)) return false
        save(ids)
        return true
    }

    private fun load(): Set<Long> {
        if (!::prefs.isInitialized) return emptySet()
        val raw = prefs.getString(KEY, "") ?: return emptySet()
        if (raw.isEmpty()) return emptySet()
        return raw.split(",").mapNotNull { it.trim().toLongOrNull() }.filter { it > 0L }.toSet()
    }

    private fun save(ids: Set<Long>) {
        prefs.edit().putString(KEY, ids.joinToString(",")).apply()
    }
}
