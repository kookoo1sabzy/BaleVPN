//! Native SOCKS5 server — mio-based, cross-platform.
//!
//! LAN-facing TCP listener, one event-driven Conn per accepted client,
//! all driven by `crate::dispatcher`'s mio-backed reactor. DNS happens
//! on a dedicated worker thread (std::thread + mpsc channel) so the
//! dispatcher never blocks on `getaddrinfo`. Same state machine shape
//! as the libc-poll version: GREET → REQUEST → DNS / CONNECTING → RELAY.
//!
//! Sockets are `mio::net::{TcpListener, TcpStream}` — no raw `int fd`
//! field types, so the module builds on Linux/Android/macOS today and
//! Windows once mio's IOCP socket path is exercised end-to-end.

use crate::dispatcher::{self, EventHandler};
use mio::{Interest, Token};
use once_cell::sync::Lazy;
use parking_lot::Mutex;
use std::collections::HashMap;
use std::io::{ErrorKind, Read, Write};
use std::net::{Ipv4Addr, Shutdown, SocketAddr, ToSocketAddrs};
use std::sync::atomic::{AtomicBool, AtomicI32, AtomicI64, Ordering};
use std::sync::mpsc;
use std::thread;

const TAG: &str = "socks5";

// Buffer sizes — mirror the C++ constants.
const RELAY_BUF:        usize = 16 * 1024;
const HANDSHAKE_TMO_MS: i64   = 60_000;
const CONN_TMO_MS:      i64   = 15_000;
const HS_BUF_CAP:       usize = 512;

#[derive(Clone, Copy, PartialEq, Eq)]
enum Phase { Greet, Request, Dns, Connecting, Relay }

struct Conn {
    client:       mio::net::TcpStream,
    client_token: Token,
    dest:         Option<mio::net::TcpStream>,
    dest_token:   Option<Token>,
    phase:        Phase,
    #[allow(dead_code)] deadline_ms: i64,
    bytes_up:     i64,
    bytes_down:   i64,

    hs:     Vec<u8>,
    hs_len: usize,

    pending_host: String,
    pending_port: u16,

    c_to_d: Vec<u8>, c_to_d_off: usize, c_to_d_end: usize,
    d_to_c: Vec<u8>, d_to_c_off: usize, d_to_c_end: usize,

    client_read_eof:   bool,
    dest_read_eof:     bool,
    client_write_shut: bool,
    dest_write_shut:   bool,
    closed:            bool,

    from: String,
}

impl Conn {
    fn new(client: mio::net::TcpStream, client_token: Token, from: String) -> Self {
        Self {
            client, client_token,
            dest: None, dest_token: None,
            phase: Phase::Greet,
            deadline_ms: now_ms() + HANDSHAKE_TMO_MS,
            bytes_up: 0, bytes_down: 0,
            hs: Vec::new(), hs_len: 0,
            pending_host: String::new(), pending_port: 0,
            c_to_d: Vec::new(), c_to_d_off: 0, c_to_d_end: 0,
            d_to_c: Vec::new(), d_to_c_off: 0, d_to_c_end: 0,
            client_read_eof: false, dest_read_eof: false,
            client_write_shut: false, dest_write_shut: false,
            closed: false,
            from,
        }
    }
}

struct State {
    listener:       Option<mio::net::TcpListener>,
    listener_token: Option<Token>,
    /// Keyed by `client_token.0` for O(1) lookup from the client-side
    /// event handler.
    conns:          HashMap<usize, Box<Conn>>,
    /// `dest_token.0` → `client_token.0` so the dest-side event handler
    /// can find its owning Conn.
    conn_by_dest:   HashMap<usize, usize>,
}

static STATE: Lazy<Mutex<State>> = Lazy::new(|| Mutex::new(State {
    listener:       None,
    listener_token: None,
    conns:          HashMap::new(),
    conn_by_dest:   HashMap::new(),
}));

