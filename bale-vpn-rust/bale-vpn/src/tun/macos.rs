//! macOS utun open + configure.
//!
//! Pipeline:
//!   1. `socket(PF_SYSTEM, SOCK_DGRAM, SYSPROTO_CONTROL)` — open a
//!      control-protocol socket on the system bus.
//!   2. `ioctl(CTLIOCGINFO)` with name `com.apple.net.utun_control`
//!      → kernel returns the utun control's numeric id.
//!   3. `connect(sockaddr_ctl)` with `sc_unit = 0` → kernel
//!      auto-assigns the next free `utun*` slot.
//!   4. `getsockopt(SYSPROTO_CONTROL, UTUN_OPT_IFNAME)` → read back
//!      the assigned interface name (e.g. `utun5`).
//!   5. `ifconfig utunN inet <addr> <addr> netmask <mask> mtu <mtu> up`
//!      to assign the IPv4 address + bring the interface up.
//!      Spawning ifconfig is the same approach the Node app used —
//!      macOS doesn't have a tidy `SIOCSIFADDR` equivalent that
//!      handles point-to-point utun the way we need.
//!
//! Packets on the resulting fd are **prefixed with a 4-byte
//! big-endian address-family** (`AF_INET=2` / `AF_INET6=30`). The
//! lktunnel side handles wrap/unwrap when
//! [`lktunnel::tun::TunFormat::UtunAfHeader`] is selected; the caller
//! (`daemon.rs`) is responsible for picking that variant of
//! `attach_tun_with_format`.

use super::TunDevice;
use std::ffi::CStr;
use std::io;
use std::mem;
use std::os::raw::{c_int, c_void};

// macOS constants not consistently exposed by libc.
const PF_SYSTEM:        c_int = 32;
const AF_SYSTEM:        u8    = 32;
const AF_SYS_CONTROL:   u16   = 2;
const SYSPROTO_CONTROL: c_int = 2;
const UTUN_OPT_IFNAME:  c_int = 2;
/// `_IOWR('N', 3, sizeof(struct ctl_info))` — sizeof(ctl_info) = 100.
const CTLIOCGINFO:      libc::c_ulong = 0xC0644E03;

const UTUN_CONTROL_NAME: &[u8] = b"com.apple.net.utun_control\0";

#[repr(C)]
struct CtlInfo {
    ctl_id:   u32,
    ctl_name: [u8; 96],
}

#[repr(C)]
struct SockaddrCtl {
    sc_len:      u8,
    sc_family:   u8,
    ss_sysaddr:  u16,
    sc_id:       u32,
    sc_unit:     u32,
    sc_reserved: [u32; 5],
}

