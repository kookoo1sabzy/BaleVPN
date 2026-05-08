package ai.bale.proxy.livekit

import ai.bale.proxy.tunnel.DataTransport
import android.content.Context
import android.util.Log
import io.livekit.android.AudioOptions
import io.livekit.android.AudioType
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
    // Time we returned from connect(). Used to distinguish a phantom
    // ParticipantDisconnected (LK SDK occasionally fires one in the first
    // ~1-2 s before any peer has joined) from a real disconnect later. After
    // this window, an empty-room disconnect is honored even if we never saw
    // the peer join — covers the case where the server is removed before its
    // ParticipantConnected propagated to us.
    @Volatile private var connectedAt = 0L

    override suspend fun connect(url: String, token: String) {
        Log.d(TAG, "LiveKit: connect url=$url")
        // We use the LiveKit room as a pure data-channel transport (raw IP packets +
        // SOCKS5 frames). No microphone, no speaker, no call-style audio routing.
        // Two overrides combine to fully suppress the "phone call" experience:
        //
        //   audioHandler = NoAudioHandler      → don't manage audio focus or
        //                                        switch into MODE_IN_COMMUNICATION
        //   audioOutputType = MediaAudioType   → the WebRTC AudioDeviceModule's
        //                                        AudioTrack is built with
        //                                        STREAM_MUSIC / USAGE_MEDIA, so
        //                                        the volume rocker controls media
        //                                        volume rather than in-call volume
        //                                        (Android routes volume keys by
        //                                        the active AudioTrack's stream
        //                                        type, even when nothing's
        //                                        actually playing).
        val overrides = LiveKitOverrides(
            audioOptions = AudioOptions(
                audioHandler    = NoAudioHandler(),
                audioOutputType = AudioType.MediaAudioType(),
            ),
        )
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
                        // Empty room means the peer left — leave the room ourselves
                        // and hand control to the reconnect path. The only exception
                        // is a brief phantom-event window right after connect() returns
                        // (LK SDK occasionally fires a stale ParticipantDisconnected
                        // before any peer has joined). Past that window we honor it
                        // regardless of whether we saw a ParticipantConnected — covers
                        // the case where the peer was here and left so fast we missed
                        // the join, or the server kicked us mid-handshake.
                        if (r.remoteParticipants.isEmpty()) {
                            val elapsed = System.currentTimeMillis() - connectedAt
                            if (everHadRemote || elapsed > 2_000) {
                                Log.d(TAG, "LiveKit: peer gone — leaving room (everHadRemote=$everHadRemote elapsed=${elapsed}ms)")
                                isConnected = false
                                // Tell the SFU we're leaving too — without this we
                                // keep our signal channel open with no peer for the
                                // session-token's full lifetime. RoomEvent.Disconnected
                                // may follow but our isConnected=false guard makes
                                // the duplicate onDisconnected a harmless no-op for
                                // downstream consumers.
                                scope.launch {
                                    withContext(Dispatchers.Main) { runCatching { r.disconnect() } }
                                }
                                onDisconnected?.invoke()
                            } else {
                                Log.d(TAG, "LiveKit: phantom ParticipantDisconnected at ${elapsed}ms — ignoring")
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
        connectedAt = System.currentTimeMillis()
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