static RUNNING:        AtomicBool = AtomicBool::new(false);
static DEBUG:          AtomicBool = AtomicBool::new(false);
static ACTIVE:         AtomicI32  = AtomicI32::new(0);
static TOTAL_ACCEPTED: AtomicI64  = AtomicI64::new(0);
static BOUND_PORT:     AtomicI32  = AtomicI32::new(0);

fn now_ms() -> i64 {
    use std::time::Instant;
    static START: Lazy<Instant> = Lazy::new(Instant::now);
    START.elapsed().as_millis() as i64
}

// ── DNS worker thread ──────────────────────────────────────────────

struct DnsJob {
    host: String,
    cb:   Box<dyn FnOnce(Option<u32>) + Send + 'static>,
}

static DNS_TX: Lazy<Mutex<Option<mpsc::Sender<DnsJob>>>> =
    Lazy::new(|| Mutex::new(None));

fn ensure_dns_thread() {
    let mut tx_slot = DNS_TX.lock();
    if tx_slot.is_some() { return; }
    let (tx, rx) = mpsc::channel::<DnsJob>();
    *tx_slot = Some(tx);
    thread::Builder::new().name("socks5-dns".into()).spawn(move || {
        while let Ok(job) = rx.recv() {
            let lookup = (job.host.as_str(), 0u16).to_socket_addrs().ok().and_then(|mut it| {
                it.find_map(|addr| match addr {
                    SocketAddr::V4(v4) => Some(u32::from(*v4.ip()).to_be()),
                    _ => None,
                })
            });
            (job.cb)(lookup);
        }
    }).expect("spawn socks5-dns thread");
}

fn enqueue_dns(host: String, cb: Box<dyn FnOnce(Option<u32>) + Send + 'static>) {
    ensure_dns_thread();
    let tx = DNS_TX.lock().clone();
    if let Some(tx) = tx {
        let _ = tx.send(DnsJob { host, cb });
    }
}

// ── Small helpers ──────────────────────────────────────────────────

/// Best-effort small reply write — used only for SOCKS5 control frames
/// (≤ 10 bytes), the kernel send buffer is always far larger so a
/// `WouldBlock` here would only happen during catastrophic backpressure.
fn write_reply(stream: &mut mio::net::TcpStream, rep: u8) {
    let b = [0x05u8, rep, 0x00, 0x01, 0, 0, 0, 0, 0, 0];
    let _ = stream.write(&b);
}

/// Drain `buf[off..end)` into `stream`. Returns true if fully drained,
/// false on WouldBlock partial (caller arms POLLOUT). Treats hard
/// errors as "drained-with-error" so the caller stops looping.
fn try_drain(stream: &mut mio::net::TcpStream, buf: &[u8], off: &mut usize, end: usize) -> bool {
    while *off < end {
        match stream.write(&buf[*off..end]) {
            Ok(0) => return true,
            Ok(n) => { *off += n; }
            Err(e) if e.kind() == ErrorKind::WouldBlock => return false,
            Err(e) if e.kind() == ErrorKind::Interrupted => continue,
            Err(_) => return true,
        }
    }
    true
}

fn half_shut(stream: &mut mio::net::TcpStream) {
    let _ = stream.shutdown(Shutdown::Write);
}

fn interest_for(read: bool, write: bool) -> Option<Interest> {
    match (read, write) {
        (true,  true)  => Some(Interest::READABLE | Interest::WRITABLE),
        (true,  false) => Some(Interest::READABLE),
        (false, true)  => Some(Interest::WRITABLE),
        // mio can't register zero interest; stay readable so we still
        // detect peer-close. Side: we ignore actual reads while paused.
        (false, false) => Some(Interest::READABLE),
    }
}

fn set_client_interest(c: &mut Conn, read: bool, write: bool) {
    if let Some(i) = interest_for(read, write) {
        dispatcher::reregister_source(&mut c.client, c.client_token, i);
    }
}
fn set_dest_interest(c: &mut Conn, read: bool, write: bool) {
    let (Some(dest), Some(token)) = (c.dest.as_mut(), c.dest_token) else { return; };
    if let Some(i) = interest_for(read, write) {
        dispatcher::reregister_source(dest, token, i);
    }
}

