//! lktunnel-android — JNI surface for the lktunnel core.
//!
//! Single surface: `Java_ai_bale_proxy_{LkNative,NativeJni,LkTunnelNative}_*`
//! for the Kotlin side. The JNI methods are thin delegates to
//! [`lktunnel::LkTunnel`] — connect, start_server, attach_tun, etc.
//! No per-tunnel state lives in this crate; the JNI handle is
//! literally a `Box<LkTunnel>` cast to `jlong`.

use jni::objects::{GlobalRef, JClass, JObject, JString, JValue};
use jni::sys::{jboolean, jint, jlong, jlongArray, jstring, JNI_FALSE, JNI_TRUE, JNI_VERSION_1_6};
use jni::{JNIEnv, JavaVM};
use once_cell::sync::OnceCell;
use std::os::raw::c_void;

const TAG: &str = "lktunnel";

// JNI entry point fired by the Android linker when `liblktunnel.so` is
// loaded via `System.loadLibrary("lktunnel")`. We use it to:
//
//   1. Initialise android_logger so the core `lktunnel` crate's `log`
//      calls land in logcat.
//   2. Hand the JavaVM to libwebrtc's Android shim. Without this the
//      Rust LK SDK crashes inside `Room::connect` on the first
//      tokio-runtime callback that wants to touch JNI (hardware
//      codec / AAudio path init). The Android JVM-context lives in
//      webrtc-sys globals after this call.
/// JavaVM handle stashed during `JNI_OnLoad` so off-thread Rust code
/// (the error-queue drainer, future callbacks) can attach back to
/// the JVM without re-discovering the VM each call.
static JVM: OnceCell<JavaVM> = OnceCell::new();
/// GlobalRef to `ai.bale.proxy.NativeJni`. Bound in `JNI_OnLoad`,
/// never cleared (process-lifetime). The error-drain JNI fn looks
/// `onNativeError` up by name on each batch — cheap, since the path
/// runs at most a few times per second.
static NATIVE_JNI: OnceCell<GlobalRef> = OnceCell::new();

#[allow(non_snake_case)]
#[no_mangle]
pub extern "C" fn JNI_OnLoad(vm: JavaVM, _: *mut c_void) -> jint {
    android_logger::init_once(
        android_logger::Config::default()
            .with_max_level(log::LevelFilter::Info)
            .with_tag(TAG),
    );
    log::info!("JNI_OnLoad: registering JavaVM with libwebrtc");
    // Required even though we never add an audio/video track. webrtc-sys'
    // PeerConnectionFactory constructor unconditionally creates an
    // `AdmProxy`, which calls `CreateAudioDeviceModule(kPlatformDefaultAudio)`
    // → Android Java ADM → needs JavaVM. Without this hook,
    // Room::connect SEGVs in `lktunnel-rt` (tokio thread). The ADM then
    // sits idle: no audio track ever added, so the platform-side
    // recording / playout threads never start.
    livekit::webrtc::android::initialize_android(&vm);
    // Boot the Rust dispatcher thread now. Idempotent — subsequent
    // callers (server, tun) just post work onto it.
    lktunnel::dispatcher::init();
    // Cache a GlobalRef to `NativeJni` so the error-drain JNI fn
    // can dispatch onto its `onNativeError` static method.
    if let Ok(mut env) = vm.get_env() {
        if let Ok(cls) = env.find_class("ai/bale/proxy/NativeJni") {
            if let Ok(g) = env.new_global_ref(&cls) {
                let _ = NATIVE_JNI.set(g);
            }
        }
    }
    let _ = JVM.set(vm);
    JNI_VERSION_1_6 as jint
}

/// JNI handle: literally a `Box<lktunnel::LkTunnel>` cast to `jlong`.
/// All state — NAT, TUN, counters, send queue, room, lifecycle — lives
/// inside [`lktunnel::LkTunnel`]. No additional fields, no id lookups,
/// no mode enum: the LK side knows everything it needs to.

// ── JNI surface ─────────────────────────────────────────────────────

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkNative_nativeVersion<'l>(
    env: JNIEnv<'l>,
    _cls: JClass<'l>,
) -> jstring {
    let v = concat!("lktunnel ", env!("CARGO_PKG_VERSION"));
    env.new_string(v).map(|s| s.into_raw()).unwrap_or(std::ptr::null_mut())
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_natSetDebug<'l>(
    _env: JNIEnv<'l>,
    _cls: JClass<'l>,
    enabled: jboolean,
) {
    lktunnel::nat::set_debug(enabled != JNI_FALSE);
}

// `Java_ai_bale_proxy_NativeJni_initAndVersion` removed — the
// single load-time probe is now `Java_..._LkNative_nativeVersion`
// (called from `BaleApp.onCreate` and `NativeJni.<clinit>`).

