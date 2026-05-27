# BaleVPN — Architecture & Build Guide

This document covers the **repository layout, the runtime architecture, and how to build** each component from source. End-user setup lives in the rest of `docs/` (Android, Rust per-OS). For protocol-level internals (wire format, codec choices, RPC framing) see [`CLAUDE.md`](../CLAUDE.md).

---

## Repository layout

```
BaleVPN/
├── reverse_engineering/        # Bale web-app crawler + protobuf extractor
│   ├── download.py             # Downloads Bale's webpack bundles
│   └── extract_proto.py        # Emits .proto files into bale-signaling-rust/
│
├── lk-signaling-rust/          # Generic signaling TRAIT crate
│   └── lk-signaling/           # ─ no Bale knowledge; just the abstract surface
│                                 (PeerRef, Signaling, TokenStore, IncomingHandler)
│
├── bale-signaling-rust/        # Bale IMPLEMENTATION of lk-signaling
│   └── bale-signaling/
│       ├── proto/              # Extracted .proto files (regenerated)
│       └── src/                # WS client + auth + contacts + dispatch
│
├── lktunnel-rust/              # WebRTC (webrtc-rs) transport + QUIC + NAT + TUN core
│   ├── lktunnel/               # ─ the library (rtc engine, carrier, NAT, TUN)
│   └── cli/                    # ─ standalone CLI (dev/test harness)
│
├── bale-vpn-rust/              # The unified Rust binary (client / server / GUI)
│   └── bale-vpn/
│       ├── assets/index.html   # Embedded HTML/JS UI (single file)
│       └── src/                # main.rs, daemon, ui (HTTP), ui_native (wry)
│
├── bale-vpn-android/           # Android app
│   ├── androidApp/             # Kotlin UI + foreground services + JNI loaders
│   └── rust/                   # Cargo workspace for JNI shims
│       ├── jni-shared/         # Shared handle registry + runtime + helpers
│       ├── lktunnel-android/   # JNI shim over lktunnel-rust
│       ├── bale-signaling-android/  # JNI shim over bale-signaling-rust
│       └── jniLibs/<abi>/      # GITIGNORED; cargo-ndk output
│
├── docs/                       # User-facing per-platform guides + screenshots
│   ├── android-en.md / android-fa.md
│   ├── rust-en.md    / rust-fa.md
│   └── screens/                # Screenshot library
│
├── .github/workflows/          # CI: rust.yml, android.yml, bale-vpn-rust.yml
├── README.md                   # Project overview + privacy notes + links
├── CLAUDE.md                   # Protocol internals + dev notes
└── ARCHITECTURE.md             # This file
```

### Crate dependency graph

Three "shared core" pure-Rust libraries do the actual work; the desktop binary and the Android JNI shims are both thin consumers of them.

```
                       ┌───────────────────────────────────────────────────┐
                       │              Shared core  (pure Rust)             │
                       │                                                   │
                       │  ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
                       │  │ lk-signaling │ │bale-signaling│ │  lktunnel  │ │
                       │  │ (trait)      │ │ (Bale impl)──┼─▶│ LK + QUIC  │ │
                       │  │              │ │  owns WS     │ │ + NAT + TUN│ │
                       │  │              │ │  lifecycle   │ │            │ │
                       │  └──────────────┘ └──────────────┘ └────────────┘ │
                       └───────────────────────────────────────────────────┘
                                ▲                                ▲
                                │ uses all three                 │ uses all three
                                │                                │
                ┌───────────────┴────────────┐  ┌────────────────┴───────────────┐
                │       bale-vpn-rust        │  │   Android JNI shims (cdylib)   │
                │  single binary, CLI + GUI  │  │   ─ lktunnel-android           │
                │                            │  │   ─ bale-signaling-android     │
                └────────────────────────────┘  │   ─ jni-shared (helper)        │
                                                └────────────────▲───────────────┘
                                                                 │ System.loadLibrary
                                                                 │
                                                ┌────────────────┴───────────────┐
                                                │   bale-vpn-android  (Kotlin)   │
                                                │   ─ MainActivity, services     │
                                                │   ─ JNI Kotlin wrappers        │
                                                └────────────────────────────────┘
```

Edge details:

