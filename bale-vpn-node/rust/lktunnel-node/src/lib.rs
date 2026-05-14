//! napi-rs binding exposing the `lktunnel` Rust core to the
//! `bale-vpn-node` Linux server. Mirrors the Android JNI shim
//! (`bale-vpn-android/rust/lktunnel-android/`) in role and API shape
//! so both consumers see the same handle-based protocol:
//!
//! ```js
//! const { Tunnel, openTun, configureIf, closeTun } = require('lktunnel-node');
//!
//! const t = Tunnel.connect(url, token, (kind, info) => {
//!     // kind: "Connected" | "PeerJoined" | "PeerLeft" | "Disconnected" | "Error"
//! });
//! t.startServer();
//! const fd = openTun("bale0");
//! configureIf("bale0", "10.8.0.1", 24);
//! t.attachTun(fd);
//! // …
//! t.disconnect();
//! ```
//!
//! Only **server-side** roles are supported here (the Android shim
//! has both client and server). Two physical shapes, picked by the
//! caller per OS:
//!
//! | OS          | Path                                                                         |
//! |-------------|------------------------------------------------------------------------------|
//! | Linux       | `openTun` + `configureIf` + `attachTun(fd)` + `startServer()` — kernel TUN routes packets, iptables MASQUERADE NATs them. Same path the C++ `tun_addon` used to take. |
//! | macOS       | (planned) same shape via `utun`-style fd; not yet wired in this binding. Today the JS side keeps the existing libc-based open. |
//! | **Windows** | `startServer()` **only**, no TUN — Windows has no `/dev/net/tun`, so we fall back to lktunnel's userspace TCP/UDP NAT (`lktunnel::nat::*`). The peer's IP packets get bridged to real `mio::net::*` sockets in-process; no kernel TUN device or iptables needed. |
//!
//! `openTun`/`configureIf`/`closeTun` are deliberately Linux-only —
//! they return `Error::from_reason("…-only")` on every other OS so
//! the JS caller branches on `process.platform` rather than guessing
//! at runtime.

#![deny(clippy::all)]

use std::sync::Arc;

use napi::bindgen_prelude::*;
use napi::threadsafe_function::{
    ErrorStrategy, ThreadsafeFunction, ThreadsafeFunctionCallMode,
};
use napi_derive::napi;

// ── Log init ─────────────────────────────────────────────────────────
//
// The Rust core (lktunnel + livekit + webrtc-sys) uses `log` macros
// for diagnostics. Without a subscriber installed those calls are
// no-ops — exactly the symptom the Node side saw before this was
// added: `--debug` flipped the NAT gate fine, but every
// `log::info!` / `log::warn!` / `nat_log!` went nowhere.
//
// `env_logger` is the lightweight default. Filter tuned via
// `RUST_LOG=…`; the default below is "info for our crates, warn for
// the upstream noisy ones". One-shot init, idempotent — `try_init`
// is silent if a subscriber already exists (e.g. for tests).
fn ensure_logging() {
    use std::sync::OnceLock;
    static INIT: OnceLock<()> = OnceLock::new();
    INIT.get_or_init(|| {
        env_logger::Builder::from_env(
            env_logger::Env::default().default_filter_or(
                "info,lktunnel=info,livekit=warn,webrtc_sys=warn,libwebrtc=warn",
            ),
        )
        .format_timestamp_millis()
        .try_init()
        .ok();
    });
}

/// Boot the mio dispatcher thread. Idempotent — `lktunnel::dispatcher::init`
/// guards against double-start. Without this, `dispatcher::post(...)`
/// silently queues tasks that nobody runs, so the inbound-IP drain
/// path never fires and packets never reach the NAT. The CLI does
/// this in `main`; the JNI shim does it at JNI_OnLoad; we mirror it
/// here so every napi consumer is symmetric.
fn ensure_dispatcher() {
    use std::sync::OnceLock;
    static INIT: OnceLock<()> = OnceLock::new();
    INIT.get_or_init(|| {
        lktunnel::dispatcher::init();
    });
}

// ── Tunnel handle ────────────────────────────────────────────────────

/// JS-visible handle around `lktunnel::LkTunnel`. The Rust value is
/// owned through an `Arc` so the threadsafe-function callback (which
/// fires from `lktunnel`'s tokio worker) and JS-side method calls
/// share a stable lifetime regardless of which side drops last.
#[napi]
pub struct Tunnel {
    inner: Arc<lktunnel::LkTunnel>,
}