// ── Handshake parser ────────────────────────────────────────────────

fn on_handshake_readable(st: &mut State, c: &mut Conn) {
    if c.hs.is_empty() { c.hs = vec![0u8; HS_BUF_CAP]; }
    if c.hs_len >= HS_BUF_CAP {
        return close_conn(st, c.client_token.0, "handshake buffer overrun");
    }
    let res = c.client.read(&mut c.hs[c.hs_len..HS_BUF_CAP]);
    match res {
        Ok(0) => return close_conn(st, c.client_token.0, "client EOF during handshake"),
        Ok(n) => { c.hs_len += n; }
        Err(e) if e.kind() == ErrorKind::WouldBlock
              || e.kind() == ErrorKind::Interrupted => return,
        Err(_) => return close_conn(st, c.client_token.0, "client recv error"),
    }

    let mut pos = 0usize;

    if c.phase == Phase::Greet {
        if c.hs_len - pos < 2 { return; }
        let b = &c.hs[pos..];
        let ver = b[0];
        let nm  = b[1] as usize;
        if ver != 0x05 { return close_conn(st, c.client_token.0, "not SOCKS5"); }
        if c.hs_len - pos < 2 + nm { return; }
        pos += 2 + nm;
        let _ = c.client.write(&[0x05u8, 0x00]);
        c.phase = Phase::Request;
    }

    if c.phase == Phase::Request {
        let avail = c.hs_len - pos;
        if avail < 4 {
            if pos > 0 {
                c.hs.copy_within(pos..c.hs_len, 0);
                c.hs_len -= pos;
            }
            return;
        }
        let b = &c.hs[pos..];
        let ver  = b[0];
        let cmd  = b[1];
        let atyp = b[3];
        if ver != 0x05 { return close_conn(st, c.client_token.0, "request: bad version"); }
        if cmd != 0x01 {
            write_reply(&mut c.client, 0x07);
            return close_conn(st, c.client_token.0, "cmd not CONNECT");
        }
        let need;
        if atyp == 0x01 {
            need = 4 + 4 + 2;
        } else if atyp == 0x03 {
            if avail < 5 {
                if pos > 0 {
                    c.hs.copy_within(pos..c.hs_len, 0);
                    c.hs_len -= pos;
                }
                return;
            }
            let hl = b[4] as usize;
            need = 4 + 1 + hl + 2;
        } else {
            write_reply(&mut c.client, 0x08);
            return close_conn(st, c.client_token.0, "atyp not supported");
        }
        if avail < need {
            if pos > 0 {
                c.hs.copy_within(pos..c.hs_len, 0);
                c.hs_len -= pos;
            }
            return;
        }
        let port: u16;
        if atyp == 0x01 {
            let ip = Ipv4Addr::new(b[4], b[5], b[6], b[7]);
            c.pending_host = ip.to_string();
            port = ((b[8] as u16) << 8) | (b[9] as u16);
        } else {
            let hl = b[4] as usize;
            c.pending_host = std::str::from_utf8(&b[5..5 + hl])
                .unwrap_or("")
                .to_string();
            port = ((b[5 + hl] as u16) << 8) | (b[5 + hl + 1] as u16);
        }
        c.pending_port = port;
        c.hs.clear();
        c.hs.shrink_to_fit();
        c.hs_len = 0;
        if DEBUG.load(Ordering::Relaxed) {
            log::info!(target: TAG, "{} → {}:{}", c.from, c.pending_host, c.pending_port);
        }
        if atyp == 0x01 {
            let parts: Vec<&str> = c.pending_host.split('.').collect();
            if parts.len() == 4 {
                let addr: Result<Vec<u8>, _> = parts.iter().map(|p| p.parse::<u8>()).collect();
                if let Ok(o) = addr {
                    let ip_be = u32::from_be_bytes([o[0], o[1], o[2], o[3]]).to_be();
                    start_connect_ipv4(st, c, ip_be);
                    return;
                }
            }
            return close_conn(st, c.client_token.0, "bad ipv4 literal");
        } else {
            start_dns(c);
        }
    }
}

