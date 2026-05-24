package ai.bale.proxy

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
import androidx.core.content.edit
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

class ContactsActivity : BaseActivity() {

    companion object {
        /** Intent extra: `"pick"` (default — tap selects a peer
         *  for client mode and finishes) or `"manage"` (tap opens
         *  a remove-contact dialog; nothing is written to peer
         *  prefs). */
        const val EXTRA_MODE   = "mode"
        const val MODE_PICK    = "pick"
        const val MODE_MANAGE  = "manage"
        /** Page size requested from the signaling layer. Large
         *  enough to amortise RPC overhead; small enough to feel
         *  responsive on first paint. */
        private const val PAGE_SIZE      = 50
        /** Distance (in rows) before the bottom at which we kick
         *  off the next page fetch. */
        private const val PREFETCH_AHEAD = 10
    }

    private lateinit var recycler:    RecyclerView
    private lateinit var searchView:  androidx.appcompat.widget.SearchView
    private lateinit var fabAdd:      FloatingActionButton
    private lateinit var loadingBox:  View
    private lateinit var loadingMore: View
    private lateinit var adapter:     ContactAdapter

    private val prefs by lazy { getSharedPreferences("config", MODE_PRIVATE) }
    private val scope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    /** Last known peer list (display order). */
    private var rows: MutableList<ContactRow> = mutableListOf()
    private var nextCursor: String? = null
    private var searchMode: Boolean = false
    private var manageMode: Boolean = false
    /** Guards the next-page fetch against overlapping scroll fires. */
    private var loadingPage: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contacts)

        manageMode = intent.getStringExtra(EXTRA_MODE) == MODE_MANAGE
        if (manageMode) supportActionBar?.title = "Contacts"

        recycler    = findViewById(R.id.recycler)
        searchView  = findViewById(R.id.searchView)
        fabAdd      = findViewById(R.id.fabAdd)
        loadingBox  = findViewById(R.id.loadingBox)
        loadingMore = findViewById(R.id.loadingMore)

        adapter = ContactAdapter(
            showRemove = manageMode,
            onSelect   = { row -> if (manageMode) confirmRemove(row) else selectPeer(row) },
            onRemove   = { row -> confirmRemove(row) },
        )
        recycler.layoutManager = LinearLayoutManager(this)
        recycler.adapter       = adapter
        recycler.addOnScrollListener(object : RecyclerView.OnScrollListener() {
            override fun onScrolled(rv: RecyclerView, dx: Int, dy: Int) {
                if (dy <= 0 || loadingPage || nextCursor == null || searchMode) return
                val lm = rv.layoutManager as LinearLayoutManager
                val last = lm.findLastVisibleItemPosition()
                if (last >= rows.size - PREFETCH_AHEAD) loadNextPage()
            }
        })

        // FAB behaviour:
        //  - pick mode (client picker): tap → open search bar
        //    to look up any user by phone and select as VPN peer.
        //  - manage mode: tap → explicit "Add by phone" dialog;
        //    main list is the contact list with Remove buttons.
        fabAdd.setOnClickListener { if (manageMode) showAddDialog() else enterSearchMode() }

        searchView.setOnQueryTextListener(object : androidx.appcompat.widget.SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(q: String?) = q?.trim()?.let { search(it) }.let { true }
            override fun onQueryTextChange(q: String?) = false
        })
        searchView.setOnCloseListener { exitSearchMode(); true }

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (searchMode) exitSearchMode() else finish()
            }
        })

        loadFirstPage()
    }

    // ── Listing ───────────────────────────────────────────────────────────────

    private fun loadFirstPage() {
        loadingBox.visibility = View.VISIBLE
        nextCursor = null
        rows.clear()
        adapter.submit(rows)
        scope.launch {
            try {
                val sig = BaleConnection.signaling
                if (sig == null) {
                    Toast.makeText(this@ContactsActivity, "Signaling not initialised", Toast.LENGTH_SHORT).show()
                    return@launch
                }
                val page = sig.listContacts(query = null, cursor = null, limit = PAGE_SIZE)
                rows.addAll(page.peerIds.map { ContactRow(peerId = it, displayName = sig.peerDisplayName(it)) })
                nextCursor = page.nextCursor
                adapter.submit(rows)
                kickDisplayNameFetches()
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Load failed: ${e.message}", Toast.LENGTH_SHORT).show()
            } finally {
                loadingBox.visibility = View.GONE
            }
        }
    }

    private fun loadNextPage() {
        if (loadingPage || nextCursor == null) return
        loadingPage = true
        loadingMore.visibility = View.VISIBLE
        scope.launch {
            try {
                val sig = BaleConnection.signaling ?: return@launch
                val page = sig.listContacts(query = null, cursor = nextCursor, limit = PAGE_SIZE)
                val newRows = page.peerIds.map { ContactRow(peerId = it, displayName = sig.peerDisplayName(it)) }
                rows.addAll(newRows)
                nextCursor = page.nextCursor
                adapter.submit(rows)
                kickDisplayNameFetches()
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Load more failed: ${e.message}", Toast.LENGTH_SHORT).show()
            } finally {
                loadingPage = false
                loadingMore.visibility = View.GONE
            }
        }
    }

    /** Resolve display names asynchronously for every row that
     *  doesn't have one yet. One coroutine per row — the
     *  signaling layer caches results so subsequent calls hit
     *  the in-memory cache. */
    private fun kickDisplayNameFetches() {
        val sig = BaleConnection.signaling ?: return
        for ((idx, row) in rows.withIndex()) {
            if (row.displayName != null) continue
            val peerId = row.peerId
            scope.launch {
                val name = try { sig.fetchDisplayName(peerId) } catch (_: Exception) { null }
                if (name != null) {
                    rows[idx] = rows[idx].copy(displayName = name)
                    adapter.notifyItemChanged(idx)
                }
            }
        }
    }

    // ── Search ────────────────────────────────────────────────────────────────

    private fun enterSearchMode() {
        searchMode = true
        searchView.visibility = View.VISIBLE
        searchView.queryHint  = "+98912…"
        searchView.requestFocus()
        fabAdd.hide()
        adapter.submit(emptyList())
    }

    private fun exitSearchMode() {
        searchMode = false
        searchView.visibility = View.GONE
        searchView.setQuery("", false)
        fabAdd.show()
        adapter.submit(rows)
    }

    /** Pick-mode search box. Phone-shaped queries hit
     *  searchContactByPhone (which also imports — see the Bale
     *  trait docs); anything else is silently ignored to match
     *  the pre-migration behaviour. */
    private fun search(query: String) {
        if (!query.matches(Regex("[+\\d][\\d\\s\\-]{4,}"))) {
            Toast.makeText(this, "Enter a phone number (e.g. +98912…)", Toast.LENGTH_SHORT).show()
            return
        }
        scope.launch {
            try {
                val sig = BaleConnection.signaling ?: return@launch
                val ids = sig.searchContactByPhone(query)
                val results = ids.map { ContactRow(peerId = it, displayName = sig.peerDisplayName(it)) }
                adapter.submit(results)
                // Kick name fetches for the visible search hits.
                for ((idx, row) in results.withIndex()) {
                    val pid = row.peerId
                    scope.launch {
                        val name = try { sig.fetchDisplayName(pid) } catch (_: Exception) { null }
                        if (name != null) adapter.updateName(idx, name)
                    }
                }
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Search failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Peer selection ────────────────────────────────────────────────────────

    private fun selectPeer(row: ContactRow) {
        prefs.edit(commit = true) {
            putString("peerId",   row.peerId)
            putString("peerType", "1")
            putString("peerName", row.displayName ?: row.peerId)
        }
        finish()
    }

    // ── Manage mode: add by phone ─────────────────────────────────────────────

    private fun showAddDialog() {
        val dp  = resources.displayMetrics.density
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
                val sig = BaleConnection.signaling ?: return@launch
                // Bale's `searchContactByPhone` already adds the
                // contact as a side effect (its ImportContacts
                // RPC conflates lookup and add). `addToContacts`
                // is a no-op on Bale; we call it anyway so the
                // intent is explicit at the call site for
                // future impls without the conflated semantics.
                val ids = sig.searchContactByPhone(phone)
                ids.firstOrNull()?.let { sig.addToContacts(it) }
                val msg = if (ids.isEmpty()) "No user found for $phone" else "Added"
                Toast.makeText(this@ContactsActivity, msg, Toast.LENGTH_SHORT).show()
                loadFirstPage()
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Add failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Manage mode: remove ───────────────────────────────────────────────────

    private fun confirmRemove(row: ContactRow) {
        val label = row.displayName ?: row.peerId
        AlertDialog.Builder(this)
            .setTitle("Remove contact")
            .setMessage("Remove $label from your contacts?")
            .setPositiveButton("Remove") { _, _ -> doRemove(row) }
            .setNegativeButton("Cancel", null)
            .show()
    }

    private fun doRemove(row: ContactRow) {
        scope.launch {
            try {
                val sig = BaleConnection.signaling ?: return@launch
                if (sig.removeContact(row.peerId)) {
                    Toast.makeText(this@ContactsActivity, "Removed", Toast.LENGTH_SHORT).show()
                    loadFirstPage()
                } else {
                    Toast.makeText(this@ContactsActivity, "Remove failed", Toast.LENGTH_SHORT).show()
                }
            } catch (e: Exception) {
                Toast.makeText(this@ContactsActivity, "Remove failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ── Options menu (Logout) ─────────────────────────────────────────────────

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu_contacts, menu)
        super.onCreateOptionsMenu(menu)
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

    override fun onDestroy() { super.onDestroy(); scope.cancel() }
}

/** One row in the contacts UI. `displayName` is `null` until the
 *  signaling layer resolves it — the row shows the peerId until
 *  then. */
data class ContactRow(
    val peerId:      String,
    val displayName: String?,
)

// ── Adapter ───────────────────────────────────────────────────────────────────

class ContactAdapter(
    private val showRemove: Boolean = false,
    private val onSelect:   (ContactRow) -> Unit,
    private val onRemove:   (ContactRow) -> Unit = {},
) : RecyclerView.Adapter<ContactAdapter.VH>() {

    private var items = listOf<ContactRow>()

    fun submit(list: List<ContactRow>) { items = list; notifyDataSetChanged() }
    fun updateName(index: Int, name: String) {
        if (index !in items.indices) return
        val cur = items[index]
        if (cur.displayName == name) return
        items = items.toMutableList().also { it[index] = cur.copy(displayName = name) }
        notifyItemChanged(index)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) =
        VH(LayoutInflater.from(parent.context).inflate(R.layout.item_contact, parent, false))

    override fun onBindViewHolder(holder: VH, position: Int) = holder.bind(items[position])
    override fun getItemCount() = items.size

    inner class VH(v: View) : RecyclerView.ViewHolder(v) {
        private val tvName    = v.findViewById<TextView>(R.id.tvName)
        private val tvNick    = v.findViewById<TextView>(R.id.tvNick)
        private val tvPhone   = v.findViewById<TextView>(R.id.tvPhone)
        private val tvId      = v.findViewById<TextView>(R.id.tvId)
        private val btnRemove = v.findViewById<com.google.android.material.button.MaterialButton>(R.id.btnRemove)
        fun bind(row: ContactRow) {
            // Phone + nick are no longer in the trait surface;
            // the row just shows display name + peer ID. The
            // pre-migration UI had richer info via Bale's
            // LoadFullUsers RPC, but that route is gone now.
            tvName.text       = row.displayName ?: row.peerId
            tvNick.visibility = View.GONE
            tvPhone.visibility = View.GONE
            tvId.text         = "ID: ${row.peerId}"
            itemView.alpha    = if (row.displayName == null) 0.7f else 1f
            itemView.setOnClickListener { onSelect(row) }
            btnRemove.visibility = if (showRemove) View.VISIBLE else View.GONE
            btnRemove.setOnClickListener { onRemove(row) }
        }
    }
}
