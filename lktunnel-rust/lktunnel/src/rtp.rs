//! Carrier framing — pack many length-prefixed IP/QUIC packets into a
//! single carrier payload and unpack them on the far side.
//!
//! The carrier itself is a WebRTC media track (Opus over SRTP) driven by
//! the pure-Rust [`crate::rtc`] engine: each carrier "frame" is the
//! payload of one RTP packet, and we substitute our own bytes for the
//! codec payload. RTP (Opus over SRTP) is structurally indistinguishable
//! from a normal voice call and survives DPI that fingerprints
//! SCTP-over-DTLS data channels — same peer connection, same ICE / DTLS /
//! SRTP, just a different multiplex.
//!
//! This module is transport-agnostic: it knows nothing about webrtc-rs or
//! LiveKit, only the on-wire packing shape. [`crate::rtc`] owns the track
//! plumbing and calls [`push_packed`] (send) / [`unpack`] (receive).

/// Wire-format ceiling per carrier frame at 510 kbps × 20 ms (Opus's hard
/// per-packet limit per RFC 6716). Sender packs as many length-prefixed
/// IP packets as fit under this; receiver unpacks the inverse.
pub const MAX_FRAME_BYTES: usize = 1275;

/// Number of parallel carrier tracks the sender publishes. The send loop
/// stripes frames round-robin across them; the receive side needs no
/// count (it attaches to every remote track and funnels them into one
/// dispatch).
///
/// Kept at 1 — multi-track was tried and regressed throughput. Two
/// reasons: (a) WebRTC bandwidth estimation is per peer-connection, so
/// N tracks split one budget rather than multiplying it; (b) — the
/// killer — per-frame round-robin striping across tracks with independent
/// jitter buffers delivers packets badly out of order, and the transport
/// above (QUIC-over-tunnel) reads that reordering as loss → cwnd collapse.
/// A working multi-track design would need per-FLOW pinning (hash each
/// connection to one track so it stays in-order), which only helps
/// concurrent-flow workloads, not a single big transfer. The plumbing
/// stays so that's revivable.
pub const TRACK_COUNT: usize = 1;

/// Use a video track as the carrier instead of audio. Not yet implemented
/// on the webrtc-rs engine (audio Opus only); kept so [`max_frame_bytes`]
/// and the send-loop sizing have a single switch when video lands.
pub const USE_VIDEO_CARRIER: bool = false;

/// Per-frame packing ceiling for the (future) video carrier. Kept to a
/// single RTP packet so a frame is never fragmented — audio worked
/// precisely because each frame was one packet.
pub const MAX_VIDEO_FRAME_BYTES: usize = 1100;

/// The active carrier's per-frame packing ceiling. Send loop sizes its
/// batch buffer and `push_packed` cap against this.
pub const fn max_frame_bytes() -> usize {
    if USE_VIDEO_CARRIER { MAX_VIDEO_FRAME_BYTES } else { MAX_FRAME_BYTES }
}

/// Append a length-prefixed IP packet to a batch buffer. Returns true if
/// the packet was appended (or the packet would overflow but the batch is
/// empty, in which case it's appended anyway — single oversize packets
/// just go in their own frame). Returns false when the batch already
/// holds at least one packet AND the new packet wouldn't fit; caller
/// flushes the batch, then re-calls to start a fresh one.
///
/// Wire shape per packet inside a frame:
///   [u16 BE length][packet bytes]
/// Multiple entries are concatenated. [`unpack`] parses the inverse.
pub fn push_packed(batch: &mut Vec<u8>, packet: &[u8], max: usize) -> bool {
    if packet.len() > u16::MAX as usize { return true; }
    let needed = batch.len() + 2 + packet.len();
    if needed > max && !batch.is_empty() { return false; }
    batch.extend_from_slice(&(packet.len() as u16).to_be_bytes());
    batch.extend_from_slice(packet);
    true
}

/// Inverse of [`push_packed`]: walk a received carrier frame and invoke
/// `on_packet` once per length-prefixed entry. A truncated/garbled
/// trailer breaks the loop without erroring — the lossy carrier can
/// deliver a corrupt frame and the transport above (QUIC) retransmits at
/// L4.
pub fn unpack(frame: &[u8], mut on_packet: impl FnMut(&[u8])) {
    let mut i = 0usize;
    while i + 2 <= frame.len() {
        let len = ((frame[i] as usize) << 8) | (frame[i + 1] as usize);
        i += 2;
        if len == 0 || i + len > frame.len() { break; }
        on_packet(&frame[i..i + len]);
        i += len;
    }
}
