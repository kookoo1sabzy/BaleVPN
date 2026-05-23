//! End-to-end test for SOCKS5 → QUIC → loopback substrate → host TCP.
//!
//! Uses [`lktunnel::connect_loopback`] to wire two `LkTunnel`s by
//! in-process mpsc channels instead of a real LK Room. Brings up
//! SOCKS5 on one peer (via QUIC client) and `start_server` on the
//! other (which auto-spawns the QUIC stream acceptor). Then opens a
//! real TCP SOCKS5 client against the LAN-facing listener, requests
//! a connection to a `tokio::net::TcpListener` we control, and
//! verifies bidirectional bytes flow.
//!
//! What this covers:
//! - QUIC handshake actually completes over the loopback substrate
//!   (proves the `TunnelUdpSocket` AsyncUdpSocket bridge works).
//! - SOCKS5 handshake on the LAN-facing side.
//! - Target envelope on the QUIC stream.
//! - Stream-acceptor side opens host TCP and byte-copies.
//! - Bandwidth counters increment in both directions on both peers.

use std::net::SocketAddr;
use std::sync::Mutex;
use std::time::Duration;

use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

/// SSRF state is a process-wide atomic — concurrent tests racing on
/// it would see each other's settings. Serialize the tests that
/// touch SSRF behind this mutex so cargo's default multi-threaded
/// test runner doesn't interleave them.
static SSRF_TEST_LOCK: Mutex<()> = Mutex::new(());

#[tokio::test(flavor = "multi_thread")]
async fn socks5_over_quic_loopback_roundtrip() {
    let _ = env_logger::builder().is_test(true).try_init();
    let _ssrf_guard = SSRF_TEST_LOCK.lock().unwrap();
    // The test's echo server lives on 127.0.0.1, which the SSRF guard
    // (correctly) blocks in production. Disable for this test only.
    lktunnel::socks5_quic::set_ssrf_filter_enabled(false);

    // 1. Two tunnels wired by loopback. Both come back "Connected"
    //    so QUIC / SOCKS5 layers can be brought up immediately.
    let (a, b) = lktunnel::connect_loopback();

    // 2. Peer B = "server side". start_server() installs the
    //    userspace NAT and auto-spawns the QUIC stream acceptor.
    b.start_server().expect("start_server");

    // 3. Peer A = "client side". Enable SOCKS5 on an OS-assigned
    //    port. Bound on 0.0.0.0 — for the test, we connect via
    //    127.0.0.1 (same machine).
    let socks_port = tokio::time::timeout(
        Duration::from_secs(15),
        a.enable_socks5_server(0),
    )
    .await
    .expect("enable_socks5_server timed out")
    .expect("enable_socks5_server failed")
    .port();

    // 4. Stand up a real TCP "echo server" — the proxy target.
    //    Each accepted connection just byte-echoes until close.
    let echo = TcpListener::bind("127.0.0.1:0").await.unwrap();
    let echo_addr = echo.local_addr().unwrap();
    tokio::spawn(async move {
        loop {
            let Ok((mut conn, _)) = echo.accept().await else { break };
            tokio::spawn(async move {
                let mut buf = [0u8; 4096];
                loop {
                    let n = match conn.read(&mut buf).await {
                        Ok(0) | Err(_) => break,
                        Ok(n) => n,
                    };
                    if conn.write_all(&buf[..n]).await.is_err() { break; }
                }
            });
        }
    });

    // 5. Connect a SOCKS5 client to peer A's listener.
    let mut sock = TcpStream::connect(("127.0.0.1", socks_port)).await
        .expect("connect to socks5");

    // GREET: ver=5, 1 method, no-auth.
    sock.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
    let mut reply = [0u8; 2];
    sock.read_exact(&mut reply).await.unwrap();
    assert_eq!(reply, [0x05, 0x00], "method-select reply");

    // REQUEST: CONNECT, IPv4, target = echo_addr.
    let target_ip = match echo_addr {
        SocketAddr::V4(s) => *s.ip(),
        _ => panic!("expected v4 addr"),
    };
    let mut req = vec![0x05, 0x01, 0x00, 0x01];
    req.extend_from_slice(&target_ip.octets());
    req.extend_from_slice(&echo_addr.port().to_be_bytes());
    sock.write_all(&req).await.unwrap();

    // SOCKS5 reply: ver=5, rep=0 (succeeded), rsv=0, atyp=IPv4, addr (4), port (2).
    let mut socks_reply = [0u8; 10];
    sock.read_exact(&mut socks_reply).await.unwrap();
    assert_eq!(socks_reply[0], 0x05, "reply version");
    assert_eq!(socks_reply[1], 0x00, "reply succeeded");
    assert_eq!(socks_reply[3], 0x01, "reply ATYP IPv4");

    // 6. Round-trip a payload through the tunnel.
    let payload = b"hello-over-quic-over-loopback";
    sock.write_all(payload).await.unwrap();
    let mut echoed = vec![0u8; payload.len()];
    tokio::time::timeout(
        Duration::from_secs(10),
        sock.read_exact(&mut echoed),
    )
    .await
    .expect("round-trip timed out")
    .expect("read_exact failed");
    assert_eq!(echoed, payload, "round-trip bytes mismatch");

    // 7. Counters should have moved on BOTH tunnels (one per direction).
    //    rx on the server side, tx on the client side, etc.
    let stats_a = a.stats();
    let stats_b = b.stats();
    log::info!("stats A (client/SOCKS5): rx_pkts={} rx_bytes={} tx_pkts={} tx_bytes={}",
               stats_a[0], stats_a[1], stats_a[2], stats_a[3]);
    log::info!("stats B (server/host):   rx_pkts={} rx_bytes={} tx_pkts={} tx_bytes={}",
               stats_b[0], stats_b[1], stats_b[2], stats_b[3]);
    assert!(stats_a[3] > 0, "peer A tx_bytes should be non-zero (QUIC datagrams out)");
    assert!(stats_a[1] > 0, "peer A rx_bytes should be non-zero (echo reply back)");
    assert!(stats_b[1] > 0, "peer B rx_bytes should be non-zero (QUIC datagrams in)");
    assert!(stats_b[3] > 0, "peer B tx_bytes should be non-zero (echo reply back to A)");

    // 8. Tear down — disable_socks5 + drop tunnels.
    a.disable_socks5_server();
    drop(sock);
    drop(a);
    drop(b);
}

