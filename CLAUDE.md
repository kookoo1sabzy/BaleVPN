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
python3 reverse_engineering/download.py
```
Downloads the Bale web app JS bundles, HTML, and static files into `reverse_engineering/static/`. Reads the service worker to discover all async chunk URLs. Skips files that already exist locally. Requires a valid `access_token` cookie hardcoded in the script.

### 2. Extract protobuf definitions
```bash
python3 reverse_engineering/extract_proto.py
```
Parses `reverse_engineering/static/js/async/5100.bbddcd29.js` (the main protobuf chunk), splits it into webpack modules, finds codec objects with `encode()`/`decode()` methods, and maps them to service/method names via `serviceName`/`methodName` annotations. Writes `.proto` files to `bale-vpn-node/proto/` and regenerates `bale-vpn-node/src/index.js`.

### 3. Build and use the proto package
```bash
cd bale-proto
npm install
npm run build        # compiles .proto → src/messages.js + src/messages.d.ts via pbjs/pbts
npm run build-tun    # compile C++ TUN addon (Linux + macOS, requires node-gyp)
npm run ui           # start WebSocket client + web UI at http://localhost:3001
npm run ui -- 8080   # listen on a custom port
npm run ui -- server # start in server mode (TUN + NAT relay)
```

The HTTP port can also be passed directly: `node src/bale-proxy.js 8080`. Defaults to `3001`.

**Server mode one-time setup**:
- **Linux** — `sudo setcap cap_net_admin+eip $(which node)` (so the addon can manage TUN without root) and `sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -j MASQUERADE` (NAT rule). Then `node src/bale-proxy.js server`.
- **macOS** — runs as root: `sudo node src/bale-proxy.js server`. NAT (pf anchor `balevpn`) and IP forwarding are loaded automatically; the WAN interface is auto-detected via `route -n get default`.

The server opens a TUN device on startup (`bale0` on Linux, `utunN` on macOS), assigns `10.8.0.1/24`, enables IP forwarding, installs the platform-specific NAT rule, and auto-answers incoming LiveKit calls. Android clients locally configure `10.8.0.2/24`; the server's userspace SNAT layer maps each client to a unique address from `10.8.0.2`–`10.8.0.254`.

## Architecture

### `bale-proto/` — Node.js package
- **`src/bale-proxy.js`** — single entry point: connects to `wss://next-ws.bale.ai/ws/`, subscribes to real-time updates, serves a web UI at `http://localhost:3001`, and manages the tunnel. Three classes: `TunnelManager`, `BaleWsClient`, plus HTTP routes. All `console.log/warn/error` calls are automatically prefixed with `[YYYY-MM-DD HH:MM:SS.mmm]` via a patch at startup.
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

### Name resolution (`loadUserName` / `lookupContactName`)

Server-mode caller-name lookup uses `Users/LoadUsers` directly with `accessHash=0` — same RPC pattern as `loadSelf()`. The contact list is **not** consulted: a calling peer might not be in the user's contacts (they could be calling for the first time after admission), and the contact-list flow has its own latency / caching gotchas. Per-uid cache holds both hits and misses so a stranger we already queried doesn't re-trigger the RPC.

UserEntity field 3 (`name`) is preferred; falls back to field 9 (`nick`, wrapped string). Returns null only when LoadUsers returns no entity or the RPC fails.

The result is used to label notifications/logs (e.g. `Joe (12345) connected`, `Joe wants to connect`). The Android server caches the resolved name on the `Client` object as `resolvedName` so disconnect notifications can show the same name even if the WS is being torn down at that moment.

**User vs FullUser:** `LoadUsers` returns the lightweight `User` entity — id, name, nick, accessHash. The phone number lives on `FullUser` (separate `LoadFullUsers` RPC), inside a repeated `contactInfo` field at User-encoder field 17 / FullUser-encoder field 2. Each `ContactInfo` entry has `{f1 type int32 enum, f2 stringValue wrapped string, f3 longValue Int64Value}`; we extract the entry whose `type == CONTACTTYPE_PHONE` (enum value 0, the proto3 default), preferring `stringValue` (Bale pre-formats as `+989…`) over the raw `longValue`. The contacts-list batch loader fans out `LoadUsers` and `LoadFullUsers` in parallel via `coroutineScope { async { … } async { … } }` and merges phones into the User entities by uid before returning.

### Contacts lazy load + cache (`ContactsActivity` / `UserCache`)

The contacts screen (both `MODE_PICK` and `MODE_MANAGE`) renders large contact lists incrementally:

