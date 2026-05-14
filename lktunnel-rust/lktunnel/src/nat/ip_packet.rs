//! Raw IP/TCP/UDP packet view + builder.
//!
//! Ported line-for-line from C++ nat/ip_packet.cc. v4-only for now;
//! v6 paths are stubbed and return failure until we wire them up.

use super::flow_key::L4;
use super::ip_addr::{Family, IpAddr};

// ── Byte-order helpers ─────────────────────────────────────────────────
#[inline] pub fn be16(b: &[u8]) -> u16 { ((b[0] as u16) << 8) | (b[1] as u16) }
#[inline] pub fn be32(b: &[u8]) -> u32 {
    ((b[0] as u32) << 24) | ((b[1] as u32) << 16) | ((b[2] as u32) << 8) | (b[3] as u32)
}
#[inline] pub fn put_be16(p: &mut [u8], v: u16) { p[0] = (v >> 8) as u8; p[1] = v as u8; }
#[inline] pub fn put_be32(p: &mut [u8], v: u32) {
    p[0] = (v >> 24) as u8; p[1] = (v >> 16) as u8;
    p[2] = (v >>  8) as u8; p[3] =  v        as u8;
}

// ── Checksum core (RFC 1071) ───────────────────────────────────────────

pub fn checksum_partial(data: &[u8], seed: u32) -> u32 {
    let mut sum: u32 = seed;
    let mut i = 0;
    while i + 1 < data.len() {
        sum = sum.wrapping_add(be16(&data[i..i + 2]) as u32);
        i += 2;
    }
    if i < data.len() {
        sum = sum.wrapping_add((data[i] as u32) << 8);   // pad odd byte high
    }
    while sum >> 16 != 0 {
        sum = (sum & 0xffff) + (sum >> 16);
    }
    sum
}

pub fn checksum_final(mut partial: u32) -> u16 {
    while partial >> 16 != 0 {
        partial = (partial & 0xffff) + (partial >> 16);
    }
    (!(partial as u16)) & 0xffff
}

pub fn internet_checksum(data: &[u8]) -> u16 {
    checksum_final(checksum_partial(data, 0))
}

pub fn l4_checksum(src: &IpAddr, dst: &IpAddr, proto: u8, l4: &[u8]) -> u16 {
    let mut sum: u32 = 0;
    if src.is_v4() {
        sum = checksum_partial(&src.bytes[..4], sum);
        sum = checksum_partial(&dst.bytes[..4], sum);
        let hdr = [0u8, proto, (l4.len() >> 8) as u8, l4.len() as u8];
        sum = checksum_partial(&hdr, sum);
    } else {
        sum = checksum_partial(&src.bytes, sum);
        sum = checksum_partial(&dst.bytes, sum);
        let l4_len = l4.len() as u32;
        let tail = [
            (l4_len >> 24) as u8, (l4_len >> 16) as u8,
            (l4_len >>  8) as u8,  l4_len        as u8,
            0, 0, 0, proto,
        ];
        sum = checksum_partial(&tail, sum);
    }
    sum = checksum_partial(l4, sum);
    checksum_final(sum)
}

// ── IpPacket view ─────────────────────────────────────────────────────

pub struct IpPacket<'a> {
    data:        &'a [u8],
    total_len:   usize,
    l3_hdr_len:  usize,
    pub family:  Family,
    pub proto:   u8,
    #[allow(dead_code)] pub ttl_hops: u8,
    pub ip_id:          u16,
    pub frag_off_units: u16,
    pub more_frags:     bool,
    pub src: IpAddr,
    pub dst: IpAddr,
}

impl<'a> IpPacket<'a> {
    pub fn parse(data: &'a [u8]) -> Option<IpPacket<'a>> {
        if data.is_empty() { return None; }
        let v = data[0] >> 4;
        if v == 4 {
            if data.len() < 20 { return None; }
            let ihl   = (data[0] & 0x0f) as usize;
            let hdr   = ihl * 4;
            let total = be16(&data[2..4]) as usize;
            if ihl < 5 || hdr > data.len() || total > data.len() || total < hdr {
                return None;
            }
            if internet_checksum(&data[..hdr]) != 0 { return None; }
            let flags_off = be16(&data[6..8]);
            return Some(IpPacket {
                data,
                total_len:      total,
                l3_hdr_len:     hdr,
                family:         Family::V4,
                proto:          data[9],
                ttl_hops:       data[8],
                ip_id:          be16(&data[4..6]),
                frag_off_units: flags_off & 0x1FFF,
                more_frags:     (flags_off & 0x2000) != 0,
                src: IpAddr::v4_from_bytes(&data[12..16]),
                dst: IpAddr::v4_from_bytes(&data[16..20]),
            });
        }
        // v6: stubbed
        None
    }

    pub fn l4(&self) -> &'a [u8] {
        &self.data[self.l3_hdr_len..self.total_len]
    }
    pub fn l4_len(&self) -> usize { self.total_len - self.l3_hdr_len }
    pub fn frag_offset_bytes(&self) -> u16 { self.frag_off_units * 8 }
    pub fn is_fragment(&self) -> bool { self.more_frags || self.frag_off_units != 0 }
}

