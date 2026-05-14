//! Multi-client kernel-TUN gateway with userspace SNAT.
//!
//! The Node Linux server (and now the Rust port) lets several peers
//! share one kernel-managed TUN device (`bale0`) — the kernel handles
//! IP forwarding + iptables MASQUERADE for outbound NAT, but each
//! peer's tunneled IP packets all claim `10.8.0.2` as their source.
//! Without disambiguation, the kernel's reverse path would collide on
//! return traffic. The gateway solves this with a per-peer **SNAT
//! lease**: when a peer registers, it gets a unique `10.8.0.X`
//! (`X ∈ 2..=254`); inbound packets from that peer have their src
//! rewritten to that address before being written to TUN, and TUN
//! egress packets have their dst rewritten back to `10.8.0.2` before
//! being sent to the right peer.
//!
//! Symmetric with the Node implementation's `_handleTunPacket` /
//! `_tunReadLoop` SNAT layer, but everything happens in Rust so the
//! per-packet path never crosses the JS boundary.
//!
//! ```text
//!              ┌──────────────────────────────────────────┐
//!              │            TunGateway (Rust)             │
//!  Tunnel A ───▶ on_ip ─▶ rewrite src=10.8.0.2 → 10.8.0.2 ─┐
//!  Tunnel B ───▶ on_ip ─▶ rewrite src=10.8.0.2 → 10.8.0.3 ─┼─▶ TUN write
//!                                                          │   (kernel forwards
//!                                                          │    via iptables)
//!              TUN read ◀───────────────────────────────────┘
//!              dst=10.8.0.3 ─▶ pool lookup ─▶ Tunnel B
//!                              rewrite dst → 10.8.0.2 ─▶ Tunnel B.send_ip
//!              └──────────────────────────────────────────┘
//! ```

use std::os::raw::c_int;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, Ordering};
use std::thread;

use parking_lot::Mutex;

use crate::LkTunnel;
use crate::nat::ip_packet;

/// SNAT lease space. Leases `2..=254` (253 slots) mirror the Node
/// `_snatByLk` pool. `10.8.0.1` is the server itself; `10.8.0.255` is
/// the broadcast address; `10.8.0.0` is the network address. We keep
/// the array 0-indexed (slot `i` ↔ lease `i + LEASE_FIRST`).
const LEASE_FIRST: u8 = 2;
const LEASE_LAST:  u8 = 254;
const POOL_SIZE:   usize = (LEASE_LAST - LEASE_FIRST + 1) as usize;

/// Canonical client tunnel address. Every peer thinks of itself as
/// `10.8.0.2`; the gateway translates per-peer leases back to this on
/// TUN-egress. Matches the Node `CLIENT_TUN_IP` convention.
const CLIENT_TUN_OCTETS: [u8; 4] = [10, 8, 0, 2];

/// Server tunnel address (the kernel sees this on `bale0`).
const SERVER_NET_PREFIX: [u8; 3] = [10, 8, 0];

/// Per-pool slot. `Weak` so a `Tunnel` that the shim drops without
/// calling `unregister` doesn't keep itself alive through the gateway
/// — the next packet for that lease will find `None` and drop.
struct Slot {
    tunnel: std::sync::Weak<LkTunnel>,
}

pub struct TunGateway {
    inner: Arc<TunGatewayInner>,
}

struct TunGatewayInner {
    fd:           c_int,
    pool:         Mutex<[Option<Slot>; POOL_SIZE]>,
    shutdown:     AtomicBool,
    read_thread:  Mutex<Option<thread::JoinHandle<()>>>,
}

