//! Client-mode state. Holds the per-session [`LkTunnel`] and
//! exposes a tiny query surface for the HTTP UI.

use lktunnel::LkTunnel;
use parking_lot::Mutex;
use std::sync::Arc;

/// Tracked client-mode session. `None` until [`Self::set_tunnel`]
/// is called from the daemon's place-call success path.
#[derive(Default)]
pub struct ClientState {
    inner: Mutex<Option<Inner>>,
}

struct Inner {
    tunnel:       Arc<LkTunnel>,
    socks5_port:  u16,
}

impl ClientState {
    pub fn new() -> Arc<Self> { Arc::new(Self::default()) }

    pub fn set_tunnel(&self, tunnel: Arc<LkTunnel>, socks5_port: u16) {
        *self.inner.lock() = Some(Inner { tunnel, socks5_port });
    }

    pub fn clear(&self) { *self.inner.lock() = None; }

    pub async fn socks5_bound_port(&self) -> Option<u16> {
        self.inner.lock().as_ref().map(|i| i.socks5_port)
    }

    /// Strong handle to the active tunnel, if any. Useful for
    /// runtime mutations (toggle SOCKS5 on/off via the UI).
    /// Returns `None` when no client session is up. Currently
    /// unused — wired in once the SOCKS5 toggle and port-change
    /// HTTP endpoints land.
    #[allow(dead_code)]
    pub fn tunnel(&self) -> Option<Arc<LkTunnel>> {
        self.inner.lock().as_ref().map(|i| i.tunnel.clone())
    }

    /// Snapshot for the HTTP `/state` endpoint — connection flag,
    /// SOCKS5 port, RX/TX bytes. None when no client session is
    /// active.
    pub async fn snapshot(&self) -> Option<ClientSnapshot> {
        let inner = self.inner.lock();
        let i = inner.as_ref()?;
        let connected = i.tunnel.is_connected();
        let stats = i.tunnel.stats();
        Some(ClientSnapshot {
            socks5_port: i.socks5_port,
            connected,
            // stats layout: [rx_pkts, rx_bytes, tx_pkts, tx_bytes].
            rx_bytes: stats[1],
            tx_bytes: stats[3],
        })
    }
}

#[derive(Clone)]
pub struct ClientSnapshot {
    pub socks5_port: u16,
    pub connected:   bool,
    pub rx_bytes:    u64,
    pub tx_bytes:    u64,
}
