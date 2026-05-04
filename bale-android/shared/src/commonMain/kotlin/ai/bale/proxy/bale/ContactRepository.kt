package ai.bale.proxy.bale

import ai.bale.proxy.proto.ProtoReader
import ai.bale.proxy.proto.ProtoWriter
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.request.*

private const val GRPC_HOST = "next-ws.bale.ai"

class ContactRepository(
    private val http:        HttpClient,
    private val accessToken: String,
) {
    // Load full contact list via GetContacts → LoadUsers
    suspend fun getContacts(): List<UserEntity> {
        val contactsBuf = grpcCall("bale.users.v1.Users", "GetContacts",
            ProtoWriter().string(1, "").build())
        val contacts = decodeGetContactsResponse(contactsBuf)

        // If peers returned, do a second call to load full user entities and
        // backfill accessHash from the peer ref (LoadUsers responses don't
        // carry it, but we need it to call RemoveContact later).
        if (contacts.userPeers.isNotEmpty()) {
            val loadBuf = grpcCall("bale.users.v1.Users", "LoadUsers",
                buildLoadUsersRequest(contacts.userPeers))
            return mergeAccessHash(decodeUsersResponse(loadBuf), contacts.userPeers)
        }
        // GetContacts may return inline user entities directly
        return contacts.inlineUsers
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
    private data class UserPeerRef(val uid: Int, val accessHash: Long)

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
        var id = 0; var name = ""; var nick = ""; var phone = ""; var accessHash = 0L
        while (r.hasMore()) {
            val (f, w) = r.tag()
            when (f) {
                1  -> id         = r.varint().toInt()
                2  -> accessHash = r.varint()  // int64 — required by Add/RemoveContact
                3  -> name       = r.string()
                5  -> phone      = r.string()
                9  -> nick       = decodeWrapped(r.bytes())
                else -> r.skip(w)
            }
        }
        return UserEntity(id, name, nick, phone, accessHash)
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
