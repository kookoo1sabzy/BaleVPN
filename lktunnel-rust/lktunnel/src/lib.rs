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
pub mod server;
pub mod socks5;
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
const INBOUND_QUEUE_CAP: usize = 1024;

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
    /// elsewhere can take the Box out for deferred drop.
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
    /// Outgoing RTP transport handle. Set once `Room::connect` succeeds
    /// and the local video track has been published. Owned here so its
    /// dummy-frame producer task stays alive for the tunnel's lifetime;
    /// dropped on teardown.
    rtp_sender: Mutex<Option<Arc<rtp::RtpSender>>>,
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
}

static NEXT_TUNNEL_ID: AtomicU64 = AtomicU64::new(1);

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
            tun:           Mutex::new(None),
            connected:     Arc::new(AtomicBool::new(false)),
            inbound:       Mutex::new(VecDeque::with_capacity(INBOUND_QUEUE_CAP)),
            inbound_drops: AtomicU64::new(0),
            rtp_sender:    Mutex::new(None),
            rtp_receivers: Mutex::new(Vec::new()),
            on_ip_override: Mutex::new(None),
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
        use tokio::sync::mpsc::error::TrySendError;
        match self.inner.tx.try_send(buf) {
            Ok(()) => {
                self.inner.counters.bump_tx(ip.len());
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

    /// Promote this tunnel to **server mode** — install a userspace
    /// NAT that bridges client IP packets to host sockets. Inbound IP
    /// from this point on is routed through the NAT. Fails if a TUN
    /// is already attached, or if server mode is already active.
    pub fn start_server(&self) -> Result<(), &'static str> {
        if !self.inner.connected.load(Ordering::Relaxed) { return Err("not connected"); }
        let id = self.inner.id;
        let emit = self.nat_emit();
        let mut nat = self.inner.nat.lock();
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
        Ok(())
    }

    /// Promote this tunnel to **client mode** — attach a TUN fd. The
    /// bridge takes ownership of `fd` (closes on detach / drop).
    /// Inbound IP from this point on is written to the TUN. Fails if
    /// the tunnel is already in server mode or already has a TUN.
    pub fn attach_tun(&self, fd: i32) -> Result<(), &'static str> {
        if !self.inner.connected.load(Ordering::Relaxed) { return Err("not connected"); }
        if fd < 0 { return Err("invalid fd"); }
        // Quick pre-checks before we hop — bail fast on user errors.
        if self.inner.nat.lock().is_some() { return Err("already in server mode"); }
        if self.inner.tun.lock().is_some() { return Err("TUN already attached"); }
        // `TunBridge::attach` calls `dispatcher::register_source`,
        // which must run on the dispatcher thread. Hop with a
        // oneshot so the caller sees the result synchronously.
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
            *tun = Some(TunBridge::attach(fd, counters, send, wake));
            drop(nat); drop(tun);
            let _ = tx.send(Ok(()));
        }));
        rx.recv().unwrap_or(Err("dispatcher not running"))
    }

    /// Snapshot of NAT per-flow stats (server mode only). Returns
    /// `None` if no NAT is active.
    pub fn flow_stats(&self) -> Option<NatStats> {
        self.inner.nat.lock().as_ref().map(|n| n.flow_stats())
    }

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
        self.connected.store(false, Ordering::Relaxed);
        if let Some(h) = self.task.lock().take()        { h.abort(); }
        if let Some(h) = self.sender_task.lock().take() { h.abort(); }
        // Move NAT/TUN boxes out and drop them on the dispatcher
        // thread (mio source de-registration must run there).
        let nat_box = self.nat.lock().take();
        let tun_box = self.tun.lock().take();
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

    // Publish our outgoing video track and install the byte-substitution
    // FrameTransformer on its RtpSender. This is the actual tunnel
    // transport — see rtp.rs for the why (SCTP DPI fingerprint avoidance).
    let rtp_sender = match rtp::publish(&room).await {
        Ok(s) => Arc::new(s),
        Err(e) => {
            log::warn!("LkTunnel[{id}]: rtp::publish failed: {e}");
            if let Some(inner) = weak.upgrade() {
                let _ = inner.state_tx.send(TunnelState::Failed(e.clone()));
            }
            emit_event(&on_event, EventKind::Error, e);
            let _ = room.close().await;
            return;
        }
    };
    inner.rtp_sender.lock().replace(Arc::clone(&rtp_sender));

    let weak_for_sender = std::sync::Weak::clone(&weak);
    let rtp_for_sender = Arc::clone(&rtp_sender);
    let sender = runtime().spawn(async move {
        let mut send_rx = send_rx;
        let mut drops:    u64 = 0;
        let mut sent:     u64 = 0;
        let mut packets:  u64 = 0;
        let mut batch: Vec<u8> = Vec::with_capacity(rtp::MAX_FRAME_BYTES);

        // Opportunistic packing: at every wakeup, take the first packet
        // off the channel (blocking), then greedily drain any others
        // already queued and concatenate as many as fit under
        // MAX_FRAME_BYTES into a single Opus-frame-sized payload. The
        // C++ transformer drains at the encoder's 50 fps cadence, so
        // packing N packets per send call costs one queue slot instead
        // of N — keeping us under the SFU's per-track bitrate cap on
        // small-packet bursts (SYN-ACKs, ACKs, DNS) without adding
        // any artificial buffering delay.
        let flush = |batch: &mut Vec<u8>,
                     drops: &mut u64,
                     sent:  &mut u64,
                     packets: u64,
                     rtp: &rtp::RtpSender|
        {
            if batch.is_empty() { return; }
            if !rtp.send(batch) {
                *drops += 1;
                if drops.is_power_of_two() {
                    log::warn!(
                        "rtp send queue full — dropped {drops} frames total \
                         (depth={})",
                        rtp.queue_depth(),
                    );
                }
            } else {
                *sent = sent.saturating_add(1);
                if sent.is_power_of_two() {
                    log::debug!(
                        "rtp send checkpoint: enqueued {sent} frames packing \
                         {packets} ip-packets total (last_frame={}B, depth={}, \
                         drops={drops})",
                        batch.len(),
                        rtp.queue_depth(),
                    );
                }
            }
            batch.clear();
        };

        loop {
            // Block for the first packet of the next batch.
            let first = match send_rx.recv().await {
                Some(b) => b,
                None    => break,
            };
            rtp::push_packed(&mut batch, &first);
            packets = packets.saturating_add(1);

            // Drain any additional packets that have already arrived,
            // packing as long as they fit. If one wouldn't fit, flush
            // the current batch and start a new one with it.
            use tokio::sync::mpsc::error::TryRecvError;
            loop {
                match send_rx.try_recv() {
                    Ok(next) => {
                        packets = packets.saturating_add(1);
                        if !rtp::push_packed(&mut batch, &next) {
                            flush(&mut batch, &mut drops, &mut sent, packets, &rtp_for_sender);
                            rtp::push_packed(&mut batch, &next);
                        }
                    }
                    Err(TryRecvError::Empty)        => break,
                    Err(TryRecvError::Disconnected) => break,
                }
            }

            flush(&mut batch, &mut drops, &mut sent, packets, &rtp_for_sender);

            if let Some(inner) = weak_for_sender.upgrade() {
                let drained: Vec<_> = inner.drain_waiters.lock().drain(..).collect();
                for w in drained { w(); }
            }
        }
        // Final flush (channel closed mid-batch).
        flush(&mut batch, &mut drops, &mut sent, packets, &rtp_for_sender);
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
                        if let Some(inner) = weak.upgrade() {
                            let _ = inner.state_tx.send(TunnelState::Failed(msg.clone()));
                        }
                        emit_event(&on_event, EventKind::Disconnected, msg);
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
                        emit_event(&on_event, EventKind::Disconnected,
                            format!("{reason:?}"));
                        break;
                    }
                    _ => {}
                }
            },
            _ = probe.tick() => {
                if room.remote_participants().is_empty() {
                    log::info!("LkTunnel: room empty — closing");
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
    on_event(Event { kind, info });
}

/// Parse one wire payload and route to the consumer's `on_ip` if it's
/// an IP frame (leading `'I'` byte). Anything else is dropped with a
/// debug log — the tag byte exists so a future peer could multiplex
/// extra planes on the same RTP carrier without a breaking change.
/// Bytes arrive here from the RTP transformer's on_data observer
/// (see [`rtp`]).
fn dispatch_payload(
    payload: &[u8],
    on_ip:   &Arc<dyn Fn(&[u8]) + Send + Sync>,
) {
    static DISPATCHED: AtomicU64 = AtomicU64::new(0);
    let n = DISPATCHED.fetch_add(1, Ordering::Relaxed) + 1;
    if n.is_power_of_two() {
        log::debug!("rtp dispatch checkpoint: {n} payloads (last len={})", payload.len());
    }
    match payload.first() {
        Some(&FRAME_TYPE_IP) => on_ip(&payload[1..]),
        Some(&other)         => log::debug!(
            "unknown frame type 0x{other:02x} (len={}) — dropping", payload.len()),
        None                 => {}
    }
}

/// Attach a receiver-side FrameTransformer to a newly-subscribed
/// remote audio track and stash the handle on TunnelInner so it stays
/// alive. Non-audio tracks (e.g. video) are ignored — the tunnel
/// rides Opus to side-step the Android JNI video-encoder crash.
fn attach_rtp_receiver(
    weak:  &std::sync::Weak<TunnelInner>,
    track: livekit::track::RemoteTrack,
    on_ip: &Arc<dyn Fn(&[u8]) + Send + Sync>,
) {
    let livekit::track::RemoteTrack::Audio(audio) = track else {
        log::debug!("attach_rtp_receiver: ignoring non-audio track");
        return;
    };
    let Some(inner) = weak.upgrade() else { return };
    let on_ip = Arc::clone(on_ip);
    let on_data: Arc<dyn Fn(&[u8]) + Send + Sync> =
        Arc::new(move |payload: &[u8]| dispatch_payload(payload, &on_ip));
    match rtp::attach_remote(&audio, on_data) {
        Ok(receiver) => {
            log::info!("LkTunnel[{}]: rtp receiver attached on track sid={}",
                       inner.id, audio.sid());
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