1. **`getContactPeers()`** — single cheap `GetContacts` RPC, returns peer refs (uid + accessHash) and any inline UserEntities Bale chose to send.
2. **Cache lookup** — for each peer ref, `UserCache[uid]` is consulted. Cache hit + accessHash match → use cached entity (`loaded = true`). Cache miss or accessHash mismatch → placeholder entity (`loaded = false`).
3. **First-batch fetch** — placeholders queue into `pendingPeers`; the first 30 are fanned out via `loadUsersBatch` (parallel `LoadUsers` + `LoadFullUsers` → merge phones).
4. **Scroll-triggered batches** — a `RecyclerView.OnScrollListener` fires `loadMoreBatch()` when the user is within `PREFETCH_AHEAD = 10` rows of the next placeholder. Footer "Loading more…" indicator visible only while a batch is in flight.
5. **Unresolved fillers** — uids that LoadUsers didn't return (deleted accounts, blocked, server-side miss) are turned into "loaded but empty" entries so they don't spin "Loading…" indefinitely; cached as well so they don't re-fetch.

`UserCache` (singleton, `androidApp/src/main/kotlin/.../UserCache.kt`) is an in-memory `Map<Int, UserEntity>` mirroring `${context.cacheDir}/user_cache.json`. Reads are lazy (loaded on first `init`), writes are debounced 300 ms after the last `putAll`. Atomic-ish disk writes via temp-file + rename. Persists across app launches; cleared by `Settings → Apps → Clear cache` or `adb shell run-as <pkg> rm cache/user_cache.json`.

**accessHash invalidation:** Bale issues a fresh accessHash whenever a user's profile / relationship / privacy changes server-side. Comparing the cached entry's accessHash against the fresh peer-ref accessHash from `GetContacts` gives single-row invalidation: matching → cache hit → instant render; mismatching → placeholder + lazy-fetch on the next batch. So second-launch is "instant for everyone unchanged, lazy for everyone changed", with no global cache wipe ever needed.

**Adapter row layout** (`item_contact.xml` — name / @nick / phone / ID, each on its own line):
```
John Doe                                     ← bold, full opacity (tvName)
@johndoe                                     ← gray (tvNick), hidden if no nick
+989121234567                                ← gray (tvPhone), hidden if no phone
ID: 12345                                    ← gray (tvId), always shown
```
Phone is normalised to E.164 by `formatPhone`: prepends `+` if Bale returned bare digits.

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

`SubscribeResponse` envelope around the union: f1=update (xC), f2=routeId, f3=sequence, f4=timestamp, f5=weakEvent, f6=mtupdate, f7=updates. Bale fans out `weakEvent` heartbeats every ~4 s with no `update` payload — they double as keep-alives and "user X did Y" broadcasts (`{header, body, userIds, groupIds}`). The web-app dispatcher splits the stream: events with `update` go to a sequenced channel (gap-detected, gap-filled via `GetDifference`); events with only `weakEvent` go to an unsequenced broadcast channel.

### Subscribe stream lifecycle (30 s rotation)

Bale's server enforces a **hard 30 s deadline** on `SubscribeToUpdates` and ends each stream with gRPC `code=4 ("context deadline exceeded")` on schedule. The client is expected to immediately re-subscribe — the web app does this via `retry({initialInterval: 1s, maxInterval: 5s, maxRetries: 10000, resetOnSuccess: true})` wrapped around an RxJS observable. Both our Node and Android clients track the active `subscribeIdx` (the RPC index of the in-flight subscribe) and re-subscribe when an RPC frame for that index arrives with either an error or no payload.

Behaviour:
- Routine `code=4` rotation → silent re-subscribe.
- Any other error code, or empty completion → loud log line (`subscribe stream ended (idx=N code=X message="…") — re-subscribing`) so genuine failures (auth, malformed request, etc.) surface.
- Without re-subscribe, the WS itself stays open (heartbeats keep flowing on a different mechanism) but `update` events stop arriving — `callReceived` etc. silently disappear after 30 s.

We do **not** call `GetDifference` after re-subscribing (the web app does, to backfill events missed during the rotation window). For real-time call detection that's irrelevant — the new subscribe picks up future calls. Worth wiring if you ever need to reconcile missed messages or read receipts.

### WS log discipline

Steady-state WS traffic (Bale heartbeats, push updates, the 30 s subscribe rotation, our pings/pongs) is intentionally silent in both clients. The principle is "logs surface deviations, not normality":

| Silent | Loud |
|---|---|
| `weakEvent` / `seq` / `timestamp` / pong | `Terminate session` push |
| `Push update` frame wrapper | `Handshake response` |
| Subscribe rotation (`code=4`) | Subscribe end with any other code |
| `messageRead` / `messageReadByMe` / `emptyUpdate` | Genuinely unknown xC tag |
| `newMessage` for tunnel SOCKS5 frames | Genuine inbound chat message |
| RPC dispatch when matched | RPC error reply (decoded code + message) |
| Idle ≤ 15 s | Idle > 15 s (`no inbound, sending ping`) |
| WS open and active | Idle > 30 s (`closing zombie connection`) + reconnect |
| Per-event timestamps | callStarted/Accepted/Ended/Received |

`decodeRpcError` (BaleWsClient and `wire-codecs.js`) parses Bale's RPC error envelope — `{f1 code int32, f2 message string}` — so failed RPCs log a useful `code=N message="…"` instead of opaque bytes.

