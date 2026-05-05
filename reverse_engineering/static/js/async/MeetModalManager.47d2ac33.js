try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ef81dcd9-bda2-4cec-a778-6be75d94cba2", e._sentryDebugIdIdentifier = "sentry-dbid-ef81dcd9-bda2-4cec-a778-6be75d94cba2")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3703"], {
        30844: function(e, a, l) {
            l.r(a), l.d(a, {
                default: () => w
            });
            var n = l(45831),
                t = l(58191),
                o = l.n(t),
                r = l(69789),
                d = l(26757),
                s = l(30141),
                i = l(27767),
                u = l(72984),
                M = l(36214),
                c = l(80412),
                f = l(80073),
                p = l(94257),
                b = l(2077);
            f.j.getLogger(p.m + "MeetModalManager");
            let y = () => Promise.all([l.e("3326"), l.e("6885"), l.e("269"), l.e("8214")]).then(l.bind(l, 9083)),
                g = (0, c.GD)(() => y().then(e => ({
                    default: e.CallMain
                }))),
                h = (0, c.GD)(() => y().then(e => ({
                    default: e.PrepareMeet
                }))),
                C = (0, c.GD)(() => y().then(e => ({
                    default: e.CallCreateLinkModal
                }))),
                m = (0, c.GD)(() => y().then(e => ({
                    default: e.CallSurveyModal
                }))),
                k = (0, b.Ng)(e => ({
                    meetModalManagerState: (0, r.Ft)(e)
                }), e => ({
                    closeMainModal: () => e(d.BA.triggerModalAction({
                        mainModal: {
                            open: !1
                        }
                    })),
                    closePrepareMeet: () => e(d.BA.triggerModalAction({
                        prepareMeet: {
                            open: !1
                        }
                    })),
                    closeCreateLinkModal: () => e(d.BA.triggerModalAction({
                        createLinkModal: {
                            open: !1
                        }
                    })),
                    closeCallSurveyModal: () => e(d.BA.triggerModalAction({
                        surveyModal: {
                            open: !1
                        }
                    }))
                })),
                w = o().memo(k(e => {
                    let {
                        meetModalManagerState: a,
                        closeMainModal: l,
                        closePrepareMeet: o,
                        closeCreateLinkModal: r,
                        closeCallSurveyModal: d
                    } = e, {
                        isOpen: c
                    } = (0, i.de)(), f = a.mainModal.open, p = a.prepareMeet.open, b = a.createLinkModal.open, y = a.surveyModal.open;
                    return (0, n.FD)(n.FK, {
                        children: [(0, n.Y)(s.O, {
                            isOpen: y,
                            onClose: d,
                            showCloseButton: !1,
                            shouldNotClose: !1,
                            fullScreenInMobile: !1,
                            fullHeight: !0,
                            haveTransition: !0,
                            shouldHandleKeyboardOpen: c,
                            backgroundColor: (0, u.Er)(M.Qs.color_bubble_mask),
                            "data-sentry-element": "LocalModalWrapper",
                            "data-sentry-source-file": "MeetModalManager.tsx",
                            children: (0, n.Y)(t.Suspense, {
                                fallback: (0, n.Y)("div", {}),
                                "data-sentry-element": "Suspense",
                                "data-sentry-source-file": "MeetModalManager.tsx",
                                children: (0, n.Y)(m, {
                                    "data-sentry-element": "CallSurveyModal",
                                    "data-sentry-source-file": "MeetModalManager.tsx"
                                })
                            })
                        }), (0, n.Y)(s.O, {
                            isOpen: b,
                            onClose: r,
                            showCloseButton: !1,
                            shouldNotClose: !1,
                            fullScreenInMobile: !1,
                            fullHeight: !1,
                            haveTransition: !0,
                            shouldHandleKeyboardOpen: c,
                            backgroundColor: (0, u.Er)(M.Qs.color_bubble_mask),
                            "data-sentry-element": "LocalModalWrapper",
                            "data-sentry-source-file": "MeetModalManager.tsx",
                            children: (0, n.Y)(t.Suspense, {
                                fallback: (0, n.Y)("div", {}),
                                "data-sentry-element": "Suspense",
                                "data-sentry-source-file": "MeetModalManager.tsx",
                                children: (0, n.Y)(C, {
                                    "data-sentry-element": "CreateLinkModal",
                                    "data-sentry-source-file": "MeetModalManager.tsx"
                                })
                            })
                        }), (0, n.Y)(s.O, {
                            isOpen: f,
                            onClose: l,
                            showCloseButton: !1,
                            shouldNotClose: !1,
                            fullScreenInMobile: !0,
                            fullHeight: !1,
                            haveTransition: !0,
                            shouldHandleKeyboardOpen: c,
                            backgroundColor: (0, u.Er)(M.Qs.color_bubble_mask),
                            "data-sentry-element": "LocalModalWrapper",
                            "data-sentry-source-file": "MeetModalManager.tsx",
                            children: (0, n.Y)(t.Suspense, {
                                fallback: (0, n.Y)("div", {}),
                                "data-sentry-element": "Suspense",
                                "data-sentry-source-file": "MeetModalManager.tsx",
                                children: (0, n.Y)(g, {
                                    "data-sentry-element": "CallMain",
                                    "data-sentry-source-file": "MeetModalManager.tsx"
                                })
                            })
                        }), (0, n.Y)(s.O, {
                            isOpen: p,
                            onClose: o,
                            showCloseButton: !1,
                            shouldNotClose: !1,
                            fullScreenInMobile: !1,
                            fullHeight: !1,
                            haveTransition: !0,
                            shouldHandleKeyboardOpen: c,
                            "data-sentry-element": "LocalModalWrapper",
                            "data-sentry-source-file": "MeetModalManager.tsx",
                            children: (0, n.Y)(t.Suspense, {
                                fallback: (0, n.Y)("div", {}),
                                "data-sentry-element": "Suspense",
                                "data-sentry-source-file": "MeetModalManager.tsx",
                                children: (0, n.Y)(h, {
                                    "data-sentry-element": "PrepareMeet",
                                    "data-sentry-source-file": "MeetModalManager.tsx"
                                })
                            })
                        })]
                    })
                }))
        }
    }
]);
//# sourceMappingURL=MeetModalManager.47d2ac33.js.map