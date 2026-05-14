//! Per-flow TCP NAT state machine — Rust port of C++ nat/tcp_session.cc.
//!
//! Preserves the same tuning the C++ version landed on: PRR (β=0.85),
//! NewReno step 5, RFC 8985 RACK + TLP, RFC 6675 IsLost rate limit,
//! RFC 7323 Timestamps + Eifel spurious-RTO undo, CUBIC TCP-friendly
//! congestion-avoidance growth, RFC 1122 SWS-avoidance, RFC 3042
//! Limited Transmit, etc.
//!
//! Single-threaded — owned by NatDispatcher via Box, all callbacks
//! (poll thunk, dispatcher tick) run on the dispatcher thread.

use std::collections::VecDeque;
use std::io::{ErrorKind, Read, Write};
use std::net::Shutdown;

use mio::{Interest, Token};

use crate::dispatcher::{self, EventHandler};
use crate::nat_log;

use super::dispatcher::EmitFn;
use super::flow_key::FlowKey;
use super::ip_packet::{
    build_tcp, TcpBuild, TcpHeader,
    TCP_ACK, TCP_FIN, TCP_PSH, TCP_RST, TCP_SYN,
};
use super::{debug, now_ms};

const TAG: &str = "tcp-session";

/// Compact flag mnemonic for per-segment trace logs — `SAPF` for
/// `SYN+ACK+PSH+FIN`, `A` for a pure ACK, `R` for a RST, etc. Only the
/// set flags are emitted, in the order S,A,F,R,P. Caller decides
/// whether the result is worth logging (this allocates).
fn fmt_flags(flags: u8) -> String {
    let mut s = String::with_capacity(5);
    if flags & TCP_SYN != 0 { s.push('S'); }
    if flags & TCP_ACK != 0 { s.push('A'); }
    if flags & TCP_FIN != 0 { s.push('F'); }
    if flags & TCP_RST != 0 { s.push('R'); }
    if flags & TCP_PSH != 0 { s.push('P'); }
    s
}

/// Extract SACK option blocks from a TCP options buffer (the bytes
/// between the fixed 20-byte header and the start of payload). Returns
/// `" sack=L1-R1,L2-R2"` (leading space for easy concat), or empty
/// string when no SACK option is present. Mirrors the parse loop in
/// `parse_sack_blocks` but read-only — does not mutate session state.
fn fmt_sack_opts(opts: &[u8]) -> String {
    let mut out = String::new();
    let mut i = 0usize;
    while i < opts.len() {
        let kind = opts[i];
        if kind == 0 { break; }
        if kind == 1 { i += 1; continue; }
        if i + 1 >= opts.len() { break; }
        let olen = opts[i + 1] as usize;
        if olen < 2 || i + olen > opts.len() { break; }
        if kind == 5 && olen >= 10 && (olen - 2) % 8 == 0 {
            let mut j = i + 2;
            while j + 8 <= i + olen {
                let left  = ((opts[j]     as u32) << 24)
                          | ((opts[j + 1] as u32) << 16)
                          | ((opts[j + 2] as u32) << 8)
                          |  (opts[j + 3] as u32);
                let right = ((opts[j + 4] as u32) << 24)
                          | ((opts[j + 5] as u32) << 16)
                          | ((opts[j + 6] as u32) << 8)
                          |  (opts[j + 7] as u32);
                if out.is_empty() { out.push_str(" sack="); } else { out.push(','); }
                out.push_str(&format!("{left}-{right}"));
                j += 8;
            }
        }
        i += olen;
    }
    out
}

// Our advertised MSS in the SYN-ACK. Sized to fit one SCTP packet
// end-to-end on the LK lossy channel.
const OWN_MSS: u16 = 960;

// to_client_ buffering watermarks for upstream host POLLIN
// backpressure. See C++ kToClientHighWater / kToClientLowWater.
const TO_CLIENT_HIGH_WATER: usize = 256 * 1024;
const TO_CLIENT_LOW_WATER:  usize = 128 * 1024;

// Cap on the OOO ingress queue. A quarter of the nominal rcv_wnd.
const MAX_OOO_BYTES: usize = 256 * 1024;

#[repr(u8)]
#[derive(Clone, Copy, PartialEq, Eq, Debug)]
pub enum TcpState {
    Closed = 0, Listen = 1, SynSent = 2, SynRcvd = 3, Established = 4,
    FinWait1 = 5, FinWait2 = 6, CloseWait = 7, Closing = 8, LastAck = 9, TimeWait = 10,
}

// ── Sequence-number arithmetic (modulo 2^32 wraparound) ────────────
#[inline] fn seq_lt(a: u32, b: u32) -> bool { (a.wrapping_sub(b) as i32) < 0 }
#[inline] fn seq_le(a: u32, b: u32) -> bool { (a.wrapping_sub(b) as i32) <= 0 }

/// Wraparound-safe "is `now` at or past `deadline`?" — `now_ms()`
/// returns a `u32` that wraps every ~49 days, so a plain
/// `now >= deadline` flips meaning across the wraparound boundary
/// and timers (RTO, RACK, TLP, ZWP, TIME_WAIT) stop firing. The
/// signed-difference idiom is correct as long as the gap fits in
/// `i32` (~24 days), which it always does for TCP timers.
#[inline] fn time_after(now: u32, deadline: u32) -> bool {
    (now.wrapping_sub(deadline) as i32) >= 0
}

fn random_isn() -> u32 { now_ms() }

// ── TCP option parser ──────────────────────────────────────────────
#[derive(Default)]
struct ParsedOpts {
    mss:         u16,
    sack_ok:     bool,
    ws_ok:       bool,
    wscale:      u8,
    ts_present:  bool,
    ts_val:      u32,
    ts_ecr:      u32,
}

fn parse_options(opts: &[u8]) -> ParsedOpts {
    let mut r = ParsedOpts { mss: 0, sack_ok: false, ws_ok: false, wscale: 0,
                              ts_present: false, ts_val: 0, ts_ecr: 0 };
    let mut i = 0usize;
    while i < opts.len() {
        let kind = opts[i];
        if kind == 0 { break; }            // EOL
        if kind == 1 { i += 1; continue; } // NOP
        if i + 1 >= opts.len() { break; }
        let olen = opts[i + 1] as usize;
        if olen < 2 || i + olen > opts.len() { break; }
        match kind {
            2 if olen == 4 => {
                r.mss = ((opts[i + 2] as u16) << 8) | (opts[i + 3] as u16);
            }
            3 if olen == 3 => {
                r.ws_ok  = true;
                r.wscale = opts[i + 2].min(14);
            }
            4 if olen == 2 => { r.sack_ok = true; }
            8 if olen == 10 => {
                r.ts_present = true;
                r.ts_val = ((opts[i + 2] as u32) << 24) | ((opts[i + 3] as u32) << 16)
                         | ((opts[i + 4] as u32) << 8)  |  (opts[i + 5] as u32);
                r.ts_ecr = ((opts[i + 6] as u32) << 24) | ((opts[i + 7] as u32) << 16)
                         | ((opts[i + 8] as u32) << 8)  |  (opts[i + 9] as u32);
            }
            _ => {}
        }
        i += olen;
    }
    r
}

// Outbound segment awaiting ACK.
struct OutSeg {
    seq:           u32,
    flags:         u8,
    sent_ms:       u32,
    retransmitted: bool,
    sacked:        bool,
    data:          Vec<u8>,
    options:       Vec<u8>,
}

// OOO ingress buffer entry.
struct OooSeg { seq: u32, data: Vec<u8> }

pub struct TcpSession {
    pub key: FlowKey,
    emit:    EmitFn,
    state:   TcpState,

    // RFC 793 sequence-number bookkeeping.
    snd_una: u32,
    snd_nxt: u32,
    snd_wnd: u32,
    rcv_nxt: u32,
    rcv_wnd: u32,
    adv_wnd: u32,

    // Peer-advertised options.
    peer_mss:     u16,
    peer_sack_ok: bool,
    peer_ws_ok:   bool,
    peer_wscale:  u8,
    own_wscale:   u8,

    // RFC 7323 Timestamps.
    peer_ts_ok:           bool,
    ts_recent:            u32,
    ts_clock_base:        u32,
    tsval_at_rto:         u32,
    cwnd_pre_rto:         u32,
    ssthresh_pre_rto:     u32,
    cur_tsecr_present:    bool,
    cur_tsecr:            u32,

    // Host socket — owned by the session; the reactor holds a tiny
    // EventHandler thunk that calls back through `self_ptr`. Stays
    // None until the first segment arrives and we open the connection.
    host:                Option<mio::net::TcpStream>,
    host_token:          Option<Token>,
    host_read_eof:       bool,
    host_writable:       bool,
    host_wr_shut:        bool,
    host_pollin_paused:  bool,

    sent_fin: bool,

    // Buffers (head-offset for O(1) front-drain).
    to_host:       Vec<u8>,
    to_host_off:   usize,
    to_client:     Vec<u8>,
    to_client_off: usize,

    // Retransmit queue.
    retx:          VecDeque<OutSeg>,
    sacked_bytes:  u32,

    // OOO receive queue.
    ooo:        VecDeque<OooSeg>,
    ooo_bytes:  usize,