Liveness is detected purely by inbound activity: any frame (RPC reply, push, weakEvent, pong) updates `lastInboundTs`. The 10 s ping coroutine warns at >15 s idle, force-closes at >30 s. Reconnect runs forever with a 5 s delay between attempts; only a 4401 close code or a version mismatch breaks the loop (token expired / app needs update).

### Authentication
- Auth uses the `access_token` JWT cookie scoped to `.bale.ai`.
- No token-exchange step: send the cookie directly in the WebSocket `Cookie` header.
- To refresh: Chrome DevTools → Application → Cookies → `https://web.bale.ai` → copy `access_token`.
- The token is hardcoded in `reverse_engineering/download.py` and `bale-vpn-node/src/bale-proxy.js` (`ACCESS_TOKEN` constant) — update both when it expires. WS close code `4401` = expired token.

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
3. If `call.isLivekit`, creates `LiveKitTransport`, attaches per-client stat fields (`_callKey`, `_connectedAt`, `_callerName`, `_rxPkts/_rxBytes/_txPkts/_txBytes`), wires `onDisconnected` → `lkRooms.delete(callKey)`, wires `onPeerJoined` → log "client connected", connects
4. Each LiveKit data message is decoded with `lkDecode`: recognized SOCKS5 frames go to `_srvMsg()`; unrecognized binary (raw IP packets) goes to `_handleTunPacket()`
5. **Peer-join watchdog**: `PEER_JOIN_TIMEOUT_MS` (5 s) after `lk.connect()`, if `lk.hasPeer` is still false, the call is torn down and `discardCall` is sent. The LK session token would otherwise keep us connected for hours with no peer. Identity-checked against `lkRooms[callKey]` so a fresh client that replaced this one isn't reaped.

**TUN packet forwarding (server) — multi-client via userspace SNAT**:

Every Android client locally configures its TUN as `10.8.0.2/24`. To let multiple clients share `bale0` without conntrack collisions, the server applies a userspace SNAT: on accept, each `lk` gets a distinct lease from `10.8.0.2`–`10.8.0.254` (253 slots, allocated in `onCallReceived`, freed in `lk.onDisconnected`). Inbound packets have `src` rewritten to the lease before they're written to `bale0`; return packets have `dst` rewritten back to `10.8.0.2` before the `'I'` frame is shipped. `adjustCsum`/`rewriteIp` (module scope) handle the IP + L4 (TCP/UDP) checksum fixup via RFC 1624 incremental update, with a no-op short-circuit when the address already matches.

- `_handleTunPacket(data, lk)` — drops packets for `10.8.0.0/24` (intra-subnet isolation), looks up the lease in `_snatByLk`, rewrites src, writes to `bale0`.
- `_tunReadLoop()` — looks up `_lkBySnat[dst]` for each packet read from `bale0`, rewrites dst back to `10.8.0.2`, sends via `sendLossy`. Packets with no lease are dropped.
- `_setupTun()` — opens `bale0` (deleting any leftover), configures `10.8.0.1/24` via in-process ioctls, enables `ip_forward`, adds iptables MASQUERADE rule. Idempotent. Needs root or `setcap cap_net_admin`.

The Android server (`BaleServerService`) doesn't need SNAT — its per-client `PacketProcessor` does all NAT in userspace, so multiple clients claiming `10.8.0.2` never collide.

**Server LiveKit teardown**: `TunnelManager.hangUpAll()` disconnects all `lkRooms`, clears the map, sweeps any orphan SNAT leases, and stops the stats timer. Called automatically when the WS closes. `_stopAll()` delegates to `hangUpAll()` internally.

**Client WebRTC flow** (`TunnelManager.startWebRtcTunnel` — both Node and Android, single-attempt no-retry):
1. Calls `BaleWsClient.startCall(serverPeerId, serverPeerType)` → `bale.meet.v1.Meet/StartCall`
2. Subscribes to `callEnded` for the current callId — server reject → permanent stop with `rejected = true`
3. Subscribes to `callAccepted` for the current callId — waits up to `CALL_ACCEPTED_TIMEOUT_MS` (90 s) for the server's push. The 90 s budget covers manual admission (server's user has to tap "allow" in a notification). Timeout → permanent stop with `rejected = false`
4. Connects `LiveKitTransport` with returned credentials; wires `transport.onData` → `onPacket` callback (raw IP packets)
5. Waits up to `PEER_TIMEOUT_MS` (5 s) for the server peer to appear in the LK room. Timeout → permanent stop
6. `sendPacket(data)` → `transport.sendUrgent(data)` → LiveKit LOSSY publish

**No retry policy**: a single attempt, no auto-reconnect. On any failure the tunnel fires `onPermanentDisconnect` and the user retries manually via the dropped-VPN notification. LK transport disconnect mid-session also fires permanent disconnect — the LiveKit data channel and the Bale WS are independent, so losing the data channel means the tunnel is dead.

