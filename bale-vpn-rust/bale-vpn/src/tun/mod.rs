//! Cross-OS TUN device open + configure.
//!
//! Three impls behind the same surface:
//!   - [`linux`] — `/dev/net/tun` + `TUNSETIFF` + the `SIOCSIF*`
//!     ioctl family for address / netmask / MTU / up.
//!   - [`macos`] — utun (planned; TODO port from the deleted
//!     `bale-vpn-node/tun_addon/tun.cc`).
//!   - Windows has no kernel TUN we ship; falls back to
//!     userspace NAT at the daemon level.
//!
//! Callers ([`crate::daemon`] when `--nat-mode kernel`) get a
//! [`TunDevice`] handle whose `fd` is then passed to
//! [`lktunnel::LkTunnel::attach_tun`] — the same shape the
//! Android `VpnService.Builder.establish()` produces.

use std::os::fd::RawFd;

#[cfg(target_os = "linux")]
pub mod linux;

#[cfg(target_os = "macos")]
pub mod macos;

/// Which on-wire format the kernel TUN device speaks. Linux and
/// Android (`IFF_NO_PI`, `VpnService`) hand out raw IP; macOS utun
/// prefixes every packet with a 4-byte AF header. The daemon picks
/// this when calling `LkTunnel::attach_tun_with_format`.
#[cfg(unix)]
pub fn host_tun_format() -> lktunnel::tun::TunFormat {
    #[cfg(target_os = "macos")] { lktunnel::tun::TunFormat::UtunAfHeader }
    #[cfg(not(target_os = "macos"))] { lktunnel::tun::TunFormat::RawIp }
}

/// Open + configured TUN device. Drop closes the fd. Ownership
/// transfer to `lktunnel`: take the fd via `into_raw_fd` and
/// hand it to `LkTunnel::attach_tun`; lktunnel then owns the
/// close lifecycle.
pub struct TunDevice {
    /// Final kernel-assigned interface name (may differ from
    /// the request if the kernel renamed it, e.g. `tun0` auto-
    /// assign). Kept for logging / `ip` commands.
    #[allow(dead_code)]
    pub name: String,
    pub fd:   RawFd,
}

impl TunDevice {
    /// Hand the fd over to the caller — Drop won't close it.
    pub fn into_raw_fd(mut self) -> RawFd {
        let fd = self.fd;
        // Mark consumed so Drop doesn't close.
        self.fd = -1;
        fd
    }
}

impl Drop for TunDevice {
    fn drop(&mut self) {
        if self.fd >= 0 {
            #[cfg(unix)]
            unsafe { libc::close(self.fd); }
        }
    }
}

/// Open + configure a TUN device for server-mode use.
/// `name` is the requested interface name (e.g. `"bale0"`),
/// `addr` the server-side address (e.g. `"10.8.0.1"`),
/// `prefix` the CIDR prefix length (24 for /24), `mtu` the MTU.
///
/// Returns the opened device. The address / netmask / MTU /
/// up-flag are all applied before return.
///
/// Linux: needs `CAP_NET_ADMIN` (typically via `setcap
/// cap_net_admin+eip $(which bale-vpn)` once at install).
/// macOS: needs root (utun + ifconfig).
#[cfg(target_os = "linux")]
pub fn open_server_tun(
    name:   &str,
    addr:   &str,
    prefix: u8,
    mtu:    u16,
) -> std::io::Result<TunDevice> {
    linux::open_and_configure(name, addr, prefix, mtu)
}

#[cfg(target_os = "macos")]
pub fn open_server_tun(
    name:   &str,
    addr:   &str,
    prefix: u8,
    mtu:    u16,
) -> std::io::Result<TunDevice> {
    macos::open_and_configure(name, addr, prefix, mtu)
}

#[cfg(not(any(target_os = "linux", target_os = "macos")))]
pub fn open_server_tun(
    _name:   &str,
    _addr:   &str,
    _prefix: u8,
    _mtu:    u16,
) -> std::io::Result<TunDevice> {
    Err(std::io::Error::new(
        std::io::ErrorKind::Unsupported,
        "kernel-TUN not yet implemented on this OS — use --nat-mode userspace",
    ))
}

/// Open + configure a TUN device for client-mode use. Same
/// ioctl chain as [`open_server_tun`]; the only difference is
/// the typical address (`10.8.0.2/24` client-side vs
/// `10.8.0.1/24` server-side). Wrapped as a separate function
/// for call-site clarity and so future client-only setup
/// (default-route install, DNS exclusion, etc.) has a single
/// surface to grow into.
///
/// **Note**: the caller is responsible for installing routes
/// (e.g. `ip route add default dev bale0`). bale-vpn-rust
/// doesn't touch the system routing table — that's an
/// invasive operation that needs explicit user consent and
/// careful rollback. Document the recipe; let the operator
/// run it.
pub fn open_client_tun(
    name:   &str,
    addr:   &str,
    prefix: u8,
    mtu:    u16,
) -> std::io::Result<TunDevice> {
    open_server_tun(name, addr, prefix, mtu)
}
