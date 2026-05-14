//! Reactor — mio-based, cross-platform.
//!
//! Step 1 of the portability port: replaces the libc::poll / eventfd
//! dispatcher with `mio::Poll` + `mio::Waker`. Sessions registered via
//! the legacy `register_poll(fd, events, func, user)` shim still work
//! on Unix (the fd is wrapped in `mio::unix::SourceFd`); the new API
//! is `register_source<S: mio::event::Source>(...)` which sessions
//! will migrate to in steps 2-4 so we can drop the int-fd surface
//! entirely and the lib can compile on Windows.
//!
//! Dispatcher thread is intentionally NOT JVM-attached on Android —
//! an attached thread is paused at JNI safepoints during Java GC,
//! which would skew TCP RTO/TLP timers and host-socket poll readiness
//! by tens of milliseconds. JNI callbacks fire on the poller thread
//! (Kotlin-side) instead.

use once_cell::sync::{Lazy, OnceCell};
use parking_lot::Mutex;
use std::cell::UnsafeCell;
use std::collections::{HashMap, VecDeque};
use std::os::raw::c_void;
use std::sync::atomic::{AtomicBool, AtomicPtr, AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::Duration;

use mio::{Events, Interest, Poll, Registry, Token, Waker};

/// Static storage that the dispatcher thread owns exclusively. Cheaper
/// than `Mutex<T>` on the hot path — no atomic CAS per access — at the
/// cost of `unsafe` borrows. Every `get` / `get_mut` site must be
/// reachable only from a callback that ran on the dispatcher thread
/// (an event handler or a closure posted via [`post`]).
pub struct DispatcherOwned<T>(UnsafeCell<T>);
unsafe impl<T> Sync for DispatcherOwned<T> {}
impl<T> DispatcherOwned<T> {
    pub fn new(v: T) -> Self { Self(UnsafeCell::new(v)) }
    /// SAFETY: caller must be running on the dispatcher thread.
    #[allow(clippy::mut_from_ref)]
    pub unsafe fn get_mut(&self) -> &mut T { &mut *self.0.get() }
    /// SAFETY: caller must be running on the dispatcher thread.
    pub unsafe fn get(&self) -> &T { &*self.0.get() }
}

const TAG: &str = "lk-dispatch";

pub type Task = Box<dyn FnOnce() + Send + 'static>;

/// Periodic tick fired after each poll wake-up. Used by the NAT layer
/// to advance per-flow timers.
pub type TickFn = unsafe extern "C" fn();

// ── New mio-native API ─────────────────────────────────────────────
//
// Sessions migrating to mio::net types implement [`EventHandler`] and
// hand their owned source(s) to [`register_source`]. The dispatcher
// holds boxed handlers indexed by Token and dispatches to them on
// every event the reactor surfaces.

/// Handler invoked when a registered source becomes ready. Boxed so a
/// session can be erased to `Box<dyn EventHandler>` for storage.
///
/// Runs on the dispatcher thread; the handler may freely mutate its
/// own state and call [`reregister_source`] / [`deregister_source`]
/// while inside `on_event`.
pub trait EventHandler: Send + 'static {
    fn on_event(&mut self, event: &mio::event::Event);
}

/// Register `source` with the reactor under a freshly-allocated token
/// and store `handler` to be invoked when the source becomes ready.
/// SAFETY: dispatcher-thread only.
pub fn register_source<S: mio::event::Source + ?Sized>(
    source: &mut S,
    interest: Interest,
    handler: Box<dyn EventHandler>,
) -> Token {
    let id = alloc_token();
    let token = Token(id);
    if let Some(reg) = REGISTRY.get() {
        if let Err(e) = reg.register(source, token, interest) {
            log::warn!(target: TAG, "register_source token={:?} failed: {e}", token);
        }
    }
    unsafe { HANDLERS.get_mut() }.insert(id, handler);
    token
}

