//! Per-flow UDP NAT.
//!
//! One `UdpSession` per (client_src:port, target_dst:port). Owns a
//! `mio::net::UdpSocket` connected to the target; relays bytes in
//! both directions. Lives on the dispatcher thread (single-threaded
//! access throughout the NAT layer) — owned by `NatDispatcher` via
//! `Box<UdpSession>`, address stable for the session's lifetime so
//! it's safe to hand out as a raw pointer to the reactor's
//! per-token handler.

use std::io::ErrorKind;
use std::sync::atomic::{AtomicU16, Ordering};

use mio::{Interest, Token};

use crate::dispatcher::{self, EventHandler};
use crate::nat_log;

use super::dispatcher::EmitFn;
use super::flow_key::{FlowKey, L4};
use super::ip_packet::{build_udp, l4_checksum, write_ipv4_header_frag, UdpBuild};
use super::now_ms;

const TAG: &str = "udp-session";

/// Global IP-id counter for outbound fragmented UDP responses. Per-session
/// counters collide across concurrent sessions — the client kernel keys
/// fragment reassembly only on (src, dst, proto, ip_id), so two sessions
/// both emitting fragments with `ip_id=1` get mis-reassembled into one
/// corrupted datagram. A single global counter avoids that collision
/// (wrap-around at 65535 is harmless given the 30s reassembly window).
static IP_ID: AtomicU16 = AtomicU16::new(0);

pub struct UdpSession {
    pub key: FlowKey,
    emit:    EmitFn,
    /// Connected `SOCK_DGRAM`; `None` until [`open`] succeeds and
    /// taken back out in [`Drop`] for deregistration.
    host:    Option<mio::net::UdpSocket>,
    /// Reactor token bound to `host`. `None` mirrors `host == None`.
    token:   Option<Token>,
    last_active_ms: u32,
    /// Datagrams sent toward the destination (host send). Diagnostic.
    tx_count: u32,
    /// Datagrams received back from the destination (host recv). If
    /// `tx_count > 0` and `rx_count == 0`, the destination isn't
    /// responding — Android then falls back to system DNS, which
    /// can return AAAAs that bypass our (v4-only) tunnel.
    rx_count: u32,
    /// Cumulative bytes sent / received host-side, for the dispatcher
    /// snapshot. Useful to spot half-open flows that send but never
    /// receive (or vice versa).
    tx_bytes: u32,
    rx_bytes: u32,
}

impl UdpSession {
    pub fn new(key: FlowKey, emit: EmitFn) -> Self {
        Self {
            key, emit,
            host:  None,
            token: None,
            last_active_ms: now_ms(),
            tx_count: 0, rx_count: 0,
            tx_bytes: 0, rx_bytes: 0,
        }
    }

    /// Whether this session has ever received a host-side reply.
    /// Read by the dispatcher's stats line to surface "DNS queries
    /// flowing but no responses coming back" silently.
    pub fn rx_count(&self) -> u32 { self.rx_count }
    pub fn tx_count(&self) -> u32 { self.tx_count }

