//! SOCKS5 ↔ QUIC bridge.
//!
//! Client-side: the LAN-facing peer runs a SOCKS5 listener; each
//! accepted SOCKS5 connection is mapped to a freshly-opened QUIC
//! bidirectional stream on the QUIC connection that runs over this
//! tunnel. The stream's first bytes carry a SOCKS5-style target
//! envelope; the rest is raw application bytes shuttled between the
//! SOCKS5 client TCP and the QUIC stream.
//!
//! Server-side: the peer that bridges to the internet runs a QUIC
//! stream acceptor. For each incoming stream it reads the target
//! envelope, opens a real TCP connection on the host network, and
//! byte-copies between the QUIC stream and the host TCP.
//!
//! ## Wire format on each QUIC stream
//!
//! ```text
//!   ┌──────┬───────────────────┬──────────┐
//!   │ atyp │ addr (4/16/N+1)   │ port (2) │
//!   └──────┴───────────────────┴──────────┘
//!     u8     IPv4=4, IPv6=16,      u16 BE
//!            or 1 byte len + N
//! ```
//!
//! atyp matches SOCKS5's `ATYP` values: 0x01 IPv4, 0x03 domain,
//! 0x04 IPv6. After the envelope it's straight TCP-like bytes both
//! ways until either end closes the stream.

use std::io;
use std::net::{IpAddr, Ipv4Addr, Ipv6Addr, SocketAddr};
use std::sync::atomic::{AtomicBool, Ordering};

use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::TcpStream;
use tokio::task::AbortHandle;

use crate::LkTunnel;
use crate::quic_tunnel::QuicServer;

// ── SOCKS5 protocol constants ─────────────────────────────────────────

const SOCKS_VER: u8 = 0x05;
const METHOD_NO_AUTH: u8 = 0x00;
const METHOD_NO_ACCEPTABLE: u8 = 0xFF;
const CMD_CONNECT: u8 = 0x01;
const RSV: u8 = 0x00;
const ATYP_IPV4: u8 = 0x01;
const ATYP_DOMAIN: u8 = 0x03;
const ATYP_IPV6: u8 = 0x04;
const REP_SUCCEEDED: u8 = 0x00;
const REP_GENERAL_FAILURE: u8 = 0x01;
const REP_RULESET_BLOCKED: u8 = 0x02;
const REP_NETWORK_UNREACHABLE: u8 = 0x03;
const REP_HOST_UNREACHABLE: u8 = 0x04;
const REP_CONNECTION_REFUSED: u8 = 0x05;
const REP_COMMAND_NOT_SUPPORTED: u8 = 0x07;

/// Process-global SSRF filter toggle. Defaults to `true` in
/// production. Integration tests that need to connect to a loopback
/// echo server call [`set_ssrf_filter_enabled(false)`] to disable.
/// Not exposed in any public API surface — only the integration
/// test reaches into this via `#[doc(hidden)]`.
static SSRF_FILTER_ENABLED: AtomicBool = AtomicBool::new(true);

/// Toggle the SSRF guard. **Tests only** — disabling this in
/// production is a security regression. The `#[doc(hidden)]` attribute
/// keeps it out of the generated docs.
#[doc(hidden)]
pub fn set_ssrf_filter_enabled(enabled: bool) {
    SSRF_FILTER_ENABLED.store(enabled, Ordering::Relaxed);
}

/// True if the destination should be refused. Honours the
/// `SSRF_FILTER_ENABLED` toggle.
fn ssrf_blocked(ip: IpAddr) -> bool {
    SSRF_FILTER_ENABLED.load(Ordering::Relaxed)
        && crate::nat::filter::is_blocked_dst(ip)
}

/// Is this `accept()` error something we can recover from with a
/// short sleep, or is the listening socket itself dead? Resource-
/// exhaustion errnos (too many open fds in the process or on the
/// host) are transient — backing off lets the system recover.
fn is_transient_accept_error(e: &io::Error) -> bool {
    matches!(e.raw_os_error(), Some(libc::EMFILE) | Some(libc::ENFILE)
                              | Some(libc::ENOBUFS) | Some(libc::ENOMEM)
                              | Some(libc::EAGAIN) | Some(libc::EINTR))
}

