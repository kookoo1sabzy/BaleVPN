package ai.bale.proxy

import ai.bale.proxy.bale.BaleAuthClient
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.edit
import androidx.core.view.isVisible
import com.google.android.material.button.MaterialButton
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout
import io.ktor.client.*
import io.ktor.client.engine.okhttp.*
import io.ktor.client.plugins.websocket.*
import kotlinx.coroutines.*

class OtpActivity : AppCompatActivity() {

    companion object {
        const val EXTRA_PHONE         = "phone"
        const val EXTRA_TX_HASH       = "txHash"
        const val EXTRA_IS_REGISTERED = "isRegistered"
    }

    private lateinit var etCode:     TextInputEditText
    private lateinit var nameLayout: TextInputLayout
    private lateinit var etName:     TextInputEditText
    private lateinit var btnVerify:  MaterialButton
    private lateinit var progress:   View

    private val scope  = CoroutineScope(Dispatchers.Main + SupervisorJob())
    private val http   = HttpClient(OkHttp) { install(WebSockets) }
    private val client = BaleAuthClient(http)
    private val prefs  by lazy { getSharedPreferences("config", MODE_PRIVATE) }

    private lateinit var txHash:       String
    private var          isRegistered  = true

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_otp)

        txHash       = intent.getStringExtra(EXTRA_TX_HASH)       ?: ""
        isRegistered = intent.getBooleanExtra(EXTRA_IS_REGISTERED, true)

        etCode     = findViewById(R.id.etCode)
        nameLayout = findViewById(R.id.nameLayout)
        etName     = findViewById(R.id.etName)
        btnVerify  = findViewById(R.id.btnVerify)
        progress   = findViewById(R.id.progress)

        // Show name field for new users
        nameLayout.isVisible = !isRegistered

        btnVerify.setOnClickListener {
            val code = etCode.text.toString().trim()
            if (code.length < 4) { Toast.makeText(this, "Enter the code", Toast.LENGTH_SHORT).show(); return@setOnClickListener }
            verify(code)
        }
    }

    private fun verify(code: String) {
        btnVerify.isEnabled = false; progress.visibility = View.VISIBLE
        scope.launch {
            try {
                val authResp = if (isRegistered) {
                    client.validateCode(txHash, code)
                } else {
                    val name = etName.text.toString().trim()
                    if (name.isEmpty()) {
                        Toast.makeText(this@OtpActivity, "Enter your name", Toast.LENGTH_SHORT).show()
                        btnVerify.isEnabled = true; progress.visibility = View.GONE
                        return@launch
                    }
                    // ValidateCode first, then SignUp if needed
                    val v = client.validateCode(txHash, code)
                    if (v.jwt != null) v else client.signUp(txHash, name)
                }

                val token = authResp.jwt
                    ?: throw Exception("No token in response")

                prefs.edit(commit = true) { putString("token", token) }
                // Bring the WS up here, not via the lifecycle observer — the observer's
                // ON_START already fired when the auth flow began (with no token saved
                // yet), and won't fire again unless the app is fully backgrounded.
                BaleConnection.connect(token)
                startActivity(Intent(this@OtpActivity, MainActivity::class.java))
                finishAffinity()
            } catch (e: Exception) {
                Toast.makeText(this@OtpActivity, e.message ?: "Error", Toast.LENGTH_LONG).show()
                btnVerify.isEnabled = true; progress.visibility = View.GONE
            }
        }
    }

    override fun onDestroy() { super.onDestroy(); scope.cancel(); http.close() }
}
