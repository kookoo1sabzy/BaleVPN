package ai.bale.proxy.bale

import ai.bale.proxy.proto.ProtoReader
import ai.bale.proxy.proto.ProtoWriter
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope

private const val GRPC_HOST = "next-ws.bale.ai"

class ContactRepository(
    private val http:        HttpClient,
    private val accessToken: String,
) {
    /** GetContacts result split into refs (need LoadUsers) and entities
     *  (already complete). The two are mutually exclusive in practice — Bale
     *  picks one shape per response — but we surface both so callers can
     *  handle either case without re-running the response shape check. */
    data class ContactPeers(val peers: List<UserPeerRef>, val inlineUsers: List<UserEntity>)

    /** Cheap one-RPC call. Returns the contact-list refs. Use loadUsersBatch
     *  to fetch full entities in pages. */
    suspend fun getContactPeers(): ContactPeers {
        val contactsBuf = grpcCall("bale.users.v1.Users", "GetContacts",
            ProtoWriter().string(1, "").build())
        val contacts = decodeGetContactsResponse(contactsBuf)
        return ContactPeers(contacts.userPeers, contacts.inlineUsers)
    }

    /** Fetch full UserEntity objects for a batch of peer refs. Bale's
     *  protocol splits user data across two RPCs:
     *    - LoadUsers     → identity (id, name, nick, accessHash, …)
     *    - LoadFullUsers → "fullUser" (contactInfo with phone, about, …)
     *  We fan out both calls in parallel and merge phone into each entity.
     *  Keep batches modest (≈30) to keep round-trips responsive. */
    suspend fun loadUsersBatch(peers: List<UserPeerRef>): List<UserEntity> = coroutineScope {
        if (peers.isEmpty()) return@coroutineScope emptyList<UserEntity>()
        val usersJob = async {
            val loadBuf = grpcCall("bale.users.v1.Users", "LoadUsers", buildLoadUsersRequest(peers))
            mergeAccessHash(decodeUsersResponse(loadBuf), peers)
        }
        val phonesJob = async { loadPhones(peers) }
        val users  = usersJob.await()
        val phones = phonesJob.await()
        users.map { u -> phones[u.id]?.let { u.copy(phone = it) } ?: u }
    }

    /** LoadFullUsers — returns a map of uid → phone. Phone lives in
     *  FullUser.contactInfo[*].longValue/stringValue when type == PHONE.
     *  Failures are swallowed (returns empty map); the main LoadUsers data
     *  is the more critical half of the merge. */
    private suspend fun loadPhones(peers: List<UserPeerRef>): Map<Int, String> {
        if (peers.isEmpty()) return emptyMap()
        return try {
            val loadBuf = grpcCall("bale.users.v1.Users", "LoadFullUsers",
                buildLoadUsersRequest(peers))
            decodeFullUsersResponseForPhones(loadBuf)
        } catch (_: Exception) { emptyMap() }
    }

    /** Eager load — kept for callers that want everything in one shot. */
    suspend fun getContacts(): List<UserEntity> {
        val (peers, inlineUsers) = getContactPeers()
        return if (peers.isNotEmpty()) loadUsersBatch(peers) else inlineUsers
    }

    // Remove a contact (Users/RemoveContact). Server needs both uid + accessHash;
    // accessHash comes from the UserPeer that was originally fetched via getContacts /
    // searchByPhone / searchByName.
    suspend fun removeContact(user: UserEntity) {
        grpcCall("bale.users.v1.Users", "RemoveContact",
            ProtoWriter().int32(1, user.id).int64(2, user.accessHash).build())
    }

    private fun mergeAccessHash(users: List<UserEntity>, peers: List<UserPeerRef>): List<UserEntity> {
        if (peers.isEmpty()) return users
        val byId = peers.associate { it.uid to it.accessHash }
        return users.map { u -> byId[u.id]?.let { u.copy(accessHash = it) } ?: u }
    }

    // Search within contacts by display name
    suspend fun searchByName(query: String): List<UserEntity> {
        val buf = grpcCall("bale.users.v1.Users", "SearchContacts",
            ProtoWriter().string(1, query).build())
        return resolveWithLoad(decodeRawSearch(buf, userField = 1, peerField = 2))
    }

    // Global lookup by phone number — also imports the contact
    suspend fun searchByPhone(phone: String): List<UserEntity> {
        val digits     = phone.replace(Regex("[^\\d]"), "")
        val phoneEntry = ProtoWriter().int64(1, digits.toLong()).build()
        val payload    = ProtoWriter().bytes(1, phoneEntry).build()
        val buf        = grpcCall("bale.users.v1.Users", "ImportContacts", payload)
        return resolveWithLoad(decodeRawSearch(buf, userField = 1, peerField = 4))
    }

    // If the response only had peer refs, load full user entities via LoadUsers.
    // Backfill accessHash from the peer refs since LoadUsers responses don't include it.
    private suspend fun resolveWithLoad(raw: Pair<List<UserEntity>, List<UserPeerRef>>): List<UserEntity> {
        val (users, peers) = raw
        if (users.isNotEmpty()) return users
        if (peers.isEmpty()) return emptyList()
        val loadBuf = grpcCall("bale.users.v1.Users", "LoadUsers", buildLoadUsersRequest(peers))
        return mergeAccessHash(decodeUsersResponse(loadBuf), peers)
    }

    // ── gRPC-web ───────────────────────────────────────────────────────────────

    private suspend fun grpcCall(service: String, method: String, payload: ByteArray): ByteArray {
        val body = grpcEncode(payload)
        val resp = http.post("https://$GRPC_HOST/$service/$method") {
            header("Content-Type", "application/grpc-web+proto")
            header("X-Grpc-Web",   "1")
            header("Origin",       "https://web.bale.ai")
            header("Cookie",       "access_token=$accessToken")
            setBody(body)
        }
        // Surface HTTP-level errors with a clear message instead of letting a
        // non-gRPC body fall through to grpcDecode (where it'll throw a cryptic
        // "toIndex(N) is greater than size (M)" from sliceArray).
        if (!resp.status.isSuccess()) {
            val snippet = resp.bodyAsText().take(200)
            throw Exception("HTTP ${resp.status.value} from $service/$method: $snippet")
        }
        return grpcDecode(resp.body())
    }

    private fun grpcEncode(p: ByteArray): ByteArray {
        val out = ByteArray(5 + p.size)
        out[1] = (p.size shr 24).toByte(); out[2] = (p.size shr 16).toByte()
        out[3] = (p.size shr  8).toByte(); out[4] = p.size.toByte()
        p.copyInto(out, 5); return out
    }

    private fun grpcDecode(buf: ByteArray): ByteArray {
        var pos = 0; var data: ByteArray? = null
        while (pos + 5 <= buf.size) {
            val flag = buf[pos].toInt() and 0xFF
            val len  = ((buf[pos+1].toInt() and 0xFF) shl 24) or ((buf[pos+2].toInt() and 0xFF) shl 16) or
                       ((buf[pos+3].toInt() and 0xFF) shl 8)  or  (buf[pos+4].toInt() and 0xFF)
            pos += 5
            // Validate before slicing — a corrupt or non-gRPC body slipping in
            // here would otherwise blow up with the standard sliceArray
            // "toIndex(...) is greater than size (...)" message, which is
            // useless for diagnosing what actually went wrong.
            if (len < 0 || pos + len > buf.size) {
                throw Exception("malformed gRPC-web frame: flag=0x${flag.toString(16)} " +
                                "len=$len but only ${buf.size - pos} bytes remain (total=${buf.size})")
            }
            val frame = buf.sliceArray(pos until pos + len); pos += len
            if (flag and 0x80 == 0) data = frame
            else {
                val status = Regex("grpc-status:\\s*(\\d+)").find(frame.decodeToString())
                    ?.groupValues?.get(1)?.toIntOrNull() ?: 0
                if (status != 0) throw Exception("gRPC error $status")
            }
        }
        return data ?: ByteArray(0)
    }

    // ── Request builders ───────────────────────────────────────────────────────

    private fun buildLoadUsersRequest(peers: List<UserPeerRef>): ByteArray {
        val w = ProtoWriter()
        for (p in peers) {
            val peer = ProtoWriter().int32(1, p.uid).int64(2, p.accessHash).build()
            w.bytes(1, peer)
        }
        return w.build()
    }

    // ── Response decoders ──────────────────────────────────────────────────────

    private data class GetContactsResult(val userPeers: List<UserPeerRef>, val inlineUsers: List<UserEntity>)

    private fun decodeGetContactsResponse(buf: ByteArray): GetContactsResult {
        val r = ProtoReader(buf)
        val peers = mutableListOf<UserPeerRef>(); val users = mutableListOf<UserEntity>()
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> users.add(decodeUserEntity(r.bytes()))
                3 -> peers.add(decodeUserPeerRef(r.bytes()))
                else -> r.skip(w)
            }
        }
        return GetContactsResult(peers, users)
    }

    private fun decodeUsersResponse(buf: ByteArray): List<UserEntity> {
        val r = ProtoReader(buf); val users = mutableListOf<UserEntity>()
        while (r.hasMore()) {
            val (f, w) = r.tag()
            if (f == 1) users.add(decodeUserEntity(r.bytes())) else r.skip(w)
        }
        return users
    }

    private fun decodeRawSearch(buf: ByteArray, userField: Int, peerField: Int): Pair<List<UserEntity>, List<UserPeerRef>> {
        val r = ProtoReader(buf)
        val users = mutableListOf<UserEntity>(); val peers = mutableListOf<UserPeerRef>()
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                userField -> users.add(decodeUserEntity(r.bytes()))
                peerField -> peers.add(decodeUserPeerRef(r.bytes()))
                else      -> r.skip(w)
            }
        }
        return Pair(users, peers)
    }

    private fun decodeUserEntity(buf: ByteArray): UserEntity {
        val r = ProtoReader(buf)
        var id = 0; var name = ""; var nick = ""; var accessHash = 0L
        // User entity (verified against Bale's web bundle):
        //   1  id (int32)
        //   2  accessHash (int64) — required by Add/RemoveContact
        //   3  name (string)
        //   9  nick (wrapped string)
        // Phone is NOT carried here — it lives on FullUser (separate
        // LoadFullUsers RPC). See loadPhones() / decodeFullUsersResponseForPhones.
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1  -> id         = r.varint().toInt()
                2  -> accessHash = r.varint()
                3  -> name       = r.string()
                9  -> nick       = decodeWrapped(r.bytes())
                else -> r.skip(w)
            }
        }
        return UserEntity(id, name, nick, "", accessHash)
    }

    // LoadFullUsersResponse: { fullUsers: repeated FullUser } at field 1.
    // FullUser: { id @ field 1, contactInfo @ field 2 (repeated ContactInfo) }.
    // ContactInfo entry: { type @ f1 (int32 enum, default 0=PHONE),
    //                      stringValue @ f2 (wrapped string),
    //                      longValue @ f3 (Int64Value sub-message) }.
    // Returns uid → phone for every FullUser whose contactInfo includes a
    // PHONE-typed entry. Prefers stringValue (Bale pre-formats it like
    // "+989121234567") over longValue (raw int64).
    private fun decodeFullUsersResponseForPhones(buf: ByteArray): Map<Int, String> {
        val r = ProtoReader(buf)
        val out = mutableMapOf<Int, String>()
        while (r.hasMore()) {
            val (f, w) = r.tag()
            if (f != 1) { r.skip(w); continue }
            val (uid, phone) = decodeFullUserPhone(r.bytes())
            if (uid > 0 && phone.isNotEmpty()) out[uid] = phone
        }
        return out
    }

    private fun decodeFullUserPhone(buf: ByteArray): Pair<Int, String> {
        val r = ProtoReader(buf)
        var uid = 0
        var phone = ""
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> uid = r.varint().toInt()
                2 -> {
                    if (phone.isEmpty()) phone = extractPhoneFromContactInfo(r.bytes())
                    else r.bytes()
                }
                else -> r.skip(w)
            }
        }
        return uid to phone
    }

    private fun extractPhoneFromContactInfo(buf: ByteArray): String {
        val r = ProtoReader(buf)
        var type = 0
        var stringValue = ""
        var longValue   = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1 -> type        = r.varint().toInt()
                2 -> stringValue = decodeWrapped(r.bytes())
                3 -> {
                    val sub = r.bytes()
                    val sr  = ProtoReader(sub)
                    while (sr.hasMore()) {
                        val (sf, sw) = sr.tag()
                        if (sf == 1) longValue = sr.varint() else sr.skip(sw)
                    }
                }
                else -> r.skip(w)
            }
        }
        if (type != 0) return ""  // CONTACTTYPE_PHONE = 0; skip email/web/social
        return stringValue.ifEmpty { if (longValue != 0L) longValue.toString() else "" }
    }

    private fun decodeUserPeerRef(buf: ByteArray): UserPeerRef {
        val r = ProtoReader(buf); var uid = 0; var hash = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) { 1 -> uid = r.varint().toInt(); 2 -> hash = r.varint(); else -> r.skip(w) }
        }
        return UserPeerRef(uid, hash)
    }

    private fun decodeWrapped(buf: ByteArray): String {
        val r = ProtoReader(buf); var s = ""
        while (r.hasMore()) { val (f, w) = r.tag(); if (f == 1) s = r.string() else r.skip(w) }
        return s
    }
}
