try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb3bdcb7-446b-4b2c-9a2a-ccb4746fb095", e._sentryDebugIdIdentifier = "sentry-dbid-eb3bdcb7-446b-4b2c-9a2a-ccb4746fb095")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["3694"], {
        89223: function(e, t, a) {
            function n(e) {
                let t, a = e.regex,
                    n = /(?![A-Za-z0-9])(?![$])/,
                    r = a.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
                    o = a.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, n),
                    i = a.concat(/[A-Z]+/, n),
                    c = {
                        scope: "variable",
                        match: "\\$+" + r
                    },
                    l = {
                        scope: "subst",
                        variants: [{
                            begin: /\$\w+/
                        }, {
                            begin: /\{\$/,
                            end: /\}/
                        }]
                    },
                    s = e.inherit(e.APOS_STRING_MODE, {
                        illegal: null
                    }),
                    d = e.inherit(e.QUOTE_STRING_MODE, {
                        illegal: null,
                        contains: e.QUOTE_STRING_MODE.contains.concat(l)
                    }),
                    b = {
                        begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
                        end: /[ \t]*(\w+)\b/,
                        contains: e.QUOTE_STRING_MODE.contains.concat(l),
                        "on:begin": (e, t) => {
                            t.data._beginMatch = e[1] || e[2]
                        },
                        "on:end": (e, t) => {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    },
                    p = e.END_SAME_AS_BEGIN({
                        begin: /<<<[ \t]*'(\w+)'\n/,
                        end: /[ \t]*(\w+)\b/
                    }),
                    _ = "[ 	\n]",
                    u = {
                        scope: "string",
                        variants: [d, s, b, p]
                    },
                    E = {
                        scope: "number",
                        variants: [{
                            begin: "\\b0[bB][01]+(?:_[01]+)*\\b"
                        }, {
                            begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"
                        }, {
                            begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"
                        }, {
                            begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
                        }],
                        relevance: 0
                    },
                    f = ["false", "null", "true"],
                    g = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"],
                    h = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"],
                    y = {
                        keyword: g,
                        literal: (t = [], f.forEach(e => {
                            t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase())
                        }), t),
                        built_in: h
                    },
                    I = e => e.map(e => e.replace(/\|\d+$/, "")),
                    w = {
                        variants: [{
                            match: [/new/, a.concat(_, "+"), a.concat("(?!", I(h).join("\\b|"), "\\b)"), o],
                            scope: {
                                1: "keyword",
                                4: "title.class"
                            }
                        }]
                    },
                    m = a.concat(r, "\\b(?!\\()"),
                    v = {
                        variants: [{
                            match: [a.concat(/::/, a.lookahead(/(?!class\b)/)), m],
                            scope: {
                                2: "variable.constant"
                            }
                        }, {
                            match: [/::/, /class/],
                            scope: {
                                2: "variable.language"
                            }
                        }, {
                            match: [o, a.concat(/::/, a.lookahead(/(?!class\b)/)), m],
                            scope: {
                                1: "title.class",
                                3: "variable.constant"
                            }
                        }, {
                            match: [o, a.concat("::", a.lookahead(/(?!class\b)/))],
                            scope: {
                                1: "title.class"
                            }
                        }, {
                            match: [o, /::/, /class/],
                            scope: {
                                1: "title.class",
                                3: "variable.language"
                            }
                        }]
                    },
                    O = {
                        scope: "attr",
                        match: a.concat(r, a.lookahead(":"), a.lookahead(/(?!::)/))
                    },
                    S = {
                        relevance: 0,
                        begin: /\(/,
                        end: /\)/,
                        keywords: y,
                        contains: [O, c, v, e.C_BLOCK_COMMENT_MODE, u, E, w]
                    },
                    x = {
                        relevance: 0,
                        match: [/\b/, a.concat("(?!fn\\b|function\\b|", I(g).join("\\b|"), "|", I(h).join("\\b|"), "\\b)"), r, a.concat(_, "*"), a.lookahead(/(?=\()/)],
                        scope: {
                            3: "title.function.invoke"
                        },
                        contains: [S]
                    };
                S.contains.push(x);
                let T = [O, v, e.C_BLOCK_COMMENT_MODE, u, E, w],
                    C = {
                        begin: a.concat(/#\[\s*\\?/, a.either(o, i)),
                        beginScope: "meta",
                        end: /]/,
                        endScope: "meta",
                        keywords: {
                            literal: f,
                            keyword: ["new", "array"]
                        },
                        contains: [{
                            begin: /\[/,
                            end: /]/,
                            keywords: {
                                literal: f,
                                keyword: ["new", "array"]
                            },
                            contains: ["self", ...T]
                        }, ...T, {
                            scope: "meta",
                            variants: [{
                                match: o
                            }, {
                                match: i
                            }]
                        }]
                    };
                return {
                    case_insensitive: !1,
                    keywords: y,
                    contains: [C, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                        contains: [{
                            scope: "doctag",
                            match: "@[A-Za-z]+"
                        }]
                    }), {
                        match: /__halt_compiler\(\);/,
                        keywords: "__halt_compiler",
                        starts: {
                            scope: "comment",
                            end: e.MATCH_NOTHING_RE,
                            contains: [{
                                match: /\?>/,
                                scope: "meta",
                                endsParent: !0
                            }]
                        }
                    }, {
                        scope: "meta",
                        variants: [{
                            begin: /<\?php/,
                            relevance: 10
                        }, {
                            begin: /<\?=/
                        }, {
                            begin: /<\?/,
                            relevance: .1
                        }, {
                            begin: /\?>/
                        }]
                    }, {
                        scope: "variable.language",
                        match: /\$this\b/
                    }, c, x, v, {
                        match: [/const/, /\s/, r],
                        scope: {
                            1: "keyword",
                            3: "variable.constant"
                        }
                    }, w, {
                        scope: "function",
                        relevance: 0,
                        beginKeywords: "fn function",
                        end: /[;{]/,
                        excludeEnd: !0,
                        illegal: "[$%\\[]",
                        contains: [{
                            beginKeywords: "use"
                        }, e.UNDERSCORE_TITLE_MODE, {
                            begin: "=>",
                            endsParent: !0
                        }, {
                            scope: "params",
                            begin: "\\(",
                            end: "\\)",
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: y,
                            contains: ["self", C, c, v, e.C_BLOCK_COMMENT_MODE, u, E]
                        }]
                    }, {
                        scope: "class",
                        variants: [{
                            beginKeywords: "enum",
                            illegal: /[($"]/
                        }, {
                            beginKeywords: "class interface trait",
                            illegal: /[:($"]/
                        }],
                        relevance: 0,
                        end: /\{/,
                        excludeEnd: !0,
                        contains: [{
                            beginKeywords: "extends implements"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, {
                        beginKeywords: "namespace",
                        relevance: 0,
                        end: ";",
                        illegal: /[.']/,
                        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                            scope: "title.class"
                        })]
                    }, {
                        beginKeywords: "use",
                        relevance: 0,
                        end: ";",
                        contains: [{
                            match: /\b(as|const|function)\b/,
                            scope: "keyword"
                        }, e.UNDERSCORE_TITLE_MODE]
                    }, u, E]
                }
            }
            a.r(t), a.d(t, {
                default: () => n
            })
        }
    }
]);
//# sourceMappingURL=php.ca62e6cc.js.map