/// Change the set of events that `source` is registered for. SAFETY:
/// dispatcher-thread only; `source` must be the same one previously
/// passed to [`register_source`] with this token.
pub fn reregister_source<S: mio::event::Source + ?Sized>(
    source: &mut S,
    token: Token,
    interest: Interest,
) {
    if let Some(reg) = REGISTRY.get() {
        if let Err(e) = reg.reregister(source, token, interest) {
            log::warn!(target: TAG, "reregister_source token={:?} failed: {e}", token);
        }
    }
}

/// Remove `token` from the reactor and drop its handler. SAFETY:
/// dispatcher-thread only.
///
/// The mio `deregister` (stops the kernel emitting events for this
/// source) runs immediately. The HashMap removal is **deferred** —
/// see [`PENDING_REMOVE`] for the soundness reason. A subsequent
/// call to this same token from inside the same dispatched event is
/// a no-op (`PENDING_REMOVE` is a Vec, dupes are harmless because
/// `HashMap::remove` on a non-existent key is a no-op too).
pub fn deregister_source<S: mio::event::Source + ?Sized>(
    source: &mut S,
    token: Token,
) {
    if let Some(reg) = REGISTRY.get() {
        let _ = reg.deregister(source);
    }
    unsafe { PENDING_REMOVE.get_mut() }.push(token.0);
}

/// Drain the deferred-remove queue. Called from the dispatch loop
/// between events so no `&mut Box<dyn EventHandler>` borrow is alive.
fn drain_pending_removes() {
    let pending = std::mem::take(unsafe { PENDING_REMOVE.get_mut() });
    if pending.is_empty() { return; }
    let h = unsafe { HANDLERS.get_mut() };
    for id in pending { h.remove(&id); }
}

// ── Cross-thread post / queues ─────────────────────────────────────

static QUEUE: Lazy<Mutex<VecDeque<Task>>> =
    Lazy::new(|| Mutex::new(VecDeque::new()));


/// Post a Rust closure for execution on the dispatcher thread.
pub fn post(task: Task) {
    if !RUNNING.load(Ordering::Relaxed) { return; }
    QUEUE.lock().push_back(task);
    wake();
}


/// Post a C-style task. Used by the cross-`.so` ABI.
pub fn post_c(func: unsafe extern "C" fn(*mut c_void), arg: *mut c_void) {
    let arg_usize = arg as usize;
    post(Box::new(move || unsafe { func(arg_usize as *mut c_void); }));
}

fn drain_queue() {
    let tasks: VecDeque<Task> = {
        let mut q = QUEUE.lock();
        std::mem::take(&mut *q)
    };
    for t in tasks { t(); }
}

// ── Reactor internals ──────────────────────────────────────────────

// Dispatcher-thread-only state. Per-token handler boxes are dropped
// from the map by the dispatch loop after each event, draining
// `PENDING_REMOVE`. We never mutate this map while an event is being
// dispatched — see `PENDING_REMOVE` below for the rationale.
static HANDLERS:    Lazy<DispatcherOwned<HashMap<usize, Box<dyn EventHandler>>>> =
    Lazy::new(|| DispatcherOwned::new(HashMap::new()));

/// Deferred-removal queue for [`deregister_source`]. We can't remove
/// from `HANDLERS` synchronously inside `deregister_source` because
/// the dispatch loop is holding a `&mut Box<dyn EventHandler>` borrow
/// into it for the currently-firing event. If a handler deregisters
/// its own token (a TCP session calling `close_host_socket` from
/// inside `on_event`, for example), an immediate `HANDLERS.remove`
/// would invalidate that borrow — UB even though HashMap's current
/// impl happens to work in practice. Instead we park the token here;
/// the dispatch loop drains the queue between events.
static PENDING_REMOVE: Lazy<DispatcherOwned<Vec<usize>>> =
    Lazy::new(|| DispatcherOwned::new(Vec::new()));

static REGISTRY: OnceCell<Registry>  = OnceCell::new();
static WAKER:    OnceCell<Arc<Waker>> = OnceCell::new();

