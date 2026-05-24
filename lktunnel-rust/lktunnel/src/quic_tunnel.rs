//! QUIC carrier built on top of [`crate::LkTunnel`].
//!
//! quinn (the rustls-based QUIC implementation) ordinarily talks to a
//! real UDP socket. This module supplies a [`quinn::AsyncUdpSocket`]
//! impl that **bridges quinn's datagrams onto the existing LK
//! lossy-RTP carrier**, tagged with [`crate::FRAME_TYPE_QUIC`]. The
//! receiver side is fed by `dispatch_payload` in `lib.rs`, which
//! routes `'Q'`-tagged frames into the per-tunnel
//! `quic_rx_tx` channel.
//!
//! Net effect: quinn's ARQ + congestion control + stream multiplexing
//! sit *above* the lossy RTP substrate, turning it into a
//! reliable, multi-stream transport — the same shape kulikov0's
//! `SequencedTunnel` + custom mux gives them on VP8, but built from
//! quinn instead of hand-rolled.
//!
//! ## Architecture
//!
//! ```text
//!   quinn::Endpoint
//!         │
//!         ▼  send/recv UDP datagrams
//!   TunnelUdpSocket  (this file)
//!         │
//!         ├── outbound:  LkTunnel::send_quic_datagram()  →  'Q'-tagged frame  →  RTP/Opus  →  SFU
//!         └── inbound:   <-  'Q'-tagged frame  ←  RTP/Opus  ←  SFU  ← (quic_rx_tx mpsc)
//! ```
//!
//! ## Single-peer model
//!
//! Each `LkTunnel` connects two and only two peers. quinn's
//! [`AsyncUdpSocket`] is built around the abstraction of sending to /
//! receiving from many remote addresses, but we only ever ferry to
//! the one peer on the other end of the LK channel. We fake the
//! peer's address as `0.0.0.0:1` (any consistent, non-loopback
//! sentinel works — the address is never put on a real wire). All
//! sends are routed to the LK channel regardless of `dst`; all
//! received datagrams are reported as arriving from the same fake
//! peer address.
//!
//! ## MTU budget
//!
//! Opus' per-frame payload ceiling is **1275 bytes** (RFC 6716,
//! enforced by `rtp::MAX_FRAME_BYTES`). Each packed packet inside a
//! frame costs 1 byte (frame-type tag) + 2 bytes (length prefix when
//! the send task batches multiple packets), so a quinn datagram has
//! at most **1272 bytes** of headroom on its own and meaningfully
//! less if it shares the frame with `'I'`-tagged IP packets.
//!
//! When `enable_quic_*` constructs the quinn `Endpoint` (stage 2),
//! it should set:
//!
//! ```ignore
//! let mut tc = quinn::TransportConfig::default();
//! tc.initial_mtu(1100);                    // leave room for packing
//! tc.max_udp_payload_size(1200)?;          // hard cap
//! tc.mtu_discovery_config(None);           // virtual path, no PMTUD
//! ```
//!
//! quinn's default initial MTU is 1200 with PMTU discovery up to
//! ~1452. PMTUD probes would just fail on this transport (the SFU
//! isn't a real network path that ICMPs back), so disable it.
//!
//! ## Stage 1 status
//!
//! This module ships the **carrier foundation only**. The actual
//! `enable_quic_server` / `connect_quic_to_peer` API on `LkTunnel`,
//! plus the SOCKS5-over-QUIC pipe, land in later stages.

use std::io;
use std::net::{IpAddr, Ipv4Addr, SocketAddr};
use std::pin::Pin;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, Ordering};
use std::task::{Context, Poll};

use bytes::Bytes;
use parking_lot::Mutex;

use crate::{LkTunnel, SendError, FRAME_TYPE_QUIC};

/// Capacity of the inbound datagram queue (channel from
/// `dispatch_payload` to the AsyncUdpSocket's `poll_recv`). A
/// burst that exceeds this overflows like a UDP socket buffer would
/// — quinn handles real loss via ARQ.
pub const QUIC_RX_QUEUE_CAP: usize = 1024;

