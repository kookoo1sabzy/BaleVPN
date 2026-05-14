package ai.bale.proxy

import ai.bale.proxy.bale.BaleAuthClient
import ai.bale.proxy.net.AppHttp
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.edit
import com.google.android.material.button.MaterialButton
import com.google.android.material.textfield.TextInputEditText
import kotlinx.coroutines.*

class PhoneAuthActivity : BaseActivity() {

    private lateinit var etPhone:          TextInputEditText
    private lateinit var btnSend:          MaterialButton
    private lateinit var progress:         View
    private lateinit var btnAdvanced:      TextView
    private lateinit var advancedSection:  LinearLayout
    private lateinit var etToken:          TextInputEditText
    private lateinit var btnUseToken:      MaterialButton

    private val prefs  by lazy { getSharedPreferences("config", MODE_PRIVATE) }
    private val scope  = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private val client = BaleAuthClient(AppHttp.client)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_phone_auth)

        etPhone         = findViewById(R.id.etPhone)
        btnSend         = findViewById(R.id.btnSend)
        progress        = findViewById(R.id.progress)
        btnAdvanced     = findViewById(R.id.btnAdvanced)
        advancedSection = findViewById(R.id.advancedSection)
        etToken         = findViewById(R.id.etToken)
        btnUseToken     = findViewById(R.id.btnUseToken)

        btnSend.setOnClickListener {
            val phone = etPhone.text.toString().trim()
            if (phone.length < 7) { Toast.makeText(this, "Enter a valid phone number", Toast.LENGTH_SHORT).show(); return@setOnClickListener }
            sendOtp(phone)
        }

        btnAdvanced.setOnClickListener {
            val visible = advancedSection.visibility == View.VISIBLE
            advancedSection.visibility = if (visible) View.GONE else View.VISIBLE
            btnAdvanced.text = if (visible) "Advanced ▼" else "Advanced ▲"
        }

        btnUseToken.setOnClickListener {
            val token = etToken.text.toString().trim()
            if (token.isEmpty()) { Toast.makeText(this, "Enter a token", Toast.LENGTH_SHORT).show(); return@setOnClickListener }
            prefs.edit(commit = true) { putString("token", token) }
            // Same reasoning as OtpActivity: kick off the WS now since the
            // process-lifecycle observer's ON_START already fired pre-login.
            BaleConnection.connect(token)
            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }
    }

    private fun sendOtp(phone: String) {
        btnSend.isEnabled = false; progress.visibility = View.VISIBLE
        scope.launch {
            try {
                val resp = client.startPhoneAuth(phone)
                val intent = Intent(this@PhoneAuthActivity, OtpActivity::class.java).apply {
                    putExtra(OtpActivity.EXTRA_PHONE, phone)
                    putExtra(OtpActivity.EXTRA_TX_HASH, resp.transactionHash)
                    putExtra(OtpActivity.EXTRA_IS_REGISTERED, resp.isRegistered)
                }
                startActivity(intent)
            } catch (e: Exception) {
                Toast.makeText(this@PhoneAuthActivity, e.message ?: "Error", Toast.LENGTH_LONG).show()
            } finally {
                btnSend.isEnabled = true; progress.visibility = View.GONE
            }
        }
    }

    override fun onDestroy() { super.onDestroy(); scope.cancel() }
}
