//! lktunnel — core LiveKit tunnel.
//!
//! Wraps `livekit::Room` with a small handle abstraction. The
//! [`LkTunnel`] type is the public API: connect once, get a handle,
//! send IP packets through it, drop / `disconnect()` to tear down.
//! Each handle owns its own background task on the shared tokio
//! runtime; there is no global session table.
//!
//! ```ignore
//! let tunnel = LkTunnel::connect(url, token,
//!     |ip|     { /* IP packet arrived */ },
//!     |event|  { /* PeerJoined / Disconnected / ... */ },
//! ).await?;
//! tunnel.send_ip(&packet)?;
//! tunnel.disconnect();
//! ```
//!
//! Wire framing: the LK lossy DataChannel carries a one-byte frame
//! type followed by a payload. Only `'I'` (IP) is produced and
//! consumed; anything else gets a debug-log and is dropped.

pub mod counters;
pub mod dispatcher;
pub mod errors;
pub mod ipv6;
pub mod nat;
pub mod rtp;
pub(crate) mod quic_tunnel;
pub mod server;
pub mod socks5_quic;
// Kernel TUN is Unix-only. The Android client uses it via JNI;
// the Node CLI uses it on Linux/macOS. Windows server-mode is
// userspace-NAT only and never touches a kernel TUN.
#[cfg(unix)]
pub mod tun;

use livekit::prelude::*;
use livekit::{Room, RoomOptions};
use once_cell::sync::Lazy;
use parking_lot::Mutex;
use std::collections::VecDeque;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::Duration;

use crate::nat::{NatDispatcher, Stats as NatStats};
#[cfg(unix)]
use crate::tun::{InjectStatus, TunBridge};

/// Portable `errno` accessor — the `libc` crate exposes the thread-local
/// errno via a platform-specific symbol (`__errno` on Bionic, `__errno_location`
/// on glibc, `__error` on Darwin). Centralised here so call sites can
/// just `errno()` without each having to gate.
#[inline(always)]
pub fn errno() -> i32 {
    #[cfg(target_os = "android")]
    unsafe { return *libc::__errno(); }
    #[cfg(all(target_os = "linux", not(target_os = "android")))]
    unsafe { return *libc::__errno_location(); }
    #[cfg(target_vendor = "apple")]
    unsafe { return *libc::__error(); }
    #[cfg(not(any(target_os = "linux", target_os = "android", target_vendor = "apple")))]
    { 0 }
}

// ── Wire framing ────────────────────────────────────────────────────
//
// Each RTP frame's substituted payload starts with a one-byte type
// tag. Only `'I'` (0x49) is currently produced or routed — the
// payload after the tag is a raw IP packet, handed verbatim to the
// consumer's NAT/TUN. Anything else gets logged + dropped.
//
// The tag is kept (rather than sending raw IP packets) so a future
// peer can multiplex additional planes on the same RTP carrier
// without a breaking wire change. Reliable framings (e.g. a SOCKS5-
// style C/A/D/X/U) would still need their own ARQ on top of the
// lossy carrier — the tag just reserves namespace.

const FRAME_TYPE_IP: u8 = 0x49;        // 'I'
/// QUIC datagram. Used by `quic_tunnel` to ferry quinn's UDP packets
/// over the lossy RTP carrier. quinn's own ARQ + congestion control
/// turns the carrier into a reliable, stream-multiplexed transport.
pub(crate) const FRAME_TYPE_QUIC: u8 = 0x51; // 'Q'

/// How long to wait for a remote peer to be present in the room before
/// giving up. Covers the worst-case server-side flow: `callAccepted`
/// push → callee dials → SFU room join → ICE reconciliation.
const PEER_WAIT_MS: u64 = 30_000;

/// Per-tunnel send-queue capacity, in packets. `send_ip` returns
/// `SendError::Backpressure` once this fills; the sender task drains
/// it by awaiting `Room::publish_data` (which is itself bounded by
/// the SDK's per-DC buffered-amount low threshold).
const SEND_QUEUE_CAP: usize = 64;

/// Per-tunnel inbound IP queue capacity, in packets. Bounds memory
/// when the peer pumps faster than the local NAT / TUN can drain.
/// Drop-oldest: the kernel's TCP at the consumer is the retransmit
/// authority for anything we drop.
///
/// Sized for kernel-TUN server bursts: opening a webpage / running
/// a speedtest can deliver >1k packets in a single tick, and the
/// dispatcher does per-packet TUN write syscalls (no batching), so
/// 1024 saturated easily under load — observed drops climbed in
/// powers of two within seconds. 8192 absorbs typical bursts;
/// memory cost is ~12 MB worst case (8192 * 1500B Vec).
const INBOUND_QUEUE_CAP: usize = 8192;

// ── Public types ────────────────────────────────────────────────────

/// Lifecycle / signalling event from a [`LkTunnel`]. Fires from the LK
/// tokio worker thread on the `on_event` callback passed to
/// [`LkTunnel::connect`]. The consumer must not block.
#[derive(Debug, Clone)]
pub struct Event {
    pub kind: EventKind,
    /// Free-form context — peer identity, error message, disconnect reason.
    pub info: String,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum EventKind {
    Connected,
    PeerJoined,
    PeerLeft,
    Disconnected,
    Error,
}

/// Cause of a [`LkTunnel::connect`] failure.
#[derive(Debug)]
pub enum ConnectError {
    /// LK SDK reported a connect failure (auth, network, SFU, ...).
    Livekit(String),
    /// No peer joined the room within the timeout window.
    NoPeer,
}

impl std::fmt::Display for ConnectError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            ConnectError::Livekit(s) => write!(f, "livekit connect: {s}"),
            ConnectError::NoPeer     => write!(f, "no peer joined within {}s", PEER_WAIT_MS / 1000),
        }
    }
}
impl std::error::Error for ConnectError {}

// ── Process-wide lifecycle observer ─────────────────────────────────
//
// One slot — set once at app startup (e.g. by bale-signaling when
// its WsClient comes up). Every [`LkTunnel::connect`] /
// [`LkTunnel::connect_server`] chains this observer into its
// `on_event` callback, so consumers of the LK transport
// (bale-signaling's WS rule engine) auto-observe Connected /
// Disconnected without explicit per-tunnel wiring.
//
// Cleared by passing `None` (mostly for tests). Replacing
// silently overwrites — last writer wins.
type GlobalObs = std::sync::Arc<dyn Fn(Event) + Send + Sync + 'static>;
static GLOBAL_OBSERVER: parking_lot::RwLock<Option<GlobalObs>> =
    parking_lot::RwLock::new(None);

/// Install the process-wide lifecycle observer. Chained after the
/// per-tunnel `on_event` for every subsequent connect. Idempotent
/// — last call wins. Pass `None` to clear.
pub fn set_global_observer(obs: Option<GlobalObs>) {
    *GLOBAL_OBSERVER.write() = obs;
}

