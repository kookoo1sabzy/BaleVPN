package ai.bale.proxy

import android.content.SharedPreferences

object AdmissionStore {
    private const val KEY = "admissionList"
    private lateinit var prefs: SharedPreferences

    fun init(prefs: SharedPreferences) { this.prefs = prefs }

    fun isAllowed(callerId: Long) = callerId > 0L && getAll().contains(callerId)

    fun getAll(): Set<Long> {
        if (!::prefs.isInitialized) return emptySet()
        val raw = prefs.getString(KEY, "") ?: return emptySet()
        return raw.split(",").mapNotNull { it.trim().toLongOrNull() }.filter { it > 0 }.toSet()
    }

    fun add(id: Long) { save(getAll().toMutableSet().also { it.add(id) }) }

    fun remove(id: Long) { save(getAll().toMutableSet().also { it.remove(id) }) }

    private fun save(ids: Set<Long>) {
        prefs.edit().putString(KEY, ids.joinToString(",")).apply()
    }
}
