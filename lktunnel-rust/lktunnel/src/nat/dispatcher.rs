//! Per-session NAT dispatcher — Rust port of C++ nat/nat_dispatcher.cc.
//!
//! One instance per connected client. Ingests inbound IP packets,
//! routes to per-flow TCP/UDP sessions, emits outbound packets via a
//! caller-supplied callback. Owns the IP fragment reassembler.

use std::collections::HashMap;
use std::sync::Arc;
use std::sync::atomic::{AtomicU16, Ordering};

use crate::nat_log;
use super::flow_key::{FlowKey, L4};
use super::ip_addr::IpAddr;
use super::ip_packet::{
    write_ipv4_header_frag, IpPacket, TcpHeader, UdpHeader, TCP_ACK, TCP_SYN,
};
use super::tcp_session::TcpSession;
use super::udp_session::UdpSession;
use super::{debug, now_ms};

const TAG: &str = "nat";

/// Outbound-packet callback. Returns true if the packet was accepted
/// downstream (LK SCTP queue had room), false on backpressure.
pub type EmitFn = Arc<dyn Fn(&[u8]) -> bool + Send + Sync + 'static>;

/// Returns the current outbound-channel pressure as a 0..1000
/// fixed-point ratio of "queue used / queue capacity". Used by the
/// dispatcher to scale every TCP session's advertised rcv window down
/// when our wire path is congested. Sampling closure is set by
/// `lib.rs` at NAT-creation time; if unset, scale stays at 1000.
pub type PressureFn = Arc<dyn Fn() -> u16 + Send + Sync + 'static>;

/// Global rwnd-scale fixed-point denominator. Scale is stored as an
/// integer in `[0, 1000]` and used as `(adv_wnd * scale) / 1000`.
pub const GLOBAL_RWND_SCALE_FULL: u16 = 1000;

/// Pressure (queue-fullness, 0..1000) below which we advertise full
/// rcv windows — scale stays at 1.0.
const GLOBAL_RWND_LO: u16 = 500;
/// Pressure at and above which scale is clamped to 0 — peers see
/// zero windows and stop sending.
const GLOBAL_RWND_HI: u16 = 900;
/// Fan an ACK to every session whenever scale jumps by at least this
/// much (in 0..1000 units), or whenever it unblocks from 0. Without
/// the fan-out a peer stalled on a zero-window probe wouldn't learn
/// about the recovered window for up to a probe-interval.
const RWND_GREW_THRESHOLD: u16 = 100;

#[derive(Default, Clone, Copy)]
pub struct Stats {
    pub tcp_flows: u32,
    pub udp_flows: u32,
    pub tcp_state_counts: [u32; 11],
    pub srtt_min_ms:   u32,
    pub srtt_med_ms:   u32,
    pub srtt_max_ms:   u32,
    pub rttvar_med_ms: u32,
    pub rto_med_ms:    u32,
    pub flight_total_bytes: u64,
    pub rto_retx_total:     u64,
}

// IP fragment reassembly bounds.
const MAX_FRAG_STREAMS: usize = 64;
const MAX_FRAG_BYTES_PER_STREAM: usize = 65535;
const FRAG_EXPIRY_MS: u32 = 30_000;

#[derive(PartialEq, Eq, Hash, Clone, Copy)]
struct FragKey { src: IpAddr, dst: IpAddr, proto: u8, ip_id: u16 }

struct FragPart { off: u16, len: u16, data: Vec<u8> }

struct FragEntry {
    parts:       Vec<FragPart>,
    proto:       u8,
    src:         IpAddr,
    dst:         IpAddr,
    total_len:   i32,    // -1 until MF=0 arrives
    accumulated: usize,
    arrived_ms:  u32,
}