/// Internal — fire the global observer if installed. Called from
/// the per-tunnel chain so already-connected tunnels also
/// surface their events to the global observer.
fn fire_global(ev: &Event) {
    if let Some(obs) = GLOBAL_OBSERVER.read().clone() {
        obs(ev.clone());
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum SendError {
    NotConnected,
    Invalid,
    /// Per-tunnel send queue is full. The caller should pause and
    /// wait for [`LkTunnel::on_send_drained`] to fire before retrying.
    /// This is the live backpressure signal; not a transient error.
    Backpressure,
}

// ── LkTunnel handle ────────────────────────────────────────────────

/// Connected LiveKit tunnel. Each handle owns a tokio task that drives
/// its `Room` event loop. Cloneable: clones share the same room,
/// send queue, NAT/TUN state, and lifecycle — teardown happens when
/// the last clone is dropped (or `disconnect` is called).
pub struct LkTunnel {
    inner: Arc<TunnelInner>,
}

/// Lifecycle state surfaced via [`LkTunnel::await_connected`]. Updated
/// by the connect task as it progresses through dial → peer-wait →
/// running → disconnect.
#[derive(Debug, Clone, PartialEq)]
pub enum TunnelState {
    /// Initial state — `Room::connect` in flight.
    Connecting,
    /// LK room joined and a remote peer is present.
    Connected,
    /// Connect failed (LK auth / network / SFU error, or no-peer timeout).
    Failed(String),
    /// Was connected, now torn down.
    Disconnected,
}

struct TunnelInner {
    /// Per-tunnel diagnostic id, monotonically issued in [`LkTunnel::connect`].
    /// Used purely for log line prefixes; pointer-as-id would also
    /// work but counter values read nicer.
    id:          u64,
    /// rx/tx byte/packet totals — exposed via [`LkTunnel::stats`].
    counters:    Arc<counters::Counters>,
    /// Set by the connect task once `Room::connect` resolves; `None`
    /// in the brief window before that and after teardown takes it.
    room:        Mutex<Option<Arc<Room>>>,
    /// Lifecycle state. Sender lives in the connect task; subscribers
    /// (e.g. [`LkTunnel::await_connected`]) borrow_and_update to wait.
    state_tx:    tokio::sync::watch::Sender<TunnelState>,
    task:        Mutex<Option<tokio::task::AbortHandle>>,
    sender_task: Mutex<Option<tokio::task::AbortHandle>>,
    /// Bounded queue feeding the sender task. `try_send` from
    /// `send_ip` is the per-tunnel backpressure surface.
    tx:          tokio::sync::mpsc::Sender<Vec<u8>>,
    /// One-shot wakeups queued by `on_send_drained`. Fired whenever
    /// the sender task pops a packet off `tx` (so a slot is free).
    drain_waiters: Mutex<Vec<Box<dyn FnOnce() + Send>>>,
    /// Server-mode NAT — set by [`LkTunnel::start_server`]. Locked
    /// briefly by the inbound IP path (dispatcher thread) and by
    /// teardown / start (other threads); contention is trivial.
    nat:         Mutex<Option<Box<NatDispatcher>>>,
    /// Client-mode TUN bridge — set by [`LkTunnel::attach_tun`].
    /// Mutated only on the dispatcher thread (TunBridge attach /
    /// inject / resume) — the mutex is held briefly so a teardown
    /// elsewhere can take the Box out for deferred drop. Unix-only;
    /// the Windows build has no kernel TUN.
    #[cfg(unix)]
    tun:         Mutex<Option<Box<TunBridge>>>,
    /// Lifecycle flag. `Arc` so the per-tunnel task can hold it
    /// independently of Inner (avoids pinning Inner to the task).
    connected:   Arc<AtomicBool>,
    /// Per-tunnel inbound IP queue. Producer is the LK on_ip
    /// callback (any tokio worker); consumer is a dispatcher task
    /// scheduled lazily — at most one outstanding drain per tunnel
    /// regardless of packet rate, so the dispatcher's generic QUEUE
    /// can't grow with inbound traffic.
    inbound:     Mutex<VecDeque<Vec<u8>>>,
    /// Total inbound packets dropped at `INBOUND_QUEUE_CAP`. Surfaced
    /// in logs on power-of-two boundaries.
    inbound_drops: AtomicU64,
    /// Outgoing RTP transport handles — one per parallel carrier track
    /// (see [`rtp::TRACK_COUNT`]). Set once `Room::connect` succeeds and
    /// the local audio tracks have been published. Owned here so each
    /// track's dummy-frame producer task stays alive for the tunnel's
    /// lifetime; dropped on teardown. The send loop stripes outbound
    /// frames round-robin across them.
    rtp_senders: Mutex<Vec<Arc<rtp::RtpSender>>>,
    /// Incoming RTP transport handles, one per remote video track we've
    /// subscribed to. Kept alive while their RtpReceivers are valid;
    /// libwebrtc's scoped_refptr inside the transformer pins the C++
    /// side until the track unpublishes.
    rtp_receivers: Mutex<Vec<rtp::RtpReceiver>>,
    /// Optional caller-supplied IP packet handler. When set, it takes
    /// precedence over NAT / TUN routing in `inject_inbound_ip`. Used
    /// by shim layers that want to do their own packet routing (e.g.
    /// the Node `--nat-mode kernel` path, where JS feeds the bytes
    /// through a kernel TUN with SNAT). Default `None` keeps the
    /// existing behaviour for Android / CLI.
    on_ip_override: Mutex<Option<Arc<dyn Fn(&[u8]) + Send + Sync>>>,
    /// QUIC inbound datagram channel — set by `enable_quic_*` when a
    /// QUIC endpoint is started on top of this tunnel. The `'Q'`-frame
    /// dispatcher pushes raw quinn datagrams here; the
    /// `quic_tunnel::TunnelUdpSocket` AsyncUdpSocket impl drains them.
    /// `None` until QUIC is enabled.
    quic_rx_tx: Mutex<Option<tokio::sync::mpsc::Sender<bytes::Bytes>>>,
    /// Persistent client-side QUIC connection to the peer. Brought
    /// up by [`LkTunnel::ensure_quic_client`] once per tunnel and
    /// reused by every SOCKS5 enable/disable cycle. Independent of
    /// the SOCKS5 listener so the QUIC handshake completes at tunnel
    /// startup, not at first SOCKS5 toggle.
    quic_client: Mutex<Option<Arc<quic_tunnel::QuicClient>>>,
    /// Serialises concurrent [`LkTunnel::ensure_quic_client`] calls.
    /// Without it the auto-warm (spawned at peer-joined) and the
    /// explicit `enable_socks5_server` path can race; whichever loses
    /// the race-to-set `quic_rx_tx` fails with `AlreadyExists` and
    /// the caller has to retry. Async because we hold it across an
    /// `.await` (the QUIC handshake).
    connect_lock: tokio::sync::Mutex<()>,
    /// Client-side SOCKS5 listener handle. Set by
    /// `enable_socks5_server`; cleared by `disable_socks5_server`.
    socks5_handle: Mutex<Option<socks5_quic::Socks5Handle>>,
    /// Server-side QUIC stream-acceptor handle. Auto-installed by
    /// `start_server` so the peer side can route incoming SOCKS5
    /// streams to host TCP without a separate JS/Kotlin toggle.
    quic_server_handle: Mutex<Option<socks5_quic::QuicServerHandle>>,
    /// Tunnel role, set at construction. Drives the auto-warm
    /// decision on peer-joined (only client tunnels auto-warm the
    /// QUIC client) and guards `start_server` / `attach_tun` from
    /// being called against the wrong role.
    role: TunnelRole,
}

/// Tunnel role, decided at construction time.
/// - [`TunnelRole::Client`]: caller plans to attach a TUN
///   ([`LkTunnel::attach_tun`]) or use SOCKS5
///   ([`LkTunnel::enable_socks5_server`]). QUIC client connection
///   auto-warms on peer-joined so the first SOCKS5 toggle is
///   instantaneous.
/// - [`TunnelRole::Server`]: caller will call
///   [`LkTunnel::start_server`] after [`LkTunnel::await_connected`].
///   QUIC client auto-warm is suppressed — `start_server` claims
///   the QUIC role for the stream-acceptor side.
///
/// The wrong-role guards in `start_server` / `attach_tun` are
/// cheap insurance; the real win is eliminating the
/// auto-warm-vs-start-server race that used to leave the tunnel
/// half-configured.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum TunnelRole {
    Client,
    Server,
}

static NEXT_TUNNEL_ID: AtomicU64 = AtomicU64::new(1);

/// Build a pair of [`LkTunnel`]s wired to each other by in-process
/// mpsc channels — **no LiveKit room, no RTP, no Opus**. Outbound
/// frames from each tunnel are routed straight into the other
/// tunnel's `dispatch_payload`-equivalent (an `on_ip`/`on_quic`
/// fork that's a verbatim copy of what [`LkTunnel::connect`] sets
/// up internally).
///
/// Used by integration tests to exercise QUIC + SOCKS5 + NAT
/// offline. Both tunnels come back already in the
/// [`TunnelState::Connected`] state.
#[doc(hidden)]
pub fn connect_loopback() -> (LkTunnel, LkTunnel) {
    crate::dispatcher::init();
    // `a` is the client side (drives `enable_socks5_server`); `b` is the
    // server side (`start_server`). The roles must match those calls'
    // guards, same as a real `connect` / `connect_server` pair.
    let (a_inner, a_send_rx) = build_loopback_inner(TunnelRole::Client);
    let (b_inner, b_send_rx) = build_loopback_inner(TunnelRole::Server);
    spawn_loopback_forwarder(a_send_rx, Arc::clone(&b_inner));
    spawn_loopback_forwarder(b_send_rx, Arc::clone(&a_inner));
    a_inner.connected.store(true, Ordering::Relaxed);
    b_inner.connected.store(true, Ordering::Relaxed);
    let _ = a_inner.state_tx.send(TunnelState::Connected);
    let _ = b_inner.state_tx.send(TunnelState::Connected);
    (LkTunnel { inner: a_inner }, LkTunnel { inner: b_inner })
}

fn build_loopback_inner(role: TunnelRole) -> (Arc<TunnelInner>, tokio::sync::mpsc::Receiver<Vec<u8>>) {
    let id = NEXT_TUNNEL_ID.fetch_add(1, Ordering::Relaxed);
    let (send_tx, send_rx) = tokio::sync::mpsc::channel::<Vec<u8>>(SEND_QUEUE_CAP);
    let (state_tx, _state_rx) = tokio::sync::watch::channel(TunnelState::Connecting);
    let inner = Arc::new(TunnelInner {
        id,
        counters:      Arc::new(counters::Counters::new()),
        room:          Mutex::new(None),
        state_tx,
        task:          Mutex::new(None),
        sender_task:   Mutex::new(None),
        tx:            send_tx,
        drain_waiters: Mutex::new(Vec::new()),
        nat:           Mutex::new(None),
        #[cfg(unix)]
        tun:           Mutex::new(None),
        connected:     Arc::new(AtomicBool::new(false)),
        inbound:       Mutex::new(VecDeque::with_capacity(INBOUND_QUEUE_CAP)),
        inbound_drops: AtomicU64::new(0),
        rtp_senders:   Mutex::new(Vec::new()),
        rtp_receivers: Mutex::new(Vec::new()),
        on_ip_override: Mutex::new(None),
        quic_rx_tx:    Mutex::new(None),
        quic_client:   Mutex::new(None),
        connect_lock:  tokio::sync::Mutex::new(()),
        socks5_handle: Mutex::new(None),
        quic_server_handle: Mutex::new(None),
        role,
    });
    (inner, send_rx)
}

/// Forwarder task: pulls pre-tagged frames from `from_rx` (the
/// outbound channel of one loopback tunnel) and dispatches them into
/// `to_inner` exactly the way [`dispatch_payload`] would on the
/// receive side. `'I'` frames go through the same drain-queue
/// pattern `on_ip` uses; `'Q'` frames feed `quic_rx_tx`.
fn spawn_loopback_forwarder(
    mut from_rx: tokio::sync::mpsc::Receiver<Vec<u8>>,
    to_inner:    Arc<TunnelInner>,
) {
    runtime().spawn(async move {
        while let Some(frame) = from_rx.recv().await {
            if frame.is_empty() { continue; }
            match frame[0] {
                FRAME_TYPE_IP => {
                    let payload = frame[1..].to_vec();
                    let needs_drain = {
                        let mut q = to_inner.inbound.lock();
                        let was_empty = q.is_empty();
                        if q.len() >= INBOUND_QUEUE_CAP {
                            q.pop_front();
                            let n = to_inner.inbound_drops
                                .fetch_add(1, Ordering::Relaxed) + 1;
                            if n.is_power_of_two() {
                                log::warn!("loopback: inbound overflow — \
                                            {n} packets dropped on tunnel {}",
                                           to_inner.id);
                            }
                        }
                        q.push_back(payload);
                        was_empty
                    };
                    if needs_drain {
                        let weak = Arc::downgrade(&to_inner);
                        dispatcher::post(Box::new(move || {
                            let Some(inner) = weak.upgrade() else { return };
                            loop {
                                let pkt = inner.inbound.lock().pop_front();
                                match pkt {
                                    Some(b) => inner.inject_inbound_ip(&b),
                                    None    => break,
                                }
                            }
                        }));
                    }
                }
                FRAME_TYPE_QUIC => {
                    let payload = &frame[1..];
                    to_inner.counters.bump_rx(payload.len());
                    let tx = to_inner.quic_rx_tx.lock().clone();
                    if let Some(tx) = tx {
                        let _ = tx.try_send(bytes::Bytes::copy_from_slice(payload));
                    }
                }
                _ => {}  // unknown frame type, drop silently
            }
        }
    });
}

impl LkTunnel {
    /// Build a handle and kick off the async connect work on the
    /// shared tokio runtime. **Returns immediately** — the handle is
    /// usable for [`Self::disconnect`], [`Self::start_server`],
    /// [`Self::attach_tun`], etc. right away, even before the room is
    /// dialled. Lifecycle events fire via `on_event` as the connect
    /// task progresses; sync callers can [`Self::await_connected`].
    ///
    /// Inbound IP packets are routed internally to either the NAT
    /// (after [`Self::start_server`]) or the TUN bridge (after
    /// [`Self::attach_tun`]); packets that arrive before either is
    /// set are dropped silently.
    pub fn connect(
        url:      impl Into<String> + Send + 'static,
        token:    impl Into<String> + Send + 'static,
        on_event: impl Fn(Event) + Send + Sync + 'static,
    ) -> Self {
        Self::connect_with_role(url, token, TunnelRole::Client, on_event)
    }

    /// As [`Self::connect`] but for server-mode use. Caller must
    /// call [`Self::start_server`] after [`Self::await_connected`].
    /// The QUIC client auto-warm is suppressed for this role —
    /// `start_server` claims the QUIC role for its stream
    /// acceptor; without the distinction the two race for the
    /// `quic_rx_tx` slot and the tunnel ends up half-configured.
    pub fn connect_server(
        url:      impl Into<String> + Send + 'static,
        token:    impl Into<String> + Send + 'static,
        on_event: impl Fn(Event) + Send + Sync + 'static,
    ) -> Self {
        Self::connect_with_role(url, token, TunnelRole::Server, on_event)
    }

    /// Internal constructor — `connect` / `connect_server` are the
    /// public API. Keeping the role on the inner ctor (instead of
    /// an `is_server: bool`) lets the auto-warm path read it
    /// directly and lets `start_server` / `attach_tun` guard
    /// against wrong-role calls.
    fn connect_with_role(
        url:      impl Into<String> + Send + 'static,
        token:    impl Into<String> + Send + 'static,
        role:     TunnelRole,
        on_event: impl Fn(Event) + Send + Sync + 'static,
    ) -> Self {
        let id = NEXT_TUNNEL_ID.fetch_add(1, Ordering::Relaxed);
        let (send_tx, send_rx) = tokio::sync::mpsc::channel::<Vec<u8>>(SEND_QUEUE_CAP);
        let (state_tx, _state_rx) = tokio::sync::watch::channel(TunnelState::Connecting);

        let inner = Arc::new(TunnelInner {
            id,
            counters:      Arc::new(counters::Counters::new()),
            room:          Mutex::new(None),
            state_tx,
            task:          Mutex::new(None),
            sender_task:   Mutex::new(None),
            tx:            send_tx,
            drain_waiters: Mutex::new(Vec::new()),
            nat:           Mutex::new(None),
            #[cfg(unix)]
            tun:           Mutex::new(None),
            connected:     Arc::new(AtomicBool::new(false)),
            inbound:       Mutex::new(VecDeque::with_capacity(INBOUND_QUEUE_CAP)),
            inbound_drops: AtomicU64::new(0),
            rtp_senders:   Mutex::new(Vec::new()),
            rtp_receivers: Mutex::new(Vec::new()),
            on_ip_override: Mutex::new(None),
            quic_rx_tx:    Mutex::new(None),
            quic_client:   Mutex::new(None),
            connect_lock:  tokio::sync::Mutex::new(()),
            socks5_handle: Mutex::new(None),
            quic_server_handle: Mutex::new(None),
            role,
        });

        // Inbound IP routing — same bounded per-tunnel queue pattern.
        let weak_for_ip = Arc::downgrade(&inner);
        let on_ip = Arc::new(move |ip: &[u8]| {
            if ip.is_empty() { return; }
            let Some(inner) = weak_for_ip.upgrade() else { return };
            let needs_drain = {
                let mut q = inner.inbound.lock();
                let was_empty = q.is_empty();
                if q.len() >= INBOUND_QUEUE_CAP {
                    q.pop_front();
                    let n = inner.inbound_drops.fetch_add(1, Ordering::Relaxed) + 1;
                    if n.is_power_of_two() {
                        log::warn!("LkTunnel[{}]: inbound overflow — dropped {n} packets total",
                                   inner.id);
                    }
                }
                q.push_back(ip.to_vec());
                was_empty
            };
            if needs_drain {
                let weak = Arc::downgrade(&inner);
                dispatcher::post(Box::new(move || {
                    let Some(inner) = weak.upgrade() else { return };
                    loop {
                        let pkt = inner.inbound.lock().pop_front();
                        match pkt {
                            Some(b) => inner.inject_inbound_ip(&b),
                            None    => break,
                        }
                    }
                }));
            }
        }) as Arc<dyn Fn(&[u8]) + Send + Sync>;
        let on_event = Arc::new(on_event) as Arc<dyn Fn(Event) + Send + Sync>;

        // Spawn the connect task. It dials the room, stores it on
        // `inner.room`, spawns the sender task, then drives the tunnel
        // loop. Captures `Weak<TunnelInner>` so dropping all user
        // handles tears the task down.
        let weak_for_task     = Arc::downgrade(&inner);
        let connected_for_task = Arc::clone(&inner.connected);
        let url   = url.into();
        let token = token.into();
        let task = runtime().spawn(run_connect_task(
            id, url, token, send_rx,
            weak_for_task, connected_for_task, on_ip, on_event,
        ));
        inner.task.lock().replace(task.abort_handle());

        LkTunnel { inner }
    }

    /// Suspend until the tunnel reaches a terminal connect state.
    /// `Ok(())` if a remote peer joined; `Err(ConnectError)` if the
    /// connect failed (LK error or no-peer timeout) or the tunnel was
    /// torn down before connecting.
    pub async fn await_connected(&self) -> Result<(), ConnectError> {
        let mut rx = self.inner.state_tx.subscribe();
        loop {
            // `borrow_and_update` marks the current value seen so a
            // later `changed()` only fires on the NEXT change.
            let state = rx.borrow_and_update().clone();
            match state {
                TunnelState::Connected      => return Ok(()),
                TunnelState::Failed(s)      => return Err(ConnectError::Livekit(s)),
                TunnelState::Disconnected   => return Err(ConnectError::NoPeer),
                TunnelState::Connecting     => {}
            }
            if rx.changed().await.is_err() {
                // Sender dropped — tunnel torn down.
                return Err(ConnectError::NoPeer);
            }
        }
    }

    /// Try to send a raw IP packet on the RTP transport. The leading
    /// `'I'` (0x49) frame-type byte is prepended internally — the
    /// receiver strips it in `dispatch_payload`. Non-blocking:
    /// returns [`SendError::Backpressure`] when the per-tunnel queue
    /// is full. The caller should pause and register an
    /// [`Self::on_send_drained`] wakeup before retrying.
    pub fn send_ip(&self, ip: &[u8]) -> Result<(), SendError> {
        if ip.is_empty() || ip.len() > 65535 {
            return Err(SendError::Invalid);
        }
        if !self.inner.connected.load(Ordering::Relaxed) {
            return Err(SendError::NotConnected);
        }
        let mut buf = Vec::with_capacity(1 + ip.len());
        buf.push(FRAME_TYPE_IP);
        buf.extend_from_slice(ip);
        let plen = ip.len();
        self.send_raw_frame(buf, plen)
    }

    /// Send an **already-tagged** wire frame. Caller is responsible
    /// for prepending the frame-type byte (`'I'`, `'Q'`, …). Used by
    /// [`crate::quic_tunnel::TunnelUdpSocket`] which prepends `'Q'`
    /// itself before ferrying quinn datagrams. The `tx_payload_len`
    /// argument is the *post-tag* byte count fed into the counter
    /// (the tag byte itself isn't billed to the consumer).
    pub fn send_raw_frame(&self, buf: Vec<u8>, tx_payload_len: usize) -> Result<(), SendError> {
        if buf.is_empty() || buf.len() > 65536 {
            return Err(SendError::Invalid);
        }
        if !self.inner.connected.load(Ordering::Relaxed) {
            return Err(SendError::NotConnected);
        }
        use tokio::sync::mpsc::error::TrySendError;
        match self.inner.tx.try_send(buf) {
            Ok(()) => {
                self.inner.counters.bump_tx(tx_payload_len);
                Ok(())
            }
            Err(TrySendError::Full(_))   => Err(SendError::Backpressure),
            Err(TrySendError::Closed(_)) => Err(SendError::NotConnected),
        }
    }

    /// Register a one-shot wakeup fired the next time the sender task
    /// pops a packet (i.e., the send queue has a free slot). Use after
    /// `send_ip` returns [`SendError::Backpressure`] to know when to
    /// retry. Fires once and is then removed. The fast path: if the
    /// queue already has capacity right now, the callback runs
    /// inline so the caller doesn't sleep waiting for a drain that
    /// already happened.
    pub fn on_send_drained<F: FnOnce() + Send + 'static>(&self, cb: F) {
        // Take the lock first so a drain happening concurrently can't
        // both miss the registration AND fire the inline path. Order:
        // (a) lock waiters, (b) check capacity, (c) either fire or
        // park. The sender task's drain path takes the same lock and
        // drains the full vec before publishing, so an interleaving
        // drain that arrived before our lock has already fired old
        // waiters and freed at least one slot — making `capacity > 0`
        // the right inline trigger.
        let mut waiters = self.inner.drain_waiters.lock();
        if self.inner.tx.capacity() > 0 {
            drop(waiters);
            cb();
        } else {
            waiters.push(Box::new(cb));
        }
    }

    /// Tear down. Idempotent — safe to call multiple times and from
    /// any thread. Aborts the per-tunnel task and asks the LK SDK to
    /// send a Leave to the SFU (without awaiting). The local
    /// `Room::drop` path doesn't send Leave, which leaves the other
    /// peer thinking we're still here for ~30 s on m144; closing
    /// explicitly propagates within ms.
    ///
    /// Also fires automatically when the last clone of this handle
    /// drops (via [`TunnelInner::drop`]), so callers who hand clones
    /// to background tasks/closures don't need to coordinate teardown
    /// explicitly.
    pub fn disconnect(&self) { self.inner.teardown(); }

    /// `true` until [`Self::disconnect`] or the LK peer drops.
    pub fn is_connected(&self) -> bool {
        self.inner.connected.load(Ordering::Relaxed)
    }

    /// Per-tunnel diagnostic id, monotonically assigned at connect.
    pub fn id(&self) -> u64 { self.inner.id }

    /// Cumulative rx/tx packet & byte counters since this tunnel
    /// connected: `[rx_pkts, rx_bytes, tx_pkts, tx_bytes]`.
    pub fn stats(&self) -> [u64; 4] { self.inner.counters.snapshot() }

    /// Shared counter handle — same instance used by the inbound IP
    /// router (rx) and server-mode NAT emit (tx). Exposed for
    /// platform glue that wants to surface counters elsewhere.
    pub fn counters(&self) -> Arc<counters::Counters> {
        Arc::clone(&self.inner.counters)
    }

    /// Install a caller-supplied inbound-IP handler. Used by shim
    /// layers (e.g. the Node binding's `--nat-mode kernel` path) that
    /// want raw packets delivered to JS for routing through a
    /// kernel TUN + SNAT pool. Once set, NAT and TUN routing inside
    /// the core are **bypassed** — `inject_inbound_ip` hands every
    /// packet to this closure instead. Calling with `None` restores
    /// the default routing.
    ///
    /// Fires on the lktunnel dispatcher thread. The closure must not
    /// block — copy bytes and post to your own queue if needed.
    pub fn set_on_ip(&self, cb: Option<Arc<dyn Fn(&[u8]) + Send + Sync>>) {
        *self.inner.on_ip_override.lock() = cb;
    }

    /// The role this tunnel was constructed with. Cheap accessor —
    /// the role is set once at [`Self::connect`] / [`Self::connect_server`]
    /// and never changes.
    pub fn role(&self) -> TunnelRole { self.inner.role }

    /// Promote this tunnel to **server mode** — install a userspace
    /// NAT that bridges client IP packets to host sockets. Inbound IP
    /// from this point on is routed through the NAT. Fails if a TUN
    /// is already attached, or if server mode is already active, or
    /// if the tunnel was constructed for client role.
    pub fn start_server(&self) -> Result<(), &'static str> {
        if self.inner.role != TunnelRole::Server {
            return Err("start_server called on client-role tunnel — \
                        construct via LkTunnel::connect_server instead");
        }
        if !self.inner.connected.load(Ordering::Relaxed) { return Err("not connected"); }
        let id = self.inner.id;
        let emit = self.nat_emit();
        let mut nat = self.inner.nat.lock();
        #[cfg(unix)]
        if self.inner.tun.lock().is_some() { return Err("already in client mode"); }
        if nat.is_some()                   { return Err("already in server mode"); }
        // `NatDispatcher::new` doesn't touch the reactor — sockets are
        // created later from inbound IP on the dispatcher thread —
        // so constructing here from any thread is safe.
        let mut d = NatDispatcher::create_boxed(id, emit);
        // Plumb an outbound-queue-pressure sampler so the NAT
        // dispatcher's global rwnd scale can throttle every TCP
        // session's advertised window when our LK send queue fills.
        // Pressure is `(used / capacity) * 1000`; sampling is
        // lock-free (just atomic-load inside tokio's mpsc).
        let weak = Arc::downgrade(&self.inner);
        d.set_pressure_fn(Some(Arc::new(move || -> u16 {
            let Some(inner) = weak.upgrade() else { return 0 };
            // `capacity()` is the *remaining* free slots; convert to
            // used-fraction in the 0..1000 fixed-point shape that
            // `update_global_rwnd_scale` expects.
            let cap = SEND_QUEUE_CAP as u32;
            let free = inner.tx.capacity().min(cap as usize) as u32;
            let used = cap.saturating_sub(free);
            ((used * 1000) / cap.max(1)) as u16
        })));
        *nat = Some(d);
        drop(nat);

        // SOCKS5-over-QUIC: independent of the IP-frame path.
        self.ensure_quic_acceptor();
        Ok(())
    }

    /// Bring up the QUIC stream acceptor for SOCKS5-over-QUIC if
    /// not already up. Idempotent. Failures are logged but
    /// non-fatal — the IP-tunnel path (kernel TUN or userspace
    /// NAT) is independent of QUIC and should keep working.
    ///
    /// Server role only — peer-side SOCKS5 client speaks QUIC to
    /// our server-side acceptor. Called from both `start_server`
    /// (userspace NAT path) and `attach_tun_with_format` (kernel
    /// TUN path) so the two NAT modes are equivalent w.r.t.
    /// SOCKS5 handling. Without this, kernel-TUN mode silently
    /// dropped every SOCKS5-bound `'Q'` frame.
    fn ensure_quic_acceptor(&self) {
        if self.inner.role != TunnelRole::Server { return; }
        if self.inner.quic_server_handle.lock().is_some() { return; }
        let id = self.inner.id;
        match self.enable_quic_server() {
            Ok(server) => {
                let handle = socks5_quic::spawn_server_acceptor(server);
                *self.inner.quic_server_handle.lock() = Some(handle);
                log::info!("quic stream acceptor up on tunnel {id}");
            }
            Err(e) => {
                log::warn!("quic stream acceptor setup failed: {e} — \
                            socks5-over-quic mode will not be available");
            }
        }
    }

    /// Attach a TUN fd. The bridge takes ownership of `fd` (closes
    /// on detach / drop). Inbound IP from this point on is written
    /// to the TUN. Fails if the tunnel is already running a
    /// userspace NAT (`start_server`) or already has a TUN. Unix-only.
    ///
    /// Valid for both client and server roles:
    ///   * Client role: TUN holds the host's outbound IP, e.g.
    ///     Android `VpnService` or the Rust binary's `--client-tun`.
    ///   * Server role: TUN is a per-session `bale<K>` device the
    ///     kernel forwards via MASQUERADE/pf — the kernel-TUN
    ///     server NAT path. Mutually exclusive with `start_server`
    ///     (userspace NAT) on the same tunnel.
    ///
    /// Uses [`tun::TunFormat::RawIp`] framing — correct for Linux
    /// `IFF_NO_PI` and Android `VpnService` fds. For macOS `utun*`
    /// fds use [`Self::attach_tun_with_format`] with
    /// [`tun::TunFormat::UtunAfHeader`].
    #[cfg(unix)]
    pub fn attach_tun(&self, fd: i32) -> Result<(), &'static str> {
        self.attach_tun_with_format(fd, tun::TunFormat::RawIp)
    }

    /// As [`Self::attach_tun`] but with an explicit on-wire format.
    /// Callers on macOS pass [`tun::TunFormat::UtunAfHeader`] so the
    /// bridge transparently strips / prepends the 4-byte AF header
    /// macOS utun devices use.
    #[cfg(unix)]
    pub fn attach_tun_with_format(
        &self,
        fd:     i32,
        format: tun::TunFormat,
    ) -> Result<(), &'static str> {
        if !self.inner.connected.load(Ordering::Relaxed) { return Err("not connected"); }
        if fd < 0 { return Err("invalid fd"); }
        // Quick pre-checks before we hop — bail fast on user errors.
        if self.inner.nat.lock().is_some() { return Err("already in server mode"); }
        if self.inner.tun.lock().is_some() { return Err("TUN already attached"); }
        // `TunBridge::attach_with_format` calls
        // `dispatcher::register_source`, which must run on the
        // dispatcher thread. Hop with a oneshot so the caller sees
        // the result synchronously.
        let send = self.tun_send();
        let wake = self.tun_wake_on_drain();
        let counters = Arc::clone(&self.inner.counters);
        let inner = Arc::clone(&self.inner);
        let (tx, rx) = std::sync::mpsc::channel();
        dispatcher::post(Box::new(move || {
            let nat = inner.nat.lock();
            let mut tun = inner.tun.lock();
            if nat.is_some() { let _ = tx.send(Err("already in server mode")); return; }
            if tun.is_some() { let _ = tx.send(Err("TUN already attached"));   return; }
            *tun = Some(TunBridge::attach_with_format(fd, counters, send, wake, format));
            drop(nat); drop(tun);
            let _ = tx.send(Ok(()));
        }));
        let res = rx.recv().unwrap_or(Err("dispatcher not running"));
        if res.is_ok() {
            log::info!("VPN: enabled (TUN attached, fd={fd})");
            // Server-role TUN attach also needs the QUIC stream
            // acceptor so SOCKS5 clients can connect over the
            // same tunnel. Without this, kernel-TUN server mode
            // silently dropped every 'Q' frame and SOCKS5
            // clients hung in `ensure_quic_client`'s retry loop
            // forever. No-op for client-role tunnels.
            self.ensure_quic_acceptor();
        }
        res
    }

    /// Drop the TUN bridge installed by [`Self::attach_tun`]. The
    /// `TunBridge`'s `Drop` closes the fd and deregisters from the
    /// mio reactor, so inbound IP packets stop being routed to a TUN
    /// after this returns. Idempotent — no-op if no TUN is attached.
    /// Used by the Android side when the user toggles VPN off at
    /// runtime; the LK tunnel + SOCKS5 listener (if up) keep running.
    #[cfg(unix)]
    pub fn detach_tun(&self) -> Result<(), &'static str> {
        if self.inner.tun.lock().is_none() { return Ok(()); }
        let inner = Arc::clone(&self.inner);
        let (tx, rx) = std::sync::mpsc::channel();
        // Drop on the dispatcher thread — the TunBridge's mio source
        // de-registration must happen there, same as attach.
        dispatcher::post(Box::new(move || {
            let _bridge = inner.tun.lock().take();
            // _bridge drops here, on the dispatcher thread. The Drop
            // closes the fd and deregisters from the reactor.
            let _ = tx.send(());
        }));
        let _ = rx.recv();
        log::info!("VPN: disabled (TUN detached)");
        Ok(())
    }

    /// Snapshot of NAT per-flow stats (server mode only). Returns
    /// `None` if no NAT is active.
    pub fn flow_stats(&self) -> Option<NatStats> {
        self.inner.nat.lock().as_ref().map(|n| n.flow_stats())
    }

    /// Bring up a QUIC endpoint in **server** mode on top of this
    /// tunnel. Internal — only the SOCKS5 server/client wiring in
    /// the same crate consumes this. There's no JS/Kotlin surface
    /// for QUIC directly; the only externally-visible knob is the
    /// SOCKS5 server toggle that internally drives QUIC.
    pub(crate) fn enable_quic_server(&self)
        -> Result<quic_tunnel::QuicServer, quic_tunnel::QuicEndpointError>
    {
        let (tx, rx) = tokio::sync::mpsc::channel::<bytes::Bytes>(
            quic_tunnel::QUIC_RX_QUEUE_CAP);
        {
            let mut slot = self.inner.quic_rx_tx.lock();
            if slot.is_some() {
                return Err(quic_tunnel::QuicEndpointError::Io(
                    std::io::Error::new(std::io::ErrorKind::AlreadyExists,
                                        "quic already enabled on this tunnel")));
            }
            *slot = Some(tx);
        }
        let server_config = quic_tunnel::make_server_config()?;
        let endpoint = quic_tunnel::build_endpoint(self.clone(), rx, Some(server_config))?;
        Ok(quic_tunnel::QuicServer { endpoint })
    }

    /// Idempotently bring up the QUIC client connection to the peer
    /// and spawn the auto-reconnect keeper. Safe to call multiple
    /// times. After the first successful call, the keeper task
    /// monitors `Connection.closed()` and re-establishes
    /// automatically on idle timeout / network blip / peer restart,
    /// so the SOCKS5 listener doesn't have to be toggled to recover.
    pub async fn ensure_quic_client(&self)
        -> Result<(), quic_tunnel::QuicEndpointError>
    {
        // Fast path: already up. Cheap lock — no setup work to
        // serialise so we don't bother acquiring connect_lock.
        if self.inner.quic_client.lock().is_some() { return Ok(()); }

        // Slow path: serialise with any other in-flight ensure
        // call (e.g. the auto-warm spawned at peer-joined racing
        // the explicit enable_socks5_server call from startVpn).
        // The loser of the race awaits here, then sees the
        // already-installed quic_client and returns Ok.
        let _g = self.inner.connect_lock.lock().await;
        if self.inner.quic_client.lock().is_some() { return Ok(()); }

        // Retry the handshake for as long as the tunnel is alive.
        // The client's `transport.connect` returns when *we* join
        // the LK room, but the *peer* (server) may not yet have
        // called `start_server()` to bring up its QUIC acceptor.
        // The slow-server path used to time out at 30 s, leaving
        // the user to retry by toggling SOCKS5 off-on — that
        // re-handshake in turn caused the LK-ICE / DuplicateIdentity
        // churn we saw on the server. Retry forever instead: any
        // SOCKS5 / TUN toggle is then a no-op against the warm
        // client. The loop terminates when the tunnel disconnects
        // (`connected` flag flips false), via the early-exit check
        // at the top of each iteration.
        use std::time::Duration;
        let mut backoff = Duration::from_millis(250);
        let client = loop {
            if !self.inner.connected.load(Ordering::Relaxed) {
                log::info!("ensure_quic_client: tunnel disconnected — giving up");
                return Err(quic_tunnel::QuicEndpointError::Io(
                    std::io::Error::new(std::io::ErrorKind::NotConnected,
                        "tunnel disconnected during quic handshake")));
            }
            match self.connect_quic_to_peer().await {
                Ok(c) => break c,
                Err(e) => {
                    log::debug!("ensure_quic_client: handshake attempt failed: {e} — retry in {backoff:?}");
                    tokio::time::sleep(backoff).await;
                    // Cap at 5 s so the bringup latency from a slow
                    // server-side start_server stays bounded.
                    backoff = (backoff * 2).min(Duration::from_secs(5));
                }
            }
        };

        *self.inner.quic_client.lock() = Some(Arc::new(client));
        // Spawn the keeper with a Weak ref only — must NOT
        // capture a strong LkTunnel or the explicit disconnect
        // path can't drop Inner until the keeper next iterates,
        // contending with the stats poller's @Synchronized JNI
        // calls and ANR'ing the Service.
        let weak = Arc::downgrade(&self.inner);
        runtime().spawn(quic_tunnel::keeper_task(weak));
        Ok(())
    }

    /// Start a SOCKS5 listener on `0.0.0.0:port` that pumps each
    /// accepted connection through a QUIC stream to the peer. Uses
    /// the persistent QUIC client established by
    /// [`Self::ensure_quic_client`] (calls it if not already up).
    /// The peer must be in server mode (which auto-enables the matching
    /// QUIC stream acceptor via [`Self::start_server`]).
    ///
    /// The accept loop reads the *current* QuicClient from `TunnelInner`
    /// on each accept, so it transparently follows the reconnect
    /// keeper — a connection that drops while the listener is up
    /// recovers in the background; new SOCKS5 client requests just
    /// have to wait for the keeper to reconnect.
    pub async fn enable_socks5_server(&self, port: u16)
        -> Result<std::net::SocketAddr, socks5_quic::Socks5Error>
    {
        if self.inner.socks5_handle.lock().is_some() {
            return Err(socks5_quic::Socks5Error::AlreadyEnabled);
        }
        self.ensure_quic_client().await?;
        let handle = socks5_quic::enable_listener(self.clone(), port).await?;
        let addr = handle.local_addr;
        {
            let mut slot = self.inner.socks5_handle.lock();
            if slot.is_some() {
                handle.listener_abort.abort();
                return Err(socks5_quic::Socks5Error::AlreadyEnabled);
            }
            *slot = Some(handle);
        }
        log::info!("SOCKS5: enabled at {addr}");
        Ok(addr)
    }

    /// Tear down the SOCKS5 listener. The persistent QUIC client
    /// stays up — re-enabling SOCKS5 won't re-handshake. Idempotent.
    pub fn disable_socks5_server(&self) {
        if let Some(h) = self.inner.socks5_handle.lock().take() {
            h.listener_abort.abort();
            log::info!("SOCKS5: disabled (listener at {} torn down)", h.local_addr);
        }
    }

    /// Bring up a QUIC endpoint in **client** mode and dial the peer.
    /// Internal — same rationale as [`Self::enable_quic_server`].
    ///
    /// Clears `quic_rx_tx` on every failure path so a retry (or a
    /// concurrent caller serialised behind `connect_lock`) can
    /// install a fresh sender. Without the cleanup, a single
    /// failed handshake would leave the slot permanently leaked
    /// and every subsequent attempt would error `AlreadyExists`.
    pub(crate) async fn connect_quic_to_peer(&self)
        -> Result<quic_tunnel::QuicClient, quic_tunnel::QuicEndpointError>
    {
        let (tx, rx) = tokio::sync::mpsc::channel::<bytes::Bytes>(
            quic_tunnel::QUIC_RX_QUEUE_CAP);
        {
            let mut slot = self.inner.quic_rx_tx.lock();
            if slot.is_some() {
                return Err(quic_tunnel::QuicEndpointError::Io(
                    std::io::Error::new(std::io::ErrorKind::AlreadyExists,
                                        "quic already enabled on this tunnel")));
            }
            *slot = Some(tx);
        }

        // Closure-style cleanup: any early return below releases
        // the `quic_rx_tx` slot we just claimed.
        let cleanup = || {
            *self.inner.quic_rx_tx.lock() = None;
        };

        let client_config = match quic_tunnel::make_client_config() {
            Ok(c)  => c,
            Err(e) => { cleanup(); return Err(e.into()); }
        };
        let mut endpoint = match quic_tunnel::build_endpoint(self.clone(), rx, None) {
            Ok(e)  => e,
            Err(e) => { cleanup(); return Err(e); }
        };
        endpoint.set_default_client_config(client_config);
        // "lktunnel" matches the SAN in the self-signed cert built
        // by `make_server_config`.
        let connecting = match endpoint.connect(quic_tunnel::peer_sentinel_addr(), "lktunnel") {
            Ok(c)  => c,
            Err(e) => { cleanup(); return Err(e.into()); }
        };
        match connecting.await {
            Ok(connection) => Ok(quic_tunnel::QuicClient { endpoint, connection }),
            Err(e)         => { cleanup(); Err(e.into()) }
        }
    }

    #[cfg(unix)]
    fn tun_send(&self) -> tun::SendIp {
        // Weak ref to break the Inner → tun → SendIp → LkTunnel → Inner
        // cycle. Upgrade per call; treat a defunct tunnel as a drop
        // (return true, don't pause).
        let weak = Arc::downgrade(&self.inner);
        Arc::new(move |bytes: &[u8]| -> bool {
            let Some(inner) = weak.upgrade() else { return true };
            match (LkTunnel { inner }).send_ip(bytes) {
                Ok(())                        => true,
                Err(SendError::Backpressure)  => false,
                Err(_)                        => true,
            }
        })
    }

    #[cfg(unix)]
    fn tun_wake_on_drain(&self) -> tun::WakeOnDrain {
        // Weak — same cycle-break as `tun_send`. The outer closure
        // runs on a TUN-bridge pause; upgrade once to register the
        // drain waiter, then upgrade again inside it to schedule
        // the resume on the dispatcher thread.
        let weak = Arc::downgrade(&self.inner);
        Arc::new(move || {
            let Some(inner) = weak.upgrade() else { return };
            let weak_for_drain = weak.clone();
            (LkTunnel { inner }).on_send_drained(move || {
                let Some(inner) = weak_for_drain.upgrade() else { return };
                dispatcher::post(Box::new(move || {
                    if let Some(b) = inner.tun.lock().as_mut() {
                        b.resume();
                    }
                }));
            });
        })
    }

    fn nat_emit(&self) -> nat::EmitFn {
        // Weak — cycle-break. Counter bumping happens inside send_ip.
        let weak = Arc::downgrade(&self.inner);
        Arc::new(move |bytes: &[u8]| -> bool {
            let Some(inner) = weak.upgrade() else { return false };
            (LkTunnel { inner }).send_ip(bytes).is_ok()
        })
    }
}

