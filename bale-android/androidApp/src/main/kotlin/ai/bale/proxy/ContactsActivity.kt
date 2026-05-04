package ai.bale.proxy

import ai.bale.proxy.bale.ContactRepository
import ai.bale.proxy.bale.UserEntity
import android.content.Intent
import android.os.Bundle
import android.text.InputType
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.SearchView
import androidx.core.content.edit
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import io.ktor.client.*
import io.ktor.client.engine.okhttp.*
import io.ktor.client.plugins.websocket.*
import kotlinx.coroutines.*

class ContactsActivity : AppCompatActivity() {

    companion object {
        /** Intent extra: "pick" (default — tap selects a peer for client mode and
         *  finishes) or "manage" (tap opens a remove-contact dialog; nothing is
         *  written to peer prefs). */
        const val EXTRA_MODE   = "mode"
        const val MODE_PICK    = "pick"
        const val MODE_MANAGE  = "manage"
    }

    private lateinit var recycler:    RecyclerView
    private lateinit var searchView:  SearchView
    private lateinit var fabAdd:      FloatingActionButton
    private lateinit var adapter:     ContactAdapter

    private val prefs  by lazy { getSharedPreferences("config", MODE_PRIVATE) }
    private val scope  = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private val http   = HttpClient(OkHttp) { install(WebSockets) }
    private lateinit var repo: ContactRepository

