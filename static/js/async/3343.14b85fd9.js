try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "44bb9b85-67fc-4fcd-8475-4132bf010472", e._sentryDebugIdIdentifier = "sentry-dbid-44bb9b85-67fc-4fcd-8475-4132bf010472")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3343"], {
        84820: function(e, t, n) {
            n.d(t, {
                A: () => p
            });
            var i = n(46756),
                r = n.n(i),
                o = n(5421),
                s = n.n(o)()(r());
            s.push([e.id, ':root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/2));z-index:10;cursor:pointer;color:var(--swiper-navigation-color,var(--swiper-theme-color));justify-content:center;align-items:center;display:flex;position:absolute;top:50%}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);letter-spacing:0;font-variant:initial;line-height:1;text-transform:none!important}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}', ""]);
            let p = s
        },
        72418: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => g
            });
            var i = n(53321),
                r = n.n(i),
                o = n(23518),
                s = n.n(o),
                p = n(14182),
                a = n.n(p),
                l = n(5033),
                b = n.n(l),
                d = n(77141),
                u = n.n(d),
                w = n(66338),
                f = n.n(w),
                c = n(84820),
                v = {};
            v.styleTagTransform = f(), v.setAttributes = b(), v.insert = a().bind(null, "head"), v.domAPI = s(), v.insertStyleElement = u(), r()(c.A, v);
            let g = c.A && c.A.locals ? c.A.locals : void 0
        }
    }
]);
//# sourceMappingURL=3343.14b85fd9.js.map