// ── L4 header views ───────────────────────────────────────────────────

pub struct TcpHeader<'a> { pub p: &'a [u8] }
impl<'a> TcpHeader<'a> {
    pub fn src_port(&self) -> u16 { be16(&self.p[0..2])  }
    pub fn dst_port(&self) -> u16 { be16(&self.p[2..4])  }
    pub fn seq(&self)      -> u32 { be32(&self.p[4..8])  }
    pub fn ack(&self)      -> u32 { be32(&self.p[8..12]) }
    pub fn data_off(&self) -> usize { ((self.p[12] >> 4) as usize) * 4 }
    pub fn flags(&self)    -> u8  { self.p[13] }
    pub fn window(&self)   -> u16 { be16(&self.p[14..16]) }
    #[allow(dead_code)] pub fn checksum(&self) -> u16 { be16(&self.p[16..18]) }
}

pub struct UdpHeader<'a> { pub p: &'a [u8] }
impl<'a> UdpHeader<'a> {
    pub fn src_port(&self) -> u16 { be16(&self.p[0..2]) }
    pub fn dst_port(&self) -> u16 { be16(&self.p[2..4]) }
    pub fn udp_len(&self)  -> u16 { be16(&self.p[4..6]) }
    pub fn payload(&self) -> &'a [u8] { &self.p[8..] }
    pub fn payload_len(&self) -> usize {
        let l = self.udp_len() as usize;
        if l >= 8 { l - 8 } else { 0 }
    }
}

// ── TCP flag constants ────────────────────────────────────────────────
pub const TCP_FIN: u8 = 0x01;
pub const TCP_SYN: u8 = 0x02;
pub const TCP_RST: u8 = 0x04;
#[allow(dead_code)] pub const TCP_PSH: u8 = 0x08;
pub const TCP_ACK: u8 = 0x10;

// ── Builders ──────────────────────────────────────────────────────────

pub struct TcpBuild<'a> {
    pub src: IpAddr, pub dst: IpAddr,
    pub src_port: u16, pub dst_port: u16,
    pub seq: u32, pub ack: u32,
    pub flags: u8,
    pub window: u16,
    pub options: &'a [u8],
    pub payload: &'a [u8],
}

pub struct UdpBuild<'a> {
    pub src: IpAddr, pub dst: IpAddr,
    pub src_port: u16, pub dst_port: u16,
    pub payload: &'a [u8],
}

fn write_ipv4_header(out: &mut [u8], total_len: u16, proto: u8, src: &IpAddr, dst: &IpAddr) {
    out[0] = 0x45;
    out[1] = 0;
    put_be16(&mut out[2..4], total_len);
    out[4] = 0; out[5] = 0;     // ID — never fragment outbound
    out[6] = 0x40;              // DF=1, MF=0, offset=0
    out[7] = 0;
    out[8] = 64;                // TTL
    out[9] = proto;
    out[10] = 0; out[11] = 0;   // cksum placeholder
    out[12..16].copy_from_slice(&src.bytes[..4]);
    out[16..20].copy_from_slice(&dst.bytes[..4]);
    let cs = internet_checksum(&out[..20]);
    put_be16(&mut out[10..12], cs);
}

pub fn write_ipv4_header_frag(out: &mut [u8], total_len: u16, proto: u8,
                               src: &IpAddr, dst: &IpAddr,
                               ip_id: u16, frag_off_units: u16, more_fragments: bool) {
    out[0] = 0x45;
    out[1] = 0;
    put_be16(&mut out[2..4], total_len);
    put_be16(&mut out[4..6], ip_id);
    let mut flags_off = frag_off_units & 0x1FFF;
    if more_fragments { flags_off |= 0x2000; }
    put_be16(&mut out[6..8], flags_off);
    out[8] = 64; out[9] = proto;
    out[10] = 0; out[11] = 0;
    out[12..16].copy_from_slice(&src.bytes[..4]);
    out[16..20].copy_from_slice(&dst.bytes[..4]);
    let cs = internet_checksum(&out[..20]);
    put_be16(&mut out[10..12], cs);
}