// ── DNS → connect handoff ─────────────────────────────────────────

fn start_dns(c: &mut Conn) {
    c.phase = Phase::Dns;
    c.deadline_ms = now_ms() + CONN_TMO_MS;
    // Pause client reads while we await DNS.
    set_client_interest(c, false, false);
    let client_token_id = c.client_token.0;
    let host = c.pending_host.clone();
    enqueue_dns(host, Box::new(move |maybe_ip_be| {
        dispatcher::post(Box::new(move || {
            let mut st = STATE.lock();
            // Re-borrow split: take pointer then drop the immutable map borrow.
            let conn_ptr: *mut Conn = match st.conns.get_mut(&client_token_id) {
                Some(c) => &mut **c as *mut Conn,
                None    => return,
            };
            // SAFETY: STATE lock held, dispatcher thread only.
            let c = unsafe { &mut *conn_ptr };
            if c.closed { return; }
            match maybe_ip_be {
                Some(ip_be) => start_connect_ipv4(&mut st, c, ip_be),
                None => {
                    write_reply(&mut c.client, 0x04);
                    close_conn(&mut st, client_token_id, "dns: unresolved");
                }
            }
        }));
    }));
}

fn start_connect_ipv4(st: &mut State, c: &mut Conn, ip_be: u32) {
    let ip = Ipv4Addr::from(u32::from_be(ip_be));
    let dst: SocketAddr = (ip, c.pending_port).into();
    let mut dest = match mio::net::TcpStream::connect(dst) {
        Ok(s) => s,
        Err(_) => {
            write_reply(&mut c.client, 0x05);
            return close_conn(st, c.client_token.0, "connect failed");
        }
    };
    // SOCKS5 destination sockets ride the default route. On Android,
    // `addDisallowedApplication(packageName)` on the VpnService excludes
    // our own app from the TUN at the OS level, so the kernel routes
    // these sockets out the underlying WiFi/cellular. The previous
    // explicit android_setsocknetwork() bind into the VPN Network
    // fought that decision — packets exited via TUN with src=WiFi-IP
    // (no VPN address on a disallowed-app socket), and replies coming
    // back through TUN were never delivered to the disallowed-app
    // socket. Trade-off: LAN clients SOCKS5-ing through us reach
    // destinations via the device's direct network, not the Bale
    // tunnel.
    let _ = dest.set_nodelay(true);

    let dest_token = dispatcher::register_source(
        &mut dest,
        Interest::WRITABLE,
        Box::new(DestHandler),
    );
    c.dest        = Some(dest);
    c.dest_token  = Some(dest_token);
    c.phase       = Phase::Connecting;
    c.deadline_ms = now_ms() + CONN_TMO_MS;
    st.conn_by_dest.insert(dest_token.0, c.client_token.0);

    // Pause client reads while the connect completes.
    set_client_interest(c, false, false);
}

fn enter_relay(c: &mut Conn) {
    write_reply(&mut c.client, 0x00);
    c.phase = Phase::Relay;
    c.deadline_ms = i64::MAX;
    c.c_to_d = vec![0u8; RELAY_BUF];
    c.d_to_c = vec![0u8; RELAY_BUF];
    c.c_to_d_off = 0; c.c_to_d_end = 0;
    c.d_to_c_off = 0; c.d_to_c_end = 0;
    set_client_interest(c, true, false);
    set_dest_interest(c, true, false);
    if DEBUG.load(Ordering::Relaxed) {
        log::info!(target: TAG, "{} relay → {}:{}", c.from, c.pending_host, c.pending_port);
    }
}

// ── Relay ────────────────────────────────────────────────────────────

fn maybe_finish_relay(st: &mut State, c: &mut Conn) {
    if c.client_write_shut && c.dest_write_shut {
        let msg = format!("relay done up={}B down={}B", c.bytes_up, c.bytes_down);
        close_conn(st, c.client_token.0, &msg);
    }
}