    // RTO / RTT (RFC 6298).
    rto_ms:            u32,
    rto_deadline_ms:   u32,
    rto_retries:       u8,
    srtt:              u32,   // x8
    rttvar:            u32,   // x4
    rtt_init:          bool,

    // RFC 5681 congestion control.
    cwnd:      u32,
    ssthresh:  u32,

    // RFC 5681 fast-retransmit dup-ACK counter.
    last_ack_seen:    u32,
    dup_ack_count:    u8,

    // NewReno fast-recovery gate.
    in_recovery:        bool,
    recovery_point:     u32,

    last_head_retx_ms: u32,

    // PRR state.
    prr_delivered:  u32,
    prr_out:        u32,
    recover_fs:     u32,
    sacked_at_segment_start: u32,

    // RFC 8985 RACK-TLP loss detection.
    rack_xmit_ts:     u32,
    rack_end_seq:     u32,
    rack_rtt:         u32,
    rack_reo_wnd:     u32,
    rack_dsack_seen:  bool,
    rack_inited:      bool,
    rack_deadline_ms: u32,

    // Zero-window probe.
    zwp_deadline_ms: u32,
    zwp_interval_ms: u32,

    // TLP.
    tlp_deadline_ms: u32,

    // TIME_WAIT 2 MSL expiry.
    time_wait_deadline_ms: u32,

    // Debug-log throttle for window-limited stall.
    last_stall_log_ms: u32,
    /// Shared with the parent `NatDispatcher`. Applied multiplicatively
    /// to the wire-format advertised window on every header build so
    /// that when the dispatcher's outbound queue gets congested, every
    /// peer sees a smaller window and slows down. Stored as a 0..1000
    /// integer; `GLOBAL_RWND_SCALE_FULL` means "no throttle".
    global_rwnd_scale: std::sync::Arc<std::sync::atomic::AtomicU16>,
}

impl TcpSession {
    pub fn new(
        key: FlowKey,
        emit: EmitFn,
        global_rwnd_scale: std::sync::Arc<std::sync::atomic::AtomicU16>,
    ) -> Self {
        Self {
            key, emit,
            state: TcpState::Closed,
            snd_una: 0, snd_nxt: 0, snd_wnd: 0,
            rcv_nxt: 0, rcv_wnd: 1024 * 1024, adv_wnd: 0,
            peer_mss: 536, peer_sack_ok: false, peer_ws_ok: false,
            peer_wscale: 0, own_wscale: 0,
            peer_ts_ok: false, ts_recent: 0, ts_clock_base: 0,
            tsval_at_rto: 0, cwnd_pre_rto: 0, ssthresh_pre_rto: 0,
            cur_tsecr_present: false, cur_tsecr: 0,
            host: None, host_token: None,
            host_read_eof: false, host_writable: false,
            host_wr_shut: false, host_pollin_paused: false,
            sent_fin: false,
            to_host: Vec::new(),   to_host_off: 0,
            to_client: Vec::new(), to_client_off: 0,
            retx: VecDeque::new(), sacked_bytes: 0,
            ooo: VecDeque::new(),  ooo_bytes: 0,
            // Initial RTO before any RTT sample. RFC 6298 specifies 1 s,
            // but big-tech / CDN TCP stacks (Google, Cloudflare, Fastly)
            // patch this much lower so first-packet loss recovers in
            // ~250 ms instead of 1 s. Matches the post-sample floor at
            // `update_rtt`'s `.max(200)`, so timer-driven retx logic
            // doesn't see a step on the first SRTT sample.
            rto_ms: 250, rto_deadline_ms: 0, rto_retries: 0,
            srtt: 0, rttvar: 0, rtt_init: false,
            cwnd: 0, ssthresh: 0xFFFF_FFFF,
            last_ack_seen: 0, dup_ack_count: 0,
            in_recovery: false, recovery_point: 0,
            last_head_retx_ms: 0,
            prr_delivered: 0, prr_out: 0, recover_fs: 0,
            sacked_at_segment_start: 0,
            rack_xmit_ts: 0, rack_end_seq: 0, rack_rtt: 0, rack_reo_wnd: 0,
            rack_dsack_seen: false, rack_inited: false, rack_deadline_ms: 0,
            zwp_deadline_ms: 0, zwp_interval_ms: 200,
            tlp_deadline_ms: 0,
            time_wait_deadline_ms: 0,
            last_stall_log_ms: 0,
            global_rwnd_scale,
        }
    }

    /// Called by NatDispatcher when the global rwnd scale grows enough
    /// to be worth informing peers (e.g. unblocked from 0, or jumped by
    /// `RWND_GREW_THRESHOLD`). Emits a single ACK with the freshly-
    /// scaled window so the peer can resume sending without waiting
    /// for its next delayed-ACK / ZWP timer.
    pub fn fan_out_window_update(&mut self) {
        if matches!(self.state, TcpState::Established | TcpState::CloseWait
                              | TcpState::FinWait1   | TcpState::FinWait2) {
            self.emit_ack();
        }
    }

    pub fn state(&self) -> TcpState { self.state }
    pub fn is_terminal(&self) -> bool { matches!(self.state, TcpState::Closed) }

    /// Periodic diagnostic stub. The Linux-only TCP_INFO ioctl that
    /// used to live here was dropped during the mio port — the field
    /// offsets aren't portable and the libraries we can build on
    /// macOS/Windows expose nothing equivalent. Kept as a no-op so the
    /// dispatcher's stats loop call site doesn't need cfg gating.
    pub fn log_kernel_tcp_info(&self) {}

    pub fn srtt_ms(&self)      -> u32 { if self.rtt_init { self.srtt / 8 } else { 0 } }
    pub fn rttvar_ms(&self)    -> u32 { if self.rtt_init { self.rttvar / 4 } else { 0 } }
    pub fn rto_ms(&self)       -> u32 { self.rto_ms }
    pub fn flight_bytes(&self) -> u32 { self.snd_nxt.wrapping_sub(self.snd_una) }
    pub fn retransmits(&self)  -> u8  { self.rto_retries }

    fn current_tsval(&self) -> u32 { now_ms().wrapping_sub(self.ts_clock_base) }

    // ─── Top-level segment dispatch ────────────────────────────────
    pub fn on_segment(&mut self, self_ptr: *mut TcpSession, tcp_seg: &[u8]) -> bool {
        if tcp_seg.len() < 20 { return false; }
        let h = TcpHeader { p: tcp_seg };
        let hdr = h.data_off();
        if hdr < 20 || hdr > tcp_seg.len() { return false; }

        let flags = h.flags();
        let seq   = h.seq();
        let ack   = h.ack();
        let wnd   = h.window();
        let payload = &tcp_seg[hdr..];

        nat_log!(target: TAG, "seg-in  {}:{}→{}:{} seq={} ack={} flags={} len={} wnd={}{}",
            self.key.src, self.key.src_port,
            self.key.dst, self.key.dst_port,
            seq, ack, fmt_flags(flags), payload.len(), wnd,
            if hdr > 20 { fmt_sack_opts(&tcp_seg[20..hdr]) } else { String::new() });

        // Snapshot sacked_bytes_ BEFORE any SACK option mutation.
        self.sacked_at_segment_start = self.sacked_bytes;

        if self.peer_sack_ok && hdr > 20 {
            self.parse_sack_blocks(&tcp_seg[20..hdr]);
        }
        self.cur_tsecr_present = false;
        self.cur_tsecr = 0;
        if self.peer_ts_ok && hdr > 20 {
            let r = parse_options(&tcp_seg[20..hdr]);
            if r.ts_present {
                self.cur_tsecr_present = true;
                self.cur_tsecr = r.ts_ecr;
                if seq == self.rcv_nxt { self.ts_recent = r.ts_val; }
            }
        }

        // RFC 5961 §3.2 RST validation.
        if (flags & TCP_RST) != 0 {
            let in_window = matches!(self.state, TcpState::SynRcvd | TcpState::Closed)
                            || seq.wrapping_sub(self.rcv_nxt) < self.rcv_wnd;
            if in_window { self.mark_closed(); }
            return true;
        }

        if matches!(self.state, TcpState::Closed) {
            return self.accept_initial_syn(self_ptr, tcp_seg);
        }
        match self.state {
            TcpState::SynRcvd     => self.process_syn_rcvd(self_ptr, flags, seq, ack, wnd, payload),
            TcpState::Established => self.process_established(flags, seq, ack, wnd, payload),
            TcpState::CloseWait   => self.process_close_wait(flags, ack, wnd),
            TcpState::FinWait1    => self.process_fin_wait_1(flags, seq, ack, wnd, payload),
            TcpState::FinWait2    => self.process_fin_wait_2(flags, seq, wnd, payload),
            TcpState::Closing     => self.process_closing(flags, ack),
            TcpState::LastAck     => self.process_last_ack(flags, ack),
            TcpState::TimeWait    => self.process_time_wait(flags),
            _ => true,
        }
    }

