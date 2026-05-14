//! IP address — dual-stack, network-byte-order storage.
//!
//! Carried as 16 bytes in all cases; for v4 only the first 4 bytes are
//! meaningful. Tagging is by `family`, not by inspecting bytes, so an
//! "all-zero v4 address" is unambiguous.

use std::fmt;

#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub enum Family { V4, V6 }

#[derive(Clone, Copy)]
pub struct IpAddr {
    pub family: Family,
    pub bytes:  [u8; 16],   // network order; v4 lives in bytes[0..3]
}

impl IpAddr {
    pub fn v4_from_u32_be(be_addr: u32) -> Self {
        let mut bytes = [0u8; 16];
        bytes[..4].copy_from_slice(&be_addr.to_be_bytes());
        Self { family: Family::V4, bytes }
    }
    pub fn v4_from_bytes(b: &[u8]) -> Self {
        let mut bytes = [0u8; 16];
        bytes[..4].copy_from_slice(&b[..4]);
        Self { family: Family::V4, bytes }
    }
    #[allow(dead_code)]
    pub fn v6_from_bytes(b: &[u8]) -> Self {
        let mut bytes = [0u8; 16];
        bytes.copy_from_slice(&b[..16]);
        Self { family: Family::V6, bytes }
    }

    pub fn is_v4(&self) -> bool { matches!(self.family, Family::V4) }
    pub fn is_v6(&self) -> bool { matches!(self.family, Family::V6) }

    /// IP read as a 32-bit number with the first octet in the high byte
    /// — i.e. `Ipv4Addr::from(this)` reproduces the same IP. **Not** the
    /// shape of `struct in_addr::s_addr` (which on little-endian is the
    /// byte-reversed value); the name is historical. Do NOT wrap this in
    /// `u32::from_be(...)` before handing to `Ipv4Addr::from` — that
    /// double-swap was the cause of a long-standing connect-to-mirror-IP
    /// regression vs. the C++ NAT.
    pub fn v4_be(&self) -> u32 {
        u32::from_be_bytes([self.bytes[0], self.bytes[1], self.bytes[2], self.bytes[3]])
    }
}

impl PartialEq for IpAddr {
    fn eq(&self, o: &Self) -> bool {
        if self.family != o.family { return false; }
        let n = if matches!(self.family, Family::V4) { 4 } else { 16 };
        self.bytes[..n] == o.bytes[..n]
    }
}
impl Eq for IpAddr {}

impl std::hash::Hash for IpAddr {
    fn hash<H: std::hash::Hasher>(&self, h: &mut H) {
        // Same shape as the C++ std::hash specialisation; doesn't have
        // to match bit-for-bit but should be a good distribution.
        let mut acc: u64 = 0x9E3779B97F4A7C15;
        acc ^= self.family as u64 + 0x165667B1;
        let lo = u64::from_ne_bytes(self.bytes[..8].try_into().unwrap());
        let hi = u64::from_ne_bytes(self.bytes[8..16].try_into().unwrap());
        acc ^= lo.wrapping_add(acc << 17);
        acc ^= hi.wrapping_add(acc << 23);
        (acc ^ (acc >> 32)).hash(h);
    }
}

impl fmt::Display for IpAddr {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.family {
            Family::V4 => write!(f, "{}.{}.{}.{}",
                self.bytes[0], self.bytes[1], self.bytes[2], self.bytes[3]),
            Family::V6 => {
                // Simple unabbreviated form — fine for logs.
                let mut groups = [0u16; 8];
                for i in 0..8 {
                    groups[i] = u16::from_be_bytes([self.bytes[i * 2], self.bytes[i * 2 + 1]]);
                }
                write!(f, "{:x}:{:x}:{:x}:{:x}:{:x}:{:x}:{:x}:{:x}",
                    groups[0], groups[1], groups[2], groups[3],
                    groups[4], groups[5], groups[6], groups[7])
            }
        }
    }
}

impl fmt::Debug for IpAddr {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result { fmt::Display::fmt(self, f) }
}
