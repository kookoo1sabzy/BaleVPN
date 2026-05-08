package ai.bale.proxy.bale

data class StartPhoneAuthResponse(
    val transactionHash: String,
    val isRegistered:    Boolean,
)

data class AuthResponse(
    val jwt:  String?,
    val user: ByteArray? = null,
)

data class UserEntity(
    val id:         Int,
    val name:       String,
    val nick:       String  = "",
    val phone:      String  = "",
    /** Required by AddContact / RemoveContact and used as a cache invalidation
     *  token: when GetContacts returns a different accessHash for a uid we
     *  already have cached, the cached row is treated as stale and re-fetched. */
    val accessHash: Long    = 0L,
    /** false = placeholder for a contact whose full entity hasn't been LoadUsers-
     *  fetched yet (lazy-load on scroll). The UI shows "Loading…" for these rows
     *  and ignores taps. */
    val loaded:     Boolean = true,
) {
    val displayName get() = name.ifBlank { nick }.ifBlank { id.toString() }
    val peerType    get() = 1  // PEERTYPE_PRIVATE
}

/** Lightweight peer reference (uid + accessHash) returned by GetContacts and
 *  the search RPCs. Used as the input to LoadUsers when full entities aren't
 *  bundled in the response (the common case for GetContacts). */
data class UserPeerRef(val uid: Int, val accessHash: Long)
