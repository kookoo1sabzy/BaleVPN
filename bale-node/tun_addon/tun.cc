#include <napi.h>
#include <arpa/inet.h>
#include <fcntl.h>
#include <linux/if.h>
#include <linux/if_tun.h>
#include <sys/ioctl.h>
#include <sys/socket.h>
#include <unistd.h>
#include <cerrno>
#include <cstring>

static void initIfr(struct ifreq &ifr, const std::string &name) {
    memset(&ifr, 0, sizeof(ifr));
    strncpy(ifr.ifr_name, name.c_str(), IFNAMSIZ - 1);
}

Napi::Value OpenTun(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();
    std::string name = info.Length() >= 1 && info[0].IsString()
        ? info[0].As<Napi::String>().Utf8Value() : "tun0";

    int fd = open("/dev/net/tun", O_RDWR);
    if (fd < 0) {
        Napi::Error::New(env, std::string("open /dev/net/tun: ") + strerror(errno))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    struct ifreq ifr;
    initIfr(ifr, name);
    ifr.ifr_flags = IFF_TUN | IFF_NO_PI;
    if (ioctl(fd, TUNSETIFF, &ifr) < 0) {
        int e = errno; close(fd);
        Napi::Error::New(env, std::string("TUNSETIFF: ") + strerror(e))
            .ThrowAsJavaScriptException();
        return env.Null();
    }

    return Napi::Number::New(env, fd);
}

// Assigns an IPv4 address and brings the interface up via ioctls in the current
// process — works with setcap cap_net_admin without spawning child processes.
Napi::Value ConfigureIf(const Napi::CallbackInfo &info) {
    Napi::Env env = info.Env();
    if (info.Length() < 3 || !info[0].IsString() || !info[1].IsString() || !info[2].IsNumber()) {
        Napi::TypeError::New(env, "configureIf(name, ip, prefixLen)").ThrowAsJavaScriptException();
        return env.Null();
    }
    std::string ifname = info[0].As<Napi::String>().Utf8Value();
    std::string ip     = info[1].As<Napi::String>().Utf8Value();
    int prefix         = info[2].As<Napi::Number>().Int32Value();

    int sock = socket(AF_INET, SOCK_DGRAM, 0);
    if (sock < 0) {
        Napi::Error::New(env, std::string("socket: ") + strerror(errno)).ThrowAsJavaScriptException();
        return env.Null();
    }

    struct ifreq ifr;
    struct sockaddr_in *sin;
    int e;

    // Set address
    initIfr(ifr, ifname);
    sin = reinterpret_cast<struct sockaddr_in *>(&ifr.ifr_addr);
    sin->sin_family = AF_INET;
    if (inet_pton(AF_INET, ip.c_str(), &sin->sin_addr) != 1) {
        close(sock);
        Napi::Error::New(env, "invalid IP address").ThrowAsJavaScriptException();
        return env.Null();
    }
    if (ioctl(sock, SIOCSIFADDR, &ifr) < 0) {
        e = errno; close(sock);
        Napi::Error::New(env, std::string("SIOCSIFADDR: ") + strerror(e)).ThrowAsJavaScriptException();
        return env.Null();
    }

    // Set netmask
    initIfr(ifr, ifname);
    sin = reinterpret_cast<struct sockaddr_in *>(&ifr.ifr_addr);
    sin->sin_family = AF_INET;
    sin->sin_addr.s_addr = prefix ? htonl(~((1u << (32 - prefix)) - 1)) : 0;
    if (ioctl(sock, SIOCSIFNETMASK, &ifr) < 0) {
        e = errno; close(sock);
        Napi::Error::New(env, std::string("SIOCSIFNETMASK: ") + strerror(e)).ThrowAsJavaScriptException();
        return env.Null();
    }

    // Bring up
    initIfr(ifr, ifname);
    if (ioctl(sock, SIOCGIFFLAGS, &ifr) < 0) {
        e = errno; close(sock);
        Napi::Error::New(env, std::string("SIOCGIFFLAGS: ") + strerror(e)).ThrowAsJavaScriptException();
        return env.Null();
    }
    ifr.ifr_flags |= IFF_UP | IFF_RUNNING;
    if (ioctl(sock, SIOCSIFFLAGS, &ifr) < 0) {
        e = errno; close(sock);
        Napi::Error::New(env, std::string("SIOCSIFFLAGS: ") + strerror(e)).ThrowAsJavaScriptException();
        return env.Null();
    }

    close(sock);
    return env.Undefined();
}

Napi::Value CloseTun(const Napi::CallbackInfo &info) {
    if (info.Length() >= 1 && info[0].IsNumber())
        close(info[0].As<Napi::Number>().Int32Value());
    return info.Env().Undefined();
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set("openTun",     Napi::Function::New(env, OpenTun));
    exports.Set("configureIf", Napi::Function::New(env, ConfigureIf));
    exports.Set("closeTun",    Napi::Function::New(env, CloseTun));
    return exports;
}

NODE_API_MODULE(tun, Init)