    fn accept_initial_syn(&mut self, self_ptr: *mut TcpSession, tcp_seg: &[u8]) -> bool {
        let h = TcpHeader { p: tcp_seg };
        let f = h.flags();
        if (f & TCP_SYN) == 0 || (f & TCP_ACK) != 0 { return false; }

        self.rcv_nxt = h.seq().wrapping_add(1);
        self.snd_una = random_isn();
        self.snd_nxt = self.snd_una;

        let hdr = h.data_off();
        if hdr > 20 {
            let r = parse_options(&tcp_seg[20..hdr]);
            if r.mss != 0     { self.peer_mss     = r.mss; }
            if r.sack_ok      { self.peer_sack_ok = true; }
            if r.ws_ok        {
                self.peer_ws_ok = true;
                // RFC 7323 §2.2: wscale MUST NOT exceed 14. Clamp here
                // so a buggy or hostile peer can't drive
                // `(wnd as u32) << self.peer_wscale` into u32 shift-
                // overflow (panic in debug, no-op zero in release).
                self.peer_wscale = r.wscale.min(14);
            }
            if r.ts_present   {
                self.peer_ts_ok    = true;
                self.ts_recent     = r.ts_val;
                self.ts_clock_base = now_ms();
            }
        }

        self.peer_mss = self.peer_mss.min(OWN_MSS);
        if self.peer_ws_ok { self.own_wscale = 4; }
        self.cwnd     = 10u32 * (self.peer_mss as u32);
        self.snd_wnd  = h.window() as u32;
        self.state    = TcpState::SynRcvd;

        // SYN-ACK options.
        let mut opts = [0u8; 24];
        let mut opts_len = 0usize;
        opts[opts_len] = 2; opts_len += 1;
        opts[opts_len] = 4; opts_len += 1;
        opts[opts_len] = (OWN_MSS >> 8) as u8; opts_len += 1;
        opts[opts_len] =  OWN_MSS       as u8; opts_len += 1;
        if self.peer_sack_ok {
            opts[opts_len] = 1; opts_len += 1; opts[opts_len] = 1; opts_len += 1;
            opts[opts_len] = 4; opts_len += 1; opts[opts_len] = 2; opts_len += 1;
        }
        if self.peer_ws_ok {
            opts[opts_len] = 1; opts_len += 1;
            opts[opts_len] = 3; opts_len += 1;
            opts[opts_len] = 3; opts_len += 1;
            opts[opts_len] = self.own_wscale; opts_len += 1;
        }
        if self.peer_ts_ok {
            let tsval = self.current_tsval();
            opts[opts_len] = 1; opts_len += 1; opts[opts_len] = 1; opts_len += 1;
            opts[opts_len] = 8; opts_len += 1; opts[opts_len] = 10; opts_len += 1;
            opts[opts_len] = (tsval >> 24) as u8; opts_len += 1;
            opts[opts_len] = (tsval >> 16) as u8; opts_len += 1;
            opts[opts_len] = (tsval >>  8) as u8; opts_len += 1;
            opts[opts_len] =  tsval        as u8; opts_len += 1;
            opts[opts_len] = (self.ts_recent >> 24) as u8; opts_len += 1;
            opts[opts_len] = (self.ts_recent >> 16) as u8; opts_len += 1;
            opts[opts_len] = (self.ts_recent >>  8) as u8; opts_len += 1;
            opts[opts_len] =  self.ts_recent        as u8; opts_len += 1;
        }
        let _ = self_ptr;
        let snd_una = self.snd_una;
        let opts_copy: Vec<u8> = opts[..opts_len].to_vec();
        self.emit_segment(TCP_SYN | TCP_ACK, snd_una, &[], true, &opts_copy);
        self.snd_nxt = self.snd_una.wrapping_add(1);
        let n = now_ms();
        self.schedule_rto(n);
        nat_log!(target: TAG, "syn → syn-ack: {}:{} → {}:{} (mss={}, sack={}, ws={}/{})",
            self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
            self.peer_mss, self.peer_sack_ok as u8, self.peer_wscale, self.own_wscale);
        true
    }

    fn process_syn_rcvd(&mut self, self_ptr: *mut TcpSession,
                        flags: u8, seq: u32, ack: u32, wnd: u16,
                        payload: &[u8]) -> bool {
        if (flags & TCP_ACK) == 0 { return true; }
        if ack != self.snd_nxt    { return true; }
        let n = now_ms();
        self.on_ack(ack, n);
        self.snd_wnd = (wnd as u32) << self.peer_wscale;
        self.state   = TcpState::Established;
        if !self.open_host_socket(self_ptr) {
            self.emit_rst(self.snd_nxt, self.rcv_nxt);
            self.mark_closed();
            return true;
        }
        nat_log!(target: TAG, "established: {}:{} → {}:{}",
            self.key.src, self.key.src_port, self.key.dst, self.key.dst_port);
        let in_order_at_entry = seq == self.rcv_nxt;
        if !payload.is_empty() {
            self.handle_data_in(seq, payload);
            self.emit_ack();
        }
        if (flags & TCP_FIN) != 0 {
            if in_order_at_entry && seq.wrapping_add(payload.len() as u32) == self.rcv_nxt {
                self.rcv_nxt = self.rcv_nxt.wrapping_add(1);
                self.state   = TcpState::CloseWait;
                self.emit_ack();
            } else {
                self.emit_ack();
            }
        }
        self.update_zwp(now_ms());
        true
    }

    fn process_established(&mut self, flags: u8, seq: u32, ack: u32, wnd: u16,
                           payload: &[u8]) -> bool {
        let n = now_ms();
        if (flags & TCP_ACK) != 0 { self.on_ack(ack, n); }
        self.snd_wnd = (wnd as u32) << self.peer_wscale;
        let in_order_at_entry = seq == self.rcv_nxt;
        if !payload.is_empty() {
            self.handle_data_in(seq, payload);
            self.emit_ack();
        }
        if (flags & TCP_FIN) != 0 {
            if in_order_at_entry && seq.wrapping_add(payload.len() as u32) == self.rcv_nxt {
                self.rcv_nxt = self.rcv_nxt.wrapping_add(1);
                self.state   = TcpState::CloseWait;
                self.emit_ack();
                self.try_drain_to_host();
                if self.host.is_some() && !self.host_wr_shut &&
                   self.to_host_off >= self.to_host.len() {
                    if let Some(s) = self.host.as_ref() {
                        let _ = s.shutdown(Shutdown::Write);
                    }
                    self.host_wr_shut = true;
                }
            } else {
                self.emit_ack();
            }
        }
        self.try_segment_and_emit();
        self.update_zwp(now_ms());
        true
    }

    fn process_close_wait(&mut self, flags: u8, ack: u32, wnd: u16) -> bool {
        let n = now_ms();
        if (flags & TCP_ACK) != 0 { self.on_ack(ack, n); }
        self.snd_wnd = (wnd as u32) << self.peer_wscale;
        if (flags & TCP_FIN) != 0 { self.emit_ack(); }
        self.try_segment_and_emit();
        self.update_zwp(now_ms());
        true
    }

    fn process_fin_wait_1(&mut self, flags: u8, seq: u32, ack: u32, wnd: u16,
                          payload: &[u8]) -> bool {
        let n = now_ms();
        if (flags & TCP_ACK) != 0 { self.on_ack(ack, n); }
        self.snd_wnd = (wnd as u32) << self.peer_wscale;
        let in_order_at_entry = seq == self.rcv_nxt;
        if !payload.is_empty() {
            self.handle_data_in(seq, payload);
            self.emit_ack();
        }
        let our_fin_acked = !seq_lt(self.snd_una, self.snd_nxt);
        if (flags & TCP_FIN) != 0 {
            if in_order_at_entry && seq.wrapping_add(payload.len() as u32) == self.rcv_nxt {
                self.rcv_nxt = self.rcv_nxt.wrapping_add(1);
                self.emit_ack();
                self.state = if our_fin_acked { TcpState::TimeWait } else { TcpState::Closing };
                if matches!(self.state, TcpState::TimeWait) { self.enter_time_wait(now_ms()); }
            }
        } else if our_fin_acked {
            self.state = TcpState::FinWait2;
        }
        self.update_zwp(now_ms());
        true
    }

    fn process_fin_wait_2(&mut self, flags: u8, seq: u32, wnd: u16,
                          payload: &[u8]) -> bool {
        self.snd_wnd = (wnd as u32) << self.peer_wscale;
        let in_order_at_entry = seq == self.rcv_nxt;
        if !payload.is_empty() {
            self.handle_data_in(seq, payload);
            self.emit_ack();
        }
        if (flags & TCP_FIN) != 0 {
            if in_order_at_entry && seq.wrapping_add(payload.len() as u32) == self.rcv_nxt {
                self.rcv_nxt = self.rcv_nxt.wrapping_add(1);
                self.emit_ack();
                self.state = TcpState::TimeWait;
                self.enter_time_wait(now_ms());
            }
        }
        self.update_zwp(now_ms());
        true
    }

    fn process_closing(&mut self, flags: u8, ack: u32) -> bool {
        let n = now_ms();
        if (flags & TCP_ACK) != 0 { self.on_ack(ack, n); }
        if !seq_lt(self.snd_una, self.snd_nxt) {
            self.state = TcpState::TimeWait;
            self.enter_time_wait(now_ms());
        }
        true
    }

    fn process_last_ack(&mut self, flags: u8, ack: u32) -> bool {
        if (flags & TCP_ACK) != 0 {
            let n = now_ms();
            self.on_ack(ack, n);
            if !seq_lt(self.snd_una, self.snd_nxt) { self.mark_closed(); }
        }
        true
    }

