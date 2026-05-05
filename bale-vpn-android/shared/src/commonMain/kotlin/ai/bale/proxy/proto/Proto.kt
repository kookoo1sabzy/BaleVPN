package ai.bale.proxy.proto

class ProtoWriter {
    private var buf = ByteArray(64)
    private var size = 0

    private fun writeByte(b: Int) {
        if (size >= buf.size) buf = buf.copyOf(buf.size * 2)
        buf[size++] = b.toByte()
    }

    private fun writeBytes(src: ByteArray) {
        while (size + src.size > buf.size) buf = buf.copyOf(buf.size * 2)
        src.copyInto(buf, size); size += src.size
    }

    fun varint(v: Long): ProtoWriter {
        var value = v
        while (value and 0x7FL.inv() != 0L) {
            writeByte(((value and 0x7F) or 0x80).toInt())
            value = value ushr 7
        }
        writeByte((value and 0x7F).toInt())
        return this
    }

    private fun tag(field: Int, wire: Int) = varint(((field.toLong() shl 3) or wire.toLong()))

    fun int32(field: Int, v: Int)    : ProtoWriter { tag(field, 0); varint(v.toLong());             return this }
    fun int64(field: Int, v: Long)   : ProtoWriter { tag(field, 0); varint(v);                      return this }
    fun bool (field: Int, v: Boolean): ProtoWriter { tag(field, 0); varint(if (v) 1L else 0L);      return this }
    fun string(field: Int, v: String): ProtoWriter = bytes(field, v.encodeToByteArray())
    fun bytes (field: Int, v: ByteArray): ProtoWriter {
        tag(field, 2); varint(v.size.toLong()); writeBytes(v); return this
    }

    fun build(): ByteArray = buf.copyOf(size)
}

class ProtoReader(private val buf: ByteArray) {
    var pos = 0

    fun hasMore() = pos < buf.size

    fun varint(): Long {
        var result = 0L; var shift = 0
        while (pos < buf.size) {
            val b = buf[pos++].toInt() and 0xFF
            result = result or ((b and 0x7F).toLong() shl shift)
            if (b and 0x80 == 0) break
            shift += 7
        }
        return result
    }

    fun tag(): Pair<Int, Int> {
        val v = varint(); return (v ushr 3).toInt() to (v and 7L).toInt()
    }

    fun bytes(): ByteArray {
        val len = varint().toInt()
        return buf.sliceArray(pos until pos + len).also { pos += len }
    }

    fun string() = bytes().decodeToString()

    fun skip(wire: Int) {
        when (wire) {
            0    -> varint()
            2    -> { val n = varint().toInt(); pos += n }
        }
    }
}
