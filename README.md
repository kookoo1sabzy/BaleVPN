# Bale VPN

> 🟢 **Simplest start — two Android phones.** A peer-to-peer VPN over Bale messenger: one phone shares its working internet with the other, with no third-party server, no signup, and no command line. Install the APK on both, sign in with your Bale account in the app, flip one to **Server** and the other to **Client**.
>
> **→ [Android setup guide](docs/android-en.md)**

A peer-to-peer VPN that tunnels IP traffic over the voice-call infrastructure of [**Bale**](https://bale.ai/), the national Iranian messaging app. One device runs as the *server* (provides internet); another as the *client* (consumes it). To Bale's servers the link looks like a long voice call between two contacts.

The point: when one person has a working / uncensored connection and the other doesn't, the second person can route their traffic through the first — without any extra server, account, payment, or signup. Just install the app on two phones (or a laptop on the server side), make sure the two accounts have each other in their contact list, and connect.

There is no commercial relationship with Bale.

<div dir="rtl">

## دربارهٔ پروژه

> 🟢 **ساده‌ترین شروع — دو گوشی اندرویدی.** یک VPN نقطه‌به‌نقطه روی پیام‌رسان بله: یک گوشی، اینترنت سالمش را با گوشی دیگر به اشتراک می‌گذارد؛ بدون سرور خارجی، بدون ثبت‌نام، بدون خط فرمان. APK را روی هر دو نصب کنید، با حساب بلهٔ خودتان در اپ وارد شوید، یکی را روی **سرور** و دیگری را روی **کلاینت** بگذارید.
>
> **← [راهنمای نصب اندروید](docs/android-fa.md)**

این پروژه یک VPN نقطه‌به‌نقطه است که ترافیک IP را روی زیرساخت تماس صوتی [**بله**](https://bale.ai/)، پیام‌رسان ملی ایران، عبور می‌دهد. یک دستگاه نقش *سرور* را دارد (اینترنت می‌دهد) و دستگاه دیگر نقش *کلاینت* را (اینترنت می‌گیرد). برای سرورهای بله این ارتباط شبیه یک تماس صوتی طولانی بین دو مخاطب به نظر می‌رسد.

هدف: وقتی یک نفر اینترنت سالم دارد و نفر دیگر نه، نفر دوم بدون هیچ سرور یا اشتراک اضافه‌ای می‌تواند ترافیکش را از طریق نفر اول رد کند. فقط کافی است هر دو طرف، هم در بله ثبت‌نام کرده باشند و هم یکدیگر را در فهرست مخاطبین داشته باشند.

این پروژه هیچ ارتباط تجاری‌ای با بله ندارد.

</div>

---

## ⚠️ Privacy & encryption

The LiveKit data channel is encrypted with **DTLS**, so traffic is opaque to passive observers on the network and to ISP middleboxes. **However, Bale's LiveKit server is the SFU/TURN node and has access to the plaintext of the data flowing through the call.** That means:

- Bale can see **who relays for whom** — every tunnel session is a Bale voice call between two accounts, so Bale's call records reveal the social graph (which account uses which relay, when, for how long).
- Bale can see **which destinations you connect to** (IP and port, plus the hostname embedded in the TLS SNI of any HTTPS request).
- Bale can read the **contents of any traffic that isn't itself end-to-end encrypted**. If you only browse `https://` sites, the payload is opaque to them; if you access plaintext HTTP / DNS / FTP / etc. through the tunnel, they can read it.

**SOCKS5 mode (QUIC) note.** When you use SOCKS5 instead of full VPN, the tunnel carries client↔server traffic inside a QUIC channel that adds its own TLS-1.3 encryption on top of the LK data channel. **This is end-to-end encrypted between the two BaleVPN peers** and would in principle shield the contents from Bale's SFU. **But there is no certificate authority** — both ends generate self-signed certificates at startup and accept whatever the peer presents. Anyone who can inject themselves into the QUIC handshake path (which includes whoever operates the SFU you're routing through — Bale) can perform a transparent MITM by handing each side their own cert. The QUIC layer protects against passive eavesdropping by other tenants on the SFU; it does **not** protect against an active adversary at the relay. Treat the threat model as identical to the VPN-mode case above: rely on app-level TLS (HTTPS, etc.) for actual confidentiality, not on the QUIC layer.

Treat this tunnel like a corporate VPN whose operator you don't fully trust — fine for IP-level reachability (uncensoring), **not adequate as an anonymity or end-to-end privacy layer**. Use TLS at the application level (HTTPS, encrypted DNS, etc.).

### 📌 Recommendation from the author

Register the Bale account used with this tool on a **virtual phone number** rather than your primary one, so the call metadata above can't be tied back to your real identity.

**Bale accepts non-Iranian numbers** — and for those, **Bale's verification code is delivered through Telegram**, not by SMS. (Iranian SMS gateways often can't reliably deliver to international numbers, so Bale uses Telegram as the OTP channel for them.) Step-by-step:

