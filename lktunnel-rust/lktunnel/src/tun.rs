//! Userspace TUN bridge — read raw IP packets off a TUN file
//! descriptor, ship them via a caller-supplied send closure; accept
//! inbound packets via [`TunBridge::inject`] and write them back to
//! the TUN with proper partial-write handling.
//!
//! IPv6 packets get rejected with ICMPv6 Destination Unreachable
//! (via [`crate::ipv6`]) so apps fall back to IPv4 immediately
//! instead of waiting out TCP timeouts.
//!
//! Backpressure: when [`SendIp`] returns `false` (LK pump full /
//! not connected), the bridge transitions to a paused state — TUN
//! reads are suppressed so the kernel's TUN tx queue fills and the
//! apps upstream throttle naturally via TCP flow control. The
//! caller drives [`TunBridge::resume`] from a drain notifier.
//!
//! Dispatcher-thread-confined: all mutations of `pending` / `paused`
//! / mio interest happen on the lk-dispatch thread. The
//! [`EventHandler`] trampoline that mio invokes is also on that
//! thread, so the bridge needs no internal locking.

use std::collections::VecDeque;
use std::io::{self, ErrorKind};
use std::os::raw::c_void;
use std::sync::Arc;

use mio::{Interest, Token};
use mio::unix::SourceFd;

use crate::counters::Counters;
use crate::dispatcher::{self, EventHandler};
use crate::ipv6;

const TAG: &str = "tun-bridge";

/// Cap on the deferred TUN-write queue — ~6 MB per bridge at MTU.
/// Beyond this we drop with an error rather than unbounded-grow.
pub const MAX_PENDING_TX_PKTS: usize = 4096;

/// Outbound send closure — hand a raw IP packet to whatever
/// transport sits below the TUN. Return `false` to signal "could
/// not accept right now"; the bridge enters paused state and
/// invokes its `wake_on_drain` closure to schedule a resume.
pub type SendIp = Arc<dyn Fn(&[u8]) -> bool + Send + Sync + 'static>;

/// Invoked by the bridge whenever it pauses for backpressure. The
/// owner installs whatever wake → `bridge.resume()` chain makes sense
/// (typically: register an LK `on_send_drained`, hop to the
/// dispatcher thread, look up the owned bridge via a `Weak`).
pub type WakeOnDrain = Arc<dyn Fn() + Send + Sync + 'static>;

/// Result of [`TunBridge::inject`] — surfaces the only failure mode
/// callers care about (queue overflow); other I/O hiccups are
/// handled internally and the packet is still considered accepted.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum InjectStatus {
    /// Queued and (possibly partially) written.
    Accepted,
    /// Pending queue at [`MAX_PENDING_TX_PKTS`]; packet dropped.
    QueueFull,
}

/// Owns the TUN fd and the per-tunnel TX queue. Must live behind a
/// `Box<Self>` (stable address) because the reactor's `EventHandler`
/// trampoline holds a raw pointer into it.
pub struct TunBridge {
    fd:            i32,
    token:         Token,
    counters:      Arc<Counters>,
    send_ip:       SendIp,
    wake_on_drain: WakeOnDrain,
    pending:       VecDeque<Vec<u8>>,
    paused:        bool,
}

impl TunBridge {
    /// Take ownership of `fd` (a non-blocking TUN device fd) and
    /// register it with the reactor for READABLE events. The fd is
    /// closed when the returned `Box<TunBridge>` drops. Returns a
    /// boxed handle because the reactor's event trampoline needs a
    /// stable address into the bridge.
    pub fn attach(
        fd: i32,
        counters: Arc<Counters>,
        send_ip: SendIp,
        wake_on_drain: WakeOnDrain,
    ) -> Box<Self> {
        // Construct first with a placeholder token; we need the
        // Box's address before we can register with the reactor.
        let mut boxed = Box::new(Self {
            fd, token: Token(0), counters, send_ip, wake_on_drain,
            pending: VecDeque::new(),
            paused:  false,
        });
        let addr = &mut *boxed as *mut Self as usize;
        let token = dispatcher::register_source(
            &mut SourceFd(&fd),
            Interest::READABLE,
            Box::new(TunDispatcher { addr }),
        );
        boxed.token = token;
        log::info!(target: TAG, "tun fd={fd} attached (token={:?})", token);
        boxed
    }

    /// Queue an inbound IP packet for TUN writeback. Returns
    /// [`InjectStatus::QueueFull`] iff the per-bridge pending queue
    /// is at capacity (caller should surface via error queue). All
    /// other write failures are handled internally — partial writes
    /// re-queue, hard errors tear the bridge down on the next
    /// event tick.
    pub fn inject(&mut self, ip: &[u8]) -> InjectStatus {
        self.counters.bump_rx(ip.len());
        if self.pending.len() >= MAX_PENDING_TX_PKTS {
            return InjectStatus::QueueFull;
        }
        self.pending.push_back(ip.to_vec());
        // Try an immediate drain — if the TUN is writable right now
        // we save a round-trip through the reactor.
        let _ = self.drain();
        InjectStatus::Accepted
    }

    /// Re-enable reads after a backpressure pause cleared.
    pub fn resume(&mut self) {
        if !self.paused { return; }
        self.paused = false;
        self.refresh_interest();
    }

    /// Whether reads are currently paused for backpressure.
    #[allow(dead_code)]
    pub fn is_paused(&self) -> bool { self.paused }

