//! Destination-address policy for outbound NAT.
//!
//! Stops tunneled clients from reaching IP ranges that don't make
//! sense to proxy on the server's behalf — chief among them:
//!
//!   - **Cloud metadata** (`169.254.169.254` on AWS / GCP / Azure /
//!     OpenStack; also Oracle's `192.0.0.192`). Reaching this from a
//!     hostile tunneled client = trivial SSRF → instance-creds disclosure.
//!   - **Loopback** (`127.0.0.0/8`, `::1`). A tunneled client probing
//!     local services on the server's loopback is not a connectivity
//!     feature; it's an attack surface.
//!   - **Link-local** (`169.254.0.0/16`, `fe80::/10`). Includes cloud
//!     metadata on every major provider; also generally not what a
//!     remote client wants to reach.
//!   - **Broadcast / multicast / "this network"** — no useful TCP/UDP
//!     proxy semantics; easy way to bait the kernel into weird
//!     behaviour (broadcast amplification, multicast loops).
//!   - **IPv6 ULA** (`fc00::/7`). Treat like RFC1918 — operator-LAN
//!     ranges that shouldn't be accidentally reachable.
//!
//! Not blocked by default: RFC1918 (`10/8`, `172.16/12`, `192.168/16`).
//! Server operators with intentional local-LAN access need them, and
//! the tunnel's own subnet is a subset. The right place to layer that
//! is a per-deployment denylist, not a hardcoded default.
//!
//! Called from the NAT host-socket open path (`tcp_session::open_host_socket`,
//! `udp_session::open`) before the `TcpStream::connect` / `UdpSocket::connect`
//! actually fires. Failing here surfaces to the tunneled client as a
//! RST / no-response, same shape they'd see if the kernel rejected
//! the connection.

use std::net::{IpAddr, Ipv4Addr, Ipv6Addr};

/// `true` if outbound NAT should refuse to open a host socket to this
/// destination. Apply at SYN time for TCP and at first send time for
/// UDP.
#[inline]
pub fn is_blocked_dst(addr: IpAddr) -> bool {
    match addr {
        IpAddr::V4(v4) => is_blocked_v4(v4),
        IpAddr::V6(v6) => is_blocked_v6(v6),
    }
}

fn is_blocked_v4(ip: Ipv4Addr) -> bool {
    // Use std-provided range tests where available. `is_link_local`
    // covers 169.254.0.0/16 (including cloud-metadata addresses).
    // `is_documentation` covers the TEST-NET ranges, which a real
    // workload should never legitimately be reaching.
    ip.is_unspecified()        // 0.0.0.0/8
    || ip.is_loopback()        // 127.0.0.0/8
    || ip.is_link_local()      // 169.254.0.0/16
    || ip.is_broadcast()       // 255.255.255.255
    || ip.is_multicast()       // 224.0.0.0/4
    || ip.is_documentation()   // 192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24
    || is_oracle_metadata(ip)  // 192.0.0.192/32
}

/// Oracle Cloud Infrastructure publishes instance metadata on
/// `192.0.0.192` — outside of link-local, inside RFC1112's "IETF
/// reserved" block. `is_link_local` doesn't catch it; we check
/// explicitly. See https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/gettingmetadata.htm
#[inline]
fn is_oracle_metadata(ip: Ipv4Addr) -> bool {
    ip.octets() == [192, 0, 0, 192]
}

fn is_blocked_v6(ip: Ipv6Addr) -> bool {
    ip.is_unspecified()         // ::
    || ip.is_loopback()         // ::1
    || ip.is_multicast()        // ff00::/8
    || is_link_local_v6(ip)     // fe80::/10
    || is_unique_local_v6(ip)   // fc00::/7 (RFC4193)
}

/// `fe80::/10` — IPv6 link-local. (`Ipv6Addr::is_unicast_link_local`
/// is stable but only since Rust 1.86; do the bit-test ourselves to
/// keep MSRV looser.)
#[inline]
fn is_link_local_v6(ip: Ipv6Addr) -> bool {
    ip.segments()[0] & 0xffc0 == 0xfe80
}

/// `fc00::/7` — IPv6 ULA. Treat like RFC1918: operator-internal,
/// shouldn't be reachable through a public-facing NAT.
#[inline]
fn is_unique_local_v6(ip: Ipv6Addr) -> bool {
    ip.segments()[0] & 0xfe00 == 0xfc00
}

#[cfg(test)]
mod tests {
    use super::*;

    fn v4(s: &str) -> IpAddr { s.parse::<Ipv4Addr>().unwrap().into() }
    fn v6(s: &str) -> IpAddr { s.parse::<Ipv6Addr>().unwrap().into() }

    #[test]
    fn allows_normal_internet_v4() {
        for ip in ["1.1.1.1", "8.8.8.8", "142.250.190.46", "151.101.1.69"] {
            assert!(!is_blocked_dst(v4(ip)), "{ip} should be allowed");
        }
    }

    #[test]
    fn blocks_cloud_metadata() {
        // AWS / GCP / Azure / OpenStack / DigitalOcean / Hetzner
        assert!(is_blocked_dst(v4("169.254.169.254")));
        // Oracle Cloud
        assert!(is_blocked_dst(v4("192.0.0.192")));
    }

    #[test]
    fn blocks_loopback() {
        assert!(is_blocked_dst(v4("127.0.0.1")));
        assert!(is_blocked_dst(v4("127.255.255.255")));
        assert!(is_blocked_dst(v6("::1")));
    }

    #[test]
    fn blocks_link_local() {
        assert!(is_blocked_dst(v4("169.254.0.1")));
        assert!(is_blocked_dst(v4("169.254.255.254")));
        assert!(is_blocked_dst(v6("fe80::1")));
        assert!(is_blocked_dst(v6("fe80::face:b00c")));
    }

    #[test]
    fn blocks_broadcast_multicast_unspecified() {
        assert!(is_blocked_dst(v4("0.0.0.0")));
        assert!(is_blocked_dst(v4("255.255.255.255")));
        assert!(is_blocked_dst(v4("224.0.0.1")));
        assert!(is_blocked_dst(v4("239.255.255.250"))); // SSDP
        assert!(is_blocked_dst(v6("::")));
        assert!(is_blocked_dst(v6("ff02::1")));
    }

    #[test]
    fn blocks_documentation_ranges() {
        assert!(is_blocked_dst(v4("192.0.2.1")));
        assert!(is_blocked_dst(v4("198.51.100.50")));
        assert!(is_blocked_dst(v4("203.0.113.5")));
    }

    #[test]
    fn blocks_ipv6_ula() {
        assert!(is_blocked_dst(v6("fc00::1")));
        assert!(is_blocked_dst(v6("fd12:3456:789a::1")));
    }

    #[test]
    fn does_not_block_rfc1918_by_default() {
        // Intentional: blocking these would break valid use cases
        // (server with intentional LAN reach). Per-deployment
        // denylists are the right surface for this.
        assert!(!is_blocked_dst(v4("10.0.0.1")));
        assert!(!is_blocked_dst(v4("172.16.0.1")));
        assert!(!is_blocked_dst(v4("192.168.0.1")));
    }

    #[test]
    fn allows_global_ipv6() {
        assert!(!is_blocked_dst(v6("2001:4860:4860::8888"))); // Google DNS
        assert!(!is_blocked_dst(v6("2606:4700:4700::1111"))); // Cloudflare
    }
}