#[napi]
impl Tunnel {
    /// Build a handle and kick off the async connect work on the
    /// shared lktunnel runtime. Non-blocking — events fire on
    /// `on_event(kind, info)` as the connect task progresses.
    ///
    /// The `on_event` callback is invoked from the lktunnel tokio
    /// worker thread; `ThreadsafeFunction` marshals it back onto the
    /// Node event loop so JS code observes it like any other Node
    /// callback.
    #[napi(factory)]
    pub fn connect(
        url:      String,
        token:    String,
        on_event: JsFunction,
    ) -> Result<Tunnel> {
        ensure_logging();
        ensure_dispatcher();
        let tsfn: ThreadsafeFunction<(String, String), ErrorStrategy::Fatal> =
            on_event.create_threadsafe_function(0, |ctx| {
                let (kind, info): (String, String) = ctx.value;
                Ok(vec![
                    ctx.env.create_string(&kind)?.into_unknown(),
                    ctx.env.create_string(&info)?.into_unknown(),
                ])
            })?;

        let on_event_cb = move |ev: lktunnel::Event| {
            // EventKind variants stringify cleanly via Debug; the JS
            // side compares against the variant name. Cheap.
            let kind = format!("{:?}", ev.kind);
            let info = ev.info.clone();
            tsfn.call((kind, info), ThreadsafeFunctionCallMode::NonBlocking);
        };

        let lk = lktunnel::LkTunnel::connect(url, token, on_event_cb);
        Ok(Tunnel { inner: Arc::new(lk) })
    }

    #[napi]
    pub fn is_connected(&self) -> bool {
        self.inner.is_connected()
    }

    /// Promote this tunnel to server mode — installs the userspace
    /// NAT that bridges client IP packets to host sockets. Idempotent
    /// at call sites — fails if already in client or server mode.
    #[napi]
    pub fn start_server(&self) -> Result<()> {
        self.inner
            .start_server()
            .map_err(|e| Error::from_reason(e.to_string()))
    }

    /// Hand the TUN fd over to the lktunnel core. The library takes
    /// ownership: it spawns the TUN read loop on its dispatcher
    /// thread and closes the fd on teardown. After this call the JS
    /// side must NOT close the fd itself.
    #[napi]
    pub fn attach_tun(&self, fd: i32) -> Result<()> {
        self.inner
            .attach_tun(fd)
            .map_err(|e| Error::from_reason(e.to_string()))
    }

    /// `[rx_pkts, rx_bytes, tx_pkts, tx_bytes]`. u32 is enough for
    /// any realistic session (4 GB ≈ 4 billion packets / bytes); if
    /// we ever need more we'll move to BigInt.
    #[napi]
    pub fn stats(&self) -> Vec<u32> {
        let s = self.inner.stats();
        vec![s[0] as u32, s[1] as u32, s[2] as u32, s[3] as u32]
    }

    /// Tear down. Idempotent — safe to call multiple times. The
    /// underlying `Drop` also fires teardown when the last JS
    /// reference is collected, but explicit `disconnect()` is
    /// recommended so the SFU sees the Leave promptly instead of
    /// waiting out a ~30 s timeout.
    #[napi]
    pub fn disconnect(&self) {
        self.inner.disconnect();
    }
}

// ── Linux TUN helpers — ported from `bale-vpn-node/tun_addon/tun.cc`
//
// `openTun` does the `TUNSETIFF` ioctl; `configureIf` runs the
// `SIOCSIFADDR` + `SIOCSIFNETMASK` + optional `SIOCSIFMTU` +
// `SIOCSIFFLAGS` triple. Both must run inside the same process that
// owns `cap_net_admin` (per the original tun.cc comment: `setcap` is
// not inherited by child processes, so the open + configure must
// happen in-process).
//
// Linux-only — `cfg(target_os = "linux")` gates the implementation.
// On other platforms the functions throw a clear error.

#[cfg(target_os = "linux")]
mod linux_tun {
    use super::*;
    use std::ffi::CString;
    use std::mem;
    use std::os::raw::c_char;

    // From <linux/if_tun.h>. `IFF_TUN | IFF_NO_PI`, ifr_name layout
    // matches the kernel struct.
    const IFF_TUN:    libc::c_short = 0x0001;
    const IFF_NO_PI:  libc::c_short = 0x1000;
    const TUNSETIFF:  libc::c_ulong = 0x400454ca;

    // ioctl-side `struct ifreq` is fragmented over libc + linux
    // headers — we hand-roll the byte layout to avoid bringing in
    // `nix` just for one ioctl.
    #[repr(C)]
    struct Ifreq {
        ifr_name:  [c_char; 16],
        // The union after ifr_name is 24 bytes wide; we never read it
        // from this struct so leave it as opaque padding.
        ifr_data:  [u8; 24],
    }

