# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A reverse-engineering research project for the **Bale messenger** web app (`web.bale.ai`). It extracts protobuf service / message definitions from Bale's minified webpack bundles and ships two components that share a common Rust transport library (`lktunnel-rust/`):

- **`bale-vpn-node/`** — a Node.js application that runs the VPN **server side only**. Bridges traffic from connected Bale peers to the internet, either through a kernel-managed TUN (Linux / macOS) or a fully userspace TCP / UDP NAT.
- **`bale-vpn-android/`** — a Kotlin Multiplatform Android app that runs as either VPN **client** (device-wide TUN via `VpnService`, optional LAN-facing SOCKS5) or VPN **server** (userspace NAT, no root). Mode-toggle lives in the app's main screen.

The Node and Android server modes are interchangeable: an Android client can connect to either, and the same wire protocol is used everywhere.

## Supported features

| Role | Platform | Notes |
|---|---|---|
| Server | Node.js (Linux) | Kernel TUN (`bale0`) + iptables MASQUERADE — best throughput. One-time root setup. |
| Server | Node.js (macOS) | Kernel TUN (`utunN`) + pf anchor — best throughput. Runs as root. |
| Server | Node.js (Linux / macOS) | Userspace NAT — no root needed. |
| Server | Android | Userspace NAT — no root. APK install, no command line. |
| Client | Android | Kernel TUN via `VpnService`. Optional LAN-facing SOCKS5 proxy lets other devices on the same WiFi use this Android as their proxy. |

The Node app **does not currently support client mode** — for a client, use the Android app.

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
Writes `.proto` files to `bale-vpn-node/proto/` and regenerates `bale-vpn-node/src/index.js`.

### 3. Build and run the Node server
```bash
cd bale-vpn-node
npm install
npm run build         # compiles .proto → src/messages.{js,d.ts}
npm run build:native  # builds the Rust napi binding (lktunnel)
npm run ui            # starts the server, management UI at http://localhost:3001
```

### Command-line arguments

The Node entry point is `node src/bale-proxy.js`. It accepts:

| Argument | Default | Meaning |
|---|---|---|
| `<integer>` (positional) | `3001` | HTTP port for the management UI. |
| `--nat-mode kernel\|userspace` | `kernel` | Selects how server-side forwarding works. `kernel` requires the one-time setup below; `userspace` runs with no privileges. |

The mode is fixed at startup; switching between `kernel` and `userspace` requires a restart. If `--nat-mode=kernel` is selected but the required kernel privileges or `iptables` rule are missing, the process exits with an actionable error rather than silently degrading.

### Server-mode one-time setup

**Linux, kernel NAT mode**:
```bash
sudo setcap cap_net_admin+eip $(which node)
sudo sysctl -w net.ipv4.ip_forward=1
echo 'net.ipv4.ip_forward = 1' | sudo tee /etc/sysctl.d/99-bale-vpn.conf
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE
```

**macOS, kernel NAT mode**: runs as root (`sudo node src/bale-proxy.js`). NAT (pf anchor `balevpn`) and IP forwarding are loaded automatically; the WAN interface is auto-detected.

**Userspace NAT mode** (any OS): no privileged setup needed.

## Authentication

Authentication uses Bale's `access_token` JWT cookie scoped to `.bale.ai`.

- To get a token initially: run the Node app once and complete SMS OTP via the management UI, or sign in on the Android app and copy the resulting token.
- To refresh: Chrome DevTools → Application → Cookies → `https://web.bale.ai` → copy `access_token`, and paste into the management UI.
- WS close code `4401` indicates the token expired and needs refreshing.

The Node app stores its token (and the admission / blacklist / max-clients settings — see below) in `${RUNTIME_DIR}/.bale-vpn_config.json` (mode `0600`).

## Android app overview

`bale-vpn-android/` is a Kotlin Multiplatform project. The shared Rust `lktunnel` library handles all TCP / UDP forwarding and the LiveKit transport; the Kotlin code is the UI, auth, and Bale call-signaling layer.

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

The Node side mirrors the same three controls in `.bale-vpn_config.json` (keys `admission`, `blacklist`, `maxClients`).

## Architecture overview

Both Node and Android peers join a LiveKit room established via a Bale call between two contacts; IP packets travel between the peers over the resulting encrypted link. The shared Rust library `lktunnel-rust/` owns the transport layer and the userspace NAT; the Node and Android wrappers are thin shims around it (napi binding on Node, JNI on Android).

**Client → server flow**: client's kernel TUN reads IP packets → ships them across the link → server-side NAT (kernel-TUN or userspace) forwards to the internet.

**Server NAT modes**:
- **Kernel TUN** (Linux / macOS Node only): server's kernel-managed TUN device receives the IP packets directly; the kernel forwards via MASQUERADE / pf. Highest throughput; requires one-time privileged setup.
- **Userspace NAT** (Node any OS, Android server): per-flow Rust state machine proxies each TCP / UDP flow to a real host socket. No kernel privilege needed. Slower than kernel TUN under heavy load but fully featured (SACK, RACK, TLP, PRR, Window Scaling, Timestamps).

Inbound packets to RFC1918 / loopback / link-local / cloud-metadata addresses are always blocked regardless of mode.

### Signaling

Bale's WebSocket wire is custom protobuf (not gRPC-web). Auth is the `access_token` cookie sent in the `Cookie` header. The SMS OTP auth flow uses gRPC-web HTTPS to `api.bale.ai`; everything else after sign-in goes through the WS. Once a call is up the WS is only kept around for re-signaling.

## Proto extraction caveats

- Many `bytes` fields in generated `.proto` files are actually nested submessages whose type name the extractor couldn't resolve from minified code.
- Many response messages show `// fields not extracted (shared/external type)` — these use shared codec objects the extractor couldn't trace back to the service method.
- The extractor keys on minified variable names (≤ 4 characters) to identify codec objects.
