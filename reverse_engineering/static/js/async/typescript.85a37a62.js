try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ecf77738-6c79-45a8-9d32-50ff1bc2f04f", e._sentryDebugIdIdentifier = "sentry-dbid-ecf77738-6c79-45a8-9d32-50ff1bc2f04f")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["6683"], {
        37808: function(e, n, a) {
            a.r(n), a.d(n, {
                default: () => b
            });
            let t = "[A-Za-z$_][0-9A-Za-z$_]*",
                s = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
                c = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                r = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                i = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                o = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                l = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
                d = [].concat(o, r, i);

            function b(e) {
                var n;
                let a, b, u, g, f, m, y, E, p, A, h, _, N, w, S, v, k, R, I, x, O, C, T, M, D, $ = e.regex,
                    B = (a = e.regex, b = /<[A-Za-z0-9\\._:-]+/, u = /\/[A-Za-z0-9\\._:-]+>|\/>/, g = (e, n) => {
                        let a, t = e[0].length + e.index,
                            s = e.input[t];
                        if ("<" === s || "," === s) return void n.ignoreMatch();
                        ">" !== s || ((e, n) => {
                            let {
                                after: a
                            } = n, t = "</" + e[0].slice(1);
                            return -1 !== e.input.indexOf(t, a)
                        })(e, {
                            after: t
                        }) || n.ignoreMatch();
                        let c = e.input.substring(t);
                        if ((a = c.match(/^\s*=/)) || (a = c.match(/^\s+extends\s+/)) && 0 === a.index) return void n.ignoreMatch()
                    }, f = {
                        $pattern: t,
                        keyword: s,
                        literal: c,
                        built_in: d,
                        "variable.language": l
                    }, m = "[0-9](_?[0-9])*", y = `\\.(${m})`, E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
                        className: "number",
                        variants: [{
                            begin: `(\\b(${E})((${y})|\\.)?|(${y}))[eE][+-]?(${m})\\b`
                        }, {
                            begin: `\\b(${E})\\b((${y})\\b|\\.)?|(${y})\\b`
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }],
                        relevance: 0
                    }, A = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: f,
                        contains: []
                    }, h = {
                        begin: ".?html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, A],
                            subLanguage: "xml"
                        }
                    }, _ = {
                        begin: ".?css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, A],
                            subLanguage: "css"
                        }
                    }, N = {
                        begin: ".?gql`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, A],
                            subLanguage: "graphql"
                        }
                    }, w = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, A]
                    }, S = {
                        className: "comment",
                        variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: t + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }]
                            }]
                        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    }, A.contains = (v = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, _, N, w, {
                        match: /\$\d+/
                    }, p]).concat({
                        begin: /\{/,
                        end: /\}/,
                        keywords: f,
                        contains: ["self"].concat(v)
                    }), R = (k = [].concat(S, A.contains)).concat([{
                        begin: /(\s*)\(/,
                        end: /\)/,
                        keywords: f,
                        contains: ["self"].concat(k)
                    }]), I = {
                        className: "params",
                        begin: /(\s*)\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: f,
                        contains: R
                    }, x = {
                        variants: [{
                            match: [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, a.concat(t, "(", a.concat(/\./, t), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, t],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }]
                    }, O = {
                        relevance: 0,
                        match: a.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [...r, ...i]
                        }
                    }, C = {
                        match: a.concat(/\b/, (n = [...o, "super", "import"].map(e => `${e}\\s*\\(`), a.concat("(?!", n.join("|"), ")")), t, a.lookahead(/\s*\(/)),
                        className: "title.function",
                        relevance: 0
                    }, T = {
                        begin: a.concat(/\./, a.lookahead(a.concat(t, /(?![0-9A-Za-z$_(])/))),
                        end: t,
                        excludeBegin: !0,
                        keywords: "prototype",
                        className: "property",
                        relevance: 0
                    }, M = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", D = {
                        match: [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, a.lookahead(M)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [I]
                    }, {
                        name: "JavaScript",
                        aliases: ["js", "jsx", "mjs", "cjs"],
                        keywords: f,
                        exports: {
                            PARAMS_CONTAINS: R,
                            CLASS_REFERENCE: O
                        },
                        illegal: /#(?![$_A-z])/,
                        contains: [e.SHEBANG({
                            label: "shebang",
                            binary: "node",
                            relevance: 5
                        }), {
                            label: "use_strict",
                            className: "meta",
                            relevance: 10,
                            begin: /^\s*['"]use (strict|asm)['"]/
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, _, N, w, S, {
                            match: /\$\d+/
                        }, p, O, {
                            scope: "attr",
                            match: t + a.lookahead(":"),
                            relevance: 0
                        }, D, {
                            begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                            keywords: "return throw case",
                            relevance: 0,
                            contains: [S, e.REGEXP_MODE, {
                                className: "function",
                                begin: M,
                                returnBegin: !0,
                                end: "\\s*=>",
                                contains: [{
                                    className: "params",
                                    variants: [{
                                        begin: e.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    }, {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: !0
                                    }, {
                                        begin: /(\s*)\(/,
                                        end: /\)/,
                                        excludeBegin: !0,
                                        excludeEnd: !0,
                                        keywords: f,
                                        contains: R
                                    }]
                                }]
                            }, {
                                begin: /,/,
                                relevance: 0
                            }, {
                                match: /\s+/,
                                relevance: 0
                            }, {
                                variants: [{
                                    begin: "<>",
                                    end: "</>"
                                }, {
                                    match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                }, {
                                    begin: b,
                                    "on:begin": g,
                                    end: u
                                }],
                                subLanguage: "xml",
                                contains: [{
                                    begin: b,
                                    end: u,
                                    skip: !0,
                                    contains: ["self"]
                                }]
                            }]
                        }, {
                            variants: [{
                                match: [/function/, /\s+/, t, /(?=\s*\()/]
                            }, {
                                match: [/function/, /\s*(?=\()/]
                            }],
                            className: {
                                1: "keyword",
                                3: "title.function"
                            },
                            label: "func.def",
                            contains: [I],
                            illegal: /%/
                        }, {
                            beginKeywords: "while if switch catch for"
                        }, {
                            begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                            returnBegin: !0,
                            label: "func.def",
                            contains: [I, e.inherit(e.TITLE_MODE, {
                                begin: t,
                                className: "title.function"
                            })]
                        }, {
                            match: /\.\.\./,
                            relevance: 0
                        }, T, {
                            match: "\\$" + t,
                            relevance: 0
                        }, {
                            match: [/\bconstructor(?=\s*\()/],
                            className: {
                                1: "title.function"
                            },
                            contains: [I]
                        }, C, {
                            relevance: 0,
                            match: /\b[A-Z][A-Z_0-9]+\b/,
                            className: "variable.constant"
                        }, x, {
                            match: [/get|set/, /\s+/, t, /(?=\()/],
                            className: {
                                1: "keyword",
                                3: "title.function"
                            },
                            contains: [{
                                begin: /\(\)/
                            }, I]
                        }, {
                            match: /\$[(.]/
                        }]
                    }),
                    Z = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
                    z = {
                        begin: [/namespace/, /\s+/, e.IDENT_RE],
                        beginScope: {
                            1: "keyword",
                            3: "title.class"
                        }
                    },
                    U = {
                        beginKeywords: "interface",
                        end: /\{/,
                        excludeEnd: !0,
                        keywords: {
                            keyword: "interface extends",
                            built_in: Z
                        },
                        contains: [B.exports.CLASS_REFERENCE]
                    },
                    L = {
                        $pattern: t,
                        keyword: s.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
                        literal: c,
                        built_in: d.concat(Z),
                        "variable.language": l
                    },
                    P = {
                        className: "meta",
                        begin: "@" + t
                    },
                    F = (e, n, a) => {
                        let t = e.contains.findIndex(e => e.label === n);
                        if (-1 === t) throw Error("can not find mode to replace");
                        e.contains.splice(t, 1, a)
                    };
                Object.assign(B.keywords, L), B.exports.PARAMS_CONTAINS.push(P);
                let j = B.contains.find(e => "attr" === e.scope),
                    G = Object.assign({}, j, {
                        match: $.concat(t, $.lookahead(/\s*\?:/))
                    });
                return B.exports.PARAMS_CONTAINS.push([B.exports.CLASS_REFERENCE, j, G]), B.contains = B.contains.concat([P, z, U, G]), F(B, "shebang", e.SHEBANG()), F(B, "use_strict", {
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use strict['"]/
                }), B.contains.find(e => "func.def" === e.label).relevance = 0, Object.assign(B, {
                    name: "TypeScript",
                    aliases: ["ts", "tsx", "mts", "cts"]
                }), B
            }
        }
    }
]);
//# sourceMappingURL=typescript.85a37a62.js.map