fn relay_read_client(st: &mut State, c: &mut Conn) {
    if c.c_to_d_off < c.c_to_d_end { return; }
    let res = c.client.read(&mut c.c_to_d[..RELAY_BUF]);
    match res {
        Ok(0) => {
            c.client_read_eof = true;
            set_client_interest(c, false, false);
            if c.c_to_d_off == c.c_to_d_end && !c.dest_write_shut {
                if let Some(dest) = c.dest.as_mut() { half_shut(dest); }
                c.dest_write_shut = true;
                maybe_finish_relay(st, c);
            }
        }
        Ok(n) => {
            c.bytes_up   += n as i64;
            c.c_to_d_off  = 0;
            c.c_to_d_end  = n;
            let mut off = c.c_to_d_off;
            let drained = if let Some(dest) = c.dest.as_mut() {
                try_drain(dest, &c.c_to_d, &mut off, c.c_to_d_end)
            } else { true };
            c.c_to_d_off = off;
            if drained {
                c.c_to_d_off = 0; c.c_to_d_end = 0;
            } else {
                set_client_interest(c, false, false);
                set_dest_interest(c, true, true);
            }
        }
        Err(e) if e.kind() == ErrorKind::WouldBlock
              || e.kind() == ErrorKind::Interrupted => {}
        Err(_) => close_conn(st, c.client_token.0, "client recv error in relay"),
    }
}

fn relay_read_dest(st: &mut State, c: &mut Conn) {
    if c.d_to_c_off < c.d_to_c_end { return; }
    let res = if let Some(dest) = c.dest.as_mut() {
        dest.read(&mut c.d_to_c[..RELAY_BUF])
    } else { return; };
    match res {
        Ok(0) => {
            c.dest_read_eof = true;
            set_dest_interest(c, false, false);
            if c.d_to_c_off == c.d_to_c_end && !c.client_write_shut {
                half_shut(&mut c.client);
                c.client_write_shut = true;
                maybe_finish_relay(st, c);
            }
        }
        Ok(n) => {
            c.bytes_down += n as i64;
            c.d_to_c_off  = 0;
            c.d_to_c_end  = n;
            let mut off = c.d_to_c_off;
            let drained = try_drain(&mut c.client, &c.d_to_c, &mut off, c.d_to_c_end);
            c.d_to_c_off = off;
            if drained {
                c.d_to_c_off = 0; c.d_to_c_end = 0;
            } else {
                set_dest_interest(c, false, false);
                set_client_interest(c, true, true);
            }
        }
        Err(e) if e.kind() == ErrorKind::WouldBlock
              || e.kind() == ErrorKind::Interrupted => {}
        Err(_) => close_conn(st, c.client_token.0, "dest recv error in relay"),
    }
}

fn relay_write_dest(st: &mut State, c: &mut Conn) {
    if c.c_to_d_off >= c.c_to_d_end {
        set_dest_interest(c, true, false);
        return;
    }
    let mut off = c.c_to_d_off;
    let drained = if let Some(dest) = c.dest.as_mut() {
        try_drain(dest, &c.c_to_d, &mut off, c.c_to_d_end)
    } else { true };
    c.c_to_d_off = off;
    if !drained { return; }
    c.c_to_d_off = 0; c.c_to_d_end = 0;
    set_dest_interest(c, true, false);
    if c.client_read_eof && !c.dest_write_shut {
        if let Some(dest) = c.dest.as_mut() { half_shut(dest); }
        c.dest_write_shut = true;
        maybe_finish_relay(st, c);
    } else if !c.client_read_eof {
        set_client_interest(c, true, false);
    }
}

fn relay_write_client(st: &mut State, c: &mut Conn) {
    if c.d_to_c_off >= c.d_to_c_end {
        set_client_interest(c, true, false);
        return;
    }
    let mut off = c.d_to_c_off;
    let drained = try_drain(&mut c.client, &c.d_to_c, &mut off, c.d_to_c_end);
    c.d_to_c_off = off;
    if !drained { return; }
    c.d_to_c_off = 0; c.d_to_c_end = 0;
    set_client_interest(c, true, false);
    if c.dest_read_eof && !c.client_write_shut {
        half_shut(&mut c.client);
        c.client_write_shut = true;
        maybe_finish_relay(st, c);
    } else if !c.dest_read_eof {
        set_dest_interest(c, true, false);
    }
}

