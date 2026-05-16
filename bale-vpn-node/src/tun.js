'use strict';

// Cross-platform TUN wrapper. Native addon must be compiled first via
// `npm run build-tun` (Linux: tun.cc → /dev/net/tun; macOS: tun_darwin.cc →
// utun via PF_SYSTEM). Server mode is the only consumer.
//
// Linux: openTun(name) returns a numeric fd; configureIf does ioctls in
//        process; raw IP packets read/written without any framing prefix.
// macOS: openTun(_) returns { fd, name } with the kernel-assigned utunN;
//        IP setup and NAT are shelled out to ifconfig/sysctl/pfctl from
//        tunnel.js (server mode runs as root anyway). Every utun packet
//        carries a 4-byte address-family prefix (AF_INET=2, big-endian)
//        that we strip on read and prepend on write so callers always see
//        raw IP packets.

const fs = require('fs');
const { execFileSync } = require('child_process');
const { promisify } = require('util');

const isDarwin = process.platform === 'darwin';
const HEADER   = isDarwin ? Buffer.from([0, 0, 0, 2]) : null;   // AF_INET, network byte order

let addon = null;
try {
    addon = require('../build/Release/tun');
} catch (_) {
    // Not built or unsupported platform — TUN mode unavailable.
}

// Returns { fd, name }. `name` is what the caller requested on Linux, or the
// utunN name the kernel assigned on macOS.
function open(name) {
    if (!addon) throw new Error('TUN addon not built. Run: npm run build-tun');
    const result = addon.openTun(name || 'bale0');
    return typeof result === 'number' ? { fd: result, name: name || 'bale0' } : result;
}

// Linux: ioctls in-process via the addon. macOS: shell out to ifconfig (utun
// is point-to-point and has a different ifaliasreq layout than Linux), then
// add an explicit subnet route — the P2P ifconfig only installs a host route
// for the peer address, not the whole client subnet.
function configure(name, ip, prefix) {
    if (!addon) throw new Error('TUN addon not built. Run: npm run build-tun');
    if (isDarwin) {
        // Point-to-point: utun needs a peer. .1 → .1 (server is its own peer;
        // clients live on the subnet and reach us via the route below).
        execFileSync('/sbin/ifconfig', [name, 'inet', ip, ip, 'up'], { stdio: 'pipe' });
        // Subnet route: tell the kernel the entire 10.8.0.0/24 is reachable
        // via this utun. Without this, return packets after un-NAT have no
        // route back to the client. Wipe any stale route first.
        const subnet = networkOf(ip, prefix);
        try { execFileSync('/sbin/route', ['-q', '-n', 'delete', '-inet', `${subnet}/${prefix}`], { stdio: 'pipe' }); } catch (_) {}
        execFileSync('/sbin/route', ['-q', '-n', 'add', '-inet', `${subnet}/${prefix}`, '-interface', name], { stdio: 'pipe' });
    } else {
        addon.configureIf(name, ip, prefix);
    }
}

// Read one IP packet. Strips the 4-byte AF prefix on macOS so callers see a
// raw IP header at offset 0 of the returned Buffer view.
function read(fd, buf, cb) {
    fs.read(fd, buf, 0, buf.length, null, (err, n) => {
        if (err || n <= 0) return cb(err, null);
        cb(null, HEADER ? buf.subarray(HEADER.length, n) : buf.subarray(0, n));
    });
}

// Write one IP packet. Prepends the AF prefix on macOS.
function write(fd, data, cb) {
    if (HEADER) data = Buffer.concat([HEADER, data]);
    fs.write(fd, data, cb || (() => {}));
}

function close(fd) {
    if (addon && fd != null) addon.closeTun(fd);
}

function networkOf(ip, prefix) {
    const p = ip.split('.').map(Number);
    const ipInt = ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0;
    const mask  = prefix === 0 ? 0 : (~((1 << (32 - prefix)) - 1)) >>> 0;
    const net   = (ipInt & mask) >>> 0;
    return [(net >>> 24) & 0xFF, (net >>> 16) & 0xFF, (net >>> 8) & 0xFF, net & 0xFF].join('.');
}

module.exports = { open, configure, read, write, close, isDarwin };