/// Sentinel "remote address" for the single peer on the other side
/// of an LK channel. Never goes on a real wire — quinn just uses it
/// to key connections/streams in its internal maps.
pub fn peer_sentinel_addr() -> SocketAddr {
    SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 1)), 1)
}

/// Local "bind" address reported back to quinn. Same sentinel idea;
/// never on a real wire.
pub fn local_sentinel_addr() -> SocketAddr {
    SocketAddr::new(IpAddr::V4(Ipv4Addr::new(0, 0, 0, 2)), 1)
}

/// A [`quinn::AsyncUdpSocket`] that ferries every datagram through an
/// `LkTunnel`. Holds a weak reference to the inner so a tunnel
/// disconnect releases the socket cleanly; held strongly inside the
/// socket only during the synchronous send call.
pub struct TunnelUdpSocket {
    inner: Mutex<TunnelUdpSocketInner>,
}

impl std::fmt::Debug for TunnelUdpSocket {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TunnelUdpSocket").finish_non_exhaustive()
    }
}

struct TunnelUdpSocketInner {
    /// The LK tunnel we forward datagrams through. We hold a strong
    /// `LkTunnel` (which is itself a cheap Arc clone) — when the
    /// quinn endpoint is dropped, this socket is dropped, the
    /// tunnel reference goes with it.
    tunnel: LkTunnel,
    /// Receiver end of the per-tunnel QUIC inbound channel. The
    /// matching sender lives in `LkTunnel::Inner::quic_rx_tx` and is
    /// installed by `enable_quic_*` (stage 2). `dispatch_payload`
    /// produces into the sender; we consume here.
    rx: tokio::sync::mpsc::Receiver<Bytes>,
    /// Flagged on drop / close — short-circuits future sends so quinn
    /// doesn't keep retrying on a dead tunnel.
    closed: Arc<AtomicBool>,
}

impl TunnelUdpSocket {
    /// Build a new socket that ferries datagrams through `tunnel`.
    /// `rx` is the receiver half of the channel whose sender was
    /// installed on the tunnel via `enable_quic_*`. Together they
    /// turn the LK tunnel into a UDP-shaped transport quinn can
    /// drive.
    pub fn new(tunnel: LkTunnel, rx: tokio::sync::mpsc::Receiver<Bytes>) -> Arc<Self> {
        Arc::new(Self {
            inner: Mutex::new(TunnelUdpSocketInner {
                tunnel,
                rx,
                closed: Arc::new(AtomicBool::new(false)),
            }),
        })
    }
}

impl quinn::AsyncUdpSocket for TunnelUdpSocket {
    fn create_io_poller(self: Arc<Self>) -> Pin<Box<dyn quinn::UdpPoller>> {
        // Park on `LkTunnel::on_send_drained` — the same one-shot
        // wakeup the TUN bridge uses when the LK send queue is full.
        // Returning Ready unconditionally (the old behaviour) caused
        // quinn to busy-loop on try_send → WouldBlock → poll_writable
        // → ready → repeat whenever the queue saturated.
        let tunnel = self.inner.lock().tunnel.clone();
        Box::pin(DrainPoller { tunnel })
    }