- `bale-vpn-rust` depends on **all three** core crates: `lk-signaling` + `bale-signaling` + `lktunnel`.
- `bale-signaling` depends on `lktunnel` — it constructs `LkTunnel`s through `place_call_with_tunnel` / `wrap_incoming_session` so the transport's lifecycle can drive the WS rule engine without app glue. The transport is pure Rust (`webrtc-rs` + crates.io `livekit-api`/`livekit-protocol`), so there's nothing to vendor and no `[patch.crates-io]` anywhere.
- `bale-signaling-android` depends on `bale-signaling` + `lk-signaling` + `jni-shared`.
- `lktunnel-android` depends on `lktunnel` + `jni-shared`.
- `jni-shared` is consumed only by the two Android shims; it carries the generic `HandleRegistry<T>`, the shared tokio runtime, the JavaVM cache, and the async-JNI continuation bridge.
- The Bale protocol implementation has **one source of truth** — the `bale-signaling` crate — and both targets consume it via the same Rust API. No protocol parsing exists in Kotlin: every WS frame, every RPC, every contact entry is parsed once in Rust and surfaced through the JNI shim.

---

## Runtime architecture

### Signaling vs transport

Two independent channels per session:

1. **Signaling** — Bale's WebSocket at `wss://next-ws.bale.ai/ws/`. Carries the call setup RPCs (`StartCall`, `AcceptCall`, `DiscardCall`), presence (`SetOnline`), contact list, and incoming-call push notifications. Lives in `bale-signaling-rust/`.

2. **Transport** — a LiveKit-SFU room joined per active call, on the pure-Rust **`webrtc-rs`** stack (no libwebrtc). Lives in `lktunnel-rust/` (`rtc.rs` = the engine, `rtp.rs` = framing). The tunnel bytes are written **directly** as the RTP payload of one published Opus "audio" track (`TrackLocalStaticSample::write_sample`) — there's no codec and no data channel; the SFU relays opaque Opus RTP and the far end reads the bytes back off `read_rtp`. RTP-over-SRTP looks like an ordinary voice call and survives DPI that fingerprints SCTP data channels.