impl Clone for LkTunnel {
    /// Cheap — just bumps the inner [`Arc`]. Multiple owners share
    /// the same send queue, room, sender task, and drain-waiters list.
    /// Cleanup happens when the last clone is dropped (or anyone calls
    /// [`Self::disconnect`] explicitly).
    fn clone(&self) -> Self { Self { inner: Arc::clone(&self.inner) } }
}

impl TunnelInner {
    /// Inbound IP packet → user override (if set) ELSE NAT (server)
    /// ELSE TUN (client) ELSE drop. **Dispatcher-thread only** —
    /// called from the `on_ip` task posted by [`LkTunnel::connect`].
    ///
    /// The user-override path lets a shim (e.g. the Node binding's
    /// `--nat-mode kernel`) take raw packets and do its own routing
    /// — typically into a JS-side TUN with SNAT for multi-peer
    /// gateways. When override is set, NAT and TUN below it are
    /// skipped entirely.
    fn inject_inbound_ip(&self, ip: &[u8]) {
        if let Some(cb) = self.on_ip_override.lock().as_ref().cloned() {
            self.counters.bump_rx(ip.len());
            cb(ip);
            return;
        }
        if let Some(n) = self.nat.lock().as_mut() {
            self.counters.bump_rx(ip.len());
            n.process(ip);
            return;
        }
        #[cfg(unix)]
        if let Some(b) = self.tun.lock().as_mut() {
            match b.inject(ip) {
                InjectStatus::Accepted  => {}
                InjectStatus::QueueFull => {
                    errors::enqueue(self.id, "tun_write_overflow", libc::ENOBUFS,
                                    "TUN pending TX queue full — packet dropped");
                }
            }
        }
        // Neither override / nat / tun set — silent drop (caller hasn't chosen a mode yet).
    }