    fn try_send(&self, transmit: &quinn::udp::Transmit) -> io::Result<()> {
        let inner = self.inner.lock();
        if inner.closed.load(Ordering::Acquire) {
            return Err(io::Error::new(io::ErrorKind::NotConnected,
                                      "quic tunnel socket closed"));
        }
        // Prepend the 'Q' frame tag so `dispatch_payload` on the peer
        // side knows to route this to the QUIC rx channel rather than
        // inject_inbound_ip.
        let payload = transmit.contents;
        let mut buf = Vec::with_capacity(1 + payload.len());
        buf.push(FRAME_TYPE_QUIC);
        buf.extend_from_slice(payload);
        let plen = payload.len();
        match inner.tunnel.send_raw_frame(buf, plen) {
            Ok(())                       => Ok(()),
            Err(SendError::Backpressure) =>
                Err(io::Error::new(io::ErrorKind::WouldBlock,
                                   "lk tunnel send queue full")),
            Err(SendError::NotConnected) =>
                Err(io::Error::new(io::ErrorKind::NotConnected,
                                   "lk tunnel disconnected")),
            Err(SendError::Invalid) =>
                Err(io::Error::new(io::ErrorKind::InvalidInput,
                                   "lk tunnel rejected payload")),
        }
    }

    fn poll_recv(
        &self,
        cx:    &mut Context<'_>,
        bufs:  &mut [io::IoSliceMut<'_>],
        meta:  &mut [quinn::udp::RecvMeta],
    ) -> Poll<io::Result<usize>> {
        let mut inner = self.inner.lock();
        if inner.closed.load(Ordering::Acquire) {
            return Poll::Ready(Err(io::Error::new(io::ErrorKind::NotConnected,
                                                  "quic tunnel socket closed")));
        }
        if bufs.is_empty() || meta.is_empty() {
            return Poll::Ready(Ok(0));
        }
        // Drain as many queued datagrams as fit in the caller's
        // slots — quinn batches recvs for throughput.
        let mut filled = 0;
        while filled < bufs.len() && filled < meta.len() {
            match inner.rx.poll_recv(cx) {
                Poll::Ready(Some(bytes)) => {
                    let dst = &mut bufs[filled];
                    if bytes.len() > dst.len() {
                        // quinn's recv buffers are sized to `EndpointConfig
                        // .max_udp_payload_size` (we set 1200). A bigger
                        // datagram means an upstream sender or a stray
                        // 'Q'-tagged frame from elsewhere exceeded our
                        // negotiated MTU. Drop the datagram with a
                        // warning rather than silently truncate — a
                        // partial QUIC packet would just be discarded by
                        // quinn's parser anyway.
                        log::warn!("quic recv: oversized datagram \
                                    ({} > {}) — dropping", bytes.len(), dst.len());
                        continue;
                    }
                    let n = bytes.len();
                    dst[..n].copy_from_slice(&bytes);
                    meta[filled] = quinn::udp::RecvMeta {
                        addr:    peer_sentinel_addr(),
                        len:     n,
                        stride:  n,
                        ecn:     None,
                        dst_ip:  Some(local_sentinel_addr().ip()),
                    };
                    filled += 1;
                }
                Poll::Ready(None) => {
                    // Sender dropped — tunnel is going away. Return
                    // what we've got; further polls will report EOF.
                    if filled == 0 {
                        return Poll::Ready(Err(io::Error::new(
                            io::ErrorKind::NotConnected,
                            "quic tunnel rx channel closed")));
                    }
                    break;
                }
                Poll::Pending => {
                    if filled == 0 {
                        return Poll::Pending;
                    }
                    break;
                }
            }
        }
        Poll::Ready(Ok(filled))
    }

    fn local_addr(&self) -> io::Result<SocketAddr> {
        Ok(local_sentinel_addr())
    }

    fn max_transmit_segments(&self) -> usize { 1 }
    fn max_receive_segments(&self) -> usize { 1 }
    fn may_fragment(&self)          -> bool  { false }
}

/// quinn calls `poll_writable` before each send attempt. With the
/// previous always-ready impl, a saturated LK send queue caused a
/// tight loop: try_send → WouldBlock → poll_writable → ready →
/// retry → still full → spin. This impl parks on
/// `LkTunnel::on_send_drained`, which fires the registered callback
/// either inline (queue has capacity right now) or once a slot frees.
struct DrainPoller {
    tunnel: crate::LkTunnel,
}

impl std::fmt::Debug for DrainPoller {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("DrainPoller").finish_non_exhaustive()
    }
}

