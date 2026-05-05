package ai.bale.proxy.bale

import ai.bale.proxy.proto.ProtoReader
import ai.bale.proxy.proto.ProtoWriter
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlin.random.Random

private const val GRPC_HOST    = "next-ws.bale.ai"
private const val AUTH_APP_ID  = 4
private const val AUTH_API_KEY = "C28D46DC4C3A7A26564BFCC48B929086A95C93C98E789A19847BEE8627DE4E7D"
private const val SENDCODE_SMS = 3

class BaleAuthClient(private val http: HttpClient) {

    // ── Public API ─────────────────────────────────────────────────────────────

    suspend fun startPhoneAuth(phone: String): StartPhoneAuthResponse {
        val digits      = phone.replace(Regex("[^\\d]"), "")
        val deviceHash  = Random.nextBytes(16)
        val payload     = ProtoWriter()
            .int64 (1, digits.toLong())
            .int32 (2, AUTH_APP_ID)
            .string(3, AUTH_API_KEY)
            .bytes (4, deviceHash)
            .string(5, "Bale Android")
            .string(7, "fa")
            .int32 (9, SENDCODE_SMS)
            .build()
        val buf = grpcCall("bale.auth.v1.Auth", "StartPhoneAuth", payload)
        return decodeStartPhoneAuthResponse(buf)
    }

    suspend fun validateCode(transactionHash: String, code: String): AuthResponse {
        val isJwtBytes = ProtoWriter().bool(1, true).build()
        val payload    = ProtoWriter()
            .string(1, transactionHash)
            .string(2, code)
            .bytes (3, isJwtBytes)
            .build()
        val buf = grpcCall("bale.auth.v1.Auth", "ValidateCode", payload)
        return decodeAuthResponse(buf)
    }

    suspend fun signUp(transactionHash: String, name: String): AuthResponse {
        val payload = ProtoWriter()
            .string(1, transactionHash)
            .string(2, name)
            .build()
        val buf = grpcCall("bale.auth.v1.Auth", "SignUp", payload)
        return decodeAuthResponse(buf)
    }

    // Exchanges the JWT from ValidateCode/SignUp for the access_token cookie value.
    suspend fun fetchAccessToken(jwt: String): String? {
        val resp = http.get("https://$GRPC_HOST/set-cookie/") {
            header("Authorization", "Bearer $jwt")
        }
        return resp.headers.getAll(HttpHeaders.SetCookie)
            ?.firstNotNullOfOrNull { Regex("access_token=([^;]+)").find(it)?.groupValues?.get(1) }
    }

    // ── gRPC-web transport ─────────────────────────────────────────────────────

    private suspend fun grpcCall(
        service: String, method: String,
        payload: ByteArray, token: String? = null,
    ): ByteArray {
        val body = grpcEncode(payload)
        val resp = http.post("https://$GRPC_HOST/$service/$method") {
            header("Content-Type", "application/grpc-web+proto")
            header("X-Grpc-Web",   "1")
            header("Origin",       "https://web.bale.ai")
            if (token != null) header("Cookie", "access_token=$token")
            setBody(body)
        }
        return grpcDecode(resp.body())
    }

    private fun grpcEncode(payload: ByteArray): ByteArray {
        val out = ByteArray(5 + payload.size)
        val len = payload.size
        out[1] = (len shr 24).toByte(); out[2] = (len shr 16).toByte()
        out[3] = (len shr  8).toByte(); out[4] = len.toByte()
        payload.copyInto(out, 5)
        return out
    }

    private fun grpcDecode(buf: ByteArray): ByteArray {
        var pos  = 0
        var data: ByteArray? = null
        while (pos + 5 <= buf.size) {
            val flag = buf[pos].toInt() and 0xFF
            val len  = ((buf[pos+1].toInt() and 0xFF) shl 24) or
                       ((buf[pos+2].toInt() and 0xFF) shl 16) or
                       ((buf[pos+3].toInt() and 0xFF) shl  8) or
                       (buf[pos+4].toInt() and 0xFF)
            pos += 5
            val frame = buf.sliceArray(pos until pos + len); pos += len
            if (flag and 0x80 == 0) {
                data = frame
            } else {
                val trailer = frame.decodeToString()
                val status  = Regex("grpc-status:\\s*(\\d+)").find(trailer)?.groupValues?.get(1)?.toIntOrNull() ?: 0
                if (status != 0) {
                    val msg = Regex("grpc-message:\\s*([^\r\n]+)").find(trailer)?.groupValues?.get(1)?.trim()
                    throw Exception(msg ?: "gRPC error $status")
                }
            }
        }
        return data ?: ByteArray(0)
    }

    // ── Response decoders ──────────────────────────────────────────────────────

    private fun decodeStartPhoneAuthResponse(buf: ByteArray): StartPhoneAuthResponse {
        val r = ProtoReader(buf); var hash = ""; var registered = false
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) { 1 -> hash = r.string(); 2 -> registered = r.varint() != 0L; else -> r.skip(w) }
        }
        return StartPhoneAuthResponse(hash, registered)
    }

    private fun decodeAuthResponse(buf: ByteArray): AuthResponse {
        val r = ProtoReader(buf); var user: ByteArray? = null; var jwt: String? = null
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) { 2 -> user = r.bytes(); 4 -> jwt = decodeWrapped(r.bytes()); else -> r.skip(w) }
        }
        return AuthResponse(jwt, user)
    }

    private fun decodeWrapped(buf: ByteArray): String {
        val r = ProtoReader(buf); var s = ""
        while (r.hasMore()) { val (f, w) = r.tag(); if (f == 1) s = r.string() else r.skip(w) }
        return s
    }
}