    fn process_time_wait(&mut self, flags: u8) -> bool {
        if (flags & TCP_FIN) != 0 {
            self.emit_ack();
            self.time_wait_deadline_ms = now_ms() + 30_000;
        }
        true
    }

    // ─── ACK accounting ────────────────────────────────────────────
    fn on_ack(&mut self, ack_no: u32, now: u32) {
        if seq_lt(self.snd_nxt, ack_no) { return; }

        if seq_le(ack_no, self.snd_una) {
            // Duplicate ACK branch.
            if ack_no == self.last_ack_seen && !self.retx.is_empty() {
                if self.in_recovery {
                    let head_sacked = self.retx.front().map(|h| h.sacked).unwrap_or(true);
                    if !head_sacked &&
                       self.sacked_bytes >= 3u32 * (self.peer_mss as u32) {
                        let min_gap = if self.rtt_init { (self.srtt / 16).max(50) } else { 50 };
                        // Wraparound-safe: cast through i32 so the
                        // "≥ min_gap" check stays correct across the
                        // ~49-day u32 wraparound.
                        if (now.wrapping_sub(self.last_head_retx_ms) as i32) >= min_gap as i32 {
                            self.last_head_retx_ms = now;
                            if let Some(head) = self.retx.front_mut() {
                                head.retransmitted = true;
                                head.sent_ms       = now;
                            }
                            let (flags, seq, data, options) = {
                                let h = self.retx.front().unwrap();
                                (h.flags, h.seq, h.data.clone(), h.options.clone())
                            };
                            nat_log!(target: TAG, "lost-retx {}:{}→{}:{} seq={} sacked={} flight={}",
                                self.key.src, self.key.src_port,
                                self.key.dst, self.key.dst_port,
                                seq, self.sacked_bytes,
                                self.snd_nxt.wrapping_sub(self.snd_una));
                            self.emit_segment(flags, seq, &data, false, &options);
                        }
                    }
                    self.update_prr_after_ack(self.sacked_at_segment_start, 0);
                    self.rack_detect_loss_and_arm_timer(now);
                    return;
                }
                self.dup_ack_count = self.dup_ack_count.saturating_add(1);

                // RFC 3042 Limited Transmit.
                if self.dup_ack_count <= 2 && self.to_client_off < self.to_client.len() {
                    let flight = self.snd_nxt.wrapping_sub(self.snd_una);
                    if flight < self.snd_wnd {
                        let pending = self.to_client.len() - self.to_client_off;
                        let avail   = (self.snd_wnd - flight) as usize;
                        let chunk   = (self.peer_mss as usize).min(pending).min(avail);
                        if chunk > 0 {
                            let snd_nxt = self.snd_nxt;
                            let src: Vec<u8> = self.to_client[self.to_client_off..self.to_client_off + chunk].to_vec();
                            if self.emit_segment(TCP_ACK | TCP_PSH, snd_nxt, &src, true, &[]) {
                                self.snd_nxt        = self.snd_nxt.wrapping_add(chunk as u32);
                                self.to_client_off += chunk;
                            }
                        }
                    }
                }
                if self.dup_ack_count == 3 && !self.retx.is_empty() {
                    self.enter_fast_recovery(now, "fast-retx");
                    let (flags, seq, data, options) = {
                        let h = self.retx.front_mut().unwrap();
                        h.retransmitted = true;
                        h.sent_ms       = now;
                        (h.flags, h.seq, h.data.clone(), h.options.clone())
                    };
                    self.emit_segment(flags, seq, &data, false, &options);
                    self.dup_ack_count     = 0;
                    self.last_head_retx_ms = now;
                    self.schedule_rto(now);
                }
            }
            self.rack_detect_loss_and_arm_timer(now);
            return;
        }
        let acked = ack_no.wrapping_sub(self.snd_una);

        // RFC 3522 Eifel spurious-RTO detection.
        if self.tsval_at_rto != 0 && self.cur_tsecr_present {
            if (self.cur_tsecr.wrapping_sub(self.tsval_at_rto) as i32) < 0 {
                self.cwnd     = self.cwnd.max(self.cwnd_pre_rto);
                self.ssthresh = self.ssthresh.max(self.ssthresh_pre_rto);
                nat_log!(target: TAG, "eifel-undo {}:{}→{}:{} cwnd↺{} ssthresh↺{} (TSecr={} < rto-TSval={})",
                    self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                    self.cwnd, self.ssthresh, self.cur_tsecr, self.tsval_at_rto);
            }
            self.tsval_at_rto = 0;
        }

        if self.in_recovery {
            if !seq_lt(ack_no, self.recovery_point) {
                self.cwnd            = self.ssthresh;
                self.in_recovery     = false;
                self.recovery_point  = 0;
            }
        } else {
            if self.cwnd < self.ssthresh {
                self.cwnd = self.cwnd.wrapping_add(acked.min(self.peer_mss as u32));
            } else {
                let mss = self.peer_mss as u32;
                let step = (mss * 2 * mss) / self.cwnd.max(mss);
                self.cwnd = self.cwnd.wrapping_add(step.max(1));
            }
        }
        self.cwnd = self.cwnd.min(4 * 1024 * 1024);

        self.last_ack_seen = ack_no;
        self.dup_ack_count = 0;

        // RFC 7323 TS-based RTT sample.
        let mut ts_sampled = false;
        if self.peer_ts_ok && self.cur_tsecr_present {
            let rtt = self.current_tsval().wrapping_sub(self.cur_tsecr);
            if rtt > 0 && rtt < 60_000 {
                self.update_rtt(rtt);
                ts_sampled = true;
            }
        }
        // Walk the retx queue.
        let mut sampled = ts_sampled;
        while let Some(head) = self.retx.front() {
            let mut span = head.data.len() as u32;
            if (head.flags & TCP_SYN) != 0 { span += 1; }
            if (head.flags & TCP_FIN) != 0 { span += 1; }
            let end = head.seq.wrapping_add(span);
            if seq_le(end, ack_no) {
                let was_retx   = head.retransmitted;
                let sent_ms    = head.sent_ms;
                let was_sacked = head.sacked;
                let data_len   = head.data.len();
                if !was_retx && !sampled {
                    self.update_rtt(now.wrapping_sub(sent_ms));
                    sampled = true;
                }
                if !was_sacked {
                    self.rack_update_from_delivered(sent_ms, end, now);
                }
                if was_sacked {
                    self.sacked_bytes = if self.sacked_bytes >= data_len as u32 {
                        self.sacked_bytes - data_len as u32
                    } else { 0 };
                }
                self.retx.pop_front();
            } else {
                break;
            }
        }
        self.snd_una     = ack_no;
        self.rto_retries = 0;

        if self.in_recovery {
            self.update_prr_after_ack(self.sacked_at_segment_start, acked);
        }
        self.rack_detect_loss_and_arm_timer(now);

        if self.rtt_init {
            self.rto_ms = (self.srtt / 8 + self.rttvar.max(1)).max(200).min(60_000);
        }
        self.tlp_deadline_ms = 0;

        // NewReno step 5 — partial-ACK retransmit.
        if self.in_recovery && !self.retx.is_empty() {
            let (flags, seq, data, options) = {
                let h = self.retx.front_mut().unwrap();
                h.retransmitted = true;
                h.sent_ms       = now;
                (h.flags, h.seq, h.data.clone(), h.options.clone())
            };
            self.last_head_retx_ms = now;
            nat_log!(target: TAG, "partial-retx {}:{}→{}:{} seq={} recovery_point={}",
                self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                seq, self.recovery_point);
            self.emit_segment(flags, seq, &data, false, &options);
        }

        if !self.retx.is_empty() { self.schedule_rto(now); }
        else                     { self.rto_deadline_ms = 0; }
    }

    fn update_rtt(&mut self, sample_ms: u32) {
        if !self.rtt_init {
            self.srtt     = sample_ms * 8;
            self.rttvar   = (sample_ms / 2) * 4;
            self.rtt_init = true;
        } else {
            let err = (sample_ms as i64) - (self.srtt as i64 / 8);
            self.rttvar = self.rttvar - self.rttvar / 4 + err.unsigned_abs() as u32;
            self.srtt   = self.srtt   - self.srtt   / 8 + sample_ms;
        }
        self.rto_ms = (self.srtt / 8 + self.rttvar.max(1)).max(200).min(60_000);
    }

    fn schedule_rto(&mut self, now: u32) { self.rto_deadline_ms = now + self.rto_ms; }

    // ─── SACK parse / mark ─────────────────────────────────────────
    fn parse_sack_blocks(&mut self, opts: &[u8]) {
        if !self.peer_sack_ok { return; }
        let mut i = 0usize;
        while i < opts.len() {
            let kind = opts[i];
            if kind == 0 { break; }
            if kind == 1 { i += 1; continue; }
            if i + 1 >= opts.len() { break; }
            let olen = opts[i + 1] as usize;
            if olen < 2 || i + olen > opts.len() { break; }
            if kind == 5 && olen >= 10 && (olen - 2) % 8 == 0 {
                let mut first_block = true;
                let mut j = i + 2;
                while j + 8 <= i + olen {
                    let left  = ((opts[j]     as u32) << 24)
                              | ((opts[j + 1] as u32) << 16)
                              | ((opts[j + 2] as u32) << 8)
                              |  (opts[j + 3] as u32);
                    let right = ((opts[j + 4] as u32) << 24)
                              | ((opts[j + 5] as u32) << 16)
                              | ((opts[j + 6] as u32) << 8)
                              |  (opts[j + 7] as u32);
                    if seq_lt(left, right) {
                        if first_block && seq_lt(left, self.snd_una) {
                            self.rack_dsack_seen = true;
                        }
                        self.on_sack_block(left, right);
                    }
                    first_block = false;
                    j += 8;
                }
            }
            i += olen;
        }
    }