pub struct NatDispatcher {
    sid:     u64,
    emit_fn: EmitFn,
    udp:     HashMap<FlowKey, Box<UdpSession>>,
    tcp:     HashMap<FlowKey, Box<TcpSession>>,
    frag:    HashMap<FragKey, FragEntry>,
    rx_pkts:  u64,
    rx_bytes: u64,
    tx_pkts:  u64,
    tx_bytes: u64,
    /// Outbound UDP packets (host→client responses). Tracked separately so
    /// the stats log can show whether DNS / UDP replies are coming back —
    /// rx counts inbound from client, tx counts ALL outbound (TCP+UDP).
    udp_tx_pkts: u64,
    last_stats_log_ms: u32,
    /// True iff `create_boxed` registered this instance with the
    /// global sweep tick. `Drop` unregisters only when set, so the
    /// `new` path (tests, unboxed use) doesn't touch the registry.
    registered_for_sweep: bool,
    /// Global rwnd scale shared with every TCP session under this
    /// dispatcher. Values in `[0, GLOBAL_RWND_SCALE_FULL]`. Sessions
    /// multiply their advertised window by `scale / GLOBAL_RWND_SCALE_FULL`
    /// on every header build, so when our outbound LK queue fills up
    /// peers receive smaller windows and slow their sending to us.
    global_rwnd_scale: Arc<AtomicU16>,
    /// Returns 0..1000 reading of outbound LK queue fullness. None
    /// when running without a wire (tests / kernel-TUN server) — in
    /// that case scale stays at full.
    pressure_fn: Option<PressureFn>,
    /// Last scale we computed. Stored alongside the Arc so we can
    /// detect "grew by ≥ RWND_GREW_THRESHOLD" jumps and fan-out ACKs.
    last_rwnd_scale: u16,
}

impl NatDispatcher {
    pub fn new(sid: u64, emit_fn: EmitFn) -> Self {
        nat_log!(target: TAG, "nat dispatcher sid={sid} up");
        Self {
            sid, emit_fn,
            udp: HashMap::new(), tcp: HashMap::new(), frag: HashMap::new(),
            rx_pkts: 0, rx_bytes: 0, tx_pkts: 0, tx_bytes: 0,
            udp_tx_pkts: 0,
            last_stats_log_ms: 0,
            registered_for_sweep: false,
            global_rwnd_scale: Arc::new(AtomicU16::new(GLOBAL_RWND_SCALE_FULL)),
            pressure_fn: None,
            last_rwnd_scale: GLOBAL_RWND_SCALE_FULL,
        }
    }

    /// Wire the outbound-queue-pressure sampler. Set once by
    /// `LkTunnel::start_server` right after constructing the
    /// dispatcher. None means "no wire" — scale never moves from
    /// `GLOBAL_RWND_SCALE_FULL`.
    pub fn set_pressure_fn(&mut self, f: Option<PressureFn>) {
        self.pressure_fn = f;
    }

    /// Handle for new TCP sessions to read the current scale. Cloned
    /// into each session at construction.
    pub fn rwnd_scale_handle(&self) -> Arc<AtomicU16> {
        Arc::clone(&self.global_rwnd_scale)
    }

    /// Construct and box, then register with the global sweep tick so
    /// the per-iteration `sweep_idle` runs automatically. This is the
    /// production constructor — server-mode tunnels never need to call
    /// `sweep_idle` themselves. The returned `Box` must not be moved
    /// out of (its address is what the registry tracks).
    pub fn create_boxed(sid: u64, emit_fn: EmitFn) -> Box<Self> {
        let mut n = Self::new(sid, emit_fn);
        n.registered_for_sweep = true;
        let boxed = Box::new(n);
        super::sweep::register(&*boxed as *const Self as usize);
        boxed
    }

    pub fn sid(&self) -> u64 { self.sid }

