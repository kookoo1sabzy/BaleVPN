try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "63ab88cf-aede-43d7-b931-b16c63b943f4", e._sentryDebugIdIdentifier = "sentry-dbid-63ab88cf-aede-43d7-b931-b16c63b943f4")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["2843"], {
        38986: function(e, t, n) {
            function a(e) {
                let t = e.regex,
                    n = e.COMMENT("//", "$", {
                        contains: [{
                            begin: /\\\n/
                        }]
                    }),
                    a = "decltype\\(auto\\)",
                    i = "[a-zA-Z_]\\w*::",
                    r = "(?!struct)(" + a + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                    s = {
                        className: "type",
                        begin: "\\b[a-z\\d_]*_t\\b"
                    },
                    o = {
                        className: "string",
                        variants: [{
                            begin: '(u8?|U|L)?"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                            end: "'",
                            illegal: "."
                        }, e.END_SAME_AS_BEGIN({
                            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                            end: /\)([^()\\ ]{0,16})"/
                        })]
                    },
                    l = {
                        className: "number",
                        variants: [{
                            begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
                        }, {
                            begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
                        }],
                        relevance: 0
                    },
                    c = {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {
                            keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                        },
                        contains: [{
                            begin: /\\\n/,
                            relevance: 0
                        }, e.inherit(o, {
                            className: "string"
                        }), {
                            className: "string",
                            begin: /<.*?>/
                        }, n, e.C_BLOCK_COMMENT_MODE]
                    },
                    d = {
                        className: "title",
                        begin: t.optional(i) + e.IDENT_RE,
                        relevance: 0
                    },
                    u = t.optional(i) + e.IDENT_RE + "\\s*\\(",
                    p = {
                        type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                        keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                        built_in: ["_Pragma"],
                        _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "flat_map", "flat_set", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                    },
                    _ = {
                        className: "function.dispatch",
                        relevance: 0,
                        keywords: {
                            _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]
                        },
                        begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                    },
                    f = [_, c, s, n, e.C_BLOCK_COMMENT_MODE, l, o],
                    m = {
                        variants: [{
                            begin: /=/,
                            end: /;/
                        }, {
                            begin: /\(/,
                            end: /\)/
                        }, {
                            beginKeywords: "new throw return else",
                            end: /;/
                        }],
                        keywords: p,
                        contains: f.concat([{
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            contains: f.concat(["self"]),
                            relevance: 0
                        }]),
                        relevance: 0
                    },
                    b = {
                        className: "function",
                        begin: "(" + r + "[\\*&\\s]+)+" + u,
                        returnBegin: !0,
                        end: /[{;=]/,
                        excludeEnd: !0,
                        keywords: p,
                        illegal: /[^\w\s\*&:<>.]/,
                        contains: [{
                            begin: a,
                            keywords: p,
                            relevance: 0
                        }, {
                            begin: u,
                            returnBegin: !0,
                            contains: [d],
                            relevance: 0
                        }, {
                            begin: /::/,
                            relevance: 0
                        }, {
                            begin: /:/,
                            endsWithParent: !0,
                            contains: [o, l]
                        }, {
                            relevance: 0,
                            match: /,/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            relevance: 0,
                            contains: [n, e.C_BLOCK_COMMENT_MODE, o, l, s, {
                                begin: /\(/,
                                end: /\)/,
                                keywords: p,
                                relevance: 0,
                                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, o, l, s]
                            }]
                        }, s, n, e.C_BLOCK_COMMENT_MODE, c]
                    };
                return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                    keywords: p,
                    illegal: "</",
                    classNameAliases: {
                        "function.dispatch": "built_in"
                    },
                    contains: [].concat(m, b, _, f, [c, {
                        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
                        end: ">",
                        keywords: p,
                        contains: ["self", s]
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: p
                    }, {
                        match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                        className: {
                            1: "keyword",
                            3: "title.class"
                        }
                    }])
                }
            }
            n.r(t), n.d(t, {
                default: () => a
            })
        }
    }
]);
//# sourceMappingURL=cpp.6d73f599.js.map