    fn on_sack_block(&mut self, left: u32, right: u32) {
        let now = now_ms();
        // Need indexed loop because we mutate retx entries.
        let mut updates: Vec<(u32, u32)> = Vec::new();
        for s in self.retx.iter_mut() {
            if s.sacked { continue; }
            let end = s.seq.wrapping_add(s.data.len() as u32);
            if !seq_lt(s.seq, left) && !seq_lt(right, end) {
                s.sacked = true;
                updates.push((s.sent_ms, end));
                self.sacked_bytes += s.data.len() as u32;
            }
        }
        for (sent_ms, end) in updates {
            self.rack_update_from_delivered(sent_ms, end, now);
        }
    }

    fn build_sack_option(&self, opts: &mut [u8]) -> usize {
        if !self.peer_sack_ok || self.ooo.is_empty() { return 0; }
        let n_blocks = self.ooo.len().min(4);
        let total    = 2 + 2 + 8 * n_blocks;
        if opts.len() < total { return 0; }
        opts[0] = 1; opts[1] = 1;
        opts[2] = 5;
        opts[3] = (2 + 8 * n_blocks) as u8;
        let mut off = 4usize;
        for i in 0..n_blocks {
            let s = &self.ooo[i];
            let left  = s.seq;
            let right = s.seq.wrapping_add(s.data.len() as u32);
            opts[off] = (left  >> 24) as u8; off += 1;
            opts[off] = (left  >> 16) as u8; off += 1;
            opts[off] = (left  >>  8) as u8; off += 1;
            opts[off] =  left         as u8; off += 1;
            opts[off] = (right >> 24) as u8; off += 1;
            opts[off] = (right >> 16) as u8; off += 1;
            opts[off] = (right >>  8) as u8; off += 1;
            opts[off] =  right        as u8; off += 1;
        }
        total
    }

    fn update_zwp(&mut self, now: u32) {
        let have_data = !self.retx.is_empty() || self.to_client_off < self.to_client.len();
        if self.snd_wnd == 0 && have_data {
            if self.zwp_deadline_ms == 0 {
                self.zwp_interval_ms = self.rto_ms.max(200);
                self.zwp_deadline_ms = now + self.zwp_interval_ms;
            }
        } else {
            self.zwp_deadline_ms = 0;
            self.zwp_interval_ms = 200;
        }
    }

    fn schedule_tlp(&mut self, now: u32) {
        if self.in_recovery || self.retx.is_empty() {
            self.tlp_deadline_ms = 0;
            return;
        }
        let mut pto = if self.rtt_init { self.srtt / 4 } else { 200 };
        pto = pto.max(10).min(self.rto_ms);
        self.tlp_deadline_ms = now + pto;
    }

    fn fire_tlp(&mut self, now: u32) {
        self.tlp_deadline_ms = 0;
        if self.retx.is_empty() || self.in_recovery { return; }
        let mut target_idx: Option<usize> = None;
        for (i, s) in self.retx.iter().enumerate().rev() {
            if !s.sacked { target_idx = Some(i); break; }
        }
        let idx = match target_idx { Some(i) => i, None => return };
        let (flags, seq, data, options);
        {
            let t = &mut self.retx[idx];
            t.retransmitted = true;
            t.sent_ms       = now;
            flags   = t.flags;
            seq     = t.seq;
            data    = t.data.clone();
            options = t.options.clone();
        }
        nat_log!(target: TAG, "tlp-probe {}:{}→{}:{} seq={}",
            self.key.src, self.key.src_port, self.key.dst, self.key.dst_port, seq);
        self.emit_segment(flags, seq, &data, false, &options);
    }

    fn update_prr_after_ack(&mut self, prev_sacked: u32, acked: u32) {
        if !self.in_recovery { return; }
        let delta_sacked = (self.sacked_bytes as i64) - (prev_sacked as i64);
        let delivered_signed = (acked as i64) + delta_sacked;
        let delivered = if delivered_signed > 0 { delivered_signed as u32 } else { 0 };
        self.prr_delivered = self.prr_delivered.wrapping_add(delivered);

        let in_flight = self.snd_nxt.wrapping_sub(self.snd_una);
        let pipe = if in_flight > self.sacked_bytes { in_flight - self.sacked_bytes } else { 0 };
        let sndcnt;
        if pipe > self.ssthresh {
            let rfs = self.recover_fs.max(1) as u64;
            let num = (self.prr_delivered as u64) * (self.ssthresh as u64);
            let intended = ((num + rfs - 1) / rfs) as u32;
            sndcnt = if intended > self.prr_out { intended - self.prr_out } else { 0 };
        } else {
            let diff = (self.prr_delivered as i64) - (self.prr_out as i64);
            let limit_signed = diff.max(delivered as i64);
            let ss_limit = limit_signed.max(0) as u32 + (self.peer_mss as u32);
            let headroom = if self.ssthresh > pipe { self.ssthresh - pipe } else { 0 };
            sndcnt = headroom.min(ss_limit);
        }
        self.cwnd = pipe + sndcnt;
    }

    fn enter_fast_recovery(&mut self, _now: u32, trigger: &str) {
        let in_flight = self.snd_nxt.wrapping_sub(self.snd_una);
        let pipe = if in_flight > self.sacked_bytes { in_flight - self.sacked_bytes } else { 0 };
        self.ssthresh        = ((self.cwnd as u64 * 17 / 20) as u32).max(2 * self.peer_mss as u32);
        self.recover_fs      = in_flight.max(1);
        self.prr_delivered   = 0;
        self.prr_out         = 0;
        self.cwnd            = pipe;
        self.in_recovery     = true;
        self.recovery_point  = self.snd_nxt;
        nat_log!(target: TAG, "enter-recovery {}:{}→{}:{} trigger={} flight={} pipe={} cwnd→{} ssthresh→{} (PRR β=0.85)",
            self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
            trigger, in_flight, pipe, self.cwnd, self.ssthresh);
    }

    fn rack_update_from_delivered(&mut self, sent_ms: u32, end_seq: u32, now: u32) {
        if !self.rack_inited {
            self.rack_inited  = true;
            self.rack_xmit_ts = sent_ms;
            self.rack_end_seq = end_seq;
            self.rack_rtt     = now.wrapping_sub(sent_ms);
            return;
        }
        let newer_ts  = (sent_ms.wrapping_sub(self.rack_xmit_ts) as i32) > 0;
        let same_ts   = sent_ms == self.rack_xmit_ts;
        let later_seq = seq_lt(self.rack_end_seq, end_seq);
        if newer_ts || (same_ts && later_seq) {
            self.rack_xmit_ts = sent_ms;
            self.rack_end_seq = end_seq;
            self.rack_rtt     = now.wrapping_sub(sent_ms);
        }
    }

    fn rack_compute_reo_wnd(&self) -> u32 {
        if !self.rtt_init { return 50; }
        let srtt_ms = (self.srtt / 8).max(1);
        if self.rack_dsack_seen { (srtt_ms / 2).max(1) } else { (srtt_ms / 4).max(1) }
    }

    fn rack_detect_loss_and_arm_timer(&mut self, now: u32) {
        if !self.rack_inited || self.retx.is_empty() {
            self.rack_deadline_ms = 0;
            return;
        }
        self.rack_reo_wnd = self.rack_compute_reo_wnd();
        let mut next_deadline: u32 = 0;
        let mut emitted = false;
        let rack_xmit_ts = self.rack_xmit_ts;
        let rack_end_seq = self.rack_end_seq;
        let rack_rtt     = self.rack_rtt;
        let reo_wnd      = self.rack_reo_wnd;
        // Collect indices and re-walk to emit safely.
        let mut to_emit: Vec<usize> = Vec::new();
        for (i, s) in self.retx.iter().enumerate() {
            if s.sacked { continue; }
            if (s.sent_ms.wrapping_sub(rack_xmit_ts) as i32) > 0 { continue; }
            let end_seq = s.seq.wrapping_add(s.data.len() as u32)
                + (if (s.flags & TCP_SYN) != 0 { 1 } else { 0 })
                + (if (s.flags & TCP_FIN) != 0 { 1 } else { 0 });
            if !seq_lt(end_seq, rack_end_seq) { continue; }
            let expiry = s.sent_ms + rack_rtt + reo_wnd;
            if (now.wrapping_sub(expiry) as i32) >= 0 {
                to_emit.push(i);
            } else if next_deadline == 0 || (expiry.wrapping_sub(next_deadline) as i32) < 0 {
                next_deadline = expiry;
            }
        }
        for idx in to_emit {
            if !self.in_recovery { self.enter_fast_recovery(now, "rack"); }
            let (flags, seq, data, options);
            {
                let s = &mut self.retx[idx];
                s.retransmitted = true;
                s.sent_ms       = now;
                flags   = s.flags;
                seq     = s.seq;
                data    = s.data.clone();
                options = s.options.clone();
            }
            nat_log!(target: TAG, "rack-retx {}:{}→{}:{} seq={} reo_wnd={}",
                self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                seq, reo_wnd);
            if !self.emit_segment(flags, seq, &data, false, &options) {
                break;
            }
            emitted = true;
        }
        self.rack_deadline_ms = next_deadline;
        if emitted {
            self.last_head_retx_ms = now;
            self.schedule_rto(now);
        }
    }