    /// Open the host-side socket and register with the reactor.
    /// Returns false on failure; caller drops the session.
    ///
    /// `self_ptr` is the stable address of this session (i.e., the
    /// raw pointer derived from the owning `Box`). The reactor stores
    /// a tiny `EventHandler` thunk that reaches back through this
    /// pointer when the socket becomes readable.
    pub fn open(&mut self, self_ptr: *mut UdpSession) -> bool {
        if !self.key.dst.is_v4() {
            nat_log!(target: TAG, "v6 dest not yet supported");
            return false;
        }
        // See tcp_session: `v4_be()` is already host-order with high byte =
        // first octet, no further swap needed. The extra `u32::from_be(...)`
        // here was the long-standing port bug that sent UDP datagrams to a
        // byte-reversed IP — explains why everything except palindromic
        // destinations (8.8.8.8) failed in userspace NAT.
        let dst_ip = std::net::Ipv4Addr::from(self.key.dst.v4_be());
        if crate::nat::filter::is_blocked_dst(dst_ip.into()) {
            nat_log!(target: TAG, "blocked dst {}:{} (cloud metadata / loopback / link-local / multicast)",
                     dst_ip, self.key.dst_port);
            return false;
        }
        let bind_addr: std::net::SocketAddr =
            ([0u8, 0, 0, 0], 0).into();
        let mut socket = match mio::net::UdpSocket::bind(bind_addr) {
            Ok(s) => s,
            Err(e) => {
                nat_log!(target: TAG, "bind() failed: {e}");
                return false;
            }
        };

        // `dst_ip` is already computed above for the filter check.
        let dst: std::net::SocketAddr = (dst_ip, self.key.dst_port).into();
        if let Err(e) = socket.connect(dst) {
            // UDP connect() just sets the default peer — typically synchronous,
            // but on a busy kernel it can transiently return WouldBlock. Soft-
            // success: the next send() will retry or surface the real error.
            if e.kind() != ErrorKind::WouldBlock {
                nat_log!(target: TAG, "connect({}:{}) failed: {e}",
                    self.key.dst, self.key.dst_port);
                return false;
            }
        }

        // Register with the reactor under a fresh token. The handler
        // is a tiny thunk that derefs the session pointer on every
        // readable event.
        let token = dispatcher::register_source(
            &mut socket,
            Interest::READABLE,
            Box::new(UdpHandler { session_addr: self_ptr as usize }),
        );

        #[cfg(unix)]
        {
            use std::os::fd::AsRawFd;
            super::log_local_sockname(TAG, socket.as_raw_fd(), &self.key.dst,
                self.key.dst_port, "udp");
        }

        self.host  = Some(socket);
        self.token = Some(token);
        true
    }

    pub fn send(&mut self, payload: &[u8]) {
        if self.host.is_none() { return; }
        self.last_active_ms = now_ms();
        // Re-borrow after the mut access. NLL drops the immutable
        // borrow at the end of the match expression.
        let res = self.host.as_ref().unwrap().send(payload);
        match res {
            Ok(n) => {
                self.tx_count = self.tx_count.saturating_add(1);
                self.tx_bytes = self.tx_bytes.saturating_add(n as u32);
                nat_log!(target: TAG, "udp send #{} {}:{}→{}:{} len={}",
                    self.tx_count,
                    self.key.src, self.key.src_port,
                    self.key.dst, self.key.dst_port, n);
            }
            Err(e) if e.kind() == ErrorKind::WouldBlock => {
                nat_log!(target: TAG, "send WouldBlock {}:{} len={}",
                    self.key.dst, self.key.dst_port, payload.len());
            }
            Err(e) if e.kind() == ErrorKind::Interrupted => {
                // Match libc semantics: caller will retry on next pump.
            }
            Err(e) => {
                nat_log!(target: TAG, "send err {}:{} {e}",
                    self.key.dst, self.key.dst_port);
            }
        }
    }

    #[allow(dead_code)]
    pub fn touch(&mut self) { self.last_active_ms = now_ms(); }

    pub fn last_ms(&self) -> u32 { self.last_active_ms }

    fn on_readable(&mut self) {
        if self.host.is_none() { return; }
        let mut buf = [0u8; 2048];
        loop {
            // Re-borrow each iteration so the borrow ends before
            // `self.build_and_emit` needs `&mut self`.
            let res = self.host.as_ref().unwrap().recv(&mut buf);
            match res {
                Ok(n) => {
                    self.last_active_ms = now_ms();
                    self.rx_count = self.rx_count.saturating_add(1);
                    self.rx_bytes = self.rx_bytes.saturating_add(n as u32);
                    nat_log!(target: TAG, "udp recv #{} {}:{}→{}:{} len={}",
                        self.rx_count,
                        self.key.dst, self.key.dst_port,
                        self.key.src, self.key.src_port, n);
                    self.build_and_emit(&buf[..n]);
                }
                Err(e) if e.kind() == ErrorKind::WouldBlock => return,
                Err(e) if e.kind() == ErrorKind::Interrupted => continue,
                Err(e) => {
                    nat_log!(target: TAG, "udp recv {}:{} err: {e}",
                        self.key.dst, self.key.dst_port);
                    return;
                }
            }
        }
    }

