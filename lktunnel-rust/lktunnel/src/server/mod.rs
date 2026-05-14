//! Server-mode-only helpers that aren't part of the per-tunnel core.
//!
//! Today this is just the kernel-TUN multi-client gateway —
//! a shared `bale0` device with a userspace SNAT pool that maps each
//! peer to a unique `10.8.0.X` lease. Lives outside the per-tunnel
//! `LkTunnel` because the TUN is by definition shared across all
//! tunnels (one kernel device, N peers).

pub mod tun_gateway;
