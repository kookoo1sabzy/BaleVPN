try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "69a36f6e-02f7-460e-91b8-e13a57cc5841", e._sentryDebugIdIdentifier = "sentry-dbid-69a36f6e-02f7-460e-91b8-e13a57cc5841")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5334"], {
        76336: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: () => r
            });
            var i = n(57899);
            let r = n.n(i)()
        },
        57899: function(e) {
            class t {
                ignoreMatch() {
                    this.isMatchIgnored = !0
                }
                constructor(e) {
                    void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
                }
            }

            function n(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
            }

            function i(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                let r = Object.create(null);
                for (let t in e) r[t] = e[t];
                return n.forEach(function(e) {
                    for (let t in e) r[t] = e[t]
                }), r
            }
            class r {
                addText(e) {
                    this.buffer += n(e)
                }
                openNode(e) {
                    if (!e.scope) return;
                    let t = ((e, t) => {
                        let {
                            prefix: n
                        } = t;
                        if (e.startsWith("language:")) return e.replace("language:", "language-");
                        if (e.includes(".")) {
                            let t = e.split(".");
                            return [`${n}${t.shift()}`, ...t.map((e, t) => `${e}${"_".repeat(t+1)}`)].join(" ")
                        }
                        return `${n}${e}`
                    })(e.scope, {
                        prefix: this.classPrefix
                    });
                    this.span(t)
                }
                closeNode(e) {
                    e.scope && (this.buffer += "</span>")
                }
                value() {
                    return this.buffer
                }
                span(e) {
                    this.buffer += `<span class="${e}">`
                }
                constructor(e, t) {
                    this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
                }
            }
            let o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = {
                        children: []
                    };
                return Object.assign(t, e), t
            };
            class s {
                get top() {
                    return this.stack[this.stack.length - 1]
                }
                get root() {
                    return this.rootNode
                }
                add(e) {
                    this.top.children.push(e)
                }
                openNode(e) {
                    let t = o({
                        scope: e
                    });
                    this.add(t), this.stack.push(t)
                }
                closeNode() {
                    if (this.stack.length > 1) return this.stack.pop()
                }
                closeAllNodes() {
                    for (; this.closeNode(););
                }
                toJSON() {
                    return JSON.stringify(this.rootNode, null, 4)
                }
                walk(e) {
                    return this.constructor._walk(e, this.rootNode)
                }
                static _walk(e, t) {
                    return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
                }
                static _collapse(e) {
                    "string" == typeof e || e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                        s._collapse(e)
                    }))
                }
                constructor() {
                    this.rootNode = o(), this.stack = [this.rootNode]
                }
            }
            class a extends s {
                addText(e) {
                    "" !== e && this.add(e)
                }
                startScope(e) {
                    this.openNode(e)
                }
                endScope() {
                    this.closeNode()
                }
                __addSublanguage(e, t) {
                    let n = e.root;
                    t && (n.scope = `language:${t}`), this.add(n)
                }
                toHTML() {
                    return new r(this, this.options).value()
                }
                finalize() {
                    return this.closeAllNodes(), !0
                }
                constructor(e) {
                    super(), this.options = e
                }
            }

            function l(e) {
                return e ? "string" == typeof e ? e : e.source : null
            }

            function c(e) {
                return d("(?=", e, ")")
            }

            function g(e) {
                return d("(?:", e, ")*")
            }

            function u(e) {
                return d("(?:", e, ")?")
            }

            function d() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.map(e => l(e)).join("")
            }

            function h() {
                let e;
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return "(" + (("object" == typeof(e = n[n.length - 1]) && e.constructor === Object ? (n.splice(n.length - 1, 1), e) : {}).capture ? "" : "?:") + n.map(e => l(e)).join("|") + ")"
            }

            function f(e) {
                return RegExp(e.toString() + "|").exec("").length - 1
            }
            let p = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

            function b(e, t) {
                let {
                    joinWith: n
                } = t, i = 0;
                return e.map(e => {
                    let t = i += 1,
                        n = l(e),
                        r = "";
                    for (; n.length > 0;) {
                        let e = p.exec(n);
                        if (!e) {
                            r += n;
                            break
                        }
                        r += n.substring(0, e.index), n = n.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? r += "\\" + String(Number(e[1]) + t) : (r += e[0], "(" === e[0] && i++)
                    }
                    return r
                }).map(e => `(${e})`).join(n)
            }
            let m = "[a-zA-Z]\\w*",
                E = "[a-zA-Z_]\\w*",
                y = "\\b\\d+(\\.\\d+)?",
                w = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
                x = "\\b(0b[01]+)",
                _ = {
                    begin: "\\\\[\\s\\S]",
                    relevance: 0
                },
                v = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = i({
                            scope: "comment",
                            begin: e,
                            end: t,
                            contains: []
                        }, n);
                    r.contains.push({
                        scope: "doctag",
                        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                        excludeBegin: !0,
                        relevance: 0
                    });
                    let o = h("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
                    return r.contains.push({
                        begin: d(/[ ]+/, "(", o, /[.]?[:]?([.][ ]|[ ])/, "){3}")
                    }), r
                },
                k = v("//", "$"),
                O = v("/\\*", "\\*/"),
                S = v("#", "$");
            var N = Object.freeze({
                __proto__: null,
                APOS_STRING_MODE: {
                    scope: "string",
                    begin: "'",
                    end: "'",
                    illegal: "\\n",
                    contains: [_]
                },
                BACKSLASH_ESCAPE: _,
                BINARY_NUMBER_MODE: {
                    scope: "number",
                    begin: x,
                    relevance: 0
                },
                BINARY_NUMBER_RE: x,
                COMMENT: v,
                C_BLOCK_COMMENT_MODE: O,
                C_LINE_COMMENT_MODE: k,
                C_NUMBER_MODE: {
                    scope: "number",
                    begin: w,
                    relevance: 0
                },
                C_NUMBER_RE: w,
                END_SAME_AS_BEGIN: function(e) {
                    return Object.assign(e, {
                        "on:begin": (e, t) => {
                            t.data._beginMatch = e[1]
                        },
                        "on:end": (e, t) => {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                },
                HASH_COMMENT_MODE: S,
                IDENT_RE: m,
                MATCH_NOTHING_RE: /\b\B/,
                METHOD_GUARD: {
                    begin: "\\.\\s*" + E,
                    relevance: 0
                },
                NUMBER_MODE: {
                    scope: "number",
                    begin: y,
                    relevance: 0
                },
                NUMBER_RE: y,
                PHRASAL_WORDS_MODE: {
                    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
                },
                QUOTE_STRING_MODE: {
                    scope: "string",
                    begin: '"',
                    end: '"',
                    illegal: "\\n",
                    contains: [_]
                },
                REGEXP_MODE: {
                    scope: "regexp",
                    begin: /\/(?=[^/\n]*\/)/,
                    end: /\/[gimuy]*/,
                    contains: [_, {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [_]
                    }]
                },
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = /^#![ ]*\//;
                    return e.binary && (e.begin = d(t, /.*\b/, e.binary, /\b.*/)), i({
                        scope: "meta",
                        begin: t,
                        end: /$/,
                        relevance: 0,
                        "on:begin": (e, t) => {
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, e)
                },
                TITLE_MODE: {
                    scope: "title",
                    begin: m,
                    relevance: 0
                },
                UNDERSCORE_IDENT_RE: E,
                UNDERSCORE_TITLE_MODE: {
                    scope: "title",
                    begin: E,
                    relevance: 0
                }
            });

            function M(e, t) {
                "." === e.input[e.index - 1] && t.ignoreMatch()
            }

            function R(e, t) {
                void 0 !== e.className && (e.scope = e.className, delete e.className)
            }

            function A(e, t) {
                !t || e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = M, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
            }

            function I(e, t) {
                Array.isArray(e.illegal) && (e.illegal = h(...e.illegal))
            }

            function T(e, t) {
                if (e.match) {
                    if (e.begin || e.end) throw Error("begin & end are not supported with match");
                    e.begin = e.match, delete e.match
                }
            }

            function j(e, t) {
                void 0 === e.relevance && (e.relevance = 1)
            }
            let L = (e, t) => {
                    if (!e.beforeMatch) return;
                    if (e.starts) throw Error("beforeMatch cannot be used with starts");
                    let n = Object.assign({}, e);
                    Object.keys(e).forEach(t => {
                        delete e[t]
                    }), e.keywords = n.keywords, e.begin = d(n.beforeMatch, c(n.begin)), e.starts = {
                        relevance: 0,
                        contains: [Object.assign(n, {
                            endsParent: !0
                        })]
                    }, e.relevance = 0, delete n.beforeMatch
                },
                B = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
                D = {},
                H = e => {
                    console.error(e)
                },
                P = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    console.log(`WARN: ${e}`, ...n)
                },
                C = (e, t) => {
                    D[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), D[`${e}/${t}`] = !0)
                },
                $ = Error();

            function U(e, t, n) {
                let {
                    key: i
                } = n, r = 0, o = e[i], s = {}, a = {};
                for (let e = 1; e <= t.length; e++) a[e + r] = o[e], s[e + r] = !0, r += f(t[e - 1]);
                e[i] = a, e[i]._emit = s, e[i]._multi = !0
            }

            function z(e) {
                if (e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope, delete e.scope), "string" == typeof e.beginScope && (e.beginScope = {
                        _wrap: e.beginScope
                    }), "string" == typeof e.endScope && (e.endScope = {
                        _wrap: e.endScope
                    }), Array.isArray(e.begin)) {
                    if (e.skip || e.excludeBegin || e.returnBegin) throw H("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), $;
                    if ("object" != typeof e.beginScope || null === e.beginScope) throw H("beginScope must be object"), $;
                    U(e, e.begin, {
                        key: "beginScope"
                    }), e.begin = b(e.begin, {
                        joinWith: ""
                    })
                }
                if (Array.isArray(e.end)) {
                    if (e.skip || e.excludeEnd || e.returnEnd) throw H("skip, excludeEnd, returnEnd not compatible with endScope: {}"), $;
                    if ("object" != typeof e.endScope || null === e.endScope) throw H("endScope must be object"), $;
                    U(e, e.end, {
                        key: "endScope"
                    }), e.end = b(e.end, {
                        joinWith: ""
                    })
                }
            }
            class W extends Error {
                constructor(e, t) {
                    super(e), this.name = "HTMLInjectionError", this.html = t
                }
            }
            let X = Symbol("nomatch"),
                G = function(e) {
                    let r = Object.create(null),
                        o = Object.create(null),
                        s = [],
                        p = !0,
                        m = "Could not find the language '{}', did you forget to load/include a language module?",
                        E = {
                            disableAutodetect: !0,
                            name: "Plain text",
                            contains: []
                        },
                        y = {
                            ignoreUnescapedHTML: !1,
                            throwUnescapedHTML: !1,
                            noHighlightRe: /^(no-?highlight)$/i,
                            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                            classPrefix: "hljs-",
                            cssSelector: "pre code",
                            languages: null,
                            __emitter: a
                        };

                    function w(e) {
                        return y.noHighlightRe.test(e)
                    }

                    function x(e, t, n) {
                        let i = "",
                            r = "";
                        "object" == typeof t ? (i = e, n = t.ignoreIllegals, r = t.language) : (C("10.7.0", "highlight(lang, code, ...args) has been deprecated."), C("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), r = e, i = t), void 0 === n && (n = !0);
                        let o = {
                            code: i,
                            language: r
                        };
                        U("before:highlight", o);
                        let s = o.result ? o.result : _(o.language, o.code, n);
                        return s.code = o.code, U("after:highlight", s), s
                    }

                    function _(e, o, s, a) {
                        let c = Object.create(null);

                        function g() {
                            if (!N.keywords) return void P.addText($);
                            let e = 0;
                            N.keywordPatternRe.lastIndex = 0;
                            let t = N.keywordPatternRe.exec($),
                                n = "";
                            for (; t;) {
                                n += $.substring(e, t.index);
                                let i = k.case_insensitive ? t[0].toLowerCase() : t[0],
                                    r = N.keywords[i];
                                if (r) {
                                    let [e, o] = r;
                                    if (P.addText(n), n = "", c[i] = (c[i] || 0) + 1, c[i] <= 7 && (U += o), e.startsWith("_")) n += t[0];
                                    else {
                                        let n = k.classNameAliases[e] || e;
                                        d(t[0], n)
                                    }
                                } else n += t[0];
                                e = N.keywordPatternRe.lastIndex, t = N.keywordPatternRe.exec($)
                            }
                            n += $.substring(e), P.addText(n)
                        }

                        function u() {
                            null != N.subLanguage ? function() {
                                if ("" === $) return;
                                let e = null;
                                if ("string" == typeof N.subLanguage) {
                                    if (!r[N.subLanguage]) return P.addText($);
                                    e = _(N.subLanguage, $, !0, D[N.subLanguage]), D[N.subLanguage] = e._top
                                } else e = v($, N.subLanguage.length ? N.subLanguage : null);
                                N.relevance > 0 && (U += e.relevance), P.__addSublanguage(e._emitter, e.language)
                            }() : g(), $ = ""
                        }

                        function d(e, t) {
                            "" !== e && (P.startScope(t), P.addText(e), P.endScope())
                        }

                        function h(e, t) {
                            let n = 1,
                                i = t.length - 1;
                            for (; n <= i;) {
                                if (!e._emit[n]) {
                                    n++;
                                    continue
                                }
                                let i = k.classNameAliases[e[n]] || e[n],
                                    r = t[n];
                                i ? d(r, i) : ($ = r, g(), $ = ""), n++
                            }
                        }

                        function E(e, t) {
                            return e.scope && "string" == typeof e.scope && P.openNode(k.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (d($, k.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), $ = "") : e.beginScope._multi && (h(e.beginScope, t), $ = "")), N = Object.create(e, {
                                parent: {
                                    value: N
                                }
                            })
                        }
                        let w = {};

                        function x(n, i) {
                            let r = i && i[0];
                            if ($ += n, null == r) return u(), 0;
                            if ("begin" === w.type && "end" === i.type && w.index === i.index && "" === r) {
                                if ($ += o.slice(i.index, i.index + 1), !p) {
                                    let t = Error(`0 width match regex (${e})`);
                                    throw t.languageName = e, t.badRule = w.rule, t
                                }
                                return 1
                            }
                            if (w = i, "begin" === i.type) {
                                let e = i[0],
                                    n = i.rule,
                                    r = new t(n);
                                for (let t of [n.__beforeBegin, n["on:begin"]])
                                    if (t && (t(i, r), r.isMatchIgnored)) return 0 === N.matcher.regexIndex ? ($ += e[0], 1) : (K = !0, 0);
                                return n.skip ? $ += e : (n.excludeBegin && ($ += e), u(), n.returnBegin || n.excludeBegin || ($ = e)), E(n, i), n.returnBegin ? 0 : e.length
                            }
                            if ("illegal" !== i.type || s) {
                                if ("end" === i.type) {
                                    let e = function(e) {
                                        let n = e[0],
                                            i = o.substring(e.index),
                                            r = function e(n, i, r) {
                                                var o;
                                                let s, a = (o = n.endRe, (s = o && o.exec(r)) && 0 === s.index);
                                                if (a) {
                                                    if (n["on:end"]) {
                                                        let e = new t(n);
                                                        n["on:end"](i, e), e.isMatchIgnored && (a = !1)
                                                    }
                                                    if (a) {
                                                        for (; n.endsParent && n.parent;) n = n.parent;
                                                        return n
                                                    }
                                                }
                                                if (n.endsWithParent) return e(n.parent, i, r)
                                            }(N, e, i);
                                        if (!r) return X;
                                        let s = N;
                                        N.endScope && N.endScope._wrap ? (u(), d(n, N.endScope._wrap)) : N.endScope && N.endScope._multi ? (u(), h(N.endScope, e)) : s.skip ? $ += n : (s.returnEnd || s.excludeEnd || ($ += n), u(), s.excludeEnd && ($ = n));
                                        do N.scope && P.closeNode(), N.skip || N.subLanguage || (U += N.relevance), N = N.parent; while (N !== r.parent);
                                        return r.starts && E(r.starts, e), s.returnEnd ? 0 : n.length
                                    }(i);
                                    if (e !== X) return e
                                }
                            } else {
                                let e = Error('Illegal lexeme "' + r + '" for mode "' + (N.scope || "<unnamed>") + '"');
                                throw e.mode = N, e
                            }
                            if ("illegal" === i.type && "" === r) return $ += "\n", 1;
                            if (G > 1e5 && G > 3 * i.index) throw Error("potential infinite loop, way more iterations than matches");
                            return $ += r, r.length
                        }
                        let k = M(e);
                        if (!k) throw H(m.replace("{}", e)), Error('Unknown language: "' + e + '"');
                        let O = function(e) {
                                function t(t, n) {
                                    return RegExp(l(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
                                }
                                class n {
                                    addRule(e, t) {
                                        t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += f(e) + 1
                                    }
                                    compile() {
                                        0 === this.regexes.length && (this.exec = () => null);
                                        let e = this.regexes.map(e => e[1]);
                                        this.matcherRe = t(b(e, {
                                            joinWith: "|"
                                        }), !0), this.lastIndex = 0
                                    }
                                    exec(e) {
                                        this.matcherRe.lastIndex = this.lastIndex;
                                        let t = this.matcherRe.exec(e);
                                        if (!t) return null;
                                        let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                            i = this.matchIndexes[n];
                                        return t.splice(0, n), Object.assign(t, i)
                                    }
                                    constructor() {
                                        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                                    }
                                }
                                class r {
                                    getMatcher(e) {
                                        if (this.multiRegexes[e]) return this.multiRegexes[e];
                                        let t = new n;
                                        return this.rules.slice(e).forEach(e => {
                                            let [n, i] = e;
                                            return t.addRule(n, i)
                                        }), t.compile(), this.multiRegexes[e] = t, t
                                    }
                                    resumingScanAtSamePosition() {
                                        return 0 !== this.regexIndex
                                    }
                                    considerAll() {
                                        this.regexIndex = 0
                                    }
                                    addRule(e, t) {
                                        this.rules.push([e, t]), "begin" === t.type && this.count++
                                    }
                                    exec(e) {
                                        let t = this.getMatcher(this.regexIndex);
                                        t.lastIndex = this.lastIndex;
                                        let n = t.exec(e);
                                        if (this.resumingScanAtSamePosition())
                                            if (n && n.index === this.lastIndex);
                                            else {
                                                let t = this.getMatcher(0);
                                                t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                                            } return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                                    }
                                    constructor() {
                                        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                                    }
                                }
                                if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                                return e.classNameAliases = i(e.classNameAliases || {}),
                                    function n(o, s) {
                                        let a;
                                        if (o.isCompiled) return o;
                                        [R, T, z, L].forEach(e => e(o, s)), e.compilerExtensions.forEach(e => e(o, s)), o.__beforeBegin = null, [A, I, j].forEach(e => e(o, s)), o.isCompiled = !0;
                                        let c = null;
                                        return "object" == typeof o.keywords && o.keywords.$pattern && (o.keywords = Object.assign({}, o.keywords), c = o.keywords.$pattern, delete o.keywords.$pattern), c = c || /\w+/, o.keywords && (o.keywords = function e(t, n) {
                                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword",
                                                r = Object.create(null);
                                            return "string" == typeof t ? o(i, t.split(" ")) : Array.isArray(t) ? o(i, t) : Object.keys(t).forEach(function(i) {
                                                Object.assign(r, e(t[i], n, i))
                                            }), r;

                                            function o(e, t) {
                                                n && (t = t.map(e => e.toLowerCase())), t.forEach(function(t) {
                                                    var n, i, o;
                                                    let s = t.split("|");
                                                    r[s[0]] = [e, (n = s[0], (i = s[1]) ? Number(i) : +(o = n, !B.includes(o.toLowerCase())))]
                                                })
                                            }
                                        }(o.keywords, e.case_insensitive)), o.keywordPatternRe = t(c, !0), s && (o.begin || (o.begin = /\B|\b/), o.beginRe = t(o.begin), o.end || o.endsWithParent || (o.end = /\B|\b/), o.end && (o.endRe = t(o.end)), o.terminatorEnd = l(o.end) || "", o.endsWithParent && s.terminatorEnd && (o.terminatorEnd += (o.end ? "|" : "") + s.terminatorEnd)), o.illegal && (o.illegalRe = t(o.illegal)), o.contains || (o.contains = []), o.contains = [].concat(...o.contains.map(function(e) {
                                            var t;
                                            return ((t = "self" === e ? o : e).variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function(e) {
                                                return i(t, {
                                                    variants: null
                                                }, e)
                                            })), t.cachedVariants) ? t.cachedVariants : ! function e(t) {
                                                return !!t && (t.endsWithParent || e(t.starts))
                                            }(t) ? Object.isFrozen(t) ? i(t) : t : i(t, {
                                                starts: t.starts ? i(t.starts) : null
                                            })
                                        })), o.contains.forEach(function(e) {
                                            n(e, o)
                                        }), o.starts && n(o.starts, s), a = new r, o.contains.forEach(e => a.addRule(e.begin, {
                                            rule: e,
                                            type: "begin"
                                        })), o.terminatorEnd && a.addRule(o.terminatorEnd, {
                                            type: "end"
                                        }), o.illegal && a.addRule(o.illegal, {
                                            type: "illegal"
                                        }), o.matcher = a, o
                                    }(e)
                            }(k),
                            S = "",
                            N = a || O,
                            D = {},
                            P = new y.__emitter(y),
                            C = [];
                        for (let e = N; e !== k; e = e.parent) e.scope && C.unshift(e.scope);
                        C.forEach(e => P.openNode(e));
                        let $ = "",
                            U = 0,
                            W = 0,
                            G = 0,
                            K = !1;
                        try {
                            if (k.__emitTokens) k.__emitTokens(o, P);
                            else {
                                for (N.matcher.considerAll();;) {
                                    G++, K ? K = !1 : N.matcher.considerAll(), N.matcher.lastIndex = W;
                                    let e = N.matcher.exec(o);
                                    if (!e) break;
                                    let t = o.substring(W, e.index),
                                        n = x(t, e);
                                    W = e.index + n
                                }
                                x(o.substring(W))
                            }
                            return P.finalize(), S = P.toHTML(), {
                                language: e,
                                value: S,
                                relevance: U,
                                illegal: !1,
                                _emitter: P,
                                _top: N
                            }
                        } catch (t) {
                            if (t.message && t.message.includes("Illegal")) return {
                                language: e,
                                value: n(o),
                                illegal: !0,
                                relevance: 0,
                                _illegalBy: {
                                    message: t.message,
                                    index: W,
                                    context: o.slice(W - 100, W + 100),
                                    mode: t.mode,
                                    resultSoFar: S
                                },
                                _emitter: P
                            };
                            if (p) return {
                                language: e,
                                value: n(o),
                                illegal: !1,
                                relevance: 0,
                                errorRaised: t,
                                _emitter: P,
                                _top: N
                            };
                            throw t
                        }
                    }

                    function v(e, t) {
                        let i;
                        t = t || y.languages || Object.keys(r);
                        let o = ((i = {
                                value: n(e),
                                illegal: !1,
                                relevance: 0,
                                _top: E,
                                _emitter: new y.__emitter(y)
                            })._emitter.addText(e), i),
                            s = t.filter(M).filter($).map(t => _(t, e, !1));
                        s.unshift(o);
                        let [a, l] = s.sort((e, t) => {
                            if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                            if (e.language && t.language) {
                                if (M(e.language).supersetOf === t.language) return 1;
                                else if (M(t.language).supersetOf === e.language) return -1
                            }
                            return 0
                        });
                        return a.secondBest = l, a
                    }

                    function k(e) {
                        var t;
                        let n, i = function(e) {
                            let t = e.className + " ";
                            t += e.parentNode ? e.parentNode.className : "";
                            let n = y.languageDetectRe.exec(t);
                            if (n) {
                                let t = M(n[1]);
                                return t || (P(m.replace("{}", n[1])), P("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                            }
                            return t.split(/\s+/).find(e => w(e) || M(e))
                        }(e);
                        if (w(i)) return;
                        if (U("before:highlightElement", {
                                el: e,
                                language: i
                            }), e.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
                        if (e.children.length > 0 && (y.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), y.throwUnescapedHTML)) throw new W("One of your code blocks includes unescaped HTML.", e.innerHTML);
                        let r = e.textContent,
                            s = i ? x(r, {
                                language: i,
                                ignoreIllegals: !0
                            }) : v(r);
                        e.innerHTML = s.value, e.dataset.highlighted = "yes", t = s.language, n = i && o[i] || t, e.classList.add("hljs"), e.classList.add(`language-${n}`), e.result = {
                            language: s.language,
                            re: s.relevance,
                            relevance: s.relevance
                        }, s.secondBest && (e.secondBest = {
                            language: s.secondBest.language,
                            relevance: s.secondBest.relevance
                        }), U("after:highlightElement", {
                            el: e,
                            result: s,
                            text: r
                        })
                    }
                    let O = !1;

                    function S() {
                        if ("loading" === document.readyState) {
                            O || window.addEventListener("DOMContentLoaded", function() {
                                S()
                            }, !1), O = !0;
                            return
                        }
                        document.querySelectorAll(y.cssSelector).forEach(k)
                    }

                    function M(e) {
                        return r[e = (e || "").toLowerCase()] || r[o[e]]
                    }

                    function D(e, t) {
                        let {
                            languageName: n
                        } = t;
                        "string" == typeof e && (e = [e]), e.forEach(e => {
                            o[e.toLowerCase()] = n
                        })
                    }

                    function $(e) {
                        let t = M(e);
                        return t && !t.disableAutodetect
                    }

                    function U(e, t) {
                        s.forEach(function(n) {
                            n[e] && n[e](t)
                        })
                    }
                    for (let t in Object.assign(e, {
                            highlight: x,
                            highlightAuto: v,
                            highlightAll: S,
                            highlightElement: k,
                            highlightBlock: function(e) {
                                return C("10.7.0", "highlightBlock will be removed entirely in v12.0"), C("10.7.0", "Please use highlightElement now."), k(e)
                            },
                            configure: function(e) {
                                y = i(y, e)
                            },
                            initHighlighting: () => {
                                S(), C("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                            },
                            initHighlightingOnLoad: function() {
                                S(), C("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                            },
                            registerLanguage: function(t, n) {
                                let i = null;
                                try {
                                    i = n(e)
                                } catch (e) {
                                    if (H("Language definition for '{}' could not be registered.".replace("{}", t)), p) H(e);
                                    else throw e;
                                    i = E
                                }
                                i.name || (i.name = t), r[t] = i, i.rawDefinition = n.bind(null, e), i.aliases && D(i.aliases, {
                                    languageName: t
                                })
                            },
                            unregisterLanguage: function(e) {
                                for (let t of (delete r[e], Object.keys(o))) o[t] === e && delete o[t]
                            },
                            listLanguages: function() {
                                return Object.keys(r)
                            },
                            getLanguage: M,
                            registerAliases: D,
                            autoDetection: $,
                            inherit: i,
                            addPlugin: function(e) {
                                var t;
                                (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                                    t["before:highlightBlock"](Object.assign({
                                        block: e.el
                                    }, e))
                                }), t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                                    t["after:highlightBlock"](Object.assign({
                                        block: e.el
                                    }, e))
                                }), s.push(e)
                            },
                            removePlugin: function(e) {
                                let t = s.indexOf(e); - 1 !== t && s.splice(t, 1)
                            }
                        }), e.debugMode = function() {
                            p = !1
                        }, e.safeMode = function() {
                            p = !0
                        }, e.versionString = "11.11.1", e.regex = {
                            concat: d,
                            lookahead: c,
                            either: h,
                            optional: u,
                            anyNumberOfTimes: g
                        }, N) "object" == typeof N[t] && function e(t) {
                        return t instanceof Map ? t.clear = t.delete = t.set = function() {
                            throw Error("map is read-only")
                        } : t instanceof Set && (t.add = t.clear = t.delete = function() {
                            throw Error("set is read-only")
                        }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach(n => {
                            let i = t[n],
                                r = typeof i;
                            "object" !== r && "function" !== r || Object.isFrozen(i) || e(i)
                        }), t
                    }(N[t]);
                    return Object.assign(e, N), e
                },
                K = G({});
            K.newInstance = () => G({}), e.exports = K, K.HighlightJS = K, K.default = K
        }
    }
]);
//# sourceMappingURL=highlight.88a03edc.js.map