    fn build_and_emit(&mut self, payload: &[u8]) {
        let b = UdpBuild {
            src: self.key.dst, dst: self.key.src,
            src_port: self.key.dst_port, dst_port: self.key.src_port,
            payload,
        };
        const MAX_IP_PKT: usize = 1000;
        if 28 + payload.len() <= MAX_IP_PKT {
            let mut out = [0u8; MAX_IP_PKT + 8];
            let n = build_udp(&mut out, &b);
            if n == 0 {
                nat_log!(target: TAG,
                    "build_udp dropped: src={}:{} dst={}:{} payload={}",
                    b.src, b.src_port, b.dst, b.dst_port, payload.len());
                return;
            }
            (self.emit)(&out[..n]);
            return;
        }
        if 28 + payload.len() > 0xFFFF { return; }
        if !self.key.dst.is_v4() || !self.key.src.is_v4() { return; }

        let udp_total = 8 + payload.len();
        let mut udp = vec![0u8; udp_total];
        udp[0] = (self.key.dst_port >> 8) as u8; udp[1] = self.key.dst_port as u8;
        udp[2] = (self.key.src_port >> 8) as u8; udp[3] = self.key.src_port as u8;
        udp[4] = (udp_total   >> 8) as u8;       udp[5] = udp_total as u8;
        udp[6] = 0; udp[7] = 0;
        if !payload.is_empty() {
            udp[8..8 + payload.len()].copy_from_slice(payload);
        }
        let mut cs = l4_checksum(&self.key.dst, &self.key.src, L4::Udp as u8, &udp);
        if cs == 0 { cs = 0xFFFF; }
        udp[6] = (cs >> 8) as u8; udp[7] = cs as u8;

        const MAX_FRAG_DATA: usize = ((MAX_IP_PKT - 20) / 8) * 8;
        let ip_id = IP_ID.fetch_add(1, Ordering::Relaxed);

        let mut off = 0usize;
        let mut out = [0u8; MAX_IP_PKT + 8];
        while off < udp_total {
            let remaining = udp_total - off;
            let last = remaining <= MAX_FRAG_DATA;
            let frag_data = if last { remaining } else { MAX_FRAG_DATA };
            let pkt_len = 20 + frag_data;
            write_ipv4_header_frag(&mut out, pkt_len as u16, L4::Udp as u8,
                                   &self.key.dst, &self.key.src,
                                   ip_id, (off / 8) as u16, !last);
            out[20..20 + frag_data].copy_from_slice(&udp[off..off + frag_data]);
            (self.emit)(&out[..pkt_len]);
            off += frag_data;
        }
    }
}

impl Drop for UdpSession {
    fn drop(&mut self) {
        if let (Some(mut socket), Some(token)) = (self.host.take(), self.token.take()) {
            dispatcher::deregister_source(&mut socket, token);
            // socket drops here, closing the underlying fd / SOCKET.
        }
    }
}

/// Tiny per-token thunk. Holds the address of the owning `UdpSession`
/// as a usize so the trait stays `Send` without invoking `unsafe impl`
/// for a raw pointer field; we cast back inside `on_event`.
struct UdpHandler { session_addr: usize }

impl EventHandler for UdpHandler {
    fn on_event(&mut self, ev: &mio::event::Event) {
        if !ev.is_readable() { return; }
        // SAFETY: dispatcher-thread only; the NatDispatcher's HashMap
        // pins each `Box<UdpSession>` until Drop runs (which also
        // deregisters us, so we can't fire afterward).
        unsafe {
            let s: &mut UdpSession = &mut *(self.session_addr as *mut UdpSession);
            s.on_readable();
        }
    }
}