    pub fn process(&mut self, bytes: &[u8]) -> bool {
        let pkt = match IpPacket::parse(bytes) {
            Some(p) => p,
            None    => {
                self.rx_pkts  += 1;
                self.rx_bytes += bytes.len() as u64;
                return false;
            }
        };
        self.rx_pkts  += 1;
        self.rx_bytes += bytes.len() as u64;

        if pkt.is_fragment() {
            return self.handle_fragment(&pkt);
        }

        if pkt.proto == L4::Udp as u8 {
            if pkt.l4_len() < 8 { return false; }
            let u = UdpHeader { p: pkt.l4() };
            let k = FlowKey {
                src: pkt.src, dst: pkt.dst,
                src_port: u.src_port(), dst_port: u.dst_port(),
                proto: L4::Udp,
            };
            return self.handle_udp(k, u.payload());
        }
        if pkt.proto == L4::Tcp as u8 {
            if pkt.l4_len() < 20 { return false; }
            let t = TcpHeader { p: pkt.l4() };
            let k = FlowKey {
                src: pkt.src, dst: pkt.dst,
                src_port: t.src_port(), dst_port: t.dst_port(),
                proto: L4::Tcp,
            };
            return self.handle_tcp(k, pkt.l4());
        }
        true
    }

    fn handle_fragment(&mut self, pkt: &IpPacket<'_>) -> bool {
        if !pkt.src.is_v4() || !pkt.dst.is_v4() { return false; }
        nat_log!(target: TAG, "frag-in {}→{} id={} off={} len={} mf={} proto={}",
            pkt.src, pkt.dst, pkt.ip_id, pkt.frag_offset_bytes(),
            pkt.l4_len(), if pkt.more_frags { 1 } else { 0 }, pkt.proto);

        let k = FragKey { src: pkt.src, dst: pkt.dst, proto: pkt.proto, ip_id: pkt.ip_id };
        let now = now_ms();

        // Capacity-evict oldest stream before insert.
        if !self.frag.contains_key(&k) && self.frag.len() >= MAX_FRAG_STREAMS {
            if let Some(oldest_key) = self.frag.iter()
                .min_by_key(|(_, e)| e.arrived_ms).map(|(k, _)| *k) {
                self.frag.remove(&oldest_key);
            }
        }
        let entry = self.frag.entry(k).or_insert_with(|| FragEntry {
            parts: Vec::new(),
            proto: pkt.proto, src: pkt.src, dst: pkt.dst,
            total_len: -1, accumulated: 0, arrived_ms: now,
        });

        let off = pkt.frag_offset_bytes();
        let len = pkt.l4_len() as u16;
        if (off as usize) + (len as usize) > MAX_FRAG_BYTES_PER_STREAM {
            self.frag.remove(&k);
            return false;
        }
        let part = FragPart { off, len, data: pkt.l4()[..len as usize].to_vec() };
        entry.parts.push(part);
        entry.accumulated += len as usize;

        if !pkt.more_frags {
            entry.total_len = (pkt.frag_offset_bytes() as i32) + (pkt.l4_len() as i32);
        }
        if entry.accumulated > MAX_FRAG_BYTES_PER_STREAM {
            self.frag.remove(&k);
            return false;
        }
        if entry.total_len < 0 || (entry.accumulated as i32) < entry.total_len {
            return true;
        }

        // Reassemble.
        let mut e = self.frag.remove(&k).unwrap();
        e.parts.sort_by_key(|p| p.off);
        let mut payload = vec![0u8; e.total_len as usize];
        let mut expected: u32 = 0;
        let mut ok = true;
        for p in &e.parts {
            if p.off as u32 != expected { ok = false; break; }
            payload[p.off as usize..p.off as usize + p.len as usize]
                .copy_from_slice(&p.data);
            expected = (p.off as u32) + (p.len as u32);
        }
        let proto = e.proto;
        let src   = e.src;
        let dst   = e.dst;
        let tot   = e.total_len;
        let parts_count = e.parts.len();
        if !ok || expected != tot as u32 {
            nat_log!(target: TAG, "frag-drop {}→{} id={} tot={} expected={} parts={} (gap or overlap)",
                src, dst, k.ip_id, tot, expected, parts_count);
            return false;
        }
        nat_log!(target: TAG, "frag-done {}→{} id={} tot={} parts={}",
            src, dst, k.ip_id, tot, parts_count);

        // Build a clean, un-fragmented IP packet so the normal parse
        // path verifies the header checksum.
        let total_ip = 20 + tot as usize;
        let mut full = vec![0u8; total_ip];
        write_ipv4_header_frag(&mut full, total_ip as u16, proto, &src, &dst,
                               0, 0, false);
        full[20..].copy_from_slice(&payload);

        let rebuilt = match IpPacket::parse(&full) { Some(p) => p, None => return false };
        if rebuilt.proto == L4::Udp as u8 {
            if rebuilt.l4_len() < 8 { return false; }
            let u = UdpHeader { p: rebuilt.l4() };
            let fk = FlowKey {
                src: rebuilt.src, dst: rebuilt.dst,
                src_port: u.src_port(), dst_port: u.dst_port(),
                proto: L4::Udp,
            };
            return self.handle_udp(fk, u.payload());
        }
        if rebuilt.proto == L4::Tcp as u8 {
            if rebuilt.l4_len() < 20 { return false; }
            let t = TcpHeader { p: rebuilt.l4() };
            let fk = FlowKey {
                src: rebuilt.src, dst: rebuilt.dst,
                src_port: t.src_port(), dst_port: t.dst_port(),
                proto: L4::Tcp,
            };
            return self.handle_tcp(fk, rebuilt.l4());
        }
        true
    }