impl quinn::UdpPoller for DrainPoller {
    fn poll_writable(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<()>> {
        // Register a one-shot drain waiter. `on_send_drained` fires
        // the callback **inline** if the queue already has free
        // capacity, so the `fired` flag flips to true synchronously
        // in the common case and we return Ready without spinning.
        use std::sync::atomic::AtomicBool;
        let fired = Arc::new(AtomicBool::new(false));
        let waker = cx.waker().clone();
        let fc = fired.clone();
        self.tunnel.on_send_drained(move || {
            fc.store(true, Ordering::Release);
            waker.wake();
        });
        if fired.load(Ordering::Acquire) {
            Poll::Ready(Ok(()))
        } else {
            Poll::Pending
        }
    }
}

// ── Transport / crypto config ─────────────────────────────────────────

/// Tuned for the Opus-frame substrate: cap at 1200-byte UDP payloads
/// so each datagram fits in an Opus frame alongside the 1-byte 'Q'
/// tag + 2-byte packing length prefix (1200 + 3 = 1203 ≤ 1275).
/// Disable PMTU discovery — there's no real path to probe.
fn transport_config() -> Arc<quinn::TransportConfig> {
    let mut tc = quinn::TransportConfig::default();
    // Cap the initial MTU below Opus' 1275-byte ceiling and disable
    // PMTU discovery — the virtual path has no ICMP, probes can't
    // succeed. The hard cap actually lives on EndpointConfig
    // (`max_udp_payload_size`); this just keeps the connection's
    // initial-send choice consistent.
    tc.initial_mtu(1100);
    tc.mtu_discovery_config(None);
    // Keep the QUIC connection alive across idle stretches so that
    // toggling SOCKS5 on / making a fresh request after a quiet
    // period doesn't pay a full handshake again. PING every 15s is
    // well under the 60s idle ceiling; if a peer goes truly silent
    // (process killed, network gone) the timeout still fires and
    // cleans up so we don't leak connections.
    tc.keep_alive_interval(Some(std::time::Duration::from_secs(15)));
    tc.max_idle_timeout(Some(
        quinn::IdleTimeout::try_from(std::time::Duration::from_secs(60))
            .expect("60s idle timeout fits VarInt")));
    // ── Flow control windows ─────────────────────────────────────
    //
    // Tied to the carrier's natural buffer size — `SEND_QUEUE_CAP`
    // frames of up to `MAX_FRAME_BYTES` bytes each. quinn shouldn't
    // stage more bytes than the carrier can physically hold in
    // flight; if it does, the TCP layer above sees write()s succeed
    // before bytes leave the device and tools like fast.com report
    // inflated upload speeds while the buffer drains.
    //
    // No magic constants here — these derive from the existing
    // shared upper bounds. Tune the *carrier* (SEND_QUEUE_CAP) and
    // these follow automatically.
    let carrier_buffer = (crate::SEND_QUEUE_CAP * crate::rtp::MAX_FRAME_BYTES) as u32;
    tc.stream_receive_window(quinn::VarInt::from_u32(carrier_buffer).into());
    // Per-connection receive sums across all streams; allow a few
    // concurrent flows to share the same connection without one
    // starving the others.
    tc.receive_window       (quinn::VarInt::from_u32(carrier_buffer * 4).into());
    // Local send window — quinn's outgoing buffer before
    // SendStream::write blocks. Same bound — we won't stage more
    // locally than the carrier can ship.
    tc.send_window          (carrier_buffer as u64);
    Arc::new(tc)
}

/// Build a [`quinn::ServerConfig`] backed by a fresh, throwaway
/// self-signed certificate. The outer LK channel already provides
/// peer identity (only the two Bale callers can talk), so the QUIC
/// TLS layer's cert validation is functionally redundant — we just
/// need *a* cert to satisfy TLS 1.3's protocol requirement.
pub fn make_server_config() -> Result<quinn::ServerConfig, QuicConfigError> {
    use rustls::pki_types::{CertificateDer, PrivateKeyDer, PrivatePkcs8KeyDer};

    let rcgen::CertifiedKey { cert, key_pair } =
        rcgen::generate_simple_self_signed(vec!["lktunnel".to_string()])
            .map_err(|e| QuicConfigError::Cert(e.to_string()))?;
    let cert_der: CertificateDer<'static> = cert.der().clone();
    let key_pkcs8: PrivatePkcs8KeyDer<'static> =
        PrivatePkcs8KeyDer::from(key_pair.serialize_der());
    let key_der: PrivateKeyDer<'static> = PrivateKeyDer::Pkcs8(key_pkcs8);

    let mut server = quinn::ServerConfig::with_single_cert(vec![cert_der], key_der)
        .map_err(|e| QuicConfigError::Crypto(e.to_string()))?;
    server.transport_config(transport_config());
    Ok(server)
}

/// Build a [`quinn::ClientConfig`] that **skips certificate
/// verification entirely**. Safe in this context because the LK
/// transport authenticates the peer (only the two Bale callers can
/// talk), so the QUIC TLS layer's cert validation would be a
/// redundant identity check at best.
pub fn make_client_config() -> Result<quinn::ClientConfig, QuicConfigError> {
    let crypto = rustls::ClientConfig::builder()
        .dangerous()
        .with_custom_certificate_verifier(Arc::new(SkipServerVerify::new()))
        .with_no_client_auth();
    let quic_crypto = quinn::crypto::rustls::QuicClientConfig::try_from(crypto)
        .map_err(|e| QuicConfigError::Crypto(e.to_string()))?;
    let mut client = quinn::ClientConfig::new(Arc::new(quic_crypto));
    client.transport_config(transport_config());
    Ok(client)
}

/// Configuration error surfaced by [`make_server_config`] /
/// [`make_client_config`]. Just a string envelope around rcgen /
/// rustls error types — the caller has nothing to recover from
/// beyond logging.
#[derive(Debug)]
pub enum QuicConfigError {
    Cert(String),
    Crypto(String),
}

impl std::fmt::Display for QuicConfigError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Cert(s)   => write!(f, "quic cert: {s}"),
            Self::Crypto(s) => write!(f, "quic crypto: {s}"),
        }
    }
}