    /// Idempotent teardown. Used by both [`LkTunnel::disconnect`] and
    /// the Inner [`Drop`]. The `Disconnected` state-tx flip is the
    /// guard — a second entry sees `Disconnected` and exits.
    fn teardown(&self) {
        let already_done = match *self.state_tx.borrow() {
            TunnelState::Disconnected   => true,
            TunnelState::Failed(_)      => true,
            _ => false,
        };
        // Mark Disconnected first so concurrent state observers see
        // the terminal value, even if the connect task is still
        // running and would otherwise transition to Connected.
        let _ = self.state_tx.send(TunnelState::Disconnected);
        if already_done { return; }
        // Fire a synthetic Disconnected event to the process-wide
        // observer. The run loop normally emits one when the LK
        // SDK reports disconnect, but an explicit `disconnect()`
        // or `Drop` (e.g., last Arc going away when run_client is
        // cancelled mid-call) aborts the run loop's task before
        // it can emit — without this synthetic emit, the
        // signaling lib's `call_active` never flips false, and
        // the WS rule engine doesn't spawn the run loop again.
        // Idempotent in the rule engine — set_call_active(false)
        // on already-false is a no-op.
        fire_global(&Event {
            kind: EventKind::Disconnected,
            info: "tunnel torn down".into(),
        });
        self.connected.store(false, Ordering::Relaxed);
        if let Some(h) = self.task.lock().take()        { h.abort(); }
        if let Some(h) = self.sender_task.lock().take() { h.abort(); }
        // Tear down SOCKS5 / QUIC ahead of NAT/TUN drop — they own
        // tokio tasks that hold weak refs into Inner, so aborting
        // them first means those tasks can't observe a partially-
        // torn state during the dispatcher hop below.
        if let Some(h) = self.socks5_handle.lock().take() {
            h.listener_abort.abort();
        }
        if let Some(h) = self.quic_server_handle.lock().take() {
            h.accept_abort.abort();
        }
        // Drop the persistent QUIC client — closes the connection +
        // endpoint, releases TunnelUdpSocket and quic_rx_tx sender.
        let _ = self.quic_client.lock().take();
        *self.quic_rx_tx.lock() = None;

        // Move NAT/TUN boxes out and drop them on the dispatcher
        // thread (mio source de-registration must run there).
        let nat_box = self.nat.lock().take();
        #[cfg(unix)]
        let tun_box = self.tun.lock().take();
        #[cfg(not(unix))]
        let tun_box: Option<Box<()>> = None;
        if nat_box.is_some() || tun_box.is_some() {
            dispatcher::post(Box::new(move || {
                drop(nat_box);
                drop(tun_box);
            }));
        }
        // Wake any registered drain-waiters so blocked TUN bridges
        // unstick instead of waiting forever.
        let drained: Vec<_> = self.drain_waiters.lock().drain(..).collect();
        for w in drained { w(); }
        // Close the room if it was dialled.
        if let Some(room) = self.room.lock().take() {
            runtime().spawn(async move {
                if let Err(e) = room.close().await {
                    log::warn!("LkTunnel: room.close failed: {e}");
                }
            });
        }
    }
}