    private var allContacts  = listOf<UserEntity>()
    private var searchMode   = false
    private var manageMode   = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contacts)

        val token = prefs.getString("token", "") ?: ""
        repo      = ContactRepository(http, token)
        manageMode = intent.getStringExtra(EXTRA_MODE) == MODE_MANAGE
        if (manageMode) supportActionBar?.title = "Contacts"

        recycler   = findViewById(R.id.recycler)
        searchView = findViewById(R.id.searchView)
        fabAdd     = findViewById(R.id.fabAdd)

        adapter = ContactAdapter(
            showRemove = manageMode,
            onSelect   = { user -> if (manageMode) confirmRemove(user) else selectPeer(user) },
            onRemove   = { user -> confirmRemove(user) },
        )
        recycler.layoutManager = LinearLayoutManager(this)
        recycler.adapter       = adapter

        // FAB behavior diverges per mode:
        //  - client mode: opens the search bar to find any user (by phone) and tap
        //    to select as VPN peer. Phone search auto-imports.
        //  - manage mode: opens an explicit "Add by phone" dialog; the main list
        //    shows all contacts with a Remove button, no search bar.
        fabAdd.setOnClickListener { if (manageMode) showAddDialog() else enterSearchMode() }

        searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(q: String?) = q?.trim()?.let { search(it) }.let { true }
            override fun onQueryTextChange(q: String?) = false
        })
        searchView.setOnCloseListener { exitSearchMode(); true }

        // Back press exits search mode instead of closing the screen
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (searchMode) exitSearchMode() else finish()
            }
        })

        loadContacts()
    }

    // ── Contacts mode ─────────────────────────────────────────────────────────

    private fun loadContacts() {
        scope.launch {
            try {
                allContacts = repo.getContacts()
                adapter.submit(allContacts)
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Load failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Search / add mode ─────────────────────────────────────────────────────

    private fun enterSearchMode() {
        searchMode = true
        searchView.visibility = View.VISIBLE
        searchView.queryHint = "+98912…"
        searchView.requestFocus()
        fabAdd.hide()
        adapter.submit(emptyList())
    }

    private fun exitSearchMode() {
        searchMode = false
        searchView.visibility = View.GONE
        searchView.setQuery("", false)
        fabAdd.show()
        adapter.submit(allContacts)
    }

    // Only reached in client mode (manage mode hides the searchView and uses the
    // explicit add-by-phone dialog instead). Phone-number search only — name search
    // is intentionally not offered here; type something that looks like a phone or
    // nothing happens.
    private fun search(query: String) {
        if (!query.matches(Regex("[+\\d][\\d\\s\\-]{4,}"))) {
            Toast.makeText(this, "Enter a phone number (e.g. +98912…)", Toast.LENGTH_SHORT).show()
            return
        }
        scope.launch {
            try {
                adapter.submit(repo.searchByPhone(query))
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Search failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Peer selection ────────────────────────────────────────────────────────

    private fun selectPeer(user: UserEntity) {
        prefs.edit(commit = true) {
            putString("peerId",   user.id.toString())
            putString("peerType", user.peerType.toString())
            putString("peerName", user.displayName)
        }
        finish()
    }

    // ── Manage mode: add a contact by phone ───────────────────────────────────

    private fun showAddDialog() {
        val dp = resources.displayMetrics.density
        val pad = (24 * dp).toInt()
        val et  = EditText(this).apply {
            inputType = InputType.TYPE_CLASS_PHONE
            hint      = "Phone number"
        }
        val container = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(pad, (12 * dp).toInt(), pad, 0)
            addView(et)
        }
        AlertDialog.Builder(this)
            .setTitle("Add Contact")
            .setView(container)
            .setPositiveButton("Add") { _, _ ->
                val phone = et.text.toString().trim()
                if (phone.isNotEmpty()) doAddByPhone(phone)
            }
            .setNegativeButton("Cancel", null)
            .show()
    }

    private fun doAddByPhone(phone: String) {
        scope.launch {
            try {
                // ImportContacts has dual purpose: it both finds the user and adds them.
                // We discard the returned list — the main loadContacts() call below will
                // re-fetch and show the new contact in place.
                val added = repo.searchByPhone(phone)
                val msg = if (added.isEmpty()) "No user found for $phone"
                          else "Added ${added.first().displayName}"
                Toast.makeText(this@ContactsActivity, msg, Toast.LENGTH_SHORT).show()
                loadContacts()
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Add failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Manage mode: remove a contact ─────────────────────────────────────────

    private fun confirmRemove(user: UserEntity) {
        AlertDialog.Builder(this)
            .setTitle("Remove contact")
            .setMessage("Remove ${user.displayName} from your contacts?")
            .setPositiveButton("Remove") { _, _ -> doRemove(user) }
            .setNegativeButton("Cancel", null)
            .show()
    }

    private fun doRemove(user: UserEntity) {
        scope.launch {
            try {
                repo.removeContact(user)
                Toast.makeText(this@ContactsActivity, "Removed ${user.displayName}", Toast.LENGTH_SHORT).show()
                // Reload from server so the list reflects the removal.
                loadContacts()
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Remove failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Options menu (Logout) ─────────────────────────────────────────────────

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_contacts, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == R.id.action_logout) { logout(); return true }
        return super.onOptionsItemSelected(item)
    }

    private fun logout() {
        prefs.edit().clear().apply()
        startActivity(Intent(this, PhoneAuthActivity::class.java))
        finishAffinity()
    }

    override fun onDestroy() { super.onDestroy(); scope.cancel(); http.close() }
}

// ── Adapter ───────────────────────────────────────────────────────────────────

class ContactAdapter(
    private val showRemove: Boolean = false,
    private val onSelect:   (UserEntity) -> Unit,
    private val onRemove:   (UserEntity) -> Unit = {},
) : RecyclerView.Adapter<ContactAdapter.VH>() {

    private var items = listOf<UserEntity>()

    fun submit(list: List<UserEntity>) { items = list; notifyDataSetChanged() }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        VH(LayoutInflater.from(parent.context).inflate(R.layout.item_contact, parent, false))

    override fun onBindViewHolder(holder: VH, position: Int) = holder.bind(items[position])
    override fun getItemCount() = items.size

    inner class VH(v: View) : RecyclerView.ViewHolder(v) {
        private val tvName    = v.findViewById<TextView>(R.id.tvName)
        private val tvNick    = v.findViewById<TextView>(R.id.tvNick)
        private val tvPhone   = v.findViewById<TextView>(R.id.tvPhone)
        private val btnRemove = v.findViewById<com.google.android.material.button.MaterialButton>(R.id.btnRemove)
        fun bind(u: UserEntity) {
            // Primary: real name; if absent fall back to @nick so the row is never blank
            tvName.text = if (u.name.isNotBlank()) u.name
                          else if (u.nick.isNotBlank()) "@${u.nick}"
                          else u.id.toString()
            // Secondary: @nick — only when there is also a name, to avoid showing it twice
            val showNick = u.nick.isNotBlank() && u.name.isNotBlank()
            tvNick.text       = "@${u.nick}"
            tvNick.visibility = if (showNick) View.VISIBLE else View.GONE
            tvPhone.text = if (u.phone.isNotEmpty()) u.phone else "ID: ${u.id}"
            itemView.setOnClickListener { onSelect(u) }
            // Per-row Remove button visible only in manage mode. Tapping it goes
            // straight to the confirm dialog without first selecting the row.
            btnRemove.visibility = if (showRemove) View.VISIBLE else View.GONE
            btnRemove.setOnClickListener { onRemove(u) }
        }
    }
}
