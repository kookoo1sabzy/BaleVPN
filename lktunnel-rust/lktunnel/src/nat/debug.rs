//! Process-wide NAT-layer verbose-logging toggle.
//!
//! Flipped from Kotlin via `NativeJni.natSetDebug`. All NAT logs are
//! gated on this flag so production traffic doesn't drown logcat.

use std::sync::atomic::{AtomicBool, Ordering};

static DEBUG: AtomicBool = AtomicBool::new(false);

#[inline]
pub fn debug_enabled() -> bool {
    DEBUG.load(Ordering::Relaxed)
}

pub fn set_debug(enabled: bool) {
    DEBUG.store(enabled, Ordering::Relaxed);
    // Use raw log so the OFF transition still prints (subsequent log!
    // calls are gated).
    log::info!(target: "nat", "debug logging {}", if enabled { "ON" } else { "OFF" });
}

/// Gated debug log: identical to `log::debug!` but only evaluates the
/// arguments when `debug_enabled()` is true.
#[macro_export]
macro_rules! nat_log {
    (target: $target:expr, $($arg:tt)*) => {
        if $crate::nat::debug::debug_enabled() {
            log::info!(target: $target, $($arg)*);
        }
    };
    ($($arg:tt)*) => {
        if $crate::nat::debug::debug_enabled() {
            log::info!(target: "nat", $($arg)*);
        }
    };
}