    fn handle_udp(&mut self, k: FlowKey, payload: &[u8]) -> bool {
        if !self.udp.contains_key(&k) {
            let emit = self.make_flow_emit();
            let mut s = Box::new(UdpSession::new(k, emit));
            let raw = s.as_mut() as *mut UdpSession;
            if !s.open(raw) { return false; }
            self.udp.insert(k, s);
        }
        let s = self.udp.get_mut(&k).unwrap();
        s.send(payload);
        true
    }

    fn handle_tcp(&mut self, k: FlowKey, tcp_seg: &[u8]) -> bool {
        if tcp_seg.len() < 20 { return false; }
        if !self.tcp.contains_key(&k) {
            let h = TcpHeader { p: tcp_seg };
            if (h.flags() & TCP_SYN) == 0 || (h.flags() & TCP_ACK) != 0 {
                return true;  // stray; ignore
            }
            let emit = self.make_flow_emit();
            let scale = Arc::clone(&self.global_rwnd_scale);
            self.tcp.insert(k, Box::new(TcpSession::new(k, emit, scale)));
        }
        // Single mutable lookup: get the session, run on_segment, read
        // is_terminal — all from the same borrow. C++ did the same.
        let (ok, terminal) = {
            let s = self.tcp.get_mut(&k).unwrap();
            let s_ptr = s.as_mut() as *mut TcpSession;
            let ok = s.on_segment(s_ptr, tcp_seg);
            (ok, s.is_terminal())
        };
        if terminal { self.tcp.remove(&k); }
        ok
    }

    /// Per-flow emit closure. Bumps tx counters before passing to
    /// the user emit_fn. Uses a raw pointer back into `self` — safe
    /// because all NAT work runs single-threaded on the dispatcher
    /// thread.
    fn make_flow_emit(&mut self) -> EmitFn {
        let outer = self.emit_fn.clone();
        let self_ptr = self as *mut NatDispatcher as usize;
        Arc::new(move |bytes: &[u8]| -> bool {
            // SAFETY: NatDispatcher is owned for the lifetime of all
            // flows it spawns; pointer is stable until dispatcher is
            // dropped (at which point all flows have been dropped
            // first by HashMap clear in our Drop).
            unsafe {
                let d = &mut *(self_ptr as *mut NatDispatcher);
                d.tx_pkts  += 1;
                d.tx_bytes += bytes.len() as u64;
                // Bump UDP-tx if this is an IPv4 packet carrying UDP. Used
                // by the stats log to confirm DNS / UDP responses are
                // actually flowing back to the client.
                if bytes.len() >= 10 && (bytes[0] >> 4) == 4 && bytes[9] == L4::Udp as u8 {
                    d.udp_tx_pkts += 1;
                }
            }
            outer(bytes)
        })
    }

