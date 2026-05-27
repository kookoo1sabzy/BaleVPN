# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A reverse-engineering research project for the **Bale messenger** web app (`web.bale.ai`). It extracts protobuf service / message definitions from Bale's minified webpack bundles and ships:

- **`bale-vpn-rust/`** — a single Rust binary that runs as either VPN **client** (local SOCKS5 listener over a QUIC channel) or VPN **server** (TUN-based or userspace NAT bridging traffic from admitted Bale peers to the internet). HTTP management UI on `127.0.0.1:3001`. CLI: `bale-vpn [--port 3001] [--mode client|server] [--nat-mode kernel|userspace] [--headless]`.
- **`bale-vpn-android/`** — Android app that runs as either VPN **client** (device-wide TUN via `VpnService`, optional LAN-facing SOCKS5) or VPN **server** (userspace NAT, no root). Mode-toggle in the app's main screen.

Both apps consume the same Rust stack:
- `lktunnel-rust/` — WebRTC transport on **`webrtc-rs`** (pure Rust, no libwebrtc) + QUIC channel + userspace NAT. Reuses crates.io `livekit-api` (signal client) + `livekit-protocol` (wire types); no vendored crates, no patches.
- `lk-signaling-rust/` — generic signaling trait
- `bale-signaling-rust/` — Bale impl (WS client + RPCs + auth + contacts), single source of truth for the protocol

The Rust and Android server modes are interchangeable: an Android client can connect to either, same wire protocol.

## Supported features

| Role | Platform | Notes |
|---|---|---|
| Server | Rust (Linux) | Kernel TUN + iptables MASQUERADE — best throughput. One-time root setup. (Userspace NAT path also works.) |
| Server | Rust (macOS) | Kernel TUN (`utunN`) + pf anchor — best throughput. Runs as root. |
| Server | Rust (Windows) | Userspace NAT — no root, no driver install. |
| Server | Android | Userspace NAT — no root. APK install, no command line. |
| Client | Rust (any OS) | SOCKS5 listener on `127.0.0.1:1080` (configurable) over a QUIC channel. |
| Client | Android | Kernel TUN via `VpnService`. Optional LAN-facing SOCKS5 lets other devices on the same WiFi use this Android as their proxy. |

## Three-Step Pipeline

### 1. Download web app assets
```bash
python3 reverse_engineering/download.py
```
Downloads the Bale web app JS bundles, HTML, and static files into `reverse_engineering/static/`. Skips files already on disk. Requires a valid `access_token` cookie hardcoded in the script.

### 2. Extract protobuf definitions
```bash
python3 reverse_engineering/extract_proto.py
```
Writes `.proto` files to `bale-signaling-rust/bale-signaling/proto/`. The Rust side is the single source of truth for the protocol; Kotlin (Android) consumes the Rust stack via JNI.

### 3. Build and run the Rust app
```bash
cd bale-vpn-rust
cargo build --release
./target/release/bale-vpn                              # client mode, HTTP UI at :3001
./target/release/bale-vpn --mode server --nat-mode userspace
```

Open `http://localhost:3001` to sign in (SMS OTP), pick a peer (client mode), or manage admission (server mode). Config persists to `~/.config/bale-vpn/{config.toml, token}`.

### Command-line arguments

| Argument | Default | Meaning |
|---|---|---|
| `--port <int>` | `3001` | HTTP UI port. Bound to `127.0.0.1`. |
| `--mode client\|server` | from `config.toml` (default `client`) | Role. |
| `--nat-mode kernel\|userspace` | `kernel` on Unix, `userspace` on Windows | Server-mode forwarding. |
| `--headless` | off | Skip opening a native webview (GUI builds only). |

The mode is fixed at startup. Switching between `client`/`server` or between `kernel`/`userspace` requires a restart.

### Server-mode one-time setup

**Linux, kernel NAT mode**:
```bash
sudo setcap cap_net_admin+eip $(which bale-vpn)
sudo sysctl -w net.ipv4.ip_forward=1
echo 'net.ipv4.ip_forward = 1' | sudo tee /etc/sysctl.d/99-bale-vpn.conf
# /16 covers every per-session 10.8.K.0/24 slot in the pool —
# /24 only covers slot 0, so clients past the first get no NAT.
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/16 -j MASQUERADE
```

**macOS, kernel NAT mode**: runs as root (`sudo ./target/release/bale-vpn server`). NAT (pf anchor `balevpn`) and IP forwarding are loaded automatically; the WAN interface is auto-detected.

**Userspace NAT mode** (any OS): no privileged setup needed.

## Authentication

Authentication uses Bale's `access_token` JWT cookie scoped to `.bale.ai`.

- To get a token initially: run the Rust app once and complete SMS OTP via the management UI at `http://localhost:3001`, or sign in on the Android app.
- To refresh: Chrome DevTools → Application → Cookies → `https://web.bale.ai` → copy `access_token`, and paste into the management UI.
- WS close code `4401` indicates the token expired and needs refreshing.

`bale-vpn-rust` stores the token in `~/.config/bale-vpn/token` (mode `0600`); other settings live in `~/.config/bale-vpn/config.toml`. The Android app stores the same token in `SharedPreferences` (the `config` file under key `token`).

