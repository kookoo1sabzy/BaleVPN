try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bc53a497-34ef-4fa9-bdfd-e201f2da2a56", e._sentryDebugIdIdentifier = "sentry-dbid-bc53a497-34ef-4fa9-bdfd-e201f2da2a56")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1814"], {
        98525: function(e, n, a) {
            function i(e) {
                let n = e.regex,
                    a = /[\p{XID_Start}_]\p{XID_Continue}*/u,
                    i = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
                    t = {
                        $pattern: /[A-Za-z]\w+|__\w+__/,
                        keyword: i,
                        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
                    },
                    s = {
                        className: "meta",
                        begin: /^(>>>|\.\.\.) /
                    },
                    l = {
                        className: "subst",
                        begin: /\{/,
                        end: /\}/,
                        keywords: t,
                        illegal: /#/
                    },
                    r = {
                        begin: /\{\{/,
                        relevance: 0
                    },
                    o = {
                        className: "string",
                        contains: [e.BACKSLASH_ESCAPE],
                        variants: [{
                            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                            end: /'''/,
                            contains: [e.BACKSLASH_ESCAPE, s],
                            relevance: 10
                        }, {
                            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                            end: /"""/,
                            contains: [e.BACKSLASH_ESCAPE, s],
                            relevance: 10
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                            end: /'''/,
                            contains: [e.BACKSLASH_ESCAPE, s, r, l]
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                            end: /"""/,
                            contains: [e.BACKSLASH_ESCAPE, s, r, l]
                        }, {
                            begin: /([uU]|[rR])'/,
                            end: /'/,
                            relevance: 10
                        }, {
                            begin: /([uU]|[rR])"/,
                            end: /"/,
                            relevance: 10
                        }, {
                            begin: /([bB]|[bB][rR]|[rR][bB])'/,
                            end: /'/
                        }, {
                            begin: /([bB]|[bB][rR]|[rR][bB])"/,
                            end: /"/
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])'/,
                            end: /'/,
                            contains: [e.BACKSLASH_ESCAPE, r, l]
                        }, {
                            begin: /([fF][rR]|[rR][fF]|[fF])"/,
                            end: /"/,
                            contains: [e.BACKSLASH_ESCAPE, r, l]
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                    },
                    b = "[0-9](_?[0-9])*",
                    d = `(\\b(${b}))?\\.(${b})|\\b(${b})\\.`,
                    c = `\\b|${i.join("|")}`,
                    f = {
                        className: "number",
                        relevance: 0,
                        variants: [{
                            begin: `(\\b(${b})|(${d}))[eE][+-]?(${b})[jJ]?(?=${c})`
                        }, {
                            begin: `(${d})[jJ]?`
                        }, {
                            begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${c})`
                        }, {
                            begin: `\\b0[bB](_?[01])+[lL]?(?=${c})`
                        }, {
                            begin: `\\b0[oO](_?[0-7])+[lL]?(?=${c})`
                        }, {
                            begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${c})`
                        }, {
                            begin: `\\b(${b})[jJ](?=${c})`
                        }]
                    },
                    g = {
                        className: "comment",
                        begin: n.lookahead(/# type:/),
                        end: /$/,
                        keywords: t,
                        contains: [{
                            begin: /# type:/
                        }, {
                            begin: /#/,
                            end: /\b\B/,
                            endsWithParent: !0
                        }]
                    },
                    p = {
                        className: "params",
                        variants: [{
                            className: "",
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: t,
                            contains: ["self", s, f, o, e.HASH_COMMENT_MODE]
                        }]
                    };
                return l.contains = [o, f, s], {
                    name: "Python",
                    aliases: ["py", "gyp", "ipython"],
                    unicodeRegex: !0,
                    keywords: t,
                    illegal: /(<\/|\?)|=>/,
                    contains: [s, f, {
                        scope: "variable.language",
                        match: /\bself\b/
                    }, {
                        beginKeywords: "if",
                        relevance: 0
                    }, {
                        match: /\bor\b/,
                        scope: "keyword"
                    }, o, g, e.HASH_COMMENT_MODE, {
                        match: [/\bdef/, /\s+/, a],
                        scope: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [p]
                    }, {
                        variants: [{
                            match: [/\bclass/, /\s+/, a, /\s*/, /\(\s*/, a, /\s*\)/]
                        }, {
                            match: [/\bclass/, /\s+/, a]
                        }],
                        scope: {
                            1: "keyword",
                            3: "title.class",
                            6: "title.class.inherited"
                        }
                    }, {
                        className: "meta",
                        begin: /^[\t ]*@/,
                        end: /(?=#)|$/,
                        contains: [f, p, o]
                    }]
                }
            }
            a.r(n), a.d(n, {
                default: () => i
            })
        }
    }
]);
//# sourceMappingURL=python.832d9d08.js.map