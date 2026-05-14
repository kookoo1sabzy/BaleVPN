//! Userspace TCP/UDP NAT — the in-process replacement for kernel TUN +
//! iptables on platforms where we can't run as root (Android server
//! mode). One `NatDispatcher` per connected peer; per-flow `TcpSession`
//! / `UdpSession` instances handle the actual TCP state machine /
//! UDP relay.
//!
//! Platform-agnostic: uses `libc::socket` for the host sockets and
//! the shared dispatcher (`crate::dispatcher`) for poll registration
//! and task scheduling. Talked to from Kotlin via a thin JNI surface
//! in `lktunnel-android::server`.

pub mod debug;
pub mod dispatcher;
pub mod filter;
pub mod flow_key;
pub mod ip_addr;
pub mod ip_packet;
pub mod tcp_session;
pub mod udp_session;
pub(crate) mod sweep;

pub use debug::{debug_enabled, set_debug};
pub use dispatcher::{EmitFn, NatDispatcher, Stats};
pub use flow_key::{FlowKey, L4};
pub use ip_addr::{Family, IpAddr};

/// Monotonic millisecond clock used throughout the NAT layer. Wraps
/// every ~49 days but no TCP session lives that long, so we don't
/// bother with PAWS.
pub fn now_ms() -> u32 {
    static START: once_cell::sync::Lazy<std::time::Instant> =
        once_cell::sync::Lazy::new(std::time::Instant::now);
    START.elapsed().as_millis() as u32
}

/// Log the kernel-assigned source IP+port on a connected socket. Used
/// after `connect()` to verify which underlying interface the host
/// socket is bound to — if the app's UID gets routed via cellular
/// while shell-UID uses WiFi, the source IPs will differ and explain
/// asymmetric throughput between app traffic and `adb shell curl`.
pub fn log_local_sockname(tag: &str, fd: i32, dst: &IpAddr, dst_port: u16, proto: &str) {
    let mut sa: libc::sockaddr_in = unsafe { std::mem::zeroed() };
    let mut len: libc::socklen_t = std::mem::size_of::<libc::sockaddr_in>() as libc::socklen_t;
    let rc = unsafe {
        libc::getsockname(fd, &mut sa as *mut libc::sockaddr_in as *mut libc::sockaddr, &mut len)
    };
    if rc != 0 {
        let errno = crate::errno();
        crate::nat_log!(target: tag, "{proto} host-bind dst={dst}:{dst_port} getsockname errno={errno}");
        return;
    }
    let src_be = sa.sin_addr.s_addr;
    let src_port = u16::from_be(sa.sin_port);
    let b = src_be.to_ne_bytes();
    crate::nat_log!(target: tag,
        "{proto} host-bind dst={dst}:{dst_port} src={}.{}.{}.{}:{src_port}",
        b[0], b[1], b[2], b[3]);
}
