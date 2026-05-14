//! Atomic rx/tx packet + byte counters. Shared via `Arc<Counters>`
//! between the NAT / TUN dispatchers and whichever code surfaces them
//! (Kotlin stats poll, CLI log, etc.). Lock-free; cheap.

use std::sync::atomic::{AtomicU64, Ordering};

pub struct Counters {
    rx_pkts:  AtomicU64,
    rx_bytes: AtomicU64,
    tx_pkts:  AtomicU64,
    tx_bytes: AtomicU64,
}

impl Counters {
    pub fn new() -> Self {
        Self {
            rx_pkts:  AtomicU64::new(0),
            rx_bytes: AtomicU64::new(0),
            tx_pkts:  AtomicU64::new(0),
            tx_bytes: AtomicU64::new(0),
        }
    }

    pub fn bump_rx(&self, n: usize) {
        self.rx_pkts .fetch_add(1, Ordering::Relaxed);
        self.rx_bytes.fetch_add(n as u64, Ordering::Relaxed);
    }
    pub fn bump_tx(&self, n: usize) {
        self.tx_pkts .fetch_add(1, Ordering::Relaxed);
        self.tx_bytes.fetch_add(n as u64, Ordering::Relaxed);
    }

    /// `[rxPkts, rxBytes, txPkts, txBytes]`.
    pub fn snapshot(&self) -> [u64; 4] {
        [
            self.rx_pkts .load(Ordering::Relaxed),
            self.rx_bytes.load(Ordering::Relaxed),
            self.tx_pkts .load(Ordering::Relaxed),
            self.tx_bytes.load(Ordering::Relaxed),
        ]
    }
}

impl Default for Counters {
    fn default() -> Self { Self::new() }
}
