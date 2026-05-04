'use strict';

// Thin wrapper around the native TUN addon (Linux only).
// Must be compiled first: npm run build-tun

const fs = require('fs');

let addon = null;
try {
    addon = require('../build/Release/tun');
} catch (_) {
    // Not built or not on Linux — TUN mode unavailable
}

// Opens the named TUN device and returns a numeric fd suitable for fs.read/write.
// Throws if the addon is not built or TUNSETIFF fails (e.g. insufficient privilege).
function open(name) {
    if (!addon) throw new Error('TUN addon not built. Run: npm run build-tun');
    return addon.openTun(name || 'bale0');
}

// Assigns an IPv4 address and brings the interface up via ioctls in the current
// process — works with setcap cap_net_admin without spawning child processes.
function configure(name, ip, prefix) {
    if (!addon) throw new Error('TUN addon not built. Run: npm run build-tun');
    addon.configureIf(name, ip, prefix);
}

// Closes a TUN fd previously opened with open().
function close(fd) {
    if (addon && fd != null) addon.closeTun(fd);
}

module.exports = { open, configure, close };