    fn ifreq_with_name(name: &str) -> Result<Ifreq> {
        if name.len() >= 16 {
            return Err(Error::from_reason(format!(
                "interface name '{name}' is {} bytes; max 15", name.len())));
        }
        let mut ifr: Ifreq = unsafe { mem::zeroed() };
        for (i, b) in name.as_bytes().iter().enumerate() {
            ifr.ifr_name[i] = *b as c_char;
        }
        Ok(ifr)
    }

    pub fn open_tun(name: String) -> Result<i32> {
        let path = CString::new("/dev/net/tun").unwrap();
        let fd = unsafe {
            libc::open(path.as_ptr(), libc::O_RDWR | libc::O_CLOEXEC)
        };
        if fd < 0 {
            let e = std::io::Error::last_os_error();
            return Err(Error::from_reason(format!("/dev/net/tun: {e}")));
        }
        let mut ifr = match ifreq_with_name(&name) {
            Ok(i) => i,
            Err(e) => { unsafe { libc::close(fd); } return Err(e); }
        };
        // Set the flags in the first two bytes of the ifr_data union
        // (ifr_flags is the first union member in <linux/if.h>).
        let flags: libc::c_short = IFF_TUN | IFF_NO_PI;
        ifr.ifr_data[..2].copy_from_slice(&flags.to_ne_bytes());

        let rc = unsafe { libc::ioctl(fd, TUNSETIFF, &mut ifr) };
        if rc < 0 {
            let e = std::io::Error::last_os_error();
            unsafe { libc::close(fd); }
            return Err(Error::from_reason(format!("TUNSETIFF: {e}")));
        }
        Ok(fd)
    }

    pub fn configure_if(
        name:    String,
        ip:      String,
        prefix:  u8,
        mtu:     Option<u32>,
    ) -> Result<()> {
        // The IPv4 ioctls need a `sockaddr_in` packed into the ifreq
        // union — same layout the C++ addon used. We re-create it
        // byte-for-byte rather than depend on a `nix`-style binding.
        let addr: u32 = ip.parse::<std::net::Ipv4Addr>()
            .map_err(|e| Error::from_reason(format!("ip '{ip}': {e}")))?
            .into();

        if prefix == 0 || prefix > 32 {
            return Err(Error::from_reason(format!("bad prefix /{prefix}")));
        }
        let mask: u32 = if prefix == 32 { u32::MAX } else { !((1u32 << (32 - prefix)) - 1) };

        let sock = unsafe { libc::socket(libc::AF_INET, libc::SOCK_DGRAM, 0) };
        if sock < 0 {
            let e = std::io::Error::last_os_error();
            return Err(Error::from_reason(format!("socket(AF_INET): {e}")));
        }

        let do_ioctl = |req: libc::c_ulong, ifr: &mut Ifreq, tag: &str| -> Result<()> {
            let rc = unsafe { libc::ioctl(sock, req, ifr) };
            if rc < 0 {
                let e = std::io::Error::last_os_error();
                return Err(Error::from_reason(format!("{tag}: {e}")));
            }
            Ok(())
        };

        // Helper: write an `AF_INET, port=0, addr=<v>` sockaddr_in
        // into the first 16 bytes of ifr_data.
        let mut write_sockaddr = |ifr: &mut Ifreq, v: u32| {
            // struct sockaddr_in { sa_family_t sin_family; uint16_t
            // sin_port; struct in_addr sin_addr; uint8_t sin_zero[8]; }
            ifr.ifr_data.fill(0);
            ifr.ifr_data[0..2].copy_from_slice(
                &(libc::AF_INET as u16).to_ne_bytes());
            // sin_port = 0 — already zeroed.
            // sin_addr is network byte order.
            ifr.ifr_data[4..8].copy_from_slice(&v.to_be_bytes());
        };

        // Wrap each step so we always close `sock` on failure.
        let result = (|| -> Result<()> {
            let mut ifr = ifreq_with_name(&name)?;
            write_sockaddr(&mut ifr, addr);
            do_ioctl(0x8916 /* SIOCSIFADDR */, &mut ifr, "SIOCSIFADDR")?;

            let mut ifr = ifreq_with_name(&name)?;
            write_sockaddr(&mut ifr, mask);
            do_ioctl(0x891c /* SIOCSIFNETMASK */, &mut ifr, "SIOCSIFNETMASK")?;

            if let Some(mtu) = mtu {
                let mut ifr = ifreq_with_name(&name)?;
                ifr.ifr_data[..4].copy_from_slice(&(mtu as i32).to_ne_bytes());
                do_ioctl(0x8922 /* SIOCSIFMTU */, &mut ifr, "SIOCSIFMTU")?;
            }

            // Bring the interface up + multicast on, matching the
            // flags the C++ addon set.
            let mut ifr = ifreq_with_name(&name)?;
            let flags: libc::c_short =
                (libc::IFF_UP | libc::IFF_RUNNING | libc::IFF_MULTICAST) as libc::c_short;
            ifr.ifr_data[..2].copy_from_slice(&flags.to_ne_bytes());
            do_ioctl(0x8914 /* SIOCSIFFLAGS */, &mut ifr, "SIOCSIFFLAGS")?;
            Ok(())
        })();

        unsafe { libc::close(sock); }
        result
    }

