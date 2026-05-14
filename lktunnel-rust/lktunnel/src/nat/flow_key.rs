//! Per-flow identity — the 5-tuple keying TCP / UDP flow tables.

use super::ip_addr::IpAddr;

#[derive(Clone, Copy, PartialEq, Eq, Hash)]
#[repr(u8)]
pub enum L4 { Tcp = 6, Udp = 17 }

#[derive(Clone, Copy, PartialEq, Eq, Hash)]
pub struct FlowKey {
    pub src:      IpAddr,
    pub dst:      IpAddr,
    pub src_port: u16,   // host order
    pub dst_port: u16,   // host order
    pub proto:    L4,
}