/// Map an `io::Error` from the host-TCP path to a SOCKS5 reply code.
/// Falls back to GENERAL_FAILURE for anything not in the standard
/// taxonomy.
fn io_err_to_socks5_rep(e: &io::Error) -> u8 {
    match e.kind() {
        io::ErrorKind::PermissionDenied   => REP_RULESET_BLOCKED,
        io::ErrorKind::ConnectionRefused  => REP_CONNECTION_REFUSED,
        io::ErrorKind::HostUnreachable    => REP_HOST_UNREACHABLE,
        io::ErrorKind::NetworkUnreachable => REP_NETWORK_UNREACHABLE,
        io::ErrorKind::NotFound           => REP_HOST_UNREACHABLE, // DNS NXDOMAIN
        _                                 => REP_GENERAL_FAILURE,
    }
}

/// Target the SOCKS5 client wants to reach. Domain is left
/// unresolved here so DNS happens on the *peer* (the one with the
/// uncensored upstream) rather than locally.
#[derive(Debug, Clone)]
pub(crate) enum Target {
    Ip(IpAddr, u16),
    Domain(String, u16),
}

impl std::fmt::Display for Target {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Target::Ip(ip, port)     => write!(f, "{ip}:{port}"),
            Target::Domain(d, port)  => write!(f, "{d}:{port}"),
        }
    }
}

// ── Errors ────────────────────────────────────────────────────────────

#[derive(Debug)]
pub enum Socks5Error {
    AlreadyEnabled,
    Bind(io::Error),
    Quic(crate::quic_tunnel::QuicEndpointError),
}

impl std::fmt::Display for Socks5Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::AlreadyEnabled => f.write_str("socks5 server already enabled"),
            Self::Bind(e)        => write!(f, "socks5 bind: {e}"),
            Self::Quic(e)        => write!(f, "{e}"),
        }
    }
}

impl std::error::Error for Socks5Error {}

impl From<crate::quic_tunnel::QuicEndpointError> for Socks5Error {
    fn from(e: crate::quic_tunnel::QuicEndpointError) -> Self { Self::Quic(e) }
}

// ── Handles stashed on TunnelInner ────────────────────────────────────

/// Client-side handle: aborts the SOCKS5 listener task on drop /
/// `disable_socks5_server`. The QUIC client lives separately on
/// `TunnelInner::quic_client` and persists across SOCKS5 toggles.
pub(crate) struct Socks5Handle {
    /// Aborts the SOCKS5 accept loop. Each per-connection task ends
    /// naturally when the SOCKS5 client or the QUIC stream closes;
    /// killing the accept loop just stops accepting new ones.
    pub(crate) listener_abort: AbortHandle,
    /// Local socket the listener is bound to — useful for surfacing
    /// in logs / UI.
    pub(crate) local_addr: SocketAddr,
}

/// Server-side handle: ties the QUIC stream-acceptor task lifetime
/// to the QUIC server endpoint.
pub(crate) struct QuicServerHandle {
    /// Aborts the per-connection accept loop.
    pub(crate) accept_abort: AbortHandle,
    /// Keeps the endpoint alive. Dropping closes incoming.
    #[allow(dead_code)]
    pub(crate) quic_server: QuicServer,
}

// ── Public entry points (pub(crate)) ──────────────────────────────────