pub fn build_tcp(out: &mut [u8], b: &TcpBuild) -> usize {
    if !b.src.is_v4() || !b.dst.is_v4() { return 0; }
    if b.options.len() % 4 != 0 { return 0; }
    let tcp_hdr = 20 + b.options.len();
    let tcp_seg = tcp_hdr + b.payload.len();
    let total   = 20 + tcp_seg;
    if out.len() < total { return 0; }
    if tcp_seg > 0xffff || total > 0xffff { return 0; }
    {
        let tcp = &mut out[20..20 + tcp_seg];
        put_be16(&mut tcp[0..2],  b.src_port);
        put_be16(&mut tcp[2..4],  b.dst_port);
        put_be32(&mut tcp[4..8],  b.seq);
        put_be32(&mut tcp[8..12], b.ack);
        tcp[12] = ((tcp_hdr / 4) << 4) as u8;
        tcp[13] = b.flags;
        put_be16(&mut tcp[14..16], b.window);
        tcp[16] = 0; tcp[17] = 0;
        put_be16(&mut tcp[18..20], 0);
        if !b.options.is_empty() { tcp[20..20 + b.options.len()].copy_from_slice(b.options); }
        if !b.payload.is_empty() { tcp[tcp_hdr..tcp_hdr + b.payload.len()].copy_from_slice(b.payload); }
        let cs = l4_checksum(&b.src, &b.dst, L4::Tcp as u8, tcp);
        put_be16(&mut tcp[16..18], cs);
    }
    write_ipv4_header(out, total as u16, L4::Tcp as u8, &b.src, &b.dst);
    total
}

// ── SNAT helpers — incremental checksum fixup ──────────────────────
//
// When the gateway rewrites the src or dst IPv4 address of a packet
// in place (kernel-TUN multi-client SNAT), we don't want to recompute
// the whole IP / L4 checksum from scratch — too expensive on the hot
// path. RFC 1624 gives the closed-form update:
//
//     HC' = ~(~HC + ~m + m')
//
// where HC is the old checksum, m is the old field, m' is the new.
// Both IP-header and L4 (TCP / UDP) checksums need this fixup because
// the L4 pseudo-header includes the src + dst addresses.

/// Update one 16-bit checksum word given that a single 16-bit chunk
/// of its covered area changed from `old` to `new`. RFC 1624.
#[inline]
fn csum_update16(cksum: u16, old: u16, new: u16) -> u16 {
    let mut sum: u32 = (!cksum) as u32
        + (!old as u16) as u32
        + new as u32;
    // Fold carries in (at most twice for two u16 adds).
    while (sum >> 16) != 0 {
        sum = (sum & 0xffff) + (sum >> 16);
    }
    !(sum as u16)
}

/// 32-bit address change ⇒ apply RFC 1624 twice (one per u16 chunk).
#[inline]
fn csum_update_addr(cksum: u16, old: [u8; 4], new: [u8; 4]) -> u16 {
    let cksum = csum_update16(cksum, be16(&old[0..2]), be16(&new[0..2]));
    csum_update16(cksum, be16(&old[2..4]), be16(&new[2..4]))
}

/// In-place rewrite of the IPv4 source address. Also fixes both the
/// IP-header checksum and the L4 (TCP / UDP) checksum so the packet
/// stays well-formed on the wire. No-op (and `true`) when the
/// requested address already matches. Returns `false` for any
/// packet we won't touch — too short to be IPv4, wrong version,
/// non-TCP/UDP, or truncated L4 header. The caller can drop those.
pub fn rewrite_v4_src(pkt: &mut [u8], new_src: [u8; 4]) -> bool {
    rewrite_v4_addr(pkt, new_src, /* is_src = */ true)
}

/// Sibling of [`rewrite_v4_src`] for the destination address.
pub fn rewrite_v4_dst(pkt: &mut [u8], new_dst: [u8; 4]) -> bool {
    rewrite_v4_addr(pkt, new_dst, /* is_src = */ false)
}