/// Open a utun device, configure address / netmask / MTU, bring it
/// up. `name_hint` of the form `utunN` requests that specific unit
/// (the kernel uses `unit = N + 1`); anything else (e.g. `"bale0"`,
/// the Linux-style hint our daemon passes) requests auto-assign.
/// The returned [`TunDevice`] carries the kernel-assigned name.
pub fn open_and_configure(
    name_hint: &str,
    addr:      &str,
    prefix:    u8,
    mtu:       u16,
) -> io::Result<TunDevice> {
    // 1. open
    let fd = unsafe { libc::socket(PF_SYSTEM, libc::SOCK_DGRAM, SYSPROTO_CONTROL) };
    if fd < 0 { return Err(io::Error::last_os_error()); }

    // 2. resolve utun control id
    let mut info: CtlInfo = unsafe { mem::zeroed() };
    info.ctl_name[..UTUN_CONTROL_NAME.len()].copy_from_slice(UTUN_CONTROL_NAME);
    if unsafe { libc::ioctl(fd, CTLIOCGINFO, &mut info) } < 0 {
        let e = io::Error::last_os_error();
        unsafe { libc::close(fd); }
        return Err(io::Error::new(e.kind(),
            format!("utun: ioctl(CTLIOCGINFO) failed: {e}")));
    }

    // 3. connect to the control endpoint
    let unit = parse_unit_from_hint(name_hint);
    let sc = SockaddrCtl {
        sc_len:      mem::size_of::<SockaddrCtl>() as u8,
        sc_family:   AF_SYSTEM,
        ss_sysaddr:  AF_SYS_CONTROL,
        sc_id:       info.ctl_id,
        sc_unit:     unit,
        sc_reserved: [0; 5],
    };
    let rc = unsafe {
        libc::connect(
            fd,
            &sc as *const _ as *const libc::sockaddr,
            mem::size_of::<SockaddrCtl>() as libc::socklen_t,
        )
    };
    if rc < 0 {
        let e = io::Error::last_os_error();
        unsafe { libc::close(fd); }
        return Err(io::Error::new(e.kind(),
            format!("utun: connect(sc_unit={unit}) failed: {e}")));
    }

    // 4. read back kernel-assigned interface name
    let mut name_buf = [0u8; 32];
    let mut name_len: libc::socklen_t = name_buf.len() as libc::socklen_t;
    let rc = unsafe {
        libc::getsockopt(
            fd, SYSPROTO_CONTROL, UTUN_OPT_IFNAME,
            name_buf.as_mut_ptr() as *mut c_void, &mut name_len,
        )
    };
    if rc < 0 {
        let e = io::Error::last_os_error();
        unsafe { libc::close(fd); }
        return Err(io::Error::new(e.kind(),
            format!("utun: getsockopt(UTUN_OPT_IFNAME) failed: {e}")));
    }
    // Returned length includes the trailing NUL.
    let iface = CStr::from_bytes_until_nul(&name_buf[..name_len as usize])
        .map(|c| c.to_string_lossy().into_owned())
        .unwrap_or_else(|_| String::from("utun?"));

    // 5. non-blocking — the reactor expects EAGAIN, not blocking I/O.
    let flags = unsafe { libc::fcntl(fd, libc::F_GETFL, 0) };
    if flags >= 0 {
        unsafe { libc::fcntl(fd, libc::F_SETFL, flags | libc::O_NONBLOCK); }
    }

    // 6. ifconfig — assign address, point-to-point peer (same as
    //    src for /24), netmask, MTU, bring up. macOS requires
    //    `inet <src> <dst>` for utun (point-to-point); using
    //    addr/addr makes the device routable for the configured
    //    /N without needing an explicit peer address.
    let netmask = prefix_to_netmask(prefix);
    let status = std::process::Command::new("/sbin/ifconfig")
        .arg(&iface)
        .arg("inet").arg(addr).arg(addr)
        .arg("netmask").arg(&netmask)
        .arg("mtu").arg(mtu.to_string())
        .arg("up")
        .status();
    match status {
        Ok(s) if s.success() => {}
        Ok(s) => {
            unsafe { libc::close(fd); }
            return Err(io::Error::new(io::ErrorKind::Other,
                format!("ifconfig {iface} inet {addr} netmask {netmask}: exit {s}")));
        }
        Err(e) => {
            unsafe { libc::close(fd); }
            return Err(io::Error::new(io::ErrorKind::Other,
                format!("spawn ifconfig: {e}")));
        }
    }

    log::info!("utun: opened {iface} ({addr}/{prefix} mtu={mtu} fd={fd})");
    Ok(TunDevice { name: iface, fd })
}

/// `utunN` → `N + 1` (kernel uses 1-indexed units, 0 = auto).
/// Anything else → 0 (auto-assign).
fn parse_unit_from_hint(hint: &str) -> u32 {
    hint.strip_prefix("utun")
        .and_then(|n| n.parse::<u32>().ok())
        .map(|n| n + 1)
        .unwrap_or(0)
}

/// CIDR prefix → dotted-quad. `0` → `0.0.0.0`, `32` → `255.255.255.255`.
fn prefix_to_netmask(prefix: u8) -> String {
    if prefix == 0 { return "0.0.0.0".into(); }
    let p = prefix.min(32);
    let mask: u32 = !0u32 << (32 - p);
    format!("{}.{}.{}.{}",
        (mask >> 24) & 0xff,
        (mask >> 16) & 0xff,
        (mask >>  8) & 0xff,
        (mask      ) & 0xff)
}