/// Bring up the SOCKS5 listener. Each accept reads the *current*
/// `QuicClient` from `TunnelInner::quic_client` so the listener
/// transparently follows the reconnect keeper — a connection that
/// drops mid-session recovers without listener restart; old SOCKS5
/// streams die at the TCP level (their apps see a disconnect), new
/// SOCKS5 client requests pick up the freshly-reconnected QUIC.
pub(crate) async fn enable_listener(
    tunnel: LkTunnel,
    port:   u16,
) -> Result<Socks5Handle, Socks5Error> {
    // Use TcpSocket so we can set SO_REUSEADDR before bind.
    // Without it, a rapid disconnect→reconnect cycle hits
    // EADDRINUSE because the OS hasn't released the previous
    // listener's socket from TIME_WAIT / TCP-shutdown reap yet.
    // Observed on every client mode reconnect: session 1's
    // listener task gets aborted, but the bound socket lingers
    // a few seconds and session 2's bind fails until then.
    let bind_addr = SocketAddr::new(IpAddr::V4(Ipv4Addr::UNSPECIFIED), port);
    let socket = tokio::net::TcpSocket::new_v4().map_err(Socks5Error::Bind)?;
    socket.set_reuseaddr(true).map_err(Socks5Error::Bind)?;
    socket.bind(bind_addr).map_err(Socks5Error::Bind)?;
    let listener = socket.listen(1024).map_err(Socks5Error::Bind)?;
    let local_addr = listener.local_addr().map_err(Socks5Error::Bind)?;
    log::info!("socks5: listening on {local_addr}");

    let weak_inner = std::sync::Arc::downgrade(&tunnel.inner);
    let task = crate::runtime().spawn(async move {
        loop {
            match listener.accept().await {
                Ok((tcp, peer)) => {
                    log::debug!("socks5: accepted {peer}");
                    // Snapshot the current connection — may be a
                    // freshly-reconnected one if the keeper rotated.
                    let conn = {
                        let Some(inner) = weak_inner.upgrade() else { break };
                        let client = inner.quic_client.lock().clone();
                        client.map(|c| c.connection.clone())
                    };
                    let Some(conn) = conn else {
                        // QUIC isn't up yet (initial dial pending or
                        // keeper is reconnecting). The polite thing is
                        // to refuse with a SOCKS5 error so the client
                        // sees a clean failure instead of a hang.
                        log::warn!("socks5: no QUIC connection — refusing accept");
                        drop(tcp);
                        continue;
                    };
                    crate::runtime().spawn(async move {
                        if let Err(e) = pump_socks5_conn(tcp, conn).await {
                            log::debug!("socks5: per-conn ended: {e}");
                        }
                    });
                }
                Err(e) if is_transient_accept_error(&e) => {
                    log::warn!("socks5: transient accept err {e} — backing off 250ms");
                    tokio::time::sleep(std::time::Duration::from_millis(250)).await;
                    continue;
                }
                Err(e) => {
                    log::warn!("socks5: fatal accept err: {e} — listener exiting");
                    break;
                }
            }
        }
    });

    Ok(Socks5Handle {
        listener_abort: task.abort_handle(),
        local_addr,
    })
}

/// Server-side: spawn the QUIC stream-acceptor that bridges each
/// incoming stream to a real host TCP socket. Caller is responsible
/// for keeping the returned handle alive.
pub(crate) fn spawn_server_acceptor(server: QuicServer) -> QuicServerHandle {
    let endpoint = server.endpoint.clone();
    let task = crate::runtime().spawn(async move {
        loop {
            let Some(incoming) = endpoint.accept().await else {
                log::info!("socks5/server: quic endpoint closed");
                break;
            };
            crate::runtime().spawn(async move {
                let connection = match incoming.await {
                    Ok(c) => c,
                    Err(e) => { log::warn!("socks5/server: incoming err: {e}"); return; }
                };
                log::info!("socks5/server: quic connection established");
                loop {
                    let (send, recv) = match connection.accept_bi().await {
                        Ok(s) => s,
                        Err(quinn::ConnectionError::ApplicationClosed(_))
                        | Err(quinn::ConnectionError::ConnectionClosed(_))
                        | Err(quinn::ConnectionError::TimedOut)
                        | Err(quinn::ConnectionError::LocallyClosed)
                        // EndpointStopping covers the case where
                        // the LkTunnel is dropping its QUIC
                        // endpoint as part of normal teardown
                        // — the accept loop sees "endpoint
                        // driver future was dropped" which is a
                        // routine shutdown event, not a real
                        // error.
                        | Err(quinn::ConnectionError::Reset)
                        | Err(quinn::ConnectionError::TransportError(_)) => {
                            log::info!("socks5/server: connection closed");
                            break;
                        }
                        Err(quinn::ConnectionError::VersionMismatch) => {
                            log::warn!("socks5/server: accept_bi: version mismatch");
                            break;
                        }
                        Err(e) => {
                            log::debug!("socks5/server: accept_bi: {e}");
                            break;
                        }
                    };
                    crate::runtime().spawn(async move {
                        if let Err(e) = handle_quic_stream(send, recv).await {
                            log::debug!("socks5/server: stream ended: {e}");
                        }
                    });
                }
            });
        }
    });
    QuicServerHandle {
        accept_abort: task.abort_handle(),
        quic_server: server,
    }
}