    fn rto_fire(&mut self, now: u32) {
        if self.retx.is_empty() { return; }
        self.cwnd_pre_rto     = self.cwnd;
        self.ssthresh_pre_rto = self.ssthresh;
        self.tsval_at_rto     = self.current_tsval();
        let in_flight = self.snd_nxt.wrapping_sub(self.snd_una);
        self.ssthresh = ((self.cwnd as u64 * 17 / 20) as u32).max(2 * self.peer_mss as u32);
        self.cwnd     = self.peer_mss as u32;
        self.in_recovery     = false;
        self.recovery_point  = 0;
        self.dup_ack_count   = 0;
        self.tlp_deadline_ms = 0;

        let (flags, seq, data, options);
        {
            let head = self.retx.front_mut().unwrap();
            head.retransmitted = true;
            head.sent_ms       = now;
            flags   = head.flags;
            seq     = head.seq;
            data    = head.data.clone();
            options = head.options.clone();
        }
        self.last_head_retx_ms = now;
        nat_log!(target: TAG, "rto-retx #{} {}:{}→{}:{} seq={} flight={} rto={}ms srtt={}ms",
            self.rto_retries + 1,
            self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
            seq, in_flight, self.rto_ms, self.srtt / 8);
        self.emit_segment(flags, seq, &data, false, &options);
        self.rto_retries += 1;
        if self.rto_retries >= 9 {
            nat_log!(target: TAG, "rto-give-up {}:{}→{}:{} after 9 retries — RST",
                self.key.src, self.key.src_port, self.key.dst, self.key.dst_port);
            self.emit_rst(self.snd_nxt, self.rcv_nxt);
            self.mark_closed();
            return;
        }
        self.rto_ms = (self.rto_ms.saturating_mul(2)).min(60_000);
        self.schedule_rto(now);
    }

    pub fn tick(&mut self, now: u32) -> bool {
        if matches!(self.state, TcpState::Closed) { return false; }
        if self.rto_deadline_ms != 0 && time_after(now, self.rto_deadline_ms) { self.rto_fire(now); }
        if matches!(self.state, TcpState::Closed) { return false; }
        if self.rack_deadline_ms != 0 && time_after(now, self.rack_deadline_ms) {
            self.rack_detect_loss_and_arm_timer(now);
        }
        if matches!(self.state, TcpState::Closed) { return false; }
        if self.tlp_deadline_ms != 0 && time_after(now, self.tlp_deadline_ms) {
            self.fire_tlp(now);
        }
        if self.zwp_deadline_ms != 0 && time_after(now, self.zwp_deadline_ms) {
            nat_log!(target: TAG, "zwp-probe {}:{}→{}:{} snd_wnd=0 interval={}ms",
                self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                self.zwp_interval_ms);
            self.emit_ack();
            self.zwp_interval_ms = self.zwp_interval_ms.saturating_mul(2).min(60_000);
            self.zwp_deadline_ms = now.wrapping_add(self.zwp_interval_ms);
        }
        if matches!(self.state, TcpState::TimeWait) && time_after(now, self.time_wait_deadline_ms) {
            self.mark_closed();
            return false;
        }
        true
    }

    fn enter_time_wait(&mut self, now: u32) {
        self.state                  = TcpState::TimeWait;
        self.time_wait_deadline_ms  = now.wrapping_add(30_000);
        // Clear retransmit / loss / probe timers — they should not
        // fire on a connection that has entered TIME_WAIT. Most of
        // these would early-return on an empty retx queue today, but
        // clearing avoids spurious tick work and any future
        // regression where a fire path forgets to check state.
        self.rto_deadline_ms  = 0;
        self.rack_deadline_ms = 0;
        self.tlp_deadline_ms  = 0;
        self.zwp_deadline_ms  = 0;
        self.close_host_socket();
    }

    fn mark_closed(&mut self) {
        self.state = TcpState::Closed;
        self.close_host_socket();
    }

    // ─── Outbound segment emission ─────────────────────────────────
    fn emit_segment(&mut self, flags: u8, seq: u32,
                    payload: &[u8], record_for_retx: bool,
                    options: &[u8]) -> bool {
        let mut combined = [0u8; 60];
        let mut combined_len = 0usize;
        if !options.is_empty() {
            combined[..options.len()].copy_from_slice(options);
            combined_len = options.len();
        }
        if self.peer_ts_ok && (flags & TCP_SYN) == 0 {
            let tsval = self.current_tsval();
            combined[combined_len] = 1; combined_len += 1;
            combined[combined_len] = 1; combined_len += 1;
            combined[combined_len] = 8;  combined_len += 1;
            combined[combined_len] = 10; combined_len += 1;
            combined[combined_len] = (tsval >> 24) as u8; combined_len += 1;
            combined[combined_len] = (tsval >> 16) as u8; combined_len += 1;
            combined[combined_len] = (tsval >>  8) as u8; combined_len += 1;
            combined[combined_len] =  tsval        as u8; combined_len += 1;
            combined[combined_len] = (self.ts_recent >> 24) as u8; combined_len += 1;
            combined[combined_len] = (self.ts_recent >> 16) as u8; combined_len += 1;
            combined[combined_len] = (self.ts_recent >>  8) as u8; combined_len += 1;
            combined[combined_len] =  self.ts_recent        as u8; combined_len += 1;
        }

        // Effective receive window: rcv_wnd - already-buffered to_host
        // bytes - OOO bytes. SWS-avoidance per RFC 1122.
        let pending = (self.to_host.len() - self.to_host_off) + self.ooo_bytes;
        let avail = if (pending as u32) >= self.rcv_wnd { 0 } else { self.rcv_wnd - (pending as u32) };
        let is_syn = (flags & TCP_SYN) != 0;
        let scaled = if is_syn { avail } else { avail >> self.own_wscale };
        // Apply the dispatcher's global rwnd-scale. Throttles every
        // session uniformly when our outbound LK queue is congested,
        // so peers receive smaller windows and reduce their sending
        // rate to us. Scale is in 0..GLOBAL_RWND_SCALE_FULL (=1000).
        // SYN-ACK is exempt — the wire window during the 3-way
        // handshake should reflect the session's real capacity, not
        // the transient global state.
        let scale = self.global_rwnd_scale
            .load(std::sync::atomic::Ordering::Relaxed) as u32;
        let throttled = if is_syn || scale >= super::dispatcher::GLOBAL_RWND_SCALE_FULL as u32 {
            scaled
        } else {
            ((scaled as u64 * scale as u64)
                / super::dispatcher::GLOBAL_RWND_SCALE_FULL as u64) as u32
        };
        let w_wire = throttled.min(0xFFFF);
        if w_wire == 0 || w_wire < self.adv_wnd || w_wire >= self.adv_wnd + self.peer_mss as u32 {
            self.adv_wnd = w_wire;
        }

        nat_log!(target: TAG, "seg-out {}:{}→{}:{} seq={} ack={} flags={} len={} wnd={}",
            self.key.dst, self.key.dst_port,
            self.key.src, self.key.src_port,
            seq, self.rcv_nxt, fmt_flags(flags), payload.len(), self.adv_wnd);

        let b = TcpBuild {
            src:      self.key.dst, dst: self.key.src,
            src_port: self.key.dst_port, dst_port: self.key.src_port,
            seq, ack: self.rcv_nxt, flags,
            window:   self.adv_wnd as u16,
            options:  &combined[..combined_len],
            payload,
        };
        let mut out = [0u8; 1564];
        let n = build_tcp(&mut out, &b);
        if n == 0 {
            nat_log!(target: TAG, "build_tcp dropped (len={})", payload.len());
            return false;
        }
        if !(self.emit)(&out[..n]) { return false; }

        if self.in_recovery && !payload.is_empty() {
            self.prr_out = self.prr_out.wrapping_add(payload.len() as u32);
        }
        if record_for_retx {
            let s = OutSeg {
                seq, flags,
                sent_ms: now_ms(),
                retransmitted: false,
                sacked: false,
                data: payload.to_vec(),
                options: options.to_vec(),
            };
            self.retx.push_back(s);
            let now = now_ms();
            if self.rto_deadline_ms == 0 { self.schedule_rto(now); }
            if !self.in_recovery && (flags & TCP_SYN) == 0 {
                self.schedule_tlp(now);
            }
        }
        true
    }

    fn emit_ack(&mut self) {
        let mut sack_opts = [0u8; 2 + 2 + 8 * 4];
        let sack_len = self.build_sack_option(&mut sack_opts);
        let snd_nxt = self.snd_nxt;
        let opts: Vec<u8> = sack_opts[..sack_len].to_vec();
        self.emit_segment(TCP_ACK, snd_nxt, &[], false, &opts);
    }

