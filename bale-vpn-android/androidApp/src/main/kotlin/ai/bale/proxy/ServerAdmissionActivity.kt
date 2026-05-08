package ai.bale.proxy

import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton
import com.google.android.material.textfield.TextInputEditText
import kotlinx.coroutines.*

class ServerAdmissionActivity : BaseActivity() {

    private lateinit var etAddId:       TextInputEditText
    private lateinit var btnAdd:        MaterialButton
    private lateinit var llAllowedList: LinearLayout
    private lateinit var tvEmpty:       TextView

    private val uiScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        AdmissionStore.init(getSharedPreferences("config", MODE_PRIVATE))
        setContentView(R.layout.activity_server_admission)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.title = "Allowed Clients"

        etAddId       = findViewById(R.id.etAddId)
        btnAdd        = findViewById(R.id.btnAdd)
        llAllowedList = findViewById(R.id.llAllowedList)
        tvEmpty       = findViewById(R.id.tvEmpty)

        btnAdd.setOnClickListener {
            val id = etAddId.text?.toString()?.trim()?.toLongOrNull()
            if (id == null || id <= 0) {
                Toast.makeText(this, "Enter a valid numeric Bale user ID", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            AdmissionStore.add(id)
            etAddId.text?.clear()
            rebuildList()
        }

        rebuildList()
    }

    override fun onSupportNavigateUp(): Boolean { finish(); return true }
    override fun onDestroy() { uiScope.cancel(); super.onDestroy() }

    private fun rebuildList() {
        llAllowedList.removeAllViews()
        val ids = AdmissionStore.getAll().sorted()

        tvEmpty.visibility = if (ids.isEmpty()) View.VISIBLE else View.GONE

        val dp = resources.displayMetrics.density
        for (id in ids) {
            val row = LinearLayout(this).apply {
                orientation  = LinearLayout.HORIZONTAL
                layoutParams = LinearLayout.LayoutParams(
                    LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.WRAP_CONTENT)
                setPadding(0, (8 * dp).toInt(), 0, (8 * dp).toInt())
            }
            val tv = TextView(this).apply {
                layoutParams = LinearLayout.LayoutParams(0,
                    LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
                typeface  = android.graphics.Typeface.MONOSPACE
                text      = id.toString()
                textSize  = 14f
            }
            val btn = MaterialButton(this, null,
                com.google.android.material.R.attr.materialButtonOutlinedStyle).apply {
                text     = "Remove"
                textSize = 11f
                val hPad = (10 * dp).toInt(); val vPad = (2 * dp).toInt()
                setPadding(hPad, vPad, hPad, vPad)
                insetTop = 0; insetBottom = 0
                setOnClickListener { AdmissionStore.remove(id); rebuildList() }
            }
            row.addView(tv); row.addView(btn)
            llAllowedList.addView(row)

            // Fetch the display name asynchronously and update the label
            uiScope.launch {
                val name = withContext(Dispatchers.IO) {
                    BaleConnection.client?.loadUserName(id.toInt())
                }
                if (name != null) tv.text = "$name\n$id"
            }
        }
    }
}
