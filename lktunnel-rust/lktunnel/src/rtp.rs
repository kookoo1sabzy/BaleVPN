//! RTP transport — substitute tunnel bytes for the encoded payload of a
//! published audio track, and extract bytes from the remote peer's
//! audio track on receive. See vendor/webrtc-sys/include/livekit/raw_-
//! bytes_transformer.h for the C++ side.
//!
//! Why not data channels: SCTP-over-DTLS (the WebRTC data-channel
//! transport) appears to be DPI-fingerprinted on some networks. RTP
//! (Opus over SRTP) is structurally indistinguishable from a normal
//! voice call and survives. Same WebRTC peer connection, same
//! SRTP / ICE / DTLS — just a different multiplex.
//!
//! Why audio and not video: on Android, the libwebrtc Rust SDK's
//! default video encoder factory routes through Java
//! (`SoftwareVideoEncoderFactory.nativeCreate`) which SEGV's during
//! initialisation — the Rust SDK doesn't ship the EGL/class-loader
//! plumbing the Java factory expects. Opus is a pure-C codec with no
//! JNI path, so audio tracks side-step the issue entirely. The
//! FrameTransformer hook attaches to RtpSender / RtpReceiver
//! regardless of media kind, so the byte-substitution behaviour is
//! identical.
//!
//! Encoder feeding: WebRTC's RtpSender only calls Transform() when
//! the encoder has produced a frame. With a real audio source the
//! encoder runs at the capture rate; with none it never fires. We
//! push a silent (all-zero PCM) 20 ms frame every 20 ms so
//! Transform() gets called at 50 Hz and our queued tunnel packets
//! actually go out.

use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::Duration;

use livekit::options::{AudioEncoding, TrackPublishOptions};
use livekit::prelude::*;
use livekit::webrtc::audio_frame::AudioFrame;
use livekit::webrtc::audio_source::native::NativeAudioSource;
use livekit::webrtc::audio_source::{AudioSourceOptions, RtcAudioSource};
use livekit::webrtc::native::raw_bytes_transformer::{
    RawBytesFrameTransformer, RawBytesObserver,
};
use livekit::Room;

/// Opus sample rate (48 kHz mono). Standard for WebRTC voice.
const DUMMY_SAMPLE_RATE: u32 = 48_000;
const DUMMY_CHANNELS:    u32 = 1;
/// 20 ms frame at 48 kHz = 960 samples. Matches the Opus packetisation
/// cadence so the encoder is fed exactly one packet per Transform()
/// call.
const DUMMY_FRAME_MS:        u32 = 20;
const DUMMY_SAMPLES_PER_FRAME: u32 =
    DUMMY_SAMPLE_RATE / 1000 * DUMMY_FRAME_MS;
/// libwebrtc-side audio source queue, in ms. ~100 ms is the SDK's
/// default — plenty of jitter buffering, no perceivable latency cost
/// since the "audio" is just silence we're using as a Transform()
/// trigger.
const DUMMY_QUEUE_MS: u32 = 100;

/// Track name on the LK wire. The peer subscribes by track kind, not
/// name, so this is just for log readability.
const TRACK_NAME: &str = "tunnel";

/// Wire-format ceiling per Opus frame at 510 kbps × 20 ms (Opus's hard
/// per-packet limit per RFC 6716). Sender packs as many length-prefixed
/// IP packets as fit under this; receiver unpacks the inverse.
pub const MAX_FRAME_BYTES: usize = 1275;

/// Append a length-prefixed IP packet to a batch buffer. Returns true
/// if the packet was appended (or the packet would overflow but the
/// batch is empty, in which case it's appended anyway — single oversize
/// packets just go in their own frame). Returns false when the batch
/// already holds at least one packet AND the new packet wouldn't fit;
/// caller flushes the batch, then re-calls to start a fresh one.
///
/// Wire shape per packet inside a frame:
///   [u16 BE length][packet bytes]
/// Multiple entries are concatenated. The receiver's `on_data` parses
/// the same way.
pub fn push_packed(batch: &mut Vec<u8>, packet: &[u8]) -> bool {
    if packet.len() > u16::MAX as usize { return true; }
    let needed = batch.len() + 2 + packet.len();
    if needed > MAX_FRAME_BYTES && !batch.is_empty() { return false; }
    batch.extend_from_slice(&(packet.len() as u16).to_be_bytes());
    batch.extend_from_slice(packet);
    true
}

/// Sender-side handle. Owns the local audio track + transformer; drop
/// stops the dummy frame producer via `_frame_producer`'s AbortHandle.
pub struct RtpSender {
    transformer: RawBytesFrameTransformer,
    _track:      LocalAudioTrack,
    _frame_producer: tokio::task::AbortHandle,
}

impl RtpSender {
    /// Try to enqueue a packet. Returns false on queue overflow — caller
    /// drops the packet (RTP semantics: lossy is expected).
    pub fn send(&self, data: &[u8]) -> bool {
        self.transformer.send(data)
    }

    pub fn queue_depth(&self) -> usize {
        self.transformer.queue_depth()
    }
}

/// Receiver-side handle. Keep alive while the corresponding remote
/// track is subscribed — drop releases the transformer reference but
/// libwebrtc still holds its scoped_refptr internally until the track
/// ends.
pub struct RtpReceiver {
    _transformer: RawBytesFrameTransformer,
}

