try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "41f59e74-a84a-4671-8adf-1da75f9932fd", e._sentryDebugIdIdentifier = "sentry-dbid-41f59e74-a84a-4671-8adf-1da75f9932fd")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4283"], {
        62246: function(e, t, s) {
            let a, i, l;

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(t).forEach(s => {
                    void 0 === e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
                })
            }
            s.r(t), s.d(t, {
                Controller: () => ee,
                EffectCube: () => eb,
                Pagination: () => U,
                Grid: () => en,
                Parallax: () => Z,
                Virtual: () => _,
                Lazy: () => J,
                HashNavigation: () => ea,
                Manipulation: () => eu,
                Keyboard: () => q,
                FreeMode: () => er,
                EffectFade: () => ev,
                EffectCreative: () => eC,
                EffectCards: () => eE,
                Mousewheel: () => j,
                A11y: () => et,
                Autoplay: () => ei,
                Navigation: () => V,
                Scrollbar: () => K,
                Thumbs: () => el,
                default: () => R,
                Swiper: () => R,
                Zoom: () => Q,
                History: () => es,
                EffectCoverflow: () => ex,
                EffectFlip: () => ey
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                let e = "undefined" != typeof document ? document : {};
                return n(e, o), e
            }
            let p = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function h() {
                let e = "undefined" != typeof window ? window : {};
                return n(e, p), e
            }
            class c extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function u() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...u(e)) : t.push(e)
                }), t
            }

            function m(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function f(e, t) {
                let s = h(),
                    a = d(),
                    i = [];
                if (!t && e instanceof c) return e;
                if (!e) return new c(i);
                if ("string" == typeof e) {
                    let s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        let t = a.createElement(e);
                        t.innerHTML = s;
                        for (let e = 0; e < t.childNodes.length; e += 1) i.push(t.childNodes[e])
                    } else i = function(e, t) {
                        if ("string" != typeof e) return [e];
                        let s = [],
                            a = t.querySelectorAll(e);
                        for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                        return s
                    }(e.trim(), t || a)
                } else if (e.nodeType || e === s || e === a) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof c) return e;
                    i = e
                }
                return new c(function(e) {
                    let t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(i))
            }
            f.fn = c.prototype;
            let g = "resize scroll".split(" ");

            function v(e) {
                return function() {
                    for (var t = arguments.length, s = Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                    if (void 0 === s[0]) {
                        for (let t = 0; t < this.length; t += 1) 0 > g.indexOf(e) && (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...s)
                }
            }
            v("click"), v("blur"), v("focus"), v("focusin"), v("focusout"), v("keyup"), v("keydown"), v("keypress"), v("submit"), v("change"), v("mousedown"), v("mousemove"), v("mouseup"), v("mouseenter"), v("mouseleave"), v("mouseout"), v("mouseover"), v("touchstart"), v("touchend"), v("touchmove"), v("resize"), v("scroll");
            let b = {
                addClass: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = u(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...a)
                    }), this
                },
                removeClass: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = u(t.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...a)
                    }), this
                },
                hasClass: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = u(t.map(e => e.split(" ")));
                    return m(this, e => a.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = u(t.map(e => e.split(" ")));
                    this.forEach(e => {
                        a.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 == arguments.length) this[s].setAttribute(e, t);
                        else
                            for (let t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this
                },
                on: function() {
                    let e;
                    for (var t = arguments.length, s = Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                    let [i, l, r, n] = s;

                    function o(e) {
                        let t = e.target;
                        if (!t) return;
                        let s = e.target.dom7EventData || [];
                        if (0 > s.indexOf(e) && s.unshift(e), f(t).is(l)) r.apply(t, s);
                        else {
                            let e = f(t).parents();
                            for (let t = 0; t < e.length; t += 1) f(e[t]).is(l) && r.apply(e[t], s)
                        }
                    }

                    function d(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof s[1] && ([i, r, n] = s, l = void 0), n || (n = !1);
                    let p = i.split(" ");
                    for (let t = 0; t < this.length; t += 1) {
                        let s = this[t];
                        if (l)
                            for (e = 0; e < p.length; e += 1) {
                                let t = p[e];
                                s.dom7LiveListeners || (s.dom7LiveListeners = {}), s.dom7LiveListeners[t] || (s.dom7LiveListeners[t] = []), s.dom7LiveListeners[t].push({
                                    listener: r,
                                    proxyListener: o
                                }), s.addEventListener(t, o, n)
                            } else
                                for (e = 0; e < p.length; e += 1) {
                                    let t = p[e];
                                    s.dom7Listeners || (s.dom7Listeners = {}), s.dom7Listeners[t] || (s.dom7Listeners[t] = []), s.dom7Listeners[t].push({
                                        listener: r,
                                        proxyListener: d
                                    }), s.addEventListener(t, d, n)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let [a, i, l, r] = t;
                    "function" == typeof t[1] && ([a, l, r] = t, i = void 0), r || (r = !1);
                    let n = a.split(" ");
                    for (let e = 0; e < n.length; e += 1) {
                        let t = n[e];
                        for (let e = 0; e < this.length; e += 1) {
                            let s, a = this[e];
                            if (!i && a.dom7Listeners ? s = a.dom7Listeners[t] : i && a.dom7LiveListeners && (s = a.dom7LiveListeners[t]), s && s.length)
                                for (let e = s.length - 1; e >= 0; e -= 1) {
                                    let i = s[e];
                                    l && i.listener === l || l && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === l ? (a.removeEventListener(t, i.proxyListener, r), s.splice(e, 1)) : l || (a.removeEventListener(t, i.proxyListener, r), s.splice(e, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    let a = h(),
                        i = t[0].split(" "),
                        l = t[1];
                    for (let e = 0; e < i.length; e += 1) {
                        let s = i[e];
                        for (let e = 0; e < this.length; e += 1) {
                            let i = this[e];
                            if (a.CustomEvent) {
                                let e = new a.CustomEvent(s, {
                                    detail: l,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                i.dom7EventData = t.filter((e, t) => t > 0), i.dispatchEvent(e), i.dom7EventData = [], delete i.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = this;
                    return e && t.on("transitionend", function s(a) {
                        a.target === this && (e.call(this, a), t.off("transitionend", s))
                    }), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let e = h();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = h(),
                            t = d(),
                            s = this[0],
                            a = s.getBoundingClientRect(),
                            i = t.body,
                            l = s.clientTop || i.clientTop || 0,
                            r = s.clientLeft || i.clientLeft || 0,
                            n = s === e ? e.scrollY : s.scrollTop,
                            o = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: a.top + n - l,
                            left: a.left + o - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let s, a = h();
                    if (1 == arguments.length)
                        if ("string" == typeof e) {
                            if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (s = 0; s < this.length; s += 1)
                                for (let t in e) this[s].style[t] = e[t];
                            return this
                        } if (2 == arguments.length && "string" == typeof e)
                        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this
                },
                each: function(e) {
                    return e && this.forEach((t, s) => {
                        e.apply(t, [t, s])
                    }), this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t, s, a = h(),
                        i = d(),
                        l = this[0];
                    if (!l || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (l.matches) return l.matches(e);
                        if (l.webkitMatchesSelector) return l.webkitMatchesSelector(e);
                        if (l.msMatchesSelector) return l.msMatchesSelector(e);
                        for (s = 0, t = f(e); s < t.length; s += 1)
                            if (t[s] === l) return !0;
                        return !1
                    }
                    if (e === i) return l === i;
                    if (e === a) return l === a;
                    if (e.nodeType || e instanceof c) {
                        for (s = 0, t = e.nodeType ? [e] : e; s < t.length; s += 1)
                            if (t[s] === l) return !0
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return f([]);
                    if (e < 0) {
                        let s = t + e;
                        return s < 0 ? f([]) : f([this[s]])
                    }
                    return f([this[e]])
                },
                append: function() {
                    let e;
                    for (var t = arguments.length, s = Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                    let i = d();
                    for (let t = 0; t < s.length; t += 1) {
                        e = s[t];
                        for (let t = 0; t < this.length; t += 1)
                            if ("string" == typeof e) {
                                let s = i.createElement("div");
                                for (s.innerHTML = e; s.firstChild;) this[t].appendChild(s.firstChild)
                            } else if (e instanceof c)
                            for (let s = 0; s < e.length; s += 1) this[t].appendChild(e[s]);
                        else this[t].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    let t, s, a = d();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let i = a.createElement("div");
                            for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                        } else if (e instanceof c)
                        for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && f(this[0].nextElementSibling).is(e) ? f([this[0].nextElementSibling]) : f([]);
                        if (this[0].nextElementSibling) return f([this[0].nextElementSibling])
                    }
                    return f([])
                },
                nextAll: function(e) {
                    let t = [],
                        s = this[0];
                    if (!s) return f([]);
                    for (; s.nextElementSibling;) {
                        let a = s.nextElementSibling;
                        e ? f(a).is(e) && t.push(a) : t.push(a), s = a
                    }
                    return f(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && f(t.previousElementSibling).is(e) ? f([t.previousElementSibling]) : f([]);
                        if (t.previousElementSibling) return f([t.previousElementSibling])
                    }
                    return f([])
                },
                prevAll: function(e) {
                    let t = [],
                        s = this[0];
                    if (!s) return f([]);
                    for (; s.previousElementSibling;) {
                        let a = s.previousElementSibling;
                        e ? f(a).is(e) && t.push(a) : t.push(a), s = a
                    }
                    return f(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? f(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return f(t)
                },
                parents: function(e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let a = this[s].parentNode;
                        for (; a;) e ? f(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
                    }
                    return f(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let a = this[s].querySelectorAll(e);
                        for (let e = 0; e < a.length; e += 1) t.push(a[e])
                    }
                    return f(t)
                },
                children: function(e) {
                    let t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let a = this[s].children;
                        for (let s = 0; s < a.length; s += 1)(!e || f(a[s]).is(e)) && t.push(a[s])
                    }
                    return f(t)
                },
                filter: function(e) {
                    return f(m(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function w(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return setTimeout(e, t)
            }

            function y() {
                return Date.now()
            }

            function x(e) {
                let t, s, a, i, l, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                    n = h(),
                    o = ((s = h()).getComputedStyle && (t = s.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t);
                return n.WebKitCSSMatrix ? ((i = o.transform || o.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), l = new n.WebKitCSSMatrix("none" === i ? "" : i)) : a = (l = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === r && (i = n.WebKitCSSMatrix ? l.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === r && (i = n.WebKitCSSMatrix ? l.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function E() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                let a = Object(t[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let e = 1; e < t.length; e += 1) {
                    let s = t[e];
                    if (null != s && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                        let e = Object.keys(Object(s)).filter(e => 0 > i.indexOf(e));
                        for (let t = 0, i = e.length; t < i; t += 1) {
                            let i = e[t],
                                l = Object.getOwnPropertyDescriptor(s, i);
                            void 0 !== l && l.enumerable && (C(a[i]) && C(s[i]) ? s[i].__swiper__ ? a[i] = s[i] : E(a[i], s[i]) : !C(a[i]) && C(s[i]) ? (a[i] = {}, s[i].__swiper__ ? a[i] = s[i] : E(a[i], s[i])) : a[i] = s[i])
                        }
                    }
                }
                return a
            }

            function T(e, t, s) {
                e.style.setProperty(t, s)
            }

            function $(e) {
                let t, {
                        swiper: s,
                        targetPosition: a,
                        side: i
                    } = e,
                    l = h(),
                    r = -s.translate,
                    n = null,
                    o = s.params.speed;
                s.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(s.cssModeFrameID);
                let d = a > r ? "next" : "prev",
                    p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    c = () => {
                        t = new Date().getTime(), null === n && (n = t);
                        let e = r + (.5 - Math.cos(Math.max(Math.min((t - n) / o, 1), 0) * Math.PI) / 2) * (a - r);
                        if (p(e, a) && (e = a), s.wrapperEl.scrollTo({
                                [i]: e
                            }), p(e, a)) {
                            s.wrapperEl.style.overflow = "hidden", s.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                s.wrapperEl.style.overflow = "", s.wrapperEl.scrollTo({
                                    [i]: e
                                })
                            }), l.cancelAnimationFrame(s.cssModeFrameID);
                            return
                        }
                        s.cssModeFrameID = l.requestAnimationFrame(c)
                    };
                c()
            }

            function S() {
                let e, t;
                return a || (e = h(), a = {
                    smoothScroll: (t = d()).documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            let s = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, s)
                        } catch (e) {}
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }), a
            }

            function M(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: a,
                    step: i
                } = e, {
                    activeIndex: l,
                    previousIndex: r
                } = t, n = a;
                if (n || (n = l > r ? "next" : l < r ? "prev" : "reset"), t.emit(`transition${i}`), s && l !== r) {
                    if ("reset" === n) return void t.emit(`slideResetTransition${i}`);
                    t.emit(`slideChangeTransition${i}`), "next" === n ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
                }
            }

            function k(e) {
                let t = d(),
                    s = h(),
                    a = this.touchEventsData,
                    {
                        params: i,
                        touches: l,
                        enabled: r
                    } = this;
                if (!r || this.animating && i.preventInteractionOnTransition) return;
                !this.animating && i.cssMode && i.loop && this.loopFix();
                let n = e;
                n.originalEvent && (n = n.originalEvent);
                let o = f(n.target);
                if ("wrapper" === i.touchEventsTarget && !o.closest(this.wrapperEl).length || (a.isTouchEvent = "touchstart" === n.type, !a.isTouchEvent && "which" in n && 3 === n.which || !a.isTouchEvent && "button" in n && n.button > 0 || a.isTouched && a.isMoved)) return;
                let p = !!i.noSwipingClass && "" !== i.noSwipingClass,
                    c = e.composedPath ? e.composedPath() : e.path;
                p && n.target && n.target.shadowRoot && c && (o = f(c[0]));
                let u = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
                    m = !!(n.target && n.target.shadowRoot);
                if (i.noSwiping && (m ? function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
                        return function t(s) {
                            if (!s || s === d() || s === h()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            let a = s.closest(e);
                            return a || s.getRootNode ? a || t(s.getRootNode().host) : null
                        }(t)
                    }(u, o[0]) : o.closest(u)[0])) {
                    this.allowClick = !0;
                    return
                }
                if (i.swipeHandler && !o.closest(i.swipeHandler)[0]) return;
                l.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, l.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
                let g = l.currentX,
                    v = l.currentY,
                    b = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                    w = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (b && (g <= w || g >= s.innerWidth - w))
                    if ("prevent" !== b) return;
                    else e.preventDefault();
                if (Object.assign(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = g, l.startY = v, a.touchStartTime = y(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== n.type) {
                    let e = !0;
                    o.is(a.focusableElements) && (e = !1, "SELECT" === o[0].nodeName && (a.isTouched = !1)), t.activeElement && f(t.activeElement).is(a.focusableElements) && t.activeElement !== o[0] && t.activeElement.blur();
                    let s = e && this.allowTouchMove && i.touchStartPreventDefault;
                    (i.touchStartForcePreventDefault || s) && !o[0].isContentEditable && n.preventDefault()
                }
                this.params.freeMode && this.params.freeMode.enabled && this.freeMode && this.animating && !i.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", n)
            }

            function P(e) {
                let t = d(),
                    s = this.touchEventsData,
                    {
                        params: a,
                        touches: i,
                        rtlTranslate: l,
                        enabled: r
                    } = this;
                if (!r) return;
                let n = e;
                if (n.originalEvent && (n = n.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", n);
                    return
                }
                if (s.isTouchEvent && "touchmove" !== n.type) return;
                let o = "touchmove" === n.type && n.targetTouches && (n.targetTouches[0] || n.changedTouches[0]),
                    p = "touchmove" === n.type ? o.pageX : n.pageX,
                    h = "touchmove" === n.type ? o.pageY : n.pageY;
                if (n.preventedByNestedSwiper) {
                    i.startX = p, i.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    f(n.target).is(s.focusableElements) || (this.allowClick = !1), s.isTouched && (Object.assign(i, {
                        startX: p,
                        startY: h,
                        currentX: p,
                        currentY: h
                    }), s.touchStartTime = y());
                    return
                }
                if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                    if (this.isVertical()) {
                        if (h < i.startY && this.translate <= this.maxTranslate() || h > i.startY && this.translate >= this.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (p < i.startX && this.translate <= this.maxTranslate() || p > i.startX && this.translate >= this.minTranslate()) return
                }
                if (s.isTouchEvent && t.activeElement && n.target === t.activeElement && f(n.target).is(s.focusableElements)) {
                    s.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && this.emit("touchMove", n), n.targetTouches && n.targetTouches.length > 1) return;
                i.currentX = p, i.currentY = h;
                let c = i.currentX - i.startX,
                    u = i.currentY - i.startY;
                if (this.params.threshold && Math.sqrt(c ** 2 + u ** 2) < this.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let e;
                    this.isHorizontal() && i.currentY === i.startY || this.isVertical() && i.currentX === i.startX ? s.isScrolling = !1 : c * c + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, s.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
                }
                if (s.isScrolling && this.emit("touchMoveOpposite", n), void 0 === s.startMoving && (i.currentX !== i.startX || i.currentY !== i.startY) && (s.startMoving = !0), s.isScrolling) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                this.allowClick = !1, !a.cssMode && n.cancelable && n.preventDefault(), a.touchMoveStopPropagation && !a.nested && n.stopPropagation(), s.isMoved || (a.loop && !a.cssMode && this.loopFix(), s.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", n)), this.emit("sliderMove", n), s.isMoved = !0;
                let m = this.isHorizontal() ? c : u;
                i.diff = m, m *= a.touchRatio, l && (m = -m), this.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
                let g = !0,
                    v = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (v = 0), m > 0 && s.currentTranslate > this.minTranslate() ? (g = !1, a.resistance && (s.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + s.startTranslate + m) ** v)) : m < 0 && s.currentTranslate < this.maxTranslate() && (g = !1, a.resistance && (s.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - s.startTranslate - m) ** v)), g && (n.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), this.allowSlidePrev || this.allowSlideNext || (s.currentTranslate = s.startTranslate), a.threshold > 0)
                    if (Math.abs(m) > a.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, s.currentTranslate = s.startTranslate, i.diff = this.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    } a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), this.params.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(s.currentTranslate), this.setTranslate(s.currentTranslate))
            }

            function z(e) {
                let t, s = this,
                    a = s.touchEventsData,
                    {
                        params: i,
                        touches: l,
                        rtlTranslate: r,
                        slidesGrid: n,
                        enabled: o
                    } = s;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && s.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) {
                    a.isMoved && i.grabCursor && s.setGrabCursor(!1), a.isMoved = !1, a.startMoving = !1;
                    return
                }
                i.grabCursor && a.isMoved && a.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let p = y(),
                    h = p - a.touchStartTime;
                if (s.allowClick) {
                    let e = d.path || d.composedPath && d.composedPath();
                    s.updateClickedSlide(e && e[0] || d.target), s.emit("tap click", d), h < 300 && p - a.lastClickTime < 300 && s.emit("doubleTap doubleClick", d)
                }
                if (a.lastClickTime = y(), w(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !s.swipeDirection || 0 === l.diff || a.currentTranslate === a.startTranslate) {
                    a.isTouched = !1, a.isMoved = !1, a.startMoving = !1;
                    return
                }
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, t = i.followFinger ? r ? s.translate : -s.translate : -a.currentTranslate, i.cssMode) return;
                if (s.params.freeMode && i.freeMode.enabled) return void s.freeMode.onTouchEnd({
                    currentPos: t
                });
                let c = 0,
                    u = s.slidesSizesGrid[0];
                for (let e = 0; e < n.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    let s = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    void 0 !== n[e + s] ? t >= n[e] && t < n[e + s] && (c = e, u = n[e + s] - n[e]) : t >= n[e] && (c = e, u = n[n.length - 1] - n[n.length - 2])
                }
                let m = null,
                    f = null;
                i.rewind && (s.isBeginning ? f = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (m = 0));
                let g = (t - n[c]) / u,
                    v = c < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (h > i.longSwipesMs) {
                    if (!i.longSwipes) return void s.slideTo(s.activeIndex);
                    "next" === s.swipeDirection && (g >= i.longSwipesRatio ? s.slideTo(i.rewind && s.isEnd ? m : c + v) : s.slideTo(c)), "prev" === s.swipeDirection && (g > 1 - i.longSwipesRatio ? s.slideTo(c + v) : null !== f && g < 0 && Math.abs(g) > i.longSwipesRatio ? s.slideTo(f) : s.slideTo(c))
                } else {
                    if (!i.shortSwipes) return void s.slideTo(s.activeIndex);
                    s.navigation && (d.target === s.navigation.nextEl || d.target === s.navigation.prevEl) ? d.target === s.navigation.nextEl ? s.slideTo(c + v) : s.slideTo(c) : ("next" === s.swipeDirection && s.slideTo(null !== m ? m : c + v), "prev" === s.swipeDirection && s.slideTo(null !== f ? f : c))
                }
            }

            function O() {
                let {
                    params: e,
                    el: t
                } = this;
                if (t && 0 === t.offsetWidth) return;
                e.breakpoints && this.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: a,
                    snapGrid: i
                } = this;
                this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = a, this.allowSlideNext = s, this.params.watchOverflow && i !== this.snapGrid && this.checkOverflow()
            }

            function L(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function I() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: s
                } = this;
                if (!s) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let a = this.maxTranslate() - this.minTranslate();
                (0 === a ? 0 : (this.translate - this.minTranslate()) / a) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }
            Object.keys(b).forEach(e => {
                Object.defineProperty(f.fn, e, {
                    value: b[e],
                    writable: !0
                })
            });
            let A = !1;

            function D() {}
            let N = (e, t) => {
                    let s = d(),
                        {
                            params: a,
                            touchEvents: i,
                            el: l,
                            wrapperEl: r,
                            device: n,
                            support: o
                        } = e,
                        p = !!a.nested,
                        h = "on" === t ? "addEventListener" : "removeEventListener";
                    if (o.touch) {
                        let t = "touchstart" === i.start && !!o.passiveListener && !!a.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        l[h](i.start, e.onTouchStart, t), l[h](i.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: p
                        } : p), l[h](i.end, e.onTouchEnd, t), i.cancel && l[h](i.cancel, e.onTouchEnd, t)
                    } else l[h](i.start, e.onTouchStart, !1), s[h](i.move, e.onTouchMove, p), s[h](i.end, e.onTouchEnd, !1);
                    (a.preventClicks || a.preventClicksPropagation) && l[h]("click", e.onClick, !0), a.cssMode && r[h]("scroll", e.onScroll), a.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0)
                },
                H = (e, t) => e.grid && t.grid && t.grid.rows > 1,
                B = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "wrapper",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    resizeObserver: !0,
                    nested: !1,
                    createElements: !1,
                    enabled: !0,
                    focusableElements: "input, select, option, textarea, button, video, label",
                    width: null,
                    height: null,
                    preventInteractionOnTransition: !1,
                    userAgent: null,
                    url: null,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsBase: "window",
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    slidesPerGroupAuto: !1,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopedSlidesLimit: !0,
                    loopFillGroupWithBlank: !1,
                    loopPreventsSlide: !0,
                    rewind: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    maxBackfaceHiddenSlides: 10,
                    containerModifierClass: "swiper-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0,
                    _emitClasses: !1
                },
                X = {
                    eventsEmitter: {
                        on(e, t, s) {
                            let a = this;
                            if (!a.eventsListeners || a.destroyed || "function" != typeof t) return a;
                            let i = s ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
                            }), a
                        },
                        once(e, t, s) {
                            let a = this;
                            if (!a.eventsListeners || a.destroyed || "function" != typeof t) return a;

                            function i() {
                                for (var s = arguments.length, l = Array(s), r = 0; r < s; r++) l[r] = arguments[r];
                                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, l)
                            }
                            return i.__emitterProxy = t, a.on(e, i, s)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let s = this;
                            return s.eventsListeners && !s.destroyed && s.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i) => {
                                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                                })
                            }), s
                        },
                        emit() {
                            let e, t, s;
                            for (var a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                            let r = this;
                            return r.eventsListeners && !r.destroyed && r.eventsListeners && ("string" == typeof i[0] || Array.isArray(i[0]) ? (e = i[0], t = i.slice(1, i.length), s = r) : (e = i[0].events, t = i[0].data, s = i[0].context || r), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(a => {
                                    a.apply(s, [e, ...t])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, t)
                                })
                            })), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t, s = this.$el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : s[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : s[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), t = t - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e, t = this;

                            function s(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function a(e, t) {
                                return parseFloat(e.getPropertyValue(s(t)) || 0)
                            }
                            let i = t.params,
                                {
                                    $wrapperEl: l,
                                    size: r,
                                    rtlTranslate: n,
                                    wrongRTL: o
                                } = t,
                                d = t.virtual && i.virtual.enabled,
                                p = d ? t.virtual.slides.length : t.slides.length,
                                h = l.children(`.${t.params.slideClass}`),
                                c = d ? t.virtual.slides.length : h.length,
                                u = [],
                                m = [],
                                f = [],
                                g = i.slidesOffsetBefore;
                            "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
                            let v = i.slidesOffsetAfter;
                            "function" == typeof v && (v = i.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                y = i.spaceBetween,
                                x = -g,
                                C = 0,
                                E = 0;
                            if (void 0 === r) return;
                            "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), t.virtualSize = -y, n ? h.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : h.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), i.centeredSlides && i.cssMode && (T(t.wrapperEl, "--swiper-centered-offset-before", ""), T(t.wrapperEl, "--swiper-centered-offset-after", ""));
                            let $ = i.grid && i.grid.rows > 1 && t.grid;
                            $ && t.grid.initSlides(c);
                            let S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let l = 0; l < c; l += 1) {
                                e = 0;
                                let n = h.eq(l);
                                if ($ && t.grid.updateSlide(l, n, c, s), "none" !== n.css("display")) {
                                    if ("auto" === i.slidesPerView) {
                                        S && (h[l].style[s("width")] = "");
                                        let r = getComputedStyle(n[0]),
                                            o = n[0].style.transform,
                                            d = n[0].style.webkitTransform;
                                        if (o && (n[0].style.transform = "none"), d && (n[0].style.webkitTransform = "none"), i.roundLengths) e = t.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                        else {
                                            let t = a(r, "width"),
                                                s = a(r, "padding-left"),
                                                i = a(r, "padding-right"),
                                                l = a(r, "margin-left"),
                                                o = a(r, "margin-right"),
                                                d = r.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + l + o;
                                            else {
                                                let {
                                                    clientWidth: a,
                                                    offsetWidth: r
                                                } = n[0];
                                                e = t + s + i + l + o + (r - a)
                                            }
                                        }
                                        o && (n[0].style.transform = o), d && (n[0].style.webkitTransform = d), i.roundLengths && (e = Math.floor(e))
                                    } else e = (r - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (e = Math.floor(e)), h[l] && (h[l].style[s("width")] = `${e}px`);
                                    h[l] && (h[l].swiperSlideSize = e), f.push(e), i.centeredSlides ? (x = x + e / 2 + C / 2 + y, 0 === C && 0 !== l && (x = x - r / 2 - y), 0 === l && (x = x - r / 2 - y), .001 > Math.abs(x) && (x = 0), i.roundLengths && (x = Math.floor(x)), E % i.slidesPerGroup == 0 && u.push(x), m.push(x)) : (i.roundLengths && (x = Math.floor(x)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && u.push(x), m.push(x), x = x + e + y), t.virtualSize += e + y, C = e, E += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, r) + v, n && o && ("slide" === i.effect || "coverflow" === i.effect) && l.css({
                                    width: `${t.virtualSize+i.spaceBetween}px`
                                }), i.setWrapperSize && l.css({
                                    [s("width")]: `${t.virtualSize+i.spaceBetween}px`
                                }), $ && t.grid.updateWrapperSize(e, u, s), !i.centeredSlides) {
                                let e = [];
                                for (let s = 0; s < u.length; s += 1) {
                                    let a = u[s];
                                    i.roundLengths && (a = Math.floor(a)), u[s] <= t.virtualSize - r && e.push(a)
                                }
                                u = e, Math.floor(t.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(t.virtualSize - r)
                            }
                            if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
                                let e = t.isHorizontal() && n ? "marginLeft" : s("marginRight");
                                h.filter((e, t) => !i.cssMode || t !== h.length - 1).css({
                                    [e]: `${y}px`
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                f.forEach(t => {
                                    e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                });
                                let t = (e -= i.spaceBetween) - r;
                                u = u.map(e => e < 0 ? -g : e > t ? t + v : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (f.forEach(t => {
                                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                                    }), (e -= i.spaceBetween) < r) {
                                    let t = (r - e) / 2;
                                    u.forEach((e, s) => {
                                        u[s] = e - t
                                    }), m.forEach((e, s) => {
                                        m[s] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: h,
                                    snapGrid: u,
                                    slidesGrid: m,
                                    slidesSizesGrid: f
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                T(t.wrapperEl, "--swiper-centered-offset-before", `${-u[0]}px`), T(t.wrapperEl, "--swiper-centered-offset-after", `${t.size/2-f[f.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    s = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + s)
                            }
                            if (c !== p && t.emit("slidesLengthChange"), u.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !d && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                                let e = `${i.containerModifierClass}backface-hidden`,
                                    s = t.$el.hasClass(e);
                                c <= i.maxBackfaceHiddenSlides ? s || t.$el.addClass(e) : s && t.$el.removeClass(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t, s = this,
                                a = [],
                                i = s.virtual && s.params.virtual.enabled,
                                l = 0;
                            "number" == typeof e ? s.setTransition(e) : !0 === e && s.setTransition(s.params.speed);
                            let r = e => i ? s.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : s.slides.eq(e)[0];
                            if ("auto" !== s.params.slidesPerView && s.params.slidesPerView > 1)
                                if (s.params.centeredSlides)(s.visibleSlides || f([])).each(e => {
                                    a.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(s.params.slidesPerView); t += 1) {
                                        let e = s.activeIndex + t;
                                        if (e > s.slides.length && !i) break;
                                        a.push(r(e))
                                    } else a.push(r(s.activeIndex));
                            for (t = 0; t < a.length; t += 1)
                                if (void 0 !== a[t]) {
                                    let e = a[t].offsetHeight;
                                    l = e > l ? e : l
                                }(l || 0 === l) && s.$wrapperEl.css("height", `${l}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                                t = this.params,
                                {
                                    slides: s,
                                    rtlTranslate: a,
                                    snapGrid: i
                                } = this;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
                            let l = -e;
                            a && (l = e), s.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            for (let e = 0; e < s.length; e += 1) {
                                let r = s[e],
                                    n = r.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (n -= s[0].swiperSlideOffset);
                                let o = (l + (t.centeredSlides ? this.minTranslate() : 0) - n) / (r.swiperSlideSize + t.spaceBetween),
                                    d = (l - i[0] + (t.centeredSlides ? this.minTranslate() : 0) - n) / (r.swiperSlideSize + t.spaceBetween),
                                    p = -(l - n),
                                    h = p + this.slidesSizesGrid[e];
                                (p >= 0 && p < this.size - 1 || h > 1 && h <= this.size || p <= 0 && h >= this.size) && (this.visibleSlides.push(r), this.visibleSlidesIndexes.push(e), s.eq(e).addClass(t.slideVisibleClass)), r.progress = a ? -o : o, r.originalProgress = a ? -d : d
                            }
                            this.visibleSlides = f(this.visibleSlides)
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: a,
                                    isBeginning: i,
                                    isEnd: l
                                } = this,
                                r = i,
                                n = l;
                            0 === s ? (a = 0, i = !0, l = !0) : (i = (a = (e - this.minTranslate()) / s) <= 0, l = a >= 1), Object.assign(this, {
                                progress: a,
                                isBeginning: i,
                                isEnd: l
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), i && !r && this.emit("reachBeginning toEdge"), l && !n && this.emit("reachEnd toEdge"), (r && !i || n && !l) && this.emit("fromEdge"), this.emit("progress", a)
                        },
                        updateSlidesClasses: function() {
                            let e, {
                                    slides: t,
                                    params: s,
                                    $wrapperEl: a,
                                    activeIndex: i,
                                    realIndex: l
                                } = this,
                                r = this.virtual && s.virtual.enabled;
                            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), (e = r ? this.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)).addClass(s.slideActiveClass), s.loop && (e.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l}"]`).addClass(s.slideDuplicateActiveClass));
                            let n = e.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                            s.loop && 0 === n.length && (n = t.eq(0)).addClass(s.slideNextClass);
                            let o = e.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                            s.loop && 0 === o.length && (o = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (n.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, s = this.rtlTranslate ? this.translate : -this.translate,
                                {
                                    slidesGrid: a,
                                    snapGrid: i,
                                    params: l,
                                    activeIndex: r,
                                    realIndex: n,
                                    snapIndex: o
                                } = this,
                                d = e;
                            if (void 0 === d) {
                                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? d = e : s >= a[e] && s < a[e + 1] && (d = e + 1) : s >= a[e] && (d = e);
                                l.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                            }
                            if (i.indexOf(s) >= 0) t = i.indexOf(s);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, d);
                                t = e + Math.floor((d - e) / l.slidesPerGroup)
                            }
                            if (t >= i.length && (t = i.length - 1), d === r) {
                                t !== o && (this.snapIndex = t, this.emit("snapIndexChange"));
                                return
                            }
                            let p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                            Object.assign(this, {
                                snapIndex: t,
                                realIndex: p,
                                previousIndex: r,
                                activeIndex: d
                            }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), n !== p && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t, s = this.params,
                                a = f(e).closest(`.${s.slideClass}`)[0],
                                i = !1;
                            if (a) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === a) {
                                        i = !0, t = e;
                                        break
                                    }
                            }
                            if (a && i) this.clickedSlide = a, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(f(a).attr("data-swiper-slide-index"), 10) : this.clickedIndex = t;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                                {
                                    params: t,
                                    rtlTranslate: s,
                                    translate: a,
                                    $wrapperEl: i
                                } = this;
                            if (t.virtualTranslate) return s ? -a : a;
                            if (t.cssMode) return a;
                            let l = x(i[0], e);
                            return s && (l = -l), l || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: s,
                                params: a,
                                $wrapperEl: i,
                                wrapperEl: l,
                                progress: r
                            } = this, n = 0, o = 0;
                            this.isHorizontal() ? n = s ? -e : e : o = e, a.roundLengths && (n = Math.floor(n), o = Math.floor(o)), a.cssMode ? l[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -o : a.virtualTranslate || i.transform(`translate3d(${n}px, ${o}px, 0px)`), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : o;
                            let d = this.maxTranslate() - this.minTranslate();
                            (0 === d ? 0 : (e - this.minTranslate()) / d) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function() {
                            let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                                a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                                l = arguments.length > 4 ? arguments[4] : void 0,
                                r = this,
                                {
                                    params: n,
                                    wrapperEl: o
                                } = r;
                            if (r.animating && n.preventInteractionOnTransition) return !1;
                            let d = r.minTranslate(),
                                p = r.maxTranslate();
                            if (e = i && t > d ? d : i && t < p ? p : t, r.updateProgress(e), n.cssMode) {
                                let t = r.isHorizontal();
                                if (0 === s) o[t ? "scrollLeft" : "scrollTop"] = -e;
                                else {
                                    if (!r.support.smoothScroll) return $({
                                        swiper: r,
                                        targetPosition: -e,
                                        side: t ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [t ? "left" : "top"]: -e,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === s ? (r.setTransition(0), r.setTranslate(e), a && (r.emit("beforeTransitionStart", s, l), r.emit("transitionEnd"))) : (r.setTransition(s), r.setTranslate(e), a && (r.emit("beforeTransitionStart", s, l), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                                !r || r.destroyed || e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"))
                            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function() {
                            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                {
                                    params: s
                                } = this;
                            s.cssMode || (s.autoHeight && this.updateAutoHeight(), M({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function() {
                            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                {
                                    params: s
                                } = this;
                            this.animating = !1, s.cssMode || (this.setTransition(0), M({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function() {
                            let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                                a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                i = arguments.length > 3 ? arguments[3] : void 0,
                                l = arguments.length > 4 ? arguments[4] : void 0;
                            if ("number" != typeof t && "string" != typeof t) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
                            if ("string" == typeof t) {
                                let e = parseInt(t, 10);
                                if (!isFinite(e)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                                t = e
                            }
                            let r = this,
                                n = t;
                            n < 0 && (n = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: p,
                                previousIndex: h,
                                activeIndex: c,
                                rtlTranslate: u,
                                wrapperEl: m,
                                enabled: f
                            } = r;
                            if (r.animating && o.preventInteractionOnTransition || !f && !i && !l) return !1;
                            let g = Math.min(r.params.slidesPerGroupSkip, n),
                                v = g + Math.floor((n - g) / r.params.slidesPerGroup);
                            v >= d.length && (v = d.length - 1);
                            let b = -d[v];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < p.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        s = Math.floor(100 * p[e]),
                                        a = Math.floor(100 * p[e + 1]);
                                    void 0 !== p[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                                }
                            if (r.initialized && n !== c && (!r.allowSlideNext && b < r.translate && b < r.minTranslate() || !r.allowSlidePrev && b > r.translate && b > r.maxTranslate() && (c || 0) !== n)) return !1;
                            if (n !== (h || 0) && a && r.emit("beforeSlideChangeStart"), r.updateProgress(b), e = n > c ? "next" : n < c ? "prev" : "reset", u && -b === r.translate || !u && b === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(b), "reset" !== e && (r.transitionStart(a, e), r.transitionEnd(a, e)), !1;
                            if (o.cssMode) {
                                let e = r.isHorizontal(),
                                    t = u ? b : -b;
                                if (0 === s) {
                                    let s = r.virtual && r.params.virtual.enabled;
                                    s && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), m[e ? "scrollLeft" : "scrollTop"] = t, s && requestAnimationFrame(() => {
                                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!r.support.smoothScroll) return $({
                                        swiper: r,
                                        targetPosition: t,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: t,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return r.setTransition(s), r.setTranslate(b), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", s, i), r.transitionStart(a, e), 0 === s ? r.transitionEnd(a, e) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(t) {
                                !r || r.destroyed || t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(a, e))
                            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                                s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                a = arguments.length > 3 ? arguments[3] : void 0;
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10);
                                if (!isFinite(t)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = t
                            }
                            let i = e;
                            return this.params.loop && (i += this.loopedSlides), this.slideTo(i, t, s, a)
                        },
                        slideNext: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                s = arguments.length > 2 ? arguments[2] : void 0,
                                {
                                    animating: a,
                                    enabled: i,
                                    params: l
                                } = this;
                            if (!i) return this;
                            let r = l.slidesPerGroup;
                            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (r = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                            let n = this.activeIndex < l.slidesPerGroupSkip ? 1 : r;
                            if (l.loop) {
                                if (a && l.loopPreventsSlide) return !1;
                                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                            }
                            return l.rewind && this.isEnd ? this.slideTo(0, e, t, s) : this.slideTo(this.activeIndex + n, e, t, s)
                        },
                        slidePrev: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                s = arguments.length > 2 ? arguments[2] : void 0,
                                {
                                    params: a,
                                    animating: i,
                                    snapGrid: l,
                                    slidesGrid: r,
                                    rtlTranslate: n,
                                    enabled: o
                                } = this;
                            if (!o) return this;
                            if (a.loop) {
                                if (i && a.loopPreventsSlide) return !1;
                                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                            }

                            function d(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let p = d(n ? this.translate : -this.translate),
                                h = l.map(e => d(e)),
                                c = l[h.indexOf(p) - 1];
                            if (void 0 === c && a.cssMode) {
                                let e;
                                l.forEach((t, s) => {
                                    p >= t && (e = s)
                                }), void 0 !== e && (c = l[e > 0 ? e - 1 : e])
                            }
                            let u = 0;
                            if (void 0 !== c && ((u = r.indexOf(c)) < 0 && (u = this.activeIndex - 1), "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (u = Math.max(u = u - this.slidesPerViewDynamic("previous", !0) + 1, 0))), a.rewind && this.isBeginning) {
                                let a = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                                return this.slideTo(a, e, t, s)
                            }
                            return this.slideTo(u, e, t, s)
                        },
                        slideReset: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                s = arguments.length > 2 ? arguments[2] : void 0;
                            return this.slideTo(this.activeIndex, e, t, s)
                        },
                        slideToClosest: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                s = arguments.length > 2 ? arguments[2] : void 0,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                                i = this.activeIndex,
                                l = Math.min(this.params.slidesPerGroupSkip, i),
                                r = l + Math.floor((i - l) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[r]) {
                                let e = this.snapGrid[r];
                                n - e > (this.snapGrid[r + 1] - e) * a && (i += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[r - 1];
                                n - e <= (this.snapGrid[r] - e) * a && (i -= this.params.slidesPerGroup)
                            }
                            return i = Math.min(i = Math.max(i, 0), this.slidesGrid.length - 1), this.slideTo(i, e, t, s)
                        },
                        slideToClickedSlide: function() {
                            let e, t = this,
                                {
                                    params: s,
                                    $wrapperEl: a
                                } = t,
                                i = "auto" === s.slidesPerView ? t.slidesPerViewDynamic() : s.slidesPerView,
                                l = t.clickedIndex;
                            if (s.loop) {
                                if (t.animating) return;
                                e = parseInt(f(t.clickedSlide).attr("data-swiper-slide-index"), 10), s.centeredSlides ? l < t.loopedSlides - i / 2 || l > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), l = a.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`).eq(0).index(), w(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l) : l > t.slides.length - i ? (t.loopFix(), l = a.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]:not(.${s.slideDuplicateClass})`).eq(0).index(), w(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l)
                            } else t.slideTo(l)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = d(),
                                {
                                    params: t,
                                    $wrapperEl: s
                                } = this,
                                a = s.children().length > 0 ? f(s.children()[0].parentNode) : s;
                            a.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
                            let i = a.children(`.${t.slideClass}`);
                            if (t.loopFillGroupWithBlank) {
                                let s = t.slidesPerGroup - i.length % t.slidesPerGroup;
                                if (s !== t.slidesPerGroup) {
                                    for (let i = 0; i < s; i += 1) {
                                        let s = f(e.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                                        a.append(s)
                                    }
                                    i = a.children(`.${t.slideClass}`)
                                }
                            }
                            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length), this.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), this.loopedSlides += t.loopAdditionalSlides, this.loopedSlides > i.length && this.params.loopedSlidesLimit && (this.loopedSlides = i.length);
                            let l = [],
                                r = [];
                            i.each((e, t) => {
                                f(e).attr("data-swiper-slide-index", t)
                            });
                            for (let e = 0; e < this.loopedSlides; e += 1) {
                                let t = e - Math.floor(e / i.length) * i.length;
                                r.push(i.eq(t)[0]), l.unshift(i.eq(i.length - t - 1)[0])
                            }
                            for (let e = 0; e < r.length; e += 1) a.append(f(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
                            for (let e = l.length - 1; e >= 0; e -= 1) a.prepend(f(l[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e;
                            this.emit("beforeLoopFix");
                            let {
                                activeIndex: t,
                                slides: s,
                                loopedSlides: a,
                                allowSlidePrev: i,
                                allowSlideNext: l,
                                snapGrid: r,
                                rtlTranslate: n
                            } = this;
                            this.allowSlidePrev = !0, this.allowSlideNext = !0;
                            let o = -r[t] - this.getTranslate();
                            t < a ? (e = s.length - 3 * a + t + a, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((n ? -this.translate : this.translate) - o)) : t >= s.length - a && (e = -s.length + t + a + a, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((n ? -this.translate : this.translate) - o)), this.allowSlidePrev = i, this.allowSlideNext = l, this.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: s
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = d(),
                                {
                                    params: t,
                                    support: s
                                } = this;
                            this.onTouchStart = k.bind(this), this.onTouchMove = P.bind(this), this.onTouchEnd = z.bind(this), t.cssMode && (this.onScroll = I.bind(this)), this.onClick = L.bind(this), s.touch && !A && (e.addEventListener("touchstart", D), A = !0), N(this, "on")
                        },
                        detachEvents: function() {
                            N(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: s,
                                    loopedSlides: a = 0,
                                    params: i,
                                    $el: l
                                } = e,
                                r = i.breakpoints;
                            if (!r || r && 0 === Object.keys(r).length) return;
                            let n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                            if (!n || e.currentBreakpoint === n) return;
                            let o = (n in r ? r[n] : void 0) || e.originalParams,
                                d = H(e, i),
                                p = H(e, o),
                                h = i.enabled;
                            d && !p ? (l.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && p && (l.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && l.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let s = i[t] && i[t].enabled,
                                    a = o[t] && o[t].enabled;
                                s && !a && e[t].disable(), !s && a && e[t].enable()
                            });
                            let c = o.direction && o.direction !== i.direction,
                                u = i.loop && (o.slidesPerView !== i.slidesPerView || c);
                            c && s && e.changeDirection(), E(e.params, o);
                            let m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", o), u && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "window",
                                s = arguments.length > 2 ? arguments[2] : void 0;
                            if (!e || "container" === t && !s) return;
                            let a = !1,
                                i = h(),
                                l = "window" === t ? i.innerHeight : s.clientHeight,
                                r = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: l * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < r.length; e += 1) {
                                let {
                                    point: l,
                                    value: n
                                } = r[e];
                                "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = l) : n <= s.clientWidth && (a = l)
                            }
                            return a || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: s
                            } = t;
                            if (s) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * s;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var e, t;
                            let s, {
                                    classNames: a,
                                    params: i,
                                    rtl: l,
                                    $el: r,
                                    device: n,
                                    support: o
                                } = this,
                                d = (e = ["initialized", i.direction, {
                                    "pointer-events": !o.touch
                                }, {
                                    "free-mode": this.params.freeMode && i.freeMode.enabled
                                }, {
                                    autoheight: i.autoHeight
                                }, {
                                    rtl: l
                                }, {
                                    grid: i.grid && i.grid.rows > 1
                                }, {
                                    "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                                }, {
                                    android: n.android
                                }, {
                                    ios: n.ios
                                }, {
                                    "css-mode": i.cssMode
                                }, {
                                    centered: i.cssMode && i.centeredSlides
                                }, {
                                    "watch-progress": i.watchSlidesProgress
                                }], t = i.containerModifierClass, s = [], e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(a => {
                                        e[a] && s.push(t + a)
                                    }) : "string" == typeof e && s.push(t + e)
                                }), s);
                            a.push(...d), r.addClass([...a].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, s, a, i, l) {
                            let r, n = h();

                            function o() {
                                l && l()
                            }
                            f(e).parent("picture")[0] || e.complete && i ? o() : t ? ((r = new n.Image).onload = o, r.onerror = o, a && (r.sizes = a), s && (r.srcset = s), t && (r.src = t)) : o()
                        },
                        preloadImages: function() {
                            let e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                let a = e.imagesToLoad[s];
                                e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Y = {};
            class G {
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let s = this.minTranslate(),
                        a = (this.maxTranslate() - s) * e + s;
                    this.translateTo(a, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each(s => {
                        let a = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: a
                        }), e.emit("_slideClass", s, a)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "current",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            params: s,
                            slides: a,
                            slidesGrid: i,
                            slidesSizesGrid: l,
                            size: r,
                            activeIndex: n
                        } = this,
                        o = 1;
                    if (s.centeredSlides) {
                        let e, t = a[n].swiperSlideSize;
                        for (let s = n + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > r && (e = !0));
                        for (let s = n - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > r && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < a.length; e += 1)(t ? i[e] + l[e] - i[n] < r : i[e] - i[n] < r) && (o += 1);
                    else
                        for (let e = n - 1; e >= 0; e -= 1) i[n] - i[e] < r && (o += 1);
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: s
                    } = e;

                    function a() {
                        let t = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || a(), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = this.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass(`${this.params.containerModifierClass}${s}`).addClass(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.$el.addClass(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.$el.removeClass(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let s = f(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    let a = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        i = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = f(e.shadowRoot.querySelector(a()));
                                return t.children = e => s.children(e), t
                            }
                            return s.children ? s.children(a()) : f(s).children(a())
                        })();
                    if (0 === i.length && t.params.createElements) {
                        let e = d().createElement("div");
                        i = f(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each(e => {
                            i.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display")
                    }), !0
                }
                init(e) {
                    return this.initialized || !1 === this.mount(e) || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.enabled && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit, !1, !0) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit, !1, !0), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit")), this
                }
                destroy() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        s = this,
                        {
                            params: a,
                            $el: i,
                            $wrapperEl: l,
                            slides: r
                        } = s;
                    if (void 0 === s.params || s.destroyed) return null;
                    (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), l.removeAttr("style"), r && r.length && r.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
                        s.off(e)
                    }), !1 !== e) && (s.$el[0].swiper = null, Object.keys(s).forEach(e => {
                        try {
                            s[e] = null
                        } catch (e) {}
                        try {
                            delete s[e]
                        } catch (e) {}
                    }));
                    return s.destroyed = !0, null
                }
                static extendDefaults(e) {
                    E(Y, e)
                }
                static get extendedDefaults() {
                    return Y
                }
                static get defaults() {
                    return B
                }
                static installModule(e) {
                    G.prototype.__modules__ || (G.prototype.__modules__ = []);
                    let t = G.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => G.installModule(e)) : G.installModule(e), G
                }
                constructor(...e) {
                    let t, s;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = E({}, s), t && !s.el && (s.el = t), s.el && f(s.el).length > 1) {
                        const e = [];
                        return f(s.el).each(t => {
                            let a = E({}, s, {
                                el: t
                            });
                            e.push(new G(a))
                        }), e
                    }
                    const a = this;
                    a.__swiper__ = !0, a.support = S(), a.device = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return i || (i = function() {
                            let {
                                userAgent: e
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = S(), s = h(), a = s.navigator.platform, i = e || s.navigator.userAgent, l = {
                                ios: !1,
                                android: !1
                            }, r = s.screen.width, n = s.screen.height, o = i.match(/(Android);?[\s\/]+([\d.]+)?/), d = i.match(/(iPad).*OS\s([\d_]+)/), p = i.match(/(iPod)(.*OS\s([\d_]+))?/), c = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), u = "MacIntel" === a;
                            return !d && u && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${r}x${n}`) >= 0 && ((d = i.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), u = !1), o && "Win32" !== a && (l.os = "android", l.android = !0), (d || c || p) && (l.os = "ios", l.ios = !0), l
                        }(e)), i
                    }({
                        userAgent: s.userAgent
                    }), a.browser = function() {
                        let e, t;
                        return l || (l = {
                            isSafari: (t = (e = h()).navigator.userAgent.toLowerCase()).indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android"),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }), l
                    }(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
                    const r = {};
                    a.modules.forEach(e => {
                        var t;
                        e({
                            swiper: a,
                            extendParams: (t = s, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    s = Object.keys(e)[0],
                                    a = e[s];
                                "object" != typeof a || null === a || (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === t[s] && (t[s] = {
                                    auto: !0
                                }), s in t && "enabled" in a && (!0 === t[s] && (t[s] = {
                                    enabled: !0
                                }), "object" != typeof t[s] || "enabled" in t[s] || (t[s].enabled = !0), t[s] || (t[s] = {
                                    enabled: !1
                                }))), E(r, e)
                            }),
                            on: a.on.bind(a),
                            once: a.once.bind(a),
                            off: a.off.bind(a),
                            emit: a.emit.bind(a)
                        })
                    });
                    const n = E({}, B, r);
                    return a.params = E({}, n, Y, s), a.originalParams = E({}, a.params), a.passedParams = E({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach(e => {
                        a.on(e, a.params.on[e])
                    }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = f, Object.assign(a, {
                        enabled: a.params.enabled,
                        el: t,
                        classNames: [],
                        slides: f(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === a.params.direction,
                        isVertical: () => "vertical" === a.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: (a.touchEventsTouch = {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        }, a.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup"
                        }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: y(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.emit("_swiper"), a.params.init && a.init(), a
                }
            }
            Object.keys(X).forEach(e => {
                Object.keys(X[e]).forEach(t => {
                    G.prototype[t] = X[e][t]
                })
            }), G.use([function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: a
                } = e, i = h(), l = null, r = null, n = () => {
                    t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
                }, o = () => {
                    t && !t.destroyed && t.initialized && a("orientationchange")
                };
                s("init", () => {
                    t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (l = new ResizeObserver(e => {
                        r = i.requestAnimationFrame(() => {
                            let {
                                width: s,
                                height: a
                            } = t, i = s, l = a;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: a,
                                    target: r
                                } = e;
                                r && r !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, l = a ? a.height : (s[0] || s).blockSize)
                            }), (i !== s || l !== a) && n()
                        })
                    })).observe(t.el) : (i.addEventListener("resize", n), i.addEventListener("orientationchange", o))
                }), s("destroy", () => {
                    r && i.cancelAnimationFrame(r), l && l.unobserve && t.el && (l.unobserve(t.el), l = null), i.removeEventListener("resize", n), i.removeEventListener("orientationchange", o)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e, l = [], r = h(), n = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = new(r.MutationObserver || r.WebkitMutationObserver)(e => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            let t = function() {
                                i("observerUpdate", e[0])
                            };
                            r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                        });
                    s.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), l.push(s)
                };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), a("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) n(e[t])
                        }
                        n(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), n(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                }), a("destroy", () => {
                    l.forEach(e => {
                        e.disconnect()
                    }), l.splice(0, l.length)
                })
            }]);
            let R = G;

            function _(e) {
                let t, {
                    swiper: s,
                    extendParams: a,
                    on: i,
                    emit: l
                } = e;

                function r(e, t) {
                    let a = s.params.virtual;
                    if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
                    let i = a.renderSlide ? f(a.renderSlide.call(s, e, t)) : f(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
                }

                function n(e) {
                    let t, a, i, {
                            slidesPerView: n,
                            slidesPerGroup: o,
                            centeredSlides: d
                        } = s.params,
                        {
                            addSlidesBefore: p,
                            addSlidesAfter: h
                        } = s.params.virtual,
                        {
                            from: c,
                            to: u,
                            slides: m,
                            slidesGrid: f,
                            offset: g
                        } = s.virtual;
                    s.params.cssMode || s.updateActiveIndex();
                    let v = s.activeIndex || 0;
                    t = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", d ? (a = Math.floor(n / 2) + o + h, i = Math.floor(n / 2) + o + p) : (a = n + (o - 1) + h, i = o + p);
                    let b = Math.max((v || 0) - i, 0),
                        w = Math.min((v || 0) + a, m.length - 1),
                        y = (s.slidesGrid[b] || 0) - (s.slidesGrid[0] || 0);

                    function x() {
                        s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), l("virtualUpdate")
                    }
                    if (Object.assign(s.virtual, {
                            from: b,
                            to: w,
                            offset: y,
                            slidesGrid: s.slidesGrid
                        }), c === b && u === w && !e) {
                        s.slidesGrid !== f && y !== g && s.slides.css(t, `${y}px`), s.updateProgress(), l("virtualUpdate");
                        return
                    }
                    if (s.params.virtual.renderExternal) {
                        s.params.virtual.renderExternal.call(s, {
                            offset: y,
                            from: b,
                            to: w,
                            slides: function() {
                                let e = [];
                                for (let t = b; t <= w; t += 1) e.push(m[t]);
                                return e
                            }()
                        }), s.params.virtual.renderExternalUpdate ? x() : l("virtualUpdate");
                        return
                    }
                    let C = [],
                        E = [];
                    if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
                    else
                        for (let e = c; e <= u; e += 1)(e < b || e > w) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                    for (let t = 0; t < m.length; t += 1) t >= b && t <= w && (void 0 === u || e ? E.push(t) : (t > u && E.push(t), t < c && C.push(t)));
                    E.forEach(e => {
                        s.$wrapperEl.append(r(m[e], e))
                    }), C.sort((e, t) => t - e).forEach(e => {
                        s.$wrapperEl.prepend(r(m[e], e))
                    }), s.$wrapperEl.children(".swiper-slide").css(t, `${y}px`), x()
                }
                a({
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        renderExternalUpdate: !0,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                }), s.virtual = {
                    cache: {},
                    from: void 0,
                    to: void 0,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                }, i("beforeInit", () => {
                    s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || n())
                }), i("setTranslate", () => {
                    s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
                        n()
                    }, 100)) : n())
                }), i("init update resize", () => {
                    s.params.virtual.enabled && s.params.cssMode && T(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
                }), Object.assign(s.virtual, {
                    appendSlide: function(e) {
                        if ("object" == typeof e && "length" in e)
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                        else s.virtual.slides.push(e);
                        n(!0)
                    },
                    prependSlide: function(e) {
                        let t = s.activeIndex,
                            a = t + 1,
                            i = 1;
                        if (Array.isArray(e)) {
                            for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                            a = t + e.length, i = e.length
                        } else s.virtual.slides.unshift(e);
                        if (s.params.virtual.cache) {
                            let e = s.virtual.cache,
                                t = {};
                            Object.keys(e).forEach(s => {
                                let a = e[s],
                                    l = a.attr("data-swiper-slide-index");
                                l && a.attr("data-swiper-slide-index", parseInt(l, 10) + i), t[parseInt(s, 10) + i] = a
                            }), s.virtual.cache = t
                        }
                        n(!0), s.slideTo(a, 0)
                    },
                    removeSlide: function(e) {
                        if (null == e) return;
                        let t = s.activeIndex;
                        if (Array.isArray(e))
                            for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                        else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                        n(!0), s.slideTo(t, 0)
                    },
                    removeAllSlides: function() {
                        s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), n(!0), s.slideTo(0, 0)
                    },
                    update: n
                })
            }

            function q(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e, l = d(), r = h();

                function n(e) {
                    if (!t.enabled) return;
                    let {
                        rtlTranslate: s
                    } = t, a = e;
                    a.originalEvent && (a = a.originalEvent);
                    let n = a.keyCode || a.charCode,
                        o = t.params.keyboard.pageUpDown,
                        d = o && 33 === n,
                        p = o && 34 === n,
                        h = 37 === n,
                        c = 39 === n,
                        u = 38 === n,
                        m = 40 === n;
                    if (!t.allowSlideNext && (t.isHorizontal() && c || t.isVertical() && m || p) || !t.allowSlidePrev && (t.isHorizontal() && h || t.isVertical() && u || d)) return !1;
                    if (!a.shiftKey && !a.altKey && !a.ctrlKey && !a.metaKey && (!l.activeElement || !l.activeElement.nodeName || "input" !== l.activeElement.nodeName.toLowerCase() && "textarea" !== l.activeElement.nodeName.toLowerCase())) {
                        if (t.params.keyboard.onlyInViewport && (d || p || h || c || u || m)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            let a = t.$el,
                                i = a[0].clientWidth,
                                l = a[0].clientHeight,
                                n = r.innerWidth,
                                o = r.innerHeight,
                                d = t.$el.offset();
                            s && (d.left -= t.$el[0].scrollLeft);
                            let p = [
                                [d.left, d.top],
                                [d.left + i, d.top],
                                [d.left, d.top + l],
                                [d.left + i, d.top + l]
                            ];
                            for (let t = 0; t < p.length; t += 1) {
                                let s = p[t];
                                if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                                    if (0 === s[0] && 0 === s[1]) continue;
                                    e = !0
                                }
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((d || p || h || c) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((p || c) && !s || (d || h) && s) && t.slideNext(), ((d || h) && !s || (p || c) && s) && t.slidePrev()) : ((d || p || u || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (p || m) && t.slideNext(), (d || u) && t.slidePrev()), i("keyPress", n)
                    }
                }

                function o() {
                    t.keyboard.enabled || (f(l).on("keydown", n), t.keyboard.enabled = !0)
                }

                function p() {
                    t.keyboard.enabled && (f(l).off("keydown", n), t.keyboard.enabled = !1)
                }
                t.keyboard = {
                    enabled: !1
                }, s({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), a("init", () => {
                    t.params.keyboard.enabled && o()
                }), a("destroy", () => {
                    t.keyboard.enabled && p()
                }), Object.assign(t.keyboard, {
                    enable: o,
                    disable: p
                })
            }

            function j(e) {
                let t, s, {
                        swiper: a,
                        extendParams: i,
                        on: l,
                        emit: r
                    } = e,
                    n = h();
                i({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), a.mousewheel = {
                    enabled: !1
                };
                let o = y(),
                    d = [];

                function p() {
                    a.enabled && (a.mouseEntered = !0)
                }

                function c() {
                    a.enabled && (a.mouseEntered = !1)
                }

                function u(e) {
                    return !(a.params.mousewheel.thresholdDelta && e.delta < a.params.mousewheel.thresholdDelta || a.params.mousewheel.thresholdTime && y() - o < a.params.mousewheel.thresholdTime) && (!!(e.delta >= 6 && y() - o < 60) || (e.direction < 0 ? a.isEnd && !a.params.loop || a.animating || (a.slideNext(), r("scroll", e.raw)) : a.isBeginning && !a.params.loop || a.animating || (a.slidePrev(), r("scroll", e.raw)), o = new n.Date().getTime(), !1))
                }

                function m(e) {
                    var i;
                    let l, n, o, p, h = e;
                    if (!a.enabled) return;
                    let c = a.params.mousewheel;
                    a.params.cssMode && h.preventDefault();
                    let m = a.$el;
                    if ("container" !== a.params.mousewheel.eventsTarget && (m = f(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !m[0].contains(h.target) && !c.releaseOnEdges) return !0;
                    h.originalEvent && (h = h.originalEvent);
                    let g = 0,
                        v = a.rtlTranslate ? -1 : 1,
                        b = (l = 0, n = 0, o = 0, p = 0, "detail" in (i = h) && (n = i.detail), "wheelDelta" in i && (n = -i.wheelDelta / 120), "wheelDeltaY" in i && (n = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (l = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (l = n, n = 0), o = 10 * l, p = 10 * n, "deltaY" in i && (p = i.deltaY), "deltaX" in i && (o = i.deltaX), i.shiftKey && !o && (o = p, p = 0), (o || p) && i.deltaMode && (1 === i.deltaMode ? (o *= 40, p *= 40) : (o *= 800, p *= 800)), o && !l && (l = o < 1 ? -1 : 1), p && !n && (n = p < 1 ? -1 : 1), {
                            spinX: l,
                            spinY: n,
                            pixelX: o,
                            pixelY: p
                        });
                    if (c.forceToAxis)
                        if (a.isHorizontal())
                            if (!(Math.abs(b.pixelX) > Math.abs(b.pixelY))) return !0;
                            else g = -b.pixelX * v;
                    else {
                        if (!(Math.abs(b.pixelY) > Math.abs(b.pixelX))) return !0;
                        g = -b.pixelY
                    } else g = Math.abs(b.pixelX) > Math.abs(b.pixelY) ? -b.pixelX * v : -b.pixelY;
                    if (0 === g) return !0;
                    c.invert && (g = -g);
                    let x = a.getTranslate() + g * c.sensitivity;
                    if (x >= a.minTranslate() && (x = a.minTranslate()), x <= a.maxTranslate() && (x = a.maxTranslate()), (a.params.loop || x !== a.minTranslate() && x !== a.maxTranslate()) && a.params.nested && h.stopPropagation(), a.params.freeMode && a.params.freeMode.enabled) {
                        let e = {
                                time: y(),
                                delta: Math.abs(g),
                                direction: Math.sign(g)
                            },
                            i = s && e.time < s.time + 500 && e.delta <= s.delta && e.direction === s.direction;
                        if (!i) {
                            s = void 0, a.params.loop && a.loopFix();
                            let l = a.getTranslate() + g * c.sensitivity,
                                n = a.isBeginning,
                                o = a.isEnd;
                            if (l >= a.minTranslate() && (l = a.minTranslate()), l <= a.maxTranslate() && (l = a.maxTranslate()), a.setTransition(0), a.setTranslate(l), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!n && a.isBeginning || !o && a.isEnd) && a.updateSlidesClasses(), a.params.freeMode.sticky) {
                                clearTimeout(t), t = void 0, d.length >= 15 && d.shift();
                                let i = d.length ? d[d.length - 1] : void 0,
                                    l = d[0];
                                if (d.push(e), i && (e.delta > i.delta || e.direction !== i.direction)) d.splice(0);
                                else if (d.length >= 15 && e.time - l.time < 500 && l.delta - e.delta >= 1 && e.delta <= 6) {
                                    let i = g > 0 ? .8 : .2;
                                    s = e, d.splice(0), t = w(() => {
                                        a.slideToClosest(a.params.speed, !0, void 0, i)
                                    }, 0)
                                }
                                t || (t = w(() => {
                                    s = e, d.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5)
                                }, 500))
                            }
                            if (i || r("scroll", h), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), l === a.minTranslate() || l === a.maxTranslate()) return !0
                        }
                    } else {
                        let t = {
                            time: y(),
                            delta: Math.abs(g),
                            direction: Math.sign(g),
                            raw: e
                        };
                        d.length >= 2 && d.shift();
                        let s = d.length ? d[d.length - 1] : void 0;
                        if (d.push(t), s ? (t.direction !== s.direction || t.delta > s.delta || t.time > s.time + 150) && u(t) : u(t), function(e) {
                                let t = a.params.mousewheel;
                                if (e.direction < 0) {
                                    if (a.isEnd && !a.params.loop && t.releaseOnEdges) return !0
                                } else if (a.isBeginning && !a.params.loop && t.releaseOnEdges) return !0;
                                return !1
                            }(t)) return !0
                    }
                    return h.preventDefault ? h.preventDefault() : h.returnValue = !1, !1
                }

                function g(e) {
                    let t = a.$el;
                    "container" !== a.params.mousewheel.eventsTarget && (t = f(a.params.mousewheel.eventsTarget)), t[e]("mouseenter", p), t[e]("mouseleave", c), t[e]("wheel", m)
                }

                function v() {
                    return a.params.cssMode ? (a.wrapperEl.removeEventListener("wheel", m), !0) : !a.mousewheel.enabled && (g("on"), a.mousewheel.enabled = !0, !0)
                }

                function b() {
                    return a.params.cssMode ? (a.wrapperEl.addEventListener(event, m), !0) : !!a.mousewheel.enabled && (g("off"), a.mousewheel.enabled = !1, !0)
                }
                l("init", () => {
                    !a.params.mousewheel.enabled && a.params.cssMode && b(), a.params.mousewheel.enabled && v()
                }), l("destroy", () => {
                    a.params.cssMode && v(), a.mousewheel.enabled && b()
                }), Object.assign(a.mousewheel, {
                    enable: v,
                    disable: b
                })
            }

            function W(e, t, s, a) {
                let i = d();
                return e.params.createElements && Object.keys(a).forEach(l => {
                    if (!s[l] && !0 === s.auto) {
                        let r = e.$el.children(`.${a[l]}`)[0];
                        r || ((r = i.createElement("div")).className = a[l], e.$el.append(r)), s[l] = r, t[l] = r
                    }
                }), s
            }

            function V(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;

                function l(e) {
                    let s;
                    return e && (s = f(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
                }

                function r(e, s) {
                    let a = t.params.navigation;
                    e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
                }

                function n() {
                    if (t.params.loop) return;
                    let {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    r(s, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind)
                }

                function o(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
                }

                function d(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
                }

                function p() {
                    let e = t.params.navigation;
                    if (t.params.navigation = W(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(e.nextEl || e.prevEl)) return;
                    let s = l(e.nextEl),
                        a = l(e.prevEl);
                    s && s.length > 0 && s.on("click", d), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: a,
                        prevEl: a && a[0]
                    }), !t.enabled && (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
                }

                function h() {
                    let {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
                }
                s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, a("init", () => {
                    !1 === t.params.navigation.enabled ? c() : (p(), n())
                }), a("toEdge fromEdge lock unlock", () => {
                    n()
                }), a("destroy", () => {
                    h()
                }), a("enable disable", () => {
                    let {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                }), a("click", (e, s) => {
                    let {
                        $nextEl: a,
                        $prevEl: l
                    } = t.navigation, r = s.target;
                    if (t.params.navigation.hideOnClick && !f(r).is(l) && !f(r).is(a)) {
                        let e;
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                        a ? e = a.hasClass(t.params.navigation.hiddenClass) : l && (e = l.hasClass(t.params.navigation.hiddenClass)), !0 === e ? i("navigationShow") : i("navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), l && l.toggleClass(t.params.navigation.hiddenClass)
                    }
                });
                let c = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), h()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), n()
                    },
                    disable: c,
                    update: n,
                    init: p,
                    destroy: h
                })
            }

            function F() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function U(e) {
                let t, {
                        swiper: s,
                        extendParams: a,
                        on: i,
                        emit: l
                    } = e,
                    r = "swiper-pagination";
                a({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`
                    }
                }), s.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let n = 0;

                function o() {
                    return !s.params.pagination.el || !s.pagination.el || !s.pagination.$el || 0 === s.pagination.$el.length
                }

                function d(e, t) {
                    let {
                        bulletActiveClass: a
                    } = s.params.pagination;
                    e[t]().addClass(`${a}-${t}`)[t]().addClass(`${a}-${t}-${t}`)
                }

                function p() {
                    let e, a = s.rtl,
                        i = s.params.pagination;
                    if (o()) return;
                    let r = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : s.slides.length,
                        p = s.pagination.$el,
                        h = s.params.loop ? Math.ceil((r - 2 * s.loopedSlides) / s.params.slidesPerGroup) : s.snapGrid.length;
                    if (s.params.loop ? ((e = Math.ceil((s.activeIndex - s.loopedSlides) / s.params.slidesPerGroup)) > r - 1 - 2 * s.loopedSlides && (e -= r - 2 * s.loopedSlides), e > h - 1 && (e -= h), e < 0 && "bullets" !== s.params.paginationType && (e = h + e)) : e = void 0 !== s.snapIndex ? s.snapIndex : s.activeIndex || 0, "bullets" === i.type && s.pagination.bullets && s.pagination.bullets.length > 0) {
                        let l, r, o, h = s.pagination.bullets;
                        if (i.dynamicBullets && (t = h.eq(0)[s.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(s.isHorizontal() ? "width" : "height", `${t*(i.dynamicMainBullets+4)}px`), i.dynamicMainBullets > 1 && void 0 !== s.previousIndex && ((n += e - (s.previousIndex - s.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? n = i.dynamicMainBullets - 1 : n < 0 && (n = 0)), o = ((r = (l = Math.max(e - n, 0)) + (Math.min(h.length, i.dynamicMainBullets) - 1)) + l) / 2), h.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${i.bulletActiveClass}${e}`).join(" ")), p.length > 1) h.each(t => {
                            let s = f(t),
                                a = s.index();
                            a === e && s.addClass(i.bulletActiveClass), i.dynamicBullets && (a >= l && a <= r && s.addClass(`${i.bulletActiveClass}-main`), a === l && d(s, "prev"), a === r && d(s, "next"))
                        });
                        else {
                            let t = h.eq(e),
                                a = t.index();
                            if (t.addClass(i.bulletActiveClass), i.dynamicBullets) {
                                let e = h.eq(l),
                                    t = h.eq(r);
                                for (let e = l; e <= r; e += 1) h.eq(e).addClass(`${i.bulletActiveClass}-main`);
                                if (s.params.loop)
                                    if (a >= h.length) {
                                        for (let e = i.dynamicMainBullets; e >= 0; e -= 1) h.eq(h.length - e).addClass(`${i.bulletActiveClass}-main`);
                                        h.eq(h.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                                    } else d(e, "prev"), d(t, "next");
                                else d(e, "prev"), d(t, "next")
                            }
                        }
                        if (i.dynamicBullets) {
                            let e = Math.min(h.length, i.dynamicMainBullets + 4),
                                l = (t * e - t) / 2 - o * t;
                            h.css(s.isHorizontal() ? a ? "right" : "left" : "top", `${l}px`)
                        }
                    }
                    if ("fraction" === i.type && (p.find(F(i.currentClass)).text(i.formatFractionCurrent(e + 1)), p.find(F(i.totalClass)).text(i.formatFractionTotal(h))), "progressbar" === i.type) {
                        let t;
                        t = i.progressbarOpposite ? s.isHorizontal() ? "vertical" : "horizontal" : s.isHorizontal() ? "horizontal" : "vertical";
                        let a = (e + 1) / h,
                            l = 1,
                            r = 1;
                        "horizontal" === t ? l = a : r = a, p.find(F(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${l}) scaleY(${r})`).transition(s.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (p.html(i.renderCustom(s, e + 1, h)), l("paginationRender", p[0])) : l("paginationUpdate", p[0]), s.params.watchOverflow && s.enabled && p[s.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }

                function h() {
                    let e = s.params.pagination;
                    if (o()) return;
                    let t = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : s.slides.length,
                        a = s.pagination.$el,
                        i = "";
                    if ("bullets" === e.type) {
                        let l = s.params.loop ? Math.ceil((t - 2 * s.loopedSlides) / s.params.slidesPerGroup) : s.snapGrid.length;
                        s.params.freeMode && s.params.freeMode.enabled && !s.params.loop && l > t && (l = t);
                        for (let t = 0; t < l; t += 1) e.renderBullet ? i += e.renderBullet.call(s, t, e.bulletClass) : i += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                        a.html(i), s.pagination.bullets = a.find(F(e.bulletClass))
                    }
                    "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(s, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(i)), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(s, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(i)), "custom" !== e.type && l("paginationRender", s.pagination.$el[0])
                }

                function c() {
                    s.params.pagination = W(s, s.originalParams.pagination, s.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let e = s.params.pagination;
                    if (!e.el) return;
                    let t = f(e.el);
                    0 !== t.length && (s.params.uniqueNavElements && "string" == typeof e.el && t.length > 1 && (t = s.$el.find(e.el)).length > 1 && (t = t.filter(e => f(e).parents(".swiper")[0] === s.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), t.addClass(s.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.addClass(`${e.modifierClass}${e.type}-dynamic`), n = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", F(e.bulletClass), function(e) {
                        e.preventDefault();
                        let t = f(this).index() * s.params.slidesPerGroup;
                        s.params.loop && (t += s.loopedSlides), s.slideTo(t)
                    }), Object.assign(s.pagination, {
                        $el: t,
                        el: t[0]
                    }), s.enabled || t.addClass(e.lockClass))
                }

                function u() {
                    let e = s.params.pagination;
                    if (o()) return;
                    let t = s.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), t.removeClass(s.isHorizontal() ? e.horizontalClass : e.verticalClass), s.pagination.bullets && s.pagination.bullets.removeClass && s.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", F(e.bulletClass))
                }
                i("init", () => {
                    !1 === s.params.pagination.enabled ? m() : (c(), h(), p())
                }), i("activeIndexChange", () => {
                    s.params.loop ? p() : void 0 === s.snapIndex && p()
                }), i("snapIndexChange", () => {
                    s.params.loop || p()
                }), i("slidesLengthChange", () => {
                    s.params.loop && (h(), p())
                }), i("snapGridLengthChange", () => {
                    s.params.loop || (h(), p())
                }), i("destroy", () => {
                    u()
                }), i("enable disable", () => {
                    let {
                        $el: e
                    } = s.pagination;
                    e && e[s.enabled ? "removeClass" : "addClass"](s.params.pagination.lockClass)
                }), i("lock unlock", () => {
                    p()
                }), i("click", (e, t) => {
                    let a = t.target,
                        {
                            $el: i
                        } = s.pagination;
                    if (s.params.pagination.el && s.params.pagination.hideOnClick && i && i.length > 0 && !f(a).hasClass(s.params.pagination.bulletClass)) {
                        if (s.navigation && (s.navigation.nextEl && a === s.navigation.nextEl || s.navigation.prevEl && a === s.navigation.prevEl)) return;
                        !0 === i.hasClass(s.params.pagination.hiddenClass) ? l("paginationShow") : l("paginationHide"), i.toggleClass(s.params.pagination.hiddenClass)
                    }
                });
                let m = () => {
                    s.$el.addClass(s.params.pagination.paginationDisabledClass), s.pagination.$el && s.pagination.$el.addClass(s.params.pagination.paginationDisabledClass), u()
                };
                Object.assign(s.pagination, {
                    enable: () => {
                        s.$el.removeClass(s.params.pagination.paginationDisabledClass), s.pagination.$el && s.pagination.$el.removeClass(s.params.pagination.paginationDisabledClass), c(), h(), p()
                    },
                    disable: m,
                    render: h,
                    update: p,
                    init: c,
                    destroy: u
                })
            }

            function K(e) {
                let t, s, a, i, {
                        swiper: l,
                        extendParams: r,
                        on: n,
                        emit: o
                    } = e,
                    p = d(),
                    h = !1,
                    c = null,
                    u = null;

                function m() {
                    if (!l.params.scrollbar.el || !l.scrollbar.el) return;
                    let {
                        scrollbar: e,
                        rtlTranslate: t,
                        progress: i
                    } = l, {
                        $dragEl: r,
                        $el: n
                    } = e, o = l.params.scrollbar, d = s, p = (a - s) * i;
                    t ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > a && (d = a + p) : p < 0 ? (d = s + p, p = 0) : p + s > a && (d = a - p), l.isHorizontal() ? (r.transform(`translate3d(${p}px, 0, 0)`), r[0].style.width = `${d}px`) : (r.transform(`translate3d(0px, ${p}px, 0)`), r[0].style.height = `${d}px`), o.hide && (clearTimeout(c), n[0].style.opacity = 1, c = setTimeout(() => {
                        n[0].style.opacity = 0, n.transition(400)
                    }, 1e3))
                }

                function g() {
                    if (!l.params.scrollbar.el || !l.scrollbar.el) return;
                    let {
                        scrollbar: e
                    } = l, {
                        $dragEl: t,
                        $el: r
                    } = e;
                    t[0].style.width = "", t[0].style.height = "", a = l.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight, i = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), s = "auto" === l.params.scrollbar.dragSize ? a * i : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? t[0].style.width = `${s}px` : t[0].style.height = `${s}px`, i >= 1 ? r[0].style.display = "none" : r[0].style.display = "", l.params.scrollbar.hide && (r[0].style.opacity = 0), l.params.watchOverflow && l.enabled && e.$el[l.isLocked ? "addClass" : "removeClass"](l.params.scrollbar.lockClass)
                }

                function v(e) {
                    return l.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                }

                function b(e) {
                    let i, {
                            scrollbar: r,
                            rtlTranslate: n
                        } = l,
                        {
                            $el: o
                        } = r;
                    i = Math.max(Math.min(i = (v(e) - o.offset()[l.isHorizontal() ? "left" : "top"] - (null !== t ? t : s / 2)) / (a - s), 1), 0), n && (i = 1 - i);
                    let d = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * i;
                    l.updateProgress(d), l.setTranslate(d), l.updateActiveIndex(), l.updateSlidesClasses()
                }

                function y(e) {
                    let s = l.params.scrollbar,
                        {
                            scrollbar: a,
                            $wrapperEl: i
                        } = l,
                        {
                            $el: r,
                            $dragEl: n
                        } = a;
                    h = !0, t = e.target === n[0] || e.target === n ? v(e) - e.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), n.transition(100), b(e), clearTimeout(u), r.transition(0), s.hide && r.css("opacity", 1), l.params.cssMode && l.$wrapperEl.css("scroll-snap-type", "none"), o("scrollbarDragStart", e)
                }

                function x(e) {
                    let {
                        scrollbar: t,
                        $wrapperEl: s
                    } = l, {
                        $el: a,
                        $dragEl: i
                    } = t;
                    h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), s.transition(0), a.transition(0), i.transition(0), o("scrollbarDragMove", e))
                }

                function C(e) {
                    let t = l.params.scrollbar,
                        {
                            scrollbar: s,
                            $wrapperEl: a
                        } = l,
                        {
                            $el: i
                        } = s;
                    h && (h = !1, l.params.cssMode && (l.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), t.hide && (clearTimeout(u), u = w(() => {
                        i.css("opacity", 0), i.transition(400)
                    }, 1e3)), o("scrollbarDragEnd", e), t.snapOnRelease && l.slideToClosest())
                }

                function E(e) {
                    let {
                        scrollbar: t,
                        touchEventsTouch: s,
                        touchEventsDesktop: a,
                        params: i,
                        support: r
                    } = l, n = t.$el;
                    if (!n) return;
                    let o = n[0],
                        d = !!r.passiveListener && !!i.passiveListeners && {
                            passive: !1,
                            capture: !1
                        },
                        h = !!r.passiveListener && !!i.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                    if (!o) return;
                    let c = "on" === e ? "addEventListener" : "removeEventListener";
                    r.touch ? (o[c](s.start, y, d), o[c](s.move, x, d), o[c](s.end, C, h)) : (o[c](a.start, y, d), p[c](a.move, x, d), p[c](a.end, C, h))
                }

                function T() {
                    let {
                        scrollbar: e,
                        $el: t
                    } = l;
                    l.params.scrollbar = W(l, l.originalParams.scrollbar, l.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    let s = l.params.scrollbar;
                    if (!s.el) return;
                    let a = f(s.el);
                    l.params.uniqueNavElements && "string" == typeof s.el && a.length > 1 && 1 === t.find(s.el).length && (a = t.find(s.el)), a.addClass(l.isHorizontal() ? s.horizontalClass : s.verticalClass);
                    let i = a.find(`.${l.params.scrollbar.dragClass}`);
                    0 === i.length && (i = f(`<div class="${l.params.scrollbar.dragClass}"></div>`), a.append(i)), Object.assign(e, {
                        $el: a,
                        el: a[0],
                        $dragEl: i,
                        dragEl: i[0]
                    }), s.draggable && l.params.scrollbar.el && l.scrollbar.el && E("on"), a && a[l.enabled ? "removeClass" : "addClass"](l.params.scrollbar.lockClass)
                }

                function $() {
                    let e = l.params.scrollbar,
                        t = l.scrollbar.$el;
                    t && t.removeClass(l.isHorizontal() ? e.horizontalClass : e.verticalClass), l.params.scrollbar.el && l.scrollbar.el && E("off")
                }
                r({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), l.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, n("init", () => {
                    !1 === l.params.scrollbar.enabled ? S() : (T(), g(), m())
                }), n("update resize observerUpdate lock unlock", () => {
                    g()
                }), n("setTranslate", () => {
                    m()
                }), n("setTransition", (e, t) => {
                    l.params.scrollbar.el && l.scrollbar.el && l.scrollbar.$dragEl.transition(t)
                }), n("enable disable", () => {
                    let {
                        $el: e
                    } = l.scrollbar;
                    e && e[l.enabled ? "removeClass" : "addClass"](l.params.scrollbar.lockClass)
                }), n("destroy", () => {
                    $()
                });
                let S = () => {
                    l.$el.addClass(l.params.scrollbar.scrollbarDisabledClass), l.scrollbar.$el && l.scrollbar.$el.addClass(l.params.scrollbar.scrollbarDisabledClass), $()
                };
                Object.assign(l.scrollbar, {
                    enable: () => {
                        l.$el.removeClass(l.params.scrollbar.scrollbarDisabledClass), l.scrollbar.$el && l.scrollbar.$el.removeClass(l.params.scrollbar.scrollbarDisabledClass), T(), g(), m()
                    },
                    disable: S,
                    updateSize: g,
                    setTranslate: m,
                    init: T,
                    destroy: $
                })
            }

            function Z(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    parallax: {
                        enabled: !1
                    }
                });
                let i = (e, s) => {
                        let {
                            rtl: a
                        } = t, i = f(e), l = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0", n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"), d = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
                        if (n || o ? (n = n || "0", o = o || "0") : t.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = n.indexOf("%") >= 0 ? `${parseInt(n,10)*s*l}%` : `${n*s*l}px`, o = o.indexOf("%") >= 0 ? `${parseInt(o,10)*s}%` : `${o*s}px`, null != p) {
                            let e = p - (p - 1) * (1 - Math.abs(s));
                            i[0].style.opacity = e
                        }
                        if (null == d) i.transform(`translate3d(${n}, ${o}, 0px)`);
                        else {
                            let e = d - (d - 1) * (1 - Math.abs(s));
                            i.transform(`translate3d(${n}, ${o}, 0px) scale(${e})`)
                        }
                    },
                    l = () => {
                        let {
                            $el: e,
                            slides: s,
                            progress: a,
                            snapGrid: l
                        } = t;
                        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                            i(e, a)
                        }), s.each((e, s) => {
                            let r = e.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (r += Math.ceil(s / 2) - a * (l.length - 1)), r = Math.min(Math.max(r, -1), 1), f(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                                i(e, r)
                            })
                        })
                    },
                    r = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.params.speed,
                            {
                                $el: s
                            } = t;
                        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                            let s = f(t),
                                a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (a = 0), s.transition(a)
                        })
                    };
                a("beforeInit", () => {
                    t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
                }), a("init", () => {
                    t.params.parallax.enabled && l()
                }), a("setTranslate", () => {
                    t.params.parallax.enabled && l()
                }), a("setTransition", (e, s) => {
                    t.params.parallax.enabled && r(s)
                })
            }

            function Q(e) {
                let t, s, a, {
                        swiper: i,
                        extendParams: l,
                        on: r,
                        emit: n
                    } = e,
                    o = h();
                l({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                }), i.zoom = {
                    enabled: !1
                };
                let d = 1,
                    p = !1,
                    c = {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    u = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    m = {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    g = 1;

                function v(e) {
                    if (e.targetTouches.length < 2) return 1;
                    let t = e.targetTouches[0].pageX,
                        s = e.targetTouches[0].pageY;
                    return Math.sqrt((e.targetTouches[1].pageX - t) ** 2 + (e.targetTouches[1].pageY - s) ** 2)
                }

                function b(e) {
                    let t = i.support,
                        l = i.params.zoom;
                    if (s = !1, a = !1, !t.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        s = !0, c.scaleStart = v(e)
                    }
                    if ((!c.$slideEl || !c.$slideEl.length) && (c.$slideEl = f(e.target).closest(`.${i.params.slideClass}`), 0 === c.$slideEl.length && (c.$slideEl = i.slides.eq(i.activeIndex)), c.$imageEl = c.$slideEl.find(`.${l.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), c.$imageWrapEl = c.$imageEl.parent(`.${l.containerClass}`), c.maxRatio = c.$imageWrapEl.attr("data-swiper-zoom") || l.maxRatio, 0 === c.$imageWrapEl.length)) {
                        c.$imageEl = void 0;
                        return
                    }
                    c.$imageEl && c.$imageEl.transition(0), p = !0
                }

                function w(e) {
                    let t = i.support,
                        s = i.params.zoom,
                        l = i.zoom;
                    if (!t.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        a = !0, c.scaleMove = v(e)
                    }
                    if (!c.$imageEl || 0 === c.$imageEl.length) {
                        "gesturechange" === e.type && b(e);
                        return
                    }
                    t.gestures ? l.scale = e.scale * d : l.scale = c.scaleMove / c.scaleStart * d, l.scale > c.maxRatio && (l.scale = c.maxRatio - 1 + (l.scale - c.maxRatio + 1) ** .5), l.scale < s.minRatio && (l.scale = s.minRatio + 1 - (s.minRatio - l.scale + 1) ** .5), c.$imageEl.transform(`translate3d(0,0,0) scale(${l.scale})`)
                }

                function y(e) {
                    let t = i.device,
                        l = i.support,
                        r = i.params.zoom,
                        n = i.zoom;
                    if (!l.gestures) {
                        if (!s || !a || "touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
                        s = !1, a = !1
                    }
                    c.$imageEl && 0 !== c.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, c.maxRatio), r.minRatio), c.$imageEl.transition(i.params.speed).transform(`translate3d(0,0,0) scale(${n.scale})`), d = n.scale, p = !1, 1 === n.scale && (c.$slideEl = void 0))
                }

                function C(e) {
                    let t = i.zoom;
                    if (!c.$imageEl || 0 === c.$imageEl.length || (i.allowClick = !1, !u.isTouched || !c.$slideEl)) return;
                    u.isMoved || (u.width = c.$imageEl[0].offsetWidth, u.height = c.$imageEl[0].offsetHeight, u.startX = x(c.$imageWrapEl[0], "x") || 0, u.startY = x(c.$imageWrapEl[0], "y") || 0, c.slideWidth = c.$slideEl[0].offsetWidth, c.slideHeight = c.$slideEl[0].offsetHeight, c.$imageWrapEl.transition(0));
                    let s = u.width * t.scale,
                        a = u.height * t.scale;
                    if (!(s < c.slideWidth) || !(a < c.slideHeight)) {
                        if (u.minX = Math.min(c.slideWidth / 2 - s / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - a / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, u.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !u.isMoved && !p && (i.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x) || !i.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y))) {
                            u.isTouched = !1;
                            return
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), u.isMoved = !0, u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX, u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY, u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** .8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** .8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** .8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** .8), m.prevPositionX || (m.prevPositionX = u.touchesCurrent.x), m.prevPositionY || (m.prevPositionY = u.touchesCurrent.y), m.prevTime || (m.prevTime = Date.now()), m.x = (u.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2, m.y = (u.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2, 2 > Math.abs(u.touchesCurrent.x - m.prevPositionX) && (m.x = 0), 2 > Math.abs(u.touchesCurrent.y - m.prevPositionY) && (m.y = 0), m.prevPositionX = u.touchesCurrent.x, m.prevPositionY = u.touchesCurrent.y, m.prevTime = Date.now(), c.$imageWrapEl.transform(`translate3d(${u.currentX}px, ${u.currentY}px,0)`)
                    }
                }

                function E() {
                    let e = i.zoom;
                    c.$slideEl && i.previousIndex !== i.activeIndex && (c.$imageEl && c.$imageEl.transform("translate3d(0,0,0) scale(1)"), c.$imageWrapEl && c.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, d = 1, c.$slideEl = void 0, c.$imageEl = void 0, c.$imageWrapEl = void 0)
                }

                function T(e) {
                    let t, s, a, l, r, n, p, h, m, g, v, b, w, y, x, C, E, T, $ = i.zoom,
                        S = i.params.zoom;
                    c.$slideEl || (e && e.target && (c.$slideEl = f(e.target).closest(`.${i.params.slideClass}`)), c.$slideEl || (i.params.virtual && i.params.virtual.enabled && i.virtual ? c.$slideEl = i.$wrapperEl.children(`.${i.params.slideActiveClass}`) : c.$slideEl = i.slides.eq(i.activeIndex)), c.$imageEl = c.$slideEl.find(`.${S.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), c.$imageWrapEl = c.$imageEl.parent(`.${S.containerClass}`)), c.$imageEl && 0 !== c.$imageEl.length && c.$imageWrapEl && 0 !== c.$imageWrapEl.length && (i.params.cssMode && (i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.touchAction = "none"), c.$slideEl.addClass(`${S.zoomedSlideClass}`), void 0 === u.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, s = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = u.touchesStart.x, s = u.touchesStart.y), $.scale = c.$imageWrapEl.attr("data-swiper-zoom") || S.maxRatio, d = c.$imageWrapEl.attr("data-swiper-zoom") || S.maxRatio, e ? (E = c.$slideEl[0].offsetWidth, T = c.$slideEl[0].offsetHeight, a = c.$slideEl.offset().left + o.scrollX, l = c.$slideEl.offset().top + o.scrollY, r = a + E / 2 - t, n = l + T / 2 - s, m = c.$imageEl[0].offsetWidth, g = c.$imageEl[0].offsetHeight, v = m * $.scale, b = g * $.scale, w = Math.min(E / 2 - v / 2, 0), y = Math.min(T / 2 - b / 2, 0), x = -w, C = -y, p = r * $.scale, h = n * $.scale, p < w && (p = w), p > x && (p = x), h < y && (h = y), h > C && (h = C)) : (p = 0, h = 0), c.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${h}px,0)`), c.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${$.scale})`))
                }

                function $() {
                    let e = i.zoom,
                        t = i.params.zoom;
                    c.$slideEl || (i.params.virtual && i.params.virtual.enabled && i.virtual ? c.$slideEl = i.$wrapperEl.children(`.${i.params.slideActiveClass}`) : c.$slideEl = i.slides.eq(i.activeIndex), c.$imageEl = c.$slideEl.find(`.${t.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), c.$imageWrapEl = c.$imageEl.parent(`.${t.containerClass}`)), c.$imageEl && 0 !== c.$imageEl.length && c.$imageWrapEl && 0 !== c.$imageWrapEl.length && (i.params.cssMode && (i.wrapperEl.style.overflow = "", i.wrapperEl.style.touchAction = ""), e.scale = 1, d = 1, c.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), c.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), c.$slideEl.removeClass(`${t.zoomedSlideClass}`), c.$slideEl = void 0)
                }

                function S(e) {
                    let t = i.zoom;
                    t.scale && 1 !== t.scale ? $() : T(e)
                }

                function M() {
                    let e = i.support;
                    return {
                        passiveListener: "touchstart" === i.touchEvents.start && !!e.passiveListener && !!i.params.passiveListeners && {
                            passive: !0,
                            capture: !1
                        },
                        activeListenerWithCapture: !e.passiveListener || {
                            passive: !1,
                            capture: !0
                        }
                    }
                }

                function k() {
                    return `.${i.params.slideClass}`
                }

                function P(e) {
                    let {
                        passiveListener: t
                    } = M(), s = k();
                    i.$wrapperEl[e]("gesturestart", s, b, t), i.$wrapperEl[e]("gesturechange", s, w, t), i.$wrapperEl[e]("gestureend", s, y, t)
                }

                function z() {
                    t || (t = !0, P("on"))
                }

                function O() {
                    t && (t = !1, P("off"))
                }

                function L() {
                    let e = i.zoom;
                    if (e.enabled) return;
                    e.enabled = !0;
                    let t = i.support,
                        {
                            passiveListener: s,
                            activeListenerWithCapture: a
                        } = M(),
                        l = k();
                    t.gestures ? (i.$wrapperEl.on(i.touchEvents.start, z, s), i.$wrapperEl.on(i.touchEvents.end, O, s)) : "touchstart" === i.touchEvents.start && (i.$wrapperEl.on(i.touchEvents.start, l, b, s), i.$wrapperEl.on(i.touchEvents.move, l, w, a), i.$wrapperEl.on(i.touchEvents.end, l, y, s), i.touchEvents.cancel && i.$wrapperEl.on(i.touchEvents.cancel, l, y, s)), i.$wrapperEl.on(i.touchEvents.move, `.${i.params.zoom.containerClass}`, C, a)
                }

                function I() {
                    let e = i.zoom;
                    if (!e.enabled) return;
                    let t = i.support;
                    e.enabled = !1;
                    let {
                        passiveListener: s,
                        activeListenerWithCapture: a
                    } = M(), l = k();
                    t.gestures ? (i.$wrapperEl.off(i.touchEvents.start, z, s), i.$wrapperEl.off(i.touchEvents.end, O, s)) : "touchstart" === i.touchEvents.start && (i.$wrapperEl.off(i.touchEvents.start, l, b, s), i.$wrapperEl.off(i.touchEvents.move, l, w, a), i.$wrapperEl.off(i.touchEvents.end, l, y, s), i.touchEvents.cancel && i.$wrapperEl.off(i.touchEvents.cancel, l, y, s)), i.$wrapperEl.off(i.touchEvents.move, `.${i.params.zoom.containerClass}`, C, a)
                }
                Object.defineProperty(i.zoom, "scale", {
                    get: () => g,
                    set(e) {
                        g !== e && n("zoomChange", e, c.$imageEl ? c.$imageEl[0] : void 0, c.$slideEl ? c.$slideEl[0] : void 0), g = e
                    }
                }), r("init", () => {
                    i.params.zoom.enabled && L()
                }), r("destroy", () => {
                    I()
                }), r("touchStart", (e, t) => {
                    if (i.zoom.enabled) {
                        let e;
                        e = i.device, !c.$imageEl || 0 === c.$imageEl.length || u.isTouched || (e.android && t.cancelable && t.preventDefault(), u.isTouched = !0, u.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, u.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)
                    }
                }), r("touchEnd", (e, t) => {
                    i.zoom.enabled && function() {
                        let e = i.zoom;
                        if (!c.$imageEl || 0 === c.$imageEl.length) return;
                        if (!u.isTouched || !u.isMoved) {
                            u.isTouched = !1, u.isMoved = !1;
                            return
                        }
                        u.isTouched = !1, u.isMoved = !1;
                        let t = 300,
                            s = 300,
                            a = m.x * t,
                            l = u.currentX + a,
                            r = m.y * s,
                            n = u.currentY + r;
                        0 !== m.x && (t = Math.abs((l - u.currentX) / m.x)), 0 !== m.y && (s = Math.abs((n - u.currentY) / m.y));
                        let o = Math.max(t, s);
                        u.currentX = l, u.currentY = n;
                        let d = u.width * e.scale,
                            p = u.height * e.scale;
                        u.minX = Math.min(c.slideWidth / 2 - d / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - p / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), c.$imageWrapEl.transition(o).transform(`translate3d(${u.currentX}px, ${u.currentY}px,0)`)
                    }(t)
                }), r("doubleTap", (e, t) => {
                    !i.animating && i.params.zoom.enabled && i.zoom.enabled && i.params.zoom.toggle && S(t)
                }), r("transitionEnd", () => {
                    i.zoom.enabled && i.params.zoom.enabled && E()
                }), r("slideChange", () => {
                    i.zoom.enabled && i.params.zoom.enabled && i.params.cssMode && E()
                }), Object.assign(i.zoom, {
                    enable: L,
                    disable: I,
                    in: T,
                    out: $,
                    toggle: S
                })
            }

            function J(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a,
                    emit: i
                } = e;
                s({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                }), t.lazy = {};
                let l = !1,
                    r = !1;

                function n(e) {
                    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = t.params.lazy;
                    if (void 0 === e || 0 === t.slides.length) return;
                    let l = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                        r = l.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                    !l.hasClass(a.elementClass) || l.hasClass(a.loadedClass) || l.hasClass(a.loadingClass) || r.push(l[0]), 0 !== r.length && r.each(e => {
                        let r = f(e);
                        r.addClass(a.loadingClass);
                        let o = r.attr("data-background"),
                            d = r.attr("data-src"),
                            p = r.attr("data-srcset"),
                            h = r.attr("data-sizes"),
                            c = r.parent("picture");
                        t.loadImage(r[0], d || o, p, h, !1, () => {
                            if (null != t && t && (!t || t.params) && !t.destroyed) {
                                if (o ? (r.css("background-image", `url("${o}")`), r.removeAttr("data-background")) : (p && (r.attr("srcset", p), r.removeAttr("data-srcset")), h && (r.attr("sizes", h), r.removeAttr("data-sizes")), c.length && c.children("source").each(e => {
                                        let t = f(e);
                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                    }), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(a.loadedClass).removeClass(a.loadingClass), l.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                                    let e = l.attr("data-swiper-slide-index");
                                    l.hasClass(t.params.slideDuplicateClass) ? n(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : n(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                                }
                                i("lazyImageReady", l[0], r[0]), t.params.autoHeight && t.updateAutoHeight()
                            }
                        }), i("lazyImageLoad", l[0], r[0])
                    })
                }

                function o() {
                    let {
                        $wrapperEl: e,
                        params: s,
                        slides: a,
                        activeIndex: i
                    } = t, l = t.virtual && s.virtual.enabled, o = s.lazy, d = s.slidesPerView;

                    function p(t) {
                        if (l) {
                            if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                        } else if (a[t]) return !0;
                        return !1
                    }

                    function h(e) {
                        return l ? f(e).attr("data-swiper-slide-index") : f(e).index()
                    }
                    if ("auto" === d && (d = 0), r || (r = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each(e => {
                        n(l ? f(e).attr("data-swiper-slide-index") : f(e).index())
                    });
                    else if (d > 1)
                        for (let e = i; e < i + d; e += 1) p(e) && n(e);
                    else n(i);
                    if (o.loadPrevNext)
                        if (d > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                            let e = o.loadPrevNextAmount,
                                t = Math.ceil(d),
                                s = Math.min(i + t + Math.max(e, t), a.length),
                                l = Math.max(i - Math.max(t, e), 0);
                            for (let e = i + t; e < s; e += 1) p(e) && n(e);
                            for (let e = l; e < i; e += 1) p(e) && n(e)
                        } else {
                            let t = e.children(`.${s.slideNextClass}`);
                            t.length > 0 && n(h(t));
                            let a = e.children(`.${s.slidePrevClass}`);
                            a.length > 0 && n(h(a))
                        }
                }

                function d() {
                    let e = h();
                    if (!t || t.destroyed) return;
                    let s = t.params.lazy.scrollingElement ? f(t.params.lazy.scrollingElement) : f(e),
                        a = s[0] === e,
                        i = a ? e.innerWidth : s[0].offsetWidth,
                        r = a ? e.innerHeight : s[0].offsetHeight,
                        n = t.$el.offset(),
                        {
                            rtlTranslate: p
                        } = t,
                        c = !1;
                    p && (n.left -= t.$el[0].scrollLeft);
                    let u = [
                        [n.left, n.top],
                        [n.left + t.width, n.top],
                        [n.left, n.top + t.height],
                        [n.left + t.width, n.top + t.height]
                    ];
                    for (let e = 0; e < u.length; e += 1) {
                        let t = u[e];
                        if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= r) {
                            if (0 === t[0] && 0 === t[1]) continue;
                            c = !0
                        }
                    }
                    let m = "touchstart" === t.touchEvents.start && !!t.support.passiveListener && !!t.params.passiveListeners && {
                        passive: !0,
                        capture: !1
                    };
                    c ? (o(), s.off("scroll", d, m)) : l || (l = !0, s.on("scroll", d, m))
                }
                a("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
                }), a("init", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o())
                }), a("scroll", () => {
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && o()
                }), a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                    t.params.lazy.enabled && (t.params.lazy.checkInView ? d() : o())
                }), a("transitionStart", () => {
                    t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !r) && (t.params.lazy.checkInView ? d() : o())
                }), a("transitionEnd", () => {
                    t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? d() : o())
                }), a("slideChange", () => {
                    let {
                        lazy: e,
                        cssMode: s,
                        watchSlidesProgress: a,
                        touchReleaseOnEdges: i,
                        resistanceRatio: l
                    } = t.params;
                    e.enabled && (s || a && (i || 0 === l)) && o()
                }), a("destroy", () => {
                    t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
                }), Object.assign(t.lazy, {
                    load: o,
                    loadInSlide: n
                })
            }

            function ee(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;

                function i(e, t) {
                    let s, a, i, l, r;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                        return e ? (s = (a = ((e, t) => {
                            for (l = -1, i = e.length; i - l > 1;) e[r = i + l >> 1] <= t ? l = r : i = r;
                            return i
                        })(this.x, e)) - 1, (e - this.x[s]) * (this.y[a] - this.y[s]) / (this.x[a] - this.x[s]) + this.y[s]) : 0
                    }, this
                }

                function l() {
                    t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
                }
                s({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }), t.controller = {
                    control: void 0
                }, a("beforeInit", () => {
                    t.controller.control = t.params.controller.control
                }), a("update", () => {
                    l()
                }), a("resize", () => {
                    l()
                }), a("observerUpdate", () => {
                    l()
                }), a("setTranslate", (e, s, a) => {
                    t.controller.control && t.controller.setTranslate(s, a)
                }), a("setTransition", (e, s, a) => {
                    t.controller.control && t.controller.setTransition(s, a)
                }), Object.assign(t.controller, {
                    setTranslate: function(e, s) {
                        let a, l, r = t.controller.control,
                            n = t.constructor;

                        function o(e) {
                            let s = t.rtlTranslate ? -t.translate : t.translate;
                            "slide" === t.params.controller.by && (t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)), l = -t.controller.spline.interpolate(-s));
                            l && "container" !== t.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), l = (s - t.minTranslate()) * a + e.minTranslate()), t.params.controller.inverse && (l = e.maxTranslate() - l), e.updateProgress(l), e.setTranslate(l, t), e.updateActiveIndex(), e.updateSlidesClasses()
                        }
                        if (Array.isArray(r))
                            for (let e = 0; e < r.length; e += 1) r[e] !== s && r[e] instanceof n && o(r[e]);
                        else r instanceof n && s !== r && o(r)
                    },
                    setTransition: function(e, s) {
                        let a, i = t.constructor,
                            l = t.controller.control;

                        function r(s) {
                            s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && w(() => {
                                s.updateAutoHeight()
                            }), s.$wrapperEl.transitionEnd(() => {
                                l && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                            }))
                        }
                        if (Array.isArray(l))
                            for (a = 0; a < l.length; a += 1) l[a] !== s && l[a] instanceof i && r(l[a]);
                        else l instanceof i && s !== l && r(l)
                    }
                })
            }

            function et(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }), t.a11y = {
                    clicked: !1
                };
                let i = null;

                function l(e) {
                    let t = i;
                    0 !== t.length && (t.html(""), t.html(e))
                }

                function r(e) {
                    e.attr("tabIndex", "0")
                }

                function n(e) {
                    e.attr("tabIndex", "-1")
                }

                function o(e, t) {
                    e.attr("role", t)
                }

                function d(e, t) {
                    e.attr("aria-roledescription", t)
                }

                function p(e, t) {
                    e.attr("aria-label", t)
                }

                function h(e) {
                    e.attr("aria-disabled", !0)
                }

                function c(e) {
                    e.attr("aria-disabled", !1)
                }

                function u(e) {
                    if (13 !== e.keyCode && 32 !== e.keyCode) return;
                    let s = t.params.a11y,
                        a = f(e.target);
                    t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? l(s.lastSlideMessage) : l(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? l(s.firstSlideMessage) : l(s.prevSlideMessage)), t.pagination && a.is(F(t.params.pagination.bulletClass)) && a[0].click()
                }

                function m() {
                    return t.pagination && t.pagination.bullets && t.pagination.bullets.length
                }

                function g() {
                    return m() && t.params.pagination.clickable
                }
                let v = (e, t, s) => {
                        r(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", u)), p(e, s), e.attr("aria-controls", t)
                    },
                    b = () => {
                        t.a11y.clicked = !0
                    },
                    w = () => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                t.destroyed || (t.a11y.clicked = !1)
                            })
                        })
                    },
                    y = e => {
                        if (t.a11y.clicked) return;
                        let s = e.target.closest(`.${t.params.slideClass}`);
                        if (!s || !t.slides.includes(s)) return;
                        let a = t.slides.indexOf(s) === t.activeIndex,
                            i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                        a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
                    },
                    x = () => {
                        let e = t.params.a11y;
                        e.itemRoleDescriptionMessage && d(f(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(f(t.slides), e.slideRole);
                        let s = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                        e.slideLabelMessage && t.slides.each((a, i) => {
                            let l = f(a),
                                r = t.params.loop ? parseInt(l.attr("data-swiper-slide-index"), 10) : i;
                            p(l, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                        })
                    };
                a("beforeInit", () => {
                    i = f(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }), a("afterInit", () => {
                    if (t.params.a11y.enabled) {
                        let e, s, a, l, r, n, o;
                        a = t.params.a11y, t.$el.append(i), l = t.$el, a.containerRoleDescriptionMessage && d(l, a.containerRoleDescriptionMessage), a.containerMessage && p(l, a.containerMessage), r = t.$wrapperEl, n = a.id || r.attr("id") || `swiper-wrapper-${function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return"x".repeat(e).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}(16)}`, o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite", r.attr("id", n), r.attr("aria-live", o), x(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.length && v(e, n, a.nextSlideMessage), s && s.length && v(s, n, a.prevSlideMessage), g() && t.pagination.$el.on("keydown", F(t.params.pagination.bulletClass), u), t.$el.on("focus", y, !0), t.$el.on("pointerdown", b, !0), t.$el.on("pointerup", w, !0)
                    }
                }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                    t.params.a11y.enabled && x()
                }), a("fromEdge toEdge afterInit lock unlock", () => {
                    t.params.a11y.enabled && function() {
                        if (t.params.loop || t.params.rewind || !t.navigation) return;
                        let {
                            $nextEl: e,
                            $prevEl: s
                        } = t.navigation;
                        s && s.length > 0 && (t.isBeginning ? (h(s), n(s)) : (c(s), r(s))), e && e.length > 0 && (t.isEnd ? (h(e), n(e)) : (c(e), r(e)))
                    }()
                }), a("paginationUpdate", () => {
                    if (t.params.a11y.enabled) {
                        let e;
                        e = t.params.a11y, m() && t.pagination.bullets.each(s => {
                            let a = f(s);
                            t.params.pagination.clickable && (r(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                        })
                    }
                }), a("destroy", () => {
                    if (t.params.a11y.enabled) {
                        let e, s;
                        i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", u), s && s.off("keydown", u), g() && t.pagination.$el.off("keydown", F(t.params.pagination.bulletClass), u), t.$el.off("focus", y, !0), t.$el.off("pointerdown", b, !0), t.$el.off("pointerup", w, !0)
                    }
                })
            }

            function es(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides",
                        keepQuery: !1
                    }
                });
                let i = !1,
                    l = {},
                    r = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                    n = e => {
                        let t = h(),
                            s = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e => "" !== e),
                            a = s.length;
                        return {
                            key: s[a - 2],
                            value: s[a - 1]
                        }
                    },
                    o = (e, s) => {
                        let a, l = h();
                        if (!i || !t.params.history.enabled) return;
                        a = t.params.url ? new URL(t.params.url) : l.location;
                        let n = r(t.slides.eq(s).attr("data-history"));
                        if (t.params.history.root.length > 0) {
                            let s = t.params.history.root;
                            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), n = `${s}/${e}/${n}`
                        } else a.pathname.includes(e) || (n = `${e}/${n}`);
                        t.params.history.keepQuery && (n += a.search);
                        let o = l.history.state;
                        o && o.value === n || (t.params.history.replaceState ? l.history.replaceState({
                            value: n
                        }, null, n) : l.history.pushState({
                            value: n
                        }, null, n))
                    },
                    d = (e, s, a) => {
                        if (s)
                            for (let i = 0, l = t.slides.length; i < l; i += 1) {
                                let l = t.slides.eq(i);
                                if (r(l.attr("data-history")) === s && !l.hasClass(t.params.slideDuplicateClass)) {
                                    let s = l.index();
                                    t.slideTo(s, e, a)
                                }
                            } else t.slideTo(0, e, a)
                    },
                    p = () => {
                        l = n(t.params.url), d(t.params.speed, l.value, !1)
                    };
                a("init", () => {
                    t.params.history.enabled && (() => {
                        let e = h();
                        if (t.params.history) {
                            if (!e.history || !e.history.pushState) {
                                t.params.history.enabled = !1, t.params.hashNavigation.enabled = !0;
                                return
                            }
                            i = !0, ((l = n(t.params.url)).key || l.value) && (d(0, l.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                        }
                    })()
                }), a("destroy", () => {
                    let e;
                    t.params.history.enabled && (e = h(), t.params.history.replaceState || e.removeEventListener("popstate", p))
                }), a("transitionEnd _freeModeNoMomentumRelease", () => {
                    i && o(t.params.history.key, t.activeIndex)
                }), a("slideChange", () => {
                    i && t.params.cssMode && o(t.params.history.key, t.activeIndex)
                })
            }

            function ea(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    emit: a,
                    on: i
                } = e, l = !1, r = d(), n = h();
                s({
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                });
                let o = () => {
                        a("hashChange");
                        let e = r.location.hash.replace("#", "");
                        if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                            let s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                            if (void 0 === s) return;
                            t.slideTo(s)
                        }
                    },
                    p = () => {
                        if (l && t.params.hashNavigation.enabled)
                            if (t.params.hashNavigation.replaceState && n.history && n.history.replaceState) n.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), a("hashSet");
                            else {
                                let e = t.slides.eq(t.activeIndex),
                                    s = e.attr("data-hash") || e.attr("data-history");
                                r.location.hash = s || "", a("hashSet")
                            }
                    };
                i("init", () => {
                    t.params.hashNavigation.enabled && (() => {
                        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                        l = !0;
                        let e = r.location.hash.replace("#", "");
                        if (e)
                            for (let s = 0, a = t.slides.length; s < a; s += 1) {
                                let a = t.slides.eq(s);
                                if ((a.attr("data-hash") || a.attr("data-history")) === e && !a.hasClass(t.params.slideDuplicateClass)) {
                                    let e = a.index();
                                    t.slideTo(e, 0, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        t.params.hashNavigation.watchState && f(n).on("hashchange", o)
                    })()
                }), i("destroy", () => {
                    t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && f(n).off("hashchange", o)
                }), i("transitionEnd _freeModeNoMomentumRelease", () => {
                    l && p()
                }), i("slideChange", () => {
                    l && t.params.cssMode && p()
                })
            }

            function ei(e) {
                let t, {
                    swiper: s,
                    extendParams: a,
                    on: i,
                    emit: l
                } = e;

                function r() {
                    if (!s.size) {
                        s.autoplay.running = !1, s.autoplay.paused = !1;
                        return
                    }
                    let e = s.slides.eq(s.activeIndex),
                        a = s.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = w(() => {
                        let e;
                        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), l("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), l("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), l("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), l("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? o() : (e = s.slideTo(0, s.params.speed, !0, !0), l("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), l("autoplay")), s.params.cssMode && s.autoplay.running ? r() : !1 === e && r()
                    }, a)
                }

                function n() {
                    return void 0 === t && !s.autoplay.running && (s.autoplay.running = !0, l("autoplayStart"), r(), !0)
                }

                function o() {
                    return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, l("autoplayStop"), !0)
                }

                function p(e) {
                    !s.autoplay.running || s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].addEventListener(e, c)
                    }) : (s.autoplay.paused = !1, r()))
                }

                function h() {
                    let e = d();
                    "hidden" === e.visibilityState && s.autoplay.running && p(), "visible" === e.visibilityState && s.autoplay.paused && (r(), s.autoplay.paused = !1)
                }

                function c(e) {
                    s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].removeEventListener(e, c)
                    }), s.autoplay.paused = !1, s.autoplay.running ? r() : o())
                }

                function u() {
                    s.params.autoplay.disableOnInteraction ? o() : (l("autoplayPause"), p()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                        s.$wrapperEl[0].removeEventListener(e, c)
                    })
                }

                function m() {
                    s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, l("autoplayResume"), r())
                }
                s.autoplay = {
                    running: !1,
                    paused: !1
                }, a({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", () => {
                    s.params.autoplay.enabled && (n(), d().addEventListener("visibilitychange", h), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", u), s.$el.on("mouseleave", m)))
                }), i("beforeTransitionStart", (e, t, a) => {
                    s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : o())
                }), i("sliderFirstMove", () => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? o() : p())
                }), i("touchEnd", () => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && r()
                }), i("destroy", () => {
                    s.$el.off("mouseenter", u), s.$el.off("mouseleave", m), s.autoplay.running && o(), d().removeEventListener("visibilitychange", h)
                }), Object.assign(s.autoplay, {
                    pause: p,
                    run: r,
                    start: n,
                    stop: o
                })
            }

            function el(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let i = !1,
                    l = !1;

                function r() {
                    let e, s = t.thumbs.swiper;
                    if (!s || s.destroyed) return;
                    let a = s.clickedIndex,
                        i = s.clickedSlide;
                    if (!(i && f(i).hasClass(t.params.thumbs.slideThumbActiveClass)) && null != a) {
                        if (e = s.params.loop ? parseInt(f(s.clickedSlide).attr("data-swiper-slide-index"), 10) : a, t.params.loop) {
                            let s = t.activeIndex;
                            t.slides.eq(s).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, s = t.activeIndex);
                            let a = t.slides.eq(s).prevAll(`[data-swiper-slide-index="${e}"]`).eq(0).index(),
                                i = t.slides.eq(s).nextAll(`[data-swiper-slide-index="${e}"]`).eq(0).index();
                            e = void 0 === a ? i : void 0 === i ? a : i - s < s - a ? i : a
                        }
                        t.slideTo(e)
                    }
                }

                function n() {
                    let {
                        thumbs: e
                    } = t.params;
                    if (i) return !1;
                    i = !0;
                    let s = t.constructor;
                    if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                    else if (C(e.swiper)) {
                        let a = Object.assign({}, e.swiper);
                        Object.assign(a, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new s(a), l = !0
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", r), !0
                }

                function o(e) {
                    let s = t.thumbs.swiper;
                    if (!s || s.destroyed) return;
                    let a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
                        i = 1,
                        l = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                        for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(l);
                    else
                        for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(l);
                    let r = t.params.thumbs.autoScrollOffset,
                        n = r && !s.params.loop;
                    if (t.realIndex !== s.realIndex || n) {
                        let i, l, o = s.activeIndex;
                        if (s.params.loop) {
                            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                            let e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, l = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else l = (i = t.realIndex) > t.previousIndex ? "next" : "prev";
                        n && (i += "next" === l ? r : -1 * r), s.visibleSlidesIndexes && 0 > s.visibleSlidesIndexes.indexOf(i) && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
                    }
                }
                t.thumbs = {
                    swiper: null
                }, a("beforeInit", () => {
                    let {
                        thumbs: e
                    } = t.params;
                    e && e.swiper && (n(), o(!0))
                }), a("slideChange update resize observerUpdate", () => {
                    o()
                }), a("setTransition", (e, s) => {
                    let a = t.thumbs.swiper;
                    a && !a.destroyed && a.setTransition(s)
                }), a("beforeDestroy", () => {
                    let e = t.thumbs.swiper;
                    e && !e.destroyed && l && e.destroy()
                }), Object.assign(t.thumbs, {
                    init: n,
                    update: o
                })
            }

            function er(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    emit: a,
                    once: i
                } = e;
                s({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            let e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            let {
                                touchEventsData: e,
                                touches: s
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: s[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                time: y()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: s
                            } = e, {
                                params: l,
                                $wrapperEl: r,
                                rtlTranslate: n,
                                snapGrid: o,
                                touchEventsData: d
                            } = t, p = y() - d.touchStartTime;
                            if (s < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (s > -t.maxTranslate()) return void(t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));
                            if (l.freeMode.momentum) {
                                let e, s;
                                if (d.velocities.length > 1) {
                                    let e = d.velocities.pop(),
                                        s = d.velocities.pop(),
                                        a = e.position - s.position,
                                        i = e.time - s.time;
                                    t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < l.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || y() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= l.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                let p = 1e3 * l.freeMode.momentumRatio,
                                    h = t.velocity * p,
                                    c = t.translate + h;
                                n && (c = -c);
                                let u = !1,
                                    m = 20 * Math.abs(t.velocity) * l.freeMode.momentumBounceRatio;
                                if (c < t.maxTranslate()) l.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), e = t.maxTranslate(), u = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), l.loop && l.centeredSlides && (s = !0);
                                else if (c > t.minTranslate()) l.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), e = t.minTranslate(), u = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), l.loop && l.centeredSlides && (s = !0);
                                else if (l.freeMode.sticky) {
                                    let e;
                                    for (let t = 0; t < o.length; t += 1)
                                        if (o[t] > -c) {
                                            e = t;
                                            break
                                        } c = -(c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1])
                                }
                                if (s && i("transitionEnd", () => {
                                        t.loopFix()
                                    }), 0 !== t.velocity) {
                                    if (p = n ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), l.freeMode.sticky) {
                                        let e = Math.abs((n ? -c : c) - t.translate),
                                            s = t.slidesSizesGrid[t.activeIndex];
                                        p = e < s ? l.speed : e < 2 * s ? 1.5 * l.speed : 2.5 * l.speed
                                    }
                                } else if (l.freeMode.sticky) return void t.slideToClosest();
                                l.freeMode.momentumBounce && u ? (t.updateProgress(e), t.setTransition(p), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(l.speed), setTimeout(() => {
                                        t.setTranslate(e), r.transitionEnd(() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        })
                                    }, 0))
                                })) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(p), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (l.freeMode.sticky) return void t.slideToClosest();
                                l.freeMode && a("_freeModeNoMomentumRelease")
                            }(!l.freeMode.momentum || p >= l.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                })
            }

            function en(e) {
                let t, s, a, {
                    swiper: i,
                    extendParams: l
                } = e;
                l({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                }), i.grid = {
                    initSlides: e => {
                        let {
                            slidesPerView: l
                        } = i.params, {
                            rows: r,
                            fill: n
                        } = i.params.grid;
                        s = t / r, a = Math.floor(e / r), t = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r, "auto" !== l && "row" === n && (t = Math.max(t, l * r))
                    },
                    updateSlide: (e, l, r, n) => {
                        let o, d, p, {
                                slidesPerGroup: h,
                                spaceBetween: c
                            } = i.params,
                            {
                                rows: u,
                                fill: m
                            } = i.params.grid;
                        if ("row" === m && h > 1) {
                            let s = Math.floor(e / (h * u)),
                                a = e - u * h * s,
                                i = 0 === s ? h : Math.min(Math.ceil((r - s * u * h) / u), h);
                            p = Math.floor(a / i), o = (d = a - p * i + s * h) + p * t / u, l.css({
                                "-webkit-order": o,
                                order: o
                            })
                        } else "column" === m ? (d = Math.floor(e / u), p = e - d * u, (d > a || d === a && p === u - 1) && (p += 1) >= u && (p = 0, d += 1)) : (p = Math.floor(e / s), d = e - p * s);
                        l.css(n("margin-top"), 0 !== p ? c && `${c}px` : "")
                    },
                    updateWrapperSize: (e, s, a) => {
                        let {
                            spaceBetween: l,
                            centeredSlides: r,
                            roundLengths: n
                        } = i.params, {
                            rows: o
                        } = i.params.grid;
                        if (i.virtualSize = (e + l) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - l, i.$wrapperEl.css({
                                [a("width")]: `${i.virtualSize+l}px`
                            }), r) {
                            s.splice(0, s.length);
                            let e = [];
                            for (let t = 0; t < s.length; t += 1) {
                                let a = s[t];
                                n && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                            }
                            s.push(...e)
                        }
                    }
                }
            }

            function eo(e) {
                let {
                    $wrapperEl: t,
                    params: s
                } = this;
                if (s.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (let s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                s.loop && this.loopCreate(), s.observer || this.update()
            }

            function ed(e) {
                let {
                    params: t,
                    $wrapperEl: s,
                    activeIndex: a
                } = this;
                t.loop && this.loopDestroy();
                let i = a + 1;
                if ("object" == typeof e && "length" in e) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
                    i = a + e.length
                } else s.prepend(e);
                t.loop && this.loopCreate(), t.observer || this.update(), this.slideTo(i, 0, !1)
            }

            function ep(e, t) {
                let {
                    $wrapperEl: s,
                    params: a,
                    activeIndex: i
                } = this, l = i;
                a.loop && (l -= this.loopedSlides, this.loopDestroy(), this.slides = s.children(`.${a.slideClass}`));
                let r = this.slides.length;
                if (e <= 0) return void this.prependSlide(t);
                if (e >= r) return void this.appendSlide(t);
                let n = l > e ? l + 1 : l,
                    o = [];
                for (let t = r - 1; t >= e; t -= 1) {
                    let e = this.slides.eq(t);
                    e.remove(), o.unshift(e)
                }
                if ("object" == typeof t && "length" in t) {
                    for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
                    n = l > e ? l + t.length : l
                } else s.append(t);
                for (let e = 0; e < o.length; e += 1) s.append(o[e]);
                a.loop && this.loopCreate(), a.observer || this.update(), a.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }

            function eh(e) {
                let t, {
                        params: s,
                        $wrapperEl: a,
                        activeIndex: i
                    } = this,
                    l = i;
                s.loop && (l -= this.loopedSlides, this.loopDestroy(), this.slides = a.children(`.${s.slideClass}`));
                let r = l;
                if ("object" == typeof e && "length" in e) {
                    for (let s = 0; s < e.length; s += 1) t = e[s], this.slides[t] && this.slides.eq(t).remove(), t < r && (r -= 1);
                    r = Math.max(r, 0)
                } else t = e, this.slides[t] && this.slides.eq(t).remove(), t < r && (r -= 1), r = Math.max(r, 0);
                s.loop && this.loopCreate(), s.observer || this.update(), s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            }

            function ec() {
                let e = [];
                for (let t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }

            function eu(e) {
                let {
                    swiper: t
                } = e;
                Object.assign(t, {
                    appendSlide: eo.bind(t),
                    prependSlide: ed.bind(t),
                    addSlide: ep.bind(t),
                    removeSlide: eh.bind(t),
                    removeAllSlides: ec.bind(t)
                })
            }

            function em(e) {
                let t, {
                    effect: s,
                    swiper: a,
                    on: i,
                    setTranslate: l,
                    setTransition: r,
                    overwriteParams: n,
                    perspective: o,
                    recreateShadows: d,
                    getEffectParams: p
                } = e;
                i("beforeInit", () => {
                    if (a.params.effect !== s) return;
                    a.classNames.push(`${a.params.containerModifierClass}${s}`), o && o() && a.classNames.push(`${a.params.containerModifierClass}3d`);
                    let e = n ? n() : {};
                    Object.assign(a.params, e), Object.assign(a.originalParams, e)
                }), i("setTranslate", () => {
                    a.params.effect === s && l()
                }), i("setTransition", (e, t) => {
                    a.params.effect === s && r(t)
                }), i("transitionEnd", () => {
                    a.params.effect === s && d && p && p().slideShadows && (a.slides.each(e => {
                        a.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    }), d())
                }), i("virtualUpdate", () => {
                    a.params.effect === s && (a.slides.length || (t = !0), requestAnimationFrame(() => {
                        t && a.slides && a.slides.length && (l(), t = !1)
                    }))
                })
            }

            function ef(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function eg(e) {
                let {
                    swiper: t,
                    duration: s,
                    transformEl: a,
                    allSlides: i
                } = e, {
                    slides: l,
                    activeIndex: r,
                    $wrapperEl: n
                } = t;
                if (t.params.virtualTranslate && 0 !== s) {
                    let e = !1;
                    (i ? a ? l.find(a) : l : a ? l.eq(r).find(a) : l.eq(r)).transitionEnd(() => {
                        if (e || !t || t.destroyed) return;
                        e = !0, t.animating = !1;
                        let s = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < s.length; e += 1) n.trigger(s[e])
                    })
                }
            }

            function ev(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                }), em({
                    effect: "fade",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let {
                            slides: e
                        } = t, s = t.params.fadeEffect;
                        for (let a = 0; a < e.length; a += 1) {
                            let e = t.slides.eq(a),
                                i = -e[0].swiperSlideOffset;
                            t.params.virtualTranslate || (i -= t.translate);
                            let l = 0;
                            t.isHorizontal() || (l = i, i = 0);
                            let r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                            ef(s, e).css({
                                opacity: r
                            }).transform(`translate3d(${i}px, ${l}px, 0px)`)
                        }
                    },
                    setTransition: e => {
                        let {
                            transformEl: s
                        } = t.params.fadeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e), eg({
                            swiper: t,
                            duration: e,
                            transformEl: s,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }

            function eb(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                });
                let i = (e, t, s) => {
                    let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                    0 === a.length && (a = f(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`), e.append(a)), 0 === i.length && (i = f(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
                };
                em({
                    effect: "cube",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let e, {
                                $el: s,
                                $wrapperEl: a,
                                slides: l,
                                width: r,
                                height: n,
                                rtlTranslate: o,
                                size: d,
                                browser: p
                            } = t,
                            h = t.params.cubeEffect,
                            c = t.isHorizontal(),
                            u = t.virtual && t.params.virtual.enabled,
                            m = 0;
                        h.shadow && (c ? (0 === (e = a.find(".swiper-cube-shadow")).length && (e = f('<div class="swiper-cube-shadow"></div>'), a.append(e)), e.css({
                            height: `${r}px`
                        })) : 0 === (e = s.find(".swiper-cube-shadow")).length && (e = f('<div class="swiper-cube-shadow"></div>'), s.append(e)));
                        for (let e = 0; e < l.length; e += 1) {
                            let t = l.eq(e),
                                s = e;
                            u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                            let a = 90 * s,
                                r = Math.floor(a / 360);
                            o && (r = Math.floor(-(a = -a) / 360));
                            let n = Math.max(Math.min(t[0].progress, 1), -1),
                                p = 0,
                                f = 0,
                                g = 0;
                            s % 4 == 0 ? (p = -(4 * r) * d, g = 0) : (s - 1) % 4 == 0 ? (p = 0, g = -(4 * r) * d) : (s - 2) % 4 == 0 ? (p = d + 4 * r * d, g = d) : (s - 3) % 4 == 0 && (p = -d, g = 3 * d + 4 * d * r), o && (p = -p), c || (f = p, p = 0);
                            let v = `rotateX(${c?0:-a}deg) rotateY(${c?a:0}deg) translate3d(${p}px, ${f}px, ${g}px)`;
                            n <= 1 && n > -1 && (m = 90 * s + 90 * n, o && (m = -(90 * s) - 90 * n)), t.transform(v), h.slideShadows && i(t, n, c)
                        }
                        if (a.css({
                                "-webkit-transform-origin": `50% 50% -${d/2}px`,
                                "transform-origin": `50% 50% -${d/2}px`
                            }), h.shadow)
                            if (c) e.transform(`translate3d(0px, ${r/2+h.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                            else {
                                let t = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                                    s = 1.5 - (Math.sin(2 * t * Math.PI / 360) / 2 + Math.cos(2 * t * Math.PI / 360) / 2),
                                    a = h.shadowScale,
                                    i = h.shadowScale / s,
                                    l = h.shadowOffset;
                                e.transform(`scale3d(${a}, 1, ${i}) translate3d(0px, ${n/2+l}px, ${-n/2/i}px) rotateX(-90deg)`)
                            } let g = p.isSafari || p.isWebView ? -d / 2 : 0;
                        a.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`), a[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
                    },
                    setTransition: e => {
                        let {
                            $el: s,
                            slides: a
                        } = t;
                        a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
                    },
                    recreateShadows: () => {
                        let e = t.isHorizontal();
                        t.slides.each(t => {
                            let s = Math.max(Math.min(t.progress, 1), -1);
                            i(f(t), s, e)
                        })
                    },
                    getEffectParams: () => t.params.cubeEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
                })
            }

            function ew(e, t, s) {
                let a = `swiper-slide-shadow${s?`-${s}`:""}`,
                    i = e.transformEl ? t.find(e.transformEl) : t,
                    l = i.children(`.${a}`);
                return l.length || (l = f(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), i.append(l)), l
            }

            function ey(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0,
                        transformEl: null
                    }
                });
                let i = (e, s, a) => {
                    let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        l = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                    0 === i.length && (i = ew(a, e, t.isHorizontal() ? "left" : "top")), 0 === l.length && (l = ew(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), l.length && (l[0].style.opacity = Math.max(s, 0))
                };
                em({
                    effect: "flip",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let {
                            slides: e,
                            rtlTranslate: s
                        } = t, a = t.params.flipEffect;
                        for (let l = 0; l < e.length; l += 1) {
                            let r = e.eq(l),
                                n = r[0].progress;
                            t.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                            let o = r[0].swiperSlideOffset,
                                d = -180 * n,
                                p = 0,
                                h = t.params.cssMode ? -o - t.translate : -o,
                                c = 0;
                            t.isHorizontal() ? s && (d = -d) : (c = h, h = 0, p = -d, d = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, a.slideShadows && i(r, n, a);
                            let u = `translate3d(${h}px, ${c}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
                            ef(a, r).transform(u)
                        }
                    },
                    setTransition: e => {
                        let {
                            transformEl: s
                        } = t.params.flipEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), eg({
                            swiper: t,
                            duration: e,
                            transformEl: s
                        })
                    },
                    recreateShadows: () => {
                        let e = t.params.flipEffect;
                        t.slides.each(s => {
                            let a = f(s),
                                l = a[0].progress;
                            t.params.flipEffect.limitRotation && (l = Math.max(Math.min(s.progress, 1), -1)), i(a, l, e)
                        })
                    },
                    getEffectParams: () => t.params.flipEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }

            function ex(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null
                    }
                }), em({
                    effect: "coverflow",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let {
                            width: e,
                            height: s,
                            slides: a,
                            slidesSizesGrid: i
                        } = t, l = t.params.coverflowEffect, r = t.isHorizontal(), n = t.translate, o = r ? -n + e / 2 : -n + s / 2, d = r ? l.rotate : -l.rotate, p = l.depth;
                        for (let e = 0, t = a.length; e < t; e += 1) {
                            let t = a.eq(e),
                                s = i[e],
                                n = (o - t[0].swiperSlideOffset - s / 2) / s,
                                h = "function" == typeof l.modifier ? l.modifier(n) : n * l.modifier,
                                c = r ? d * h : 0,
                                u = r ? 0 : d * h,
                                m = -p * Math.abs(h),
                                f = l.stretch;
                            "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(l.stretch) / 100 * s);
                            let g = r ? 0 : f * h,
                                v = r ? f * h : 0,
                                b = 1 - (1 - l.scale) * Math.abs(h);
                            .001 > Math.abs(v) && (v = 0), .001 > Math.abs(g) && (g = 0), .001 > Math.abs(m) && (m = 0), .001 > Math.abs(c) && (c = 0), .001 > Math.abs(u) && (u = 0), .001 > Math.abs(b) && (b = 0);
                            let w = `translate3d(${v}px,${g}px,${m}px)  rotateX(${u}deg) rotateY(${c}deg) scale(${b})`;
                            if (ef(l, t).transform(w), t[0].style.zIndex = -Math.abs(Math.round(h)) + 1, l.slideShadows) {
                                let e = r ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    s = r ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = ew(l, t, r ? "left" : "top")), 0 === s.length && (s = ew(l, t, r ? "right" : "bottom")), e.length && (e[0].style.opacity = h > 0 ? h : 0), s.length && (s[0].style.opacity = -h > 0 ? -h : 0)
                            }
                        }
                    },
                    setTransition: e => {
                        let {
                            transformEl: s
                        } = t.params.coverflowEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0
                    })
                })
            }

            function eC(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                let i = e => "string" == typeof e ? e : `${e}px`;
                em({
                    effect: "creative",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let {
                            slides: e,
                            $wrapperEl: s,
                            slidesSizesGrid: a
                        } = t, l = t.params.creativeEffect, {
                            progressMultiplier: r
                        } = l, n = t.params.centeredSlides;
                        if (n) {
                            let e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                            s.transform(`translateX(calc(50% - ${e}px))`)
                        }
                        for (let s = 0; s < e.length; s += 1) {
                            let a = e.eq(s),
                                o = a[0].progress,
                                d = Math.min(Math.max(a[0].progress, -l.limitProgress), l.limitProgress),
                                p = d;
                            n || (p = Math.min(Math.max(a[0].originalProgress, -l.limitProgress), l.limitProgress));
                            let h = a[0].swiperSlideOffset,
                                c = [t.params.cssMode ? -h - t.translate : -h, 0, 0],
                                u = [0, 0, 0],
                                m = !1;
                            t.isHorizontal() || (c[1] = c[0], c[0] = 0);
                            let f = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            d < 0 ? (f = l.next, m = !0) : d > 0 && (f = l.prev, m = !0), c.forEach((e, t) => {
                                c[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*r)}))`
                            }), u.forEach((e, t) => {
                                u[t] = f.rotate[t] * Math.abs(d * r)
                            }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                            let g = c.join(", "),
                                v = `rotateX(${u[0]}deg) rotateY(${u[1]}deg) rotateZ(${u[2]}deg)`,
                                b = p < 0 ? `scale(${1+(1-f.scale)*p*r})` : `scale(${1-(1-f.scale)*p*r})`,
                                w = p < 0 ? 1 + (1 - f.opacity) * p * r : 1 - (1 - f.opacity) * p * r,
                                y = `translate3d(${g}) ${v} ${b}`;
                            if (m && f.shadow || !m) {
                                let e = a.children(".swiper-slide-shadow");
                                if (0 === e.length && f.shadow && (e = ew(l, a)), e.length) {
                                    let t = l.shadowPerProgress ? d * (1 / l.limitProgress) : d;
                                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                                }
                            }
                            let x = ef(l, a);
                            x.transform(y).css({
                                opacity: w
                            }), f.origin && x.css("transform-origin", f.origin)
                        }
                    },
                    setTransition: e => {
                        let {
                            transformEl: s
                        } = t.params.creativeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), eg({
                            swiper: t,
                            duration: e,
                            transformEl: s,
                            allSlides: !0
                        })
                    },
                    perspective: () => t.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }

            function eE(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: a
                } = e;
                s({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null,
                        rotate: !0,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    }
                }), em({
                    effect: "cards",
                    swiper: t,
                    on: a,
                    setTranslate: () => {
                        let {
                            slides: e,
                            activeIndex: s
                        } = t, a = t.params.cardsEffect, {
                            startTranslate: i,
                            isTouched: l
                        } = t.touchEventsData, r = t.translate;
                        for (let n = 0; n < e.length; n += 1) {
                            let o = e.eq(n),
                                d = o[0].progress,
                                p = Math.min(Math.max(d, -4), 4),
                                h = o[0].swiperSlideOffset;
                            t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (h -= e[0].swiperSlideOffset);
                            let c = t.params.cssMode ? -h - t.translate : -h,
                                u = 0,
                                m = -100 * Math.abs(p),
                                f = 1,
                                g = -a.perSlideRotate * p,
                                v = a.perSlideOffset - .75 * Math.abs(p),
                                b = t.virtual && t.params.virtual.enabled ? t.virtual.from + n : n,
                                w = (b === s || b === s - 1) && p > 0 && p < 1 && (l || t.params.cssMode) && r < i,
                                y = (b === s || b === s + 1) && p < 0 && p > -1 && (l || t.params.cssMode) && r > i;
                            if (w || y) {
                                let e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                                g += -28 * p * e, f += -.5 * e, v += 96 * e, u = `${-25*e*Math.abs(p)}%`
                            }
                            if (c = p < 0 ? `calc(${c}px + (${v*Math.abs(p)}%))` : p > 0 ? `calc(${c}px + (-${v*Math.abs(p)}%))` : `${c}px`, !t.isHorizontal()) {
                                let e = u;
                                u = c, c = e
                            }
                            let x = p < 0 ? `${1+(1-f)*p}` : `${1-(1-f)*p}`,
                                C = `
        translate3d(${c}, ${u}, ${m}px)
        rotateZ(${a.rotate?g:0}deg)
        scale(${x})
      `;
                            if (a.slideShadows) {
                                let e = o.find(".swiper-slide-shadow");
                                0 === e.length && (e = ew(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                            }
                            o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length, ef(a, o).transform(C)
                        }
                    },
                    setTransition: e => {
                        let {
                            transformEl: s
                        } = t.params.cardsEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), eg({
                            swiper: t,
                            duration: e,
                            transformEl: s
                        })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=4283.946e8a72.js.map