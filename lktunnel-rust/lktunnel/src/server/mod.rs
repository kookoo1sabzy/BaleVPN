//! Server-mode-only helpers that aren't part of the per-tunnel core.
//!
//! Today this is just the kernel-TUN multi-client gateway —
//! a shared `bale0` device with a userspace SNAT pool that maps each
//! peer to a unique `10.8.0.X` lease. Lives outside the per-tunnel
//! `LkTunnel` because the TUN is by definition shared across all
//! tunnels (one kernel device, N peers).

// Kernel TUN is a Unix concept — `tun_gateway` uses `libc::poll`,
// `libc::read/write`, and the `/dev/net/tun` ioctl surface. Windows
// builds compile without it; the Node app on Windows is forced into
// userspace-NAT mode at startup.
#[cfg(unix)]
pub mod tun_gateway;
