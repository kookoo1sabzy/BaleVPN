//! Bounded async error queue.
//!
//! Producers (TUN write loop, NAT layer host-side errors, etc.) push
//! a small struct from any thread without ever touching the JVM. A
//! Kotlin-side poller drains the queue periodically — that thread
//! has a JNIEnv so the JNI cost is paid there, not on the dispatcher
//! or the LK runtime threads.
//!
//! Cap is bounded; overflow drops silently after logging once.

use once_cell::sync::Lazy;
use parking_lot::Mutex;
use std::collections::VecDeque;
use std::sync::atomic::{AtomicBool, Ordering};

const MAX_PENDING: usize = 256;

#[derive(Clone)]
pub struct Item {
    pub sid:  u64,
    pub code: i32,
    pub op:   String,
    pub msg:  String,
}

static QUEUE: Lazy<Mutex<VecDeque<Item>>> = Lazy::new(|| Mutex::new(VecDeque::new()));
static OVERFLOW_LOGGED: AtomicBool = AtomicBool::new(false);

pub fn enqueue(sid: u64, op: &str, code: i32, msg: &str) {
    let mut q = QUEUE.lock();
    if q.len() >= MAX_PENDING {
        if !OVERFLOW_LOGGED.swap(true, Ordering::Relaxed) {
            log::warn!("error queue full (cap={MAX_PENDING}) — dropping subsequent errors silently");
        }
        return;
    }
    q.push_back(Item {
        sid, code,
        op:  op.to_string(),
        msg: msg.to_string(),
    });
}

/// Drain the queue, returning all pending items in FIFO order. Empty
/// after this returns.
pub fn drain() -> Vec<Item> {
    let mut q = QUEUE.lock();
    if q.is_empty() { return Vec::new(); }
    q.drain(..).collect()
}