impl Drop for TunnelInner {
    fn drop(&mut self) { self.teardown(); }
}

// ── Internal: per-tunnel task loop ─────────────────────────────────

/// Top-level connect task. Owned by `inner.task` via its `AbortHandle`.
/// Sequence: dial room → store on inner → spawn sender → drive event
/// loop (peer-wait, then steady-state). Lifecycle transitions are
/// surfaced through both `state_tx` (for `await_connected`) and
/// `on_event` (for caller callbacks like the Kotlin observer).
#[allow(clippy::too_many_arguments)]
async fn run_connect_task(
    id:        u64,
    url:       String,
    token:     String,
    send_rx:   tokio::sync::mpsc::Receiver<Vec<u8>>,
    weak:      std::sync::Weak<TunnelInner>,
    connected: Arc<AtomicBool>,
    on_ip:     Arc<dyn Fn(&[u8]) + Send + Sync>,
    on_event:  Arc<dyn Fn(Event) + Send + Sync>,
) {
    log::info!("LkTunnel[{id}]::connect: dialing {url} token={token}");
    // Default ICE policy — let libwebrtc pick the best candidate pair
    // (host / srflx / relay in priority order). We previously forced
    // Relay-only when investigating an SCTP-over-DTLS DPI-fingerprint
    // theory, but the SFU's advertised TURN didn't establish; now
    // that tunnel traffic rides RTP-over-SRTP instead of SCTP, the
    // fingerprint concern is moot.
    let room_options = RoomOptions::default();
    // Phase 1: dial.
    let (room, rx) = match Room::connect(&url, &token, room_options).await {
        Ok(x) => x,
        Err(e) => {
            let msg = e.to_string();
            log::warn!("LkTunnel[{id}]: Room::connect failed: {msg}");
            if let Some(inner) = weak.upgrade() {
                let _ = inner.state_tx.send(TunnelState::Failed(msg.clone()));
            }
            emit_event(&on_event, EventKind::Error, msg);
            emit_event(&on_event, EventKind::Disconnected, "connect failed".into());
            return;
        }
    };
    let room = Arc::new(room);

    // Phase 2: stow the room on `inner` and spawn the sender task.
    // If the user dropped all handles during dial, weak.upgrade fails
    // — close the room we just opened and bail.
    let Some(inner) = weak.upgrade() else {
        let _ = room.close().await;
        return;
    };
    inner.room.lock().replace(Arc::clone(&room));

    // Publish our outgoing audio carrier tracks and install the
    // byte-substitution FrameTransformer on each one's RtpSender. This
    // is the actual tunnel transport — see rtp.rs for the why (SCTP DPI
    // fingerprint avoidance). We publish TRACK_COUNT parallel tracks and
    // stripe outbound frames across them to exceed Opus's per-track
    // 510 kbps ceiling.
    let mut senders: Vec<Arc<rtp::RtpSender>> = Vec::with_capacity(rtp::TRACK_COUNT);
    for index in 0..rtp::TRACK_COUNT {
        let published = if rtp::USE_VIDEO_CARRIER {
            rtp::publish_video(&room).await
        } else {
            rtp::publish(&room, index).await
        };
        match published {
            Ok(s) => senders.push(Arc::new(s)),
            Err(e) => {
                log::warn!("LkTunnel[{id}]: rtp::publish track {index} failed: {e}");
                if let Some(inner) = weak.upgrade() {
                    let _ = inner.state_tx.send(TunnelState::Failed(e.clone()));
                }
                emit_event(&on_event, EventKind::Error, e);
                let _ = room.close().await;
                return;
            }
        }
    }
    *inner.rtp_senders.lock() = senders.clone();

    let weak_for_sender = std::sync::Weak::clone(&weak);
    let senders_for_loop = senders;
    let sender = runtime().spawn(async move {
        let mut send_rx = send_rx;
        let mut drops:    u64 = 0;
        let mut sent:     u64 = 0;
        let mut packets:  u64 = 0;
        // Round-robin cursor into `senders_for_loop` for striping.
        let mut next_track: usize = 0;
        let frame_cap = rtp::max_frame_bytes();
        let mut batch: Vec<u8> = Vec::with_capacity(frame_cap);

        // Opportunistic packing: at every wakeup, take the first packet
        // off the channel (blocking), then greedily drain any others
        // already queued and concatenate as many as fit under
        // MAX_FRAME_BYTES into a single Opus-frame-sized payload. The
        // C++ transformer drains at the encoder's 50 fps cadence, so
        // packing N packets per send call costs one queue slot instead
        // of N — keeping us under the SFU's per-track bitrate cap on
        // small-packet bursts (SYN-ACKs, ACKs, DNS) without adding
        // any artificial buffering delay.
        // `flush` is async because it has to await the FrameTransformer
        // drain when its 256-slot outgoing queue is full. Awaiting here
        // — instead of the old "log + clear + move on" — is what makes
        // backpressure actually propagate: sender task awaits → mpsc
        // (send_rx) fills → AsyncUdpSocket.try_send returns WouldBlock
        // → DrainPoller parks quinn → quinn's per-stream flow control
        // kicks in. Without this, quinn happily pushes datagrams that
        // we silently drop, and TCP-over-QUIC sees collapse.
        // Stripe each batch across the parallel carrier tracks. `next`
        // is the round-robin cursor: we try tracks starting there and
        // send to the first whose transformer queue accepts the frame,
        // so load spreads evenly and a momentarily-full track is just
        // skipped. We only block (backpressure) when EVERY track's queue
        // is full — which is what propagates flow control back up to
        // quinn (mpsc fills → AsyncUdpSocket WouldBlock → quinn parks).
        async fn flush_with_backpressure(
            batch: &mut Vec<u8>,
            sent:  &mut u64,
            cumulative_waits: &mut u64,
            packets: u64,
            senders: &[Arc<rtp::RtpSender>],
            next:  &mut usize,
        ) {
            if batch.is_empty() || senders.is_empty() { return; }
            // Encoder runs at ~50 Hz (20ms ticks). On overflow, retry
            // with a short backoff that doesn't burn CPU but doesn't
            // wait through more than one encoder tick either.
            const RETRY_MS: u64 = 5;
            let n = senders.len();
            // Local wait counter: tracks just *this* flush. Logged once
            // on entry into backpressure and once on recovery — no
            // power-of-two spam.
            let mut local_waits = 0u64;
            loop {
                // One sweep across all tracks, starting at the cursor.
                for off in 0..n {
                    let i = (*next + off) % n;
                    if senders[i].send(batch) {
                        *next = (i + 1) % n;
                        if local_waits > 0 {
                            log::warn!(
                                "rtp send drained after {local_waits} waits (~{}ms)",
                                local_waits * RETRY_MS,
                            );
                            *cumulative_waits = cumulative_waits.saturating_add(local_waits);
                        }
                        *sent = sent.saturating_add(1);
                        if sent.is_power_of_two() {
                            log::debug!(
                                "rtp send checkpoint: enqueued {sent} frames packing \
                                 {packets} ip-packets total (last_frame={}B, track={i}, \
                                 cumulative_waits={cumulative_waits})",
                                batch.len(),
                            );
                        }
                        batch.clear();
                        return;
                    }
                }
                // Every track's queue was full this sweep.
                if local_waits == 0 {
                    log::warn!("rtp send: all {n} carrier tracks' queues full — backpressuring");
                }
                local_waits = local_waits.saturating_add(1);
                tokio::time::sleep(std::time::Duration::from_millis(RETRY_MS)).await;
            }
        }

        loop {
            // Block for the first packet of the next batch.
            let first = match send_rx.recv().await {
                Some(b) => b,
                None    => break,
            };
            rtp::push_packed(&mut batch, &first, frame_cap);
            packets = packets.saturating_add(1);

            // Drain any additional packets that have already arrived,
            // packing as long as they fit. If one wouldn't fit, flush
            // the current batch and start a new one with it.
            use tokio::sync::mpsc::error::TryRecvError;
            loop {
                match send_rx.try_recv() {
                    Ok(next) => {
                        packets = packets.saturating_add(1);
                        if !rtp::push_packed(&mut batch, &next, frame_cap) {
                            flush_with_backpressure(
                                &mut batch, &mut sent, &mut drops, packets, &senders_for_loop, &mut next_track,
                            ).await;
                            rtp::push_packed(&mut batch, &next, frame_cap);
                        }
                    }
                    Err(TryRecvError::Empty)        => break,
                    Err(TryRecvError::Disconnected) => break,
                }
            }

            flush_with_backpressure(
                &mut batch, &mut sent, &mut drops, packets, &senders_for_loop, &mut next_track,
            ).await;

            if let Some(inner) = weak_for_sender.upgrade() {
                let drained: Vec<_> = inner.drain_waiters.lock().drain(..).collect();
                for w in drained { w(); }
            }
        }
        // Final flush (channel closed mid-batch).
        flush_with_backpressure(
            &mut batch, &mut sent, &mut drops, packets, &senders_for_loop, &mut next_track,
        ).await;
    });
    inner.sender_task.lock().replace(sender.abort_handle());
    drop(inner);  // release Arc; only weak remains for the rest of the task.

    // Phase 3: run the event loop. Updates state_tx on Connected /
    // Disconnected. Drops `connected` flag at exit.
    run_tunnel_loop(weak, connected, room, rx, on_ip, on_event).await;
}