// ── Per-connection / per-stream pumps ─────────────────────────────────

/// Client side: SOCKS5 handshake → open QUIC bidi stream → send
/// target envelope → **wait for 1-byte server status** → reply with
/// matching SOCKS5 code → byte-copy both directions.
///
/// The server status byte uses SOCKS5's own `REP_*` codes so we can
/// translate verbatim into the SOCKS5 reply without a mapping table:
///   0x00 = SUCCEEDED
///   0x01 = general failure
///   0x02 = blocked by ruleset (our SSRF guard)
///   0x03 = network unreachable
///   0x04 = host unreachable
///   0x05 = connection refused
///   0x07 = command not supported  (used here for "blocked target")
async fn pump_socks5_conn(
    mut tcp: TcpStream,
    conn:    quinn::Connection,
) -> io::Result<()> {
    let target = match read_socks5_request(&mut tcp).await {
        Ok(t) => t,
        Err(e) => {
            let _ = tcp.write_all(&[
                SOCKS_VER, REP_GENERAL_FAILURE, RSV, ATYP_IPV4,
                0, 0, 0, 0, 0, 0,
            ]).await;
            return Err(e);
        }
    };
    log::debug!("socks5: dispatching {target}");
    let (mut send, mut recv) = conn.open_bi().await
        .map_err(|e| io::Error::new(io::ErrorKind::ConnectionReset,
                                    format!("quic open_bi: {e}")))?;
    let env = encode_target(&target);
    send.write_all(&env).await
        .map_err(|e| io::Error::new(io::ErrorKind::Other,
                                    format!("quic write env: {e}")))?;

    // Wait for the server's 1-byte status BEFORE replying to the
    // SOCKS5 client. Reading from a quinn::RecvStream blocks until
    // bytes arrive or the stream resets; if the server fails before
    // writing, the read errors and we report failure faithfully.
    let mut status = [0u8; 1];
    let status_byte = match recv.read_exact(&mut status).await {
        Ok(()) => status[0],
        Err(_) => REP_GENERAL_FAILURE,  // server stream died → fail
    };
    let reply = [
        SOCKS_VER, status_byte, RSV, ATYP_IPV4,
        0, 0, 0, 0, 0, 0,
    ];
    tcp.write_all(&reply).await?;
    if status_byte != REP_SUCCEEDED {
        // No host TCP on the other end — close the stream cleanly
        // and return without spawning the byte-copy tasks.
        let _ = send.finish();
        return Ok(());
    }

    let (mut tcp_r, mut tcp_w) = tcp.into_split();
    let to_quic = async move {
        let _ = tokio::io::copy(&mut tcp_r, &mut send).await;
        let _ = send.finish();
    };
    let from_quic = async move {
        let _ = tokio::io::copy(&mut recv, &mut tcp_w).await;
        let _ = tcp_w.shutdown().await;
    };
    tokio::join!(to_quic, from_quic);
    Ok(())
}

