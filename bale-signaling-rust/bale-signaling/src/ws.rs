//! WebSocket client to `next-ws.bale.ai`. Ports `BaleWsClient.kt`
//! and the matching Node `bale-ws.js`. Lands in chunks:
//!
//! 1. **(this file)** frame codecs — encoders for handshake / ping
//!    / RPC, parsers for the top-level frame routing, RPC
//!    response envelope, CallEntity, xC event tags, JWT user-id
//!    extraction.
//! 2. RPC pending table + `rpc_call` (next chunk).
//! 3. Connect loop, handshake, reader/writer/liveness/SetOnline.
//! 4. Bale RPC wrappers + xC event listener dispatch.
//!
//! Stays in one file for now; will split into `ws/{codec,
//! runloop, events}.rs` only if it grows past ~1k lines.

#![allow(dead_code)]    // skeleton — most pub(crate) symbols light up across chunks

use crate::proto::{ProtoError, ProtoReader, ProtoWriter};
use futures_util::{SinkExt, StreamExt};
use parking_lot::Mutex;
use std::collections::HashMap;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicI32, AtomicI64, AtomicU64, Ordering};
use std::time::Duration;
use tokio::sync::{mpsc, oneshot};
use tokio_tungstenite::{connect_async, tungstenite};

pub const WS_HOST:       &str = "next-ws.bale.ai";
pub const WS_PATH:       &str = "/ws/";
pub const PROTO_VERSION: i32  = 1;
pub const API_VERSION:   i64  = 151_668;

/// Per-RPC timeout. Matches the 30 s the Kotlin client uses; long
/// enough that a slow Bale backend (a few seconds is common) still
/// completes, short enough that a wedged RPC doesn't hold the
/// pending entry forever.
const RPC_TIMEOUT_SECS: u64 = 30;

// ─── Public types ───────────────────────────────────────────────────────

/// Full Bale CallEntity. Mirrors `CallEntity` in
/// `BaleWsClient.kt`. Field semantics:
///   * `token` only on AcceptCall replies (callStarted /
///     callReceived omit it for privacy)
///   * `caller_id` is the `adminUid` (f8); for the callee that's
///     the *other* party
///   * `discard_reason` only set on `callEnded`
#[derive(Debug, Default, Clone, PartialEq, Eq)]
pub struct CallEntity {
    pub call_id:        i64,
    pub token:          String,
    pub room:           String,
    pub url:            String,
    pub is_livekit:     bool,
    pub caller_id:      i64,
    pub video:          bool,
    pub create_date:    i64,
    pub start_date:     i64,
    pub duration:       i32,
    pub discard_reason: i32,
}

#[derive(Debug, Default, Clone, PartialEq, Eq)]
pub struct SelfInfo {
    pub uid:  i32,
    pub name: Option<String>,
}

/// Multi-subscriber callback aliases. `CallEndedCb`'s second arg
/// is the raw `discardReason` (Bale's enum: caller hangup / busy
/// / timeout / declined / network / …) so listeners can map it
/// to a richer `EndReason` if they want. Zero means the entity
/// didn't carry the field.
pub type CallReceivedCb = Arc<dyn Fn(i64, Option<CallEntity>) + Send + Sync>;
pub type CallEndedCb    = Arc<dyn Fn(i64, i32) + Send + Sync>;
pub type CallAcceptedCb = Arc<dyn Fn(i64) + Send + Sync>;
pub type Notifier       = Arc<dyn Fn() + Send + Sync>;

// ─── Frame encoders ─────────────────────────────────────────────────────
//
// All Bale WS frames are length-tagged protobuf bytes — see
// `encodeHandshake` / `encodePing` / `encodeRpc` in
// `BaleWsClient.kt`. Each helper here is a 1:1 port.

/// Build the initial handshake frame: `{ f3 = { f1 = proto_version,
/// f2 = api_version } }`.
pub(crate) fn encode_handshake() -> Vec<u8> {
    let inner = ProtoWriter::new()
        .int32(1, PROTO_VERSION)
        .int64(2, API_VERSION)
        .build();
    ProtoWriter::new().bytes(3, &inner).build()
}

/// Build a ping frame: `{ f2 = { f1 = ping_idx } }`. The ping idx
/// is just a counter; the value isn't load-bearing but the field
/// must be present.
pub(crate) fn encode_ping(ping_idx: i32) -> Vec<u8> {
    let inner = ProtoWriter::new().int32(1, ping_idx).build();
    ProtoWriter::new().bytes(2, &inner).build()
}

/// Build an RPC request frame:
/// `{ f1 = { f1 = service, f2 = method, f3 = payload, f5 = idx } }`.
pub(crate) fn encode_rpc(service: &str, method: &str, payload: &[u8], idx: i32) -> Vec<u8> {
    let inner = ProtoWriter::new()
        .string(1, service)
        .string(2, method)
        .bytes (3, payload)
        .int64 (5, idx as i64)
        .build();
    ProtoWriter::new().bytes(1, &inner).build()
}

// ─── Frame decoders ─────────────────────────────────────────────────────

/// Top-level WS frame shape. Returned by [`decode_server_frame`];
/// the caller dispatches each variant to its own handler. Each
/// variant carries the raw inner bytes; further parsing happens
/// in the dispatch layer (so this function can be tested without
/// pulling in xC event handling).
#[derive(Debug, PartialEq, Eq)]
pub(crate) enum ServerFrame<'a> {
    /// `f=1` — RPC response or push (the caller distinguishes by
    /// looking at the embedded idx).
    RpcOrPush(&'a [u8]),
    /// `f=2` — Push update container (wraps the SubscribeResponse).
    PushContainer(&'a [u8]),
    /// `f=3` — Terminate session.
    Terminate(&'a [u8]),
    /// `f=4` — Pong. Body is rarely interesting; we record it
    /// only so the run loop's liveness tracker can timestamp.
    Pong(&'a [u8]),
    /// `f=5` — Handshake response. Inner bytes are
    /// `{ f1 = proto_ver, f2 = api_ver }`.
    Handshake(&'a [u8]),
    /// Any other field id. Logged + skipped by the run loop.
    Other { field: u32, body: &'a [u8] },
}

/// Parse a single top-level frame. Bale frames are protobuf with
/// the top-level fields being length-delimited bytes (or `f=4` for
/// pong which is also bytes); they walk one tag at a time.
/// Returns an iterator-like single-shot decoder — call repeatedly
/// while `has_more` to step through frames sent in one
/// `WebSocket::Message::Binary`.
pub(crate) fn decode_server_frame<'a>(reader: &mut ProtoReader<'a>) -> Result<ServerFrame<'a>, ProtoError> {
    let (f, w) = reader.tag()?;
    let body = if w == 2 { reader.bytes()? } else {
        // Bale never sends non-length-delimited at the top level
        // (the codecs above guarantee it). If it did, skip.
        reader.skip(w)?;
        return Ok(ServerFrame::Other { field: f, body: &[] });
    };
    Ok(match f {
        1 => ServerFrame::RpcOrPush(body),
        2 => ServerFrame::PushContainer(body),
        3 => ServerFrame::Terminate(body),
        4 => ServerFrame::Pong(body),
        5 => ServerFrame::Handshake(body),
        _ => ServerFrame::Other { field: f, body },
    })
}

/// Parsed handshake response. Returned by [`decode_handshake`];
/// the run loop compares against [`PROTO_VERSION`] / [`API_VERSION`]
/// and fires `on_version_mismatch` on disagreement.
#[derive(Debug, PartialEq, Eq)]
pub(crate) struct HandshakeBody {
    pub proto_version: i32,
    pub api_version:   i64,
}

pub(crate) fn decode_handshake(buf: &[u8]) -> Result<HandshakeBody, ProtoError> {
    let mut r = ProtoReader::new(buf);
    let mut proto = 0i32;
    let mut api   = 0i64;
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            1 => proto = r.varint()? as i32,
            2 => api   = r.varint()? as i64,
            _ => r.skip(w)?,
        }
    }
    Ok(HandshakeBody { proto_version: proto, api_version: api })
}

/// Outer RPC-response envelope: `{ f1 = error, f2 = payload, f3 = idx }`.
/// Either `error` is present (failure) or `payload` is (success),
/// but the impl tolerates both being absent (the
/// `SubscribeToUpdates` rotation case — see Kotlin
/// `BaleWsClient.handleRpc`).
#[derive(Debug, PartialEq, Eq)]
pub(crate) struct RpcResponse<'a> {
    pub idx:     i32,
    pub error:   Option<&'a [u8]>,
    pub payload: Option<&'a [u8]>,
}

pub(crate) fn decode_rpc_response(buf: &[u8]) -> Result<RpcResponse<'_>, ProtoError> {
    let mut r = ProtoReader::new(buf);
    let mut out = RpcResponse { idx: 0, error: None, payload: None };
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            1 => out.error   = Some(r.bytes()?),
            2 => out.payload = Some(r.bytes()?),
            3 => out.idx     = r.varint()? as i32,
            _ => r.skip(w)?,
        }
    }
    Ok(out)
}

/// gRPC-style error envelope: `{ f1 = code, f2 = message }`.
/// Public because it's surfaced through `RpcCallError::Rpc`.
#[derive(Debug, Default, PartialEq, Eq, Clone)]
pub struct RpcError {
    pub code:    i32,
    pub message: String,
}

pub(crate) fn decode_rpc_error(buf: &[u8]) -> RpcError {
    let mut r = ProtoReader::new(buf);
    let mut out = RpcError::default();
    while r.has_more() {
        match r.tag() {
            Ok((1, _)) => out.code    = r.varint().unwrap_or(0) as i32,
            Ok((2, _)) => out.message = r.string().unwrap_or("").to_string(),
            Ok((_, w)) => if r.skip(w).is_err() { break; },
            Err(_)     => break,
        }
    }
    out
}

/// True for the routine 30 s `DEADLINE_EXCEEDED` (gRPC code 4)
/// close Bale uses to rotate the `SubscribeToUpdates` stream. Also
/// matches:
///   - code 2 (UNKNOWN)  + "want <EOF>"            — server gave up
///     earlier than the deadline.
///   - code 13 (INTERNAL) + "cardinality violation" — server-side
///     pipeline treated the upstream as unary then sent a second
///     message; the stream is dead but the cause is benign — just
///     re-subscribe.
/// Anything else is a real failure worth logging.
pub(crate) fn is_expected_subscribe_rotation(error: Option<&[u8]>, payload: Option<&[u8]>) -> bool {
    let Some(err_bytes) = error else { return false; };
    if payload.is_some() { return false; }
    let e = decode_rpc_error(err_bytes);
    match e.code {
        4  => true,
        2  => e.message.contains("want <EOF>"),
        13 => e.message.contains("cardinality violation"),
        _  => false,
    }
}

// ─── CallEntity / xC event parsers ──────────────────────────────────────

/// Bale wraps a string in `{ f1 = string }` to express nullability.
fn parse_wrapped_string(buf: &[u8]) -> String {
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        match r.tag() {
            Ok((1, _)) => return r.string().unwrap_or("").to_string(),
            Ok((_, w)) => if r.skip(w).is_err() { break; },
            Err(_)     => break,
        }
    }
    String::new()
}

/// Decode a CallEntity. Field map (verified against the Bale web
/// bundle):
///   1 = call_id
///   2 = token
///   3 = room
///   4 = url (wrapped string)
///   5 = video
///   6 = create_date
///   7 = start_date
///   8 = caller_id (adminUid)
///   10 = duration
///   11 = discard_reason
///   12 = is_livekit
pub(crate) fn parse_call_entity(buf: &[u8]) -> CallEntity {
    let mut r = ProtoReader::new(buf);
    let mut c = CallEntity::default();
    while r.has_more() {
        match r.tag() {
            Ok((1, _))  => c.call_id        = r.varint().unwrap_or(0) as i64,
            Ok((2, _))  => c.token          = r.string().unwrap_or("").to_string(),
            Ok((3, _))  => c.room           = r.string().unwrap_or("").to_string(),
            Ok((4, _))  => c.url            = parse_wrapped_string(r.bytes().unwrap_or(&[])),
            Ok((5, _))  => c.video          = r.varint().unwrap_or(0) != 0,
            Ok((6, _))  => c.create_date    = r.varint().unwrap_or(0) as i64,
            Ok((7, _))  => c.start_date     = r.varint().unwrap_or(0) as i64,
            Ok((8, _))  => c.caller_id      = r.varint().unwrap_or(0) as i64,
            Ok((10, _)) => c.duration       = r.varint().unwrap_or(0) as i32,
            Ok((11, _)) => c.discard_reason = r.varint().unwrap_or(0) as i32,
            Ok((12, _)) => c.is_livekit     = r.varint().unwrap_or(0) != 0,
            Ok((_, w))  => if r.skip(w).is_err() { break; },
            Err(_)      => break,
        }
    }
    c
}