// ── SOCKS5 server JNI surface ──────────────────────────────────────

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5Start<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, port: jint,
) {
    lktunnel::socks5::start(port);
}
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5Stop<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>,
) {
    lktunnel::socks5::stop();
}
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5IsRunning<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>,
) -> jboolean {
    if lktunnel::socks5::is_running() { JNI_TRUE } else { JNI_FALSE }
}
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5ActiveConnections<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>,
) -> jint {
    lktunnel::socks5::active_connections()
}
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5TotalAccepted<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>,
) -> jlong {
    lktunnel::socks5::total_accepted()
}
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_socks5SetDebug<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, enabled: jboolean,
) {
    lktunnel::socks5::set_debug(enabled != JNI_FALSE);
}

/// Drain the native error queue into `NativeJni.onNativeError`. Same
/// pull-model the C++ implementation had: producers never touch JVM,
/// the JNI cost lives here on the poller thread.
#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_NativeJni_drainNativeErrors<'l>(
    mut env: JNIEnv<'l>,
    _cls: JClass<'l>,
) {
    let cls_ref = match NATIVE_JNI.get() { Some(c) => c, None => return };
    let batch = lktunnel::errors::drain();
    for item in batch {
        let jop  = match env.new_string(&item.op)  { Ok(s) => s, Err(_) => continue };
        let jmsg = match env.new_string(&item.msg) { Ok(s) => s, Err(_) => continue };
        let res = env.call_static_method(
            <&JClass>::from(cls_ref.as_obj()),
            "onNativeError",
            "(JLjava/lang/String;ILjava/lang/String;)V",
            &[
                JValue::Long(item.sid as jlong),
                JValue::Object(&JObject::from(jop)),
                JValue::Int(item.code as jint),
                JValue::Object(&JObject::from(jmsg)),
            ],
        );
        if let Err(e) = res {
            log::warn!("drainNativeErrors: dispatch failed: {e}");
        }
        if env.exception_check().unwrap_or(false) {
            let _ = env.exception_clear();
        }
    }
}

/// Hot-path observer dispatch. Holds a `GlobalRef` to the Kotlin
/// `LkTunnel.Observer` plus the cached `onEvent` method ID. The IP
/// path never crosses JNI — inbound IP is routed internally by
/// [`lktunnel::LkTunnel`] to its NAT or TUN bridge.
struct ObserverDispatch {
    obs:        GlobalRef,
    /// `onEvent(Ljava/lang/String;Ljava/lang/String;)V` method ID.
    on_event:   jni::objects::JMethodID,
}

unsafe impl Send for ObserverDispatch {}
unsafe impl Sync for ObserverDispatch {}

impl ObserverDispatch {
    fn fire_on_event(&self, ev: &lktunnel::Event) {
        let vm = match JVM.get() {
            Some(vm) => vm,
            None => return,
        };
        let mut env = match vm.attach_current_thread_as_daemon() {
            Ok(e) => e,
            Err(_) => return,
        };
        let kind = match ev.kind {
            lktunnel::EventKind::Connected    => "connected",
            lktunnel::EventKind::PeerJoined   => "peer_joined",
            lktunnel::EventKind::PeerLeft     => "peer_left",
            lktunnel::EventKind::Disconnected => "disconnected",
            lktunnel::EventKind::Error        => "error",
        };
        let kind_str = match env.new_string(kind) {
            Ok(s) => s,
            Err(_) => return,
        };
        let info_str = match env.new_string(&ev.info) {
            Ok(s) => s,
            Err(_) => return,
        };
        let obj = self.obs.as_obj();
        unsafe {
            let _ = env.call_method_unchecked(
                obj,
                self.on_event,
                jni::signature::ReturnType::Primitive(jni::signature::Primitive::Void),
                &[
                    JValue::Object(&kind_str).as_jni(),
                    JValue::Object(&info_str).as_jni(),
                ],
            );
        }
        if env.exception_check().unwrap_or(false) {
            let _ = env.exception_describe();
            let _ = env.exception_clear();
        }
    }
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeConnect<'l>(
    mut env: JNIEnv<'l>,
    _cls: JClass<'l>,
    url:      JString<'l>,
    token:    JString<'l>,
    observer: JObject<'l>,
) -> jlong {
    let url:   String = env.get_string(&url).map(|s| s.into()).unwrap_or_default();
    let token: String = env.get_string(&token).map(|s| s.into()).unwrap_or_default();

    let observer_cls = match env.get_object_class(&observer) {
        Ok(c) => c,
        Err(e) => { log::warn!("nativeConnect: get_object_class failed: {e}"); return 0; }
    };
    let on_event_mid = match env.get_method_id(&observer_cls, "onEvent",
        "(Ljava/lang/String;Ljava/lang/String;)V") {
        Ok(m) => m,
        Err(e) => { log::warn!("nativeConnect: onEvent method id: {e}"); return 0; }
    };
    let obs_global = match env.new_global_ref(&observer) {
        Ok(g) => g,
        Err(e) => { log::warn!("nativeConnect: NewGlobalRef failed: {e}"); return 0; }
    };

    let dispatch = std::sync::Arc::new(ObserverDispatch {
        obs:      obs_global,
        on_event: on_event_mid,
    });

    let d_ev = std::sync::Arc::clone(&dispatch);
    let on_event = move |ev: lktunnel::Event| { d_ev.fire_on_event(&ev); };

    // `LkTunnel::connect` is non-blocking — it returns the handle as
    // soon as it's spawned the connect work. Kotlin waits on the
    // observer's "connected" event (or "error" / "disconnected") to
    // know when the room is fully joined.
    let lk = lktunnel::LkTunnel::connect(url, token, on_event);
    Box::into_raw(Box::new(lk)) as jlong
}