## Android app overview

`bale-vpn-android/` is a standard Android Gradle project. Two `cdylib` JNI shims under `bale-vpn-android/rust/` (`lktunnel-android` for the transport, `bale-signaling-android` for the Bale protocol) bridge into the same `lktunnel-rust/` + `bale-signaling-rust/` crates the Rust binary uses. Kotlin code is the UI, auth flow, and lifecycle plumbing.

### Auth flow

`PhoneAuthActivity` collects the phone number → `OtpActivity` collects the SMS code → Bale returns a JWT → the app exchanges it for an `access_token` cookie → saved to `SharedPreferences`. Existing users land at the main screen; new users hit a brief sign-up screen for their display name.

### Mode toggle

The app runs as **client** (default) or **server**. The toggle is a single switch in `MainActivity`. Switching to server auto-starts the server foreground service; switching back to client stops it. The WS Connect / Disconnect button is only visible in server mode (in client mode the WS lifecycle is driven by the VPN being up).

### Client mode

`BaleVpnService` sets up a TUN at `10.8.0.2/24`, routes all public IPv4 and `::/0`, and excludes the Bale app itself from the VPN so its own control-plane sockets don't loop through the tunnel.

Optionally exposes a LAN-facing SOCKS5 proxy on a configurable port (default 1080). Other devices on the same WiFi can configure this Android device as their proxy — their TCP traffic transits through the VPN. Toggle and port are in the Advanced section of `MainActivity`.

### Server mode (`BaleServerService`)

Foreground service. Auto-answers incoming Bale calls from admitted peers; each accepted call gets its own in-process userspace NAT session. No root, no kernel TUN, no iptables required.

`MainActivity` exposes a **Manage Clients** screen showing live throughput and admission status per connected caller, plus a **Contacts** screen for managing the allow-list. From a connected-client row, a **Stats** button opens a detailed per-flow view (TCP cwnd / srtt / retransmit counters, LiveKit transport stats).

### Admission control

Two mutually-exclusive per-caller stores (persisted in `SharedPreferences`):

- **Allow-list** (`AdmissionStore`) — callers that auto-accept.
- **Block-list** (`BlacklistStore`) — callers silently rejected.

`maxClients` (1–253, default 5) caps simultaneously-connected callers. New calls above the cap are silently rejected without entering the blacklist; the caller can try again when a slot frees.

Calls from callers in neither list land in a **pending** state with a notification: the user picks **Allow** (with optional "remember" → adds to allow-list), **Reject** (with optional "remember" → adds to blacklist), or lets it time out (60 s default → silent rejection, no blacklist).

`bale-vpn-rust` exposes the same admission controls through `/server/admission`, `/server/blacklist`, and `/server/max-clients` HTTP endpoints. Lists persist in `~/.config/bale-vpn/config.toml`.

## Architecture overview

Both Rust and Android peers join a LiveKit-SFU room established via a Bale call between two contacts, on the pure-Rust **`webrtc-rs`** stack (the LiveKit two-PeerConnection model — publisher + subscriber — driven by the reused `livekit-api` signal client). Tunnel data rides the room's **RTP media carrier**: our bytes are written directly as the payload of one published Opus "audio" track (`write_sample` — no codec, no data channel) and read straight back off the peer's track (`read_rtp`); the SFU relays opaque Opus RTP and never sees the unwrapped data. A one-byte frame tag selects the mode — `'I'` raw IP (VPN/TUN) or `'Q'` QUIC datagrams (which carry SOCKS5, since the carrier is lossy). The transport (`lktunnel-rust/`) and the Bale protocol (`bale-signaling-rust/`) are shared crates; the `bale-vpn-rust` binary consumes them directly, the Android app via JNI shims under `bale-vpn-android/rust/`.

**Client → server flow**: client's kernel TUN reads IP packets → ships them across the link → server-side NAT (kernel-TUN or userspace) forwards to the internet.

**Server NAT modes**:
- **Kernel TUN** (Linux / macOS only): server's kernel-managed TUN device receives the IP packets directly; the kernel forwards via MASQUERADE / pf. Highest throughput; requires one-time privileged setup.
- **Userspace NAT** (any OS): per-flow Rust state machine proxies each TCP / UDP flow to a real host socket. No kernel privilege needed. Slower than kernel TUN under heavy load but fully featured (SACK, RACK, TLP, PRR, Window Scaling, Timestamps).

Inbound packets to RFC1918 / loopback / link-local / cloud-metadata addresses are always blocked regardless of mode.

### Signaling

Bale's WebSocket wire is custom protobuf (not gRPC-web). Auth is the `access_token` cookie sent in the `Cookie` header. The SMS OTP auth flow uses gRPC-web HTTPS to `api.bale.ai`; everything else after sign-in goes through the WS. Once a call is up the WS is only kept around for re-signaling.

## Proto extraction caveats

- Many `bytes` fields in generated `.proto` files are actually nested submessages whose type name the extractor couldn't resolve from minified code.
- Many response messages show `// fields not extracted (shared/external type)` — these use shared codec objects the extractor couldn't trace back to the service method.
- The extractor keys on minified variable names (≤ 4 characters) to identify codec objects.