/// Extract a Bale user id from a participant bytes field. Bale
/// uses two peer formats; user ids are always int32 values in a
/// plausible range. We collect all varints in the message and
/// return the first one in `[100, i32::MAX]` — filters out
/// `peer_type` (1–2) and `access_hash` (very large int64).
pub(crate) fn parse_participant_id(buf: &[u8]) -> i64 {
    let mut r = ProtoReader::new(buf);
    let mut out = 0i64;
    while r.has_more() {
        let tag = r.tag();
        let (_, w) = match tag { Ok(t) => t, Err(_) => break };
        match w {
            0 => {
                let v = r.varint().unwrap_or(0) as i64;
                if (100..=i32::MAX as i64).contains(&v) && out == 0 {
                    out = v;
                }
            }
            2 => { let _ = r.bytes(); }
            _ => if r.skip(w).is_err() { break; },
        }
    }
    out
}

/// Decode a CallResponse envelope (used by `startCall`,
/// `acceptCall`, and `callStarted` / `callAccepted` push tags).
/// Layout: `{ f1 = CallEntity, then ... = participant }`. The
/// outer participant scan only kicks in when the inner CallEntity
/// didn't carry an adminUid.
pub(crate) fn parse_call_response(buf: &[u8]) -> Option<CallEntity> {
    let mut r = ProtoReader::new(buf);
    let mut call: Option<CallEntity> = None;
    let mut outer_caller_id = 0i64;

    while r.has_more() {
        let tag = r.tag();
        let (f, w) = match tag { Ok(t) => t, Err(_) => break };
        if f == 1 {
            let bytes = match r.bytes() { Ok(b) => b, Err(_) => break };
            call = Some(parse_call_entity(bytes));
        } else if w == 2 && outer_caller_id == 0 {
            let bytes = match r.bytes() { Ok(b) => b, Err(_) => break };
            outer_caller_id = parse_participant_id(bytes);
        } else if r.skip(w).is_err() {
            break;
        }
    }

    call.map(|c| if c.caller_id == 0 && outer_caller_id != 0 {
        CallEntity { caller_id: outer_caller_id, ..c }
    } else { c })
}

/// `callEnded` payload is a wrapper around a CallEntity at field 1
/// (length-delimited). Pull the entity out and decode via
/// [`parse_call_entity`] so `discard_reason` / `duration` are
/// populated. Returns `None` if the shape isn't the wrapped form
/// — older payloads carried just the bare callId.
pub(crate) fn parse_call_ended(buf: &[u8]) -> Option<CallEntity> {
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let tag = r.tag();
        let (f, w) = match tag { Ok(t) => t, Err(_) => break };
        if f == 1 && w == 2 {
            return r.bytes().ok().map(parse_call_entity);
        }
        if r.skip(w).is_err() { break; }
    }
    None
}

/// `callEnded` may carry the callId either as a bare varint at f1
/// or wrapped inside a nested CallEntity-like message at f1
/// length-delimited. Tries both shapes; first non-zero wins.
pub(crate) fn parse_call_id(buf: &[u8]) -> i64 {
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        let tag = r.tag();
        let (f, w) = match tag { Ok(t) => t, Err(_) => break };
        match (f, w) {
            (1, 0) => return r.varint().unwrap_or(0) as i64,
            (1, 2) => {
                let inner = match r.bytes() { Ok(b) => b, Err(_) => break };
                let mut ir = ProtoReader::new(inner);
                while ir.has_more() {
                    let tag2 = ir.tag();
                    let (ff, ww) = match tag2 { Ok(t) => t, Err(_) => break };
                    if (ff, ww) == (1, 0) {
                        return ir.varint().unwrap_or(0) as i64;
                    }
                    if ir.skip(ww).is_err() { break; }
                }
            }
            _ => if r.skip(w).is_err() { break; },
        }
    }
    0
}

/// `callReceived` payload: `{ f1 = call_id, then ... = participant }`.
pub(crate) fn parse_call_received(buf: &[u8]) -> (i64, i64) {
    let mut r = ProtoReader::new(buf);
    let mut call_id  = 0i64;
    let mut caller   = 0i64;
    while r.has_more() {
        let tag = r.tag();
        let (f, w) = match tag { Ok(t) => t, Err(_) => break };
        match (f, w) {
            (1, 0) => call_id = r.varint().unwrap_or(0) as i64,
            (_, 2) if caller == 0 => {
                if let Ok(bytes) = r.bytes() {
                    caller = parse_participant_id(bytes);
                } else { break; }
            }
            _ => if r.skip(w).is_err() { break; },
        }
    }
    (call_id, caller)
}

// ─── JWT user-id extraction ─────────────────────────────────────────────

/// Decode the `user_id` from a JWT's payload section. Same
/// approach as the Kotlin / Node ports: split on `.`, base64url
/// decode the middle part, regex-pluck `"user_id":<digits>`.
/// `None` if the JWT shape is wrong or the field is missing.
pub(crate) fn decode_jwt_user_id(jwt: &str) -> Option<i32> {
    let mut parts = jwt.split('.');
    let _header  = parts.next()?;
    let payload  = parts.next()?;
    let bytes    = base64url_decode(payload)?;
    let json     = std::str::from_utf8(&bytes).ok()?;

    // Tiny manual extractor — equivalent to the regex
    // `"user_id"\s*:\s*(\d+)` but no `regex` dep needed.
    let i = json.find("\"user_id\"")?;
    let after_key = &json[i + "\"user_id\"".len()..];
    let after_colon = after_key.split(':').nth(1)?;
    let trimmed = after_colon.trim_start();
    let end = trimmed.find(|c: char| !c.is_ascii_digit())?;
    trimmed[..end].parse::<i32>().ok()
}

/// RFC 4648 §5 base64url decoder. Hand-rolled to avoid a fresh
/// `base64` dep for one tiny use site. Mirrors the Kotlin
/// hand-rolled version 1:1.
fn base64url_decode(s: &str) -> Option<Vec<u8>> {
    let mut out  = Vec::with_capacity((s.len() * 6) / 8 + 1);
    let mut buf  = 0u32;
    let mut bits = 0u32;
    for c in s.chars() {
        if c == '=' { break; }
        let v: u32 = match c {
            'A'..='Z' => c as u32 - 'A' as u32,
            'a'..='z' => c as u32 - 'a' as u32 + 26,
            '0'..='9' => c as u32 - '0' as u32 + 52,
            '-' | '+' => 62,
            '_' | '/' => 63,
            _         => return None,
        };
        buf = (buf << 6) | v;
        bits += 6;
        if bits >= 8 {
            bits -= 8;
            out.push(((buf >> bits) & 0xFF) as u8);
        }
    }
    Some(out)
}

// ─── xC update tags ─────────────────────────────────────────────────────
//
// Bale's `SubscribeResponse.update` is an `xC` union; each call
// event has its own field tag. Values verified against the web
// bundle and the matching Kotlin parser.

const XC_CALL_STARTED:  u32 = 52807;
const XC_CALL_ACCEPTED: u32 = 52808;
const XC_CALL_ENDED:    u32 = 52809;
const XC_CALL_RECEIVED: u32 = 52810;

// ─── RPC pending machinery ──────────────────────────────────────────────

/// One in-flight RPC. The `service` / `method` fields are kept for
/// diagnostic logs only; the responder is the oneshot the caller
/// is awaiting.
struct PendingRpc {
    service:   String,
    method:    String,
    responder: oneshot::Sender<Result<Vec<u8>, RpcError>>,
}

/// Errors `rpc_call` can return. `Canceled` and `NotConnected` look
/// similar but mean different things: `NotConnected` is "no WS at
/// all"; `Canceled` is "WS was up, then went down before the
/// response arrived" (drained by `disconnect`).
#[derive(Debug)]
pub enum RpcCallError {
    NotConnected,
    Canceled,
    Timeout,
    Rpc(RpcError),
}

impl std::fmt::Display for RpcCallError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::NotConnected => f.write_str("WS not connected"),
            Self::Canceled     => f.write_str("WS disconnected before response"),
            Self::Timeout      => write!(f, "RPC timed out after {RPC_TIMEOUT_SECS}s"),
            Self::Rpc(e)       => write!(f, "RPC error code={} message=\"{}\"", e.code, e.message),
        }
    }
}
impl std::error::Error for RpcCallError {}

/// What `dispatch_rpc_response` reports back to the run loop for
/// frames that don't correspond to a pending RPC entry. Lets the
/// run loop apply Bale's specific handling for the
/// `SubscribeToUpdates` rotation.
#[derive(Debug, PartialEq, Eq)]
pub(crate) enum UnmatchedRpcOutcome {
    /// Routine 30 s subscribe-stream rotation. Re-subscribe
    /// immediately, no backoff, no log.
    SubscribeRotation,
    /// Subscribe stream ended with a real failure. Run loop
    /// applies exponential backoff.
    SubscribeFailed { code: i32, message: String },
    /// A push payload arrived on the subscribe idx — proof the
    /// stream is healthy. Run loop clears its backoff.
    SubscribePush(Vec<u8>),
    /// Idx didn't match anything we know about. Log and drop.
    Dropped { idx: i32 },
}

// ─── WsClient (skeleton) ────────────────────────────────────────────────

pub struct WsClient {
    ready:             AtomicBool,
    running:           AtomicBool,

    // ── Rule-engine inputs ────────────────────────────────────
    //
    // The rule:
    //   want = token.is_some()
    //       && !user_disconnect
    //       && ( server_active                       // server: always-on
    //            || (foreground && !call_active) )   // client: app + no call
    //
    // No explicit "mode" — server_active alone distinguishes the
    // two semantics. Set by `BaleServerService.onStartCommand` →
    // true; cleared by `BaleServerService.stopServer` → false.

    /// App in foreground? Client semantics only (ignored when
    /// `server_active`). Defaults to `true` so headless callers
    /// (Rust binary) don't have to set it explicitly.
    foreground:        AtomicBool,
    /// A client LK call is active. When `true` the WS pauses
    /// (client semantics only — server ignores this) — Bale's
    /// push channel isn't needed mid-call and would waste
    /// battery / bandwidth.
    call_active:       AtomicBool,
    /// User explicitly pressed "Disconnect". Sticky until cleared.
    /// Wins in both semantics.
    user_disconnect:   AtomicBool,
    /// Server foreground service is running and wants to accept
    /// incoming calls. When `true`, the WS stays up regardless of
    /// `foreground` / `call_active` (server can't receive
    /// `callReceived` pushes if the WS is paused).
    server_active:     AtomicBool,

    // ── RPC plumbing ──────────────────────────────────────────
    rpc_idx:           AtomicI32,
    pending:           Mutex<HashMap<i32, PendingRpc>>,
    /// `None` between connections. Cloning the sender is cheap
    /// (it's an `Arc` under the hood); we clone for each
    /// `rpc_call`.
    send_tx:           Mutex<Option<mpsc::UnboundedSender<Vec<u8>>>>,
    /// Idx of the most recent `SubscribeToUpdates` RPC, so the
    /// run loop can recognise its routine 30 s end-of-stream and
    /// silently re-subscribe.
    subscribe_idx:     AtomicI32,
    /// Exponential backoff for non-routine subscribe-stream
    /// failures (anything that isn't the `code=4` rotation).
    /// Resets to 0 every time a real push payload arrives.
    /// Without this, `code=14 "no children to pick from"` (LB
    /// has no healthy backend) caused ~7 re-subs/s in the
    /// Kotlin port before the fix landed.
    subscribe_backoff_ms: AtomicU64,
    /// Wall-clock ms of the last inbound frame. Used by the
    /// liveness task to detect a zombie WS (TCP-open but no
    /// application traffic). `0` = no frame seen yet.
    last_inbound_ts:   AtomicI64,
    /// Monotonic counter for ping idx — just a value the server
    /// can echo. Doesn't matter for behaviour.
    ping_counter:      AtomicI32,

    // ── Listener lists ────────────────────────────────────────
    on_call_received:  Mutex<Vec<CallReceivedCb>>,
    on_call_ended:     Mutex<Vec<CallEndedCb>>,
    on_call_accepted:  Mutex<Vec<CallAcceptedCb>>,
    on_token_expired:  Mutex<Option<Notifier>>,
    on_version_mism:   Mutex<Option<Notifier>>,