impl TunGateway {
    /// Take ownership of an already-open TUN fd (typically produced
    /// by the napi binding's `openTun` + `configureIf`). The gateway
    /// closes the fd on `close()`; the caller must NOT also close it.
    /// Spawns the TUN read loop in a dedicated thread before
    /// returning — packets arriving from the kernel get routed to
    /// the right registered tunnel as soon as they appear.
    pub fn attach(fd: c_int) -> Self {
        // `[None; POOL_SIZE]` doesn't compile when the element type
        // doesn't `impl Copy` (Slot has a Weak inside it), so build
        // the array via `std::array::from_fn`.
        let pool = std::array::from_fn(|_| None);
        let inner = Arc::new(TunGatewayInner {
            fd,
            pool:         Mutex::new(pool),
            shutdown:     AtomicBool::new(false),
            read_thread:  Mutex::new(None),
        });
        let for_thread = Arc::clone(&inner);
        let handle = thread::Builder::new()
            .name("lktunnel-tungateway".into())
            .spawn(move || tun_read_loop(for_thread))
            .expect("spawn tun read thread");
        inner.read_thread.lock().replace(handle);
        Self { inner }
    }

    /// Reserve a SNAT lease for `tunnel` and install the gateway's
    /// inbound-IP handler on it. Returns the lease octet (`2..=254`).
    /// Errors when the pool is exhausted; the caller should reject
    /// the call with the equivalent of `discardCall`.
    ///
    /// `tunnel` must be the `Arc<LkTunnel>` the shim already holds —
    /// we stash a `Weak` into the pool so the lease auto-drains if
    /// the shim drops the tunnel without calling `unregister`.
    pub fn register(&self, tunnel: &Arc<LkTunnel>) -> Result<u8, &'static str> {
        let mut pool = self.inner.pool.lock();
        let idx = pool
            .iter()
            .position(|slot| slot.is_none())
            .ok_or("snat pool exhausted")?;
        pool[idx] = Some(Slot { tunnel: Arc::downgrade(tunnel) });
        let lease = (idx as u8) + LEASE_FIRST;

        // Install the per-packet src-rewrite handler. Captures `fd`
        // and `lease` by value so it can keep firing even if the
        // gateway is dropped (closed fd → write fails silently, the
        // read loop's shutdown clears the slot anyway).
        let fd    = self.inner.fd;
        let alloc = [SERVER_NET_PREFIX[0], SERVER_NET_PREFIX[1],
                     SERVER_NET_PREFIX[2], lease];
        tunnel.set_on_ip(Some(Arc::new(move |pkt: &[u8]| {
            // Copy the slice so we can mutate the checksums + src.
            let mut buf = pkt.to_vec();
            if !ip_packet::rewrite_v4_src(&mut buf, alloc) {
                return;  // not v4 or truncated — drop
            }
            // `libc::write` is thread-safe; the kernel serializes
            // concurrent writes per fd.
            let rc = unsafe {
                libc::write(fd, buf.as_ptr() as *const _, buf.len())
            };
            if rc < 0 {
                let e = std::io::Error::last_os_error();
                log::warn!("tun gateway: write({fd}) failed: {e}");
            }
        })));
        Ok(lease)
    }

    /// Release the lease and detach the gateway's handler from this
    /// tunnel. Idempotent — calling twice or with an unknown lease
    /// is a no-op.
    pub fn unregister(&self, tunnel: &Arc<LkTunnel>) {
        let mut pool = self.inner.pool.lock();
        for slot in pool.iter_mut() {
            if let Some(s) = slot {
                if let Some(t) = s.tunnel.upgrade() {
                    if Arc::ptr_eq(&t, tunnel) {
                        *slot = None;
                        // Reset on_ip so the tunnel's residual
                        // packets (post-unregister, pre-disconnect)
                        // drop instead of trying to write to our fd.
                        tunnel.set_on_ip(None);
                        return;
                    }
                }
            }
        }
    }

    /// Shut down the read thread and close the TUN fd. Idempotent.
    /// After this the gateway can be safely dropped; the registered
    /// tunnels keep their on_ip handler installed but the captured
    /// fd is closed and writes silently fail (logged) — the right
    /// move for the shim is to also disconnect the tunnels.
    pub fn close(&self) {
        if self.inner.shutdown.swap(true, Ordering::Relaxed) {
            return;  // already closed
        }
        // Closing the fd makes the next `read()` return EBADF, but
        // the read thread is in a `poll()` with a 1s timeout so it
        // notices the shutdown flag on the next tick regardless.
        // Still, close the fd first so writes from any straggling
        // on_ip handlers fail fast.
        unsafe { libc::close(self.inner.fd); }
        if let Some(handle) = self.inner.read_thread.lock().take() {
            let _ = handle.join();
        }
    }
}