async fn run_tunnel_loop(
    weak:      std::sync::Weak<TunnelInner>,
    connected: Arc<AtomicBool>,
    room:      Arc<Room>,
    mut rx:    tokio::sync::mpsc::UnboundedReceiver<RoomEvent>,
    on_ip:     Arc<dyn Fn(&[u8]) + Send + Sync>,
    on_event:  Arc<dyn Fn(Event) + Send + Sync>,
) {
    // Seed-from-roster for late joiners — LK only fires
    // ParticipantConnected for participants joining AFTER our connect
    // returns, so a server accepting into an already-populated room
    // misses everyone.
    let mut peer_count: u32 = 0;
    for (_, p) in room.remote_participants().iter() {
        peer_count += 1;
        emit_event(&on_event, EventKind::PeerJoined, p.identity().as_str().to_string());
    }

    // Pre-Connected wait if needed.
    if peer_count == 0 {
        log::info!("LkTunnel: waiting up to {}s for first peer", PEER_WAIT_MS / 1000);
        let deadline = tokio::time::Instant::now() + Duration::from_millis(PEER_WAIT_MS);
        let joined = loop {
            match tokio::time::timeout_at(deadline, rx.recv()).await {
                Err(_)        => break false,
                Ok(None)      => break false,
                Ok(Some(ev))  => match ev {
                    RoomEvent::ParticipantConnected(p) => {
                        peer_count = 1;
                        emit_event(&on_event, EventKind::PeerJoined,
                            p.identity().as_str().to_string());
                        break true;
                    }
                    RoomEvent::TrackSubscribed { track, .. } => {
                        attach_rtp_receiver(&weak, track, &on_ip);
                    }
                    RoomEvent::Disconnected { reason } => {
                        let msg = format!("{reason:?}");
                        log::info!("LkTunnel: disconnected during peer-wait — reason={msg}");
                        if let Some(inner) = weak.upgrade() {
                            let _ = inner.state_tx.send(TunnelState::Failed(msg.clone()));
                        }
                        emit_event(&on_event, EventKind::Disconnected, msg);
                        return;
                    }
                    // Same policy as the main loop: don't ride out the
                    // SDK's reconnect. Close + bail so the caller fails
                    // fast instead of stalling out the storm.
                    RoomEvent::Reconnecting => {
                        log::info!("LkTunnel: reconnecting during peer-wait — closing");
                        let r = Arc::clone(&room);
                        tokio::spawn(async move { r.close().await.ok(); });
                        let msg = "reconnecting during peer-wait";
                        if let Some(inner) = weak.upgrade() {
                            let _ = inner.state_tx.send(TunnelState::Failed(msg.into()));
                        }
                        emit_event(&on_event, EventKind::Disconnected, msg.into());
                        return;
                    }
                    _ => {}
                }
            }
        };
        if !joined {
            log::warn!("LkTunnel: no peer joined within {}s — closing room",
                PEER_WAIT_MS / 1000);
            let r = Arc::clone(&room);
            tokio::spawn(async move { r.close().await.ok(); });
            let msg = "no peer joined within timeout";
            if let Some(inner) = weak.upgrade() {
                let _ = inner.state_tx.send(TunnelState::Failed(msg.into()));
            }
            emit_event(&on_event, EventKind::Error, msg.into());
            return;
        }
    }

    // Peer is in — flip to Connected.
    connected.store(true, Ordering::Relaxed);
    if let Some(inner) = weak.upgrade() {
        let _ = inner.state_tx.send(TunnelState::Connected);
    }
    emit_event(&on_event, EventKind::Connected, String::new());
    log::info!("LkTunnel: connected (peer present)");

    // Auto-warm the QUIC client connection as soon as the peer is
    // in — only for client-role tunnels. The role is fixed at
    // construction (`LkTunnel::connect` vs `LkTunnel::connect_server`),
    // so no race between the auto-warm and `start_server`'s
    // `enable_quic_server`: the latter never runs on a client-role
    // tunnel, and the auto-warm never runs on a server-role one.
    //
    // Pre-warming means client-mode platform shims (Android, Node)
    // don't have to explicitly call `ensure_quic_client` — toggling
    // SOCKS5 on later is instantaneous because the handshake
    // already completed.
    if let Some(inner) = weak.upgrade() {
        match inner.role {
            TunnelRole::Client => {
                let tunnel = LkTunnel { inner: inner.clone() };
                runtime().spawn(async move {
                    if let Err(e) = tunnel.ensure_quic_client().await {
                        log::warn!("auto ensure_quic_client failed: {e} — \
                                    SOCKS5 will retry on first enable");
                    }
                });
            }
            TunnelRole::Server => {
                log::debug!("LkTunnel: server-role — skipping client auto-warm");
            }
        }
    }

    // Main loop. The LK SDK doesn't always deliver ParticipantDisconnected
    // promptly when a peer drops ungracefully (m144 waits out the
    // signaling-stream timeout, ~30 s). A 2 s probe of the roster
    // closes the room within one tick even if no event fires.
    let mut probe = tokio::time::interval(Duration::from_secs(2));
    probe.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Skip);
    probe.tick().await;  // skip the immediate first tick

    loop {
        tokio::select! {
            ev = rx.recv() => match ev {
                None => break,
                Some(event) => match event {
                    RoomEvent::ParticipantConnected(p) => {
                        peer_count += 1;
                        emit_event(&on_event, EventKind::PeerJoined,
                            p.identity().as_str().to_string());
                    }
                    RoomEvent::ParticipantDisconnected(p) => {
                        peer_count = peer_count.saturating_sub(1);
                        emit_event(&on_event, EventKind::PeerLeft,
                            p.identity().as_str().to_string());
                    }
                    RoomEvent::TrackSubscribed { track, .. } => {
                        attach_rtp_receiver(&weak, track, &on_ip);
                    }
                    RoomEvent::Disconnected { reason } => {
                        let msg = format!("{reason:?}");
                        log::info!("LkTunnel: room disconnected — reason={msg}");
                        emit_event(&on_event, EventKind::Disconnected, msg);
                        break;
                    }
                    // We don't ride out the SDK's auto-reconnect. Its
                    // resume/restart storm runs ~30-50s while the roster
                    // is unreliable, and our 2s probe + the peer thrash
                    // against it. Bail on the first Reconnecting signal:
                    // closing the room aborts the engine's reconnect, and
                    // the Disconnected event lets the daemon redial fresh.
                    RoomEvent::Reconnecting => {
                        log::info!("LkTunnel: room reconnecting — tearing down (reconnect disabled)");
                        let r = Arc::clone(&room);
                        tokio::spawn(async move { r.close().await.ok(); });
                        emit_event(&on_event, EventKind::Disconnected, "reconnecting".into());
                        break;
                    }
                    _ => {}
                }
            },
            _ = probe.tick() => {
                if room.remote_participants().is_empty() {
                    log::info!("LkTunnel: room empty — closing (peer left without firing Disconnected)");
                    let r = Arc::clone(&room);
                    tokio::spawn(async move { r.close().await.ok(); });
                    // Push Disconnected ourselves and exit — the m144
                    // SDK doesn't reliably fire it back after we close
                    // an already-empty room.
                    emit_event(&on_event, EventKind::Disconnected,
                        "room empty".into());
                    break;
                }
            }
        }
    }

    connected.store(false, Ordering::Relaxed);
    if let Some(inner) = weak.upgrade() {
        let _ = inner.state_tx.send(TunnelState::Disconnected);
    }
}

