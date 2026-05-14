package ai.bale.proxy.tunnel

/** Aggregated per-session TCP/UDP flow stats surfaced from the native
 *  NAT layer. Populated from [NativeJni.sessionFlowStats] (a 20-long
 *  fixed-layout array) and rendered by ClientStatsActivity. */
data class PacketStats(
    val tcpFlows:        Int,
    val udpFlows:        Int,
    val srttMinMs:       Long,
    val srttMedianMs:    Long,
    val srttMaxMs:       Long,
    val rttvarMedianMs:  Long,
    val rtoMedianMs:     Long,
    val flightTotalBytes:Long,
    val rtoRetxTotal:    Long,
    /** Counts per TCP state, indexed by the C++ TcpState enum order:
     *    0=CLOSED, 1=LISTEN, 2=SYN_SENT, 3=SYN_RCVD, 4=ESTABLISHED,
     *    5=FIN_WAIT_1, 6=FIN_WAIT_2, 7=CLOSE_WAIT, 8=CLOSING,
     *    9=LAST_ACK, 10=TIME_WAIT.
     *  Buckets with count==0 are filtered out at render time. */
    val tcpStateCounts:  IntArray,
) {
    companion object {
        // Friendly state names, indexed the same as tcpStateCounts.
        val STATE_NAMES = arrayOf(
            "CLOSED", "LISTEN", "SYN_SENT", "SYN_RCVD", "ESTABLISHED",
            "FIN_WAIT_1", "FIN_WAIT_2", "CLOSE_WAIT", "CLOSING",
            "LAST_ACK", "TIME_WAIT",
        )

        /** Parse the fixed-layout long-array the JNI returns. Returns
         *  null if the array isn't shaped right. */
        fun fromLongs(a: LongArray): PacketStats? {
            if (a.size != 20) return null
            val counts = IntArray(11) { i -> a[9 + i].toInt() }
            return PacketStats(
                tcpFlows         = a[0].toInt(),
                udpFlows         = a[1].toInt(),
                srttMinMs        = a[2],
                srttMedianMs     = a[3],
                srttMaxMs        = a[4],
                rttvarMedianMs   = a[5],
                rtoMedianMs      = a[6],
                flightTotalBytes = a[7],
                rtoRetxTotal     = a[8],
                tcpStateCounts   = counts,
            )
        }
    }
}