fn rewrite_v4_addr(pkt: &mut [u8], new_addr: [u8; 4], is_src: bool) -> bool {
    if pkt.len() < 20                    { return false; }
    if (pkt[0] >> 4) != 4                { return false; }
    let ihl   = ((pkt[0] & 0x0f) as usize) * 4;
    let proto = pkt[9];
    if pkt.len() < ihl                   { return false; }

    let addr_off = if is_src { 12 } else { 16 };
    let old_addr: [u8; 4] = [
        pkt[addr_off],
        pkt[addr_off + 1],
        pkt[addr_off + 2],
        pkt[addr_off + 3],
    ];
    if old_addr == new_addr              { return true; }  // no-op

    // 1. Fixup IP-header checksum.
    let ip_cksum = be16(&pkt[10..12]);
    let ip_cksum = csum_update_addr(ip_cksum, old_addr, new_addr);
    put_be16(&mut pkt[10..12], ip_cksum);

    // 2. Write new address.
    pkt[addr_off..addr_off + 4].copy_from_slice(&new_addr);

    // 3. Fixup L4 checksum (TCP or UDP). Other protos go unmodified
    //    — ICMP echo etc. don't put the L3 addresses in their
    //    pseudo-header, so an address change doesn't affect their
    //    checksum and we can leave their packets alone.
    let l4 = &mut pkt[ihl..];
    match proto {
        6 /* TCP */ => {
            if l4.len() < 18 { return false; }
            let cs = be16(&l4[16..18]);
            let cs = csum_update_addr(cs, old_addr, new_addr);
            put_be16(&mut l4[16..18], cs);
        }
        17 /* UDP */ => {
            if l4.len() < 8 { return false; }
            let cs = be16(&l4[6..8]);
            // RFC 768: a UDP checksum of 0 means "sender did not
            // compute" — IPv4 UDP packets are allowed to skip it.
            // Don't touch a zero checksum.
            if cs != 0 {
                let mut new_cs = csum_update_addr(cs, old_addr, new_addr);
                // RFC 768: a computed result of 0 must be transmitted
                // as 0xffff so the receiver doesn't read it as
                // "skipped".
                if new_cs == 0 { new_cs = 0xffff; }
                put_be16(&mut l4[6..8], new_cs);
            }
        }
        _ => {}  // ICMP / other — pseudo-header doesn't include addresses
    }
    true
}

pub fn build_udp(out: &mut [u8], b: &UdpBuild) -> usize {
    if !b.src.is_v4() || !b.dst.is_v4() { return 0; }
    let udp_seg = 8 + b.payload.len();
    let total   = 20 + udp_seg;
    if out.len() < total { return 0; }
    if udp_seg > 0xffff || total > 0xffff { return 0; }
    {
        let udp = &mut out[20..20 + udp_seg];
        put_be16(&mut udp[0..2], b.src_port);
        put_be16(&mut udp[2..4], b.dst_port);
        put_be16(&mut udp[4..6], udp_seg as u16);
        udp[6] = 0; udp[7] = 0;
        if !b.payload.is_empty() { udp[8..8 + b.payload.len()].copy_from_slice(b.payload); }
        let mut cs = l4_checksum(&b.src, &b.dst, L4::Udp as u8, udp);
        if cs == 0 { cs = 0xffff; }   // RFC 768
        put_be16(&mut udp[6..8], cs);
    }
    write_ipv4_header(out, total as u16, L4::Udp as u8, &b.src, &b.dst);
    total
}

#[cfg(test)]
mod rewrite_tests {
    use super::*;

    /// Build a minimal TCP-over-IPv4 packet with valid checksums via
    /// `build_tcp`, rewrite its src, and confirm both the IP and TCP
    /// checksums round-trip to what a from-scratch recompute would
    /// produce. Anything else means our incremental fixup is wrong.
    #[test]
    fn rewrite_src_tcp_matches_full_recompute() {
        let src      = IpAddr::v4_from_bytes(&[10, 8, 0, 2]);
        let dst      = IpAddr::v4_from_bytes(&[8, 8, 8, 8]);
        let new_src  = IpAddr::v4_from_bytes(&[10, 8, 0, 42]);
        let payload  = b"hello";

        let mut pkt = vec![0u8; 64];
        let n = build_tcp(&mut pkt, &TcpBuild {
            src, dst,
            src_port: 12345, dst_port: 80,
            seq: 1, ack: 0, flags: TCP_SYN,
            window: 65535, options: &[], payload,
        });
        pkt.truncate(n);

        // Reference: build the same packet but with new_src directly.
        let mut want = vec![0u8; 64];
        let m = build_tcp(&mut want, &TcpBuild {
            src: new_src, dst,
            src_port: 12345, dst_port: 80,
            seq: 1, ack: 0, flags: TCP_SYN,
            window: 65535, options: &[], payload,
        });
        want.truncate(m);

        assert!(rewrite_v4_src(&mut pkt, [10, 8, 0, 42]));
        assert_eq!(pkt, want, "TCP rewrite did not match a from-scratch build");
    }