    fn emit_rst(&mut self, seq: u32, ack: u32) {
        let b = TcpBuild {
            src: self.key.dst, dst: self.key.src,
            src_port: self.key.dst_port, dst_port: self.key.src_port,
            seq, ack, flags: TCP_RST | TCP_ACK,
            window: 0, options: &[], payload: &[],
        };
        let mut out = [0u8; 64];
        let n = build_tcp(&mut out, &b);
        if n > 0 { (self.emit)(&out[..n]); }
    }

    // ─── Host socket ───────────────────────────────────────────────
    fn open_host_socket(&mut self, self_ptr: *mut TcpSession) -> bool {
        if !self.key.dst.is_v4() {
            nat_log!(target: TAG, "v6 dest not yet supported");
            return false;
        }
        // `v4_be()` already returns the IP as a host-order u32 where the
        // high byte is the first octet (i.e. matches `Ipv4Addr::from(u32)`'s
        // contract). Wrapping it in `u32::from_be(...)` byte-swaps on
        // little-endian and connects to a mirror-image IP — long-standing
        // regression vs. the C++ NAT. Palindromic IPs (8.8.8.8, 1.1.1.1)
        // happened to still work, masking the bug.
        let dst_ip = std::net::Ipv4Addr::from(self.key.dst.v4_be());
        if crate::nat::filter::is_blocked_dst(dst_ip.into()) {
            nat_log!(target: TAG, "blocked dst {}:{} (cloud metadata / loopback / link-local / multicast)",
                     dst_ip, self.key.dst_port);
            return false;
        }
        let dst: std::net::SocketAddr = (dst_ip, self.key.dst_port).into();
        let mut socket = match mio::net::TcpStream::connect(dst) {
            Ok(s) => s,
            Err(e) => {
                nat_log!(target: TAG, "connect({}:{}) failed: {e}",
                    self.key.dst, self.key.dst_port);
                return false;
            }
        };

        // TCP_NODELAY: we forward small bursts per segment, don't want
        // Nagle adding latency. SNDBUF/RCVBUF are left to kernel
        // autotune — explicit setsockopt disables autotune and an
        // RCVBUF smaller than the default actually shrinks the
        // advertised window cap.
        let _ = socket.set_nodelay(true);

        // mio::net::TcpStream::connect always returns immediately —
        // the connection is in-progress until POLLOUT fires.
        self.host_writable = false;
        nat_log!(target: TAG, "host-open → {}:{} (connect pending)",
            self.key.dst, self.key.dst_port);
        #[cfg(unix)]
        {
            use std::os::fd::AsRawFd;
            super::log_local_sockname(TAG, socket.as_raw_fd(), &self.key.dst,
                self.key.dst_port, "tcp");
        }
        let token = dispatcher::register_source(
            &mut socket,
            Interest::READABLE | Interest::WRITABLE,
            Box::new(TcpHandler { session_addr: self_ptr as usize }),
        );
        self.host = Some(socket);
        self.host_token = Some(token);
        true
    }

    fn close_host_socket(&mut self) {
        if let (Some(mut s), Some(t)) = (self.host.take(), self.host_token.take()) {
            dispatcher::deregister_source(&mut s, t);
            // Drop closes the underlying fd / SOCKET.
        }
    }

    /// Update the reactor interest for the host socket based on
    /// current `host_writable` and `host_pollin_paused`. Mirrors the
    /// old `update_poll_events`. mio doesn't allow zero-interest
    /// registration; when both reads and writes are suppressed we
    /// stay registered for READABLE so peer-close still reaches us
    /// (the actual recv inside `on_host_readable` is gated by
    /// `host_pollin_paused`).
    fn refresh_host_interest(&mut self) {
        let (Some(socket), Some(token)) = (self.host.as_mut(), self.host_token) else { return; };
        let want_read  = !self.host_pollin_paused;
        let want_write = !self.host_writable;
        let interest = match (want_read, want_write) {
            (true,  true)  => Interest::READABLE | Interest::WRITABLE,
            (true,  false) => Interest::READABLE,
            (false, true)  => Interest::WRITABLE,
            (false, false) => Interest::READABLE,
        };
        dispatcher::reregister_source(socket, token, interest);
    }

    fn on_host_event(&mut self, ev: &mio::event::Event) {
        if ev.is_error() {
            let err = self.host.as_ref()
                .and_then(|s| s.take_error().ok().flatten());
            if let Some(e) = err {
                nat_log!(target: TAG,
                    "host-pollerr {}:{} state={:?} so_err={} → RST",
                    self.key.dst, self.key.dst_port, self.state, e);
                // Tear down regardless of NAT-side state. We used to
                // only RST when state == Established, which meant a
                // connect-time failure (ECONNREFUSED/ETIMEDOUT/etc.)
                // before SynRcvd left a half-open session forever.
                self.emit_rst(self.snd_nxt, self.rcv_nxt);
                self.mark_closed();
                return;
            }
        }
        let closed = ev.is_read_closed() || ev.is_write_closed();
        if ev.is_writable() { self.on_host_writable(); }
        if ev.is_readable() { self.on_host_readable(); }
        if closed {
            self.host_read_eof = true;
            if !self.sent_fin && self.to_client_off >= self.to_client.len() &&
               matches!(self.state, TcpState::Established | TcpState::CloseWait) {
                self.sent_fin = true;
                let snd_nxt = self.snd_nxt;
                self.emit_segment(TCP_FIN | TCP_ACK, snd_nxt, &[], true, &[]);
                self.snd_nxt = self.snd_nxt.wrapping_add(1);
                self.state = if matches!(self.state, TcpState::CloseWait) {
                    TcpState::LastAck
                } else {
                    TcpState::FinWait1
                };
            }
        }
    }

    fn on_host_writable(&mut self) {
        // First writable transition is the connect-completion signal.
        // kqueue (and epoll) deliver POLLOUT on BOTH connect-succeeded
        // and connect-failed; we have to ask `SO_ERROR` to tell them
        // apart. If we skip this check, a failed connect (refused,
        // host unreachable, RST during handshake) silently flips
        // `host_writable = true`, the next `write()` returns
        // `ENOTCONN`, and we kill the session with a spurious RST —
        // even though the client side just got an `established`
        // state machine transition and is waiting for data to flow.
        if !self.host_writable {
            if let Some(socket) = self.host.as_ref() {
                use std::os::fd::AsRawFd;
                let fd = socket.as_raw_fd();
                let mut err: libc::c_int = 0;
                let mut len: libc::socklen_t =
                    std::mem::size_of::<libc::c_int>() as libc::socklen_t;
                let rc = unsafe {
                    libc::getsockopt(
                        fd, libc::SOL_SOCKET, libc::SO_ERROR,
                        &mut err as *mut libc::c_int as *mut libc::c_void,
                        &mut len,
                    )
                };
                if rc != 0 || err != 0 {
                    nat_log!(target: TAG, "host-connect failed {}:{} so_err={} → RST",
                        self.key.dst, self.key.dst_port, err);
                    self.emit_rst(self.snd_nxt, self.rcv_nxt);
                    self.mark_closed();
                    return;
                }
            }
            nat_log!(target: TAG, "host-connect ok {}:{} pending_to_host={}B",
                self.key.dst, self.key.dst_port,
                self.to_host.len().saturating_sub(self.to_host_off));
        }
        self.host_writable = true;
        self.try_drain_to_host();
        if self.to_host_off >= self.to_host.len() {
            self.refresh_host_interest();
            if self.host.is_some() && !self.host_wr_shut &&
               matches!(self.state, TcpState::CloseWait | TcpState::LastAck) {
                if let Some(s) = self.host.as_ref() {
                    let _ = s.shutdown(Shutdown::Write);
                }
                self.host_wr_shut = true;
            }
        }
    }

    fn on_host_readable(&mut self) {
        if self.host.is_none() { return; }
        // Suppress reads while paused — kernel buffer fills, advertised
        // window shrinks, which is exactly the desired backpressure
        // toward the destination.
        if self.host_pollin_paused { return; }
        let mut buf = [0u8; 16 * 1024];
        let mut should_pause = false;
        loop {
            let res = self.host.as_mut().unwrap().read(&mut buf);
            match res {
                Ok(0) => {
                    self.host_read_eof = true;
                    if self.to_client_off >= self.to_client.len() && !self.sent_fin {
                        self.sent_fin = true;
                        let snd_nxt = self.snd_nxt;
                        self.emit_segment(TCP_FIN | TCP_ACK, snd_nxt, &[], true, &[]);
                        self.snd_nxt = self.snd_nxt.wrapping_add(1);
                        self.state = if matches!(self.state, TcpState::CloseWait) {
                            TcpState::LastAck
                        } else {
                            TcpState::FinWait1
                        };
                    }
                    break;
                }
                Ok(n) => {
                    nat_log!(target: TAG, "host-recv {}:{} ← {}:{} len={}",
                        self.key.src, self.key.src_port,
                        self.key.dst, self.key.dst_port, n);
                    if self.to_client_off > 0
                        && self.to_client_off >= self.to_client.len() / 2 {
                        self.to_client.drain(..self.to_client_off);
                        self.to_client_off = 0;
                    }
                    self.to_client.extend_from_slice(&buf[..n]);
                    if (self.to_client.len() - self.to_client_off) >= TO_CLIENT_HIGH_WATER {
                        self.host_pollin_paused = true;
                        should_pause = true;
                        nat_log!(target: TAG, "host-pollin-pause {}:{}→{}:{} pending={}",
                            self.key.src, self.key.src_port,
                            self.key.dst, self.key.dst_port,
                            self.to_client.len() - self.to_client_off);
                        break;
                    }
                }
                Err(e) if e.kind() == ErrorKind::WouldBlock => break,
                Err(e) if e.kind() == ErrorKind::Interrupted => continue,
                Err(e) => {
                    nat_log!(target: TAG, "host-recv {}:{} err: {e} → RST",
                        self.key.dst, self.key.dst_port);
                    self.emit_rst(self.snd_nxt, self.rcv_nxt);
                    self.mark_closed();
                    return;
                }
            }
        }
        if should_pause { self.refresh_host_interest(); }
        self.try_segment_and_emit();
        self.update_zwp(now_ms());
    }

