package ai.bale.proxy.livekit

import ai.bale.proxy.tunnel.DataTransport
import android.content.Context
import android.util.Log
import io.livekit.android.AudioOptions
import io.livekit.android.ConnectOptions
import io.livekit.android.LiveKit
import io.livekit.android.LiveKitOverrides
import io.livekit.android.audio.NoAudioHandler
import io.livekit.android.events.RoomEvent
import io.livekit.android.events.collect
import io.livekit.android.room.Room
import io.livekit.android.room.track.DataPublishReliability
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlin.coroutines.CoroutineContext

private const val TAG            = "BaleVPN"
private const val QUEUE_CAPACITY = 256

class AndroidLiveKitTransport(
    private val context:    Context,
    private val dispatcher: CoroutineContext = Dispatchers.IO,
) : DataTransport {
    override var isConnected = false
        private set
    override val hasPeer: Boolean
        get() = room?.remoteParticipants?.isNotEmpty() == true
    override var onData:         ((ByteArray) -> Unit)? = null
    override var onDisconnected: (() -> Unit)?          = null

    private var room:           Room? = null
    private val scope           = CoroutineScope(dispatcher + SupervisorJob())
    private val sendQueue       = Channel<ByteArray>(QUEUE_CAPACITY)
    @Volatile private var everHadRemote = false

    override suspend fun connect(url: String, token: String) {
        Log.d(TAG, "LiveKit: connect url=$url")
        // We use the LiveKit room as a pure data-channel transport (raw IP packets +
        // SOCKS5 frames). No microphone, no speaker, no call-style audio routing.
        // The default AudioSwitchHandler would otherwise request audio focus, switch
        // the device into MODE_IN_COMMUNICATION, route audio through the earpiece,
        // and remap the volume keys to in-call volume — turning a tunnel session
        // into a fake "phone call" from the user's perspective.
        val overrides = LiveKitOverrides(audioOptions = AudioOptions(audioHandler = NoAudioHandler()))
        val r = LiveKit.create(context, overrides = overrides)
        room = r

        scope.launch {
            r.events.collect { event: RoomEvent ->
                when (event) {
                    is RoomEvent.DataReceived -> onData?.invoke(event.data)
                    is RoomEvent.Disconnected -> {
                        Log.d(TAG, "LiveKit: disconnected")
                        isConnected = false
                        onDisconnected?.invoke()
                    }
                    is RoomEvent.ParticipantConnected -> {
                        everHadRemote = true
                        Log.d(TAG, "LiveKit: peer joined (${r.remoteParticipants.size} remote)")
                    }
                    is RoomEvent.ParticipantDisconnected -> {
                        // Only treat an empty room as "peer left" if we'd actually had a peer.
                        // LiveKit sometimes fires this for stale signaling state during the
                        // initial connect window, before the real peer has joined.
                        if (r.remoteParticipants.isEmpty()) {
                            if (everHadRemote) {
                                Log.d(TAG, "LiveKit: peer left room — disconnecting")
                                isConnected = false
                                onDisconnected?.invoke()
                            } else {
                                Log.d(TAG, "LiveKit: stale ParticipantDisconnected before any peer joined — ignoring")
                            }
                        }
                    }
                    else -> {}
                }
            }
        }

        Log.d(TAG, "LiveKit: connecting to $url")
        // autoSubscribe = false: Bale's server peer publishes a (silent) audio track
        // to keep the LiveKit session looking like a real call, but auto-subscribing
        // to it would spin up WebRTC's AudioTrack playback path, which natively sets
        // AudioManager.MODE_IN_COMMUNICATION — that's what makes the volume rocker
        // jump to "in-call volume". We never need any tracks; the data channel is
        // independent of media subscriptions.
        val connectOpts = ConnectOptions(autoSubscribe = false)
        withContext(Dispatchers.Main) { r.connect(url, token, connectOpts) }
        isConnected = true
        Log.d(TAG, "LiveKit: connected")

        scope.launch {
            for (data in sendQueue) {
                try {
                    withContext(Dispatchers.Main) {
                        // LOSSY → WebRTC data channel with maxRetransmits=0, ordered=false
                        r.localParticipant.publishData(data, DataPublishReliability.LOSSY)
                    }
                } catch (e: Exception) {
                    // Transient publish errors are normal at the start of a session
                    // ("Publisher isn't setup yet!") and after disconnect. Drop the packet
                    // and keep going — LOSSY semantics already permit loss. Real teardown
                    // is driven by RoomEvent.Disconnected, not by send failures.
                    Log.w(TAG, "LiveKit: publishData failed (dropping pkt): ${e.message}")
                }
            }
        }
    }

    override fun send(data: ByteArray) { sendQueue.trySend(data) }

    override fun disconnect() {
        Log.d(TAG, "LiveKit: disconnect()")
        sendQueue.close()
        room?.disconnect()
        room = null
        isConnected = false
        scope.cancel()
    }
}