/// Borrow the `LkTunnel` behind a JNI handle for the duration of a
/// closure. Returns `None` for a zero handle. The closure-bounded
/// shape prevents the borrow from escaping the JNI fn — important
/// because the only thing keeping the pointer valid is Kotlin's
/// per-instance lock around `nativeDisconnect`.
fn with_tunnel<F, R>(handle: jlong, f: F) -> Option<R>
where F: FnOnce(&lktunnel::LkTunnel) -> R
{
    if handle == 0 { return None; }
    // SAFETY: caller (Kotlin) holds its per-instance monitor while
    // dispatching this JNI call, and `nativeDisconnect` takes the
    // same monitor before `Box::from_raw`. So while we're inside
    // this function the heap allocation is stable.
    let t = unsafe { &*(handle as *const lktunnel::LkTunnel) };
    Some(f(t))
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeIsConnected<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong,
) -> jboolean {
    let alive = with_tunnel(handle, |t| t.is_connected()).unwrap_or(false);
    if alive { JNI_TRUE } else { JNI_FALSE }
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeStartServer<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong,
) {
    with_tunnel(handle, |t| {
        if let Err(e) = t.start_server() {
            log::warn!("nativeStartServer: {e}");
        }
    });
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeAttachTun<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong, fd: jint,
) {
    with_tunnel(handle, |t| {
        if let Err(e) = t.attach_tun(fd as i32) {
            log::warn!("nativeAttachTun: {e}");
        }
    });
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeStats<'l>(
    env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong,
) -> jlongArray {
    let Some(s) = with_tunnel(handle, |t| t.stats()) else { return std::ptr::null_mut() };
    let arr = match env.new_long_array(4) {
        Ok(a) => a,
        Err(_) => return std::ptr::null_mut(),
    };
    let _ = env.set_long_array_region(&arr, 0,
        &[s[0] as i64, s[1] as i64, s[2] as i64, s[3] as i64]);
    arr.into_raw()
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeFlowStats<'l>(
    env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong,
) -> jlongArray {
    let Some(st) = with_tunnel(handle, |t| t.flow_stats()).flatten() else {
        return std::ptr::null_mut();
    };
    let out: [i64; 20] = [
        st.tcp_flows          as i64,
        st.udp_flows          as i64,
        st.srtt_min_ms        as i64,
        st.srtt_med_ms        as i64,
        st.srtt_max_ms        as i64,
        st.rttvar_med_ms      as i64,
        st.rto_med_ms         as i64,
        st.flight_total_bytes as i64,
        st.rto_retx_total     as i64,
        st.tcp_state_counts[0] as i64, st.tcp_state_counts[1] as i64,
        st.tcp_state_counts[2] as i64, st.tcp_state_counts[3] as i64,
        st.tcp_state_counts[4] as i64, st.tcp_state_counts[5] as i64,
        st.tcp_state_counts[6] as i64, st.tcp_state_counts[7] as i64,
        st.tcp_state_counts[8] as i64, st.tcp_state_counts[9] as i64,
        st.tcp_state_counts[10] as i64,
    ];
    let arr = match env.new_long_array(20) {
        Ok(a) => a,
        Err(_) => return std::ptr::null_mut(),
    };
    let _ = env.set_long_array_region(&arr, 0, &out);
    arr.into_raw()
}

#[no_mangle]
pub extern "system" fn Java_ai_bale_proxy_LkTunnelNative_nativeDisconnect<'l>(
    _env: JNIEnv<'l>, _cls: JClass<'l>, handle: jlong,
) {
    if handle == 0 { return; }
    // Explicit `disconnect()` first — aborts the per-tunnel tasks and
    // posts the NAT/TUN drop. Then drop the Box, releasing the last
    // strong handle. Closures inside NAT/TUN hold only `Weak`
    // references to Inner, so they don't pin it past this point.
    unsafe {
        let lk = Box::from_raw(handle as *mut lktunnel::LkTunnel);
        lk.disconnect();
        // `lk` drops here.
    }
}