Each call gets its own `rtc::Engine` (LiveKit's two-PeerConnection model — publisher + subscriber — over the reused `livekit-api` signal client, impersonating the JS SDK via `sdk=js`), plus a per-tunnel mio reactor (`dispatcher.rs`) for the QUIC + NAT + TUN side. No global `PeerConnectionFactory` — webrtc-rs builds each PC from an `APIBuilder` (`make_api()`).

### WS lifecycle policy (input-driven, in the library)

The WS lifetime is owned by `bale-signaling-rust` — apps don't call `connect()` / `disconnect()` to drive it; they push inputs and observe `is_connected()`. The library evaluates a fixed rule and brings the run loop up or down accordingly.

**Rule** (in `ws.rs::desired_up`):

```
want_up = token.is_some()
       && !user_disconnect
       && match mode {
              Server => true,
              Client => foreground && !call_active,
          }
```

**Inputs:**

| Input             | Set by                                 | Default     |
|-------------------|----------------------------------------|-------------|
| `token`           | `set_token(Some(...))` (auth flow)     | `None`      |
| `user_disconnect` | `set_user_disconnect(true)` (UI button)| `false`     |
| `mode`            | auto: `Server` when `set_incoming_handler` is called, else `Client` | `Client` |
| `foreground`      | `set_foreground(bool)` (Kotlin lifecycle observer) | `true` |
| `call_active`     | auto: flipped by the LK global observer (see below) | `false` |

**Rust binary**: never sets `foreground` or `mode` explicitly — defaults (`true`, `Client`) are correct for a headless process. Server-mode daemons get `Server` for free when they install an `IncomingHandler`.

**Android (Kotlin)**: only pushes `foreground` from the lifecycle observer and `user_disconnect` from the Disconnect button. The library handles the rest.

**LK → WS auto-pause**. Both platforms get it auto-wired, but through different layers because the Android JNI split prevents the Rust-side global observer from reaching the WS-side process:

- **Rust binary**: `lktunnel-rust` exposes a process-wide `set_global_observer` slot; `BaleSignaling::new` installs one that flips `call_active` on every `Connected` / `Disconnected` event. Gated behind the `lktunnel` Cargo feature on `bale-signaling`, enabled by `bale-vpn-rust`.

- **Android**: the `lktunnel` Cargo feature is OFF on the Android shim — `libbale_signaling.so` and `liblktunnel.so` are separate `.so`s, so enabling it would statically link a second copy of the whole transport (webrtc-rs + quinn + tokio) into the signaling lib for no benefit. Instead, the Kotlin `LkTunnel` wrapper has its own process-wide `globalLifecycleObserver` slot — `NativeObserver.onEvent` chains it on every `connected`/`disconnected`. `BaleConnection.init` installs the observer to forward into `signaling.setCallActive(...)`. Same end behaviour as the Rust binary: any LkTunnel built anywhere auto-pauses the WS, no per-call wiring in `BaleVpnService` / `BaleServerService`.

### Server-side data flow

```
   Bale WS  ── callReceived ──▶  AdmissionHandler.decide
                                    │
                                    ▼
                              AcceptCall RPC ─▶ LK creds
                                    │
                                    ▼
                              LkTunnel::connect_server
                                    │
                                    ▼
                              start_server
                                    │
                ┌───────────────────┴────────────────────┐
                │                                        │
                ▼                                        ▼
        Kernel TUN attach                       Userspace NAT
        (10.8.K.0/24 per peer)                  (per-flow state)
                │                                        │
                ▼                                        ▼
        iptables/pf MASQUERADE                   host TCP/UDP sockets
                │                                        │
                └───────────────┬────────────────────────┘
                                ▼
                          ── internet ──
```

In kernel mode each accepted call gets its own `bale<K>` (Linux) or `utunN` (macOS) device at `10.8.K.0/24`. The kernel handles forwarding + NAT. In userspace mode every flow becomes a per-flow Rust TCP/UDP state machine (`lktunnel/src/nat/*`) with full TCP semantics (SACK, RACK, TLP, PRR, window scaling).

### Client-side data flow

The two ingress sources are independent — either or both can be active. They use **different frame types** inside the same RTP media carrier; the server's `LkTunnel` demuxes on the first byte.

```
   Local apps                            Host networking stack
   ──────────                            ─────────────────────
       │                                          │
       ▼                                          ▼
   SOCKS5 listener at 127.0.0.1:1080       System TUN at 10.8.0.2/24
   (TCP connect / UDP associate)           (raw IP packets, needs
                                            `--client-tun` + route setup)
       │                                          │
       │ each conn becomes a QUIC stream          │ raw IP packet bytes
       ▼                                          ▼
   QUIC client  ──────► datagrams           prepended with FRAME_TYPE_IP
       │                                          │
       │ datagrams prepended with FRAME_TYPE_QUIC │
       └───────────────────┬──────────────────────┘
                           │
                           ▼
                  LkTunnel send pipeline
                  (sender task → RtpSender)
                           │
                           ▼
           webrtc-rs RTP carrier — frames written
           directly as one published Opus track's
           payload (write_sample); SFU relays opaque
           Opus, far end reads them off read_rtp
                           │
                           ▼
                 server-side LkTunnel
                 (demux on frame-type byte)
                           │
                ┌──────────┴──────────┐
                ▼                     ▼
        QUIC stream acceptor    Server NAT  /  kernel TUN
        (host TCP connect)         (kernel forwarding)
                │                     │
                └──────────┬──────────┘
                           ▼
                      ── internet ──
```

The client opens **one** LiveKit call to the configured server peer. SOCKS5 connections become QUIC streams over a single QUIC connection riding the RTP carrier; TUN-routed IP packets ride the **same** carrier but go in as raw `FRAME_TYPE_IP` payloads (no QUIC — the guest's own TCP handles loss). The server-side `LkTunnel` peeks the first byte to route each inbound frame to the QUIC acceptor or the NAT/TUN bridge respectively.

### Android JNI bridge

The Kotlin UI calls Rust through three JNI shim libraries:

- `lktunnel-android` (`liblktunnel.so`) — wraps `lktunnel-rust/lktunnel/`.
- `bale-signaling-android` (`libbale_signaling.so`) — wraps `bale-signaling-rust/bale-signaling/`.
- `jni-shared` — small Rust lib both shims depend on: generic `HandleRegistry<T>`, shared tokio runtime, JavaVM cache, jstr helpers, **`spawn_with_continuation`** (the async-JNI bridge that lets Kotlin `suspend` functions back onto Rust futures without blocking an IO thread per call).

JNI handles are opaque `jlong` ids that index into the registry, so concurrent Kotlin calls aren't serialised by an instance monitor — they each acquire their own `Arc<T>` clone.

---

## How to build

### Common prerequisites

| Tool | Required for | Notes |
|---|---|---|
| Rust stable | every build | `rustup default stable` |
| Python 3 | regenerating protos | `reverse_engineering/extract_proto.py`; not needed if you don't touch the protocol |
| OpenJDK 17 + Android SDK + NDK | Android build | NDK pinned to `28.0.13004108` in `bale-vpn-android/androidApp/build.gradle.kts` |
| `cargo-ndk` | Android Rust build | `cargo install cargo-ndk --locked`; auto-installed by the Android workflow |
| Linux: GTK / GLib / webkit2gtk dev headers | GUI build on Linux | `libgtk-3-dev libwebkit2gtk-4.1-dev libsoup-3.0-dev libssl-dev pkg-config` (the GUI/`wry` deps; the transport is pure Rust, no audio/libwebrtc headers needed) |

### Step 1 — Rust desktop binary (`bale-vpn-rust`)

The transport is pure Rust now (`webrtc-rs` + crates.io `livekit-api`/`livekit-protocol`) — there's no vendored crate tree and no patch step, so a plain `cargo build` works. The Makefile targets are just convenience wrappers:

```bash
make build              # = cargo build --release          (GUI: tao + wry)
make build-headless     # = cargo build --release --no-default-features
# or directly:
cd bale-vpn-rust && cargo build --release
./bale-vpn-rust/target/release/bale-vpn
```

Cargo features:

| Feature | Default | Pulls in | Effect |
|---|---|---|---|
| `gui` | yes | `tao`, `wry`, `muda` | Embedded webview opens at startup; `--headless` skips the window |

### Step 3 — Android APK + JNI `.so`

```bash
cd bale-vpn-android
JAVA_HOME=<jdk17> ./gradlew :androidApp:assembleDebug      # debug APK
JAVA_HOME=<jdk17> ./gradlew :androidApp:assembleRelease    # release APK (needs keystore env vars)
```

`assembleDebug` runs the custom `cargoBuild` Gradle task first, which invokes `cargo-ndk` to cross-compile the three JNI crates (`jni-shared`, `lktunnel-android`, `bale-signaling-android`) for `arm64-v8a`, `armeabi-v7a`, and `x86_64`. Output lands in `bale-vpn-android/rust/jniLibs/<abi>/lib*.so`; `androidApp` picks them up via `jniLibs.srcDir(file("../rust/jniLibs"))`. Which of those ABIs get *packaged* is set per build type via `abiFilters`: **release = arm64-v8a + armeabi-v7a** (no x86_64 — emulators only), debug = arm64-v8a + x86_64.

Release signing reads:

```bash
ANDROID_KEYSTORE_PATH      # path to .jks
ANDROID_KEYSTORE_PASSWORD  # store pw
ANDROID_KEY_ALIAS          # key alias
ANDROID_KEY_PASSWORD       # key pw
```

If any is missing or the keystore file doesn't exist, `assembleRelease` falls back to the debug signing config — useful for local testing.

### Step 4 — Regenerate the Bale proto definitions (optional)

Only needed when Bale ships a new web bundle:

```bash
python3 reverse_engineering/download.py     # downloads JS bundles; needs a valid access_token in the script
python3 reverse_engineering/extract_proto.py # writes .proto into bale-signaling-rust/bale-signaling/proto/
```

The Rust signaling crate doesn't actually compile these `.proto` files (the wire encoding is hand-rolled in `proto.rs` for the field shapes Bale uses). They're checked in as documentation + a starting point if you ever want to switch to `prost` / `tonic`.

### Tests

```bash
cd lktunnel-rust       && cargo test --workspace --release
cd lk-signaling-rust   && cargo test --workspace --release
cd bale-signaling-rust && cargo test --workspace --release
```

Most coverage lives in `bale-signaling-rust` (proto codec round-trip, gRPC-web envelope, WS frame dispatch, RPC pending machinery, contact list parsing) and `lktunnel-rust` (NAT state machines, TCP option negotiation, dispatcher reactor). `bale-vpn-rust` itself has minimal tests — it's mostly axum handlers + signaling glue.

---

## CI / release

| Workflow | File | Trigger | Output |
|---|---|---|---|
| Rust tests | `.github/workflows/rust.yml` | push + PR | cargo test on Linux + macOS + Windows; clippy |
| Android APK | `.github/workflows/android.yml` | push + PR + `v*` tag | APK artifact; signed + attached to GitHub Release on tag |
| Desktop binaries | `.github/workflows/bale-vpn-rust.yml` | push + PR + `v*` tag | Per-OS `bale-vpn-{gui,headless}-{linux,macos,windows}-<arch>` binaries; attached to GitHub Release on tag |

Tags follow `v<semver>` (e.g. `v0.1.0`). One tag pushes both the APK and the desktop binaries together.

---

## Development conventions

- **Single source of truth for protocol shape** — `bale-signaling-rust/`. Anything that talks to Bale (Android, desktop) goes through this crate. No duplicate WS parsing in Kotlin.
- **Don't add features without a request.** The codebase grew organically; the architecture review (`CLAUDE.md` + this file) is meant to keep it from growing further. New flags / endpoints / modes need a user-visible justification.
- **One file per crate's worth of new state.** Don't sprinkle handler-specific state across `daemon.rs` / `server.rs` / `client.rs` — the existing split (per-mode files) is load-bearing for the run-loop reasoning.
- **Comments explain WHY, not WHAT.** Identifiers carry the WHAT. Comments record hidden constraints, prior incidents, and surprising decisions. See `CLAUDE.md` for the style.