fn emit_event(
    on_event: &Arc<dyn Fn(Event) + Send + Sync>,
    kind:     EventKind,
    info:     String,
) {
    let ev = Event { kind, info };
    on_event(ev.clone());
    fire_global(&ev);
}

/// Parse one wire payload and route to the matching consumer.
/// `'I'`-tagged frames go to `on_ip` (raw IP packets for NAT / TUN);
/// `'Q'`-tagged frames go to `on_quic` (quinn datagrams for the QUIC
/// reliable channel that backs SOCKS5-over-tunnel). Unknown tags are
/// dropped with a debug log — the tag byte reserves namespace for
/// additional planes without a breaking wire change.
/// Bytes arrive here from the RTP transformer's on_data observer
/// (see [`rtp`]).
fn dispatch_payload(
    payload: &[u8],
    on_ip:   &Arc<dyn Fn(&[u8]) + Send + Sync>,
    on_quic: &Arc<dyn Fn(&[u8]) + Send + Sync>,
) {
    static DISPATCHED: AtomicU64 = AtomicU64::new(0);
    static IP_COUNT:   AtomicU64 = AtomicU64::new(0);
    static QUIC_COUNT: AtomicU64 = AtomicU64::new(0);
    let n = DISPATCHED.fetch_add(1, Ordering::Relaxed) + 1;
    if n.is_power_of_two() {
        log::debug!("rtp dispatch checkpoint: {n} payloads (last len={}) ip={} quic={}",
            payload.len(),
            IP_COUNT.load(Ordering::Relaxed),
            QUIC_COUNT.load(Ordering::Relaxed));
    }
    match payload.first() {
        Some(&FRAME_TYPE_IP)   => { IP_COUNT.fetch_add(1, Ordering::Relaxed); on_ip(&payload[1..]) }
        Some(&FRAME_TYPE_QUIC) => { QUIC_COUNT.fetch_add(1, Ordering::Relaxed); on_quic(&payload[1..]) }
        Some(&other)           => log::debug!(
            "unknown frame type 0x{other:02x} (len={}) — dropping", payload.len()),
        None                   => {}
    }
}

