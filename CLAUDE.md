# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A reverse-engineering research project for the **Bale messenger** web app (`web.bale.ai`). It extracts protobuf service/message definitions from Bale's minified webpack bundles and provides:
- A Node.js package (`bale-proto/`) for encoding/decoding messages over Bale's WebSocket API, with a SOCKS5 proxy tunnel and WebRTC data-channel transport
- A Kotlin Multiplatform Android VPN app (`bale-vpn-android/`) that runs in either **client mode** (routes the device's traffic through a peer-hosted tunnel) or **server mode** (accepts calls from peers and bridges their traffic to the internet via an in-process userspace TCP/IP stack — no root, no kernel TUN, no iptables)

## Supported features

| Role | Platform | SOCKS5 | VPN (TUN) |
|---|---|:---:|:---:|
| Client | Node.js (any OS) | ✓ | — |
| Client | Android | — | ✓ kernel TUN via `VpnService` |
| Server | Node.js (any OS) | ✓ | — |
| Server | Node.js **Linux** | ✓ | ✓ kernel TUN (`setcap cap_net_admin` + iptables MASQUERADE) |
| Server | Android | — | ✓ in-process userspace TCP/IP NAT (`PacketProcessor`, no root) |

**Most convenient: Android server + Android client** — install APK on both devices, no command line, no firewall rules. The Android server's userspace TCP/IP stack handles routing and NAT inside the app process.

**Best throughput: Linux Node server + Android client** — on Linux the kernel does the IP routing (TUN device) and the NAT (`iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE` — one-time setup, plus `setcap cap_net_admin+eip $(which node)` so Node can manage the TUN without root). Both kernel paths are substantially faster than the userspace alternatives. The Android server's userspace stack is fully featured but slower than kernel TUN; pick it when root or Linux isn't available.

## Three-Step Pipeline

### 1. Download web app assets
```bash
python3 download.py
```
Downloads the Bale web app JS bundles, HTML, and static files into `static/`. Reads the service worker to discover all async chunk URLs. Skips files that already exist locally. Requires a valid `access_token` cookie hardcoded in the script.

### 2. Extract protobuf definitions
```bash
python3 extract_proto.py
```
Parses `static/js/async/5100.bbddcd29.js` (the main protobuf chunk), splits it into webpack modules, finds codec objects with `encode()`/`decode()` methods, and maps them to service/method names via `serviceName`/`methodName` annotations. Writes `.proto` files to `bale-proto/proto/` and regenerates `bale-proto/src/index.js`.

### 3. Build and use the proto package
```bash
cd bale-proto
npm install
npm run build        # compiles .proto → src/messages.js + src/messages.d.ts via pbjs/pbts
npm run build-tun    # compile C++ TUN addon (Linux only, requires node-gyp)
npm run ui           # start WebSocket client + web UI at http://localhost:3001
npm run ui -- 8080   # listen on a custom port
npm run ui -- server # start in server mode (TUN + NAT relay)
```

The HTTP port can also be passed directly: `node src/ws-client.js 8080`. Defaults to `3001`.

**Server mode one-time setup** (Linux only):
```bash
# Grant the node process CAP_NET_ADMIN so it can manage the TUN device in-process.
# iptables for MASQUERADE still requires root (run once):
sudo setcap cap_net_admin+eip $(which node)
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE
# Then start server mode (no sudo needed):
node src/ws-client.js server
```
The server creates `bale0` (`10.8.0.1/24`) on startup, enables `ip_forward`, and auto-answers all incoming LiveKit calls. Android clients are assigned `10.8.0.2/24`.

## Architecture

### `bale-proto/` — Node.js package
- **`src/ws-client.js`** — single entry point: connects to `wss://next-ws.bale.ai/ws/`, subscribes to real-time updates, serves a web UI at `http://localhost:3001`, and manages the tunnel. Three classes: `TunnelManager`, `BaleWsClient`, plus HTTP routes. All `console.log/warn/error` calls are automatically prefixed with `[YYYY-MM-DD HH:MM:SS.mmm]` via a patch at startup.
- **`src/index.js`** — loads all `.proto` files via protobufjs at runtime, exposes `encode(typeName, payload)` → `Buffer` and `decode(typeName, bytes)` → object. Use fully-qualified names like `"bale.messaging.v2.SendMessageRequest"`.
- **`src/tun.js`** — thin wrapper around the native TUN addon (`build/Release/tun.node`). Exports `open(name)`, `configure(name, ip, prefix)`, `close(fd)`. Only available on Linux after `npm run build-tun`.
- **`tun_addon/tun.cc`** — Node-API C++ addon: `openTun` (TUNSETIFF ioctl), `configureIf` (SIOCSIFADDR + SIOCSIFNETMASK + SIOCSIFFLAGS ioctls in-process — required because `setcap cap_net_admin` is not inherited by child processes), `closeTun`.
- **`proto/*.proto`** — 11 extracted services: `bale.messaging.v2`, `bale.v1` (images/stickers), `bale.bank.v1`, `bale.meet.v1`, `bale.presence.v1`, `bale.wallet.v1`, `bale.turing.v1`, `bale.timche.v1`, `bale.premium.v1`, `bale.abacus.v1`, `bale.message_stream.v1`.

### Sending text messages
`BaleWsClient.sendText(peerId, peerType, text)` calls `bale.messaging.v2.Messaging/SendMessage`. The request is hand-rolled protobuf (no generated code needed):

- **peer** (field 1, tag 10) and **exPeer** (field 6, tag 50) — both use the same wire format: `{type int32, id int32}` (accessHash always `"0"`, omitted as default). `PEERTYPE_PRIVATE=1`, `PEERTYPE_GROUP=2`; `EXPEERTYPE_PRIVATE=1`, `EXPEERTYPE_GROUP=2`.
- **rid** (field 2, tag 16) — random int64 used as a dedup key; `Date.now()` string is sufficient.
- **message** (field 3, tag 26) — QBZ union: field 15 (tag 122) = textMessage; textMessage field 1 (tag 10) = text string.

RPC responses are matched back to promises via a `pending` Map keyed by `rpcIndex`. The shared helper `_rpcCall(service, method, payload)` wraps this pattern. The subscribe stream (`SubscribeToUpdates`) uses a separate index and its responses fall through to `_processUpdate`.

**RPC request inner structure** (field 1 of outer frame, length-delimited):
- field 1 (tag 10): `serviceName` string
- field 2 (tag 18): `method` string
- field 3 (tag 26): `payload` bytes
- field 5 (tag 40): `index` int64  ← **field 5, not 4**

**RPC response inner structure** (field 1 of outer frame):
- field 1: `error` bytes (presence = error)
- field 2: `response` bytes (presence = success)
- field 3: `index` int64 (echoes the request index)

### Loading contacts
Two-step flow on connect:
1. `bale.users.v1.Users/GetContacts` (empty `contactsHash`) → response field 3 (tag 26) = `userPeers` repeated (`d.Uw`: uid int32 + accessHash int64)
2. `bale.users.v1.Users/LoadUsers` with those peers → response field 1 (tag 10) = `users` repeated (`u.KJ` entity: field 1=id, field 3=name, field 9=nick wrapped-string)

If `userPeers` is empty but `users` are present in the `GetContacts` response, those inline user entities are used directly.

### Wire protocol (custom binary, not gRPC-web)
Frames are hand-rolled protobuf over WebSocket. Field assignments:

| Direction | Field | Content |
|-----------|-------|---------|
| Client → Server | 1 | RPC request (serviceName, method, payload, index) |
| Client → Server | 2 | Ping (id) |
| Client → Server | 3 | Handshake request (protoVersion=1, apiVersion=151668) |
| Server → Client | 1 | RPC response (error/response bytes, index) |
| Server → Client | 2 | Push update (SubscribeToUpdates stream) |
| Server → Client | 3 | Terminate session |
| Server → Client | 4 | Pong |
| Server → Client | 5 | Handshake response |

Real-time updates flow via `bale.maviz.v1.MavizStream.SubscribeToUpdates` (empty payload). The response is a nested structure: `SubscribeResponse → xC update union → various field types`:
- field 55 (tag 442) = new message (TIF struct)
- field 52807 (tag 422458) = `callStarted` `{ call: CallEntity, participants[] }` — **callee** gets this on incoming call
- field 52808 (tag 422466) = `callAccepted` `{ call: CallEntity, participants[] }`
- field 52809 (tag 422474) = `callEnded` — payload is a wrapped `CallEntity` (the inner `f1` length-delimited contains the entity, whose `f1` varint is the `callId`). Both peers receive this when a call terminates.
- field 52810 (tag 422482) = `callReceived` `{ callId int64, participants[] }` — alternative incoming call notification

### Authentication
- Auth uses the `access_token` JWT cookie scoped to `.bale.ai`.
- No token-exchange step: send the cookie directly in the WebSocket `Cookie` header.
- To refresh: Chrome DevTools → Application → Cookies → `https://web.bale.ai` → copy `access_token`.
- The token is hardcoded in `download.py` and `bale-proto/src/ws-client.js` (`ACCESS_TOKEN` constant) — update both when it expires. WS close code `4401` = expired token.

### SOCKS5 tunnel over Bale messages

`TunnelManager` multiplexes TCP streams as Bale text messages. Each message is a JSON object prefixed with `T:`:

| Field | Meaning |
|-------|---------|
| `t` | Type: `C`=connect, `A`=ack, `D`=data, `X`=close |
| `s` | Session ID (12 hex chars, random per TCP connection) |
| `h`, `p` | Host and port — only in `C` |
| `ok` | Boolean success — only in `A` |
| `q` | Sequence number — only in `D` (for in-order reassembly) |
| `d` | Base64-encoded chunk (≤ 3000 raw bytes) — only in `D` |

**Server mode**: receives `C` messages from any peer → opens a real outbound TCP socket → streams `D` messages back → sends `X` on close.

**Client mode**: starts a local SOCKS5 server on a configurable port (default 1080) → handles the SOCKS5 handshake locally → tunnels the TCP stream to the configured server peer. Supports IPv4, IPv6, and domain-name address types.

**Session key**: server uses `${fromKey}:${sid}` — `fromKey` is `fromUid` (number) for message transport or `callId` string for WebRTC sessions.

**Configuration** (via UI or HTTP):
- `POST /tunnel/config` — `{ mode, socks5Port, serverPeerId, serverPeerType, transport }`
- `GET /tunnel/status` — returns current mode, transport, running state, session count, lkRooms count
- `GET /tunnel/clients` — server mode only; returns array of connected LiveKit clients with per-client stats (`callKey`, `isTunClient`, `connectedAt`, `rxPkts`, `rxBytes`, `txPkts`, `txBytes`)
- `POST /tunnel/clients/:callKey/disconnect` — forcibly disconnect a specific client

**Transport options** (client mode only):
- `message` (default): tunnel data sent as Bale text messages
- `webrtc`: calls the server peer via `StartCall`, joins the LiveKit room, uses the data channel for tunnel data

**UI**: click "⚡ Tunnel proxy" to expand. In server mode the Activate button is hidden — the server auto-configures the TUN device and starts listening for calls as soon as the WebSocket handshake completes (`onWsReady` → `_setupTun()`). The connected-clients panel appears automatically in server mode showing each LiveKit room's call ID, active-TUN indicator, uptime, and ↑/↓ stats; each row has a Disconnect button.

### Calls and WebRTC tunnel

**Call entity** (`Je` / `A` codec, module 23186):
- field 1 (tag 8):  `id` — int64 callId
- field 2 (tag 18): `token` — LiveKit JWT
- field 3 (tag 26): `room` — LiveKit room name
- field 4 (tag 34): `url` — LiveKit server URL (wrapped-string via `_.hU`)
- field 8 (tag 64): `adminUid` — int32 caller (call initiator). On the callee side this is the *other party*; this is the field we read for `CallEntity.callerId`.
- field 9 (tag 74): `peer` — `{type, id}` length-delimited. The other-party reference in the call ref. **Do not use for `callerId`** on the callee side — it decodes to self.
- field 12 (tag 96): `isLivekit` — bool

**StartCall request** — must include all three fields or the server returns an RPC error:
- field 1 (tag 10): `peer` bytes `{ type int32, id int32 }`
- field 2 (tag 16): `rid` int64 (random dedup key, e.g. `Date.now()`)
- field 6 (tag 50): `liveKitCall` bytes containing the same `{ peer, rid }` — signals LiveKit mode

**AcceptCall request**: field 1 (tag 8) = `callId` int64.

**Server auto-answer flow** (implemented in `TunnelManager.onCallReceived`):
1. `callReceived` update arrives → `BaleWsClient._processUpdate` calls `tunnel.onCallReceived(callId)`
2. `BaleWsClient.acceptCall(callId)` sends `bale.meet.v1.Meet/AcceptCall` → decodes response
3. If `call.isLivekit`, creates `LiveKitTransport`, attaches per-client stat fields (`_callKey`, `_connectedAt`, `_rxPkts/_rxBytes/_txPkts/_txBytes`), wires `onDisconnected` → `lkRooms.delete(callKey)`, connects
4. Each LiveKit data message is decoded with `lkDecode`: recognized SOCKS5 frames go to `_srvMsg()`; unrecognized binary (raw IP packets) goes to `_handleTunPacket()`

**TUN packet forwarding (server)**:
- `_handleTunPacket(data, lk)` — drops packets destined for `10.8.0.0/24` (intra-subnet isolation), then writes the raw IP packet to the `bale0` fd. Increments per-client and aggregate rx counters. When a new `lk` replaces the previous TUN client, resets the stats counters and restarts the 5-second stats log timer.
- `_tunReadLoop()` — reads raw IP packets from `bale0` continuously; forwards each to the active `_tunLk` via `sendLossy`. Increments per-client and aggregate tx counters.
- `_setupTun()` — opens `bale0` (deleting any leftover from a prior run), calls `tun.configure('bale0', '10.8.0.1', 24)` (in-process ioctls), enables `ip_forward`, adds iptables MASQUERADE rule. Safe to call multiple times (no-op if fd already open). Must run as root or with `setcap cap_net_admin`.
- Stats log every 5 s per connected client: `[TUN] client=<callKey>  rx=Npkt/X.XKB  tx=Npkt/X.XKB`

**Server LiveKit teardown**: `TunnelManager.hangUpAll()` disconnects all `lkRooms`, clears the map, clears `_tunLk`/`_tunClientKey`, and stops the stats timer. Called automatically when the WS closes. `_stopAll()` delegates to `hangUpAll()` internally.

**Client WebRTC flow** (`TunnelManager.startWebRtcTunnel`):
1. Calls `BaleWsClient.startCall(serverPeerId, serverPeerType)` → `bale.meet.v1.Meet/StartCall`
2. Connects `LiveKitTransport` with returned credentials; wires `transport.onData` → `onPacket` callback (raw IP packets)
3. `sendPacket(data)` → `transport.sendUrgent(data)` → LiveKit LOSSY publish

**`@livekit/rtc-node`** is required unconditionally at startup (`require('@livekit/rtc-node')` at top of `ws-client.js`). Install: `cd bale-proto && npm install @livekit/rtc-node`.

### WebRTC binary framing (`lkEncode` / `lkDecode`)

Data-channel messages use compact binary frames instead of JSON/base64:

```
[1B type][6B raw sid][payload]
```

| Type byte | Frame | Payload |
|-----------|-------|---------|
| `C` (0x43) | Connect | 2B host-len + host + 2B port |
| `A` (0x41) | Ack | 1B ok (0/1) |
| `D` (0x44) | Data | raw bytes |
| `X` (0x58) | Close | — |
| `U` (0x55) | UDP | 2B host-len + host + 2B port + raw datagram |

`LK_CHUNK = 65536` (64 KB) for WebRTC; `MSG_CHUNK = 3000` for message transport.

---

## Android VPN app (`bale-vpn-android/`)

Kotlin Multiplatform project targeting Android (future: iOS). All business logic lives in `shared/commonMain`; only the LiveKit binding and `VpnService` are platform-specific.

### Module layout

```
bale-vpn-android/
  shared/                        # KMP library
    commonMain/
      bale/
        Models.kt                # data classes: StartPhoneAuthResponse, AuthResponse, UserEntity
        BaleAuthClient.kt        # SMS OTP auth via gRPC-web
        BaleWsClient.kt          # WebSocket client (handshake, RPC, call management)
        ContactRepository.kt     # contact fetch/search via gRPC-web
      tunnel/
        FrameCodec.kt            # TFrame sealed class + lkEncode/lkDecode
        DataTransport.kt         # interface (connect, send, onData, onDisconnected)
        TunnelManager.kt         # raw IP packet forwarder: startWebRtcTunnel, sendPacket, onPacket
      proto/
        Proto.kt                 # hand-rolled protobuf ProtoWriter / ProtoReader (no JVM deps)
    androidMain/
      livekit/AndroidLiveKitTransport.kt   # DataTransport backed by livekit-android SDK
      PacketProcessor.kt                   # userspace TCP/IP stack: NAT, TCP state machine, rate limiter
    iosMain/
      livekit/IosLiveKitTransport.kt       # stub — wire iOS LiveKit SDK here
  androidApp/
    BaleApp.kt                   # Application — wires ProcessLifecycleOwner into BaleConnection.reconcile() + Main-loop crash recovery
    BaleConnection.kt            # singleton: WS owner, connection rule reconciler (mode + foreground + sticky-disconnect)
    BaleVpnService.kt            # client mode: VpnService — TUN fd, raw IP read loop, IPv6 rejection, stats
    BaleServerService.kt         # server mode: foreground service — auto-answers calls, hosts PacketProcessor per client
    AdmissionStore.kt            # caller allow-list persisted to SharedPreferences
    MainActivity.kt              # VPN start/stop screen; shows live traffic stats when connected
    PhoneAuthActivity.kt         # phone number input → startPhoneAuth
    OtpActivity.kt               # OTP code + optional name → validateCode/signUp → token
    ContactsActivity.kt          # contact list — pick mode (client) or manage mode (server) with Add/Remove
    ServerClientsActivity.kt     # server-mode UI: per-client live stats, bandwidth caps, admission
```

### Auth flow (SMS OTP)

All auth calls are gRPC-web HTTPS POSTs to `https://api.bale.ai/`.

```
PhoneAuthActivity
  └─ BaleAuthClient.startPhoneAuth(phone)
       POST bale.auth.v1.Auth/StartPhoneAuth
       body: { appId=4, phone, sendType=SMS(3), apiKey="C28D46DC…" }
       → transactionHash, isRegistered

OtpActivity
  ├─ BaleAuthClient.validateCode(transactionHash, code)   // existing user
  │    POST bale.auth.v1.Auth/ValidateCode
  │    → jwt
  └─ BaleAuthClient.signUp(transactionHash, name)         // new user
       POST bale.auth.v1.Auth/SignUp
       → jwt

  └─ BaleAuthClient.fetchAccessToken(jwt)
       GET https://web.bale.ai/set-cookie/?jwt=…
       reads Set-Cookie: access_token=…
       → access_token string
```

Constants: `AUTH_APP_ID=4`, `AUTH_API_KEY="C28D46DC4C3A7A26564BFCC48B929086A95C93C98E789A19847BEE8627DE4E7D"`, `SENDCODE_SMS=3`.

gRPC-web framing: 5-byte prefix `[0x00][4B big-endian length]` for data frames; `[0x80]…` trailer frames are ignored.

### Contact flow

`ContactRepository` uses gRPC-web (no WebSocket). Operations:

| Method | RPC | Notes |
|--------|-----|-------|
| `getContacts()` | `GetContacts` → `LoadUsers` (two-step) | full contact list; `accessHash` from peer refs is merged onto each `UserEntity` since `LoadUsers` responses don't carry it |
| `searchByName(q)` | `Users/SearchContacts` | name substring search within existing contacts |
| `searchByPhone(q)` | `Users/ImportContacts` | phone-number lookup; **also adds the user as a contact** |
| `removeContact(user)` | `Users/RemoveContact` | wire payload `{uid int32 = 1, accessHash int64 = 2}` — both required |

`UserEntity(id, name, nick, phone, accessHash)` — `displayName` = name ?: nick ?: id; `peerType` = 1 (private). The `accessHash` field is required by `AddContact` / `RemoveContact` and is decoded from field 2 of the User struct in `LoadUsers` responses; for results that came in via a `UserPeer` ref the hash is merged from there so every `UserEntity` carries an authoritative hash.

**ContactsActivity modes** (intent extra `EXTRA_MODE`):
- `MODE_PICK` (default) — client-mode peer picker. Tap a contact → save to peer prefs + `finish()`. FAB opens a phone-only search via `SearchView`; results are tap-to-select. Hint placeholder `+98912…`.
- `MODE_MANAGE` — server-mode contact manager. Tap a contact → confirm-remove dialog. Each row also shows an inline `Remove` button. FAB opens an explicit "Add Contact" dialog (phone input only, no auto-import on stray search-bar typing).

### App config (SharedPreferences `"config"`)

| Key | Written by | Value |
|-----|-----------|-------|
| `token` | `OtpActivity` | Bale `access_token` cookie |
| `peerId` | `ContactsActivity` | selected peer's user ID |
| `peerType` | `ContactsActivity` | `1`=private, `2`=group |
| `peerName` | `ContactsActivity` | display name |
| `packet_debug` | `BaleServerService.debug` setter | toggle verbose `PacketProcessor` diagnostics |
| `allowed_callers` | `AdmissionStore` | comma-separated `callerId` allow-list |

**Startup routing** (`MainActivity.onCreate`):
- No `token` → `PhoneAuthActivity`
- Token present → VPN control screen (peer selection is a sub-flow from the main screen)

**Mode toggle**: client / server is a SharedPreferences-backed toggle. Switching to server auto-starts `BaleServerService`; switching to client stops it. The toggle is disabled while the VPN client is running (the explicit Disconnect button is the off-switch there); it stays enabled in server mode because toggling to client is the only way to stop the server (there is no separate "Start/Stop Server" button).

The server tab carries a small note "Bale only allows calls between contacts. Anyone who wants to connect through you must already be in your contact list." plus a **Contacts** button that opens `ContactsActivity` in `MODE_MANAGE`.

The WS Connect/Disconnect button is **only visible in server mode** — it's the way to express the sticky-disconnect intent. In client mode the WS comes and goes automatically; surfacing a manual button there would just be a footgun.

**WS lifecycle (`BaleConnection.reconcile()`)** — single source of truth, computes desired WS state from three inputs and reconciles actual state:

| mode | rule (WS up iff …) |
|---|---|
| client | `isForeground && !BaleVpnService.isRunning` — the WS is needed only briefly during signaling; once the LiveKit data channel is up, dropping the WS saves resources without affecting the tunnel |
| server | `!userInitiatedDisconnect` — independent of foreground/background. The server foreground service must stay reachable to peers when the user has the app backgrounded |

Inputs:
- `BaleConnection.isForeground` — driven by `BaleApp`'s `ProcessLifecycleOwner` observer (debounces internal navigation; only true app-level foreground/background changes flip it).
- `BaleConnection.userInitiatedDisconnect` — sticky flag (process-scoped). Set by btnWs Disconnect; cleared by btnWs Connect; also cleared by `BaleVpnService.resolveWs` because starting a VPN is itself an "I want WS now" override.
- `mode` — read from prefs each call.

Call sites — all of them just update an input and invoke `reconcile()`:
- `BaleApp.onStart/onStop` → `isForeground = true/false` + reconcile
- `MainActivity.switchToMode` → after starting/stopping services, reconcile
- `MainActivity.btnWs` Connect/Disconnect → flag flip + reconcile (Disconnect path additionally awaits `BaleServerService.disconnectAllClients()` first so peers receive `WS callEnded` cleanly before the WS dies)
- `BaleServerService.onStartCommand` → reconcile (lets server obey the sticky flag rather than force a connect)
- `BaleVpnService.stopVpn` → reconcile (so the WS comes back up if the user is still in the app and might start another VPN)

Two paths bypass reconcile because they need WS up *while the rule says down*:
- `BaleVpnService.resolveWs` — VPN start / `TunnelManager` reconnect signaling. Direct `BaleConnection.connect()`. After signaling completes, `TunnelManager.onTunnelReady` callback fires `BaleConnection.reconcile()` which drops the WS again.
- `OtpActivity.verify` / `PhoneAuthActivity.btnUseToken` — just-after-login bring-up before reconcile knows about the new token.

**WS multi-subscriber**: `BaleConnection.disconnect()` does NOT clear `onCallReceived` / `onCallEnded` — those subscriptions belong to `BaleServerService` and survive WS disconnect→reconnect cycles. The server's lambdas always look up `instance` from the companion at fire time, so they're safe even when no service is registered (they log a warning and return). `BaleWsClient.addOnCallEnded(cb)` returns a remover lambda; `TunnelManager` (client mode) and `BaleConnection`'s server-mode fan-out subscribe independently and neither overwrites the other.

**About dialog**: action-bar overflow → "About" — shows the project motto, contact email (`mailto:` link), and `versionName (versionCode)` from `PackageManager`.

**Main-loop crash recovery** (`BaleApp.installMainLoopCrashRecovery`): a posted `Runnable` wraps `Looper.loop()` in `while (true) { try { … } catch { log } }`. Belt-and-suspenders for unhandled coroutine exceptions on the Main dispatcher — notably the LiveKit SDK's `CommunicationWorkaroundImpl` can throw `UnsupportedOperationException` when `AudioFlinger` runs out of tracks during reconnect storms (status -12 = ENOMEM). The throttle in `BaleServerService` is the actual fix; this handler keeps the app alive if it ever leaks through.

### VPN internals

`BaleVpnService` sets up a TUN interface (`10.8.0.2/24`, routes all public IPv4 + `::/0`, DNS `8.8.8.8`, MTU 1500, own package excluded). Raw IP packet forwarding — no TCP/UDP parsing in the app.

**TUN read loop** uses `android.system.Os.poll(2) + Os.read(2)` directly, not `FileInputStream`. Modern Android opens the VpnService TUN fd with `O_NONBLOCK`, and the driver re-applies the flag if cleared via `fcntl(F_SETFL)`. `FileInputStream.read` silently maps the resulting `EAGAIN` to `n=0` (which the original code mis-interpreted as EOF, killing the loop ~50 ms after connect). The current pattern parks in `poll(POLLIN)` with a 1-second timeout (so we re-check `isRunning` for clean shutdown), then `Os.read` is guaranteed to have a packet ready. `EINTR` / `EAGAIN` / `n==0` are all treated as "spurious — continue", `EBADF` or `!isRunning` as "shutdown — exit".

**Packet path (client → server)**:
1. `Os.poll` waits for `POLLIN` on the TUN fd, then `Os.read` returns the IP packet
2. IPv6 packets → `rejectIpv6()` sends ICMPv6 Destination Unreachable back into TUN so apps fall back to IPv4 immediately
3. IPv4 packets → `mgr.sendPacket(buf.copyOf(n))` → `transport.sendUrgent()` → LiveKit LOSSY data channel

**Packet path (server → client)**:
1. Server writes raw IP packet to `bale0` (result of kernel NAT un-NATing the return traffic)
2. Arrives at Android via LiveKit data channel → `transport.onData` callback
3. `mgr.onPacket` → `out.write(pkt)` injects the packet into the TUN fd

**IPv6 rejection** (`BaleVpnService.rejectIpv6`): synthesises an ICMPv6 Destination Unreachable (no route, type 1 code 0) with a correct pseudo-header checksum and writes it back to the TUN fd. Never replies to ICMPv6 error messages (type < 128) to prevent loops.

**Traffic stats**: `BaleVpnService` companion holds `@Volatile` fields `rxPkts/rxBytes` (packets read from TUN → sent to server) and `txPkts/txBytes` (packets received from server → injected into TUN). Reset to zero on each VPN start. `MainActivity` polls these every 500 ms and displays them as `↑ Npkt / X.XKB  ↓ Npkt / X.XKB` below the VPN button when connected. The service also logs stats to Logcat every 5 seconds.

**`TunnelManager`** (Android, `shared/commonMain`): thin forwarder.
- Constructor takes `getBale: suspend () -> BaleWsClient?` (resolved fresh on every connect attempt — lets `BaleVpnService.resolveWs` lazily bring the WS back up when needed) and `onTunnelReady: () -> Unit` (fired on every successful (re)connect — wired to `BaleConnection.reconcile()` so the WS drops once signaling is done).
- `startWebRtcTunnel()` → `getBale()` → `bale.startCall` → join LiveKit room → wait for `transport.hasPeer` (15 s deadline) → `onTunnelReady()` → return true.
- `sendPacket(data)` → `transport.sendUrgent(data)`.
- Reconnects with `3 s × attempt` back-off (max 30 s, 5 attempts) on LiveKit disconnect; gives up via `onPermanentDisconnect`.

**`AndroidLiveKitTransport`**: `Channel<ByteArray>(256)` send queue with `LOSSY` reliability. `trySend` drops when full (appropriate for IP forwarding). Both `send` and `sendUrgent` are non-blocking with drop semantics.

- **`everHadRemote` guard**: LiveKit fires a phantom `ParticipantDisconnected` event during the initial connect window before any peer has actually joined. The transport only treats an empty-room `ParticipantDisconnected` as "peer left" if at least one `ParticipantConnected` fired earlier — otherwise it logs `stale ParticipantDisconnected before any peer joined — ignoring`. Without this the server tears its own room down ~3 s after connect and the client can never join.
- **`publishData` failure handling**: errors from `localParticipant.publishData` (transient `Publisher isn't setup yet!`, `Job was cancelled` post-disconnect, etc.) just drop the offending packet and keep the send loop alive. LOSSY semantics already permit packet loss; real teardown is driven by `RoomEvent.Disconnected`, never by send errors.

### Android server mode (`BaleServerService`)

The Android app can also act as the VPN *server* — accepting calls from other Bale peers and routing their traffic through this device's network. Auto-started when the user selects server mode (no separate "Start Server" button); stopped when they toggle back to client mode. Runs as a foreground service.

Unlike the Node.js server mode (which requires Linux + `setcap cap_net_admin` + iptables), the Android server runs an **in-process userspace TCP/IP stack** — `PacketProcessor` — so no root, no kernel TUN, and no iptables rules. Each accepted call gets its own `LiveKitTransport` + `PacketProcessor` pair. Inbound IP packets ride in over LiveKit; outbound packets are synthesised and shipped back the same way.

**Service lifecycle**:
- `scope` is a `var` and is rebuilt in `onStartCommand` whenever it's not active (a previous `stopServer` cancelled it). Without this, a re-entrant `onStartCommand` would `scope.launch` on a dead scope and silently no-op every coroutine.
- `loopsStarted` flag prevents re-launching `idleSweepLoop` / `pendingSweepLoop` / `statsLoop` on top of existing ones when `onStartCommand` fires multiple times for the same instance.
- `stopServer()` only nulls `BaleConnection.onCallReceived` / `onCallEnded` if `instance === this`. Without that guard, a concurrent `onStartCommand` for a successor service would have its lambdas overwritten by the outgoing service. The `MainActivity` calls `startService` unconditionally (doesn't trust the volatile `isRunning` flag, which can stay `true` after an OS-killed service) — Android safely re-fires `onStartCommand` for live services and creates fresh instances for killed ones.
- `BaleConnection.onCallReceived/onCallEnded` lambdas resolve the live `instance` from the companion at invocation time, so even a stale lambda from a destroyed service routes correctly to whichever instance is current.

**Notifications**: foreground notification while the service runs. Surfaces WS state explicitly: `WebSocket disconnected — no incoming calls` (manually disconnected), `Reconnecting WebSocket… (no incoming calls)` (transient drop), or normal `N connected • M pending`. Pending connection requests also fire a separate notification with the caller's display name (resolved async via `BaleWsClient.loadUserName`); tapping it opens `MainActivity` for the allow/reject decision.

**Per-caller state in `BaleServerService`**:
- `clients` — map from `callId` to active `Client(callId, callerId, transport, processor)`.
- `pendingMap` — calls waiting for user approval (deduplicated by `callerId`).
- `callerLimits` — per-`callerId` bandwidth overrides; restored on reconnect within the same service lifetime.

**WS event reactions** (`checkAndHandleCall`):
- **callerId == 0 → defer**. Bale fans out two updates per incoming call: `callReceived` (52810, sometimes with empty participants list → callerId=0) and `callStarted` (52807, carries adminUid). Order isn't guaranteed; the callerId=0 variant is dropped silently and the followup carries the real id. Prevents a transient "unknown caller" pending entry.
- **Allowed caller, throttle**: if the same callerId has an *existing* client whose LK transport hasn't seen its peer yet AND it's less than `ESTABLISH_GRACE_MS` (8 s) old, drop the new call. Reconnect-storm guard — a misbehaving client retrying every ~2 s would otherwise replace its previous call before any LK room could finish setting up, exhausting AudioFlinger and never establishing a tunnel.
- **Allowed caller, otherwise**: clear any stray pending entry for this callId, then `handleCall` (`acceptCall` + create transport/processor + dedup against any existing client from the same callerId via `cleanupClientLocal` — local cleanup, no `discardCall` RPC; Bale's discardCall scopes at caller↔callee session level and would end the *new* call too).
- **Not-allowed caller**: dedup pending by callerId, queue a `PendingCall`, post the allow/reject notification.
- `onCallEnded` (`onCallEndedRemote`): if the `callId` matches an active `Client` → `doDisconnect`; if it matches a pending entry → drop it and clear the notification. Without this hook, peers that hung up would linger until the 5-min idle sweep or a LiveKit-side event finally fired.
- `pendingSweepLoop` (every 15 s): auto-rejects pending calls older than `PENDING_TIMEOUT_MS` (60 s).

**`callerId` source**: parsed from `CallEntity` field 8 (`adminUid` — the call initiator). Field 9 (`peer`) is the *other party in the call ref*, which from the callee's perspective decodes to **self** — using it would make the server display its own user-id and name for every incoming call.

**Companion API (called from UI)**:
- `disconnectClient(callId)` — sends `discardCall` to peer (so the peer's VPN sees the disconnect cleanly), tears down the local processor.
- `disconnectAllClients()` — **suspending**. For every active client and pending request, in parallel: send `discardCall` and close the LiveKit room. Caller awaits completion before tearing down the WS, so peers receive `WS callEnded` and stop immediately instead of spending 15 s × 5 reconnect attempts. Wired into `MainActivity.btnWs` Disconnect path — manual press disconnects all clients; **a natural WS drop does NOT** — the runLoop's 5 s reconnect handles transient drops and per-client LiveKit data channels are independent of the Bale WS.
- `setClientLimit(callId, upBps, downBps)` — adjusts a live processor's token buckets and persists the per-caller override.
- `acceptPending(callId, addToList)` / `rejectPending(callId)` — admission decisions surfaced from notifications or `MainActivity`.
- `debug` — propagates verbose-log toggle to every running processor and persists to prefs.

### `PacketProcessor` — userspace TCP/IP

Lives at `shared/src/androidMain/kotlin/ai/bale/proxy/PacketProcessor.kt`. Single-threaded NAT box translating client tunnel packets ↔ real internet sockets. Public surface is tiny: `process(pkt)` enqueues an inbound IP packet (any thread) and `close()` signals shutdown.

**TCP stack** (in `TcpSession`):
- Full state machine: `SYN_RCVD → ESTABLISHED → FIN_WAIT_*` / `CLOSE_WAIT → LAST_ACK → TIME_WAIT`.
- Options advertised in our SYN-ACK: **MSS=1460**, **WS shift=4** (~1 MB advertised window), **SACK-Permitted** — all conditional on the peer offering them.
- Loss recovery: RFC 6298 RTO with Karn's algorithm; RFC 5681 fast retransmit; **RFC 6675 SACK-aware IsLost** — fast-recovery triggers on the first dup-ACK whose SACK info implies a hole, not after 3 dup-ACKs; **RFC 8985 Tail Loss Probe** — probe fires before RTO with `pto = min(2*srtt, rto)`, RTO is pushed when probe fires so the probe gets a full RTO window for response; **NewReno step 5** — partial ACKs during recovery don't deflate cwnd, so new data pipelines with retransmits in a single RTT.
- Multi-segment partial-ACK retransmit (`retransmitAllHoles`) bounded by `cwnd × MSS − pipe`.
- SYN-ACK retransmit on its own RTO branch (no more zombie connections on lost SYN-ACKs); `MAX_RTO_RETRIES = 9` then close.
- SWS-avoidance window updates: ACKs on `0 → positive` *and* on `≥ MSS` since last advertisement.
- IP-level: every outgoing IP packet has DF=1.

**UDP stack** (in `UdpSession`):
- Per-flow `DatagramChannel` connected to the destination, so `read()` returns no-allocation datagrams (no per-packet `InetSocketAddress`).
- Outbound responses larger than MTU are IP-fragmented in-process via `buildUdpFragments`.
- `PortUnreachableException` is logged but not fatal — flows survive transient ICMP errors.

**Loop & timers**:
- Single `Selector` for both TCP and UDP. `mainLoop` blocks in `selector.select(timeoutMs)` where `timeoutMs` is the minimum of pending throttle deadlines and the next per-session timer fire.
- Deadline-based timers (`rtoDeadlineMs` / `tlpDeadlineMs` / `zwpDeadlineMs` / `timeWaitDeadlineMs`) checked once per loop iteration in `fireTcpTimers`. Replaces the original `scope.launch { delay(); … }` pattern — no per-ACK coroutine churn.
- All session/queue cleanup happens in `mainLoop`'s `finally` block on the dispatcher thread, so `close()` from a foreign thread can never race with TCP/UDP map mutations.

**IP fragment reassembly** is bounded: ≤ 64 distinct in-flight streams (oldest evicted on overflow), ≤ 64 KB per stream, 30 s expiry.

**Diagnostic logging**: `dbg { … }` blocks are zero-cost when the `debug` toggle is off (lambda body never evaluated). Hot paths log retransmits, throttle pauses, OOO buffering, fragment expiry, RTO/TLP fires, etc., all gated behind the toggle.

### Bandwidth limits

Each `PacketProcessor` runs two `TokenBucket`s — one per direction — with a 1-second burst capacity. Charges include IP+TCP headers (40 B) so the cap reflects on-the-wire bytes.

- **Upload** (client → internet): when the bucket runs dry mid-drain, the dequeued IP packet is held in `pendingUpPkt` and `mainLoop` sleeps until tokens refill. Real backpressure to the source.
- **Download** (internet → client): when the bucket runs dry mid-read, the session is added to `downloadThrottledKeys`, `OP_READ` is removed from the selector key, and the kernel's TCP receive buffer fills naturally — the upstream server backs off via standard TCP flow control.
- **`isThrottled`** flag: true if either bucket dropped a packet in the last 2 s; surfaced via `ClientInfo` for the UI to highlight.

Defaults / ceilings:
- `BaleServerService.DEFAULT_LIMIT_BPS = 37_500` bytes/sec ≈ **300 kbps** — applied to every newly accepted client. Stored as bytes/sec because the token bucket charges packet sizes in bytes; surfaced to the user in kbps.
- `ServerClientsActivity.MAX_LIMIT_KBPS = 500` kbps — UI ceiling (input clamped `[1, 500]`; no "unlimited" option).
- Conversion in the UI: `kbpsToBytesPerSec(k) = k * 1_000 / 8`, `bytesPerSecToKbps(b) = b * 8 / 1_000`.

Per-caller overrides live in `BaleServerService.callerLimits` (in-memory) and are re-applied automatically when the same caller reconnects within the same service lifetime.

**Global TCP rwnd backpressure** (`PacketProcessor.updateGlobalPressure`): independent of the per-direction caps. Each `mainLoop` iteration after `drainIncoming` recomputes a `globalRwndScale ∈ [0, 1]` from the depth of the inbound `incoming` queue (`MAX_INCOMING_PKTS = 512`). Linear ramp between `GLOBAL_RWND_LO = 0.50` and `GLOBAL_RWND_HI = 0.90`. Each `TcpSession`'s advertised receive window is multiplied by the scale on every header build (`effectiveRcvAvail()`), so peers' kernels see a smaller window and reduce sending. When the scale rises by ≥0.1 (or unblocks from 0), `onGlobalRwndGrew` fans an ACK to every active session so any peer stalled at scale=0 wakes up promptly. UDP isn't covered — UDP has no flow control to push back on; oversize UDP bursts still drop at the `incoming` queue.

### Admission control (`AdmissionStore`)

Persisted allow-list of `callerId` longs in `SharedPreferences("config", "allowed_callers")` (comma-separated).

When a `callReceived` arrives:
- Caller in allow-list → `acceptCall` immediately, `PacketProcessor` created.
- Otherwise → caller added to `pendingMap`; pending notification fires with caller's display name. The user clicks Allow (with optional "remember") or Reject in `MainActivity` / `ServerClientsActivity`. Reject sends `discardCall`; the peer's VPN sees the rejection and tears down cleanly.

Duplicate pending requests from the same caller are deduplicated — a new `callReceived` replaces the older pending entry rather than queueing another notification.

### Manage Clients UI (`ServerClientsActivity`)

Reachable from `MainActivity` while server mode is active. Polls `BaleServerService.getClientInfos()` every 500 ms.

If `BaleServerService.isRunning` is false (server stopped externally — e.g., user toggled to client mode while the activity was open), the activity calls `finish()` and bails out.

Each row shows:
- Caller display name + `callerId` (name resolved async)
- Live throughput rate `↑ N kbps ↓ N kbps` (formatted via `fmtRate`: kbps under 1 Mbps, Mbps above; computed from successive 500-ms snapshots in `sampleCache`)
- Cumulative byte counters (still in KB)
- Bandwidth caps if set (kbps)
- Background turns **green** for connected, **red** while `isThrottled` is true

Per-row actions:
- **Disconnect** — `BaleServerService.disconnectClient`.
- **Limit** — dialog to set per-direction kbps cap (1–500). Stored by `callerId`, re-applied on reconnect. Pre-fills with the current value or the default cap if none.
- **Remove** — only on rows in the allow-list; removes and disconnects.

Action-bar overflow:
- **Debug logs ON/OFF** — toggles `BaleServerService.debug`, propagated to every live `PacketProcessor` and persisted.

### Proto extraction caveats
- `bytes` fields in generated `.proto` files are sometimes actually nested submessages serialized as raw bytes (the extractor couldn't resolve the type name from minified code).
- Many response messages show `// fields not extracted (shared/external type)` — these use shared codec objects that the extractor couldn't trace back to the service method.
- The extractor keys on variable names ≤ 4 characters (minifier artifact) to identify codec objects.