/// Server side: read target envelope, resolve, gate, dial,
/// **write a 1-byte SOCKS5-style status** so the client can reply to
/// its own SOCKS5 caller with a faithful code (not the optimistic
/// "succeeded then immediately closed" we used to send), then
/// byte-copy.
async fn handle_quic_stream(
    mut send: quinn::SendStream,
    mut recv: quinn::RecvStream,
) -> io::Result<()> {
    let target = read_target(&mut recv).await?;
    log::debug!("socks5/server: target {target}");

    // Resolve.
    let addr_result: io::Result<SocketAddr> = match &target {
        Target::Ip(ip, port) => Ok(SocketAddr::new(*ip, *port)),
        Target::Domain(name, port) => {
            match tokio::net::lookup_host((name.as_str(), *port)).await {
                Ok(iter) => iter.filter(|a| !ssrf_blocked(a.ip()))
                    .next()
                    .ok_or_else(|| io::Error::new(io::ErrorKind::PermissionDenied,
                        "dns: no public address")),
                Err(e) => Err(io::Error::new(io::ErrorKind::NotFound,
                                             format!("dns: {e}"))),
            }
        }
    };

    // Map any failure path to a SOCKS5 reply byte, send it, return.
    let connect_result: io::Result<(SocketAddr, TcpStream)> = match addr_result {
        Err(e) => Err(e),
        Ok(addr) => {
            if ssrf_blocked(addr.ip()) {
                log::warn!("socks5/server: refusing SSRF-prone target {addr}");
                Err(io::Error::new(io::ErrorKind::PermissionDenied,
                                   format!("blocked destination {addr}")))
            } else {
                match TcpStream::connect(addr).await {
                    Ok(s)  => Ok((addr, s)),
                    Err(e) => Err(e),
                }
            }
        }
    };

    let (addr, tcp) = match connect_result {
        Ok(pair) => {
            // 0x00 = succeeded. Send before any byte-copy starts so the
            // client can reply to its SOCKS5 caller promptly.
            if send.write_all(&[REP_SUCCEEDED]).await.is_err() {
                return Ok(());  // client gone, nothing to forward
            }
            pair
        }
        Err(e) => {
            let status = io_err_to_socks5_rep(&e);
            let _ = send.write_all(&[status]).await;
            let _ = send.finish();
            log::debug!("socks5/server: connect failed {target}: {e} → rep=0x{status:02x}");
            return Err(e);
        }
    };
    log::debug!("socks5/server: connected to {addr}");
    let (mut tcp_r, mut tcp_w) = tcp.into_split();
    let to_host = async move {
        let _ = tokio::io::copy(&mut recv, &mut tcp_w).await;
        let _ = tcp_w.shutdown().await;
    };
    let from_host = async move {
        let _ = tokio::io::copy(&mut tcp_r, &mut send).await;
        let _ = send.finish();
    };
    tokio::join!(to_host, from_host);
    Ok(())
}

// ── SOCKS5 protocol helpers ───────────────────────────────────────────

/// Read SOCKS5 GREET + REQUEST from a stream. Generic over
/// `AsyncRead + AsyncWrite + Unpin` so unit tests can drive it via
/// `tokio::io::duplex` without spinning up a real TCP socket.
async fn read_socks5_request<S>(s: &mut S) -> io::Result<Target>
where S: tokio::io::AsyncRead + tokio::io::AsyncWrite + Unpin
{
    // GREET: VER, NMETHODS, METHODS[]
    let mut hdr = [0u8; 2];
    s.read_exact(&mut hdr).await?;
    if hdr[0] != SOCKS_VER {
        return Err(io::Error::new(io::ErrorKind::InvalidData, "not socks5"));
    }
    let n = hdr[1] as usize;
    let mut methods = vec![0u8; n];
    s.read_exact(&mut methods).await?;
    if !methods.contains(&METHOD_NO_AUTH) {
        let _ = s.write_all(&[SOCKS_VER, METHOD_NO_ACCEPTABLE]).await;
        return Err(io::Error::new(io::ErrorKind::PermissionDenied,
                                  "no acceptable auth method"));
    }
    s.write_all(&[SOCKS_VER, METHOD_NO_AUTH]).await?;

    // REQUEST: VER, CMD, RSV, ATYP, DST.ADDR, DST.PORT
    let mut req = [0u8; 4];
    s.read_exact(&mut req).await?;
    if req[0] != SOCKS_VER {
        return Err(io::Error::new(io::ErrorKind::InvalidData, "bad req ver"));
    }
    if req[1] != CMD_CONNECT {
        // CONNECT is all we support for now. UDP ASSOCIATE / BIND
        // would need additional plumbing.
        let _ = s.write_all(&[SOCKS_VER, REP_COMMAND_NOT_SUPPORTED, RSV,
                              ATYP_IPV4, 0,0,0,0, 0,0]).await;
        return Err(io::Error::new(io::ErrorKind::Unsupported,
                                  "only CONNECT supported"));
    }
    let atyp = req[3];
    let target = match atyp {
        ATYP_IPV4 => {
            let mut o = [0u8; 4]; s.read_exact(&mut o).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            Target::Ip(IpAddr::V4(Ipv4Addr::from(o)), u16::from_be_bytes(p))
        }
        ATYP_IPV6 => {
            let mut o = [0u8; 16]; s.read_exact(&mut o).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            Target::Ip(IpAddr::V6(Ipv6Addr::from(o)), u16::from_be_bytes(p))
        }
        ATYP_DOMAIN => {
            let mut l = [0u8; 1]; s.read_exact(&mut l).await?;
            let mut name = vec![0u8; l[0] as usize];
            s.read_exact(&mut name).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            let domain = String::from_utf8(name)
                .map_err(|_| io::Error::new(io::ErrorKind::InvalidData,
                                            "non-utf8 domain"))?;
            Target::Domain(domain, u16::from_be_bytes(p))
        }
        _ => {
            return Err(io::Error::new(io::ErrorKind::InvalidData,
                                      "bad atyp"));
        }
    };
    Ok(target)
}