// ── Event handlers ──────────────────────────────────────────────────

struct ListenHandler;
impl EventHandler for ListenHandler {
    fn on_event(&mut self, ev: &mio::event::Event) {
        if !ev.is_readable() { return; }
        accept_loop();
    }
}

struct ClientHandler;
impl EventHandler for ClientHandler {
    fn on_event(&mut self, ev: &mio::event::Event) {
        let token_id = ev.token().0;
        let mut st = STATE.lock();
        let conn_ptr: *mut Conn = match st.conns.get_mut(&token_id) {
            Some(c) => &mut **c as *mut Conn,
            None    => return,
        };
        let c = unsafe { &mut *conn_ptr };
        if c.closed { return; }
        if ev.is_error() || ev.is_read_closed() || ev.is_write_closed() {
            return close_conn(&mut st, token_id, "client poll err/hup");
        }
        if ev.is_writable() && c.phase == Phase::Relay {
            relay_write_client(&mut st, c);
        }
        if c.closed { return; }
        if ev.is_readable() {
            match c.phase {
                Phase::Greet | Phase::Request => on_handshake_readable(&mut st, c),
                Phase::Relay                  => relay_read_client(&mut st, c),
                _ => {} // DNS / CONNECTING: client reads are paused.
            }
        }
    }
}

struct DestHandler;
impl EventHandler for DestHandler {
    fn on_event(&mut self, ev: &mio::event::Event) {
        let dest_token_id = ev.token().0;
        let mut st = STATE.lock();
        let client_token_id = match st.conn_by_dest.get(&dest_token_id).copied() {
            Some(t) => t,
            None    => return,
        };
        let conn_ptr: *mut Conn = match st.conns.get_mut(&client_token_id) {
            Some(c) => &mut **c as *mut Conn,
            None    => return,
        };
        let c = unsafe { &mut *conn_ptr };
        if c.closed { return; }
        if ev.is_error() {
            if c.phase == Phase::Connecting { write_reply(&mut c.client, 0x05); }
            return close_conn(&mut st, client_token_id, "dest poll err");
        }
        if c.phase == Phase::Connecting {
            // POLLOUT fired post-connect — surface SO_ERROR equivalent.
            let so_err = c.dest.as_ref()
                .and_then(|s| s.take_error().ok().flatten());
            if so_err.is_some() {
                write_reply(&mut c.client, 0x05);
                return close_conn(&mut st, client_token_id, "dest connect failed");
            }
            enter_relay(c);
            return;
        }
        let closed = ev.is_read_closed() || ev.is_write_closed();
        if ev.is_writable() && c.phase == Phase::Relay {
            relay_write_dest(&mut st, c);
        }
        if c.closed { return; }
        if ev.is_readable() && c.phase == Phase::Relay {
            relay_read_dest(&mut st, c);
        }
        if c.closed { return; }
        if closed && c.phase == Phase::Relay && !c.dest_read_eof {
            c.dest_read_eof = true;
            if c.d_to_c_off == c.d_to_c_end && !c.client_write_shut {
                half_shut(&mut c.client);
                c.client_write_shut = true;
                maybe_finish_relay(&mut st, c);
            }
        }
    }
}

