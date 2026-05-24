//! Linux kernel TUN — open `/dev/net/tun`, claim a named
//! interface via `TUNSETIFF`, then set address / netmask / MTU /
//! up-flag via the standard `SIOCSIF*` ioctl family on a
//! throwaway INET socket.
//!
//! Mirrors what the deleted `bale-vpn-node/tun_addon/tun.cc`
//! did, in safe-ish Rust. The wire-level details
//! (`struct ifreq`, ioctl numbers) match the kernel headers
//! verbatim; the unsafe blocks are localised around the
//! `libc::ioctl` calls.
//!
//! Caps:
//!   - `CAP_NET_ADMIN` for the ioctls. The recommended
//!     deployment is `setcap cap_net_admin+eip $(which
//!     bale-vpn)` once at install — same as the Node app's
//!     setup. Without the cap, every ioctl returns `EPERM`.

use super::TunDevice;
use std::ffi::CString;
use std::io;
use std::mem;
use std::os::fd::RawFd;

// Constants from <linux/if_tun.h> and <linux/if.h>. We could
// pull them from a crate, but hard-coding them keeps the dep
// footprint small and matches what the C side did verbatim.
const TUNSETIFF:      libc::c_ulong = 0x4004_54ca;
const IFF_TUN:        libc::c_short = 0x0001;
const IFF_NO_PI:      libc::c_short = 0x1000;

const SIOCSIFADDR:    libc::c_ulong = 0x8916;
const SIOCSIFNETMASK: libc::c_ulong = 0x891c;
const SIOCSIFMTU:     libc::c_ulong = 0x8922;
const SIOCSIFFLAGS:   libc::c_ulong = 0x8914;
const IFF_UP:         libc::c_short = 0x0001;
const IFF_RUNNING:    libc::c_short = 0x0040;

const IFNAMSIZ: usize = 16;

/// `struct ifreq` — same layout as `<linux/if.h>`. We only
/// touch the `ifr_name` + one union variant at a time, so a
/// simple union shape is enough.
#[repr(C)]
union IfreqUnion {
    ifru_addr:    libc::sockaddr_in,
    ifru_flags:   libc::c_short,
    ifru_mtu:     libc::c_int,
    ifru_ifindex: libc::c_int,
    ifru_data:    [u8; 24],
}

#[repr(C)]
struct Ifreq {
    ifr_name: [u8; IFNAMSIZ],
    ifr_u:    IfreqUnion,
}

impl Ifreq {
    fn new(name: &str) -> io::Result<Self> {
        let bytes = name.as_bytes();
        if bytes.len() >= IFNAMSIZ {
            return Err(io::Error::new(
                io::ErrorKind::InvalidInput,
                format!("interface name '{name}' too long (max {} chars)", IFNAMSIZ - 1),
            ));
        }
        let mut ifr_name = [0u8; IFNAMSIZ];
        ifr_name[..bytes.len()].copy_from_slice(bytes);
        Ok(Self {
            ifr_name,
            ifr_u: IfreqUnion { ifru_data: [0; 24] },
        })
    }
}

pub fn open_and_configure(
    name:   &str,
    addr:   &str,
    prefix: u8,
    mtu:    u16,
) -> io::Result<TunDevice> {
    // Defensive: if a same-named device is still around (previous
    // session's TunBridge::Drop didn't run cleanly, or the daemon
    // was SIGKILLed mid-session), `TUNSETIFF` returns EBUSY. Best-
    // effort delete first — silently ignore errors (most commonly
    // "Cannot find device", which is the happy path).
    let _ = std::process::Command::new("ip")
        .args(["link", "del", "dev", name])
        .stdout(std::process::Stdio::null())
        .stderr(std::process::Stdio::null())
        .status();
    let fd = open_dev_tun(name)?;
    if let Err(e) = configure(name, addr, prefix, mtu) {
        unsafe { libc::close(fd); }
        return Err(e);
    }
    Ok(TunDevice { name: name.into(), fd })
}

