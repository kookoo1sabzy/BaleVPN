//! IPv6 reject — build an ICMPv6 Destination Unreachable packet
//! suitable for writing back into a TUN device.
//!
//! The Android VPN routes `::/0` into the tunnel so apps can't bypass
//! the VPN over IPv6, but only IPv4 is forwarded across the LK link.
//! Silently dropping v6 packets makes apps wait out TCP timeouts;
//! returning an ICMPv6 DU lets them fall back to IPv4 immediately.
//! The function lives here (and not in any platform shim) so future
//! consumers — a Linux tun, a userspace TUN test harness, etc. — can
//! reuse it.

const ICMPV6_NEXT_HDR: u8 = 58;

fn be16(p: &[u8]) -> u16 { ((p[0] as u16) << 8) | (p[1] as u16) }
fn put_be16(dst: &mut [u8], v: u16) { dst[0] = (v >> 8) as u8; dst[1] = v as u8; }
fn put_be32(dst: &mut [u8], v: u32) {
    dst[0] = (v >> 24) as u8;
    dst[1] = (v >> 16) as u8;
    dst[2] = (v >> 8)  as u8;
    dst[3] =  v        as u8;
}

/// Internet checksum (RFC 1071) over a pseudo-header + payload buffer.
fn checksum16(data: &[u8]) -> u16 {
    let mut sum: u32 = 0;
    let mut i = 0;
    while i + 1 < data.len() {
        sum += be16(&data[i..i + 2]) as u32;
        i += 2;
    }
    if i < data.len() { sum += (data[i] as u32) << 8; }
    while sum >> 16 != 0 { sum = (sum & 0xffff) + (sum >> 16); }
    !(sum as u16) & 0xffff
}

/// Build an ICMPv6 Destination Unreachable (type 1, code 0 "no route
/// to destination") in response to `offending`. Returns the on-wire
/// IPv6 packet, or `None` if `offending` doesn't look like a real
/// v6 datagram (too short, or itself an ICMPv6 error — we don't want
/// to loop).
pub fn build_icmpv6_dest_unreach(offending: &[u8]) -> Option<Vec<u8>> {
    if offending.len() < 40 { return None; }
    let next_hdr = offending[6];
    // Don't reply to ICMPv6 error messages (types 0-127) — would
    // create a feedback loop. ICMPv6 informational types (128+) are
    // fine to bounce.
    if next_hdr == ICMPV6_NEXT_HDR && offending.len() >= 41 && offending[40] < 128 {
        return None;
    }

    // RFC 4443: include 8B ICMP header + as much of the offending
    // packet as fits within the minimum MTU (1280) minus a v6 header.
    let excerpt  = offending.len().min(1232);
    let icmp_len = 8 + excerpt;
    let total    = 40 + icmp_len;

    let mut reply = vec![0u8; total];

    // IPv6 header — swap src/dst from the offending packet.
    reply[0] = 0x60;                              // v6, TC 0
    put_be16(&mut reply[4..6], icmp_len as u16);  // payload length
    reply[6] = ICMPV6_NEXT_HDR;
    reply[7] = 64;                                 // hop limit
    reply[8 ..24].copy_from_slice(&offending[24..40]);   // src ← original dst
    reply[24..40].copy_from_slice(&offending[ 8..24]);   // dst ← original src

    // ICMPv6 body: type 1 (DU), code 0 (no route), 4 unused bytes,
    // then as much of the offending packet as fits. Type/code are
    // already at reply[40]/reply[41]:
    reply[40] = 1;
    reply[41] = 0;
    // 4 unused bytes after the 2-byte checksum slot already zero.
    reply[48..48 + excerpt].copy_from_slice(&offending[..excerpt]);

    // ICMPv6 checksum over pseudo-header + ICMP message.
    let mut cksum_buf = vec![0u8; 40 + icmp_len];
    cksum_buf[ 0..16].copy_from_slice(&reply[ 8..24]);   // src
    cksum_buf[16..32].copy_from_slice(&reply[24..40]);   // dst
    put_be32(&mut cksum_buf[32..36], icmp_len as u32);
    cksum_buf[39] = ICMPV6_NEXT_HDR;
    cksum_buf[40..].copy_from_slice(&reply[40..40 + icmp_len]);
    let cksum = checksum16(&cksum_buf);
    put_be16(&mut reply[42..44], cksum);

    Some(reply)
}
