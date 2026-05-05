try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb61fa1a-8e95-45df-b557-66e734d92469", e._sentryDebugIdIdentifier = "sentry-dbid-eb61fa1a-8e95-45df-b557-66e734d92469")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9829"], {
        58625: function(e, r, t) {
            t.d(r, {
                A: () => i
            });
            var o = t(46756),
                a = t.n(o),
                n = t(5421),
                l = t.n(n)()(a());
            l.push([e.id, ".s0a4oa{--markdown-font-size:16px;color:var(--color-neutrals-n-500);white-space:pre-wrap;word-break:normal;overflow-wrap:anywhere;-webkit-user-select:text!important;user-select:text!important}.s0a4oa h1,.s0a4oa h2,.s0a4oa h3,.s0a4oa h4,.s0a4oa h5,.s0a4oa h6{margin:0;padding:0;font-weight:600}.s0a4oa p,.s0a4oa blockquote,.s0a4oa ul,.s0a4oa ol{margin:0;padding:0}.s0a4oa h1{font-size:calc(var(--markdown-font-size)*1.75);margin-block:.4em;line-height:1.3}.s0a4oa h2{font-size:calc(var(--markdown-font-size)*1.5);margin-block:.35em;line-height:1.3}.s0a4oa h3{font-size:calc(var(--markdown-font-size)*1.25);margin-block:.3em;line-height:1.35}.s0a4oa h4{font-size:calc(var(--markdown-font-size)*1.125);margin-block:.25em;line-height:1.4}.s0a4oa h5{font-size:var(--markdown-font-size);margin-block:.2em;line-height:1.4}.s0a4oa h6{font-size:calc(var(--markdown-font-size)*.875);margin-block:.2em;line-height:1.45}.s0a4oa p,.s0a4oa li{font-size:var(--markdown-font-size);line-height:1.6}.s0a4oa blockquote{font-size:var(--markdown-font-size);border-inline-start:3px solid var(--color-neutrals-n-200,#dfe1e6);margin-block:.3em;padding-inline-start:.75em;line-height:1.6}.s0a4oa ul,.s0a4oa ol{padding-inline-start:1.5em}.s0a4oa li{margin-block:.15em}.s0a4oa pre{word-break:break-word;font-family:inherit;font-size:calc(var(--markdown-font-size)*.9);direction:ltr;margin:0;padding:0;line-height:1.5;overflow-x:scroll}@media screen and (min-width:768px){.s0a4oa pre::-webkit-scrollbar{background-color:transparent;height:6px}.s0a4oa pre::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.2);border-radius:15px}.s0a4oa pre::-webkit-scrollbar-thumb:horizontal{min-height:6px}}.s0a4oa{--link-colors:var(--color-link)}.s0a4oa.UDxkSc{--link-colors:var(--color-fixed-link)}.s0a4oa .link{cursor:pointer;color:var(--link-colors)}.s0a4oa a{cursor:pointer;color:var(--link-colors);text-decoration:none}.s0a4oa a:hover{text-decoration:underline}.s0a4oa table{border-collapse:collapse;border-spacing:0;width:100%;max-width:-moz-fit-content;max-width:fit-content;margin:.75rem 0;display:block;overflow-x:auto}@media screen and (min-width:768px){.s0a4oa table::-webkit-scrollbar{background-color:transparent;height:6px}.s0a4oa table::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.15);border-radius:4px}}.s0a4oa th,.s0a4oa td{border:1px solid var(--color-neutrals-n-200,#dfe1e6);text-align:start;vertical-align:top;font-size:var(--markdown-font-size);padding:.5rem .75rem;line-height:1.5}.s0a4oa th{background-color:var(--color-neutrals-n-50,#f4f5f7);font-weight:600}.s0a4oa tr:nth-child(2n){background-color:var(--color-neutrals-n-40,#fafbfc)}.s0a4oa thead tr,.s0a4oa thead tr:hover{background-color:var(--color-neutrals-n-100,#f4f5f7)}.s0a4oa .katex-display{text-align:center;direction:ltr;margin:.75rem 0;display:block;overflow:auto hidden}@media screen and (min-width:768px){.s0a4oa .katex-display::-webkit-scrollbar{background-color:transparent;height:4px}.s0a4oa .katex-display::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.15);border-radius:4px}}.s0a4oa .katex{font-size:calc(var(--markdown-font-size)*1.15);direction:ltr;unicode-bidi:isolate}.s0a4oa .katex-error{color:var(--color-error,#c00);font-family:monospace;font-size:calc(var(--markdown-font-size)*.9)}.s0a4oa .checklist-item{gap:.75rem;list-style:none;display:flex}.s0a4oa .checklist-item:not(:last-child){padding-bottom:.5rem}.s0a4oa .custom-checkbox{cursor:pointer;background-color:transparent;border-radius:.5rem;justify-content:center;align-items:center;gap:8px;width:2rem;height:2rem;line-height:22.5px;display:flex}.s0a4oa .custom-checkbox .checkbox{opacity:0;cursor:pointer;width:20px;height:20px;position:absolute}.s0a4oa .checkbox-box{-webkit-user-select:none;user-select:none;cursor:pointer;border:1.5px solid #5e6c84;border-radius:.5rem;justify-content:center;align-items:center;width:20px;height:20px;font-size:16px;display:flex}.s0a4oa .custom-checkbox .checkbox:checked + .checkbox-box{color:#fff;cursor:pointer;background-color:#00b894;border:none}.s0a4oa .mention{cursor:pointer;color:var(--link-colors)}.s0a4oa .hashtag{cursor:pointer;color:var(--link-colors)}.s0a4oa .email{cursor:pointer;color:var(--link-colors)}.s0a4oa .moretext{cursor:pointer;color:var(--link-colors);margin-block:0}.s0a4oa .highlight_query{background-color:var(--color-highlight,rgba(255,235,59,.4));border-radius:2px;padding:0 2px}", ""]), l.locals = {
                richMarkdownText: "s0a4oa",
                isFixed: "UDxkSc"
            };
            let i = l
        },
        92196: function(e, r, t) {
            t.r(r), t.d(r, {
                RichMarkdownText: () => el,
                default: () => ei
            });
            var o, a, n, l, i, s, c, d = t(45831),
                h = t(58191),
                u = t.n(h),
                p = t(72343),
                m = t(34185),
                b = t(46122),
                f = t(45612),
                g = t(32165),
                k = t(87438),
                x = t(57243),
                w = t.n(x),
                v = t(9794),
                y = t(2077),
                z = t(47002),
                Y = t(62025),
                A = t(41941),
                C = t(45277),
                T = t(44251);
            let M = "moretext:",
                N = "send:",
                S = "command:",
                j = "hashtag:",
                E = [M, N, S, j],
                $ = e => !e || /\s/.test(e),
                D = e => {
                    let r = new TextEncoder().encode(e),
                        t = "";
                    return r.forEach(e => t += String.fromCharCode(e)), btoa(t)
                },
                _ = e => {
                    if (!e) return null;
                    try {
                        let r = atob(e),
                            t = new Uint8Array(r.length);
                        for (let e = 0; e < r.length; e++) t[e] = r.charCodeAt(e);
                        return new TextDecoder().decode(t)
                    } catch {
                        return null
                    }
                },
                R = e => "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "",
                I = /```\s*\[([^\]]+)]([\s\S]*?)```/g,
                P = /\[([^\]]+)\]\(send:([^)]+)\)/g,
                q = /\/[a-zA-Z0-9_]+/g,
                W = /#[^\s!@#$%^&*()=+./,[\]{}\\;:'"?؟><]+/g,
                U = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            isPreview: r = !1,
                            shouldParseBotCommands: t = !1,
                            isBotMessage: o
                        } = e,
                        a = (0, y.wA)(),
                        {
                            formatMessage: n
                        } = (0, A.t)(),
                        l = (0, h.useCallback)(e => {
                            let r = R(e);
                            return (0, d.Y)("span", {
                                children: r
                            })
                        }, []),
                        i = (0, h.useCallback)((e, r) => {
                            a(z.NS.openModal("MoreText", {
                                content: r,
                                title: e
                            }, {
                                keepBackModal: !0
                            }))
                        }, [a]),
                        s = (0, h.useCallback)(e => {
                            o && a(Y.on.sendTextMessage(e))
                        }, [a, n, o]),
                        c = (0, h.useCallback)(e => {
                            a(Y.on.sendTextMessage(e))
                        }, [a]),
                        u = (0, h.useCallback)(e => {
                            (0, T.k)("MESSAGE_SEARCH") || (0, T.YV)("MESSAGE_SEARCH"), a(C.oN.setPeerMessageSearchMode(e)), a(C.oN.changeMessagesSearchQuery({
                                preventDebounce: !0,
                                value: e,
                                withGotoMessage: !0,
                                date: 0
                            }))
                        }, [a]),
                        p = (0, h.useCallback)(e => {
                            let r, o, a = e.replace(I, (e, r, t) => {
                                let o = D(t);
                                return `[${r}](${M}${o})`
                            });
                            return a = (r = a = a.replace(P, (e, r, t) => {
                                let o;
                                try {
                                    o = decodeURI(t)
                                } catch {
                                    o = t
                                }
                                let a = D(o);
                                return `[${r}](send:${a})`
                            })).replace(W, (e, t) => {
                                if (!$(t > 0 ? r[t - 1] : void 0)) return e;
                                let o = D(e);
                                return `[${e}](${j}${o})`
                            }), t && (a = (o = a).replace(q, (e, r) => {
                                if (!$(r > 0 ? o[r - 1] : void 0)) return e;
                                let t = D(e);
                                return `[${e}](${S}${t})`
                            })), a
                        }, [t]),
                        m = (0, h.useCallback)((e, t) => {
                            let o;
                            if (r) return l(t);
                            let a = null === (o = _(e)) ? null : Array.from(new TextEncoder().encode(o)).join(",");
                            if (null === a) {
                                let e = R(t);
                                return (0, d.Y)("span", {
                                    children: e
                                })
                            }
                            let n = R(t);
                            return (0, d.Y)("p", {
                                className: "moretext",
                                dir: "auto",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), i(n, a)
                                },
                                children: n
                            })
                        }, [r, l, i]),
                        b = (0, h.useCallback)((e, t) => {
                            if (r) return l(t);
                            let o = _(e),
                                a = R(t);
                            return null === o ? (0, d.Y)("span", {
                                children: a
                            }) : (0, d.Y)("a", {
                                href: "#",
                                className: "link",
                                dir: "auto",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), s(o)
                                },
                                children: a
                            })
                        }, [r, l, s]),
                        f = (0, h.useCallback)((e, t) => {
                            if (r) return l(t);
                            let o = _(e),
                                a = R(t);
                            return null === o ? (0, d.Y)("span", {
                                children: a
                            }) : (0, d.Y)("a", {
                                href: "#",
                                className: "link",
                                dir: "auto",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), c(o)
                                },
                                children: a
                            })
                        }, [r, l, c]),
                        g = (0, h.useCallback)((e, t) => {
                            if (r) return l(t);
                            let o = _(e),
                                a = R(t);
                            return null === o ? (0, d.Y)("span", {
                                children: a
                            }) : (0, d.Y)("span", {
                                className: "hashtag",
                                dir: "auto",
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), u(o)
                                },
                                children: a
                            })
                        }, [r, l, u]);
                    return {
                        preprocessText: p,
                        renderInternalLink: (0, h.useCallback)((e, r) => {
                            if (!e) return null;
                            let t = e.startsWith(M) ? {
                                protocol: M,
                                content: e.slice(M.length)
                            } : e.startsWith(N) ? {
                                protocol: N,
                                content: e.slice(N.length)
                            } : e.startsWith(S) ? {
                                protocol: S,
                                content: e.slice(S.length)
                            } : e.startsWith(j) ? {
                                protocol: j,
                                content: e.slice(j.length)
                            } : null;
                            if (!t) return null;
                            let {
                                protocol: o,
                                content: a
                            } = t;
                            return o === M ? m(a, r) : "send:" === o ? b(a, r) : o === S ? f(a, r) : o === j ? g(a, r) : null
                        }, [m, b, f, g])
                    }
                };
            var B = t(53321),
                G = t.n(B),
                L = t(23518),
                F = t.n(L),
                H = t(14182),
                V = t.n(H),
                Q = t(5033),
                Z = t.n(Q),
                J = t(77141),
                K = t.n(J),
                O = t(66338),
                X = t.n(O),
                ee = t(58625),
                er = {};
            er.styleTagTransform = X(), er.setAttributes = Z(), er.insert = V().bind(null, "head"), er.domAPI = F(), er.insertStyleElement = K(), G()(ee.A, er);
            let et = ee.A && ee.A.locals ? ee.A.locals : void 0;
            t(52548);
            let eo = e => E.some(r => e.startsWith(r)) ? e : (0, p.Lv)(e),
                ea = {
                    ...g.j,
                    attributes: {
                        ...g.j.attributes,
                        "*": [...(null == (o = g.j.attributes) ? void 0 : o["*"]) ?? [], "aria-hidden"],
                        span: [...(null == (a = g.j.attributes) ? void 0 : a.span) ?? [],
                            ["className", /^[a-z][a-z0-9-]*$/], "style"
                        ],
                        div: [...(null == (n = g.j.attributes) ? void 0 : n.div) ?? [],
                            ["className", /^[a-z][a-z0-9-]*$/], "style"
                        ],
                        math: [...(null == (l = g.j.attributes) ? void 0 : l.math) ?? [], "xmlns", "display"],
                        annotation: [...(null == (i = g.j.attributes) ? void 0 : i.annotation) ?? [], "encoding"],
                        "annotation-xml": [...(null == (s = g.j.attributes) ? void 0 : s["annotation-xml"]) ?? [], "encoding"],
                        svg: ["xmlns", "width", "height", "viewBox", "preserveAspectRatio", "style"],
                        path: ["d", "fill", "stroke", "stroke-width"],
                        g: ["transform", "fill", "stroke"],
                        line: ["x1", "y1", "x2", "y2", "stroke", "stroke-width"],
                        rect: ["x", "y", "width", "height", "fill", "stroke"],
                        circle: ["cx", "cy", "r", "fill", "stroke"],
                        use: ["href", "x", "y", "width", "height"],
                        defs: [],
                        symbol: ["id", "viewBox"]
                    },
                    tagNames: [...g.j.tagNames ?? [], "math", "annotation", "annotation-xml", "semantics", "mrow", "mi", "mo", "mn", "msup", "msub", "msubsup", "mfrac", "mroot", "msqrt", "mtext", "mspace", "mover", "munder", "munderover", "mtable", "mtr", "mtd", "menclose", "mpadded", "mphantom", "mglyph", "svg", "path", "g", "line", "rect", "circle", "use", "defs", "symbol"],
                    protocols: {
                        ...g.j.protocols,
                        href: [...(null == (c = g.j.protocols) ? void 0 : c.href) ?? ["http", "https", "mailto"], ...E.map(e => e.replace(":", ""))]
                    }
                },
                en = e => {
                    let r = function e(r) {
                        return u().Children.toArray(r).map(r => "string" == typeof r ? r : "number" == typeof r ? String(r) : u().isValidElement(r) && r.props && "children" in r.props ? e(r.props.children) : "").join("")
                    }(e);
                    return (0, v._T)(r)
                },
                el = e => {
                    let {
                        text: r,
                        className: t,
                        isPreview: o = !1,
                        direction: a,
                        useFixedColors: n = !1,
                        shouldParseBotCommands: l = !1
                    } = e, {
                        preprocessText: i,
                        renderInternalLink: s
                    } = U({
                        isPreview: o,
                        shouldParseBotCommands: l
                    }), c = (0, h.useMemo)(() => i(r), [i, r]), u = (0, h.useMemo)(() => ({
                        p: e => {
                            let {
                                children: r
                            } = e;
                            return o ? (0, d.Y)("span", {
                                children: r
                            }) : (0, d.Y)("span", {
                                className: "p",
                                dir: en(r),
                                children: r
                            })
                        },
                        h1: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h1", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        h2: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h2", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        h3: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h3", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        h4: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h4", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        h5: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h5", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        h6: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("h6", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        li: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("li", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        blockquote: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("blockquote", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        td: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("td", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        th: e => {
                            let {
                                children: r,
                                node: t,
                                ...o
                            } = e;
                            return (0, d.Y)("th", {
                                ...o,
                                dir: en(r),
                                children: r
                            })
                        },
                        a: e => {
                            let {
                                href: r,
                                children: t
                            } = e, a = s(r, t);
                            return a || (o ? (0, d.Y)("span", {
                                children: t
                            }) : (0, d.Y)("a", {
                                href: r,
                                className: "link",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                dir: "auto",
                                children: t
                            }))
                        },
                        code: e => {
                            let {
                                className: r,
                                children: t,
                                node: o,
                                ...a
                            } = e, n = /language-(\w+)/.exec(r ?? ""), l = n ? n[1] : "";
                            return n ? (0, d.Y)("pre", {
                                dir: "ltr",
                                children: (0, d.Y)("code", {
                                    className: "code",
                                    "data-lang": l,
                                    ...a,
                                    children: t
                                })
                            }) : (0, d.Y)("code", {
                                ...a,
                                children: t
                            })
                        },
                        strong: e => {
                            let {
                                children: r
                            } = e;
                            return (0, d.Y)("strong", {
                                children: r
                            })
                        },
                        em: e => {
                            let {
                                children: r
                            } = e;
                            return (0, d.Y)("em", {
                                children: r
                            })
                        },
                        br: () => (0, d.Y)("br", {}),
                        img: e => {
                            let {
                                src: r,
                                alt: t
                            } = e;
                            return r ? (0, d.Y)("a", {
                                href: r,
                                className: "link",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                dir: "auto",
                                children: t ?? r
                            }) : null
                        }
                    }), [o, s]);
                    return (0, d.Y)("div", {
                        className: w()(et.richMarkdownText, t, {
                            [et.isFixed]: n
                        }),
                        dir: a,
                        "data-sentry-component": "RichMarkdownText",
                        "data-sentry-source-file": "RichMarkdownText.tsx",
                        children: (0, d.Y)(p.oz, {
                            remarkPlugins: [m.A, f.A],
                            rehypePlugins: [
                                [b.A, {
                                    trust: !1
                                }],
                                [k.A, ea]
                            ],
                            components: u,
                            urlTransform: eo,
                            "data-sentry-element": "ReactMarkdown",
                            "data-sentry-source-file": "RichMarkdownText.tsx",
                            children: c
                        })
                    })
                },
                ei = el
        }
    }
]);
//# sourceMappingURL=9829.f7a34f06.js.map