/// Open `/dev/net/tun` and `TUNSETIFF` to claim the named
/// interface. Returns the resulting fd. `IFF_TUN | IFF_NO_PI`
/// = layer-3 frames without the 4-byte packet-info prefix —
/// matches what `lktunnel`'s inject path expects.
fn open_dev_tun(name: &str) -> io::Result<RawFd> {
    let path = CString::new("/dev/net/tun").unwrap();
    // SAFETY: open(2) is safe given a valid C string.
    //
    // O_NONBLOCK is **required** — the fd ends up registered with
    // mio (`SourceFd`) on the dispatcher thread. Without it, a
    // read blocks the entire reactor while waiting for a packet,
    // and edge-triggered events can be missed (mio's contract is
    // "all sources must be non-blocking"). Was the root cause of
    // the inbound-queue overflows under load: dispatcher pinned
    // on a blocking read, producer outpaced the drainer, queue
    // capped, packets dropped.
    let fd = unsafe { libc::open(path.as_ptr(),
        libc::O_RDWR | libc::O_CLOEXEC | libc::O_NONBLOCK) };
    if fd < 0 {
        return Err(io::Error::last_os_error());
    }

    let mut ifr = Ifreq::new(name)?;
    unsafe { ifr.ifr_u.ifru_flags = IFF_TUN | IFF_NO_PI; }
    // SAFETY: ifr lives across the call; ioctl writes into
    // ifr_name (kernel reports back the actual interface name —
    // may differ if the kernel renamed it, e.g. tunN auto-assign).
    let rc = unsafe { libc::ioctl(fd, TUNSETIFF as _, &mut ifr) };
    if rc < 0 {
        let e = io::Error::last_os_error();
        unsafe { libc::close(fd); }
        return Err(e);
    }
    Ok(fd)
}

/// Configure address / netmask / MTU / up-flag on the named
/// interface. Each step opens an INET socket, ioctls, and
/// closes — the socket is just an ioctl conduit and doesn't
/// carry traffic.
fn configure(name: &str, addr: &str, prefix: u8, mtu: u16) -> io::Result<()> {
    let ipv4: std::net::Ipv4Addr = addr.parse().map_err(|e| {
        io::Error::new(io::ErrorKind::InvalidInput, format!("bad addr '{addr}': {e}"))
    })?;
    if !(8..=32).contains(&prefix) {
        return Err(io::Error::new(
            io::ErrorKind::InvalidInput,
            format!("bad CIDR prefix /{prefix} (expected 8..=32)"),
        ));
    }
    let netmask = if prefix == 32 { 0xFFFF_FFFFu32 }
                  else { (!0u32).checked_shl(32 - prefix as u32).unwrap_or(0) };
    let netmask = std::net::Ipv4Addr::from(netmask);

    let sk = unsafe { libc::socket(libc::AF_INET, libc::SOCK_DGRAM, 0) };
    if sk < 0 { return Err(io::Error::last_os_error()); }

    let result = (|| -> io::Result<()> {
        set_sockaddr(sk, name, SIOCSIFADDR,    ipv4)?;
        set_sockaddr(sk, name, SIOCSIFNETMASK, netmask)?;
        set_mtu     (sk, name, mtu)?;
        set_flags   (sk, name, (IFF_UP | IFF_RUNNING) as libc::c_short)?;
        Ok(())
    })();

    unsafe { libc::close(sk); }
    result
}

fn set_sockaddr(
    sk:    RawFd,
    name:  &str,
    ioctl: libc::c_ulong,
    addr:  std::net::Ipv4Addr,
) -> io::Result<()> {
    let mut ifr = Ifreq::new(name)?;
    // SAFETY: writing the sockaddr_in variant of the union.
    unsafe {
        let mut sa: libc::sockaddr_in = mem::zeroed();
        sa.sin_family = libc::AF_INET as libc::sa_family_t;
        sa.sin_addr.s_addr = u32::from_ne_bytes(addr.octets());
        ifr.ifr_u.ifru_addr = sa;
    }
    let rc = unsafe { libc::ioctl(sk, ioctl as _, &mut ifr) };
    if rc < 0 { return Err(io::Error::last_os_error()); }
    Ok(())
}

fn set_mtu(sk: RawFd, name: &str, mtu: u16) -> io::Result<()> {
    let mut ifr = Ifreq::new(name)?;
    unsafe { ifr.ifr_u.ifru_mtu = mtu as libc::c_int; }
    let rc = unsafe { libc::ioctl(sk, SIOCSIFMTU as _, &mut ifr) };
    if rc < 0 { return Err(io::Error::last_os_error()); }
    Ok(())
}

fn set_flags(sk: RawFd, name: &str, flags: libc::c_short) -> io::Result<()> {
    let mut ifr = Ifreq::new(name)?;
    unsafe { ifr.ifr_u.ifru_flags = flags; }
    let rc = unsafe { libc::ioctl(sk, SIOCSIFFLAGS as _, &mut ifr) };
    if rc < 0 { return Err(io::Error::last_os_error()); }
    Ok(())
}