    #[test]
    fn rewrite_dst_udp_matches_full_recompute() {
        let src     = IpAddr::v4_from_bytes(&[10, 8, 0, 2]);
        let dst     = IpAddr::v4_from_bytes(&[1, 1, 1, 1]);
        let new_dst = IpAddr::v4_from_bytes(&[8, 8, 4, 4]);
        let payload = b"query body";

        let mut pkt = vec![0u8; 64];
        let n = build_udp(&mut pkt, &UdpBuild {
            src, dst,
            src_port: 5353, dst_port: 53,
            payload,
        });
        pkt.truncate(n);

        let mut want = vec![0u8; 64];
        let m = build_udp(&mut want, &UdpBuild {
            src, dst: new_dst,
            src_port: 5353, dst_port: 53,
            payload,
        });
        want.truncate(m);

        assert!(rewrite_v4_dst(&mut pkt, [8, 8, 4, 4]));
        assert_eq!(pkt, want, "UDP rewrite did not match a from-scratch build");
    }

    /// Rewriting to the same address must be a no-op (and return
    /// `true`), so the gateway can call this unconditionally on
    /// every packet without paying a checksum recompute when the
    /// lease is already 10.8.0.2 (e.g. the very first peer).
    #[test]
    fn rewrite_to_same_addr_is_noop() {
        let src = IpAddr::v4_from_bytes(&[10, 8, 0, 2]);
        let dst = IpAddr::v4_from_bytes(&[1, 1, 1, 1]);

        let mut pkt = vec![0u8; 64];
        let n = build_tcp(&mut pkt, &TcpBuild {
            src, dst,
            src_port: 1, dst_port: 1,
            seq: 0, ack: 0, flags: 0,
            window: 0, options: &[], payload: b"",
        });
        pkt.truncate(n);
        let snapshot = pkt.clone();

        assert!(rewrite_v4_src(&mut pkt, [10, 8, 0, 2]));
        assert_eq!(pkt, snapshot, "same-addr rewrite mutated the packet");
    }

    #[test]
    fn rewrite_rejects_short_packet() {
        let mut pkt = vec![0u8; 10];
        assert!(!rewrite_v4_src(&mut pkt, [1, 2, 3, 4]));
    }

    #[test]
    fn rewrite_rejects_non_v4() {
        let mut pkt = vec![0u8; 40];
        pkt[0] = 0x60;  // IPv6 version field
        assert!(!rewrite_v4_src(&mut pkt, [1, 2, 3, 4]));
    }

    /// UDP packets with checksum 0 (RFC 768 "not computed") must
    /// stay at 0 after a rewrite — otherwise the receiver thinks
    /// we computed a checksum and rejects on mismatch.
    #[test]
    fn rewrite_preserves_udp_zero_checksum() {
        // Build a UDP packet, then manually zero out its checksum
        // to simulate a "sender opted out" datagram.
        let src = IpAddr::v4_from_bytes(&[10, 8, 0, 2]);
        let dst = IpAddr::v4_from_bytes(&[1, 1, 1, 1]);
        let mut pkt = vec![0u8; 64];
        let n = build_udp(&mut pkt, &UdpBuild {
            src, dst,
            src_port: 1, dst_port: 1,
            payload: b"x",
        });
        pkt.truncate(n);
        // Find UDP checksum offset (IHL is 5 → IP header 20 bytes,
        // UDP cksum at offset 20+6 = 26).
        let cs_off = 20 + 6;
        pkt[cs_off] = 0; pkt[cs_off + 1] = 0;

        assert!(rewrite_v4_src(&mut pkt, [10, 8, 0, 99]));
        assert_eq!(pkt[cs_off], 0);
        assert_eq!(pkt[cs_off + 1], 0);
    }
}