impl Drop for TunGateway {
    fn drop(&mut self) {
        // Tear down even if the shim forgot to call close() — the
        // read thread holds an Arc to `inner`, so without the
        // shutdown signal it would outlive the gateway handle.
        if !self.inner.shutdown.load(Ordering::Relaxed) {
            self.close();
        }
    }
}

/// Read packets from the TUN, look up which tunnel each one belongs
/// to (by the 4th destination-address octet), un-SNAT, and forward
/// to that tunnel's `send_ip`. Runs on a dedicated OS thread —
/// blocking syscalls on the TUN fd would otherwise stall the
/// dispatcher reactor.
fn tun_read_loop(gw: Arc<TunGatewayInner>) {
    // 65535 is the IPv4 total-length ceiling; a TUN device can't
    // hand us anything larger.
    let mut buf = [0u8; 65535];
    let mut pollfd = libc::pollfd {
        fd:      gw.fd,
        events:  libc::POLLIN,
        revents: 0,
    };

    while !gw.shutdown.load(Ordering::Relaxed) {
        // 1 s timeout — bounded liveness for the shutdown check
        // without burning CPU on a tight poll loop.
        let rc = unsafe { libc::poll(&mut pollfd, 1, 1000) };
        if rc < 0 {
            let err = std::io::Error::last_os_error();
            if err.kind() == std::io::ErrorKind::Interrupted { continue; }
            log::warn!("tun gateway: poll failed: {err}");
            break;
        }
        if rc == 0 { continue; }  // timeout, no packet

        let n = unsafe {
            libc::read(gw.fd, buf.as_mut_ptr() as *mut _, buf.len())
        };
        if n < 0 {
            let err = std::io::Error::last_os_error();
            match err.kind() {
                std::io::ErrorKind::Interrupted | std::io::ErrorKind::WouldBlock => continue,
                _ => { log::warn!("tun gateway: read failed: {err}"); break; }
            }
        }
        if n == 0 { break; }  // fd closed
        let len = n as usize;

        // Only IPv4. The Node gateway's TUN is v4-only too (matches
        // the addressing scheme), and v6 routing would need a
        // separate lease pool anyway.
        if len < 20 || (buf[0] >> 4) != 4 { continue; }

        // Dst is at bytes 16..20; the lease lives in byte 19 (the
        // fourth octet of `10.8.0.X`). The first three octets MUST
        // match the SERVER_NET_PREFIX — anything else is kernel-
        // sourced traffic for a different interface, which can't
        // belong to a peer.
        if buf[16..19] != SERVER_NET_PREFIX[..] { continue; }
        let lease = buf[19];
        if !(LEASE_FIRST..=LEASE_LAST).contains(&lease) { continue; }
        let idx = (lease - LEASE_FIRST) as usize;

        let tunnel = {
            let pool = gw.pool.lock();
            pool[idx].as_ref()
                .and_then(|slot| slot.tunnel.upgrade())
        };
        let tunnel = match tunnel {
            Some(t) => t,
            None    => continue,  // stale lease, drop
        };

        // Rewrite the dst back to the peer's canonical address.
        // The peer's TUN/stack sees `10.8.0.2`; it has no idea the
        // server assigned it a different lease.
        let pkt = &mut buf[..len];
        if !ip_packet::rewrite_v4_dst(pkt, CLIENT_TUN_OCTETS) {
            continue;
        }
        // Drop on backpressure — the peer's TCP will retx.
        let _ = tunnel.send_ip(pkt);
    }

    log::info!("tun gateway: read loop exiting");
}
