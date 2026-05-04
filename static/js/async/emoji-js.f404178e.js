try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "886d7f83-ddfe-4654-8fb6-f257c8c707a7", e._sentryDebugIdIdentifier = "sentry-dbid-886d7f83-ddfe-4654-8fb6-f257c8c707a7")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["8902"], {
        77145: function(e, n, o) {
            o.r(n), o.d(n, {
                emoji: () => f,
                emojiColonConvertor: () => i
            });
            var d = o(2842);
            o(89747);
            var s = o(34438);
            let f = new d.EmojiConvertor;
            f.img_set = "apple", f.use_sheet = !0, f.img_sets.apple.sheet = s, f.allow_native = !0, f.supports_css = !0, f.use_css_imgs = !0, f.replace_mode = "img";
            let i = new d.EmojiConvertor;
            i.replace_mode = "unified"
        }
    }
]);
//# sourceMappingURL=emoji-js.f404178e.js.map