/// Attach a receiver-side FrameTransformer to a newly-subscribed remote
/// carrier track and stash the handle on TunnelInner so it stays alive.
/// Handles both audio and video tracks — the carrier kind is the
/// peer's send-side choice, and the frame format is identical either
/// way, so we attach to whichever the peer publishes.
fn attach_rtp_receiver(
    weak:  &std::sync::Weak<TunnelInner>,
    track: livekit::track::RemoteTrack,
    on_ip: &Arc<dyn Fn(&[u8]) + Send + Sync>,
) {
    use livekit::track::RemoteTrack;
    let Some(inner) = weak.upgrade() else { return };
    let on_ip = Arc::clone(on_ip);
    // QUIC inbound: try to push to inner.quic_rx_tx (set by
    // `LkTunnel::enable_quic_*`). If no QUIC channel is configured the
    // 'Q' frame is silently dropped — same shape as 'I' frames when no
    // override / NAT / TUN is set yet. Counts toward this tunnel's rx
    // counters so the JS/UI bandwidth display covers QUIC traffic
    // alongside IP traffic.
    let quic_weak = std::sync::Arc::downgrade(&inner);
    let on_quic: Arc<dyn Fn(&[u8]) + Send + Sync> = Arc::new(move |bytes: &[u8]| {
        let Some(inner) = quic_weak.upgrade() else { return };
        inner.counters.bump_rx(bytes.len());
        let tx = inner.quic_rx_tx.lock().clone();
        if let Some(tx) = tx {
            // Datagram is best-effort: a full receiver queue means
            // quinn isn't draining fast enough → drop, same as a UDP
            // socket buffer overflow. quinn handles real loss via ARQ.
            let _ = tx.try_send(bytes::Bytes::copy_from_slice(bytes));
        }
    });
    let on_data: Arc<dyn Fn(&[u8]) + Send + Sync> =
        Arc::new(move |payload: &[u8]| dispatch_payload(payload, &on_ip, &on_quic));
    let (attached, sid) = match &track {
        RemoteTrack::Audio(audio) => (rtp::attach_remote(audio, on_data), audio.sid()),
        RemoteTrack::Video(video) => (rtp::attach_remote_video(video, on_data), video.sid()),
    };
    match attached {
        Ok(receiver) => {
            log::info!("LkTunnel[{}]: rtp receiver attached on track sid={sid}", inner.id);
            inner.rtp_receivers.lock().push(receiver);
        }
        Err(e) => log::warn!("LkTunnel[{}]: rtp::attach_remote failed: {e}", inner.id),
    }
}

// ── Process-wide tokio runtime ─────────────────────────────────────

/// Shared tokio runtime for every [`LkTunnel`]. Multi-thread so
/// libwebrtc callbacks don't queue up behind each other on a
/// single-threaded scheduler.
pub fn runtime() -> &'static tokio::runtime::Runtime {
    static RUNTIME: Lazy<tokio::runtime::Runtime> = Lazy::new(|| {
        tokio::runtime::Builder::new_multi_thread()
            .enable_all()
            .thread_name("lktunnel-rt")
            .build()
            .expect("failed to start tokio runtime")
    });
    &RUNTIME
}