fn encode_target(t: &Target) -> Vec<u8> {
    let mut buf = Vec::with_capacity(32);
    match t {
        Target::Ip(IpAddr::V4(a), p) => {
            buf.push(ATYP_IPV4);
            buf.extend_from_slice(&a.octets());
            buf.extend_from_slice(&p.to_be_bytes());
        }
        Target::Ip(IpAddr::V6(a), p) => {
            buf.push(ATYP_IPV6);
            buf.extend_from_slice(&a.octets());
            buf.extend_from_slice(&p.to_be_bytes());
        }
        Target::Domain(d, p) => {
            buf.push(ATYP_DOMAIN);
            buf.push(d.len() as u8);
            buf.extend_from_slice(d.as_bytes());
            buf.extend_from_slice(&p.to_be_bytes());
        }
    }
    buf
}

/// Parse the target envelope from any `AsyncRead`. quinn's
/// `RecvStream` implements `AsyncRead` so the production callsite
/// just passes `&mut recv`; tests pass a `tokio::io::duplex` half.
async fn read_target<R>(s: &mut R) -> io::Result<Target>
where R: tokio::io::AsyncRead + Unpin
{
    let mut atyp = [0u8; 1];
    s.read_exact(&mut atyp).await?;
    match atyp[0] {
        ATYP_IPV4 => {
            let mut o = [0u8; 4]; s.read_exact(&mut o).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            Ok(Target::Ip(IpAddr::V4(Ipv4Addr::from(o)), u16::from_be_bytes(p)))
        }
        ATYP_IPV6 => {
            let mut o = [0u8; 16]; s.read_exact(&mut o).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            Ok(Target::Ip(IpAddr::V6(Ipv6Addr::from(o)), u16::from_be_bytes(p)))
        }
        ATYP_DOMAIN => {
            let mut l = [0u8; 1]; s.read_exact(&mut l).await?;
            let mut name = vec![0u8; l[0] as usize];
            s.read_exact(&mut name).await?;
            let mut p = [0u8; 2]; s.read_exact(&mut p).await?;
            let domain = String::from_utf8(name)
                .map_err(|_| io::Error::new(io::ErrorKind::InvalidData,
                                            "non-utf8 domain"))?;
            Ok(Target::Domain(domain, u16::from_be_bytes(p)))
        }
        b => Err(io::Error::new(io::ErrorKind::InvalidData,
                                format!("bad atyp 0x{b:02x}"))),
    }
}