    // ── Caches ────────────────────────────────────────────────
    self_info:         Mutex<Option<SelfInfo>>,
    name_cache:        Mutex<HashMap<i32, Option<String>>>,

    // ── Run-loop control ──────────────────────────────────────
    runloop_handle:    Mutex<Option<tokio::task::JoinHandle<()>>>,
    /// Latest access token. Owned here so `load_self` can decode
    /// `user_id` out of the JWT, and the run loop can read it on
    /// reconnect. Cleared by `disconnect`.
    access_token:      Mutex<Option<String>>,
}

impl WsClient {
    pub fn new() -> Arc<Self> {
        Arc::new(Self {
            ready:            AtomicBool::new(false),
            running:          AtomicBool::new(false),
            foreground:       AtomicBool::new(true),
            call_active:      AtomicBool::new(false),
            user_disconnect:  AtomicBool::new(false),
            server_active:    AtomicBool::new(false),
            rpc_idx:          AtomicI32::new(1),
            pending:          Mutex::new(HashMap::new()),
            send_tx:          Mutex::new(None),
            subscribe_idx:    AtomicI32::new(-1),
            subscribe_backoff_ms: AtomicU64::new(0),
            last_inbound_ts:  AtomicI64::new(0),
            ping_counter:     AtomicI32::new(0),
            on_call_received: Mutex::new(Vec::new()),
            on_call_ended:    Mutex::new(Vec::new()),
            on_call_accepted: Mutex::new(Vec::new()),
            on_token_expired: Mutex::new(None),
            on_version_mism:  Mutex::new(None),
            self_info:        Mutex::new(None),
            name_cache:       Mutex::new(HashMap::new()),
            runloop_handle:   Mutex::new(None),
            access_token:     Mutex::new(None),
        })
    }

    // ── RPC ───────────────────────────────────────────────────

    /// Issue an RPC. Allocates a fresh idx, installs a pending
    /// entry, sends the frame, and awaits the response with a
    /// 30 s timeout. On any failure path the pending entry is
    /// removed.
    pub async fn rpc_call(
        &self,
        service: &str,
        method:  &str,
        payload: &[u8],
    ) -> Result<Vec<u8>, RpcCallError> {
        let idx = self.rpc_idx.fetch_add(1, Ordering::Relaxed);
        let (tx, rx) = oneshot::channel();

        self.pending.lock().insert(idx, PendingRpc {
            service:   service.to_string(),
            method:    method.to_string(),
            responder: tx,
        });

        // Cheap clone — UnboundedSender is Arc-backed.
        let sender = self.send_tx.lock().clone();
        let Some(sender) = sender else {
            self.pending.lock().remove(&idx);
            return Err(RpcCallError::NotConnected);
        };

        let frame = encode_rpc(service, method, payload, idx);
        if sender.send(frame).is_err() {
            self.pending.lock().remove(&idx);
            return Err(RpcCallError::NotConnected);
        }

        let result = tokio::time::timeout(Duration::from_secs(RPC_TIMEOUT_SECS), rx).await;
        // Always clear pending — guarantees no entry leaks across
        // timeout / cancellation / success.
        self.pending.lock().remove(&idx);

        match result {
            Err(_)              => Err(RpcCallError::Timeout),
            Ok(Err(_canceled))  => Err(RpcCallError::Canceled),
            Ok(Ok(Err(e)))      => Err(RpcCallError::Rpc(e)),
            Ok(Ok(Ok(payload))) => Ok(payload),
        }
    }

    /// Run-loop callback: a frame with `f=1` arrived. Looks up the
    /// pending entry by idx; if present, completes the awaiter.
    /// Otherwise classifies the outcome (subscribe rotation,
    /// subscribe push, subscribe failure, or just dropped).
    pub(crate) fn dispatch_rpc_response(&self, resp: RpcResponse<'_>) -> UnmatchedRpcOutcome {
        let entry = self.pending.lock().remove(&resp.idx);
        if let Some(p) = entry {
            let outcome: Result<Vec<u8>, RpcError> = match (resp.error, resp.payload) {
                (Some(err_bytes), _) => Err(decode_rpc_error(err_bytes)),
                (None, Some(buf))    => Ok(buf.to_vec()),
                (None, None)         => Ok(Vec::new()),
            };
            let _ = p.responder.send(outcome);
            // Matched a pending entry — no further classification.
            return UnmatchedRpcOutcome::Dropped { idx: resp.idx };
        }

        // No pending. Could be the subscribe-rotation case, a
        // subscribe push payload, a real subscribe failure, or
        // genuinely orphaned.
        let sub_idx = self.subscribe_idx.load(Ordering::Relaxed);
        if resp.idx == sub_idx {
            if is_expected_subscribe_rotation(resp.error, resp.payload) {
                return UnmatchedRpcOutcome::SubscribeRotation;
            }
            if let Some(payload) = resp.payload.filter(|_| resp.error.is_none()) {
                return UnmatchedRpcOutcome::SubscribePush(payload.to_vec());
            }
            if let Some(err_bytes) = resp.error {
                let e = decode_rpc_error(err_bytes);
                return UnmatchedRpcOutcome::SubscribeFailed { code: e.code, message: e.message };
            }
        }
        UnmatchedRpcOutcome::Dropped { idx: resp.idx }
    }

    /// Cancel every in-flight RPC with `RpcCallError::Canceled`.
    /// Called by `disconnect` so callers awaiting a response on a
    /// dropped WS get a prompt error instead of waiting for their
    /// 30 s timeout.
    pub(crate) fn drain_pending(&self) {
        let drained: Vec<PendingRpc> = self.pending.lock().drain().map(|(_, v)| v).collect();
        for p in drained {
            // Send a synthetic "canceled" — receiver maps it back
            // to the right enum via the closed-channel path in
            // rpc_call.
            drop(p.responder);
            let _ = (p.service, p.method);   // discard diagnostic fields
        }
    }

    pub(crate) fn set_subscribe_idx(&self, idx: i32) {
        self.subscribe_idx.store(idx, Ordering::Relaxed);
    }

    /// Test helper / run-loop helper: install the sender side of
    /// the outbound frame queue.
    pub(crate) fn install_sender(&self, sender: mpsc::UnboundedSender<Vec<u8>>) {
        *self.send_tx.lock() = Some(sender);
    }

    pub(crate) fn clear_sender(&self) {
        *self.send_tx.lock() = None;
    }

    // ── Listener fire ─────────────────────────────────────────
    //
    // Iterates the listener Vec under a short lock, clones the
    // Arcs out, then invokes each callback OUTSIDE the lock so a
    // misbehaving callback can't block other listeners (or the
    // run loop trying to add/remove subscriptions).

    pub(crate) fn fire_call_received(&self, call_id: i64, call: Option<CallEntity>) {
        let listeners = self.on_call_received.lock().clone();
        for cb in listeners {
            cb(call_id, call.clone());
        }
    }
    pub(crate) fn fire_call_ended(&self, call_id: i64, discard_reason: i32) {
        let listeners = self.on_call_ended.lock().clone();
        for cb in listeners { cb(call_id, discard_reason); }
    }
    pub(crate) fn fire_call_accepted(&self, call_id: i64) {
        let listeners = self.on_call_accepted.lock().clone();
        for cb in listeners { cb(call_id); }
    }
    pub(crate) fn fire_token_expired(&self) {
        let cb = self.on_token_expired.lock().clone();
        if let Some(cb) = cb { cb(); }
    }
    pub(crate) fn fire_version_mismatch(&self) {
        let cb = self.on_version_mism.lock().clone();
        if let Some(cb) = cb { cb(); }
    }

    pub(crate) fn set_ready(&self, ready: bool) {
        // Log the transition so the daemon-level "WS connected"
        // line isn't a one-shot at startup — every reconnect /
        // disconnect surfaces in the log too. This is the
        // single authoritative place ready flips, so logging
        // here captures every transition without scattering.
        let was = self.ready.swap(ready, Ordering::Relaxed);
        if was != ready {
            if ready { log::info!("WS: ready"); }
            else     { log::info!("WS: not ready"); }
        }
    }

    pub fn is_ready(&self) -> bool { self.ready.load(Ordering::Relaxed) }

    /// True while the run loop is spawned (active connect attempt
    /// or retry-backoff in flight) but the WS handshake hasn't
    /// completed yet. Equivalent to "showing Connecting… in the
    /// UI is honest" — distinct from [`Self::is_ready`] (handshake
    /// done) and from app-level connect intent (which is
    /// `has_token && !user_disconnect`).
    pub fn is_attempting_connect(&self) -> bool {
        self.running.load(Ordering::Relaxed) && !self.ready.load(Ordering::Relaxed)
    }

    // ── Rule-engine setters ───────────────────────────────────
    //
    // These are the *only* knobs that drive the WS lifecycle.
    // Setting any one of them re-evaluates the rule and spawns
    // or aborts the run loop as needed. Apps push inputs; the
    // library owns the decision.
    //
    // Rule (see `desired_up`):
    //   want = token.is_some()
    //       && !user_disconnect
    //       && match mode {
    //              Server => true,
    //              Client => foreground && !call_active,
    //          }

    /// Set or clear the access token. `None` = signed out; the
    /// rule will tear the WS down regardless of other inputs.
    pub fn set_token(self: &Arc<Self>, token: Option<String>) {
        let changed = {
            let mut slot = self.access_token.lock();
            let diff = match (&*slot, &token) {
                (Some(a), Some(b)) => a != b,
                (None, None)       => false,
                _                  => true,
            };
            *slot = token;
            diff
        };
        if changed { self.evaluate(); }
    }

    /// App in foreground. Client-mode only — Server ignores.
    pub fn set_foreground(self: &Arc<Self>, fg: bool) {
        if self.foreground.swap(fg, Ordering::Relaxed) != fg { self.evaluate(); }
    }

    /// LK call active. When `true`, the WS goes down in client
    /// mode (push channel unneeded mid-call). Set by the LK
    /// transport's lifecycle hook, not by app code.
    pub fn set_call_active(self: &Arc<Self>, active: bool) {
        if self.call_active.swap(active, Ordering::Relaxed) != active { self.evaluate(); }
    }

    /// User explicitly pressed "Disconnect" (or cleared it).
    /// Sticky in both modes — wins over `foreground`/`call_active`.
    pub fn set_user_disconnect(self: &Arc<Self>, disc: bool) {
        if self.user_disconnect.swap(disc, Ordering::Relaxed) != disc { self.evaluate(); }
    }

    /// Server foreground service running. When `true` the WS
    /// stays up regardless of foreground / call_active (server
    /// semantics: always-on modulo user_disconnect + token).
    /// When `false` the rule falls back to client semantics
    /// (gates on foreground + !call_active).
    ///
    /// A transition also clears `call_active`: the flag is
    /// scoped to the current "session" and a server↔client flip
    /// invalidates whatever the previous side was tracking.
    /// Without this, server-role LkTunnels that set
    /// `call_active=true` (harmless under server semantics)
    /// would leak into a subsequent client session and tear the
    /// WS down until async LK teardown clears it.
    pub fn set_server_active(self: &Arc<Self>, active: bool) {
        if self.server_active.swap(active, Ordering::Relaxed) != active {
            self.call_active.store(false, Ordering::Relaxed);
            self.evaluate();
        }
    }

    pub(crate) fn has_token(&self) -> bool { self.access_token.lock().is_some() }
    pub(crate) fn is_user_disconnected(&self) -> bool { self.user_disconnect.load(Ordering::Relaxed) }

    /// Returns `true` when current inputs say the WS should be up.
    /// Crate-private — apps observe via `is_ready`.
    pub(crate) fn desired_up(&self) -> bool {
        if !self.has_token() { return false; }
        if self.user_disconnect.load(Ordering::Relaxed) { return false; }
        if self.server_active.load(Ordering::Relaxed) { return true; }
        // Client semantics: WS up iff foregrounded AND no LK call.
        self.foreground.load(Ordering::Relaxed)
            && !self.call_active.load(Ordering::Relaxed)
    }

