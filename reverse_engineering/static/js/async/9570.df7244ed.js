try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8a3ba257-74f0-47ba-8572-c98f32ff8f3b", e._sentryDebugIdIdentifier = "sentry-dbid-8a3ba257-74f0-47ba-8572-c98f32ff8f3b")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["9570"], {
        54444: function(e, a, n) {
            n.d(a, {
                A: () => c
            });
            var m = n(46756),
                o = n.n(m),
                i = n(5421),
                d = n.n(i)()(o());
            d.push([e.id, ".yeNsVW{color:var(--color-neutrals-n-300);height:100%;white-space:nowrap;align-items:center;column-gap:8px;margin:0;font-family:Shabnam;font-size:1.5rem;font-weight:400;line-height:2.4rem;display:flex}.yeNsVW .kY_dh5{background-color:var(--color-neutrals-n-100);width:1px;height:100%}.O0IKwl{align-items:center;display:flex}", ""]), d.locals = {
                PrefixNumber: "yeNsVW",
                prefixNumber: "yeNsVW",
                Divider: "kY_dh5",
                divider: "kY_dh5",
                SuffixIcon: "O0IKwl",
                suffixIcon: "O0IKwl"
            };
            let c = d
        },
        46729: function(e, a, n) {
            n.d(a, {
                A: () => c
            });
            var m = n(46756),
                o = n.n(m),
                i = n(5421),
                d = n.n(i)()(o());
            d.push([e.id, ".x2STxk{width:41px!important;height:28px!important}.x2STxk .UmfQgT{width:100%;height:100%}.bfXvw1{align-items:center;transition:transform .3s cubic-bezier(.25,1,.5,1);display:flex}", ""]), d.locals = {
                logoWrapper: "x2STxk",
                logo: "UmfQgT",
                baleLogoWrapper: "bfXvw1"
            };
            let c = d
        },
        29765: function(e, a, n) {
            n.d(a, {
                p: () => _
            });
            var m = n(36878),
                o = n(58191),
                i = n.n(o),
                d = n(33154),
                c = n(36214),
                r = n(72984),
                t = n(93631),
                l = n(86455),
                s = n(42625),
                j = n(53321),
                F = n.n(j),
                C = n(23518),
                u = n.n(C),
                h = n(14182),
                f = n.n(h),
                p = n(5033),
                g = n.n(p),
                b = n(77141),
                w = n.n(b),
                y = n(66338),
                S = n.n(y),
                x = n(54444),
                A = {};
            A.styleTagTransform = S(), A.setAttributes = g(), A.insert = f().bind(null, "head"), A.domAPI = u(), A.insertStyleElement = w(), F()(x.A, A);
            let v = x.A && x.A.locals ? x.A.locals : void 0,
                L = e => {
                    if (e.length <= 3) return e;
                    let a = e.slice(0, 3);
                    if (e.length <= 6) return `${a}  ${e.slice(3)}`;
                    let n = e.slice(3, 6);
                    return `${a}  ${n}  ${e.slice(6)}`
                },
                _ = (0, o.forwardRef)((e, a) => {
                    let {
                        datatestidPhonenumber: n,
                        prefixNumber: j,
                        suffixClassName: F,
                        suffix: C,
                        value: u,
                        onChange: h,
                        placeholder: f,
                        maxLength: p,
                        ...g
                    } = e, b = (0, o.useRef)(null), w = (0, d.R)(b, a), y = (0, t.x)(u, b, L), S = (e => {
                        if (void 0 != e) return L("x".repeat(e)).length
                    })(p), x = (0, o.useCallback)((e, a) => {
                        let n = e.replace(/\s/g, "");
                        null == h || h(n, a)
                    }, [h, S]), A = C && i().isValidElement(C) ? i().cloneElement(C, {
                        color: g.disabled ? (0, r.Er)(c.GI.color_neutrals_n_100) : (0, r.Er)(c.GI.color_neutrals_n_300),
                        size: 24
                    }) : void 0;
                    return (0, m.jsx)(l.T, {
                        value: L(u),
                        placeholder: f ? L(f) : "",
                        onChange: x,
                        cursorStart: y,
                        pattern: "^[\\s0-9۰-۹٠-٩]*$",
                        inputMode: "numeric",
                        prefix: (0, m.jsxs)("div", {
                            className: v.PrefixNumber,
                            "data-testid": n,
                            children: [j, (0, m.jsx)("div", {
                                className: v.Divider
                            })]
                        }),
                        suffix: A,
                        suffixClassName: (0, s.A)(v.SuffixIcon, F),
                        ref: w,
                        direction: "ltr",
                        contentDirection: "ltr",
                        maxLength: S,
                        ...g
                    })
                })
        },
        40503: function(e, a, n) {
            n.d(a, {
                e: () => o
            });
            var m = n(36878);
            n(58191);
            let o = e => (0, m.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: e.size,
                height: e.size,
                viewBox: "0 0 24 24",
                fill: "none",
                ...e,
                children: [(0, m.jsxs)("g", {
                    clipPath: "url(#clip0_7543_142270)",
                    children: [(0, m.jsx)("path", {
                        d: "M20.989 19.8439C21.0475 19.7853 21.1059 19.6976 21.1644 19.639C21.2229 19.5513 21.2814 19.4927 21.3399 19.4049C21.3983 19.3171 21.4568 19.2585 21.5152 19.1708C21.5737 19.0829 21.6321 18.9951 21.6906 18.9366C21.7491 18.8487 21.8075 18.7903 21.8661 18.7024L22.0414 18.439C22.0999 18.3513 22.1291 18.2927 22.1876 18.2049C22.246 18.1171 22.2753 18.0292 22.3337 17.9415C22.3922 17.8537 22.4214 17.7951 22.4799 17.7073C22.5384 17.6195 22.5676 17.5317 22.6261 17.4439C22.6553 17.3561 22.7138 17.2683 22.743 17.2097C22.8015 17.1219 22.8307 17.0342 22.8599 16.9171C22.8891 16.8292 22.9476 16.7415 22.9768 16.6537C23.0061 16.5658 23.0645 16.4487 23.0938 16.361L23.1815 16.0976C23.2107 16.0098 23.24 15.8927 23.2984 15.8049L23.3861 15.5415L23.4738 15.2195L23.5615 14.9561L23.6492 14.6342C23.6784 14.5463 23.6784 14.4585 23.7077 14.3708C23.7369 14.2537 23.7369 14.1366 23.7662 14.0487C23.7954 13.961 23.7954 13.8732 23.8246 13.7853C23.8539 13.6683 23.8539 13.5513 23.8831 13.4342C23.8831 13.3463 23.9123 13.2585 23.9123 13.2C23.9123 13.0537 23.9415 12.9366 23.9415 12.7903C23.9415 12.7317 23.9415 12.6439 23.9708 12.5853C23.9708 12.3805 23.9708 12.2049 24 12V11.9708C24 5.91219 19.4982 0.90732 13.6809 0.0878049H13.6516C13.4763 0.0585366 13.3009 0.0292681 13.0962 0.0292681H12.9208C12.7747 0.0292681 12.6578 0 12.5115 0H11.4008C11.313 0 11.2253 -1.69501e-07 11.1376 0.0292681C11.0499 0.0292681 10.9915 0.0292683 10.9038 0.0585365C10.8161 0.0585365 10.7283 0.0878049 10.6699 0.0878049C10.5822 0.0878049 10.5237 0.117073 10.4361 0.117073C10.3484 0.117073 10.2607 0.146342 10.2022 0.146342C10.1145 0.146342 10.056 0.17561 9.96831 0.17561C9.88063 0.17561 9.79294 0.204878 9.73449 0.234147C9.67603 0.234147 9.58834 0.263415 9.5298 0.263415C9.44211 0.292683 9.38366 0.292683 9.29597 0.321951C9.23751 0.351219 9.14983 0.351219 9.09137 0.380488C9.00369 0.409756 8.94523 0.409756 8.85746 0.439024C8.799 0.468292 8.71132 0.468292 8.65286 0.497561C8.56516 0.526829 8.5067 0.556097 8.419 0.556097C8.36054 0.585366 8.27283 0.585366 8.21437 0.614634C8.12667 0.643902 8.06821 0.673171 7.98051 0.702439C7.92205 0.731707 7.83435 0.760976 7.77588 0.760976C7.68819 0.790244 7.62972 0.819512 7.54203 0.848781C7.48356 0.878049 7.42509 0.90732 7.33739 0.936583C7.2497 0.965854 7.19123 0.995126 7.10353 1.02439L6.92814 1.11219C6.84044 1.14147 6.78197 1.2 6.69428 1.22927L6.51888 1.31708C6.43118 1.34634 6.37272 1.40487 6.28502 1.43415L6.10962 1.52195C6.02193 1.55122 5.96346 1.60976 5.87576 1.66829L5.70037 1.7561C5.61267 1.81463 5.52497 1.87317 5.46651 1.90244C5.40804 1.93171 4.96955 2.25366 4.96955 2.25366C4.96955 2.25366 2.7771 0.585366 1.90012 0.146342C1.02315 -0.292683 0 0.321951 0 1.31708V12.0292C0 18.3805 4.94031 23.5903 11.1961 24H12.57C12.687 24 12.7747 24 12.8916 23.9708C12.9793 23.9708 13.0962 23.9708 13.1839 23.9415C13.3009 23.9415 13.3886 23.9122 13.5055 23.9122C13.5932 23.9122 13.7101 23.8829 13.7978 23.8829C13.8855 23.8537 14.0025 23.8537 14.0901 23.8244C14.1778 23.7951 14.2947 23.7951 14.3824 23.7658C14.4701 23.7366 14.5871 23.7073 14.6748 23.7073C14.7625 23.6781 14.8502 23.6781 14.9671 23.6487L15.2595 23.561L15.5225 23.4732L15.8149 23.3853L16.0779 23.2976C16.1656 23.2683 16.2533 23.239 16.3703 23.1805C16.458 23.1513 16.5457 23.1219 16.6334 23.0634C16.7211 23.0342 16.8087 22.9756 16.8964 22.9463C16.9842 22.9171 17.0719 22.8585 17.1596 22.8292C17.2473 22.8 17.3349 22.7415 17.4226 22.6829C17.5103 22.6537 17.5981 22.5951 17.6858 22.5658C17.7735 22.5073 17.8611 22.4781 17.9488 22.4195C18.0365 22.361 18.1242 22.3317 18.1827 22.2732C18.2704 22.2147 18.3581 22.1561 18.4458 22.1268C18.5335 22.0683 18.5919 22.039 18.6796 21.9805C18.7673 21.9219 18.8551 21.8634 18.9135 21.8049C19.0012 21.7463 19.0597 21.6878 19.1474 21.6292C19.2351 21.5708 19.2935 21.5122 19.3812 21.4537C19.469 21.3951 19.5274 21.3366 19.6151 21.2781C19.7028 21.2195 19.7613 21.161 19.8489 21.0732C19.9074 21.0147 19.9951 20.9561 20.0536 20.8976C20.1413 20.839 20.1998 20.7513 20.2582 20.6927C20.3167 20.6342 20.4044 20.5756 20.4628 20.4878L20.6675 20.2829C20.726 20.2244 20.7844 20.1366 20.8721 20.0781C20.8429 19.9903 20.9013 19.9317 20.989 19.8439Z",
                        fill: "#00B894"
                    }), (0, m.jsx)("path", {
                        d: "M10.3202 18.119C9.73557 18.119 9.12168 17.8849 8.65394 17.4459L4.94138 13.6995C4.03517 12.7922 4.03517 11.2995 4.94138 10.3922C5.84759 9.4849 7.33846 9.4849 8.24466 10.3922L10.3202 12.4702L15.6113 7.17267C16.5175 6.26536 18.0084 6.26536 18.9146 7.17267C19.8208 8.07999 19.8208 9.57267 18.9146 10.48L11.9572 17.4166C11.5187 17.8849 10.9048 18.119 10.3202 18.119Z",
                        fill: "white"
                    })]
                }), (0, m.jsx)("defs", {
                    children: (0, m.jsx)("clipPath", {
                        id: "clip0_7543_142270",
                        children: (0, m.jsx)("rect", {
                            width: e.size,
                            height: e.size,
                            fill: "white"
                        })
                    })
                })]
            })
        },
        44916: function(e, a, n) {
            n.d(a, {
                a: () => P
            });
            var m = n(45831);
            n(69708);
            var o = n(58191),
                i = n(17022);
            let d = (0, n(80412).GD)(() => Promise.all([n.e("6330"), n.e("9253")]).then(n.bind(n, 98335)).then(e => ({
                    default: e.RLottieComponent
                }))),
                c = (0, o.forwardRef)(function(e, a) {
                    return (0, m.Y)(o.Suspense, {
                        fallback: null,
                        children: (0, m.Y)(d, {
                            ref: a,
                            ...e
                        })
                    })
                });
            var r = n(52484),
                t = n(36878);
            let l = e => {
                    let {
                        color: a
                    } = e;
                    return (0, t.jsxs)("svg", {
                        width: "42",
                        height: "17",
                        viewBox: "0 0 42 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsxs)("g", {
                            clipPath: "url(#clip0_28043_10857)",
                            children: [(0, t.jsx)("path", {
                                d: "M0.000591415 6.65405C0.000591415 4.90733 0.000591415 3.16061 0.000591415 1.41389C-0.00251228 1.26621 0.00660371 1.11854 0.0278507 0.972365C0.0761259 0.689082 0.227084 0.433515 0.451875 0.254493C0.676666 0.0754704 0.95953 -0.0144559 1.24643 0.00189449C1.53333 0.0182449 1.80416 0.139726 2.00715 0.343127C2.21015 0.546529 2.33109 0.817591 2.34687 1.10452C2.35339 1.21239 2.35043 1.32143 2.35043 1.42989C2.35043 4.74514 2.35043 8.06079 2.35043 11.3768C2.34508 11.6925 2.37771 12.0077 2.44762 12.3156C2.61911 12.9945 3.01507 13.5956 3.57122 14.0211C4.12737 14.4466 4.81104 14.6717 5.51121 14.6597C6.21138 14.6476 6.88693 14.3993 7.42816 13.9549C7.96938 13.5106 8.3445 12.8963 8.49259 12.2119C8.86359 10.4968 7.7026 8.79527 5.97267 8.51021C5.57197 8.44577 5.16277 8.45663 4.76605 8.54221C4.58297 8.58459 4.39263 8.58459 4.20955 8.54221C3.95683 8.48405 3.73068 8.34336 3.56682 8.14236C3.40295 7.94136 3.31071 7.6915 3.30466 7.43224C3.29861 7.17298 3.3791 6.91909 3.53342 6.71066C3.68773 6.50224 3.90707 6.35116 4.15681 6.28127C4.35637 6.2246 4.56038 6.18495 4.76664 6.16274C6.55761 5.97191 8.11093 6.49403 9.3703 7.78422C10.4744 8.91558 10.974 10.2941 10.8958 11.8735C10.8158 13.1897 10.2616 14.4323 9.33575 15.3712C8.40989 16.3102 7.17514 16.8817 5.86018 16.9801C4.54522 17.0785 3.23917 16.6969 2.18393 15.9062C1.12868 15.1155 0.395759 13.9691 0.1209 12.6795C0.036711 12.2633 -0.00302159 11.8393 0.00237108 11.4148L0.000591415 6.65405Z",
                                fill: a
                            }), (0, t.jsx)("path", {
                                d: "M23.812 13.5689C23.812 14.2694 23.812 14.9697 23.812 15.6698C23.8151 15.7687 23.8115 15.8677 23.8014 15.9661C23.7643 16.2548 23.6215 16.5195 23.4006 16.709C23.1797 16.8985 22.8963 16.9993 22.6053 16.9919C22.3144 16.9845 22.0365 16.8695 21.8254 16.6691C21.6144 16.4686 21.4852 16.197 21.4628 15.9068C21.4539 15.8091 21.4569 15.7095 21.4569 15.6105C21.4569 14.2783 21.4569 12.9466 21.4569 11.6149C21.4614 11.2592 21.4063 10.9052 21.2939 10.5677C21.0751 9.91804 20.6472 9.35917 20.077 8.97848C19.5069 8.59778 18.8268 8.41671 18.1428 8.46357C17.4589 8.51043 16.8097 8.78258 16.2969 9.23747C15.784 9.69237 15.4363 10.3044 15.3082 10.9778C14.9585 12.847 16.3032 14.4282 17.9662 14.6267C18.3196 14.6684 18.6774 14.6528 19.0258 14.5805C19.219 14.5354 19.42 14.5367 19.6126 14.5841C19.8631 14.6493 20.0852 14.7954 20.2444 14.9996C20.4036 15.2038 20.491 15.4547 20.4932 15.7136C20.4949 15.9727 20.4099 16.2249 20.2517 16.43C20.0935 16.6351 19.8712 16.7814 19.6203 16.8456C19.3909 16.9048 19.1573 16.9458 18.9215 16.9683C15.9642 17.2533 13.5794 15.2496 13.033 12.7362C12.3402 9.55133 14.5188 6.67464 17.4672 6.19045C18.2485 6.0645 19.0478 6.10958 19.81 6.32255C20.5722 6.53553 21.2791 6.91134 21.882 7.42405C22.4849 7.93676 22.9693 8.57416 23.3019 9.29227C23.6345 10.0104 23.8073 10.7921 23.8085 11.5835L23.812 13.5689Z",
                                fill: a
                            }), (0, t.jsx)("path", {
                                d: "M28.1651 8.50923C28.1651 10.8774 28.1651 13.2454 28.1651 15.6133C28.1686 15.7611 28.1581 15.9089 28.1337 16.0548C28.0151 16.6545 27.5013 17.0368 26.8838 16.9917C26.606 16.9684 26.3457 16.8463 26.1501 16.6477C25.9544 16.4492 25.8363 16.1871 25.817 15.909C25.8117 15.8402 25.8135 15.7709 25.8135 15.7016C25.8135 10.9063 25.8135 6.111 25.8135 1.31571C25.8105 1.1682 25.8258 1.02089 25.8591 0.877158C25.9246 0.621476 26.0749 0.395591 26.2855 0.236487C26.496 0.0773834 26.7544 -0.00551179 27.0182 0.00137334C27.2821 0.00825846 27.5358 0.104516 27.7378 0.274386C27.9398 0.444256 28.0781 0.677674 28.1301 0.936422C28.1569 1.09158 28.1686 1.24897 28.1651 1.40639C28.1651 3.77381 28.1651 6.14142 28.1651 8.50923Z",
                                fill: a
                            }), (0, t.jsx)("path", {
                                d: "M38.4483 10.335C38.4163 10.2592 38.3943 10.1946 38.3635 10.1341C38.0742 9.57903 37.6237 9.12447 37.0713 8.83024C36.5188 8.53601 35.8902 8.41588 35.2681 8.48565C34.6461 8.55542 34.0597 8.81183 33.5861 9.22115C33.1126 9.63047 32.774 10.1735 32.6149 10.7789C32.1147 12.7204 33.5269 14.5837 35.5556 14.653C35.9112 14.6655 36.2667 14.6572 36.6223 14.6572H38.488C38.5769 14.6572 38.6658 14.6572 38.7547 14.6613C39.0525 14.6797 39.332 14.8115 39.5357 15.0297C39.7393 15.2478 39.8517 15.5356 39.8496 15.8341C39.8476 16.1325 39.7313 16.4188 39.5247 16.6341C39.318 16.8494 39.0367 16.9773 38.7387 16.9916C38.6895 16.9946 38.6403 16.9946 38.5905 16.9946C37.6031 16.9946 36.6164 16.9946 35.6273 16.9946C34.8739 17.0066 34.1271 16.852 33.4404 16.5418C31.6548 15.7168 30.5477 14.3407 30.236 12.3933C29.7429 9.3151 31.912 6.66479 34.6939 6.19779C36.0268 5.96993 37.3968 6.24512 38.5383 6.97001C39.6798 7.69489 40.5116 8.81783 40.8722 10.1211C40.9858 10.5506 41.0512 10.9915 41.0672 11.4356C41.0776 11.6134 41.0526 11.7914 40.9937 11.9595C40.9163 12.1746 40.7769 12.362 40.5932 12.498C40.4095 12.6341 40.1896 12.7127 39.9613 12.724C39.8825 12.7281 39.8036 12.724 39.7242 12.724H35.7855C35.7067 12.724 35.6273 12.724 35.5484 12.724C35.2598 12.7087 34.9872 12.5869 34.7831 12.3822C34.5791 12.1775 34.4582 11.9044 34.4438 11.6157C34.4135 10.9597 34.9238 10.4536 35.4655 10.402C35.5929 10.3896 35.7221 10.3866 35.8501 10.3866C36.6105 10.3866 37.3702 10.3866 38.1306 10.3866C38.2254 10.3842 38.3262 10.4062 38.4483 10.335Z",
                                fill: a
                            })]
                        }), (0, t.jsx)("defs", {
                            children: (0, t.jsx)("clipPath", {
                                id: "clip0_28043_10857",
                                children: (0, t.jsx)("rect", {
                                    width: "41.0694",
                                    height: "16.9953",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                },
                s = e => {
                    let {
                        color: a,
                        size: n
                    } = e;
                    return (0, t.jsxs)("svg", {
                        width: n,
                        height: n,
                        viewBox: "0 0 30 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsxs)("g", {
                            clipPath: "url(#clip0_23335_90787)",
                            children: [(0, t.jsx)("path", {
                                d: "M28.7599 4.85976C28.0636 4.85976 27.5036 5.38871 27.5036 6.04632V10.3637C27.3825 12.0935 25.8083 13.4087 23.9617 13.2943C22.2967 13.1943 20.9647 11.9362 20.8587 10.3637V1.42875C20.8587 0.771136 20.2987 0.242188 19.6024 0.242188C18.9062 0.242188 18.3461 0.771136 18.3461 1.42875V10.3637C18.225 12.0935 16.6509 13.4087 14.8042 13.2943C13.1392 13.1943 11.8073 11.9362 11.7013 10.3637C11.7013 7.31866 9.08273 4.85976 5.85871 4.85976C2.63469 4.85976 0.03125 7.33295 0.03125 10.378C0.03125 13.423 2.64982 15.8819 5.87385 15.8819C6.3128 15.8819 6.75175 15.839 7.17556 15.7389C7.8567 15.596 8.28051 14.9527 8.11401 14.3093C7.94751 13.666 7.28152 13.2657 6.60039 13.423C6.35821 13.4802 6.10089 13.5088 5.84357 13.5088C3.99695 13.5088 2.5136 12.1078 2.5136 10.3637C2.5136 8.61958 3.99695 7.21858 5.84357 7.21858C7.6902 7.21858 9.17355 8.61958 9.17355 10.3637C9.17355 13.4087 11.777 15.8819 15.001 15.8819C16.7871 15.8819 18.4824 15.1099 19.5873 13.7804C21.5853 16.1678 25.2483 16.5824 27.776 14.7096C29.1837 13.666 30.001 12.0649 30.001 10.378V6.04632C30.0162 5.38871 29.4561 4.85976 28.7599 4.85976Z",
                                fill: a
                            }), (0, t.jsx)("path", {
                                d: "M24.0879 19.9167C24.7901 19.9167 25.3593 19.3757 25.3593 18.7083C25.3593 18.041 24.7901 17.5 24.0879 17.5C23.3857 17.5 22.8164 18.041 22.8164 18.7083C22.8164 19.3757 23.3857 19.9167 24.0879 19.9167Z",
                                fill: a
                            })]
                        }), (0, t.jsx)("defs", {
                            children: (0, t.jsx)("clipPath", {
                                id: "clip0_23335_90787",
                                children: (0, t.jsx)("rect", {
                                    width: "30",
                                    height: "20",
                                    fill: a
                                })
                            })
                        })]
                    })
                };
            var j = n(99290),
                F = n(64834),
                C = n(41941),
                u = n(92810),
                h = n(87197),
                f = n(2077),
                p = n(53321),
                g = n.n(p),
                b = n(23518),
                w = n.n(b),
                y = n(14182),
                S = n.n(y),
                x = n(5033),
                A = n.n(x),
                v = n(77141),
                L = n.n(v),
                _ = n(66338),
                M = n.n(_),
                T = n(46729),
                I = {};
            I.styleTagTransform = M(), I.setAttributes = A(), I.insert = S().bind(null, "head"), I.domAPI = w(), I.insertStyleElement = L(), g()(T.A, I);
            let k = T.A && T.A.locals ? T.A.locals : void 0,
                N = e => e ? "dark" : "light",
                B = (0, f.Ng)(e => ({
                    baleLogoType: (0, h._W)((0, u.t2)(e), r.$Z.appbar_new_logo_type, "default"),
                    isDarkTheme: (0, F.g4)((0, u.t7)(e))
                }))(e => {
                    let a = (0, o.useRef)(null),
                        n = (0, j.useTheme)(),
                        {
                            locale: i
                        } = (0, C.t)(),
                        d = ((e, a) => {
                            let n = "/appbar-lotties/";
                            switch (e) {
                                case "iran_flag_theme":
                                    if (a) return n + "iran_flag_dark.json";
                                    return;
                                case "muharram":
                                    if (a) return n + "muharram_dark.json";
                                    return;
                                case "nowruz":
                                    if (a) return n + "nowruz_dark.json";
                                    return;
                                case "religion_births":
                                    if (a) return n + "religion_births_dark.json";
                                    return;
                                case "22bahman":
                                    return n + `22bahman_${N(a)}.json`;
                                case "charshanbe_souri":
                                    return n + `charshanbe_souri_${N(a)}.json`;
                                case "imam_hosein":
                                    return n + `imam_hosein_${N(a)}.json`;
                                case "ramezan":
                                    return n + `ramadan_${N(a)}.json`;
                                default:
                                    return
                            }
                        })(e.baleLogoType, e.isDarkTheme),
                        r = (e => {
                            switch (e) {
                                case "iran_flag_theme":
                                case "muharram":
                                    return 100;
                                case "nowruz":
                                    return 60;
                                case "yalda":
                                    return 50
                            }
                            return 40
                        })(e.baleLogoType),
                        [t, F] = (0, o.useState)(!1),
                        [u, h] = (0, o.useState)(!1),
                        f = (0, o.useRef)(null),
                        p = (0, o.useCallback)(() => {
                            f.current && (clearTimeout(f.current), f.current = null)
                        }, []),
                        g = (0, o.useCallback)(() => {
                            p(), F(!1), h(!0)
                        }, [p]);
                    (0, o.useEffect)(() => (d && (p(), F(!1), h(!1), f.current = setTimeout(() => {
                        F(!0), h(!1)
                    }, 4e3)), p), [d, p]), (0, o.useEffect)(() => {
                        !u || a.current && a.current.play()
                    }, [u]);
                    let b = (0, o.useMemo)(() => {
                            let a = e.storiesWidth ?? 0;
                            return {
                                transform: e.withStories ? `translateX(${a}px)` : void 0
                            }
                        }, [e.withStories, e.storiesWidth, r]),
                        w = (0, o.useMemo)(() => {
                            let e = n.dark[500];
                            return "en" === i ? (0, m.Y)(l, {
                                size: 27,
                                color: e
                            }) : (0, m.Y)(s, {
                                size: 27,
                                color: e
                            })
                        }, [i, n.dark]);
                    return d ? (0, m.Y)("div", {
                        className: k.baleLogoWrapper,
                        style: b,
                        "data-sentry-component": "AppBarAnimatedLogoFC",
                        "data-sentry-source-file": "AppBarAnimatedLogo.tsx",
                        children: t ? w : (0, m.Y)(c, {
                            ref: a,
                            tgsUrl: d,
                            size: r,
                            renderId: `appbar-logo-${e.baleLogoType}`,
                            quality: .75,
                            isLowPriority: !1,
                            onLoad: g
                        })
                    }) : (0, m.Y)("div", {
                        className: k.baleLogoWrapper,
                        style: b,
                        children: w
                    })
                }),
                P = e => {
                    let [a, n] = (0, o.useState)(0);
                    return (0, m.FD)(m.FK, {
                        children: [(0, m.Y)(B, {
                            withStories: e.withStories,
                            storiesWidth: a,
                            isScrolling: e.isScrolling,
                            "data-sentry-element": "AppBarAnimatedLogo",
                            "data-sentry-source-file": "AppBarLogo.tsx"
                        }), e.withStories && (0, m.Y)(i.LazyModuleProvider, {
                            moduleNames: i.ModuleName.Story,
                            children: () => (0, m.Y)(i.LazyStoryModule.StoryAnimatedRow, {
                                collapsed: e.collapsed,
                                setCollapsed: e.setCollapsed,
                                setWidth: n,
                                ref: e.storyRowRef
                            })
                        })]
                    })
                }
        },
        72036: function(e, a, n) {
            n.d(a, {
                X: () => r,
                J: () => t
            });
            var m = JSON.parse('[{"name":"Andorra","nameFa":"آندورا","emoji":"\uD83C\uDDE6\uD83C\uDDE9","code":"+376"},{"name":"United Arab Emirates","nameFa":"امارات متحده عربی","emoji":"\uD83C\uDDE6\uD83C\uDDEA","code":"+971"},{"name":"Afghanistan","nameFa":"افغانستان","emoji":"\uD83C\uDDE6\uD83C\uDDEB","code":"+93"},{"name":"Antigua And Barbuda","nameFa":"آنتیگوا و باربودا","emoji":"\uD83C\uDDE6\uD83C\uDDEC","code":"+1 268"},{"name":"Anguilla","nameFa":"آنگویلا","emoji":"\uD83C\uDDE6\uD83C\uDDEE","code":"+1 264"},{"name":"Albania","nameFa":"آلبانی","emoji":"\uD83C\uDDE6\uD83C\uDDF1","code":"+355"},{"name":"Armenia","nameFa":"ارمنستان","emoji":"\uD83C\uDDE6\uD83C\uDDF2","code":"+374"},{"name":"Angola","nameFa":"آنگولا","emoji":"\uD83C\uDDE6\uD83C\uDDF4","code":"+244"},{"name":"Antarctica","nameFa":"جنوبگان","emoji":"\uD83C\uDDE6\uD83C\uDDF6","code":"+672"},{"name":"Argentina","nameFa":"آرژانتین","emoji":"\uD83C\uDDE6\uD83C\uDDF7","code":"+54"},{"name":"American Samoa","nameFa":"ساموآی آمریکا","emoji":"\uD83C\uDDE6\uD83C\uDDF8","code":"+1 684"},{"name":"Austria","nameFa":"اتریش","emoji":"\uD83C\uDDE6\uD83C\uDDF9","code":"+43"},{"name":"Australia","nameFa":"استرالیا","emoji":"\uD83C\uDDE6\uD83C\uDDFA","code":"+61"},{"name":"Aruba","nameFa":"آروبا","emoji":"\uD83C\uDDE6\uD83C\uDDFC","code":"+297"},{"name":"\xc5land Islands","nameFa":"جزایر آلند","emoji":"\uD83C\uDDE6\uD83C\uDDFD","code":"+358"},{"name":"Azerbaijan","nameFa":"جمهوری آذربایجان","emoji":"\uD83C\uDDE6\uD83C\uDDFF","code":"+994"},{"name":"Bosnia & Herzegovina","nameFa":"بوسنی و هرزگوین","emoji":"\uD83C\uDDE7\uD83C\uDDE6","code":"+387"},{"name":"Barbados","nameFa":"باربادوس","emoji":"\uD83C\uDDE7\uD83C\uDDE7","code":"+1 246"},{"name":"Bangladesh","nameFa":"بنگلادش","emoji":"\uD83C\uDDE7\uD83C\uDDE9","code":"+880"},{"name":"Belgium","nameFa":"بلژیک","emoji":"\uD83C\uDDE7\uD83C\uDDEA","code":"+32"},{"name":"Burkina Faso","nameFa":"بورکینافاسو","emoji":"\uD83C\uDDE7\uD83C\uDDEB","code":"+226"},{"name":"Bulgaria","nameFa":"بلغارستان","emoji":"\uD83C\uDDE7\uD83C\uDDEC","code":"+359"},{"name":"Bahrain","nameFa":"بحرین","emoji":"\uD83C\uDDE7\uD83C\uDDED","code":"+973"},{"name":"Burundi","nameFa":"بوروندی","emoji":"\uD83C\uDDE7\uD83C\uDDEE","code":"+257"},{"name":"Benin","nameFa":"بنین","emoji":"\uD83C\uDDE7\uD83C\uDDEF","code":"+229"},{"name":"Saint Barth\xe9lemy","nameFa":"سن بارتلمی","emoji":"\uD83C\uDDE7\uD83C\uDDF1","code":"+590"},{"name":"Bermuda","nameFa":"برمودا","emoji":"\uD83C\uDDE7\uD83C\uDDF2","code":"+1 441"},{"name":"Brunei Darussalam","nameFa":"برونئی","emoji":"\uD83C\uDDE7\uD83C\uDDF3","code":"+673"},{"name":"Bolivia, Plurinational State Of","nameFa":"بولیوی","emoji":"\uD83C\uDDE7\uD83C\uDDF4","code":"+591"},{"name":"Bonaire, Saint Eustatius And Saba","nameFa":"جزایر کارائیب هلند","emoji":"\uD83C\uDDE7\uD83C\uDDF6","code":"+599"},{"name":"Brazil","nameFa":"برزیل","emoji":"\uD83C\uDDE7\uD83C\uDDF7","code":"+55"},{"name":"Bahamas","nameFa":"باهاما","emoji":"\uD83C\uDDE7\uD83C\uDDF8","code":"+1 242"},{"name":"Bhutan","nameFa":"بوتان","emoji":"\uD83C\uDDE7\uD83C\uDDF9","code":"+975"},{"name":"Botswana","nameFa":"بوتسوانا","emoji":"\uD83C\uDDE7\uD83C\uDDFC","code":"+267"},{"name":"Belarus","nameFa":"بلاروس","emoji":"\uD83C\uDDE7\uD83C\uDDFE","code":"+375"},{"name":"Belize","nameFa":"بلیز","emoji":"\uD83C\uDDE7\uD83C\uDDFF","code":"+501"},{"name":"Canada","nameFa":"کانادا","emoji":"\uD83C\uDDE8\uD83C\uDDE6","code":"+1"},{"name":"Cocos (Keeling) Islands","nameFa":"جزایر کوکوس","emoji":"\uD83C\uDDE8\uD83C\uDDE8","code":"+61"},{"name":"Democratic Republic Of Congo","nameFa":"جمهوری دموکراتیک کنگو","emoji":"\uD83C\uDDE8\uD83C\uDDE9","code":"+243"},{"name":"Central African Republic","nameFa":"جمهوری آفریقای مرکزی","emoji":"\uD83C\uDDE8\uD83C\uDDEB","code":"+236"},{"name":"Republic Of Congo","nameFa":"جمهوری کنگو","emoji":"\uD83C\uDDE8\uD83C\uDDEC","code":"+242"},{"name":"Switzerland","nameFa":"سوئیس","emoji":"\uD83C\uDDE8\uD83C\uDDED","code":"+41"},{"name":"C\xf4te d\'Ivoire","nameFa":"ساحل عاج","emoji":"\uD83C\uDDE8\uD83C\uDDEE","code":"+225"},{"name":"Cook Islands","nameFa":"جزایر کوک","emoji":"\uD83C\uDDE8\uD83C\uDDF0","code":"+682"},{"name":"Chile","nameFa":"شیلی","emoji":"\uD83C\uDDE8\uD83C\uDDF1","code":"+56"},{"name":"Cameroon","nameFa":"کامرون","emoji":"\uD83C\uDDE8\uD83C\uDDF2","code":"+237"},{"name":"China","nameFa":"چین","emoji":"\uD83C\uDDE8\uD83C\uDDF3","code":"+86"},{"name":"Colombia","nameFa":"کلمبیا","emoji":"\uD83C\uDDE8\uD83C\uDDF4","code":"+57"},{"name":"Costa Rica","nameFa":"کاستاریکا","emoji":"\uD83C\uDDE8\uD83C\uDDF7","code":"+506"},{"name":"Cuba","nameFa":"کوبا","emoji":"\uD83C\uDDE8\uD83C\uDDFA","code":"+53"},{"name":"Cabo Verde","nameFa":"کیپ ورد","emoji":"\uD83C\uDDE8\uD83C\uDDFB","code":"+238"},{"name":"Curacao","nameFa":"کوراسائو","emoji":"\uD83C\uDDE8\uD83C\uDDFC","code":"+599"},{"name":"Christmas Island","nameFa":"جزیره کریسمس","emoji":"\uD83C\uDDE8\uD83C\uDDFD","code":"+61"},{"name":"Cyprus","nameFa":"قبرس","emoji":"\uD83C\uDDE8\uD83C\uDDFE","code":"+357"},{"name":"Czech Republic","nameFa":"جمهوری چک","emoji":"\uD83C\uDDE8\uD83C\uDDFF","code":"+420"},{"name":"Germany","nameFa":"آلمان","emoji":"\uD83C\uDDE9\uD83C\uDDEA","code":"+49"},{"name":"Djibouti","nameFa":"جیبوتی","emoji":"\uD83C\uDDE9\uD83C\uDDEF","code":"+253"},{"name":"Denmark","nameFa":"دانمارک","emoji":"\uD83C\uDDE9\uD83C\uDDF0","code":"+45"},{"name":"Dominica","nameFa":"دومینیکا","emoji":"\uD83C\uDDE9\uD83C\uDDF2","code":"+1 767"},{"name":"Dominican Republic","nameFa":"جمهوری دومینیکن","emoji":"\uD83C\uDDE9\uD83C\uDDF4","code":"+1 809"},{"name":"Algeria","nameFa":"الجزایر","emoji":"\uD83C\uDDE9\uD83C\uDDFF","code":"+213"},{"name":"Ecuador","nameFa":"اکوادور","emoji":"\uD83C\uDDEA\uD83C\uDDE8","code":"+593"},{"name":"Estonia","nameFa":"استونی","emoji":"\uD83C\uDDEA\uD83C\uDDEA","code":"+372"},{"name":"Egypt","nameFa":"مصر","emoji":"\uD83C\uDDEA\uD83C\uDDEC","code":"+20"},{"name":"Western Sahara","nameFa":"صحرای غربی","emoji":"\uD83C\uDDEA\uD83C\uDDED","code":"+212"},{"name":"Eritrea","nameFa":"اریتره","emoji":"\uD83C\uDDEA\uD83C\uDDF7","code":"+291"},{"name":"Spain","nameFa":"اسپانیا","emoji":"\uD83C\uDDEA\uD83C\uDDF8","code":"+34"},{"name":"Ethiopia","nameFa":"اتیوپی","emoji":"\uD83C\uDDEA\uD83C\uDDF9","code":"+251"},{"name":"European Union","nameFa":"اتحادیه اروپا","emoji":"\uD83C\uDDEA\uD83C\uDDFA","code":"+388"},{"name":"Finland","nameFa":"فنلاند","emoji":"\uD83C\uDDEB\uD83C\uDDEE","code":"+358"},{"name":"Fiji","nameFa":"فیجی","emoji":"\uD83C\uDDEB\uD83C\uDDEF","code":"+679"},{"name":"Falkland Islands","nameFa":"جزایر فالکلند","emoji":"\uD83C\uDDEB\uD83C\uDDF0","code":"+500"},{"name":"Micronesia, Federated States Of","nameFa":"میکرونزی","emoji":"\uD83C\uDDEB\uD83C\uDDF2","code":"+691"},{"name":"Faroe Islands","nameFa":"جزایر فارو","emoji":"\uD83C\uDDEB\uD83C\uDDF4","code":"+298"},{"name":"France","nameFa":"فرانسه","emoji":"\uD83C\uDDEB\uD83C\uDDF7","code":"+33"},{"name":"Gabon","nameFa":"گابن","emoji":"\uD83C\uDDEC\uD83C\uDDE6","code":"+241"},{"name":"United Kingdom","nameFa":"بریتانیا","emoji":"\uD83C\uDDEC\uD83C\uDDE7","code":"+44"},{"name":"Grenada","nameFa":"گرنادا","emoji":"\uD83C\uDDEC\uD83C\uDDE9","code":"+473"},{"name":"Georgia","nameFa":"گرجستان","emoji":"\uD83C\uDDEC\uD83C\uDDEA","code":"+995"},{"name":"French Guiana","nameFa":"گویان فرانسه","emoji":"\uD83C\uDDEC\uD83C\uDDEB","code":"+594"},{"name":"Guernsey","nameFa":"گرنزی","emoji":"\uD83C\uDDEC\uD83C\uDDEC","code":"+44"},{"name":"Ghana","nameFa":"غنا","emoji":"\uD83C\uDDEC\uD83C\uDDED","code":"+233"},{"name":"Gibraltar","nameFa":"جبل الطارق","emoji":"\uD83C\uDDEC\uD83C\uDDEE","code":"+350"},{"name":"Greenland","nameFa":"گرینلند","emoji":"\uD83C\uDDEC\uD83C\uDDF1","code":"+299"},{"name":"Gambia","nameFa":"گامبیا","emoji":"\uD83C\uDDEC\uD83C\uDDF2","code":"+220"},{"name":"Guinea","nameFa":"گینه","emoji":"\uD83C\uDDEC\uD83C\uDDF3","code":"+224"},{"name":"Guadeloupe","nameFa":"گوادلوپ","emoji":"\uD83C\uDDEC\uD83C\uDDF5","code":"+590"},{"name":"Equatorial Guinea","nameFa":"گینه استوایی","emoji":"\uD83C\uDDEC\uD83C\uDDF6","code":"+240"},{"name":"Greece","nameFa":"یونان","emoji":"\uD83C\uDDEC\uD83C\uDDF7","code":"+30"},{"name":"Guatemala","nameFa":"گواتمالا","emoji":"\uD83C\uDDEC\uD83C\uDDF9","code":"+502"},{"name":"Guam","nameFa":"گوام","emoji":"\uD83C\uDDEC\uD83C\uDDFA","code":"+1 671"},{"name":"Guinea-bissau","nameFa":"گینه بیسائو","emoji":"\uD83C\uDDEC\uD83C\uDDFC","code":"+245"},{"name":"Guyana","nameFa":"گویان","emoji":"\uD83C\uDDEC\uD83C\uDDFE","code":"+592"},{"name":"Hong Kong","nameFa":"هنگ کنگ","emoji":"\uD83C\uDDED\uD83C\uDDF0","code":"+852"},{"name":"Honduras","nameFa":"هندوراس","emoji":"\uD83C\uDDED\uD83C\uDDF3","code":"+504"},{"name":"Croatia","nameFa":"کرواسی","emoji":"\uD83C\uDDED\uD83C\uDDF7","code":"+385"},{"name":"Haiti","nameFa":"هائیتی","emoji":"\uD83C\uDDED\uD83C\uDDF9","code":"+509"},{"name":"Hungary","nameFa":"مجارستان","emoji":"\uD83C\uDDED\uD83C\uDDFA","code":"+36"},{"name":"Indonesia","nameFa":"اندونزی","emoji":"\uD83C\uDDEE\uD83C\uDDE9","code":"+62"},{"name":"Ireland","nameFa":"ایرلند","emoji":"\uD83C\uDDEE\uD83C\uDDEA","code":"+353"},{"name":"Isle Of Man","nameFa":"جزیره من","emoji":"\uD83C\uDDEE\uD83C\uDDF2","code":"+44"},{"name":"India","nameFa":"هند","emoji":"\uD83C\uDDEE\uD83C\uDDF3","code":"+91"},{"name":"British Indian Ocean Territory","nameFa":"قلمرو بریتانیا در اقیانوس هند","emoji":"\uD83C\uDDEE\uD83C\uDDF4","code":"+246"},{"name":"Iraq","nameFa":"عراق","emoji":"\uD83C\uDDEE\uD83C\uDDF6","code":"+964"},{"name":"Iran","nameFa":"ایران","emoji":"\uD83C\uDDEE\uD83C\uDDF7","code":"+98"},{"name":"Iceland","nameFa":"ایسلند","emoji":"\uD83C\uDDEE\uD83C\uDDF8","code":"+354"},{"name":"Italy","nameFa":"ایتالیا","emoji":"\uD83C\uDDEE\uD83C\uDDF9","code":"+39"},{"name":"Jersey","nameFa":"جرزی","emoji":"\uD83C\uDDEF\uD83C\uDDEA","code":"+44"},{"name":"Jamaica","nameFa":"جامائیکا","emoji":"\uD83C\uDDEF\uD83C\uDDF2","code":"+1 876"},{"name":"Jordan","nameFa":"اردن","emoji":"\uD83C\uDDEF\uD83C\uDDF4","code":"+962"},{"name":"Japan","nameFa":"ژاپن","emoji":"\uD83C\uDDEF\uD83C\uDDF5","code":"+81"},{"name":"Kenya","nameFa":"کنیا","emoji":"\uD83C\uDDF0\uD83C\uDDEA","code":"+254"},{"name":"Kyrgyzstan","nameFa":"قرقیزستان","emoji":"\uD83C\uDDF0\uD83C\uDDEC","code":"+996"},{"name":"Cambodia","nameFa":"کامبوج","emoji":"\uD83C\uDDF0\uD83C\uDDED","code":"+855"},{"name":"Kiribati","nameFa":"کیریباتی","emoji":"\uD83C\uDDF0\uD83C\uDDEE","code":"+686"},{"name":"Comoros","nameFa":"کومور","emoji":"\uD83C\uDDF0\uD83C\uDDF2","code":"+269"},{"name":"Saint Kitts And Nevis","nameFa":"سنت کیتس و نویس","emoji":"\uD83C\uDDF0\uD83C\uDDF3","code":"+1 869"},{"name":"Korea, Democratic People\'s Republic Of","nameFa":"کره شمالی","emoji":"\uD83C\uDDF0\uD83C\uDDF5","code":"+850"},{"name":"Korea, Republic Of","nameFa":"کره جنوبی","emoji":"\uD83C\uDDF0\uD83C\uDDF7","code":"+82"},{"name":"Kuwait","nameFa":"کویت","emoji":"\uD83C\uDDF0\uD83C\uDDFC","code":"+965"},{"name":"Cayman Islands","nameFa":"جزایر کیمن","emoji":"\uD83C\uDDF0\uD83C\uDDFE","code":"+1 345"},{"name":"Kazakhstan","nameFa":"قزاقستان","emoji":"\uD83C\uDDF0\uD83C\uDDFF","code":"+7"},{"name":"Lao People\'s Democratic Republic","nameFa":"لائوس","emoji":"\uD83C\uDDF1\uD83C\uDDE6","code":"+856"},{"name":"Lebanon","nameFa":"لبنان","emoji":"\uD83C\uDDF1\uD83C\uDDE7","code":"+961"},{"name":"Saint Lucia","nameFa":"سنت لوسیا","emoji":"\uD83C\uDDF1\uD83C\uDDE8","code":"+1 758"},{"name":"Liechtenstein","nameFa":"لیختن اشتاین","emoji":"\uD83C\uDDF1\uD83C\uDDEE","code":"+423"},{"name":"Sri Lanka","nameFa":"سری لانکا","emoji":"\uD83C\uDDF1\uD83C\uDDF0","code":"+94"},{"name":"Liberia","nameFa":"لیبریا","emoji":"\uD83C\uDDF1\uD83C\uDDF7","code":"+231"},{"name":"Lesotho","nameFa":"لسوتو","emoji":"\uD83C\uDDF1\uD83C\uDDF8","code":"+266"},{"name":"Lithuania","nameFa":"لیتوانی","emoji":"\uD83C\uDDF1\uD83C\uDDF9","code":"+370"},{"name":"Luxembourg","nameFa":"لوکزامبورگ","emoji":"\uD83C\uDDF1\uD83C\uDDFA","code":"+352"},{"name":"Latvia","nameFa":"لتونی","emoji":"\uD83C\uDDF1\uD83C\uDDFB","code":"+371"},{"name":"Libya","nameFa":"لیبی","emoji":"\uD83C\uDDF1\uD83C\uDDFE","code":"+218"},{"name":"Morocco","nameFa":"مراکش","emoji":"\uD83C\uDDF2\uD83C\uDDE6","code":"+212"},{"name":"Monaco","nameFa":"موناکو","emoji":"\uD83C\uDDF2\uD83C\uDDE8","code":"+377"},{"name":"Moldova","nameFa":"مولداوی","emoji":"\uD83C\uDDF2\uD83C\uDDE9","code":"+373"},{"name":"Montenegro","nameFa":"مونته نگرو","emoji":"\uD83C\uDDF2\uD83C\uDDEA","code":"+382"},{"name":"Saint Martin","nameFa":"سنت مارتین","emoji":"\uD83C\uDDF2\uD83C\uDDEB","code":"+590"},{"name":"Madagascar","nameFa":"ماداگاسکار","emoji":"\uD83C\uDDF2\uD83C\uDDEC","code":"+261"},{"name":"Marshall Islands","nameFa":"جزایر مارشال","emoji":"\uD83C\uDDF2\uD83C\uDDED","code":"+692"},{"name":"Macedonia, The Former Yugoslav Republic Of","nameFa":"مقدونیه شمالی","emoji":"\uD83C\uDDF2\uD83C\uDDF0","code":"+389"},{"name":"Mali","nameFa":"مالی","emoji":"\uD83C\uDDF2\uD83C\uDDF1","code":"+223"},{"name":"Myanmar","nameFa":"میانمار","emoji":"\uD83C\uDDF2\uD83C\uDDF2","code":"+95"},{"name":"Mongolia","nameFa":"مغولستان","emoji":"\uD83C\uDDF2\uD83C\uDDF3","code":"+976"},{"name":"Macao","nameFa":"ماکائو","emoji":"\uD83C\uDDF2\uD83C\uDDF4","code":"+853"},{"name":"Northern Mariana Islands","nameFa":"جزایر ماریانای شمالی","emoji":"\uD83C\uDDF2\uD83C\uDDF5","code":"+1 670"},{"name":"Martinique","nameFa":"مارتینیک","emoji":"\uD83C\uDDF2\uD83C\uDDF6","code":"+596"},{"name":"Mauritania","nameFa":"موریتانی","emoji":"\uD83C\uDDF2\uD83C\uDDF7","code":"+222"},{"name":"Montserrat","nameFa":"مونتسرات","emoji":"\uD83C\uDDF2\uD83C\uDDF8","code":"+1 664"},{"name":"Malta","nameFa":"مالت","emoji":"\uD83C\uDDF2\uD83C\uDDF9","code":"+356"},{"name":"Mauritius","nameFa":"موریس","emoji":"\uD83C\uDDF2\uD83C\uDDFA","code":"+230"},{"name":"Maldives","nameFa":"مالدیو","emoji":"\uD83C\uDDF2\uD83C\uDDFB","code":"+960"},{"name":"Malawi","nameFa":"مالاوی","emoji":"\uD83C\uDDF2\uD83C\uDDFC","code":"+265"},{"name":"Mexico","nameFa":"مکزیک","emoji":"\uD83C\uDDF2\uD83C\uDDFD","code":"+52"},{"name":"Malaysia","nameFa":"مالزی","emoji":"\uD83C\uDDF2\uD83C\uDDFE","code":"+60"},{"name":"Mozambique","nameFa":"موزامبیک","emoji":"\uD83C\uDDF2\uD83C\uDDFF","code":"+258"},{"name":"Namibia","nameFa":"نامیبیا","emoji":"\uD83C\uDDF3\uD83C\uDDE6","code":"+264"},{"name":"New Caledonia","nameFa":"کالدونیای جدید","emoji":"\uD83C\uDDF3\uD83C\uDDE8","code":"+687"},{"name":"Niger","nameFa":"نیجر","emoji":"\uD83C\uDDF3\uD83C\uDDEA","code":"+227"},{"name":"Norfolk Island","nameFa":"جزیره نورفولک","emoji":"\uD83C\uDDF3\uD83C\uDDEB","code":"+672"},{"name":"Nigeria","nameFa":"نیجریه","emoji":"\uD83C\uDDF3\uD83C\uDDEC","code":"+234"},{"name":"Nicaragua","nameFa":"نیکاراگوئه","emoji":"\uD83C\uDDF3\uD83C\uDDEE","code":"+505"},{"name":"Netherlands","nameFa":"هلند","emoji":"\uD83C\uDDF3\uD83C\uDDF1","code":"+31"},{"name":"Norway","nameFa":"نروژ","emoji":"\uD83C\uDDF3\uD83C\uDDF4","code":"+47"},{"name":"Nepal","nameFa":"نپال","emoji":"\uD83C\uDDF3\uD83C\uDDF5","code":"+977"},{"name":"Nauru","nameFa":"نائورو","emoji":"\uD83C\uDDF3\uD83C\uDDF7","code":"+674"},{"name":"Niue","nameFa":"نیوئه","emoji":"\uD83C\uDDF3\uD83C\uDDFA","code":"+683"},{"name":"New Zealand","nameFa":"نیوزیلند","emoji":"\uD83C\uDDF3\uD83C\uDDFF","code":"+64"},{"name":"Oman","nameFa":"عمان","emoji":"\uD83C\uDDF4\uD83C\uDDF2","code":"+968"},{"name":"Panama","nameFa":"پاناما","emoji":"\uD83C\uDDF5\uD83C\uDDE6","code":"+507"},{"name":"Peru","nameFa":"پرو","emoji":"\uD83C\uDDF5\uD83C\uDDEA","code":"+51"},{"name":"French Polynesia","nameFa":"پلی‌نزی فرانسه","emoji":"\uD83C\uDDF5\uD83C\uDDEB","code":"+689"},{"name":"Papua New Guinea","nameFa":"پاپوآ گینه نو","emoji":"\uD83C\uDDF5\uD83C\uDDEC","code":"+675"},{"name":"Philippines","nameFa":"فیلیپین","emoji":"\uD83C\uDDF5\uD83C\uDDED","code":"+63"},{"name":"Pakistan","nameFa":"پاکستان","emoji":"\uD83C\uDDF5\uD83C\uDDF0","code":"+92"},{"name":"Poland","nameFa":"لهستان","emoji":"\uD83C\uDDF5\uD83C\uDDF1","code":"+48"},{"name":"Saint Pierre And Miquelon","nameFa":"سن پیر و میکلون","emoji":"\uD83C\uDDF5\uD83C\uDDF2","code":"+508"},{"name":"Pitcairn","nameFa":"پیتکرن","emoji":"\uD83C\uDDF5\uD83C\uDDF3","code":"+872"},{"name":"Puerto Rico","nameFa":"پورتوریکو","emoji":"\uD83C\uDDF5\uD83C\uDDF7","code":"+1 787"},{"name":"Palestinian Territory, Occupied","nameFa":"فلسطین","emoji":"\uD83C\uDDF5\uD83C\uDDF8","code":"+970"},{"name":"Portugal","nameFa":"پرتغال","emoji":"\uD83C\uDDF5\uD83C\uDDF9","code":"+351"},{"name":"Palau","nameFa":"پالائو","emoji":"\uD83C\uDDF5\uD83C\uDDFC","code":"+680"},{"name":"Paraguay","nameFa":"پاراگوئه","emoji":"\uD83C\uDDF5\uD83C\uDDFE","code":"+595"},{"name":"Qatar","nameFa":"قطر","emoji":"\uD83C\uDDF6\uD83C\uDDE6","code":"+974"},{"name":"Reunion","nameFa":"رئونیون","emoji":"\uD83C\uDDF7\uD83C\uDDEA","code":"+262"},{"name":"Romania","nameFa":"رومانی","emoji":"\uD83C\uDDF7\uD83C\uDDF4","code":"+40"},{"name":"Serbia","nameFa":"صربستان","emoji":"\uD83C\uDDF7\uD83C\uDDF8","code":"+381"},{"name":"Russian Federation","nameFa":"روسیه","emoji":"\uD83C\uDDF7\uD83C\uDDFA","code":"+7"},{"name":"Rwanda","nameFa":"رواندا","emoji":"\uD83C\uDDF7\uD83C\uDDFC","code":"+250"},{"name":"Saudi Arabia","nameFa":"عربستان سعودی","emoji":"\uD83C\uDDF8\uD83C\uDDE6","code":"+966"},{"name":"Solomon Islands","nameFa":"جزایر سلیمان","emoji":"\uD83C\uDDF8\uD83C\uDDE7","code":"+677"},{"name":"Seychelles","nameFa":"سیشل","emoji":"\uD83C\uDDF8\uD83C\uDDE8","code":"+248"},{"name":"Sudan","nameFa":"سودان","emoji":"\uD83C\uDDF8\uD83C\uDDE9","code":"+249"},{"name":"Sweden","nameFa":"سوئد","emoji":"\uD83C\uDDF8\uD83C\uDDEA","code":"+46"},{"name":"Singapore","nameFa":"سنگاپور","emoji":"\uD83C\uDDF8\uD83C\uDDEC","code":"+65"},{"name":"Saint Helena, Ascension And Tristan Da Cunha","nameFa":"سنت هلنا","emoji":"\uD83C\uDDF8\uD83C\uDDED","code":"+290"},{"name":"Slovenia","nameFa":"اسلوونی","emoji":"\uD83C\uDDF8\uD83C\uDDEE","code":"+386"},{"name":"Svalbard And Jan Mayen","nameFa":"سوالبارد و یان ماین","emoji":"\uD83C\uDDF8\uD83C\uDDEF","code":"+47"},{"name":"Slovakia","nameFa":"اسلواکی","emoji":"\uD83C\uDDF8\uD83C\uDDF0","code":"+421"},{"name":"Sierra Leone","nameFa":"سیرالئون","emoji":"\uD83C\uDDF8\uD83C\uDDF1","code":"+232"},{"name":"San Marino","nameFa":"سان مارینو","emoji":"\uD83C\uDDF8\uD83C\uDDF2","code":"+378"},{"name":"Senegal","nameFa":"سنگال","emoji":"\uD83C\uDDF8\uD83C\uDDF3","code":"+221"},{"name":"Somalia","nameFa":"سومالی","emoji":"\uD83C\uDDF8\uD83C\uDDF4","code":"+252"},{"name":"Suriname","nameFa":"سورینام","emoji":"\uD83C\uDDF8\uD83C\uDDF7","code":"+597"},{"name":"South Sudan","nameFa":"سودان جنوبی","emoji":"\uD83C\uDDF8\uD83C\uDDF8","code":"+211"},{"name":"Sao Tome and Principe","nameFa":"سائوتومه و پرنسیپ","emoji":"\uD83C\uDDF8\uD83C\uDDF9","code":"+239"},{"name":"El Salvador","nameFa":"السالوادور","emoji":"\uD83C\uDDF8\uD83C\uDDFB","code":"+503"},{"name":"Sint Maarten","nameFa":"سنت مارتن","emoji":"\uD83C\uDDF8\uD83C\uDDFD","code":"+1 721"},{"name":"Syrian Arab Republic","nameFa":"سوریه","emoji":"\uD83C\uDDF8\uD83C\uDDFE","code":"+963"},{"name":"Swaziland","nameFa":"اسواتینی","emoji":"\uD83C\uDDF8\uD83C\uDDFF","code":"+268"},{"name":"Turks And Caicos Islands","nameFa":"جزایر تورکس و کایکوس","emoji":"\uD83C\uDDF9\uD83C\uDDE8","code":"+1 649"},{"name":"Chad","nameFa":"چاد","emoji":"\uD83C\uDDF9\uD83C\uDDE9","code":"+235"},{"name":"Togo","nameFa":"توگو","emoji":"\uD83C\uDDF9\uD83C\uDDEC","code":"+228"},{"name":"Thailand","nameFa":"تایلند","emoji":"\uD83C\uDDF9\uD83C\uDDED","code":"+66"},{"name":"Tajikistan","nameFa":"تاجیکستان","emoji":"\uD83C\uDDF9\uD83C\uDDEF","code":"+992"},{"name":"Tokelau","nameFa":"توکلائو","emoji":"\uD83C\uDDF9\uD83C\uDDF0","code":"+690"},{"name":"Timor-Leste, Democratic Republic of","nameFa":"تیمور شرقی","emoji":"\uD83C\uDDF9\uD83C\uDDF1","code":"+670"},{"name":"Turkmenistan","nameFa":"ترکمنستان","emoji":"\uD83C\uDDF9\uD83C\uDDF2","code":"+993"},{"name":"Tunisia","nameFa":"تونس","emoji":"\uD83C\uDDF9\uD83C\uDDF3","code":"+216"},{"name":"Tonga","nameFa":"تونگا","emoji":"\uD83C\uDDF9\uD83C\uDDF4","code":"+676"},{"name":"Turkey","nameFa":"ترکیه","emoji":"\uD83C\uDDF9\uD83C\uDDF7","code":"+90"},{"name":"Trinidad And Tobago","nameFa":"ترینیداد و توباگو","emoji":"\uD83C\uDDF9\uD83C\uDDF9","code":"+1 868"},{"name":"Tuvalu","nameFa":"تووالو","emoji":"\uD83C\uDDF9\uD83C\uDDFB","code":"+688"},{"name":"Taiwan","nameFa":"تایوان","emoji":"\uD83C\uDDF9\uD83C\uDDFC","code":"+886"},{"name":"Tanzania, United Republic Of","nameFa":"تانزانیا","emoji":"\uD83C\uDDF9\uD83C\uDDFF","code":"+255"},{"name":"Ukraine","nameFa":"اوکراین","emoji":"\uD83C\uDDFA\uD83C\uDDE6","code":"+380"},{"name":"Uganda","nameFa":"اوگاندا","emoji":"\uD83C\uDDFA\uD83C\uDDEC","code":"+256"},{"name":"United States Minor Outlying Islands","nameFa":"جزایر کوچک حاشیه‌ای ایالات متحده","emoji":"\uD83C\uDDFA\uD83C\uDDF2","code":"+1"},{"name":"United States","nameFa":"ایالات متحده آمریکا","emoji":"\uD83C\uDDFA\uD83C\uDDF8","code":"+1"},{"name":"Uruguay","nameFa":"اروگوئه","emoji":"\uD83C\uDDFA\uD83C\uDDFE","code":"+598"},{"name":"Uzbekistan","nameFa":"ازبکستان","emoji":"\uD83C\uDDFA\uD83C\uDDFF","code":"+998"},{"name":"Vatican City State","nameFa":"واتیکان","emoji":"\uD83C\uDDFB\uD83C\uDDE6","code":"+379"},{"name":"Saint Vincent And The Grenadines","nameFa":"سنت وینسنت و گرنادین‌ها","emoji":"\uD83C\uDDFB\uD83C\uDDE8","code":"+1 784"},{"name":"Venezuela, Bolivarian Republic Of","nameFa":"ونزوئلا","emoji":"\uD83C\uDDFB\uD83C\uDDEA","code":"+58"},{"name":"Virgin Islands (British)","nameFa":"جزایر ویرجین بریتانیا","emoji":"\uD83C\uDDFB\uD83C\uDDEC","code":"+1 284"},{"name":"Virgin Islands (US)","nameFa":"جزایر ویرجین ایالات متحده","emoji":"\uD83C\uDDFB\uD83C\uDDEE","code":"+1 340"},{"name":"Viet Nam","nameFa":"ویتنام","emoji":"\uD83C\uDDFB\uD83C\uDDF3","code":"+84"},{"name":"Vanuatu","nameFa":"وانواتو","emoji":"\uD83C\uDDFB\uD83C\uDDFA","code":"+678"},{"name":"Wallis And Futuna","nameFa":"والیس و فوتونا","emoji":"\uD83C\uDDFC\uD83C\uDDEB","code":"+681"},{"name":"Samoa","nameFa":"ساموآ","emoji":"\uD83C\uDDFC\uD83C\uDDF8","code":"+685"},{"name":"Yemen","nameFa":"یمن","emoji":"\uD83C\uDDFE\uD83C\uDDEA","code":"+967"},{"name":"Mayotte","nameFa":"مایوت","emoji":"\uD83C\uDDFE\uD83C\uDDF9","code":"+262"},{"name":"South Africa","nameFa":"آفریقای جنوبی","emoji":"\uD83C\uDDFF\uD83C\uDDE6","code":"+27"},{"name":"Zambia","nameFa":"زامبیا","emoji":"\uD83C\uDDFF\uD83C\uDDF2","code":"+260"},{"name":"Zimbabwe","nameFa":"زیمبابوه","emoji":"\uD83C\uDDFF\uD83C\uDDFC","code":"+263"}]'),
                o = n(27767),
                i = n(92666),
                d = n(80073);
            let c = e => {
                    try {
                        if (o.f8) return e;
                        let a = null === i.rI || void 0 === i.rI ? void 0 : i.rI.emoji;
                        if (a) return a.replace_unified(e);
                        return e
                    } catch (a) {
                        return d.j.error("renderFlagEmoji error = ", e, a), e
                    }
                },
                r = () => m.map(e => ({
                    ...e,
                    code: e.code,
                    emoji: c(e.emoji)
                })),
                t = e => ({
                    ...e,
                    code: e.code,
                    emoji: c(e.emoji)
                })
        }
    }
]);
//# sourceMappingURL=9570.df7244ed.js.map