    /// Sample the outbound-queue pressure, recompute the global rwnd
    /// scale, and fan out an ACK to every active TCP session if the
    /// scale grew by ≥ `RWND_GREW_THRESHOLD` (or unblocked from 0).
    ///
    /// Scale formula:
    ///   pressure ≤ LO            → scale = FULL (1.0)
    ///   LO < pressure < HI       → linear ramp FULL → 0
    ///   pressure ≥ HI            → scale = 0 (zero windows)
    ///
    /// All arithmetic in `[0, GLOBAL_RWND_SCALE_FULL]` fixed-point.
    fn update_global_rwnd_scale(&mut self) {
        let pressure = match self.pressure_fn.as_ref() {
            Some(f) => (f)(),
            None    => 0,    // no wire / kernel-TUN path → never throttle
        };
        let scale = if pressure <= GLOBAL_RWND_LO {
            GLOBAL_RWND_SCALE_FULL
        } else if pressure >= GLOBAL_RWND_HI {
            0
        } else {
            // (HI - pressure) / (HI - LO), in 0..1000 fixed-point.
            // (HI - LO) = 400 in our chosen constants — non-zero.
            let num = (GLOBAL_RWND_HI - pressure) as u32 * GLOBAL_RWND_SCALE_FULL as u32;
            let den = (GLOBAL_RWND_HI - GLOBAL_RWND_LO) as u32;
            (num / den) as u16
        };

        let prev = self.last_rwnd_scale;
        self.global_rwnd_scale.store(scale, Ordering::Relaxed);
        self.last_rwnd_scale = scale;

        // Fan-out trigger:
        //   - scale unblocked from 0 → peer probably waiting on ZWP
        //   - scale jumped by ≥ THRESHOLD → peer's window cap just got
        //     larger, send a window-update ACK so it can start sending
        //     more without waiting for its delayed-ACK timer.
        let unblocked = prev == 0 && scale > 0;
        let grew     = scale > prev && (scale - prev) >= RWND_GREW_THRESHOLD;
        if unblocked || grew {
            nat_log!(target: TAG, "rwnd-scale grew {prev} → {scale} (pressure={pressure}) — fan-out ACK to {} sessions",
                self.tcp.len());
            for s in self.tcp.values_mut() {
                s.fan_out_window_update();
            }
        }
    }