**`@livekit/rtc-node`** is required unconditionally at startup (`require('@livekit/rtc-node')` at top of `livekit.js`). Install: `cd bale-vpn-node && npm install @livekit/rtc-node`.

### Single-instance lock (Node)

`bale-proxy.js` claims a PID lock file at `${os.tmpdir()}/.bale-vpn.lock` **before any other startup** — running TUN setup or HTTP listen first would step on a live instance. The lock lives in the OS temp dir (not next to the binary or config) because it's process state — temp files are cleared on reboot, exactly what we want for stale-lock recovery. One shared lock per host (no username suffix) because the TUN device `bale0` is system-wide; only one instance can own it regardless of which user runs it. On startup:
1. If lock file exists → read PID → probe with `process.kill(pid, 0)` (`ESRCH` ⇒ dead, `EPERM` ⇒ alive on another user, no-throw ⇒ alive).
2. Live PID → print error and `exit(1)` with the lock path so the user can manually clear it if needed.
3. Dead PID → log "stale lock, taking over" and overwrite.
4. Write our own PID into the lock file.

`process.on('exit')` cleans up the file, but only if it still contains our PID (a successor that took over our stale lock would have written its own).

### Shutdown (Node)

`SIGINT` / `SIGTERM` shutdown chain:
1. Set `_shuttingDown` (second Ctrl-C → instant force-exit `code 1`).
2. Arm a 3 s `setTimeout(...).unref()` deadline → force-exit `code 1` if the cleanup hangs (e.g., `@livekit/rtc-node` native worker threads not draining in time).
3. `client.tunnel._stopAll()` — disconnect LK rooms first so their threads stop pinning the event loop.
4. `client.disconnect()` — close the WS so no updates land mid-cleanup.
5. `client.tunnel._teardownTun()` — flush pf anchor (macOS) / delete `bale0` (Linux) / drop route, then close the fd.
6. `process.exit(0)`.

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
    AdmissionStore.kt            # allow-list + per-caller bandwidth caps (SharedPreferences)
    BlacklistStore.kt            # block-list, mutually exclusive with AdmissionStore
    MainActivity.kt              # VPN start/stop screen; shows live traffic stats when connected
    PhoneAuthActivity.kt         # phone number input → startPhoneAuth
    OtpActivity.kt               # OTP code + optional name → validateCode/signUp → token
    ContactsActivity.kt          # contact list — pick mode (client) or manage mode (server) with Add/Remove
    ServerClientsActivity.kt     # server-mode UI: per-client live stats, bandwidth caps, admission
    ClientStatsActivity.kt       # per-client TCP/UDP/transport telemetry (RTT, retx, cwnd, …)
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

| Method | RPC(s) | Notes |
|--------|-----|-------|
| `getContactPeers()` | `GetContacts` | cheap one-RPC; returns `(peers: List<UserPeerRef>, inlineUsers: List<UserEntity>)`. Used by the lazy loader. |
| `loadUsersBatch(peers)` | `LoadUsers` + `LoadFullUsers` (parallel) | identity from `LoadUsers`, phones from `LoadFullUsers.contactInfo`; merged by uid. Used per scroll-triggered batch. |
| `getContacts()` | full delegation: `getContactPeers()` + `loadUsersBatch(peers)` if any | eager load — all entities in one shot. Kept for non-paginated callers. |
| `searchByName(q)` | `Users/SearchContacts` | name substring search within existing contacts |
| `searchByPhone(q)` | `Users/ImportContacts` | phone-number lookup; **also adds the user as a contact** |
| `removeContact(user)` | `Users/RemoveContact` | wire payload `{uid int32 = 1, accessHash int64 = 2}` — both required |

