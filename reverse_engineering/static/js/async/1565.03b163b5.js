/*! For license information please see 1565.03b163b5.js.LICENSE.txt */
try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "77163fe2-aba6-47bd-bc3e-d8e04e4c52f1", e._sentryDebugIdIdentifier = "sentry-dbid-77163fe2-aba6-47bd-bc3e-d8e04e4c52f1")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["1565"], {
        69602: function(e) {
            e.exports = function() {
                var e = {
                        134: function(e, t, a) {
                            "use strict";
                            a.d(t, {
                                default: function() {
                                    return f
                                }
                            });
                            var n = a(279),
                                r = a.n(n),
                                s = a(370),
                                i = a.n(s),
                                d = a(817),
                                o = a.n(d);

                            function _(e) {
                                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }
                            var u = function() {
                                var e;

                                function t(e) {
                                    if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                                    this.resolveOptions(e), this.initSelection()
                                }
                                return e = [{
                                        key: "resolveOptions",
                                        value: function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                                        }
                                    }, {
                                        key: "initSelection",
                                        value: function() {
                                            this.text ? this.selectFake() : this.target && this.selectTarget()
                                        }
                                    }, {
                                        key: "createFakeElement",
                                        value: function() {
                                            var e = "rtl" === document.documentElement.getAttribute("dir");
                                            this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                            var t = window.pageYOffset || document.documentElement.scrollTop;
                                            return this.fakeElem.style.top = "".concat(t, "px"), this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.fakeElem
                                        }
                                    }, {
                                        key: "selectFake",
                                        value: function() {
                                            var e = this,
                                                t = this.createFakeElement();
                                            this.fakeHandlerCallback = function() {
                                                return e.removeFake()
                                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.container.appendChild(t), this.selectedText = o()(t), this.copyText(), this.removeFake()
                                        }
                                    }, {
                                        key: "removeFake",
                                        value: function() {
                                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                                        }
                                    }, {
                                        key: "selectTarget",
                                        value: function() {
                                            this.selectedText = o()(this.target), this.copyText()
                                        }
                                    }, {
                                        key: "copyText",
                                        value: function() {
                                            var e;
                                            try {
                                                e = document.execCommand(this.action)
                                            } catch (t) {
                                                e = !1
                                            }
                                            this.handleResult(e)
                                        }
                                    }, {
                                        key: "handleResult",
                                        value: function(e) {
                                            this.emitter.emit(e ? "success" : "error", {
                                                action: this.action,
                                                text: this.selectedText,
                                                trigger: this.trigger,
                                                clearSelection: this.clearSelection.bind(this)
                                            })
                                        }
                                    }, {
                                        key: "clearSelection",
                                        value: function() {
                                            this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.removeFake()
                                        }
                                    }, {
                                        key: "action",
                                        set: function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw Error('Invalid "action" value, use either "copy" or "cut"')
                                        },
                                        get: function() {
                                            return this._action
                                        }
                                    }, {
                                        key: "target",
                                        set: function(e) {
                                            if (void 0 !== e)
                                                if (e && "object" === _(e) && 1 === e.nodeType) {
                                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                                    this._target = e
                                                } else throw Error('Invalid "target" value, use a valid Element')
                                        },
                                        get: function() {
                                            return this._target
                                        }
                                    }],
                                    function(e, t) {
                                        for (var a = 0; a < t.length; a++) {
                                            var n = t[a];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(t.prototype, e), t
                            }();

                            function m(e) {
                                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function l(e, t) {
                                for (var a = 0; a < t.length; a++) {
                                    var n = t[a];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                }
                            }

                            function c(e, t) {
                                return (c = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }

                            function h(e) {
                                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }

                            function M(e, t) {
                                var a = "data-clipboard-".concat(e);
                                if (t.hasAttribute(a)) return t.getAttribute(a)
                            }
                            var f = function(e) {
                                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                s.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: s,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && c(s, e);
                                var t, a, n, r = (t = function() {
                                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                                    } catch (e) {
                                        return !1
                                    }
                                }(), function() {
                                    var e, a, n, r = h(s);
                                    return n = t ? Reflect.construct(r, arguments, h(this).constructor) : r.apply(this, arguments), e = this, (a = n) && ("object" === m(a) || "function" == typeof a) ? a : function(e) {
                                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                });

                                function s(e, t) {
                                    var a;
                                    if (!(this instanceof s)) throw TypeError("Cannot call a class as a function");
                                    return (a = r.call(this)).resolveOptions(t), a.listenClick(e), a
                                }
                                return a = [{
                                    key: "resolveOptions",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === m(e.container) ? e.container : document.body
                                    }
                                }, {
                                    key: "listenClick",
                                    value: function(e) {
                                        var t = this;
                                        this.listener = i()(e, "click", function(e) {
                                            return t.onClick(e)
                                        })
                                    }
                                }, {
                                    key: "onClick",
                                    value: function(e) {
                                        var t = e.delegateTarget || e.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new u({
                                            action: this.action(t),
                                            target: this.target(t),
                                            text: this.text(t),
                                            container: this.container,
                                            trigger: t,
                                            emitter: this
                                        })
                                    }
                                }, {
                                    key: "defaultAction",
                                    value: function(e) {
                                        return M("action", e)
                                    }
                                }, {
                                    key: "defaultTarget",
                                    value: function(e) {
                                        var t = M("target", e);
                                        if (t) return document.querySelector(t)
                                    }
                                }, {
                                    key: "defaultText",
                                    value: function(e) {
                                        return M("text", e)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                                    }
                                }], n = [{
                                    key: "isSupported",
                                    value: function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                            t = !!document.queryCommandSupported;
                                        return ("string" == typeof e ? [e] : e).forEach(function(e) {
                                            t = t && !!document.queryCommandSupported(e)
                                        }), t
                                    }
                                }], a && l(s.prototype, a), n && l(s, n), s
                            }(r())
                        },
                        828: function(e) {
                            if ("undefined" != typeof Element && !Element.prototype.matches) {
                                var t = Element.prototype;
                                t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                            }
                            e.exports = function(e, t) {
                                for (; e && 9 !== e.nodeType;) {
                                    if ("function" == typeof e.matches && e.matches(t)) return e;
                                    e = e.parentNode
                                }
                            }
                        },
                        438: function(e, t, a) {
                            var n = a(828);

                            function r(e, t, a, n, r) {
                                var i = s.apply(this, arguments);
                                return e.addEventListener(a, i, r), {
                                    destroy: function() {
                                        e.removeEventListener(a, i, r)
                                    }
                                }
                            }

                            function s(e, t, a, r) {
                                return function(a) {
                                    a.delegateTarget = n(a.target, t), a.delegateTarget && r.call(e, a)
                                }
                            }
                            e.exports = function(e, t, a, n, s) {
                                return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof a ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function(e) {
                                    return r(e, t, a, n, s)
                                }))
                            }
                        },
                        879: function(e, t) {
                            t.node = function(e) {
                                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                            }, t.nodeList = function(e) {
                                var a = Object.prototype.toString.call(e);
                                return void 0 !== e && ("[object NodeList]" === a || "[object HTMLCollection]" === a) && "length" in e && (0 === e.length || t.node(e[0]))
                            }, t.string = function(e) {
                                return "string" == typeof e || e instanceof String
                            }, t.fn = function(e) {
                                return "[object Function]" === Object.prototype.toString.call(e)
                            }
                        },
                        370: function(e, t, a) {
                            var n = a(879),
                                r = a(438);
                            e.exports = function(e, t, a) {
                                var s, i, d, o, _, u, m, l, c;
                                if (!e && !t && !a) throw Error("Missing required arguments");
                                if (!n.string(t)) throw TypeError("Second argument must be a String");
                                if (!n.fn(a)) throw TypeError("Third argument must be a Function");
                                if (n.node(e)) {
                                    return s = e, i = t, d = a, s.addEventListener(i, d), {
                                        destroy: function() {
                                            s.removeEventListener(i, d)
                                        }
                                    }
                                }
                                if (n.nodeList(e)) {
                                    return o = e, _ = t, u = a, Array.prototype.forEach.call(o, function(e) {
                                        e.addEventListener(_, u)
                                    }), {
                                        destroy: function() {
                                            Array.prototype.forEach.call(o, function(e) {
                                                e.removeEventListener(_, u)
                                            })
                                        }
                                    }
                                }
                                if (n.string(e)) {
                                    return m = e, l = t, c = a, r(document.body, m, l, c)
                                }
                                throw TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                            }
                        },
                        817: function(e) {
                            e.exports = function(e) {
                                var t;
                                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                                    var a = e.hasAttribute("readonly");
                                    a || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), a || e.removeAttribute("readonly"), t = e.value
                                } else {
                                    e.hasAttribute("contenteditable") && e.focus();
                                    var n = window.getSelection(),
                                        r = document.createRange();
                                    r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString()
                                }
                                return t
                            }
                        },
                        279: function(e) {
                            function t() {}
                            t.prototype = {
                                on: function(e, t, a) {
                                    var n = this.e || (this.e = {});
                                    return (n[e] || (n[e] = [])).push({
                                        fn: t,
                                        ctx: a
                                    }), this
                                },
                                once: function(e, t, a) {
                                    var n = this;

                                    function r() {
                                        n.off(e, r), t.apply(a, arguments)
                                    }
                                    return r._ = t, this.on(e, r, a)
                                },
                                emit: function(e) {
                                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, r = a.length; n < r; n++) a[n].fn.apply(a[n].ctx, t);
                                    return this
                                },
                                off: function(e, t) {
                                    var a = this.e || (this.e = {}),
                                        n = a[e],
                                        r = [];
                                    if (n && t)
                                        for (var s = 0, i = n.length; s < i; s++) n[s].fn !== t && n[s].fn._ !== t && r.push(n[s]);
                                    return r.length ? a[e] = r : delete a[e], this
                                }
                            }, e.exports = t, e.exports.TinyEmitter = t
                        }
                    },
                    t = {};

                function a(n) {
                    if (t[n]) return t[n].exports;
                    var r = t[n] = {
                        exports: {}
                    };
                    return e[n](r, r.exports, a), r.exports
                }
                return a.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return a.d(t, {
                        a: t
                    }), t
                }, a.d = function(e, t) {
                    for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }, a.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, a(134)
            }().default
        },
        60772: function(e, t, a) {
            e.exports = W;
            var n, r, s = a(70299);
            a(34617);
            var i = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
                d = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
                o = /\d\d?/,
                _ = /\d{1,3}/,
                u = /\d{3}/,
                m = /\d{1,4}/,
                l = /[+\-]?\d{1,6}/,
                c = /[0-9]*["a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                h = /Z|[\+\-]\d\d:?\d\d/i,
                M = /T/i,
                f = /[\+\-]?\d+(\.\d{1,3})?/,
                y = {
                    jm: "jmonth",
                    jmonths: "jmonth",
                    jy: "jyear",
                    jyears: "jyear"
                },
                L = {},
                Y = "DDD w M D".split(" "),
                p = "M D w".split(" "),
                k = {
                    jM: function() {
                        return this.jMonth() + 1
                    },
                    jMMM: function(e) {
                        return this.localeData().jMonthsShort(this, e)
                    },
                    jMMMM: function(e) {
                        return this.localeData().jMonths(this, e)
                    },
                    jD: function() {
                        return this.jDate()
                    },
                    jDDD: function() {
                        return this.jDayOfYear()
                    },
                    jw: function() {
                        return this.jWeek()
                    },
                    jYY: function() {
                        return w(this.jYear() % 100, 2)
                    },
                    jYYYY: function() {
                        return w(this.jYear(), 4)
                    },
                    jYYYYY: function() {
                        return w(this.jYear(), 5)
                    },
                    jgg: function() {
                        return w(this.jWeekYear() % 100, 2)
                    },
                    jgggg: function() {
                        return this.jWeekYear()
                    },
                    jggggg: function() {
                        return w(this.jWeekYear(), 5)
                    }
                };

            function D(e, t) {
                return function(a) {
                    return w(e.call(this, a), t)
                }
            }
            for (; Y.length;) k["j" + (n = Y.pop()) + "o"] = function(e, t) {
                return function(a) {
                    return this.localeData().ordinal(e.call(this, a), t)
                }
            }(k["j" + n], n);
            for (; p.length;) k["j" + (n = p.pop()) + n] = D(k["j" + n], 2);

            function g(e, t) {
                var a;
                for (a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                return e
            }

            function w(e, t) {
                for (var a = e + ""; a.length < t;) a = "0" + a;
                return a
            }

            function T(e) {
                for (var t = 0; t < e.length; t++) t && ("j" === e[t - 1] || e[t - 1] === e[t]) || "Y" !== e[t] && "M" !== e[t] && "D" !== e[t] && "g" !== e[t] || (e = e.slice(0, t) + "j" + e.slice(t));
                return e
            }

            function v(e, t) {
                if (O(t) && (e = function(e) {
                        switch (e) {
                            case "week":
                                return "jWeek";
                            case "year":
                                return "jYear";
                            case "month":
                                return "jMonth";
                            case "months":
                                return "jMonths";
                            case "monthName":
                            case "monthsShort":
                                return "jMonthsShort"
                        }
                        return e
                    }(e)), e) {
                    var a = e.toLowerCase();
                    a.startsWith("j") && (e = y[a] || a), "jday" === e ? e = "day" : "jd" === e && (e = "d")
                }
                return e
            }

            function b(e, t, a, n) {
                var r = e._d;
                e._isUTC ? e._d = new Date(Date.UTC(t, a, n, r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds())) : e._d = new Date(t, a, n, r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds())
            }

            function S(e) {
                function t() {}
                return t.prototype = e, new t
            }

            function H(e, t) {
                switch (e) {
                    case "jDDDD":
                    case "DDDD":
                        return u;
                    case "jYYYY":
                    case "YYYY":
                        return m;
                    case "jYYYYY":
                    case "YYYYY":
                        return l;
                    case "jDDD":
                    case "S":
                    case "SS":
                    case "SSS":
                    case "DDD":
                        return _;
                    case "jMMM":
                    case "jMMMM":
                    case "MMM":
                    case "MMMM":
                    case "dd":
                    case "ddd":
                    case "dddd":
                        return c;
                    case "jMM":
                    case "jDD":
                    case "jYY":
                    case "jM":
                    case "jD":
                    case "MM":
                    case "DD":
                    case "YY":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "ss":
                    case "M":
                    case "D":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "s":
                        return o;
                    case "a":
                    case "A":
                        return s.localeData(t._l)._meridiemParse;
                    case "X":
                        return f;
                    case "Z":
                    case "ZZ":
                        return h;
                    case "T":
                        return M;
                    default:
                        return new RegExp(e.replace("\\", ""))
                }
            }

            function j(e) {
                return null == e
            }

            function x(e, t, a) {
                var n, r = a - t,
                    s = a - e.day();
                return s > r && (s -= 7), s < r - 7 && (s += 7), {
                    week: Math.ceil((n = W(e).add(s, "d")).jDayOfYear() / 7),
                    year: n.jYear()
                }
            }

            function O(e) {
                return e && 1 === e.calSystem || s.justUseJalali && 2 !== e.calSystem
            }

            function P(e, t, a, n, r) {
                "boolean" == typeof a && (r = r || n, n = a, a = void 0), s.ISO_8601 === t && (t = "YYYY-MM-DDTHH:mm:ss.SSSZ");
                let d = s.justUseJalali || this && 1 === this.calSystem;
                e && "string" == typeof e && !t && d && !s.useGregorianParser && (e = e.replace(/\//g, "-"), /\d{4}\-\d{2}\-\d{2}/.test(e) ? t = "jYYYY-jMM-jDD" : /\d{4}\-\d{2}\-\d{1}/.test(e) ? t = "jYYYY-jMM-jD" : /\d{4}\-\d{1}\-\d{1}/.test(e) ? t = "jYYYY-jM-jD" : /\d{4}\-\d{1}\-\d{2}/.test(e) ? t = "jYYYY-jM-jDD" : /\d{4}\-W\d{2}\-\d{2}/.test(e) ? t = "jYYYY-jW-jDD" : /\d{4}\-\d{3}/.test(e) ? t = "jYYYY-jDDD" : /\d{8}/.test(e) ? t = "jYYYYjMMjDD" : /\d{4}W\d{2}\d{1}/.test(e) ? t = "jYYYYjWWjD" : /\d{4}W\d{2}/.test(e) ? t = "jYYYYjWW" : /\d{4}\d{3}/.test(e) && (t = "jYYYYjDDD")), t && d && (t = T(t)), t && "string" == typeof t && (t = A(t, s));
                var o, _, u, m, l = {
                        _i: e,
                        _f: t,
                        _l: a,
                        _strict: n,
                        _isUTC: r
                    },
                    c = e,
                    h = t;
                if (t) {
                    if (o = t, "[object Array]" === Object.prototype.toString.call(o)) return function(e, t) {
                        var a, n, r, s, i, d, o = e._f.length;
                        if (0 === o) return P(new Date(NaN));
                        for (a = 0; a < o; a += 1) n = e._f[a], i = 0, (r = P(e._i, n, e._l, e._strict, t)).isValid() && (i += r._jDiff, r._il && (i += r._il.length), (j(d) || i < d) && (d = i, s = r));
                        return s
                    }(l, r);
                    _ = function(e) {
                            var t, a, n, r = e._f.match(i),
                                d = e._i + "",
                                o = r.length;
                            for (t = 0, e._a = []; t < o; t += 1)(n = (H(a = r[t], e).exec(d) || [])[0]) && (d = d.slice(d.indexOf(n) + n.length)), k[a] && function(e, t, a) {
                                var n, r = a._a;
                                switch (e) {
                                    case "jM":
                                    case "jMM":
                                        r[1] = j(t) ? 0 : ~~t - 1;
                                        break;
                                    case "jMMM":
                                    case "jMMMM":
                                        j(n = s.localeData(a._l).jMonthsParse(t)) ? a._isValid = !1 : r[1] = n;
                                        break;
                                    case "jD":
                                    case "jDD":
                                    case "jDDD":
                                    case "jDDDD":
                                        j(t) || (r[2] = ~~t);
                                        break;
                                    case "jYY":
                                        r[0] = ~~t + (~~t > 47 ? 1300 : 1400);
                                        break;
                                    case "jYYYY":
                                    case "jYYYYY":
                                        r[0] = ~~t
                                }
                                j(t) && (a._isValid = !1)
                            }(a, n, e);
                            return d && (e._il = d),
                                function(e) {
                                    var t, a, n = e._a[0],
                                        r = e._a[1],
                                        s = e._a[2];
                                    if (!(j(n) && j(r) && j(s))) return n = j(n) ? 0 : n, r = j(r) ? 0 : r, ((s = j(s) ? 1 : s) < 1 || s > W.jDaysInMonth(n, r) || r < 0 || r > 11) && (e._isValid = !1), a = F((t = C(n, r, s)).gy, t.gm, t.gd), e._jDiff = 0, ~~a.jy !== n && (e._jDiff += 1), ~~a.jm !== r && (e._jDiff += 1), ~~a.jd !== s && (e._jDiff += 1), [t.gy, t.gm, t.gd]
                                }(e)
                        }(l),
                        function(e) {
                            var t, a, n, r = e._i + "",
                                s = "",
                                d = "",
                                o = e._f.match(i),
                                _ = o.length;
                            for (t = 0; t < _; t += 1)(n = (H(a = o[t], e).exec(r) || [])[0]) && (r = r.slice(r.indexOf(n) + n.length)), k[a] instanceof Function || (d += a, n && (s += n));
                            e._i = s, e._f = d
                        }(l), _ && (t = "YYYY-MM-DD-" + l._f, e = w(_[0], 4) + "-" + w(_[1] + 1, 2) + "-" + w(_[2], 2) + "-" + l._i)
                }
                return u = r ? s.utc(e, t, a, n) : s(e, t, a, n), (!1 === l._isValid || e && e._isAMomentObject && !e._isValid) && (u._isValid = !1), u._jDiff = l._jDiff || 0, g(m = S(W.fn), u), n && m.isValid() && (m._isValid = m.format(h) === c), e && e.calSystem && (m.calSystem = e.calSystem), m
            }

            function W(e, t, a, n) {
                return P(e, t, a, n, !1)
            }

            function A(e, t) {
                for (var a = 5, n = function(e) {
                        return t.localeData().longDateFormat(e) || e
                    }; a > 0 && d.test(e);) a -= 1, e = e.replace(d, n);
                return e
            }

            function E(e) {
                var t = e._d;
                return e._isUTC ? F(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) : F(t.getFullYear(), t.getMonth(), t.getDate())
            }

            function F(e, t, a) {
                var n, r, s, i = (n = e, r = t + 1, s = a, "[object Date]" === Object.prototype.toString.call(n) && (s = n.getDate(), r = n.getMonth() + 1, n = n.getFullYear()), function(e) {
                    var t, a = I(e).gy,
                        n = a - 621,
                        r = R(n);
                    if ((t = e - J(a, 3, r.march)) >= 0)
                        if (t <= 185) return {
                            jy: n,
                            jm: 1 + ~~(t / 31),
                            jd: z(t, 31) + 1
                        };
                        else t -= 186;
                    else n -= 1, t += 179, 1 === r.leap && (t += 1);
                    return {
                        jy: n,
                        jm: 7 + ~~(t / 30),
                        jd: z(t, 30) + 1
                    }
                }(J(n, r, s)));
                return i.jm -= 1, i
            }

            function C(e, t, a) {
                var n, r, s, i, d, o, _, u = (n = e, r = t + 1, s = a, I((i = n, d = r, o = s, J((_ = R(i)).gy, 3, _.march) + (d - 1) * 31 - ~~(d / 7) * (d - 7) + o - 1)));
                return u.gm -= 1, u
            }
            k.jDDDD = D(k.jDDD, 3), g((r = s.localeData(), Object.getPrototypeOf ? Object.getPrototypeOf(r) : "".__proto__ ? r.__proto__ : r.constructor.prototype), {
                _jMonths: ["Farvardin", "Ordibehesht", "Khordaad", "Tir", "Mordaad", "Shahrivar", "Mehr", "Aabaan", "Aazar", "Dey", "Bahman", "Esfand"],
                jMonths: function(e) {
                    return e ? this._jMonths[e.jMonth()] : this._jMonths
                },
                _jMonthsShort: ["Far", "Ord", "Kho", "Tir", "Amo", "Sha", "Meh", "Aab", "Aaz", "Dey", "Bah", "Esf"],
                jMonthsShort: function(e) {
                    return e ? this._jMonthsShort[e.jMonth()] : this._jMonthsShort
                },
                jMonthsParse: function(e) {
                    var t, a, n;
                    for (this._jMonthsParse || (this._jMonthsParse = []), t = 0; t < 12; t += 1)
                        if (this._jMonthsParse[t] || (a = W([2e3, (2 + t) % 12, 25]), n = "^" + this.jMonths(a, "") + "|^" + this.jMonthsShort(a, ""), this._jMonthsParse[t] = RegExp(n.replace(".", ""), "i")), this._jMonthsParse[t].test(e)) return t
                }
            });

            function z(e, t) {
                return e - ~~(e / t) * t
            }

            function N(e) {
                return 0 === R(e).leap
            }

            function R(e) {
                var t, a, n, r, s, i, d = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178],
                    o = d.length,
                    _ = e + 621,
                    u = -14,
                    m = d[0];
                if (e < m || e >= d[o - 1]) throw Error("Invalid Jalali year " + e);
                for (i = 1; i < o && (a = (t = d[i]) - m, !(e < t)); i += 1) u = u + 8 * ~~(a / 33) + ~~(z(a, 33) / 4), m = t;
                return u = u + 8 * ~~((s = e - m) / 33) + ~~((z(s, 33) + 3) / 4), 4 === z(a, 33) && a - s == 4 && (u += 1), r = 20 + u - (~~(_ / 4) - ~~((~~(_ / 100) + 1) * 3 / 4) - 150), a - s < 6 && (s = s - a + 33 * ~~((a + 4) / 33)), -1 === (n = z(z(s + 1, 33) - 1, 4)) && (n = 4), {
                    leap: n,
                    gy: _,
                    march: r
                }
            }

            function J(e, t, a) {
                var n = ~~((e + ~~((t - 8) / 6) + 100100) * 1461 / 4) + ~~((153 * z(t + 9, 12) + 2) / 5) + a - 0x2139f58;
                return n - ~~(3 * ~~((e + 100100 + ~~((t - 8) / 6)) / 100) / 4) + 752
            }

            function I(e) {
                var t, a, n, r;
                return a = 5 * ~~(z(t = (t = 4 * e + 0x84e7d5f) + 4 * ~~(3 * ~~((4 * e + 0xaeb3908) / 146097) / 4) - 3908, 1461) / 4) + 308, n = ~~(z(a, 153) / 5) + 1, {
                    gy: ~~(t / 1461) - 100100 + ~~((8 - (r = z(~~(a / 153), 12) + 1)) / 6),
                    gm: r,
                    gd: n
                }
            }
            g(W, s), W.fn = S(s.fn), W.utc = function(e, t, a, n) {
                return P(e, t, a, n, !0)
            }, W.unix = function(e) {
                return P(1e3 * e)
            }, W.fn.format = function(e) {
                return (e = e || W.defaultFormat) && (O(this) && (e = T(e)), L[e = A(e, this)] || (L[e] = function(e) {
                    var t, a = e.match(i),
                        n = a.length;
                    for (t = 0; t < n; t += 1) k[a[t]] && (a[t] = k[a[t]]);
                    return function(r) {
                        var s = "";
                        for (t = 0; t < n; t += 1) s += a[t] instanceof Function ? "[" + a[t].call(r, e) + "]" : a[t];
                        return s
                    }
                }(e)), e = L[e](this)), s.fn.format.call(this, e)
            }, W.fn.year = function(e) {
                return O(this) ? W.fn.jYear.call(this, e) : s.fn.year.call(this, e)
            }, W.fn.jYear = function(e) {
                var t, a, n;
                return "number" == typeof e ? (t = Math.min((a = E(this)).jd, W.jDaysInMonth(e, a.jm)), b(this, (n = C(e, a.jm, t)).gy, n.gm, n.gd), s.updateOffset(this), this) : E(this).jy
            }, W.fn.month = function(e) {
                return O(this) ? W.fn.jMonth.call(this, e) : s.fn.month.call(this, e)
            }, W.fn.jMonth = function(e) {
                var t, a, n;
                if (j(e)) return E(this).jm;
                if ("string" == typeof e && "number" != typeof(e = this.localeData().jMonthsParse(e))) return this;
                return t = Math.min((a = E(this)).jd, W.jDaysInMonth(a.jy, e)), this.jYear(a.jy + ~~(e / 12)), (e = z(e, 12)) < 0 && (e += 12, this.jYear(this.jYear() - 1)), b(this, (n = C(this.jYear(), e, t)).gy, n.gm, n.gd), s.updateOffset(this), this
            }, W.fn.date = function(e) {
                return O(this) ? W.fn.jDate.call(this, e) : s.fn.date.call(this, e)
            }, W.fn.jDate = function(e) {
                var t, a;
                return "number" == typeof e ? (b(this, (a = C((t = E(this)).jy, t.jm, e)).gy, a.gm, a.gd), s.updateOffset(this), this) : E(this).jd
            }, W.fn.jDay = function(e) {
                return "number" == typeof e ? s.fn.day.call(this, e - 1) : (s.fn.day.call(this) + 1) % 7
            }, W.fn.diff = function(e, t, a) {
                var n;
                if (!O(this)) return s.fn.diff.call(this, e, t, a);
                switch (t) {
                    case "year":
                        n = r(this, e) / 12;
                        break;
                    case "month":
                        n = r(this, e);
                        break;
                    case "quarter":
                        n = r(this, e) / 3;
                        break;
                    default:
                        n = s.fn.diff.call(this, e, t, a)
                }
                return a ? n : n < 0 ? Math.ceil(n) || 0 : Math.floor(n);

                function r(e, t) {
                    if (e.date() < t.date()) return -r(t, e);
                    var a, n = (t.jYear() - e.jYear()) * 12 + (t.jMonth() - e.jMonth()),
                        s = e.clone().add(n, "months");
                    return a = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s), -(n + a) || 0
                }
            }, W.fn.dayOfYear = function(e) {
                return O(this) ? W.fn.jDayOfYear.call(this, e) : s.fn.dayOfYear.call(this, e)
            }, W.fn.jDayOfYear = function(e) {
                var t = Math.round((W(this).startOf("day") - W(this).startOf("jYear")) / 864e5) + 1;
                return j(e) ? t : this.add(e - t, "d")
            }, W.fn.week = function(e) {
                return O(this) ? W.fn.jWeek.call(this, e) : s.fn.week.call(this, e)
            }, W.fn.jWeek = function(e) {
                var t = x(this, 6, 12).week;
                return j(e) ? t : this.add((e - t) * 7, "d")
            }, W.fn.weekYear = function(e) {
                return O(this) ? W.fn.jWeekYear.call(this, e) : s.fn.weekYear.call(this, e)
            }, W.fn.jWeekYear = function(e) {
                var t = x(this, 6, 12).year;
                return j(e) ? t : this.add(e - t, "jyear")
            }, W.fn.add = function(e, t) {
                var a;
                return j(t) || isNaN(+t) || (a = e, e = t, t = a), ("jweek" === (t = v(t, this)) || "isoweek" === t) && (t = "week"), "jyear" === t ? this.jYear(this.jYear() + e) : "jmonth" === t ? this.jMonth(this.jMonth() + e) : s.fn.add.call(this, e, t), this
            }, W.fn.subtract = function(e, t) {
                var a;
                return j(t) || isNaN(+t) || (a = e, e = t, t = a), "jyear" === (t = v(t, this)) ? this.jYear(this.jYear() - e) : "jmonth" === t ? this.jMonth(this.jMonth() - e) : s.fn.subtract.call(this, e, t), this
            }, W.fn.startOf = function(e) {
                var t = v(e, this);
                return "jweek" === t ? this.startOf("day").subtract(this.jDay(), "day") : ("jyear" === t && (this.jMonth(0), t = "jmonth"), "jmonth" === t && (this.jDate(1), t = "day"), "day" === t) ? (this.hours(0), this.minutes(0), this.seconds(0), this.milliseconds(0), this) : s.fn.startOf.call(this, e)
            }, W.fn.endOf = function(e) {
                return void 0 === (e = v(e, this)) || "milisecond" === e ? this : this.startOf(e).add(1, e).subtract(1, "ms")
            }, W.fn.isSame = function(e, t) {
                return "jyear" === (t = v(t, this)) || "jmonth" === t ? s.fn.isSame.call(this.clone().startOf(t), e.clone().startOf(t)) : s.fn.isSame.call(this, e, t)
            }, W.fn.isBefore = function(e, t) {
                return "jyear" === (t = v(t, this)) || "jmonth" === t ? s.fn.isBefore.call(this.clone().startOf(t), e.clone().startOf(t)) : s.fn.isBefore.call(this, e, t)
            }, W.fn.isAfter = function(e, t) {
                return "jyear" === (t = v(t, this)) || "jmonth" === t ? s.fn.isAfter.call(this.clone().startOf(t), e.clone().startOf(t)) : s.fn.isAfter.call(this, e, t)
            }, W.fn.clone = function() {
                return W(this)
            }, W.fn.doAsJalali = function() {
                return this.calSystem = 1, this
            }, W.fn.doAsGregorian = function() {
                return this.calSystem = 2, this
            }, W.fn.jYears = W.fn.jYear, W.fn.jMonths = W.fn.jMonth, W.fn.jDates = W.fn.jDate, W.fn.jWeeks = W.fn.jWeek, W.fn.daysInMonth = function() {
                return O(this) ? this.jDaysInMonth() : s.fn.daysInMonth.call(this)
            }, W.fn.jDaysInMonth = function() {
                var e = this.jMonth(),
                    t = this.jYear();
                return e < 6 ? 31 : e < 11 ? 30 : W.jIsLeapYear(t) ? 30 : 29
            }, W.fn.isLeapYear = function() {
                return O(this) ? this.jIsLeapYear() : s.fn.isLeapYear.call(this)
            }, W.fn.jIsLeapYear = function() {
                return N(this.jYear())
            }, W.fn.locale = function(e) {
                return e && s.changeCalendarSystemByItsLocale && ("fa" === e ? this.doAsJalali() : this.doAsGregorian()), s.fn.locale.call(this, e)
            }, W.locale = function(e, t) {
                return e && s.changeCalendarSystemByItsLocale && ("fa" === e ? this.useJalaliSystemPrimarily(t) : this.useJalaliSystemSecondary()), s.locale.call(this, e)
            }, W.from = function(e, t, a) {
                var n = W.locale();
                W.locale(t);
                var r = W(e, a);
                return r.locale(n), W.locale(n), r
            }, W.bindCalendarSystemAndLocale = function() {
                s.changeCalendarSystemByItsLocale = !0
            }, W.unBindCalendarSystemAndLocale = function() {
                s.changeCalendarSystemByItsLocale = !1
            }, W.useJalaliSystemPrimarily = function(e) {
                s.justUseJalali = !0;
                var t = !1;
                e && (t = e.useGregorianParser), s.useGregorianParser = t
            }, W.useJalaliSystemSecondary = function() {
                s.justUseJalali = !1
            }, W.jDaysInMonth = function(e, t) {
                return (e += ~~(t / 12), (t = z(t, 12)) < 0 && (t += 12, e -= 1), t < 6) ? 31 : t < 11 ? 30 : W.jIsLeapYear(e) ? 30 : 29
            }, W.jIsLeapYear = N, s.updateLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    L: "jYYYY/jMM/jDD",
                    LL: "jD jMMMM jYYYY",
                    LLL: "jD jMMMM jYYYY LT",
                    LLLL: "dddd، jD jMMMM jYYYY LT"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [ی پیش ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    m: "1 دقیقه",
                    mm: "%d دقیقه",
                    h: "1 ساعت",
                    hh: "%d ساعت",
                    d: "1 روز",
                    dd: "%d روز",
                    M: "1 ماه",
                    MM: "%d ماه",
                    y: "1 سال",
                    yy: "%d سال"
                },
                ordinal: "%dم",
                preparse: function(e) {
                    return e
                },
                postformat: function(e) {
                    return e
                },
                week: {
                    dow: 6,
                    doy: 12
                },
                meridiem: function(e) {
                    return e < 12 ? "ق.ظ" : "ب.ظ"
                },
                jMonths: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"),
                jMonthsShort: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_")
            }), W.bindCalendarSystemAndLocale(), s.locale("en"), W.jConvert = {
                toJalali: F,
                toGregorian: C
            }
        },
        39115: function(e, t, a) {
            a(70299).defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[M\xf4re om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        79050: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    a = {
                        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                    },
                    n = function(e) {
                        return function(n, r, s, i) {
                            var d = t(n),
                                o = a[e][t(n)];
                            return 2 === d && (o = o[+!r]), o.replace(/%d/i, n)
                        }
                    },
                    r = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-dz", {
                    months: r,
                    monthsShort: r,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: n("s"),
                        ss: n("s"),
                        m: n("m"),
                        mm: n("m"),
                        h: n("h"),
                        hh: n("h"),
                        d: n("d"),
                        dd: n("d"),
                        M: n("M"),
                        MM: n("M"),
                        y: n("y"),
                        yy: n("y")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 0,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        53146: function(e, t, a) {
            a(70299).defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        },
        8239: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        0: "0"
                    },
                    a = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    n = {
                        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                    },
                    r = function(e) {
                        return function(t, r, s, i) {
                            var d = a(t),
                                o = n[e][a(t)];
                            return 2 === d && (o = o[+!r]), o.replace(/%d/i, t)
                        }
                    },
                    s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar-ly", {
                    months: s,
                    monthsShort: s,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: r("s"),
                        ss: r("s"),
                        m: r("m"),
                        mm: r("m"),
                        h: r("h"),
                        hh: r("h"),
                        d: r("d"),
                        dd: r("d"),
                        M: r("M"),
                        MM: r("M"),
                        y: r("y"),
                        yy: r("y")
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            })(a(70299))
        },
        96550: function(e, t, a) {
            a(70299).defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        26004: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "١",
                        2: "٢",
                        3: "٣",
                        4: "٤",
                        5: "٥",
                        6: "٦",
                        7: "٧",
                        8: "٨",
                        9: "٩",
                        0: "٠"
                    },
                    a = {
                        "١": "1",
                        "٢": "2",
                        "٣": "3",
                        "٤": "4",
                        "٥": "5",
                        "٦": "6",
                        "٧": "7",
                        "٨": "8",
                        "٩": "9",
                        "٠": "0"
                    };
                e.defineLocale("ar-sa", {
                    months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        ss: "%d ثانية",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                            return a[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        8246: function(e, t, a) {
            a(70299).defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        90079: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "١",
                        2: "٢",
                        3: "٣",
                        4: "٤",
                        5: "٥",
                        6: "٦",
                        7: "٧",
                        8: "٨",
                        9: "٩",
                        0: "٠"
                    },
                    a = {
                        "١": "1",
                        "٢": "2",
                        "٣": "3",
                        "٤": "4",
                        "٥": "5",
                        "٦": "6",
                        "٧": "7",
                        "٨": "8",
                        "٩": "9",
                        "٠": "0"
                    },
                    n = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    r = {
                        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                    },
                    s = function(e) {
                        return function(t, a, s, i) {
                            var d = n(t),
                                o = r[e][n(t)];
                            return 2 === d && (o = o[+!a]), o.replace(/%d/i, t)
                        }
                    },
                    i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
                e.defineLocale("ar", {
                    months: i,
                    monthsShort: i,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/‏M/‏YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(e) {
                        return "م" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: s("s"),
                        ss: s("s"),
                        m: s("m"),
                        mm: s("m"),
                        h: s("h"),
                        hh: s("h"),
                        d: s("d"),
                        dd: s("d"),
                        M: s("M"),
                        MM: s("M"),
                        y: s("y"),
                        yy: s("y")
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                            return a[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            })(a(70299))
        },
        81335: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-\xfcnc\xfc",
                    4: "-\xfcnc\xfc",
                    100: "-\xfcnc\xfc",
                    6: "-ncı",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-ıncı",
                    90: "-ıncı"
                };
                e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ertəsi_\xc7ərşənbə axşamı_\xc7ərşənbə_C\xfcmə axşamı_C\xfcmə_Şənbə".split("_"),
                    weekdaysShort: "Baz_BzE_\xc7Ax_\xc7ər_CAx_C\xfcm_Şən".split("_"),
                    weekdaysMin: "Bz_BE_\xc7A_\xc7ə_CA_C\xfc_Şə".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[gələn həftə] dddd [saat] LT",
                        lastDay: "[d\xfcnən] LT",
                        lastWeek: "[ke\xe7ən həftə] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s əvvəl",
                        s: "bir ne\xe7ə saniyə",
                        ss: "%d saniyə",
                        m: "bir dəqiqə",
                        mm: "%d dəqiqə",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gecə|səhər|gündüz|axşam/,
                    isPM: function(e) {
                        return /^(gündüz|axşam)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "g\xfcnd\xfcz" : "axşam"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "-ıncı";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        20961: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, r, s;
                    return "m" === a ? t ? "хвіліна" : "хвіліну" : "h" === a ? t ? "гадзіна" : "гадзіну" : e + " " + (n = ({
                        ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                        hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                        dd: "дзень_дні_дзён",
                        MM: "месяц_месяцы_месяцаў",
                        yy: "год_гады_гадоў"
                    })[a], r = +e, s = n.split("_"), r % 10 == 1 && r % 100 != 11 ? s[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? s[1] : s[2])
                }
                e.defineLocale("be", {
                    months: {
                        format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                        standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                    },
                    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                    weekdays: {
                        format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                        standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                    },
                    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., HH:mm",
                        LLLL: "dddd, D MMMM YYYY г., HH:mm"
                    },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function() {
                            return "[У] dddd [ў] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[У мінулую] dddd [ў] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[У мінулы] dddd [ў] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "праз %s",
                        past: "%s таму",
                        s: "некалькі секунд",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "дзень",
                        dd: t,
                        M: "месяц",
                        MM: t,
                        y: "год",
                        yy: t
                    },
                    meridiemParse: /ночы|раніцы|дня|вечара/,
                    isPM: function(e) {
                        return /^(дня|вечара)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return (e % 10 == 2 || e % 10 == 3) && e % 100 != 12 && e % 100 != 13 ? e + "-і" : e + "-ы";
                            case "D":
                                return e + "-га";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        36831: function(e, t, a) {
            a(70299).defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Миналата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Миналия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    w: "седмица",
                    ww: "%d седмици",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = e % 100;
                    if (0 === e) return e + "-ев";
                    if (0 === a) return e + "-ен";
                    if (a > 10 && a < 20) return e + "-ти";
                    if (1 === t) return e + "-ви";
                    if (2 === t) return e + "-ри";
                    else if (7 === t || 8 === t) return e + "-ми";
                    else return e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        58649: function(e, t, a) {
            a(70299).defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lɛrɛ] LT",
                    nextDay: "[Sini lɛrɛ] LT",
                    nextWeek: "dddd [don lɛrɛ] LT",
                    lastDay: "[Kunu lɛrɛ] LT",
                    lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kɔnɔ",
                    past: "a bɛ %s bɔ",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lɛrɛ kelen",
                    hh: "lɛrɛ %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        59067: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "১",
                        2: "২",
                        3: "৩",
                        4: "৪",
                        5: "৫",
                        6: "৬",
                        7: "৭",
                        8: "৮",
                        9: "৯",
                        0: "০"
                    },
                    a = {
                        "১": "1",
                        "২": "2",
                        "৩": "3",
                        "৪": "4",
                        "৫": "5",
                        "৬": "6",
                        "৭": "7",
                        "৮": "8",
                        "৯": "9",
                        "০": "0"
                    };
                e.defineLocale("bn-bd", {
                    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm সময়",
                        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কয়েক সেকেন্ড",
                        ss: "%d সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(e) {
                        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
                    meridiemHour: function(e, t) {
                        if (12 === e && (e = 0), "রাত" === t) return e < 4 ? e : e + 12;
                        if ("ভোর" === t) return e;
                        if ("সকাল" === t) return e;
                        if ("দুপুর" === t) return e >= 3 ? e : e + 12;
                        if ("বিকাল" === t) return e + 12;
                        else if ("সন্ধ্যা" === t) return e + 12
                    },
                    meridiem: function(e, t, a) {
                        if (e < 4) return "রাত";
                        if (e < 6) return "ভোর";
                        if (e < 12) return "সকাল";
                        if (e < 15) return "দুপুর";
                        if (e < 18) return "বিকাল";
                        else if (e < 20) return "সন্ধ্যা";
                        else return "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        22016: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "১",
                        2: "২",
                        3: "৩",
                        4: "৪",
                        5: "৫",
                        6: "৬",
                        7: "৭",
                        8: "৮",
                        9: "৯",
                        0: "০"
                    },
                    a = {
                        "১": "1",
                        "২": "2",
                        "৩": "3",
                        "৪": "4",
                        "৫": "5",
                        "৬": "6",
                        "৭": "7",
                        "৮": "8",
                        "৯": "9",
                        "০": "0"
                    };
                e.defineLocale("bn", {
                    months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                    weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm সময়",
                        LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কয়েক সেকেন্ড",
                        ss: "%d সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(e) {
                        return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t) ? e + 12 : e
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        11735: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "༡",
                        2: "༢",
                        3: "༣",
                        4: "༤",
                        5: "༥",
                        6: "༦",
                        7: "༧",
                        8: "༨",
                        9: "༩",
                        0: "༠"
                    },
                    a = {
                        "༡": "1",
                        "༢": "2",
                        "༣": "3",
                        "༤": "4",
                        "༥": "5",
                        "༦": "6",
                        "༧": "7",
                        "༨": "8",
                        "༩": "9",
                        "༠": "0"
                    };
                e.defineLocale("bo", {
                    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
                    monthsShortRegex: /^(ཟླ་\d{1,2})/,
                    monthsParseExact: !0,
                    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[དི་རིང] LT",
                        nextDay: "[སང་ཉིན] LT",
                        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                        lastDay: "[ཁ་སང] LT",
                        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ལ་",
                        past: "%s སྔན་ལ",
                        s: "ལམ་སང",
                        ss: "%d སྐར་ཆ།",
                        m: "སྐར་མ་གཅིག",
                        mm: "%d སྐར་མ",
                        h: "ཆུ་ཚོད་གཅིག",
                        hh: "%d ཆུ་ཚོད",
                        d: "ཉིན་གཅིག",
                        dd: "%d ཉིན་",
                        M: "ཟླ་བ་གཅིག",
                        MM: "%d ཟླ་བ",
                        y: "ལོ་གཅིག",
                        yy: "%d ལོ"
                    },
                    preparse: function(e) {
                        return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t) ? e + 12 : e
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        4420: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, r, s;
                    return e + " " + (n = ({
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    })[a], 2 === e ? void 0 === (s = {
                        m: "v",
                        b: "v",
                        d: "z"
                    })[(r = n).charAt(0)] ? r : s[r.charAt(0)] + r.substring(1) : n)
                }
                var a = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
                    n = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                    r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
                e.defineLocale("br", {
                    months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    weekdaysParse: r,
                    fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
                    shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
                    minWeekdaysParse: r,
                    monthsRegex: n,
                    monthsShortRegex: n,
                    monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
                    monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY HH:mm",
                        LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warcʼhoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Decʼh da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s ʼzo",
                        s: "un nebeud segondenno\xf9",
                        ss: "%d eilenn",
                        m: "ur vunutenn",
                        mm: t,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: t,
                        M: "ur miz",
                        MM: t,
                        y: "ur bloaz",
                        yy: function(e) {
                            switch (function e(t) {
                                    return t > 9 ? e(t % 10) : t
                                }(e)) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 9:
                                    return e + " bloaz";
                                default:
                                    return e + " vloaz"
                            }
                        }
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "a\xf1" : "vet")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    meridiemParse: /a.m.|g.m./,
                    isPM: function(e) {
                        return "g.m." === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "a.m." : "g.m."
                    }
                })
            })(a(70299))
        },
        69515: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return 1 === e ? n += "sekunda" : 2 === e || 3 === e || 4 === e ? n += "sekunde" : n += "sekundi", n;
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return 1 === e ? n += "minuta" : 2 === e || 3 === e || 4 === e ? n += "minute" : n += "minuta", n;
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return 1 === e ? n += "sat" : 2 === e || 3 === e || 4 === e ? n += "sata" : n += "sati", n;
                        case "dd":
                            return 1 === e ? n += "dan" : n += "dana", n;
                        case "MM":
                            return 1 === e ? n += "mjesec" : 2 === e || 3 === e || 4 === e ? n += "mjeseca" : n += "mjeseci", n;
                        case "yy":
                            return 1 === e ? n += "godina" : 2 === e || 3 === e || 4 === e ? n += "godine" : n += "godina", n
                    }
                }
                e.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        93508: function(e, t, a) {
            a(70299).defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aqu\xed %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
                    return ("w" === t || "W" === t) && (a = "a"), e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        19070: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
                    a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

                function n(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }

                function r(e, t, a, r) {
                    var s = e + " ";
                    switch (a) {
                        case "s":
                            return t || r ? "p\xe1r sekund" : "p\xe1r sekundami";
                        case "ss":
                            if (t || r) return s + (n(e) ? "sekundy" : "sekund");
                            return s + "sekundami";
                        case "m":
                            return t ? "minuta" : r ? "minutu" : "minutou";
                        case "mm":
                            if (t || r) return s + (n(e) ? "minuty" : "minut");
                            return s + "minutami";
                        case "h":
                            return t ? "hodina" : r ? "hodinu" : "hodinou";
                        case "hh":
                            if (t || r) return s + (n(e) ? "hodiny" : "hodin");
                            return s + "hodinami";
                        case "d":
                            return t || r ? "den" : "dnem";
                        case "dd":
                            if (t || r) return s + (n(e) ? "dny" : "dn\xed");
                            return s + "dny";
                        case "M":
                            return t || r ? "měs\xedc" : "měs\xedcem";
                        case "MM":
                            if (t || r) return s + (n(e) ? "měs\xedce" : "měs\xedců");
                            return s + "měs\xedci";
                        case "y":
                            return t || r ? "rok" : "rokem";
                        case "yy":
                            if (t || r) return s + (n(e) ? "roky" : "let");
                            return s + "lety"
                    }
                }
                e.defineLocale("cs", {
                    months: "leden_\xfanor_březen_duben_květen_červen_červenec_srpen_z\xe1ř\xed_ř\xedjen_listopad_prosinec".split("_"),
                    monthsShort: "led_\xfano_bře_dub_kvě_čvn_čvc_srp_z\xe1ř_ř\xedj_lis_pro".split("_"),
                    monthsRegex: a,
                    monthsShortRegex: a,
                    monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                    monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                    monthsParse: t,
                    longMonthsParse: t,
                    shortMonthsParse: t,
                    weekdays: "neděle_ponděl\xed_\xfater\xfd_středa_čtvrtek_p\xe1tek_sobota".split("_"),
                    weekdaysShort: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
                    weekdaysMin: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[z\xedtra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v neděli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve středu v] LT";
                                case 4:
                                    return "[ve čtvrtek v] LT";
                                case 5:
                                    return "[v p\xe1tek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou neděli v] LT";
                                case 1:
                                case 2:
                                    return "[minul\xe9] dddd [v] LT";
                                case 3:
                                    return "[minulou středu v] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: r,
                        ss: r,
                        m: r,
                        mm: r,
                        h: r,
                        hh: r,
                        d: r,
                        dd: r,
                        M: r,
                        MM: r,
                        y: r,
                        yy: r
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        44737: function(e, t, a) {
            a(70299).defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                        return e + t
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    ss: "%d ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        30540: function(e, t, a) {
            a(70299).defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn \xf4l",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = "";
                    return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        56751: function(e, t, a) {
            a(70299).defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
                weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "p\xe5 dddd [kl.] LT",
                    lastDay: "[i g\xe5r kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "f\xe5 sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en m\xe5ned",
                    MM: "%d m\xe5neder",
                    y: "et \xe5r",
                    yy: "%d \xe5r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        18753: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? r[a][0] : r[a][1]
                }
                e.defineLocale("de-at", {
                    months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        w: t,
                        ww: "%d Wochen",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        25823: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? r[a][0] : r[a][1]
                }
                e.defineLocale("de-ch", {
                    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        w: t,
                        ww: "%d Wochen",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        86347: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        w: ["eine Woche", "einer Woche"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? r[a][0] : r[a][1]
                }
                e.defineLocale("de", {
                    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        w: t,
                        ww: "%d Wochen",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        6238: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
                    a = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
                e.defineLocale("dv", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/M/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /މކ|މފ/,
                    isPM: function(e) {
                        return "މފ" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "މކ" : "މފ"
                    },
                    calendar: {
                        sameDay: "[މިއަދު] LT",
                        nextDay: "[މާދަމާ] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[އިއްޔެ] LT",
                        lastWeek: "[ފާއިތުވި] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ތެރޭގައި %s",
                        past: "ކުރިން %s",
                        s: "ސިކުންތުކޮޅެއް",
                        ss: "d% ސިކުންތު",
                        m: "މިނިޓެއް",
                        mm: "މިނިޓު %d",
                        h: "ގަޑިއިރެއް",
                        hh: "ގަޑިއިރު %d",
                        d: "ދުވަހެއް",
                        dd: "ދުވަސް %d",
                        M: "މަހެއް",
                        MM: "މަސް %d",
                        y: "އަހަރެއް",
                        yy: "އަހަރު %d"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 7,
                        doy: 12
                    }
                })
            })(a(70299))
        },
        62425: function(e, t, a) {
            a(70299).defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                    },
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var a, n = this._calendarEl[e],
                        r = t && t.hours();
                    return a = n, ("undefined" != typeof Function && a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        17494: function(e, t, a) {
            a(70299).defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        },
        44028: function(e, t, a) {
            a(70299).defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                }
            })
        },
        37966: function(e, t, a) {
            a(70299).defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        96382: function(e, t, a) {
            a(70299).defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        95317: function(e, t, a) {
            a(70299).defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                }
            })
        },
        96723: function(e, t, a) {
            a(70299).defineLocale("en-in", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        },
        23720: function(e, t, a) {
            a(70299).defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        79850: function(e, t, a) {
            a(70299).defineLocale("en-sg", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        28128: function(e, t, a) {
            a(70299).defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "[la] D[-an de] MMMM, YYYY",
                    LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                    llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd[n je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasintan] dddd[n je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "kelkaj sekundoj",
                    ss: "%d sekundoj",
                    m: "unu minuto",
                    mm: "%d minutoj",
                    h: "unu horo",
                    hh: "%d horoj",
                    d: "unu tago",
                    dd: "%d tagoj",
                    M: "unu monato",
                    MM: "%d monatoj",
                    y: "unu jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        49608: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        12720: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-mx", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 0,
                        doy: 4
                    },
                    invalidDate: "Fecha inv\xe1lida"
                })
            })(a(70299))
        },
        34729: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-us", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "MM/DD/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        11076: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        w: "una semana",
                        ww: "%d semanas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}º/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    invalidDate: "Fecha inv\xe1lida"
                })
            })(a(70299))
        },
        57553: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                        ss: [e + "sekundi", e + "sekundit"],
                        m: ["\xfche minuti", "\xfcks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                        M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1]
                }
                e.defineLocale("et", {
                    months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[T\xe4na,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[J\xe4rgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4rast",
                        past: "%s tagasi",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d p\xe4eva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        89666: function(e, t, a) {
            a(70299).defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        34617: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "۱",
                        2: "۲",
                        3: "۳",
                        4: "۴",
                        5: "۵",
                        6: "۶",
                        7: "۷",
                        8: "۸",
                        9: "۹",
                        0: "۰"
                    },
                    a = {
                        "۱": "1",
                        "۲": "2",
                        "۳": "3",
                        "۴": "4",
                        "۵": "5",
                        "۶": "6",
                        "۷": "7",
                        "۸": "8",
                        "۹": "9",
                        "۰": "0"
                    };
                e.defineLocale("fa", {
                    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /قبل از ظهر|بعد از ظهر/,
                    isPM: function(e) {
                        return /بعد از ظهر/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چند ثانیه",
                        ss: "%d ثانیه",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/[۰-۹]/g, function(e) {
                            return a[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}م/,
                    ordinal: "%dم",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            })(a(70299))
        },
        73633: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
                    a = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

                function n(e, n, r, s) {
                    var i, d, o = "";
                    switch (r) {
                        case "s":
                            return s ? "muutaman sekunnin" : "muutama sekunti";
                        case "ss":
                            o = s ? "sekunnin" : "sekuntia";
                            break;
                        case "m":
                            return s ? "minuutin" : "minuutti";
                        case "mm":
                            o = s ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return s ? "tunnin" : "tunti";
                        case "hh":
                            o = s ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                        case "dd":
                            o = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                            break;
                        case "M":
                            return s ? "kuukauden" : "kuukausi";
                        case "MM":
                            o = s ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return s ? "vuoden" : "vuosi";
                        case "yy":
                            o = s ? "vuoden" : "vuotta"
                    }
                    return i = e, d = s, (i < 10 ? d ? a[i] : t[i] : i) + " " + o
                }
                e.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] HH.mm",
                        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                    },
                    calendar: {
                        sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4\xe4st\xe4",
                        past: "%s sitten",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        91401: function(e, t, a) {
            a(70299).defineLocale("fil", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        36507: function(e, t, a) {
            a(70299).defineLocale("fo", {
                months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
                weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[\xcd dag kl.] LT",
                    nextDay: "[\xcd morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[\xcd gj\xe1r kl.] LT",
                    lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s s\xed\xf0ani",
                    s: "f\xe1 sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein t\xedmi",
                    hh: "%d t\xedmar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein m\xe1na\xf0ur",
                    MM: "%d m\xe1na\xf0ir",
                    y: "eitt \xe1r",
                    yy: "%d \xe1r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        19169: function(e, t, a) {
            a(70299).defineLocale("fr-ca", {
                months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui \xe0] LT",
                    nextDay: "[Demain \xe0] LT",
                    nextWeek: "dddd [\xe0] LT",
                    lastDay: "[Hier \xe0] LT",
                    lastWeek: "dddd [dernier \xe0] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                }
            })
        },
        67370: function(e, t, a) {
            a(70299).defineLocale("fr-ch", {
                months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui \xe0] LT",
                    nextDay: "[Demain \xe0] LT",
                    nextWeek: "dddd [\xe0] LT",
                    lastDay: "[Hier \xe0] LT",
                    lastWeek: "dddd [dernier \xe0] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        70992: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
                    a = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
                e.defineLocale("fr", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    monthsRegex: t,
                    monthsShortRegex: t,
                    monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
                    monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd’hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        w: "une semaine",
                        ww: "%d semaines",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + (1 === e ? "er" : "");
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                            case "W":
                                return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        46641: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsParseExact: !0,
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        ss: "%d sekonden",
                        m: "ien min\xfat",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        28784: function(e, t, a) {
            a(70299).defineLocale("ga", {
                months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "Meitheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deireadh F\xf3mhair", "Samhain", "Nollaig"],
                monthsShort: ["Ean", "Feabh", "M\xe1rt", "Aib", "Beal", "Meith", "I\xfail", "L\xfan", "M.F.", "D.F.", "Samh", "Noll"],
                monthsParseExact: !0,
                weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Sathairn"],
                weekdaysShort: ["Domh", "Luan", "M\xe1irt", "C\xe9ad", "D\xe9ar", "Aoine", "Sath"],
                weekdaysMin: ["Do", "Lu", "M\xe1", "C\xe9", "D\xe9", "A", "Sa"],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Am\xe1rach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inn\xe9 ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s \xf3 shin",
                    s: "c\xfapla soicind",
                    ss: "%d soicind",
                    m: "n\xf3im\xe9ad",
                    mm: "%d n\xf3im\xe9ad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "l\xe1",
                    dd: "%d l\xe1",
                    M: "m\xed",
                    MM: "%d m\xedonna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        86147: function(e, t, a) {
            a(70299).defineLocale("gd", {
                months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"],
                monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"],
                monthsParseExact: !0,
                weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-m\xe0ireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-d\xe8 aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "m\xecos",
                    MM: "%d m\xecosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        3275: function(e, t, a) {
            a(70299).defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
                weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
                weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                    },
                    nextDay: function() {
                        return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un d\xeda",
                    dd: "%d d\xedas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        73998: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                        ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                        m: ["एका मिणटान", "एक मिनूट"],
                        mm: [e + " मिणटांनी", e + " मिणटां"],
                        h: ["एका वरान", "एक वर"],
                        hh: [e + " वरांनी", e + " वरां"],
                        d: ["एका दिसान", "एक दीस"],
                        dd: [e + " दिसांनी", e + " दीस"],
                        M: ["एका म्हयन्यान", "एक म्हयनो"],
                        MM: [e + " म्हयन्यानी", e + " म्हयने"],
                        y: ["एका वर्सान", "एक वर्स"],
                        yy: [e + " वर्सांनी", e + " वर्सां"]
                    };
                    return n ? r[a][0] : r[a][1]
                }
                e.defineLocale("gom-deva", {
                    months: {
                        standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                        format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                        isFormat: /MMMM(\s)+D[oD]?/
                    },
                    monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                    weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                    weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [वाजतां]",
                        LTS: "A h:mm:ss [वाजतां]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [वाजतां]",
                        LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                        llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
                    },
                    calendar: {
                        sameDay: "[आयज] LT",
                        nextDay: "[फाल्यां] LT",
                        nextWeek: "[फुडलो] dddd[,] LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[फाटलो] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s आदीं",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                    ordinal: function(e, t) {
                        return "D" === t ? e + "वेर" : e
                    },
                    week: {
                        dow: 0,
                        doy: 3
                    },
                    meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "राती" === t) ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
                    }
                })
            })(a(70299))
        },
        41097: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        s: ["thoddea sekondamni", "thodde sekond"],
                        ss: [e + " sekondamni", e + " sekond"],
                        m: ["eka mintan", "ek minut"],
                        mm: [e + " mintamni", e + " mintam"],
                        h: ["eka voran", "ek vor"],
                        hh: [e + " voramni", e + " voram"],
                        d: ["eka disan", "ek dis"],
                        dd: [e + " disamni", e + " dis"],
                        M: ["eka mhoinean", "ek mhoino"],
                        MM: [e + " mhoineamni", e + " mhoine"],
                        y: ["eka vorsan", "ek voros"],
                        yy: [e + " vorsamni", e + " vorsam"]
                    };
                    return n ? r[a][0] : r[a][1]
                }
                e.defineLocale("gom-latn", {
                    months: {
                        standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                        format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                        isFormat: /MMMM(\s)+D[oD]?/
                    },
                    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [vazta]",
                        LTS: "A h:mm:ss [vazta]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [vazta]",
                        LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                    },
                    calendar: {
                        sameDay: "[Aiz] LT",
                        nextDay: "[Faleam] LT",
                        nextWeek: "[Fuddlo] dddd[,] LT",
                        lastDay: "[Kal] LT",
                        lastWeek: "[Fattlo] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s adim",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                    ordinal: function(e, t) {
                        return "D" === t ? e + "er" : e
                    },
                    week: {
                        dow: 0,
                        doy: 3
                    },
                    meridiemParse: /rati|sokallim|donparam|sanje/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "rati" === t) ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                    }
                })
            })(a(70299))
        },
        92108: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "૧",
                        2: "૨",
                        3: "૩",
                        4: "૪",
                        5: "૫",
                        6: "૬",
                        7: "૭",
                        8: "૮",
                        9: "૯",
                        0: "૦"
                    },
                    a = {
                        "૧": "1",
                        "૨": "2",
                        "૩": "3",
                        "૪": "4",
                        "૫": "5",
                        "૬": "6",
                        "૭": "7",
                        "૮": "8",
                        "૯": "9",
                        "૦": "0"
                    };
                e.defineLocale("gu", {
                    months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                    monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                    weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                    weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm વાગ્યે",
                        LTS: "A h:mm:ss વાગ્યે",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                        LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                    },
                    calendar: {
                        sameDay: "[આજ] LT",
                        nextDay: "[કાલે] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ગઇકાલે] LT",
                        lastWeek: "[પાછલા] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s મા",
                        past: "%s પહેલા",
                        s: "અમુક પળો",
                        ss: "%d સેકંડ",
                        m: "એક મિનિટ",
                        mm: "%d મિનિટ",
                        h: "એક કલાક",
                        hh: "%d કલાક",
                        d: "એક દિવસ",
                        dd: "%d દિવસ",
                        M: "એક મહિનો",
                        MM: "%d મહિનો",
                        y: "એક વર્ષ",
                        yy: "%d વર્ષ"
                    },
                    preparse: function(e) {
                        return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "રાત" === t) ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        30367: function(e, t, a) {
            a(70299).defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, a) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? a ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? a ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        },
        59443: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    a = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    },
                    n = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i];
                e.defineLocale("hi", {
                    months: {
                        format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                        standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                    },
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        LTS: "A h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                    },
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i],
                    monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                    monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                    monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        ss: "%d सेकंड",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /रात|सुबह|दोपहर|शाम/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "रात" === t) ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        54894: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return 1 === e ? n += "sekunda" : 2 === e || 3 === e || 4 === e ? n += "sekunde" : n += "sekundi", n;
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return 1 === e ? n += "minuta" : 2 === e || 3 === e || 4 === e ? n += "minute" : n += "minuta", n;
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return 1 === e ? n += "sat" : 2 === e || 3 === e || 4 === e ? n += "sata" : n += "sati", n;
                        case "dd":
                            return 1 === e ? n += "dan" : n += "dana", n;
                        case "MM":
                            return 1 === e ? n += "mjesec" : 2 === e || 3 === e || 4 === e ? n += "mjeseca" : n += "mjeseci", n;
                        case "yy":
                            return 1 === e ? n += "godina" : 2 === e || 3 === e || 4 === e ? n += "godine" : n += "godina", n
                    }
                }
                e.defineLocale("hr", {
                    months: {
                        format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                        standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                    },
                    monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM YYYY",
                        LLL: "Do MMMM YYYY H:mm",
                        LLLL: "dddd, Do MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prošlu] [nedjelju] [u] LT";
                                case 3:
                                    return "[prošlu] [srijedu] [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        58575: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "vas\xe1rnap h\xe9tfőn kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

                function a(e, t, a, n) {
                    switch (a) {
                        case "s":
                            return n || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
                        case "ss":
                            return e + (n || t) ? " m\xe1sodperc" : " m\xe1sodperce";
                        case "m":
                            return "egy" + (n || t ? " perc" : " perce");
                        case "mm":
                            return e + (n || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (n || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "hh":
                            return e + (n || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "d":
                            return "egy" + (n || t ? " nap" : " napja");
                        case "dd":
                            return e + (n || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (n || t ? " h\xf3nap" : " h\xf3napja");
                        case "MM":
                            return e + (n || t ? " h\xf3nap" : " h\xf3napja");
                        case "y":
                            return "egy" + (n || t ? " \xe9v" : " \xe9ve");
                        case "yy":
                            return e + (n || t ? " \xe9v" : " \xe9ve")
                    }
                    return ""
                }

                function n(e) {
                    return (e ? "" : "[m\xfalt] ") + "[" + t[this.day()] + "] LT[-kor]"
                }
                e.defineLocale("hu", {
                    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan._feb._m\xe1rc._\xe1pr._m\xe1j._j\xfan._j\xfal._aug._szept._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "vas\xe1rnap_h\xe9tfő_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
                    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(e) {
                        return "u" === e.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s m\xfalva",
                        past: "%s",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        60866: function(e, t, a) {
            a(70299).defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    ss: "%d վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            if (1 === e) return e + "-ին";
                            return e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        32725: function(e, t, a) {
            a(70299).defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "pagi" === t) ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        },
        46352: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e) {
                    if (e % 100 == 11);
                    else if (e % 10 == 1) return !1;
                    return !0
                }

                function a(e, a, n, r) {
                    var s = e + " ";
                    switch (n) {
                        case "s":
                            return a || r ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                        case "ss":
                            if (t(e)) return s + (a || r ? "sek\xfandur" : "sek\xfandum");
                            return s + "sek\xfanda";
                        case "m":
                            return a ? "m\xedn\xfata" : "m\xedn\xfatu";
                        case "mm":
                            if (t(e)) return s + (a || r ? "m\xedn\xfatur" : "m\xedn\xfatum");
                            if (a) return s + "m\xedn\xfata";
                            return s + "m\xedn\xfatu";
                        case "hh":
                            if (t(e)) return s + (a || r ? "klukkustundir" : "klukkustundum");
                            return s + "klukkustund";
                        case "d":
                            if (a) return "dagur";
                            return r ? "dag" : "degi";
                        case "dd":
                            if (t(e)) {
                                if (a) return s + "dagar";
                                return s + (r ? "daga" : "d\xf6gum")
                            }
                            if (a) return s + "dagur";
                            return s + (r ? "dag" : "degi");
                        case "M":
                            if (a) return "m\xe1nu\xf0ur";
                            return r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                        case "MM":
                            if (t(e)) {
                                if (a) return s + "m\xe1nu\xf0ir";
                                return s + (r ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um")
                            }
                            if (a) return s + "m\xe1nu\xf0ur";
                            return s + (r ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                        case "y":
                            return a || r ? "\xe1r" : "\xe1ri";
                        case "yy":
                            if (t(e)) return s + (a || r ? "\xe1r" : "\xe1rum");
                            return s + (a || r ? "\xe1r" : "\xe1ri")
                    }
                }
                e.defineLocale("is", {
                    months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
                    weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
                    weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
                    weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                    },
                    calendar: {
                        sameDay: "[\xed dag kl.] LT",
                        nextDay: "[\xe1 morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[\xed g\xe6r kl.] LT",
                        lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s s\xed\xf0an",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: "klukkustund",
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        90145: function(e, t, a) {
            a(70299).defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        63205: function(e, t, a) {
            a(70299).defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextDay: function() {
                        return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextWeek: function() {
                        return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastDay: function() {
                        return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastWeek: function() {
                        return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "tra %s",
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    w: "una settimana",
                    ww: "%d settimane",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        24005: function(e, t, a) {
            a(70299).defineLocale("ja", {
                eras: [{
                    since: "2019-05-01",
                    offset: 1,
                    name: "令和",
                    narrow: "㋿",
                    abbr: "R"
                }, {
                    since: "1989-01-08",
                    until: "2019-04-30",
                    offset: 1,
                    name: "平成",
                    narrow: "㍻",
                    abbr: "H"
                }, {
                    since: "1926-12-25",
                    until: "1989-01-07",
                    offset: 1,
                    name: "昭和",
                    narrow: "㍼",
                    abbr: "S"
                }, {
                    since: "1912-07-30",
                    until: "1926-12-24",
                    offset: 1,
                    name: "大正",
                    narrow: "㍽",
                    abbr: "T"
                }, {
                    since: "1873-01-01",
                    until: "1912-07-29",
                    offset: 6,
                    name: "明治",
                    narrow: "㍾",
                    abbr: "M"
                }, {
                    since: "0001-01-01",
                    until: "1873-12-31",
                    offset: 1,
                    name: "西暦",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "紀元前",
                    narrow: "BC",
                    abbr: "BC"
                }],
                eraYearOrdinalRegex: /(元|\d+)年/,
                eraYearOrdinalParse: function(e, t) {
                    return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
                },
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日(ddd) HH:mm"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: function(e) {
                        return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                    },
                    lastDay: "[昨日] LT",
                    lastWeek: function(e) {
                        return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "y":
                            return 1 === e ? "元年" : e + "年";
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        },
        78784: function(e, t, a) {
            a(70299).defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "enjing" === t) ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        93932: function(e, t, a) {
            a(70299).defineLocale("ka", {
                months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function(e, t, a) {
                            return "ი" === a ? t + "ში" : t + a + "ში"
                        })
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        24990: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    0: "-ші",
                    1: "-ші",
                    2: "-ші",
                    3: "-ші",
                    4: "-ші",
                    5: "-ші",
                    6: "-шы",
                    7: "-ші",
                    8: "-ші",
                    9: "-шы",
                    10: "-шы",
                    20: "-шы",
                    30: "-шы",
                    40: "-шы",
                    50: "-ші",
                    60: "-шы",
                    70: "-ші",
                    80: "-ші",
                    90: "-шы",
                    100: "-ші"
                };
                e.defineLocale("kk", {
                    months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                    monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                    weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                    weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                    weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгін сағат] LT",
                        nextDay: "[Ертең сағат] LT",
                        nextWeek: "dddd [сағат] LT",
                        lastDay: "[Кеше сағат] LT",
                        lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ішінде",
                        past: "%s бұрын",
                        s: "бірнеше секунд",
                        ss: "%d секунд",
                        m: "бір минут",
                        mm: "%d минут",
                        h: "бір сағат",
                        hh: "%d сағат",
                        d: "бір күн",
                        dd: "%d күн",
                        M: "бір ай",
                        MM: "%d ай",
                        y: "бір жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        89384: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "១",
                        2: "២",
                        3: "៣",
                        4: "៤",
                        5: "៥",
                        6: "៦",
                        7: "៧",
                        8: "៨",
                        9: "៩",
                        0: "០"
                    },
                    a = {
                        "១": "1",
                        "២": "2",
                        "៣": "3",
                        "៤": "4",
                        "៥": "5",
                        "៦": "6",
                        "៧": "7",
                        "៨": "8",
                        "៩": "9",
                        "០": "0"
                    };
                e.defineLocale("km", {
                    months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ព្រឹក|ល្ងាច/,
                    isPM: function(e) {
                        return "ល្ងាច" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ព្រឹក" : "ល្ងាច"
                    },
                    calendar: {
                        sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                        nextDay: "[ស្អែក ម៉ោង] LT",
                        nextWeek: "dddd [ម៉ោង] LT",
                        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sទៀត",
                        past: "%sមុន",
                        s: "ប៉ុន្មានវិនាទី",
                        ss: "%d វិនាទី",
                        m: "មួយនាទី",
                        mm: "%d នាទី",
                        h: "មួយម៉ោង",
                        hh: "%d ម៉ោង",
                        d: "មួយថ្ងៃ",
                        dd: "%d ថ្ងៃ",
                        M: "មួយខែ",
                        MM: "%d ខែ",
                        y: "មួយឆ្នាំ",
                        yy: "%d ឆ្នាំ"
                    },
                    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                    ordinal: "ទី%d",
                    preparse: function(e) {
                        return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        8129: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "೧",
                        2: "೨",
                        3: "೩",
                        4: "೪",
                        5: "೫",
                        6: "೬",
                        7: "೭",
                        8: "೮",
                        9: "೯",
                        0: "೦"
                    },
                    a = {
                        "೧": "1",
                        "೨": "2",
                        "೩": "3",
                        "೪": "4",
                        "೫": "5",
                        "೬": "6",
                        "೭": "7",
                        "೮": "8",
                        "೯": "9",
                        "೦": "0"
                    };
                e.defineLocale("kn", {
                    months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                    monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                    weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                    weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[ಇಂದು] LT",
                        nextDay: "[ನಾಳೆ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ನಿನ್ನೆ] LT",
                        lastWeek: "[ಕೊನೆಯ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ನಂತರ",
                        past: "%s ಹಿಂದೆ",
                        s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                        ss: "%d ಸೆಕೆಂಡುಗಳು",
                        m: "ಒಂದು ನಿಮಿಷ",
                        mm: "%d ನಿಮಿಷ",
                        h: "ಒಂದು ಗಂಟೆ",
                        hh: "%d ಗಂಟೆ",
                        d: "ಒಂದು ದಿನ",
                        dd: "%d ದಿನ",
                        M: "ಒಂದು ತಿಂಗಳು",
                        MM: "%d ತಿಂಗಳು",
                        y: "ಒಂದು ವರ್ಷ",
                        yy: "%d ವರ್ಷ"
                    },
                    preparse: function(e) {
                        return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "ರಾತ್ರಿ" === t) ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                    ordinal: function(e) {
                        return e + "ನೇ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        17202: function(e, t, a) {
            a(70299).defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "일";
                        case "M":
                            return e + "월";
                        case "w":
                        case "W":
                            return e + "주";
                        default:
                            return e
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        },
        82192: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "١",
                        2: "٢",
                        3: "٣",
                        4: "٤",
                        5: "٥",
                        6: "٦",
                        7: "٧",
                        8: "٨",
                        9: "٩",
                        0: "٠"
                    },
                    a = {
                        "١": "1",
                        "٢": "2",
                        "٣": "3",
                        "٤": "4",
                        "٥": "5",
                        "٦": "6",
                        "٧": "7",
                        "٨": "8",
                        "٩": "9",
                        "٠": "0"
                    },
                    n = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
                e.defineLocale("ku", {
                    months: n,
                    monthsShort: n,
                    weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /ئێواره‌|به‌یانی/,
                    isPM: function(e) {
                        return /ئێواره‌/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "به‌یانی" : "ئێواره‌"
                    },
                    calendar: {
                        sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                        nextDay: "[به‌یانی كاتژمێر] LT",
                        nextWeek: "dddd [كاتژمێر] LT",
                        lastDay: "[دوێنێ كاتژمێر] LT",
                        lastWeek: "dddd [كاتژمێر] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "له‌ %s",
                        past: "%s",
                        s: "چه‌ند چركه‌یه‌ك",
                        ss: "چركه‌ %d",
                        m: "یه‌ك خوله‌ك",
                        mm: "%d خوله‌ك",
                        h: "یه‌ك كاتژمێر",
                        hh: "%d كاتژمێر",
                        d: "یه‌ك ڕۆژ",
                        dd: "%d ڕۆژ",
                        M: "یه‌ك مانگ",
                        MM: "%d مانگ",
                        y: "یه‌ك ساڵ",
                        yy: "%d ساڵ"
                    },
                    preparse: function(e) {
                        return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                            return a[e]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            })(a(70299))
        },
        91588: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    0: "-чү",
                    1: "-чи",
                    2: "-чи",
                    3: "-чү",
                    4: "-чү",
                    5: "-чи",
                    6: "-чы",
                    7: "-чи",
                    8: "-чи",
                    9: "-чу",
                    10: "-чу",
                    20: "-чы",
                    30: "-чу",
                    40: "-чы",
                    50: "-чү",
                    60: "-чы",
                    70: "-чи",
                    80: "-чи",
                    90: "-чу",
                    100: "-чү"
                };
                e.defineLocale("ky", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                    weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                    weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Бүгүн саат] LT",
                        nextDay: "[Эртең саат] LT",
                        nextWeek: "dddd [саат] LT",
                        lastDay: "[Кечээ саат] LT",
                        lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ичинде",
                        past: "%s мурун",
                        s: "бирнече секунд",
                        ss: "%d секунд",
                        m: "бир мүнөт",
                        mm: "%d мүнөт",
                        h: "бир саат",
                        hh: "%d саат",
                        d: "бир күн",
                        dd: "%d күн",
                        M: "бир ай",
                        MM: "%d ай",
                        y: "бир жыл",
                        yy: "%d жыл"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        43498: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return t ? r[a][0] : r[a][1]
                }

                function a(e) {
                    if (isNaN(e = parseInt(e, 10))) return !1;
                    if (e < 0) return !0;
                    if (e < 10) return !!(4 <= e) && !!(e <= 7);
                    if (e < 100) {
                        var t = e % 10,
                            n = e / 10;
                        return 0 === t ? a(n) : a(t)
                    }
                    if (!(e < 1e4)) return a(e /= 1e3);
                    for (; e >= 10;) e /= 10;
                    return a(e)
                }
                e.defineLocale("lb", {
                    months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm [Auer]",
                        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[G\xebschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: function(e) {
                            return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                        },
                        past: function(e) {
                            return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                        },
                        s: "e puer Sekonnen",
                        ss: "%d Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: "%d Deeg",
                        M: t,
                        MM: "%d M\xe9int",
                        y: t,
                        yy: "%d Joer"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        95901: function(e, t, a) {
            a(70299).defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    ss: "%d ວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            })
        },
        11836: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    ss: "sekundė_sekundžių_sekundes",
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                };

                function a(e, t, a, n) {
                    return t ? r(a)[0] : n ? r(a)[1] : r(a)[2]
                }

                function n(e) {
                    return e % 10 == 0 || e > 10 && e < 20
                }

                function r(e) {
                    return t[e].split("_")
                }

                function s(e, t, s, i) {
                    var d = e + " ";
                    return 1 === e ? d + a(e, t, s[0], i) : t ? d + (n(e) ? r(s)[1] : r(s)[0]) : i ? d + r(s)[1] : d + (n(e) ? r(s)[1] : r(s)[2])
                }
                e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: function(e, t, a, n) {
                            return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
                        },
                        ss: s,
                        m: a,
                        mm: s,
                        h: a,
                        hh: s,
                        d: a,
                        dd: s,
                        M: a,
                        MM: s,
                        y: a,
                        yy: s
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        90182: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                    m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                    h: "stundas_stundām_stunda_stundas".split("_"),
                    hh: "stundas_stundām_stunda_stundas".split("_"),
                    d: "dienas_dienām_diena_dienas".split("_"),
                    dd: "dienas_dienām_diena_dienas".split("_"),
                    M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                };

                function a(e, t, a) {
                    return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
                }

                function n(e, n, r) {
                    return e + " " + a(t[r], e, n)
                }

                function r(e, n, r) {
                    return a(t[r], e, n)
                }
                e.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "pēc %s",
                        past: "pirms %s",
                        s: function(e, t) {
                            return t ? "dažas sekundes" : "dažām sekundēm"
                        },
                        ss: n,
                        m: r,
                        mm: n,
                        h: r,
                        hh: n,
                        d: r,
                        dd: n,
                        M: r,
                        MM: n,
                        y: r,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        95226: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["sekund", "sekunda", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var r = t.words[n];
                        return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                    }
                };
                e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mjesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        66414: function(e, t, a) {
            a(70299).defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    ss: "%d hēkona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        67844: function(e, t, a) {
            a(70299).defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "една минута",
                    mm: "%d минути",
                    h: "еден час",
                    hh: "%d часа",
                    d: "еден ден",
                    dd: "%d дена",
                    M: "еден месец",
                    MM: "%d месеци",
                    y: "една година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = e % 100;
                    if (0 === e) return e + "-ев";
                    if (0 === a) return e + "-ен";
                    if (a > 10 && a < 20) return e + "-ти";
                    if (1 === t) return e + "-ви";
                    if (2 === t) return e + "-ри";
                    else if (7 === t || 8 === t) return e + "-ми";
                    else return e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        97969: function(e, t, a) {
            a(70299).defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    ss: "%d സെക്കൻഡ്",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t) ? e + 12 : e
                },
                meridiem: function(e, t, a) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        },
        43919: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    switch (a) {
                        case "s":
                            return t ? "хэдхэн секунд" : "хэдхэн секундын";
                        case "ss":
                            return e + (t ? " секунд" : " секундын");
                        case "m":
                        case "mm":
                            return e + (t ? " минут" : " минутын");
                        case "h":
                        case "hh":
                            return e + (t ? " цаг" : " цагийн");
                        case "d":
                        case "dd":
                            return e + (t ? " өдөр" : " өдрийн");
                        case "M":
                        case "MM":
                            return e + (t ? " сар" : " сарын");
                        case "y":
                        case "yy":
                            return e + (t ? " жил" : " жилийн");
                        default:
                            return e
                    }
                }
                e.defineLocale("mn", {
                    months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                    monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                    weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                    weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY оны MMMMын D",
                        LLL: "YYYY оны MMMMын D HH:mm",
                        LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                    },
                    meridiemParse: /ҮӨ|ҮХ/i,
                    isPM: function(e) {
                        return "ҮХ" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "ҮӨ" : "ҮХ"
                    },
                    calendar: {
                        sameDay: "[Өнөөдөр] LT",
                        nextDay: "[Маргааш] LT",
                        nextWeek: "[Ирэх] dddd LT",
                        lastDay: "[Өчигдөр] LT",
                        lastWeek: "[Өнгөрсөн] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s дараа",
                        past: "%s өмнө",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " өдөр";
                            default:
                                return e
                        }
                    }
                })
            })(a(70299))
        },
        10099: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    a = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };

                function n(e, t, a, n) {
                    var r = "";
                    if (t) switch (a) {
                        case "s":
                            r = "काही सेकंद";
                            break;
                        case "ss":
                            r = "%d सेकंद";
                            break;
                        case "m":
                            r = "एक मिनिट";
                            break;
                        case "mm":
                            r = "%d मिनिटे";
                            break;
                        case "h":
                            r = "एक तास";
                            break;
                        case "hh":
                            r = "%d तास";
                            break;
                        case "d":
                            r = "एक दिवस";
                            break;
                        case "dd":
                            r = "%d दिवस";
                            break;
                        case "M":
                            r = "एक महिना";
                            break;
                        case "MM":
                            r = "%d महिने";
                            break;
                        case "y":
                            r = "एक वर्ष";
                            break;
                        case "yy":
                            r = "%d वर्षे"
                    } else switch (a) {
                        case "s":
                            r = "काही सेकंदां";
                            break;
                        case "ss":
                            r = "%d सेकंदां";
                            break;
                        case "m":
                            r = "एका मिनिटा";
                            break;
                        case "mm":
                            r = "%d मिनिटां";
                            break;
                        case "h":
                            r = "एका तासा";
                            break;
                        case "hh":
                            r = "%d तासां";
                            break;
                        case "d":
                            r = "एका दिवसा";
                            break;
                        case "dd":
                            r = "%d दिवसां";
                            break;
                        case "M":
                            r = "एका महिन्या";
                            break;
                        case "MM":
                            r = "%d महिन्यां";
                            break;
                        case "y":
                            r = "एका वर्षा";
                            break;
                        case "yy":
                            r = "%d वर्षां"
                    }
                    return r.replace(/%d/i, e)
                }
                e.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm वाजता",
                        LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमध्ये",
                        past: "%sपूर्वी",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t) ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        97487: function(e, t, a) {
            a(70299).defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "pagi" === t) ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        21228: function(e, t, a) {
            a(70299).defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "pagi" === t) ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        2841: function(e, t, a) {
            a(70299).defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[Għada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraħ fil-]LT",
                    lastWeek: "dddd [li għadda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "f’ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegħa",
                    hh: "%d siegħat",
                    d: "ġurnata",
                    dd: "%d ġranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        93406: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "၁",
                        2: "၂",
                        3: "၃",
                        4: "၄",
                        5: "၅",
                        6: "၆",
                        7: "၇",
                        8: "၈",
                        9: "၉",
                        0: "၀"
                    },
                    a = {
                        "၁": "1",
                        "၂": "2",
                        "၃": "3",
                        "၄": "4",
                        "၅": "5",
                        "၆": "6",
                        "၇": "7",
                        "၈": "8",
                        "၉": "9",
                        "၀": "0"
                    };
                e.defineLocale("my", {
                    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                    weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[ယနေ.] LT [မှာ]",
                        nextDay: "[မနက်ဖြန်] LT [မှာ]",
                        nextWeek: "dddd LT [မှာ]",
                        lastDay: "[မနေ.က] LT [မှာ]",
                        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "လာမည့် %s မှာ",
                        past: "လွန်ခဲ့သော %s က",
                        s: "စက္ကန်.အနည်းငယ်",
                        ss: "%d စက္ကန့်",
                        m: "တစ်မိနစ်",
                        mm: "%d မိနစ်",
                        h: "တစ်နာရီ",
                        hh: "%d နာရီ",
                        d: "တစ်ရက်",
                        dd: "%d ရက်",
                        M: "တစ်လ",
                        MM: "%d လ",
                        y: "တစ်နှစ်",
                        yy: "%d နှစ်"
                    },
                    preparse: function(e) {
                        return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        35688: function(e, t, a) {
            a(70299).defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i g\xe5r kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    w: "en uke",
                    ww: "%d uker",
                    M: "en m\xe5ned",
                    MM: "%d m\xe5neder",
                    y: "ett \xe5r",
                    yy: "%d \xe5r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        50077: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "१",
                        2: "२",
                        3: "३",
                        4: "४",
                        5: "५",
                        6: "६",
                        7: "७",
                        8: "८",
                        9: "९",
                        0: "०"
                    },
                    a = {
                        "१": "1",
                        "२": "2",
                        "३": "3",
                        "४": "4",
                        "५": "5",
                        "६": "6",
                        "७": "7",
                        "८": "8",
                        "९": "9",
                        "०": "0"
                    };
                e.defineLocale("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        LTS: "Aको h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, Aको h:mm बजे",
                        LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                    },
                    preparse: function(e) {
                        return e.replace(/[१२३४५६७८९०]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "राति" === t) ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोलि] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडि",
                        s: "केही क्षण",
                        ss: "%d सेकेण्ड",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        51154: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "\xe9\xe9n minuut",
                        mm: "%d minuten",
                        h: "\xe9\xe9n uur",
                        hh: "%d uur",
                        d: "\xe9\xe9n dag",
                        dd: "%d dagen",
                        M: "\xe9\xe9n maand",
                        MM: "%d maanden",
                        y: "\xe9\xe9n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        63382: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: r,
                    monthsShortRegex: r,
                    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "\xe9\xe9n minuut",
                        mm: "%d minuten",
                        h: "\xe9\xe9n uur",
                        hh: "%d uur",
                        d: "\xe9\xe9n dag",
                        dd: "%d dagen",
                        w: "\xe9\xe9n week",
                        ww: "%d weken",
                        M: "\xe9\xe9n maand",
                        MM: "%d maanden",
                        y: "\xe9\xe9n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        51628: function(e, t, a) {
            a(70299).defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "su._m\xe5._ty._on._to._fr._lau.".split("_"),
                weekdaysMin: "su_m\xe5_ty_on_to_fr_la".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I g\xe5r klokka] LT",
                    lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    w: "ei veke",
                    ww: "%d veker",
                    M: "ein m\xe5nad",
                    MM: "%d m\xe5nader",
                    y: "eit \xe5r",
                    yy: "%d \xe5r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        13864: function(e, t, a) {
            a(70299).defineLocale("oc-lnc", {
                months: {
                    standalone: "geni\xe8r_febri\xe8r_mar\xe7_abril_mai_junh_julhet_agost_setembre_oct\xf2bre_novembre_decembre".split("_"),
                    format: "de geni\xe8r_de febri\xe8r_de mar\xe7_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'oct\xf2bre_de novembre_de decembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._mar\xe7_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimenge_diluns_dimars_dim\xe8cres_dij\xf2us_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: "[u\xe8i a] LT",
                    nextDay: "[deman a] LT",
                    nextWeek: "dddd [a] LT",
                    lastDay: "[i\xe8r a] LT",
                    lastWeek: "dddd [passat a] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aqu\xed %s",
                    past: "fa %s",
                    s: "unas segondas",
                    ss: "%d segondas",
                    m: "una minuta",
                    mm: "%d minutas",
                    h: "una ora",
                    hh: "%d oras",
                    d: "un jorn",
                    dd: "%d jorns",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
                    return ("w" === t || "W" === t) && (a = "a"), e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        6199: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "੧",
                        2: "੨",
                        3: "੩",
                        4: "੪",
                        5: "੫",
                        6: "੬",
                        7: "੭",
                        8: "੮",
                        9: "੯",
                        0: "੦"
                    },
                    a = {
                        "੧": "1",
                        "੨": "2",
                        "੩": "3",
                        "੪": "4",
                        "੫": "5",
                        "੬": "6",
                        "੭": "7",
                        "੮": "8",
                        "੯": "9",
                        "੦": "0"
                    };
                e.defineLocale("pa-in", {
                    months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                    weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                    weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm ਵਜੇ",
                        LTS: "A h:mm:ss ਵਜੇ",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                        LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                    },
                    calendar: {
                        sameDay: "[ਅਜ] LT",
                        nextDay: "[ਕਲ] LT",
                        nextWeek: "[ਅਗਲਾ] dddd, LT",
                        lastDay: "[ਕਲ] LT",
                        lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ਵਿੱਚ",
                        past: "%s ਪਿਛਲੇ",
                        s: "ਕੁਝ ਸਕਿੰਟ",
                        ss: "%d ਸਕਿੰਟ",
                        m: "ਇਕ ਮਿੰਟ",
                        mm: "%d ਮਿੰਟ",
                        h: "ਇੱਕ ਘੰਟਾ",
                        hh: "%d ਘੰਟੇ",
                        d: "ਇੱਕ ਦਿਨ",
                        dd: "%d ਦਿਨ",
                        M: "ਇੱਕ ਮਹੀਨਾ",
                        MM: "%d ਮਹੀਨੇ",
                        y: "ਇੱਕ ਸਾਲ",
                        yy: "%d ਸਾਲ"
                    },
                    preparse: function(e) {
                        return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "ਰਾਤ" === t) ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        4568: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                    a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
                    n = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];

                function r(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
                }

                function s(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return n + (r(e) ? "sekundy" : "sekund");
                        case "m":
                            return t ? "minuta" : "minutę";
                        case "mm":
                            return n + (r(e) ? "minuty" : "minut");
                        case "h":
                            return t ? "godzina" : "godzinę";
                        case "hh":
                            return n + (r(e) ? "godziny" : "godzin");
                        case "ww":
                            return n + (r(e) ? "tygodnie" : "tygodni");
                        case "MM":
                            return n + (r(e) ? "miesiące" : "miesięcy");
                        case "yy":
                            return n + (r(e) ? "lata" : "lat")
                    }
                }
                e.defineLocale("pl", {
                    months: function(e, n) {
                        return e ? /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W niedzielę o] LT";
                                case 2:
                                    return "[We wtorek o] LT";
                                case 3:
                                    return "[W środę o] LT";
                                case 6:
                                    return "[W sobotę o] LT";
                                default:
                                    return "[W] dddd [o] LT"
                            }
                        },
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszłą niedzielę o] LT";
                                case 3:
                                    return "[W zeszłą środę o] LT";
                                case 6:
                                    return "[W zeszłą sobotę o] LT";
                                default:
                                    return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        ss: s,
                        m: s,
                        mm: s,
                        h: s,
                        hh: s,
                        d: "1 dzień",
                        dd: "%d dni",
                        w: "tydzień",
                        ww: s,
                        M: "miesiąc",
                        MM: s,
                        y: "rok",
                        yy: s
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        54769: function(e, t, a) {
            a(70299).defineLocale("pt-br", {
                months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
                weekdaysMin: "do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_s\xe1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje \xe0s] LT",
                    nextDay: "[Amanh\xe3 \xe0s] LT",
                    nextWeek: "dddd [\xe0s] LT",
                    lastDay: "[Ontem \xe0s] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "h\xe1 %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um m\xeas",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                invalidDate: "Data inv\xe1lida"
            })
        },
        89472: function(e, t, a) {
            a(70299).defineLocale("pt", {
                months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
                weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje \xe0s] LT",
                    nextDay: "[Amanh\xe3 \xe0s] LT",
                    nextWeek: "dddd [\xe0s] LT",
                    lastDay: "[Ontem \xe0s] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "h\xe1 %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    w: "uma semana",
                    ww: "%d semanas",
                    M: "um m\xeas",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%d\xba",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        3239: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = " ";
                    return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + ({
                        ss: "secunde",
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        ww: "săptăm\xe2ni",
                        MM: "luni",
                        yy: "ani"
                    })[a]
                }
                e.defineLocale("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "duminică_luni_marți_miercuri_joi_vineri_s\xe2mbătă".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[m\xe2ine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s \xeen urmă",
                        s: "c\xe2teva secunde",
                        ss: t,
                        m: "un minut",
                        mm: t,
                        h: "o oră",
                        hh: t,
                        d: "o zi",
                        dd: t,
                        w: "o săptăm\xe2nă",
                        ww: t,
                        M: "o lună",
                        MM: t,
                        y: "un an",
                        yy: t
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        65377: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, r, s;
                    return "m" === a ? t ? "минута" : "минуту" : e + " " + (n = ({
                        ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                        mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                        hh: "час_часа_часов",
                        dd: "день_дня_дней",
                        ww: "неделя_недели_недель",
                        MM: "месяц_месяца_месяцев",
                        yy: "год_года_лет"
                    })[a], r = +e, s = n.split("_"), r % 10 == 1 && r % 100 != 11 ? s[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? s[1] : s[2])
                }
                var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
                e.defineLocale("ru", {
                    months: {
                        format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                        standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                    },
                    monthsShort: {
                        format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                        standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                    },
                    weekdays: {
                        standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
                    },
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., H:mm",
                        LLLL: "dddd, D MMMM YYYY г., H:mm"
                    },
                    calendar: {
                        sameDay: "[Сегодня, в] LT",
                        nextDay: "[Завтра, в] LT",
                        lastDay: "[Вчера, в] LT",
                        nextWeek: function(e) {
                            if (e.week() !== this.week()) switch (this.day()) {
                                    case 0:
                                        return "[В следующее] dddd, [в] LT";
                                    case 1:
                                    case 2:
                                    case 4:
                                        return "[В следующий] dddd, [в] LT";
                                    case 3:
                                    case 5:
                                    case 6:
                                        return "[В следующую] dddd, [в] LT"
                                } else if (2 === this.day()) return "[Во] dddd, [в] LT";
                                else return "[В] dddd, [в] LT"
                        },
                        lastWeek: function(e) {
                            if (e.week() !== this.week()) switch (this.day()) {
                                    case 0:
                                        return "[В прошлое] dddd, [в] LT";
                                    case 1:
                                    case 2:
                                    case 4:
                                        return "[В прошлый] dddd, [в] LT";
                                    case 3:
                                    case 5:
                                    case 6:
                                        return "[В прошлую] dddd, [в] LT"
                                } else if (2 === this.day()) return "[Во] dddd, [в] LT";
                                else return "[В] dddd, [в] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        ss: t,
                        m: t,
                        mm: t,
                        h: "час",
                        hh: t,
                        d: "день",
                        dd: t,
                        w: "неделя",
                        ww: t,
                        M: "месяц",
                        MM: t,
                        y: "год",
                        yy: t
                    },
                    meridiemParse: /ночи|утра|дня|вечера/i,
                    isPM: function(e) {
                        return /^(дня|вечера)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            case "w":
                            case "W":
                                return e + "-я";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        51295: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
                    a = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
                e.defineLocale("sd", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: a,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd، D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /صبح|شام/,
                    isPM: function(e) {
                        return "شام" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "صبح" : "شام"
                    },
                    calendar: {
                        sameDay: "[اڄ] LT",
                        nextDay: "[سڀاڻي] LT",
                        nextWeek: "dddd [اڳين هفتي تي] LT",
                        lastDay: "[ڪالهه] LT",
                        lastWeek: "[گزريل هفتي] dddd [تي] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s پوء",
                        past: "%s اڳ",
                        s: "چند سيڪنڊ",
                        ss: "%d سيڪنڊ",
                        m: "هڪ منٽ",
                        mm: "%d منٽ",
                        h: "هڪ ڪلاڪ",
                        hh: "%d ڪلاڪ",
                        d: "هڪ ڏينهن",
                        dd: "%d ڏينهن",
                        M: "هڪ مهينو",
                        MM: "%d مهينا",
                        y: "هڪ سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        42856: function(e, t, a) {
            a(70299).defineLocale("se", {
                months: "ođđajagem\xe1nnu_guovvam\xe1nnu_njukčam\xe1nnu_cuoŋom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_čakčam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_sk\xe1b_juov".split("_"),
                weekdays: "sotnabeaivi_vuoss\xe1rga_maŋŋeb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_l\xe1v".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta m\xe1nnu",
                    MM: "%d m\xe1nut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        97932: function(e, t, a) {
            a(70299).defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    ss: "තත්පර %d",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, a) {
                    return e > 11 ? a ? "ප.ව." : "පස් වරු" : a ? "පෙ.ව." : "පෙර වරු"
                }
            })
        },
        86902: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e) {
                    return e > 1 && e < 5
                }

                function a(e, a, n, r) {
                    var s = e + " ";
                    switch (n) {
                        case "s":
                            return a || r ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                        case "ss":
                            if (a || r) return s + (t(e) ? "sekundy" : "sek\xfand");
                            return s + "sekundami";
                        case "m":
                            return a ? "min\xfata" : r ? "min\xfatu" : "min\xfatou";
                        case "mm":
                            if (a || r) return s + (t(e) ? "min\xfaty" : "min\xfat");
                            return s + "min\xfatami";
                        case "h":
                            return a ? "hodina" : r ? "hodinu" : "hodinou";
                        case "hh":
                            if (a || r) return s + (t(e) ? "hodiny" : "hod\xedn");
                            return s + "hodinami";
                        case "d":
                            return a || r ? "deň" : "dňom";
                        case "dd":
                            if (a || r) return s + (t(e) ? "dni" : "dn\xed");
                            return s + "dňami";
                        case "M":
                            return a || r ? "mesiac" : "mesiacom";
                        case "MM":
                            if (a || r) return s + (t(e) ? "mesiace" : "mesiacov");
                            return s + "mesiacmi";
                        case "y":
                            return a || r ? "rok" : "rokom";
                        case "yy":
                            if (a || r) return s + (t(e) ? "roky" : "rokov");
                            return s + "rokmi"
                    }
                }
                e.defineLocale("sk", {
                    months: "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo štvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minul\xfa nedeľu o] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [o] LT";
                                case 3:
                                    return "[minul\xfa stredu o] LT";
                                case 6:
                                    return "[minul\xfa sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        45431: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = e + " ";
                    switch (a) {
                        case "s":
                            return t || n ? "nekaj sekund" : "nekaj sekundami";
                        case "ss":
                            return 1 === e ? r += t ? "sekundo" : "sekundi" : 2 === e ? r += t || n ? "sekundi" : "sekundah" : e < 5 ? r += t || n ? "sekunde" : "sekundah" : r += "sekund", r;
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return 1 === e ? r += t ? "minuta" : "minuto" : 2 === e ? r += t || n ? "minuti" : "minutama" : e < 5 ? r += t || n ? "minute" : "minutami" : r += t || n ? "minut" : "minutami", r;
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return 1 === e ? r += t ? "ura" : "uro" : 2 === e ? r += t || n ? "uri" : "urama" : e < 5 ? r += t || n ? "ure" : "urami" : r += t || n ? "ur" : "urami", r;
                        case "d":
                            return t || n ? "en dan" : "enim dnem";
                        case "dd":
                            return 1 === e ? r += t || n ? "dan" : "dnem" : 2 === e ? r += t || n ? "dni" : "dnevoma" : r += t || n ? "dni" : "dnevi", r;
                        case "M":
                            return t || n ? "en mesec" : "enim mesecem";
                        case "MM":
                            return 1 === e ? r += t || n ? "mesec" : "mesecem" : 2 === e ? r += t || n ? "meseca" : "mesecema" : e < 5 ? r += t || n ? "mesece" : "meseci" : r += t || n ? "mesecev" : "meseci", r;
                        case "y":
                            return t || n ? "eno leto" : "enim letom";
                        case "yy":
                            return 1 === e ? r += t || n ? "leto" : "letom" : 2 === e ? r += t || n ? "leti" : "letoma" : e < 5 ? r += t || n ? "leta" : "leti" : r += t || n ? "let" : "leti", r
                    }
                }
                e.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[včeraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prejšnjo] [nedeljo] [ob] LT";
                                case 3:
                                    return "[prejšnjo] [sredo] [ob] LT";
                                case 6:
                                    return "[prejšnjo] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prejšnji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "čez %s",
                        past: "pred %s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        45060: function(e, t, a) {
            a(70299).defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
                weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
                weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot n\xeb] LT",
                    nextDay: "[Nes\xebr n\xeb] LT",
                    nextWeek: "dddd [n\xeb] LT",
                    lastDay: "[Dje n\xeb] LT",
                    lastWeek: "dddd [e kaluar n\xeb] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "n\xeb %s",
                    past: "%s m\xeb par\xeb",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "nj\xeb minut\xeb",
                    mm: "%d minuta",
                    h: "nj\xeb or\xeb",
                    hh: "%d or\xeb",
                    d: "nj\xeb dit\xeb",
                    dd: "%d dit\xeb",
                    M: "nj\xeb muaj",
                    MM: "%d muaj",
                    y: "nj\xeb vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        86900: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["секунда", "секунде", "секунди"],
                        m: ["један минут", "једне минуте"],
                        mm: ["минут", "минуте", "минута"],
                        h: ["један сат", "једног сата"],
                        hh: ["сат", "сата", "сати"],
                        dd: ["дан", "дана", "дана"],
                        MM: ["месец", "месеца", "месеци"],
                        yy: ["година", "године", "година"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var r = t.words[n];
                        return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                    }
                };
                e.defineLocale("sr-cyrl", {
                    months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                    monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                    weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                    weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D. M. YYYY.",
                        LL: "D. MMMM YYYY.",
                        LLL: "D. MMMM YYYY. H:mm",
                        LLLL: "dddd, D. MMMM YYYY. H:mm"
                    },
                    calendar: {
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[у] [недељу] [у] LT";
                                case 3:
                                    return "[у] [среду] [у] LT";
                                case 6:
                                    return "[у] [суботу] [у] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[у] dddd [у] LT"
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function() {
                            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пре %s",
                        s: "неколико секунди",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "дан",
                        dd: t.translate,
                        M: "месец",
                        MM: t.translate,
                        y: "годину",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        69645: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["sekunda", "sekunde", "sekundi"],
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var r = t.words[n];
                        return 1 === n.length ? a ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                    }
                };
                e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D. M. YYYY.",
                        LL: "D. MMMM YYYY.",
                        LLL: "D. MMMM YYYY. H:mm",
                        LLLL: "dddd, D. MMMM YYYY. H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        59470: function(e, t, a) {
            a(70299).defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, a) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "ekuseni" === t) ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        7518: function(e, t, a) {
            a(70299).defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
                weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
                weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Ig\xe5r] LT",
                    nextWeek: "[P\xe5] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "f\xf6r %s sedan",
                    s: "n\xe5gra sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en m\xe5nad",
                    MM: "%d m\xe5nader",
                    y: "ett \xe5r",
                    yy: "%d \xe5r"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        17250: function(e, t, a) {
            a(70299).defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "hh:mm A",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "siku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        38463: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                        1: "௧",
                        2: "௨",
                        3: "௩",
                        4: "௪",
                        5: "௫",
                        6: "௬",
                        7: "௭",
                        8: "௮",
                        9: "௯",
                        0: "௦"
                    },
                    a = {
                        "௧": "1",
                        "௨": "2",
                        "௩": "3",
                        "௪": "4",
                        "௫": "5",
                        "௬": "6",
                        "௭": "7",
                        "௮": "8",
                        "௯": "9",
                        "௦": "0"
                    };
                e.defineLocale("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, HH:mm",
                        LLLL: "dddd, D MMMM YYYY, HH:mm"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        ss: "%d விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}வது/,
                    ordinal: function(e) {
                        return e + "வது"
                    },
                    preparse: function(e) {
                        return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                    meridiem: function(e, t, a) {
                        if (e < 2) return " யாமம்";
                        if (e < 6) return " வைகறை";
                        if (e < 10) return " காலை";
                        if (e < 14) return " நண்பகல்";
                        if (e < 18) return " எற்பாடு";
                        else if (e < 22) return " மாலை";
                        else return " யாமம்"
                    },
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "யாமம்" === t) ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t ? e >= 10 ? e : e + 12 : e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            })(a(70299))
        },
        62171: function(e, t, a) {
            a(70299).defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    ss: "%d సెకన్లు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "రాత్రి" === t) ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        },
        47887: function(e, t, a) {
            a(70299).defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "segundu balun",
                    ss: "segundu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        26077: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    0: "-ум",
                    1: "-ум",
                    2: "-юм",
                    3: "-юм",
                    4: "-ум",
                    5: "-ум",
                    6: "-ум",
                    7: "-ум",
                    8: "-ум",
                    9: "-ум",
                    10: "-ум",
                    12: "-ум",
                    13: "-ум",
                    20: "-ум",
                    30: "-юм",
                    40: "-ум",
                    50: "-ум",
                    60: "-ум",
                    70: "-ум",
                    80: "-ум",
                    90: "-ум",
                    100: "-ум"
                };
                e.defineLocale("tg", {
                    months: {
                        format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                        standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                    },
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                    weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                    weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Имрӯз соати] LT",
                        nextDay: "[Фардо соати] LT",
                        lastDay: "[Дирӯз соати] LT",
                        nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                        lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "баъди %s",
                        past: "%s пеш",
                        s: "якчанд сония",
                        m: "як дақиқа",
                        mm: "%d дақиқа",
                        h: "як соат",
                        hh: "%d соат",
                        d: "як рӯз",
                        dd: "%d рӯз",
                        M: "як моҳ",
                        MM: "%d моҳ",
                        y: "як сол",
                        yy: "%d сол"
                    },
                    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                    meridiemHour: function(e, t) {
                        return (12 === e && (e = 0), "шаб" === t) ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        42880: function(e, t, a) {
            a(70299).defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    w: "1 สัปดาห์",
                    ww: "%d สัปดาห์",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        },
        60281: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    1: "'inji",
                    5: "'inji",
                    8: "'inji",
                    70: "'inji",
                    80: "'inji",
                    2: "'nji",
                    7: "'nji",
                    20: "'nji",
                    50: "'nji",
                    3: "'\xfcnji",
                    4: "'\xfcnji",
                    100: "'\xfcnji",
                    6: "'njy",
                    9: "'unjy",
                    10: "'unjy",
                    30: "'unjy",
                    60: "'ynjy",
                    90: "'ynjy"
                };
                e.defineLocale("tk", {
                    months: "\xddanwar_Fewral_Mart_Aprel_Ma\xfd_I\xfdun_I\xfdul_Awgust_Sent\xfdabr_Okt\xfdabr_No\xfdabr_Dekabr".split("_"),
                    monthsShort: "\xddan_Few_Mar_Apr_Ma\xfd_I\xfdn_I\xfdl_Awg_Sen_Okt_No\xfd_Dek".split("_"),
                    weekdays: "\xddekşenbe_Duşenbe_Sişenbe_\xc7arşenbe_Penşenbe_Anna_Şenbe".split("_"),
                    weekdaysShort: "\xddek_Duş_Siş_\xc7ar_Pen_Ann_Şen".split("_"),
                    weekdaysMin: "\xddk_Dş_Sş_\xc7r_Pn_An_Şn".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn sagat] LT",
                        nextDay: "[ertir sagat] LT",
                        nextWeek: "[indiki] dddd [sagat] LT",
                        lastDay: "[d\xfc\xfdn] LT",
                        lastWeek: "[ge\xe7en] dddd [sagat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s soň",
                        past: "%s \xf6ň",
                        s: "birn\xe4\xe7e sekunt",
                        m: "bir minut",
                        mm: "%d minut",
                        h: "bir sagat",
                        hh: "%d sagat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir a\xfd",
                        MM: "%d a\xfd",
                        y: "bir \xfdyl",
                        yy: "%d \xfdyl"
                    },
                    ordinal: function(e, a) {
                        switch (a) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'unjy";
                                var n = e % 10;
                                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        82713: function(e, t, a) {
            a(70299).defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        89246: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function a(e, a, n, r) {
                    var s, i, d, o, _, u = (i = Math.floor((s = e) % 1e3 / 100), d = Math.floor(s % 100 / 10), o = s % 10, _ = "", i > 0 && (_ += t[i] + "vatlh"), d > 0 && (_ += ("" !== _ ? " " : "") + t[d] + "maH"), o > 0 && (_ += ("" !== _ ? " " : "") + t[o]), "" === _ ? "pagh" : _);
                    switch (n) {
                        case "ss":
                            return u + " lup";
                        case "mm":
                            return u + " tup";
                        case "hh":
                            return u + " rep";
                        case "dd":
                            return u + " jaj";
                        case "MM":
                            return u + " jar";
                        case "yy":
                            return u + " DIS"
                    }
                }
                e.defineLocale("tlh", {
                    months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                    monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                    monthsParseExact: !0,
                    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DaHjaj] LT",
                        nextDay: "[wa’leS] LT",
                        nextWeek: "LLL",
                        lastDay: "[wa’Hu’] LT",
                        lastWeek: "LLL",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            var t = e;
                            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                        },
                        past: function(e) {
                            var t = e;
                            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                        },
                        s: "puS lup",
                        ss: a,
                        m: "wa’ tup",
                        mm: a,
                        h: "wa’ rep",
                        hh: a,
                        d: "wa’ jaj",
                        dd: a,
                        M: "wa’ jar",
                        MM: a,
                        y: "wa’ DIS",
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        4418: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'\xfcnc\xfc",
                    4: "'\xfcnc\xfc",
                    100: "'\xfcnc\xfc",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                e.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eyl\xfcl_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_\xc7arşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
                    meridiem: function(e, t, a) {
                        return e < 12 ? a ? "\xf6\xf6" : "\xd6\xd6" : a ? "\xf6s" : "\xd6S"
                    },
                    meridiemParse: /öö|ÖÖ|ös|ÖS/,
                    isPM: function(e) {
                        return "\xf6s" === e || "\xd6S" === e
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[gelecek] dddd [saat] LT",
                        lastDay: "[d\xfcn] LT",
                        lastWeek: "[ge\xe7en] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \xf6nce",
                        s: "birka\xe7 saniye",
                        ss: "%d saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        w: "bir hafta",
                        ww: "%d hafta",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinal: function(e, a) {
                        switch (a) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'ıncı";
                                var n = e % 10;
                                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        85396: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var r = {
                        s: ["viensas secunds", "'iensas secunds"],
                        ss: [e + " secunds", "" + e + " secunds"],
                        m: ["'n m\xedut", "'iens m\xedut"],
                        mm: [e + " m\xeduts", "" + e + " m\xeduts"],
                        h: ["'n \xfeora", "'iensa \xfeora"],
                        hh: [e + " \xfeoras", "" + e + " \xfeoras"],
                        d: ["'n ziua", "'iensa ziua"],
                        dd: [e + " ziuas", "" + e + " ziuas"],
                        M: ["'n mes", "'iens mes"],
                        MM: [e + " mesen", "" + e + " mesen"],
                        y: ["'n ar", "'iens ar"],
                        yy: [e + " ars", "" + e + " ars"]
                    };
                    return n || t ? r[a][0] : r[a][1]
                }
                e.defineLocale("tzl", {
                    months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
                    monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                    weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
                    weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
                    weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM [dallas] YYYY",
                        LLL: "D. MMMM [dallas] YYYY HH.mm",
                        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                    },
                    meridiemParse: /d\'o|d\'a/i,
                    isPM: function(e) {
                        return "d'o" === e.toLowerCase()
                    },
                    meridiem: function(e, t, a) {
                        return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
                    },
                    calendar: {
                        sameDay: "[oxhi \xe0] LT",
                        nextDay: "[dem\xe0 \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[ieiri \xe0] LT",
                        lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "osprei %s",
                        past: "ja%s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        17037: function(e, t, a) {
            a(70299).defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        },
        58747: function(e, t, a) {
            a(70299).defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    ss: "%d ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        },
        26660: function(e, t, a) {
            a(70299).defineLocale("ug-cn", {
                months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                    LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                    LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                },
                meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t) ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    if (n < 600) return "يېرىم كېچە";
                    if (n < 900) return "سەھەر";
                    if (n < 1130) return "چۈشتىن بۇرۇن";
                    if (n < 1230) return "چۈش";
                    if (n < 1800) return "چۈشتىن كېيىن";
                    else return "كەچ"
                },
                calendar: {
                    sameDay: "[بۈگۈن سائەت] LT",
                    nextDay: "[ئەتە سائەت] LT",
                    nextWeek: "[كېلەركى] dddd [سائەت] LT",
                    lastDay: "[تۆنۈگۈن] LT",
                    lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s كېيىن",
                    past: "%s بۇرۇن",
                    s: "نەچچە سېكونت",
                    ss: "%d سېكونت",
                    m: "بىر مىنۇت",
                    mm: "%d مىنۇت",
                    h: "بىر سائەت",
                    hh: "%d سائەت",
                    d: "بىر كۈن",
                    dd: "%d كۈن",
                    M: "بىر ئاي",
                    MM: "%d ئاي",
                    y: "بىر يىل",
                    yy: "%d يىل"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "-كۈنى";
                        case "w":
                        case "W":
                            return e + "-ھەپتە";
                        default:
                            return e
                    }
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        90524: function(e, t, a) {
            (function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, r, s;
                    return "m" === a ? t ? "хвилина" : "хвилину" : "h" === a ? t ? "година" : "годину" : e + " " + (n = ({
                        ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                        mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                        hh: t ? "година_години_годин" : "годину_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    })[a], r = +e, s = n.split("_"), r % 10 == 1 && r % 100 != 11 ? s[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? s[1] : s[2])
                }

                function a(e) {
                    return function() {
                        return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                    }
                }
                e.defineLocale("uk", {
                    months: {
                        format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                        standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                    },
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: function(e, t) {
                        var a = {
                            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                        };
                        return !0 === e ? a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1)) : e ? a[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
                    },
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., HH:mm",
                        LLLL: "dddd, D MMMM YYYY р., HH:mm"
                    },
                    calendar: {
                        sameDay: a("[Сьогодні "),
                        nextDay: a("[Завтра "),
                        lastDay: a("[Вчора "),
                        nextWeek: a("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return a("[Минулої] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return a("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        ss: t,
                        m: t,
                        mm: t,
                        h: "годину",
                        hh: t,
                        d: "день",
                        dd: t,
                        M: "місяць",
                        MM: t,
                        y: "рік",
                        yy: t
                    },
                    meridiemParse: /ночі|ранку|дня|вечора/,
                    isPM: function(e) {
                        return /^(дня|вечора)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-й";
                            case "D":
                                return e + "-го";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            })(a(70299))
        },
        94331: function(e, t, a) {
            (function(e) {
                "use strict";
                var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
                    a = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
                e.defineLocale("ur", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: a,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd، D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /صبح|شام/,
                    isPM: function(e) {
                        return "شام" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "صبح" : "شام"
                    },
                    calendar: {
                        sameDay: "[آج بوقت] LT",
                        nextDay: "[کل بوقت] LT",
                        nextWeek: "dddd [بوقت] LT",
                        lastDay: "[گذشتہ روز بوقت] LT",
                        lastWeek: "[گذشتہ] dddd [بوقت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s بعد",
                        past: "%s قبل",
                        s: "چند سیکنڈ",
                        ss: "%d سیکنڈ",
                        m: "ایک منٹ",
                        mm: "%d منٹ",
                        h: "ایک گھنٹہ",
                        hh: "%d گھنٹے",
                        d: "ایک دن",
                        dd: "%d دن",
                        M: "ایک ماہ",
                        MM: "%d ماہ",
                        y: "ایک سال",
                        yy: "%d سال"
                    },
                    preparse: function(e) {
                        return e.replace(/،/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "،")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            })(a(70299))
        },
        3237: function(e, t, a) {
            a(70299).defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        25875: function(e, t, a) {
            a(70299).defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    ss: "%d фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        },
        99953: function(e, t, a) {
            a(70299).defineLocale("vi", {
                months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
                monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ s\xe1u_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, a) {
                    return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[H\xf4m nay l\xfac] LT",
                    nextDay: "[Ng\xe0y mai l\xfac] LT",
                    nextWeek: "dddd [tuần tới l\xfac] LT",
                    lastDay: "[H\xf4m qua l\xfac] LT",
                    lastWeek: "dddd [tuần trước l\xfac] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "v\xe0i gi\xe2y",
                    ss: "%d gi\xe2y",
                    m: "một ph\xfat",
                    mm: "%d ph\xfat",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ng\xe0y",
                    dd: "%d ng\xe0y",
                    w: "một tuần",
                    ww: "%d tuần",
                    M: "một th\xe1ng",
                    MM: "%d th\xe1ng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        27777: function(e, t, a) {
            a(70299).defineLocale("x-pseudo", {
                months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),
                monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),
                monthsParseExact: !0,
                weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),
                weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),
                weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
                    nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
                    nextWeek: "dddd [\xe1t] LT",
                    lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
                    lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "\xed~\xf1 %s",
                    past: "%s \xe1~g\xf3",
                    s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
                    ss: "%d s~\xe9c\xf3\xf1~ds",
                    m: "\xe1 ~m\xed\xf1~\xfat\xe9",
                    mm: "%d m~\xed\xf1\xfa~t\xe9s",
                    h: "\xe1~\xf1 h\xf3~\xfar",
                    hh: "%d h~\xf3\xfars",
                    d: "\xe1 ~d\xe1\xfd",
                    dd: "%d d~\xe1\xfds",
                    M: "\xe1 ~m\xf3\xf1~th",
                    MM: "%d m~\xf3\xf1t~hs",
                    y: "\xe1 ~\xfd\xe9\xe1r",
                    yy: "%d \xfd~\xe9\xe1rs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        a = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + a
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        59588: function(e, t, a) {
            a(70299).defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    ss: "aayá %d",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        51390: function(e, t, a) {
            a(70299).defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t) ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    if (n < 600) return "凌晨";
                    if (n < 900) return "早上";
                    if (n < 1130) return "上午";
                    if (n < 1230) return "中午";
                    if (n < 1800) return "下午";
                    else return "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: function(e) {
                        return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                    },
                    lastDay: "[昨天]LT",
                    lastWeek: function(e) {
                        return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s后",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    w: "1 周",
                    ww: "%d 周",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        },
        82722: function(e, t, a) {
            a(70299).defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t) ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    if (n < 600) return "凌晨";
                    if (n < 900) return "早上";
                    if (n < 1200) return "上午";
                    if (1200 === n) return "中午";
                    if (n < 1800) return "下午";
                    else return "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        },
        93495: function(e, t, a) {
            a(70299).defineLocale("zh-mo", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "D/M/YYYY",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t) ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    if (n < 600) return "凌晨";
                    if (n < 900) return "早上";
                    if (n < 1130) return "上午";
                    if (n < 1230) return "中午";
                    if (n < 1800) return "下午";
                    else return "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        },
        91402: function(e, t, a) {
            a(70299).defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return (12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t) ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, a) {
                    var n = 100 * e + t;
                    if (n < 600) return "凌晨";
                    if (n < 900) return "早上";
                    if (n < 1130) return "上午";
                    if (n < 1230) return "中午";
                    if (n < 1800) return "下午";
                    else return "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        },
        70299: function(e, t, a) {
            e = a.nmd(e), e.exports = function() {
                "use strict";

                function t() {
                    return Z.apply(null, arguments)
                }

                function n(e) {
                    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                }

                function r(e) {
                    return null != e && "[object Object]" === Object.prototype.toString.call(e)
                }

                function s(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function i(e) {
                    var t;
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    for (t in e)
                        if (s(e, t)) return !1;
                    return !0
                }

                function d(e) {
                    return void 0 === e
                }

                function o(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function _(e) {
                    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                }

                function u(e, t) {
                    var a, n = [];
                    for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                    return n
                }

                function m(e, t) {
                    for (var a in t) s(t, a) && (e[a] = t[a]);
                    return s(t, "toString") && (e.toString = t.toString), s(t, "valueOf") && (e.valueOf = t.valueOf), e
                }

                function l(e, t, a, n) {
                    return tr(e, t, a, n, !0).utc()
                }

                function c(e) {
                    return null == e._pf && (e._pf = {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidEra: null,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        era: null,
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }), e._pf
                }

                function h(e) {
                    if (null == e._isValid) {
                        var t = c(e),
                            a = K.call(t.parsedDateParts, function(e) {
                                return null != e
                            }),
                            n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                        if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                        e._isValid = n
                    }
                    return e._isValid
                }

                function M(e) {
                    var t = l(NaN);
                    return null != e ? m(c(t), e) : c(t).userInvalidated = !0, t
                }
                K = Array.prototype.some ? Array.prototype.some : function(e) {
                    var t, a = Object(this),
                        n = a.length >>> 0;
                    for (t = 0; t < n; t++)
                        if (t in a && e.call(this, a[t], t, a)) return !0;
                    return !1
                };
                var f, y, L = t.momentProperties = [],
                    Y = !1;

                function p(e, t) {
                    var a, n, r;
                    if (d(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), d(t._i) || (e._i = t._i), d(t._f) || (e._f = t._f), d(t._l) || (e._l = t._l), d(t._strict) || (e._strict = t._strict), d(t._tzm) || (e._tzm = t._tzm), d(t._isUTC) || (e._isUTC = t._isUTC), d(t._offset) || (e._offset = t._offset), d(t._pf) || (e._pf = c(t)), d(t._locale) || (e._locale = t._locale), L.length > 0)
                        for (a = 0; a < L.length; a++) d(r = t[n = L[a]]) || (e[n] = r);
                    return e
                }

                function k(e) {
                    p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Y && (Y = !0, t.updateOffset(this), Y = !1)
                }

                function D(e) {
                    return e instanceof k || null != e && null != e._isAMomentObject
                }

                function g(e) {
                    !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                }

                function w(e, a) {
                    var n = !0;
                    return m(function() {
                        if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                            var r, i, d, o = [];
                            for (i = 0; i < arguments.length; i++) {
                                if (r = "", "object" == typeof arguments[i]) {
                                    for (d in r += "\n[" + i + "] ", arguments[0]) s(arguments[0], d) && (r += d + ": " + arguments[0][d] + ", ");
                                    r = r.slice(0, -2)
                                } else r = arguments[i];
                                o.push(r)
                            }
                            g(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + Error().stack), n = !1
                        }
                        return a.apply(this, arguments)
                    }, a)
                }
                var T = {};

                function v(e, a) {
                    null != t.deprecationHandler && t.deprecationHandler(e, a), T[e] || (g(a), T[e] = !0)
                }

                function b(e) {
                    return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                }

                function S(e, t) {
                    var a, n = m({}, e);
                    for (a in t) s(t, a) && (r(e[a]) && r(t[a]) ? (n[a] = {}, m(n[a], e[a]), m(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                    for (a in e) s(e, a) && !s(t, a) && r(e[a]) && (n[a] = m({}, n[a]));
                    return n
                }

                function H(e) {
                    null != e && this.set(e)
                }

                function j(e, t, a) {
                    var n = "" + Math.abs(e);
                    return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - n.length)).toString().substr(1) + n
                }
                t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, $ = Object.keys ? Object.keys : function(e) {
                    var t, a = [];
                    for (t in e) s(e, t) && a.push(t);
                    return a
                };
                var x = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    P = {},
                    W = {};

                function A(e, t, a, n) {
                    var r = n;
                    "string" == typeof n && (r = function() {
                        return this[n]()
                    }), e && (W[e] = r), t && (W[t[0]] = function() {
                        return j(r.apply(this, arguments), t[1], t[2])
                    }), a && (W[a] = function() {
                        return this.localeData().ordinal(r.apply(this, arguments), e)
                    })
                }

                function E(e, t) {
                    return e.isValid() ? (P[t = F(t, e.localeData())] = P[t] || function(e) {
                        var t, a, n, r = e.match(x);
                        for (a = 0, n = r.length; a < n; a++) W[r[a]] ? r[a] = W[r[a]] : r[a] = (t = r[a]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
                        return function(t) {
                            var a, s = "";
                            for (a = 0; a < n; a++) s += b(r[a]) ? r[a].call(t, e) : r[a];
                            return s
                        }
                    }(t), P[t](e)) : e.localeData().invalidDate()
                }

                function F(e, t) {
                    var a = 5;

                    function n(e) {
                        return t.longDateFormat(e) || e
                    }
                    for (O.lastIndex = 0; a >= 0 && O.test(e);) e = e.replace(O, n), O.lastIndex = 0, a -= 1;
                    return e
                }
                var C = {};

                function z(e, t) {
                    var a = e.toLowerCase();
                    C[a] = C[a + "s"] = C[t] = e
                }

                function N(e) {
                    return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0
                }

                function R(e) {
                    var t, a, n = {};
                    for (a in e) s(e, a) && (t = N(a)) && (n[t] = e[a]);
                    return n
                }
                var J = {};

                function I(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                }

                function U(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                }

                function B(e) {
                    var t = +e,
                        a = 0;
                    return 0 !== t && isFinite(t) && (a = U(t)), a
                }

                function G(e, a) {
                    return function(n) {
                        return null != n ? (q(this, e, n), t.updateOffset(this, a), this) : V(this, e)
                    }
                }

                function V(e, t) {
                    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                }

                function q(e, t, a) {
                    e.isValid() && !isNaN(a) && ("FullYear" === t && I(e.year()) && 1 === e.month() && 29 === e.date() ? (a = B(a), e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), ep(a, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
                }
                var Z, K, $, Q, X = /\d/,
                    ee = /\d\d/,
                    et = /\d{3}/,
                    ea = /\d{4}/,
                    en = /[+-]?\d{6}/,
                    er = /\d\d?/,
                    es = /\d\d\d\d?/,
                    ei = /\d\d\d\d\d\d?/,
                    ed = /\d{1,3}/,
                    eo = /\d{1,4}/,
                    e_ = /[+-]?\d{1,6}/,
                    eu = /\d+/,
                    em = /[+-]?\d+/,
                    el = /Z|[+-]\d\d:?\d\d/gi,
                    ec = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    eh = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

                function eM(e, t, a) {
                    Q[e] = b(t) ? t : function(e, n) {
                        return e && a ? a : t
                    }
                }

                function ef(e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                Q = {};
                var ey = {};

                function eL(e, t) {
                    var a, n = t;
                    for ("string" == typeof e && (e = [e]), o(t) && (n = function(e, a) {
                            a[t] = B(e)
                        }), a = 0; a < e.length; a++) ey[e[a]] = n
                }

                function eY(e, t) {
                    eL(e, function(e, a, n, r) {
                        n._w = n._w || {}, t(e, n._w, n, r)
                    })
                }

                function ep(e, t) {
                    if (isNaN(e) || isNaN(t)) return NaN;
                    var a = (t % 12 + 12) % 12;
                    return e += (t - a) / 12, 1 === a ? I(e) ? 29 : 28 : 31 - a % 7 % 2
                }
                eJ = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                    var t;
                    for (t = 0; t < this.length; ++t)
                        if (this[t] === e) return t;
                    return -1
                }, A("M", ["MM", 2], "Mo", function() {
                    return this.month() + 1
                }), A("MMM", 0, 0, function(e) {
                    return this.localeData().monthsShort(this, e)
                }), A("MMMM", 0, 0, function(e) {
                    return this.localeData().months(this, e)
                }), z("month", "M"), J.month = 8, eM("M", er), eM("MM", er, ee), eM("MMM", function(e, t) {
                    return t.monthsShortRegex(e)
                }), eM("MMMM", function(e, t) {
                    return t.monthsRegex(e)
                }), eL(["M", "MM"], function(e, t) {
                    t[1] = B(e) - 1
                }), eL(["MMM", "MMMM"], function(e, t, a, n) {
                    var r = a._locale.monthsParse(e, n, a._strict);
                    null != r ? t[1] = r : c(a).invalidMonth = e
                });
                var ek = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    eD = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;

                function eg(e, t, a) {
                    var n, r, s, i = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (n = 0, this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []; n < 12; ++n) s = l([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase();
                    if (a)
                        if ("MMM" === t) return -1 !== (r = eJ.call(this._shortMonthsParse, i)) ? r : null;
                        else return -1 !== (r = eJ.call(this._longMonthsParse, i)) ? r : null;
                    return "MMM" === t ? -1 !== (r = eJ.call(this._shortMonthsParse, i)) || -1 !== (r = eJ.call(this._longMonthsParse, i)) ? r : null : -1 !== (r = eJ.call(this._longMonthsParse, i)) || -1 !== (r = eJ.call(this._shortMonthsParse, i)) ? r : null
                }

                function ew(e, t) {
                    var a;
                    if (!e.isValid()) return e;
                    if ("string" == typeof t) {
                        if (/^\d+$/.test(t)) t = B(t);
                        else if (!o(t = e.localeData().monthsParse(t))) return e
                    }
                    return a = Math.min(e.date(), ep(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                }

                function eT(e) {
                    return null != e ? (ew(this, e), t.updateOffset(this, !0), this) : V(this, "Month")
                }

                function ev() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n = [],
                        r = [],
                        s = [];
                    for (t = 0; t < 12; t++) a = l([2e3, t]), n.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
                    for (n.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) n[t] = ef(n[t]), r[t] = ef(r[t]);
                    for (t = 0; t < 24; t++) s[t] = ef(s[t]);
                    this._monthsRegex = RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = RegExp("^(" + n.join("|") + ")", "i")
                }

                function eb(e) {
                    return I(e) ? 366 : 365
                }
                A("Y", 0, 0, function() {
                    var e = this.year();
                    return e <= 9999 ? j(e, 4) : "+" + e
                }), A(0, ["YY", 2], 0, function() {
                    return this.year() % 100
                }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), J.year = 1, eM("Y", em), eM("YY", er, ee), eM("YYYY", eo, ea), eM("YYYYY", e_, en), eM("YYYYYY", e_, en), eL(["YYYYY", "YYYYYY"], 0), eL("YYYY", function(e, a) {
                    a[0] = 2 === e.length ? t.parseTwoDigitYear(e) : B(e)
                }), eL("YY", function(e, a) {
                    a[0] = t.parseTwoDigitYear(e)
                }), eL("Y", function(e, t) {
                    t[0] = parseInt(e, 10)
                }), t.parseTwoDigitYear = function(e) {
                    return B(e) + (B(e) > 68 ? 1900 : 2e3)
                };
                var eS = G("FullYear", !0);

                function eH(e, t, a, n, r, s, i) {
                    var d;
                    return e < 100 && e >= 0 ? isFinite((d = new Date(e + 400, t, a, n, r, s, i)).getFullYear()) && d.setFullYear(e) : d = new Date(e, t, a, n, r, s, i), d
                }

                function ej(e) {
                    var t, a;
                    return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, isFinite((t = new Date(Date.UTC.apply(null, a))).getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
                }

                function ex(e, t, a) {
                    var n = 7 + t - a;
                    return -((7 + ej(e, 0, n).getUTCDay() - t) % 7) + n - 1
                }

                function eO(e, t, a, n, r) {
                    var s, i, d = 1 + 7 * (t - 1) + (7 + a - n) % 7 + ex(e, n, r);
                    return d <= 0 ? i = eb(s = e - 1) + d : d > eb(e) ? (s = e + 1, i = d - eb(e)) : (s = e, i = d), {
                        year: s,
                        dayOfYear: i
                    }
                }

                function eP(e, t, a) {
                    var n, r, s = ex(e.year(), t, a),
                        i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                    return i < 1 ? n = i + eW(r = e.year() - 1, t, a) : i > eW(e.year(), t, a) ? (n = i - eW(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = i), {
                        week: n,
                        year: r
                    }
                }

                function eW(e, t, a) {
                    var n = ex(e, t, a),
                        r = ex(e + 1, t, a);
                    return (eb(e) - n + r) / 7
                }

                function eA(e, t) {
                    return e.slice(t, 7).concat(e.slice(0, t))
                }
                A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), J.week = 5, J.isoWeek = 5, eM("w", er), eM("ww", er, ee), eM("W", er), eM("WW", er, ee), eY(["w", "ww", "W", "WW"], function(e, t, a, n) {
                    t[n.substr(0, 1)] = B(e)
                }), A("d", 0, "do", "day"), A("dd", 0, 0, function(e) {
                    return this.localeData().weekdaysMin(this, e)
                }), A("ddd", 0, 0, function(e) {
                    return this.localeData().weekdaysShort(this, e)
                }), A("dddd", 0, 0, function(e) {
                    return this.localeData().weekdays(this, e)
                }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), J.day = 11, J.weekday = 11, J.isoWeekday = 11, eM("d", er), eM("e", er), eM("E", er), eM("dd", function(e, t) {
                    return t.weekdaysMinRegex(e)
                }), eM("ddd", function(e, t) {
                    return t.weekdaysShortRegex(e)
                }), eM("dddd", function(e, t) {
                    return t.weekdaysRegex(e)
                }), eY(["dd", "ddd", "dddd"], function(e, t, a, n) {
                    var r = a._locale.weekdaysParse(e, n, a._strict);
                    null != r ? t.d = r : c(a).invalidWeekday = e
                }), eY(["d", "e", "E"], function(e, t, a, n) {
                    t[n] = B(e)
                });
                var eE = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");

                function eF(e, t, a) {
                    var n, r, s, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (n = 0, this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = []; n < 7; ++n) s = l([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase();
                    if (a)
                        if ("dddd" === t) return -1 !== (r = eJ.call(this._weekdaysParse, i)) ? r : null;
                        else if ("ddd" === t) return -1 !== (r = eJ.call(this._shortWeekdaysParse, i)) ? r : null;
                    else return -1 !== (r = eJ.call(this._minWeekdaysParse, i)) ? r : null;
                    return "dddd" === t ? -1 !== (r = eJ.call(this._weekdaysParse, i)) || -1 !== (r = eJ.call(this._shortWeekdaysParse, i)) || -1 !== (r = eJ.call(this._minWeekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = eJ.call(this._shortWeekdaysParse, i)) || -1 !== (r = eJ.call(this._weekdaysParse, i)) || -1 !== (r = eJ.call(this._minWeekdaysParse, i)) ? r : null : -1 !== (r = eJ.call(this._minWeekdaysParse, i)) || -1 !== (r = eJ.call(this._weekdaysParse, i)) || -1 !== (r = eJ.call(this._shortWeekdaysParse, i)) ? r : null
                }

                function eC() {
                    function e(e, t) {
                        return t.length - e.length
                    }
                    var t, a, n, r, s, i = [],
                        d = [],
                        o = [],
                        _ = [];
                    for (t = 0; t < 7; t++) a = l([2e3, 1]).day(t), n = ef(this.weekdaysMin(a, "")), r = ef(this.weekdaysShort(a, "")), s = ef(this.weekdays(a, "")), i.push(n), d.push(r), o.push(s), _.push(n), _.push(r), _.push(s);
                    i.sort(e), d.sort(e), o.sort(e), _.sort(e), this._weekdaysRegex = RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysMinStrictRegex = RegExp("^(" + i.join("|") + ")", "i")
                }

                function ez() {
                    return this.hours() % 12 || 12
                }

                function eN(e, t) {
                    A(e, 0, 0, function() {
                        return this.localeData().meridiem(this.hours(), this.minutes(), t)
                    })
                }

                function eR(e, t) {
                    return t._meridiemParse
                }
                A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, ez), A("k", ["kk", 2], 0, function() {
                    return this.hours() || 24
                }), A("hmm", 0, 0, function() {
                    return "" + ez.apply(this) + j(this.minutes(), 2)
                }), A("hmmss", 0, 0, function() {
                    return "" + ez.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
                }), A("Hmm", 0, 0, function() {
                    return "" + this.hours() + j(this.minutes(), 2)
                }), A("Hmmss", 0, 0, function() {
                    return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
                }), eN("a", !0), eN("A", !1), z("hour", "h"), J.hour = 13, eM("a", eR), eM("A", eR), eM("H", er), eM("h", er), eM("k", er), eM("HH", er, ee), eM("hh", er, ee), eM("kk", er, ee), eM("hmm", es), eM("hmmss", ei), eM("Hmm", es), eM("Hmmss", ei), eL(["H", "HH"], 3), eL(["k", "kk"], function(e, t, a) {
                    var n = B(e);
                    t[3] = 24 === n ? 0 : n
                }), eL(["a", "A"], function(e, t, a) {
                    a._isPm = a._locale.isPM(e), a._meridiem = e
                }), eL(["h", "hh"], function(e, t, a) {
                    t[3] = B(e), c(a).bigHour = !0
                }), eL("hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[3] = B(e.substr(0, n)), t[4] = B(e.substr(n)), c(a).bigHour = !0
                }), eL("hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[3] = B(e.substr(0, n)), t[4] = B(e.substr(n, 2)), t[5] = B(e.substr(r)), c(a).bigHour = !0
                }), eL("Hmm", function(e, t, a) {
                    var n = e.length - 2;
                    t[3] = B(e.substr(0, n)), t[4] = B(e.substr(n))
                }), eL("Hmmss", function(e, t, a) {
                    var n = e.length - 4,
                        r = e.length - 2;
                    t[3] = B(e.substr(0, n)), t[4] = B(e.substr(n, 2)), t[5] = B(e.substr(r))
                });
                var eJ, eI, eU = G("Hours", !0),
                    eB = {
                        calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        longDateFormat: {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: /\d{1,2}/,
                        relativeTime: {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            ss: "%d seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            w: "a week",
                            ww: "%d weeks",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        monthsShort: ek,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        weekdaysShort: eE,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    eG = {},
                    eV = {};

                function eq(e) {
                    return e ? e.toLowerCase().replace("_", "-") : e
                }

                function eZ(t) {
                    var n = null;
                    if (void 0 === eG[t] && e && e.exports) try {
                        n = eI._abbr, a(43653)("./" + t), eK(n)
                    } catch (e) {
                        eG[t] = null
                    }
                    return eG[t]
                }

                function eK(e, t) {
                    var a;
                    return e && ((a = d(t) ? eQ(e) : e$(e, t)) ? eI = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), eI._abbr
                }

                function e$(e, t) {
                    if (null === t) return delete eG[e], null;
                    var a, n = eB;
                    if (t.abbr = e, null != eG[e]) v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = eG[e]._config;
                    else if (null != t.parentLocale)
                        if (null != eG[t.parentLocale]) n = eG[t.parentLocale]._config;
                        else {
                            if (null == (a = eZ(t.parentLocale))) return eV[t.parentLocale] || (eV[t.parentLocale] = []), eV[t.parentLocale].push({
                                name: e,
                                config: t
                            }), null;
                            n = a._config
                        } return eG[e] = new H(S(n, t)), eV[e] && eV[e].forEach(function(e) {
                        e$(e.name, e.config)
                    }), eK(e), eG[e]
                }

                function eQ(e) {
                    var t;
                    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return eI;
                    if (!n(e)) {
                        if (t = eZ(e)) return t;
                        e = [e]
                    }
                    return function(e) {
                        for (var t, a, n, r, s = 0; s < e.length;) {
                            for (t = (r = eq(e[s]).split("-")).length, a = (a = eq(e[s + 1])) ? a.split("-") : null; t > 0;) {
                                if (n = eZ(r.slice(0, t).join("-"))) return n;
                                if (a && a.length >= t && function(e, t) {
                                        var a, n = Math.min(e.length, t.length);
                                        for (a = 0; a < n; a += 1)
                                            if (e[a] !== t[a]) return a;
                                        return n
                                    }(r, a) >= t - 1) break;
                                t--
                            }
                            s++
                        }
                        return eI
                    }(e)
                }

                function eX(e) {
                    var t, a = e._a;
                    return a && -2 === c(e).overflow && (t = a[1] < 0 || a[1] > 11 ? 1 : a[2] < 1 || a[2] > ep(a[0], a[1]) ? 2 : a[3] < 0 || a[3] > 24 || 24 === a[3] && (0 !== a[4] || 0 !== a[5] || 0 !== a[6]) ? 3 : a[4] < 0 || a[4] > 59 ? 4 : a[5] < 0 || a[5] > 59 ? 5 : a[6] < 0 || a[6] > 999 ? 6 : -1, c(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), c(e)._overflowWeeks && -1 === t && (t = 7), c(e)._overflowWeekday && -1 === t && (t = 8), c(e).overflow = t), e
                }
                var e1 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    e0 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    e2 = /Z|[+-]\d\d(?::?\d\d)?/,
                    e4 = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/],
                        ["YYYYMM", /\d{6}/, !1],
                        ["YYYY", /\d{4}/, !1]
                    ],
                    e6 = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    e3 = /^\/?Date\((-?\d+)/i,
                    e7 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    e5 = {
                        UT: 0,
                        GMT: 0,
                        EDT: -240,
                        EST: -300,
                        CDT: -300,
                        CST: -360,
                        MDT: -360,
                        MST: -420,
                        PDT: -420,
                        PST: -480
                    };

                function e9(e) {
                    var t, a, n, r, s, i, d = e._i,
                        o = e1.exec(d) || e0.exec(d);
                    if (o) {
                        for (t = 0, c(e).iso = !0, a = e4.length; t < a; t++)
                            if (e4[t][1].exec(o[1])) {
                                r = e4[t][0], n = !1 !== e4[t][2];
                                break
                            } if (null == r) {
                            e._isValid = !1;
                            return
                        }
                        if (o[3]) {
                            for (t = 0, a = e6.length; t < a; t++)
                                if (e6[t][1].exec(o[3])) {
                                    s = (o[2] || " ") + e6[t][0];
                                    break
                                } if (null == s) {
                                e._isValid = !1;
                                return
                            }
                        }
                        if (!n && null != s) {
                            e._isValid = !1;
                            return
                        }
                        if (o[4])
                            if (e2.exec(o[4])) i = "Z";
                            else {
                                e._isValid = !1;
                                return
                            } e._f = r + (s || "") + (i || ""), ta(e)
                    } else e._isValid = !1
                }

                function e8(e) {
                    var t, a, n, r, s, i, d, o, _, u, m, l = e7.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                    if (l) {
                        if (s = l[4], i = l[3], d = l[2], o = l[5], _ = l[6], u = l[7], m = [(t = parseInt(s, 10)) <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t, ek.indexOf(i), parseInt(d, 10), parseInt(o, 10), parseInt(_, 10)], u && m.push(parseInt(u, 10)), a = l[1], n = m, r = e, a && eE.indexOf(a) !== new Date(n[0], n[1], n[2]).getDay() && (c(r).weekdayMismatch = !0, r._isValid = !1, 1)) return;
                        e._a = m, e._tzm = function(e, t, a) {
                            if (e) return e5[e];
                            if (t) return 0;
                            var n = parseInt(a, 10),
                                r = n % 100;
                            return (n - r) / 100 * 60 + r
                        }(l[8], l[9], l[10]), e._d = ej.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0
                    } else e._isValid = !1
                }

                function te(e, t, a) {
                    return null != e ? e : null != t ? t : a
                }

                function tt(e) {
                    var a, n, r, s, i, d, o, _, u, m, l, h, M, f, y, L, Y = [];
                    if (!e._d) {
                        for (l = new Date(t.now()), f = e._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[2] && null == e._a[1] && (null != (n = (a = e)._w).GG || null != n.W || null != n.E ? (d = 1, o = 4, r = te(n.GG, a._a[0], eP(ts(), 1, 4).year), s = te(n.W, 1), ((i = te(n.E, 1)) < 1 || i > 7) && (u = !0)) : (d = a._locale._week.dow, o = a._locale._week.doy, m = eP(ts(), d, o), r = te(n.gg, a._a[0], m.year), s = te(n.w, m.week), null != n.d ? ((i = n.d) < 0 || i > 6) && (u = !0) : null != n.e ? (i = n.e + d, (n.e < 0 || n.e > 6) && (u = !0)) : i = d), s < 1 || s > eW(r, d, o) ? c(a)._overflowWeeks = !0 : null != u ? c(a)._overflowWeekday = !0 : (_ = eO(r, s, i, d, o), a._a[0] = _.year, a._dayOfYear = _.dayOfYear)), null != e._dayOfYear && (L = te(e._a[0], f[0]), (e._dayOfYear > eb(L) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), M = ej(L, 0, e._dayOfYear), e._a[1] = M.getUTCMonth(), e._a[2] = M.getUTCDate()), h = 0; h < 3 && null == e._a[h]; ++h) e._a[h] = Y[h] = f[h];
                        for (; h < 7; h++) e._a[h] = Y[h] = null == e._a[h] ? +(2 === h) : e._a[h];
                        24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? ej : eH).apply(null, Y), y = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== y && (c(e).weekdayMismatch = !0)
                    }
                }

                function ta(e) {
                    if (e._f === t.ISO_8601) return void e9(e);
                    if (e._f === t.RFC_2822) return void e8(e);
                    e._a = [], c(e).empty = !0;
                    var a, n, r, i, d, o, _, u, m, l, h = "" + e._i,
                        M = h.length,
                        f = 0;
                    for (d = 0, _ = F(e._f, e._locale).match(x) || []; d < _.length; d++)
                        if (u = _[d], (o = (h.match(!s(Q, u) ? new RegExp(ef(u.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, r) {
                                return t || a || n || r
                            }))) : Q[u](e._strict, e._locale)) || [])[0]) && ((m = h.substr(0, h.indexOf(o))).length > 0 && c(e).unusedInput.push(m), h = h.slice(h.indexOf(o) + o.length), f += o.length), W[u]) o ? c(e).empty = !1 : c(e).unusedTokens.push(u), null != o && s(ey, u) && ey[u](o, e._a, e, u);
                        else e._strict && !o && c(e).unusedTokens.push(u);
                    c(e).charsLeftOver = M - f, h.length > 0 && c(e).unusedInput.push(h), e._a[3] <= 12 && !0 === c(e).bigHour && e._a[3] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[3] = (a = e._locale, n = e._a[3], null == (r = e._meridiem) ? n : null != a.meridiemHour ? a.meridiemHour(n, r) : (null != a.isPM && ((i = a.isPM(r)) && n < 12 && (n += 12), i || 12 !== n || (n = 0)), n)), null !== (l = c(e).era) && (e._a[0] = e._locale.erasConvertYear(l, e._a[0])), tt(e), eX(e)
                }

                function tn(e) {
                    var a = e._i,
                        s = e._f;
                    return (e._locale = e._locale || eQ(e._l), null === a || void 0 === s && "" === a) ? M({
                        nullInput: !0
                    }) : ("string" == typeof a && (e._i = a = e._locale.preparse(a)), D(a)) ? new k(eX(a)) : (_(a) ? e._d = a : n(s) ? ! function(e) {
                        var t, a, n, r, s, i, d = !1;
                        if (0 === e._f.length) {
                            c(e).invalidFormat = !0, e._d = new Date(NaN);
                            return
                        }
                        for (r = 0; r < e._f.length; r++) s = 0, i = !1, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], ta(t), h(t) && (i = !0), s += c(t).charsLeftOver, s += 10 * c(t).unusedTokens.length, c(t).score = s, d ? s < n && (n = s, a = t) : (null == n || s < n || i) && (n = s, a = t, i && (d = !0));
                        m(e, a || t)
                    }(e) : s ? ta(e) : function(e) {
                        var a = e._i;
                        if (d(a)) e._d = new Date(t.now());
                        else if (_(a)) e._d = new Date(a.valueOf());
                        else if ("string" == typeof a) ! function(e) {
                            var a = e3.exec(e._i);
                            if (null !== a) {
                                e._d = new Date(+a[1]);
                                return
                            }
                            e9(e), !1 !== e._isValid || (delete e._isValid, e8(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : t.createFromInputFallback(e)))
                        }(e);
                        else if (n(a)) e._a = u(a.slice(0), function(e) {
                            return parseInt(e, 10)
                        }), tt(e);
                        else if (r(a)) {
                            if (!e._d) {
                                var s = R(e._i),
                                    i = void 0 === s.day ? s.date : s.day;
                                e._a = u([s.year, s.month, i, s.hour, s.minute, s.second, s.millisecond], function(e) {
                                    return e && parseInt(e, 10)
                                }), tt(e)
                            }
                        } else o(a) ? e._d = new Date(a) : t.createFromInputFallback(e)
                    }(e), h(e) || (e._d = null), e)
                }

                function tr(e, t, a, s, d) {
                    var o, _ = {};
                    return (!0 === t || !1 === t) && (s = t, t = void 0), (!0 === a || !1 === a) && (s = a, a = void 0), (r(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), _._isAMomentObject = !0, _._useUTC = _._isUTC = d, _._l = a, _._i = e, _._f = t, _._strict = s, (o = new k(eX(tn(_))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
                }

                function ts(e, t, a, n) {
                    return tr(e, t, a, n, !1)
                }
                t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
                var ti = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = ts.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : M()
                    }),
                    td = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = ts.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : M()
                    });

                function to(e, t) {
                    var a, r;
                    if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return ts();
                    for (r = 1, a = t[0]; r < t.length; ++r)(!t[r].isValid() || t[r][e](a)) && (a = t[r]);
                    return a
                }
                var t_ = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function tu(e) {
                    var t = R(e),
                        a = t.year || 0,
                        n = t.quarter || 0,
                        r = t.month || 0,
                        i = t.week || t.isoWeek || 0,
                        d = t.day || 0,
                        o = t.hour || 0,
                        _ = t.minute || 0,
                        u = t.second || 0,
                        m = t.millisecond || 0;
                    this._isValid = function(e) {
                        var t, a, n = !1;
                        for (t in e)
                            if (s(e, t) && !(-1 !== eJ.call(t_, t) && (null == e[t] || !isNaN(e[t])))) return !1;
                        for (a = 0; a < t_.length; ++a)
                            if (e[t_[a]]) {
                                if (n) return !1;
                                parseFloat(e[t_[a]]) !== B(e[t_[a]]) && (n = !0)
                            } return !0
                    }(t), this._milliseconds = +m + 1e3 * u + 6e4 * _ + 1e3 * o * 3600, this._days = +d + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = eQ(), this._bubble()
                }

                function tm(e) {
                    return e instanceof tu
                }

                function tl(e) {
                    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                }

                function tc(e, t) {
                    A(e, 0, 0, function() {
                        var e = this.utcOffset(),
                            a = "+";
                        return e < 0 && (e = -e, a = "-"), a + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
                    })
                }
                tc("Z", ":"), tc("ZZ", ""), eM("Z", ec), eM("ZZ", ec), eL(["Z", "ZZ"], function(e, t, a) {
                    a._useUTC = !0, a._tzm = tM(ec, e)
                });
                var th = /([\+\-]|\d\d)/gi;

                function tM(e, t) {
                    var a, n, r = (t || "").match(e);
                    return null === r ? null : 0 === (n = +(60 * (a = ((r[r.length - 1] || []) + "").match(th) || ["-", 0, 0])[1]) + B(a[2])) ? 0 : "+" === a[0] ? n : -n
                }

                function tf(e, a) {
                    var n, r;
                    return a._isUTC ? (n = a.clone(), r = (D(e) || _(e) ? e.valueOf() : ts(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), t.updateOffset(n, !1), n) : ts(e).local()
                }

                function ty(e) {
                    return -Math.round(e._d.getTimezoneOffset())
                }

                function tL() {
                    return !!this.isValid() && this._isUTC && 0 === this._offset
                }
                t.updateOffset = function() {};
                var tY = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                    tp = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function tk(e, t) {
                    var a, n, r, i, d, _, u = e,
                        m = null;
                    return tm(e) ? u = {
                        ms: e._milliseconds,
                        d: e._days,
                        M: e._months
                    } : o(e) || !isNaN(+e) ? (u = {}, t ? u[t] = +e : u.milliseconds = +e) : (m = tY.exec(e)) ? (i = "-" === m[1] ? -1 : 1, u = {
                        y: 0,
                        d: B(m[2]) * i,
                        h: B(m[3]) * i,
                        m: B(m[4]) * i,
                        s: B(m[5]) * i,
                        ms: B(tl(1e3 * m[6])) * i
                    }) : (m = tp.exec(e)) ? (i = "-" === m[1] ? -1 : 1, u = {
                        y: tD(m[2], i),
                        M: tD(m[3], i),
                        w: tD(m[4], i),
                        d: tD(m[5], i),
                        h: tD(m[6], i),
                        m: tD(m[7], i),
                        s: tD(m[8], i)
                    }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (a = ts(u.from), n = ts(u.to), _ = a.isValid() && n.isValid() ? (n = tf(n, a), a.isBefore(n) ? r = tg(a, n) : ((r = tg(n, a)).milliseconds = -r.milliseconds, r.months = -r.months), r) : {
                        milliseconds: 0,
                        months: 0
                    }, (u = {}).ms = _.milliseconds, u.M = _.months), d = new tu(u), tm(e) && s(e, "_locale") && (d._locale = e._locale), tm(e) && s(e, "_isValid") && (d._isValid = e._isValid), d
                }

                function tD(e, t) {
                    var a = e && parseFloat(e.replace(",", "."));
                    return (isNaN(a) ? 0 : a) * t
                }

                function tg(e, t) {
                    var a = {};
                    return a.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = t - e.clone().add(a.months, "M"), a
                }

                function tw(e, t) {
                    return function(a, n) {
                        var r;
                        return null === n || isNaN(+n) || (v(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = a, a = n, n = r), tT(this, tk(a, n), e), this
                    }
                }

                function tT(e, a, n, r) {
                    var s = a._milliseconds,
                        i = tl(a._days),
                        d = tl(a._months);
                    e.isValid() && (r = null == r || r, d && ew(e, V(e, "Month") + d * n), i && q(e, "Date", V(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && t.updateOffset(e, i || d))
                }
                tk.fn = tu.prototype, tk.invalid = function() {
                    return tk(NaN)
                };
                var tv = tw(1, "add"),
                    tb = tw(-1, "subtract");

                function tS(e) {
                    return "string" == typeof e || e instanceof String
                }

                function tH(e, t) {
                    if (e.date() < t.date()) return -tH(t, e);
                    var a, n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
                        r = e.clone().add(n, "months");
                    return a = t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r), -(n + a) || 0
                }

                function tj(e) {
                    var t;
                    return void 0 === e ? this._locale._abbr : (null != (t = eQ(e)) && (this._locale = t), this)
                }
                t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var tx = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                    return void 0 === e ? this.localeData() : this.locale(e)
                });

                function tO() {
                    return this._locale
                }

                function tP(e, t, a) {
                    return e < 100 && e >= 0 ? new Date(e + 400, t, a) - 126227808e5 : new Date(e, t, a).valueOf()
                }

                function tW(e, t, a) {
                    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - 126227808e5 : Date.UTC(e, t, a)
                }

                function tA(e, t) {
                    return t.erasAbbrRegex(e)
                }

                function tE() {
                    var e, t, a = [],
                        n = [],
                        r = [],
                        s = [],
                        i = this.eras();
                    for (e = 0, t = i.length; e < t; ++e) n.push(ef(i[e].name)), a.push(ef(i[e].abbr)), r.push(ef(i[e].narrow)), s.push(ef(i[e].name)), s.push(ef(i[e].abbr)), s.push(ef(i[e].narrow));
                    this._erasRegex = RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = RegExp("^(" + r.join("|") + ")", "i")
                }

                function tF(e, t) {
                    A(0, [e, e.length], 0, t)
                }

                function tC(e, t, a, n, r) {
                    var s;
                    return null == e ? eP(this, n, r).year : (t > (s = eW(e, n, r)) && (t = s), tz.call(this, e, t, a, n, r))
                }

                function tz(e, t, a, n, r) {
                    var s = eO(e, t, a, n, r),
                        i = ej(s.year, 0, s.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
                }
                A("N", 0, 0, "eraAbbr"), A("NN", 0, 0, "eraAbbr"), A("NNN", 0, 0, "eraAbbr"), A("NNNN", 0, 0, "eraName"), A("NNNNN", 0, 0, "eraNarrow"), A("y", ["y", 1], "yo", "eraYear"), A("y", ["yy", 2], 0, "eraYear"), A("y", ["yyy", 3], 0, "eraYear"), A("y", ["yyyy", 4], 0, "eraYear"), eM("N", tA), eM("NN", tA), eM("NNN", tA), eM("NNNN", function(e, t) {
                    return t.erasNameRegex(e)
                }), eM("NNNNN", function(e, t) {
                    return t.erasNarrowRegex(e)
                }), eL(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, a, n) {
                    var r = a._locale.erasParse(e, n, a._strict);
                    r ? c(a).era = r : c(a).invalidEra = e
                }), eM("y", eu), eM("yy", eu), eM("yyy", eu), eM("yyyy", eu), eM("yo", function(e, t) {
                    return t._eraYearOrdinalRegex || eu
                }), eL(["y", "yy", "yyy", "yyyy"], 0), eL(["yo"], function(e, t, a, n) {
                    var r;
                    a._locale._eraYearOrdinalRegex && (r = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[0] = a._locale.eraYearOrdinalParse(e, r) : t[0] = parseInt(e, 10)
                }), A(0, ["gg", 2], 0, function() {
                    return this.weekYear() % 100
                }), A(0, ["GG", 2], 0, function() {
                    return this.isoWeekYear() % 100
                }), tF("gggg", "weekYear"), tF("ggggg", "weekYear"), tF("GGGG", "isoWeekYear"), tF("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), J.weekYear = 1, J.isoWeekYear = 1, eM("G", em), eM("g", em), eM("GG", er, ee), eM("gg", er, ee), eM("GGGG", eo, ea), eM("gggg", eo, ea), eM("GGGGG", e_, en), eM("ggggg", e_, en), eY(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                    t[n.substr(0, 2)] = B(e)
                }), eY(["gg", "GG"], function(e, a, n, r) {
                    a[r] = t.parseTwoDigitYear(e)
                }), A("Q", 0, "Qo", "quarter"), z("quarter", "Q"), J.quarter = 7, eM("Q", X), eL("Q", function(e, t) {
                    t[1] = (B(e) - 1) * 3
                }), A("D", ["DD", 2], "Do", "date"), z("date", "D"), J.date = 9, eM("D", er), eM("DD", er, ee), eM("Do", function(e, t) {
                    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                }), eL(["D", "DD"], 2), eL("Do", function(e, t) {
                    t[2] = B(e.match(er)[0])
                });
                var tN = G("Date", !0);
                A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), J.dayOfYear = 4, eM("DDD", ed), eM("DDDD", et), eL(["DDD", "DDDD"], function(e, t, a) {
                    a._dayOfYear = B(e)
                }), A("m", ["mm", 2], 0, "minute"), z("minute", "m"), J.minute = 14, eM("m", er), eM("mm", er, ee), eL(["m", "mm"], 4);
                var tR = G("Minutes", !1);
                A("s", ["ss", 2], 0, "second"), z("second", "s"), J.second = 15, eM("s", er), eM("ss", er, ee), eL(["s", "ss"], 5);
                var tJ = G("Seconds", !1);
                for (A("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }), A(0, ["SS", 2], 0, function() {
                        return ~~(this.millisecond() / 10)
                    }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function() {
                        return 10 * this.millisecond()
                    }), A(0, ["SSSSS", 5], 0, function() {
                        return 100 * this.millisecond()
                    }), A(0, ["SSSSSS", 6], 0, function() {
                        return 1e3 * this.millisecond()
                    }), A(0, ["SSSSSSS", 7], 0, function() {
                        return 1e4 * this.millisecond()
                    }), A(0, ["SSSSSSSS", 8], 0, function() {
                        return 1e5 * this.millisecond()
                    }), A(0, ["SSSSSSSSS", 9], 0, function() {
                        return 1e6 * this.millisecond()
                    }), z("millisecond", "ms"), J.millisecond = 16, eM("S", ed, X), eM("SS", ed, ee), eM("SSS", ed, et), f = "SSSS"; f.length <= 9; f += "S") eM(f, eu);

                function tI(e, t) {
                    t[6] = B(("0." + e) * 1e3)
                }
                for (f = "S"; f.length <= 9; f += "S") eL(f, tI);
                y = G("Milliseconds", !1), A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
                var tU = k.prototype;

                function tB(e) {
                    return e
                }
                tU.add = tv, tU.calendar = function(e, a) {
                    if (1 == arguments.length)
                        if (arguments[0]) {
                            var d, u, m, l;
                            if (d = arguments[0], D(d) || _(d) || tS(d) || o(d) || (m = n(u = d), l = !1, m && (l = 0 === u.filter(function(e) {
                                    return !o(e) && tS(u)
                                }).length), m && l) || function(e) {
                                    var t, a, n = r(e) && !i(e),
                                        d = !1,
                                        o = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
                                    for (t = 0; t < o.length; t += 1) a = o[t], d = d || s(e, a);
                                    return n && d
                                }(d) || null == d) e = arguments[0], a = void 0;
                            else(function(e) {
                                var t, a, n = r(e) && !i(e),
                                    d = !1,
                                    o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                                for (t = 0; t < o.length; t += 1) a = o[t], d = d || s(e, a);
                                return n && d
                            })(arguments[0]) && (a = arguments[0], e = void 0)
                        } else e = void 0, a = void 0;
                    var c = e || ts(),
                        h = tf(c, this).startOf("day"),
                        M = t.calendarFormat(this, h) || "sameElse",
                        f = a && (b(a[M]) ? a[M].call(this, c) : a[M]);
                    return this.format(f || this.localeData().calendar(M, this, ts(c)))
                }, tU.clone = function() {
                    return new k(this)
                }, tU.diff = function(e, t, a) {
                    var n, r, s;
                    if (!this.isValid() || !(n = tf(e, this)).isValid()) return NaN;
                    switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = N(t)) {
                        case "year":
                            s = tH(this, n) / 12;
                            break;
                        case "month":
                            s = tH(this, n);
                            break;
                        case "quarter":
                            s = tH(this, n) / 3;
                            break;
                        case "second":
                            s = (this - n) / 1e3;
                            break;
                        case "minute":
                            s = (this - n) / 6e4;
                            break;
                        case "hour":
                            s = (this - n) / 36e5;
                            break;
                        case "day":
                            s = (this - n - r) / 864e5;
                            break;
                        case "week":
                            s = (this - n - r) / 6048e5;
                            break;
                        default:
                            s = this - n
                    }
                    return a ? s : U(s)
                }, tU.endOf = function(e) {
                    var a, n;
                    if (void 0 === (e = N(e)) || "millisecond" === e || !this.isValid()) return this;
                    switch (n = this._isUTC ? tW : tP, e) {
                        case "year":
                            a = n(this.year() + 1, 0, 1) - 1;
                            break;
                        case "quarter":
                            a = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case "month":
                            a = n(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case "week":
                            a = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case "isoWeek":
                            a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case "day":
                        case "date":
                            a = n(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case "hour":
                            a = this._d.valueOf(), a += 36e5 - ((a + (this._isUTC ? 0 : 6e4 * this.utcOffset())) % 36e5 + 36e5) % 36e5 - 1;
                            break;
                        case "minute":
                            a = this._d.valueOf(), a += 6e4 - (a % 6e4 + 6e4) % 6e4 - 1;
                            break;
                        case "second":
                            a = this._d.valueOf(), a += 1e3 - (a % 1e3 + 1e3) % 1e3 - 1
                    }
                    return this._d.setTime(a), t.updateOffset(this, !0), this
                }, tU.format = function(e) {
                    e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                    var a = E(this, e);
                    return this.localeData().postformat(a)
                }, tU.from = function(e, t) {
                    return this.isValid() && (D(e) && e.isValid() || ts(e).isValid()) ? tk({
                        to: this,
                        from: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, tU.fromNow = function(e) {
                    return this.from(ts(), e)
                }, tU.to = function(e, t) {
                    return this.isValid() && (D(e) && e.isValid() || ts(e).isValid()) ? tk({
                        from: this,
                        to: e
                    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                }, tU.toNow = function(e) {
                    return this.to(ts(), e)
                }, tU.get = function(e) {
                    return b(this[e = N(e)]) ? this[e]() : this
                }, tU.invalidAt = function() {
                    return c(this).overflow
                }, tU.isAfter = function(e, t) {
                    var a = D(e) ? e : ts(e);
                    return !!(this.isValid() && a.isValid()) && ("millisecond" === (t = N(t) || "millisecond") ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                }, tU.isBefore = function(e, t) {
                    var a = D(e) ? e : ts(e);
                    return !!(this.isValid() && a.isValid()) && ("millisecond" === (t = N(t) || "millisecond") ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                }, tU.isBetween = function(e, t, a, n) {
                    var r = D(e) ? e : ts(e),
                        s = D(t) ? t : ts(t);
                    return !!(this.isValid() && r.isValid() && s.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(r, a) : !this.isBefore(r, a)) && (")" === n[1] ? this.isBefore(s, a) : !this.isAfter(s, a))
                }, tU.isSame = function(e, t) {
                    var a, n = D(e) ? e : ts(e);
                    return !!(this.isValid() && n.isValid()) && ("millisecond" === (t = N(t) || "millisecond") ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                }, tU.isSameOrAfter = function(e, t) {
                    return this.isSame(e, t) || this.isAfter(e, t)
                }, tU.isSameOrBefore = function(e, t) {
                    return this.isSame(e, t) || this.isBefore(e, t)
                }, tU.isValid = function() {
                    return h(this)
                }, tU.lang = tx, tU.locale = tj, tU.localeData = tO, tU.max = td, tU.min = ti, tU.parsingFlags = function() {
                    return m({}, c(this))
                }, tU.set = function(e, t) {
                    if ("object" == typeof e) {
                        var a, n = function(e) {
                            var t, a = [];
                            for (t in e) s(e, t) && a.push({
                                unit: t,
                                priority: J[t]
                            });
                            return a.sort(function(e, t) {
                                return e.priority - t.priority
                            }), a
                        }(e = R(e));
                        for (a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
                    } else if (b(this[e = N(e)])) return this[e](t);
                    return this
                }, tU.startOf = function(e) {
                    var a, n;
                    if (void 0 === (e = N(e)) || "millisecond" === e || !this.isValid()) return this;
                    switch (n = this._isUTC ? tW : tP, e) {
                        case "year":
                            a = n(this.year(), 0, 1);
                            break;
                        case "quarter":
                            a = n(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case "month":
                            a = n(this.year(), this.month(), 1);
                            break;
                        case "week":
                            a = n(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case "isoWeek":
                            a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case "day":
                        case "date":
                            a = n(this.year(), this.month(), this.date());
                            break;
                        case "hour":
                            a = this._d.valueOf(), a -= ((a + (this._isUTC ? 0 : 6e4 * this.utcOffset())) % 36e5 + 36e5) % 36e5;
                            break;
                        case "minute":
                            a = this._d.valueOf(), a -= (a % 6e4 + 6e4) % 6e4;
                            break;
                        case "second":
                            a = this._d.valueOf(), a -= (a % 1e3 + 1e3) % 1e3
                    }
                    return this._d.setTime(a), t.updateOffset(this, !0), this
                }, tU.subtract = tb, tU.toArray = function() {
                    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                }, tU.toObject = function() {
                    return {
                        years: this.year(),
                        months: this.month(),
                        date: this.date(),
                        hours: this.hours(),
                        minutes: this.minutes(),
                        seconds: this.seconds(),
                        milliseconds: this.milliseconds()
                    }
                }, tU.toDate = function() {
                    return new Date(this.valueOf())
                }, tU.toISOString = function(e) {
                    if (!this.isValid()) return null;
                    var t = !0 !== e,
                        a = t ? this.clone().utc() : this;
                    if (0 > a.year() || a.year() > 9999) return E(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
                    if (b(Date.prototype.toISOString))
                        if (t) return this.toDate().toISOString();
                        else return new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", E(a, "Z"));
                    return E(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }, tU.inspect = function() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var e, t, a, n = "moment",
                        r = "";
                    return this.isLocal() || (n = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), e = "[" + n + '("]', t = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY", a = r + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + a)
                }, "undefined" != typeof Symbol && null != Symbol.for && (tU[Symbol.for("nodejs.util.inspect.custom")] = function() {
                    return "Moment<" + this.format() + ">"
                }), tU.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, tU.toString = function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, tU.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, tU.valueOf = function() {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, tU.creationData = function() {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, tU.eraName = function() {
                    var e, t, a, n = this.localeData().eras();
                    for (e = 0, t = n.length; e < t; ++e)
                        if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].name;
                    return ""
                }, tU.eraNarrow = function() {
                    var e, t, a, n = this.localeData().eras();
                    for (e = 0, t = n.length; e < t; ++e)
                        if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].narrow;
                    return ""
                }, tU.eraAbbr = function() {
                    var e, t, a, n = this.localeData().eras();
                    for (e = 0, t = n.length; e < t; ++e)
                        if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since) return n[e].abbr;
                    return ""
                }, tU.eraYear = function() {
                    var e, a, n, r, s = this.localeData().eras();
                    for (e = 0, a = s.length; e < a; ++e)
                        if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since) return (this.year() - t(s[e].since).year()) * n + s[e].offset;
                    return this.year()
                }, tU.year = eS, tU.isLeapYear = function() {
                    return I(this.year())
                }, tU.weekYear = function(e) {
                    return tC.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, tU.isoWeekYear = function(e) {
                    return tC.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, tU.quarter = tU.quarters = function(e) {
                    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
                }, tU.month = eT, tU.daysInMonth = function() {
                    return ep(this.year(), this.month())
                }, tU.week = tU.weeks = function(e) {
                    var t = this.localeData().week(this);
                    return null == e ? t : this.add((e - t) * 7, "d")
                }, tU.isoWeek = tU.isoWeeks = function(e) {
                    var t = eP(this, 1, 4).week;
                    return null == e ? t : this.add((e - t) * 7, "d")
                }, tU.weeksInYear = function() {
                    var e = this.localeData()._week;
                    return eW(this.year(), e.dow, e.doy)
                }, tU.weeksInWeekYear = function() {
                    var e = this.localeData()._week;
                    return eW(this.weekYear(), e.dow, e.doy)
                }, tU.isoWeeksInYear = function() {
                    return eW(this.year(), 1, 4)
                }, tU.isoWeeksInISOWeekYear = function() {
                    return eW(this.isoWeekYear(), 1, 4)
                }, tU.date = tN, tU.day = tU.days = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t, a, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null == e ? n : (t = e, a = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = a.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - n, "d"))
                }, tU.weekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == e ? t : this.add(e - t, "d")
                }, tU.isoWeekday = function(e) {
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null == e) return this.day() || 7;
                    var t, a = (t = this.localeData(), "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                    return this.day(this.day() % 7 ? a : a - 7)
                }, tU.dayOfYear = function(e) {
                    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == e ? t : this.add(e - t, "d")
                }, tU.hour = tU.hours = eU, tU.minute = tU.minutes = tR, tU.second = tU.seconds = tJ, tU.millisecond = tU.milliseconds = y, tU.utcOffset = function(e, a, n) {
                    var r, s = this._offset || 0;
                    if (!this.isValid()) return null != e ? this : NaN;
                    if (null == e) return this._isUTC ? s : ty(this);
                    if ("string" == typeof e) {
                        if (null === (e = tM(ec, e))) return this
                    } else 16 > Math.abs(e) && !n && (e *= 60);
                    return !this._isUTC && a && (r = ty(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!a || this._changeInProgress ? tT(this, tk(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
                }, tU.utc = function(e) {
                    return this.utcOffset(0, e)
                }, tU.local = function(e) {
                    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ty(this), "m")), this
                }, tU.parseZone = function() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var e = tM(el, this._i);
                        null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                    }
                    return this
                }, tU.hasAlignedHourOffset = function(e) {
                    return !!this.isValid() && (e = e ? ts(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                }, tU.isDST = function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, tU.isLocal = function() {
                    return !!this.isValid() && !this._isUTC
                }, tU.isUtcOffset = function() {
                    return !!this.isValid() && this._isUTC
                }, tU.isUtc = tL, tU.isUTC = tL, tU.zoneAbbr = function() {
                    return this._isUTC ? "UTC" : ""
                }, tU.zoneName = function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, tU.dates = w("dates accessor is deprecated. Use date instead.", tN), tU.months = w("months accessor is deprecated. Use month instead", eT), tU.years = w("years accessor is deprecated. Use year instead", eS), tU.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                }), tU.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                    if (!d(this._isDSTShifted)) return this._isDSTShifted;
                    var e, t = {};
                    return p(t, this), (t = tn(t))._a ? (e = t._isUTC ? l(t._a) : ts(t._a), this._isDSTShifted = this.isValid() && function(e, t, a) {
                        var n, r = Math.min(e.length, t.length),
                            s = Math.abs(e.length - t.length),
                            i = 0;
                        for (n = 0; n < r; n++) B(e[n]) !== B(t[n]) && i++;
                        return i + s
                    }(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
                });
                var tG = H.prototype;

                function tV(e, t, a, n) {
                    var r = eQ(),
                        s = l().set(n, t);
                    return r[a](s, e)
                }

                function tq(e, t, a) {
                    if (o(e) && (t = e, e = void 0), e = e || "", null != t) return tV(e, t, a, "month");
                    var n, r = [];
                    for (n = 0; n < 12; n++) r[n] = tV(e, n, a, "month");
                    return r
                }

                function tZ(e, t, a, n) {
                    "boolean" == typeof e || (a = t = e, e = !1), o(t) && (a = t, t = void 0), t = t || "";
                    var r, s = eQ(),
                        i = e ? s._week.dow : 0,
                        d = [];
                    if (null != a) return tV(t, (a + i) % 7, n, "day");
                    for (r = 0; r < 7; r++) d[r] = tV(t, (r + i) % 7, n, "day");
                    return d
                }
                tG.calendar = function(e, t, a) {
                    var n = this._calendar[e] || this._calendar.sameElse;
                    return b(n) ? n.call(t, a) : n
                }, tG.longDateFormat = function(e) {
                    var t = this._longDateFormat[e],
                        a = this._longDateFormat[e.toUpperCase()];
                    return t || !a ? t : (this._longDateFormat[e] = a.match(x).map(function(e) {
                        return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
                    }).join(""), this._longDateFormat[e])
                }, tG.invalidDate = function() {
                    return this._invalidDate
                }, tG.ordinal = function(e) {
                    return this._ordinal.replace("%d", e)
                }, tG.preparse = tB, tG.postformat = tB, tG.relativeTime = function(e, t, a, n) {
                    var r = this._relativeTime[a];
                    return b(r) ? r(e, t, a, n) : r.replace(/%d/i, e)
                }, tG.pastFuture = function(e, t) {
                    var a = this._relativeTime[e > 0 ? "future" : "past"];
                    return b(a) ? a(t) : a.replace(/%s/i, t)
                }, tG.set = function(e) {
                    var t, a;
                    for (a in e) s(e, a) && (b(t = e[a]) ? this[a] = t : this["_" + a] = t);
                    this._config = e, this._dayOfMonthOrdinalParseLenient = RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, tG.eras = function(e, a) {
                    var n, r, s, i = this._eras || eQ("en")._eras;
                    for (n = 0, r = i.length; n < r; ++n) switch ("string" == typeof i[n].since && (s = t(i[n].since).startOf("day"), i[n].since = s.valueOf()), typeof i[n].until) {
                        case "undefined":
                            i[n].until = Infinity;
                            break;
                        case "string":
                            s = t(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf()
                    }
                    return i
                }, tG.erasParse = function(e, t, a) {
                    var n, r, s, i, d, o = this.eras();
                    for (n = 0, e = e.toUpperCase(), r = o.length; n < r; ++n)
                        if (s = o[n].name.toUpperCase(), i = o[n].abbr.toUpperCase(), d = o[n].narrow.toUpperCase(), a) switch (t) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (i === e) return o[n];
                                break;
                            case "NNNN":
                                if (s === e) return o[n];
                                break;
                            case "NNNNN":
                                if (d === e) return o[n]
                        } else if ([s, i, d].indexOf(e) >= 0) return o[n]
                }, tG.erasConvertYear = function(e, a) {
                    var n = e.since <= e.until ? 1 : -1;
                    return void 0 === a ? t(e.since).year() : t(e.since).year() + (a - e.offset) * n
                }, tG.erasAbbrRegex = function(e) {
                    return s(this, "_erasAbbrRegex") || tE.call(this), e ? this._erasAbbrRegex : this._erasRegex
                }, tG.erasNameRegex = function(e) {
                    return s(this, "_erasNameRegex") || tE.call(this), e ? this._erasNameRegex : this._erasRegex
                }, tG.erasNarrowRegex = function(e) {
                    return s(this, "_erasNarrowRegex") || tE.call(this), e ? this._erasNarrowRegex : this._erasRegex
                }, tG.months = function(e, t) {
                    return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || eD).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
                }, tG.monthsShort = function(e, t) {
                    return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[eD.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, tG.monthsParse = function(e, t, a) {
                    var n, r, s;
                    if (this._monthsParseExact) return eg.call(this, e, t, a);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (r = l([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = RegExp(s.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                        if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                        if (!a && this._monthsParse[n].test(e)) return n
                    }
                }, tG.monthsRegex = function(e) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ev.call(this), e) ? this._monthsStrictRegex : this._monthsRegex : (s(this, "_monthsRegex") || (this._monthsRegex = eh), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                }, tG.monthsShortRegex = function(e) {
                    return this._monthsParseExact ? (s(this, "_monthsRegex") || ev.call(this), e) ? this._monthsShortStrictRegex : this._monthsShortRegex : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = eh), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, tG.week = function(e) {
                    return eP(e, this._week.dow, this._week.doy).week
                }, tG.firstDayOfYear = function() {
                    return this._week.doy
                }, tG.firstDayOfWeek = function() {
                    return this._week.dow
                }, tG.weekdays = function(e, t) {
                    var a = n(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                    return !0 === e ? eA(a, this._week.dow) : e ? a[e.day()] : a
                }, tG.weekdaysMin = function(e) {
                    return !0 === e ? eA(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                }, tG.weekdaysShort = function(e) {
                    return !0 === e ? eA(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                }, tG.weekdaysParse = function(e, t, a) {
                    var n, r, s;
                    if (this._weekdaysParseExact) return eF.call(this, e, t, a);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (r = l([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = RegExp(s.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                        if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                        if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                        else if (!a && this._weekdaysParse[n].test(e)) return n
                    }
                }, tG.weekdaysRegex = function(e) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || eC.call(this), e) ? this._weekdaysStrictRegex : this._weekdaysRegex : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = eh), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, tG.weekdaysShortRegex = function(e) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || eC.call(this), e) ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = eh), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, tG.weekdaysMinRegex = function(e) {
                    return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || eC.call(this), e) ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = eh), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, tG.isPM = function(e) {
                    return "p" === (e + "").toLowerCase().charAt(0)
                }, tG.meridiem = function(e, t, a) {
                    return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                }, eK("en", {
                    eras: [{
                        since: "0001-01-01",
                        until: Infinity,
                        offset: 1,
                        name: "Anno Domini",
                        narrow: "AD",
                        abbr: "AD"
                    }, {
                        since: "0000-12-31",
                        until: -1 / 0,
                        offset: 1,
                        name: "Before Christ",
                        narrow: "BC",
                        abbr: "BC"
                    }],
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            a = 1 === B(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return e + a
                    }
                }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", eK), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", eQ);
                var tK = Math.abs;

                function t$(e, t, a, n) {
                    var r = tk(t, a);
                    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
                }

                function tQ(e) {
                    return e < 0 ? Math.floor(e) : Math.ceil(e)
                }

                function tX(e) {
                    return 4800 * e / 146097
                }

                function t1(e) {
                    return 146097 * e / 4800
                }

                function t0(e) {
                    return function() {
                        return this.as(e)
                    }
                }
                var t2 = t0("ms"),
                    t4 = t0("s"),
                    t6 = t0("m"),
                    t3 = t0("h"),
                    t7 = t0("d"),
                    t5 = t0("w"),
                    t9 = t0("M"),
                    t8 = t0("Q"),
                    ae = t0("y");

                function at(e) {
                    return function() {
                        return this.isValid() ? this._data[e] : NaN
                    }
                }
                var aa = at("milliseconds"),
                    an = at("seconds"),
                    ar = at("minutes"),
                    as = at("hours"),
                    ai = at("days"),
                    ad = at("months"),
                    ao = at("years"),
                    a_ = Math.round,
                    au = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        w: null,
                        M: 11
                    };

                function am(e, t, a, n, r) {
                    return r.relativeTime(t || 1, !!a, e, n)
                }
                var al = Math.abs;

                function ac(e) {
                    return (e > 0) - (e < 0) || +e
                }

                function ah() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, t, a, n, r, s, i, d, o = al(this._milliseconds) / 1e3,
                        _ = al(this._days),
                        u = al(this._months),
                        m = this.asSeconds();
                    return m ? (e = U(o / 60), t = U(e / 60), o %= 60, e %= 60, a = U(u / 12), u %= 12, n = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", r = m < 0 ? "-" : "", s = ac(this._months) !== ac(m) ? "-" : "", i = ac(this._days) !== ac(m) ? "-" : "", d = ac(this._milliseconds) !== ac(m) ? "-" : "", r + "P" + (a ? s + a + "Y" : "") + (u ? s + u + "M" : "") + (_ ? i + _ + "D" : "") + (t || e || o ? "T" : "") + (t ? d + t + "H" : "") + (e ? d + e + "M" : "") + (o ? d + n + "S" : "")) : "P0D"
                }
                var aM = tu.prototype;
                return aM.isValid = function() {
                    return this._isValid
                }, aM.abs = function() {
                    var e = this._data;
                    return this._milliseconds = tK(this._milliseconds), this._days = tK(this._days), this._months = tK(this._months), e.milliseconds = tK(e.milliseconds), e.seconds = tK(e.seconds), e.minutes = tK(e.minutes), e.hours = tK(e.hours), e.months = tK(e.months), e.years = tK(e.years), this
                }, aM.add = function(e, t) {
                    return t$(this, e, t, 1)
                }, aM.subtract = function(e, t) {
                    return t$(this, e, t, -1)
                }, aM.as = function(e) {
                    if (!this.isValid()) return NaN;
                    var t, a, n = this._milliseconds;
                    if ("month" === (e = N(e)) || "quarter" === e || "year" === e) switch (t = this._days + n / 864e5, a = this._months + tX(t), e) {
                        case "month":
                            return a;
                        case "quarter":
                            return a / 3;
                        case "year":
                            return a / 12
                    } else switch (t = this._days + Math.round(t1(this._months)), e) {
                        case "week":
                            return t / 7 + n / 6048e5;
                        case "day":
                            return t + n / 864e5;
                        case "hour":
                            return 24 * t + n / 36e5;
                        case "minute":
                            return 1440 * t + n / 6e4;
                        case "second":
                            return 86400 * t + n / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + n;
                        default:
                            throw Error("Unknown unit " + e)
                    }
                }, aM.asMilliseconds = t2, aM.asSeconds = t4, aM.asMinutes = t6, aM.asHours = t3, aM.asDays = t7, aM.asWeeks = t5, aM.asMonths = t9, aM.asQuarters = t8, aM.asYears = ae, aM.valueOf = function() {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * B(this._months / 12) : NaN
                }, aM._bubble = function() {
                    var e, t, a, n, r, s = this._milliseconds,
                        i = this._days,
                        d = this._months,
                        o = this._data;
                    return s >= 0 && i >= 0 && d >= 0 || s <= 0 && i <= 0 && d <= 0 || (s += 864e5 * tQ(t1(d) + i), i = 0, d = 0), o.milliseconds = s % 1e3, o.seconds = (e = U(s / 1e3)) % 60, o.minutes = (t = U(e / 60)) % 60, o.hours = (a = U(t / 60)) % 24, i += U(a / 24), d += r = U(tX(i)), i -= tQ(t1(r)), n = U(d / 12), d %= 12, o.days = i, o.months = d, o.years = n, this
                }, aM.clone = function() {
                    return tk(this)
                }, aM.get = function(e) {
                    return e = N(e), this.isValid() ? this[e + "s"]() : NaN
                }, aM.milliseconds = aa, aM.seconds = an, aM.minutes = ar, aM.hours = as, aM.days = ai, aM.weeks = function() {
                    return U(this.days() / 7)
                }, aM.months = ad, aM.years = ao, aM.humanize = function(e, t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var a, n, r, s, i, d, o, _, u, m, l, c, h, M = !1,
                        f = au;
                    return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (M = e), "object" == typeof t && (f = Object.assign({}, au, t), null != t.s && null == t.ss && (f.ss = t.s - 1)), c = this.localeData(), a = !M, n = f, r = tk(this).abs(), s = a_(r.as("s")), i = a_(r.as("m")), d = a_(r.as("h")), o = a_(r.as("d")), _ = a_(r.as("M")), u = a_(r.as("w")), m = a_(r.as("y")), l = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || i <= 1 && ["m"] || i < n.m && ["mm", i] || d <= 1 && ["h"] || d < n.h && ["hh", d] || o <= 1 && ["d"] || o < n.d && ["dd", o], null != n.w && (l = l || u <= 1 && ["w"] || u < n.w && ["ww", u]), (l = l || _ <= 1 && ["M"] || _ < n.M && ["MM", _] || m <= 1 && ["y"] || ["yy", m])[2] = a, l[3] = +this > 0, l[4] = c, h = am.apply(null, l), M && (h = c.pastFuture(+this, h)), c.postformat(h)
                }, aM.toISOString = ah, aM.toString = ah, aM.toJSON = ah, aM.locale = tj, aM.localeData = tO, aM.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ah), aM.lang = tx, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), eM("x", em), eM("X", /[+-]?\d+(\.\d{1,3})?/), eL("X", function(e, t, a) {
                    a._d = new Date(1e3 * parseFloat(e))
                }), eL("x", function(e, t, a) {
                    a._d = new Date(B(e))
                }), t.version = "2.29.1", Z = ts, t.fn = tU, t.min = function() {
                    var e = [].slice.call(arguments, 0);
                    return to("isBefore", e)
                }, t.max = function() {
                    var e = [].slice.call(arguments, 0);
                    return to("isAfter", e)
                }, t.now = function() {
                    return Date.now ? Date.now() : +new Date
                }, t.utc = l, t.unix = function(e) {
                    return ts(1e3 * e)
                }, t.months = function(e, t) {
                    return tq(e, t, "months")
                }, t.isDate = _, t.locale = eK, t.invalid = M, t.duration = tk, t.isMoment = D, t.weekdays = function(e, t, a) {
                    return tZ(e, t, a, "weekdays")
                }, t.parseZone = function() {
                    return ts.apply(null, arguments).parseZone()
                }, t.localeData = eQ, t.isDuration = tm, t.monthsShort = function(e, t) {
                    return tq(e, t, "monthsShort")
                }, t.weekdaysMin = function(e, t, a) {
                    return tZ(e, t, a, "weekdaysMin")
                }, t.defineLocale = e$, t.updateLocale = function(e, t) {
                    if (null != t) {
                        var a, n, r = eB;
                        null != eG[e] && null != eG[e].parentLocale ? eG[e].set(S(eG[e]._config, t)) : (null != (n = eZ(e)) && (r = n._config), t = S(r, t), null == n && (t.abbr = e), (a = new H(t)).parentLocale = eG[e], eG[e] = a), eK(e)
                    } else null != eG[e] && (null != eG[e].parentLocale ? (eG[e] = eG[e].parentLocale, e === eK() && eK(e)) : null != eG[e] && delete eG[e]);
                    return eG[e]
                }, t.locales = function() {
                    return $(eG)
                }, t.weekdaysShort = function(e, t, a) {
                    return tZ(e, t, a, "weekdaysShort")
                }, t.normalizeUnits = N, t.relativeTimeRounding = function(e) {
                    return void 0 === e ? a_ : "function" == typeof e && (a_ = e, !0)
                }, t.relativeTimeThreshold = function(e, t) {
                    return void 0 !== au[e] && (void 0 === t ? au[e] : (au[e] = t, "s" === e && (au.ss = t - 1), !0))
                }, t.calendarFormat = function(e, t) {
                    var a = e.diff(t, "days", !0);
                    return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                }, t.prototype = tU, t.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "GGGG-[W]WW",
                    MONTH: "YYYY-MM"
                }, t
            }()
        },
        17042: function(e) {
            var t, a = function() {
                var e, t, a, n, r, s, i, d = function(e, t) {
                    var a = e,
                        n = o[t],
                        r = null,
                        s = 0,
                        i = null,
                        d = [],
                        u = {},
                        L = function(e, t) {
                            r = function(e) {
                                for (var t = Array(e), a = 0; a < e; a += 1) {
                                    t[a] = Array(e);
                                    for (var n = 0; n < e; n += 1) t[a][n] = null
                                }
                                return t
                            }(s = 4 * a + 17), Y(0, 0), Y(s - 7, 0), Y(0, s - 7), g(), k(), T(e, t), a >= 7 && w(e), null == i && (i = S(a, n, d)), v(i, t)
                        },
                        Y = function(e, t) {
                            for (var a = -1; a <= 7; a += 1)
                                if (!(e + a <= -1) && !(s <= e + a))
                                    for (var n = -1; n <= 7; n += 1) t + n <= -1 || s <= t + n || (0 <= a && a <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == a || 6 == a) || 2 <= a && a <= 4 && 2 <= n && n <= 4 ? r[e + a][t + n] = !0 : r[e + a][t + n] = !1)
                        },
                        p = function() {
                            for (var e = 0, t = 0, a = 0; a < 8; a += 1) {
                                L(!0, a);
                                var n = _.getLostPoint(u);
                                (0 == a || e > n) && (e = n, t = a)
                            }
                            return t
                        },
                        k = function() {
                            for (var e = 8; e < s - 8; e += 1) null == r[e][6] && (r[e][6] = e % 2 == 0);
                            for (var t = 8; t < s - 8; t += 1) null == r[6][t] && (r[6][t] = t % 2 == 0)
                        },
                        g = function() {
                            for (var e = _.getPatternPosition(a), t = 0; t < e.length; t += 1)
                                for (var n = 0; n < e.length; n += 1) {
                                    var s = e[t],
                                        i = e[n];
                                    if (null == r[s][i])
                                        for (var d = -2; d <= 2; d += 1)
                                            for (var o = -2; o <= 2; o += 1) - 2 == d || 2 == d || -2 == o || 2 == o || 0 == d && 0 == o ? r[s + d][i + o] = !0 : r[s + d][i + o] = !1
                                }
                        },
                        w = function(e) {
                            for (var t = _.getBCHTypeNumber(a), n = 0; n < 18; n += 1) {
                                var i = !e && (t >> n & 1) == 1;
                                r[Math.floor(n / 3)][n % 3 + s - 8 - 3] = i
                            }
                            for (var n = 0; n < 18; n += 1) {
                                var i = !e && (t >> n & 1) == 1;
                                r[n % 3 + s - 8 - 3][Math.floor(n / 3)] = i
                            }
                        },
                        T = function(e, t) {
                            for (var a = n << 3 | t, i = _.getBCHTypeInfo(a), d = 0; d < 15; d += 1) {
                                var o = !e && (i >> d & 1) == 1;
                                d < 6 ? r[d][8] = o : d < 8 ? r[d + 1][8] = o : r[s - 15 + d][8] = o
                            }
                            for (var d = 0; d < 15; d += 1) {
                                var o = !e && (i >> d & 1) == 1;
                                d < 8 ? r[8][s - d - 1] = o : d < 9 ? r[8][15 - d - 1 + 1] = o : r[8][15 - d - 1] = o
                            }
                            r[s - 8][8] = !e
                        },
                        v = function(e, t) {
                            for (var a = -1, n = s - 1, i = 7, d = 0, o = _.getMaskFunction(t), u = s - 1; u > 0; u -= 2)
                                for (6 == u && (u -= 1);;) {
                                    for (var m = 0; m < 2; m += 1)
                                        if (null == r[n][u - m]) {
                                            var l = !1;
                                            d < e.length && (l = (e[d] >>> i & 1) == 1), o(n, u - m) && (l = !l), r[n][u - m] = l, -1 == (i -= 1) && (d += 1, i = 7)
                                        } if ((n += a) < 0 || s <= n) {
                                        n -= a, a = -a;
                                        break
                                    }
                                }
                        },
                        b = function(e, t) {
                            for (var a = 0, n = 0, r = 0, s = Array(t.length), i = Array(t.length), d = 0; d < t.length; d += 1) {
                                var o = t[d].dataCount,
                                    u = t[d].totalCount - o;
                                n = Math.max(n, o), r = Math.max(r, u), s[d] = Array(o);
                                for (var l = 0; l < s[d].length; l += 1) s[d][l] = 255 & e.getBuffer()[l + a];
                                a += o;
                                var c = _.getErrorCorrectPolynomial(u),
                                    h = m(s[d], c.getLength() - 1).mod(c);
                                i[d] = Array(c.getLength() - 1);
                                for (var l = 0; l < i[d].length; l += 1) {
                                    var M = l + h.getLength() - i[d].length;
                                    i[d][l] = M >= 0 ? h.getAt(M) : 0
                                }
                            }
                            for (var f = 0, l = 0; l < t.length; l += 1) f += t[l].totalCount;
                            for (var y = Array(f), L = 0, l = 0; l < n; l += 1)
                                for (var d = 0; d < t.length; d += 1) l < s[d].length && (y[L] = s[d][l], L += 1);
                            for (var l = 0; l < r; l += 1)
                                for (var d = 0; d < t.length; d += 1) l < i[d].length && (y[L] = i[d][l], L += 1);
                            return y
                        },
                        S = function(e, t, a) {
                            for (var n = l.getRSBlocks(e, t), r = c(), s = 0; s < a.length; s += 1) {
                                var i = a[s];
                                r.put(i.getMode(), 4), r.put(i.getLength(), _.getLengthInBits(i.getMode(), e)), i.write(r)
                            }
                            for (var d = 0, s = 0; s < n.length; s += 1) d += n[s].dataCount;
                            if (r.getLengthInBits() > 8 * d) throw "code length overflow. (" + r.getLengthInBits() + ">" + 8 * d + ")";
                            for (r.getLengthInBits() + 4 <= 8 * d && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
                            for (; !(r.getLengthInBits() >= 8 * d) && (r.put(236, 8), !(r.getLengthInBits() >= 8 * d));) {
                                ;
                                r.put(17, 8)
                            }
                            return b(r, n)
                        };
                    u.addData = function(e, t) {
                        var a = null;
                        switch (t = t || "Byte") {
                            case "Numeric":
                                a = h(e);
                                break;
                            case "Alphanumeric":
                                a = M(e);
                                break;
                            case "Byte":
                                a = f(e);
                                break;
                            case "Kanji":
                                a = y(e);
                                break;
                            default:
                                throw "mode:" + t
                        }
                        d.push(a), i = null
                    }, u.isDark = function(e, t) {
                        if (e < 0 || s <= e || t < 0 || s <= t) throw e + "," + t;
                        return r[e][t]
                    }, u.getModuleCount = function() {
                        return s
                    }, u.make = function() {
                        if (a < 1) {
                            for (var e = 1; e < 40; e++) {
                                for (var t = l.getRSBlocks(e, n), r = c(), s = 0; s < d.length; s++) {
                                    var i = d[s];
                                    r.put(i.getMode(), 4), r.put(i.getLength(), _.getLengthInBits(i.getMode(), e)), i.write(r)
                                }
                                for (var o = 0, s = 0; s < t.length; s++) o += t[s].dataCount;
                                if (r.getLengthInBits() <= 8 * o) break
                            }
                            a = e
                        }
                        L(!1, p())
                    }, u.createTableTag = function(e, t) {
                        e = e || 2;
                        var a = "";
                        a += '<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' + (t = void 0 === t ? 4 * e : t) + 'px;"><tbody>';
                        for (var n = 0; n < u.getModuleCount(); n += 1) {
                            a += "<tr>";
                            for (var r = 0; r < u.getModuleCount(); r += 1) a += '<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' + e + "px;" + (" height: " + e) + "px; background-color: " + (u.isDark(n, r) ? "#000000" : "#ffffff") + ';"/>';
                            a += "</tr>"
                        }
                        return a + "</tbody></table>"
                    }, u.createSvgTag = function(e, t, a, n) {
                        var r = {};
                        "object" == typeof arguments[0] && (r = arguments[0], e = r.cellSize, t = r.margin, a = r.alt, n = r.title), e = e || 2, t = void 0 === t ? 4 * e : t, (a = "string" == typeof a ? {
                            text: a
                        } : a || {}).text = a.text || null, a.id = a.text ? a.id || "qrcode-description" : null, (n = "string" == typeof n ? {
                            text: n
                        } : n || {}).text = n.text || null, n.id = n.text ? n.id || "qrcode-title" : null;
                        var s, i, d, o, _ = u.getModuleCount() * e + 2 * t,
                            m = "";
                        for (o = "l" + e + ",0 0," + e + " -" + e + ",0 0,-" + e + "z ", m += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', m += r.scalable ? "" : ' width="' + _ + 'px" height="' + _ + 'px"', m += ' viewBox="0 0 ' + _ + " " + _ + '" ', m += ' preserveAspectRatio="xMinYMin meet"', m += n.text || a.text ? ' role="img" aria-labelledby="' + H([n.id, a.id].join(" ").trim()) + '"' : "", m += ">", m += n.text ? '<title id="' + H(n.id) + '">' + H(n.text) + "</title>" : "", m += a.text ? '<description id="' + H(a.id) + '">' + H(a.text) + "</description>" : "", m += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', m += '<path d="', i = 0; i < u.getModuleCount(); i += 1)
                            for (s = 0, d = i * e + t; s < u.getModuleCount(); s += 1) u.isDark(i, s) && (m += "M" + (s * e + t) + "," + d + o);
                        return m += '" stroke="transparent" fill="black"/>', m += "</svg>"
                    }, u.createDataURL = function(e, t) {
                        e = e || 2, t = void 0 === t ? 4 * e : t;
                        var a = u.getModuleCount() * e + 2 * t,
                            n = t,
                            r = a - t;
                        return D(a, a, function(t, a) {
                            if (!(n <= t) || !(t < r) || !(n <= a) || !(a < r)) return 1;
                            var s = Math.floor((t - n) / e),
                                i = Math.floor((a - n) / e);
                            return +!u.isDark(i, s)
                        })
                    }, u.createImgTag = function(e, t, a) {
                        e = e || 2, t = void 0 === t ? 4 * e : t;
                        var n = u.getModuleCount() * e + 2 * t,
                            r = "";
                        return r += "<img", r += ' src="', r += u.createDataURL(e, t), r += '"', r += ' width="', r += n, r += '"', r += ' height="', r += n, r += '"', a && (r += ' alt="', r += H(a), r += '"'), r += "/>"
                    };
                    var H = function(e) {
                            for (var t = "", a = 0; a < e.length; a += 1) {
                                var n = e.charAt(a);
                                switch (n) {
                                    case "<":
                                        t += "&lt;";
                                        break;
                                    case ">":
                                        t += "&gt;";
                                        break;
                                    case "&":
                                        t += "&amp;";
                                        break;
                                    case '"':
                                        t += "&quot;";
                                        break;
                                    default:
                                        t += n
                                }
                            }
                            return t
                        },
                        j = function(e) {
                            e = void 0 === e ? 2 : e;
                            var t, a, n, r, s, i = +u.getModuleCount() + 2 * e,
                                d = e,
                                o = i - e,
                                _ = {
                                    "██": "█",
                                    "█ ": "▀",
                                    " █": "▄",
                                    "  ": " "
                                },
                                m = {
                                    "██": "▀",
                                    "█ ": "▀",
                                    " █": " ",
                                    "  ": " "
                                },
                                l = "";
                            for (t = 0; t < i; t += 2) {
                                for (a = 0, n = Math.floor((t - d) / 1), r = Math.floor((t + 1 - d) / 1); a < i; a += 1) s = "█", d <= a && a < o && d <= t && t < o && u.isDark(n, Math.floor((a - d) / 1)) && (s = " "), d <= a && a < o && d <= t + 1 && t + 1 < o && u.isDark(r, Math.floor((a - d) / 1)) ? s += " " : s += "█", l += e < 1 && t + 1 >= o ? m[s] : _[s];
                                l += "\n"
                            }
                            return i % 2 && e > 0 ? l.substring(0, l.length - i - 1) + Array(i + 1).join("▀") : l.substring(0, l.length - 1)
                        };
                    return u.createASCII = function(e, t) {
                        if ((e = e || 1) < 2) return j(t);
                        e -= 1, t = void 0 === t ? 2 * e : t;
                        var a, n, r, s, i = u.getModuleCount() * e + 2 * t,
                            d = t,
                            o = i - t,
                            _ = Array(e + 1).join("██"),
                            m = Array(e + 1).join("  "),
                            l = "",
                            c = "";
                        for (a = 0; a < i; a += 1) {
                            for (n = 0, r = Math.floor((a - d) / e), c = ""; n < i; n += 1) s = 1, d <= n && n < o && d <= a && a < o && u.isDark(r, Math.floor((n - d) / e)) && (s = 0), c += s ? _ : m;
                            for (r = 0; r < e; r += 1) l += c + "\n"
                        }
                        return l.substring(0, l.length - 1)
                    }, u.renderTo2dContext = function(e, t) {
                        t = t || 2;
                        for (var a = u.getModuleCount(), n = 0; n < a; n++)
                            for (var r = 0; r < a; r++) e.fillStyle = u.isDark(n, r) ? "black" : "white", e.fillRect(n * t, r * t, t, t)
                    }, u
                };
                d.stringToBytesFuncs = {
                    default: function(e) {
                        for (var t = [], a = 0; a < e.length; a += 1) {
                            var n = e.charCodeAt(a);
                            t.push(255 & n)
                        }
                        return t
                    }
                }, d.stringToBytes = d.stringToBytesFuncs.default, d.createStringToBytes = function(e, t) {
                    var a = function() {
                        for (var a = p(e), n = function() {
                                var e = a.read();
                                if (-1 == e) throw "eof";
                                return e
                            }, r = 0, s = {};;) {
                            var i = a.read();
                            if (-1 == i) break;
                            var d = n(),
                                o = n(),
                                _ = n(),
                                u = String.fromCharCode(i << 8 | d),
                                m = o << 8 | _;
                            s[u] = m, r += 1
                        }
                        if (r != t) throw r + " != " + t;
                        return s
                    }();
                    return function(e) {
                        for (var t = [], n = 0; n < e.length; n += 1) {
                            var r = e.charCodeAt(n);
                            if (r < 128) t.push(r);
                            else {
                                var s = a[e.charAt(n)];
                                "number" == typeof s ? (255 & s) == s ? t.push(s) : (t.push(s >>> 8), t.push(255 & s)) : t.push(63)
                            }
                        }
                        return t
                    }
                };
                var o = {
                        L: 1,
                        M: 0,
                        Q: 3,
                        H: 2
                    },
                    _ = (e = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ], t = {}, a = function(e) {
                        for (var t = 0; 0 != e;) t += 1, e >>>= 1;
                        return t
                    }, t.getBCHTypeInfo = function(e) {
                        for (var t = e << 10; a(t) - a(1335) >= 0;) t ^= 1335 << a(t) - a(1335);
                        return (e << 10 | t) ^ 21522
                    }, t.getBCHTypeNumber = function(e) {
                        for (var t = e << 12; a(t) - a(7973) >= 0;) t ^= 7973 << a(t) - a(7973);
                        return e << 12 | t
                    }, t.getPatternPosition = function(t) {
                        return e[t - 1]
                    }, t.getMaskFunction = function(e) {
                        switch (e) {
                            case 0:
                                return function(e, t) {
                                    return (e + t) % 2 == 0
                                };
                            case 1:
                                return function(e, t) {
                                    return e % 2 == 0
                                };
                            case 2:
                                return function(e, t) {
                                    return t % 3 == 0
                                };
                            case 3:
                                return function(e, t) {
                                    return (e + t) % 3 == 0
                                };
                            case 4:
                                return function(e, t) {
                                    return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                                };
                            case 5:
                                return function(e, t) {
                                    return e * t % 2 + e * t % 3 == 0
                                };
                            case 6:
                                return function(e, t) {
                                    return (e * t % 2 + e * t % 3) % 2 == 0
                                };
                            case 7:
                                return function(e, t) {
                                    return (e * t % 3 + (e + t) % 2) % 2 == 0
                                };
                            default:
                                throw "bad maskPattern:" + e
                        }
                    }, t.getErrorCorrectPolynomial = function(e) {
                        for (var t = m([1], 0), a = 0; a < e; a += 1) t = t.multiply(m([1, u.gexp(a)], 0));
                        return t
                    }, t.getLengthInBits = function(e, t) {
                        if (1 <= t && t < 10) switch (e) {
                            case 1:
                                return 10;
                            case 2:
                                return 9;
                            case 4:
                            case 8:
                                return 8;
                            default:
                                throw "mode:" + e
                        }
                        if (t < 27) switch (e) {
                            case 1:
                                return 12;
                            case 2:
                                return 11;
                            case 4:
                                return 16;
                            case 8:
                                return 10;
                            default:
                                throw "mode:" + e
                        }
                        if (t < 41) switch (e) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case 4:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw "mode:" + e
                        }
                        throw "type:" + t
                    }, t.getLostPoint = function(e) {
                        for (var t = e.getModuleCount(), a = 0, n = 0; n < t; n += 1)
                            for (var r = 0; r < t; r += 1) {
                                for (var s = 0, i = e.isDark(n, r), d = -1; d <= 1; d += 1)
                                    if (!(n + d < 0) && !(t <= n + d))
                                        for (var o = -1; o <= 1; o += 1) r + o < 0 || t <= r + o || (0 != d || 0 != o) && i == e.isDark(n + d, r + o) && (s += 1);
                                s > 5 && (a += 3 + s - 5)
                            }
                        for (var n = 0; n < t - 1; n += 1)
                            for (var r = 0; r < t - 1; r += 1) {
                                var _ = 0;
                                e.isDark(n, r) && (_ += 1), e.isDark(n + 1, r) && (_ += 1), e.isDark(n, r + 1) && (_ += 1), e.isDark(n + 1, r + 1) && (_ += 1), (0 == _ || 4 == _) && (a += 3)
                            }
                        for (var n = 0; n < t; n += 1)
                            for (var r = 0; r < t - 6; r += 1) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (a += 40);
                        for (var r = 0; r < t; r += 1)
                            for (var n = 0; n < t - 6; n += 1) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (a += 40);
                        for (var u = 0, r = 0; r < t; r += 1)
                            for (var n = 0; n < t; n += 1) e.isDark(n, r) && (u += 1);
                        return a + 10 * (Math.abs(100 * u / t / t - 50) / 5)
                    }, t),
                    u = function() {
                        for (var e = Array(256), t = Array(256), a = 0; a < 8; a += 1) e[a] = 1 << a;
                        for (var a = 8; a < 256; a += 1) e[a] = e[a - 4] ^ e[a - 5] ^ e[a - 6] ^ e[a - 8];
                        for (var a = 0; a < 255; a += 1) t[e[a]] = a;
                        var n = {};
                        return n.glog = function(e) {
                            if (e < 1) throw "glog(" + e + ")";
                            return t[e]
                        }, n.gexp = function(t) {
                            for (; t < 0;) t += 255;
                            for (; t >= 256;) t -= 255;
                            return e[t]
                        }, n
                    }();

                function m(e, t) {
                    if (void 0 === e.length) throw e.length + "/" + t;
                    var a = function() {
                            for (var a = 0; a < e.length && 0 == e[a];) a += 1;
                            for (var n = Array(e.length - a + t), r = 0; r < e.length - a; r += 1) n[r] = e[r + a];
                            return n
                        }(),
                        n = {};
                    return n.getAt = function(e) {
                        return a[e]
                    }, n.getLength = function() {
                        return a.length
                    }, n.multiply = function(e) {
                        for (var t = Array(n.getLength() + e.getLength() - 1), a = 0; a < n.getLength(); a += 1)
                            for (var r = 0; r < e.getLength(); r += 1) t[a + r] ^= u.gexp(u.glog(n.getAt(a)) + u.glog(e.getAt(r)));
                        return m(t, 0)
                    }, n.mod = function(e) {
                        if (n.getLength() - e.getLength() < 0) return n;
                        for (var t = u.glog(n.getAt(0)) - u.glog(e.getAt(0)), a = Array(n.getLength()), r = 0; r < n.getLength(); r += 1) a[r] = n.getAt(r);
                        for (var r = 0; r < e.getLength(); r += 1) a[r] ^= u.gexp(u.glog(e.getAt(r)) + t);
                        return m(a, 0).mod(e)
                    }, n
                }
                var l = (n = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ], r = function(e, t) {
                        var a = {};
                        return a.totalCount = e, a.dataCount = t, a
                    }, s = {}, i = function(e, t) {
                        switch (t) {
                            case o.L:
                                return n[(e - 1) * 4 + 0];
                            case o.M:
                                return n[(e - 1) * 4 + 1];
                            case o.Q:
                                return n[(e - 1) * 4 + 2];
                            case o.H:
                                return n[(e - 1) * 4 + 3];
                            default:
                                return
                        }
                    }, s.getRSBlocks = function(e, t) {
                        var a = i(e, t);
                        if (void 0 === a) throw "bad rs block @ typeNumber:" + e + "/errorCorrectionLevel:" + t;
                        for (var n = a.length / 3, s = [], d = 0; d < n; d += 1)
                            for (var o = a[3 * d + 0], _ = a[3 * d + 1], u = a[3 * d + 2], m = 0; m < o; m += 1) s.push(r(_, u));
                        return s
                    }, s),
                    c = function() {
                        var e = [],
                            t = 0,
                            a = {};
                        return a.getBuffer = function() {
                            return e
                        }, a.getAt = function(t) {
                            return (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                        }, a.put = function(e, t) {
                            for (var n = 0; n < t; n += 1) a.putBit((e >>> t - n - 1 & 1) == 1)
                        }, a.getLengthInBits = function() {
                            return t
                        }, a.putBit = function(a) {
                            var n = Math.floor(t / 8);
                            e.length <= n && e.push(0), a && (e[n] |= 128 >>> t % 8), t += 1
                        }, a
                    },
                    h = function(e) {
                        var t = {};
                        t.getMode = function() {
                            return 1
                        }, t.getLength = function(t) {
                            return e.length
                        }, t.write = function(t) {
                            for (var n = 0; n + 2 < e.length;) t.put(a(e.substring(n, n + 3)), 10), n += 3;
                            n < e.length && (e.length - n == 1 ? t.put(a(e.substring(n, n + 1)), 4) : e.length - n == 2 && t.put(a(e.substring(n, n + 2)), 7))
                        };
                        var a = function(e) {
                                for (var t = 0, a = 0; a < e.length; a += 1) t = 10 * t + n(e.charAt(a));
                                return t
                            },
                            n = function(e) {
                                if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
                                throw "illegal char :" + e
                            };
                        return t
                    },
                    M = function(e) {
                        var t = {};
                        t.getMode = function() {
                            return 2
                        }, t.getLength = function(t) {
                            return e.length
                        }, t.write = function(t) {
                            for (var n = 0; n + 1 < e.length;) t.put(45 * a(e.charAt(n)) + a(e.charAt(n + 1)), 11), n += 2;
                            n < e.length && t.put(a(e.charAt(n)), 6)
                        };
                        var a = function(e) {
                            if ("0" <= e && e <= "9") return e.charCodeAt(0) - 48;
                            if ("A" <= e && e <= "Z") return e.charCodeAt(0) - 65 + 10;
                            switch (e) {
                                case " ":
                                    return 36;
                                case "$":
                                    return 37;
                                case "%":
                                    return 38;
                                case "*":
                                    return 39;
                                case "+":
                                    return 40;
                                case "-":
                                    return 41;
                                case ".":
                                    return 42;
                                case "/":
                                    return 43;
                                case ":":
                                    return 44;
                                default:
                                    throw "illegal char :" + e
                            }
                        };
                        return t
                    },
                    f = function(e) {
                        var t = d.stringToBytes(e),
                            a = {};
                        return a.getMode = function() {
                            return 4
                        }, a.getLength = function(e) {
                            return t.length
                        }, a.write = function(e) {
                            for (var a = 0; a < t.length; a += 1) e.put(t[a], 8)
                        }, a
                    },
                    y = function(e) {
                        var t = d.stringToBytesFuncs.SJIS;
                        if (!t) throw "sjis not supported.";
                        var a = t("友");
                        if (2 != a.length || (a[0] << 8 | a[1]) != 38726) throw "sjis not supported.";
                        var n = t(e),
                            r = {};
                        return r.getMode = function() {
                            return 8
                        }, r.getLength = function(e) {
                            return ~~(n.length / 2)
                        }, r.write = function(e) {
                            for (var t = 0; t + 1 < n.length;) {
                                var a = (255 & n[t]) << 8 | 255 & n[t + 1];
                                if (33088 <= a && a <= 40956) a -= 33088;
                                else if (57408 <= a && a <= 60351) a -= 49472;
                                else throw "illegal char at " + (t + 1) + "/" + a;
                                a = (a >>> 8 & 255) * 192 + (255 & a), e.put(a, 13), t += 2
                            }
                            if (t < n.length) throw "illegal char at " + (t + 1)
                        }, r
                    },
                    L = function() {
                        var e = [],
                            t = {};
                        return t.writeByte = function(t) {
                            e.push(255 & t)
                        }, t.writeShort = function(e) {
                            t.writeByte(e), t.writeByte(e >>> 8)
                        }, t.writeBytes = function(e, a, n) {
                            a = a || 0, n = n || e.length;
                            for (var r = 0; r < n; r += 1) t.writeByte(e[r + a])
                        }, t.writeString = function(e) {
                            for (var a = 0; a < e.length; a += 1) t.writeByte(e.charCodeAt(a))
                        }, t.toByteArray = function() {
                            return e
                        }, t.toString = function() {
                            var t = "";
                            t += "[";
                            for (var a = 0; a < e.length; a += 1) a > 0 && (t += ","), t += e[a];
                            return t + "]"
                        }, t
                    },
                    Y = function() {
                        var e = 0,
                            t = 0,
                            a = 0,
                            n = "",
                            r = {},
                            s = function(e) {
                                n += String.fromCharCode(i(63 & e))
                            },
                            i = function(e) {
                                if (e < 0);
                                else if (e < 26) return 65 + e;
                                else if (e < 52) return 97 + (e - 26);
                                else if (e < 62) return 48 + (e - 52);
                                else if (62 == e) return 43;
                                else if (63 == e) return 47;
                                throw "n:" + e
                            };
                        return r.writeByte = function(n) {
                            for (e = e << 8 | 255 & n, t += 8, a += 1; t >= 6;) s(e >>> t - 6), t -= 6
                        }, r.flush = function() {
                            if (t > 0 && (s(e << 6 - t), e = 0, t = 0), a % 3 != 0)
                                for (var r = 3 - a % 3, i = 0; i < r; i += 1) n += "="
                        }, r.toString = function() {
                            return n
                        }, r
                    },
                    p = function(e) {
                        var t = 0,
                            a = 0,
                            n = 0,
                            r = {};
                        r.read = function() {
                            for (; n < 8;) {
                                if (t >= e.length) {
                                    if (0 == n) return -1;
                                    throw "unexpected end of file./" + n
                                }
                                var r = e.charAt(t);
                                if (t += 1, "=" == r) return n = 0, -1;
                                r.match(/^\s$/) || (a = a << 6 | s(r.charCodeAt(0)), n += 6)
                            }
                            var i = a >>> n - 8 & 255;
                            return n -= 8, i
                        };
                        var s = function(e) {
                            if (65 <= e && e <= 90) return e - 65;
                            if (97 <= e && e <= 122) return e - 97 + 26;
                            if (48 <= e && e <= 57) return e - 48 + 52;
                            if (43 == e) return 62;
                            if (47 == e) return 63;
                            else throw "c:" + e
                        };
                        return r
                    },
                    k = function(e, t) {
                        var a = Array(e * t),
                            n = {};
                        n.setPixel = function(t, n, r) {
                            a[n * e + t] = r
                        }, n.write = function(a) {
                            a.writeString("GIF87a"), a.writeShort(e), a.writeShort(t), a.writeByte(128), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(0), a.writeByte(255), a.writeByte(255), a.writeByte(255), a.writeString(","), a.writeShort(0), a.writeShort(0), a.writeShort(e), a.writeShort(t), a.writeByte(0);
                            var n = s(2);
                            a.writeByte(2);
                            for (var r = 0; n.length - r > 255;) a.writeByte(255), a.writeBytes(n, r, 255), r += 255;
                            a.writeByte(n.length - r), a.writeBytes(n, r, n.length - r), a.writeByte(0), a.writeString(";")
                        };
                        var r = function(e) {
                                var t = 0,
                                    a = 0,
                                    n = {};
                                return n.write = function(n, r) {
                                    if (n >>> r != 0) throw "length over";
                                    for (; t + r >= 8;) e.writeByte(255 & (n << t | a)), r -= 8 - t, n >>>= 8 - t, a = 0, t = 0;
                                    a = n << t | a, t += r
                                }, n.flush = function() {
                                    t > 0 && e.writeByte(a)
                                }, n
                            },
                            s = function(e) {
                                for (var t = 1 << e, n = (1 << e) + 1, s = e + 1, d = i(), o = 0; o < t; o += 1) d.add(String.fromCharCode(o));
                                d.add(String.fromCharCode(t)), d.add(String.fromCharCode(n));
                                var _ = L(),
                                    u = r(_);
                                u.write(t, s);
                                var m = 0,
                                    l = String.fromCharCode(a[0]);
                                for (m += 1; m < a.length;) {
                                    var c = String.fromCharCode(a[m]);
                                    m += 1, d.contains(l + c) ? l += c : (u.write(d.indexOf(l), s), 4095 > d.size() && (d.size() == 1 << s && (s += 1), d.add(l + c)), l = c)
                                }
                                return u.write(d.indexOf(l), s), u.write(n, s), u.flush(), _.toByteArray()
                            },
                            i = function() {
                                var e = {},
                                    t = 0,
                                    a = {};
                                return a.add = function(n) {
                                    if (a.contains(n)) throw "dup key:" + n;
                                    e[n] = t, t += 1
                                }, a.size = function() {
                                    return t
                                }, a.indexOf = function(t) {
                                    return e[t]
                                }, a.contains = function(t) {
                                    return void 0 !== e[t]
                                }, a
                            };
                        return n
                    },
                    D = function(e, t, a) {
                        for (var n = k(e, t), r = 0; r < t; r += 1)
                            for (var s = 0; s < e; s += 1) n.setPixel(s, r, a(s, r));
                        var i = L();
                        n.write(i);
                        for (var d = Y(), o = i.toByteArray(), _ = 0; _ < o.length; _ += 1) d.writeByte(o[_]);
                        return d.flush(), "data:image/gif;base64," + d
                    };
                return d
            }();
            a.stringToBytesFuncs["UTF-8"] = function(e) {
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e.charCodeAt(a);
                    n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (a++, n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(a)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                }
                return t
            }, t = function() {
                return a
            }, "function" == typeof define && define.amd ? define([], t) : e.exports = t()
        },
        97653: function(e, t, a) {
            e.exports = function(e, t, a, n) {
                var r = {
                        "./index.js": function(e, t, a) {
                            "use strict";
                            a.r(t);
                            var n = a("react"),
                                r = a.n(n),
                                s = a("react-dom"),
                                i = a.n(s),
                                d = a("prop-types"),
                                o = a.n(d);

                            function _(e) {
                                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function u(e) {
                                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }

                            function m(e, t) {
                                return (m = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }

                            function l(e, t, a) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = a, e
                            }
                            var c = function(e) {
                                var t;
                                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");

                                function n() {
                                    var e;
                                    if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
                                    return e = u(n).apply(this, arguments), e && ("object" === _(e) || "function" == typeof e) ? e : function(e) {
                                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(this)
                                }
                                return n.prototype = Object.create(e && e.prototype, {
                                        constructor: {
                                            value: n,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), e && m(n, e), t = [{
                                        key: "propsWith",
                                        value: function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                                a = {};
                                            return Object.keys(this.props).forEach(function(n) {
                                                -1 !== n.search(e) && (a[t ? n.replace(e, "") : n] = this.props[n])
                                            }, this), a
                                        }
                                    }, {
                                        key: "componentWillUnmount",
                                        value: function() {
                                            this.clipboard && this.clipboard.destroy()
                                        }
                                    }, {
                                        key: "componentDidMount",
                                        value: function() {
                                            var e = this.props.options || this.propsWith(/^option-/, !0),
                                                t = i.a.findDOMNode(this.element);
                                            if (t) {
                                                var n = a("clipboard");
                                                this.clipboard = new n(t, e), Object.keys(this.propsWith(/^on/, !0)).forEach(function(e) {
                                                    this.clipboard.on(e.toLowerCase(), this.props["on" + e])
                                                }, this)
                                            }
                                        }
                                    }, {
                                        key: "render",
                                        value: function() {
                                            var e = this,
                                                t = function(e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var a = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(a);
                                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                                                            return Object.getOwnPropertyDescriptor(a, e).enumerable
                                                        }))), n.forEach(function(t) {
                                                            l(e, t, a[t])
                                                        })
                                                    }
                                                    return e
                                                }({
                                                    title: this.props.title || "",
                                                    type: this.getType(),
                                                    className: this.props.className || "",
                                                    style: this.props.style || {},
                                                    ref: function(t) {
                                                        return e.element = t
                                                    },
                                                    onClick: this.props.onClick
                                                }, this.propsWith(/^data-/), this.propsWith(/^button-/, !0)),
                                                n = a("clipboard");
                                            return this.props.isVisibleWhenUnsupported || n.isSupported() ? r.a.createElement(this.getComponent(), t, this.props.children) : null
                                        }
                                    }, {
                                        key: "getType",
                                        value: function() {
                                            return "button" === this.getComponent() || "input" === this.getComponent() ? this.props.type || "button" : void 0
                                        }
                                    }, {
                                        key: "getComponent",
                                        value: function() {
                                            return this.props.component || "button"
                                        }
                                    }],
                                    function(e, t) {
                                        for (var a = 0; a < t.length; a++) {
                                            var n = t[a];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(n.prototype, t), n
                            }(r.a.Component);
                            l(c, "propTypes", {
                                options: function(e, t, a) {
                                    var n = e[t];
                                    return n && "object" !== _(n) || Array.isArray(n) ? Error("Invalid props '".concat(t, "' supplied to '").concat(a, "'. ") + "'".concat(t, "' is not an object.")) : void 0 !== e["option-text"] && "function" != typeof e["option-text"] ? Error("Invalid props 'option-text' supplied to '".concat(a, "'. ") + "'option-text' is not a function.") : void 0
                                },
                                title: o.a.string,
                                type: o.a.string,
                                className: o.a.string,
                                style: o.a.object,
                                component: o.a.any,
                                children: o.a.any
                            }), l(c, "defaultProps", {
                                isVisibleWhenUnsupported: !0,
                                onClick: function() {}
                            }), t.default = c
                        },
                        clipboard: function(t, a) {
                            t.exports = e
                        },
                        "prop-types": function(e, a) {
                            e.exports = t
                        },
                        react: function(e, t) {
                            e.exports = a
                        },
                        "react-dom": function(e, t) {
                            e.exports = n
                        }
                    },
                    s = {};

                function i(e) {
                    if (s[e]) return s[e].exports;
                    var t = s[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
                }
                return i.m = r, i.c = s, i.d = function(e, t, a) {
                    i.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: a
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, t) {
                    if (1 & t && (e = i(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var a = Object.create(null);
                    if (i.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var n in e) i.d(a, n, (function(t) {
                            return e[t]
                        }).bind(null, n));
                    return a
                }, i.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return i.d(t, "a", t), t
                }, i.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, i.p = "", i(i.s = "./index.js")
            }(a(69602), a(75448), a(58191), a(17727))
        },
        30053: function(e, t, a) {
            "use strict";
            var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
                })(e, t)
            }, function(e, t) {
                function a() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCode = void 0;
            var s = a(1962),
                i = a(17042),
                d = a(58191),
                o = a(17727);
            t.QRCode = function(e) {
                function t(t) {
                    var a = e.call(this, t) || this;
                    return a.canvas = d.createRef(), a
                }
                return r(t, e), t.utf16to8 = function(e) {
                    var t, a, n = "",
                        r = e.length;
                    for (t = 0; t < r; t++)(a = e.charCodeAt(t)) >= 1 && a <= 127 ? n += e.charAt(t) : (a > 2047 ? (n += String.fromCharCode(224 | a >> 12 & 15), n += String.fromCharCode(128 | a >> 6 & 63)) : n += String.fromCharCode(192 | a >> 6 & 31), n += String.fromCharCode(128 | 63 & a));
                    return n
                }, t.prototype.drawRoundedSquare = function(e, t, a, n, r, s, i, d) {
                    d.lineWidth = e, d.fillStyle = r, d.strokeStyle = r, a += e / 2, t += e / 2, n -= e, Array.isArray(s) || (s = [s, s, s, s]);
                    var o = (s = s.map(function(e) {
                            return (e = Math.min(e, n / 2)) < 0 ? 0 : e
                        }))[0] || 0,
                        _ = s[1] || 0,
                        u = s[2] || 0,
                        m = s[3] || 0;
                    d.beginPath(), d.moveTo(t + o, a), d.lineTo(t + n - _, a), _ && d.quadraticCurveTo(t + n, a, t + n, a + _), d.lineTo(t + n, a + n - u), u && d.quadraticCurveTo(t + n, a + n, t + n - u, a + n), d.lineTo(t + m, a + n), m && d.quadraticCurveTo(t, a + n, t, a + n - m), d.lineTo(t, a + o), o && d.quadraticCurveTo(t, a, t + o, a), d.closePath(), d.stroke(), i && d.fill()
                }, t.prototype.drawPositioningPattern = function(e, t, a, n, r, s, i) {
                    void 0 === i && (i = [0, 0, 0, 0]);
                    var d, o, _, u, m = Math.ceil(t);
                    "number" == typeof i || Array.isArray(i) ? o = d = i : (d = i.outer || 0, o = i.inner || 0), "string" != typeof s ? (_ = s.outer, u = s.inner) : (_ = s, u = s);
                    var l = n * t + a,
                        c = r * t + a,
                        h = 7 * t;
                    this.drawRoundedSquare(m, c, l, h, _, d, !1, e), h = 3 * t, l += 2 * t, c += 2 * t, this.drawRoundedSquare(m, c, l, h, u, o, !0, e)
                }, t.prototype.isInPositioninZone = function(e, t, a) {
                    return a.some(function(a) {
                        return t >= a.row && t <= a.row + 7 && e >= a.col && e <= a.col + 7
                    })
                }, t.prototype.transformPixelLengthIntoNumberOfCells = function(e, t) {
                    return e / t
                }, t.prototype.isCoordinateInImage = function(e, t, a, n, r, s, i, d) {
                    if (!d) return !1;
                    var o = this.transformPixelLengthIntoNumberOfCells(r, i),
                        _ = this.transformPixelLengthIntoNumberOfCells(s, i),
                        u = this.transformPixelLengthIntoNumberOfCells(a, i) - 1,
                        m = this.transformPixelLengthIntoNumberOfCells(n, i) - 1;
                    return t >= o - 2 && t <= o + u + 2 && e >= _ - 2 && e <= _ + m + 2
                }, t.prototype.shouldComponentUpdate = function(e) {
                    return !s(this.props, e)
                }, t.prototype.componentDidMount = function() {
                    this.update()
                }, t.prototype.componentDidUpdate = function() {
                    this.update()
                }, t.prototype.update = function() {
                    var e = this.props,
                        a = e.value,
                        n = e.ecLevel,
                        r = e.enableCORS,
                        s = e.bgColor,
                        d = e.fgColor,
                        _ = e.logoImage,
                        u = e.logoOpacity,
                        m = e.logoOnLoad,
                        l = e.removeQrCodeBehindLogo,
                        c = e.qrStyle,
                        h = e.eyeRadius,
                        M = e.eyeColor,
                        f = e.logoPaddingStyle,
                        y = +this.props.size,
                        L = +this.props.quietZone,
                        Y = this.props.logoWidth ? +this.props.logoWidth : 0,
                        p = this.props.logoHeight ? +this.props.logoHeight : 0,
                        k = this.props.logoPadding ? +this.props.logoPadding : 0,
                        D = i(0, n);
                    D.addData(t.utf16to8(a)), D.make();
                    var g = o.findDOMNode(this.canvas.current),
                        w = g.getContext("2d"),
                        T = y + 2 * L,
                        v = D.getModuleCount(),
                        b = y / v,
                        S = window.devicePixelRatio || 1;
                    g.height = g.width = T * S, w.scale(S, S), w.fillStyle = s, w.fillRect(0, 0, T, T);
                    var H = [{
                        row: 0,
                        col: 0
                    }, {
                        row: 0,
                        col: v - 7
                    }, {
                        row: v - 7,
                        col: 0
                    }];
                    if (w.strokeStyle = d, "dots" === c) {
                        w.fillStyle = d;
                        for (var j = b / 2, x = 0; x < v; x++)
                            for (var O = 0; O < v; O++) D.isDark(x, O) && !this.isInPositioninZone(x, O, H) && (w.beginPath(), w.arc(Math.round(O * b) + j + L, Math.round(x * b) + j + L, j / 100 * 75, 0, 2 * Math.PI, !1), w.closePath(), w.fill())
                    } else
                        for (var x = 0; x < v; x++)
                            for (var O = 0; O < v; O++)
                                if (D.isDark(x, O) && !this.isInPositioninZone(x, O, H)) {
                                    w.fillStyle = d;
                                    var P = Math.ceil((O + 1) * b) - Math.floor(O * b),
                                        W = Math.ceil((x + 1) * b) - Math.floor(x * b);
                                    w.fillRect(Math.round(O * b) + L, Math.round(x * b) + L, P, W)
                                } for (var A = 0; A < 3; A++) {
                        var E = H[A],
                            x = E.row,
                            O = E.col,
                            F = h,
                            C = void 0;
                        Array.isArray(F) && (F = F[A]), "number" == typeof F && (F = [F, F, F, F]), C = M ? Array.isArray(M) ? M[A] : M : d, this.drawPositioningPattern(w, b, L, x, O, C, F)
                    }
                    if (_) {
                        var z = new Image;
                        r && (z.crossOrigin = "Anonymous"), z.onload = function() {
                            w.save();
                            var e = Y || .2 * y,
                                t = p || e,
                                a = (y - e) / 2,
                                n = (y - t) / 2;
                            if (l || k) {
                                w.beginPath(), w.strokeStyle = s, w.fillStyle = s;
                                var r = e + 2 * k,
                                    i = t + 2 * k,
                                    d = a + L - k,
                                    o = n + L - k;
                                "circle" === f ? (w.ellipse(d + r / 2, o + i / 2, r / 2, i / 2, 0, 0, 2 * Math.PI), w.stroke(), w.fill()) : w.fillRect(d, o, r, i)
                            }
                            w.globalAlpha = u, w.drawImage(z, a + L, n + L, e, t), w.restore(), m && m()
                        }, z.src = _
                    }
                }, t.prototype.render = function() {
                    var e, t = +this.props.size + 2 * this.props.quietZone;
                    return d.createElement("canvas", {
                        id: null != (e = this.props.id) ? e : "react-qrcode-logo",
                        height: t,
                        width: t,
                        style: {
                            height: t + "px",
                            width: t + "px"
                        },
                        ref: this.canvas
                    })
                }, t.defaultProps = {
                    value: "https://reactjs.org/",
                    ecLevel: "M",
                    enableCORS: !1,
                    size: 150,
                    quietZone: 10,
                    bgColor: "#FFFFFF",
                    fgColor: "#000000",
                    logoOpacity: 1,
                    qrStyle: "squares",
                    eyeRadius: [0, 0, 0],
                    logoPaddingStyle: "square"
                }, t
            }(d.Component)
        },
        12143: function(e, t, a) {
            "use strict";
            a.d(t, {
                F: () => i
            });
            var n = a(30014),
                r = a(92969),
                s = a(56645);

            function i(e, t) {
                return void 0 === t && (t = n.D), e = null != e ? e : d, (0, r.N)(function(a, n) {
                    var r, i = !0;
                    a.subscribe((0, s._)(n, function(a) {
                        var s = t(a);
                        (i || !e(r, s)) && (i = !1, r = s, n.next(a))
                    }))
                })
            }

            function d(e, t) {
                return e === t
            }
        }
    }
]);
//# sourceMappingURL=1565.03b163b5.js.map