    // ─── Data plane ────────────────────────────────────────────────
    fn handle_data_in(&mut self, mut seq: u32, mut data: &[u8]) -> bool {
        if data.is_empty() { return false; }
        if !seq_lt(self.rcv_nxt, seq.wrapping_add(data.len() as u32)) {
            return false;
        }
        if seq_lt(seq, self.rcv_nxt) {
            let skip = self.rcv_nxt.wrapping_sub(seq) as usize;
            if skip >= data.len() { return false; }
            seq = seq.wrapping_add(skip as u32);
            data = &data[skip..];
        }
        if seq == self.rcv_nxt {
            self.enqueue_to_host(data);
            self.rcv_nxt = self.rcv_nxt.wrapping_add(data.len() as u32);
            self.deliver_ooo();
            return true;
        }
        self.store_ooo(seq, data);
        false
    }

    fn store_ooo(&mut self, seq: u32, data: &[u8]) {
        if data.is_empty() { return; }
        if self.ooo_bytes + data.len() > MAX_OOO_BYTES { return; }
        // Insertion point.
        let mut pos = self.ooo.len();
        for (i, o) in self.ooo.iter().enumerate() {
            if !seq_lt(o.seq, seq) { pos = i; break; }
        }
        if pos > 0 {
            let prev = &self.ooo[pos - 1];
            let prev_end = prev.seq.wrapping_add(prev.data.len() as u32);
            if seq_lt(seq, prev_end) { return; }
        }
        if pos < self.ooo.len() {
            let next = &self.ooo[pos];
            if seq_lt(next.seq, seq.wrapping_add(data.len() as u32)) { return; }
        }
        self.ooo.insert(pos, OooSeg { seq, data: data.to_vec() });
        self.ooo_bytes += data.len();
    }

    fn deliver_ooo(&mut self) {
        while let Some(head) = self.ooo.front() {
            let end = head.seq.wrapping_add(head.data.len() as u32);
            if !seq_lt(self.rcv_nxt, end) {
                self.ooo_bytes -= head.data.len();
                self.ooo.pop_front();
                continue;
            }
            if seq_lt(self.rcv_nxt, head.seq) { break; }
            let skip = self.rcv_nxt.wrapping_sub(head.seq) as usize;
            let data: Vec<u8> = head.data[skip..].to_vec();
            let head_len = head.data.len();
            self.ooo_bytes -= head_len;
            self.ooo.pop_front();
            self.enqueue_to_host(&data);
            self.rcv_nxt = end;
        }
    }

    fn enqueue_to_host(&mut self, data: &[u8]) {
        if self.to_host_off > 0 && self.to_host_off >= self.to_host.len() / 2 {
            self.to_host.drain(..self.to_host_off);
            self.to_host_off = 0;
        }
        self.to_host.extend_from_slice(data);
        if self.host_writable {
            self.try_drain_to_host();
        } else if self.host.is_some() {
            self.refresh_host_interest();
        }
    }

    fn try_drain_to_host(&mut self) {
        if self.host.is_none() { return; }
        // Never write before the host socket's connect has completed —
        // `on_host_writable` is the only place that flips this true,
        // and it now checks `SO_ERROR` first. Skipping this guard
        // would let a stray drain call (e.g. the FIN-handling path)
        // hit `ENOTCONN` and tear the session down on a healthy
        // pending-connect socket.
        if !self.host_writable { return; }
        while self.to_host_off < self.to_host.len() {
            let avail_len = self.to_host.len() - self.to_host_off;
            let res = {
                let slice = &self.to_host[self.to_host_off..];
                self.host.as_mut().unwrap().write(slice)
            };
            match res {
                Ok(0) => break,
                Ok(n) => {
                    nat_log!(target: TAG, "host-send {}:{} → {}:{} len={}/{}",
                        self.key.src, self.key.src_port,
                        self.key.dst, self.key.dst_port, n, avail_len);
                    self.to_host_off += n;
                }
                Err(e) if e.kind() == ErrorKind::WouldBlock => {
                    self.host_writable = false;
                    self.refresh_host_interest();
                    nat_log!(target: TAG,
                        "host-send WouldBlock {}:{} backlog={}",
                        self.key.dst, self.key.dst_port,
                        self.to_host.len() - self.to_host_off);
                    return;
                }
                Err(e) if e.kind() == ErrorKind::Interrupted => continue,
                Err(e) => {
                    nat_log!(target: TAG, "host-send {}:{} err: {e} → RST",
                        self.key.dst, self.key.dst_port);
                    self.emit_rst(self.snd_nxt, self.rcv_nxt);
                    self.mark_closed();
                    return;
                }
            }
        }
        self.to_host.clear();
        self.to_host_off = 0;
    }

    fn try_segment_and_emit(&mut self) {
        let mut window_limited = false;
        let mut cwnd_was_tighter = false;
        while self.to_client_off < self.to_client.len() {
            let flight = self.snd_nxt.wrapping_sub(self.snd_una);
            let pipe = if flight > self.sacked_bytes { flight - self.sacked_bytes } else { 0 };
            let eff_wnd = self.snd_wnd.min(self.cwnd);
            if pipe >= eff_wnd {
                window_limited = true;
                cwnd_was_tighter = self.cwnd < self.snd_wnd;
                break;
            }
            let avail   = (eff_wnd - pipe) as usize;
            let pending = self.to_client.len() - self.to_client_off;
            let chunk   = (self.peer_mss as usize).min(pending).min(avail);
            if chunk == 0 { break; }
            let src: Vec<u8> = self.to_client[self.to_client_off..self.to_client_off + chunk].to_vec();
            let snd_nxt = self.snd_nxt;
            if !self.emit_segment(TCP_ACK | TCP_PSH, snd_nxt, &src, true, &[]) {
                break;
            }
            self.snd_nxt        = self.snd_nxt.wrapping_add(chunk as u32);
            self.to_client_off += chunk;
        }
        if self.host_pollin_paused && self.host.is_some() &&
           (self.to_client.len() - self.to_client_off) < TO_CLIENT_LOW_WATER {
            self.host_pollin_paused = false;
            self.refresh_host_interest();
            nat_log!(target: TAG, "host-pollin-resume {}:{}→{}:{} pending={}",
                self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                self.to_client.len() - self.to_client_off);
        }
        if self.to_client_off >= self.to_client.len() {
            self.to_client.clear();
            self.to_client_off = 0;
            if self.host_read_eof && !self.sent_fin &&
               matches!(self.state, TcpState::Established | TcpState::CloseWait) {
                self.sent_fin = true;
                let snd_nxt = self.snd_nxt;
                self.emit_segment(TCP_FIN | TCP_ACK, snd_nxt, &[], true, &[]);
                self.snd_nxt = self.snd_nxt.wrapping_add(1);
                self.state = if matches!(self.state, TcpState::CloseWait) {
                    TcpState::LastAck
                } else {
                    TcpState::FinWait1
                };
            }
        } else if window_limited && debug::debug_enabled() {
            let now = now_ms();
            if now.wrapping_sub(self.last_stall_log_ms) > 250 {
                self.last_stall_log_ms = now;
                let pending = self.to_client.len() - self.to_client_off;
                let flight  = self.snd_nxt.wrapping_sub(self.snd_una);
                let pipe = if flight > self.sacked_bytes { flight - self.sacked_bytes } else { 0 };
                nat_log!(target: TAG, "{}-limited {}:{}→{}:{} pending={} pipe={} (flight={} sacked={}) snd_wnd={} cwnd={}",
                    if cwnd_was_tighter { "cwnd" } else { "rwnd" },
                    self.key.src, self.key.src_port, self.key.dst, self.key.dst_port,
                    pending, pipe, flight, self.sacked_bytes, self.snd_wnd, self.cwnd);
            }
        }
    }
}

impl Drop for TcpSession {
    fn drop(&mut self) { self.close_host_socket(); }
}

/// Per-token reactor thunk. NatDispatcher pins the owning
/// `Box<TcpSession>` (stable address) until Drop runs (which
/// deregisters us, so we can't fire afterward).
struct TcpHandler { session_addr: usize }

impl EventHandler for TcpHandler {
    fn on_event(&mut self, ev: &mio::event::Event) {
        // SAFETY: dispatcher-thread only, session pinned by NatDispatcher.
        unsafe {
            let s: &mut TcpSession = &mut *(self.session_addr as *mut TcpSession);
            s.on_host_event(ev);
        }
    }
}
