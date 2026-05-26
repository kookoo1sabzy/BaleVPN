//! Shared utilities for the Android JNI shims.
//!
//! Centralises the handle-registry pattern both
//! `lktunnel-android` and `bale-signaling-android` need:
//!   - mint opaque `jlong` handles for Rust-owned objects
//!   - look them up by handle, keeping the borrow checker happy
//!     across re-entrant native calls
//!   - atomically remove + take the entry on destroy to close
//!     the lookup/remove TOCTOU window
//!
//! No JNI types live here — the registry is plain Rust so this
//! crate doesn't pull `jni` (and the slow android-NDK build path)
//! into its own compile. Callers cast `HandleId` → `jlong` at the
//! shim boundary.

use once_cell::sync::Lazy;
use parking_lot::Mutex;
use std::collections::HashMap;
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};

pub use once_cell;

/// 64-bit handle id minted per insert. Caller casts to `jlong`
/// when exposing to Kotlin. `0` is reserved for "no handle".
pub type HandleId = u64;

/// Process-wide registry of `Arc<T>` by `HandleId`. Construct
/// once via `Lazy::new(HandleRegistry::new)` in each shim:
///
/// ```ignore
/// static REG: jni_shared::once_cell::sync::Lazy<HandleRegistry<MyType>> =
///     jni_shared::once_cell::sync::Lazy::new(HandleRegistry::new);
/// ```
///
/// All methods are thread-safe; the underlying Mutex is held
/// only across the HashMap op (sub-microsecond uncontended).
pub struct HandleRegistry<T> {
    next:  AtomicU64,
    table: Mutex<HashMap<HandleId, Arc<T>>>,
}

impl<T> HandleRegistry<T> {
    pub fn new() -> Self {
        Self {
            next:  AtomicU64::new(1),
            table: Mutex::new(HashMap::new()),
        }
    }

    /// Insert a value wrapped in `Arc::new` and return its id.
    pub fn insert_value(&self, value: T) -> HandleId {
        self.insert(Arc::new(value))
    }

    /// Insert an existing `Arc<T>` and return its id. Use when
    /// the caller already shares the Arc with another owner
    /// (e.g. a callback closure).
    pub fn insert(&self, value: Arc<T>) -> HandleId {
        let id = self.next.fetch_add(1, Ordering::Relaxed);
        self.table.lock().insert(id, value);
        id
    }

    /// Borrow an Arc clone from the registry. `None` for `0` or
    /// a handle that's already been removed.
    pub fn lookup(&self, id: HandleId) -> Option<Arc<T>> {
        if id == 0 { return None; }
        self.table.lock().get(&id).cloned()
    }

    /// Drop the registry entry. In-flight callers that already
    /// hold their own Arc keep the inner alive until they
    /// release.
    pub fn remove(&self, id: HandleId) {
        if id == 0 { return; }
        let _ = self.table.lock().remove(&id);
    }

    /// Atomically remove the entry **and** return the stored
    /// Arc — single Mutex acquisition, no TOCTOU window between
    /// "is this handle still valid?" and "take it out". Caller
    /// runs any teardown (e.g. `disconnect()`) on the returned
    /// Arc; the inner stays alive until all clones drop.
    pub fn remove_and_take(&self, id: HandleId) -> Option<Arc<T>> {
        if id == 0 { return None; }
        self.table.lock().remove(&id)
    }
}

impl<T> Default for HandleRegistry<T> {
    fn default() -> Self { Self::new() }
}

/// `Lazy<HandleRegistry<T>>` shorthand. Use in shim modules:
///
/// ```ignore
/// static REG: jni_shared::RegistryHandle<MyType> =
///     jni_shared::RegistryHandle::new(HandleRegistry::new);
/// ```
pub type RegistryHandle<T> = Lazy<HandleRegistry<T>>;

// ── Shared tokio runtime ────────────────────────────────────

