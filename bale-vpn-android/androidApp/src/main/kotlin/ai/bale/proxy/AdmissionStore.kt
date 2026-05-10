package ai.bale.proxy

import android.content.SharedPreferences
import android.util.Log

/** Persisted allow-list of callers, each with their per-caller bandwidth caps.
 *
 *  One entry per admitted callerId; the value is `(upBps, downBps)`. A pair of
 *  zeros means "no per-caller override — fall back to the server default cap"
 *  (matches TokenBucket semantics where `rate = 0` disables the bucket).
 *
 *  Wire format inside the SharedPreferences `"config"` key `admissionList`:
 *      "<id>[:<upBps>:<downBps>][,<id>[:<upBps>:<downBps>]]…"
 *  Bare IDs (`"12345"`) remain readable so legacy stored data — back when this
 *  was a flat allow-list with no limits — still works. Entries without custom
 *  limits are written back as bare IDs to keep the prefs file compact.
 *
 *  Stored values are always clamped to `[0, BaleServerService.MAX_LIMIT_BPS]`
 *  on load — protects us from a hand-edited prefs file injecting an absurd
 *  override (e.g. someone bumping their own client to 1 Gbps via `adb shell
 *  run-as … sed`). */
object AdmissionStore {
    private const val TAG = "BaleProxy"
    private const val KEY = "admissionList"
    private lateinit var prefs: SharedPreferences

    fun init(prefs: SharedPreferences) { this.prefs = prefs }

    fun isAllowed(callerId: Long): Boolean = callerId > 0L && load().containsKey(callerId)

    fun getAll(): Set<Long> = load().keys

    fun getLimit(callerId: Long): Pair<Long, Long>? = load()[callerId]

    fun getAllLimits(): Map<Long, Pair<Long, Long>> = load()

    fun add(callerId: Long) {
        if (callerId <= 0L) return
        val map = load()
        if (map.putIfAbsent(callerId, 0L to 0L) == null) save(map)
    }

    fun remove(callerId: Long) {
        val map = load()
        if (map.remove(callerId) != null) save(map)
    }

    /** Updates the per-caller limit. Returns false if the caller isn't admitted —
     *  limits only persist for admitted callers (use [add] first). Values are
     *  clamped to `[0, BaleServerService.MAX_LIMIT_BPS]`. */
    fun setLimit(callerId: Long, upBps: Long, downBps: Long): Boolean {
        if (callerId <= 0L) return false
        val map = load()
        if (!map.containsKey(callerId)) return false
        map[callerId] = clamp(upBps) to clamp(downBps)
        save(map)
        return true
    }

    private fun clamp(v: Long): Long = v.coerceIn(0L, BaleServerService.MAX_LIMIT_BPS)

    private fun load(): MutableMap<Long, Pair<Long, Long>> {
        if (!::prefs.isInitialized) return mutableMapOf()
        val raw = prefs.getString(KEY, "") ?: return mutableMapOf()
        if (raw.isEmpty()) return mutableMapOf()
        val out = mutableMapOf<Long, Pair<Long, Long>>()
        for (entry in raw.split(",")) {
            val parts = entry.split(":")
            val id    = parts.getOrNull(0)?.trim()?.toLongOrNull() ?: continue
            if (id <= 0L) continue
            val upRaw   = parts.getOrNull(1)?.trim()?.toLongOrNull() ?: 0L
            val downRaw = parts.getOrNull(2)?.trim()?.toLongOrNull() ?: 0L
            val up   = clamp(upRaw)
            val down = clamp(downRaw)
            if (up != upRaw || down != downRaw) {
                Log.w(TAG, "AdmissionStore: clamped caller $id limits (up=${upRaw}→${up}, down=${downRaw}→${down})")
            }
            out[id] = up to down
        }
        return out
    }

    private fun save(map: Map<Long, Pair<Long, Long>>) {
        val joined = map.entries.joinToString(",") { (id, lim) ->
            if (lim.first == 0L && lim.second == 0L) "$id" else "$id:${lim.first}:${lim.second}"
        }
        prefs.edit().putString(KEY, joined).apply()
    }
}