    /// Re-evaluate the rule and reconcile the run loop. Called
    /// after each setter mutation. Idempotent.
    ///
    /// Lock discipline: the rule input read (`desired_up`) and
    /// the act-on-rule both happen *inside* the
    /// `runloop_handle.lock()`. Without this, concurrent setters
    /// can interleave such that the latest input never wins —
    /// e.g., A reads `want=true`, B reads `want=false` + acts,
    /// then A acts on a stale `want=true` and spawns a loop the
    /// rule said shouldn't be there.
    ///
    /// Also reaps finished handles: when `run_loop` exits via
    /// a terminal condition (TokenExpired / VersionMismatch),
    /// the task ends but the `JoinHandle` sticks around in the
    /// slot. Without reaping here, a subsequent re-auth would
    /// see `(want=true, slot=Some)` and treat the dead loop as
    /// alive — no new loop spawns, WS stays down forever.
    fn evaluate(self: &Arc<Self>) {
        let mut slot = self.runloop_handle.lock();

        // Reap a finished handle so the next branch sees the
        // truth. `is_finished()` is the only reliable signal —
        // a terminal `run_loop` exit doesn't touch `running` or
        // the slot.
        if slot.as_ref().map_or(false, |h| h.is_finished()) {
            slot.take();
            self.running.store(false, Ordering::Relaxed);
            self.ready.store(false, Ordering::Relaxed);
        }

        let want  = self.desired_up();
        let alive = slot.is_some();
        match (want, alive) {
            (true, false) => {
                log::info!("WS: rule satisfied — bringing connection up");
                let token = self.access_token.lock().clone().unwrap_or_default();
                self.running.store(true, Ordering::Relaxed);
                let me = self.clone();
                let handle = tokio::spawn(async move { run_loop(me, token).await; });
                *slot = Some(handle);
            }
            (false, true) => {
                log::info!(
                    "WS: rule no longer satisfied — tearing connection down \
                     (call_active={} foreground={} server_active={} user_disconnect={})",
                    self.call_active.load(Ordering::Relaxed),
                    self.foreground.load(Ordering::Relaxed),
                    self.server_active.load(Ordering::Relaxed),
                    self.user_disconnect.load(Ordering::Relaxed),
                );
                self.running.store(false, Ordering::Relaxed);
                self.ready.store(false, Ordering::Relaxed);
                if let Some(h) = slot.take() { h.abort(); }
                drop(slot);
                self.clear_sender();
                self.drain_pending();
            }
            _ => {}
        }
    }

    pub fn add_on_call_received(&self, cb: CallReceivedCb) { self.on_call_received.lock().push(cb); }
    pub fn add_on_call_ended   (&self, cb: CallEndedCb)    { self.on_call_ended.lock().push(cb); }
    pub fn add_on_call_accepted(&self, cb: CallAcceptedCb) { self.on_call_accepted.lock().push(cb); }
    pub fn set_on_token_expired(&self, cb: Notifier)       { *self.on_token_expired.lock() = Some(cb); }
    pub fn set_on_version_mismatch(&self, cb: Notifier)    { *self.on_version_mism.lock()  = Some(cb); }

    // ── Bale RPC wrappers ─────────────────────────────────────

    /// `bale.meet.v1.Meet/StartCall` — caller-side dial. Returns
    /// the CallEntity (LK url + token + room) on success.
    pub async fn start_call(&self, peer_id: i32, peer_type: i32) -> Option<CallEntity> {
        let rid = now_millis();
        let peer = ProtoWriter::new()
            .int32(1, peer_type)
            .int32(2, peer_id)
            .build();
        let lk_call = ProtoWriter::new()
            .bytes(1, &peer)
            .int64(2, rid)
            .build();
        let payload = ProtoWriter::new()
            .bytes(1, &peer)
            .int64(2, rid)
            .bytes(6, &lk_call)
            .build();
        match self.rpc_call("bale.meet.v1.Meet", "StartCall", &payload).await {
            Ok(resp) => {
                let parsed = parse_call_response(&resp);
                if parsed.is_none() {
                    log::warn!("WS: StartCall reply parse returned None (resp_len={})", resp.len());
                }
                parsed
            }
            Err(e) => {
                log::warn!("WS: StartCall RPC failed: {e}");
                None
            }
        }
    }

    /// `bale.meet.v1.Meet/AcceptCall` — server-side accept. The
    /// returned CallEntity carries the LK creds needed to join.
    pub async fn accept_call(&self, call_id: i64) -> Option<CallEntity> {
        let payload = ProtoWriter::new().int64(1, call_id).build();
        let resp = self.rpc_call("bale.meet.v1.Meet", "AcceptCall", &payload).await.ok()?;
        parse_call_response(&resp)
    }

    /// `bale.meet.v1.Meet/DiscardCall` — reject / hang up.
    /// Fire-and-log; errors don't propagate because the typical
    /// failure mode is the call already being torn down by the
    /// other side.
    pub async fn discard_call(&self, call_id: i64) {
        let payload = ProtoWriter::new().int64(1, call_id).build();
        if let Err(e) = self.rpc_call("bale.meet.v1.Meet", "DiscardCall", &payload).await {
            log::debug!("discardCall({call_id}) failed: {e}");
        }
    }

    /// Resolve a user id to a display name via
    /// `bale.users.v1.Users/LoadUsers`. Caches positive AND
    /// negative results so a missing name doesn't trigger an RPC
    /// every time.
    pub async fn load_user_name(&self, uid: i32) -> Option<String> {
        if uid <= 0 { return None; }
        if let Some(cached) = self.name_cache.lock().get(&uid).cloned() {
            return cached;
        }

        let peer    = ProtoWriter::new().int32(1, uid).int64(2, 0).build();
        let payload = ProtoWriter::new().bytes(1, &peer).build();
        let resp    = self.rpc_call("bale.users.v1.Users", "LoadUsers", &payload).await;

        let name = match resp {
            Ok(bytes) => parse_load_users_first_name(&bytes),
            Err(e)    => { log::debug!("loadUserName({uid}): {e}"); None }
        };
        self.name_cache.lock().insert(uid, name.clone());
        name
    }

    /// Decode the `user_id` from the JWT we connected with, then
    /// resolve a display name via LoadUsers (same RPC as
    /// `load_user_name` but for self). `self` is populated
    /// whenever the JWT decodes — even if LoadUsers fails — so
    /// the UI can fall back to "User #<id>". Returns `None` only
    /// when the JWT itself can't be parsed.
    pub async fn load_self(&self) -> Option<SelfInfo> {
        let token = self.access_token.lock().clone()?;
        let uid   = decode_jwt_user_id(&token)?;

        let peer    = ProtoWriter::new().int32(1, uid).int64(2, 0).build();
        let payload = ProtoWriter::new().bytes(1, &peer).build();
        let name = match self.rpc_call("bale.users.v1.Users", "LoadUsers", &payload).await {
            Ok(bytes) => parse_load_users_first_name(&bytes),
            Err(e)    => { log::debug!("loadSelf: {e}"); None }
        };

        let info = SelfInfo { uid, name };
        *self.self_info.lock() = Some(info.clone());
        Some(info)
    }

    pub fn cached_self(&self) -> Option<SelfInfo> { self.self_info.lock().clone() }
    pub fn cached_name(&self, uid: i32) -> Option<String> {
        self.name_cache.lock().get(&uid).cloned().flatten()
    }

    /// Bulk-populate the name cache. Used by `BaleSignaling`'s
    /// contact-list load path so sync `peer_display_name`
    /// lookups hit immediately after the list comes back,
    /// avoiding O(N) per-row LoadUsers RPCs from the UI.
    pub fn populate_names<I>(&self, entries: I)
    where I: IntoIterator<Item = (i32, Option<String>)> {
        let mut cache = self.name_cache.lock();
        for (uid, name) in entries {
            if uid <= 0 { continue; }
            cache.insert(uid, name);
        }
    }
}

// ─── User-entity parsing (for LoadUsers / load_self / load_user_name) ──

/// Pull the first `UserEntity`'s display name out of a LoadUsers
/// response. Bale returns `{ 1 = repeated UserEntity }`. We
/// prefer the canonical `name` (field 3) and fall back to the
/// `@-handle` nick (field 9, wrapped string).
pub(crate) fn parse_load_users_first_name(buf: &[u8]) -> Option<String> {
    let mut r = ProtoReader::new(buf);
    while r.has_more() {
        match r.tag() {
            Ok((1, _)) => {
                let entity = r.bytes().ok()?;
                return parse_user_entity_name(entity);
            }
            Ok((_, w)) => if r.skip(w).is_err() { return None; },
            Err(_)     => return None,
        }
    }
    None
}

/// `UserEntity` name extraction. Field map:
///   3 = name string
///   9 = nick (wrapped string)
fn parse_user_entity_name(buf: &[u8]) -> Option<String> {
    let mut r = ProtoReader::new(buf);
    let mut name = String::new();
    let mut nick = String::new();
    while r.has_more() {
        match r.tag() {
            Ok((3, _)) => name = r.string().unwrap_or("").to_string(),
            Ok((9, _)) => {
                let inner = r.bytes().ok()?;
                let mut ir = ProtoReader::new(inner);
                while ir.has_more() {
                    match ir.tag() {
                        Ok((1, _)) => nick = ir.string().unwrap_or("").to_string(),
                        Ok((_, w)) => if ir.skip(w).is_err() { break; },
                        Err(_)     => break,
                    }
                }
            }
            Ok((_, w)) => if r.skip(w).is_err() { break; },
            Err(_)     => break,
        }
    }
    let chosen = if !name.is_empty() { name } else if !nick.is_empty() { nick } else { return None; };
    Some(chosen)
}

// ─── Protocol-handling functions ────────────────────────────────────────
//
// Pure functions taking `&WsClient` + a frame body. Used by the
// run loop (chunk 3) to dispatch each top-level frame. Testable
// in isolation — no WebSocket needed.

/// What `handle_handshake_body` reports back to the run loop.
/// Distinguishes "normal handshake completed, continue" from
/// "version mismatch — fire the callback and close".
#[derive(Debug, PartialEq, Eq)]
pub(crate) enum HandshakeResult {
    Ok,
    VersionMismatch { proto_version: i32, api_version: i64 },
}

/// Frame `f=5`. Parse the body, compare versions, flip `ready`.
/// Run loop kicks off the SetOnline keepalive + initial
/// `SubscribeToUpdates` only on `HandshakeResult::Ok`.
pub(crate) fn handle_handshake_body(ws: &WsClient, body: &[u8]) -> HandshakeResult {
    let parsed = match decode_handshake(body) {
        Ok(p)  => p,
        Err(_) => return HandshakeResult::Ok,    // best-effort; treat malformed as OK to keep going
    };
    if parsed.proto_version != PROTO_VERSION || parsed.api_version != API_VERSION {
        return HandshakeResult::VersionMismatch {
            proto_version: parsed.proto_version,
            api_version:   parsed.api_version,
        };
    }
    ws.set_ready(true);
    log::info!("WS: connected (handshake ok)");
    HandshakeResult::Ok
}

/// Frame `f=1` — RPC response or push payload. Reads the envelope
/// (`{1=err, 2=payload, 3=idx}`), then either fulfils the matching
/// pending RPC awaiter or classifies as one of the
/// [`UnmatchedRpcOutcome`] variants for the run loop to act on
/// (re-subscribe, log, etc.). For
/// [`UnmatchedRpcOutcome::SubscribePush`] the run loop should
/// forward the payload through [`handle_update_body`].
pub(crate) fn handle_rpc_frame(ws: &WsClient, body: &[u8]) -> Result<UnmatchedRpcOutcome, ProtoError> {
    let resp = decode_rpc_response(body)?;
    Ok(ws.dispatch_rpc_response(resp))
}

/// Frame `f=2` — push update container. Wraps a single
/// `SubscribeResponse` at field 1.
pub(crate) fn handle_push_container(ws: &WsClient, body: &[u8]) -> Result<(), ProtoError> {
    let mut r = ProtoReader::new(body);
    while r.has_more() {
        let (f, w) = r.tag()?;
        if f == 1 {
            let inner = r.bytes()?;
            handle_update_body(ws, inner)?;
        } else {
            r.skip(w)?;
        }
    }
    Ok(())
}

/// `SubscribeResponse` schema (verified against Bale's web
/// bundle):
///   1 = update (the `xC` union)
///   2 = routeId         (int32, internal routing)
///   3 = sequence        (int32)
///   4 = timestamp       (int64 ms)
///   5 = weakEvent       (idle heartbeat; we drop silently)
///   6 = mtupdate        (logged-only by Kotlin; same here)
///   7 = updates         (batch; logged-only by Kotlin)
pub(crate) fn handle_update_body(ws: &WsClient, body: &[u8]) -> Result<(), ProtoError> {
    let mut r = ProtoReader::new(body);
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            1 => {
                let xc = r.bytes()?;
                dispatch_xc(ws, xc)?;
            }
            2 | 3 | 4 | 5 => r.skip(w)?,
            6 | 7         => {
                let _ = r.bytes()?;   // mtupdate / updates batch — currently log-only
            }
            _ => r.skip(w)?,
        }
    }
    Ok(())
}