impl std::error::Error for QuicConfigError {}

/// rustls [`ServerCertVerifier`] that approves every certificate.
/// Used on the client side to bypass cert validation — the outer
/// LK channel does the real authentication.
#[derive(Debug)]
struct SkipServerVerify {
    /// rustls insists on a list of supported signature algorithms;
    /// pull from the default crypto provider's list.
    provider: Arc<rustls::crypto::CryptoProvider>,
}

impl SkipServerVerify {
    fn new() -> Self {
        Self { provider: rustls::crypto::ring::default_provider().into() }
    }
}

impl rustls::client::danger::ServerCertVerifier for SkipServerVerify {
    fn verify_server_cert(
        &self,
        _end_entity:        &rustls::pki_types::CertificateDer<'_>,
        _intermediates:     &[rustls::pki_types::CertificateDer<'_>],
        _server_name:       &rustls::pki_types::ServerName<'_>,
        _ocsp_response:     &[u8],
        _now:               rustls::pki_types::UnixTime,
    ) -> Result<rustls::client::danger::ServerCertVerified, rustls::Error> {
        Ok(rustls::client::danger::ServerCertVerified::assertion())
    }

    fn verify_tls12_signature(
        &self,
        _message: &[u8],
        _cert:    &rustls::pki_types::CertificateDer<'_>,
        _dss:     &rustls::DigitallySignedStruct,
    ) -> Result<rustls::client::danger::HandshakeSignatureValid, rustls::Error> {
        Ok(rustls::client::danger::HandshakeSignatureValid::assertion())
    }

    fn verify_tls13_signature(
        &self,
        _message: &[u8],
        _cert:    &rustls::pki_types::CertificateDer<'_>,
        _dss:     &rustls::DigitallySignedStruct,
    ) -> Result<rustls::client::danger::HandshakeSignatureValid, rustls::Error> {
        Ok(rustls::client::danger::HandshakeSignatureValid::assertion())
    }

    fn supported_verify_schemes(&self) -> Vec<rustls::SignatureScheme> {
        self.provider.signature_verification_algorithms.supported_schemes()
    }
}

// ── Endpoint construction ─────────────────────────────────────────────

/// Handle returned by [`crate::LkTunnel::enable_quic_server`]. Hold
/// onto this for the lifetime of the QUIC service; dropping it tears
/// down the endpoint and closes all live connections. Use
/// `endpoint.accept().await` to receive incoming peer connections.
pub struct QuicServer {
    pub endpoint: quinn::Endpoint,
}

/// Handle returned by [`crate::LkTunnel::connect_quic_to_peer`]. The
/// `connection` is already established; open streams via
/// `connection.open_bi().await` or accept them via
/// `connection.accept_bi().await`.
pub struct QuicClient {
    /// Held purely to keep the endpoint alive — dropping the
    /// [`quinn::Endpoint`] tears down the underlying socket and
    /// closes the connection. Never read directly.
    #[allow(dead_code)]
    pub endpoint:   quinn::Endpoint,
    pub connection: quinn::Connection,
}

/// Background task: monitors the current `QuicClient.connection`
/// for closure (idle timeout, peer crash, network blip) and re-runs
/// `connect_quic_to_peer` with exponential backoff to bring up a
/// fresh client. Lives for the tunnel's lifetime; exits when the
/// Weak ref to `TunnelInner` upgrades to None (tunnel torn down).
///
/// Spawned by [`crate::LkTunnel::ensure_quic_client`] on first
/// successful connect.
pub(crate) async fn keeper_task(
    weak: std::sync::Weak<crate::TunnelInner>,
) {
    // Weak-only — must NOT hold a strong `LkTunnel` across
    // awaits or the explicit `disconnect()` path can't drop
    // `Inner` (the keeper's strong ref would keep it alive
    // until the keeper's next iteration, contending with the
    // stats poller on the LkTunnel-instance @Synchronized lock
    // on the Kotlin side and causing the Service onStartCommand
    // path to ANR).
    use std::time::Duration;
    loop {
        // Get the current connection's `closed()` future. The
        // future resolves to a `ConnectionError` when the
        // connection enters Closed / Drained.
        let conn = {
            let Some(inner) = weak.upgrade() else { return };
            let client = inner.quic_client.lock().clone();
            client.map(|c| c.connection.clone())
        };
        let Some(conn) = conn else { return };

        let reason = conn.closed().await;
        // Drop the connection clone before any further work so
        // `quic_client.take()` is the last strong ref.
        drop(conn);
        log::warn!("quic: connection closed ({reason}) — reconnecting");

        // Drop the stale client / channel so connect_quic_to_peer
        // can install fresh ones (it errors AlreadyExists otherwise).
        {
            let Some(inner) = weak.upgrade() else { return };
            *inner.quic_client.lock() = None;
            *inner.quic_rx_tx.lock()  = None;
        }

        // Reconnect with capped exponential backoff. Capped because
        // a perma-broken path shouldn't grow the delay unboundedly —
        // 30s ceiling keeps recovery fast once the underlying issue
        // clears.
        let mut backoff = Duration::from_millis(500);
        loop {
            // Upgrade-then-construct an LkTunnel for the
            // duration of the connect call. The upgrade pins
            // the inner for that call only; the strong ref is
            // dropped before the next sleep so an explicit
            // disconnect can free Inner immediately.
            let Some(inner) = weak.upgrade() else { return };
            let tunnel = crate::LkTunnel { inner };
            let connect_result = tunnel.connect_quic_to_peer().await;
            drop(tunnel);

            match connect_result {
                Ok(client) => {
                    let Some(inner) = weak.upgrade() else { return };
                    *inner.quic_client.lock() = Some(std::sync::Arc::new(client));
                    log::info!("quic: reconnected");
                    break;
                }
                Err(e) => {
                    log::warn!("quic: reconnect failed: {e} — retry in {backoff:?}");
                    if let Some(inner) = weak.upgrade() {
                        *inner.quic_rx_tx.lock() = None;
                    }
                    tokio::time::sleep(backoff).await;
                    backoff = (backoff * 2).min(Duration::from_secs(30));
                }
            }
        }
    }
}

/// Combined error type for the QUIC endpoint API. Wraps the various
/// types quinn / rustls / our config helpers can return so callers
/// have a single match arm.
#[derive(Debug)]
pub enum QuicEndpointError {
    Config(QuicConfigError),
    Io(io::Error),
    Connect(quinn::ConnectError),
    Connection(quinn::ConnectionError),
}

impl std::fmt::Display for QuicEndpointError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Config(e)     => write!(f, "{e}"),
            Self::Io(e)         => write!(f, "quic io: {e}"),
            Self::Connect(e)    => write!(f, "quic connect: {e}"),
            Self::Connection(e) => write!(f, "quic connection: {e}"),
        }
    }
}

