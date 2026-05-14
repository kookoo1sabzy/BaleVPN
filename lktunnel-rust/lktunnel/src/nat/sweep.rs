//! Global per-iteration tick that walks every live `NatDispatcher`
//! created via [`NatDispatcher::create_boxed`] and runs `sweep_idle`.
//!
//! The registry holds raw `usize` addresses (not Arcs) because
//! `NatDispatcher` lives inside a `Box` owned by the caller — the
//! address is stable until `Drop`, which unregisters first thing.
//! Plain `Mutex` (not [`DispatcherOwned`]) so the CLI's main-thread
//! Drop path is safe; lock contention is trivial — the tick on the
//! dispatcher thread is the only frequent reader, and register /
//! unregister fire once per tunnel lifetime.

use std::collections::HashSet;
use std::sync::atomic::{AtomicBool, Ordering};

use once_cell::sync::Lazy;
use parking_lot::Mutex;

use crate::dispatcher;
use super::dispatcher::NatDispatcher;

/// UDP flow idle timeout — drop sessions that haven't seen a packet
/// from either direction in this long. TCP timers (RTO, TIME_WAIT)
/// drive themselves via `TcpSession::tick`, which `sweep_idle` also
/// calls; this constant only governs the UDP side.
pub const UDP_IDLE_MS: u32 = 60_000;

static REGISTRY: Lazy<Mutex<HashSet<usize>>> =
    Lazy::new(|| Mutex::new(HashSet::new()));

static TICK_INSTALLED: AtomicBool = AtomicBool::new(false);

unsafe extern "C" fn sweep_tick() {
    // Clone-out under the lock so we don't hold it across sweep_idle
    // (which can run for a while if a tunnel has many idle UDP flows).
    let addrs: Vec<usize> = REGISTRY.lock().iter().copied().collect();
    for addr in addrs {
        // SAFETY: every registered address corresponds to a live
        // `NatDispatcher`. Unregister-on-Drop runs synchronously,
        // and a tunnel can only be Dropped from the same thread that
        // owns its `Box` — so once an addr is in the set, it remains
        // valid until at least the next register/unregister roundtrip
        // on whichever thread owns it. For the shim, that thread IS
        // the dispatcher thread we're on; for the CLI, NAT lives in
        // a Mutex on the runtime thread and is only Dropped on exit.
        let nat = &mut *(addr as *mut NatDispatcher);
        nat.sweep_idle(UDP_IDLE_MS);
    }
}

fn install_tick() {
    if TICK_INSTALLED.swap(true, Ordering::AcqRel) { return; }
    dispatcher::set_tick(Some(sweep_tick));
}

pub(crate) fn register(addr: usize) {
    REGISTRY.lock().insert(addr);
    install_tick();
}

pub(crate) fn unregister(addr: usize) {
    REGISTRY.lock().remove(&addr);
}