#[tokio::test(flavor = "multi_thread")]
async fn enable_socks5_twice_errors() {
    let _ = env_logger::builder().is_test(true).try_init();
    let (a, b) = lktunnel::connect_loopback();
    b.start_server().unwrap();
    let _port = tokio::time::timeout(
        Duration::from_secs(15),
        a.enable_socks5_server(0),
    )
    .await
    .expect("first enable timed out")
    .expect("first enable failed");
    // Second enable should reject.
    let err = a.enable_socks5_server(0).await.unwrap_err();
    assert!(matches!(err,
        lktunnel::socks5_quic::Socks5Error::AlreadyEnabled),
        "expected AlreadyEnabled, got {err:?}");
    a.disable_socks5_server();
    drop(a); drop(b);
}

#[tokio::test(flavor = "multi_thread")]
async fn disable_socks5_is_idempotent() {
    let (a, b) = lktunnel::connect_loopback();
    b.start_server().unwrap();
    // Call disable without ever enabling — must not panic.
    a.disable_socks5_server();
    a.disable_socks5_server();
    drop(a); drop(b);
}

/// SSRF guard test: with the filter enabled (production default),
/// a SOCKS5 client trying to reach 127.0.0.1 gets a
/// `REP_RULESET_BLOCKED` (0x02) reply instead of a connection.
#[tokio::test(flavor = "multi_thread")]
async fn ssrf_filter_blocks_loopback_target() {
    let _ = env_logger::builder().is_test(true).try_init();
    let _ssrf_guard = SSRF_TEST_LOCK.lock().unwrap();
    // Force the filter on (other tests may have toggled it off).
    lktunnel::socks5_quic::set_ssrf_filter_enabled(true);

    let (a, b) = lktunnel::connect_loopback();
    b.start_server().unwrap();
    let port = tokio::time::timeout(
        Duration::from_secs(15),
        a.enable_socks5_server(0),
    )
    .await
    .expect("enable timed out")
    .expect("enable failed")
    .port();

    let mut sock = TcpStream::connect(("127.0.0.1", port)).await.unwrap();
    sock.write_all(&[0x05, 0x01, 0x00]).await.unwrap();
    let mut reply = [0u8; 2];
    sock.read_exact(&mut reply).await.unwrap();
    assert_eq!(reply, [0x05, 0x00]);

    // CONNECT to 127.0.0.1:1234 — should be blocked by the filter.
    let req = &[
        0x05, 0x01, 0x00, 0x01,
        127, 0, 0, 1,
        0x04, 0xd2, // port 1234
    ];
    sock.write_all(req).await.unwrap();
    let mut socks_reply = [0u8; 10];
    sock.read_exact(&mut socks_reply).await.unwrap();
    assert_eq!(socks_reply[0], 0x05, "reply version");
    assert_eq!(socks_reply[1], 0x02, "expected REP_RULESET_BLOCKED, got 0x{:02x}", socks_reply[1]);

    a.disable_socks5_server();
    drop(a); drop(b);
}