/// xC union dispatch. Fires the matching listener for each
/// recognised call event tag; silently skips chat-housekeeping
/// events (messageRead / messageReadByMe / newMessage /
/// emptyUpdate — fields 19, 50, 55, 85) that the proxy doesn't
/// act on.
pub(crate) fn dispatch_xc(ws: &WsClient, body: &[u8]) -> Result<(), ProtoError> {
    let mut r = ProtoReader::new(body);
    while r.has_more() {
        let (f, w) = r.tag()?;
        match f {
            XC_CALL_STARTED => {
                let raw  = r.bytes()?;
                let call = parse_call_response(raw);
                let id   = call.as_ref().map(|c| c.call_id).unwrap_or(0);
                ws.fire_call_received(id, call);
            }
            XC_CALL_ACCEPTED => {
                let raw = r.bytes()?;
                if let Some(c) = parse_call_response(raw) {
                    ws.fire_call_accepted(c.call_id);
                }
            }
            XC_CALL_ENDED => {
                let raw    = r.bytes()?;
                let entity = parse_call_ended(raw);
                let call_id = entity.as_ref().map(|c| c.call_id)
                    .unwrap_or_else(|| parse_call_id(raw));
                let discard_reason = entity.as_ref().map(|c| c.discard_reason).unwrap_or(0);
                if call_id != 0 {
                    ws.fire_call_ended(call_id, discard_reason);
                }
            }
            XC_CALL_RECEIVED => {
                let raw = r.bytes()?;
                let (call_id, caller_id) = parse_call_received(raw);
                if call_id != 0 {
                    // Build a stub CallEntity with just the caller
                    // id so the listener sees something useful even
                    // if the paired callStarted update hasn't
                    // arrived yet.
                    let stub = if caller_id != 0 {
                        Some(CallEntity { call_id, caller_id, ..Default::default() })
                    } else { None };
                    ws.fire_call_received(call_id, stub);
                }
            }
            19 | 50 | 55 | 85 => r.skip(w)?,    // chat housekeeping — silent
            _                 => r.skip(w)?,    // unknown — also silent for now
        }
    }
    Ok(())
}

// ─── Run loop ───────────────────────────────────────────────────────────
//
// Connect → handshake → subscribe → dispatch frames → reconnect.
// Liveness ping + SetOnline keepalive land in a follow-up turn;
// the basic shape here is enough to bring the WS up and keep RPCs
// flowing.

#[derive(Debug, PartialEq, Eq)]
enum SessionOutcome {
    /// Lost the connection for whatever reason (network drop,
    /// server close without a known code). Reconnect after
    /// backoff.
    Disconnected,
    /// Token rejected — `4401` close code, or `401` / `403` on
    /// upgrade. Fire `on_token_expired` and stop reconnecting.
    TokenExpired,
    /// Server proto/api version disagreed with this build. Fire
    /// `on_protocol_obsolete` and stop.
    VersionMismatch,
}

/// Build the upgrade request with the headers Bale expects. The
/// `Sec-WebSocket-*` headers are added by tungstenite's
/// `IntoClientRequest` impl on `http::Request<()>`.
fn build_upgrade_request(token: &str) -> tungstenite::http::Request<()> {
    tungstenite::http::Request::builder()
        .method("GET")
        .uri(format!("wss://{WS_HOST}{WS_PATH}"))
        .header("Host",       WS_HOST)
        .header("Cookie",     format!("access_token={token}"))
        .header("Origin",     "https://web.bale.ai")
        .header("User-Agent", "Mozilla/5.0")
        .header("Upgrade",    "websocket")
        .header("Connection", "upgrade")
        .header("Sec-WebSocket-Version", "13")
        .header("Sec-WebSocket-Key", tungstenite::handshake::client::generate_key())
        .body(())
        .expect("upgrade request shape is static")
}

/// Outer loop: connect, run a session, reconnect with backoff.
/// Terminal outcomes (TokenExpired / VersionMismatch) fire their
/// callback and break.
async fn run_loop(ws: Arc<WsClient>, access_token: String) {
    let mut attempt: u32 = 0;
    while ws.running.load(Ordering::Relaxed) {
        let outcome = attempt_session(&ws, &access_token).await;

        let was_ready = ws.is_ready();
        ws.set_ready(false);
        ws.clear_sender();
        ws.drain_pending();
        if was_ready {
            log::info!("WS: disconnected");
        }

        match outcome {
            SessionOutcome::TokenExpired => {
                log::warn!("WS: token expired — stopping reconnect loop");
                ws.fire_token_expired();
                break;
            }
            SessionOutcome::VersionMismatch => {
                log::warn!("WS: server proto/api version mismatch — stopping reconnect loop");
                ws.fire_version_mismatch();
                break;
            }
            SessionOutcome::Disconnected => {}
        }

        if !ws.running.load(Ordering::Relaxed) { break; }

        // 3 s → 30 s exponential backoff. Reset to 0 on
        // successful handshake (see `attempt_session`).
        let shift     = attempt.min(4);
        let delay_sec = (3u64 << shift).min(30);
        attempt = attempt.saturating_add(1);
        log::info!("WS reconnecting in {delay_sec}s (attempt {attempt})");
        tokio::time::sleep(Duration::from_secs(delay_sec)).await;
    }
    log::info!("WS run loop exiting");
}

/// One connection attempt. Connects, sends handshake, reads
/// frames until the server closes or a terminal condition fires.
async fn attempt_session(ws: &Arc<WsClient>, token: &str) -> SessionOutcome {
    let request = build_upgrade_request(token);
    let (ws_stream, _resp) = match connect_async(request).await {
        Ok(s)  => s,
        Err(tungstenite::Error::Http(resp))
                if matches!(resp.status().as_u16(), 401 | 403) => {
            log::warn!("WS upgrade rejected {} — token expired", resp.status());
            return SessionOutcome::TokenExpired;
        }
        Err(e) => {
            log::warn!("WS connect failed: {e}");
            return SessionOutcome::Disconnected;
        }
    };

    let (mut sink, mut stream) = ws_stream.split();
    let (out_tx, mut out_rx) = mpsc::unbounded_channel::<Vec<u8>>();
    ws.install_sender(out_tx.clone());
    ws.subscribe_backoff_ms.store(0, Ordering::Relaxed);
    ws.last_inbound_ts.store(now_millis(), Ordering::Relaxed);

    // Shared shutdown signal — the liveness task fires it when
    // it detects a zombie connection (30 s inbound silence).
    let shutdown = Arc::new(tokio::sync::Notify::new());

    // Send the handshake immediately. The reader will see the
    // server's matching `f=5` and flip `ready` in
    // `handle_handshake_body`.
    let _ = out_tx.send(encode_handshake());

    // Writer task. Drains the outbound queue onto the WS sink;
    // exits when the queue closes or the sink errors.
    let writer = tokio::spawn(async move {
        let mut reason = "queue closed";
        while let Some(bytes) = out_rx.recv().await {
            let msg = tungstenite::Message::Binary(bytes.into());
            if let Err(e) = sink.send(msg).await {
                log::warn!("WS writer: sink.send failed: {e}");
                reason = "sink error";
                break;
            }
        }
        log::info!("WS writer: exiting ({reason})");
        let _ = sink.close().await;
    });

    // Liveness task. Mirrors the Kotlin 10 s tick: every 10 s,
    // check inbound idle time. > 30 s → zombie, signal shutdown;
    // > 15 s → log a warning and send a ping; otherwise quiet.
    let liveness = {
        let ws       = ws.clone();
        let out_tx   = out_tx.clone();
        let shutdown = shutdown.clone();
        tokio::spawn(async move {
            loop {
                tokio::time::sleep(Duration::from_secs(10)).await;
                let now  = now_millis();
                let last = ws.last_inbound_ts.load(Ordering::Relaxed);
                let idle = now.saturating_sub(last);
                if idle > 30_000 {
                    log::warn!("WS idle {idle}ms — closing zombie connection");
                    shutdown.notify_one();
                    break;
                }
                if idle > 15_000 {
                    log::warn!("WS idle {idle}ms — sending ping (close threshold 30s)");
                }
                let idx = ws.ping_counter.fetch_add(1, Ordering::Relaxed);
                if out_tx.send(encode_ping(idx)).is_err() { break; }
            }
        })
    };

    // SetOnline keepalive. Bale marks the user offline 90 s after
    // the last keepalive; this task runs the
    // `bale.presence.v1.Presence/SetOnline(isOnline=true,
    // timeout=90000)` RPC at the same cadence. Fire-and-forget per
    // tick — a slow / failed reply doesn't delay the next one.
    let set_online = {
        let ws = ws.clone();
        tokio::spawn(async move {
            loop {
                // Only run once the handshake is done.
                if !ws.is_ready() {
                    tokio::time::sleep(Duration::from_millis(200)).await;
                    continue;
                }
                let payload = ProtoWriter::new()
                    .int32(1, 1)
                    .int64(2, 90_000)
                    .build();
                let ws_call = ws.clone();
                tokio::spawn(async move {
                    if let Err(e) = ws_call.rpc_call(
                        "bale.presence.v1.Presence", "SetOnline", &payload,
                    ).await {
                        log::warn!("SetOnline failed: {e}");
                    }
                });
                tokio::time::sleep(Duration::from_secs(90)).await;
            }
        })
    };

    // Abort the writer / liveness / set_online tasks when this
    // function's future is dropped — covers the run-loop *abort* the
    // rule engine uses to pause the WS for a call (the tail cleanup
    // only runs on a normal reader-loop exit). Without it the writer
    // (WS sink) and liveness (pinger) outlive the abort and keep the
    // socket connected.
    let _guards = [AbortOnDrop(writer), AbortOnDrop(liveness), AbortOnDrop(set_online)];

    // Reader inline. Returns once the WS closes or hits a
    // terminal condition (version mismatch, 4401 close, zombie
    // shutdown).
    let mut outcome = SessionOutcome::Disconnected;
    let mut version_mismatch_seen = false;

    loop {
        let msg_result = tokio::select! {
            _ = shutdown.notified() => break,
            msg = stream.next() => match msg {
                Some(m) => m,
                None    => break,
            },
        };
        let bytes = match msg_result {
            Ok(tungstenite::Message::Binary(b)) => b,
            Ok(tungstenite::Message::Close(close)) => {
                if let Some(cf) = close {
                    if u16::from(cf.code) == 4401 {
                        outcome = SessionOutcome::TokenExpired;
                    } else {
                        log::info!("WS closed: code={} reason={}",
                            u16::from(cf.code), cf.reason);
                    }
                }
                break;
            }
            Ok(_) => continue,
            Err(e) => {
                log::warn!("WS read error: {e}");
                break;
            }
        };

        // Reset liveness timer on every inbound message.
        ws.last_inbound_ts.store(now_millis(), Ordering::Relaxed);

        // Walk the inbound message — it may contain multiple
        // top-level frames concatenated.
        let mut r = ProtoReader::new(&bytes);
        while r.has_more() {
            let frame = match decode_server_frame(&mut r) {
                Ok(f)  => f,
                Err(e) => {
                    log::warn!("WS frame parse failed: {e}");
                    break;
                }
            };
            match frame {
                ServerFrame::Handshake(body) => {
                    match handle_handshake_body(ws, body) {
                        HandshakeResult::Ok => {
                            // Subscribe to updates. The
                            // SubscribeToUpdates RPC's response
                            // doesn't go through `pending` — it's
                            // dispatched via the subscribe_idx
                            // path on every push.
                            let idx = ws.rpc_idx.fetch_add(1, Ordering::Relaxed);
                            ws.set_subscribe_idx(idx);
                            let _ = out_tx.send(encode_rpc(
                                "bale.maviz.v1.MavizStream",
                                "SubscribeToUpdates",
                                &[],
                                idx,
                            ));
                            // Kick off load_self in the background
                            // — populates `cached_self` so the UI's
                            // "Signed in as X" can resolve without
                            // blocking the handshake. Mirrors the
                            // Kotlin `loadSelf()` launched after
                            // handshake.
                            let ws_self = ws.clone();
                            tokio::spawn(async move {
                                let _ = ws_self.load_self().await;
                            });
                        }
                        HandshakeResult::VersionMismatch { proto_version, api_version } => {
                            log::warn!(
                                "WS version mismatch: server proto={proto_version} \
                                 api={api_version}, expected proto={PROTO_VERSION} \
                                 api={API_VERSION}");
                            version_mismatch_seen = true;
                        }
                    }
                }
                ServerFrame::RpcOrPush(body) => {
                    if let Ok(unmatched) = handle_rpc_frame(ws, body) {
                        match unmatched {
                            UnmatchedRpcOutcome::SubscribeRotation => {
                                // Routine 30 s `code=4` rotation —
                                // re-subscribe silently.
                                let idx = ws.rpc_idx.fetch_add(1, Ordering::Relaxed);
                                ws.set_subscribe_idx(idx);
                                let _ = out_tx.send(encode_rpc(
                                    "bale.maviz.v1.MavizStream",
                                    "SubscribeToUpdates",
                                    &[],
                                    idx,
                                ));
                            }
                            UnmatchedRpcOutcome::SubscribePush(payload) => {
                                // A real push payload arrived —
                                // the subscribe is healthy.
                                // Reset backoff so the next genuine
                                // failure starts at 1 s again.
                                ws.subscribe_backoff_ms.store(0, Ordering::Relaxed);
                                let _ = handle_update_body(ws, &payload);
                            }
                            UnmatchedRpcOutcome::SubscribeFailed { code, message } => {
                                // First failure: 1 s; then double up to 30 s.
                                let prev = ws.subscribe_backoff_ms.load(Ordering::Relaxed);
                                let next = if prev == 0 { 1_000 } else { prev.saturating_mul(2).min(30_000) };
                                ws.subscribe_backoff_ms.store(next, Ordering::Relaxed);
                                log::warn!("WS subscribe stream failed: code={code} msg={message} — re-subscribing in {next}ms");
                                let ws_resub = ws.clone();
                                let out_tx   = out_tx.clone();
                                tokio::spawn(async move {
                                    tokio::time::sleep(Duration::from_millis(next)).await;
                                    let idx = ws_resub.rpc_idx.fetch_add(1, Ordering::Relaxed);
                                    ws_resub.set_subscribe_idx(idx);
                                    let _ = out_tx.send(encode_rpc(
                                        "bale.maviz.v1.MavizStream",
                                        "SubscribeToUpdates",
                                        &[],
                                        idx,
                                    ));
                                });
                            }
                            UnmatchedRpcOutcome::Dropped { .. } => {}
                        }
                    }
                }
                ServerFrame::PushContainer(body) => {
                    let _ = handle_push_container(ws, body);
                }
                ServerFrame::Pong(_) => {}
                ServerFrame::Terminate(_) => {
                    log::warn!("WS terminate frame received");
                }
                ServerFrame::Other { field, .. } => {
                    log::debug!("WS unknown top-level frame field={field}");
                }
            }
        }

        if version_mismatch_seen {
            outcome = SessionOutcome::VersionMismatch;
            break;
        }
    }

    outcome
}

