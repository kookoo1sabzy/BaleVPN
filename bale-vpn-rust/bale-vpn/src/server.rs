//! Server-mode state. Mirrors the Android `BaleServerService`
//! architecture in shape — allow-list / block-list / pending
//! decisions / per-call LkTunnel map — but without the foreground-
//! service plumbing (the daemon process is always foreground).
//!
//! The actual NAT path (kernel-TUN or userspace) is set up in
//! `acceptAndStart` and lives behind [`Self::on_session_ready`].
//! For now we only handle the userspace-NAT path
//! ([`LkTunnel::start_server`]); kernel-TUN lands once the
//! cross-OS TUN helpers are ported from the lktunnel cli.

use lk_signaling::CallDecision;
use lktunnel::LkTunnel;
use parking_lot::Mutex;
use std::collections::HashMap;
use std::sync::Arc;
use std::time::{SystemTime, UNIX_EPOCH};
use tokio::sync::oneshot;

const DEFAULT_MAX_CLIENTS: u32 = 5;
const MAX_CLIENTS_LIMIT:   u32 = 253;

#[derive(Clone)]
pub struct PendingCallSnapshot {
    pub peer_id:      String,
    pub display_name: Option<String>,
    pub received_at:  u64,
}

#[derive(Clone)]
pub struct ClientInfo {
    pub peer_id:       String,
    pub display_name:  Option<String>,
    pub rx_bytes:      u64,
    pub tx_bytes:      u64,
    /// Absolute epoch-ms when the session connected. The HTTP
    /// /tunnel/clients handler exposes this directly so the
    /// UI's `fmtAge` (which computes `Date.now() - connectedAt`)
    /// renders correctly.
    pub connected_at_ms: u64,
}

struct Pending {
    deferred:     oneshot::Sender<CallDecision>,
    display_name: Option<String>,
    received_at:  u64,
}

struct ActiveClient {
    tunnel:       Arc<LkTunnel>,
    display_name: Option<String>,
    connected_at: u64,
    /// Kernel-TUN slot index (0..KERNEL_TUN_SLOT_LIMIT) if this
    /// session is using kernel NAT; `None` for userspace NAT.
    /// Returned to [`ServerState::kernel_slots`] on remove.
    kernel_slot:  Option<u8>,
}

/// Server-mode state. Wrapped in an Arc by the daemon and
/// shared with the HTTP UI handlers.
pub struct ServerState {
    /// Allow-list — peer IDs whose calls auto-accept.
    admission:    tokio::sync::Mutex<Vec<String>>,
    /// Block-list — peer IDs whose calls silently drop.
    blacklist:    tokio::sync::Mutex<Vec<String>>,
    /// Cap on simultaneously-connected callers. Caller may
    /// expose this via UI; defaults to 5.
    max_clients:  parking_lot::Mutex<u32>,
    /// In-flight admission decisions awaiting user action.
    pending:      Mutex<HashMap<String, Pending>>,
    /// Active accepted sessions keyed by peer id.
    clients:      Mutex<HashMap<String, ActiveClient>>,
    /// Free kernel-TUN slots. `pop` allocates, `push` returns.
    /// Stored as a stack so the same slot index gets reused
    /// quickly (warmer kernel route table). Population is
    /// `0..crate::daemon::KERNEL_TUN_SLOT_LIMIT` at start.
    kernel_slots: parking_lot::Mutex<Vec<u8>>,
}

impl ServerState {
    pub fn new() -> Arc<Self> {
        Self::with_config(Vec::new(), Vec::new(), DEFAULT_MAX_CLIENTS)
    }

    /// Construct seeded from on-disk config (admission /
    /// blacklist / max_clients). Daemon calls this at startup
    /// so the persisted state carries over between runs.
    pub fn with_config(
        admission:   Vec<String>,
        blacklist:   Vec<String>,
        max_clients: u32,
    ) -> Arc<Self> {
        let initial_slots: Vec<u8> =
            (0..crate::daemon::KERNEL_TUN_SLOT_LIMIT).rev().collect();
        Arc::new(Self {
            admission:    tokio::sync::Mutex::new(admission),
            blacklist:    tokio::sync::Mutex::new(blacklist),
            max_clients:  parking_lot::Mutex::new(max_clients.clamp(1, MAX_CLIENTS_LIMIT)),
            pending:      Mutex::new(HashMap::new()),
            clients:      Mutex::new(HashMap::new()),
            kernel_slots: parking_lot::Mutex::new(initial_slots),
        })
    }

    // ── Kernel TUN slot pool ─────────────────────────────────

    /// Reserve a slot for a new kernel-TUN session. Returns
    /// `None` if the pool is exhausted (caller falls back to
    /// userspace NAT).
    pub fn alloc_kernel_slot(&self) -> Option<u8> {
        self.kernel_slots.lock().pop()
    }

