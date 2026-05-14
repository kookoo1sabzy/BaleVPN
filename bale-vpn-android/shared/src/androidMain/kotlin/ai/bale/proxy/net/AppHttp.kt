package ai.bale.proxy.net

import io.ktor.client.HttpClient
import io.ktor.client.engine.okhttp.OkHttp
import io.ktor.client.plugins.websocket.WebSockets

/** Single shared Ktor `HttpClient` for the whole app — used by `BaleConnection`
 *  (Bale WS), `PhoneAuthActivity` / `OtpActivity` (auth gRPC-web),
 *  `ContactsActivity` (contact gRPC-web), and anywhere else we need HTTP.
 *
 *  Plain OkHttp — no custom socket factory or DNS. The VPN bypass for
 *  the whole app is handled at the `VpnService` layer via
 *  `Builder.addDisallowedApplication(packageName)` (see
 *  `BaleVpnService.startVpn`), so sockets opened from this process
 *  never enter the TUN regardless of how they're configured.
 *
 *  Lifetime is the app process. We never `close()` it. */
object AppHttp {
    val client: HttpClient by lazy {
        HttpClient(OkHttp) {
            install(WebSockets)
        }
    }
}