    // ── Internal: I/O + state ─────────────────────────────────────

    fn drain(&mut self) -> io::Result<()> {
        while let Some(pkt) = self.pending.front_mut() {
            match tun_write(self.fd, pkt) {
                Ok(n) if n == pkt.len() => { self.pending.pop_front(); }
                Ok(n) => {
                    // Partial write — drop the prefix that landed,
                    // re-queue the suffix in place.
                    pkt.drain(..n);
                    self.refresh_interest_with_pending();
                    return Ok(());
                }
                Err(e) if e.kind() == ErrorKind::WouldBlock => {
                    self.refresh_interest_with_pending();
                    return Ok(());
                }
                Err(e) if e.kind() == ErrorKind::Interrupted => continue,
                Err(e) => {
                    crate::errors::enqueue(0, "tun_write",
                        e.raw_os_error().unwrap_or(-1), &e.to_string());
                    return Err(e);
                }
            }
        }
        // Fully drained — drop the writable interest.
        self.refresh_interest();
        Ok(())
    }

    fn refresh_interest_with_pending(&self) {
        let want_read  = !self.paused;
        let interest = if want_read {
            Interest::READABLE | Interest::WRITABLE
        } else {
            Interest::WRITABLE
        };
        dispatcher::reregister_source(&mut SourceFd(&self.fd), self.token, interest);
    }

    fn refresh_interest(&self) {
        let want_read  = !self.paused;
        let want_write = !self.pending.is_empty();
        let interest = match (want_read, want_write) {
            (true,  true)  => Interest::READABLE | Interest::WRITABLE,
            (true,  false) => Interest::READABLE,
            (false, true)  => Interest::WRITABLE,
            (false, false) => Interest::READABLE,  // mio: no zero-interest
        };
        dispatcher::reregister_source(&mut SourceFd(&self.fd), self.token, interest);
    }

    fn on_readable(&mut self) {
        if self.paused { return; }
        let mut buf = [0u8; 2048];
        loop {
            match tun_read(self.fd, &mut buf) {
                Ok(0) => break,
                Ok(n) => {
                    let pkt = &buf[..n];
                    // IPv6 reject — write a Destination Unreachable
                    // back to the apps and skip the LK leg.
                    if !pkt.is_empty() && (pkt[0] >> 4) == 6 {
                        if let Some(reply) = ipv6::build_icmpv6_dest_unreach(pkt) {
                            let _ = tun_write(self.fd, &reply);
                        }
                        continue;
                    }
                    if !(self.send_ip)(pkt) {
                        // LK pump rejected — pause reads and let the
                        // owner schedule our resume on drain.
                        self.paused = true;
                        self.refresh_interest();
                        (self.wake_on_drain)();
                        return;
                    }
                }
                Err(e) if e.kind() == ErrorKind::WouldBlock => return,
                Err(e) if e.kind() == ErrorKind::Interrupted => continue,
                Err(e) => {
                    log::warn!(target: TAG, "tun fd={} read err: {e} — closing", self.fd);
                    // Caller's EventHandler trampoline will tear us
                    // down on next event; flag by paused-without-pending
                    // here so the read loop stops.
                    self.paused = true;
                    self.refresh_interest();
                    return;
                }
            }
        }
    }

    fn on_writable(&mut self) {
        let _ = self.drain();
    }
}

impl Drop for TunBridge {
    fn drop(&mut self) {
        dispatcher::deregister_source(&mut SourceFd(&self.fd), self.token);
        unsafe { libc::close(self.fd); }
        log::info!(target: TAG, "tun fd={} dropped", self.fd);
    }
}

// ── Reactor trampoline ─────────────────────────────────────────────

/// EventHandler stored under the reactor's per-token map. Holds the
/// bridge's address as usize so we don't need to declare `Send` for
/// a raw pointer field.
struct TunDispatcher { addr: usize }

impl EventHandler for TunDispatcher {
    fn on_event(&mut self, ev: &mio::event::Event) {
        // SAFETY: dispatcher-thread only; the owning `Box<TunBridge>`
        // is held by the caller (e.g. the shim's REGISTRY) and is
        // dropped only via `unregister`, which happens before any
        // further events can fire.
        let bridge: &mut TunBridge = unsafe { &mut *(self.addr as *mut TunBridge) };
        if ev.is_writable() { bridge.on_writable(); }
        if ev.is_readable() { bridge.on_readable(); }
        if ev.is_error() || ev.is_read_closed() || ev.is_write_closed() {
            // Owner (REGISTRY) detects the close via its own polling
            // / state-check and drops the Box, which deregisters us
            // and closes the fd.
            log::warn!(target: TAG, "tun fd={} closed/error", bridge.fd);
        }
    }
}

// ── Tiny io::Result wrappers around libc read/write ───────────────

fn tun_read(fd: i32, buf: &mut [u8]) -> io::Result<usize> {
    let n = unsafe { libc::read(fd, buf.as_mut_ptr() as *mut c_void, buf.len()) };
    if n >= 0 { Ok(n as usize) } else { Err(io::Error::last_os_error()) }
}

fn tun_write(fd: i32, buf: &[u8]) -> io::Result<usize> {
    let n = unsafe { libc::write(fd, buf.as_ptr() as *const c_void, buf.len()) };
    if n >= 0 { Ok(n as usize) } else { Err(io::Error::last_os_error()) }
}
