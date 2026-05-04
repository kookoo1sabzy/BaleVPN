package ai.bale.proxy.tunnel

fun ByteArray.toHexString() = joinToString("") { (it.toInt() and 0xFF).toString(16).padStart(2, '0') }
fun String.hexToBytes()     = ByteArray(length / 2) { i ->
    ((this[i * 2].digitToInt(16) shl 4) or this[i * 2 + 1].digitToInt(16)).toByte()
}

sealed class TFrame {
    abstract val sid: String
    data class Connect(override val sid: String, val host: String, val port: Int) : TFrame()
    data class Ack    (override val sid: String, val ok: Boolean)                 : TFrame()
    data class Close  (override val sid: String)                                  : TFrame()
    class Data(override val sid: String, val data: ByteArray) : TFrame() {
        override fun equals(o: Any?) = o is Data && sid == o.sid && data.contentEquals(o.data)
        override fun hashCode()      = 31 * sid.hashCode() + data.contentHashCode()
    }
    class Udp(override val sid: String, val host: String, val port: Int, val data: ByteArray) : TFrame() {
        override fun equals(o: Any?) = o is Udp && sid == o.sid && data.contentEquals(o.data)
        override fun hashCode()      = 31 * sid.hashCode() + data.contentHashCode()
    }
    // Raw IP packet — no session concept, no sid.
    class Ip(val data: ByteArray) : TFrame() {
        override val sid = ""
        override fun equals(o: Any?) = o is Ip && data.contentEquals(o.data)
        override fun hashCode()      = data.contentHashCode()
    }
}

fun lkEncode(f: TFrame): ByteArray {
    if (f is TFrame.Ip) return byteArrayOf(0x49.toByte()) + f.data
    val sid  = f.sid.hexToBytes()
    val type = when (f) {
        is TFrame.Connect -> 'C'; is TFrame.Ack -> 'A'
        is TFrame.Data    -> 'D'; is TFrame.Close -> 'X'; is TFrame.Udp -> 'U'
        is TFrame.Ip      -> error("unreachable")
    }.code.toByte()
    val hdr = byteArrayOf(type) + sid
    return when (f) {
        is TFrame.Connect -> hdr + hostPortHdr(f.host, f.port)
        is TFrame.Ack     -> hdr + byteArrayOf(if (f.ok) 1 else 0)
        is TFrame.Data    -> hdr + f.data
        is TFrame.Close   -> hdr
        is TFrame.Udp     -> hdr + hostPortHdr(f.host, f.port) + f.data
        is TFrame.Ip      -> error("unreachable")
    }
}

private fun hostPortHdr(host: String, port: Int): ByteArray {
    val h = host.encodeToByteArray()
    return byteArrayOf((port shr 8).toByte(), port.toByte(), h.size.toByte()) + h
}

fun lkDecode(buf: ByteArray): TFrame? {
    if (buf.isEmpty()) return null
    val t = buf[0].toInt().toChar()
    if (t == 'I') return TFrame.Ip(buf.sliceArray(1 until buf.size))
    if (buf.size < 7) return null
    val sid = buf.sliceArray(1..6).toHexString()
    val r   = buf.sliceArray(7 until buf.size)
    return when (t) {
        'C'  -> parseHostPort(r)?.let { (host, port, _) -> TFrame.Connect(sid, host, port) }
        'A'  -> TFrame.Ack(sid, r.isNotEmpty() && r[0] != 0.toByte())
        'D'  -> TFrame.Data(sid, r)
        'X'  -> TFrame.Close(sid)
        'U'  -> parseHostPort(r)?.let { (host, port, off) -> TFrame.Udp(sid, host, port, r.sliceArray(off until r.size)) }
        else -> null
    }
}

private fun parseHostPort(r: ByteArray): Triple<String, Int, Int>? {
    if (r.size < 3) return null
    val port = ((r[0].toInt() and 0xFF) shl 8) or (r[1].toInt() and 0xFF)
    val hl   = r[2].toInt() and 0xFF
    if (r.size < 3 + hl) return null
    return Triple(r.sliceArray(3 until 3 + hl).decodeToString(), port, 3 + hl)
}