1. Get a virtual phone number that can receive SMS. [Sonetel](https://app.sonetel.com/) works well; other reliable options include [JMP.chat](https://jmp.chat/) (with XMPP), [MySudo](https://mysudo.com/), [Hushed](https://hushed.com/), or [Twilio](https://www.twilio.com/) if you're comfortable with their dashboard. Avoid free "throwaway" SMS sites — Telegram and Bale block most of them.
2. **Register a Telegram account on that number first.** Telegram's OTP arrives via SMS, which works on real virtual numbers. Set a username so Bale's OTP message can find you.
3. **Register Bale on the same number.** Bale detects it's a non-Iranian number, **doesn't send SMS**, and instead sends the verification code as a Telegram message to your account from there.
4. Enter the code in the BaleVPN app → done.

A few notes:

- You only need Telegram during Bale sign-up. After that, the BaleVPN app talks to Bale directly; Telegram isn't in the loop.
- Keep paying for the virtual number — losing it means losing the Bale account (recovery on a number you don't control is hard).
- The Bale account is tied to that number forever. Pick a number you're willing to keep.
- The same recipe also lets non-Iranian Telegram users sign up for Bale in general, not just for this project.

<div dir="rtl">

### ⚠️ امنیت و رمزنگاری

کانال دادهٔ LiveKit با **DTLS** رمزنگاری می‌شود؛ بنابراین ترافیک از دید ناظرهای مسیر و میدلباکس‌های ISP پنهان است. **اما سرور LiveKit بله نقش SFU/TURN را بازی می‌کند و به دادهٔ رمزگشایی‌شدهٔ تماس دسترسی دارد.** یعنی:

- بله می‌تواند ببیند **چه کسی برای چه کسی رله می‌کند** — هر جلسهٔ تونل یک تماس صوتی بله بین دو حساب است، پس سوابق تماس بله گرافِ اجتماعی را افشا می‌کند (چه حسابی از چه رله‌ای، چه زمانی، چقدر استفاده کرده).
- بله می‌تواند ببیند **شما به چه مقصدی وصل می‌شوید** (IP و پورت، به‌علاوهٔ نام میزبانی که در فیلد SNI درخواست‌های HTTPS قرار می‌گیرد).
- بله می‌تواند **محتوای هر ترافیکی را که خودش رمزنگاری انتها به انتها نشده** بخواند. اگر فقط روی `https://` بگردید، محتوا برایشان مبهم است؛ اما اگر از پروتکل‌های متنی (HTTP/DNS/FTP/…) استفاده کنید، قابل خواندن خواهد بود.

**نکته در مورد حالت SOCKS5 (QUIC).** وقتی به‌جای VPN کامل از SOCKS5 استفاده می‌کنید، ترافیک کلاینت↔سرور داخل یک کانال QUIC حمل می‌شود که روی کانال دادهٔ LK یک لایهٔ TLS 1.3 اضافه می‌گذارد. **این لایه میان دو نقطهٔ BaleVPN انتها به انتها رمزنگاری شده است** و در ظاهر باید محتوا را از دید SFU بله پنهان کند. **اما هیچ مرجع گواهی (CA) در کار نیست** — هر دو طرف در زمان راه‌اندازی یک گواهی self-signed تولید می‌کنند و هرچه طرف مقابل ارائه دهد را می‌پذیرند. هر کسی که بتواند خود را در مسیر دست‌دهی QUIC قرار دهد (که شامل گردانندهٔ SFU‌ای که از طریق آن مسیریابی می‌شوید نیز می‌شود — یعنی بله) می‌تواند با ارائهٔ گواهی خودش به هر طرف، یک MITM شفاف انجام دهد. لایهٔ QUIC در برابر شنود غیرفعال سایر کاربران SFU محافظت می‌کند؛ اما **در برابر یک مهاجم فعال در رله محافظت نمی‌کند**. مدل تهدید را همان حالت VPN در نظر بگیرید: برای محرمانگی واقعی به TLS سطح برنامه (HTTPS و…) تکیه کنید، نه به لایهٔ QUIC.

این تونل را مثل VPN شرکتی‌ای ببینید که گرداننده‌اش را کاملاً نمی‌شناسید — برای دسترسی IP (دور زدن مسدودی) خوب است، **اما برای ناشناسی یا حریم خصوصی انتها به انتها کافی نیست**. در سطح برنامه از TLS (HTTPS، DNS رمزنگاری‌شده و…) استفاده کنید.

### 📌 توصیهٔ نویسنده

برای حساب بله‌ای که با این ابزار استفاده می‌کنید، از یک **شمارهٔ تلفن مجازی** استفاده کنید نه شمارهٔ اصلی‌تان، تا متادیتای تماس بالا به هویت واقعی شما گره نخورد.

**بله شماره‌های غیرایرانی را هم می‌پذیرد** و برای این شماره‌ها **کد تأیید بله از طریق تلگرام تحویل داده می‌شود، نه SMS.** (سرویس‌های SMS ایرانی معمولاً نمی‌توانند به شماره‌های بین‌المللی پیامک ارسال کنند، پس بله از تلگرام به‌عنوان کانال OTP استفاده می‌کند.) مرحله‌به‌مرحله:

۱. یک شمارهٔ تلفن مجازی تهیه کنید که SMS دریافت کند. [Sonetel](https://app.sonetel.com/) خوب کار می‌کند؛ گزینه‌های دیگر شامل [JMP.chat](https://jmp.chat/) (با XMPP)، [MySudo](https://mysudo.com/)، [Hushed](https://hushed.com/) یا [Twilio](https://www.twilio.com/) اگر با داشبورد آن راحت هستید. از سایت‌های "SMS رایگان یک‌بارمصرف" بپرهیزید — تلگرام و بله بیشترشان را مسدود می‌کنند.

۲. **اول با همان شماره روی تلگرام ثبت‌نام کنید.** OTP تلگرام با SMS می‌آید و روی شماره‌های مجازی واقعی به‌خوبی کار می‌کند. حتماً یک نام کاربری (username) ست کنید تا پیام OTP بله بتواند شما را پیدا کند.

۳. **با همان شماره روی بله ثبت‌نام کنید.** بله تشخیص می‌دهد شماره غیرایرانی است، **SMS نمی‌فرستد** و در عوض کد تأیید را به‌صورت پیام تلگرامی از حساب رسمی خودش روی تلگرام برای شما ارسال می‌کند.

۴. کد را در اپ BaleVPN وارد کنید → تمام.

نکات:

- تلگرام را فقط برای ثبت‌نام بله لازم دارید. پس از آن، اپ BaleVPN مستقیماً با بله حرف می‌زند و تلگرام در مسیر نیست.
- اشتراک شمارهٔ مجازی را تمدید کنید — از دست دادنش یعنی از دست دادن حساب بله (بازیابی روی شماره‌ای که در اختیار شما نیست، دشوار است).
- حساب بله برای همیشه به آن شماره گره خورده است. شماره‌ای انتخاب کنید که حاضرید نگه دارید.
- همین روش به کاربران تلگرام در خارج از ایران اجازه می‌دهد به‌طور کلی در بله ثبت‌نام کنند، نه فقط برای این پروژه.

</div>

---

## ⚠️ Responsible use

This tool is meant for **normal interactive internet use** — web browsing, messaging, email, light app usage. **Not** for video streaming, large downloads, torrents, or other sustained high-bandwidth workloads.

The tunnel rides on Bale's LiveKit infrastructure. Heavy traffic from a "voice call" stands out on Bale's metrics, strains their servers, and makes the project easier to detect and shut down for everyone. **Use responsibly — don't ruin it for the next person.**

<div dir="rtl">

### ⚠️ استفادهٔ مسئولانه

این ابزار برای **استفادهٔ معمولی و تعاملی از اینترنت** ساخته شده — مرور وب، پیام‌رسان‌ها، ایمیل، استفادهٔ سبک از اپ‌ها. **برای استریم ویدیو، دانلودهای حجیم، تورنت یا سایر بارهای پربازده پایدار طراحی نشده.**

تونل روی زیرساخت LiveKit بله اجرا می‌شود. ترافیک سنگین از یک «تماس صوتی» در متریک‌های بله جلب توجه می‌کند، فشار روی سرورهایشان می‌گذارد، و تشخیص و خاموش کردن پروژه را برای همه آسان‌تر می‌کند. **مسئولانه استفاده کنید — حق نفر بعدی را پایمال نکنید.**

</div>

---

## Supported features

| Role | Platform | Notes |
|---|---|---|
| Client | Android | System `VpnService` (kernel TUN). Optional LAN-facing SOCKS5 listener in **Advanced** settings lets other devices on the local network share the tunnel. |
| Server | Android | In-process userspace TCP/IP NAT; no root, no kernel TUN, no `iptables`. |
| Client | Rust — Linux / macOS / Windows | Local SOCKS5 listener over a QUIC channel (no privilege needed). Optional system TUN (`--client-tun`, Linux/macOS only) for full host routing. |
| Server | Rust — Linux | **Kernel TUN** mode (best throughput) needs `setcap cap_net_admin` + `iptables` MASQUERADE — one-time setup. **Userspace NAT** mode runs unprivileged. |
| Server | Rust — macOS | **Kernel TUN** mode (best throughput) runs as root; `pf` anchor + IP forwarding auto-set. **Userspace NAT** mode runs unprivileged. |
| Server | Rust — Windows | Userspace NAT mode only. |

> **Easiest start: Android server + Android client.** Two phones, install the APK on both, sign in with your Bale account in the BaleVPN app, flip the toggle. No root, no command line, no firewall rules.
>
> **Most efficient: Linux or macOS Rust kernel-TUN server + Android client.** The kernel does the IP forwarding (TUN device) and the NAT (`iptables` MASQUERADE on Linux, `pf` anchor on macOS) — substantially faster than the userspace alternatives. The Android client connects via the standard `VpnService` for a fully-integrated system VPN.

The Rust server's forwarding mode is selectable at startup via `--nat-mode kernel|userspace`. `kernel` requires the one-time setup linked above; `userspace` runs with no privilege on any OS.

---

## Detailed guides

Per-platform setup, manuals, and screenshots:

| Platform | English | فارسی |
|---|---|---|
| **Android** (client and userspace-TCP/IP server) | [Android user guide](docs/android-en.md) | [راهنمای کاربری اپلیکیشن اندروید](docs/android-fa.md) |
| **Rust** — Linux / macOS / Windows (client + server; kernel TUN on Linux/macOS, userspace NAT on any OS) | [Rust application guide](docs/rust-en.md) | [راهنمای نسخهٔ Rust](docs/rust-fa.md) |

For contributors:
- [`docs/architecture.md`](docs/architecture.md) — repo layout, crate dependency graph, runtime data flow, build steps per component, CI workflows.
- [`CLAUDE.md`](CLAUDE.md) — protocol internals, wire formats, and Bale-specific decisions.

---

## Architecture

```
        ┌──────────────────────────────────────────────────────────────┐
        │   Bale signaling WS  ·  wss://next-ws.bale.ai/ws/            │
        │   call setup (StartCall / AcceptCall / DiscardCall),         │
        │   presence, callReceived / callEnded push events             │
        └────┬─────────────────────────────────────────────────┬───────┘
             │ signaling                                signaling
             │ (paused while a client call is active)          │
             ▼                                                 ▼
    ┌─────────────────┐                              ┌─────────────────┐
    │     client      │                              │     server      │
    │  Rust  /  Android                              │  Rust  /  Android
    │                 │                              │                 │
    │  apps → SOCKS5  │                              │ kernel TUN OR   │
    │  apps → TUN     │                              │ userspace NAT   │
    └────────┬────────┘                              └────────┬────────┘
             │                                                │
             │   DTLS-encrypted WebRTC data channel           │
             │     ▶ FRAME_TYPE_IP  (raw IP for VPN/TUN)      │
             │     ▶ FRAME_TYPE_QUIC (QUIC for SOCKS5)        │
             └──────────────┐                  ┌──────────────┘
                            ▼                  ▼
                  ┌────────────────────────────────────┐
                  │   LiveKit SFU  ·  meet-*.ble.ir    │
                  │   relays the data channel only —   │
                  │   does NOT touch the open internet │
                  └────────────────────────────────────┘
                                                                ┌──────────┐
                                        server NAT egress ─────►│   open   │
                                                                │ internet │
                                                                └──────────┘
```

Two channels per session, both terminated at Bale infrastructure:

**Signaling — Bale WS at `next-ws.bale.ai`.** Call setup RPCs and push events. Owned by `bale-signaling-rust`. The lifecycle is driven by a rule engine in `WsClient`:

> `desired_up = token && !user_disconnect && ( server_active || (foreground && !call_active) )`

So in client mode the WS is **automatically paused while a call is in progress** (the push channel is unnecessary mid-call) and resumed when the call ends. In server mode it stays up unconditionally so `callReceived` pushes can reach the daemon.

**Transport — LiveKit DTLS-encrypted data channel.** The published audio track's encoded payload is hijacked (via a custom `FrameTransformer`) and replaced with our own bytes — the SFU sees opaque "audio" and relays it; on the other end we replace the bytes back. One byte at the start tags each frame:

- `'I'` (0x49) — **raw IP packets** for VPN / TUN mode. Client kernel TUN reads IP → ships → server side either kernel-TUN (the host kernel forwards via iptables MASQUERADE / pf) or userspace NAT (per-flow Rust TCP/UDP state machines).
- `'Q'` (0x51) — **QUIC datagrams** for SOCKS5 mode. Client's local SOCKS5 listener wraps app traffic into a QUIC stream → server's QUIC acceptor demuxes and opens host sockets per SOCKS5 dial.

Both modes can be active on one tunnel — apps choose by configuring SOCKS5 vs going through the VPN system route.

**Server NAT** owns egress to the open internet. The SFU just relays the DTLS channel; it never sees the unwrapped tunnel data and doesn't route to the internet itself.

**What Bale sees**: signaling metadata (who calls whom, when, for how long), the IP addresses your traffic ends up reaching, and any plaintext-protocol payloads. The SOCKS5/QUIC layer adds TLS-1.3 between client and server but uses **self-signed certs with no CA validation**, so an active adversary at the SFU can transparent-MITM it. Treat the tunnel as "IP reachability" not "end-to-end privacy" — use HTTPS at the app level. Details in the [privacy note](#%EF%B8%8F-privacy--encryption) above.

---

## Status

Active research / experimentation. APIs and on-disk formats may change without notice.

---

## Disclaimer

This is an independent reverse-engineering **research project**. There is no commercial relationship with, and no endorsement by, Bale or any of its operators. The code is published for educational purposes — to document how a closed-source messenger's WebRTC voice-call infrastructure can be repurposed as a generic data tunnel, and to make the wire formats and protocols involved legible to other researchers.

**You are responsible for how you use this software.** The author(s):

- make no warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, security, or compliance with any local law or regulation;
- accept no liability for any damages, claims, costs, or losses arising from use, misuse, or inability to use this software;
- accept no responsibility for any violation of Bale's terms of service, of any applicable telecommunications, privacy, or computer-access laws, or of any third-party rights, that may arise from running this software.

Only use it on accounts and infrastructure you own or have explicit permission to test against. Do not use it to circumvent access controls you have not been authorised to bypass, to evade lawful network policy, or to harm any third party.

If you are unsure whether your intended use is lawful in your jurisdiction, consult a qualified lawyer before proceeding.

---

## License

Released under the [MIT License](LICENSE). The software is provided "as is", without warranty of any kind. The disclaimer above applies in addition to (not in place of) the license terms.
