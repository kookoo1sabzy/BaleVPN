try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "24330310-ad9b-4323-9668-74507e6c33be", e._sentryDebugIdIdentifier = "sentry-dbid-24330310-ad9b-4323-9668-74507e6c33be")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["5878"], {
        20017: function(e, n, t) {
            function a(e) {
                let n = e.regex,
                    t = /(r#)?/,
                    a = n.concat(t, e.UNDERSCORE_IDENT_RE),
                    i = n.concat(t, e.IDENT_RE),
                    s = {
                        className: "title.function.invoke",
                        relevance: 0,
                        begin: n.concat(/\b/, /(?!let|for|while|if|else|match\b)/, i, n.lookahead(/\s*\(/))
                    },
                    r = "([ui](8|16|32|64|128|size)|f(32|64))?",
                    l = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "eprintln!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"],
                    o = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"];
                return {
                    name: "Rust",
                    aliases: ["rs"],
                    keywords: {
                        $pattern: e.IDENT_RE + "!?",
                        type: o,
                        keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "union", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                        literal: ["true", "false", "Some", "None", "Ok", "Err"],
                        built_in: l
                    },
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                        contains: ["self"]
                    }), e.inherit(e.QUOTE_STRING_MODE, {
                        begin: /b?"/,
                        illegal: null
                    }), {
                        className: "symbol",
                        begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
                    }, {
                        scope: "string",
                        variants: [{
                            begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
                        }, {
                            begin: /b?'/,
                            end: /'/,
                            contains: [{
                                scope: "char.escape",
                                match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
                            }]
                        }]
                    }, {
                        className: "number",
                        variants: [{
                            begin: "\\b0b([01_]+)" + r
                        }, {
                            begin: "\\b0o([0-7_]+)" + r
                        }, {
                            begin: "\\b0x([A-Fa-f0-9_]+)" + r
                        }, {
                            begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + r
                        }],
                        relevance: 0
                    }, {
                        begin: [/fn/, /\s+/, a],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        }
                    }, {
                        className: "meta",
                        begin: "#!?\\[",
                        end: "\\]",
                        contains: [{
                            className: "string",
                            begin: /"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE]
                        }]
                    }, {
                        begin: [/let/, /\s+/, /(?:mut\s+)?/, a],
                        className: {
                            1: "keyword",
                            3: "keyword",
                            4: "variable"
                        }
                    }, {
                        begin: [/for/, /\s+/, a, /\s+/, /in/],
                        className: {
                            1: "keyword",
                            3: "variable",
                            5: "keyword"
                        }
                    }, {
                        begin: [/type/, /\s+/, a],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, a],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: {
                            keyword: "Self",
                            built_in: l,
                            type: o
                        }
                    }, {
                        className: "punctuation",
                        begin: "->"
                    }, s]
                }
            }
            t.r(n), t.d(n, {
                default: () => a
            })
        }
    }
]);
//# sourceMappingURL=rust.41a048a3.js.map