    pub fn sweep_idle(&mut self, udp_idle_ms: u32) {
        let now = now_ms();

        // Update the global rwnd scale BEFORE tick: a session whose
        // peer just went into ZWP / dup-ACK retransmit benefits from a
        // refreshed scale on this round's ACKs.
        self.update_global_rwnd_scale();

        self.udp.retain(|_, s| now.wrapping_sub(s.last_ms()) <= udp_idle_ms);

        let stale: Vec<FlowKey> = self.tcp.iter_mut()
            .filter_map(|(k, s)| if !s.tick(now) { Some(*k) } else { None })
            .collect();
        for k in stale { self.tcp.remove(&k); }

        let expired: Vec<FragKey> = self.frag.iter()
            .filter_map(|(k, e)| {
                if now.wrapping_sub(e.arrived_ms) > FRAG_EXPIRY_MS { Some(*k) } else { None }
            })
            .collect();
        for k in expired {
            if let Some(e) = self.frag.get(&k) {
                nat_log!(target: TAG, "frag-expire {}→{} id={} parts={} accum={}",
                    e.src, e.dst, k.ip_id, e.parts.len(), e.accumulated);
            }
            self.frag.remove(&k);
        }

        if debug::debug_enabled() && now.wrapping_sub(self.last_stats_log_ms) > 5_000 {
            self.last_stats_log_ms = now;
            // LK send-pump queue stats were sid-keyed via the global
            // `lk_stats` map; that's gone with the session table. The
            // pump still surfaces backpressure through the emit
            // closure's bool return — the NAT layer just doesn't have
            // direct visibility into queue depth any more. If we need
            // it back, plumb a counter through the `EmitFn` boundary.
            let mut udp_sent_pkts: u64 = 0;
            let mut udp_recv_pkts: u64 = 0;
            let mut udp_silent:    u32 = 0;
            for s in self.udp.values() {
                let tx = s.tx_count() as u64;
                let rx = s.rx_count() as u64;
                udp_sent_pkts += tx;
                udp_recv_pkts += rx;
                if tx > 0 && rx == 0 { udp_silent += 1; }
            }
            nat_log!(target: TAG,
                "sid={:#x} rx={}/{} tx={}/{} udp_tx={} udp_send={}→recv={} udp_silent={} tcp={} udp={} frag={}",
                self.sid, self.rx_pkts, self.rx_bytes,
                self.tx_pkts, self.tx_bytes,
                self.udp_tx_pkts,
                udp_sent_pkts, udp_recv_pkts, udp_silent,
                self.tcp.len(), self.udp.len(), self.frag.len());

            // Per-session kernel TCP_INFO snapshot. Only logs sessions
            // in non-Open ca_state or with unacked bytes / retransmits
            // — i.e., flows that aren't healthily streaming. Surfaces
            // the "established at our level but stuck at kernel level"
            // case where SYN_SENT lingers because the destination
            // never returned SYN-ACK.
            for s in self.tcp.values() {
                s.log_kernel_tcp_info();
            }
        }
    }

    pub fn flow_stats(&self) -> Stats {
        let mut s = Stats::default();
        s.tcp_flows = self.tcp.len() as u32;
        s.udp_flows = self.udp.len() as u32;
        let mut srtts:   Vec<u32> = Vec::with_capacity(self.tcp.len());
        let mut rttvars: Vec<u32> = Vec::with_capacity(self.tcp.len());
        let mut rtos:    Vec<u32> = Vec::with_capacity(self.tcp.len());
        for t in self.tcp.values() {
            let st = t.state() as u8;
            if (st as usize) < 11 { s.tcp_state_counts[st as usize] += 1; }
            if t.srtt_ms() > 0 {
                srtts.push(t.srtt_ms());
                rttvars.push(t.rttvar_ms());
                rtos.push(t.rto_ms());
            }
            s.flight_total_bytes += t.flight_bytes() as u64;
            s.rto_retx_total     += t.retransmits() as u64;
        }
        fn med(v: &mut Vec<u32>) -> u32 {
            if v.is_empty() { return 0; }
            v.sort_unstable();
            v[v.len() / 2]
        }
        if !srtts.is_empty() {
            s.srtt_min_ms = *srtts.iter().min().unwrap();
            s.srtt_max_ms = *srtts.iter().max().unwrap();
        }
        s.srtt_med_ms   = med(&mut srtts);
        s.rttvar_med_ms = med(&mut rttvars);
        s.rto_med_ms    = med(&mut rtos);
        s
    }
}

impl Drop for NatDispatcher {
    fn drop(&mut self) {
        if self.registered_for_sweep {
            super::sweep::unregister(self as *mut Self as usize);
        }
        // TcpSession/UdpSession Drop closes host sockets + unregisters poll.
        self.tcp.clear();
        self.udp.clear();
        nat_log!(target: TAG, "nat dispatcher sid={} down", self.sid);
    }
}