/// Process-wide multi-thread tokio runtime. Both JNI shims use
/// this so JNI calls block_on a single shared runtime instead of
/// each shim owning its own (which would double the threadpool
/// + per-runtime memory). 4 worker threads is plenty for the
/// concurrent JNI ↔ async traffic we generate.
pub fn runtime() -> &'static tokio::runtime::Runtime {
    static RT: once_cell::sync::OnceCell<tokio::runtime::Runtime> = once_cell::sync::OnceCell::new();
    RT.get_or_init(|| {
        tokio::runtime::Builder::new_multi_thread()
            .enable_all()
            .worker_threads(4)
            .thread_name("bale-jni-rt")
            .build()
            .expect("tokio runtime build")
    })
}

// ── Shared JavaVM cache ─────────────────────────────────────

/// JavaVM pointer cached at `JNI_OnLoad`. Set by [`set_vm`]
/// (called from each shim's `JNI_OnLoad`) and read by code that
/// needs to attach background threads to the JVM for callbacks
/// back into Kotlin.
///
/// Safe to call `set_vm` from multiple shims' `JNI_OnLoad`s —
/// the first one wins (they all hand back the same VM anyway,
/// since both .so files load into the same process).
static JVM_CELL: once_cell::sync::OnceCell<jni::JavaVM> = once_cell::sync::OnceCell::new();

/// Stash the JavaVM. Idempotent: subsequent calls are no-ops.
pub fn set_vm(vm: jni::JavaVM) {
    let _ = JVM_CELL.set(vm);
}

/// Borrow the cached JavaVM. Panics if [`set_vm`] hasn't been
/// called — callers should ensure their `JNI_OnLoad` runs first
/// (it does, by definition; this is only reachable after some
/// .so we ship has loaded).
pub fn vm() -> &'static jni::JavaVM {
    JVM_CELL.get().expect("JNI_OnLoad must call jni_shared::set_vm first")
}

// ── String marshaling helpers ───────────────────────────────

/// Pull a Java String into a Rust String. Returns an empty
/// string if the conversion fails — safer than panicking on a
/// malformed argument, and most JNI strings here are short
/// peer-ids / OTPs where empty-string is already a no-op.
pub fn jstr(env: &mut jni::JNIEnv, s: &jni::objects::JString) -> String {
    env.get_string(s).map(|js| js.into()).unwrap_or_default()
}

/// Build a Java String from a Rust `&str`. Returns the JNI null
/// pointer on error — caller treats that as `null` on the Java
/// side.
pub fn jstring_new(env: &mut jni::JNIEnv, s: &str) -> jni::sys::jstring {
    env.new_string(s).map(|js| js.into_raw()).unwrap_or(std::ptr::null_mut())
}

// ── Async JNI bridge ────────────────────────────────────────
//
// Pattern: each async-suspending Kotlin call passes a
// `ai.bale.proxy.NativeContinuation` to native. Native spawns
// the future on the shared runtime via [`spawn_with_continuation`]
// and returns to JNI immediately (no `block_on`, no IO-thread
// park). When the future completes, the helper attaches a JVM
// thread and invokes `onSuccess(marshalled)` or `onError(msg)`
// on the continuation. The Kotlin side wraps the call in a
// `suspendCancellableCoroutine` so it appears as a normal
// suspend function.
//
// Kotlin glue:
//   class NativeContinuation<T>(c: Continuation<T>) {
//       fun onSuccess(result: Any?) = c.resume(result as T)
//       fun onError(message: String) = c.resumeWithException(...)
//   }

use jni::objects::{GlobalRef, JObject, JValue};
use jni::sys::jobject;
use std::future::Future;