fn accept_loop() {
    loop {
        let mut st = STATE.lock();
        let listener = match st.listener.as_ref() {
            Some(l) => l,
            None    => return,
        };
        let (mut stream, peer) = match listener.accept() {
            Ok(p) => p,
            Err(e) if e.kind() == ErrorKind::WouldBlock
                  || e.kind() == ErrorKind::Interrupted => return,
            Err(e) => { log::warn!(target: TAG, "accept error: {e}"); return; }
        };
        let _ = stream.set_nodelay(true);
        let from = match peer {
            SocketAddr::V4(v4) => v4.ip().to_string(),
            SocketAddr::V6(v6) => v6.ip().to_string(),
        };
        let token = dispatcher::register_source(
            &mut stream,
            Interest::READABLE,
            Box::new(ClientHandler),
        );
        let conn = Box::new(Conn::new(stream, token, from.clone()));
        st.conns.insert(token.0, conn);
        let total = ACTIVE.fetch_add(1, Ordering::Relaxed) + 1;
        TOTAL_ACCEPTED.fetch_add(1, Ordering::Relaxed);
        if DEBUG.load(Ordering::Relaxed) {
            log::info!(target: TAG, "accept from {from} (active={total})");
        }
    }
}

// ── Teardown ────────────────────────────────────────────────────────

fn close_conn(st: &mut State, client_token_id: usize, why: &str) {
    let mut conn = match st.conns.remove(&client_token_id) {
        Some(c) => c,
        None    => return,
    };
    if conn.closed {
        // Already closed but somehow still in the map — defensive.
        st.conns.insert(client_token_id, conn);
        st.conns.remove(&client_token_id);
        return;
    }
    conn.closed = true;
    let from = conn.from.clone();

    dispatcher::deregister_source(&mut conn.client, conn.client_token);

    if let (Some(mut dest), Some(token)) = (conn.dest.take(), conn.dest_token.take()) {
        dispatcher::deregister_source(&mut dest, token);
        st.conn_by_dest.remove(&token.0);
        // dest stream drops here, closing the underlying socket.
    }
    // conn.client stream drops as `conn` goes out of scope.
    let left = ACTIVE.fetch_sub(1, Ordering::Relaxed) - 1;
    if DEBUG.load(Ordering::Relaxed) {
        log::info!(target: TAG, "{from} closed: {why} (active={left})");
    }
}

// ── Server lifecycle (dispatcher thread) ───────────────────────────

fn do_stop() {
    let token_ids: Vec<usize> = {
        let mut st = STATE.lock();
        if let (Some(mut l), Some(t)) = (st.listener.take(), st.listener_token.take()) {
            dispatcher::deregister_source(&mut l, t);
        }
        st.conns.keys().copied().collect()
    };
    for id in token_ids {
        let mut st = STATE.lock();
        close_conn(&mut st, id, "server stopping");
    }
    RUNNING.store(false, Ordering::Relaxed);
    BOUND_PORT.store(0, Ordering::Relaxed);
    log::info!(target: TAG, "stopped");
}

fn do_start(port: i32) {
    do_stop();
    let bind: SocketAddr = ([0u8, 0, 0, 0], port as u16).into();
    let mut listener = match mio::net::TcpListener::bind(bind) {
        Ok(l) => l,
        Err(e) => {
            log::error!(target: TAG, "bind(:{port}) failed: {e}");
            return;
        }
    };
    let token = dispatcher::register_source(
        &mut listener,
        Interest::READABLE,
        Box::new(ListenHandler),
    );
    {
        let mut st = STATE.lock();
        st.listener       = Some(listener);
        st.listener_token = Some(token);
    }
    RUNNING.store(true, Ordering::Relaxed);
    BOUND_PORT.store(port, Ordering::Relaxed);
    log::info!(target: TAG, "listening on :{port}");
}

// ── Public API ──────────────────────────────────────────────────────

pub fn start(port: i32) {
    dispatcher::post(Box::new(move || do_start(port)));
}
pub fn stop() {
    dispatcher::post(Box::new(do_stop));
}
pub fn is_running() -> bool { RUNNING.load(Ordering::Relaxed) }
pub fn active_connections() -> i32 { ACTIVE.load(Ordering::Relaxed) }
pub fn total_accepted() -> i64 { TOTAL_ACCEPTED.load(Ordering::Relaxed) }
pub fn bound_port() -> i32 { BOUND_PORT.load(Ordering::Relaxed) }
pub fn set_debug(enabled: bool) { DEBUG.store(enabled, Ordering::Relaxed); }
