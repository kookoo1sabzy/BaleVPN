try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6f850991-f931-448f-9ac6-49d98ff76c93", e._sentryDebugIdIdentifier = "sentry-dbid-6f850991-f931-448f-9ac6-49d98ff76c93")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2100"], {
        72111: function(e, n, a) {
            a.r(n), a.d(n, {
                default: () => r
            });
            var s = "[0-9](_*[0-9])*",
                t = `\\.(${s})`,
                i = "[0-9a-fA-F](_*[0-9a-fA-F])*",
                l = {
                    className: "number",
                    variants: [{
                        begin: `(\\b(${s})((${t})|\\.)?|(${t}))[eE][+-]?(${s})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${s})((${t})[fFdD]?\\b|\\.([fFdD]\\b)?)`
                    }, {
                        begin: `(${t})[fFdD]?\\b`
                    }, {
                        begin: `\\b(${s})[fFdD]\\b`
                    }, {
                        begin: `\\b0[xX]((${i})\\.?|(${i})?\\.(${i}))[pP][+-]?(${s})[fFdD]?\\b`
                    }, {
                        begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
                    }, {
                        begin: `\\b0[xX](${i})[lL]?\\b`
                    }, {
                        begin: "\\b0(_*[0-7])*[lL]?\\b"
                    }, {
                        begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
                    }],
                    relevance: 0
                };

            function r(e) {
                let n = e.regex,
                    a = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*",
                    s = a + function e(n, a, s) {
                        return -1 === s ? "" : n.replace(a, t => e(n, a, s - 1))
                    }("(?:<" + a + "~~~(?:\\s*,\\s*" + a + "~~~)*>)?", /~~~/g, 2),
                    t = {
                        keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits", "goto", "when"],
                        literal: ["false", "true", "null"],
                        type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                        built_in: ["super", "this"]
                    },
                    i = {
                        className: "meta",
                        begin: "@" + a,
                        contains: [{
                            begin: /\(/,
                            end: /\)/,
                            contains: ["self"]
                        }]
                    },
                    r = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: t,
                        relevance: 0,
                        contains: [e.C_BLOCK_COMMENT_MODE],
                        endsParent: !0
                    };
                return {
                    name: "Java",
                    aliases: ["jsp"],
                    keywords: t,
                    illegal: /<\/|#/,
                    contains: [e.COMMENT("/\\*\\*", "\\*/", {
                        relevance: 0,
                        contains: [{
                            begin: /\w+@/,
                            relevance: 0
                        }, {
                            className: "doctag",
                            begin: "@[A-Za-z]+"
                        }]
                    }), {
                        begin: /import java\.[a-z]+\./,
                        keywords: "import",
                        relevance: 2
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                        begin: /"""/,
                        end: /"""/,
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                        match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, a],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }, {
                        match: /non-sealed/,
                        scope: "keyword"
                    }, {
                        begin: [n.concat(/(?!else)/, a), /\s+/, a, /\s+/, /=(?!=)/],
                        className: {
                            1: "type",
                            3: "variable",
                            5: "operator"
                        }
                    }, {
                        begin: [/record/, /\s+/, a],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        },
                        contains: [r, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, {
                        beginKeywords: "new throw return else",
                        relevance: 0
                    }, {
                        begin: ["(?:" + s + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                        className: {
                            2: "title.function"
                        },
                        keywords: t,
                        contains: [{
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: t,
                            relevance: 0,
                            contains: [i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, e.C_BLOCK_COMMENT_MODE]
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                    }, l, i]
                }
            }
        }
    }
]);
//# sourceMappingURL=java.64b7c889.js.map