`UserEntity(id, name, nick, phone, accessHash, loaded)` — `displayName` = name ?: nick ?: id; `peerType` = 1 (private). `accessHash` is required by `AddContact` / `RemoveContact` and merged from peer refs (`LoadUsers` responses don't carry it). `loaded` is the lazy-load placeholder flag — false rows render "Loading…" with `alpha=0.5` and ignore taps.

`UserPeerRef(uid, accessHash)` — public peer-ref struct in `Models.kt`, the input to `LoadUsers` / `LoadFullUsers` / `RemoveContact`.

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
| `admissionList` | `AdmissionStore` | comma-separated allow-list with optional per-caller caps. Format: `<id>[:<upBps>:<downBps>]`, e.g. `12345,67890:62500:62500`. Bare IDs mean "use default cap." |
| `blacklist` | `BlacklistStore` | comma-separated `callerId` block-list. Calls from these IDs are silently rejected (`discardCall`) before reaching the pending flow. Only the user's explicit **Reject** from a pending notification adds an entry — never Disconnect/Remove. Mutually exclusive with `admissionList`. |
| `maxClients` | `BaleServerService.{getMaxClients,setMaxClients}` | int in `[1, 253]`. Cap on simultaneously-connected clients. Default 5. New incoming calls above the cap are silently `discardCall`ed (no blacklist). Hard ceiling matches the Node SNAT pool (`10.8.0.2`–`10.8.0.254` = 253 slots). Node has the same setting in `.bale-vpn_config.json` key `maxClients`. |

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

**View app logs** (BaseActivity overflow item): runs `logcat -d -t 500 BaleProxy:V BaleVPN:V ContactsActivity:V UserCache:V *:S` so the dialog only shows our own log tags. The trailing `*:S` silences every other tag — without it, framework UI noise (`TextView`, `ImeTracker`, `InsetsController`, `WindowOnBackDispatcher`, `ActivityThread`, etc.) would dominate the output. When adding a new log-tag in code, append it to the `arrayOf` in `BaseActivity.readLogs()` so it stays visible in the dialog.

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
- Constructor takes `getBale: suspend () -> BaleWsClient?` (resolved fresh on every connect — lets `BaleVpnService.resolveWs` lazily bring the WS back up when needed) and `onTunnelReady: () -> Unit` (fired once after a successful connect — wired to `BaleConnection.reconcile()` so the WS drops once signaling is done).
- `connect()` → `getBale()` → `bale.startCall` → wait for `callAccepted` push (`CALL_ACCEPTED_TIMEOUT_MS` = 90 s) → join LiveKit room → wait for `transport.hasPeer` (`PEER_TIMEOUT_MS` = 5 s) → `onTunnelReady()` → return true. Re-entrant guard via `connectMutex.tryLock()`.
- `sendPacket(data)` → `transport.sendUrgent(data)`.
- **Single attempt, no retry**. Failure (callAccepted timeout, peer didn't join, server rejected, LK transport drop) → `onPermanentDisconnect(rejected: Boolean)`. `rejected = true` only when `callEnded` arrives for the current callId; everything else is `rejected = false` ("server unreachable").

**`AndroidLiveKitTransport`**: `Channel<ByteArray>(256)` send queue with `LOSSY` reliability. `trySend` drops when full (appropriate for IP forwarding). Both `send` and `sendUrgent` are non-blocking with drop semantics.

- **`everHadRemote` guard**: LiveKit fires a phantom `ParticipantDisconnected` event during the initial connect window before any peer has actually joined. The transport only treats an empty-room `ParticipantDisconnected` as "peer left" if at least one `ParticipantConnected` fired earlier — otherwise it logs `stale ParticipantDisconnected before any peer joined — ignoring`. Without this the server tears its own room down ~3 s after connect and the client can never join.
- **`publishData` failure handling**: errors from `localParticipant.publishData` (transient `Publisher isn't setup yet!`, `Job was cancelled` post-disconnect, etc.) just drop the offending packet and keep the send loop alive. LOSSY semantics already permit packet loss; real teardown is driven by `RoomEvent.Disconnected`, never by send errors.

### Android server mode (`BaleServerService`)

The Android app can also act as the VPN *server* — accepting calls from other Bale peers and routing their traffic through this device's network. Auto-started when the user selects server mode (no separate "Start Server" button); stopped when they toggle back to client mode. Runs as a foreground service.

Unlike the Node.js server mode (which requires Linux + `setcap cap_net_admin` + iptables), the Android server runs an **in-process userspace TCP/IP stack** — `PacketProcessor` — so no root, no kernel TUN, and no iptables rules. Each accepted call gets its own `LiveKitTransport` + `PacketProcessor` pair. Inbound IP packets ride in over LiveKit; outbound packets are synthesised and shipped back the same way.

**Service lifecycle**:
- `scope` is a `var` and is rebuilt in `onStartCommand` whenever it's not active (a previous `stopServer` cancelled it). Without this, a re-entrant `onStartCommand` would `scope.launch` on a dead scope and silently no-op every coroutine.
- `loopsStarted` flag prevents re-launching `pendingSweepLoop` / `statsLoop` on top of existing ones when `onStartCommand` fires multiple times for the same instance. (No longer an idle-sweep loop — clients are removed strictly via `transport.onDisconnected` / Bale `callEnded` / explicit UI disconnect. Silent tunnels are fine; only an actually-empty room teardown ends a session.)
- `stopServer()` only nulls `BaleConnection.onCallReceived` / `onCallEnded` if `instance === this`. Without that guard, a concurrent `onStartCommand` for a successor service would have its lambdas overwritten by the outgoing service. The `MainActivity` calls `startService` unconditionally (doesn't trust the volatile `isRunning` flag, which can stay `true` after an OS-killed service) — Android safely re-fires `onStartCommand` for live services and creates fresh instances for killed ones.
- `BaleConnection.onCallReceived/onCallEnded` lambdas resolve the live `instance` from the companion at invocation time, so even a stale lambda from a destroyed service routes correctly to whichever instance is current.

**Notifications** — split across two channels:
- **`bale_server`** (LOW importance, silent): the ongoing foreground notification + transient connect/disconnect events. Foreground body shows `N connected • M pending` when there's something to report; in idle state the body is empty (no "Waiting for clients…" noise). WS-state callouts surface explicitly when needed: `WebSocket disconnected — no incoming calls` or `Reconnecting WebSocket…`. Connect/disconnect events use a per-`callerId`-derived id (`CLIENT_EVENT_NOTIF_BASE + callerId % 10_000`) so a "disconnected" alert replaces the older "connected" from the same caller.
- **`bale_server_alerts`** (HIGH importance, audible heads-up): pending admission requests only. Caller display name is resolved synchronously before the notification posts (via `BaleWsClient.loadUserName` — see "Name resolution"); tap routes to `MainActivity` for the allow/reject decision.

**Client-side VPN-dropped notification** (`BaleVpnService`) — separate `vpn_alerts` channel, HIGH importance. Posted on `onPermanentDisconnect`. Two copy variants: `Bale VPN — disconnected / Could not reach the server. Tap to reconnect.` (timeout / unreachable) and `Bale VPN — rejected / The server rejected the connection.` (callEnded for current callId). Tap routes back to `MainActivity` so the user can press Connect again.

**Per-caller state in `BaleServerService`**:
- `clients` — map from `callId` to active `Client(callId, callerId, transport, processor)`.
- `pendingMap` — calls waiting for user approval (deduplicated by `callerId`).
- `callerLimits` — in-memory per-`callerId` bandwidth overrides. Hydrated on service start from `AdmissionStore.getAllLimits()` (the merged allow-list-with-limits store). Writes go through `AdmissionStore.setLimit` for admitted callers; non-admitted callers' limits are session-only.

**WS event reactions** (`checkAndHandleCall`):
- **callerId == 0 → defer**. Bale fans out two updates per incoming call: `callReceived` (52810, sometimes with empty participants list → callerId=0) and `callStarted` (52807, carries adminUid). Order isn't guaranteed; the callerId=0 variant is dropped silently and the followup carries the real id. Prevents a transient "unknown caller" pending entry.
- **Allowed caller**: clear any stray pending entry for this callId, then `handleCall` (`acceptCall` + create transport/processor + dedup against any existing client from the same callerId via `cleanupClientLocal` — local cleanup, no `discardCall` RPC; Bale's discardCall scopes at caller↔callee session level and would end the *new* call too). New call from the same caller always wins — no throttle (the previous `ESTABLISH_GRACE_MS` 8 s guard was removed when the client switched to single-attempt + 5 s peer wait, eliminating the reconnect-storm risk).
- **Not-allowed caller**: dedup pending by callerId, queue a `PendingCall`, post the allow/reject notification.
- `onCallEnded` (`onCallEndedRemote`): if the `callId` matches an active `Client` → `doDisconnect`; if it matches a pending entry → drop it and clear the notification. Without this hook, peers that hung up would linger until a LiveKit-side event finally fired.
- `pendingSweepLoop` (every `PENDING_CHECK_MS` = 15 s): auto-rejects pending calls older than `PENDING_TIMEOUT_MS` (60 s).

**`callerId` source**: parsed from `CallEntity` field 8 (`adminUid` — the call initiator). Field 9 (`peer`) is the *other party in the call ref*, which from the callee's perspective decodes to **self** — using it would make the server display its own user-id and name for every incoming call.

**Companion API (called from UI)**:
- `disconnectClient(callId)` — sends `discardCall` to peer (so the peer's VPN sees the disconnect cleanly), tears down the local processor.
- `disconnectAllClients()` — **suspending**. For every active client and pending request, in parallel: send `discardCall` and close the LiveKit room. Caller awaits completion before tearing down the WS, so peers receive `WS callEnded` and stop immediately instead of waiting out the 90 s `callAccepted` timeout. Wired into `MainActivity.btnWs` Disconnect path — manual press disconnects all clients; **a natural WS drop does NOT** — the runLoop's 5 s reconnect handles transient drops and per-client LiveKit data channels are independent of the Bale WS.
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
- **Android**: `BaleServerService.DEFAULT_LIMIT_BPS = 37_500` bytes/sec ≈ **300 kbps** per client. `ServerClientsActivity.MAX_LIMIT_KBPS = 500` kbps UI ceiling. Stored as bytes/sec because the token bucket charges packet sizes in bytes; surfaced to the user in kbps.
- **Node**: `DEFAULT_LIMIT_KBPS = 500`, `MAX_LIMIT_KBPS = 1000` (`constants.js`). Higher defaults reflect the typical Linux-server-with-bandwidth use case. Every client is rate-limited; there is no "unlimited" option.
- Conversion in the UI: `kbpsToBytesPerSec(k) = k * 1_000 / 8`, `bytesPerSecToKbps(b) = b * 8 / 1_000`.

Per-caller overrides live in `BaleServerService.callerLimits` (in-memory), backed by `AdmissionStore` itself — the allow-list and the per-caller caps live in one store, one prefs key. Survives service restarts, mode toggles, and device reboots; same caller reconnects pick up their saved cap automatically. Limits set on a non-admitted caller (one-time accept without "remember") are session-only and never flush to disk. Stored values are clamped to `[0, BaleServerService.MAX_LIMIT_BPS]` on load so a hand-edited prefs file can't smuggle in an absurd override; identical clamp on the Node side via `MAX_LIMIT_KBPS` from `constants.js`.

**Global TCP rwnd backpressure** (`PacketProcessor.updateGlobalPressure`): independent of the per-direction caps. Each `mainLoop` iteration after `drainIncoming` recomputes a `globalRwndScale ∈ [0, 1]` from the depth of the inbound `incoming` queue (`MAX_INCOMING_PKTS = 512`). Linear ramp between `GLOBAL_RWND_LO = 0.50` and `GLOBAL_RWND_HI = 0.90`. Each `TcpSession`'s advertised receive window is multiplied by the scale on every header build (`effectiveRcvAvail()`), so peers' kernels see a smaller window and reduce sending. When the scale rises by ≥0.1 (or unblocks from 0), `onGlobalRwndGrew` fans an ACK to every active session so any peer stalled at scale=0 wakes up promptly. UDP isn't covered — UDP has no flow control to push back on; oversize UDP bursts still drop at the `incoming` queue.

### Admission control (`AdmissionStore` + `BlacklistStore`)

Two persisted per-caller stores, **mutually exclusive** — a callerId is in at most one of them at any time:
- `AdmissionStore` — allow-list with per-caller bandwidth caps. Android: SharedPreferences `"config"` key `admissionList` (text `<id>[:<upBps>:<downBps>]`, comma-joined). Node: `.bale-vpn_config.json` key `admission` (JSON array of `{callerId, upBps, downBps}`).
- `BlacklistStore` — block-list. Android: prefs key `blacklist` (comma-joined bare IDs). Node: config key `blacklist` (JSON array of numbers).

`AdmissionStore.add(id)` un-blocks; `BlacklistStore.add(id)` un-allows. The mutual exclusion lives in the stores themselves (Node: lazy-required to avoid a circular module load), so call sites don't need to coordinate.

A third per-server setting lives alongside:
- `maxClients` — cap on simultaneously-connected clients. Android: SharedPreferences int, helpers on `BaleServerService`. Node: `.bale-vpn_config.json` key `maxClients`, helper `getMaxClients()` in `tunnel.js`. Default 5, hard ceiling 253 (matches Node's SNAT pool size).

`checkAndHandleCall` (Android) / `onCallReceived` (Node) gate order on incoming `callReceived`:
1. **Blocked** → `discardCall` immediately. No pending entry, no UI prompt. Silent.
2. **At capacity** (`active >= maxClients`) → `discardCall`. No blacklist — caller can re-call when a slot frees.
3. **Allowed** → `acceptCall`, `PacketProcessor` created, per-caller cap re-applied from `AdmissionStore.getAllLimits()` (or default cap on Node).
4. **Neither allowed nor blocked** → pending. The user gets a notification (Android) or a pending row in the web UI (Node) and chooses **Allow** (optionally "remember" → adds to admission), or **Reject**.

**Only the user's explicit Reject from the pending UI adds to the blacklist**, via `rejectPending(callId, addToBlacklist=true)`. Sweep-timeout (`PENDING_TIMEOUT_MS` = 60 s) and bulk-WS-teardown also call `rejectPending`/`doRejectPending` but with `addToBlacklist=false` — those aren't user choices.

The **Disconnect** and **Remove** buttons in the Manage Clients UI do NOT blacklist:
- **Disconnect** — just kicks the active session via `disconnectClient(callId)`. Caller is free to call back; if they're admitted they get auto-accepted again.
- **Remove** — drops the caller from `AdmissionStore` AND kicks any active session for that caller. Future calls land in pending (no auto-accept), but the caller isn't blocked.

Duplicate pending requests from the same caller are deduplicated — a new `callReceived` replaces the older pending entry rather than queueing another notification.

Node mirrors the Android stores file-for-file: `admission.js` ↔ `AdmissionStore.kt`, `blacklist.js` ↔ `BlacklistStore.kt`. Both go through **`config-store.js`**, which owns a single `${RUNTIME_DIR}/.bale-vpn_config.json` (mode 0600) with all server-side persistent state (admission, blacklist, maxClients, token) under one JSON object. On first load, `ConfigStore` migrates **only the token** from the legacy `.bale-token` file — losing the token forces a re-OTP, but admission/blacklist entries are easy to re-add via the UI so their pre-split files (`.allowed-callers.json`, `.blacklisted-callers.json`) are intentionally not migrated.

### Manage Clients UI (`ServerClientsActivity`)

Reachable from `MainActivity` while server mode is active. Polls `BaleServerService.getClientInfos()` every 500 ms.

If `BaleServerService.isRunning` is false (server stopped externally — e.g., user toggled to client mode while the activity was open), the activity calls `finish()` and bails out.

Row grouping (top → bottom, divider line between groups):
1. **Connected** clients (any admission state) — green background, throughput stats line.
2. **Allowed offline** — neutral, just the membership tag.
3. **Blocked** — greyed-out at 0.5 alpha.

Each row shows:
- Caller display name + `callerId` (name resolved async via `loadUserName`, cached in `nameCache`)
- Inline membership tag — `· Allowed` or `· Blocked` (matches the agent-symmetric scan pattern; connected non-admitted callers have no tag because they're one-time accepts)
- For connected rows: live throughput `↑ N kbps ↓ N kbps` (kbps under 1 Mbps, Mbps above; from successive 500-ms snapshots in `sampleCache`), cumulative byte counters in KB, bandwidth caps if explicitly set
- Background flips **red** while `isThrottled` is true

Per-row actions (wrapped into a 2-per-row button grid so 4 buttons don't crowd a single line):
- **Disconnect** — kicks the active session via `BaleServerService.disconnectClient`. Does NOT blacklist; caller can call back.
- **Remove** — drops from `AdmissionStore` AND kicks any active session. Future calls land in pending. Only shown on rows in the allow-list.
- **Limit** — dialog to set per-direction kbps cap (1–1000 = `MAX_LIMIT_BPS / 1000 * 8`). Stored by `callerId` in `AdmissionStore.setLimit` (persistent only if admitted; session-only otherwise). Pre-fills with current value or `DEFAULT_LIMIT_BPS` (500 kbps).
- **Stats** — opens `ClientStatsActivity` for that client (see below).
- **Unblock** — only on blocked rows; removes from `BlacklistStore`. Replaces all other buttons.

Each action shows a `Toast` confirmation so the user sees the click landed before the row mutates (since `syncList` rebuilds row order on every 500-ms poll).

Action-bar overflow:
- **Max clients…** — dialog to set the simultaneous-clients cap (1–253). Persists to SharedPreferences `maxClients` via `BaleServerService.setMaxClients`.
- **Debug logs ON/OFF** — toggles `BaleServerService.debug`, propagated to every live `PacketProcessor` and persisted.

### Per-client stats (`ClientStatsActivity`)

Reached from the **Stats** button on a row in `ServerClientsActivity`. Reads the same `BaleServerService.getClientInfos()` snapshot every 1 s, picks out the row matching the `callId` it was opened with, and finishes itself if the client disconnects or the server stops.

Three data sources merge per snapshot:

1. **`PacketProcessor.lastSnapshot`** (`PacketStats`) — recomputed every `STATS_SNAPSHOT_MS` (1 s) on the NAT dispatcher and stashed in a `@Volatile` field for lock-free cross-thread reads. Iterates `tcp.values` / `udp.values` / `fragBufs` in-place (safe because the read happens on the same NAT dispatcher as all mutations) and emits aggregates: flow counts, state breakdown, SRTT min/median/max, RTTVar median, RTO median, cwnd avg, FlightSize total, and the four event counters (`rtoRetxCount`, `fastRetxCount`, `tlpFireCount`, `sackLossCount` — incremented in `fireRto`, `enterFastRecovery`, `fireTlp` respectively). Plus `incoming.size` / `incomingDrops` / `globalRwndScale`.
2. **`AndroidLiveKitTransport.lastStats`** (`LiveKitStats`) — polled every 1 s via `Room.getPublisherRTCStats { … }`. Filters the `RTCStatsReport` for `type=candidate-pair && nominated=true` and pulls `currentRoundTripTime` (×1000 → ms), `bytesSent` / `bytesReceived` / `packetsSent` / `packetsReceived` (BigInteger), `availableOutgoingBitrate` (bps). All fields are `-1` until the SDK has reported a nominated pair (≈ first second after connect).
3. **Live IP-level counters** (`PacketProcessor.{rxPkts,rxBytes,txPkts,txBytes}`) — already on `ClientInfo`; rendered alongside the WebRTC byte counters as a sanity cross-check.

Layout: vertical-scroll programmatic UI with sections (Transport / TCP / UDP / System), monospace key-value rows. No XML layout — the row count is small and dense.

`PacketStats` semantics:
- `srttMinMs` skips zero-valued sessions (no RTT sample yet) so a freshly-opened flow doesn't drag the min to 0.
- `srttMedianMs` / `rttvarMedianMs` / `rtoMedianMs` use the lower-middle index (no average for even n) — display is rounded to whole ms anyway.
- `cwndAvgSegs` is in MSS-sized units, matching `TcpSession.cwnd`'s internal unit.
- `incomingDrops` is an `AtomicLong` because `PacketProcessor.process()` may be invoked from any thread.

### Proto extraction caveats
- `bytes` fields in generated `.proto` files are sometimes actually nested submessages serialized as raw bytes (the extractor couldn't resolve the type name from minified code).
- Many response messages show `// fields not extracted (shared/external type)` — these use shared codec objects that the extractor couldn't trace back to the service method.
- The extractor keys on variable names ≤ 4 characters (minifier artifact) to identify codec objects.