// ── Tests ────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use tokio::io::AsyncReadExt;

    /// SOCKS5 GREET + REQUEST (IPv4) → parsed Target::Ip.
    #[tokio::test]
    async fn socks5_handshake_ipv4() {
        let (mut client, mut server) = tokio::io::duplex(128);

        // Client side: drive the protocol.
        let driver = tokio::spawn(async move {
            // GREET — ver=5, 1 method, no-auth.
            client.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
            // Read server's method-select response: ver + method.
            let mut buf = [0u8; 2];
            client.read_exact(&mut buf).await.unwrap();
            assert_eq!(buf, [0x05, 0x00]);
            // REQUEST — ver=5, cmd=CONNECT, rsv=0, atyp=IPv4, 192.0.2.1:443.
            client.write_all(&[0x05, 0x01, 0x00, 0x01,
                               192, 0, 2, 1, 0x01, 0xbb]).await.unwrap();
        });

        let t = read_socks5_request(&mut server).await.unwrap();
        driver.await.unwrap();
        match t {
            Target::Ip(IpAddr::V4(a), port) => {
                assert_eq!(a.octets(), [192, 0, 2, 1]);
                assert_eq!(port, 443);
            }
            other => panic!("unexpected target: {other:?}"),
        }
    }

    /// SOCKS5 with domain ATYP.
    #[tokio::test]
    async fn socks5_handshake_domain() {
        let (mut client, mut server) = tokio::io::duplex(128);
        let driver = tokio::spawn(async move {
            client.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
            let mut buf = [0u8; 2];
            client.read_exact(&mut buf).await.unwrap();
            // REQUEST — domain "example.com" port 80.
            let mut req = vec![0x05, 0x01, 0x00, 0x03];
            req.push(11);
            req.extend_from_slice(b"example.com");
            req.extend_from_slice(&80u16.to_be_bytes());
            client.write_all(&req).await.unwrap();
        });
        let t = read_socks5_request(&mut server).await.unwrap();
        driver.await.unwrap();
        match t {
            Target::Domain(d, port) => {
                assert_eq!(d, "example.com");
                assert_eq!(port, 80);
            }
            other => panic!("unexpected target: {other:?}"),
        }
    }

    /// SOCKS5 with IPv6 ATYP.
    #[tokio::test]
    async fn socks5_handshake_ipv6() {
        let (mut client, mut server) = tokio::io::duplex(128);
        let driver = tokio::spawn(async move {
            client.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
            let mut buf = [0u8; 2];
            client.read_exact(&mut buf).await.unwrap();
            let mut req = vec![0x05, 0x01, 0x00, 0x04];
            // 2001:db8::1
            req.extend_from_slice(&[
                0x20, 0x01, 0x0d, 0xb8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x01,
            ]);
            req.extend_from_slice(&53u16.to_be_bytes());
            client.write_all(&req).await.unwrap();
        });
        let t = read_socks5_request(&mut server).await.unwrap();
        driver.await.unwrap();
        match t {
            Target::Ip(IpAddr::V6(a), port) => {
                assert_eq!(a, "2001:db8::1".parse::<Ipv6Addr>().unwrap());
                assert_eq!(port, 53);
            }
            other => panic!("unexpected target: {other:?}"),
        }
    }

    /// Rejected: SOCKS4 (wrong version byte).
    #[tokio::test]
    async fn socks5_rejects_socks4() {
        let (mut client, mut server) = tokio::io::duplex(128);
        let driver = tokio::spawn(async move {
            // SOCKS4 starts with 0x04.
            client.write_all(&[0x04, 0x01, 0x00, 0x50,
                               192, 0, 2, 1, 0]).await.unwrap();
        });
        let err = read_socks5_request(&mut server).await.unwrap_err();
        assert_eq!(err.kind(), io::ErrorKind::InvalidData);
        driver.await.unwrap();
    }

    /// Rejected: no acceptable auth method (we only offer no-auth).
    #[tokio::test]
    async fn socks5_rejects_auth_required() {
        let (mut client, mut server) = tokio::io::duplex(128);
        let driver = tokio::spawn(async move {
            // 1 method = USERNAME/PASSWORD (0x02). We don't support it.
            client.write_all(&[0x05, 0x01, 0x02]).await.unwrap();
            // Server should reply with NO_ACCEPTABLE_METHODS (0xFF).
            let mut reply = [0u8; 2];
            client.read_exact(&mut reply).await.unwrap();
            assert_eq!(reply, [0x05, 0xFF]);
        });
        let err = read_socks5_request(&mut server).await.unwrap_err();
        assert_eq!(err.kind(), io::ErrorKind::PermissionDenied);
        driver.await.unwrap();
    }

    /// Rejected: CMD other than CONNECT (we don't support BIND/UDP).
    #[tokio::test]
    async fn socks5_rejects_unsupported_cmd() {
        let (mut client, mut server) = tokio::io::duplex(128);
        let driver = tokio::spawn(async move {
            client.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
            let mut buf = [0u8; 2];
            client.read_exact(&mut buf).await.unwrap();
            // CMD = 0x03 (UDP ASSOCIATE). Not supported.
            client.write_all(&[0x05, 0x03, 0x00, 0x01,
                               192, 0, 2, 1, 0x01, 0xbb]).await.unwrap();
            // Server should reply with REP_COMMAND_NOT_SUPPORTED.
            let mut reply = [0u8; 10];
            client.read_exact(&mut reply).await.unwrap();
            assert_eq!(reply[0], 0x05);
            assert_eq!(reply[1], 0x07);  // REP_COMMAND_NOT_SUPPORTED
        });
        let err = read_socks5_request(&mut server).await.unwrap_err();
        assert_eq!(err.kind(), io::ErrorKind::Unsupported);
        driver.await.unwrap();
    }

    /// Envelope round-trip: encode each Target variant, parse it back,
    /// confirm equality.
    #[tokio::test]
    async fn target_envelope_round_trip_ipv4() {
        let original = Target::Ip(IpAddr::V4(Ipv4Addr::new(1, 2, 3, 4)), 65535);
        let env = encode_target(&original);
        let mut cursor = std::io::Cursor::new(env);
        let parsed = read_target(&mut cursor).await.unwrap();
        match (original, parsed) {
            (Target::Ip(a, p1), Target::Ip(b, p2)) => {
                assert_eq!(a, b);
                assert_eq!(p1, p2);
            }
            _ => panic!("variant mismatch"),
        }
    }

    #[tokio::test]
    async fn target_envelope_round_trip_ipv6() {
        let addr: Ipv6Addr = "fe80::1234:5678:90ab:cdef".parse().unwrap();
        let original = Target::Ip(IpAddr::V6(addr), 8443);
        let env = encode_target(&original);
        let mut cursor = std::io::Cursor::new(env);
        let parsed = read_target(&mut cursor).await.unwrap();
        match (original, parsed) {
            (Target::Ip(IpAddr::V6(a), p1), Target::Ip(IpAddr::V6(b), p2)) => {
                assert_eq!(a, b);
                assert_eq!(p1, p2);
            }
            _ => panic!("variant mismatch"),
        }
    }

    #[tokio::test]
    async fn target_envelope_round_trip_domain() {
        let original = Target::Domain("example.com".to_string(), 443);
        let env = encode_target(&original);
        let mut cursor = std::io::Cursor::new(env);
        let parsed = read_target(&mut cursor).await.unwrap();
        match (original, parsed) {
            (Target::Domain(d1, p1), Target::Domain(d2, p2)) => {
                assert_eq!(d1, d2);
                assert_eq!(p1, p2);
            }
            _ => panic!("variant mismatch"),
        }
    }

    /// Boundary: 255-byte domain name (the protocol's hard max).
    #[tokio::test]
    async fn target_envelope_max_length_domain() {
        let long = "a".repeat(255);
        let original = Target::Domain(long.clone(), 1);
        let env = encode_target(&original);
        // 1 (atyp) + 1 (len) + 255 (name) + 2 (port) = 259 bytes.
        assert_eq!(env.len(), 259);
        let mut cursor = std::io::Cursor::new(env);
        let parsed = read_target(&mut cursor).await.unwrap();
        if let Target::Domain(d, p) = parsed {
            assert_eq!(d.len(), 255);
            assert_eq!(d, long);
            assert_eq!(p, 1);
        } else {
            panic!("variant mismatch");
        }
    }

    /// Unknown ATYP byte → error.
    #[tokio::test]
    async fn target_envelope_unknown_atyp() {
        let bad = vec![0x99, 0, 0, 0, 0, 0, 0];
        let mut cursor = std::io::Cursor::new(bad);
        let err = read_target(&mut cursor).await.unwrap_err();
        assert_eq!(err.kind(), io::ErrorKind::InvalidData);
    }
}