/// Spawn `work` on the shared runtime; on completion invoke
/// `cont.onSuccess(marshal(value))` or `cont.onError(msg)` via
/// JNI. Caller pre-allocates `cont` as a `GlobalRef` to a
/// `NativeContinuation` instance.
///
/// `marshal` runs on a JVM-attached thread and returns the
/// `jobject` that becomes the Kotlin success value (boxed).
/// Use [`marshal_void`] when the suspend function returns
/// `Unit?`; [`marshal_bool`], [`marshal_string`], [`marshal_long`]
/// for primitive returns; or a custom closure for typed
/// objects.
pub fn spawn_with_continuation<F, R>(
    cont:    GlobalRef,
    work:    F,
    marshal: impl FnOnce(&mut jni::JNIEnv, R) -> jobject + Send + 'static,
)
where
    F: Future<Output = Result<R, String>> + Send + 'static,
    R: Send + 'static,
{
    runtime().spawn(async move {
        let result = work.await;
        let mut env = match vm().attach_current_thread_permanently() {
            Ok(e) => e,
            Err(e) => {
                log::warn!("spawn_with_continuation: attach failed: {e}");
                return;
            }
        };
        match result {
            Ok(value) => {
                let obj_raw = marshal(&mut env, value);
                // SAFETY: jobject returned by marshal is a local
                // ref minted on this thread; from_raw takes
                // ownership for the JValue lifetime.
                let obj = unsafe { JObject::from_raw(obj_raw) };
                if let Err(e) = env.call_method(
                    cont.as_obj(),
                    "onSuccess",
                    "(Ljava/lang/Object;)V",
                    &[JValue::Object(&obj)],
                ) {
                    log::warn!("NativeContinuation.onSuccess dispatch: {e}");
                }
            }
            Err(msg) => {
                let s = match env.new_string(&msg) {
                    Ok(s) => s,
                    Err(_) => return,
                };
                if let Err(e) = env.call_method(
                    cont.as_obj(),
                    "onError",
                    "(Ljava/lang/String;)V",
                    &[JValue::Object(&s)],
                ) {
                    log::warn!("NativeContinuation.onError dispatch: {e}");
                }
            }
        }
        if env.exception_check().unwrap_or(false) {
            let _ = env.exception_describe();
            let _ = env.exception_clear();
        }
    });
}

/// Marshaler for `()` — returns null on the Java side; the
/// Kotlin suspend function's return type should be `Unit?`
/// (or just call `onSuccess(null)` and discard).
pub fn marshal_void(_: &mut jni::JNIEnv, _: ()) -> jobject {
    std::ptr::null_mut()
}

/// Marshaler for `String`. Becomes a Java `String`.
pub fn marshal_string(env: &mut jni::JNIEnv, s: String) -> jobject {
    env.new_string(s).map(|j| j.into_raw()).unwrap_or(std::ptr::null_mut())
}

/// Marshaler for `Option<String>`. Becomes a Java `String?`.
pub fn marshal_string_opt(env: &mut jni::JNIEnv, s: Option<String>) -> jobject {
    match s {
        Some(s) => marshal_string(env, s),
        None    => std::ptr::null_mut(),
    }
}

/// Marshaler for `bool`. Boxes into `java.lang.Boolean`.
pub fn marshal_bool(env: &mut jni::JNIEnv, b: bool) -> jobject {
    let cls = match env.find_class("java/lang/Boolean") {
        Ok(c)  => c,
        Err(_) => return std::ptr::null_mut(),
    };
    let arg = JValue::Bool(if b { 1 } else { 0 });
    env.call_static_method(cls, "valueOf", "(Z)Ljava/lang/Boolean;", &[arg])
        .and_then(|v| v.l())
        .map(|o| o.into_raw())
        .unwrap_or(std::ptr::null_mut())
}

/// Marshaler for `i64`. Boxes into `java.lang.Long`.
pub fn marshal_long(env: &mut jni::JNIEnv, n: i64) -> jobject {
    let cls = match env.find_class("java/lang/Long") {
        Ok(c)  => c,
        Err(_) => return std::ptr::null_mut(),
    };
    env.call_static_method(cls, "valueOf", "(J)Ljava/lang/Long;", &[JValue::Long(n)])
        .and_then(|v| v.l())
        .map(|o| o.into_raw())
        .unwrap_or(std::ptr::null_mut())
}