    pub fn close_tun(fd: i32) {
        if fd >= 0 { unsafe { libc::close(fd); } }
    }
}

/// Open a TUN device, returning the kernel fd. Linux only — fails
/// loudly on other platforms.
#[napi]
pub fn open_tun(name: String) -> Result<i32> {
    #[cfg(target_os = "linux")]
    { linux_tun::open_tun(name) }
    #[cfg(not(target_os = "linux"))]
    { let _ = name; Err(Error::from_reason("open_tun is Linux-only")) }
}

/// Assign IPv4 + netmask (+ optional MTU) and bring the interface up.
#[napi]
pub fn configure_if(name: String, ip: String, prefix: u8, mtu: Option<u32>) -> Result<()> {
    #[cfg(target_os = "linux")]
    { linux_tun::configure_if(name, ip, prefix, mtu) }
    #[cfg(not(target_os = "linux"))]
    { let _ = (name, ip, prefix, mtu); Err(Error::from_reason("configure_if is Linux-only")) }
}

/// Close a TUN fd. No-op for `fd < 0`. Note: when the fd has been
/// handed off to `Tunnel.attachTun` or `TunGateway.attach`, the
/// lktunnel core owns the fd and the JS caller must NOT call
/// `close_tun` on it — let the owning handle clean up.
#[napi]
pub fn close_tun(fd: i32) {
    #[cfg(target_os = "linux")]
    { linux_tun::close_tun(fd) }
    #[cfg(not(target_os = "linux"))]
    { let _ = fd; }
}

/// Toggle verbose per-flow NAT diagnostics in the Rust core. Affects
/// both kernel and userspace NAT paths: TCP retransmits / RTO / TLP
/// / cwnd / SACK events, UDP send/recv counters, fragment-buffer
/// expiry, throttle pauses. Hot-loop log sites are gated behind an
/// `AtomicBool`, so leaving this off costs effectively zero.
#[napi]
pub fn set_nat_debug(enabled: bool) {
    ensure_logging();
    lktunnel::nat::set_debug(enabled);
}

// ── TunGateway — kernel-mode multi-peer SNAT ─────────────────────────
//
// Wraps `lktunnel::server::tun_gateway::TunGateway`. Exposed to JS so
// the `kernel` NAT-mode in the Node server can:
//
//   const fd = openTun('bale0');
//   configureIf('bale0', '10.8.0.1', 24);
//   const gw = TunGateway.attach(fd);
//   // per call:
//   const t = Tunnel.connect(url, token, onEvent);
//   const lease = gw.register(t);   // 2..254
//   // … traffic flows; per-packet path stays in Rust …
//   gw.unregister(t); t.disconnect();
//   // on shutdown:
//   gw.close();

#[napi]
pub struct TunGateway {
    inner: Arc<lktunnel::server::tun_gateway::TunGateway>,
}

#[napi]
impl TunGateway {
    /// Take ownership of an open TUN fd (from `openTun`). Spawns the
    /// shared read loop in a dedicated thread before returning.
    #[napi(factory)]
    pub fn attach(fd: i32) -> TunGateway {
        let gw = lktunnel::server::tun_gateway::TunGateway::attach(fd);
        TunGateway { inner: Arc::new(gw) }
    }

    /// Reserve a SNAT lease for `tunnel` and install the gateway's
    /// inbound-IP handler on it. Returns the lease octet (`2..254`)
    /// — JS uses it only for logging / display, the actual rewrite
    /// happens in Rust.
    #[napi]
    pub fn register(&self, tunnel: &Tunnel) -> Result<u8> {
        self.inner
            .register(&tunnel.inner)
            .map_err(|e| Error::from_reason(e.to_string()))
    }

    /// Release the lease for `tunnel` and detach the gateway's
    /// handler. Idempotent — calling twice or with an unregistered
    /// tunnel is a no-op.
    #[napi]
    pub fn unregister(&self, tunnel: &Tunnel) {
        self.inner.unregister(&tunnel.inner);
    }

    /// Shut down the read thread and close the TUN fd. Idempotent.
    /// After this the gateway is unusable; create a new one (with a
    /// freshly-opened fd) to bring service back up.
    #[napi]
    pub fn close(&self) {
        self.inner.close();
    }
}
