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
    /** Required by AddContact / RemoveContact; populated for results that came
     *  in via a UserPeer ref (GetContacts, SearchContacts, ImportContacts) and
     *  zero for entities loaded standalone (LoadUsers without the peer merge). */
    val accessHash: Long    = 0L,
) {
    val displayName get() = name.ifBlank { nick }.ifBlank { id.toString() }
    val peerType    get() = 1  // PEERTYPE_PRIVATE
}
