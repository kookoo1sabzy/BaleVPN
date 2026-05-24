package ai.bale.proxy.tunnel

/** Snapshot of the underlying WebRTC transport. Read from the selected ICE
 *  candidate-pair and the SCTP data-channel stats; `-1` for any field the SDK
 *  hasn't reported yet (e.g. before a successful nominated pair exists). */
data class LiveKitStats(
    val rttMs:         Long,    // -1 if unknown
    val bytesSent:     Long,    // -1 if unknown
    val bytesReceived: Long,    // -1 if unknown
    val packetsSent:   Long,    // -1 if unknown
    val packetsReceived: Long,  // -1 if unknown
    val availableOutgoingBitrate: Long,  // bits/sec, -1 if unknown
)

interface DataTransport {
    val isConnected: Boolean
    val hasPeer: Boolean        // true once at least one remote participant is in the room
    /** Connect to a LiveKit room. Suspends until the room handshake
     *  completes and a remote peer joins (or fails). After this call
     *  the caller should pick a mode on the returned tunnel via
     *  `transport.tunnel?.startServer()` / `startClient()`. */
    suspend fun connect(url: String, token: String)
    fun disconnect()
    var onDisconnected: (() -> Unit)?
    /** Most recent transport stats, or null until the first successful poll. */
    val lastStats: LiveKitStats? get() = null
}