impl std::error::Error for QuicEndpointError {}

impl From<QuicConfigError>       for QuicEndpointError { fn from(e: QuicConfigError) -> Self { Self::Config(e) } }
impl From<io::Error>             for QuicEndpointError { fn from(e: io::Error) -> Self { Self::Io(e) } }
impl From<quinn::ConnectError>   for QuicEndpointError { fn from(e: quinn::ConnectError) -> Self { Self::Connect(e) } }
impl From<quinn::ConnectionError> for QuicEndpointError { fn from(e: quinn::ConnectionError) -> Self { Self::Connection(e) } }

/// Build a quinn::Endpoint backed by a [`TunnelUdpSocket`] over
/// `tunnel`. The caller has already obtained the receiver side of
/// the per-tunnel inbound datagram channel (`rx`) and installed the
/// matching sender into `tunnel.inner.quic_rx_tx`. Pass
/// `Some(server_config)` to enable accepting incoming connections;
/// pass `None` for client-only mode (will need
/// `endpoint.set_default_client_config(...)` before connect).
pub fn build_endpoint(
    tunnel:        crate::LkTunnel,
    rx:            tokio::sync::mpsc::Receiver<bytes::Bytes>,
    server_config: Option<quinn::ServerConfig>,
) -> Result<quinn::Endpoint, QuicEndpointError> {
    let socket = TunnelUdpSocket::new(tunnel, rx);
    let mut endpoint_config = quinn::EndpointConfig::default();
    // Mirror the per-connection MTU cap. EndpointConfig also enforces
    // a payload-size ceiling that's checked separately from
    // TransportConfig — both have to agree.
    let _ = endpoint_config.max_udp_payload_size(1200);
    let runtime: Arc<dyn quinn::Runtime> = Arc::new(quinn::TokioRuntime);
    // `Endpoint::new_with_abstract_socket` spawns an internal driver
    // task via `tokio::spawn`, which requires a current tokio runtime.
    // Most callers (JNI `nativeStartServer`, napi sync `start_server`)
    // hit this from a non-tokio thread — without the explicit `enter`,
    // quinn panics with "there is no reactor running" and the panic
    // becomes a SIGABRT before the caller sees the error. Entering the
    // shared lktunnel runtime here works from any context (no-op when
    // already inside one, sets ours when called from a plain thread).
    let _rt_guard = crate::runtime().enter();
    let endpoint = quinn::Endpoint::new_with_abstract_socket(
        endpoint_config,
        server_config,
        socket,
        runtime,
    )?;
    Ok(endpoint)
}