/// Publish the tunnel's outgoing audio track and install the byte-
/// substitution transformer on its RtpSender. Spawns a background
/// task that pushes a silent 20 ms PCM frame at 50 Hz to keep the
/// Opus encoder live.
///
/// Must be called after `Room::connect` returns and only once per
/// tunnel.
pub async fn publish(room: &Arc<Room>) -> Result<RtpSender, String> {
    let source = NativeAudioSource::new(
        AudioSourceOptions::default(),
        DUMMY_SAMPLE_RATE,
        DUMMY_CHANNELS,
        DUMMY_QUEUE_MS,
    );
    let track = LocalAudioTrack::create_audio_track(
        TRACK_NAME,
        RtcAudioSource::Native(source.clone()),
    );

    let options = TrackPublishOptions {
        source: TrackSource::Microphone,
        // dtx=false: Opus DTX (Discontinuous Transmission) detects
        // silent input — which is exactly what our dummy producer
        // feeds — and stops emitting RTP packets. With no packets
        // there's no Transform() call and our queued tunnel bytes
        // never go out. Disabling DTX forces the encoder to produce
        // a packet every 20 ms regardless of input silence.
        dtx: false,
        // red=false: Opus RED (RFC 2198) packetises each Opus payload
        // inside a redundancy envelope. Mixing that with our
        // payload-substitution FrameTransformer is murky; the simpler
        // plain-Opus path is byte-stable for the substitution.
        red: false,
        // Max-bitrate cap to keep the SFU's TWCC / publisher pacer
        // from throttling us. Opus's hard ceiling is 510 kbps; that
        // sizes each 20 ms frame at ~1275 bytes, enough headroom to
        // fit an MTU-size IP packet in one frame after VP8-style
        // packetisation. The encoder still runs at lower effective
        // bitrate on the silent input — this is purely the ceiling
        // the publisher is allowed to push.
        audio_encoding: Some(AudioEncoding { max_bitrate: 510_000 }),
        ..Default::default()
    };

    room.local_participant()
        .publish_track(LocalTrack::Audio(track.clone()), options)
        .await
        .map_err(|e| format!("publish_track: {e}"))?;

    let transceiver = track
        .transceiver()
        .ok_or_else(|| "transceiver not set on local track".to_string())?;
    let sender = transceiver.sender();
    let transformer = RawBytesFrameTransformer::new_for_rtp_sender(sender);

    // Silent-frame producer. NativeAudioSource::new() zeroes its
    // internal buffer; AudioFrame::new() does the same — both layers
    // produce true silence with no per-tick work beyond the
    // allocation. Opus DTX (discontinuous transmission) is *disabled*
    // for us implicitly because the silent payload still goes through
    // the FrameTransformer before reaching the wire, so we always get
    // a Transform() call per frame.
    let producer = crate::runtime().spawn(async move {
        let mut tick = tokio::time::interval(Duration::from_millis(DUMMY_FRAME_MS as u64));
        tick.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Skip);
        loop {
            tick.tick().await;
            let frame = AudioFrame::new(
                DUMMY_SAMPLE_RATE,
                DUMMY_CHANNELS,
                DUMMY_SAMPLES_PER_FRAME,
            );
            if let Err(e) = source.capture_frame(&frame).await {
                log::warn!("rtp dummy frame capture failed: {e}");
            }
        }
    });

    Ok(RtpSender {
        transformer,
        _track: track,
        _frame_producer: producer.abort_handle(),
    })
}

/// Install the byte-extraction transformer on a remote audio track's
/// RtpReceiver. Fires `on_data(bytes)` for every arriving frame; the
/// decoded audio is discarded (we never attached an audio sink).
pub fn attach_remote(
    track: &RemoteAudioTrack,
    on_data: Arc<dyn Fn(&[u8]) + Send + Sync>,
) -> Result<RtpReceiver, String> {
    let transceiver = track
        .transceiver()
        .ok_or_else(|| "transceiver not set on remote track".to_string())?;
    let receiver = transceiver.receiver();

    struct Observer {
        forward: Arc<dyn Fn(&[u8]) + Send + Sync>,
        counter: AtomicU64,
    }
    impl RawBytesObserver for Observer {
        fn on_data(&self, data: &[u8]) {
            let n = self.counter.fetch_add(1, Ordering::Relaxed) + 1;
            if n.is_power_of_two() {
                log::debug!("rtp recv checkpoint: {n} frames (last len={})", data.len());
            }
            // Unpack — mirror of `push_packed`. Each entry is
            // [u16 BE length][bytes]; iterate and forward each.
            // Truncated/garbled trailers break the loop without erroring;
            // the lossy transport can deliver a corrupt frame and the
            // sender's TCP/QUIC layer will retransmit at L4.
            let mut i = 0usize;
            while i + 2 <= data.len() {
                let len = ((data[i] as usize) << 8) | (data[i + 1] as usize);
                i += 2;
                if len == 0 || i + len > data.len() { break; }
                (self.forward)(&data[i..i + len]);
                i += len;
            }
        }
    }

    let observer: Arc<dyn RawBytesObserver> = Arc::new(Observer {
        forward: on_data,
        counter: AtomicU64::new(0),
    });
    let transformer = RawBytesFrameTransformer::new_for_rtp_receiver(receiver, observer);
    Ok(RtpReceiver { _transformer: transformer })
}
