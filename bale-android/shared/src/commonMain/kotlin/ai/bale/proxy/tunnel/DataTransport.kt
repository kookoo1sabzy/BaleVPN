package ai.bale.proxy.tunnel

interface DataTransport {
    val isConnected: Boolean
    val hasPeer: Boolean        // true once at least one remote participant is in the room
    suspend fun connect(url: String, token: String)
    fun send(data: ByteArray)
    fun disconnect()
    var onData: ((ByteArray) -> Unit)?
    var onDisconnected: (() -> Unit)?
}
