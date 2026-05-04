try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "83cb5dd6-a9c0-4d59-8b03-482f134ae4d3", e._sentryDebugIdIdentifier = "sentry-dbid-83cb5dd6-a9c0-4d59-8b03-482f134ae4d3")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1162"], {
        95041: function(e, n, a) {
            function t(e) {
                let n = {
                    keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
                    type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                    literal: ["true", "false", "iota", "nil"],
                    built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
                };
                return {
                    name: "Go",
                    aliases: ["golang"],
                    keywords: n,
                    illegal: "</",
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "string",
                        variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                            begin: "`",
                            end: "`"
                        }]
                    }, {
                        className: "number",
                        variants: [{
                            match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
                            relevance: 0
                        }, {
                            match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
                            relevance: 0
                        }, {
                            match: /-?\b0[oO](_?[0-7])*i?/,
                            relevance: 0
                        }, {
                            match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
                            relevance: 0
                        }, {
                            match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
                            relevance: 0
                        }]
                    }, {
                        begin: /:=/
                    }, {
                        className: "function",
                        beginKeywords: "func",
                        end: "\\s*(\\{|$)",
                        excludeEnd: !0,
                        contains: [e.TITLE_MODE, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            endsParent: !0,
                            keywords: n,
                            illegal: /["']/
                        }]
                    }]
                }
            }
            a.r(n), a.d(n, {
                default: () => t
            })
        }
    }
]);
//# sourceMappingURL=go.4009f6e1.js.map