    /// Return a slot to the pool. Idempotent: a slot already in
    /// the pool stays in the pool (we re-insert blindly).
    pub fn release_kernel_slot(&self, slot: u8) {
        let mut slots = self.kernel_slots.lock();
        if !slots.contains(&slot) { slots.push(slot); }
    }

    // ── Admission ────────────────────────────────────────────

    pub async fn admission_list(&self) -> Vec<String> {
        self.admission.lock().await.clone()
    }
    pub async fn admission_add(&self, peer_id: &str) {
        let mut a = self.admission.lock().await;
        if !a.contains(&peer_id.to_string()) { a.push(peer_id.to_string()); }
    }
    pub async fn admission_remove(&self, peer_id: &str) {
        self.admission.lock().await.retain(|p| p != peer_id);
    }

    pub async fn blacklist_list(&self) -> Vec<String> {
        self.blacklist.lock().await.clone()
    }
    pub async fn blacklist_add(&self, peer_id: &str) {
        let mut b = self.blacklist.lock().await;
        if !b.contains(&peer_id.to_string()) { b.push(peer_id.to_string()); }
    }
    pub async fn blacklist_remove(&self, peer_id: &str) {
        self.blacklist.lock().await.retain(|p| p != peer_id);
    }

    pub fn max_clients(&self) -> u32 { *self.max_clients.lock() }
    pub async fn set_max_clients(&self, n: u32) {
        *self.max_clients.lock() = n.min(MAX_CLIENTS_LIMIT).max(1);
    }

    // ── Pending decisions ────────────────────────────────────

    /// Called by the IncomingHandler bridge when a new call
    /// needs a user decision. The future resolves when the UI
    /// calls [`Self::pending_resolve`] or the caller times out.
    pub async fn pending_park(
        &self,
        peer_id:      String,
        display_name: Option<String>,
        deferred:     oneshot::Sender<CallDecision>,
    ) {
        let entry = Pending {
            deferred,
            display_name,
            // epoch-ms — the HTTP UI's `fmtAge` expects ms.
            received_at: now_ms(),
        };
        self.pending.lock().insert(peer_id, entry);
    }

    pub async fn pending_list(&self) -> Vec<PendingCallSnapshot> {
        self.pending.lock().iter()
            .map(|(peer_id, p)| PendingCallSnapshot {
                peer_id:      peer_id.clone(),
                display_name: p.display_name.clone(),
                received_at:  p.received_at,
            })
            .collect()
    }

    pub async fn pending_resolve(&self, peer_id: &str, decision: CallDecision) {
        if let Some(p) = self.pending.lock().remove(peer_id) {
            let _ = p.deferred.send(decision);
        }
    }

    // ── Active clients ───────────────────────────────────────

    pub async fn client_count(&self) -> usize { self.clients.lock().len() }

    pub async fn install_client(
        &self,
        peer_id:      String,
        tunnel:       Arc<LkTunnel>,
        display_name: Option<String>,
        kernel_slot:  Option<u8>,
    ) {
        self.clients.lock().insert(peer_id, ActiveClient {
            tunnel,
            display_name,
            connected_at: now_secs(),
            kernel_slot,
        });
    }

    pub async fn remove_client(&self, peer_id: &str) {
        if let Some(c) = self.clients.lock().remove(peer_id) {
            // Closing the LkTunnel signals participant-disconnect
            // to the peer; Bale fires callEnded back. Same
            // pattern Android uses.
            c.tunnel.disconnect();
            if let Some(slot) = c.kernel_slot {
                self.release_kernel_slot(slot);
            }
        }
    }

    /// Drop every connected client and cancel every pending
    /// decision. Used on mode-switch out of server: the new mode
    /// shouldn't accept work that targets the old admission
    /// state. The IncomingHandler is reinstalled separately
    /// (see daemon.rs).
    pub async fn clear_all(&self) {
        let mut clients = std::mem::take(&mut *self.clients.lock());
        for (_, c) in clients.drain() {
            c.tunnel.disconnect();
            if let Some(slot) = c.kernel_slot {
                self.release_kernel_slot(slot);
            }
        }
        // Drop every pending sender — the parked `decide()` calls
        // resolve to RecvError → SilentlyIgnore.
        self.pending.lock().clear();
    }

    pub async fn client_infos(&self) -> Vec<ClientInfo> {
        self.clients.lock().iter().map(|(peer_id, c)| {
            let stats = c.tunnel.stats();
            ClientInfo {
                peer_id:      peer_id.clone(),
                display_name: c.display_name.clone(),
                // stats: [rx_pkts, rx_bytes, tx_pkts, tx_bytes]
                rx_bytes: stats[1],
                tx_bytes: stats[3],
                // `connected_at` is stored as epoch-secs; the
                // UI's `fmtAge` wants epoch-ms.
                connected_at_ms: c.connected_at.saturating_mul(1000),
            }
        }).collect()
    }
}

fn now_secs() -> u64 {
    SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_secs()).unwrap_or(0)
}

fn now_ms() -> u64 {
    SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_millis() as u64).unwrap_or(0)
}