/// Aborts the wrapped task when dropped. The per-connection child
/// tasks (writer / liveness / set_online) must die when
/// `attempt_session`'s future is dropped — including when the rule
/// engine *aborts* the run loop to pause the WS for a call. A plain
/// `JoinHandle` drop only detaches, so without this guard that abort
/// orphans the writer (which owns the WS sink) and the liveness task
/// (which keeps pinging), leaving the socket connected while the UI
/// shows the WS paused.
struct AbortOnDrop(tokio::task::JoinHandle<()>);
impl Drop for AbortOnDrop {
    fn drop(&mut self) { self.0.abort(); }
}

/// Wall-clock ms since the Unix epoch. Returns 0 on the
/// theoretical case where the system clock is set before 1970.
fn now_millis() -> i64 {
    use std::time::{SystemTime, UNIX_EPOCH};
    SystemTime::now().duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis() as i64)
        .unwrap_or(0)
}

// ─── Tests ──────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;

    // ── encoders ──────────────────────────────────────────────

    #[test]
    fn encode_handshake_shape() {
        let buf = encode_handshake();
        // Outer: f3, wire=2 → tag = (3<<3)|2 = 0x1A
        assert_eq!(buf[0], 0x1A);
        // Inner length followed by { f1 varint = 1, f2 varint = 151668 }
        let mut r = ProtoReader::new(&buf);
        let (f, w) = r.tag().unwrap();
        assert_eq!((f, w), (3, 2));
        let inner = r.bytes().unwrap();
        let parsed = decode_handshake(inner).unwrap();
        assert_eq!(parsed, HandshakeBody {
            proto_version: PROTO_VERSION,
            api_version:   API_VERSION,
        });
    }

    #[test]
    fn encode_ping_shape() {
        let buf = encode_ping(7);
        let mut r = ProtoReader::new(&buf);
        let (f, _) = r.tag().unwrap();
        assert_eq!(f, 2);
        let inner = r.bytes().unwrap();
        let mut ir = ProtoReader::new(inner);
        let (f, _) = ir.tag().unwrap();
        assert_eq!(f, 1);
        assert_eq!(ir.varint().unwrap(), 7);
    }

    #[test]
    fn encode_rpc_round_trips_through_envelope() {
        let payload = b"\x08\x05".as_slice();   // some random body
        let buf = encode_rpc("svc", "Method", payload, 42);
        // Outer f1 length-delimited
        let mut r = ProtoReader::new(&buf);
        let (f, _) = r.tag().unwrap();
        assert_eq!(f, 1);
        let inner = r.bytes().unwrap();
        let mut ir = ProtoReader::new(inner);

        let mut svc = String::new();
        let mut mth = String::new();
        let mut body: Vec<u8> = Vec::new();
        let mut idx = 0i64;
        while ir.has_more() {
            let (f, _) = ir.tag().unwrap();
            match f {
                1 => svc  = ir.string().unwrap().to_string(),
                2 => mth  = ir.string().unwrap().to_string(),
                3 => body = ir.bytes().unwrap().to_vec(),
                5 => idx  = ir.varint().unwrap() as i64,
                _ => panic!("unexpected field {f}"),
            }
        }
        assert_eq!(svc, "svc");
        assert_eq!(mth, "Method");
        assert_eq!(body, payload);
        assert_eq!(idx,  42);
    }

    // ── frame routing ─────────────────────────────────────────

    #[test]
    fn decode_server_frame_dispatches_each_field() {
        // Build a fake stream of (f, body) pairs with body = ascii markers
        let frames = [
            (1u32, b"rpc".as_slice()),
            (2u32, b"push".as_slice()),
            (3u32, b"term".as_slice()),
            (4u32, b"pong".as_slice()),
            (5u32, b"hs".as_slice()),
        ];
        let mut stream = ProtoWriter::new();
        for (f, body) in frames {
            stream = stream.bytes(f, body);
        }
        let buf = stream.build();
        let mut r = ProtoReader::new(&buf);

        assert_eq!(decode_server_frame(&mut r).unwrap(), ServerFrame::RpcOrPush(b"rpc"));
        assert_eq!(decode_server_frame(&mut r).unwrap(), ServerFrame::PushContainer(b"push"));
        assert_eq!(decode_server_frame(&mut r).unwrap(), ServerFrame::Terminate(b"term"));
        assert_eq!(decode_server_frame(&mut r).unwrap(), ServerFrame::Pong(b"pong"));
        assert_eq!(decode_server_frame(&mut r).unwrap(), ServerFrame::Handshake(b"hs"));
        assert!(!r.has_more());
    }

    // ── RPC response envelope ─────────────────────────────────

    #[test]
    fn decode_rpc_response_success() {
        let buf = ProtoWriter::new()
            .bytes(2, b"hello")
            .int32(3, 5)
            .build();
        let r = decode_rpc_response(&buf).unwrap();
        assert_eq!(r.idx, 5);
        assert_eq!(r.payload, Some(b"hello".as_slice()));
        assert!(r.error.is_none());
    }

    #[test]
    fn decode_rpc_response_error() {
        let err = ProtoWriter::new().int32(1, 13).string(2, "BOOM").build();
        let buf = ProtoWriter::new().bytes(1, &err).int32(3, 7).build();
        let r = decode_rpc_response(&buf).unwrap();
        assert_eq!(r.idx, 7);
        assert_eq!(r.error, Some(err.as_slice()));
        assert!(r.payload.is_none());

        let decoded = decode_rpc_error(r.error.unwrap());
        assert_eq!(decoded.code, 13);
        assert_eq!(decoded.message, "BOOM");
    }

    #[test]
    fn subscribe_rotation_recognised_for_code_4() {
        let err = ProtoWriter::new().int32(1, 4).build();
        assert!(is_expected_subscribe_rotation(Some(&err), None));
    }

    #[test]
    fn subscribe_rotation_recognised_for_code_2_with_eof_message() {
        let err = ProtoWriter::new().int32(1, 2).string(2, "stream want <EOF>").build();
        assert!(is_expected_subscribe_rotation(Some(&err), None));
    }

    #[test]
    fn subscribe_rotation_recognised_for_code_13_cardinality_violation() {
        let err = ProtoWriter::new()
            .int32(1, 13)
            .string(2, "cardinality violation: expected <EOF> for non server-streaming RPCs, but received another message")
            .build();
        assert!(is_expected_subscribe_rotation(Some(&err), None));
    }

    #[test]
    fn subscribe_rotation_rejected_for_real_code_13() {
        // code=13 with a non-cardinality message stays a real failure.
        let err = ProtoWriter::new().int32(1, 13).string(2, "internal server error").build();
        assert!(!is_expected_subscribe_rotation(Some(&err), None));
    }

    #[test]
    fn subscribe_rotation_rejected_for_real_failure() {
        let err = ProtoWriter::new().int32(1, 14).string(2, "no children to pick from").build();
        assert!(!is_expected_subscribe_rotation(Some(&err), None));
    }

    #[test]
    fn subscribe_rotation_rejected_when_payload_present() {
        let err = ProtoWriter::new().int32(1, 4).build();
        assert!(!is_expected_subscribe_rotation(Some(&err), Some(b"")));
    }

    // ── CallEntity parsing ────────────────────────────────────

    #[test]
    fn parse_call_entity_full_shape() {
        let url_wrapped = ProtoWriter::new().string(1, "wss://lk.bale.ai/room").build();
        let buf = ProtoWriter::new()
            .int64 (1,  123)
            .string(2,  "lk-token")
            .string(3,  "room-name")
            .bytes (4,  &url_wrapped)
            .int32 (5,  0)              // video = false
            .int64 (6,  1_000_000)
            .int64 (7,  1_000_500)
            .int64 (8,  4242)           // caller_id (adminUid)
            .int32 (10, 30)
            .int32 (11, 0)
            .int32 (12, 1)              // is_livekit = true
            .build();
        let c = parse_call_entity(&buf);
        assert_eq!(c.call_id,    123);
        assert_eq!(c.token,      "lk-token");
        assert_eq!(c.room,       "room-name");
        assert_eq!(c.url,        "wss://lk.bale.ai/room");
        assert_eq!(c.caller_id,  4242);
        assert_eq!(c.duration,   30);
        assert!(c.is_livekit);
        assert!(!c.video);
    }

    #[test]
    fn parse_call_response_prefers_inner_caller_id() {
        let entity = ProtoWriter::new().int64(1, 7).int64(8, 9999).build();
        let other  = ProtoWriter::new().int64(8, 1000).build();
        let buf    = ProtoWriter::new()
            .bytes(1, &entity)
            .bytes(2, &other)        // would parse as outer participant
            .build();
        let c = parse_call_response(&buf).unwrap();
        assert_eq!(c.caller_id, 9999);
    }

    #[test]
    fn parse_call_response_falls_back_to_outer_participant() {
        let entity = ProtoWriter::new().int64(1, 7).build();          // no caller_id inside
        let participant = ProtoWriter::new().int64(8, 5555).build();  // varint in range
        let buf = ProtoWriter::new()
            .bytes(1, &entity)
            .bytes(2, &participant)
            .build();
        let c = parse_call_response(&buf).unwrap();
        assert_eq!(c.caller_id, 5555);
    }

    #[test]
    fn parse_participant_id_filters_peer_type_and_access_hash() {
        // peer_type=1 (too small), access_hash=very large, uid=300
        let buf = ProtoWriter::new()
            .int64(1, 1)                       // skipped: < 100
            .int64(2, 0x1234_5678_9ABC_DEF0)   // skipped: > i32::MAX
            .int64(3, 300)                     // kept
            .build();
        assert_eq!(parse_participant_id(&buf), 300);
    }

    #[test]
    fn parse_call_id_handles_bare_varint() {
        let buf = ProtoWriter::new().int64(1, 9876).build();
        assert_eq!(parse_call_id(&buf), 9876);
    }

    #[test]
    fn parse_call_id_handles_wrapped_entity() {
        let inner = ProtoWriter::new().int64(1, 42).build();
        let buf   = ProtoWriter::new().bytes(1, &inner).build();
        assert_eq!(parse_call_id(&buf), 42);
    }

    #[test]
    fn parse_call_ended_pulls_full_entity() {
        let entity = ProtoWriter::new()
            .int64(1, 99)
            .int32(11, 5)                       // discard_reason
            .build();
        let buf = ProtoWriter::new().bytes(1, &entity).build();
        let c = parse_call_ended(&buf).unwrap();
        assert_eq!(c.call_id, 99);
        assert_eq!(c.discard_reason, 5);
    }

    #[test]
    fn parse_call_received_returns_pair() {
        let participant = ProtoWriter::new().int64(8, 7777).build();
        let buf = ProtoWriter::new()
            .int64(1, 42)
            .bytes(2, &participant)
            .build();
        let (call_id, caller_id) = parse_call_received(&buf);
        assert_eq!(call_id,   42);
        assert_eq!(caller_id, 7777);
    }

    // ── JWT ───────────────────────────────────────────────────

    #[test]
    fn decode_jwt_user_id_basic() {
        // Build a minimal JWT: header.payload.signature, all
        // base64url-encoded. Payload contains a user_id field.
        let header_b64  = b64url_encode(b"{\"alg\":\"none\"}");
        let payload_b64 = b64url_encode(b"{\"user_id\":987654321,\"foo\":\"bar\"}");
        let jwt = format!("{header_b64}.{payload_b64}.sig");
        assert_eq!(decode_jwt_user_id(&jwt), Some(987654321));
    }

    #[test]
    fn decode_jwt_user_id_nested_payload() {
        // Bale sometimes nests under "payload": { ... }. The
        // regex pluck still finds "user_id" anywhere in the JSON.
        let payload_b64 = b64url_encode(
            b"{\"payload\":{\"user_id\":42,\"name\":\"x\"}}",
        );
        let jwt = format!("hdr.{payload_b64}.sig");
        assert_eq!(decode_jwt_user_id(&jwt), Some(42));
    }

    #[test]
    fn decode_jwt_user_id_missing_returns_none() {
        let payload_b64 = b64url_encode(b"{\"name\":\"no-uid\"}");
        let jwt = format!("hdr.{payload_b64}.sig");
        assert_eq!(decode_jwt_user_id(&jwt), None);
    }

    #[test]
    fn decode_jwt_user_id_malformed_jwt_returns_none() {
        assert_eq!(decode_jwt_user_id("not-a-jwt"), None);
        assert_eq!(decode_jwt_user_id(""),           None);
    }

    // ── rpc_call ──────────────────────────────────────────────

    #[tokio::test]
    async fn rpc_call_returns_not_connected_when_sender_absent() {
        let ws = WsClient::new();
        let err = ws.rpc_call("svc", "Method", &[]).await.unwrap_err();
        assert!(matches!(err, RpcCallError::NotConnected));
        // Pending must be empty after the failure path.
        assert!(ws.pending.lock().is_empty());
    }

    #[tokio::test]
    async fn rpc_call_completes_when_dispatch_fires_response() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let ws_inner = ws.clone();
        let h = tokio::spawn(async move {
            ws_inner.rpc_call("svc", "Method", b"\x01\x02").await
        });

        // The first frame on the wire should be our outgoing
        // RPC envelope.
        let outgoing = rx.recv().await.expect("rpc_call should have sent");
        // Pull the idx back out of the frame so we can build a
        // matching response.
        let mut r = ProtoReader::new(&outgoing);
        let (_, _) = r.tag().unwrap();
        let inner = r.bytes().unwrap();
        let mut ir = ProtoReader::new(inner);
        let mut idx = 0i32;
        while ir.has_more() {
            let (f, _) = ir.tag().unwrap();
            match f {
                1 | 2 => { let _ = ir.string().unwrap(); }
                3     => { let _ = ir.bytes().unwrap(); }
                5     => { idx = ir.varint().unwrap() as i32; }
                _     => panic!("unexpected field"),
            }
        }

        // Now dispatch a "success" response for the same idx.
        let resp = RpcResponse {
            idx,
            error:   None,
            payload: Some(b"reply".as_slice()),
        };
        ws.dispatch_rpc_response(resp);

        let result = h.await.unwrap();
        assert_eq!(result.unwrap(), b"reply".to_vec());
        // No pending entries linger after success.
        assert!(ws.pending.lock().is_empty());
    }

    #[tokio::test]
    async fn rpc_call_propagates_rpc_error() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let ws_inner = ws.clone();
        let h = tokio::spawn(async move {
            ws_inner.rpc_call("svc", "Method", &[]).await
        });

        // Consume the outgoing frame, find its idx
        let outgoing = rx.recv().await.unwrap();
        let mut r = ProtoReader::new(&outgoing);
        let _ = r.tag().unwrap();
        let inner = r.bytes().unwrap();
        let mut ir = ProtoReader::new(inner);
        let mut idx = 0i32;
        while ir.has_more() {
            let (f, _) = ir.tag().unwrap();
            match f {
                1 | 2 => { let _ = ir.string().unwrap(); }
                3     => { let _ = ir.bytes().unwrap(); }
                5     => { idx = ir.varint().unwrap() as i32; }
                _     => panic!(),
            }
        }

        let err_bytes = ProtoWriter::new().int32(1, 13).string(2, "BOOM").build();
        ws.dispatch_rpc_response(RpcResponse {
            idx,
            error:   Some(&err_bytes),
            payload: None,
        });

        let err = h.await.unwrap().unwrap_err();
        match err {
            RpcCallError::Rpc(e) => {
                assert_eq!(e.code, 13);
                assert_eq!(e.message, "BOOM");
            }
            other => panic!("expected RpcCallError::Rpc, got {other:?}"),
        }
    }

    #[tokio::test]
    async fn rpc_call_canceled_when_pending_drained() {
        let ws = WsClient::new();
        let (tx, _rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let ws_inner = ws.clone();
        let h = tokio::spawn(async move {
            ws_inner.rpc_call("svc", "Method", &[]).await
        });

        // Give the spawned task a chance to register its pending entry.
        tokio::task::yield_now().await;
        tokio::task::yield_now().await;
        ws.drain_pending();

        let err = h.await.unwrap().unwrap_err();
        assert!(matches!(err, RpcCallError::Canceled));
    }

    #[tokio::test]
    async fn rpc_call_times_out_when_no_response() {
        // tokio test-util `pause` lets us fast-forward virtual
        // time past the 30 s timeout without actually sleeping.
        tokio::time::pause();

        let ws = WsClient::new();
        let (tx, _rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let ws_inner = ws.clone();
        let h = tokio::spawn(async move {
            ws_inner.rpc_call("svc", "Method", &[]).await
        });

        // Advance past the 30 s window.
        tokio::time::advance(Duration::from_secs(RPC_TIMEOUT_SECS + 1)).await;

        let err = h.await.unwrap().unwrap_err();
        assert!(matches!(err, RpcCallError::Timeout));
        // Pending must be cleared.
        assert!(ws.pending.lock().is_empty());
    }

    // ── dispatch_rpc_response (no-pending paths) ──────────────

    #[test]
    fn dispatch_unmatched_idx_returns_dropped() {
        let ws = WsClient::new();
        let outcome = ws.dispatch_rpc_response(RpcResponse {
            idx: 999, error: None, payload: Some(b"".as_slice()),
        });
        assert_eq!(outcome, UnmatchedRpcOutcome::Dropped { idx: 999 });
    }

    #[test]
    fn dispatch_subscribe_rotation_recognised() {
        let ws = WsClient::new();
        ws.set_subscribe_idx(42);

        let err = ProtoWriter::new().int32(1, 4).build();   // code 4 = DEADLINE_EXCEEDED
        let outcome = ws.dispatch_rpc_response(RpcResponse {
            idx: 42, error: Some(&err), payload: None,
        });
        assert_eq!(outcome, UnmatchedRpcOutcome::SubscribeRotation);
    }

    #[test]
    fn dispatch_subscribe_push_recognised() {
        let ws = WsClient::new();
        ws.set_subscribe_idx(42);

        let outcome = ws.dispatch_rpc_response(RpcResponse {
            idx: 42, error: None, payload: Some(b"push body".as_slice()),
        });
        assert_eq!(outcome, UnmatchedRpcOutcome::SubscribePush(b"push body".to_vec()));
    }

    #[test]
    fn dispatch_subscribe_failure_recognised() {
        let ws = WsClient::new();
        ws.set_subscribe_idx(42);

        let err = ProtoWriter::new().int32(1, 14).string(2, "UNAVAILABLE").build();
        let outcome = ws.dispatch_rpc_response(RpcResponse {
            idx: 42, error: Some(&err), payload: None,
        });
        match outcome {
            UnmatchedRpcOutcome::SubscribeFailed { code, message } => {
                assert_eq!(code, 14);
                assert_eq!(message, "UNAVAILABLE");
            }
            other => panic!("expected SubscribeFailed, got {other:?}"),
        }
    }

    // ── LoadUsers parsing ─────────────────────────────────────

    #[test]
    fn parse_load_users_first_name_prefers_field_3() {
        let nick   = ProtoWriter::new().string(1, "@joe").build();
        let entity = ProtoWriter::new()
            .int32(1, 42)
            .string(3, "Joe Smith")
            .bytes(9, &nick)
            .build();
        let resp = ProtoWriter::new().bytes(1, &entity).build();
        assert_eq!(parse_load_users_first_name(&resp).as_deref(), Some("Joe Smith"));
    }

    #[test]
    fn parse_load_users_first_name_falls_back_to_nick() {
        let nick   = ProtoWriter::new().string(1, "@solo").build();
        let entity = ProtoWriter::new()
            .int32(1, 7)
            .bytes(9, &nick)
            .build();
        let resp = ProtoWriter::new().bytes(1, &entity).build();
        assert_eq!(parse_load_users_first_name(&resp).as_deref(), Some("@solo"));
    }

    #[test]
    fn parse_load_users_first_name_none_when_no_name_or_nick() {
        let entity = ProtoWriter::new().int32(1, 1).build();
        let resp = ProtoWriter::new().bytes(1, &entity).build();
        assert_eq!(parse_load_users_first_name(&resp), None);
    }

    #[test]
    fn parse_load_users_first_name_none_on_empty_response() {
        assert_eq!(parse_load_users_first_name(&[]), None);
    }

    // ── RPC wrappers (offline, via dispatch_rpc_response) ─────

    /// Drive an RPC end-to-end: spawn the call, capture the
    /// outgoing frame, build a canned response, dispatch it
    /// back, and assert on the parsed result. Centralises the
    /// idx-extraction dance the earlier tests open-coded.
    async fn rpc_round_trip(
        ws:       &Arc<WsClient>,
        call_fut: impl std::future::Future<Output = Option<CallEntity>> + Send + 'static,
        rx:       &mut mpsc::UnboundedReceiver<Vec<u8>>,
        response_payload: Vec<u8>,
    ) -> Option<CallEntity> {
        let handle = tokio::spawn(call_fut);
        let outgoing = rx.recv().await.expect("outgoing frame");
        let idx = extract_outgoing_rpc_idx(&outgoing);

        ws.dispatch_rpc_response(RpcResponse {
            idx,
            error:   None,
            payload: Some(&response_payload),
        });

        handle.await.unwrap()
    }

    fn extract_outgoing_rpc_idx(frame: &[u8]) -> i32 {
        let mut r = ProtoReader::new(frame);
        r.tag().unwrap();
        let inner = r.bytes().unwrap();
        let mut ir = ProtoReader::new(inner);
        let mut idx = 0i32;
        while ir.has_more() {
            let (f, _) = ir.tag().unwrap();
            match f {
                1 | 2 => { let _ = ir.string().unwrap(); }
                3     => { let _ = ir.bytes().unwrap(); }
                5     => { idx = ir.varint().unwrap() as i32; }
                _     => break,
            }
        }
        idx
    }

    #[tokio::test]
    async fn start_call_round_trip_returns_entity() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        // Canned response: a CallEntity inside f1 with LK creds.
        let entity = ProtoWriter::new()
            .int64(1, 555)
            .string(2, "tok-xyz")
            .string(3, "room-zzz")
            .int32(12, 1)               // is_livekit = true
            .build();
        let resp = ProtoWriter::new().bytes(1, &entity).build();

        let ws_call = ws.clone();
        let got = rpc_round_trip(
            &ws,
            async move { ws_call.start_call(123, 1).await },
            &mut rx,
            resp,
        ).await;
        let c = got.unwrap();
        assert_eq!(c.call_id, 555);
        assert_eq!(c.token,   "tok-xyz");
        assert_eq!(c.room,    "room-zzz");
        assert!(c.is_livekit);
    }

    #[tokio::test]
    async fn accept_call_round_trip_returns_entity() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let entity = ProtoWriter::new()
            .int64(1, 777)
            .string(2, "join-token")
            .int32(12, 1)
            .build();
        let resp = ProtoWriter::new().bytes(1, &entity).build();

        let ws_call = ws.clone();
        let got = rpc_round_trip(
            &ws,
            async move { ws_call.accept_call(777).await },
            &mut rx,
            resp,
        ).await;
        let c = got.unwrap();
        assert_eq!(c.call_id, 777);
        assert_eq!(c.token,   "join-token");
    }

    #[tokio::test]
    async fn load_user_name_caches_negative_result() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        // First call: dispatch an empty response → None
        let ws_call = ws.clone();
        let h1 = tokio::spawn(async move { ws_call.load_user_name(99).await });
        let outgoing = rx.recv().await.unwrap();
        let idx = extract_outgoing_rpc_idx(&outgoing);
        ws.dispatch_rpc_response(RpcResponse {
            idx, error: None, payload: Some(&[]),
        });
        assert!(h1.await.unwrap().is_none());

        // Second call for same uid: should NOT issue a new RPC.
        // Verified by the absence of any new outgoing frame.
        let ws_call = ws.clone();
        let cached = ws_call.load_user_name(99).await;
        assert!(cached.is_none());
        assert!(rx.try_recv().is_err(), "second call must hit the cache, not the wire");
    }

    #[tokio::test]
    async fn load_user_name_returns_name_from_response() {
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let entity = ProtoWriter::new().int32(1, 7).string(3, "Alice").build();
        let resp   = ProtoWriter::new().bytes(1, &entity).build();

        let ws_call = ws.clone();
        let h = tokio::spawn(async move { ws_call.load_user_name(7).await });
        let outgoing = rx.recv().await.unwrap();
        let idx = extract_outgoing_rpc_idx(&outgoing);
        ws.dispatch_rpc_response(RpcResponse {
            idx, error: None, payload: Some(&resp),
        });
        assert_eq!(h.await.unwrap().as_deref(), Some("Alice"));

        // Also populates the sync cache.
        assert_eq!(ws.cached_name(7).as_deref(), Some("Alice"));
    }

    #[test]
    fn load_user_name_zero_uid_returns_none_without_rpc() {
        // Sync-friendly: zero-uid path returns None before the
        // RPC happens. Use try_recv on a channel after to verify
        // no frame was ever sent.
        let ws = WsClient::new();
        let (tx, mut rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        let result = tokio::runtime::Builder::new_current_thread()
            .build()
            .unwrap()
            .block_on(async { ws.load_user_name(0).await });
        assert!(result.is_none());
        assert!(rx.try_recv().is_err());
    }

    // ── protocol-handling functions ───────────────────────────

    #[test]
    fn handshake_ok_flips_ready() {
        let ws = WsClient::new();
        let body = ProtoWriter::new()
            .int32(1, PROTO_VERSION)
            .int64(2, API_VERSION)
            .build();
        assert_eq!(handle_handshake_body(&ws, &body), HandshakeResult::Ok);
        assert!(ws.is_ready());
    }

    #[test]
    fn handshake_version_mismatch_does_not_flip_ready() {
        let ws = WsClient::new();
        let body = ProtoWriter::new()
            .int32(1, 99)
            .int64(2, 999_999)
            .build();
        let result = handle_handshake_body(&ws, &body);
        assert!(matches!(result,
            HandshakeResult::VersionMismatch { proto_version: 99, api_version: 999_999 }
        ));
        assert!(!ws.is_ready());
    }

    #[test]
    fn handle_rpc_frame_dispatches_to_pending() {
        let ws = WsClient::new();
        let (tx, _rx) = mpsc::unbounded_channel::<Vec<u8>>();
        ws.install_sender(tx);

        // Skip the full rpc_call dance — directly install a
        // pending entry and call handle_rpc_frame against it.
        let (responder, mut receiver) = oneshot::channel();
        ws.pending.lock().insert(11, PendingRpc {
            service:   "svc".into(),
            method:    "M".into(),
            responder,
        });

        // Build the RPC response envelope for idx=11
        let frame = ProtoWriter::new()
            .bytes(2, b"ok body")
            .int32(3, 11)
            .build();

        let outcome = handle_rpc_frame(&ws, &frame).unwrap();
        // The pending entry matched, so this is the
        // "Dropped" terminal outcome (signalling "nothing
        // unmatched to report").
        assert_eq!(outcome, UnmatchedRpcOutcome::Dropped { idx: 11 });

        // The awaiter should be resolved.
        let got = receiver.try_recv().unwrap().unwrap();
        assert_eq!(got, b"ok body");
    }

    #[test]
    fn handle_push_container_routes_through_to_xc() {
        let ws = WsClient::new();

        // Counter listener for callReceived events.
        let count = Arc::new(parking_lot::Mutex::new(0u32));
        let count_cb = count.clone();
        ws.add_on_call_received(Arc::new(move |_, _| {
            *count_cb.lock() += 1;
        }));

        // Build: outer (f=2 push container) → inner (f=1
        // SubscribeResponse → f=1 xC → f=52810 callReceived).
        let participant = ProtoWriter::new().int64(8, 7777).build();
        let xc_inner    = ProtoWriter::new().int64(1, 42).bytes(2, &participant).build();
        let xc          = ProtoWriter::new().bytes(XC_CALL_RECEIVED, &xc_inner).build();
        let sub_resp    = ProtoWriter::new().bytes(1, &xc).build();
        let container   = ProtoWriter::new().bytes(1, &sub_resp).build();

        handle_push_container(&ws, &container).unwrap();
        assert_eq!(*count.lock(), 1);
    }

    #[test]
    fn dispatch_xc_fires_call_started_and_call_ended() {
        let ws = WsClient::new();

        let received_id = Arc::new(parking_lot::Mutex::new(0i64));
        let received_cb = received_id.clone();
        ws.add_on_call_received(Arc::new(move |id, _| {
            *received_cb.lock() = id;
        }));

        let ended = Arc::new(parking_lot::Mutex::new((0i64, 0i32)));
        let ended_cb = ended.clone();
        ws.add_on_call_ended(Arc::new(move |id, reason| {
            *ended_cb.lock() = (id, reason);
        }));

        // callStarted (52807) with call_id=88
        let entity = ProtoWriter::new().int64(1, 88).int64(8, 4242).build();
        let inner  = ProtoWriter::new().bytes(1, &entity).build();
        let xc1    = ProtoWriter::new().bytes(XC_CALL_STARTED, &inner).build();

        // callEnded (52809) with wrapped entity call_id=88
        let ended_entity = ProtoWriter::new().int64(1, 88).int32(11, 5).build();
        let ended_wrap   = ProtoWriter::new().bytes(1, &ended_entity).build();
        let xc2          = ProtoWriter::new().bytes(XC_CALL_ENDED, &ended_wrap).build();

        let mut combined = xc1;
        combined.extend_from_slice(&xc2);

        dispatch_xc(&ws, &combined).unwrap();
        assert_eq!(*received_id.lock(), 88);
        // call_id + discard_reason both surface through the
        // listener.
        assert_eq!(*ended.lock(), (88, 5));
    }

    #[test]
    fn dispatch_xc_call_accepted_fires_listener() {
        let ws = WsClient::new();

        let accepted = Arc::new(parking_lot::Mutex::new(0i64));
        let accepted_cb = accepted.clone();
        ws.add_on_call_accepted(Arc::new(move |id| *accepted_cb.lock() = id));

        let entity = ProtoWriter::new().int64(1, 1234).build();
        let inner  = ProtoWriter::new().bytes(1, &entity).build();
        let xc     = ProtoWriter::new().bytes(XC_CALL_ACCEPTED, &inner).build();

        dispatch_xc(&ws, &xc).unwrap();
        assert_eq!(*accepted.lock(), 1234);
    }

    #[test]
    fn dispatch_xc_skips_unknown_and_chat_events() {
        let ws = WsClient::new();
        let received_calls = Arc::new(parking_lot::Mutex::new(0u32));
        let cb = received_calls.clone();
        ws.add_on_call_received(Arc::new(move |_, _| *cb.lock() += 1));

        // 19 messageRead + 55 newMessage + 85 emptyUpdate +
        // some random unknown tag. None of these should fire
        // listeners.
        let buf = ProtoWriter::new()
            .bytes(19, &[])
            .bytes(55, &[])
            .bytes(85, &[])
            .int32(7777, 0)
            .build();
        dispatch_xc(&ws, &buf).unwrap();
        assert_eq!(*received_calls.lock(), 0);
    }

    // ── Rule-engine table ─────────────────────────────────────
    //
    // The rule:
    //   want = token.is_some()
    //       && !user_disconnect
    //       && match mode {
    //              Server => true,
    //              Client => foreground && !call_active,
    //          }
    //
    // We don't spawn the run loop in these tests (no tokio
    // runtime). Just assert `desired_up()` directly — it's the
    // pure function the engine evaluates.

    fn ws_with(token: Option<&str>, fg: bool, call: bool, ud: bool, server_active: bool) -> std::sync::Arc<WsClient> {
        let w = WsClient::new();
        if let Some(t) = token { *w.access_token.lock() = Some(t.to_string()); }
        w.foreground.store(fg, Ordering::Relaxed);
        w.call_active.store(call, Ordering::Relaxed);
        w.user_disconnect.store(ud, Ordering::Relaxed);
        w.server_active.store(server_active, Ordering::Relaxed);
        w
    }

    #[test]
    fn rule_requires_token() {
        let w = ws_with(None, true, false, false, false);
        assert!(!w.desired_up(), "no token → never up (client)");
        let w = ws_with(None, true, false, false, true);
        assert!(!w.desired_up(), "no token → never up (server too)");
    }

    #[test]
    fn rule_user_disconnect_wins() {
        let w = ws_with(Some("t"), true, false, true, false);
        assert!(!w.desired_up());
        let w = ws_with(Some("t"), true, false, true, true);
        assert!(!w.desired_up());
    }

    #[test]
    fn rule_server_stays_up_modulo_token_and_disconnect() {
        // server_active=true ignores foreground / call_active.
        let w = ws_with(Some("t"), false, true, false, true);
        assert!(w.desired_up());
    }

    #[test]
    fn rule_client_needs_foreground_and_no_call() {
        let w = ws_with(Some("t"), true, false, false, false);
        assert!(w.desired_up(), "fg + no call → up");
        let w = ws_with(Some("t"), false, false, false, false);
        assert!(!w.desired_up(), "background → down");
        let w = ws_with(Some("t"), true, true, false, false);
        assert!(!w.desired_up(), "call active → down (key new rule)");
    }

    #[test]
    fn handle_rpc_frame_subscribe_push_recognised() {
        let ws = WsClient::new();
        ws.set_subscribe_idx(99);

        let payload_body = b"push contents".as_slice();
        let frame = ProtoWriter::new()
            .bytes(2, payload_body)
            .int32(3, 99)
            .build();

        let outcome = handle_rpc_frame(&ws, &frame).unwrap();
        assert_eq!(outcome, UnmatchedRpcOutcome::SubscribePush(payload_body.to_vec()));
    }

    /// Tiny base64url encoder for test inputs. Skips the
    /// trailing `=` padding to match RFC 4648 §5.
    fn b64url_encode(input: &[u8]) -> String {
        const ALPHABET: &[u8] =
            b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        let mut out = String::with_capacity((input.len() * 4 + 2) / 3);
        let mut i = 0;
        while i + 3 <= input.len() {
            let v = (input[i] as u32) << 16 | (input[i + 1] as u32) << 8 | (input[i + 2] as u32);
            out.push(ALPHABET[((v >> 18) & 0x3F) as usize] as char);
            out.push(ALPHABET[((v >> 12) & 0x3F) as usize] as char);
            out.push(ALPHABET[((v >>  6) & 0x3F) as usize] as char);
            out.push(ALPHABET[( v        & 0x3F) as usize] as char);
            i += 3;
        }
        let rem = input.len() - i;
        if rem == 1 {
            let v = (input[i] as u32) << 16;
            out.push(ALPHABET[((v >> 18) & 0x3F) as usize] as char);
            out.push(ALPHABET[((v >> 12) & 0x3F) as usize] as char);
        } else if rem == 2 {
            let v = (input[i] as u32) << 16 | (input[i + 1] as u32) << 8;
            out.push(ALPHABET[((v >> 18) & 0x3F) as usize] as char);
            out.push(ALPHABET[((v >> 12) & 0x3F) as usize] as char);
            out.push(ALPHABET[((v >>  6) & 0x3F) as usize] as char);
        }
        out
    }
}