static RUNNING: AtomicBool      = AtomicBool::new(false);
static STARTED: AtomicBool      = AtomicBool::new(false);
static TICK:    AtomicPtr<()>   = AtomicPtr::new(std::ptr::null_mut());
static NEXT_TOKEN: AtomicUsize  = AtomicUsize::new(1);

// Reserved token for cross-thread wakes. mio doesn't reserve any
// token value for callers; pick one well outside our monotonic
// allocator's reach.
const WAKER_TOKEN: Token = Token(usize::MAX);

fn alloc_token() -> usize {
    let t = NEXT_TOKEN.fetch_add(1, Ordering::Relaxed);
    if t == WAKER_TOKEN.0 { NEXT_TOKEN.fetch_add(1, Ordering::Relaxed) } else { t }
}

fn wake() {
    if let Some(w) = WAKER.get() {
        let _ = w.wake();
    }
}

fn thread_main(mut poll: Poll) {
    log::info!(target: TAG, "dispatcher thread up (mio reactor)");
    let mut events = Events::with_capacity(256);

    while RUNNING.load(Ordering::Relaxed) {
        match poll.poll(&mut events, Some(Duration::from_millis(250))) {
            Ok(()) => {}
            Err(e) if e.kind() == std::io::ErrorKind::Interrupted => continue,
            Err(e) => { log::warn!(target: TAG, "poll error: {e}"); continue; }
        }

        for ev in events.iter() {
            let token = ev.token();
            if token == WAKER_TOKEN {
                drain_queue();
                // Posted tasks (e.g. NAT teardown) can deregister
                // sources; flush their parks so subsequent events in
                // this batch don't dispatch into removed handlers.
                drain_pending_removes();
                continue;
            }
            if let Some(h) = unsafe { HANDLERS.get_mut() }.get_mut(&token.0) {
                h.on_event(ev);
            }
            // After every event, drain any deferred removes the
            // handler queued via `deregister_source`. Doing this per
            // event (rather than after the whole loop) ensures that
            // if A's handler deregisters B, B's pending event later
            // in this same batch sees no handler and is skipped.
            drain_pending_removes();
        }

        let tick = TICK.load(Ordering::Relaxed);
        if !tick.is_null() {
            let f: TickFn = unsafe { std::mem::transmute(tick) };
            unsafe { f(); }
        }
    }
    drop(poll);
}

/// Boot the dispatcher thread. Idempotent.
pub fn init() {
    if STARTED.compare_exchange(false, true, Ordering::AcqRel, Ordering::Relaxed).is_err() {
        return;
    }
    let poll = match Poll::new() {
        Ok(p) => p,
        Err(e) => {
            log::error!(target: TAG, "mio::Poll::new failed: {e}");
            STARTED.store(false, Ordering::Release);
            return;
        }
    };
    // Stash a Registry clone before moving Poll into the thread.
    REGISTRY.set(poll.registry().try_clone().expect("clone mio registry"))
        .ok().expect("registry already set");
    let waker = Waker::new(poll.registry(), WAKER_TOKEN)
        .expect("mio::Waker::new");
    let _ = WAKER.set(Arc::new(waker));

    RUNNING.store(true, Ordering::Release);
    thread::Builder::new()
        .name("lk-dispatch".into())
        .spawn(move || thread_main(poll))
        .expect("spawn dispatcher thread");
    log::info!(target: TAG, "dispatcher thread started");
}

pub fn set_tick(func: Option<TickFn>) {
    let ptr = match func {
        Some(f) => f as *mut (),
        None    => std::ptr::null_mut(),
    };
    TICK.store(ptr, Ordering::Relaxed);
}

// Sleep helper used by callers wanting roughly the same cadence as
// the old C++ `tick()` for housekeeping outside the poll thread.
#[allow(dead_code)]
pub fn nap(ms: u64) { thread::sleep(Duration::from_millis(ms)); }
