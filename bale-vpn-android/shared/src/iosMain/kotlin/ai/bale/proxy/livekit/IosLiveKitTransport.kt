package ai.bale.proxy.livekit

import ai.bale.proxy.tunnel.DataTransport

// Stub — wire up LiveKit iOS SDK here when targeting iOS
class IosLiveKitTransport : DataTransport {
    override var isConnected                        = false
    override val hasPeer                            = false
    override var onData:         ((ByteArray) -> Unit)? = null
    override var onDisconnected: (() -> Unit)?          = null
    override suspend fun connect(url: String, token: String) = TODO("Wire LiveKit iOS SDK")
    override fun send(data: ByteArray)  = TODO()
    override fun disconnect() {}
}
