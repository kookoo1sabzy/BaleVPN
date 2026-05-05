try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "34907dea-fe8a-4dee-9c8c-b4071b864815", e._sentryDebugIdIdentifier = "sentry-dbid-34907dea-fe8a-4dee-9c8c-b4071b864815")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4003"], {
        78595: function(e, t, a) {
            a.d(t, {
                A: () => i
            });
            var s = a(46756),
                r = a.n(s),
                l = a(5421),
                n = a.n(l)()(r());
            n.push([e.id, "@keyframes dD5KWl{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes m5aLS_{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes PUSjpZ{0%{opacity:0}to{opacity:1}}@keyframes Tb0nSn{0%{opacity:1}to{opacity:0}}@keyframes _niO1S{0%{transform:translateY(200%)}to{transform:translateY(0%)}}@keyframes kQaREX{0%{transform:translateY(0%)}to{transform:translateY(200%)}}@keyframes aTUBZj{to{background-position:23% 0}}@keyframes D3QjUX{0%{transform:translate(125%)}40%,to{transform:translate(-125%)}}@keyframes hdfUTT{0%{opacity:.2}50%{opacity:1}to{opacity:.2}}@keyframes pkmOcY{12.5%{transform:rotate(45deg)}25%{transform:rotate(90deg)}37.5%{transform:rotate(135deg)}50%{transform:rotate(180deg)}62.5%{transform:rotate(225deg)}75%{transform:rotate(270deg)}87.5%{transform:rotate(315deg)}to{transform:rotate(360deg)}}.BcIfBv,.Mlve5a,.Yj5wp_,.iWLdCd{color:var(--color-neutrals-n-500);align-items:flex-start;margin:0;padding-block-start:4px;font-family:Shabnam;font-size:1.4rem;font-weight:400;line-height:2.2rem;display:flex}.BcIfBv svg,.Mlve5a svg,.Yj5wp_ svg,.iWLdCd svg{flex-shrink:0;margin-inline-end:4px}.BcIfBv p,.Mlve5a p,.Yj5wp_ p,.iWLdCd p{margin:0}.BcIfBv,.Mlve5a,.Yj5wp_,.iWLdCd{width:100%}.BcIfBv *{color:var(--color-neutrals-n-300);font-weight:300}.Mlve5a *{color:var(--color-error)}.Yj5wp_ p{color:var(--color-success)}.iWLdCd p{color:var(--color-neutrals-n-300)}.iWLdCd .aBMrvZ{animation:.75s step-end infinite pkmOcY}", ""]), n.locals = {
                HelpWrapper: "BcIfBv",
                helpWrapper: "BcIfBv",
                ErrorWrapper: "Mlve5a",
                errorWrapper: "Mlve5a",
                SuccessWrapper: "Yj5wp_",
                successWrapper: "Yj5wp_",
                LoadingWrapper: "iWLdCd",
                loadingWrapper: "iWLdCd",
                LoadingIcon: "aBMrvZ",
                loadingIcon: "aBMrvZ",
                rotate: "pkmOcY",
                spin: "dD5KWl",
                reverseSpin: "m5aLS_",
                fadeIn: "PUSjpZ",
                fadeOut: "Tb0nSn",
                slideUp: "_niO1S",
                slideDown: "kQaREX",
                shimmer: "aTUBZj",
                "skeleton-animation": "D3QjUX",
                skeletonAnimation: "D3QjUX",
                pulse: "hdfUTT"
            };
            let i = n
        },
        12281: function(e, t, a) {
            a.d(t, {
                A: () => i
            });
            var s = a(46756),
                r = a.n(s),
                l = a(5421),
                n = a.n(l)()(r());
            n.push([e.id, ".Pv0mVL{cursor:pointer;border:1.5px solid var(--color-neutrals-n-300);background-color:transparent;border-radius:.5rem;justify-content:center;align-items:center;width:2rem;height:2rem;display:flex}.Pv0mVL.xnJGEE{background:var(--color-primary-p-50);border:none}.Pv0mVL.a4jyic{background:var(--color-neutrals-n-50)}.Pv0mVL.V2TTvp{border:1.5px solid var(--color-neutrals-n-50);cursor:default}.PL_auk{width:2rem;padding:3px}", ""]), n.locals = {
                Wrapper: "Pv0mVL",
                wrapper: "Pv0mVL",
                isChecked: "xnJGEE",
                selected: "a4jyic",
                disabled: "V2TTvp",
                Icon: "PL_auk",
                icon: "PL_auk"
            };
            let i = n
        },
        22279: function(e, t, a) {
            a.d(t, {
                M: () => l
            });
            var s = a(58191),
                r = a.n(s);
            let l = e => {
                var t;
                let a = null != (t = e.color) ? t : "#5E6C84";
                return e.bgColor, e.secondColor, r().createElement("svg", Object.assign({
                    width: e.size,
                    height: e.size,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-label": "TickDone-icon"
                }, e), r().createElement("path", {
                    fill: a,
                    fillRule: "evenodd",
                    d: "M12 3.463a8.537 8.537 0 1 0 0 17.074 8.537 8.537 0 0 0 0-17.074ZM2 12C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12",
                    clipRule: "evenodd"
                }), r().createElement("path", {
                    fill: a,
                    fillRule: "evenodd",
                    d: "M16.65 9.47a.75.75 0 0 1 0 1.06l-4.746 4.746a.75.75 0 0 1-1.06 0L8.47 12.903a.75.75 0 1 1 1.06-1.06l1.844 1.842L15.59 9.47a.75.75 0 0 1 1.06 0",
                    clipRule: "evenodd"
                }))
            }
        },
        27166: function(e, t, a) {
            a.d(t, {
                nS: () => x,
                O$: () => U,
                po: () => C,
                Kw: () => b
            });
            var s = a(36878),
                r = a(22279),
                l = a(6992);
            a(58191);
            var n = a(54582),
                i = a(91898),
                o = a(53321),
                d = a.n(o),
                p = a(23518),
                u = a.n(p),
                g = a(14182),
                c = a.n(g),
                m = a(5033),
                f = a.n(m),
                M = a(77141),
                h = a.n(M),
                v = a(66338),
                y = a.n(v),
                T = a(78595),
                w = {};
            w.styleTagTransform = y(), w.setAttributes = f(), w.insert = c().bind(null, "head"), w.domAPI = u(), w.insertStyleElement = h(), d()(T.A, w);
            let S = T.A && T.A.locals ? T.A.locals : void 0;
            var I = a(57243),
                k = a.n(I),
                P = a(36214),
                E = a(72984);
            let C = e => (0, s.jsxs)("div", {
                    className: k()(S.HelpWrapper, e.className),
                    children: [!e.hideIcon && (0, s.jsx)(n.R, {
                        className: S.icon,
                        color: (0, E.Er)(P.Qs.color_neutrals_n_300),
                        size: 20
                    }), "string" == typeof e.message ? (0, s.jsx)("p", {
                        children: e.message
                    }) : e.message]
                }),
                b = e => (0, s.jsxs)("div", {
                    className: k()(S.ErrorWrapper, e.className),
                    "data-testid": "textfield-error-message",
                    children: [(0, s.jsx)(i.I, {
                        size: 20,
                        color: (0, E.Er)(P.Qs.color_error)
                    }), (0, s.jsx)("div", {
                        className: S.ErrorMessage,
                        children: e.message
                    })]
                }),
                x = e => (0, s.jsxs)("div", {
                    className: k()(S.SuccessWrapper, e.className),
                    children: [(0, s.jsx)(r.M, {
                        size: 20,
                        color: (0, E.Er)(P.Qs.color_success)
                    }), (0, s.jsx)("p", {
                        children: e.message
                    })]
                }),
                U = e => (0, s.jsxs)("div", {
                    className: k()(S.LoadingWrapper, e.className),
                    children: [(0, s.jsx)(l.R, {
                        size: 20,
                        color: (0, E.Er)(P.Qs.color_success),
                        className: S.LoadingIcon
                    }), (0, s.jsx)("p", {
                        children: e.message
                    })]
                })
        },
        91898: function(e, t, a) {
            a.d(t, {
                I: () => r
            });
            var s = a(36878);
            a(58191);
            let r = e => {
                let {
                    color: t = "#F74455",
                    size: a,
                    ...r
                } = e;
                return (0, s.jsxs)("svg", {
                    ...r,
                    width: a,
                    height: a,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("path", {
                        d: "M9.375 13.5597C9.375 13.2147 9.655 12.9297 10 12.9297C10.345 12.9297 10.625 13.2055 10.625 13.5505V13.5597C10.625 13.9047 10.345 14.1847 10 14.1847C9.655 14.1847 9.375 13.9047 9.375 13.5597Z",
                        fill: t
                    }), (0, s.jsx)("path", {
                        d: "M3.99548 17.015H16.0638C17.0196 16.965 17.7546 16.1508 17.7055 15.195C17.6946 15.0016 17.653 14.8108 17.5796 14.6325L11.5155 4.01915C11.0521 3.18165 9.99798 2.87831 9.16048 3.34248C8.87548 3.49915 8.64048 3.73415 8.48298 4.01915L2.41881 14.6325C2.05881 15.5191 2.48548 16.5291 3.37131 16.89C3.55131 16.9625 3.74131 17.0041 3.93464 17.015",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, s.jsx)("path", {
                        d: "M9.98893 11.1634V8.58008",
                        stroke: t,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
        },
        1107: function(e, t, a) {
            a.d(t, {
                f: () => l
            });
            var s = a(34267),
                r = a(6810);
            let l = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Yi;
                return new Promise((a, s) => {
                    let l = document.createElement("canvas"),
                        n = l.getContext("2d"),
                        i = new Image;
                    i.src = URL.createObjectURL(e), i.onload = () => {
                        let {
                            w: e,
                            h: o
                        } = (0, r.h)(t, i.width, i.height, r.C, r.C, 1);
                        l.width = e, l.height = o, n && (n.fillStyle = "white", n.fillRect(0, 0, e, o), null == n || n.drawImage(i, 0, 0, e, o)), l.toBlob(async t => {
                            if (t)
                                if ("arrayBuffer" in t) {
                                    let r = await (null == t ? void 0 : t.arrayBuffer());
                                    if (!r) return void s();
                                    a({
                                        h: o,
                                        w: e,
                                        thumb: new Uint8Array(r),
                                        optFileLocation: void 0
                                    })
                                } else {
                                    let r = new FileReader;
                                    r.onload = () => {
                                        let t = r.result;
                                        t ? a({
                                            h: o,
                                            w: e,
                                            thumb: new Uint8Array(t),
                                            optFileLocation: void 0
                                        }) : s()
                                    }, r.readAsArrayBuffer(t)
                                }
                        }, "image/jpeg", .2)
                    }, i.onerror = () => {
                        s()
                    }
                })
            }
        },
        6810: function(e, t, a) {
            a.d(t, {
                C: () => r,
                h: () => l
            });
            var s = a(34267);
            let r = 30,
                l = function(e, t, a, r, l) {
                    let n, i, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 250,
                        d = (0, s.Uq)(e, window.innerWidth),
                        p = Math.min((o = 250 === o && d > s.Rp.Small ? 400 : o) / 2, 100);
                    if (t < o || a < p) {
                        let {
                            width: e,
                            height: s
                        } = ((e, t, a, s) => {
                            for (; e < a || t < s;)
                                if (e < a) {
                                    let s = t / e;
                                    e = a, t = a * s
                                } else if (t < s) {
                                let a = e / t;
                                t = s, e = s * a
                            } else e = a, t = a;
                            return {
                                width: e,
                                height: t
                            }
                        })(t, a, o, p);
                        n = e > r ? r : e, i = s > l ? l : s
                    } else {
                        let {
                            width: e,
                            height: s
                        } = ((e, t, a, s) => {
                            for (; e > a || t > s;)
                                if (e > a) {
                                    let s = e / t;
                                    e = a, t = a / s
                                } else if (t > s) {
                                let a = t / e;
                                t = s, e = s / a
                            } else e = a, t = a;
                            return {
                                width: e,
                                height: t
                            }
                        })(t, a, r, l);
                        n = e < o ? o : e, i = s < p ? p : s
                    }
                    return {
                        w: Math.ceil(n),
                        h: Math.ceil(i)
                    }
                }
        },
        32675: function(e, t, a) {
            a.d(t, {
                U: () => l
            });
            var s = a(34267),
                r = a(6810);
            let l = function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yi,
                    l = arguments.length > 3 ? arguments[3] : void 0;
                return new Promise((s, n) => {
                    let i = document.createElement("video");
                    i.src = URL.createObjectURL(e), i.preload = "metadata", i.load(), i.onloadeddata = () => {
                        i.pause(), i.currentTime = .1
                    }, i.onloadedmetadata = () => {
                        t && (i.pause(), i.currentTime = .1)
                    }, i.onseeked = () => {
                        let e = document.createElement("canvas"),
                            t = e.getContext("2d"),
                            {
                                w: o,
                                h: d
                            } = (0, r.h)(a, i.videoWidth, i.videoHeight, r.C, r.C, 1);
                        e.width = o, e.height = d, null == t || t.drawImage(i, 0, 0, o, d), e.toBlob(async e => {
                            if (e)
                                if ("arrayBuffer" in e && !(null == l ? void 0 : l.disableUsingBlobArrayBuffer)) {
                                    let t = await (null == e ? void 0 : e.arrayBuffer());
                                    if (!t) return void n();
                                    s({
                                        h: d,
                                        w: o,
                                        thumb: new Uint8Array(t),
                                        optFileLocation: void 0
                                    })
                                } else {
                                    let t = new FileReader;
                                    t.onload = () => {
                                        let e = t.result;
                                        e ? s({
                                            h: d,
                                            w: o,
                                            thumb: new Uint8Array(e),
                                            optFileLocation: void 0
                                        }) : n()
                                    }, t.readAsArrayBuffer(e)
                                }
                        }, "image/jpeg", .2)
                    }, i.onerror = e => {
                        n()
                    }
                })
            }
        },
        83471: function(e, t, a) {
            a.d(t, {
                S: () => w
            });
            var s = a(45831),
                r = a(57243),
                l = a.n(r);
            a(58191);
            var n = a(53321),
                i = a.n(n),
                o = a(23518),
                d = a.n(o),
                p = a(14182),
                u = a.n(p),
                g = a(5033),
                c = a.n(g),
                m = a(77141),
                f = a.n(m),
                M = a(66338),
                h = a.n(M),
                v = a(12281),
                y = {};
            y.styleTagTransform = h(), y.setAttributes = c(), y.insert = u().bind(null, "head"), y.domAPI = d(), y.insertStyleElement = f(), i()(v.A, y);
            let T = v.A && v.A.locals ? v.A.locals : void 0,
                w = e => (0, s.Y)("div", {
                    "data-testid": e["data-testid"],
                    onClick: t => {
                        e.onChange && !e.disabled && (t.stopPropagation(), e.onChange())
                    },
                    className: l()(T.Wrapper, {
                        [T.isChecked]: e.checked,
                        [T.selected]: e.selected,
                        [T.disabled]: e.disabled
                    }, e.className),
                    style: e.style,
                    "data-sentry-component": "Checkbox",
                    "data-sentry-source-file": "Checkbox.tsx",
                    children: e.checked && (0, s.Y)("img", {
                        className: T.Icon,
                        src: "/icons/ic_checked.svg",
                        alt: "check"
                    })
                })
        },
        33414: function(e, t, a) {
            a.d(t, {
                Hm: () => R
            });
            var s = a(51116),
                r = a(12314),
                l = a(9348),
                n = a(33222),
                i = a(92023),
                o = a(69758),
                d = a(23031),
                p = a(84748),
                u = a(44334),
                g = a(41296),
                c = a(78893),
                m = a(34993),
                f = a(46896),
                M = a(52545),
                h = a(78130),
                v = a(35133),
                y = a(3537),
                T = a(10492),
                w = a(64908),
                S = a(19625),
                I = a(80073),
                k = a(82826),
                P = a(10366);
            let E = I.j.getLogger("UploadManager/StateStore");
            class C {
                getStore(e) {
                    return e.getKeyValue(P.Ev.MultiChunkConfigs)
                }
                async get(e, t) {
                    try {
                        let a = this.getStore(t);
                        return await (0, p.H)(a.get(e)).pipe((0, v.T)(e => e ? {
                            fileId: e.fileId,
                            uploadedChunks: new Set(e.uploadedChunks ?? [])
                        } : null), (0, f.W)(() => (0, o.of)(null))).toPromise() ?? null
                    } catch (e) {
                        return E.warn("Failed to get upload state", e), null
                    }
                }
                setFileId(e, t, a) {
                    let s = this.getStore(a);
                    return (0, p.H)(s.get(e)).pipe((0, m.n)(a => s.put({
                        fileId: t,
                        uploadedChunks: (null == a ? void 0 : a.uploadedChunks) ?? []
                    }, e)), (0, m.n)(() => u.w), (0, f.W)(e => (E.error("Failed to set fileId", e), u.w)))
                }
                setChunkCompleted(e, t, a) {
                    let s = this.getStore(a);
                    return (0, p.H)(s.get(e)).pipe((0, m.n)(a => {
                        let r = (null == a ? void 0 : a.uploadedChunks) ?? [];
                        return r.includes(t) || r.push(t), s.put({
                            fileId: (null == a ? void 0 : a.fileId) ?? "",
                            uploadedChunks: r
                        }, e)
                    }), (0, h.M)(() => {
                        E.debug(`Chunk ${t} marked as completed for rid ${e}`)
                    }), (0, m.n)(() => u.w), (0, f.W)(e => (E.error("Failed to set chunk completed", e), u.w)))
                }
                clear(e, t) {
                    let a = this.getStore(t);
                    return (0, p.H)(a.delete(e)).pipe((0, m.n)(() => u.w), (0, f.W)(e => (E.warn("Failed to clear upload state", e), u.w)))
                }
            }
            var b = a(82080);
            let x = I.j.getLogger("UploadManager/Transport");
            class U extends Error {
                is4xx() {
                    return this.status >= 400 && this.status < 500
                }
                constructor(e, t) {
                    super(e), (0, s._)(this, "status", void 0), this.status = t, this.name = "UploadConfirmationError"
                }
            }
            class _ {
                uploadFile(e, t, a) {
                    return new b.c(s => {
                        let r = new XMLHttpRequest;
                        return r.open("PUT", e), r.onload = () => {
                            r.status >= 200 && r.status < 300 ? (s.next({
                                progress: {
                                    lengthComputable: !0,
                                    loaded: t.size,
                                    total: t.size,
                                    completed: !0
                                }
                            }), s.next({
                                completed: !0
                            }), s.complete()) : s.error(Error(`Upload failed: ${r.status} ${r.statusText}`))
                        }, r.onerror = () => {
                            s.error(Error("Network error during upload"))
                        }, r.upload.onprogress = e => {
                            x.debug("uploadFile onprogress", {
                                event: e,
                                fileId: a
                            }), e.lengthComputable && s.next({
                                progress: {
                                    lengthComputable: !0,
                                    loaded: e.loaded,
                                    total: e.total,
                                    completed: !1
                                }
                            })
                        }, r.setRequestHeader("Content-Type", "multipart/form-data"), r.send(t), () => {
                            r.abort()
                        }
                    })
                }
                uploadChunk(e, t, a, s) {
                    return new b.c(r => {
                        let l = new XMLHttpRequest;
                        return l.open("PUT", e), l.timeout = 6e4, l.onload = () => {
                            l.status >= 200 && l.status < 300 ? (r.next({
                                progress: {
                                    lengthComputable: !0,
                                    loaded: t.size,
                                    total: t.size,
                                    completed: !1
                                }
                            }), r.next({
                                response: new Response(l.responseText, {
                                    status: l.status,
                                    statusText: l.statusText
                                })
                            }), r.complete()) : r.error(Error(`Upload failed: ${l.status} ${l.statusText}`))
                        }, l.onerror = l.ontimeout = () => {
                            r.error(Error(`Network error uploading chunk ${a}`))
                        }, l.upload.onprogress = e => {
                            e.lengthComputable && r.next({
                                progress: {
                                    lengthComputable: !0,
                                    loaded: e.loaded,
                                    total: e.total,
                                    completed: !1
                                }
                            })
                        }, l.setRequestHeader("Content-Type", "multipart/form-data"), l.setRequestHeader("chunk", a.toString()), l.setRequestHeader("no", s.toString()), l.send(t), () => {
                            l.abort()
                        }
                    })
                }
                sendFinalConfirmation(e, t) {
                    return new b.c(a => (fetch(e, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "multipart/form-data",
                            chunk: t.toString(),
                            no: t.toString()
                        }
                    }).then(e => {
                        e.ok ? (x.debug("Final confirmation successful"), a.complete()) : a.error(new U(`Final confirmation failed: ${e.status} ${e.statusText}`, e.status))
                    }).catch(e => {
                        a.error(new U("Network error during final confirmation", null == e ? void 0 : e.code))
                    }), () => {}))
                }
            }
            var L = a(98391),
                F = a(9794);
            a(94969);
            var A = a(59797);
            let D = I.j.getLogger("UploadManager"),
                O = [...l.og, A.grpc.Code.DataLoss];

            function j(e) {
                return !!((null == e ? void 0 : e.code) && !O.includes(e.code))
            }
            class N {
                static getInstance() {
                    return N.instance || (N.instance = new N), N.instance
                }
                setTransport(e) {
                    this.transport = e
                }
                upload(e) {
                    let {
                        rid: t,
                        file: a,
                        filesDB: s
                    } = e;
                    D.info(`Starting upload for ${a.name} (${a.size} bytes)`);
                    let r = a.size > 131072 && !!e.concurrentChunks;
                    return D.info(`Use multi-chunk upload: ${r}`, {
                        concurrentChunks: e.concurrentChunks
                    }), (0, i.v)(async () => ({
                        state: await this.stateStore.get(t, s)
                    })).pipe((0, m.n)(a => {
                        let {
                            state: s
                        } = a, l = null == s ? void 0 : s.fileId;
                        return l ? (D.debug(`Found existing upload state for rid ${t}, fileId: ${l}`), this.resumeUpload(e, {
                            ...s,
                            fileId: l
                        })) : this.startFreshUpload(e, r)
                    }), (0, f.W)(e => {
                        D.error("Upload failed", e);
                        let t = function(e) {
                            if (e instanceof Error) return e;
                            let t = Error("string" == typeof(null == e ? void 0 : e.message) ? e.message : String(e));
                            return (null == e ? void 0 : e.code) != null && (t.code = e.code), t
                        }(e);
                        return (0, o.of)({
                            type: "error",
                            error: t
                        })
                    }))
                }
                startFreshUpload(e, t) {
                    let {
                        file: a,
                        exPeer: s,
                        contentType: r,
                        API: l,
                        rid: n,
                        filesDB: i
                    } = e, o = this.getSendTypeFromContentType(r), c = new TextDecoder;
                    return D.info("startFreshUpload", {
                        fileSize: a.size,
                        fileType: a.type,
                        hasPeer: !!s,
                        peerType: (null == s ? void 0 : s.type) ?? null,
                        sendType: o
                    }), (0, d.h)((0, p.H)((0, F.V3)(n)).pipe((0, M.Z)(e => ((0, L.$)("file_upload_attempt", l, {
                        file_hash: c.decode(e)
                    }, !1), u.w))), l.core.filesModule.getUploadUrl(a.size, a.name, a.type, s, o).pipe((0, S.h)({
                        initialInterval: 700,
                        maxInterval: 8e3,
                        shouldRetry: j
                    }), (0, h.M)(e => {
                        D.debug("Received upload URL", {
                            fileId: e.fileId,
                            chunkSize: e.chunkSize
                        })
                    }), (0, m.n)(a => {
                        let {
                            fileId: s,
                            url: r,
                            chunkSize: l
                        } = a, o = this.stateStore.setFileId(n, s, i), d = t && l ? this.uploadMultiChunk({
                            ...e,
                            url: r,
                            fileId: s,
                            chunkSize: l ?? 131072,
                            uploadedChunks: new Set
                        }) : this.uploadSingleChunk({
                            ...e,
                            url: r,
                            fileId: s
                        });
                        return (0, g.x)(o, d)
                    })))
                }
                resumeUpload(e, t) {
                    let {
                        API: a
                    } = e;
                    return a.core.filesModule.getResumeUrl(t.fileId, e.exPeer).pipe((0, S.h)({
                        initialInterval: 700,
                        maxInterval: 8e3,
                        shouldRetry: j
                    }), (0, m.n)(a => {
                        if (!a.canResume || !a.fileUrl) return D.warn("Cannot resume, starting fresh upload"), this.startFreshUpload(e, !0);
                        let {
                            url: s,
                            chunkSize: r
                        } = a.fileUrl;
                        D.info(`Resuming upload with ${t.uploadedChunks.size} chunks already uploaded`);
                        let l = this.emitResumeProgress(e.file.size, r ?? 131072, t.uploadedChunks.size, t.fileId),
                            n = this.uploadMultiChunk({
                                ...e,
                                url: s,
                                fileId: t.fileId,
                                chunkSize: r ?? 131072,
                                uploadedChunks: t.uploadedChunks
                            });
                        return (0, g.x)(l, n)
                    }), (0, f.W)(a => a.code === A.grpc.Code.AlreadyExists ? (D.info("File already uploaded"), (0, o.of)({
                        type: "completed",
                        fileId: t.fileId
                    })) : a.code === A.grpc.Code.DataLoss ? (D.warn("Data loss detected, starting fresh upload"), this.startFreshUpload(e, !0)) : a.code === A.grpc.Code.NotFound ? (D.warn("File not found, starting fresh upload"), this.startFreshUpload(e, !0)) : (0, c.$)(() => a)))
                }
                uploadSingleChunk(e) {
                    let {
                        file: t,
                        url: a,
                        fileId: s
                    } = e;
                    return D.debug("Using single-chunk upload strategy"), this.transport.uploadFile(a, t, s).pipe((0, v.T)(e => e.completed ? {
                        type: "completed",
                        fileId: s
                    } : e.progress ? {
                        type: "progress",
                        fileId: s,
                        progress: e.progress
                    } : null), (0, y.p)(e => null !== e), (0, S.h)({
                        initialInterval: 500,
                        maxInterval: 3e4,
                        maxRetries: 1 / 0
                    }))
                }
                uploadMultiChunk(e) {
                    let {
                        file: t,
                        url: a,
                        fileId: s,
                        chunkSize: r,
                        concurrentChunks: l = 3,
                        uploadedChunks: n,
                        rid: d,
                        filesDB: u
                    } = e;
                    D.debug(`Using multi-chunk upload strategy (${l} concurrent)`);
                    let h = function(e, t) {
                            let a = [],
                                s = 0,
                                r = 0;
                            for (; s < e.size;) {
                                let l = Math.min(s + t, e.size),
                                    n = e.slice(s, l);
                                a.push({
                                    blob: n,
                                    index: r,
                                    size: n.size
                                }), s = l, r++
                            }
                            return x.debug(`Created ${a.length} chunks for file ${e.name}`), a
                        }(t, r),
                        v = h.filter(e => !n.has(e.index));
                    D.info(`Uploading ${v.length} of total ${h.length} chunks`, s, d);
                    let I = Array.from(n).reduce((e, t) => {
                            var a;
                            return e + ((null == (a = h[t]) ? void 0 : a.size) || 0)
                        }, 0),
                        P = (0, p.H)(v).pipe((0, M.Z)(e => (D.debug(`Uploading chunk ${e.index}`, {
                            fileId: s,
                            rid: d
                        }), this.transport.uploadChunk(a, e.blob, e.index, h.length).pipe((0, k.XW)(), (0, S.h)({
                            initialInterval: 700,
                            maxInterval: 8e3
                        }), (0, y.p)(e => !!e.response), (0, m.n)(() => {
                            let a = this.stateStore.setChunkCompleted(d, e.index, u);
                            I += e.size;
                            let r = (0, o.of)({
                                type: "progress",
                                fileId: s,
                                progress: {
                                    lengthComputable: !0,
                                    loaded: I,
                                    total: t.size,
                                    completed: !1
                                }
                            });
                            return (0, g.x)(a, r)
                        }))), l), (0, T.u)()),
                        E = (0, i.v)(() => {
                            D.debug("All chunks uploaded, sending final confirmation", {
                                fileId: s,
                                rid: d
                            });
                            let r = (0, i.v)(() => this.transport.sendFinalConfirmation(a, h.length));
                            return (0, g.x)(r.pipe((0, S.h)({
                                initialInterval: 500,
                                maxInterval: 4e3,
                                shouldRetry: e => !(e instanceof U && e.is4xx())
                            }), (0, f.W)(t => t instanceof U && t.is4xx() ? (D.warn(`4xx error (${t.status}) in final confirmation, clearing state and restarting upload`), (0, g.x)(this.stateStore.clear(d, u), this.startFreshUpload(e, !0))) : (0, c.$)(() => t)), (0, w.w)()), this.stateStore.clear(d, u), (0, o.of)({
                                type: "progress",
                                fileId: s,
                                progress: {
                                    lengthComputable: !0,
                                    loaded: t.size,
                                    total: t.size,
                                    completed: !0
                                }
                            }), (0, o.of)({
                                type: "completed",
                                fileId: s
                            }))
                        });
                    return (0, g.x)(P, E)
                }
                emitResumeProgress(e, t, a, s) {
                    let r = Math.min(t * a, e);
                    return (0, o.of)({
                        type: "progress",
                        fileId: s,
                        progress: {
                            lengthComputable: !0,
                            loaded: r,
                            total: e,
                            completed: !1
                        }
                    })
                }
                getSendTypeFromContentType(e) {
                    switch (e) {
                        case n.cM.PHOTO:
                            return r.NT.SENDTYPE_PHOTO;
                        case n.cM.VIDEO:
                            return r.NT.SENDTYPE_VIDEO;
                        default:
                            return
                    }
                }
                clearUploadState(e, t) {
                    return D.info(`Clearing upload state for rid ${e}`), this.stateStore.clear(e, t)
                }
                constructor() {
                    (0, s._)(this, "stateStore", new C), (0, s._)(this, "transport", new _)
                }
            }(0, s._)(N, "instance", null);
            let R = N.getInstance()
        },
        2867: function(e, t, a) {
            a.d(t, {
                Uq: () => j,
                At: () => O
            });
            var s = a(20770),
                r = a(23031),
                l = a(69758),
                n = a(82080),
                i = a(44334),
                o = a(78893),
                d = a(41296),
                p = a(84748),
                u = a(19625),
                g = a(46896),
                c = a(3537),
                m = a(52545),
                f = a(34993),
                M = a(97474),
                h = a(44821),
                v = a(76432),
                y = a(74679),
                T = a(35133),
                w = a(54789),
                S = a(94757),
                I = a(80073),
                k = a(89855),
                P = a(32928),
                E = a(33222),
                C = a(21574),
                b = a(38221),
                x = a(12917),
                U = a(10366),
                _ = a(5497);
            let L = e => ({
                type: "UrlsReceived",
                urls: e
            });
            var F = a(69069);
            let A = I.j.getLogger("filesEpic:"),
                D = e => new n.c(t => {
                    let a = new XMLHttpRequest;
                    return a.open("GET", e), a.responseType = "blob", a.onloadend = function() {
                        t.next({
                            blob: this.response
                        }), t.complete()
                    }, a.onprogress = function(e) {
                        t.next({
                            progress: e
                        })
                    }, a.onerror = e => {
                        t.error(e)
                    }, a.send(), {
                        unsubscribe() {
                            a.abort()
                        }
                    }
                }),
                O = (e, t, a) => {
                    if (!P.Nz.includes(t)) return i.w;
                    let s = e.getKeyValue(U.Ev.TableSizes);
                    return s.get(t).pipe((0, m.Z)(e => {
                        let r = ((null == e ? void 0 : e.value) ?? 0) + a.size;
                        return s.put({
                            key: t,
                            value: r
                        }, t)
                    }))
                },
                j = (0, s.Ex)((e, t, a) => {
                    let {
                        API: n,
                        filesDB: p
                    } = a;
                    return e.pipe((0, s.gp)(k.$6.download.type), (0, c.p)(e => !(0, P.jv)(t.value, e.payload.fileLocation.fileId)), (0, m.Z)(t => {
                        let a = p.getKeyValue((0, P.VI)(t.payload.type)),
                            {
                                fileId: m
                            } = t.payload.fileLocation;
                        if (!m) return i.w;
                        let T = m.slice(0, 5);
                        return I.j.info(">>FilesLog", "Download start", T), a.get(m).pipe((0, f.n)(y => (I.j.info(">>FilesLog", "Download db check", T, "was in db", !!y), y && (y.size === t.payload.size || t.payload.ignoreFileSize)) ? (0, l.of)(k.$6.setFile({
                            fileId: m,
                            file: y
                        })) : (y && y.size !== t.payload.size && !t.payload.ignoreFileSize && (A.info("File size Not Equal to Original file size", t.payload.type, t.payload.size, y.size), (0, F.Zq)() || (0, b.wd)("File size Not Equal to Original file size" + t.payload.type)), n.core.filesModule.getFileDownloadUrl(t.payload.fileLocation).pipe((0, f.n)(n => (I.j.info(">>FilesLog", "Download url fetch", T, "has url", !!n.fileUrl), n.fileUrl) ? D((0, x.c$)(n.fileUrl.url, t.payload.fileName)).pipe((0, u.h)({
                            initialInterval: 500,
                            maxRetries: 10
                        }), (0, M.Q)(e.pipe((0, s.gp)(k.$6.abortDownload.type), (0, c.p)(e => e.payload.fileId === m)).pipe((0, h.$)())), (0, f.n)(e => {
                            let {
                                blob: s,
                                progress: n
                            } = e;
                            if (s) {
                                var u, c;
                                if (I.j.info(">>FilesLog", "Download file fetch", T, "size", s.size), s.size !== t.payload.size && !t.payload.ignoreFileSize) return (0, o.$)(() => `File size doesn't match!,
                          ${s.size},
                          ${t.payload.size}`);
                                let e = new File([s], t.payload.fileName, {
                                    type: t.payload.mimeType
                                });
                                return null == (u = (c = t.payload).onComplete) || u.call(c, e), (0, d.x)((0, r.h)((0, l.of)(_.n.downloadFinished), a.put(e, m), O(p, t.payload.type, e)).pipe((0, v.C)(i.w)), (0, l.of)(k.$6.setFile({
                                    fileId: m,
                                    file: s
                                }))).pipe((0, g.W)(e => (A.error("Database: failed to put. error = ", e), (0, o.$)(() => e))))
                            }
                            return t.payload.rid && n ? (0, l.of)(_.n.updateDownloadProgress({
                                rid: t.payload.rid,
                                progress: n
                            })) : i.w
                        })) : (0, o.$)(() => Error("File Download Url not found")))))), (0, y.Z)(k.$6.setLoading({
                            fileId: m,
                            value: !0
                        })), (0, g.W)(e => (A.error("Download Error", e), (0, r.h)((0, l.of)(k.$6.abortDownload({
                            fileId: m
                        })), (0, l.of)(k.$6.setError({
                            fileId: m,
                            error: e
                        }))))))
                    }))
                }, (e, t, a) => {
                    let {
                        filesDB: r
                    } = a;
                    return e.pipe((0, s.gp)(k.$6.checkFile.type), (0, c.p)(e => !(0, P.jv)(t.value, e.payload.fileId)), (0, m.Z)(e => r.getKeyValue((0, P.VI)(e.payload.type)).get(e.payload.fileId).pipe((0, f.n)(a => a && !(0, P.jv)(t.value, e.payload.fileId) ? (0, l.of)(k.$6.setFile({
                        file: a,
                        fileId: e.payload.fileId
                    })) : i.w))))
                }, (e, t, a) => {
                    let {
                        filesDB: r
                    } = a;
                    return e.pipe((0, s.gp)(k.$6.downloadAsset.type), (0, m.Z)(e => {
                        let t = r.getKeyValue((0, P.VI)(E.Fp.Assets)),
                            a = e.payload.url;
                        return t.get(a).pipe((0, f.n)(s => s ? (0, l.of)(s) : (0, l.of)(a).pipe((0, f.n)(a => D(a).pipe((0, u.h)({
                            initialInterval: 500,
                            maxRetries: 2
                        }), (0, f.n)(s => {
                            let {
                                blob: r
                            } = s;
                            if (!r) return i.w;
                            {
                                let s = new File([r], e.payload.fileName);
                                return t.put(s, a).pipe((0, T.T)(() => s))
                            }
                        }))))), (0, T.T)(e => k.$6.setFile({
                            fileId: a,
                            file: e
                        })), (0, y.Z)(k.$6.setLoading({
                            fileId: a,
                            value: !0
                        })), (0, g.W)(e => (I.j.error("Download", e), (0, l.of)(k.$6.setLoading({
                            fileId: a,
                            value: !1
                        })))))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s,
                        filesDB: r
                    } = a;
                    return s.core.auth.authState.pipe((0, c.p)(e => e === C.k.SignOutSuccess), (0, f.n)(() => (0, p.H)(Object.values(U.Ev)).pipe((0, S.H)(e => r.getKeyValue(e).clear().pipe((0, f.n)(() => i.w))), (0, g.W)(() => i.w))))
                }, (e, t, a) => {
                    let {
                        filesDB: l
                    } = a;
                    return e.pipe((0, s.gp)(k.$6.putFileInDB.type), (0, w.$)(e => e.payload.type), (0, m.Z)(e => e.pipe((0, S.H)(e => {
                        let t = l.getKeyValue((0, P.VI)(e.payload.type));
                        return (0, r.h)(O(l, e.payload.type, e.payload.value), t.put(e.payload.value, e.payload.key)).pipe((0, v.C)(i.w))
                    }))))
                }, (e, t, a) => {
                    let {
                        filesDB: l
                    } = a;
                    return e.pipe((0, s.gp)(_.go.clearFileDB.type), (0, m.Z)(e => {
                        let t = l.getKeyValue((0, P.VI)(e.payload)),
                            a = l.getKeyValue(U.Ev.TableSizes);
                        return (0, r.h)(t.clear(), a.put({
                            key: e.payload,
                            value: 0
                        }, e.payload)).pipe((0, v.C)(i.w))
                    }))
                }, (e, t, a) => {
                    let {
                        filesDB: r
                    } = a;
                    return e.pipe((0, s.gp)(_.go.getTableSizes.type), (0, m.Z)(() => r.getKeyValue(U.Ev.TableSizes).getAll().pipe((0, m.Z)(e => {
                        let t = new Map(e.map(e => {
                            let [, t] = e;
                            return [t.key, t.value]
                        }));
                        return (0, l.of)(_.go.setTableSizes(t))
                    }))))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return s.core.filesModule.bindToUrls.pipe((0, T.T)(L), (0, g.W)(e => (A.error("bindToFileUrls error", e), i.w)))
                })
        },
        45629: function(e, t, a) {
            a.d(t, {
                o: () => r
            });
            var s = a(56053);
            let r = {
                setIsRecording: (0, s.VP)("VoiceRecording/SetRecordState"),
                cancel: (0, s.VP)("VoiceRecording/Cancel"),
                error: (0, s.VP)("VoiceRecording/Error"),
                lock: (0, s.VP)("VoiceRecording/Lock"),
                prepare: (0, s.VP)("VoiceRecording/Prepare"),
                resume: (0, s.VP)("VoiceRecording/Resume"),
                review: (0, s.VP)("VoiceRecording/Review"),
                send: (0, s.VP)("VoiceRecording/Send"),
                start: (0, s.VP)("VoiceRecording/Start")
            }
        },
        46966: function(e, t, a) {
            a.d(t, {
                Bk: () => y,
                Sn: () => v
            });
            var s = a(56053),
                r = a(31855),
                l = a(33222),
                n = a(10391),
                i = a(33148),
                o = a(11790),
                d = a.n(o),
                p = a(27767),
                u = a(9569);
            a(81835), a(45629);
            var g = a(47002),
                c = a(58666),
                m = a(771);
            let f = new(d()),
                M = {
                    text: "",
                    inputType: (0, r.Fr)() ? "PlainText" : "HTML",
                    replyMessage: void 0,
                    editMessage: void 0,
                    keyboardType: "Text",
                    selection: {
                        start: 0,
                        end: 0,
                        shouldUpdate: !1
                    },
                    typing: !1,
                    recording: !1,
                    voiceRecorderState: 0
                },
                h = (0, s.Z0)({
                    name: "input",
                    initialState: M,
                    reducers: {
                        changeText(e, t) {
                            t.payload.isEdit && "" === t.payload.text ? e.text = t.payload.draftValue ?? "" : e.text = t.payload.text
                        },
                        setInputType(e, t) {
                            e.inputType = t.payload
                        },
                        setSelection(e, t) {
                            e.selection.start = t.payload.start, e.selection.end = t.payload.end
                        },
                        setShouldUpdateSelection(e, t) {
                            e.selection.shouldUpdate = t.payload
                        },
                        deleteText(e) {
                            let t, a, s = e.text,
                                {
                                    start: r,
                                    end: l
                                } = e.selection;
                            if (r === l) {
                                if (0 !== r) {
                                    let l = f.splitGraphemes(s.slice(0, r));
                                    l.length > 0 ? (t = r - l[l.length - 1].length, a = s.slice(0, t) + s.slice(r)) : (t = 0, a = ""), e.text = a, e.selection.start = t, e.selection.end = t
                                }
                            } else t = r - 1, e.text = s.slice(0, r) + s.slice(l), e.selection.start = t, e.selection.end = t;
                            e.selection.shouldUpdate = !0
                        },
                        addEmoji(e, t) {
                            let a = t.payload,
                                {
                                    start: s,
                                    end: r
                                } = e.selection,
                                l = e.text.substr(0, s) + a + e.text.substr(r);
                            e.selection.start = s + a.length, e.selection.end = s + a.length, e.selection.shouldUpdate = !p.pz, e.text = l
                        },
                        addMention(e, t) {
                            let a = e.text,
                                {
                                    start: s
                                } = e.selection,
                                {
                                    text: r
                                } = (0, u.Ix)(t.payload, a, s);
                            e.selection.start = s + r.length, e.selection.end = s + r.length, e.selection.shouldUpdate = !0, e.text = r
                        },
                        setReplyMessage(e, t) {
                            e.replyMessage = t.payload
                        },
                        setEditMessage(e, t) {
                            e.editMessage = t.payload, e.text = ""
                        },
                        removeReplyMessage(e) {
                            e.replyMessage = void 0
                        },
                        removeEditMessage(e) {
                            e.editMessage = void 0
                        },
                        toggleEmojiPanel(e, t) {
                            e.keyboardType = t.payload ? "Emoji" : "Text"
                        },
                        changeKeyboard(e, t) {
                            e.keyboardType = t.payload
                        },
                        resetInputData: (e, t) => ({
                            ...M,
                            text: t.payload ?? "",
                            inputType: e.inputType
                        })
                    },
                    extraReducers: e => {
                        e.addCase(g.NS.closeModal.type, e => {
                            var t;
                            (null == (t = e.editMessage) ? void 0 : t.type) !== l.cM.TEXT && (e.editMessage = void 0)
                        }), e.addCase("SetOwnerTypingState", (e, t) => {
                            e.typing = t.payload.typing
                        }), e.addCase("VoiceRecording/SetRecordState", (e, t) => {
                            e.recording = t.payload
                        }), e.addCase("VoiceRecording/Cancel", e => {
                            e.voiceRecorderState = 0
                        }), e.addCase("VoiceRecording/Error", e => {
                            e.voiceRecorderState = 0
                        }), e.addCase("VoiceRecording/Send", e => {
                            e.voiceRecorderState = 0
                        }), e.addCase("VoiceRecording/Start", e => {
                            e.voiceRecorderState = 3
                        }), e.addCase("VoiceRecording/Lock", e => {
                            e.voiceRecorderState = 3
                        }), e.addCase("VoiceRecording/Review", e => {
                            e.voiceRecorderState = 4
                        }), e.addCase("VoiceRecording/Resume", e => {
                            e.voiceRecorderState = 3
                        }), e.addCase("VoiceRecording/Prepare", e => {
                            e.voiceRecorderState = 1
                        }), e.addCase(m.iX.ReplaceHistory, (e, t) => {
                            if (t.payload.replaceType !== n.C.Open) return;
                            let a = t.payload.messages;
                            if (!a) return;
                            let {
                                message: s,
                                shouldRemove: r
                            } = (0, c.kB)(a);
                            r ? e.keyboardType = "Text" : s && (e.keyboardType = "ReplyMarkup")
                        }), e.addCase(i.i.NewMessages, (e, t) => {
                            var a, s;
                            if ((null == (a = t.currentPeer) ? void 0 : a.id) !== (null == (s = t.peer) ? void 0 : s.id)) return;
                            let {
                                message: r,
                                shouldRemove: l
                            } = (0, c.kB)(t.messages);
                            l ? e.keyboardType = "Text" : r && (e.keyboardType = "ReplyMarkup")
                        }), e.addCase(i.i.ClearChat, e => {
                            e.keyboardType = "Text"
                        })
                    }
                }),
                v = h.actions,
                y = h.reducer
        },
        36675: function(e, t, a) {
            a.d(t, {
                x: () => tm,
                p: () => tf
            });
            var s = a(33222),
                r = a(21574),
                l = a(3537),
                n = a(34993),
                i = a(97474),
                o = a(62025),
                d = a(20770),
                p = a(13274),
                u = a(10394),
                g = a(59001),
                c = a(87728),
                m = a(31622),
                f = a(19376),
                M = a(94823),
                h = a(7836),
                v = a(44334),
                y = a(69758),
                T = a(41296),
                w = a(84748),
                S = a(94757),
                I = a(52545),
                k = a(76432),
                P = a(33499),
                E = a(35133),
                C = a(46896),
                b = a(80073),
                x = a(45023),
                U = a(67071),
                _ = a(44656),
                L = a(11361),
                F = a(26306),
                A = a(77693),
                D = a(88365),
                O = a(22279),
                j = a(41062),
                N = a(2503);
            let R = b.j.getLogger("ForwardMessages"),
                H = [s.cM.SERVICE, s.cM.CALL, s.cM.GIFT_PACKET],
                Z = (e, t, a, s) => (0, T.x)(...a.map(a => z(e, t, s, a.map(e => ({
                    ...e
                }))))),
                z = (e, t, a, s) => {
                    var r;
                    let l = null == (r = s[0].groupedId) ? void 0 : r.value;
                    if (l && !s[0].quotedMessage && s.length > 1) {
                        let r = (0, M.YQ)(t, a);
                        return e.core.messaging.sendMultiMediaMessage(r, s, t, l).pipe((0, E.T)(() => void 0))
                    }
                    let n = (e => {
                        let t = [],
                            a = 0;
                        for (let s of e) t[a] ? t[a][0].quotedMessage && s.quotedMessage ? t[a].push(s) : t[++a] = [s] : t[a] = [s];
                        return t
                    })(s);
                    return (0, w.H)(n).pipe((0, S.H)(r => r[0].quotedMessage ? (R.info("forwardMessages each req: ", r.map(g.dF)), e.core.messaging.forwardMessages(t, a, r, l).pipe((0, E.T)(() => void 0), W(t, s))) : (R.info("sendtext or document each req: ", r.map(g.dF)), (0, w.H)(r).pipe((0, S.H)(s => e.core.messaging.sendDocumentMessage(t, s, a, void 0).pipe((0, E.T)(() => void 0)))))))
                },
                W = (e, t) => (0, C.W)(a => (R.error("ForwardMessage", a), (0, w.H)(t.map(t => o.on.messageFailed(e, t))))),
                V = (e, t, a) => {
                    var s;
                    return (0, u.H7)(e) && (null == (s = e.quotedMessage) ? void 0 : s.publicGroupId) != null ? e.quotedMessage : (0, x._3)(e, t, 0, (0, U.t)((0, _.fX)(a.value, t.id)))
                };
            var $ = a(22169);
            let B = b.j.getLogger("MessagingEpics");
            var Y = a(41817),
                q = a(54789),
                G = a(42442),
                K = a(10208),
                X = a(41129),
                Q = a(34164),
                J = a(35159);
            let ee = b.j.getLogger("MessagingEpics");
            var et = a(63438),
                ea = a(30252),
                es = a(771),
                er = a(75097);
            let el = b.j.getLogger("MessagingEpics"),
                en = (e, t) => es.sM.inlineButtonLoading({
                    buttonId: t,
                    peer: e
                });
            var ei = a(23031),
                eo = a(36595),
                ed = a(40935);
            let ep = b.j.getLogger("MessagingEpics");
            var eu = a(76421);
            let eg = b.j.getLogger("MessagingEpics");
            var ec = a(66507);
            let em = b.j.getLogger("MessagingEpics");
            var ef = a(44360),
                eM = a(101),
                eh = a.n(eM),
                ev = a(65952),
                ey = a(41420),
                eT = a(87303),
                ew = a(78893),
                eS = a(92023),
                eI = a(29728),
                ek = a(10492),
                eP = a(27662),
                eE = a(97244),
                eC = a(78130),
                eb = a(32928),
                ex = a(33414),
                eU = a(92810),
                e_ = a(21452),
                eL = a(52484),
                eF = a(5497),
                eA = a(89855);
            let eD = e => e.includes("video") ? s.cM.VIDEO : s.cM.PHOTO;
            var eO = a(38221),
                ej = a(41799),
                eN = a(81835),
                eR = a(12314),
                eH = a(54937),
                eZ = a(27192),
                ez = a(2867),
                eW = a(37284),
                eV = a(50004),
                e$ = a(8529),
                eB = a(73088),
                eY = a(24187);
            let eq = b.j.getLogger("ScheduleAlbumUtils"),
                eG = b.j.getLogger("MultiMediaMessagesEpics"),
                eK = (e, t, a) => {
                    let s = a ?? (0, $.z)(e.value);
                    return (0, eT.p)(t.map(t => {
                        let a = eD(t.file.type);
                        return (0, Y.Bc)(t.file, a).pipe((0, n.n)(r => {
                            if (!r) return v.w;
                            let l = (0, A.H4)(e.value).toString(),
                                n = (0, L._b)(s, e.value) === c.m4.EXPEERTYPE_CHANNEL ? s.id.toString() : l;
                            return (0, ec.fN)(n, {
                                ...t,
                                file: r
                            }, a, t.caption, (0, x.li)(e.value, t.caption)).pipe((0, E.T)(e => ({
                                document: e,
                                file: r
                            })))
                        }))
                    })).pipe((0, E.T)(a => {
                        let r = [],
                            l = [];
                        a.forEach(e => {
                            r.push(e.document), l.push(e.file)
                        });
                        let n = t[0].replyMessage && (0, x._3)(t[0].replyMessage, s, 1),
                            i = Date.now(),
                            o = (0, p.$C)();
                        return {
                            messageContainers: r.map((t, a) => ({
                                ...tm(eD(t.mimeType), e, void 0, i + a),
                                message: {
                                    documentMessage: t
                                },
                                quotedMessage: n,
                                groupedId: {
                                    value: o
                                },
                                hasComment: a == r.length - 1 && (0, G.kB)(e.value, s)
                            })),
                            files: l,
                            peer: s
                        }
                    }))
                },
                eX = (e, t) => e.getKeyValue((0, eb.VI)(t)),
                eQ = (e, t, a, r, o, p, u, g, c) => {
                    let m = (0, ey.R)(a.value, o),
                        f = p.map((p, g) => {
                            var f;
                            let M, h, S, P, b = void 0 === c ? u[g].rid : c[g];
                            return eG.info("Document uploadMedia start: before request fileUrl", b), ((0, e_.L4)(eL.TO.NewUploadManager, (0, eU.t2)(a.value)) ? (M = eD(p.type) === s.cM.PHOTO ? s.cM.PHOTO : s.cM.VIDEO, !m && eG.warn("[NewUploadManager] exPeer is undefined", {
                                rid: b
                            }), h = (0, eU.JS)(a.value), S = e => ex.Hm.upload({
                                rid: b,
                                file: e,
                                exPeer: m,
                                contentType: M,
                                filesDB: r,
                                API: t,
                                concurrentChunks: h
                            }).pipe((0, I.Z)(t => {
                                switch (t.type) {
                                    case "progress":
                                        return (0, y.of)(eF.Fb.updateUploadProgress({
                                            rid: b,
                                            fileId: t.fileId,
                                            progress: t.progress
                                        }));
                                    case "completed":
                                        return (0, y.of)(eF.Fb.updateUploadProgress({
                                            rid: b,
                                            fileId: t.fileId,
                                            progress: {
                                                lengthComputable: !0,
                                                total: e.size,
                                                loaded: e.size,
                                                completed: !0
                                            }
                                        }));
                                    case "error":
                                        return (0, ew.$)(() => t.error)
                                }
                            }), (0, C.W)(e => (eG.error("[NewUploadManager] upload failed", e), (0, ew.$)(() => e)))), f ? (0, eS.v)(() => (0, Y.t2)(f, p.name)).pipe((0, n.n)(e => S(e)), (0, C.W)(e => (eG.error("fetchFile error = ", e), (0, ew.$)(() => e)))) : S(p)) : (P = eD(p.type) === s.cM.PHOTO, t.core.filesModule.getUploadUrl(p.size, p.name, p.type, m, P ? eR.NT.SENDTYPE_PHOTO : eR.NT.SENDTYPE_VIDEO).pipe((0, C.W)(e => (eG.error("getUploadUrl error = ", e), (0, ew.$)(() => e))), (0, n.n)(e => f ? (0, eS.v)(() => (0, Y.t2)(f, p.name)).pipe((0, E.T)(t => ({
                                response: e,
                                file: t
                            })), (0, C.W)(e => (eG.error("fetchFile error = ", e), (0, ew.$)(() => e)))) : (0, y.of)({
                                response: e,
                                file: p
                            })), (0, n.n)(e => {
                                let {
                                    response: {
                                        fileId: t,
                                        url: a
                                    },
                                    file: s
                                } = e;
                                return (0, eb.Se)(a, s).pipe((0, n.n)(e => {
                                    var a, s, r, l;
                                    return (0, y.of)(eF.Fb.updateUploadProgress({
                                        rid: b,
                                        fileId: t,
                                        progress: {
                                            lengthComputable: (null == (a = e.progress) ? void 0 : a.lengthComputable) ?? !1,
                                            total: (null == (s = e.progress) ? void 0 : s.total) ?? -1,
                                            loaded: (null == (r = e.progress) ? void 0 : r.loaded) ?? -1,
                                            completed: (null == (l = e.progress) ? void 0 : l.completed) ?? !1
                                        }
                                    }))
                                }), (0, C.W)(e => (eG.error("switchMap upload error = ", e), (0, ew.$)(() => e))))
                            })))).pipe((0, i.Q)(e.pipe((0, d.gp)("Messages/AbortUploadMultiMedia"), (0, l.p)(e => e.payload.fileId === b))), (0, n.n)(e => {
                                let a, l;
                                return (eG.info("Document uploaded!", b, e.payload.progress.completed, e.payload.progress), e.payload.progress.completed) ? (0, T.x)((a = eX(r, eD(p.type)), l = e.payload.fileId, a.delete(b).pipe((0, C.W)(e => (eG.error("delete files error:", e), v.w)), (0, I.Z)(() => (0, ei.h)((0, ez.At)(r, p.type === s.cM.VIDEO ? p.type : s.cM.PHOTO, p), a.put(p, l)).pipe((0, k.C)(v.w))))), t.core.messaging.updateDocumentMessage(o, b, {
                                    isUploading: !1,
                                    fileId: e.payload.fileId
                                }).pipe((0, k.C)(v.w)), (0, w.H)([(0, eF.Ey)({
                                    documentId: b,
                                    fileId: e.payload.fileId,
                                    peer: o
                                }), eA.$6.checkFile({
                                    fileId: e.payload.fileId,
                                    type: eD(p.type)
                                })])) : (0, y.of)(e)
                            }), (0, ek.u)())
                        }),
                        M = (0, ei.h)(...f).pipe((0, ek.u)()),
                        h = M.pipe((0, l.p)(e => "Files/UploadFinished" === e.type), (0, eP.S)((e, t) => (e.results.push(t), e), {
                            results: []
                        }), (0, l.p)(e => e.results.length === f.length), (0, E.T)(e => e.results), (0, ek.u)()),
                        S = h.pipe((0, eE.u)(eN.KL.stopTypingInterval({
                            peer: o,
                            type: ev.a7.TYPINGTYPE_SENDINGALBUM
                        })), (0, C.W)(() => (0, y.of)(eN.KL.stopTypingInterval({
                            peer: o,
                            type: ev.a7.TYPINGTYPE_SENDINGALBUM
                        })))),
                        P = h.pipe((0, n.n)(() => {
                            let e = u.map(e => e.rid).map(e => {
                                    var t;
                                    return null == (t = (0, ed.OV)(a.value, o)) ? void 0 : t.messages.find(t => t.rid === e)
                                }).filter(Boolean),
                                s = e.map(e => {
                                    var t, a;
                                    return null == (a = e.message) || null == (t = a.documentMessage) ? void 0 : t.fileId
                                });
                            if (s && s.length > 1) return e0(t, e, o, g);
                            if (1 === s.length) {
                                eG.warn("Send single document message", s);
                                let r = e[0];
                                return r = eJ(r, void 0), g || (g = (0, L._b)(o, a.value)), e1(t, o, r, g)
                            }
                            return eG.warn("FileIds array is empty", s), (0, y.of)(void 0)
                        }), (0, C.W)(e => (eG.error("Upload failed for some files. Not sending album message.", e), (0, ew.$)(() => Error(eH.Y.formatMessage("attachment.error_send_multi_media_failed"))))), (0, ek.u)());
                    return (0, ei.h)((0, y.of)(eN.KL.startTypingInterval({
                        peer: o,
                        type: ev.a7.TYPINGTYPE_SENDINGALBUM
                    })), M, S, P.pipe((0, eE.u)(eN.KL.stopTypingInterval({
                        peer: o,
                        type: ev.a7.TYPINGTYPE_SENDINGALBUM
                    })), e3(o, u[u.length - 1])))
                },
                eJ = (e, t) => ({
                    ...e,
                    groupedId: void 0 !== t ? {
                        value: t
                    } : void 0
                }),
                e0 = (e, t, a, s) => {
                    var r;
                    let l = null == (r = t[0].groupedId) ? void 0 : r.value;
                    return e.core.messaging.sendMultiMediaMessage((0, M.YQ)(a, s), t, a, l ?? "").pipe((0, eC.M)(e => {
                        eG.info("sendMultiMediaMessage request", l, e);
                        let a = t.find(e => {
                            var t;
                            return !(null == (t = e.message) ? void 0 : t.documentMessage)
                        });
                        if (a) {
                            let e = (0, ej.H7)(a),
                                t = a.type.toString();
                            e ? (0, eO.wd)("sendMultiMedia with null Forwarded Document: ".concat(t)) : (0, eO.wd)("sendMultiMedia with null not Forwarded Document: ".concat(t))
                        }
                    }), (0, C.W)(e => (eG.error("sendMultiMediaMessage:", e), (0, y.of)(void 0))), (0, eE.u)(void 0))
                },
                e1 = (e, t, a, s) => (e.core.messaging.updateHistoryMessage(t, a), e.core.messaging.updateDBPendingMessage(t, a).pipe((0, n.n)(() => e.core.messaging.sendDocumentMessage(t, a, s, void 0)), (0, C.W)(e => (eG.error("sendSingleDocumentMessage:", e), v.w)), (0, n.n)(() => v.w))),
                e3 = (e, t) => (0, C.W)(a => {
                    if ("EmptyError" === a.name) return eG.error("Send MultiMedia", a), v.w;
                    eG.error("Send MultiMedia", a);
                    let s = (null == a ? void 0 : a.code) === 3 || (null == a ? void 0 : a.message) === "File size exceeded limit";
                    return eZ.oR.info(eH.Y.formatMessage(s ? "attachment.error_file_size_exceeded" : "attachment.error_send_multi_media_failed")), (0, y.of)(o.on.messageFailed(e, t), eN.KL.stopTypingInterval({
                        peer: e,
                        type: ev.a7.TYPINGTYPE_SENDINGALBUM
                    }))
                }),
                e4 = b.j.getLogger("SendLocationEpic");
            var e2 = a(65988),
                e5 = a(20592),
                e7 = a(90583);
            let e6 = b.j.getLogger("PinMessages"),
                e8 = (0, d.Ex)((e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, d.gp)("Messages/LoadPinnedMessages"), (0, n.n)(e => s.core.messaging.loadPinMessages(e.payload.exPeer).pipe((0, eC.M)(e => e6.info("response loadPinMessages", e)), (0, E.T)(t => e5.cx.setPinMessages({
                        peer: (0, M.K2)(e.payload.exPeer),
                        messages: t
                    })), (0, C.W)(e => (e6.error("error loading pin messages", e), v.w)))))
                }, (e, t, a) => {
                    let {
                        API: s,
                        intl: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/PinMessage"), (0, n.n)(e => {
                        let t = e.payload.message;
                        return s.core.messaging.pinMessage(e.payload.exPeer, t, e.payload.justMine).pipe((0, n.n)(() => ((0, D.P)(r.formatMessage("been_pinned_message") ?? "", {
                            icon: e7.y
                        }), v.w)), (0, C.W)(e => (e6.error("error pin message", e), v.w)))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, d.gp)("Messages/UnPinMessage"), (0, n.n)(e => s.core.messaging.unPinMessage(e.payload.exPeer, e.payload.messageId, e.payload.all).pipe((0, n.n)(() => v.w), (0, C.W)(e => (e6.error("error unPin message", e), v.w)))))
                }),
                e9 = b.j.getLogger("MessagingEpics");
            var te = a(74679),
                tt = a(44894);
            let ta = b.j.getLogger("SchedulerEpics"),
                ts = b.j.getLogger("SchedulerEpics"),
                tr = e => e.startsWith("-"),
                tl = b.j.getLogger("SchedulerEpics");
            var tn = a(99263);
            let ti = b.j.getLogger("SchedulerEpics"),
                to = b.j.getLogger("SchedulerEpics"),
                td = b.j.getLogger("SchedulerEpics"),
                tp = (0, d.Ex)((e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, X.i)(e$.nf.getChatScheduledMessages), (0, n.n)(() => {
                        let e = t.value,
                            a = (0, $.z)(e);
                        if (!a) return (0, y.of)(e$.XZ.setLoadingTasks(!1));
                        let r = (0, h.LP)(a),
                            l = (0, L.jq)(a, e);
                        return s.core.scheduler.listTasks(l, eB.dy.TASK_TYPE_UNKNOWN, eB.e1.TASK_STATUS_UNKNOWN).pipe((0, n.n)(e => (ta.info("get chat scheduled message response:", e.tasks.length), 0 === e.tasks.length) ? (0, y.of)(e$.XZ.setScheduledTasks({
                            uid: r,
                            tasks: []
                        }), e$.XZ.removePeerFromScheduledTasks(a.id)) : (0, y.of)(e$.XZ.setScheduledTasks({
                            uid: r,
                            tasks: e.tasks
                        }))), (0, C.W)(e => (ta.error("failed to get chat scheduled messages", e), v.w)), (0, te.Z)(e$.XZ.setLoadingTasks(!0)), (0, tt.q)(e$.XZ.setLoadingTasks(!1)))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s,
                        intl: r
                    } = a;
                    return e.pipe((0, X.i)(e$.nf.unScheduleTask), (0, I.Z)(e => {
                        let {
                            uid: a,
                            taskIds: l
                        } = e.payload, i = l.filter(tr), o = l.filter(e => !tr(e));
                        return (i.length > 0 && ts.info("Removing local uploading tasks:", i), 0 === o.length) ? (0, Q.EB)(t.value, a, i) : s.core.scheduler.unScheduleTask(o).pipe((0, n.n)(e => {
                            let s = e.failedTaskIDs.length,
                                l = new Set(e.failedTaskIDs),
                                n = o.filter(e => !l.has(e));
                            return s > 0 && (ts.warn(`${s} task(s) failed to unschedule`, e.failedTaskIDs), (0, D.P)(r.formatMessage("scheduled.unschedule_failed_count", {
                                count: r.formatNumber(String(s))
                            }))), (0, Q.EB)(t.value, a, [...i, ...n])
                        }), (0, C.W)(e => (ts.error("Failed to unschedule tasks", e), i.length > 0) ? (0, Q.EB)(t.value, a, i) : v.w))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, X.i)(e$.nf.executeTaskNow), (0, I.Z)(e => {
                        let t = e.payload;
                        return s.core.scheduler.executeTaskNow(t.taskId).pipe((0, E.T)(() => (tl.info("Task executed successfully:", t.taskId), e$.XZ.removeScheduledTasks({
                            uid: t.uid,
                            taskIds: [t.taskId]
                        }))), (0, C.W)(e => (tl.error("Failed to execute task", e), v.w)))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s,
                        intl: r
                    } = a;
                    return e.pipe((0, X.i)(e$.nf.reScheduleMessage), (0, I.Z)(e => {
                        var a, l, n;
                        let i = e.payload,
                            o = t.value,
                            d = (0, tn.pj)(o, i.uid).find(e => e.taskId === i.taskId);
                        if (!d) return ti.warn("Task not found:", i.taskId), v.w;
                        let p = d.payload,
                            u = void 0 !== i.newText;
                        if (ti.info("Rescheduling task:", i.taskId, i.scheduledAt), !p) return ti.error("Task payload is missing for task:", i.taskId), v.w;
                        if (u) {
                            let e = p.taskSendMessage,
                                t = null == e ? void 0 : e.sendMessage,
                                a = null == t ? void 0 : t.message;
                            if (!a) return ti.error("Task payload or message is missing for task:", i.taskId), v.w;
                            if (a.documentMessage) {
                                let s = null == (l = a.documentMessage.caption) ? void 0 : l.mentions;
                                p = {
                                    taskSendMessage: {
                                        sendMessage: {
                                            ...t,
                                            message: {
                                                documentMessage: {
                                                    ...a.documentMessage,
                                                    caption: {
                                                        ...a.documentMessage.caption,
                                                        text: i.newText,
                                                        mentions: s || []
                                                    }
                                                }
                                            }
                                        },
                                        quotedMessage: (null == e ? void 0 : e.quotedMessage) || []
                                    }
                                }
                            } else {
                                let s = null == (n = a.textMessage) ? void 0 : n.mentions;
                                p = {
                                    taskSendMessage: {
                                        sendMessage: {
                                            ...t,
                                            message: {
                                                textMessage: {
                                                    ...a.textMessage,
                                                    text: i.newText,
                                                    mentions: s || []
                                                }
                                            }
                                        },
                                        quotedMessage: (null == e ? void 0 : e.quotedMessage) || []
                                    }
                                }
                            }
                        }
                        let g = u && (null == (a = d.scheduledAt) ? void 0 : a.getTime()) === i.scheduledAt.getTime();
                        return s.core.scheduler.reScheduleTask(i.taskId, i.scheduledAt, p).pipe((0, E.T)(() => {
                            ti.info("Task rescheduled successfully:", i.taskId);
                            let e = g ? r.formatMessage("schedule_message.edit_success") : r.formatMessage("schedule_message.reschedule_success");
                            (0, D.P)(e);
                            let t = {
                                ...d,
                                scheduledAt: i.scheduledAt,
                                payload: p
                            };
                            return e$.XZ.updateScheduledTask({
                                uid: i.uid,
                                oldTaskId: i.taskId,
                                task: t
                            })
                        }), (0, C.W)(e => (ti.error("Failed to reschedule task", e), (0, D.P)(r.formatMessage("schedule_message.reschedule_error")), v.w)))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, X.i)(e$.nf.removeMediaFromScheduledAlbum), (0, I.Z)(e => {
                        var a, r, l, n;
                        let {
                            uid: i,
                            taskId: o,
                            removedRandomIds: d
                        } = e.payload, p = t.value, u = (0, tn.pj)(p, i).find(e => e.taskId === o);
                        if (!u) return td.warn("Task not found for partial album removal:", o), v.w;
                        if (u.taskType !== eB.dy.TASK_TYPE_MULTI_MEDIA_MESSAGE_SEND) return td.warn("Task is not a multi-media task:", o), v.w;
                        let g = null == (r = u.payload) || null == (a = r.taskSendMultiMediaMessage) ? void 0 : a.sendMultiMediaMessage;
                        if (!g) return td.warn("Task has no multi-media payload:", o), v.w;
                        let c = new Set(d),
                            m = g.multiMedia.filter(e => !c.has(e.randomId));
                        if (0 === m.length) return (0, Q.EB)(p, i, [o]);
                        let f = u.scheduledAt ?? new Date,
                            M = {
                                taskSendMultiMediaMessage: {
                                    sendMultiMediaMessage: {
                                        ...g,
                                        multiMedia: m
                                    },
                                    quotedMessage: null == (n = u.payload) || null == (l = n.taskSendMultiMediaMessage) ? void 0 : l.quotedMessage
                                }
                            };
                        return s.core.scheduler.reScheduleTask(o, f, M).pipe((0, E.T)(() => {
                            td.info("Album rescheduled after partial media removal:", o, `removed ${d.length}, remaining ${m.length}`);
                            let e = {
                                ...u,
                                payload: M
                            };
                            return e$.XZ.updateScheduledTask({
                                uid: i,
                                oldTaskId: o,
                                task: e
                            })
                        }), (0, C.W)(e => (td.error("Failed to reschedule album after partial removal", e), v.w)))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return s.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => s.core.scheduler.peersWithScheduleTask().pipe((0, n.n)(e => (to.info("getPeersWithScheduledTasks response", e), (0, y.of)(e$.XZ.setPeersWithScheduledTasks(e.exPeer)))), (0, C.W)(e => (to.error("failed to get peers with scheduled tasks", e), v.w)))))
                }),
                tu = e => `${e.type}_${e.id}`,
                tg = new Map,
                tc = b.j.getLogger("RetrySendDocumentEpic"),
                tm = (e, t, a, r) => {
                    var l;
                    let n = (0, p.$C)(),
                        i = null == (l = (0, ef.rT)(t.value)) ? void 0 : l.date,
                        o = r || Math.max(Date.now(), i ? i + 1 : 0),
                        d = (0, A.H4)(t.value),
                        u = (0, e2.dt)(t.value, d);
                    return {
                        ...a || (0, eu.cw0)(),
                        rid: n,
                        date: o,
                        state: s.Zu.Pending,
                        senderUid: u.id,
                        isOut: !0,
                        reactions: [],
                        type: e
                    }
                },
                tf = (0, d.Ex)((e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return s.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => s.core.messaging.bindToEvents().pipe((0, i.Q)(e.pipe((0, d.gp)("Messages/UnbindUpdates"))))))
                }, Y.ES, Y.j8, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/SendFaleHafezMessage"), (0, E.T)(e => (0, x.m6)(t.value, e)), (0, I.Z)(e => {
                        let a = (0, A.H4)(t.value),
                            l = (0, K.dt)(t.value, a),
                            n = (0, $.z)(t.value);
                        return (0, ec.fN)(e.payload.attachment.uploadedFile.accessHash, e.payload.attachment, s.cM.PHOTO, e.payload.attachment.caption).pipe((0, I.Z)(a => {
                            let i = {
                                    ...(0, eu.cw0)(),
                                    rid: e.rid,
                                    date: e.date,
                                    message: {
                                        documentMessage: {
                                            ...a,
                                            fileId: e.payload.attachment.uploadedFile.fileId
                                        }
                                    },
                                    state: s.Zu.Pending,
                                    senderUid: l.id,
                                    isOut: !0,
                                    reactions: [],
                                    type: s.cM.PHOTO
                                },
                                d = (0, L._b)(n, t.value);
                            return r.core.messaging.addPendingMessages(n, void 0, [i]).pipe((0, I.Z)(() => r.core.messaging.sendDocumentMessage(n, i, d, void 0).pipe((0, k.C)(v.w), (0, C.W)(e => (em.error("Send Fale Hafez Mesasge", e), (0, y.of)(o.on.messageFailed(n, i)))))))
                        }))
                    }))
                }, Y.o4, Y.$1, (e, t, a) => {
                    let {
                        API: s,
                        intl: r
                    } = a;
                    return e.pipe((0, X.i)(o.on.sendTextMessage), (0, l.p)(e => "" !== e.payload.text), (0, E.T)(e => (0, x.m6)(t.value, e)), (0, q.$)(() => {
                        var e;
                        return null == (e = (0, $.z)(t.value)) ? void 0 : e.id
                    }), (0, I.Z)(e => e.pipe((0, I.Z)(e => {
                        let a = (0, A.H4)(t.value),
                            l = (0, K.dt)(t.value, a),
                            n = (0, $.z)(t.value),
                            i = e.payload.thread ?? (0, N.$j)(t.value),
                            d = e.payload.scheduledAt,
                            p = null != d,
                            u = (0, J.NC)(t.value, n.id);
                        return (0, x.$S)(s, n, i, e.payload.replyMessage, null == u ? void 0 : u.topicId).pipe((0, I.Z)(a => {
                            let u = (0, j.x)(e.payload.text, e.rid, e.date, (0, x.li)(t.value, e.payload.text), l.id, a && (0, x._3)(a, n, 1));
                            u.hasComment = (0, G.kB)(t.value, n);
                            let g = (0, L.jq)(n, t.value),
                                c = g.type;
                            if (p) return (0, Q.xp)({
                                peer: n,
                                exPeer: g,
                                message: u.message,
                                rid: u.rid,
                                scheduledAt: d,
                                quotedMessageReference: (0, Q.er)(u),
                                quotedMessages: u.quotedMessage ? [u.quotedMessage] : [],
                                scheduler: s.core.scheduler,
                                formatMessage: r.formatMessage,
                                successMessageKey: "schedule_message.success",
                                errorMessageKey: "schedule_message.error"
                            });
                            let m = void 0 != i;
                            return s.core.messaging.addPendingMessages(n, i, [u], !m).pipe((0, I.Z)(() => s.core.messaging.sendTextMessage(u, n, c, i).pipe((0, k.C)(v.w), (0, C.W)(e => (ee.error("Send Text Message", e), (0, y.of)(o.on.messageFailed(n, u)))))))
                        }))
                    }))))
                }, (e, t, a) => {
                    let {
                        API: i
                    } = a;
                    return i.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => i.core.messaging.getAllPendingMessages()), (0, n.n)(e => {
                        let a = (0, x.kE)(e, [s.cM.TEXT]);
                        return 0 === a.size ? v.w : (0, w.H)(a).pipe((0, I.Z)(e => {
                            let [a, s] = e;
                            ee.debug("Pending texts", a, s.map(g.dF));
                            let r = (0, h.TU)(a),
                                l = s.sort((e, t) => e.date - t.date);
                            return i.core.messaging.addPendingMessages(r, void 0, l).pipe((0, I.Z)(() => (0, w.H)(l).pipe((0, S.H)(e => {
                                var a, s;
                                return (null == (s = e.message) || null == (a = s.textMessage) ? void 0 : a.text) == null ? i.core.messaging.updateMessagesOnDeletePendingMessage(r, [e.rid]).pipe((0, n.n)(() => v.w)) : i.core.messaging.addPendingMessages(r, void 0, [e]).pipe((0, I.Z)(() => {
                                    let a = (0, L.jq)(r, t.value).type;
                                    return i.core.messaging.sendTextMessage(e, r, a).pipe((0, k.C)(v.w), (0, C.W)(t => (ee.error("Send Text Mesasge", t), (0, y.of)(o.on.messageFailed(r, e)))))
                                }))
                            }), (0, C.W)(e => (ee.error("Send Text Mesasge", e), v.w)))))
                        }))
                    }))
                }, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/SendLocationMessage"), (0, l.p)(e => {
                        let {
                            payload: t
                        } = e;
                        return !isNaN(t.location.latitude) && !isNaN(t.location.longitude)
                    }), (0, E.T)(e => (0, x.m6)(t.value, e)), (0, q.$)(() => {
                        var e;
                        return null == (e = (0, $.z)(t.value)) ? void 0 : e.id
                    }), (0, I.Z)(e => {
                        let a = e.pipe((0, I.Z)(e => {
                                let a = (0, A.H4)(t.value),
                                    l = (0, $.z)(t.value),
                                    n = (0, N.$j)(t.value);
                                return (0, x.$S)(r, l, n, e.payload.replyMessage).pipe((0, E.T)(r => {
                                    let i = {
                                        ...(0, eu.cw0)(),
                                        rid: e.rid,
                                        date: e.date,
                                        message: {
                                            jsonMessage: {
                                                rawJson: JSON.stringify({
                                                    dataType: "location",
                                                    data: {
                                                        location: e.payload.location
                                                    }
                                                })
                                            }
                                        },
                                        state: s.Zu.Pending,
                                        senderUid: a,
                                        isOut: !0,
                                        reactions: [],
                                        type: s.cM.LOCATION,
                                        quotedMessage: r && (0, x._3)(r, l, 1),
                                        hasComment: (0, G.kB)(t.value, l)
                                    };
                                    return {
                                        peer: l,
                                        messageContainer: i,
                                        thread: n,
                                        repliedMessage: r
                                    }
                                }))
                            }), (0, S.H)(e => {
                                let {
                                    peer: t,
                                    messageContainer: a,
                                    thread: s
                                } = e, l = void 0 != s;
                                return r.core.messaging.addPendingMessages(t, s, [a], !l).pipe((0, E.T)(() => ({
                                    peer: t,
                                    messageContainer: a,
                                    thread: s
                                })))
                            }), (0, ek.u)()),
                            l = a.pipe((0, S.H)(e => {
                                let {
                                    messageContainer: a,
                                    peer: s,
                                    thread: l
                                } = e, n = (0, L._b)(s, t.value);
                                return r.core.messaging.sendTextMessage(a, s, n, l).pipe((0, k.C)(v.w), (0, C.W)(e => (e4.error("Send Location Mesasge", e), (0, y.of)(o.on.messageFailed(s, a)))))
                            }));
                        return (0, ei.h)(a.pipe((0, n.n)(() => v.w)), l)
                    }))
                }, (e, t, a) => {
                    let {
                        API: i
                    } = a;
                    return i.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => i.core.messaging.getAllPendingMessages()), (0, n.n)(e => {
                        let a = (0, x.kE)(e, [s.cM.LOCATION]);
                        return 0 === a.size ? v.w : (0, w.H)(a).pipe((0, I.Z)(e => {
                            let [a, s] = e, r = (0, h.TU)(a), l = s.sort((e, t) => e.date - t.date);
                            return i.core.messaging.addPendingMessages(r, void 0, l).pipe((0, I.Z)(() => (0, w.H)(l).pipe((0, S.H)(e => {
                                var a, s;
                                return (null == (s = e.message) || null == (a = s.jsonMessage) ? void 0 : a.rawJson) == null ? i.core.messaging.updateMessagesOnDeletePendingMessage(r, [e.rid]).pipe((0, n.n)(() => v.w)) : i.core.messaging.addPendingMessages(r, void 0, [e]).pipe((0, I.Z)(() => {
                                    let a = (0, L._b)(r, t.value);
                                    return i.core.messaging.sendDocumentMessage(r, e, a, void 0).pipe((0, k.C)(v.w), (0, C.W)(t => (e4.error("Send Location Mesasge", t), (0, y.of)(o.on.messageFailed(r, e)))))
                                }))
                            }), (0, C.W)(e => (e4.error("Send Location Mesasge", e), v.w)))))
                        }))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s,
                        intl: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/ForwardMessage"), (0, S.H)(e => {
                        var a, l, i;
                        let o, d, M = e.payload.messages.filter(e => !H.includes(e.type));
                        if (0 === M.length) return v.w;
                        let w = (0, A.H4)(t.value);
                        e.payload.caption && (d = (0, j.x)(e.payload.caption, (0, p.$C)(), Date.now(), [], w));
                        let S = M.sort((e, t) => e.date > t.date ? 1 : -1).map(a => {
                                let s, r, l, n;
                                return a.senderUid === w && e.payload.ignoreFrom && !(0, u.H7)(a) ? tm(a.type, t, {
                                    ...a,
                                    quotedMessage: void 0
                                }) : (s = a, r = e.payload.fromPeer, l = t, {
                                    ...tm(s.type, l, s),
                                    date: n ?? Date.now(),
                                    quotedMessage: V(s, r, l),
                                    message: {
                                        emptyMessage: {}
                                    },
                                    previousMessageId: void 0,
                                    nextMessageId: void 0
                                })
                            }),
                            {
                                groupedMessages: E,
                                allMessages: C
                            } = (0, x.h9)(S, !0);
                        return R.info("forwardMessageEpic grouped", E.map(e => e.map(g.dF))), (a = s, l = e.payload.destPeer, i = E, o = l.filter(e => e.type == c.RK.PEERTYPE_GROUP).map(m.uY), a.core.groups.loadGroups(o).pipe((0, n.n)(e => {
                            let t = new Map(e.map(e => {
                                let t = e.permissions;
                                if (!t) return {
                                    group: e,
                                    forwardable: i,
                                    unforwardable: []
                                };
                                let a = [],
                                    s = [];
                                return i.forEach(e => {
                                    let r = [],
                                        l = [];
                                    e.forEach(e => {
                                        (0, F.sh)(t, e.type) ? r.push(e): l.push(e)
                                    }), r.length > 0 && a.push(r), l.length > 0 && s.push(l)
                                }), {
                                    group: e,
                                    forwardable: a,
                                    unforwardable: s
                                }
                            }).map(e => [(0, h.LP)((0, f.Ud)(e.group)), e]));
                            return (0, y.of)(t)
                        }), (0, n.n)(e => {
                            let t = l.filter(e => e.type == c.RK.PEERTYPE_PRIVATE),
                                a = new Map(e);
                            return t.forEach(e => {
                                a.set((0, h.LP)(e), {
                                    forwardable: i,
                                    unforwardable: []
                                })
                            }), (0, y.of)(a)
                        }))).pipe((0, n.n)(a => {
                            let r = [...a].map(e => {
                                    let [t, a] = e;
                                    return a
                                }).filter(e => e.unforwardable.length > 0).map(e => ({
                                    group: e.group,
                                    contentTypes: [...new Set(...e.unforwardable.map(e => e.map(e => e.type)))]
                                })),
                                l = e.payload.onForwardError;
                            return r.length > 0 && (null == l || l(r)), (0, y.of)(...e.payload.destPeer).pipe((0, I.Z)(e => {
                                let r = a.get((0, h.LP)(e)),
                                    l = (null == r ? void 0 : r.forwardable) ?? E;
                                if (0 === l.length) return v.w;
                                let n = (0, L._b)(e, t.value);
                                return (0, T.x)(s.core.messaging.addPendingMessages(e, void 0, d ? [d, ...C] : C).pipe((0, k.C)(v.w)), (d ? s.core.messaging.sendTextMessage(d, e, n).pipe((0, k.C)(v.w)) : (0, y.of)(void 0)).pipe((0, k.C)(v.w)), Z(s, e, l, n))
                            }))
                        }), (0, P.H)(), (0, I.Z)(a => {
                            if (!a || (null == a ? void 0 : a.type) !== "MessagesSendingFailed") {
                                var s, l, n, i, o, d, p;
                                let a, u, g, c = 1 === C.length,
                                    m = 1 === e.payload.destPeer.length && e.payload.destPeer[0].id === w,
                                    f = (0, U.t)((0, _.fX)(t.value, e.payload.fromPeer.id)),
                                    M = (0, N.pK)(t.value, e.payload.destPeer[0]),
                                    h = (s = r.formatMessage, l = r.formatNumber, n = e.payload.destPeer.length, i = M.title, o = f ? r.formatMessage("forward.post") : r.formatMessage("forward.message"), d = c, p = m, a = 1 === n, u = s("single_msg_single_peer"), g = "forward.success.", a && p ? s(g.concat(d ? "single_msg_to_me" : "multiple_msg_to_me"), {
                                        unit: o
                                    }) : a ? s(g.concat(d ? "single_msg_single_peer" : "multiple_msg_single_peer"), {
                                        title: i,
                                        unit: o
                                    }) : s(g.concat(d ? "single_msg_multiple_peer" : "multiple_msg_multiple_peer"), {
                                        count: l(n.toString()),
                                        unit: o
                                    }));
                                (h || e.payload.toastText) && (0, D.P)(e.payload.toastText ?? h ?? "", {
                                    icon: O.M
                                })
                            }
                            return a ? (0, y.of)(a) : v.w
                        }))
                    }))
                }, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/DeleteMessage"), (0, I.Z)(e => {
                        let {
                            payload: a
                        } = e, l = (0, $.z)(t.value), n = (0, ed.Uj)(t.value, l);
                        if (!n) return v.w;
                        let i = [],
                            o = [];
                        for (let e of a.ids) {
                            var d;
                            let t = null == (d = n.find(t => (0, x.bj)(t) === (0, x.bj)(e))) ? void 0 : d.state;
                            t === s.Zu.Error ? o.push(e) : t !== s.Zu.Pending && i.push(e)
                        }
                        return o.sort((e, t) => t.date - e.date), (0, ei.h)((0, eo.T)(() => i.length > 0, r.core.messaging.deleteMessages(l, i.map(e => e.rid), i.map(e => e.date), a.justMine).pipe((0, k.C)(v.w), (0, C.W)(e => (ep.error("DeleteMessage", e), v.w))), v.w), (0, eo.T)(() => o.length > 0, r.core.messaging.deletePendingMessages(l, o.map(e => e.rid), o.map(e => e.date)).pipe((0, I.Z)(() => v.w)), v.w))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, d.gp)("Messages/SendInlineCallbackData"), (0, n.n)(e => {
                        let {
                            payload: a
                        } = e, r = (0, $.z)(t.value), n = (0, L.jq)(r, t.value);
                        return s.core.messaging.sendInlineCallbackData(n, a.id, a.data, a.date).pipe((0, I.Z)(e => {
                            let s = t.value.dialogsStore.fullDialogs.currentPeer,
                                n = null == e ? void 0 : e.answer,
                                i = [en(r, a.buttonId)];
                            return r.id === (null == s ? void 0 : s.id) && n ? (i.push(es.sM.setInlineCallbackAnswer({
                                ...n,
                                botPeerId: a.botId
                            })), (0, y.of)(...i).pipe((0, ea.X)((0, et.O)(4e3).pipe((0, l.p)(() => n.type === er.ty.PIN), (0, E.T)(() => es.sM.setInlineCallbackAnswer(void 0)))))) : (0, y.of)(...i)
                        }), (0, C.W)(e => (el.error("SendInlineCallbackData", e), (0, y.of)(en(r, a.buttonId)))))
                    }))
                }, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/EditMessage"), (0, I.Z)(e => {
                        let {
                            payload: a
                        } = e, l = (0, x.li)(t.value, a.text), n = (0, $.z)(t.value), i = {
                            ...a.messageContainer,
                            message: ((e, t, a, r) => {
                                switch (t) {
                                    case s.cM.TEXT:
                                        return {
                                            textMessage: {
                                                ...e.textMessage,
                                                text: a,
                                                mentions: r
                                            }
                                        };
                                    case s.cM.AUDIO:
                                    case s.cM.PHOTO:
                                    case s.cM.DOCUMENT:
                                    case s.cM.GIF:
                                    case s.cM.VIDEO:
                                    case s.cM.VOICE:
                                        return {
                                            documentMessage: {
                                                ...e.documentMessage,
                                                caption: {
                                                    ...e.documentMessage.caption,
                                                    text: a,
                                                    mentions: r
                                                }
                                            }
                                        };
                                    default:
                                        return e
                                }
                            })(a.messageContainer.message, a.messageContainer.type, a.text.trim(), l)
                        };
                        return r.core.messaging.updateMessage(n, i).pipe((0, k.C)(v.w), (0, C.W)(e => (B.error("UPDATE MESSAGE", e), v.w)))
                    }))
                }, (e, t) => e.pipe((0, d.gp)("Messages/ForwardToMe"), (0, E.T)(e => {
                    let {
                        payload: a
                    } = e, s = (0, A.H4)(t.value), r = a.fromPeer;
                    return o.on.forwardMessages({
                        destPeer: [(0, f.Yt)(s)],
                        messages: Array.isArray(a.messageContainer) ? a.messageContainer : [a.messageContainer],
                        fromPeer: r
                    })
                })), (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("MessagesSendingFailed"), (0, I.Z)(e => {
                        let {
                            payload: t
                        } = e;
                        return r.core.dialogs.updateLastMessage(t.peer, {
                            ...t.messageContainer,
                            state: s.Zu.Error
                        }).pipe((0, k.C)(v.w))
                    }))
                }, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/SendReceiptMessage"), (0, E.T)(e => (0, x.m6)(t.value, e)), (0, I.Z)(e => {
                        let a = (0, A.H4)(t.value),
                            l = (0, K.dt)(t.value, a),
                            n = {
                                ...(0, eu.cw0)(),
                                rid: e.rid,
                                date: e.date,
                                message: e.payload.receipt,
                                state: s.Zu.Pending,
                                senderUid: l.id,
                                isOut: !0,
                                reactions: [],
                                type: s.cM.RECEIPT
                            },
                            i = (0, L._b)(e.payload.destPeer, t.value);
                        return r.core.messaging.sendAndAddPendingMessage(n, e.payload.destPeer, i, void 0).pipe((0, k.C)(v.w), (0, C.W)(t => (eg.error("Send ReceiptMessage Mesasge", t), (0, y.of)(o.on.messageFailed(e.payload.destPeer, n)))))
                    }))
                }, (e, t, a) => {
                    let {
                        API: r
                    } = a;
                    return e.pipe((0, d.gp)("Messages/SendContactMessage"), (0, E.T)(e => (0, x.m6)(t.value, e)), (0, n.n)(e => {
                        let a = (0, A.H4)(t.value),
                            l = (0, K.dt)(t.value, a),
                            n = e.payload.targetPeer || (0, $.z)(t.value),
                            i = (0, N.$j)(t.value),
                            d = void 0 != i,
                            p = {
                                ...(0, eu.cw0)(),
                                rid: e.rid,
                                date: e.date,
                                message: {
                                    jsonMessage: {
                                        rawJson: JSON.stringify({
                                            dataType: "contact",
                                            data: {
                                                contact: e.payload
                                            }
                                        })
                                    }
                                },
                                state: s.Zu.Pending,
                                senderUid: l.id,
                                isOut: !0,
                                reactions: [],
                                type: s.cM.CONTACT
                            },
                            u = (0, L._b)(n, t.value);
                        return r.core.messaging.sendAndAddPendingMessage(p, n, u, i, !d).pipe((0, k.C)(v.w), (0, C.W)(e => (b.j.error("Send Text Mesasge", e), (0, y.of)(o.on.messageFailed(n, p)))))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s,
                        filesDB: r,
                        intl: d
                    } = a;
                    return e.pipe((0, X.i)(o.on.sendMultiMediaMessage), (0, I.Z)(a => {
                        let {
                            attachments: o,
                            peer: p,
                            exPeerType: g,
                            scheduledAt: c
                        } = a.payload, m = null != c, f = eh()(o, 10);
                        if (m) {
                            let a = p ?? (0, $.z)(t.value),
                                o = (0, Y.Gs)(t.value);
                            return (0, w.H)(f).pipe((0, S.H)(e => eK(t, e, a)), (0, eI.$)()).pipe((0, n.n)(a => (0, T.x)(...a.map(a => {
                                let {
                                    peer: n,
                                    files: p,
                                    messageContainers: g
                                } = a;
                                return (e => {
                                    var t;
                                    let {
                                        files: a,
                                        messageContainers: s,
                                        peer: r,
                                        scheduledAt: n,
                                        API: o,
                                        state$: d,
                                        filesDB: p,
                                        intl: g,
                                        uploadConfig: c,
                                        actions$: m
                                    } = e, {
                                        uploadFn: f,
                                        concurrentInMultipart: M
                                    } = c, h = s[s.length - 1], w = (0, u.er)(h), S = h.quotedMessage, k = (null == (t = s[0].groupedId) ? void 0 : t.value) ?? "", P = s.map(e => {
                                        var t;
                                        return {
                                            randomId: e.rid,
                                            media: (null == (t = e.message) ? void 0 : t.documentMessage) ? {
                                                ...e.message.documentMessage,
                                                isUploading: !0
                                            } : void 0
                                        }
                                    }), {
                                        pendingTask: b,
                                        tempTaskId: x,
                                        uid: U,
                                        exPeer: _,
                                        addPendingAction: L
                                    } = (0, Q.f6)({
                                        peer: r,
                                        multiMedia: P,
                                        groupedId: k,
                                        scheduledAt: n,
                                        quotedMessageReference: w,
                                        quotedMessage: S,
                                        state: d.value
                                    }), F = m.pipe((0, X.i)(e$.XZ.removeScheduledTasks), (0, l.p)(e => e.payload.uid === U && e.payload.taskIds.includes(x))), A = a.map((e, t) => {
                                        let a = s[t].rid;
                                        return f(e, o, a, d, p, {
                                            concurrentInMultipart: M
                                        }, r, s[t].type).pipe((0, i.Q)(F), (0, i.Q)(m.pipe((0, l.p)(e => "Messages/AbortUploadMultiMedia" === e.type && e.payload.fileId === a), (0, eW.s)(1))), (0, ek.u)())
                                    }), D = (0, ei.h)(...A), O = A.map((e, t) => e.pipe((0, l.p)(e => !!e.payload.progress.completed), (0, eW.s)(1), (0, E.T)(e => ({
                                        type: "completed",
                                        result: {
                                            index: t,
                                            fileId: e.payload.fileId,
                                            rid: s[t].rid
                                        }
                                    })), (0, eV.U)({
                                        type: "cancelled",
                                        index: t
                                    }))), j = (0, ei.h)(...O).pipe((0, ek.u)()), N = j.pipe((0, l.p)(e => "completed" === e.type), (0, I.Z)(e => {
                                        let {
                                            index: t,
                                            fileId: s
                                        } = e.result, r = eD(a[t].type), l = (0, eY.e0)(a[t], s, r);
                                        return 0 === l.length ? v.w : (0, y.of)(eA.$6.setFile({
                                            fileId: s,
                                            file: a[t]
                                        }), ...l)
                                    })), R = j.pipe((0, eP.S)((e, t) => {
                                        var a, s, r;
                                        let l = (null == (r = e.payload) || null == (s = r.taskSendMultiMediaMessage) || null == (a = s.sendMultiMediaMessage) ? void 0 : a.multiMedia) ?? [],
                                            n = "completed" === t.type ? l.map((e, a) => a === t.result.index && e.media ? {
                                                ...e,
                                                media: {
                                                    ...e.media,
                                                    fileId: t.result.fileId,
                                                    isUploading: !1
                                                }
                                            } : e) : l.filter((e, a) => a !== t.index);
                                        return {
                                            ...e,
                                            payload: {
                                                ...e.payload,
                                                taskSendMultiMediaMessage: {
                                                    ...e.payload.taskSendMultiMediaMessage,
                                                    sendMultiMediaMessage: {
                                                        ...e.payload.taskSendMultiMediaMessage.sendMultiMediaMessage,
                                                        multiMedia: n
                                                    }
                                                }
                                            }
                                        }
                                    }, b), (0, E.T)(e => {
                                        var t, a, s;
                                        return 0 === ((null == (s = e.payload) || null == (a = s.taskSendMultiMediaMessage) || null == (t = a.sendMultiMediaMessage) ? void 0 : t.multiMedia) ?? []).length ? e$.XZ.removeScheduledTasks({
                                            uid: U,
                                            taskIds: [x]
                                        }) : e$.XZ.updateScheduledTask({
                                            uid: U,
                                            oldTaskId: x,
                                            task: e
                                        })
                                    })), H = j.pipe((0, eP.S)((e, t) => [...e, t], []), (0, l.p)(e => e.length === a.length), (0, eW.s)(1), (0, I.Z)(e => {
                                        let t = e.filter(e => "completed" === e.type).map(e => e.result);
                                        if (0 === t.length) return v.w;
                                        let a = t.sort((e, t) => e.index - t.index).map(e => {
                                            var t;
                                            return {
                                                randomId: e.rid,
                                                media: {
                                                    ...null == (t = s[e.index].message) ? void 0 : t.documentMessage,
                                                    fileId: e.fileId,
                                                    isUploading: !1
                                                }
                                            }
                                        });
                                        return (0, Q.Bb)({
                                            pendingTask: b,
                                            tempTaskId: x,
                                            uid: U,
                                            exPeer: _,
                                            updatedMultiMedia: a,
                                            scheduledAt: n,
                                            API: o,
                                            intl: g,
                                            successMessageKey: "schedule_message.success",
                                            errorMessageKey: "schedule_message.error"
                                        })
                                    }), (0, C.W)(e => {
                                        eq.error("Failed to upload files for album scheduling", e);
                                        let t = {
                                            ...b,
                                            status: eB.e1.TASK_STATUS_FAILED
                                        };
                                        return (0, y.of)(e$.XZ.updateScheduledTask({
                                            uid: U,
                                            oldTaskId: x,
                                            task: t
                                        }))
                                    }));
                                    return (0, T.x)((0, y.of)(L), (0, ei.h)(D.pipe((0, C.W)(() => v.w)), N, R, H))
                                })({
                                    files: p,
                                    messageContainers: g,
                                    peer: n,
                                    scheduledAt: c,
                                    API: s,
                                    state$: t,
                                    filesDB: r,
                                    intl: d,
                                    uploadConfig: o,
                                    actions$: e
                                })
                            }))))
                        }
                        return (0, w.H)(f).pipe((0, S.H)(e => {
                            let a, l;
                            return eK(t, e, p).pipe((a = s, l = r, eG.info(">>> addUnSentMessages > start"), (0, n.n)(e => (0, T.x)(a.core.messaging.addPendingMessages(e.peer, void 0, e.messageContainers), ...e.files.map((t, a) => eX(l, eD(t.type)).put(t, e.messageContainers[a].rid))).pipe((0, P.H)(), (0, E.T)(() => e)))))
                        }), (0, eI.$)()).pipe((0, n.n)(a => {
                            let l = a.map(a => {
                                let {
                                    peer: l,
                                    files: n,
                                    messageContainers: i
                                } = a;
                                return eQ(e, s, t, r, l, n, i, g)
                            });
                            return (0, T.x)(...l)
                        }))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, d.gp)("Messages/AbortUploadMultiMedia"), (0, n.n)(e => {
                        let {
                            messageContainer: a,
                            peer: r,
                            fileId: l
                        } = e.payload, {
                            rid: n
                        } = a, i = (0, h.LP)(r), o = t.value.scheduler.scheduledTasks.get(i);
                        return (null == o ? void 0 : o.find(e => {
                            var t, a, s;
                            let r = null == (s = e.payload) || null == (a = s.taskSendMultiMediaMessage) || null == (t = a.sendMultiMediaMessage) ? void 0 : t.multiMedia;
                            return null == r ? void 0 : r.some(e => e.randomId === n)
                        })) ? (0, y.of)(eF.Fb.removeUploadProgress({
                            rid: n
                        })) : s.core.messaging.deletePendingMessages(r, [l], [a.date]).pipe((0, E.T)(() => eF.Fb.removeUploadProgress({
                            rid: a.rid
                        })))
                    }))
                }, (e, t, a) => {
                    let {
                        API: i,
                        filesDB: o
                    } = a;
                    return i.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => i.core.messaging.getAllPendingMessages()), (0, n.n)(a => {
                        let r = (0, x.kE)(a, [s.cM.PHOTO, s.cM.VIDEO]);
                        return (0, w.H)(r).pipe((0, I.Z)(a => {
                            let [r, l] = a, d = (0, x.H2)(l), p = (0, h.TU)(r);
                            return (0, w.H)(d).pipe((0, S.H)(a => {
                                let r, l, {
                                    notUploadedPhotoRids: d,
                                    notUploadedVideoRids: u
                                } = (r = [], l = [], null == a || a.forEach(e => {
                                    var t;
                                    let a = null == (t = e.message) ? void 0 : t.documentMessage;
                                    if ((null == a ? void 0 : a.fileId) === "") {
                                        let t = eD((null == a ? void 0 : a.mimeType) ?? "");
                                        t === s.cM.PHOTO ? l.push(e.rid) : t === s.cM.VIDEO && r.push(e.rid)
                                    }
                                }), {
                                    notUploadedPhotoRids: l,
                                    notUploadedVideoRids: r
                                });
                                return (0, eT.p)([eX(o, s.cM.PHOTO).getItems(d), eX(o, s.cM.VIDEO).getItems(u)]).pipe((0, E.T)(e => {
                                    let [t, a] = e;
                                    return [...t.map(e => {
                                        let [t, a] = e;
                                        return a
                                    }), ...a.map(e => {
                                        let [t, a] = e;
                                        return a
                                    })]
                                }), (0, n.n)(s => {
                                    let r = (0, L._b)(p, t.value);
                                    return s.length > 0 ? (eG.warn("upload and send pending albums", s, a), eQ(e, i, t, o, p, s, a, r, d.concat(u))) : (eG.warn("send pending albums", a), e0(i, a, p, r).pipe((0, k.C)(v.w)))
                                }))
                            }))
                        }))
                    }))
                }, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return s.core.auth.authState.pipe((0, l.p)(e => e === r.k.Success), (0, n.n)(() => s.core.messaging.getAllPendingMessages()), (0, n.n)(e => {
                        let a = (0, x.G7)(e);
                        return 0 === a.size ? v.w : (0, w.H)(a).pipe((0, I.Z)(e => {
                            let [a, r] = e;
                            R.debug("Pending forward: ", a, r.map(g.dF));
                            let l = (0, h.TU)(a),
                                n = r.sort((e, t) => e.date - t.date),
                                {
                                    groupedMessages: i
                                } = (0, x.h9)(n, !0);
                            return (0, y.of)(l).pipe((0, S.H)(e => {
                                let a = (0, L._b)(e, t.value);
                                return Z(s, e, i, a)
                            }))
                        }), (0, I.Z)(() => v.w))
                    }), (0, C.W)(e => (R.error("Forward pending message", e), v.w)))
                }, Y.jb, e8, (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, d.gp)("Messages/FetchProtectedContent"), (0, n.n)(e => {
                        let {
                            payload: t
                        } = e;
                        return s.core.messaging.fetchProtectedContent(t.messageId, t.peer, t.token).pipe((0, I.Z)(e => e.history ? (0, y.of)(o.on.addProtectedContent(e.history)) : v.w), (0, C.W)(e => (e9.error("FETCH PROTECTED CONTENT", e), v.w)))
                    }))
                }, tp, e => e.pipe((0, X.i)(o.on.addPendingTextMessageAfterHistoryLoad), (0, E.T)(e => {
                    let {
                        peer: t,
                        text: a,
                        replyMessage: s,
                        thread: r
                    } = e.payload, l = tu(t), n = tg.get(l) || [];
                    return tg.set(l, [...n, {
                        text: a,
                        replyMessage: s,
                        thread: r
                    }]), o.on.sendPendingTextMessagesAfterHistoryLoad(t)
                })), (e, t) => e.pipe((0, X.i)(o.on.historyLoadedForBotTopic), (0, I.Z)(e => {
                    let a = tu(e.payload.peer),
                        s = tg.get(a);
                    if (!s || 0 === s.length) return v.w;
                    tg.delete(a);
                    let r = (0, N.$j)(t.value);
                    return (0, ei.h)(...s.map(e => (0, y.of)(o.on.sendTextMessage(e.text, e.replyMessage, e.thread || r))))
                })), (e, t, a) => {
                    let {
                        API: r,
                        filesDB: l
                    } = a;
                    return e.pipe((0, X.i)(o.on.retrySendDocumentMessage), (0, I.Z)(a => {
                        let {
                            payload: {
                                peer: i,
                                messageContainer: d
                            }
                        } = a, p = {
                            ...d,
                            state: s.Zu.Pending
                        };
                        return r.core.messaging.addPendingMessages(i, void 0, [p]).pipe((0, n.n)(() => l.getKeyValue((0, eb.VI)(d.type)).get(d.rid).pipe((0, n.n)(a => {
                            var s, u;
                            let g = null == (u = d.message) || null == (s = u.documentMessage) ? void 0 : s.fileId;
                            if (a) return (0, y.of)(o.on.uploadFile(a, i, p, e, l, void 0));
                            if (g && g.length > 0) {
                                let e = (0, L._b)(i, t.value);
                                return r.core.messaging.sendDocumentMessage(i, p, e, void 0).pipe((0, n.n)(() => v.w), (0, C.W)(e => (tc.error("sendDocumentMessage failed", e), (0, y.of)(o.on.messageFailed(i, p)))))
                            }
                            return tc.warn("No file or fileId found for retry", d.rid), (0, y.of)(o.on.messageFailed(i, p))
                        }))), (0, C.W)(e => (tc.error("retrySendDocumentMessage", e), (0, y.of)(o.on.messageFailed(i, p)))))
                    }))
                })
        },
        24187: function(e, t, a) {
            a.d(t, {
                Lb: () => I,
                e0: () => S
            });
            var s = a(33222),
                r = a(10394),
                l = a(41296),
                n = a(69758),
                i = a(23031),
                o = a(44334),
                d = a(3537),
                p = a(97474),
                u = a(10492),
                g = a(44821),
                c = a(52545),
                m = a(46896),
                f = a(89855),
                M = a(80073),
                h = a(34164),
                v = a(8529),
                y = a(73088),
                T = a(41129);
            let w = M.j.getLogger("ScheduleDocumentUtils"),
                S = (e, t, a) => {
                    let r = a === s.cM.VOICE,
                        l = a === s.cM.AUDIO,
                        n = a === s.cM.PHOTO,
                        i = a === s.cM.GIF;
                    return r || l || n || i ? [f.$6.putFileInDB({
                        value: e,
                        key: t,
                        type: a
                    }), f.$6.checkFile({
                        fileId: t,
                        type: a
                    })] : []
                },
                I = e => {
                    var t;
                    let a, {
                            file: f,
                            messageContainer: M,
                            peer: I,
                            scheduledAt: k,
                            API: P,
                            state$: E,
                            filesDB: C,
                            intl: b,
                            uploadConfig: x,
                            actions$: U
                        } = e,
                        {
                            uploadFn: _,
                            concurrentInMultipart: L
                        } = x,
                        F = (0, h.er)(M),
                        A = (0, r.Pw)(M.message),
                        {
                            successMessageKey: D,
                            errorMessageKey: O
                        } = {
                            successMessageKey: (a = A === s.cM.VOICE) ? "schedule_message.voice_success" : "schedule_message.success",
                            errorMessageKey: a ? "schedule_message.voice_error" : "schedule_message.error"
                        },
                        j = {
                            documentMessage: {
                                ...null == (t = M.message) ? void 0 : t.documentMessage,
                                isUploading: !0
                            }
                        },
                        {
                            pendingTask: N,
                            tempTaskId: R,
                            uid: H,
                            exPeer: Z,
                            addPendingAction: z
                        } = (0, h.ih)({
                            peer: I,
                            message: j,
                            rid: M.rid,
                            scheduledAt: k,
                            quotedMessageReference: F,
                            quotedMessages: M.quotedMessage ? [M.quotedMessage] : [],
                            state: E.value
                        }),
                        W = U.pipe((0, T.i)(v.XZ.removeScheduledTasks), (0, d.p)(e => e.payload.uid === H && e.payload.taskIds.includes(R))),
                        V = _(f, P, M.rid, E, C, {
                            concurrentInMultipart: L
                        }, I, M.type).pipe((0, p.Q)(W), (0, u.u)()),
                        $ = V.pipe((0, d.p)(e => !!e.payload.progress.completed), (0, g.$)(), (0, c.Z)(e => {
                            var t;
                            let a = e.payload.fileId,
                                s = {
                                    documentMessage: {
                                        ...null == (t = M.message) ? void 0 : t.documentMessage,
                                        fileId: a,
                                        isUploading: !1
                                    }
                                },
                                r = S(f, a, A);
                            return (0, l.x)((0, n.of)(...r), (0, h.AM)({
                                pendingTask: N,
                                tempTaskId: R,
                                uid: H,
                                exPeer: Z,
                                updatedMessage: s,
                                scheduledAt: k,
                                API: P,
                                intl: b,
                                successMessageKey: D,
                                errorMessageKey: O
                            }))
                        }), (0, m.W)(e => {
                            w.error("Failed to upload file for scheduling", e);
                            let t = {
                                ...N,
                                status: y.e1.TASK_STATUS_FAILED
                            };
                            return (0, n.of)(v.XZ.updateScheduledTask({
                                uid: H,
                                oldTaskId: R,
                                task: t
                            }))
                        }));
                    return (0, l.x)((0, n.of)(z), (0, i.h)(V.pipe((0, m.W)(() => o.w)), $))
                }
        },
        41817: function(e, t, a) {
            a.d(t, {
                $1: () => eI,
                Bc: () => eC,
                ES: () => ew,
                Gs: () => ed,
                IS: () => eP,
                XX: () => eg,
                j8: () => eT,
                jb: () => eU,
                o4: () => ex,
                t2: () => eu
            });
            var s = a(52484),
                r = a(33222),
                l = a(65952),
                n = a(10394),
                i = a(87728),
                o = a(21574),
                d = a(59001),
                p = a(19625),
                u = a(7836),
                g = a(20770),
                c = a(41296),
                m = a(69758),
                f = a(78893),
                M = a(23031),
                h = a(84748),
                v = a(44334),
                y = a(63438),
                T = a(92023),
                w = a(52545),
                S = a(46896),
                I = a(34993),
                k = a(78130),
                P = a(3537),
                E = a(97474),
                C = a(76432),
                b = a(10492),
                x = a(44821),
                U = a(97244),
                _ = a(94757),
                L = a(35133),
                F = a(32928),
                A = a(33414),
                D = a(80073),
                O = a(36675),
                j = a(62025),
                N = a(45023),
                R = a(66507),
                H = a(22169),
                Z = a(63315),
                z = a(5497),
                W = a(89855),
                V = a(77693),
                $ = a(27192),
                B = a(54937),
                Y = a(92810),
                q = a(21452),
                G = a(45488),
                K = a(69069),
                X = a(21677),
                Q = a(11361),
                J = a(98391),
                ee = a(9794);
            a(94969);
            var et = a(55919),
                ea = a(2503),
                es = a(42442),
                er = a(41420),
                el = a(24187),
                en = a(8529),
                ei = a(41129);
            let eo = D.j.getLogger("SendDocumentEpic"),
                ed = e => {
                    let t = (0, q.L4)(s.TO.NewUploadManager, (0, Y.t2)(e)),
                        a = (t ? (0, Y.JS)(e) : (0, Y.Zx)(e)) ?? 3;
                    return {
                        useNewUploadManager: t,
                        concurrentInMultipart: a,
                        uploadFn: t ? ec : eg
                    }
                };
            async function ep(e) {
                return (await fetch(e)).blob()
            }
            async function eu(e, t) {
                let a = await ep(e);
                return D.j.warn("Blob", e, a), new File([a], t, {
                    lastModified: Date.now(),
                    type: a.type
                })
            }
            let eg = (e, t, a, s, r, l, n, i) => {
                    if (!s || !r) return em(e, t, a, s, r, l, n);
                    {
                        D.j.info(">>FilesLog", `start Upload fileName: ${e.name} rid: ${a}`);
                        let o = n ? (0, er.R)(s.value, n) : void 0,
                            d = r && (0, F.my)(r);
                        return (0, c.x)(d.get(a).pipe((0, w.Z)(d => d ? (D.j.info(">>FilesLog", "was in db", d), t.core.filesModule.getResumeUrl(d.id, o).pipe((0, w.Z)(o => {
                            if (D.j.info(">>FilesLog", "resumeUrl", o, d.sentChunks), !o.canResume) return em(e, t, a, s, r, l, n, i);
                            {
                                let t = o.fileUrl;
                                return (0, c.x)(ef(a, t.fileId, e.size, t.chunkSize, d.sentChunks.size), eM({
                                    url: t.url,
                                    file: e,
                                    fileId: t.fileId,
                                    chunkSize: t.chunkSize ?? 131072
                                }, a, r, l, d.sentChunks))
                            }
                        }), (0, S.W)(o => 6 == o.code ? (0, m.of)(z.Fb.updateUploadProgress({
                            rid: a,
                            fileId: d.id,
                            progress: {
                                lengthComputable: !0,
                                total: e.size,
                                loaded: e.size,
                                completed: !0
                            }
                        })) : 15 == o.code ? em(e, t, a, s, r, l, n, i) : (0, f.$)(() => o)), (0, p.h)({
                            initialInterval: 700,
                            maxInterval: 8e3
                        }))) : (D.j.info(">>FilesLog", "was NOT in db"), em(e, t, a, s, r, l, n, i)))))
                    }
                },
                ec = (e, t, a, s, r, l, n, i) => {
                    eo.info(`[NewUploadManager] start Upload fileName: ${e.name} rid: ${a}`);
                    let o = n ? (0, er.R)(s.value, n) : void 0;
                    return o || eo.warn("[NewUploadManager] exPeer is undefined", {
                        rid: a,
                        peer: n
                    }), A.Hm.upload({
                        rid: a,
                        file: e,
                        exPeer: o,
                        contentType: i,
                        chunkSize: 131072,
                        concurrentChunks: (null == l ? void 0 : l.concurrentInMultipart) ?? 3,
                        filesDB: r,
                        API: t
                    }).pipe((0, w.Z)(t => {
                        switch (t.type) {
                            case "progress":
                                return (0, m.of)(z.Fb.updateUploadProgress({
                                    rid: a,
                                    fileId: t.fileId,
                                    progress: t.progress
                                }));
                            case "completed":
                                return eo.info("[NewUploadManager] upload completed", t.fileId), (0, m.of)(z.Fb.updateUploadProgress({
                                    rid: a,
                                    fileId: t.fileId,
                                    progress: {
                                        lengthComputable: !0,
                                        total: e.size,
                                        loaded: e.size,
                                        completed: !0
                                    }
                                }));
                            case "error":
                                return (0, f.$)(() => t.error)
                        }
                    }), (0, S.W)(e => (eo.error("[NewUploadManager] upload failed", e), (0, f.$)(() => e))))
                },
                em = (e, t, a, s, r, l, n, i) => {
                    let o, d = new TextDecoder;
                    n && (o = (0, er.R)(s.value, n));
                    let u = (0, N.al)(i);
                    return (0, M.h)((0, h.H)((0, ee.V3)(a)).pipe((0, w.Z)(e => ((0, J.$)("file_upload_attempt", t, {
                        file_hash: d.decode(e)
                    }, !1), v.w))), t.core.filesModule.getUploadUrl(e.size, e.name, e.type, o, u).pipe((0, p.h)({
                        initialInterval: 700,
                        maxInterval: 8e3
                    }), (0, I.n)(t => (0, m.of)({
                        response: t,
                        file: e
                    })), (0, k.M)(e => {
                        D.j.info(">>FilesLog", "nasim url recieved", e, null == l ? void 0 : l.concurrentInMultipart)
                    }), (0, I.n)(e => {
                        let {
                            response: {
                                fileId: t,
                                url: s,
                                chunkSize: n
                            },
                            file: i
                        } = e;
                        return eM({
                            url: s,
                            file: i,
                            fileId: t,
                            chunkSize: n
                        }, a, r, l)
                    })))
                },
                ef = (e, t, a, s, r) => s && r ? (0, m.of)(z.Fb.updateUploadProgress({
                    rid: e,
                    fileId: t,
                    progress: {
                        lengthComputable: !0,
                        total: a,
                        loaded: Math.min(s * r, a)
                    }
                })) : v.w,
                eM = (e, t, a, s, r) => {
                    let {
                        url: l,
                        file: n,
                        chunkSize: i,
                        fileId: o
                    } = e;
                    return (0, F.Se)(l, n, {
                        chunkSize: i,
                        filesDB: a,
                        concurrent: null == s ? void 0 : s.concurrentInMultipart
                    }, r, {
                        rid: t,
                        fileId: o,
                        db: a
                    }).pipe((0, I.n)(e => {
                        var a, s, r, l, n;
                        let i = Math.min((null == (a = e.progress) ? void 0 : a.loaded) ?? -1, (null == (s = e.progress) ? void 0 : s.total) ?? -1);
                        return (0, m.of)(z.Fb.updateUploadProgress({
                            rid: t,
                            fileId: o,
                            progress: {
                                lengthComputable: !!e.progress && (null == (r = e.progress) ? void 0 : r.lengthComputable),
                                total: e.progress ? null == (l = e.progress) ? void 0 : l.total : -1,
                                loaded: i,
                                completed: null == (n = e.progress) ? void 0 : n.completed
                            }
                        }))
                    }))
                },
                eh = (e, t) => e.pipe((0, g.gp)("Messages/AbortDocument"), (0, P.p)(e => e.payload.messageContainer.rid === t)),
                ev = (e, t, a, i, o, d, p, u) => {
                    var g, c, f;
                    let h, T, _ = function(e) {
                            switch (e) {
                                case r.cM.VOICE:
                                    return l.a7.TYPINGTYPE_SENDINGVOICE;
                                case r.cM.AUDIO:
                                    return l.a7.TYPINGTYPE_SENDINGMUSIC;
                                case r.cM.DOCUMENT:
                                    return l.a7.TYPINGTYPE_SENDINGFILE;
                                case r.cM.PHOTO:
                                    return l.a7.TYPINGTYPE_SENDINGPHOTO;
                                case r.cM.VIDEO:
                                    return l.a7.TYPINGTYPE_SENDINGVIDEO;
                                case r.cM.ALBUM:
                                    return l.a7.TYPINGTYPE_SENDINGALBUM
                            }
                        }(p.type),
                        L = (0, q.L4)(s.TO.NewUploadManager, (0, Y.t2)(a.value)),
                        A = L ? (0, Y.JS)(a.value) : (0, Y.Zx)(a.value),
                        O = (L ? ec : eg)(d, t, p.rid, a, i, {
                            concurrentInMultipart: A
                        }, o, p.type).pipe(ey(e, p.rid, t, i), (0, b.u)()),
                        j = O.pipe((0, P.p)(e => !!e.payload.progress.completed), (0, x.$)()),
                        N = O.pipe((0, P.p)(e => -1 === e.payload.progress.total || e.payload.progress.total - e.payload.progress.loaded < 1e3), (0, x.$)()),
                        R = j.pipe((0, I.n)(e => {
                            var s;
                            let r = e.payload.fileId,
                                l = (0, Q._b)(o, a.value);
                            return t.core.messaging.sendDocumentMessage(o, {
                                ...p,
                                message: {
                                    documentMessage: {
                                        ...null == (s = p.message) ? void 0 : s.documentMessage,
                                        fileId: r
                                    }
                                }
                            }, l, u).pipe((0, S.W)(e => (D.j.info(">>FilesLog", e), v.w)), (0, k.M)(() => D.j.info(">>FilesLog", "sendDocSuccess")), (0, C.C)((0, F.my)(i).delete(p.rid)), (0, U.u)(r))
                        }), (0, b.u)());
                    return (0, M.h)(O.pipe((0, S.W)(() => v.w)), (g = p.rid, c = a.value, h = null == (f = t.core.auth.user) ? void 0 : f.id, T = (0, et.C)(c, o, h), _ && T ? (0, y.O)(0, 5e3).pipe((0, E.Q)((0, M.h)(N, eh(e, g)).pipe((0, S.W)(e => (eo.info("upload error = ", e), (0, m.of)(void 0))), (0, I.n)(() => t.core.typing.stopTyping(o, _).pipe((0, S.W)(e => (D.j.error("Stop typing", o, _, e), v.w)))))), (0, I.n)(() => (D.j.warn("start typing interval", o, _), t.core.typing.startTyping(o, _).pipe((0, C.C)(v.w), (0, S.W)(e => (D.j.error("Start Typing error", o, _, e), v.w)))))) : v.w), R.pipe((0, I.n)(e => i.getKeyValue((0, F.VI)(p.type)).delete(p.rid).pipe((0, U.u)(e))), (0, I.n)(e => {
                        let a = (0, n.Pw)(p.message);
                        return a === r.cM.PHOTO || a === r.cM.GIF || a === r.cM.VOICE || a === r.cM.AUDIO ? t.core.messaging.updateDocumentMessage(o, p.rid, {
                            fileId: e,
                            isUploading: !1
                        }, !1).pipe((0, I.n)(() => (0, m.of)(W.$6.putFileInDB({
                            value: d,
                            key: e,
                            type: a
                        }), W.$6.checkFile({
                            fileId: e,
                            type: a
                        })))) : t.core.messaging.updateDocumentMessage(o, p.rid, {
                            fileId: e,
                            isUploading: !1
                        }, !1).pipe((0, w.Z)(() => v.w))
                    }), ek(o, p)))
                },
                ey = (e, t, a, s) => (0, E.Q)(eh(e, t).pipe((0, g.gp)("Messages/AbortDocument"), (0, P.p)(e => e.payload.messageContainer.rid === t), (0, I.n)(e => {
                    let {
                        payload: r
                    } = e;
                    return (0, M.h)(a.core.messaging.deletePendingMessages(r.peer, [t], [r.messageContainer.date]), (0, F.my)(s).delete(t))
                }))),
                eT = (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, g.gp)("Messages/UploadFile"), (0, _.H)(a => {
                        let {
                            payload: r
                        } = a;
                        return ev(e, s, t, r.filesDB, r.peer, r.file, r.messageContainer, r.thread)
                    }))
                },
                ew = (e, t, a) => {
                    let {
                        API: s,
                        filesDB: r,
                        intl: l
                    } = a;
                    return e.pipe((0, ei.i)(j.on.sendDocument), (0, w.Z)(a => {
                        let {
                            payload: i
                        } = a;
                        if (null != i.scheduledAt) {
                            let a = i.peer ?? (0, H.z)(t.value),
                                o = [...i.attachments];
                            o.sort((e, t) => e.file.size - t.file.size);
                            let d = ed(t.value);
                            return (0, h.H)(o).pipe((0, w.Z)(o => {
                                let p = (0, ea.$j)(t.value);
                                return (0, N.$S)(s, a, p, o.replyMessage).pipe((0, w.Z)(p => eE(t, {
                                    ...o,
                                    replyMessage: p
                                }, (0, n.Lh)(o.file.type) ? 3 : i.attachmentType, a).pipe((0, w.Z)(n => {
                                    let {
                                        file: o,
                                        messageContainer: p
                                    } = n;
                                    return (0, el.Lb)({
                                        file: o,
                                        messageContainer: p,
                                        peer: a,
                                        scheduledAt: i.scheduledAt,
                                        API: s,
                                        state$: t,
                                        filesDB: r,
                                        intl: l,
                                        uploadConfig: d,
                                        actions$: e
                                    })
                                }))))
                            }))
                        }
                        let o = [...i.attachments];
                        return o.sort((e, t) => e.file.size - t.file.size), D.j.info(">>AttachmentLog", "sorted by size in epic", o.map(e => e.file.name)), (0, h.H)(o).pipe((0, w.Z)(e => {
                            var a, l;
                            let o, d = (0, ea.$j)(t.value);
                            return a = (0, n.Lh)(e.file.type) ? 3 : i.attachmentType, l = i.peer, D.j.info(">>AttachmentLog", "upload Bubble start", e.file.name), o = l ?? (0, H.z)(t.value), (0, N.$S)(s, o, d, e.replyMessage).pipe((0, I.n)(l => eE(t, {
                                ...e,
                                replyMessage: l
                            }, a, o).pipe((0, k.M)(() => D.j.info(">>AttachmentLog", "container created", e.file.name)), (0, S.W)(e => (D.j.error(">>AttachmentLog", e), v.w)), (0, w.Z)(e => {
                                let {
                                    peer: a,
                                    file: l,
                                    messageContainer: n
                                } = e;
                                return eP(s, t, r, l, n, a, d)
                            }))))
                        }), (0, k.M)(e => D.j.info(">>AttachmentLog", "createdMessageContainer", e.messageContainer.rid)), (0, w.Z)(t => {
                            let {
                                peer: a,
                                file: s,
                                messageContainer: l,
                                thread: n
                            } = t;
                            return (0, m.of)(j.on.uploadFile(s, a, l, e, r, n))
                        }))
                    }))
                },
                eS = (e, t, a) => {
                    let {
                        rid: s,
                        date: r,
                        message: l
                    } = a, n = null == l ? void 0 : l.documentMessage;
                    return (null == n ? void 0 : n.isCompressing) && (0, G.kB)(), e.core.messaging.deletePendingMessages(t, [s], [r]).pipe((0, I.n)(() => (0, m.of)(z.Fb.removeUploadProgress({
                        rid: s
                    }))))
                },
                eI = (e, t, a) => {
                    let {
                        API: s
                    } = a;
                    return e.pipe((0, g.gp)("Messages/AbortDocument"), (0, I.n)(e => {
                        let {
                            payload: a
                        } = e, {
                            message: r,
                            rid: l
                        } = a.messageContainer, n = null == r ? void 0 : r.documentMessage;
                        (null == n ? void 0 : n.isCompressing) && (0, G.kB)();
                        let i = (0, u.LP)(a.peer),
                            o = t.value.scheduler.scheduledTasks.get(i),
                            d = null == o ? void 0 : o.find(e => {
                                var t, a, s;
                                return (null == (s = e.payload) || null == (a = s.taskSendMessage) || null == (t = a.sendMessage) ? void 0 : t.rid) === l
                            });
                        return d ? (0, m.of)(en.XZ.removeScheduledTasks({
                            uid: i,
                            taskIds: [d.taskId]
                        }), z.Fb.removeUploadProgress({
                            rid: l
                        })) : eS(s, a.peer, a.messageContainer)
                    }))
                },
                ek = (e, t) => (0, S.W)(a => {
                    if ("EmptyError" === a.name) return v.w;
                    eo.error("Send Document", a);
                    let s = (null == a ? void 0 : a.code) === 3 || (null == a ? void 0 : a.message) === "File size exceeded limit";
                    return $.oR.info(B.Y.formatMessage(s ? "attachment.error_file_size_exceeded" : "attachment.error_send_file_failed")), (0, m.of)(j.on.messageFailed(e, t))
                }),
                eP = (e, t, a, s, r, l, i) => {
                    let o = void 0 != i;
                    return e.core.messaging.addPendingMessages(l, i, [r], !o).pipe((0, I.n)(() => {
                        let e = (0, n.Pw)(r.message);
                        return a.getKeyValue((0, F.VI)(e)).put(s, r.rid)
                    }), (0, L.T)(() => ({
                        peer: l,
                        file: s,
                        messageContainer: r,
                        thread: i
                    })))
                },
                eE = (e, t, a, s, l) => {
                    let o = void 0 == l ? (0, n.TC)(t.file.type) : l,
                        d = 3 === a ? r.cM.VOICE : 1 === a && o !== r.cM.AUDIO ? r.cM.DOCUMENT : o;
                    return eC(t.file, d).pipe((0, I.n)(a => {
                        var r;
                        if (!a) return v.w;
                        let l = (null == (r = (0, V.H4)(e.value)) ? void 0 : r.toString()) ?? "",
                            n = (0, Q._b)(s, e.value) === i.m4.EXPEERTYPE_CHANNEL ? s.id.toString() : l;
                        return (0, R.fN)(n, {
                            ...t,
                            file: a
                        }, d, t.caption, (0, N.li)(e.value, t.caption)).pipe((0, L.T)(r => ({
                            file: a,
                            messageContainer: {
                                ...(0, O.x)(d, e),
                                message: {
                                    documentMessage: r
                                },
                                quotedMessage: t.replyMessage && (0, N._3)(t.replyMessage, s, 1),
                                hasComment: (0, es.kB)(e.value, s)
                            },
                            peer: s
                        })))
                    }))
                },
                eC = (e, t) => t === r.cM.PHOTO ? (0, T.v)(() => (0, Z.VR)(e)).pipe((0, S.W)(e => (D.j.debug("compress", e), v.w))) : (0, m.of)(e),
                eb = [r.cM.PHOTO, r.cM.VIDEO, r.cM.VOICE, r.cM.DOCUMENT, r.cM.AUDIO],
                ex = (e, t, a) => {
                    let {
                        API: s,
                        filesDB: l
                    } = a;
                    return s.core.auth.authState.pipe((0, P.p)(e => e === o.k.Success), (0, I.n)(() => s.core.messaging.getAllPendingMessages()), (0, I.n)(a => {
                        let i = (0, N.kE)(a, eb);
                        return 0 === i.size ? v.w : (0, h.H)(i).pipe((0, w.Z)(a => {
                            let [i, o] = a, p = (0, u.TU)(i);
                            D.j.info("Pending document: ", i, o.map(d.dF));
                            let g = o.sort((e, t) => e.date - t.date);
                            return s.core.messaging.addPendingMessages(p, void 0, g).pipe((0, _.H)(() => (0, h.H)(g).pipe((0, _.H)(a => (0, n.Mk)(a) || a.type === r.cM.ALBUM ? v.w : l.getKeyValue((0, F.VI)(a.type)).get(a.rid).pipe((0, I.n)(r => {
                                var n, i;
                                let o = null == (i = a.message) || null == (n = i.documentMessage) ? void 0 : n.fileId;
                                if (r) return ev(e, s, t, l, p, r, a, void 0);
                                if (!o || !(o.length > 0)) return v.w;
                                {
                                    let e = (0, Q._b)(p, t.value);
                                    return s.core.messaging.sendDocumentMessage(p, a, e, void 0).pipe((0, C.C)(v.w))
                                }
                            }))))))
                        }), (0, S.W)(e => (eo.error("send pending documents", e), v.w)))
                    }))
                },
                eU = (e, t, a) => {
                    let {
                        API: s,
                        filesDB: l,
                        intl: n
                    } = a;
                    return e.pipe((0, g.gp)("Messages/SendAttachmentAsGif"), (0, w.Z)(e => {
                        let {
                            payload: {
                                attachment: a,
                                peer: l
                            }
                        } = e, n = l ?? (0, H.z)(t.value), i = (0, ea.$j)(t.value);
                        return (0, N.$S)(s, n, i, a.replyMessage).pipe((0, I.n)(e => eE(t, {
                            ...a,
                            replyMessage: e
                        }, 2, n, r.cM.GIF).pipe((0, I.n)(e => {
                            let {
                                messageContainer: t,
                                peer: r
                            } = e;
                            return s.core.messaging.addPendingMessages(r, i, [t], !1).pipe((0, I.n)(() => (0, m.of)({
                                attachment: a,
                                messageContainer: t,
                                peer: r,
                                thread: i
                            })))
                        }))))
                    }), (0, _.H)(t => {
                        let {
                            attachment: a,
                            peer: r,
                            messageContainer: l,
                            thread: i
                        } = t;
                        return s.core.messaging.getHistoryMessage(r, l.rid).pipe((0, I.n)(t => void 0 === t ? v.w : s.core.messaging.updateDocumentMessage(r, l.rid, {
                            isCompressing: !0
                        }).pipe((0, I.n)(() => {
                            if (!(0, G.du)()) return $.oR.info(n.formatMessage("attachment.error_compression_not_supported")), (0, m.of)({
                                attachment: a,
                                peer: r,
                                messageContainer: l,
                                thread: i
                            });
                            if ((0, X.hT)(a.file)) return (0, T.v)(() => (0, G.kG)(a.file)).pipe((0, I.n)(e => (0, m.of)({
                                attachment: {
                                    ...a,
                                    file: e
                                },
                                peer: r,
                                messageContainer: l,
                                thread: i
                            })));
                            let t = (0, G.nO)("sendAsAGif");
                            return (0, T.v)(() => t ? (0, G.sp)(a.file, void 0, {
                                removeAudioFromVideo: t.removeAudioFromVideo,
                                maxWidth: t.maxWidth,
                                preset: t.preset
                            }) : (0, X.hT)(a.file) ? (0, G.kG)(a.file) : (0, m.of)(a.file)).pipe((0, I.n)(e => (0, m.of)({
                                attachment: {
                                    ...a,
                                    file: e
                                },
                                peer: r,
                                messageContainer: l,
                                thread: i
                            })), (0, S.W)(e => (eo.info("error converting video to gif. error = ", e), $.oR.info(n.formatMessage("attachment.error_compress_video")), eS(s, r, l))), (0, E.Q)(eh(e, l.rid)))
                        }))))
                    }), (0, _.H)(a => {
                        if (!("messageContainer" in a)) return (0, m.of)(a);
                        {
                            let {
                                attachment: r,
                                peer: i,
                                messageContainer: o,
                                thread: d
                            } = a;
                            return s.core.messaging.updateDocumentMessage(i, o.rid, {
                                fileSize: r.file.size,
                                isCompressing: !1,
                                mimeType: r.file.type,
                                name: r.file.name
                            }).pipe((0, I.n)(() => {
                                if (r.file.size > K.v$) return $.oR.info(n.formatMessage("attachment.error_gif_limit_exceeded")), eS(s, i, o);
                                let a = o.message.documentMessage;
                                return a.fileSize = r.file.size, a.mimeType = r.file.type, a.name = r.file.name, ev(e, s, t, l, i, r.file, o, d)
                            }))
                        }
                    }))
                }
        },
        66507: function(e, t, a) {
            a.d(t, {
                vB: () => h,
                fN: () => f
            });
            var s = a(33222),
                r = a(76421),
                l = a(1107),
                n = a(32675);
            let i = (e, t) => new Promise(a => {
                let s = document.createElement("video");
                s.src = URL.createObjectURL(e), t && (s.preload = "metadata", s.load(), s.onloadedmetadata = () => {
                    a({
                        w: s.videoWidth,
                        h: s.videoHeight,
                        duration: Math.floor(s.duration)
                    })
                }), s.onloadeddata = () => {
                    a({
                        w: s.videoWidth,
                        h: s.videoHeight,
                        duration: Math.floor(s.duration)
                    })
                }
            });
            var o = a(87303),
                d = a(44334),
                p = a(35133),
                u = a(46896),
                g = a(80073),
                c = a(69069),
                m = a(27767);
            let f = (e, t, a, s, l) => (0, o.p)([M(t, a), h(t, a)]).pipe((0, p.T)(a => {
                    let [n, i] = a;
                    return g.j.info(">>VideoThumbnail", "thumbnail created ", t.file.name), {
                        ...(0, r.sLv)(),
                        fileId: "",
                        accessHash: e,
                        fileSize: t.file.size,
                        mimeType: t.file.type,
                        name: t.file.name,
                        thumb: i,
                        ext: n,
                        isUploading: !0,
                        caption: {
                            ext: {},
                            text: (null == s ? void 0 : s.trim()) ?? "",
                            mentions: l ?? []
                        }
                    }
                }), (0, u.W)(e => (g.j.error(e), d.w))),
                M = async (e, t) => {
                    var a, r, l;
                    if (e.ex) return e.ex;
                    let n = (0, m.tO)();
                    switch (t) {
                        case s.cM.GIF:
                            return {
                                documentExGif: await (a = e.file, a.type.startsWith("image") ? new Promise(e => {
                                    let t = new Image;
                                    t.src = URL.createObjectURL(a), t.onload = () => {
                                        e({
                                            h: t.height,
                                            w: t.width,
                                            duration: 0
                                        })
                                    }
                                }) : i(a, n))
                            };
                        case s.cM.PHOTO: {
                            let t;
                            return {
                                documentExPhoto: await (t = e.file, new Promise(e => {
                                    let a = new Image;
                                    a.src = URL.createObjectURL(t), a.onload = () => {
                                        e({
                                            h: a.height,
                                            w: a.width
                                        })
                                    }
                                }))
                            }
                        }
                        case s.cM.VIDEO:
                            return {
                                documentExVideo: await i(e.file, n)
                            };
                        case s.cM.VOICE:
                            return {
                                documentExVoice: await (r = e.file, void 0 !== (l = Math.floor(e.duration || 0)) ? Promise.resolve({
                                    duration: l
                                }) : new Promise(e => {
                                    let t = document.createElement("audio");
                                    t.src = URL.createObjectURL(r), n && (t.preload = "metadata", t.load(), t.onloadedmetadata = () => {
                                        e({
                                            duration: Math.floor(1e3 * t.duration)
                                        })
                                    }), t.onloadeddata = () => {
                                        e({
                                            duration: Math.floor(1e3 * t.duration)
                                        })
                                    }
                                }))
                            };
                        case s.cM.AUDIO: {
                            let t;
                            return {
                                documentExAudio: await (t = e.file, new Promise(e => {
                                    let a = document.createElement("audio");
                                    a.src = URL.createObjectURL(t), n && (a.preload = "metadata", a.load(), a.onloadedmetadata = () => {
                                        e({
                                            duration: Math.floor(1e3 * a.duration),
                                            album: "",
                                            artist: "",
                                            track: t.name,
                                            genre: "",
                                            cover: new Uint8Array
                                        })
                                    }), a.onloadeddata = () => {
                                        e({
                                            duration: Math.floor(1e3 * a.duration),
                                            album: "",
                                            artist: "",
                                            track: t.name,
                                            genre: "",
                                            cover: new Uint8Array
                                        })
                                    }
                                }))
                            }
                        }
                    }
                }, h = async (e, t) => {
                    if (e.thumb) return e.thumb;
                    let a = (0, m.tO)();
                    switch (t) {
                        case s.cM.GIF:
                        case s.cM.PHOTO:
                            return (0, l.f)(e.file, c.Qt);
                        case s.cM.VIDEO:
                            return (0, n.U)(e.file, a, c.Qt)
                    }
                }
        },
        34164: function(e, t, a) {
            a.d(t, {
                EB: () => _,
                er: () => s.er,
                xp: () => T,
                ih: () => I,
                AM: () => E,
                Bb: () => b,
                O1: () => w,
                f6: () => C
            });
            var s = a(10394),
                r = a(41296),
                l = a(69758),
                n = a(78130),
                i = a(52545),
                o = a(46896),
                d = a(7836),
                p = a(73088),
                u = a(11361),
                g = a(88365),
                c = a(8529),
                m = a(80073),
                f = a(36675),
                M = a(42442),
                h = a(46966);
            let v = m.j.getLogger("ScheduleMessage"),
                y = function(e, t, a, s, r, l, n) {
                    let i = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [];
                    return {
                        taskId: e,
                        taskType: p.dy.TASK_TYPE_MESSAGE_SEND,
                        status: p.e1.TASK_STATUS_PROCESSING,
                        exPeer: t,
                        scheduledAt: s,
                        payload: {
                            taskSendMessage: {
                                sendMessage: {
                                    peer: {
                                        id: a.id,
                                        type: a.type,
                                        accessHash: "0"
                                    },
                                    rid: r,
                                    isSilent: !1,
                                    message: l,
                                    quotedMessageReference: n
                                },
                                quotedMessage: i
                            }
                        }
                    }
                },
                T = e => {
                    let {
                        peer: t,
                        exPeer: a,
                        message: s,
                        rid: u,
                        scheduledAt: m,
                        quotedMessageReference: f,
                        quotedMessages: M = [],
                        scheduler: T,
                        formatMessage: w,
                        successMessageKey: S,
                        errorMessageKey: I
                    } = e, k = (0, d.LP)(t), P = String(-Date.now()), E = y(P, a, t, m, u, s, f, M), C = c.XZ.addScheduledTasks({
                        uid: k,
                        tasks: [E],
                        exPeer: a
                    });
                    return (0, r.x)((0, l.of)(C), T.scheduleTask({
                        id: a.id,
                        accessHash: a.accessHash,
                        type: a.type
                    }, m, E.payload).pipe((0, n.M)(e => {
                        (0, g.P)(w(S)), v.info("Scheduled task created with ID:", e.taskId)
                    }), (0, i.Z)(e => {
                        let t = {
                                ...E,
                                taskId: e.taskId,
                                status: p.e1.TASK_STATUS_PENDING
                            },
                            a = c.XZ.updateScheduledTask({
                                uid: k,
                                oldTaskId: P,
                                task: t
                            });
                        if (f || M.length > 0) {
                            let e = h.Sn.removeReplyMessage();
                            return (0, l.of)(a, e)
                        }
                        return (0, l.of)(a)
                    }), (0, o.W)(e => {
                        v.error("Failed to schedule message", e.code, e), (0, g.P)(w(I));
                        let t = {
                            ...E,
                            status: p.e1.TASK_STATUS_FAILED
                        };
                        return (0, l.of)(c.XZ.updateScheduledTask({
                            uid: k,
                            oldTaskId: P,
                            task: t
                        }))
                    })))
                },
                w = e => {
                    let {
                        contentType: t,
                        message: a,
                        peer: r,
                        scheduledAt: l,
                        quotedMessage: n,
                        API: i,
                        state$: o,
                        formatMessage: d
                    } = e, p = (0, f.x)(t, o);
                    p.message = a, p.quotedMessage = n, p.hasComment = (0, M.kB)(o.value, r);
                    let g = (0, u.jq)(r, o.value);
                    return T({
                        peer: r,
                        exPeer: g,
                        message: a,
                        rid: p.rid,
                        scheduledAt: l,
                        quotedMessageReference: (0, s.er)(p),
                        quotedMessages: n ? [n] : [],
                        scheduler: i.core.scheduler,
                        formatMessage: d,
                        successMessageKey: "schedule_message.sticker_success",
                        errorMessageKey: "schedule_message.sticker_error"
                    })
                },
                S = m.j.getLogger("ScheduleFileMessage"),
                I = e => {
                    let {
                        peer: t,
                        message: a,
                        rid: s,
                        scheduledAt: r,
                        quotedMessageReference: l,
                        quotedMessages: n = [],
                        state: i
                    } = e, o = (0, d.LP)(t), p = (0, u.jq)(t, i), g = String(-Date.now()), m = k(g, p, t, r, s, a, l, n), f = c.XZ.addScheduledTasks({
                        uid: o,
                        tasks: [m],
                        exPeer: p
                    });
                    return {
                        pendingTask: m,
                        tempTaskId: g,
                        uid: o,
                        exPeer: p,
                        addPendingAction: f
                    }
                },
                k = function(e, t, a, s, r, l, n) {
                    let i = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [];
                    return {
                        taskId: e,
                        taskType: p.dy.TASK_TYPE_MESSAGE_SEND,
                        status: p.e1.TASK_STATUS_PROCESSING,
                        exPeer: t,
                        scheduledAt: s,
                        payload: {
                            taskSendMessage: {
                                sendMessage: {
                                    peer: {
                                        id: a.id,
                                        type: a.type,
                                        accessHash: "0"
                                    },
                                    rid: r,
                                    isSilent: !1,
                                    message: l,
                                    quotedMessageReference: n
                                },
                                quotedMessage: i
                            }
                        }
                    }
                },
                P = e => {
                    let {
                        pendingTask: t,
                        tempTaskId: a,
                        uid: s,
                        exPeer: r,
                        updatedPayload: d,
                        scheduledAt: u,
                        API: m,
                        intl: f,
                        successMessageKey: M,
                        errorMessageKey: h
                    } = e;
                    return m.core.scheduler.scheduleTask({
                        id: r.id,
                        accessHash: r.accessHash,
                        type: r.type
                    }, u, d).pipe((0, n.M)(e => {
                        (0, g.P)(f.formatMessage(M)), S.info("Scheduled task created with ID:", e.taskId)
                    }), (0, i.Z)(e => {
                        let r = {
                            ...t,
                            payload: d,
                            taskId: e.taskId,
                            status: p.e1.TASK_STATUS_PENDING
                        };
                        return (0, l.of)(c.XZ.updateScheduledTask({
                            uid: s,
                            oldTaskId: a,
                            task: r
                        }))
                    }), (0, o.W)(e => {
                        S.error("Failed to schedule task", e.code, e), (0, g.P)(f.formatMessage(h));
                        let r = {
                            ...t,
                            status: p.e1.TASK_STATUS_FAILED
                        };
                        return (0, l.of)(c.XZ.updateScheduledTask({
                            uid: s,
                            oldTaskId: a,
                            task: r
                        }))
                    }))
                },
                E = e => {
                    let {
                        pendingTask: t,
                        tempTaskId: a,
                        uid: s,
                        exPeer: r,
                        updatedMessage: l,
                        scheduledAt: n,
                        API: i,
                        intl: o,
                        successMessageKey: d,
                        errorMessageKey: p
                    } = e, u = {
                        ...t.payload,
                        taskSendMessage: {
                            ...t.payload.taskSendMessage,
                            sendMessage: {
                                ...t.payload.taskSendMessage.sendMessage,
                                message: l
                            }
                        }
                    };
                    return P({
                        pendingTask: t,
                        tempTaskId: a,
                        uid: s,
                        exPeer: r,
                        updatedPayload: u,
                        scheduledAt: n,
                        API: i,
                        intl: o,
                        successMessageKey: d,
                        errorMessageKey: p
                    })
                },
                C = e => {
                    let {
                        peer: t,
                        multiMedia: a,
                        groupedId: s,
                        scheduledAt: r,
                        quotedMessageReference: l,
                        quotedMessage: n,
                        state: i
                    } = e, o = (0, d.LP)(t), g = (0, u.jq)(t, i), m = String(-Date.now()), f = {
                        taskId: m,
                        taskType: p.dy.TASK_TYPE_MULTI_MEDIA_MESSAGE_SEND,
                        status: p.e1.TASK_STATUS_PROCESSING,
                        exPeer: g,
                        scheduledAt: r,
                        payload: {
                            taskSendMultiMediaMessage: {
                                sendMultiMediaMessage: {
                                    peer: {
                                        id: g.id,
                                        type: g.type,
                                        accessHash: g.accessHash
                                    },
                                    multiMedia: a,
                                    repliedMessage: l,
                                    groupedId: s
                                },
                                quotedMessage: n
                            }
                        }
                    }, M = c.XZ.addScheduledTasks({
                        uid: o,
                        tasks: [f],
                        exPeer: g
                    });
                    return {
                        pendingTask: f,
                        tempTaskId: m,
                        uid: o,
                        exPeer: g,
                        addPendingAction: M
                    }
                },
                b = e => {
                    let {
                        pendingTask: t,
                        tempTaskId: a,
                        uid: s,
                        exPeer: r,
                        updatedMultiMedia: l,
                        scheduledAt: n,
                        API: i,
                        intl: o,
                        successMessageKey: d,
                        errorMessageKey: p
                    } = e, u = {
                        ...t.payload,
                        taskSendMultiMediaMessage: {
                            ...t.payload.taskSendMultiMediaMessage,
                            sendMultiMediaMessage: {
                                ...t.payload.taskSendMultiMediaMessage.sendMultiMediaMessage,
                                multiMedia: l
                            }
                        }
                    };
                    return P({
                        pendingTask: t,
                        tempTaskId: a,
                        uid: s,
                        exPeer: r,
                        updatedPayload: u,
                        scheduledAt: n,
                        API: i,
                        intl: o,
                        successMessageKey: d,
                        errorMessageKey: p
                    })
                };
            var x = a(23031),
                U = a(99263);
            let _ = (e, t, a) => {
                let s = (0, U.pj)(e, t).filter(e => !a.includes(e.taskId)),
                    r = (0, l.of)(c.XZ.removeScheduledTasks({
                        uid: t,
                        taskIds: a
                    }));
                if (0 === s.length) {
                    let e = (0, d.TU)(t).id;
                    return (0, x.h)(r, (0, l.of)(c.XZ.removePeerFromScheduledTasks(e)))
                }
                return r
            }
        },
        20592: function(e, t, a) {
            a.d(t, {
                cx: () => o,
                fS: () => d
            });
            var s = a(33148),
                r = a(7836),
                l = a(56053);
            let n = {
                    pinMessages: new Map
                },
                i = (0, l.Z0)({
                    name: "pins",
                    initialState: n,
                    reducers: {
                        setPinMessages(e, t) {
                            let a = (0, r.LP)(t.payload.peer),
                                s = e.pinMessages.get(a),
                                l = (null == s ? void 0 : s.messages) ?? t.payload.messages.sort((e, t) => e.date - t.date),
                                n = l.length,
                                i = (null == s ? void 0 : s.activeMessageId) ?? (n > 0 ? {
                                    rid: l[n - 1].rid,
                                    date: l[n - 1].date,
                                    seq: "0"
                                } : void 0);
                            e.pinMessages.set(a, {
                                messages: l,
                                activeMessageId: i
                            })
                        },
                        setActivePinMessage(e, t) {
                            let a = (0, r.LP)(t.payload.peer),
                                s = e.pinMessages.get(a);
                            s && (s.activeMessageId = t.payload.messageId)
                        }
                    },
                    extraReducers: e => {
                        e.addCase(s.i.UpdateMessages, (e, t) => {
                            let a = (0, r.LP)(t.peer),
                                s = e.pinMessages.get(a);
                            (null == s ? void 0 : s.messages) && t.messages.forEach(e => {
                                if (e.message) {
                                    let t = s.messages.findIndex(t => t.rid === e.rid);
                                    if (t >= 0) {
                                        let a = s.messages[t];
                                        s.messages[t] = {
                                            ...a,
                                            ...e
                                        }
                                    }
                                }
                            })
                        }), e.addCase(s.i.DeleteMessage, (e, t) => {
                            let a = (0, r.LP)(t.peer),
                                s = e.pinMessages.get(a);
                            if (!(null == s ? void 0 : s.messages)) return;
                            let l = !s.activeMessageId || !t.rids.includes(s.activeMessageId.rid);
                            if (s.messages = s.messages.filter(e => !t.rids.includes(e.rid)), 0 === s.messages.length && (s.activeMessageId = void 0), l || s.messages.length <= 0) return;
                            let n = s.messages[s.messages.length - 1];
                            s.activeMessageId = {
                                date: n.date,
                                rid: n.rid,
                                seq: ""
                            }
                        }), e.addCase(s.i.PinMessage, (e, t) => {
                            let a = (0, r.LP)(t.peer),
                                s = e.pinMessages.get(a);
                            !s || (s.messages = s.messages.concat([t.message]).sort((e, t) => e.date - t.date), s.activeMessageId || (s.activeMessageId = {
                                rid: t.message.rid,
                                date: t.message.date,
                                seq: "0"
                            }))
                        }), e.addCase(s.i.UnPinMessage, (e, t) => {
                            var a;
                            let s = (0, r.LP)(t.peer),
                                l = e.pinMessages.get(s);
                            if ((null == l ? void 0 : l.messages) && (null == l ? void 0 : l.messages.length) < 1 || !(null == l ? void 0 : l.messages)) return;
                            if (t.all || 1 === l.messages.length) return void e.pinMessages.set(s, {
                                messages: [],
                                activeMessageId: void 0
                            });
                            let n = null == l || null == (a = l.messages) ? void 0 : a.findIndex(e => e.rid === t.messageId.rid && e.date === t.messageId.date);
                            if (n < 0) return;
                            let i = l.messages.length - 1,
                                o = 0 === n ? l.messages[i] : l.messages[n].rid === t.messageId.rid ? l.messages[n - 1] : l.activeMessageId;
                            o && (l.activeMessageId = {
                                rid: o.rid,
                                date: o.date,
                                seq: ""
                            }), l.messages.splice(n, 1)
                        })
                    }
                }),
                o = {
                    ...i.actions,
                    pinMessage: (0, l.VP)("Messages/PinMessage"),
                    unPinMessage: (0, l.VP)("Messages/UnPinMessage"),
                    loadPinnedMessages: (0, l.VP)("Messages/LoadPinnedMessages")
                },
                d = i.reducer
        },
        35159: function(e, t, a) {
            a.d(t, {
                G3: () => i,
                NC: () => l,
                rb: () => n
            });
            var s = a(53405);
            let r = (e, t) => e.topic.topics.get(t),
                l = (e, t) => e.topic.lastTopic.get(t),
                n = (0, s.Mz)([r], e => void 0 !== e),
                i = (0, s.Mz)([r], e => ((null == e ? void 0 : e.size) ?? 0) > 0)
        },
        81835: function(e, t, a) {
            a.d(t, {
                KL: () => i,
                M4: () => n,
                Pb: () => l
            });
            var s, r = a(56053),
                l = ((s = {}).UpdateTypingState = "UpdateTypingState", s.SetOwnerTypingState = "SetOwnerTypingState", s.StartTypingInterval = "Typing/StartTypingInterval", s.StopTypingInterval = "Typing/StopTypingInterval", s);
            let n = (0, r.VP)("SetOwnerTypingState", e => ({
                    payload: {
                        typing: e
                    }
                })),
                i = {
                    startTypingInterval: (0, r.VP)("Typing/StartTypingInterval"),
                    stopTypingInterval: (0, r.VP)("Typing/StopTypingInterval")
                }
        },
        21677: function(e, t, a) {
            a.d(t, {
                BL: () => d,
                hT: () => p
            });
            var s = a(32675),
                r = a(1107),
                l = a(80073);
            a(45488);
            var n = a(69069),
                i = a(27767);
            let o = l.j.getLogger("gif"),
                d = e => {
                    let t = (0, i.tO)();
                    return (0, s.U)(e, t, n.Qt, {
                        disableUsingBlobArrayBuffer: !0
                    }).catch(t => (0, r.f)(e, n.Qt).catch(e => {
                        o.info("error creating thumbnail error = ", e)
                    }))
                },
                p = e => "image/gif" == e.type
        }
    }
]);
//# sourceMappingURL=4003.96993948.js.map