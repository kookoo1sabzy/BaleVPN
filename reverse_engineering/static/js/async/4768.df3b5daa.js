try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3eee0c2c-408d-4329-a0ee-6ccb4905e639", e._sentryDebugIdIdentifier = "sentry-dbid-3eee0c2c-408d-4329-a0ee-6ccb4905e639")
    }()
} catch (e) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (e) {}
"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["4768"], {
        16102: function(e, t, n) {
            n.d(t, {
                A: () => tp
            });
            var r = n(46756),
                i = n.n(r),
                a = n(5421),
                o = n.n(a),
                l = n(90136),
                s = n.n(l),
                u = new URL(n(56725), n.b),
                c = new URL(n(38061), n.b),
                h = new URL(n(92319), n.b),
                p = new URL(n(7816), n.b),
                m = new URL(n(70830), n.b),
                f = new URL(n(76590), n.b),
                d = new URL(n(23355), n.b),
                g = new URL(n(98627), n.b),
                y = new URL(n(14170), n.b),
                x = new URL(n(16038), n.b),
                b = new URL(n(49580), n.b),
                v = new URL(n(42812), n.b),
                k = new URL(n(12593), n.b),
                w = new URL(n(75745), n.b),
                z = new URL(n(2883), n.b),
                S = new URL(n(33266), n.b),
                A = new URL(n(68688), n.b),
                T = new URL(n(17584), n.b),
                M = new URL(n(80466), n.b),
                C = new URL(n(39728), n.b),
                E = new URL(n(84720), n.b),
                R = new URL(n(267), n.b),
                I = new URL(n(87859), n.b),
                B = new URL(n(45789), n.b),
                O = new URL(n(3357), n.b),
                P = new URL(n(32357), n.b),
                L = new URL(n(99127), n.b),
                D = new URL(n(73357), n.b),
                N = new URL(n(19861), n.b),
                q = new URL(n(85351), n.b),
                H = new URL(n(52176), n.b),
                F = new URL(n(23366), n.b),
                U = new URL(n(64678), n.b),
                V = new URL(n(41501), n.b),
                _ = new URL(n(48837), n.b),
                j = new URL(n(53719), n.b),
                X = new URL(n(9576), n.b),
                K = new URL(n(16462), n.b),
                W = new URL(n(90606), n.b),
                G = new URL(n(21528), n.b),
                Y = new URL(n(87806), n.b),
                $ = new URL(n(83230), n.b),
                Z = new URL(n(71327), n.b),
                Q = new URL(n(12751), n.b),
                J = new URL(n(6025), n.b),
                ee = new URL(n(10296), n.b),
                et = new URL(n(47358), n.b),
                en = new URL(n(67486), n.b),
                er = new URL(n(19975), n.b),
                ei = new URL(n(72583), n.b),
                ea = new URL(n(70817), n.b),
                eo = new URL(n(23222), n.b),
                el = new URL(n(97084), n.b),
                es = new URL(n(14220), n.b),
                eu = new URL(n(58709), n.b),
                ec = new URL(n(58285), n.b),
                eh = new URL(n(26175), n.b),
                ep = new URL(n(7815), n.b),
                em = new URL(n(66919), n.b),
                ef = new URL(n(74369), n.b),
                ed = o()(i()),
                eg = s()(u),
                ey = s()(c),
                ex = s()(h),
                eb = s()(p),
                ev = s()(m),
                ek = s()(f),
                ew = s()(d),
                ez = s()(g),
                eS = s()(y),
                eA = s()(x),
                eT = s()(b),
                eM = s()(v),
                eC = s()(k),
                eE = s()(w),
                eR = s()(z),
                eI = s()(S),
                eB = s()(A),
                eO = s()(T),
                eP = s()(M),
                eL = s()(C),
                eD = s()(E),
                eN = s()(R),
                eq = s()(I),
                eH = s()(B),
                eF = s()(O),
                eU = s()(P),
                eV = s()(L),
                e_ = s()(D),
                ej = s()(N),
                eX = s()(q),
                eK = s()(H),
                eW = s()(F),
                eG = s()(U),
                eY = s()(V),
                e$ = s()(_),
                eZ = s()(j),
                eQ = s()(X),
                eJ = s()(K),
                e0 = s()(W),
                e1 = s()(G),
                e4 = s()(Y),
                e5 = s()($),
                e6 = s()(Z),
                e3 = s()(Q),
                e7 = s()(J),
                e2 = s()(ee),
                e8 = s()(et),
                e9 = s()(en),
                te = s()(er),
                tt = s()(ei),
                tn = s()(ea),
                tr = s()(eo),
                ti = s()(el),
                ta = s()(es),
                to = s()(eu),
                tl = s()(ec),
                ts = s()(eh),
                tu = s()(ep),
                tc = s()(em),
                th = s()(ef);
            ed.push([e.id, `@font-face{font-display:block;font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(${eg})format("woff2"),url(${ey})format("woff"),url(${ex})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(${eb})format("woff2"),url(${ev})format("woff"),url(${ek})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(${ew})format("woff2"),url(${ez})format("woff"),url(${eS})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(${eA})format("woff2"),url(${eT})format("woff"),url(${eM})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(${eC})format("woff2"),url(${eE})format("woff"),url(${eR})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(${eI})format("woff2"),url(${eB})format("woff"),url(${eO})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(${eP})format("woff2"),url(${eL})format("woff"),url(${eD})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(${eN})format("woff2"),url(${eq})format("woff"),url(${eH})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(${eF})format("woff2"),url(${eU})format("woff"),url(${eV})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(${e_})format("woff2"),url(${ej})format("woff"),url(${eX})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(${eK})format("woff2"),url(${eW})format("woff"),url(${eG})format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:700;src:url(${eY})format("woff2"),url(${e$})format("woff"),url(${eZ})format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:italic;font-weight:400;src:url(${eQ})format("woff2"),url(${eJ})format("woff"),url(${e0})format("truetype")}@font-face{font-display:block;font-family:KaTeX_SansSerif;font-style:normal;font-weight:400;src:url(${e1})format("woff2"),url(${e4})format("woff"),url(${e5})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(${e6})format("woff2"),url(${e3})format("woff"),url(${e7})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(${e2})format("woff2"),url(${e8})format("woff"),url(${e9})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(${te})format("woff2"),url(${tt})format("woff"),url(${tn})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(${tr})format("woff2"),url(${ti})format("woff"),url(${ta})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(${to})format("woff2"),url(${tl})format("woff"),url(${ts})format("truetype")}@font-face{font-display:block;font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(${tu})format("woff2"),url(${tc})format("woff"),url(${th})format("truetype")}.katex{text-indent:0;text-rendering:auto;font:1.21em/1.2 KaTeX_Main,Times New Roman,serif}.katex *{border-color:currentColor;-ms-high-contrast-adjust:none!important}.katex .katex-version:after{content:"0.16.27"}.katex .katex-mathml{clip:rect(1px,1px,1px,1px);border:0;width:1px;height:1px;padding:0;position:absolute;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{white-space:nowrap;width:min-content;position:relative}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathboldfrak,.katex .textboldfrak{font-family:KaTeX_Fraktur;font-weight:700}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .mathsfit,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;table-layout:fixed;display:inline-table}.katex .vlist-r{display:table-row}.katex .vlist{vertical-align:bottom;display:table-cell;position:relative}.katex .vlist>span{height:0;display:block;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{width:0;overflow:hidden}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{vertical-align:bottom;width:2px;min-width:2px;font-size:1px;display:table-cell}.katex .vbox{flex-direction:column;align-items:baseline;display:inline-flex}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{flex-direction:row;display:inline-flex}.katex .thinbox{width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;width:100%;display:inline-block}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;width:100%;display:inline-block}.katex .hdashline{border-bottom-style:dashed;width:100%;display:inline-block}.katex .sqrt>.root{margin-left:.277778em;margin-right:-.555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.833333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.714286em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.857143em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14286em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71429em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96286em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55429em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.416667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.583333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.833333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.347222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.416667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.486111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.694444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.833333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44028em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.289352em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.347222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.405093em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.462963em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.520833em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.578704em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.694444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.833333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.289296em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.337512em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.385728em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.433944em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.578592em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.694311em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.833173em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.200965em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.241158em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.281351em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.321543em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.361736em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.401929em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.482315em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.578778em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.694534em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.833601em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{width:.12em;display:inline-block}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{min-width:1px;display:inline-block}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;height:inherit;width:100%;display:block;position:absolute}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;max-width:none;min-height:0;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{width:50.2%;position:absolute;left:0;overflow:hidden}.katex .halfarrow-right{width:50.2%;position:absolute;right:0;overflow:hidden}.katex .brace-left{width:25.1%;position:absolute;left:0;overflow:hidden}.katex .brace-center{width:50%;position:absolute;left:25%;overflow:hidden}.katex .brace-right{width:25.1%;position:absolute;right:0;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{box-sizing:border-box;border-top:.049em solid;border-right:.049em solid;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo)")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo)")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{text-align:left;display:inline-block;position:absolute;right:calc(50% + .3em)}.katex .cd-label-right{text-align:right;display:inline-block;position:absolute;left:calc(50% + .3em)}.katex-display{text-align:center;margin:1em 0;display:block}.katex-display>.katex{text-align:center;white-space:nowrap;display:block}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}`, ""]);
            let tp = ed
        },
        52548: function(e, t, n) {
            var r = n(53321),
                i = n.n(r),
                a = n(23518),
                o = n.n(a),
                l = n(14182),
                s = n.n(l),
                u = n(5033),
                c = n.n(u),
                h = n(77141),
                p = n.n(h),
                m = n(66338),
                f = n.n(m),
                d = n(16102),
                g = {};
            g.styleTagTransform = f(), g.setAttributes = c(), g.insert = s().bind(null, "head"), g.domAPI = o(), g.insertStyleElement = p(), i()(d.A, g), d.A && d.A.locals && d.A.locals
        },
        92319: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_AMS-Regular.4aafdb68.ttf"
        },
        38061: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_AMS-Regular.1608a09b.woff"
        },
        56725: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_AMS-Regular.a79f1c31.woff2"
        },
        76590: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Bold.cce5b8ec.ttf"
        },
        70830: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Bold.b6770918.woff"
        },
        7816: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Bold.ec17d132.woff2"
        },
        14170: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Regular.07ef19e7.ttf"
        },
        98627: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Regular.dad44a7f.woff"
        },
        23355: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Caligraphic-Regular.55fac258.woff2"
        },
        42812: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Bold.b18f59e1.ttf"
        },
        49580: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Bold.9f256b85.woff"
        },
        16038: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Bold.d42a5579.woff2"
        },
        2883: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Regular.ed38e79f.ttf"
        },
        75745: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Regular.7c187121.woff"
        },
        12593: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Fraktur-Regular.d3c882a6.woff2"
        },
        17584: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Bold.b74a1a8b.ttf"
        },
        68688: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Bold.d181c465.woff"
        },
        33266: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Bold.c3fb5ac2.woff2"
        },
        84720: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-BoldItalic.70d8b0a5.ttf"
        },
        39728: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-BoldItalic.e3f82f9d.woff"
        },
        80466: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-BoldItalic.6f2bb1df.woff2"
        },
        45789: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Italic.47373d1e.ttf"
        },
        87859: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Italic.9024d815.woff"
        },
        267: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Italic.8916142b.woff2"
        },
        99127: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Regular.b7f8fe9b.ttf"
        },
        32357: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Regular.7f51fe03.woff"
        },
        3357: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Main-Regular.0462f03b.woff2"
        },
        85351: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-BoldItalic.a879cf83.ttf"
        },
        19861: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-BoldItalic.f1035d8d.woff"
        },
        73357: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-BoldItalic.572d331f.woff2"
        },
        64678: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-Italic.939bc644.ttf"
        },
        23366: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-Italic.5295ba48.woff"
        },
        52176: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Math-Italic.f28c23ac.woff2"
        },
        53719: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Bold.94e1e8dc.ttf"
        },
        48837: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Bold.bf59d231.woff"
        },
        41501: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Bold.8c5b5494.woff2"
        },
        90606: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Italic.b4c20c84.ttf"
        },
        16462: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Italic.7c9bc82b.woff"
        },
        9576: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Italic.3b1e59b3.woff2"
        },
        83230: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Regular.d4d7ba48.ttf"
        },
        87806: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Regular.74048478.woff"
        },
        21528: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_SansSerif-Regular.ba21ed5f.woff2"
        },
        6025: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Script-Regular.fe9cbbe1.ttf"
        },
        12751: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Script-Regular.07505710.woff"
        },
        71327: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Script-Regular.03e9641d.woff2"
        },
        67486: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size1-Regular.fabc004a.ttf"
        },
        47358: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size1-Regular.e1e279cb.woff"
        },
        10296: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size1-Regular.eae34984.woff2"
        },
        70817: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size2-Regular.d6b476ec.ttf"
        },
        72583: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size2-Regular.57727022.woff"
        },
        19975: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size2-Regular.5916a24f.woff2"
        },
        14220: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size3-Regular.a144ef58.ttf"
        },
        97084: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size3-Regular.9acaf01c.woff"
        },
        23222: function(e) {
            e.exports = "data:font/woff2;base64,d09GMgABAAAAAA4oAA4AAAAAHbQAAA3TAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgRQIDgmcDBEICo1oijYBNgIkA14LMgAEIAWJAAeBHAyBHBvbGiMRdnO0IkRRkiYDgr9KsJ1NUAf2kILNxgUmgqIgq1P89vcbIcmsQbRps3vCcXdYOKSWEPEKgZgQkprQQsxIXUgq0DqpGKmIvrgkeVGtEQD9DzAO29fM9jYhxZEsL2FeURH2JN4MIcTdO049NCVdxQ/w9NrSYFEBKTDKpLKfNkCGDc1RwjZLQcm3vqJ2UW9Xfa3tgAHz6ivp6vgC2yD4/6352ndnN0X0TL7seypkjZlMsjmZnf0Mm5Q+JykRWQBKCVCVPbARPXWyQtb5VgLB6Biq7/Uixcj2WGqdI8tGSgkuRG+t910GKP2D7AQH0DB9FMDW/obJZ8giFI3Wg8Cvevz0M+5m0rTh7XDBlvo9Y4vm13EXmfttwI4mBo1EG15fxJhUiCLbiiyCf/ZA6MFAhg3pGIZGdGIVjtPn6UcMk9A/UUr9PhoNsCENw1APAq0gpH73e+M+0ueyHbabc3vkbcdtzcf/fiy+NxQEjf9ud/ELBHAXJ0nk4z+MXH2Ev/kWyV4k7SkvpPc9Qr38F6RPWnM9cN6DJ0AdD1BhtgABtmoRoFCvPsBAumNm6soZG2Gk5GyVTo2sJncSyp0jQTYoR6WDvTwaaEcHsxHfvuWhHA3a6bN7twRKtcGok6NsCi7jYRrM2jExsUFMxMQYuJbMhuWNOumEJy9hi29Dmg5zMp/A5+hhPG19j1vBrq8JTLr8ki5VLPmG/PynJHVul440bxg5xuymHUFPBshC+nA9I1FmwbRBTNHAcik3Oae0cxKoI3MOriM42UrPe51nsaGxJ+WfXubAsP84aabUlQSJ1IiE0iPETLUU4CATgfXSCSpuRFRmCGbO+wSpAnzaeaCYW1VNEysRtuXCEL1kUFUbbtMv3Tilt/1c11jt3Q5bbMa84cpWipp8Elw3MZhOHsOlwwVUQM3lAR35JiFQbaYCRnMF2lxAWoOg2gyoIV4PouX8HytNIfLhqpJtXB4vjiViUI8IJ7bkC4ikkQvKksnOTKICwnqWSZ9YS5f0WCxmpgjbIq7EJcM4aI2nmhLNY2JIUgOjXZFWBHb+x5oh6cwb0Tv1ackHdKi0I9OO2wE9aogIOn540CCCziyhN+IaejtgAONKznHlHyutPrHGwCx9S6B8kfS4Mfi4Eyv7OU730bT1SCBjt834cXsf43zVjPUqqJjgrjeGnBxSG4aYAKFuVbeCfkDIjAqMb6yLNIbCuvXhMH2/+k2vkNpkORhR59N1CkzoOENvneIosjYmuTxlhUzaGEJQ/iWqx4dmwpmKjrwTiTGTCVozNAYqk/zXOndWxuWSmJkQpJw3pK5KX6QrLt5LATMqpmPAQhkhK6PUjzHUn7E0gHE0kPE0iKkolgkUx9SZmVAdDgpffdyJKg3k7VmzYGCwVXGz/tXmkOIp+vcWs+EMuhhvN0h9uhfzWJziBQmCREGSIFmQIkgVpAnSBRmC//6hkLZwaVhwxlrJSOdqlFtOYxlau9F2QN5Y98xmIAsiM1HVp2VFX+DHHGg6Ecjh3vmqtidX3qHI2qycTk/iwxSt5UzTmEP92ZBnEWTk4Mx8Mpl78ZDokxg/KWb+Q0QkvdKVmq3TMW+RXEgrsziSAfNXFMhDc60N5N9jQzjfO0kBKpUZl0ZmwJ41j/B9Hz6wmRaJB84niNmQrzp9eSlQCDDzazGDdVi3P36VZQ+Jy4f9UBNp+3zTjqI4abaFAm+GShVaXlsGdF3FYzZcDI6cori4kMxUECl9IjJZpzkvitAoxKue+90pDMvcKRxLl53TmOKCmV/xRolNKSqqUxc6LStOETmFOiLZZptlZepcKiAzteG8PEdpnQpbOMNcMsR4RR2Bs0cKFEvSmIjAFcnarqwUL4lDhHmnVkwu1IwshbiCcgvOheZuYyOteufZZwlcTlLgnZ3o/WcYdzZHW/WGaqaVfmTZ1aWCceJjkbZqsfbkOtcFlUZM/jy+hXHDbaUobWqqXaeWobbLO99yG5N3U4wxco0rQGGcOLASFMXeJoham8M+/x6O2WywK2l4HGbq1CoUyC/IZikQhdq3SiuNrvAEj0AVu9x2x3lp/xWzahaxidezFVtdcb5uEnzyl0ZmYiuKI0exvCd4Xc9CV1KB0db00z92wDPde0kukbvZIWN6jUWFTmPIC/Y4UPCm8UfDTFZpZNon1qLFTkBhxzB+FjQRA2Q/YRJT8pQigslMaUpFyAG8TMlXigiqmAZX4xgijKjRlGpLE0GdplRfCaJo0JQaSxNBk6ZmMzcya0FmrcisDdn0Q3HI2sWSppYigmlM1XT/kLQZSNpMJG0WkjYbSZuDpM1F0uYhFc1HxU4m1QJjDK6iL0S5uSj5rgXc3RejEigtcRBtqYPQsiTskmO5vosV+q4VGIKbOkDg0jtRrq+Em1YloaTFar3EGr1EUC8R0kus1Uus00usL97ABr2BjXoDm/QGNhuWtMVBKOwg/i78lT7hBsAvDmwHc/ao3vmUbBmhjeYySZNWvGkfZAgISDSaDo1SVpzGDsAEkF8B+gEapViUoZgUWXcRIGFZNm6gWbAKk0bp0k1MHG9fLYtV4iS2SmLEQFARzRcnf9PUS0LVn05/J9MiRRBU3v2IrvW974v4N00L7ZMk0wXP1409CHo/an8zTRHD3eSJ6m8D4YMkZNl3M79sqeuAsr/m3f+8/yl7A50aiAEJgeBeMWzu7ui9UfUBCe2TIqZIoOd/3/udRBOQidQZUERzb2/VwZN1H/Sju82ew2H2Wfr6qvfVf3hqwDvAIpkQVFy4B9Pe9e4/XvPeceu7h3dvO56iJPf0+A6cqA2ip18ER+iFgggiuOkvj24bby0N9j2UHIkgqIt+sVgfodC4YghLSMjSZbH0VR/6dMDrYJeKHilKTemt6v6kvzvn3/RrdWtr0GoN/xL+Sex/cPYLUpepx9cz/D46UPU5KXgAQa+NDps1v6J3xP1i2HtaDB0M9aX2deA7SYff//+gUCovMmIK/qfsFcOk+4Y5ZN97XlG6zebqtMbKgeRFi51vnxTQYBUik2rS/Cn6PC8ADR8FGxsRPB82dzfND90gIcshOcYUkfjherBz53odpm6TP8txlwOZ71xmfHHOvq053qFF/MRlS3jP0ELudrf2OeN8DHvp6ZceLe8qKYvWz/7yp0u4dKPfli3CYq0O13Ih71mylJ80tOi10On8wi+F4+LWgDPeJ30msSQt9/vkmHq9/Lvo2b461mP801v3W4xTcs6CbvF9UDdrSt+A8OUbpSh55qAUFXWznBBfdeJ8a4d7ugT5tvxUza3h9m4H7ptTqiG4z0g5dc0X29OcGlhpGFMpQo9ytTS+NViZpNdvU4kWx+LKxNY10kQ1yqGXrhe4/1nvP7E+nd5A92TtaRplbHSqoIdOqtRWti+fkB5/n1+/VvCmz12pG1kpQWsfi1ftlBobm0bpngs16CHkbIwdLnParxtTV3QYRlfJ0KFskH7pdN/YDn+yRuSd7sNH3aO0DYPggk6uWuXrfOc+fa3VTxFVvKaNxHsiHmsXyCLIE5yuOeN3/Jdf8HBL/5M6shjyhxHx9BjB1O0+4NLOnjLLSxwO7ukN4jMbOIcD879KLSi6Pk61Oqm2377n8079PXEEQ7cy7OKEC9nbpet118fxweTafpt69x/Bt8UqGzNQt7aelpc44dn5cqhwf71+qKp/Zf/+a0zcizOUWpl/iBcSXip0pplkatCchoH5c5aUM8I7/dWxAej8WicPL1URFZ9BDJelUwEwTkGqUhgSlydVes95YdXvhh9Gfz/aeFWvgVb4tuLbcv4+wLdutVZv/cUonwBD/6eDlE0aSiKK/uoH3+J1wDE/jMVqY2ysGufN84oIXB0sPzy8ollX/LegY74DgJXJR57sn+VGza0x3DnuIgABFM15LmajjjsNlYj+JEZGbuRYcAMOWxFkPN2w6Wd46xo4gVWQR/X4lyI/R6K/YK0110GzudPRW7Y+UOBGTfNNzHeYT0fiH0taunBpq9HEW8OKSaBGj21L0MqenEmNRWBAWDWAk4CpNoEZJ2tTaPFgbQYj8HxtFilErs3BTRwT8uO1NXQaWfIotchmPkAF5mMBAliEmZiOGVgCG9LgRzpscMAOOwowlT3JhusdazXGSC/hxR3UlmWVwWHpOIKheqONvjyhSiTHIkVUco5bnji8m//zL7PKaT1Vl5I6UE609f+gkr6MZKVyKc7zJRmCahLsdlyA5fdQkRSan9LgnnLEyGSkaKJCJog0wAgvepWBt80+1yKln1bMVtCljfNWDueKLsWwaEbBSfSPTEmVRsUcYYMnEjcjeyCZzBXK9E9BYBXLKjOSpUDR+nEV3TFSUdQaz+ot98QxgXwx0GQ+EEUAKB2qZPkQQ0GqFD8UPFMqyaCHM24BZmSGic9EYMagKizOw9Hz50DMrDLrqqLkTAhplMictiCAx5S3BIUQdeJeLnBy2CNtMfz6cV4u8XKoFZQesbf9YZiIERiHjaNodDW6LgcirX/mPnJIkBGDUpTBhSa0EIr38D5hCIszhCM8URGBqImoWjpvpt1ebu/v3Gl3qJfMnNM+9V+kiRFyROTPHQWOcs1dNW94/ukKMPZBvDi55i5CttdeJz84DLngLqjcdwEZ87bFFR8CIG35OAkDVN6VRDZ7aq67NteYqZ2lpT8oYB2CytoBd6VuAx4WgiAsnuj3WohG+LugzXiQRDeM3XYXlULv4dp5VFYC"
        },
        26175: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size4-Regular.fbccdabe.ttf"
        },
        58285: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size4-Regular.7a996c9d.woff"
        },
        58709: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Size4-Regular.10d95fd3.woff2"
        },
        74369: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Typewriter-Regular.d97aaf4a.ttf"
        },
        66919: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Typewriter-Regular.6258592b.woff"
        },
        7815: function(e, t, n) {
            e.exports = n.p + "static/font/KaTeX_Typewriter-Regular.a8709e36.woff2"
        },
        41472: function(e, t, n) {
            n.d(t, {
                A: () => c
            });
            let r = "object" == typeof self ? self : globalThis,
                i = e => {
                    var t;
                    let n, i;
                    return (t = new Map, n = (e, n) => (t.set(n, e), e), i = a => {
                        if (t.has(a)) return t.get(a);
                        let [o, l] = e[a];
                        switch (o) {
                            case 0:
                            case -1:
                                return n(l, a);
                            case 1: {
                                let e = n([], a);
                                for (let t of l) e.push(i(t));
                                return e
                            }
                            case 2: {
                                let e = n({}, a);
                                for (let [t, n] of l) e[i(t)] = i(n);
                                return e
                            }
                            case 3:
                                return n(new Date(l), a);
                            case 4: {
                                let {
                                    source: e,
                                    flags: t
                                } = l;
                                return n(new RegExp(e, t), a)
                            }
                            case 5: {
                                let e = n(new Map, a);
                                for (let [t, n] of l) e.set(i(t), i(n));
                                return e
                            }
                            case 6: {
                                let e = n(new Set, a);
                                for (let t of l) e.add(i(t));
                                return e
                            }
                            case 7: {
                                let {
                                    name: e,
                                    message: t
                                } = l;
                                return n(new r[e](t), a)
                            }
                            case 8:
                                return n(BigInt(l), a);
                            case "BigInt":
                                return n(Object(BigInt(l)), a);
                            case "ArrayBuffer":
                                return n(new Uint8Array(l).buffer, l);
                            case "DataView": {
                                let {
                                    buffer: e
                                } = new Uint8Array(l);
                                return n(new DataView(e), l)
                            }
                        }
                        return n(new r[o](l), a)
                    })(0)
                },
                {
                    toString: a
                } = {},
                {
                    keys: o
                } = Object,
                l = e => {
                    let t = typeof e;
                    if ("object" !== t || !e) return [0, t];
                    let n = a.call(e).slice(8, -1);
                    switch (n) {
                        case "Array":
                            return [1, ""];
                        case "Object":
                            return [2, ""];
                        case "Date":
                            return [3, ""];
                        case "RegExp":
                            return [4, ""];
                        case "Map":
                            return [5, ""];
                        case "Set":
                            return [6, ""];
                        case "DataView":
                            return [1, n]
                    }
                    return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n]
                },
                s = e => {
                    let [t, n] = e;
                    return 0 === t && ("function" === n || "symbol" === n)
                },
                u = function(e) {
                    var t, n, r;
                    let i, a, {
                            json: u,
                            lossy: c
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        h = [];
                    return (t = !(u || c), n = !!u, r = new Map, i = (e, t) => {
                        let n = h.push(e) - 1;
                        return r.set(t, n), n
                    }, a = e => {
                        if (r.has(e)) return r.get(e);
                        let [u, c] = l(e);
                        switch (u) {
                            case 0: {
                                let n = e;
                                switch (c) {
                                    case "bigint":
                                        u = 8, n = e.toString();
                                        break;
                                    case "function":
                                    case "symbol":
                                        if (t) throw TypeError("unable to serialize " + c);
                                        n = null;
                                        break;
                                    case "undefined":
                                        return i([-1], e)
                                }
                                return i([u, n], e)
                            }
                            case 1: {
                                if (c) {
                                    let t = e;
                                    return "DataView" === c ? t = new Uint8Array(e.buffer) : "ArrayBuffer" === c && (t = new Uint8Array(e)), i([c, [...t]], e)
                                }
                                let t = [],
                                    n = i([u, t], e);
                                for (let n of e) t.push(a(n));
                                return n
                            }
                            case 2: {
                                if (c) switch (c) {
                                    case "BigInt":
                                        return i([c, e.toString()], e);
                                    case "Boolean":
                                    case "Number":
                                    case "String":
                                        return i([c, e.valueOf()], e)
                                }
                                if (n && "toJSON" in e) return a(e.toJSON());
                                let r = [],
                                    h = i([u, r], e);
                                for (let n of o(e))(t || !s(l(e[n]))) && r.push([a(n), a(e[n])]);
                                return h
                            }
                            case 3:
                                return i([u, e.toISOString()], e);
                            case 4: {
                                let {
                                    source: t,
                                    flags: n
                                } = e;
                                return i([u, {
                                    source: t,
                                    flags: n
                                }], e)
                            }
                            case 5: {
                                let n = [],
                                    r = i([u, n], e);
                                for (let [r, i] of e)(t || !(s(l(r)) || s(l(i)))) && n.push([a(r), a(i)]);
                                return r
                            }
                            case 6: {
                                let n = [],
                                    r = i([u, n], e);
                                for (let r of e)(t || !s(l(r))) && n.push(a(r));
                                return r
                            }
                        }
                        let {
                            message: h
                        } = e;
                        return i([u, {
                            name: c,
                            message: h
                        }], e)
                    })(e), h
                },
                c = "function" == typeof structuredClone ? (e, t) => t && ("json" in t || "lossy" in t) ? i(u(e, t)) : structuredClone(e) : (e, t) => i(u(e, t))
        },
        34102: function(e, t, n) {
            function r(e) {
                let t = [],
                    n = String(e || ""),
                    r = n.indexOf(","),
                    i = 0,
                    a = !1;
                for (; !a;) {
                    -1 === r && (r = n.length, a = !0);
                    let e = n.slice(i, r).trim();
                    (e || !a) && t.push(e), i = r + 1, r = n.indexOf(",", i)
                }
                return t
            }

            function i(e, t) {
                let n = t || {};
                return ("" === e[e.length - 1] ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
            }
            n.d(t, {
                A: () => i,
                q: () => r
            })
        },
        31364: function(e, t, n) {
            function r() {}

            function i() {}
            n.d(t, {
                HB: () => i,
                ok: () => r
            })
        },
        61614: function(e) {
            var t = Object.prototype.hasOwnProperty,
                n = Object.prototype.toString,
                r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                a = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
                },
                o = function(e) {
                    if (!e || "[object Object]" !== n.call(e)) return !1;
                    var r, i = t.call(e, "constructor"),
                        a = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !i && !a) return !1;
                    for (r in e);
                    return void 0 === r || t.call(e, r)
                },
                l = function(e, t) {
                    r && "__proto__" === t.name ? r(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                s = function(e, n) {
                    if ("__proto__" === n) {
                        if (!t.call(e, n)) return;
                        else if (i) return i(e, n).value
                    }
                    return e[n]
                };
            e.exports = function e() {
                var t, n, r, i, u, c, h = arguments[0],
                    p = 1,
                    m = arguments.length,
                    f = !1;
                for ("boolean" == typeof h && (f = h, h = arguments[1] || {}, p = 2), (null == h || "object" != typeof h && "function" != typeof h) && (h = {}); p < m; ++p)
                    if (t = arguments[p], null != t)
                        for (n in t) r = s(h, n), h !== (i = s(t, n)) && (f && i && (o(i) || (u = a(i))) ? (u ? (u = !1, c = r && a(r) ? r : []) : c = r && o(r) ? r : {}, l(h, {
                            name: n,
                            newValue: e(f, c, i)
                        })) : void 0 !== i && l(h, {
                            name: n,
                            newValue: i
                        }));
                return h
            }
        },
        32165: function(e, t, n) {
            n.d(t, {
                j: () => i
            });
            let r = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"],
                i = {
                    ancestors: {
                        tbody: ["table"],
                        td: ["table"],
                        th: ["table"],
                        thead: ["table"],
                        tfoot: ["table"],
                        tr: ["table"]
                    },
                    attributes: {
                        a: [...r, "dataFootnoteBackref", "dataFootnoteRef", ["className", "data-footnote-backref"], "href"],
                        blockquote: ["cite"],
                        code: [
                            ["className", /^language-./]
                        ],
                        del: ["cite"],
                        div: ["itemScope", "itemType"],
                        dl: [...r],
                        h2: [
                            ["className", "sr-only"]
                        ],
                        img: [...r, "longDesc", "src"],
                        input: [
                            ["disabled", !0],
                            ["type", "checkbox"]
                        ],
                        ins: ["cite"],
                        li: [
                            ["className", "task-list-item"]
                        ],
                        ol: [...r, ["className", "contains-task-list"]],
                        q: ["cite"],
                        section: ["dataFootnotes", ["className", "footnotes"]],
                        source: ["srcSet"],
                        summary: [...r],
                        table: [...r],
                        ul: [...r, ["className", "contains-task-list"]],
                        "*": ["abbr", "accept", "acceptCharset", "accessKey", "action", "align", "alt", "axis", "border", "cellPadding", "cellSpacing", "char", "charOff", "charSet", "checked", "clear", "colSpan", "color", "cols", "compact", "coords", "dateTime", "dir", "encType", "frame", "hSpace", "headers", "height", "hrefLang", "htmlFor", "id", "isMap", "itemProp", "label", "lang", "maxLength", "media", "method", "multiple", "name", "noHref", "noShade", "noWrap", "open", "prompt", "readOnly", "rev", "rowSpan", "rows", "rules", "scope", "selected", "shape", "size", "span", "start", "summary", "tabIndex", "title", "useMap", "vAlign", "value", "width"]
                    },
                    clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
                    clobberPrefix: "user-content-",
                    protocols: {
                        cite: ["http", "https"],
                        href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
                        longDesc: ["http", "https"],
                        src: ["http", "https"]
                    },
                    required: {
                        input: {
                            disabled: !0,
                            type: "checkbox"
                        }
                    },
                    strip: ["script"],
                    tagNames: ["a", "b", "blockquote", "br", "code", "dd", "del", "details", "div", "dl", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "li", "ol", "p", "picture", "pre", "q", "rp", "rt", "ruby", "s", "samp", "section", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "tt", "ul", "var"]
                }
        },
        85215: function(e) {
            var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                r = /^\s*/,
                i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                a = /^:\s*/,
                o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                l = /^[;\s]*/,
                s = /^\s+|\s+$/g;

            function u(e) {
                return e ? e.replace(s, "") : ""
            }
            e.exports = function(e, s) {
                if ("string" != typeof e) throw TypeError("First argument must be a string");
                if (!e) return [];
                s = s || {};
                var c = 1,
                    h = 1;

                function p(e) {
                    var t = e.match(n);
                    t && (c += t.length);
                    var r = e.lastIndexOf("\n");
                    h = ~r ? e.length - r : h + e.length
                }

                function m() {
                    var e = {
                        line: c,
                        column: h
                    };
                    return function(t) {
                        return t.position = new f(e), g(r), t
                    }
                }

                function f(e) {
                    this.start = e, this.end = {
                        line: c,
                        column: h
                    }, this.source = s.source
                }

                function d(t) {
                    var n = Error(s.source + ":" + c + ":" + h + ": " + t);
                    if (n.reason = t, n.filename = s.source, n.line = c, n.column = h, n.source = e, s.silent);
                    else throw n
                }

                function g(t) {
                    var n = t.exec(e);
                    if (n) {
                        var r = n[0];
                        return p(r), e = e.slice(r.length), n
                    }
                }

                function y(e) {
                    var t;
                    for (e = e || []; t = x();) !1 !== t && e.push(t);
                    return e
                }

                function x() {
                    var t = m();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var n = 2;
                            "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                        if (n += 2, "" === e.charAt(n - 1)) return d("End of comment missing");
                        var r = e.slice(2, n - 2);
                        return h += 2, p(r), e = e.slice(n), h += 2, t({
                            type: "comment",
                            comment: r
                        })
                    }
                }
                f.prototype.content = e, g(r);
                var b, v = [];
                for (y(v); b = function() {
                        var e = m(),
                            n = g(i);
                        if (n) {
                            if (x(), !g(a)) return d("property missing ':'");
                            var r = g(o),
                                s = e({
                                    type: "declaration",
                                    property: u(n[0].replace(t, "")),
                                    value: r ? u(r[0].replace(t, "")) : ""
                                });
                            return g(l), s
                        }
                    }();) !1 !== b && (v.push(b), y(v));
                return v
            }
        },
        49527: function(e, t, n) {
            n.d(t, {
                D: () => r
            });

            function r(e, t) {
                let n = String(e),
                    r = n.indexOf(t),
                    i = r,
                    a = 0,
                    o = 0;
                if ("string" != typeof t) throw TypeError("Expected substring");
                for (; - 1 !== r;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
                return o
            }
        },
        67361: function(e, t, n) {
            n.d(t, {
                d: () => i
            });
            let r = {};

            function i(e, t) {
                let n = t || r;
                return a(e, "boolean" != typeof n.includeImageAlt || n.includeImageAlt, "boolean" != typeof n.includeHtml || n.includeHtml)
            }

            function a(e, t, n) {
                var r;
                if ((r = e) && "object" == typeof r) {
                    if ("value" in e) return "html" !== e.type || n ? e.value : "";
                    if (t && "alt" in e && e.alt) return e.alt;
                    if ("children" in e) return o(e.children, t, n)
                }
                return Array.isArray(e) ? o(e, t, n) : ""
            }

            function o(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) r[i] = a(e[i], t, n);
                return r.join("")
            }
        },
        42709: function(e, t, n) {
            n.d(t, {
                B: () => a
            });
            var r = n(81416),
                i = n(37535);
            let a = {
                partial: !0,
                tokenize: function(e, t, n) {
                    return function(t) {
                        return (0, i.On)(t) ? (0, r.N)(e, a, "linePrefix")(t) : a(t)
                    };

                    function a(e) {
                        return null === e || (0, i.HP)(e) ? t(e) : n(e)
                    }
                }
            }
        },
        81416: function(e, t, n) {
            n.d(t, {
                N: () => i
            });
            var r = n(37535);

            function i(e, t, n, i) {
                let a = i ? i - 1 : 1 / 0,
                    o = 0;
                return function(i) {
                    return (0, r.On)(i) ? (e.enter(n), function i(l) {
                        return (0, r.On)(l) && o++ < a ? (e.consume(l), i) : (e.exit(n), t(l))
                    }(i)) : t(i)
                }
            }
        },
        37535: function(e, t, n) {
            n.d(t, {
                BM: () => l,
                CW: () => r,
                Ee: () => h,
                HP: () => c,
                JQ: () => o,
                Ny: () => f,
                On: () => p,
                cx: () => a,
                es: () => m,
                lV: () => i,
                ok: () => s,
                ol: () => u
            });
            let r = d(/[A-Za-z]/),
                i = d(/[\dA-Za-z]/),
                a = d(/[#-'*+\--9=?A-Z^-~]/);

            function o(e) {
                return null !== e && (e < 32 || 127 === e)
            }
            let l = d(/\d/),
                s = d(/[\dA-Fa-f]/),
                u = d(/[!-/:-@[-`{-~]/);

            function c(e) {
                return null !== e && e < -2
            }

            function h(e) {
                return null !== e && (e < 0 || 32 === e)
            }

            function p(e) {
                return -2 === e || -1 === e || 32 === e
            }
            let m = d(/\p{P}|\p{S}/u),
                f = d(/\s/);

            function d(e) {
                return function(t) {
                    return null !== t && t > -1 && e.test(String.fromCharCode(t))
                }
            }
        },
        29140: function(e, t, n) {
            function r(e, t, n, r) {
                let i, a = e.length,
                    o = 0;
                if (t = t < 0 ? -t > a ? 0 : a + t : t > a ? a : t, n = n > 0 ? n : 0, r.length < 1e4)(i = Array.from(r)).unshift(t, n), e.splice(...i);
                else
                    for (n && e.splice(t, n); o < r.length;)(i = r.slice(o, o + 1e4)).unshift(t, 0), e.splice(...i), o += 1e4, t += 1e4
            }

            function i(e, t) {
                return e.length > 0 ? (r(e, e.length, 0, t), e) : t
            }
            n.d(t, {
                V: () => i,
                m: () => r
            })
        },
        39172: function(e, t, n) {
            n.d(t, {
                S: () => i
            });
            var r = n(37535);

            function i(e) {
                return null === e || (0, r.Ee)(e) || (0, r.Ny)(e) ? 1 : (0, r.es)(e) ? 2 : void 0
            }
        },
        52124: function(e, t, n) {
            n.d(t, {
                y: () => a
            });
            var r = n(29140);
            let i = {}.hasOwnProperty;

            function a(e) {
                let t = {},
                    n = -1;
                for (; ++n < e.length;) ! function(e, t) {
                    let n;
                    for (n in t) {
                        let a, o = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                            l = t[n];
                        if (l)
                            for (a in l) {
                                i.call(o, a) || (o[a] = []);
                                let e = l[a];
                                ! function(e, t) {
                                    let n = -1,
                                        i = [];
                                    for (; ++n < t.length;)("after" === t[n].add ? e : i).push(t[n]);
                                    (0, r.m)(e, 0, 0, i)
                                }(o[a], Array.isArray(e) ? e : e ? [e] : [])
                            }
                    }
                }(t, e[n]);
                return t
            }
        },
        15506: function(e, t, n) {
            n.d(t, {
                B: () => r
            });

            function r(e) {
                return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
            }
        },
        77276: function(e, t, n) {
            n.d(t, {
                W: () => r
            });

            function r(e, t, n) {
                let r = [],
                    i = -1;
                for (; ++i < e.length;) {
                    let a = e[i].resolveAll;
                    a && !r.includes(a) && (t = a(t, n), r.push(a))
                }
                return t
            }
        },
        34226: function(e, t, n) {
            n.d(t, {
                JW: () => x,
                qy: () => y
            });
            class r {
                constructor(e, t, n) {
                    this.normal = t, this.property = e, n && (this.space = n)
                }
            }

            function i(e, t) {
                let n = {},
                    i = {};
                for (let t of e) Object.assign(n, t.property), Object.assign(i, t.normal);
                return new r(n, i, t)
            }
            r.prototype.normal = {}, r.prototype.property = {}, r.prototype.space = void 0;
            var a = n(52384),
                o = n(29157);

            function l(e) {
                let t = {},
                    n = {};
                for (let [r, i] of Object.entries(e.properties)) {
                    let l = new o.E(r, e.transform(e.attributes || {}, r), i, e.space);
                    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[(0, a.S)(r)] = r, n[(0, a.S)(l.attribute)] = r
                }
                return new r(t, n, e.space)
            }
            var s = n(8289);
            let u = l({
                properties: {
                    ariaActiveDescendant: null,
                    ariaAtomic: s.booleanish,
                    ariaAutoComplete: null,
                    ariaBusy: s.booleanish,
                    ariaChecked: s.booleanish,
                    ariaColCount: s.number,
                    ariaColIndex: s.number,
                    ariaColSpan: s.number,
                    ariaControls: s.spaceSeparated,
                    ariaCurrent: null,
                    ariaDescribedBy: s.spaceSeparated,
                    ariaDetails: null,
                    ariaDisabled: s.booleanish,
                    ariaDropEffect: s.spaceSeparated,
                    ariaErrorMessage: null,
                    ariaExpanded: s.booleanish,
                    ariaFlowTo: s.spaceSeparated,
                    ariaGrabbed: s.booleanish,
                    ariaHasPopup: null,
                    ariaHidden: s.booleanish,
                    ariaInvalid: null,
                    ariaKeyShortcuts: null,
                    ariaLabel: null,
                    ariaLabelledBy: s.spaceSeparated,
                    ariaLevel: s.number,
                    ariaLive: null,
                    ariaModal: s.booleanish,
                    ariaMultiLine: s.booleanish,
                    ariaMultiSelectable: s.booleanish,
                    ariaOrientation: null,
                    ariaOwns: s.spaceSeparated,
                    ariaPlaceholder: null,
                    ariaPosInSet: s.number,
                    ariaPressed: s.booleanish,
                    ariaReadOnly: s.booleanish,
                    ariaRelevant: null,
                    ariaRequired: s.booleanish,
                    ariaRoleDescription: s.spaceSeparated,
                    ariaRowCount: s.number,
                    ariaRowIndex: s.number,
                    ariaRowSpan: s.number,
                    ariaSelected: s.booleanish,
                    ariaSetSize: s.number,
                    ariaSort: null,
                    ariaValueMax: s.number,
                    ariaValueMin: s.number,
                    ariaValueNow: s.number,
                    ariaValueText: null,
                    role: null
                },
                transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase()
            });

            function c(e, t) {
                return t in e ? e[t] : t
            }

            function h(e, t) {
                return c(e, t.toLowerCase())
            }
            let p = l({
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: s.commaSeparated,
                        acceptCharset: s.spaceSeparated,
                        accessKey: s.spaceSeparated,
                        action: null,
                        allow: null,
                        allowFullScreen: s.boolean,
                        allowPaymentRequest: s.boolean,
                        allowUserMedia: s.boolean,
                        alt: null,
                        as: null,
                        async: s.boolean,
                        autoCapitalize: null,
                        autoComplete: s.spaceSeparated,
                        autoFocus: s.boolean,
                        autoPlay: s.boolean,
                        blocking: s.spaceSeparated,
                        capture: null,
                        charSet: null,
                        checked: s.boolean,
                        cite: null,
                        className: s.spaceSeparated,
                        cols: s.number,
                        colSpan: null,
                        content: null,
                        contentEditable: s.booleanish,
                        controls: s.boolean,
                        controlsList: s.spaceSeparated,
                        coords: s.number | s.commaSeparated,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: s.boolean,
                        defer: s.boolean,
                        dir: null,
                        dirName: null,
                        disabled: s.boolean,
                        download: s.overloadedBoolean,
                        draggable: s.booleanish,
                        encType: null,
                        enterKeyHint: null,
                        fetchPriority: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: s.boolean,
                        formTarget: null,
                        headers: s.spaceSeparated,
                        height: s.number,
                        hidden: s.overloadedBoolean,
                        high: s.number,
                        href: null,
                        hrefLang: null,
                        htmlFor: s.spaceSeparated,
                        httpEquiv: s.spaceSeparated,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inert: s.boolean,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: s.boolean,
                        itemId: null,
                        itemProp: s.spaceSeparated,
                        itemRef: s.spaceSeparated,
                        itemScope: s.boolean,
                        itemType: s.spaceSeparated,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: s.boolean,
                        low: s.number,
                        manifest: null,
                        max: null,
                        maxLength: s.number,
                        media: null,
                        method: null,
                        min: null,
                        minLength: s.number,
                        multiple: s.boolean,
                        muted: s.boolean,
                        name: null,
                        nonce: null,
                        noModule: s.boolean,
                        noValidate: s.boolean,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeToggle: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: s.boolean,
                        optimum: s.number,
                        pattern: null,
                        ping: s.spaceSeparated,
                        placeholder: null,
                        playsInline: s.boolean,
                        popover: null,
                        popoverTarget: null,
                        popoverTargetAction: null,
                        poster: null,
                        preload: null,
                        readOnly: s.boolean,
                        referrerPolicy: null,
                        rel: s.spaceSeparated,
                        required: s.boolean,
                        reversed: s.boolean,
                        rows: s.number,
                        rowSpan: s.number,
                        sandbox: s.spaceSeparated,
                        scope: null,
                        scoped: s.boolean,
                        seamless: s.boolean,
                        selected: s.boolean,
                        shadowRootClonable: s.boolean,
                        shadowRootDelegatesFocus: s.boolean,
                        shadowRootMode: null,
                        shape: null,
                        size: s.number,
                        sizes: null,
                        slot: null,
                        span: s.number,
                        spellCheck: s.booleanish,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: s.number,
                        step: null,
                        style: null,
                        tabIndex: s.number,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: s.boolean,
                        useMap: null,
                        value: s.booleanish,
                        width: s.number,
                        wrap: null,
                        writingSuggestions: null,
                        align: null,
                        aLink: null,
                        archive: s.spaceSeparated,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: s.number,
                        borderColor: null,
                        bottomMargin: s.number,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: s.boolean,
                        declare: s.boolean,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: s.number,
                        leftMargin: s.number,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: s.number,
                        marginWidth: s.number,
                        noResize: s.boolean,
                        noHref: s.boolean,
                        noShade: s.boolean,
                        noWrap: s.boolean,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: s.number,
                        rules: null,
                        scheme: null,
                        scrolling: s.booleanish,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: s.number,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: s.number,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: s.boolean,
                        disableRemotePlayback: s.boolean,
                        prefix: null,
                        property: null,
                        results: s.number,
                        security: null,
                        unselectable: null
                    },
                    space: "html",
                    transform: h
                }),
                m = l({
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        transformOrigin: "transform-origin",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    properties: {
                        about: s.commaOrSpaceSeparated,
                        accentHeight: s.number,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: s.number,
                        amplitude: s.number,
                        arabicForm: null,
                        ascent: s.number,
                        attributeName: null,
                        attributeType: null,
                        azimuth: s.number,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: s.number,
                        by: null,
                        calcMode: null,
                        capHeight: s.number,
                        className: s.spaceSeparated,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: s.number,
                        diffuseConstant: s.number,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: s.number,
                        dominantBaseline: null,
                        download: s.boolean,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: s.number,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: s.number,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: s.number,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: s.commaSeparated,
                        g2: s.commaSeparated,
                        glyphName: s.commaSeparated,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: s.number,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: s.number,
                        horizOriginX: s.number,
                        horizOriginY: s.number,
                        id: null,
                        ideographic: s.number,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: s.number,
                        k: s.number,
                        k1: s.number,
                        k2: s.number,
                        k3: s.number,
                        k4: s.number,
                        kernelMatrix: s.commaOrSpaceSeparated,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: s.number,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: s.number,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: s.number,
                        overlineThickness: s.number,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: s.number,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: s.spaceSeparated,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: s.number,
                        pointsAtY: s.number,
                        pointsAtZ: s.number,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: s.commaOrSpaceSeparated,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: s.commaOrSpaceSeparated,
                        rev: s.commaOrSpaceSeparated,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: s.commaOrSpaceSeparated,
                        requiredFeatures: s.commaOrSpaceSeparated,
                        requiredFonts: s.commaOrSpaceSeparated,
                        requiredFormats: s.commaOrSpaceSeparated,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: s.number,
                        specularExponent: s.number,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: s.number,
                        strikethroughThickness: s.number,
                        string: null,
                        stroke: null,
                        strokeDashArray: s.commaOrSpaceSeparated,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: s.number,
                        strokeOpacity: s.number,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: s.number,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: s.commaOrSpaceSeparated,
                        tabIndex: s.number,
                        tableValues: null,
                        target: null,
                        targetX: s.number,
                        targetY: s.number,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: s.commaOrSpaceSeparated,
                        to: null,
                        transform: null,
                        transformOrigin: null,
                        u1: null,
                        u2: null,
                        underlinePosition: s.number,
                        underlineThickness: s.number,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: s.number,
                        values: null,
                        vAlphabetic: s.number,
                        vMathematical: s.number,
                        vectorEffect: null,
                        vHanging: s.number,
                        vIdeographic: s.number,
                        version: null,
                        vertAdvY: s.number,
                        vertOriginX: s.number,
                        vertOriginY: s.number,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: s.number,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    },
                    space: "svg",
                    transform: c
                }),
                f = l({
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    },
                    space: "xlink",
                    transform: (e, t) => "xlink:" + t.slice(5).toLowerCase()
                }),
                d = l({
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    properties: {
                        xmlnsXLink: null,
                        xmlns: null
                    },
                    space: "xmlns",
                    transform: h
                }),
                g = l({
                    properties: {
                        xmlBase: null,
                        xmlLang: null,
                        xmlSpace: null
                    },
                    space: "xml",
                    transform: (e, t) => "xml:" + t.slice(3).toLowerCase()
                }),
                y = i([u, p, f, d, g], "html"),
                x = i([u, m, f, d, g], "svg")
        },
        16088: function(e, t, n) {
            n.d(t, {
                I: () => u
            });
            var r = n(29157),
                i = n(83898),
                a = n(52384);
            let o = /[A-Z]/g,
                l = /-[a-z]/g,
                s = /^data[-\w.:]+$/i;

            function u(e, t) {
                let n = (0, a.S)(t),
                    u = t,
                    p = i.R;
                if (n in e.normal) return e.property[e.normal[n]];
                if (n.length > 4 && "data" === n.slice(0, 4) && s.test(t)) {
                    if ("-" === t.charAt(4)) {
                        let e = t.slice(5).replace(l, h);
                        u = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                    } else {
                        let e = t.slice(4);
                        if (!l.test(e)) {
                            let n = e.replace(o, c);
                            "-" !== n.charAt(0) && (n = "-" + n), t = "data" + n
                        }
                    }
                    p = r.E
                }
                return new p(u, t)
            }

            function c(e) {
                return "-" + e.toLowerCase()
            }

            function h(e) {
                return e.charAt(1).toUpperCase()
            }
        },
        52384: function(e, t, n) {
            n.d(t, {
                S: () => r
            });

            function r(e) {
                return e.toLowerCase()
            }
        },
        29157: function(e, t, n) {
            n.d(t, {
                E: () => o
            });
            var r = n(83898),
                i = n(8289);
            let a = Object.keys(i);
            class o extends r.R {
                constructor(e, t, n, r) {
                    let o = -1;
                    if (super(e, t), function(e, t, n) {
                            n && (e[t] = n)
                        }(this, "space", r), "number" == typeof n)
                        for (; ++o < a.length;) {
                            const e = a[o];
                            ! function(e, t, n) {
                                n && (e[t] = n)
                            }(this, a[o], (n & i[e]) === i[e])
                        }
                }
            }
            o.prototype.defined = !0
        },
        83898: function(e, t, n) {
            n.d(t, {
                R: () => r
            });
            class r {
                constructor(e, t) {
                    this.attribute = t, this.property = e
                }
            }
            r.prototype.attribute = "", r.prototype.booleanish = !1, r.prototype.boolean = !1, r.prototype.commaOrSpaceSeparated = !1, r.prototype.commaSeparated = !1, r.prototype.defined = !1, r.prototype.mustUseProperty = !1, r.prototype.number = !1, r.prototype.overloadedBoolean = !1, r.prototype.property = "", r.prototype.spaceSeparated = !1, r.prototype.space = void 0
        },
        8289: function(e, t, n) {
            n.r(t), n.d(t, {
                boolean: () => i,
                booleanish: () => a,
                commaOrSpaceSeparated: () => c,
                commaSeparated: () => u,
                number: () => l,
                overloadedBoolean: () => o,
                spaceSeparated: () => s
            });
            let r = 0,
                i = h(),
                a = h(),
                o = h(),
                l = h(),
                s = h(),
                u = h(),
                c = h();

            function h() {
                return 2 ** ++r
            }
        },
        72343: function(e, t, n) {
            n.d(t, {
                oz: () => tU,
                Lv: () => tV
            });
            var r = {};
            n.r(r), n.d(r, {
                attentionMarkers: () => eG,
                contentInitial: () => eV,
                disable: () => eY,
                document: () => eU,
                flow: () => ej,
                flowInitial: () => e_,
                insideSpan: () => eW,
                string: () => eX,
                text: () => eK
            });
            var i = n(31364),
                a = n(34102);
            let o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
                l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
                s = {};

            function u(e, t) {
                return ((t || s).jsx ? l : o).test(e)
            }
            let c = /[ \t\n\f\r]/g;

            function h(e) {
                return "" === e.replace(c, "")
            }
            var p = n(34226),
                m = n(16088);
            let f = {
                classId: "classID",
                dataType: "datatype",
                itemId: "itemID",
                strokeDashArray: "strokeDasharray",
                strokeDashOffset: "strokeDashoffset",
                strokeLineCap: "strokeLinecap",
                strokeLineJoin: "strokeLinejoin",
                strokeMiterLimit: "strokeMiterlimit",
                typeOf: "typeof",
                xLinkActuate: "xlinkActuate",
                xLinkArcRole: "xlinkArcrole",
                xLinkHref: "xlinkHref",
                xLinkRole: "xlinkRole",
                xLinkShow: "xlinkShow",
                xLinkTitle: "xlinkTitle",
                xLinkType: "xlinkType",
                xmlnsXLink: "xmlnsXlink"
            };
            var d = n(2501),
                g = n(88861),
                y = n.n(g),
                x = n(58592);

            function b(e) {
                return e && "object" == typeof e ? "position" in e || "type" in e ? k(e.position) : "start" in e || "end" in e ? k(e) : "line" in e || "column" in e ? v(e) : "" : ""
            }

            function v(e) {
                return w(e && e.line) + ":" + w(e && e.column)
            }

            function k(e) {
                return v(e && e.start) + "-" + v(e && e.end)
            }

            function w(e) {
                return e && "number" == typeof e ? e : 1
            }
            class z extends Error {
                constructor(e, t, n) {
                    super(), "string" == typeof t && (n = t, t = void 0);
                    let r = "",
                        i = {},
                        a = !1;
                    if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? {
                            place: t
                        } : "type" in t ? {
                            ancestors: [t],
                            place: t.position
                        } : {
                            ...t
                        }), "string" == typeof e ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && "string" == typeof n) {
                        const e = n.indexOf(":"); - 1 === e ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1))
                    }
                    if (!i.place && i.ancestors && i.ancestors) {
                        const e = i.ancestors[i.ancestors.length - 1];
                        e && (i.place = e.position)
                    }
                    const o = i.place && "start" in i.place ? i.place.start : i.place;
                    this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = b(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && "string" == typeof i.cause.stack ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0
                }
            }
            z.prototype.file = "", z.prototype.name = "", z.prototype.reason = "", z.prototype.message = "", z.prototype.stack = "", z.prototype.column = void 0, z.prototype.line = void 0, z.prototype.ancestors = void 0, z.prototype.cause = void 0, z.prototype.fatal = void 0, z.prototype.place = void 0, z.prototype.ruleId = void 0, z.prototype.source = void 0;
            let S = {}.hasOwnProperty,
                A = new Map,
                T = /[A-Z]/g,
                M = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
                C = new Set(["td", "th"]),
                E = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

            function R(e, t, n) {
                var r, o, l, s, u, c, g, x, b;
                let v, k, w, A, R, N, q, H, F, U, V;
                return "element" === t.type ? (r = e, o = t, l = n, k = v = r.schema, "svg" === o.tagName.toLowerCase() && "html" === v.space && (r.schema = p.JW), r.ancestors.push(o), w = P(r, o.tagName, !1), A = function(e, t) {
                    let n, r, i = {};
                    for (r in t.properties)
                        if ("children" !== r && S.call(t.properties, r)) {
                            let o = function(e, t, n) {
                                let r = (0, m.I)(e.schema, t);
                                if (!(null == n || "number" == typeof n && Number.isNaN(n))) {
                                    if (Array.isArray(n) && (n = r.commaSeparated ? (0, a.A)(n) : (0, d.A)(n)), "style" === r.property) {
                                        let t = "object" == typeof n ? n : function(e, t) {
                                            try {
                                                return y()(t, {
                                                    reactCompat: !0
                                                })
                                            } catch (n) {
                                                if (e.ignoreInvalidStyle) return {};
                                                let t = new z("Cannot parse `style` attribute", {
                                                    ancestors: e.ancestors,
                                                    cause: n,
                                                    ruleId: "style",
                                                    source: "hast-util-to-jsx-runtime"
                                                });
                                                throw t.file = e.filePath || void 0, t.url = E + "#cannot-parse-style-attribute", t
                                            }
                                        }(e, String(n));
                                        return "css" === e.stylePropertyNameCase && (t = function(e) {
                                            let t, n = {};
                                            for (t in e) S.call(e, t) && (n[function(e) {
                                                let t = e.replace(T, D);
                                                return "ms-" === t.slice(0, 3) && (t = "-" + t), t
                                            }(t)] = e[t]);
                                            return n
                                        }(t)), ["style", t]
                                    }
                                    return ["react" === e.elementAttributeNameCase && r.space ? f[r.property] || r.property : r.attribute, n]
                                }
                            }(e, r, t.properties[r]);
                            if (o) {
                                let [r, a] = o;
                                e.tableCellAlignToStyle && "align" === r && "string" == typeof a && C.has(t.tagName) ? n = a : i[r] = a
                            }
                        } return n && ((i.style || (i.style = {}))["css" === e.stylePropertyNameCase ? "text-align" : "textAlign"] = n), i
                }(r, o), R = O(r, o), M.has(o.tagName) && (R = R.filter(function(e) {
                    return "string" != typeof e || !("object" == typeof e ? "text" === e.type && h(e.value) : h(e))
                })), I(r, A, w, o), B(A, R), r.ancestors.pop(), r.schema = v, r.create(o, w, A, l)) : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type ? function(e, t) {
                    if (t.data && t.data.estree && e.evaluater) {
                        let n = t.data.estree.body[0];
                        return (0, i.ok)("ExpressionStatement" === n.type), e.evaluater.evaluateExpression(n.expression)
                    }
                    L(e, t.position)
                }(e, t) : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type ? (s = e, u = t, c = n, q = N = s.schema, "svg" === u.name && "html" === N.space && (s.schema = p.JW), s.ancestors.push(u), H = null === u.name ? s.Fragment : P(s, u.name, !0), F = function(e, t) {
                    let n = {};
                    for (let r of t.attributes)
                        if ("mdxJsxExpressionAttribute" === r.type)
                            if (r.data && r.data.estree && e.evaluater) {
                                let t = r.data.estree.body[0];
                                (0, i.ok)("ExpressionStatement" === t.type);
                                let a = t.expression;
                                (0, i.ok)("ObjectExpression" === a.type);
                                let o = a.properties[0];
                                (0, i.ok)("SpreadElement" === o.type), Object.assign(n, e.evaluater.evaluateExpression(o.argument))
                            } else L(e, t.position);
                    else {
                        let a, o = r.name;
                        if (r.value && "object" == typeof r.value)
                            if (r.value.data && r.value.data.estree && e.evaluater) {
                                let t = r.value.data.estree.body[0];
                                (0, i.ok)("ExpressionStatement" === t.type), a = e.evaluater.evaluateExpression(t.expression)
                            } else L(e, t.position);
                        else a = null === r.value || r.value;
                        n[o] = a
                    }
                    return n
                }(s, u), U = O(s, u), I(s, F, H, u), B(F, U), s.ancestors.pop(), s.schema = N, s.create(u, H, F, c)) : "mdxjsEsm" === t.type ? function(e, t) {
                    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
                    L(e, t.position)
                }(e, t) : "root" === t.type ? (g = e, x = t, b = n, B(V = {}, O(g, x)), g.create(x, g.Fragment, V, b)) : "text" === t.type ? t.value : void 0
            }

            function I(e, t, n, r) {
                "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r)
            }

            function B(e, t) {
                if (t.length > 0) {
                    let n = t.length > 1 ? t : t[0];
                    n && (e.children = n)
                }
            }

            function O(e, t) {
                let n = [],
                    r = -1,
                    i = e.passKeys ? new Map : A;
                for (; ++r < t.children.length;) {
                    let a, o = t.children[r];
                    if (e.passKeys) {
                        let e = "element" === o.type ? o.tagName : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name : void 0;
                        if (e) {
                            let t = i.get(e) || 0;
                            a = e + "-" + t, i.set(e, t + 1)
                        }
                    }
                    let l = R(e, o, a);
                    void 0 !== l && n.push(l)
                }
                return n
            }

            function P(e, t, n) {
                let r;
                if (n)
                    if (t.includes(".")) {
                        let e, n = t.split("."),
                            a = -1;
                        for (; ++a < n.length;) {
                            let t = u(n[a]) ? {
                                type: "Identifier",
                                name: n[a]
                            } : {
                                type: "Literal",
                                value: n[a]
                            };
                            e = e ? {
                                type: "MemberExpression",
                                object: e,
                                property: t,
                                computed: !!(a && "Literal" === t.type),
                                optional: !1
                            } : t
                        }(0, i.ok)(e, "always a result"), r = e
                    } else r = u(t) && !/^[a-z]/.test(t) ? {
                        type: "Identifier",
                        name: t
                    } : {
                        type: "Literal",
                        value: t
                    };
                else r = {
                    type: "Literal",
                    value: t
                };
                if ("Literal" === r.type) {
                    let t = r.value;
                    return S.call(e.components, t) ? e.components[t] : t
                }
                if (e.evaluater) return e.evaluater.evaluateExpression(r);
                L(e)
            }

            function L(e, t) {
                let n = new z("Cannot handle MDX estrees without `createEvaluater`", {
                    ancestors: e.ancestors,
                    place: t,
                    ruleId: "mdx-estree",
                    source: "hast-util-to-jsx-runtime"
                });
                throw n.file = e.filePath || void 0, n.url = E + "#cannot-handle-mdx-estrees-without-createevaluater", n
            }

            function D(e) {
                return "-" + e.toLowerCase()
            }
            let N = {
                action: ["form"],
                cite: ["blockquote", "del", "ins", "q"],
                data: ["object"],
                formAction: ["button", "input"],
                href: ["a", "area", "base", "link"],
                icon: ["menuitem"],
                itemId: null,
                manifest: ["html"],
                ping: ["a", "area"],
                poster: ["video"],
                src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
            };
            var q = n(36878);
            n(58191);
            var H = n(67361),
                F = n(29140);
            class U {
                get(e) {
                    if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
                    return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
                }
                get length() {
                    return this.left.length + this.right.length
                }
                shift() {
                    return this.setCursor(0), this.right.pop()
                }
                slice(e, t) {
                    let n = null == t ? 1 / 0 : t;
                    return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
                }
                splice(e, t, n) {
                    this.setCursor(Math.trunc(e));
                    let r = this.right.splice(this.right.length - (t || 0), 1 / 0);
                    return n && V(this.left, n), r.reverse()
                }
                pop() {
                    return this.setCursor(1 / 0), this.left.pop()
                }
                push(e) {
                    this.setCursor(1 / 0), this.left.push(e)
                }
                pushMany(e) {
                    this.setCursor(1 / 0), V(this.left, e)
                }
                unshift(e) {
                    this.setCursor(0), this.right.push(e)
                }
                unshiftMany(e) {
                    this.setCursor(0), V(this.right, e.reverse())
                }
                setCursor(e) {
                    if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length))
                        if (e < this.left.length) {
                            let t = this.left.splice(e, 1 / 0);
                            V(this.right, t.reverse())
                        } else {
                            let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
                            V(this.left, t.reverse())
                        }
                }
                constructor(e) {
                    this.left = e ? [...e] : [], this.right = []
                }
            }

            function V(e, t) {
                let n = 0;
                if (t.length < 1e4) e.push(...t);
                else
                    for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
            }

            function _(e) {
                let t, n, r, i, a, o, l, s = {},
                    u = -1,
                    c = new U(e);
                for (; ++u < c.length;) {
                    for (; u in s;) u = s[u];
                    if (t = c.get(u), u && "chunkFlow" === t[1].type && "listItemPrefix" === c.get(u - 1)[1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type))
                        for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
                    if ("enter" === t[0]) t[1].contentType && (Object.assign(s, function(e, t) {
                        let n, r, i = e.get(t)[1],
                            a = e.get(t)[2],
                            o = t - 1,
                            l = [],
                            s = i._tokenizer;
                        !s && (s = a.parser[i.contentType](i.start), i._contentTypeTextTrailing && (s._contentTypeTextTrailing = !0));
                        let u = s.events,
                            c = [],
                            h = {},
                            p = -1,
                            m = i,
                            f = 0,
                            d = 0,
                            g = [0];
                        for (; m;) {
                            for (; e.get(++o)[1] !== m;);
                            l.push(o), !m._tokenizer && (n = a.sliceStream(m), m.next || n.push(null), r && s.defineSkip(m.start), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(n), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), r = m, m = m.next
                        }
                        for (m = i; ++p < u.length;) "exit" === u[p][0] && "enter" === u[p - 1][0] && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (d = p + 1, g.push(d), m._tokenizer = void 0, m.previous = void 0, m = m.next);
                        for (s.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : g.pop(), p = g.length; p--;) {
                            let t = u.slice(g[p], g[p + 1]),
                                n = l.pop();
                            c.push([n, n + t.length - 1]), e.splice(n, 2, t)
                        }
                        for (c.reverse(), p = -1; ++p < c.length;) h[f + c[p][0]] = f + c[p][1], f += c[p][1] - c[p][0] - 1;
                        return h
                    }(c, u)), u = s[u], l = !0);
                    else if (t[1]._container) {
                        for (r = u, n = void 0; r--;)
                            if ("lineEnding" === (i = c.get(r))[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (c.get(n)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r);
                            else if ("linePrefix" === i[1].type || "listItemIndent" === i[1].type);
                        else break;
                        n && (t[1].end = {
                            ...c.get(n)[1].start
                        }, (a = c.slice(n, u)).unshift(t), c.splice(n, u - n + 1, a))
                    }
                }
                return (0, F.m)(e, 0, 1 / 0, c.slice(0)), !l
            }
            var j = n(52124),
                X = n(81416),
                K = n(37535);
            let W = {
                    tokenize: function(e) {
                        let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                            return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, X.N)(e, n, "linePrefix"))
                        }, function(n) {
                            return e.enter("paragraph"),
                                function n(r) {
                                    let i = e.enter("chunkText", {
                                        contentType: "text",
                                        previous: t
                                    });
                                    return t && (t.next = i), t = i,
                                        function t(r) {
                                            if (null === r) {
                                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                                return
                                            }
                                            return (0, K.HP)(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
                                        }(r)
                                }(n)
                        });
                        return n
                    }
                },
                G = {
                    tokenize: function(e) {
                        let t, n, r, i = this,
                            a = [],
                            o = 0;
                        return l;

                        function l(t) {
                            if (o < a.length) {
                                let n = a[o];
                                return i.containerState = n[1], e.attempt(n[0].continuation, s, u)(t)
                            }
                            return u(t)
                        }

                        function s(e) {
                            if (o++, i.containerState._closeFlow) {
                                let n;
                                i.containerState._closeFlow = void 0, t && y();
                                let r = i.events.length,
                                    a = r;
                                for (; a--;)
                                    if ("exit" === i.events[a][0] && "chunkFlow" === i.events[a][1].type) {
                                        n = i.events[a][1].end;
                                        break
                                    } g(o);
                                let l = r;
                                for (; l < i.events.length;) i.events[l][1].end = {
                                    ...n
                                }, l++;
                                return (0, F.m)(i.events, a + 1, 0, i.events.slice(r)), i.events.length = l, u(e)
                            }
                            return l(e)
                        }

                        function u(n) {
                            if (o === a.length) {
                                if (!t) return p(n);
                                if (t.currentConstruct && t.currentConstruct.concrete) return f(n);
                                i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                            }
                            return i.containerState = {}, e.check(Y, c, h)(n)
                        }

                        function c(e) {
                            return t && y(), g(o), p(e)
                        }

                        function h(e) {
                            return i.parser.lazy[i.now().line] = o !== a.length, r = i.now().offset, f(e)
                        }

                        function p(t) {
                            return i.containerState = {}, e.attempt(Y, m, f)(t)
                        }

                        function m(e) {
                            return o++, a.push([i.currentConstruct, i.containerState]), p(e)
                        }

                        function f(r) {
                            if (null === r) {
                                t && y(), g(0), e.consume(r);
                                return
                            }
                            return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                                    _tokenizer: t,
                                    contentType: "flow",
                                    previous: n
                                }),
                                function t(n) {
                                    if (null === n) {
                                        d(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                                        return
                                    }
                                    return (0, K.HP)(n) ? (e.consume(n), d(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, l) : (e.consume(n), t)
                                }(r)
                        }

                        function d(e, a) {
                            let l = i.sliceStream(e);
                            if (a && l.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(l), i.parser.lazy[e.start.line]) {
                                let e, n, a = t.events.length;
                                for (; a--;)
                                    if (t.events[a][1].start.offset < r && (!t.events[a][1].end || t.events[a][1].end.offset > r)) return;
                                let l = i.events.length,
                                    s = l;
                                for (; s--;)
                                    if ("exit" === i.events[s][0] && "chunkFlow" === i.events[s][1].type) {
                                        if (e) {
                                            n = i.events[s][1].end;
                                            break
                                        }
                                        e = !0
                                    } for (g(o), a = l; a < i.events.length;) i.events[a][1].end = {
                                    ...n
                                }, a++;
                                (0, F.m)(i.events, s + 1, 0, i.events.slice(l)), i.events.length = a
                            }
                        }

                        function g(t) {
                            let n = a.length;
                            for (; n-- > t;) {
                                let t = a[n];
                                i.containerState = t[1], t[0].exit.call(i, e)
                            }
                            a.length = t
                        }

                        function y() {
                            t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0
                        }
                    }
                },
                Y = {
                    tokenize: function(e, t, n) {
                        return (0, X.N)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }
                };
            var $ = n(42709);
            let Z = {
                    resolve: function(e) {
                        return _(e), e
                    },
                    tokenize: function(e, t) {
                        let n;
                        return function(t) {
                            return e.enter("content"), n = e.enter("chunkContent", {
                                contentType: "content"
                            }), r(t)
                        };

                        function r(t) {
                            return null === t ? i(t) : (0, K.HP)(t) ? e.check(Q, a, i)(t) : (e.consume(t), r)
                        }

                        function i(n) {
                            return e.exit("chunkContent"), e.exit("content"), t(n)
                        }

                        function a(t) {
                            return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                                contentType: "content",
                                previous: n
                            }), n = n.next, r
                        }
                    }
                },
                Q = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, X.N)(e, i, "linePrefix")
                        };

                        function i(i) {
                            if (null === i || (0, K.HP)(i)) return n(i);
                            let a = r.events[r.events.length - 1];
                            return !r.parser.constructs.disable.null.includes("codeIndented") && a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                        }
                    }
                },
                J = {
                    tokenize: function(e) {
                        let t = this,
                            n = e.attempt($.B, function(r) {
                                return null === r ? void e.consume(r) : (e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n)
                            }, e.attempt(this.parser.constructs.flowInitial, r, (0, X.N)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(Z, r)), "linePrefix")));
                        return n;

                        function r(r) {
                            return null === r ? void e.consume(r) : (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n)
                        }
                    }
                },
                ee = {
                    resolveAll: ei()
                },
                et = er("string"),
                en = er("text");

            function er(e) {
                return {
                    resolveAll: ei("text" === e ? ea : void 0),
                    tokenize: function(t) {
                        let n = this,
                            r = this.parser.constructs[e],
                            i = t.attempt(r, a, o);
                        return a;

                        function a(e) {
                            return s(e) ? i(e) : o(e)
                        }

                        function o(e) {
                            return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), l)
                        }

                        function l(e) {
                            return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), l)
                        }

                        function s(e) {
                            if (null === e) return !0;
                            let t = r[e],
                                i = -1;
                            if (t)
                                for (; ++i < t.length;) {
                                    let e = t[i];
                                    if (!e.previous || e.previous.call(n, n.previous)) return !0
                                }
                            return !1
                        }
                    }
                }
            }

            function ei(e) {
                return function(t, n) {
                    let r, i = -1;
                    for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                    return e ? e(t, n) : t
                }
            }

            function ea(e, t) {
                let n = 0;
                for (; ++n <= e.length;)
                    if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                        let r, i = e[n - 1][1],
                            a = t.sliceStream(i),
                            o = a.length,
                            l = -1,
                            s = 0;
                        for (; o--;) {
                            let e = a[o];
                            if ("string" == typeof e) {
                                for (l = e.length; 32 === e.charCodeAt(l - 1);) s++, l--;
                                if (l) break;
                                l = -1
                            } else if (-2 === e) r = !0, s++;
                            else if (-1 === e);
                            else {
                                o++;
                                break
                            }
                        }
                        if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
                            let a = {
                                type: n === e.length || r || s < 2 ? "lineSuffix" : "hardBreakTrailing",
                                start: {
                                    _bufferIndex: o ? l : i.start._bufferIndex + l,
                                    _index: i.start._index + o,
                                    line: i.end.line,
                                    column: i.end.column - s,
                                    offset: i.end.offset - s
                                },
                                end: {
                                    ...i.end
                                }
                            };
                            i.end = {
                                ...a.start
                            }, i.start.offset === i.end.offset ? Object.assign(i, a) : (e.splice(n, 0, ["enter", a, t], ["exit", a, t]), n += 2)
                        }
                        n++
                    } return e
            }
            let eo = {
                    name: "thematicBreak",
                    tokenize: function(e, t, n) {
                        let r, i = 0;
                        return function(a) {
                            var o;
                            return e.enter("thematicBreak"), r = o = a,
                                function a(o) {
                                    return o === r ? (e.enter("thematicBreakSequence"), function t(n) {
                                        return n === r ? (e.consume(n), i++, t) : (e.exit("thematicBreakSequence"), (0, K.On)(n) ? (0, X.N)(e, a, "whitespace")(n) : a(n))
                                    }(o)) : i >= 3 && (null === o || (0, K.HP)(o)) ? (e.exit("thematicBreak"), t(o)) : n(o)
                                }(o)
                        }
                    }
                },
                el = {
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return r.containerState._closeFlow = void 0, e.check($.B, function(n) {
                                return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, (0, X.N)(e, t, "listItemIndent", r.containerState.size + 1)(n)
                            }, function(n) {
                                return r.containerState.furtherBlankLines || !(0, K.On)(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eu, t, i)(n))
                            });

                            function i(i) {
                                return r.containerState._closeFlow = !0, r.interrupt = void 0, (0, X.N)(e, e.attempt(el, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit(this.containerState.type)
                    },
                    name: "list",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            a = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            o = 0;
                        return function(t) {
                            let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                            if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : (0, K.BM)(t)) {
                                if (r.containerState.type || (r.containerState.type = i, e.enter(i, {
                                        _container: !0
                                    })), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(eo, n, l)(t) : l(t);
                                if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                    function t(i) {
                                        return (0, K.BM)(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), l(i)) : n(i)
                                    }(t)
                            }
                            return n(t)
                        };

                        function l(t) {
                            return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check($.B, r.interrupt ? n : s, e.attempt(es, c, u))
                        }

                        function s(e) {
                            return r.containerState.initialBlankLine = !0, a++, c(e)
                        }

                        function u(t) {
                            return (0, K.On)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), c) : n(t)
                        }

                        function c(n) {
                            return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                        }
                    }
                },
                es = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, X.N)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return !(0, K.On)(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                        }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                    }
                },
                eu = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return (0, X.N)(e, function(e) {
                            let i = r.events[r.events.length - 1];
                            return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                        }, "listItemIndent", r.containerState.size + 1)
                    }
                },
                ec = {
                    continuation: {
                        tokenize: function(e, t, n) {
                            let r = this;
                            return function(t) {
                                return (0, K.On)(t) ? (0, X.N)(e, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : i(t)
                            };

                            function i(r) {
                                return e.attempt(ec, t, n)(r)
                            }
                        }
                    },
                    exit: function(e) {
                        e.exit("blockQuote")
                    },
                    name: "blockQuote",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            if (62 === t) {
                                let n = r.containerState;
                                return n.open || (e.enter("blockQuote", {
                                    _container: !0
                                }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                            }
                            return n(t)
                        };

                        function i(n) {
                            return (0, K.On)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                        }
                    }
                };

            function eh(e, t, n, r, i, a, o, l, s) {
                let u = s || 1 / 0,
                    c = 0;
                return function(t) {
                    return 60 === t ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), h) : null === t || 32 === t || 41 === t || (0, K.JQ)(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), f(t))
                };

                function h(n) {
                    return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
                        contentType: "string"
                    }), p(n))
                }

                function p(t) {
                    return 62 === t ? (e.exit("chunkString"), e.exit(l), h(t)) : null === t || 60 === t || (0, K.HP)(t) ? n(t) : (e.consume(t), 92 === t ? m : p)
                }

                function m(t) {
                    return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
                }

                function f(i) {
                    return !c && (null === i || 41 === i || (0, K.Ee)(i)) ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(r), t(i)) : c < u && 40 === i ? (e.consume(i), c++, f) : 41 === i ? (e.consume(i), c--, f) : null === i || 32 === i || 40 === i || (0, K.JQ)(i) ? n(i) : (e.consume(i), 92 === i ? d : f)
                }

                function d(t) {
                    return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t)
                }
            }

            function ep(e, t, n, r, i, a) {
                let o, l = this,
                    s = 0;
                return function(t) {
                    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u
                };

                function u(h) {
                    return s > 999 || null === h || 91 === h || 93 === h && !o || 94 === h && !s && "_hiddenFootnoteSupport" in l.parser.constructs ? n(h) : 93 === h ? (e.exit(a), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (0, K.HP)(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u) : (e.enter("chunkString", {
                        contentType: "string"
                    }), c(h))
                }

                function c(t) {
                    return null === t || 91 === t || 93 === t || (0, K.HP)(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), o || (o = !(0, K.On)(t)), 92 === t ? h : c)
                }

                function h(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t)
                }
            }

            function em(e, t, n, r, i, a) {
                let o;
                return function(t) {
                    return 34 === t || 39 === t || 40 === t ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, l) : n(t)
                };

                function l(n) {
                    return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), s(n))
                }

                function s(t) {
                    return t === o ? (e.exit(a), l(o)) : null === t ? n(t) : (0, K.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, X.N)(e, s, "linePrefix")) : (e.enter("chunkString", {
                        contentType: "string"
                    }), u(t))
                }

                function u(t) {
                    return t === o || null === t || (0, K.HP)(t) ? (e.exit("chunkString"), s(t)) : (e.consume(t), 92 === t ? c : u)
                }

                function c(t) {
                    return t === o || 92 === t ? (e.consume(t), u) : u(t)
                }
            }

            function ef(e, t) {
                let n;
                return function r(i) {
                    return (0, K.HP)(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : (0, K.On)(i) ? (0, X.N)(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
                }
            }
            var ed = n(15506);
            let eg = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return (0, K.Ee)(t) ? ef(e, r)(t) : n(t)
                        };

                        function r(t) {
                            return em(e, i, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
                        }

                        function i(t) {
                            return (0, K.On)(t) ? (0, X.N)(e, a, "whitespace")(t) : a(t)
                        }

                        function a(e) {
                            return null === e || (0, K.HP)(e) ? t(e) : n(e)
                        }
                    }
                },
                ey = {
                    name: "codeIndented",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("codeIndented"), (0, X.N)(e, i, "linePrefix", 5)(t)
                        };

                        function i(t) {
                            let i = r.events[r.events.length - 1];
                            return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                                return null === n ? a(n) : (0, K.HP)(n) ? e.attempt(ex, t, a)(n) : (e.enter("codeFlowValue"), function n(r) {
                                    return null === r || (0, K.HP)(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                                }(n))
                            }(t) : n(t)
                        }

                        function a(n) {
                            return e.exit("codeIndented"), t(n)
                        }
                    }
                },
                ex = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return i;

                        function i(t) {
                            return r.parser.lazy[r.now().line] ? n(t) : (0, K.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : (0, X.N)(e, a, "linePrefix", 5)(t)
                        }

                        function a(e) {
                            let a = r.events[r.events.length - 1];
                            return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : (0, K.HP)(e) ? i(e) : n(e)
                        }
                    }
                },
                eb = {
                    name: "setextUnderline",
                    resolveTo: function(e, t) {
                        let n, r, i, a = e.length;
                        for (; a--;)
                            if ("enter" === e[a][0]) {
                                if ("content" === e[a][1].type) {
                                    n = a;
                                    break
                                }
                                "paragraph" === e[a][1].type && (r = a)
                            } else "content" === e[a][1].type && e.splice(a, 1), i || "definition" !== e[a][1].type || (i = a);
                        let o = {
                            type: "setextHeading",
                            start: {
                                ...e[n][1].start
                            },
                            end: {
                                ...e[e.length - 1][1].end
                            }
                        };
                        return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", o, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = {
                            ...e[i][1].end
                        }) : e[n][1] = o, e.push(["exit", o, t]), e
                    },
                    tokenize: function(e, t, n) {
                        let r, i = this;
                        return function(t) {
                            var o;
                            let l, s = i.events.length;
                            for (; s--;)
                                if ("lineEnding" !== i.events[s][1].type && "linePrefix" !== i.events[s][1].type && "content" !== i.events[s][1].type) {
                                    l = "paragraph" === i.events[s][1].type;
                                    break
                                } return !i.parser.lazy[i.now().line] && (i.interrupt || l) ? (e.enter("setextHeadingLine"), r = t, o = t, e.enter("setextHeadingLineSequence"), function t(n) {
                                return n === r ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), (0, K.On)(n) ? (0, X.N)(e, a, "lineSuffix")(n) : a(n))
                            }(o)) : n(t)
                        };

                        function a(r) {
                            return null === r || (0, K.HP)(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                        }
                    }
                },
                ev = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
                ek = ["pre", "script", "style", "textarea"],
                ew = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        return function(r) {
                            return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt($.B, t, n)
                        }
                    }
                },
                ez = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return (0, K.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : n(t)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    }
                },
                eS = {
                    partial: !0,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    }
                },
                eA = {
                    concrete: !0,
                    name: "codeFenced",
                    tokenize: function(e, t, n) {
                        let r, i = this,
                            a = {
                                partial: !0,
                                tokenize: function(e, t, n) {
                                    let a = 0;
                                    return function(t) {
                                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), o
                                    };

                                    function o(t) {
                                        return e.enter("codeFencedFence"), (0, K.On)(t) ? (0, X.N)(e, s, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : s(t)
                                    }

                                    function s(t) {
                                        return t === r ? (e.enter("codeFencedFenceSequence"), function t(i) {
                                            return i === r ? (a++, e.consume(i), t) : a >= l ? (e.exit("codeFencedFenceSequence"), (0, K.On)(i) ? (0, X.N)(e, u, "whitespace")(i) : u(i)) : n(i)
                                        }(t)) : n(t)
                                    }

                                    function u(r) {
                                        return null === r || (0, K.HP)(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                    }
                                }
                            },
                            o = 0,
                            l = 0;
                        return function(t) {
                            var a;
                            let u;
                            return a = t, o = (u = i.events[i.events.length - 1]) && "linePrefix" === u[1].type ? u[2].sliceSerialize(u[1], !0).length : 0, r = a, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                                function t(i) {
                                    return i === r ? (l++, e.consume(i), t) : l < 3 ? n(i) : (e.exit("codeFencedFenceSequence"), (0, K.On)(i) ? (0, X.N)(e, s, "whitespace")(i) : s(i))
                                }(a)
                        };

                        function s(a) {
                            return null === a || (0, K.HP)(a) ? (e.exit("codeFencedFence"), i.interrupt ? t(a) : e.check(eS, c, f)(a)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, K.HP)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), s(i)) : (0, K.On)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, X.N)(e, u, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(a))
                        }

                        function u(t) {
                            return null === t || (0, K.HP)(t) ? s(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(i) {
                                return null === i || (0, K.HP)(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), s(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                            }(t))
                        }

                        function c(t) {
                            return e.attempt(a, f, h)(t)
                        }

                        function h(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p
                        }

                        function p(t) {
                            return o > 0 && (0, K.On)(t) ? (0, X.N)(e, m, "linePrefix", o + 1)(t) : m(t)
                        }

                        function m(t) {
                            return null === t || (0, K.HP)(t) ? e.check(eS, c, f)(t) : (e.enter("codeFlowValue"), function t(n) {
                                return null === n || (0, K.HP)(n) ? (e.exit("codeFlowValue"), m(n)) : (e.consume(n), t)
                            }(t))
                        }

                        function f(n) {
                            return e.exit("codeFenced"), t(n)
                        }
                    }
                },
                eT = document.createElement("i");

            function eM(e) {
                let t = "&" + e + ";";
                eT.innerHTML = t;
                let n = eT.textContent;
                return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
            }
            let eC = {
                    name: "characterReference",
                    tokenize: function(e, t, n) {
                        let r, i, a = this,
                            o = 0;
                        return function(t) {
                            return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), l
                        };

                        function l(t) {
                            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), r = 31, i = K.lV, u(t))
                        }

                        function s(t) {
                            return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = K.ok, u) : (e.enter("characterReferenceValue"), r = 7, i = K.BM, u(t))
                        }

                        function u(l) {
                            if (59 === l && o) {
                                let r = e.exit("characterReferenceValue");
                                return i !== K.lV || eM(a.sliceSerialize(r)) ? (e.enter("characterReferenceMarker"), e.consume(l), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(l)
                            }
                            return i(l) && o++ < r ? (e.consume(l), u) : n(l)
                        }
                    }
                },
                eE = {
                    name: "characterEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                        };

                        function r(r) {
                            return (0, K.ol)(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                        }
                    }
                },
                eR = {
                    name: "lineEnding",
                    tokenize: function(e, t) {
                        return function(n) {
                            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, X.N)(e, t, "linePrefix")
                        }
                    }
                };
            var eI = n(77276);
            let eB = {
                    name: "labelEnd",
                    resolveAll: function(e) {
                        let t = -1,
                            n = [];
                        for (; ++t < e.length;) {
                            let r = e[t][1];
                            if (n.push(e[t]), "labelImage" === r.type || "labelLink" === r.type || "labelEnd" === r.type) {
                                let e = "labelImage" === r.type ? 4 : 2;
                                r.type = "data", t += e
                            }
                        }
                        return e.length !== n.length && (0, F.m)(e, 0, e.length, n), e
                    },
                    resolveTo: function(e, t) {
                        let n, r, i, a, o = e.length,
                            l = 0;
                        for (; o--;)
                            if (n = e[o][1], r) {
                                if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                                "enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0)
                            } else if (i) {
                            if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
                                l = 2;
                                break
                            }
                        } else "labelEnd" === n.type && (i = o);
                        let s = {
                                type: "labelLink" === e[r][1].type ? "link" : "image",
                                start: {
                                    ...e[r][1].start
                                },
                                end: {
                                    ...e[e.length - 1][1].end
                                }
                            },
                            u = {
                                type: "label",
                                start: {
                                    ...e[r][1].start
                                },
                                end: {
                                    ...e[i][1].end
                                }
                            },
                            c = {
                                type: "labelText",
                                start: {
                                    ...e[r + l + 2][1].end
                                },
                                end: {
                                    ...e[i - 2][1].start
                                }
                            };
                        return a = [
                            ["enter", s, t],
                            ["enter", u, t]
                        ], a = (0, F.V)(a, e.slice(r + 1, r + l + 3)), a = (0, F.V)(a, [
                            ["enter", c, t]
                        ]), a = (0, F.V)(a, (0, eI.W)(t.parser.constructs.insideSpan.null, e.slice(r + l + 4, i - 3), t)), a = (0, F.V)(a, [
                            ["exit", c, t], e[i - 2], e[i - 1],
                            ["exit", u, t]
                        ]), a = (0, F.V)(a, e.slice(i + 1)), a = (0, F.V)(a, [
                            ["exit", s, t]
                        ]), (0, F.m)(e, r, e.length, a), e
                    },
                    tokenize: function(e, t, n) {
                        let r, i, a = this,
                            o = a.events.length;
                        for (; o--;)
                            if (("labelImage" === a.events[o][1].type || "labelLink" === a.events[o][1].type) && !a.events[o][1]._balanced) {
                                r = a.events[o][1];
                                break
                            } return function(t) {
                            return r ? r._inactive ? c(t) : (i = a.parser.defined.includes((0, ed.B)(a.sliceSerialize({
                                start: r.end,
                                end: a.now()
                            }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(t)
                        };

                        function l(t) {
                            return 40 === t ? e.attempt(eO, u, i ? u : c)(t) : 91 === t ? e.attempt(eP, u, i ? s : c)(t) : i ? u(t) : c(t)
                        }

                        function s(t) {
                            return e.attempt(eL, u, c)(t)
                        }

                        function u(e) {
                            return t(e)
                        }

                        function c(e) {
                            return r._balanced = !0, n(e)
                        }
                    }
                },
                eO = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), r
                        };

                        function r(t) {
                            return (0, K.Ee)(t) ? ef(e, i)(t) : i(t)
                        }

                        function i(t) {
                            return 41 === t ? u(t) : eh(e, a, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                        }

                        function a(t) {
                            return (0, K.Ee)(t) ? ef(e, l)(t) : u(t)
                        }

                        function o(e) {
                            return n(e)
                        }

                        function l(t) {
                            return 34 === t || 39 === t || 40 === t ? em(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t)
                        }

                        function s(t) {
                            return (0, K.Ee)(t) ? ef(e, u)(t) : u(t)
                        }

                        function u(r) {
                            return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                        }
                    }
                },
                eP = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return ep.call(r, e, i, a, "reference", "referenceMarker", "referenceString")(t)
                        };

                        function i(e) {
                            return r.parser.defined.includes((0, ed.B)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                        }

                        function a(e) {
                            return n(e)
                        }
                    }
                },
                eL = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                        };

                        function r(r) {
                            return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                        }
                    }
                },
                eD = {
                    name: "labelStartImage",
                    resolveAll: eB.resolveAll,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                        };

                        function i(t) {
                            return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), a) : n(t)
                        }

                        function a(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    }
                };
            var eN = n(39172);
            let eq = {
                name: "attention",
                resolveAll: function(e, t) {
                    let n, r, i, a, o, l, s, u, c = -1;
                    for (; ++c < e.length;)
                        if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type && e[c][1]._close) {
                            for (n = c; n--;)
                                if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[c][1]).charCodeAt(0)) {
                                    if ((e[n][1]._close || e[c][1]._open) && (e[c][1].end.offset - e[c][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[c][1].end.offset - e[c][1].start.offset) % 3)) continue;
                                    l = e[n][1].end.offset - e[n][1].start.offset > 1 && e[c][1].end.offset - e[c][1].start.offset > 1 ? 2 : 1;
                                    let h = {
                                            ...e[n][1].end
                                        },
                                        p = {
                                            ...e[c][1].start
                                        };
                                    eH(h, -l), eH(p, l), a = {
                                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                                        start: h,
                                        end: {
                                            ...e[n][1].end
                                        }
                                    }, o = {
                                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                                        start: {
                                            ...e[c][1].start
                                        },
                                        end: p
                                    }, i = {
                                        type: l > 1 ? "strongText" : "emphasisText",
                                        start: {
                                            ...e[n][1].end
                                        },
                                        end: {
                                            ...e[c][1].start
                                        }
                                    }, r = {
                                        type: l > 1 ? "strong" : "emphasis",
                                        start: {
                                            ...a.start
                                        },
                                        end: {
                                            ...o.end
                                        }
                                    }, e[n][1].end = {
                                        ...a.start
                                    }, e[c][1].start = {
                                        ...o.end
                                    }, s = [], e[n][1].end.offset - e[n][1].start.offset && (s = (0, F.V)(s, [
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t]
                                    ])), s = (0, F.V)(s, [
                                        ["enter", r, t],
                                        ["enter", a, t],
                                        ["exit", a, t],
                                        ["enter", i, t]
                                    ]), s = (0, F.V)(s, (0, eI.W)(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)), s = (0, F.V)(s, [
                                        ["exit", i, t],
                                        ["enter", o, t],
                                        ["exit", o, t],
                                        ["exit", r, t]
                                    ]), e[c][1].end.offset - e[c][1].start.offset ? (u = 2, s = (0, F.V)(s, [
                                        ["enter", e[c][1], t],
                                        ["exit", e[c][1], t]
                                    ])) : u = 0, (0, F.m)(e, n - 1, c - n + 3, s), c = n + s.length - u - 2;
                                    break
                                }
                        } for (c = -1; ++c < e.length;) "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
                    return e
                },
                tokenize: function(e, t) {
                    let n, r = this.parser.constructs.attentionMarkers.null,
                        i = this.previous,
                        a = (0, eN.S)(i);
                    return function(o) {
                        return n = o, e.enter("attentionSequence"),
                            function o(l) {
                                if (l === n) return e.consume(l), o;
                                let s = e.exit("attentionSequence"),
                                    u = (0, eN.S)(l),
                                    c = !u || 2 === u && a || r.includes(l),
                                    h = !a || 2 === a && u || r.includes(i);
                                return s._open = !!(42 === n ? c : c && (a || !h)), s._close = !!(42 === n ? h : h && (u || !c)), t(l)
                            }(o)
                    }
                }
            };

            function eH(e, t) {
                e.column += t, e.offset += t, e._bufferIndex += t
            }
            let eF = {
                    name: "labelStartLink",
                    resolveAll: eB.resolveAll,
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                        };

                        function i(e) {
                            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                        }
                    }
                },
                eU = {
                    42: el,
                    43: el,
                    45: el,
                    48: el,
                    49: el,
                    50: el,
                    51: el,
                    52: el,
                    53: el,
                    54: el,
                    55: el,
                    56: el,
                    57: el,
                    62: ec
                },
                eV = {
                    91: {
                        name: "definition",
                        tokenize: function(e, t, n) {
                            let r, i = this;
                            return function(t) {
                                var r;
                                return e.enter("definition"), r = t, ep.call(i, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(r)
                            };

                            function a(t) {
                                return (r = (0, ed.B)(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), o) : n(t)
                            }

                            function o(t) {
                                return (0, K.Ee)(t) ? ef(e, l)(t) : l(t)
                            }

                            function l(t) {
                                return eh(e, s, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                            }

                            function s(t) {
                                return e.attempt(eg, u, u)(t)
                            }

                            function u(t) {
                                return (0, K.On)(t) ? (0, X.N)(e, c, "whitespace")(t) : c(t)
                            }

                            function c(a) {
                                return null === a || (0, K.HP)(a) ? (e.exit("definition"), i.parser.defined.push(r), t(a)) : n(a)
                            }
                        }
                    }
                },
                e_ = {
                    [-2]: ey,
                    [-1]: ey,
                    32: ey
                },
                ej = {
                    35: {
                        name: "headingAtx",
                        resolve: function(e, t) {
                            let n, r, i = e.length - 2,
                                a = 3;
                            return "whitespace" === e[3][1].type && (a += 2), i - 2 > a && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (a === i - 1 || i - 4 > a && "whitespace" === e[i - 2][1].type) && (i -= a + 1 === i ? 2 : 4), i > a && (n = {
                                type: "atxHeadingText",
                                start: e[a][1].start,
                                end: e[i][1].end
                            }, r = {
                                type: "chunkText",
                                start: e[a][1].start,
                                end: e[i][1].end,
                                contentType: "text"
                            }, (0, F.m)(e, a, i - a + 1, [
                                ["enter", n, t],
                                ["enter", r, t],
                                ["exit", r, t],
                                ["exit", n, t]
                            ])), e
                        },
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(i) {
                                var a;
                                return e.enter("atxHeading"), a = i, e.enter("atxHeadingSequence"),
                                    function i(a) {
                                        return 35 === a && r++ < 6 ? (e.consume(a), i) : null === a || (0, K.Ee)(a) ? (e.exit("atxHeadingSequence"), function n(r) {
                                            return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                                return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                            }(r)) : null === r || (0, K.HP)(r) ? (e.exit("atxHeading"), t(r)) : (0, K.On)(r) ? (0, X.N)(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                                return null === r || 35 === r || (0, K.Ee)(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                            }(r))
                                        }(a)) : n(a)
                                    }(a)
                            }
                        }
                    },
                    42: eo,
                    45: [eb, eo],
                    60: {
                        concrete: !0,
                        name: "htmlFlow",
                        resolveTo: function(e) {
                            let t = e.length;
                            for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                            return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                        },
                        tokenize: function(e, t, n) {
                            let r, i, a, o, l, s = this;
                            return function(t) {
                                var n;
                                return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), u
                            };

                            function u(o) {
                                return 33 === o ? (e.consume(o), c) : 47 === o ? (e.consume(o), i = !0, m) : 63 === o ? (e.consume(o), r = 3, s.interrupt ? t : B) : (0, K.CW)(o) ? (e.consume(o), a = String.fromCharCode(o), f) : n(o)
                            }

                            function c(i) {
                                return 45 === i ? (e.consume(i), r = 2, h) : 91 === i ? (e.consume(i), r = 5, o = 0, p) : (0, K.CW)(i) ? (e.consume(i), r = 4, s.interrupt ? t : B) : n(i)
                            }

                            function h(r) {
                                return 45 === r ? (e.consume(r), s.interrupt ? t : B) : n(r)
                            }

                            function p(r) {
                                let i = "CDATA[";
                                return r === i.charCodeAt(o++) ? (e.consume(r), o === i.length) ? s.interrupt ? t : S : p : n(r)
                            }

                            function m(t) {
                                return (0, K.CW)(t) ? (e.consume(t), a = String.fromCharCode(t), f) : n(t)
                            }

                            function f(o) {
                                if (null === o || 47 === o || 62 === o || (0, K.Ee)(o)) {
                                    let l = 47 === o,
                                        u = a.toLowerCase();
                                    return !l && !i && ek.includes(u) ? (r = 1, s.interrupt ? t(o) : S(o)) : ev.includes(a.toLowerCase()) ? (r = 6, l) ? (e.consume(o), d) : s.interrupt ? t(o) : S(o) : (r = 7, s.interrupt && !s.parser.lazy[s.now().line] ? n(o) : i ? function t(n) {
                                        return (0, K.On)(n) ? (e.consume(n), t) : w(n)
                                    }(o) : g(o))
                                }
                                return 45 === o || (0, K.lV)(o) ? (e.consume(o), a += String.fromCharCode(o), f) : n(o)
                            }

                            function d(r) {
                                return 62 === r ? (e.consume(r), s.interrupt ? t : S) : n(r)
                            }

                            function g(t) {
                                return 47 === t ? (e.consume(t), w) : 58 === t || 95 === t || (0, K.CW)(t) ? (e.consume(t), y) : (0, K.On)(t) ? (e.consume(t), g) : w(t)
                            }

                            function y(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, K.lV)(t) ? (e.consume(t), y) : x(t)
                            }

                            function x(t) {
                                return 61 === t ? (e.consume(t), b) : (0, K.On)(t) ? (e.consume(t), x) : g(t)
                            }

                            function b(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), l = t, v) : (0, K.On)(t) ? (e.consume(t), b) : function t(n) {
                                    return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, K.Ee)(n) ? x(n) : (e.consume(n), t)
                                }(t)
                            }

                            function v(t) {
                                return t === l ? (e.consume(t), l = null, k) : null === t || (0, K.HP)(t) ? n(t) : (e.consume(t), v)
                            }

                            function k(e) {
                                return 47 === e || 62 === e || (0, K.On)(e) ? g(e) : n(e)
                            }

                            function w(t) {
                                return 62 === t ? (e.consume(t), z) : n(t)
                            }

                            function z(t) {
                                return null === t || (0, K.HP)(t) ? S(t) : (0, K.On)(t) ? (e.consume(t), z) : n(t)
                            }

                            function S(t) {
                                return 45 === t && 2 === r ? (e.consume(t), C) : 60 === t && 1 === r ? (e.consume(t), E) : 62 === t && 4 === r ? (e.consume(t), O) : 63 === t && 3 === r ? (e.consume(t), B) : 93 === t && 5 === r ? (e.consume(t), I) : (0, K.HP)(t) && (6 === r || 7 === r) ? (e.exit("htmlFlowData"), e.check(ew, P, A)(t)) : null === t || (0, K.HP)(t) ? (e.exit("htmlFlowData"), A(t)) : (e.consume(t), S)
                            }

                            function A(t) {
                                return e.check(ez, T, P)(t)
                            }

                            function T(t) {
                                return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), M
                            }

                            function M(t) {
                                return null === t || (0, K.HP)(t) ? A(t) : (e.enter("htmlFlowData"), S(t))
                            }

                            function C(t) {
                                return 45 === t ? (e.consume(t), B) : S(t)
                            }

                            function E(t) {
                                return 47 === t ? (e.consume(t), a = "", R) : S(t)
                            }

                            function R(t) {
                                if (62 === t) {
                                    let n = a.toLowerCase();
                                    return ek.includes(n) ? (e.consume(t), O) : S(t)
                                }
                                return (0, K.CW)(t) && a.length < 8 ? (e.consume(t), a += String.fromCharCode(t), R) : S(t)
                            }

                            function I(t) {
                                return 93 === t ? (e.consume(t), B) : S(t)
                            }

                            function B(t) {
                                return 62 === t ? (e.consume(t), O) : 45 === t && 2 === r ? (e.consume(t), B) : S(t)
                            }

                            function O(t) {
                                return null === t || (0, K.HP)(t) ? (e.exit("htmlFlowData"), P(t)) : (e.consume(t), O)
                            }

                            function P(n) {
                                return e.exit("htmlFlow"), t(n)
                            }
                        }
                    },
                    61: eb,
                    95: eo,
                    96: eA,
                    126: eA
                },
                eX = {
                    38: eC,
                    92: eE
                },
                eK = {
                    [-5]: eR,
                    [-4]: eR,
                    [-3]: eR,
                    33: eD,
                    38: eC,
                    42: eq,
                    60: [{
                        name: "autolink",
                        tokenize: function(e, t, n) {
                            let r = 0;
                            return function(t) {
                                return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                            };

                            function i(t) {
                                return (0, K.CW)(t) ? (e.consume(t), a) : 64 === t ? n(t) : l(t)
                            }

                            function a(t) {
                                return 43 === t || 45 === t || 46 === t || (0, K.lV)(t) ? (r = 1, function t(n) {
                                    return 58 === n ? (e.consume(n), r = 0, o) : (43 === n || 45 === n || 46 === n || (0, K.lV)(n)) && r++ < 32 ? (e.consume(n), t) : (r = 0, l(n))
                                }(t)) : l(t)
                            }

                            function o(r) {
                                return 62 === r ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === r || 32 === r || 60 === r || (0, K.JQ)(r) ? n(r) : (e.consume(r), o)
                            }

                            function l(t) {
                                return 64 === t ? (e.consume(t), s) : (0, K.cx)(t) ? (e.consume(t), l) : n(t)
                            }

                            function s(i) {
                                return (0, K.lV)(i) ? function i(a) {
                                    return 46 === a ? (e.consume(a), r = 0, s) : 62 === a ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(a), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(a) {
                                        if ((45 === a || (0, K.lV)(a)) && r++ < 63) {
                                            let n = 45 === a ? t : i;
                                            return e.consume(a), n
                                        }
                                        return n(a)
                                    }(a)
                                }(i) : n(i)
                            }
                        }
                    }, {
                        name: "htmlText",
                        tokenize: function(e, t, n) {
                            let r, i, a, o = this;
                            return function(t) {
                                return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), l
                            };

                            function l(t) {
                                return 33 === t ? (e.consume(t), s) : 47 === t ? (e.consume(t), v) : 63 === t ? (e.consume(t), x) : (0, K.CW)(t) ? (e.consume(t), w) : n(t)
                            }

                            function s(t) {
                                return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), i = 0, m) : (0, K.CW)(t) ? (e.consume(t), y) : n(t)
                            }

                            function u(t) {
                                return 45 === t ? (e.consume(t), p) : n(t)
                            }

                            function c(t) {
                                return null === t ? n(t) : 45 === t ? (e.consume(t), h) : (0, K.HP)(t) ? (a = c, R(t)) : (e.consume(t), c)
                            }

                            function h(t) {
                                return 45 === t ? (e.consume(t), p) : c(t)
                            }

                            function p(e) {
                                return 62 === e ? E(e) : 45 === e ? h(e) : c(e)
                            }

                            function m(t) {
                                let r = "CDATA[";
                                return t === r.charCodeAt(i++) ? (e.consume(t), i === r.length ? f : m) : n(t)
                            }

                            function f(t) {
                                return null === t ? n(t) : 93 === t ? (e.consume(t), d) : (0, K.HP)(t) ? (a = f, R(t)) : (e.consume(t), f)
                            }

                            function d(t) {
                                return 93 === t ? (e.consume(t), g) : f(t)
                            }

                            function g(t) {
                                return 62 === t ? E(t) : 93 === t ? (e.consume(t), g) : f(t)
                            }

                            function y(t) {
                                return null === t || 62 === t ? E(t) : (0, K.HP)(t) ? (a = y, R(t)) : (e.consume(t), y)
                            }

                            function x(t) {
                                return null === t ? n(t) : 63 === t ? (e.consume(t), b) : (0, K.HP)(t) ? (a = x, R(t)) : (e.consume(t), x)
                            }

                            function b(e) {
                                return 62 === e ? E(e) : x(e)
                            }

                            function v(t) {
                                return (0, K.CW)(t) ? (e.consume(t), k) : n(t)
                            }

                            function k(t) {
                                return 45 === t || (0, K.lV)(t) ? (e.consume(t), k) : function t(n) {
                                    return (0, K.HP)(n) ? (a = t, R(n)) : (0, K.On)(n) ? (e.consume(n), t) : E(n)
                                }(t)
                            }

                            function w(t) {
                                return 45 === t || (0, K.lV)(t) ? (e.consume(t), w) : 47 === t || 62 === t || (0, K.Ee)(t) ? z(t) : n(t)
                            }

                            function z(t) {
                                return 47 === t ? (e.consume(t), E) : 58 === t || 95 === t || (0, K.CW)(t) ? (e.consume(t), S) : (0, K.HP)(t) ? (a = z, R(t)) : (0, K.On)(t) ? (e.consume(t), z) : E(t)
                            }

                            function S(t) {
                                return 45 === t || 46 === t || 58 === t || 95 === t || (0, K.lV)(t) ? (e.consume(t), S) : function t(n) {
                                    return 61 === n ? (e.consume(n), A) : (0, K.HP)(n) ? (a = t, R(n)) : (0, K.On)(n) ? (e.consume(n), t) : z(n)
                                }(t)
                            }

                            function A(t) {
                                return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, T) : (0, K.HP)(t) ? (a = A, R(t)) : (0, K.On)(t) ? (e.consume(t), A) : (e.consume(t), M)
                            }

                            function T(t) {
                                return t === r ? (e.consume(t), r = void 0, C) : null === t ? n(t) : (0, K.HP)(t) ? (a = T, R(t)) : (e.consume(t), T)
                            }

                            function M(t) {
                                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || (0, K.Ee)(t) ? z(t) : (e.consume(t), M)
                            }

                            function C(e) {
                                return 47 === e || 62 === e || (0, K.Ee)(e) ? z(e) : n(e)
                            }

                            function E(r) {
                                return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                            }

                            function R(t) {
                                return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), I
                            }

                            function I(t) {
                                return (0, K.On)(t) ? (0, X.N)(e, B, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : B(t)
                            }

                            function B(t) {
                                return e.enter("htmlTextData"), a(t)
                            }
                        }
                    }],
                    91: eF,
                    92: [{
                        name: "hardBreakEscape",
                        tokenize: function(e, t, n) {
                            return function(t) {
                                return e.enter("hardBreakEscape"), e.consume(t), r
                            };

                            function r(r) {
                                return (0, K.HP)(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r)
                            }
                        }
                    }, eE],
                    93: eB,
                    95: eq,
                    96: {
                        name: "codeText",
                        previous: function(e) {
                            return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                        },
                        resolve: function(e) {
                            let t, n, r = e.length - 4,
                                i = 3;
                            if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                                for (t = i; ++t < r;)
                                    if ("codeTextData" === e[t][1].type) {
                                        e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                                        break
                                    }
                            }
                            for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                            return e
                        },
                        tokenize: function(e, t, n) {
                            let r, i, a = 0;
                            return function(t) {
                                return e.enter("codeText"), e.enter("codeTextSequence"),
                                    function t(n) {
                                        return 96 === n ? (e.consume(n), a++, t) : (e.exit("codeTextSequence"), o(n))
                                    }(t)
                            };

                            function o(s) {
                                return null === s ? n(s) : 32 === s ? (e.enter("space"), e.consume(s), e.exit("space"), o) : 96 === s ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
                                    return 96 === o ? (e.consume(o), r++, n) : r === a ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", l(o))
                                }(s)) : (0, K.HP)(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : (e.enter("codeTextData"), l(s))
                            }

                            function l(t) {
                                return null === t || 32 === t || 96 === t || (0, K.HP)(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), l)
                            }
                        }
                    }
                },
                eW = {
                    null: [eq, ee]
                },
                eG = {
                    null: [42, 95]
                },
                eY = {
                    null: []
                },
                e$ = /[\0\t\n\r]/g;

            function eZ(e, t) {
                let n = Number.parseInt(e, t);
                return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
            }
            let eQ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

            function eJ(e, t, n) {
                if (t) return t;
                if (35 === n.charCodeAt(0)) {
                    let e = n.charCodeAt(1),
                        t = 120 === e || 88 === e;
                    return eZ(n.slice(t ? 2 : 1), t ? 16 : 10)
                }
                return eM(n) || e
            }
            let e0 = {}.hasOwnProperty;

            function e1(e) {
                return {
                    line: e.line,
                    column: e.column,
                    offset: e.offset
                }
            }

            function e4(e, t) {
                if (e) throw Error("Cannot close `" + e.type + "` (" + b({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + b({
                    start: t.start,
                    end: t.end
                }) + ") is open");
                throw Error("Cannot close document, a token (`" + t.type + "`, " + b({
                    start: t.start,
                    end: t.end
                }) + ") is still open")
            }

            function e5(e) {
                let t = this;
                t.parser = function(n) {
                    var i, a;
                    let o, l, s, u;
                    return "string" != typeof(i = {
                        ...t.data("settings"),
                        ...e,
                        extensions: t.data("micromarkExtensions") || [],
                        mdastExtensions: t.data("fromMarkdownExtensions") || []
                    }) && (a = i, i = void 0), (function(e) {
                        let t = {
                            transforms: [],
                            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                            enter: {
                                autolink: r(y),
                                autolinkProtocol: u,
                                autolinkEmail: u,
                                atxHeading: r(f),
                                blockQuote: r(function() {
                                    return {
                                        type: "blockquote",
                                        children: []
                                    }
                                }),
                                characterEscape: u,
                                characterReference: u,
                                codeFenced: r(m),
                                codeFencedFenceInfo: i,
                                codeFencedFenceMeta: i,
                                codeIndented: r(m, i),
                                codeText: r(function() {
                                    return {
                                        type: "inlineCode",
                                        value: ""
                                    }
                                }, i),
                                codeTextData: u,
                                data: u,
                                codeFlowValue: u,
                                definition: r(function() {
                                    return {
                                        type: "definition",
                                        identifier: "",
                                        label: null,
                                        title: null,
                                        url: ""
                                    }
                                }),
                                definitionDestinationString: i,
                                definitionLabelString: i,
                                definitionTitleString: i,
                                emphasis: r(function() {
                                    return {
                                        type: "emphasis",
                                        children: []
                                    }
                                }),
                                hardBreakEscape: r(d),
                                hardBreakTrailing: r(d),
                                htmlFlow: r(g, i),
                                htmlFlowData: u,
                                htmlText: r(g, i),
                                htmlTextData: u,
                                image: r(function() {
                                    return {
                                        type: "image",
                                        title: null,
                                        url: "",
                                        alt: null
                                    }
                                }),
                                label: i,
                                link: r(y),
                                listItem: r(function(e) {
                                    return {
                                        type: "listItem",
                                        spread: e._spread,
                                        checked: null,
                                        children: []
                                    }
                                }),
                                listItemValue: function(e) {
                                    this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0)
                                },
                                listOrdered: r(x, function() {
                                    this.data.expectingFirstListItemValue = !0
                                }),
                                listUnordered: r(x),
                                paragraph: r(function() {
                                    return {
                                        type: "paragraph",
                                        children: []
                                    }
                                }),
                                reference: function() {
                                    this.data.referenceType = "collapsed"
                                },
                                referenceString: i,
                                resourceDestinationString: i,
                                resourceTitleString: i,
                                setextHeading: r(f),
                                strong: r(function() {
                                    return {
                                        type: "strong",
                                        children: []
                                    }
                                }),
                                thematicBreak: r(function() {
                                    return {
                                        type: "thematicBreak"
                                    }
                                })
                            },
                            exit: {
                                atxHeading: o(),
                                atxHeadingSequence: function(e) {
                                    let t = this.stack[this.stack.length - 1];
                                    t.depth || (t.depth = this.sliceSerialize(e).length)
                                },
                                autolink: o(),
                                autolinkEmail: function(e) {
                                    c.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                                },
                                autolinkProtocol: function(e) {
                                    c.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                                },
                                blockQuote: o(),
                                characterEscapeValue: c,
                                characterReferenceMarkerHexadecimal: p,
                                characterReferenceMarkerNumeric: p,
                                characterReferenceValue: function(e) {
                                    let t, n = this.sliceSerialize(e),
                                        r = this.data.characterReferenceType;
                                    r ? (t = eZ(n, "characterReferenceMarkerNumeric" === r ? 10 : 16), this.data.characterReferenceType = void 0) : t = eM(n);
                                    let i = this.stack[this.stack.length - 1];
                                    i.value += t
                                },
                                characterReference: function(e) {
                                    this.stack.pop().position.end = e1(e.end)
                                },
                                codeFenced: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
                                }),
                                codeFencedFence: function() {
                                    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
                                },
                                codeFencedFenceInfo: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].lang = e
                                },
                                codeFencedFenceMeta: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].meta = e
                                },
                                codeFlowValue: c,
                                codeIndented: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                                }),
                                codeText: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                codeTextData: c,
                                data: c,
                                definition: o(),
                                definitionDestinationString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].url = e
                                },
                                definitionLabelString: function(e) {
                                    let t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.label = t, n.identifier = (0, ed.B)(this.sliceSerialize(e)).toLowerCase()
                                },
                                definitionTitleString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].title = e
                                },
                                emphasis: o(),
                                hardBreakEscape: o(h),
                                hardBreakTrailing: o(h),
                                htmlFlow: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                htmlFlowData: c,
                                htmlText: o(function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].value = e
                                }),
                                htmlTextData: c,
                                image: o(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (this.data.inReference) {
                                        let t = this.data.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    this.data.referenceType = void 0
                                }),
                                label: function() {
                                    let e = this.stack[this.stack.length - 1],
                                        t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t
                                },
                                labelText: function(e) {
                                    let t = this.sliceSerialize(e),
                                        n = this.stack[this.stack.length - 2];
                                    n.label = t.replace(eQ, eJ), n.identifier = (0, ed.B)(t).toLowerCase()
                                },
                                lineEnding: function(e) {
                                    let n = this.stack[this.stack.length - 1];
                                    if (this.data.atHardBreak) {
                                        n.children[n.children.length - 1].position.end = e1(e.end), this.data.atHardBreak = void 0;
                                        return
                                    }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (u.call(this, e), c.call(this, e))
                                },
                                link: o(function() {
                                    let e = this.stack[this.stack.length - 1];
                                    if (this.data.inReference) {
                                        let t = this.data.referenceType || "shortcut";
                                        e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                                    } else delete e.identifier, delete e.label;
                                    this.data.referenceType = void 0
                                }),
                                listItem: o(),
                                listOrdered: o(),
                                listUnordered: o(),
                                paragraph: o(),
                                referenceString: function(e) {
                                    let t = this.resume(),
                                        n = this.stack[this.stack.length - 1];
                                    n.label = t, n.identifier = (0, ed.B)(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full"
                                },
                                resourceDestinationString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].url = e
                                },
                                resourceTitleString: function() {
                                    let e = this.resume();
                                    this.stack[this.stack.length - 1].title = e
                                },
                                resource: function() {
                                    this.data.inReference = void 0
                                },
                                setextHeading: o(function() {
                                    this.data.setextHeadingSlurpLineEnding = void 0
                                }),
                                setextHeadingLineSequence: function(e) {
                                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2
                                },
                                setextHeadingText: function() {
                                    this.data.setextHeadingSlurpLineEnding = !0
                                },
                                strong: o(),
                                thematicBreak: o()
                            }
                        };
                        ! function e(t, n) {
                            let r = -1;
                            for (; ++r < n.length;) {
                                let i = n[r];
                                Array.isArray(i) ? e(t, i) : function(e, t) {
                                    let n;
                                    for (n in t)
                                        if (e0.call(t, n)) switch (n) {
                                            case "canContainEols": {
                                                let r = t[n];
                                                r && e[n].push(...r);
                                                break
                                            }
                                            case "transforms": {
                                                let r = t[n];
                                                r && e[n].push(...r);
                                                break
                                            }
                                            case "enter":
                                            case "exit": {
                                                let r = t[n];
                                                r && Object.assign(e[n], r)
                                            }
                                        }
                                }(t, i)
                            }
                        }(t, (e || {}).mdastExtensions || []);
                        let n = {};
                        return function(e) {
                            let r = {
                                    type: "root",
                                    children: []
                                },
                                o = {
                                    stack: [r],
                                    tokenStack: [],
                                    config: t,
                                    enter: a,
                                    exit: l,
                                    buffer: i,
                                    resume: s,
                                    data: n
                                },
                                u = [],
                                c = -1;
                            for (; ++c < e.length;)("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) && ("enter" === e[c][0] ? u.push(c) : c = function(e, t, n) {
                                let r, i, a, o, l = t - 1,
                                    s = -1,
                                    u = !1;
                                for (; ++l <= n;) {
                                    let t = e[l];
                                    switch (t[1].type) {
                                        case "listUnordered":
                                        case "listOrdered":
                                        case "blockQuote":
                                            "enter" === t[0] ? s++ : s--, o = void 0;
                                            break;
                                        case "lineEndingBlank":
                                            "enter" === t[0] && (!r || o || s || a || (a = l), o = void 0);
                                            break;
                                        case "linePrefix":
                                        case "listItemValue":
                                        case "listItemMarker":
                                        case "listItemPrefix":
                                        case "listItemPrefixWhitespace":
                                            break;
                                        default:
                                            o = void 0
                                    }
                                    if (!s && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === s && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                        if (r) {
                                            let o = l;
                                            for (i = void 0; o--;) {
                                                let t = e[o];
                                                if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                    if ("exit" === t[0]) continue;
                                                    i && (e[i][1].type = "lineEndingBlank", u = !0), t[1].type = "lineEnding", i = o
                                                } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
                                                else break
                                            }
                                            a && (!i || a < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || l, 0, ["exit", r, t[2]]), l++, n++
                                        }
                                        if ("listItemPrefix" === t[1].type) {
                                            let i = {
                                                type: "listItem",
                                                _spread: !1,
                                                start: Object.assign({}, t[1].start),
                                                end: void 0
                                            };
                                            r = i, e.splice(l, 0, ["enter", i, t[2]]), l++, n++, a = void 0, o = !0
                                        }
                                    }
                                }
                                return e[t][1]._spread = u, n
                            }(e, u.pop(), c));
                            for (c = -1; ++c < e.length;) {
                                let n = t[e[c][0]];
                                e0.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({
                                    sliceSerialize: e[c][2].sliceSerialize
                                }, o), e[c][1])
                            }
                            if (o.tokenStack.length > 0) {
                                let e = o.tokenStack[o.tokenStack.length - 1];
                                (e[1] || e4).call(o, void 0, e[0])
                            }
                            for (r.position = {
                                    start: e1(e.length > 0 ? e[0][1].start : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    }),
                                    end: e1(e.length > 0 ? e[e.length - 2][1].end : {
                                        line: 1,
                                        column: 1,
                                        offset: 0
                                    })
                                }, c = -1; ++c < t.transforms.length;) r = t.transforms[c](r) || r;
                            return r
                        };

                        function r(e, t) {
                            return function(n) {
                                a.call(this, e(n), n), t && t.call(this, n)
                            }
                        }

                        function i() {
                            this.stack.push({
                                type: "fragment",
                                children: []
                            })
                        }

                        function a(e, t, n) {
                            this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
                                start: e1(t.start),
                                end: void 0
                            }
                        }

                        function o(e) {
                            return function(t) {
                                e && e.call(this, t), l.call(this, t)
                            }
                        }

                        function l(e, t) {
                            let n = this.stack.pop(),
                                r = this.tokenStack.pop();
                            if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || e4).call(this, e, r[0]));
                            else throw Error("Cannot close `" + e.type + "` (" + b({
                                start: e.start,
                                end: e.end
                            }) + "): it’s not open");
                            n.position.end = e1(e.end)
                        }

                        function s() {
                            return (0, H.d)(this.stack.pop())
                        }

                        function u(e) {
                            let t = this.stack[this.stack.length - 1].children,
                                n = t[t.length - 1];
                            n && "text" === n.type || ((n = {
                                type: "text",
                                value: ""
                            }).position = {
                                start: e1(e.start),
                                end: void 0
                            }, t.push(n)), this.stack.push(n)
                        }

                        function c(e) {
                            let t = this.stack.pop();
                            t.value += this.sliceSerialize(e), t.position.end = e1(e.end)
                        }

                        function h() {
                            this.data.atHardBreak = !0
                        }

                        function p(e) {
                            this.data.characterReferenceType = e.type
                        }

                        function m() {
                            return {
                                type: "code",
                                lang: null,
                                meta: null,
                                value: ""
                            }
                        }

                        function f() {
                            return {
                                type: "heading",
                                depth: 0,
                                children: []
                            }
                        }

                        function d() {
                            return {
                                type: "break"
                            }
                        }

                        function g() {
                            return {
                                type: "html",
                                value: ""
                            }
                        }

                        function y() {
                            return {
                                type: "link",
                                title: null,
                                url: "",
                                children: []
                            }
                        }

                        function x(e) {
                            return {
                                type: "list",
                                ordered: "listOrdered" === e.type,
                                start: null,
                                spread: e._spread,
                                children: []
                            }
                        }
                    })(a)(function(e) {
                        for (; !_(e););
                        return e
                    }((function(e) {
                        let t = {
                            constructs: (0, j.y)([r, ...(e || {}).extensions || []]),
                            content: n(W),
                            defined: [],
                            document: n(G),
                            flow: n(J),
                            lazy: {},
                            string: n(et),
                            text: n(en)
                        };
                        return t;

                        function n(e) {
                            return function(n) {
                                return function(e, t, n) {
                                    let r = {
                                            _bufferIndex: -1,
                                            _index: 0,
                                            line: n && n.line || 1,
                                            column: n && n.column || 1,
                                            offset: n && n.offset || 0
                                        },
                                        i = {},
                                        a = [],
                                        o = [],
                                        l = [],
                                        s = {
                                            attempt: f(function(e, t) {
                                                d(e, t.from)
                                            }),
                                            check: f(m),
                                            consume: function(e) {
                                                (0, K.HP)(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = e
                                            },
                                            enter: function(e, t) {
                                                let n = t || {};
                                                return n.type = e, n.start = p(), u.events.push(["enter", n, u]), l.push(n), n
                                            },
                                            exit: function(e) {
                                                let t = l.pop();
                                                return t.end = p(), u.events.push(["exit", t, u]), t
                                            },
                                            interrupt: f(m, {
                                                interrupt: !0
                                            })
                                        },
                                        u = {
                                            code: null,
                                            containerState: {},
                                            defineSkip: function(e) {
                                                i[e.line] = e.column, g()
                                            },
                                            events: [],
                                            now: p,
                                            parser: e,
                                            previous: null,
                                            sliceSerialize: function(e, t) {
                                                return function(e, t) {
                                                    let n, r = -1,
                                                        i = [];
                                                    for (; ++r < e.length;) {
                                                        let a, o = e[r];
                                                        if ("string" == typeof o) a = o;
                                                        else switch (o) {
                                                            case -5:
                                                                a = "\r";
                                                                break;
                                                            case -4:
                                                                a = "\n";
                                                                break;
                                                            case -3:
                                                                a = "\r\n";
                                                                break;
                                                            case -2:
                                                                a = t ? " " : "	";
                                                                break;
                                                            case -1:
                                                                if (!t && n) continue;
                                                                a = " ";
                                                                break;
                                                            default:
                                                                a = String.fromCharCode(o)
                                                        }
                                                        n = -2 === o, i.push(a)
                                                    }
                                                    return i.join("")
                                                }(h(e), t)
                                            },
                                            sliceStream: h,
                                            write: function(e) {
                                                return (o = (0, F.V)(o, e), function() {
                                                    let e;
                                                    for (; r._index < o.length;) {
                                                        let n = o[r._index];
                                                        if ("string" == typeof n)
                                                            for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) {
                                                                var t;
                                                                t = n.charCodeAt(r._bufferIndex), c = c(t)
                                                            } else c = c(n)
                                                    }
                                                }(), null !== o[o.length - 1]) ? [] : (d(t, 0), u.events = (0, eI.W)(a, u.events, u), u.events)
                                            }
                                        },
                                        c = t.tokenize.call(u, s);
                                    return t.resolveAll && a.push(t), u;

                                    function h(e) {
                                        return function(e, t) {
                                            let n, r = t.start._index,
                                                i = t.start._bufferIndex,
                                                a = t.end._index,
                                                o = t.end._bufferIndex;
                                            if (r === a) n = [e[r].slice(i, o)];
                                            else {
                                                if (n = e.slice(r, a), i > -1) {
                                                    let e = n[0];
                                                    "string" == typeof e ? n[0] = e.slice(i) : n.shift()
                                                }
                                                o > 0 && n.push(e[a].slice(0, o))
                                            }
                                            return n
                                        }(o, e)
                                    }

                                    function p() {
                                        let {
                                            _bufferIndex: e,
                                            _index: t,
                                            line: n,
                                            column: i,
                                            offset: a
                                        } = r;
                                        return {
                                            _bufferIndex: e,
                                            _index: t,
                                            line: n,
                                            column: i,
                                            offset: a
                                        }
                                    }

                                    function m(e, t) {
                                        t.restore()
                                    }

                                    function f(e, t) {
                                        return function(n, i, a) {
                                            var o;
                                            let c, h, m, f;
                                            return Array.isArray(n) ? d(n) : "tokenize" in n ? d([n]) : (o = n, function(e) {
                                                let t = null !== e && o[e],
                                                    n = null !== e && o.null;
                                                return d([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e)
                                            });

                                            function d(e) {
                                                return (c = e, h = 0, 0 === e.length) ? a : y(e[h])
                                            }

                                            function y(e) {
                                                return function(n) {
                                                    let i, a, o, c, h;
                                                    return (i = p(), a = u.previous, o = u.currentConstruct, c = u.events.length, h = Array.from(l), f = {
                                                        from: c,
                                                        restore: function() {
                                                            r = i, u.previous = a, u.currentConstruct = o, u.events.length = c, l = h, g()
                                                        }
                                                    }, m = e, e.partial || (u.currentConstruct = e), e.name && u.parser.constructs.disable.null.includes(e.name)) ? b(n) : e.tokenize.call(t ? Object.assign(Object.create(u), t) : u, s, x, b)(n)
                                                }
                                            }

                                            function x(t) {
                                                return e(m, f), i
                                            }

                                            function b(e) {
                                                return (f.restore(), ++h < c.length) ? y(c[h]) : a
                                            }
                                        }
                                    }

                                    function d(e, t) {
                                        e.resolveAll && !a.includes(e) && a.push(e), e.resolve && (0, F.m)(u.events, t, u.events.length - t, e.resolve(u.events.slice(t), u)), e.resolveTo && (u.events = e.resolveTo(u.events, u))
                                    }

                                    function g() {
                                        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                                    }
                                }(t, e, n)
                            }
                        }
                    })(a).document().write((l = 1, s = "", u = !0, function(e, t, n) {
                        let r, i, a, c, h, p = [];
                        for (e = s + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), a = 0, s = "", u && (65279 === e.charCodeAt(0) && a++, u = void 0); a < e.length;) {
                            if (e$.lastIndex = a, c = (r = e$.exec(e)) && void 0 !== r.index ? r.index : e.length, h = e.charCodeAt(c), !r) {
                                s = e.slice(a);
                                break
                            }
                            if (10 === h && a === c && o) p.push(-3), o = void 0;
                            else switch (o && (p.push(-5), o = void 0), a < c && (p.push(e.slice(a, c)), l += c - a), h) {
                                case 0:
                                    p.push(65533), l++;
                                    break;
                                case 9:
                                    for (i = 4 * Math.ceil(l / 4), p.push(-2); l++ < i;) p.push(-1);
                                    break;
                                case 10:
                                    p.push(-4), l = 1;
                                    break;
                                default:
                                    o = !0, l = 1
                            }
                            a = c + 1
                        }
                        return n && (o && p.push(-5), s && p.push(s), p.push(null)), p
                    })(n, i, !0))))
                }
            }
            var e6 = n(41472);

            function e3(e) {
                let t = [],
                    n = -1,
                    r = 0,
                    i = 0;
                for (; ++n < e.length;) {
                    let a = e.charCodeAt(n),
                        o = "";
                    if (37 === a && (0, K.lV)(e.charCodeAt(n + 1)) && (0, K.lV)(e.charCodeAt(n + 2))) i = 2;
                    else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
                    else if (a > 55295 && a < 57344) {
                        let t = e.charCodeAt(n + 1);
                        a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�"
                    } else o = String.fromCharCode(a);
                    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0)
                }
                return t.join("") + e.slice(r)
            }

            function e7(e, t) {
                let n = [{
                    type: "text",
                    value: "↩"
                }];
                return t > 1 && n.push({
                    type: "element",
                    tagName: "sup",
                    properties: {},
                    children: [{
                        type: "text",
                        value: String(t)
                    }]
                }), n
            }

            function e2(e, t) {
                return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
            }
            var e8 = n(7250);

            function e9(e, t) {
                let n = t.referenceType,
                    r = "]";
                if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return [{
                    type: "text",
                    value: "![" + t.alt + r
                }];
                let i = e.all(t),
                    a = i[0];
                a && "text" === a.type ? a.value = "[" + a.value : i.unshift({
                    type: "text",
                    value: "["
                });
                let o = i[i.length - 1];
                return o && "text" === o.type ? o.value += r : i.push({
                    type: "text",
                    value: r
                }), i
            }

            function te(e) {
                let t = e.spread;
                return null == t ? e.children.length > 1 : t
            }

            function tt(e, t, n) {
                let r = 0,
                    i = e.length;
                if (t) {
                    let t = e.codePointAt(r);
                    for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r)
                }
                if (n) {
                    let t = e.codePointAt(i - 1);
                    for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1)
                }
                return i > r ? e.slice(r, i) : ""
            }
            let tn = {
                blockquote: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "blockquote",
                        properties: {},
                        children: e.wrap(e.all(t), !0)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                break: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "br",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), [e.applyData(t, n), {
                        type: "text",
                        value: "\n"
                    }]
                },
                code: function(e, t) {
                    let n = t.value ? t.value + "\n" : "",
                        r = {},
                        i = t.lang ? t.lang.split(/\s+/) : [];
                    i.length > 0 && (r.className = ["language-" + i[0]]);
                    let a = {
                        type: "element",
                        tagName: "code",
                        properties: r,
                        children: [{
                            type: "text",
                            value: n
                        }]
                    };
                    return t.meta && (a.data = {
                        meta: t.meta
                    }), e.patch(t, a), a = {
                        type: "element",
                        tagName: "pre",
                        properties: {},
                        children: [a = e.applyData(t, a)]
                    }, e.patch(t, a), a
                },
                delete: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "del",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                emphasis: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "em",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                footnoteReference: function(e, t) {
                    let n, r = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-",
                        i = String(t.identifier).toUpperCase(),
                        a = e3(i.toLowerCase()),
                        o = e.footnoteOrder.indexOf(i),
                        l = e.footnoteCounts.get(i);
                    void 0 === l ? (l = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length) : n = o + 1, l += 1, e.footnoteCounts.set(i, l);
                    let s = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: "#" + r + "fn-" + a,
                            id: r + "fnref-" + a + (l > 1 ? "-" + l : ""),
                            dataFootnoteRef: !0,
                            ariaDescribedBy: ["footnote-label"]
                        },
                        children: [{
                            type: "text",
                            value: String(n)
                        }]
                    };
                    e.patch(t, s);
                    let u = {
                        type: "element",
                        tagName: "sup",
                        properties: {},
                        children: [s]
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                heading: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "h" + t.depth,
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                html: function(e, t) {
                    if (e.options.allowDangerousHtml) {
                        let n = {
                            type: "raw",
                            value: t.value
                        };
                        return e.patch(t, n), e.applyData(t, n)
                    }
                },
                imageReference: function(e, t) {
                    let n = String(t.identifier).toUpperCase(),
                        r = e.definitionById.get(n);
                    if (!r) return e9(e, t);
                    let i = {
                        src: e3(r.url || ""),
                        alt: t.alt
                    };
                    null !== r.title && void 0 !== r.title && (i.title = r.title);
                    let a = {
                        type: "element",
                        tagName: "img",
                        properties: i,
                        children: []
                    };
                    return e.patch(t, a), e.applyData(t, a)
                },
                image: function(e, t) {
                    let n = {
                        src: e3(t.url)
                    };
                    null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "img",
                        properties: n,
                        children: []
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                inlineCode: function(e, t) {
                    let n = {
                        type: "text",
                        value: t.value.replace(/\r?\n|\r/g, " ")
                    };
                    e.patch(t, n);
                    let r = {
                        type: "element",
                        tagName: "code",
                        properties: {},
                        children: [n]
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                linkReference: function(e, t) {
                    let n = String(t.identifier).toUpperCase(),
                        r = e.definitionById.get(n);
                    if (!r) return e9(e, t);
                    let i = {
                        href: e3(r.url || "")
                    };
                    null !== r.title && void 0 !== r.title && (i.title = r.title);
                    let a = {
                        type: "element",
                        tagName: "a",
                        properties: i,
                        children: e.all(t)
                    };
                    return e.patch(t, a), e.applyData(t, a)
                },
                link: function(e, t) {
                    let n = {
                        href: e3(t.url)
                    };
                    null !== t.title && void 0 !== t.title && (n.title = t.title);
                    let r = {
                        type: "element",
                        tagName: "a",
                        properties: n,
                        children: e.all(t)
                    };
                    return e.patch(t, r), e.applyData(t, r)
                },
                listItem: function(e, t, n) {
                    let r = e.all(t),
                        i = n ? function(e) {
                            let t = !1;
                            if ("list" === e.type) {
                                t = e.spread || !1;
                                let n = e.children,
                                    r = -1;
                                for (; !t && ++r < n.length;) t = te(n[r])
                            }
                            return t
                        }(n) : te(t),
                        a = {},
                        o = [];
                    if ("boolean" == typeof t.checked) {
                        let e, n = r[0];
                        n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
                            type: "element",
                            tagName: "p",
                            properties: {},
                            children: []
                        }, r.unshift(e)), e.children.length > 0 && e.children.unshift({
                            type: "text",
                            value: " "
                        }), e.children.unshift({
                            type: "element",
                            tagName: "input",
                            properties: {
                                type: "checkbox",
                                checked: t.checked,
                                disabled: !0
                            },
                            children: []
                        }), a.className = ["task-list-item"]
                    }
                    let l = -1;
                    for (; ++l < r.length;) {
                        let e = r[l];
                        (i || 0 !== l || "element" !== e.type || "p" !== e.tagName) && o.push({
                            type: "text",
                            value: "\n"
                        }), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children)
                    }
                    let s = r[r.length - 1];
                    s && (i || "element" !== s.type || "p" !== s.tagName) && o.push({
                        type: "text",
                        value: "\n"
                    });
                    let u = {
                        type: "element",
                        tagName: "li",
                        properties: a,
                        children: o
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                list: function(e, t) {
                    let n = {},
                        r = e.all(t),
                        i = -1;
                    for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
                        let e = r[i];
                        if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                            n.className = ["contains-task-list"];
                            break
                        }
                    }
                    let a = {
                        type: "element",
                        tagName: t.ordered ? "ol" : "ul",
                        properties: n,
                        children: e.wrap(r, !0)
                    };
                    return e.patch(t, a), e.applyData(t, a)
                },
                paragraph: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                root: function(e, t) {
                    let n = {
                        type: "root",
                        children: e.wrap(e.all(t))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                strong: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "strong",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                table: function(e, t) {
                    let n = e.all(t),
                        r = n.shift(),
                        i = [];
                    if (r) {
                        let n = {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: e.wrap([r], !0)
                        };
                        e.patch(t.children[0], n), i.push(n)
                    }
                    if (n.length > 0) {
                        let r = {
                                type: "element",
                                tagName: "tbody",
                                properties: {},
                                children: e.wrap(n, !0)
                            },
                            a = (0, x.PW)(t.children[1]),
                            o = (0, x.Y)(t.children[t.children.length - 1]);
                        a && o && (r.position = {
                            start: a,
                            end: o
                        }), i.push(r)
                    }
                    let a = {
                        type: "element",
                        tagName: "table",
                        properties: {},
                        children: e.wrap(i, !0)
                    };
                    return e.patch(t, a), e.applyData(t, a)
                },
                tableCell: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "td",
                        properties: {},
                        children: e.all(t)
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                tableRow: function(e, t, n) {
                    let r = n ? n.children : void 0,
                        i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
                        a = n && "table" === n.type ? n.align : void 0,
                        o = a ? a.length : t.children.length,
                        l = -1,
                        s = [];
                    for (; ++l < o;) {
                        let n = t.children[l],
                            r = {},
                            o = a ? a[l] : void 0;
                        o && (r.align = o);
                        let u = {
                            type: "element",
                            tagName: i,
                            properties: r,
                            children: []
                        };
                        n && (u.children = e.all(n), e.patch(n, u), u = e.applyData(n, u)), s.push(u)
                    }
                    let u = {
                        type: "element",
                        tagName: "tr",
                        properties: {},
                        children: e.wrap(s, !0)
                    };
                    return e.patch(t, u), e.applyData(t, u)
                },
                text: function(e, t) {
                    let n = {
                        type: "text",
                        value: function(e) {
                            let t = String(e),
                                n = /\r?\n|\r/g,
                                r = n.exec(t),
                                i = 0,
                                a = [];
                            for (; r;) a.push(tt(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                            return a.push(tt(t.slice(i), i > 0, !1)), a.join("")
                        }(String(t.value))
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                thematicBreak: function(e, t) {
                    let n = {
                        type: "element",
                        tagName: "hr",
                        properties: {},
                        children: []
                    };
                    return e.patch(t, n), e.applyData(t, n)
                },
                toml: tr,
                yaml: tr,
                definition: tr,
                footnoteDefinition: tr
            };

            function tr() {}
            let ti = {}.hasOwnProperty,
                ta = {};

            function to(e, t) {
                e.position && (t.position = (0, x.G1)(e))
            }

            function tl(e, t) {
                let n = t;
                if (e && e.data) {
                    let t = e.data.hName,
                        r = e.data.hChildren,
                        i = e.data.hProperties;
                    "string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
                        type: "element",
                        tagName: t,
                        properties: {},
                        children: "children" in n ? n.children : [n]
                    }), "element" === n.type && i && Object.assign(n.properties, (0, e6.A)(i)), "children" in n && n.children && null != r && (n.children = r)
                }
                return n
            }

            function ts(e, t) {
                let n = [],
                    r = -1;
                for (t && n.push({
                        type: "text",
                        value: "\n"
                    }); ++r < e.length;) r && n.push({
                    type: "text",
                    value: "\n"
                }), n.push(e[r]);
                return t && e.length > 0 && n.push({
                    type: "text",
                    value: "\n"
                }), n
            }

            function tu(e) {
                let t = 0,
                    n = e.charCodeAt(t);
                for (; 9 === n || 32 === n;) t++, n = e.charCodeAt(t);
                return e.slice(t)
            }

            function tc(e, t) {
                let n, r, a, o, l = (n = t || ta, r = new Map, a = new Map, o = {
                        all: function(e) {
                            let t = [];
                            if ("children" in e) {
                                let n = e.children,
                                    r = -1;
                                for (; ++r < n.length;) {
                                    let i = o.one(n[r], e);
                                    if (i) {
                                        if (r && "break" === n[r - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = tu(i.value)), !Array.isArray(i) && "element" === i.type)) {
                                            let e = i.children[0];
                                            e && "text" === e.type && (e.value = tu(e.value))
                                        }
                                        Array.isArray(i) ? t.push(...i) : t.push(i)
                                    }
                                }
                            }
                            return t
                        },
                        applyData: tl,
                        definitionById: r,
                        footnoteById: a,
                        footnoteCounts: new Map,
                        footnoteOrder: [],
                        handlers: {
                            ...tn,
                            ...n.handlers
                        },
                        one: function(e, t) {
                            let n = e.type,
                                r = o.handlers[n];
                            if (ti.call(o.handlers, n) && r) return r(o, e, t);
                            if (o.options.passThrough && o.options.passThrough.includes(n)) {
                                if ("children" in e) {
                                    let {
                                        children: t,
                                        ...n
                                    } = e, r = (0, e6.A)(n);
                                    return r.children = o.all(e), r
                                }
                                return (0, e6.A)(e)
                            }
                            return (o.options.unknownHandler || function(e, t) {
                                let n = t.data || {},
                                    r = "value" in t && !(ti.call(n, "hProperties") || ti.call(n, "hChildren")) ? {
                                        type: "text",
                                        value: t.value
                                    } : {
                                        type: "element",
                                        tagName: "div",
                                        properties: {},
                                        children: e.all(t)
                                    };
                                return e.patch(t, r), e.applyData(t, r)
                            })(o, e, t)
                        },
                        options: n,
                        patch: to,
                        wrap: ts
                    }, (0, e8.YR)(e, function(e) {
                        if ("definition" === e.type || "footnoteDefinition" === e.type) {
                            let t = "definition" === e.type ? r : a,
                                n = String(e.identifier).toUpperCase();
                            t.has(n) || t.set(n, e)
                        }
                    }), o),
                    s = l.one(e, void 0),
                    u = function(e) {
                        let t = "string" == typeof e.options.clobberPrefix ? e.options.clobberPrefix : "user-content-",
                            n = e.options.footnoteBackContent || e7,
                            r = e.options.footnoteBackLabel || e2,
                            i = e.options.footnoteLabel || "Footnotes",
                            a = e.options.footnoteLabelTagName || "h2",
                            o = e.options.footnoteLabelProperties || {
                                className: ["sr-only"]
                            },
                            l = [],
                            s = -1;
                        for (; ++s < e.footnoteOrder.length;) {
                            let i = e.footnoteById.get(e.footnoteOrder[s]);
                            if (!i) continue;
                            let a = e.all(i),
                                o = String(i.identifier).toUpperCase(),
                                u = e3(o.toLowerCase()),
                                c = 0,
                                h = [],
                                p = e.footnoteCounts.get(o);
                            for (; void 0 !== p && ++c <= p;) {
                                h.length > 0 && h.push({
                                    type: "text",
                                    value: " "
                                });
                                let e = "string" == typeof n ? n : n(s, c);
                                "string" == typeof e && (e = {
                                    type: "text",
                                    value: e
                                }), h.push({
                                    type: "element",
                                    tagName: "a",
                                    properties: {
                                        href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                                        dataFootnoteBackref: "",
                                        ariaLabel: "string" == typeof r ? r : r(s, c),
                                        className: ["data-footnote-backref"]
                                    },
                                    children: Array.isArray(e) ? e : [e]
                                })
                            }
                            let m = a[a.length - 1];
                            if (m && "element" === m.type && "p" === m.tagName) {
                                let e = m.children[m.children.length - 1];
                                e && "text" === e.type ? e.value += " " : m.children.push({
                                    type: "text",
                                    value: " "
                                }), m.children.push(...h)
                            } else a.push(...h);
                            let f = {
                                type: "element",
                                tagName: "li",
                                properties: {
                                    id: t + "fn-" + u
                                },
                                children: e.wrap(a, !0)
                            };
                            e.patch(i, f), l.push(f)
                        }
                        if (0 !== l.length) return {
                            type: "element",
                            tagName: "section",
                            properties: {
                                dataFootnotes: !0,
                                className: ["footnotes"]
                            },
                            children: [{
                                type: "element",
                                tagName: a,
                                properties: {
                                    ...(0, e6.A)(o),
                                    id: "footnote-label"
                                },
                                children: [{
                                    type: "text",
                                    value: i
                                }]
                            }, {
                                type: "text",
                                value: "\n"
                            }, {
                                type: "element",
                                tagName: "ol",
                                properties: {},
                                children: e.wrap(l, !0)
                            }, {
                                type: "text",
                                value: "\n"
                            }]
                        }
                    }(l),
                    c = Array.isArray(s) ? {
                        type: "root",
                        children: s
                    } : s || {
                        type: "root",
                        children: []
                    };
                return u && ((0, i.ok)("children" in c), c.children.push({
                    type: "text",
                    value: "\n"
                }, u)), c
            }

            function th(e, t) {
                return e && "run" in e ? async function(n, r) {
                    let i = tc(n, {
                        file: r,
                        ...t
                    });
                    await e.run(i, r)
                }: function(n, r) {
                    return tc(n, {
                        file: r,
                        ...e || t
                    })
                }
            }

            function tp(e) {
                if (e) throw e
            }
            var tm = n(61614),
                tf = n.n(tm);

            function td(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = Object.getPrototypeOf(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
            let tg = function(e, t) {
                    let n;
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    tv(e);
                    let r = 0,
                        i = -1,
                        a = e.length;
                    if (void 0 === t || 0 === t.length || t.length > e.length) {
                        for (; a--;)
                            if (47 === e.codePointAt(a)) {
                                if (n) {
                                    r = a + 1;
                                    break
                                }
                            } else i < 0 && (n = !0, i = a + 1);
                        return i < 0 ? "" : e.slice(r, i)
                    }
                    if (t === e) return "";
                    let o = -1,
                        l = t.length - 1;
                    for (; a--;)
                        if (47 === e.codePointAt(a)) {
                            if (n) {
                                r = a + 1;
                                break
                            }
                        } else o < 0 && (n = !0, o = a + 1), l > -1 && (e.codePointAt(a) === t.codePointAt(l--) ? l < 0 && (i = a) : (l = -1, i = o));
                    return r === i ? i = o : i < 0 && (i = e.length), e.slice(r, i)
                },
                ty = function(e) {
                    let t;
                    if (tv(e), 0 === e.length) return ".";
                    let n = -1,
                        r = e.length;
                    for (; --r;)
                        if (47 === e.codePointAt(r)) {
                            if (t) {
                                n = r;
                                break
                            }
                        } else t || (t = !0);
                    return n < 0 ? 47 === e.codePointAt(0) ? "/" : "." : 1 === n && 47 === e.codePointAt(0) ? "//" : e.slice(0, n)
                },
                tx = function(e) {
                    let t;
                    tv(e);
                    let n = e.length,
                        r = -1,
                        i = 0,
                        a = -1,
                        o = 0;
                    for (; n--;) {
                        let l = e.codePointAt(n);
                        if (47 === l) {
                            if (t) {
                                i = n + 1;
                                break
                            }
                            continue
                        }
                        r < 0 && (t = !0, r = n + 1), 46 === l ? a < 0 ? a = n : 1 !== o && (o = 1) : a > -1 && (o = -1)
                    }
                    return a < 0 || r < 0 || 0 === o || 1 === o && a === r - 1 && a === i + 1 ? "" : e.slice(a, r)
                },
                tb = function() {
                    let e, t, n;
                    for (var r, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                    let l = -1;
                    for (; ++l < a.length;) tv(a[l]), a[l] && (e = void 0 === e ? a[l] : e + "/" + a[l]);
                    return void 0 === e ? "." : (tv(r = e), t = 47 === r.codePointAt(0), 0 !== (n = function(e, t) {
                        let n, r, i = "",
                            a = 0,
                            o = -1,
                            l = 0,
                            s = -1;
                        for (; ++s <= e.length;) {
                            if (s < e.length) n = e.codePointAt(s);
                            else if (47 === n) break;
                            else n = 47;
                            if (47 === n) {
                                if (o === s - 1 || 1 === l);
                                else if (o !== s - 1 && 2 === l) {
                                    if (i.length < 2 || 2 !== a || 46 !== i.codePointAt(i.length - 1) || 46 !== i.codePointAt(i.length - 2)) {
                                        if (i.length > 2) {
                                            if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                r < 0 ? (i = "", a = 0) : a = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = s, l = 0;
                                                continue
                                            }
                                        } else if (i.length > 0) {
                                            i = "", a = 0, o = s, l = 0;
                                            continue
                                        }
                                    }
                                    t && (i = i.length > 0 ? i + "/.." : "..", a = 2)
                                } else i.length > 0 ? i += "/" + e.slice(o + 1, s) : i = e.slice(o + 1, s), a = s - o - 1;
                                o = s, l = 0
                            } else 46 === n && l > -1 ? l++ : l = -1
                        }
                        return i
                    }(r, !t)).length || t || (n = "."), n.length > 0 && 47 === r.codePointAt(r.length - 1) && (n += "/"), t ? "/" + n : n)
                };

            function tv(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function tk(e) {
                return !!(null !== e && "object" == typeof e && "href" in e && e.href && "protocol" in e && e.protocol && void 0 === e.auth)
            }
            let tw = ["history", "path", "basename", "stem", "extname", "dirname"];
            class tz {
                get basename() {
                    return "string" == typeof this.path ? tg(this.path) : void 0
                }
                set basename(e) {
                    tA(e, "basename"), tS(e, "basename"), this.path = tb(this.dirname || "", e)
                }
                get dirname() {
                    return "string" == typeof this.path ? ty(this.path) : void 0
                }
                set dirname(e) {
                    tT(this.basename, "dirname"), this.path = tb(e || "", this.basename)
                }
                get extname() {
                    return "string" == typeof this.path ? tx(this.path) : void 0
                }
                set extname(e) {
                    if (tS(e, "extname"), tT(this.dirname, "extname"), e) {
                        if (46 !== e.codePointAt(0)) throw Error("`extname` must start with `.`");
                        if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                    }
                    this.path = tb(this.dirname, this.stem + (e || ""))
                }
                get path() {
                    return this.history[this.history.length - 1]
                }
                set path(e) {
                    tk(e) && (e = function(e) {
                        if ("string" == typeof e) e = new URL(e);
                        else if (!tk(e)) {
                            let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                            throw t.code = "ERR_INVALID_ARG_TYPE", t
                        }
                        if ("file:" !== e.protocol) {
                            let e = TypeError("The URL must be of scheme file");
                            throw e.code = "ERR_INVALID_URL_SCHEME", e
                        }
                        return function(e) {
                            if ("" !== e.hostname) {
                                let e = TypeError('File URL host must be "localhost" or empty on darwin');
                                throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                            }
                            let t = e.pathname,
                                n = -1;
                            for (; ++n < t.length;)
                                if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                                    let e = t.codePointAt(n + 2);
                                    if (70 === e || 102 === e) {
                                        let e = TypeError("File URL path must not include encoded / characters");
                                        throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                                    }
                                } return decodeURIComponent(t)
                        }(e)
                    }(e)), tA(e, "path"), this.path !== e && this.history.push(e)
                }
                get stem() {
                    return "string" == typeof this.path ? tg(this.path, this.extname) : void 0
                }
                set stem(e) {
                    tA(e, "stem"), tS(e, "stem"), this.path = tb(this.dirname || "", e + (this.extname || ""))
                }
                fail(e, t, n) {
                    let r = this.message(e, t, n);
                    throw r.fatal = !0, r
                }
                info(e, t, n) {
                    let r = this.message(e, t, n);
                    return r.fatal = void 0, r
                }
                message(e, t, n) {
                    let r = new z(e, t, n);
                    return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
                }
                toString(e) {
                    return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(e || void 0).decode(this.value)
                }
                constructor(e) {
                    let t, n;
                    t = e ? tk(e) ? {
                        path: e
                    } : "string" == typeof e || function(e) {
                        return !!(e && "object" == typeof e && "byteLength" in e && "byteOffset" in e)
                    }(e) ? {
                        value: e
                    } : e : {}, this.cwd = "cwd" in t ? "" : "/", this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
                    let r = -1;
                    for (; ++r < tw.length;) {
                        const e = tw[r];
                        e in t && void 0 !== t[e] && null !== t[e] && (this[e] = "history" === e ? [...t[e]] : t[e])
                    }
                    for (n in t) tw.includes(n) || (this[n] = t[n])
                }
            }

            function tS(e, t) {
                if (e && e.includes("/")) throw Error("`" + t + "` cannot be a path: did not expect `/`")
            }

            function tA(e, t) {
                if (!e) throw Error("`" + t + "` cannot be empty")
            }

            function tT(e, t) {
                if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
            }
            let tM = function(e) {
                    let t = this.constructor.prototype,
                        n = t[e],
                        r = function() {
                            return n.apply(r, arguments)
                        };
                    return Object.setPrototypeOf(r, t), r
                },
                tC = {}.hasOwnProperty;
            class tE extends tM {
                copy() {
                    let e = new tE,
                        t = -1;
                    for (; ++t < this.attachers.length;) {
                        let n = this.attachers[t];
                        e.use(...n)
                    }
                    return e.data(tf()(!0, {}, this.namespace)), e
                }
                data(e, t) {
                    return "string" == typeof e ? 2 == arguments.length ? (tO("data", this.frozen), this.namespace[e] = t, this) : tC.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (tO("data", this.frozen), this.namespace = e, this) : this.namespace
                }
                freeze() {
                    if (this.frozen) return this;
                    for (; ++this.freezeIndex < this.attachers.length;) {
                        let [e, ...t] = this.attachers[this.freezeIndex];
                        if (!1 === t[0]) continue;
                        !0 === t[0] && (t[0] = void 0);
                        let n = e.call(this, ...t);
                        "function" == typeof n && this.transformers.use(n)
                    }
                    return this.frozen = !0, this.freezeIndex = 1 / 0, this
                }
                parse(e) {
                    this.freeze();
                    let t = tD(e),
                        n = this.parser || this.Parser;
                    return tI("parse", n), n(String(t), t)
                }
                process(e, t) {
                    let n = this;
                    return this.freeze(), tI("process", this.parser || this.Parser), tB("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);

                    function r(r, a) {
                        let o = tD(e),
                            l = n.parse(o);

                        function s(e, n) {
                            e || !n ? a(e) : r ? r(n) : ((0, i.ok)(t, "`done` is defined if `resolve` is not"), t(void 0, n))
                        }
                        n.run(l, o, function(e, t, r) {
                            var i, a;
                            if (e || !t || !r) return s(e);
                            let o = n.stringify(t, r);
                            "string" == typeof(i = o) || (a = i) && "object" == typeof a && "byteLength" in a && "byteOffset" in a ? r.value = o : r.result = o, s(e, r)
                        })
                    }
                }
                processSync(e) {
                    let t, n = !1;
                    return this.freeze(), tI("processSync", this.parser || this.Parser), tB("processSync", this.compiler || this.Compiler), this.process(e, function(e, r) {
                        n = !0, tp(e), t = r
                    }), tL("processSync", "process", n), (0, i.ok)(t, "we either bailed on an error or have a tree"), t
                }
                run(e, t, n) {
                    tP(e), this.freeze();
                    let r = this.transformers;
                    return n || "function" != typeof t || (n = t, t = void 0), n ? a(void 0, n) : new Promise(a);

                    function a(a, o) {
                        (0, i.ok)("function" != typeof t, "`file` can’t be a `done` anymore, we checked");
                        let l = tD(t);
                        r.run(e, l, function(t, r, l) {
                            let s = r || e;
                            t ? o(t) : a ? a(s) : ((0, i.ok)(n, "`done` is defined if `resolve` is not"), n(void 0, s, l))
                        })
                    }
                }
                runSync(e, t) {
                    let n, r = !1;
                    return this.run(e, t, function(e, t) {
                        tp(e), n = t, r = !0
                    }), tL("runSync", "run", r), (0, i.ok)(n, "we either bailed on an error or have a tree"), n
                }
                stringify(e, t) {
                    this.freeze();
                    let n = tD(t),
                        r = this.compiler || this.Compiler;
                    return tB("stringify", r), tP(e), r(e, n)
                }
                use(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    let i = this.attachers,
                        a = this.namespace;
                    if (tO("use", this.frozen), null == e);
                    else if ("function" == typeof e) s(e, n);
                    else if ("object" == typeof e) Array.isArray(e) ? l(e) : o(e);
                    else throw TypeError("Expected usable value, not `" + e + "`");
                    return this;

                    function o(e) {
                        if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
                        l(e.plugins), e.settings && (a.settings = tf()(!0, a.settings, e.settings))
                    }

                    function l(e) {
                        let t = -1;
                        if (null == e);
                        else if (Array.isArray(e))
                            for (; ++t < e.length;) ! function(e) {
                                if ("function" == typeof e) s(e, []);
                                else if ("object" == typeof e)
                                    if (Array.isArray(e)) {
                                        let [t, ...n] = e;
                                        s(t, n)
                                    } else o(e);
                                else throw TypeError("Expected usable value, not `" + e + "`")
                            }(e[t]);
                        else throw TypeError("Expected a list of plugins, not `" + e + "`")
                    }

                    function s(e, t) {
                        let n = -1,
                            r = -1;
                        for (; ++n < i.length;)
                            if (i[n][0] === e) {
                                r = n;
                                break
                            } if (-1 === r) i.push([e, ...t]);
                        else if (t.length > 0) {
                            let [n, ...a] = t, o = i[r][1];
                            td(o) && td(n) && (n = tf()(!0, o, n)), i[r] = [e, n, ...a]
                        }
                    }
                }
                constructor() {
                    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = function() {
                        let e = [],
                            t = {
                                run: function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    let i = -1,
                                        a = n.pop();
                                    if ("function" != typeof a) throw TypeError("Expected function as last argument, not " + a);
                                    ! function t(r) {
                                        for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) l[s - 1] = arguments[s];
                                        let u = e[++i],
                                            c = -1;
                                        if (r) return void a(r);
                                        for (; ++c < n.length;)(null === l[c] || void 0 === l[c]) && (l[c] = n[c]);
                                        n = l, u ? (function(e, t) {
                                            let n;
                                            return function() {
                                                let t;
                                                for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                                                let s = e.length > o.length;
                                                s && o.push(r);
                                                try {
                                                    t = e.apply(this, o)
                                                } catch (e) {
                                                    if (s && n) throw e;
                                                    return r(e)
                                                }
                                                s || (t instanceof Promise ? t.then(i, r) : t instanceof Error ? r(t) : i(t))
                                            };

                                            function r(e) {
                                                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                                                n || (n = !0, t(e, ...i))
                                            }

                                            function i(e) {
                                                r(null, e)
                                            }
                                        })(u, t)(...l) : a(null, ...l)
                                    }(null, ...n)
                                },
                                use: function(n) {
                                    if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                                    return e.push(n), t
                                }
                            };
                        return t
                    }()
                }
            }
            let tR = new tE().freeze();

            function tI(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `parser`")
            }

            function tB(e, t) {
                if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `compiler`")
            }

            function tO(e, t) {
                if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
            }

            function tP(e) {
                if (!td(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
            }

            function tL(e, t, n) {
                if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
            }

            function tD(e) {
                var t;
                return (t = e) && "object" == typeof t && "message" in t && "messages" in t ? e : new tz(e)
            }
            let tN = [],
                tq = {
                    allowDangerousHtml: !0
                },
                tH = /^(https?|ircs?|mailto|xmpp)$/i,
                tF = [{
                    from: "astPlugins",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "allowDangerousHtml",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "allowNode",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "allowElement"
                }, {
                    from: "allowedTypes",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "allowedElements"
                }, {
                    from: "className",
                    id: "remove-classname"
                }, {
                    from: "disallowedTypes",
                    id: "replace-allownode-allowedtypes-and-disallowedtypes",
                    to: "disallowedElements"
                }, {
                    from: "escapeHtml",
                    id: "remove-buggy-html-in-markdown-parser"
                }, {
                    from: "includeElementIndex",
                    id: "#remove-includeelementindex"
                }, {
                    from: "includeNodeIndex",
                    id: "change-includenodeindex-to-includeelementindex"
                }, {
                    from: "linkTarget",
                    id: "remove-linktarget"
                }, {
                    from: "plugins",
                    id: "change-plugins-to-remarkplugins",
                    to: "remarkPlugins"
                }, {
                    from: "rawSourcePos",
                    id: "#remove-rawsourcepos"
                }, {
                    from: "renderers",
                    id: "change-renderers-to-components",
                    to: "components"
                }, {
                    from: "source",
                    id: "change-source-to-children",
                    to: "children"
                }, {
                    from: "sourcePos",
                    id: "#remove-sourcepos"
                }, {
                    from: "transformImageUri",
                    id: "#add-urltransform",
                    to: "urlTransform"
                }, {
                    from: "transformLinkUri",
                    id: "#add-urltransform",
                    to: "urlTransform"
                }];

            function tU(e) {
                var t;
                let n, r, a, o, l, s = (n = (t = e).rehypePlugins || tN, r = t.remarkPlugins || tN, a = t.remarkRehypeOptions ? {
                        ...t.remarkRehypeOptions,
                        ...tq
                    } : tq, tR().use(e5).use(r).use(th, a).use(n)),
                    u = (o = e.children || "", l = new tz, "string" == typeof o ? l.value = o : (0, i.HB)("Unexpected value `" + o + "` for `children` prop, expected `string`"), l);
                return function(e, t) {
                    let n = t.allowedElements,
                        r = t.allowElement,
                        a = t.components,
                        o = t.disallowedElements,
                        l = t.skipHtml,
                        s = t.unwrapDisallowed,
                        u = t.urlTransform || tV;
                    for (let e of tF) Object.hasOwn(t, e.from) && (0, i.HB)("Unexpected `" + e.from + "` prop, " + (e.to ? "use `" + e.to + "` instead" : "remove it") + " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" + e.id + "> for more info)");
                    return n && o && (0, i.HB)("Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"), (0, e8.YR)(e, function(e, t, i) {
                            if ("raw" === e.type && i && "number" == typeof t) return l ? i.children.splice(t, 1) : i.children[t] = {
                                type: "text",
                                value: e.value
                            }, t;
                            if ("element" === e.type) {
                                let t;
                                for (t in N)
                                    if (Object.hasOwn(N, t) && Object.hasOwn(e.properties, t)) {
                                        let n = e.properties[t],
                                            r = N[t];
                                        (null === r || r.includes(e.tagName)) && (e.properties[t] = u(String(n || ""), t, e))
                                    }
                            }
                            if ("element" === e.type) {
                                let a = n ? !n.includes(e.tagName) : !!o && o.includes(e.tagName);
                                if (!a && r && "number" == typeof t && (a = !r(e, t, i)), a && i && "number" == typeof t) return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t
                            }
                        }),
                        function(e, t) {
                            var n, r, i, a;
                            let o;
                            if (!t || void 0 === t.Fragment) throw TypeError("Expected `Fragment` in options");
                            let l = t.filePath || void 0;
                            if (t.development) {
                                if ("function" != typeof t.jsxDEV) throw TypeError("Expected `jsxDEV` in options when `development: true`");
                                n = l, r = t.jsxDEV, o = function(e, t, i, a) {
                                    let o = Array.isArray(i.children),
                                        l = (0, x.PW)(e);
                                    return r(t, i, a, o, {
                                        columnNumber: l ? l.column - 1 : void 0,
                                        fileName: n,
                                        lineNumber: l ? l.line : void 0
                                    }, void 0)
                                }
                            } else {
                                if ("function" != typeof t.jsx) throw TypeError("Expected `jsx` in production options");
                                if ("function" != typeof t.jsxs) throw TypeError("Expected `jsxs` in production options");
                                i = t.jsx, a = t.jsxs, o = function(e, t, n, r) {
                                    let o = Array.isArray(n.children) ? a : i;
                                    return r ? o(t, n, r) : o(t, n)
                                }
                            }
                            let s = {
                                    Fragment: t.Fragment,
                                    ancestors: [],
                                    components: t.components || {},
                                    create: o,
                                    elementAttributeNameCase: t.elementAttributeNameCase || "react",
                                    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                                    filePath: l,
                                    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                                    passKeys: !1 !== t.passKeys,
                                    passNode: t.passNode || !1,
                                    schema: "svg" === t.space ? p.JW : p.qy,
                                    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                                    tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle
                                },
                                u = R(s, e, void 0);
                            return u && "string" != typeof u ? u : s.create(e, s.Fragment, {
                                children: u || void 0
                            }, void 0)
                        }(e, {
                            Fragment: q.Fragment,
                            components: a,
                            ignoreInvalidStyle: !0,
                            jsx: q.jsx,
                            jsxs: q.jsxs,
                            passKeys: !0,
                            passNode: !0
                        })
                }(s.runSync(s.parse(u), u), e)
            }

            function tV(e) {
                let t = e.indexOf(":"),
                    n = e.indexOf("?"),
                    r = e.indexOf("#"),
                    i = e.indexOf("/");
                return -1 === t || -1 !== i && t > i || -1 !== n && t > n || -1 !== r && t > r || tH.test(e.slice(0, t)) ? e : ""
            }
        },
        46122: function(e, t, n) {
            n.d(t, {
                A: () => io
            });
            var r, i, a = n(34226),
                o = n(34102);
            let l = /[#.]/g;
            var s = n(16088),
                u = n(52384),
                c = n(2501);

            function h(e, t, n) {
                let r = n ? function(e) {
                    let t = new Map;
                    for (let n of e) t.set(n.toLowerCase(), n);
                    return t
                }(n) : void 0;
                return function(n, i) {
                    let a;
                    for (var u = arguments.length, h = Array(u > 2 ? u - 2 : 0), m = 2; m < u; m++) h[m - 2] = arguments[m];
                    if (null == n) a = {
                        type: "root",
                        children: []
                    }, h.unshift(i);
                    else {
                        let u = (a = function(e, t) {
                                let n, r, i = e || "",
                                    a = {},
                                    o = 0;
                                for (; o < i.length;) {
                                    l.lastIndex = o;
                                    let e = l.exec(i),
                                        t = i.slice(o, e ? e.index : i.length);
                                    t && (n ? "#" === n ? a.id = t : Array.isArray(a.className) ? a.className.push(t) : a.className = [t] : r = t, o += t.length), e && (n = e[0], o++)
                                }
                                return {
                                    type: "element",
                                    tagName: r || t || "div",
                                    properties: a,
                                    children: []
                                }
                            }(n, t)).tagName.toLowerCase(),
                            m = r ? r.get(u) : void 0;
                        if (a.tagName = m || u, function(e) {
                                if (null === e || "object" != typeof e || Array.isArray(e)) return !0;
                                if ("string" != typeof e.type) return !1;
                                for (let t of Object.keys(e)) {
                                    let n = e[t];
                                    if (n && "object" == typeof n) {
                                        if (!Array.isArray(n)) return !0;
                                        for (let e of n)
                                            if ("number" != typeof e && "string" != typeof e) return !0
                                    }
                                }
                                return !!("children" in e && Array.isArray(e.children))
                            }(i)) h.unshift(i);
                        else
                            for (let [t, n] of Object.entries(i)) ! function(e, t, n, r) {
                                let i, a = (0, s.I)(e, n);
                                if (null != r) {
                                    if ("number" == typeof r) {
                                        if (Number.isNaN(r)) return;
                                        i = r
                                    } else i = "boolean" == typeof r ? r : "string" == typeof r ? a.spaceSeparated ? (0, c.q)(r) : a.commaSeparated ? (0, o.q)(r) : a.commaOrSpaceSeparated ? (0, c.q)((0, o.q)(r).join(" ")) : p(a, a.property, r) : Array.isArray(r) ? [...r] : "style" === a.property ? function(e) {
                                        let t = [];
                                        for (let [n, r] of Object.entries(e)) t.push([n, r].join(": "));
                                        return t.join("; ")
                                    }(r) : String(r);
                                    if (Array.isArray(i)) {
                                        let e = [];
                                        for (let t of i) e.push(p(a, a.property, t));
                                        i = e
                                    }
                                    "className" === a.property && Array.isArray(t.className) && (i = t.className.concat(i)), t[a.property] = i
                                }
                            }(e, a.properties, t, n)
                    }
                    for (let e of h) ! function e(t, n) {
                        if (null == n);
                        else if ("number" == typeof n || "string" == typeof n) t.push({
                            type: "text",
                            value: String(n)
                        });
                        else if (Array.isArray(n))
                            for (let r of n) e(t, r);
                        else if ("object" == typeof n && "type" in n) "root" === n.type ? e(t, n.children) : t.push(n);
                        else throw Error("Expected node, nodes, or string, got `" + n + "`")
                    }(a.children, e);
                    return "element" === a.type && "template" === a.tagName && (a.content = {
                        type: "root",
                        children: a.children
                    }, a.children = []), a
                }
            }

            function p(e, t, n) {
                if ("string" == typeof n) {
                    if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
                    if ((e.boolean || e.overloadedBoolean) && ("" === n || (0, u.S)(n) === (0, u.S)(t))) return !0
                }
                return n
            }
            let m = h(a.qy, "div"),
                f = h(a.JW, "g", ["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "solidColor", "textArea", "textPath"]),
                d = "http://www.w3.org/1999/xhtml";

            function g(e, t) {
                let n = function(e, t) {
                    switch (e.nodeType) {
                        case 1:
                            return function(e, t) {
                                let n = e.namespaceURI,
                                    r = n === d ? e.tagName.toLowerCase() : e.tagName,
                                    i = n === d && "template" === r ? e.content : e,
                                    a = e.getAttributeNames(),
                                    o = {},
                                    l = -1;
                                for (; ++l < a.length;) o[a[l]] = e.getAttribute(a[l]) || "";
                                return ("http://www.w3.org/2000/svg" === n ? f : m)(r, o, y(i, t))
                            }(e, t);
                        case 3:
                            return {
                                type: "text", value: e.nodeValue || ""
                            };
                        case 8:
                            return {
                                type: "comment", value: e.nodeValue || ""
                            };
                        case 9:
                        case 11:
                            return function(e, t) {
                                return {
                                    type: "root",
                                    children: y(e, t)
                                }
                            }(e, t);
                        case 10:
                            return {
                                type: "doctype"
                            };
                        default:
                            return
                    }
                }(e, t);
                return n && t.afterTransform && t.afterTransform(e, n), n
            }

            function y(e, t) {
                let n = e.childNodes,
                    r = [],
                    i = -1;
                for (; ++i < n.length;) {
                    let e = g(n[i], t);
                    void 0 !== e && r.push(e)
                }
                return r
            }
            let x = new DOMParser;
            var b = n(55253);
            let v = function(e, t, n) {
                    let r = (0, b.C)(n);
                    if (!e || !e.type || !e.children) throw Error("Expected parent node");
                    if ("number" == typeof t) {
                        if (t < 0 || t === 1 / 0) throw Error("Expected positive finite number as index")
                    } else if ((t = e.children.indexOf(t)) < 0) throw Error("Expected child node or index");
                    for (; ++t < e.children.length;)
                        if (r(e.children[t], t, e)) return e.children[t]
                },
                k = function(e) {
                    if (null == e) return z;
                    if ("string" == typeof e) {
                        var t;
                        return t = e, w(function(e) {
                            return e.tagName === t
                        })
                    }
                    if ("object" == typeof e) {
                        var n = e;
                        let t = [],
                            r = -1;
                        for (; ++r < n.length;) t[r] = k(n[r]);
                        return w(function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            let i = -1;
                            for (; ++i < t.length;)
                                if (t[i].apply(this, n)) return !0;
                            return !1
                        })
                    }
                    if ("function" == typeof e) return w(e);
                    throw Error("Expected function, string, or array as `test`")
                };

            function w(e) {
                return function(t, n, r) {
                    var i;
                    return !!(null !== (i = t) && "object" == typeof i && "type" in i && "tagName" in i && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0))
                }
            }

            function z(e) {
                return !!(e && "object" == typeof e && "type" in e && "element" === e.type && "tagName" in e && "string" == typeof e.tagName)
            }
            let S = /\n/g,
                A = /[\t ]+/g,
                T = k("br"),
                M = k(function(e) {
                    return "td" === e.tagName || "th" === e.tagName
                }),
                C = k("p"),
                E = k("tr"),
                R = k(["datalist", "head", "noembed", "noframes", "noscript", "rp", "script", "style", "template", "title", function(e) {
                    return !!(e.properties || {}).hidden
                }, function(e) {
                    return "dialog" === e.tagName && !(e.properties || {}).open
                }]),
                I = k(["address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "dialog", "dir", "dl", "dt", "div", "figure", "figcaption", "footer", "form,", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "legend", "li", "listing", "main", "menu", "nav", "ol", "p", "plaintext", "pre", "section", "ul", "xmp"]);

            function B(e, t) {
                let n, r = String(e.value),
                    i = [],
                    a = [],
                    o = 0;
                for (; o <= r.length;) {
                    S.lastIndex = o;
                    let e = S.exec(r),
                        n = e && "index" in e ? e.index : r.length;
                    i.push(function(e, t, n) {
                        let r, i = [],
                            a = 0;
                        for (; a < e.length;) {
                            A.lastIndex = a;
                            let n = A.exec(e);
                            r = n ? n.index : e.length, a || r || !n || t || i.push(""), a !== r && i.push(e.slice(a, r)), a = n ? r + n[0].length : r
                        }
                        return a === r || n || i.push(""), i.join(" ")
                    }(r.slice(o, n).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), 0 !== o || t.breakBefore, n !== r.length || t.breakAfter)), o = n + 1
                }
                let l = -1;
                for (; ++l < i.length;) 8203 === i[l].charCodeAt(i[l].length - 1) || l < i.length - 1 && 8203 === i[l + 1].charCodeAt(0) ? (a.push(i[l]), n = void 0) : i[l] ? ("number" == typeof n && a.push(n), a.push(i[l]), n = 0) : (0 === l || l === i.length - 1) && a.push(0);
                return a
            }

            function O(e, t) {
                if ("element" === e.type) {
                    let n = e.properties || {};
                    switch (e.tagName) {
                        case "listing":
                        case "plaintext":
                        case "xmp":
                            return "pre";
                        case "nobr":
                            return "nowrap";
                        case "pre":
                            return n.wrap ? "pre-wrap" : "pre";
                        case "td":
                        case "th":
                            return n.noWrap ? "nowrap" : t.whitespace;
                        case "textarea":
                            return "pre-wrap"
                    }
                }
                return t.whitespace
            }
            class P {
                static range(e, t) {
                    return t ? e && e.loc && t.loc && e.loc.lexer === t.loc.lexer ? new P(e.loc.lexer, e.loc.start, t.loc.end) : null : e && e.loc
                }
                constructor(e, t, n) {
                    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n
                }
            }
            class L {
                range(e, t) {
                    return new L(t, P.range(this, e))
                }
                constructor(e, t) {
                    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t
                }
            }
            class D {
                constructor(e, t) {
                    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
                    var n = "KaTeX parse error: " + e,
                        r = t && t.loc;
                    if (r && r.start <= r.end) {
                        var i, a, o = r.lexer.input;
                        i = r.start, a = r.end, i === o.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
                        var l = o.slice(i, a).replace(/[^]/g, "$&̲");
                        n += (i > 15 ? "…" + o.slice(i - 15, i) : o.slice(0, i)) + l + (a + 15 < o.length ? o.slice(a, a + 15) + "…" : o.slice(a))
                    }
                    var s = Error(n);
                    return s.name = "ParseError", s.__proto__ = D.prototype, s.position = i, null != i && null != a && (s.length = a - i), s.rawMessage = e, s
                }
            }
            D.prototype.__proto__ = Error.prototype;
            var N = /([A-Z])/g,
                q = {
                    "&": "&amp;",
                    ">": "&gt;",
                    "<": "&lt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                },
                H = /[&><"']/g,
                F = function e(t) {
                    if ("ordgroup" === t.type || "color" === t.type)
                        if (1 === t.body.length) return e(t.body[0]);
                        else return t;
                    return "font" === t.type ? e(t.body) : t
                },
                U = function(e) {
                    if (!e) throw Error("Expected non-null, but got " + String(e));
                    return e
                },
                V = function(e, t) {
                    return void 0 === e ? t : e
                },
                _ = function(e) {
                    return String(e).replace(H, e => q[e])
                },
                j = function(e) {
                    return e.replace(N, "-$1").toLowerCase()
                },
                X = function(e) {
                    var t = F(e);
                    return "mathord" === t.type || "textord" === t.type || "atom" === t.type
                },
                K = function(e) {
                    var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
                    return t ? ":" === t[2] && /^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? t[1].toLowerCase() : null : "_relative"
                },
                W = {
                    displayMode: {
                        type: "boolean",
                        description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
                        cli: "-d, --display-mode"
                    },
                    output: {
                        type: {
                            enum: ["htmlAndMathml", "html", "mathml"]
                        },
                        description: "Determines the markup language of the output.",
                        cli: "-F, --format <type>"
                    },
                    leqno: {
                        type: "boolean",
                        description: "Render display math in leqno style (left-justified tags)."
                    },
                    fleqn: {
                        type: "boolean",
                        description: "Render display math flush left."
                    },
                    throwOnError: {
                        type: "boolean",
                        default: !0,
                        cli: "-t, --no-throw-on-error",
                        cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
                    },
                    errorColor: {
                        type: "string",
                        default: "#cc0000",
                        cli: "-c, --error-color <color>",
                        cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
                        cliProcessor: e => "#" + e
                    },
                    macros: {
                        type: "object",
                        cli: "-m, --macro <def>",
                        cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
                        cliDefault: [],
                        cliProcessor: (e, t) => (t.push(e), t)
                    },
                    minRuleThickness: {
                        type: "number",
                        description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
                        processor: e => Math.max(0, e),
                        cli: "--min-rule-thickness <size>",
                        cliProcessor: parseFloat
                    },
                    colorIsTextColor: {
                        type: "boolean",
                        description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
                        cli: "-b, --color-is-text-color"
                    },
                    strict: {
                        type: [{
                            enum: ["warn", "ignore", "error"]
                        }, "boolean", "function"],
                        description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
                        cli: "-S, --strict",
                        cliDefault: !1
                    },
                    trust: {
                        type: ["boolean", "function"],
                        description: "Trust the input, enabling all HTML features such as \\url.",
                        cli: "-T, --trust"
                    },
                    maxSize: {
                        type: "number",
                        default: 1 / 0,
                        description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
                        processor: e => Math.max(0, e),
                        cli: "-s, --max-size <n>",
                        cliProcessor: parseInt
                    },
                    maxExpand: {
                        type: "number",
                        default: 1e3,
                        description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
                        processor: e => Math.max(0, e),
                        cli: "-e, --max-expand <n>",
                        cliProcessor: e => "Infinity" === e ? 1 / 0 : parseInt(e)
                    },
                    globalGroup: {
                        type: "boolean",
                        cli: !1
                    }
                };
            class G {
                reportNonstrict(e, t, n) {
                    var r = this.strict;
                    if ("function" == typeof r && (r = r(e, t, n)), r && "ignore" !== r) {
                        if (!0 === r || "error" === r) throw new D("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [") + e + "]", n);
                        "warn" === r ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [") + e + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + r + "': " + t + " [") + e + "]")
                    }
                }
                useStrictBehavior(e, t, n) {
                    var r = this.strict;
                    if ("function" == typeof r) try {
                        r = r(e, t, n)
                    } catch (e) {
                        r = "error"
                    }
                    return !!r && "ignore" !== r && (!0 === r || "error" === r || ("warn" === r ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [") + e + "]"), !1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + r + "': " + t + " [") + e + "]"), !1)))
                }
                isTrusted(e) {
                    if (e.url && !e.protocol) {
                        var t = K(e.url);
                        if (null == t) return !1;
                        e.protocol = t
                    }
                    return !!("function" == typeof this.trust ? this.trust(e) : this.trust)
                }
                constructor(e) {
                    for (var t in this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {}, W)
                        if (W.hasOwnProperty(t)) {
                            var n = W[t];
                            this[t] = void 0 !== e[t] ? n.processor ? n.processor(e[t]) : e[t] : function(e) {
                                if (e.default) return e.default;
                                var t = e.type,
                                    n = Array.isArray(t) ? t[0] : t;
                                if ("string" != typeof n) return n.enum[0];
                                switch (n) {
                                    case "boolean":
                                        return !1;
                                    case "string":
                                        return "";
                                    case "number":
                                        return 0;
                                    case "object":
                                        return {}
                                }
                            }(n)
                        }
                }
            }
            class Y {
                sup() {
                    return $[Z[this.id]]
                }
                sub() {
                    return $[Q[this.id]]
                }
                fracNum() {
                    return $[J[this.id]]
                }
                fracDen() {
                    return $[ee[this.id]]
                }
                cramp() {
                    return $[et[this.id]]
                }
                text() {
                    return $[en[this.id]]
                }
                isTight() {
                    return this.size >= 2
                }
                constructor(e, t, n) {
                    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n
                }
            }
            var $ = [new Y(0, 0, !1), new Y(1, 0, !0), new Y(2, 1, !1), new Y(3, 1, !0), new Y(4, 2, !1), new Y(5, 2, !0), new Y(6, 3, !1), new Y(7, 3, !0)],
                Z = [4, 5, 4, 5, 6, 7, 6, 7],
                Q = [5, 5, 5, 5, 7, 7, 7, 7],
                J = [2, 3, 4, 5, 6, 7, 6, 7],
                ee = [3, 3, 5, 5, 7, 7, 7, 7],
                et = [1, 1, 3, 3, 5, 5, 7, 7],
                en = [0, 1, 2, 3, 2, 3, 2, 3],
                er = {
                    DISPLAY: $[0],
                    TEXT: $[2],
                    SCRIPT: $[4],
                    SCRIPTSCRIPT: $[6]
                },
                ei = [{
                    name: "latin",
                    blocks: [
                        [256, 591],
                        [768, 879]
                    ]
                }, {
                    name: "cyrillic",
                    blocks: [
                        [1024, 1279]
                    ]
                }, {
                    name: "armenian",
                    blocks: [
                        [1328, 1423]
                    ]
                }, {
                    name: "brahmic",
                    blocks: [
                        [2304, 4255]
                    ]
                }, {
                    name: "georgian",
                    blocks: [
                        [4256, 4351]
                    ]
                }, {
                    name: "cjk",
                    blocks: [
                        [12288, 12543],
                        [19968, 40879],
                        [65280, 65376]
                    ]
                }, {
                    name: "hangul",
                    blocks: [
                        [44032, 55215]
                    ]
                }],
                ea = [];

            function eo(e) {
                for (var t = 0; t < ea.length; t += 2)
                    if (e >= ea[t] && e <= ea[t + 1]) return !0;
                return !1
            }
            ei.forEach(e => e.blocks.forEach(e => ea.push(...e)));
            var el = function(e, t, n) {
                    t *= 1e3;
                    var r, i, a, o, l, s, u = "";
                    switch (e) {
                        case "sqrtMain":
                            u = "M95," + (622 + (r = t) + 80) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + r / 2.075 + " -" + r + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + r) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + r) + " 80h400000v" + (40 + r) + "h-400000z";
                            break;
                        case "sqrtSize1":
                            u = "M263," + (601 + (i = t) + 80) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + i / 2.084 + " -" + i + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + i) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + i) + " 80h400000v" + (40 + i) + "h-400000z";
                            break;
                        case "sqrtSize2":
                            u = "M983 " + (10 + (a = t) + 80) + "\nl" + a / 3.13 + " -" + a + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + a) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + a) + " 80h400000v" + (40 + a) + "h-400000z";
                            break;
                        case "sqrtSize3":
                            u = "M424," + (2398 + (o = t) + 80) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + o / 4.223 + " -" + o + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + o) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + o) + " 80\nh400000v" + (40 + o) + "h-400000z";
                            break;
                        case "sqrtSize4":
                            u = "M473," + (2713 + (l = t) + 80) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + l / 5.298 + " -" + l + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + l) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + l) + " 80h400000v" + (40 + l) + "H1017.7z";
                            break;
                        case "sqrtTall":
                            u = "M702 " + ((s = t) + 80) + "H400000" + (40 + s) + "\nH742v" + (n - 54 - 80 - s) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 80H400000v" + (40 + s) + "H742z"
                    }
                    return u
                },
                es = function(e, t) {
                    switch (e) {
                        case "⎜":
                            return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
                        case "∣":
                            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
                        case "∥":
                            return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V") + t + " H367z";
                        case "⎟":
                            return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
                        case "⎢":
                            return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
                        case "⎥":
                            return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
                        case "⎪":
                            return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
                        case "⏐":
                            return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
                        case "‖":
                            return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V") + t + " H478z";
                        default:
                            return ""
                    }
                },
                eu = {
                    doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                    doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                    leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                    leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                    leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                    leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                    leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                    leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                    leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                    leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                    leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                    lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                    leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                    leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                    leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                    longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                    midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                    midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                    oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                    oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                    oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                    oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                    rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                    rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                    rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                    rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                    rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                    rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                    rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                    rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                    rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                    righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                    rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                    rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                    twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                    twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                    tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                    tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                    tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                    tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                    vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                    widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                    widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                    widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                    rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                    baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                    rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                    shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                    shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
                },
                ec = function(e, t) {
                    switch (e) {
                        case "lbrack":
                            return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + t + " v1759 h84z";
                        case "rbrack":
                            return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + t + " v1759 h84z";
                        case "vert":
                            return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z";
                        case "doublevert":
                            return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z\nM367 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + t + " v585 h43z";
                        case "lfloor":
                            return "M319 602 V0 H403 V602 v" + t + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
                        case "rfloor":
                            return "M319 602 V0 H403 V602 v" + t + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
                        case "lceil":
                            return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v602 h84z\nM403 1759 V0 H319 V1759 v" + t + " v602 h84z";
                        case "rceil":
                            return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + t + " v602 h84z";
                        case "lparen":
                            return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (t + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (t + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
                        case "rparen":
                            return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (t + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (t + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
                        default:
                            throw Error("Unknown stretchy delimiter.")
                    }
                };
            class eh {
                hasClass(e) {
                    return this.classes.includes(e)
                }
                toNode() {
                    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
                    return e
                }
                toMarkup() {
                    for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
                    return e
                }
                toText() {
                    return this.children.map(e => e.toText()).join("")
                }
                constructor(e) {
                    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}
                }
            }
            var ep = {
                    "AMS-Regular": {
                        32: [0, 0, 0, 0, .25],
                        65: [0, .68889, 0, 0, .72222],
                        66: [0, .68889, 0, 0, .66667],
                        67: [0, .68889, 0, 0, .72222],
                        68: [0, .68889, 0, 0, .72222],
                        69: [0, .68889, 0, 0, .66667],
                        70: [0, .68889, 0, 0, .61111],
                        71: [0, .68889, 0, 0, .77778],
                        72: [0, .68889, 0, 0, .77778],
                        73: [0, .68889, 0, 0, .38889],
                        74: [.16667, .68889, 0, 0, .5],
                        75: [0, .68889, 0, 0, .77778],
                        76: [0, .68889, 0, 0, .66667],
                        77: [0, .68889, 0, 0, .94445],
                        78: [0, .68889, 0, 0, .72222],
                        79: [.16667, .68889, 0, 0, .77778],
                        80: [0, .68889, 0, 0, .61111],
                        81: [.16667, .68889, 0, 0, .77778],
                        82: [0, .68889, 0, 0, .72222],
                        83: [0, .68889, 0, 0, .55556],
                        84: [0, .68889, 0, 0, .66667],
                        85: [0, .68889, 0, 0, .72222],
                        86: [0, .68889, 0, 0, .72222],
                        87: [0, .68889, 0, 0, 1],
                        88: [0, .68889, 0, 0, .72222],
                        89: [0, .68889, 0, 0, .72222],
                        90: [0, .68889, 0, 0, .66667],
                        107: [0, .68889, 0, 0, .55556],
                        160: [0, 0, 0, 0, .25],
                        165: [0, .675, .025, 0, .75],
                        174: [.15559, .69224, 0, 0, .94666],
                        240: [0, .68889, 0, 0, .55556],
                        295: [0, .68889, 0, 0, .54028],
                        710: [0, .825, 0, 0, 2.33334],
                        732: [0, .9, 0, 0, 2.33334],
                        770: [0, .825, 0, 0, 2.33334],
                        771: [0, .9, 0, 0, 2.33334],
                        989: [.08167, .58167, 0, 0, .77778],
                        1008: [0, .43056, .04028, 0, .66667],
                        8245: [0, .54986, 0, 0, .275],
                        8463: [0, .68889, 0, 0, .54028],
                        8487: [0, .68889, 0, 0, .72222],
                        8498: [0, .68889, 0, 0, .55556],
                        8502: [0, .68889, 0, 0, .66667],
                        8503: [0, .68889, 0, 0, .44445],
                        8504: [0, .68889, 0, 0, .66667],
                        8513: [0, .68889, 0, 0, .63889],
                        8592: [-.03598, .46402, 0, 0, .5],
                        8594: [-.03598, .46402, 0, 0, .5],
                        8602: [-.13313, .36687, 0, 0, 1],
                        8603: [-.13313, .36687, 0, 0, 1],
                        8606: [.01354, .52239, 0, 0, 1],
                        8608: [.01354, .52239, 0, 0, 1],
                        8610: [.01354, .52239, 0, 0, 1.11111],
                        8611: [.01354, .52239, 0, 0, 1.11111],
                        8619: [0, .54986, 0, 0, 1],
                        8620: [0, .54986, 0, 0, 1],
                        8621: [-.13313, .37788, 0, 0, 1.38889],
                        8622: [-.13313, .36687, 0, 0, 1],
                        8624: [0, .69224, 0, 0, .5],
                        8625: [0, .69224, 0, 0, .5],
                        8630: [0, .43056, 0, 0, 1],
                        8631: [0, .43056, 0, 0, 1],
                        8634: [.08198, .58198, 0, 0, .77778],
                        8635: [.08198, .58198, 0, 0, .77778],
                        8638: [.19444, .69224, 0, 0, .41667],
                        8639: [.19444, .69224, 0, 0, .41667],
                        8642: [.19444, .69224, 0, 0, .41667],
                        8643: [.19444, .69224, 0, 0, .41667],
                        8644: [.1808, .675, 0, 0, 1],
                        8646: [.1808, .675, 0, 0, 1],
                        8647: [.1808, .675, 0, 0, 1],
                        8648: [.19444, .69224, 0, 0, .83334],
                        8649: [.1808, .675, 0, 0, 1],
                        8650: [.19444, .69224, 0, 0, .83334],
                        8651: [.01354, .52239, 0, 0, 1],
                        8652: [.01354, .52239, 0, 0, 1],
                        8653: [-.13313, .36687, 0, 0, 1],
                        8654: [-.13313, .36687, 0, 0, 1],
                        8655: [-.13313, .36687, 0, 0, 1],
                        8666: [.13667, .63667, 0, 0, 1],
                        8667: [.13667, .63667, 0, 0, 1],
                        8669: [-.13313, .37788, 0, 0, 1],
                        8672: [-.064, .437, 0, 0, 1.334],
                        8674: [-.064, .437, 0, 0, 1.334],
                        8705: [0, .825, 0, 0, .5],
                        8708: [0, .68889, 0, 0, .55556],
                        8709: [.08167, .58167, 0, 0, .77778],
                        8717: [0, .43056, 0, 0, .42917],
                        8722: [-.03598, .46402, 0, 0, .5],
                        8724: [.08198, .69224, 0, 0, .77778],
                        8726: [.08167, .58167, 0, 0, .77778],
                        8733: [0, .69224, 0, 0, .77778],
                        8736: [0, .69224, 0, 0, .72222],
                        8737: [0, .69224, 0, 0, .72222],
                        8738: [.03517, .52239, 0, 0, .72222],
                        8739: [.08167, .58167, 0, 0, .22222],
                        8740: [.25142, .74111, 0, 0, .27778],
                        8741: [.08167, .58167, 0, 0, .38889],
                        8742: [.25142, .74111, 0, 0, .5],
                        8756: [0, .69224, 0, 0, .66667],
                        8757: [0, .69224, 0, 0, .66667],
                        8764: [-.13313, .36687, 0, 0, .77778],
                        8765: [-.13313, .37788, 0, 0, .77778],
                        8769: [-.13313, .36687, 0, 0, .77778],
                        8770: [-.03625, .46375, 0, 0, .77778],
                        8774: [.30274, .79383, 0, 0, .77778],
                        8776: [-.01688, .48312, 0, 0, .77778],
                        8778: [.08167, .58167, 0, 0, .77778],
                        8782: [.06062, .54986, 0, 0, .77778],
                        8783: [.06062, .54986, 0, 0, .77778],
                        8785: [.08198, .58198, 0, 0, .77778],
                        8786: [.08198, .58198, 0, 0, .77778],
                        8787: [.08198, .58198, 0, 0, .77778],
                        8790: [0, .69224, 0, 0, .77778],
                        8791: [.22958, .72958, 0, 0, .77778],
                        8796: [.08198, .91667, 0, 0, .77778],
                        8806: [.25583, .75583, 0, 0, .77778],
                        8807: [.25583, .75583, 0, 0, .77778],
                        8808: [.25142, .75726, 0, 0, .77778],
                        8809: [.25142, .75726, 0, 0, .77778],
                        8812: [.25583, .75583, 0, 0, .5],
                        8814: [.20576, .70576, 0, 0, .77778],
                        8815: [.20576, .70576, 0, 0, .77778],
                        8816: [.30274, .79383, 0, 0, .77778],
                        8817: [.30274, .79383, 0, 0, .77778],
                        8818: [.22958, .72958, 0, 0, .77778],
                        8819: [.22958, .72958, 0, 0, .77778],
                        8822: [.1808, .675, 0, 0, .77778],
                        8823: [.1808, .675, 0, 0, .77778],
                        8828: [.13667, .63667, 0, 0, .77778],
                        8829: [.13667, .63667, 0, 0, .77778],
                        8830: [.22958, .72958, 0, 0, .77778],
                        8831: [.22958, .72958, 0, 0, .77778],
                        8832: [.20576, .70576, 0, 0, .77778],
                        8833: [.20576, .70576, 0, 0, .77778],
                        8840: [.30274, .79383, 0, 0, .77778],
                        8841: [.30274, .79383, 0, 0, .77778],
                        8842: [.13597, .63597, 0, 0, .77778],
                        8843: [.13597, .63597, 0, 0, .77778],
                        8847: [.03517, .54986, 0, 0, .77778],
                        8848: [.03517, .54986, 0, 0, .77778],
                        8858: [.08198, .58198, 0, 0, .77778],
                        8859: [.08198, .58198, 0, 0, .77778],
                        8861: [.08198, .58198, 0, 0, .77778],
                        8862: [0, .675, 0, 0, .77778],
                        8863: [0, .675, 0, 0, .77778],
                        8864: [0, .675, 0, 0, .77778],
                        8865: [0, .675, 0, 0, .77778],
                        8872: [0, .69224, 0, 0, .61111],
                        8873: [0, .69224, 0, 0, .72222],
                        8874: [0, .69224, 0, 0, .88889],
                        8876: [0, .68889, 0, 0, .61111],
                        8877: [0, .68889, 0, 0, .61111],
                        8878: [0, .68889, 0, 0, .72222],
                        8879: [0, .68889, 0, 0, .72222],
                        8882: [.03517, .54986, 0, 0, .77778],
                        8883: [.03517, .54986, 0, 0, .77778],
                        8884: [.13667, .63667, 0, 0, .77778],
                        8885: [.13667, .63667, 0, 0, .77778],
                        8888: [0, .54986, 0, 0, 1.11111],
                        8890: [.19444, .43056, 0, 0, .55556],
                        8891: [.19444, .69224, 0, 0, .61111],
                        8892: [.19444, .69224, 0, 0, .61111],
                        8901: [0, .54986, 0, 0, .27778],
                        8903: [.08167, .58167, 0, 0, .77778],
                        8905: [.08167, .58167, 0, 0, .77778],
                        8906: [.08167, .58167, 0, 0, .77778],
                        8907: [0, .69224, 0, 0, .77778],
                        8908: [0, .69224, 0, 0, .77778],
                        8909: [-.03598, .46402, 0, 0, .77778],
                        8910: [0, .54986, 0, 0, .76042],
                        8911: [0, .54986, 0, 0, .76042],
                        8912: [.03517, .54986, 0, 0, .77778],
                        8913: [.03517, .54986, 0, 0, .77778],
                        8914: [0, .54986, 0, 0, .66667],
                        8915: [0, .54986, 0, 0, .66667],
                        8916: [0, .69224, 0, 0, .66667],
                        8918: [.0391, .5391, 0, 0, .77778],
                        8919: [.0391, .5391, 0, 0, .77778],
                        8920: [.03517, .54986, 0, 0, 1.33334],
                        8921: [.03517, .54986, 0, 0, 1.33334],
                        8922: [.38569, .88569, 0, 0, .77778],
                        8923: [.38569, .88569, 0, 0, .77778],
                        8926: [.13667, .63667, 0, 0, .77778],
                        8927: [.13667, .63667, 0, 0, .77778],
                        8928: [.30274, .79383, 0, 0, .77778],
                        8929: [.30274, .79383, 0, 0, .77778],
                        8934: [.23222, .74111, 0, 0, .77778],
                        8935: [.23222, .74111, 0, 0, .77778],
                        8936: [.23222, .74111, 0, 0, .77778],
                        8937: [.23222, .74111, 0, 0, .77778],
                        8938: [.20576, .70576, 0, 0, .77778],
                        8939: [.20576, .70576, 0, 0, .77778],
                        8940: [.30274, .79383, 0, 0, .77778],
                        8941: [.30274, .79383, 0, 0, .77778],
                        8994: [.19444, .69224, 0, 0, .77778],
                        8995: [.19444, .69224, 0, 0, .77778],
                        9416: [.15559, .69224, 0, 0, .90222],
                        9484: [0, .69224, 0, 0, .5],
                        9488: [0, .69224, 0, 0, .5],
                        9492: [0, .37788, 0, 0, .5],
                        9496: [0, .37788, 0, 0, .5],
                        9585: [.19444, .68889, 0, 0, .88889],
                        9586: [.19444, .74111, 0, 0, .88889],
                        9632: [0, .675, 0, 0, .77778],
                        9633: [0, .675, 0, 0, .77778],
                        9650: [0, .54986, 0, 0, .72222],
                        9651: [0, .54986, 0, 0, .72222],
                        9654: [.03517, .54986, 0, 0, .77778],
                        9660: [0, .54986, 0, 0, .72222],
                        9661: [0, .54986, 0, 0, .72222],
                        9664: [.03517, .54986, 0, 0, .77778],
                        9674: [.11111, .69224, 0, 0, .66667],
                        9733: [.19444, .69224, 0, 0, .94445],
                        10003: [0, .69224, 0, 0, .83334],
                        10016: [0, .69224, 0, 0, .83334],
                        10731: [.11111, .69224, 0, 0, .66667],
                        10846: [.19444, .75583, 0, 0, .61111],
                        10877: [.13667, .63667, 0, 0, .77778],
                        10878: [.13667, .63667, 0, 0, .77778],
                        10885: [.25583, .75583, 0, 0, .77778],
                        10886: [.25583, .75583, 0, 0, .77778],
                        10887: [.13597, .63597, 0, 0, .77778],
                        10888: [.13597, .63597, 0, 0, .77778],
                        10889: [.26167, .75726, 0, 0, .77778],
                        10890: [.26167, .75726, 0, 0, .77778],
                        10891: [.48256, .98256, 0, 0, .77778],
                        10892: [.48256, .98256, 0, 0, .77778],
                        10901: [.13667, .63667, 0, 0, .77778],
                        10902: [.13667, .63667, 0, 0, .77778],
                        10933: [.25142, .75726, 0, 0, .77778],
                        10934: [.25142, .75726, 0, 0, .77778],
                        10935: [.26167, .75726, 0, 0, .77778],
                        10936: [.26167, .75726, 0, 0, .77778],
                        10937: [.26167, .75726, 0, 0, .77778],
                        10938: [.26167, .75726, 0, 0, .77778],
                        10949: [.25583, .75583, 0, 0, .77778],
                        10950: [.25583, .75583, 0, 0, .77778],
                        10955: [.28481, .79383, 0, 0, .77778],
                        10956: [.28481, .79383, 0, 0, .77778],
                        57350: [.08167, .58167, 0, 0, .22222],
                        57351: [.08167, .58167, 0, 0, .38889],
                        57352: [.08167, .58167, 0, 0, .77778],
                        57353: [0, .43056, .04028, 0, .66667],
                        57356: [.25142, .75726, 0, 0, .77778],
                        57357: [.25142, .75726, 0, 0, .77778],
                        57358: [.41951, .91951, 0, 0, .77778],
                        57359: [.30274, .79383, 0, 0, .77778],
                        57360: [.30274, .79383, 0, 0, .77778],
                        57361: [.41951, .91951, 0, 0, .77778],
                        57366: [.25142, .75726, 0, 0, .77778],
                        57367: [.25142, .75726, 0, 0, .77778],
                        57368: [.25142, .75726, 0, 0, .77778],
                        57369: [.25142, .75726, 0, 0, .77778],
                        57370: [.13597, .63597, 0, 0, .77778],
                        57371: [.13597, .63597, 0, 0, .77778]
                    },
                    "Caligraphic-Regular": {
                        32: [0, 0, 0, 0, .25],
                        65: [0, .68333, 0, .19445, .79847],
                        66: [0, .68333, .03041, .13889, .65681],
                        67: [0, .68333, .05834, .13889, .52653],
                        68: [0, .68333, .02778, .08334, .77139],
                        69: [0, .68333, .08944, .11111, .52778],
                        70: [0, .68333, .09931, .11111, .71875],
                        71: [.09722, .68333, .0593, .11111, .59487],
                        72: [0, .68333, .00965, .11111, .84452],
                        73: [0, .68333, .07382, 0, .54452],
                        74: [.09722, .68333, .18472, .16667, .67778],
                        75: [0, .68333, .01445, .05556, .76195],
                        76: [0, .68333, 0, .13889, .68972],
                        77: [0, .68333, 0, .13889, 1.2009],
                        78: [0, .68333, .14736, .08334, .82049],
                        79: [0, .68333, .02778, .11111, .79611],
                        80: [0, .68333, .08222, .08334, .69556],
                        81: [.09722, .68333, 0, .11111, .81667],
                        82: [0, .68333, 0, .08334, .8475],
                        83: [0, .68333, .075, .13889, .60556],
                        84: [0, .68333, .25417, 0, .54464],
                        85: [0, .68333, .09931, .08334, .62583],
                        86: [0, .68333, .08222, 0, .61278],
                        87: [0, .68333, .08222, .08334, .98778],
                        88: [0, .68333, .14643, .13889, .7133],
                        89: [.09722, .68333, .08222, .08334, .66834],
                        90: [0, .68333, .07944, .13889, .72473],
                        160: [0, 0, 0, 0, .25]
                    },
                    "Fraktur-Regular": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69141, 0, 0, .29574],
                        34: [0, .69141, 0, 0, .21471],
                        38: [0, .69141, 0, 0, .73786],
                        39: [0, .69141, 0, 0, .21201],
                        40: [.24982, .74947, 0, 0, .38865],
                        41: [.24982, .74947, 0, 0, .38865],
                        42: [0, .62119, 0, 0, .27764],
                        43: [.08319, .58283, 0, 0, .75623],
                        44: [0, .10803, 0, 0, .27764],
                        45: [.08319, .58283, 0, 0, .75623],
                        46: [0, .10803, 0, 0, .27764],
                        47: [.24982, .74947, 0, 0, .50181],
                        48: [0, .47534, 0, 0, .50181],
                        49: [0, .47534, 0, 0, .50181],
                        50: [0, .47534, 0, 0, .50181],
                        51: [.18906, .47534, 0, 0, .50181],
                        52: [.18906, .47534, 0, 0, .50181],
                        53: [.18906, .47534, 0, 0, .50181],
                        54: [0, .69141, 0, 0, .50181],
                        55: [.18906, .47534, 0, 0, .50181],
                        56: [0, .69141, 0, 0, .50181],
                        57: [.18906, .47534, 0, 0, .50181],
                        58: [0, .47534, 0, 0, .21606],
                        59: [.12604, .47534, 0, 0, .21606],
                        61: [-.13099, .36866, 0, 0, .75623],
                        63: [0, .69141, 0, 0, .36245],
                        65: [0, .69141, 0, 0, .7176],
                        66: [0, .69141, 0, 0, .88397],
                        67: [0, .69141, 0, 0, .61254],
                        68: [0, .69141, 0, 0, .83158],
                        69: [0, .69141, 0, 0, .66278],
                        70: [.12604, .69141, 0, 0, .61119],
                        71: [0, .69141, 0, 0, .78539],
                        72: [.06302, .69141, 0, 0, .7203],
                        73: [0, .69141, 0, 0, .55448],
                        74: [.12604, .69141, 0, 0, .55231],
                        75: [0, .69141, 0, 0, .66845],
                        76: [0, .69141, 0, 0, .66602],
                        77: [0, .69141, 0, 0, 1.04953],
                        78: [0, .69141, 0, 0, .83212],
                        79: [0, .69141, 0, 0, .82699],
                        80: [.18906, .69141, 0, 0, .82753],
                        81: [.03781, .69141, 0, 0, .82699],
                        82: [0, .69141, 0, 0, .82807],
                        83: [0, .69141, 0, 0, .82861],
                        84: [0, .69141, 0, 0, .66899],
                        85: [0, .69141, 0, 0, .64576],
                        86: [0, .69141, 0, 0, .83131],
                        87: [0, .69141, 0, 0, 1.04602],
                        88: [0, .69141, 0, 0, .71922],
                        89: [.18906, .69141, 0, 0, .83293],
                        90: [.12604, .69141, 0, 0, .60201],
                        91: [.24982, .74947, 0, 0, .27764],
                        93: [.24982, .74947, 0, 0, .27764],
                        94: [0, .69141, 0, 0, .49965],
                        97: [0, .47534, 0, 0, .50046],
                        98: [0, .69141, 0, 0, .51315],
                        99: [0, .47534, 0, 0, .38946],
                        100: [0, .62119, 0, 0, .49857],
                        101: [0, .47534, 0, 0, .40053],
                        102: [.18906, .69141, 0, 0, .32626],
                        103: [.18906, .47534, 0, 0, .5037],
                        104: [.18906, .69141, 0, 0, .52126],
                        105: [0, .69141, 0, 0, .27899],
                        106: [0, .69141, 0, 0, .28088],
                        107: [0, .69141, 0, 0, .38946],
                        108: [0, .69141, 0, 0, .27953],
                        109: [0, .47534, 0, 0, .76676],
                        110: [0, .47534, 0, 0, .52666],
                        111: [0, .47534, 0, 0, .48885],
                        112: [.18906, .52396, 0, 0, .50046],
                        113: [.18906, .47534, 0, 0, .48912],
                        114: [0, .47534, 0, 0, .38919],
                        115: [0, .47534, 0, 0, .44266],
                        116: [0, .62119, 0, 0, .33301],
                        117: [0, .47534, 0, 0, .5172],
                        118: [0, .52396, 0, 0, .5118],
                        119: [0, .52396, 0, 0, .77351],
                        120: [.18906, .47534, 0, 0, .38865],
                        121: [.18906, .47534, 0, 0, .49884],
                        122: [.18906, .47534, 0, 0, .39054],
                        160: [0, 0, 0, 0, .25],
                        8216: [0, .69141, 0, 0, .21471],
                        8217: [0, .69141, 0, 0, .21471],
                        58112: [0, .62119, 0, 0, .49749],
                        58113: [0, .62119, 0, 0, .4983],
                        58114: [.18906, .69141, 0, 0, .33328],
                        58115: [.18906, .69141, 0, 0, .32923],
                        58116: [.18906, .47534, 0, 0, .50343],
                        58117: [0, .69141, 0, 0, .33301],
                        58118: [0, .62119, 0, 0, .33409],
                        58119: [0, .47534, 0, 0, .50073]
                    },
                    "Main-Bold": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, 0, 0, .35],
                        34: [0, .69444, 0, 0, .60278],
                        35: [.19444, .69444, 0, 0, .95833],
                        36: [.05556, .75, 0, 0, .575],
                        37: [.05556, .75, 0, 0, .95833],
                        38: [0, .69444, 0, 0, .89444],
                        39: [0, .69444, 0, 0, .31944],
                        40: [.25, .75, 0, 0, .44722],
                        41: [.25, .75, 0, 0, .44722],
                        42: [0, .75, 0, 0, .575],
                        43: [.13333, .63333, 0, 0, .89444],
                        44: [.19444, .15556, 0, 0, .31944],
                        45: [0, .44444, 0, 0, .38333],
                        46: [0, .15556, 0, 0, .31944],
                        47: [.25, .75, 0, 0, .575],
                        48: [0, .64444, 0, 0, .575],
                        49: [0, .64444, 0, 0, .575],
                        50: [0, .64444, 0, 0, .575],
                        51: [0, .64444, 0, 0, .575],
                        52: [0, .64444, 0, 0, .575],
                        53: [0, .64444, 0, 0, .575],
                        54: [0, .64444, 0, 0, .575],
                        55: [0, .64444, 0, 0, .575],
                        56: [0, .64444, 0, 0, .575],
                        57: [0, .64444, 0, 0, .575],
                        58: [0, .44444, 0, 0, .31944],
                        59: [.19444, .44444, 0, 0, .31944],
                        60: [.08556, .58556, 0, 0, .89444],
                        61: [-.10889, .39111, 0, 0, .89444],
                        62: [.08556, .58556, 0, 0, .89444],
                        63: [0, .69444, 0, 0, .54305],
                        64: [0, .69444, 0, 0, .89444],
                        65: [0, .68611, 0, 0, .86944],
                        66: [0, .68611, 0, 0, .81805],
                        67: [0, .68611, 0, 0, .83055],
                        68: [0, .68611, 0, 0, .88194],
                        69: [0, .68611, 0, 0, .75555],
                        70: [0, .68611, 0, 0, .72361],
                        71: [0, .68611, 0, 0, .90416],
                        72: [0, .68611, 0, 0, .9],
                        73: [0, .68611, 0, 0, .43611],
                        74: [0, .68611, 0, 0, .59444],
                        75: [0, .68611, 0, 0, .90138],
                        76: [0, .68611, 0, 0, .69166],
                        77: [0, .68611, 0, 0, 1.09166],
                        78: [0, .68611, 0, 0, .9],
                        79: [0, .68611, 0, 0, .86388],
                        80: [0, .68611, 0, 0, .78611],
                        81: [.19444, .68611, 0, 0, .86388],
                        82: [0, .68611, 0, 0, .8625],
                        83: [0, .68611, 0, 0, .63889],
                        84: [0, .68611, 0, 0, .8],
                        85: [0, .68611, 0, 0, .88472],
                        86: [0, .68611, .01597, 0, .86944],
                        87: [0, .68611, .01597, 0, 1.18888],
                        88: [0, .68611, 0, 0, .86944],
                        89: [0, .68611, .02875, 0, .86944],
                        90: [0, .68611, 0, 0, .70277],
                        91: [.25, .75, 0, 0, .31944],
                        92: [.25, .75, 0, 0, .575],
                        93: [.25, .75, 0, 0, .31944],
                        94: [0, .69444, 0, 0, .575],
                        95: [.31, .13444, .03194, 0, .575],
                        97: [0, .44444, 0, 0, .55902],
                        98: [0, .69444, 0, 0, .63889],
                        99: [0, .44444, 0, 0, .51111],
                        100: [0, .69444, 0, 0, .63889],
                        101: [0, .44444, 0, 0, .52708],
                        102: [0, .69444, .10903, 0, .35139],
                        103: [.19444, .44444, .01597, 0, .575],
                        104: [0, .69444, 0, 0, .63889],
                        105: [0, .69444, 0, 0, .31944],
                        106: [.19444, .69444, 0, 0, .35139],
                        107: [0, .69444, 0, 0, .60694],
                        108: [0, .69444, 0, 0, .31944],
                        109: [0, .44444, 0, 0, .95833],
                        110: [0, .44444, 0, 0, .63889],
                        111: [0, .44444, 0, 0, .575],
                        112: [.19444, .44444, 0, 0, .63889],
                        113: [.19444, .44444, 0, 0, .60694],
                        114: [0, .44444, 0, 0, .47361],
                        115: [0, .44444, 0, 0, .45361],
                        116: [0, .63492, 0, 0, .44722],
                        117: [0, .44444, 0, 0, .63889],
                        118: [0, .44444, .01597, 0, .60694],
                        119: [0, .44444, .01597, 0, .83055],
                        120: [0, .44444, 0, 0, .60694],
                        121: [.19444, .44444, .01597, 0, .60694],
                        122: [0, .44444, 0, 0, .51111],
                        123: [.25, .75, 0, 0, .575],
                        124: [.25, .75, 0, 0, .31944],
                        125: [.25, .75, 0, 0, .575],
                        126: [.35, .34444, 0, 0, .575],
                        160: [0, 0, 0, 0, .25],
                        163: [0, .69444, 0, 0, .86853],
                        168: [0, .69444, 0, 0, .575],
                        172: [0, .44444, 0, 0, .76666],
                        176: [0, .69444, 0, 0, .86944],
                        177: [.13333, .63333, 0, 0, .89444],
                        184: [.17014, 0, 0, 0, .51111],
                        198: [0, .68611, 0, 0, 1.04166],
                        215: [.13333, .63333, 0, 0, .89444],
                        216: [.04861, .73472, 0, 0, .89444],
                        223: [0, .69444, 0, 0, .59722],
                        230: [0, .44444, 0, 0, .83055],
                        247: [.13333, .63333, 0, 0, .89444],
                        248: [.09722, .54167, 0, 0, .575],
                        305: [0, .44444, 0, 0, .31944],
                        338: [0, .68611, 0, 0, 1.16944],
                        339: [0, .44444, 0, 0, .89444],
                        567: [.19444, .44444, 0, 0, .35139],
                        710: [0, .69444, 0, 0, .575],
                        711: [0, .63194, 0, 0, .575],
                        713: [0, .59611, 0, 0, .575],
                        714: [0, .69444, 0, 0, .575],
                        715: [0, .69444, 0, 0, .575],
                        728: [0, .69444, 0, 0, .575],
                        729: [0, .69444, 0, 0, .31944],
                        730: [0, .69444, 0, 0, .86944],
                        732: [0, .69444, 0, 0, .575],
                        733: [0, .69444, 0, 0, .575],
                        915: [0, .68611, 0, 0, .69166],
                        916: [0, .68611, 0, 0, .95833],
                        920: [0, .68611, 0, 0, .89444],
                        923: [0, .68611, 0, 0, .80555],
                        926: [0, .68611, 0, 0, .76666],
                        928: [0, .68611, 0, 0, .9],
                        931: [0, .68611, 0, 0, .83055],
                        933: [0, .68611, 0, 0, .89444],
                        934: [0, .68611, 0, 0, .83055],
                        936: [0, .68611, 0, 0, .89444],
                        937: [0, .68611, 0, 0, .83055],
                        8211: [0, .44444, .03194, 0, .575],
                        8212: [0, .44444, .03194, 0, 1.14999],
                        8216: [0, .69444, 0, 0, .31944],
                        8217: [0, .69444, 0, 0, .31944],
                        8220: [0, .69444, 0, 0, .60278],
                        8221: [0, .69444, 0, 0, .60278],
                        8224: [.19444, .69444, 0, 0, .51111],
                        8225: [.19444, .69444, 0, 0, .51111],
                        8242: [0, .55556, 0, 0, .34444],
                        8407: [0, .72444, .15486, 0, .575],
                        8463: [0, .69444, 0, 0, .66759],
                        8465: [0, .69444, 0, 0, .83055],
                        8467: [0, .69444, 0, 0, .47361],
                        8472: [.19444, .44444, 0, 0, .74027],
                        8476: [0, .69444, 0, 0, .83055],
                        8501: [0, .69444, 0, 0, .70277],
                        8592: [-.10889, .39111, 0, 0, 1.14999],
                        8593: [.19444, .69444, 0, 0, .575],
                        8594: [-.10889, .39111, 0, 0, 1.14999],
                        8595: [.19444, .69444, 0, 0, .575],
                        8596: [-.10889, .39111, 0, 0, 1.14999],
                        8597: [.25, .75, 0, 0, .575],
                        8598: [.19444, .69444, 0, 0, 1.14999],
                        8599: [.19444, .69444, 0, 0, 1.14999],
                        8600: [.19444, .69444, 0, 0, 1.14999],
                        8601: [.19444, .69444, 0, 0, 1.14999],
                        8636: [-.10889, .39111, 0, 0, 1.14999],
                        8637: [-.10889, .39111, 0, 0, 1.14999],
                        8640: [-.10889, .39111, 0, 0, 1.14999],
                        8641: [-.10889, .39111, 0, 0, 1.14999],
                        8656: [-.10889, .39111, 0, 0, 1.14999],
                        8657: [.19444, .69444, 0, 0, .70277],
                        8658: [-.10889, .39111, 0, 0, 1.14999],
                        8659: [.19444, .69444, 0, 0, .70277],
                        8660: [-.10889, .39111, 0, 0, 1.14999],
                        8661: [.25, .75, 0, 0, .70277],
                        8704: [0, .69444, 0, 0, .63889],
                        8706: [0, .69444, .06389, 0, .62847],
                        8707: [0, .69444, 0, 0, .63889],
                        8709: [.05556, .75, 0, 0, .575],
                        8711: [0, .68611, 0, 0, .95833],
                        8712: [.08556, .58556, 0, 0, .76666],
                        8715: [.08556, .58556, 0, 0, .76666],
                        8722: [.13333, .63333, 0, 0, .89444],
                        8723: [.13333, .63333, 0, 0, .89444],
                        8725: [.25, .75, 0, 0, .575],
                        8726: [.25, .75, 0, 0, .575],
                        8727: [-.02778, .47222, 0, 0, .575],
                        8728: [-.02639, .47361, 0, 0, .575],
                        8729: [-.02639, .47361, 0, 0, .575],
                        8730: [.18, .82, 0, 0, .95833],
                        8733: [0, .44444, 0, 0, .89444],
                        8734: [0, .44444, 0, 0, 1.14999],
                        8736: [0, .69224, 0, 0, .72222],
                        8739: [.25, .75, 0, 0, .31944],
                        8741: [.25, .75, 0, 0, .575],
                        8743: [0, .55556, 0, 0, .76666],
                        8744: [0, .55556, 0, 0, .76666],
                        8745: [0, .55556, 0, 0, .76666],
                        8746: [0, .55556, 0, 0, .76666],
                        8747: [.19444, .69444, .12778, 0, .56875],
                        8764: [-.10889, .39111, 0, 0, .89444],
                        8768: [.19444, .69444, 0, 0, .31944],
                        8771: [.00222, .50222, 0, 0, .89444],
                        8773: [.027, .638, 0, 0, .894],
                        8776: [.02444, .52444, 0, 0, .89444],
                        8781: [.00222, .50222, 0, 0, .89444],
                        8801: [.00222, .50222, 0, 0, .89444],
                        8804: [.19667, .69667, 0, 0, .89444],
                        8805: [.19667, .69667, 0, 0, .89444],
                        8810: [.08556, .58556, 0, 0, 1.14999],
                        8811: [.08556, .58556, 0, 0, 1.14999],
                        8826: [.08556, .58556, 0, 0, .89444],
                        8827: [.08556, .58556, 0, 0, .89444],
                        8834: [.08556, .58556, 0, 0, .89444],
                        8835: [.08556, .58556, 0, 0, .89444],
                        8838: [.19667, .69667, 0, 0, .89444],
                        8839: [.19667, .69667, 0, 0, .89444],
                        8846: [0, .55556, 0, 0, .76666],
                        8849: [.19667, .69667, 0, 0, .89444],
                        8850: [.19667, .69667, 0, 0, .89444],
                        8851: [0, .55556, 0, 0, .76666],
                        8852: [0, .55556, 0, 0, .76666],
                        8853: [.13333, .63333, 0, 0, .89444],
                        8854: [.13333, .63333, 0, 0, .89444],
                        8855: [.13333, .63333, 0, 0, .89444],
                        8856: [.13333, .63333, 0, 0, .89444],
                        8857: [.13333, .63333, 0, 0, .89444],
                        8866: [0, .69444, 0, 0, .70277],
                        8867: [0, .69444, 0, 0, .70277],
                        8868: [0, .69444, 0, 0, .89444],
                        8869: [0, .69444, 0, 0, .89444],
                        8900: [-.02639, .47361, 0, 0, .575],
                        8901: [-.02639, .47361, 0, 0, .31944],
                        8902: [-.02778, .47222, 0, 0, .575],
                        8968: [.25, .75, 0, 0, .51111],
                        8969: [.25, .75, 0, 0, .51111],
                        8970: [.25, .75, 0, 0, .51111],
                        8971: [.25, .75, 0, 0, .51111],
                        8994: [-.13889, .36111, 0, 0, 1.14999],
                        8995: [-.13889, .36111, 0, 0, 1.14999],
                        9651: [.19444, .69444, 0, 0, 1.02222],
                        9657: [-.02778, .47222, 0, 0, .575],
                        9661: [.19444, .69444, 0, 0, 1.02222],
                        9667: [-.02778, .47222, 0, 0, .575],
                        9711: [.19444, .69444, 0, 0, 1.14999],
                        9824: [.12963, .69444, 0, 0, .89444],
                        9825: [.12963, .69444, 0, 0, .89444],
                        9826: [.12963, .69444, 0, 0, .89444],
                        9827: [.12963, .69444, 0, 0, .89444],
                        9837: [0, .75, 0, 0, .44722],
                        9838: [.19444, .69444, 0, 0, .44722],
                        9839: [.19444, .69444, 0, 0, .44722],
                        10216: [.25, .75, 0, 0, .44722],
                        10217: [.25, .75, 0, 0, .44722],
                        10815: [0, .68611, 0, 0, .9],
                        10927: [.19667, .69667, 0, 0, .89444],
                        10928: [.19667, .69667, 0, 0, .89444],
                        57376: [.19444, .69444, 0, 0, 0]
                    },
                    "Main-BoldItalic": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, .11417, 0, .38611],
                        34: [0, .69444, .07939, 0, .62055],
                        35: [.19444, .69444, .06833, 0, .94444],
                        37: [.05556, .75, .12861, 0, .94444],
                        38: [0, .69444, .08528, 0, .88555],
                        39: [0, .69444, .12945, 0, .35555],
                        40: [.25, .75, .15806, 0, .47333],
                        41: [.25, .75, .03306, 0, .47333],
                        42: [0, .75, .14333, 0, .59111],
                        43: [.10333, .60333, .03306, 0, .88555],
                        44: [.19444, .14722, 0, 0, .35555],
                        45: [0, .44444, .02611, 0, .41444],
                        46: [0, .14722, 0, 0, .35555],
                        47: [.25, .75, .15806, 0, .59111],
                        48: [0, .64444, .13167, 0, .59111],
                        49: [0, .64444, .13167, 0, .59111],
                        50: [0, .64444, .13167, 0, .59111],
                        51: [0, .64444, .13167, 0, .59111],
                        52: [.19444, .64444, .13167, 0, .59111],
                        53: [0, .64444, .13167, 0, .59111],
                        54: [0, .64444, .13167, 0, .59111],
                        55: [.19444, .64444, .13167, 0, .59111],
                        56: [0, .64444, .13167, 0, .59111],
                        57: [0, .64444, .13167, 0, .59111],
                        58: [0, .44444, .06695, 0, .35555],
                        59: [.19444, .44444, .06695, 0, .35555],
                        61: [-.10889, .39111, .06833, 0, .88555],
                        63: [0, .69444, .11472, 0, .59111],
                        64: [0, .69444, .09208, 0, .88555],
                        65: [0, .68611, 0, 0, .86555],
                        66: [0, .68611, .0992, 0, .81666],
                        67: [0, .68611, .14208, 0, .82666],
                        68: [0, .68611, .09062, 0, .87555],
                        69: [0, .68611, .11431, 0, .75666],
                        70: [0, .68611, .12903, 0, .72722],
                        71: [0, .68611, .07347, 0, .89527],
                        72: [0, .68611, .17208, 0, .8961],
                        73: [0, .68611, .15681, 0, .47166],
                        74: [0, .68611, .145, 0, .61055],
                        75: [0, .68611, .14208, 0, .89499],
                        76: [0, .68611, 0, 0, .69777],
                        77: [0, .68611, .17208, 0, 1.07277],
                        78: [0, .68611, .17208, 0, .8961],
                        79: [0, .68611, .09062, 0, .85499],
                        80: [0, .68611, .0992, 0, .78721],
                        81: [.19444, .68611, .09062, 0, .85499],
                        82: [0, .68611, .02559, 0, .85944],
                        83: [0, .68611, .11264, 0, .64999],
                        84: [0, .68611, .12903, 0, .7961],
                        85: [0, .68611, .17208, 0, .88083],
                        86: [0, .68611, .18625, 0, .86555],
                        87: [0, .68611, .18625, 0, 1.15999],
                        88: [0, .68611, .15681, 0, .86555],
                        89: [0, .68611, .19803, 0, .86555],
                        90: [0, .68611, .14208, 0, .70888],
                        91: [.25, .75, .1875, 0, .35611],
                        93: [.25, .75, .09972, 0, .35611],
                        94: [0, .69444, .06709, 0, .59111],
                        95: [.31, .13444, .09811, 0, .59111],
                        97: [0, .44444, .09426, 0, .59111],
                        98: [0, .69444, .07861, 0, .53222],
                        99: [0, .44444, .05222, 0, .53222],
                        100: [0, .69444, .10861, 0, .59111],
                        101: [0, .44444, .085, 0, .53222],
                        102: [.19444, .69444, .21778, 0, .4],
                        103: [.19444, .44444, .105, 0, .53222],
                        104: [0, .69444, .09426, 0, .59111],
                        105: [0, .69326, .11387, 0, .35555],
                        106: [.19444, .69326, .1672, 0, .35555],
                        107: [0, .69444, .11111, 0, .53222],
                        108: [0, .69444, .10861, 0, .29666],
                        109: [0, .44444, .09426, 0, .94444],
                        110: [0, .44444, .09426, 0, .64999],
                        111: [0, .44444, .07861, 0, .59111],
                        112: [.19444, .44444, .07861, 0, .59111],
                        113: [.19444, .44444, .105, 0, .53222],
                        114: [0, .44444, .11111, 0, .50167],
                        115: [0, .44444, .08167, 0, .48694],
                        116: [0, .63492, .09639, 0, .385],
                        117: [0, .44444, .09426, 0, .62055],
                        118: [0, .44444, .11111, 0, .53222],
                        119: [0, .44444, .11111, 0, .76777],
                        120: [0, .44444, .12583, 0, .56055],
                        121: [.19444, .44444, .105, 0, .56166],
                        122: [0, .44444, .13889, 0, .49055],
                        126: [.35, .34444, .11472, 0, .59111],
                        160: [0, 0, 0, 0, .25],
                        168: [0, .69444, .11473, 0, .59111],
                        176: [0, .69444, 0, 0, .94888],
                        184: [.17014, 0, 0, 0, .53222],
                        198: [0, .68611, .11431, 0, 1.02277],
                        216: [.04861, .73472, .09062, 0, .88555],
                        223: [.19444, .69444, .09736, 0, .665],
                        230: [0, .44444, .085, 0, .82666],
                        248: [.09722, .54167, .09458, 0, .59111],
                        305: [0, .44444, .09426, 0, .35555],
                        338: [0, .68611, .11431, 0, 1.14054],
                        339: [0, .44444, .085, 0, .82666],
                        567: [.19444, .44444, .04611, 0, .385],
                        710: [0, .69444, .06709, 0, .59111],
                        711: [0, .63194, .08271, 0, .59111],
                        713: [0, .59444, .10444, 0, .59111],
                        714: [0, .69444, .08528, 0, .59111],
                        715: [0, .69444, 0, 0, .59111],
                        728: [0, .69444, .10333, 0, .59111],
                        729: [0, .69444, .12945, 0, .35555],
                        730: [0, .69444, 0, 0, .94888],
                        732: [0, .69444, .11472, 0, .59111],
                        733: [0, .69444, .11472, 0, .59111],
                        915: [0, .68611, .12903, 0, .69777],
                        916: [0, .68611, 0, 0, .94444],
                        920: [0, .68611, .09062, 0, .88555],
                        923: [0, .68611, 0, 0, .80666],
                        926: [0, .68611, .15092, 0, .76777],
                        928: [0, .68611, .17208, 0, .8961],
                        931: [0, .68611, .11431, 0, .82666],
                        933: [0, .68611, .10778, 0, .88555],
                        934: [0, .68611, .05632, 0, .82666],
                        936: [0, .68611, .10778, 0, .88555],
                        937: [0, .68611, .0992, 0, .82666],
                        8211: [0, .44444, .09811, 0, .59111],
                        8212: [0, .44444, .09811, 0, 1.18221],
                        8216: [0, .69444, .12945, 0, .35555],
                        8217: [0, .69444, .12945, 0, .35555],
                        8220: [0, .69444, .16772, 0, .62055],
                        8221: [0, .69444, .07939, 0, .62055]
                    },
                    "Main-Italic": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, .12417, 0, .30667],
                        34: [0, .69444, .06961, 0, .51444],
                        35: [.19444, .69444, .06616, 0, .81777],
                        37: [.05556, .75, .13639, 0, .81777],
                        38: [0, .69444, .09694, 0, .76666],
                        39: [0, .69444, .12417, 0, .30667],
                        40: [.25, .75, .16194, 0, .40889],
                        41: [.25, .75, .03694, 0, .40889],
                        42: [0, .75, .14917, 0, .51111],
                        43: [.05667, .56167, .03694, 0, .76666],
                        44: [.19444, .10556, 0, 0, .30667],
                        45: [0, .43056, .02826, 0, .35778],
                        46: [0, .10556, 0, 0, .30667],
                        47: [.25, .75, .16194, 0, .51111],
                        48: [0, .64444, .13556, 0, .51111],
                        49: [0, .64444, .13556, 0, .51111],
                        50: [0, .64444, .13556, 0, .51111],
                        51: [0, .64444, .13556, 0, .51111],
                        52: [.19444, .64444, .13556, 0, .51111],
                        53: [0, .64444, .13556, 0, .51111],
                        54: [0, .64444, .13556, 0, .51111],
                        55: [.19444, .64444, .13556, 0, .51111],
                        56: [0, .64444, .13556, 0, .51111],
                        57: [0, .64444, .13556, 0, .51111],
                        58: [0, .43056, .0582, 0, .30667],
                        59: [.19444, .43056, .0582, 0, .30667],
                        61: [-.13313, .36687, .06616, 0, .76666],
                        63: [0, .69444, .1225, 0, .51111],
                        64: [0, .69444, .09597, 0, .76666],
                        65: [0, .68333, 0, 0, .74333],
                        66: [0, .68333, .10257, 0, .70389],
                        67: [0, .68333, .14528, 0, .71555],
                        68: [0, .68333, .09403, 0, .755],
                        69: [0, .68333, .12028, 0, .67833],
                        70: [0, .68333, .13305, 0, .65277],
                        71: [0, .68333, .08722, 0, .77361],
                        72: [0, .68333, .16389, 0, .74333],
                        73: [0, .68333, .15806, 0, .38555],
                        74: [0, .68333, .14028, 0, .525],
                        75: [0, .68333, .14528, 0, .76888],
                        76: [0, .68333, 0, 0, .62722],
                        77: [0, .68333, .16389, 0, .89666],
                        78: [0, .68333, .16389, 0, .74333],
                        79: [0, .68333, .09403, 0, .76666],
                        80: [0, .68333, .10257, 0, .67833],
                        81: [.19444, .68333, .09403, 0, .76666],
                        82: [0, .68333, .03868, 0, .72944],
                        83: [0, .68333, .11972, 0, .56222],
                        84: [0, .68333, .13305, 0, .71555],
                        85: [0, .68333, .16389, 0, .74333],
                        86: [0, .68333, .18361, 0, .74333],
                        87: [0, .68333, .18361, 0, .99888],
                        88: [0, .68333, .15806, 0, .74333],
                        89: [0, .68333, .19383, 0, .74333],
                        90: [0, .68333, .14528, 0, .61333],
                        91: [.25, .75, .1875, 0, .30667],
                        93: [.25, .75, .10528, 0, .30667],
                        94: [0, .69444, .06646, 0, .51111],
                        95: [.31, .12056, .09208, 0, .51111],
                        97: [0, .43056, .07671, 0, .51111],
                        98: [0, .69444, .06312, 0, .46],
                        99: [0, .43056, .05653, 0, .46],
                        100: [0, .69444, .10333, 0, .51111],
                        101: [0, .43056, .07514, 0, .46],
                        102: [.19444, .69444, .21194, 0, .30667],
                        103: [.19444, .43056, .08847, 0, .46],
                        104: [0, .69444, .07671, 0, .51111],
                        105: [0, .65536, .1019, 0, .30667],
                        106: [.19444, .65536, .14467, 0, .30667],
                        107: [0, .69444, .10764, 0, .46],
                        108: [0, .69444, .10333, 0, .25555],
                        109: [0, .43056, .07671, 0, .81777],
                        110: [0, .43056, .07671, 0, .56222],
                        111: [0, .43056, .06312, 0, .51111],
                        112: [.19444, .43056, .06312, 0, .51111],
                        113: [.19444, .43056, .08847, 0, .46],
                        114: [0, .43056, .10764, 0, .42166],
                        115: [0, .43056, .08208, 0, .40889],
                        116: [0, .61508, .09486, 0, .33222],
                        117: [0, .43056, .07671, 0, .53666],
                        118: [0, .43056, .10764, 0, .46],
                        119: [0, .43056, .10764, 0, .66444],
                        120: [0, .43056, .12042, 0, .46389],
                        121: [.19444, .43056, .08847, 0, .48555],
                        122: [0, .43056, .12292, 0, .40889],
                        126: [.35, .31786, .11585, 0, .51111],
                        160: [0, 0, 0, 0, .25],
                        168: [0, .66786, .10474, 0, .51111],
                        176: [0, .69444, 0, 0, .83129],
                        184: [.17014, 0, 0, 0, .46],
                        198: [0, .68333, .12028, 0, .88277],
                        216: [.04861, .73194, .09403, 0, .76666],
                        223: [.19444, .69444, .10514, 0, .53666],
                        230: [0, .43056, .07514, 0, .71555],
                        248: [.09722, .52778, .09194, 0, .51111],
                        338: [0, .68333, .12028, 0, .98499],
                        339: [0, .43056, .07514, 0, .71555],
                        710: [0, .69444, .06646, 0, .51111],
                        711: [0, .62847, .08295, 0, .51111],
                        713: [0, .56167, .10333, 0, .51111],
                        714: [0, .69444, .09694, 0, .51111],
                        715: [0, .69444, 0, 0, .51111],
                        728: [0, .69444, .10806, 0, .51111],
                        729: [0, .66786, .11752, 0, .30667],
                        730: [0, .69444, 0, 0, .83129],
                        732: [0, .66786, .11585, 0, .51111],
                        733: [0, .69444, .1225, 0, .51111],
                        915: [0, .68333, .13305, 0, .62722],
                        916: [0, .68333, 0, 0, .81777],
                        920: [0, .68333, .09403, 0, .76666],
                        923: [0, .68333, 0, 0, .69222],
                        926: [0, .68333, .15294, 0, .66444],
                        928: [0, .68333, .16389, 0, .74333],
                        931: [0, .68333, .12028, 0, .71555],
                        933: [0, .68333, .11111, 0, .76666],
                        934: [0, .68333, .05986, 0, .71555],
                        936: [0, .68333, .11111, 0, .76666],
                        937: [0, .68333, .10257, 0, .71555],
                        8211: [0, .43056, .09208, 0, .51111],
                        8212: [0, .43056, .09208, 0, 1.02222],
                        8216: [0, .69444, .12417, 0, .30667],
                        8217: [0, .69444, .12417, 0, .30667],
                        8220: [0, .69444, .1685, 0, .51444],
                        8221: [0, .69444, .06961, 0, .51444],
                        8463: [0, .68889, 0, 0, .54028]
                    },
                    "Main-Regular": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, 0, 0, .27778],
                        34: [0, .69444, 0, 0, .5],
                        35: [.19444, .69444, 0, 0, .83334],
                        36: [.05556, .75, 0, 0, .5],
                        37: [.05556, .75, 0, 0, .83334],
                        38: [0, .69444, 0, 0, .77778],
                        39: [0, .69444, 0, 0, .27778],
                        40: [.25, .75, 0, 0, .38889],
                        41: [.25, .75, 0, 0, .38889],
                        42: [0, .75, 0, 0, .5],
                        43: [.08333, .58333, 0, 0, .77778],
                        44: [.19444, .10556, 0, 0, .27778],
                        45: [0, .43056, 0, 0, .33333],
                        46: [0, .10556, 0, 0, .27778],
                        47: [.25, .75, 0, 0, .5],
                        48: [0, .64444, 0, 0, .5],
                        49: [0, .64444, 0, 0, .5],
                        50: [0, .64444, 0, 0, .5],
                        51: [0, .64444, 0, 0, .5],
                        52: [0, .64444, 0, 0, .5],
                        53: [0, .64444, 0, 0, .5],
                        54: [0, .64444, 0, 0, .5],
                        55: [0, .64444, 0, 0, .5],
                        56: [0, .64444, 0, 0, .5],
                        57: [0, .64444, 0, 0, .5],
                        58: [0, .43056, 0, 0, .27778],
                        59: [.19444, .43056, 0, 0, .27778],
                        60: [.0391, .5391, 0, 0, .77778],
                        61: [-.13313, .36687, 0, 0, .77778],
                        62: [.0391, .5391, 0, 0, .77778],
                        63: [0, .69444, 0, 0, .47222],
                        64: [0, .69444, 0, 0, .77778],
                        65: [0, .68333, 0, 0, .75],
                        66: [0, .68333, 0, 0, .70834],
                        67: [0, .68333, 0, 0, .72222],
                        68: [0, .68333, 0, 0, .76389],
                        69: [0, .68333, 0, 0, .68056],
                        70: [0, .68333, 0, 0, .65278],
                        71: [0, .68333, 0, 0, .78472],
                        72: [0, .68333, 0, 0, .75],
                        73: [0, .68333, 0, 0, .36111],
                        74: [0, .68333, 0, 0, .51389],
                        75: [0, .68333, 0, 0, .77778],
                        76: [0, .68333, 0, 0, .625],
                        77: [0, .68333, 0, 0, .91667],
                        78: [0, .68333, 0, 0, .75],
                        79: [0, .68333, 0, 0, .77778],
                        80: [0, .68333, 0, 0, .68056],
                        81: [.19444, .68333, 0, 0, .77778],
                        82: [0, .68333, 0, 0, .73611],
                        83: [0, .68333, 0, 0, .55556],
                        84: [0, .68333, 0, 0, .72222],
                        85: [0, .68333, 0, 0, .75],
                        86: [0, .68333, .01389, 0, .75],
                        87: [0, .68333, .01389, 0, 1.02778],
                        88: [0, .68333, 0, 0, .75],
                        89: [0, .68333, .025, 0, .75],
                        90: [0, .68333, 0, 0, .61111],
                        91: [.25, .75, 0, 0, .27778],
                        92: [.25, .75, 0, 0, .5],
                        93: [.25, .75, 0, 0, .27778],
                        94: [0, .69444, 0, 0, .5],
                        95: [.31, .12056, .02778, 0, .5],
                        97: [0, .43056, 0, 0, .5],
                        98: [0, .69444, 0, 0, .55556],
                        99: [0, .43056, 0, 0, .44445],
                        100: [0, .69444, 0, 0, .55556],
                        101: [0, .43056, 0, 0, .44445],
                        102: [0, .69444, .07778, 0, .30556],
                        103: [.19444, .43056, .01389, 0, .5],
                        104: [0, .69444, 0, 0, .55556],
                        105: [0, .66786, 0, 0, .27778],
                        106: [.19444, .66786, 0, 0, .30556],
                        107: [0, .69444, 0, 0, .52778],
                        108: [0, .69444, 0, 0, .27778],
                        109: [0, .43056, 0, 0, .83334],
                        110: [0, .43056, 0, 0, .55556],
                        111: [0, .43056, 0, 0, .5],
                        112: [.19444, .43056, 0, 0, .55556],
                        113: [.19444, .43056, 0, 0, .52778],
                        114: [0, .43056, 0, 0, .39167],
                        115: [0, .43056, 0, 0, .39445],
                        116: [0, .61508, 0, 0, .38889],
                        117: [0, .43056, 0, 0, .55556],
                        118: [0, .43056, .01389, 0, .52778],
                        119: [0, .43056, .01389, 0, .72222],
                        120: [0, .43056, 0, 0, .52778],
                        121: [.19444, .43056, .01389, 0, .52778],
                        122: [0, .43056, 0, 0, .44445],
                        123: [.25, .75, 0, 0, .5],
                        124: [.25, .75, 0, 0, .27778],
                        125: [.25, .75, 0, 0, .5],
                        126: [.35, .31786, 0, 0, .5],
                        160: [0, 0, 0, 0, .25],
                        163: [0, .69444, 0, 0, .76909],
                        167: [.19444, .69444, 0, 0, .44445],
                        168: [0, .66786, 0, 0, .5],
                        172: [0, .43056, 0, 0, .66667],
                        176: [0, .69444, 0, 0, .75],
                        177: [.08333, .58333, 0, 0, .77778],
                        182: [.19444, .69444, 0, 0, .61111],
                        184: [.17014, 0, 0, 0, .44445],
                        198: [0, .68333, 0, 0, .90278],
                        215: [.08333, .58333, 0, 0, .77778],
                        216: [.04861, .73194, 0, 0, .77778],
                        223: [0, .69444, 0, 0, .5],
                        230: [0, .43056, 0, 0, .72222],
                        247: [.08333, .58333, 0, 0, .77778],
                        248: [.09722, .52778, 0, 0, .5],
                        305: [0, .43056, 0, 0, .27778],
                        338: [0, .68333, 0, 0, 1.01389],
                        339: [0, .43056, 0, 0, .77778],
                        567: [.19444, .43056, 0, 0, .30556],
                        710: [0, .69444, 0, 0, .5],
                        711: [0, .62847, 0, 0, .5],
                        713: [0, .56778, 0, 0, .5],
                        714: [0, .69444, 0, 0, .5],
                        715: [0, .69444, 0, 0, .5],
                        728: [0, .69444, 0, 0, .5],
                        729: [0, .66786, 0, 0, .27778],
                        730: [0, .69444, 0, 0, .75],
                        732: [0, .66786, 0, 0, .5],
                        733: [0, .69444, 0, 0, .5],
                        915: [0, .68333, 0, 0, .625],
                        916: [0, .68333, 0, 0, .83334],
                        920: [0, .68333, 0, 0, .77778],
                        923: [0, .68333, 0, 0, .69445],
                        926: [0, .68333, 0, 0, .66667],
                        928: [0, .68333, 0, 0, .75],
                        931: [0, .68333, 0, 0, .72222],
                        933: [0, .68333, 0, 0, .77778],
                        934: [0, .68333, 0, 0, .72222],
                        936: [0, .68333, 0, 0, .77778],
                        937: [0, .68333, 0, 0, .72222],
                        8211: [0, .43056, .02778, 0, .5],
                        8212: [0, .43056, .02778, 0, 1],
                        8216: [0, .69444, 0, 0, .27778],
                        8217: [0, .69444, 0, 0, .27778],
                        8220: [0, .69444, 0, 0, .5],
                        8221: [0, .69444, 0, 0, .5],
                        8224: [.19444, .69444, 0, 0, .44445],
                        8225: [.19444, .69444, 0, 0, .44445],
                        8230: [0, .123, 0, 0, 1.172],
                        8242: [0, .55556, 0, 0, .275],
                        8407: [0, .71444, .15382, 0, .5],
                        8463: [0, .68889, 0, 0, .54028],
                        8465: [0, .69444, 0, 0, .72222],
                        8467: [0, .69444, 0, .11111, .41667],
                        8472: [.19444, .43056, 0, .11111, .63646],
                        8476: [0, .69444, 0, 0, .72222],
                        8501: [0, .69444, 0, 0, .61111],
                        8592: [-.13313, .36687, 0, 0, 1],
                        8593: [.19444, .69444, 0, 0, .5],
                        8594: [-.13313, .36687, 0, 0, 1],
                        8595: [.19444, .69444, 0, 0, .5],
                        8596: [-.13313, .36687, 0, 0, 1],
                        8597: [.25, .75, 0, 0, .5],
                        8598: [.19444, .69444, 0, 0, 1],
                        8599: [.19444, .69444, 0, 0, 1],
                        8600: [.19444, .69444, 0, 0, 1],
                        8601: [.19444, .69444, 0, 0, 1],
                        8614: [.011, .511, 0, 0, 1],
                        8617: [.011, .511, 0, 0, 1.126],
                        8618: [.011, .511, 0, 0, 1.126],
                        8636: [-.13313, .36687, 0, 0, 1],
                        8637: [-.13313, .36687, 0, 0, 1],
                        8640: [-.13313, .36687, 0, 0, 1],
                        8641: [-.13313, .36687, 0, 0, 1],
                        8652: [.011, .671, 0, 0, 1],
                        8656: [-.13313, .36687, 0, 0, 1],
                        8657: [.19444, .69444, 0, 0, .61111],
                        8658: [-.13313, .36687, 0, 0, 1],
                        8659: [.19444, .69444, 0, 0, .61111],
                        8660: [-.13313, .36687, 0, 0, 1],
                        8661: [.25, .75, 0, 0, .61111],
                        8704: [0, .69444, 0, 0, .55556],
                        8706: [0, .69444, .05556, .08334, .5309],
                        8707: [0, .69444, 0, 0, .55556],
                        8709: [.05556, .75, 0, 0, .5],
                        8711: [0, .68333, 0, 0, .83334],
                        8712: [.0391, .5391, 0, 0, .66667],
                        8715: [.0391, .5391, 0, 0, .66667],
                        8722: [.08333, .58333, 0, 0, .77778],
                        8723: [.08333, .58333, 0, 0, .77778],
                        8725: [.25, .75, 0, 0, .5],
                        8726: [.25, .75, 0, 0, .5],
                        8727: [-.03472, .46528, 0, 0, .5],
                        8728: [-.05555, .44445, 0, 0, .5],
                        8729: [-.05555, .44445, 0, 0, .5],
                        8730: [.2, .8, 0, 0, .83334],
                        8733: [0, .43056, 0, 0, .77778],
                        8734: [0, .43056, 0, 0, 1],
                        8736: [0, .69224, 0, 0, .72222],
                        8739: [.25, .75, 0, 0, .27778],
                        8741: [.25, .75, 0, 0, .5],
                        8743: [0, .55556, 0, 0, .66667],
                        8744: [0, .55556, 0, 0, .66667],
                        8745: [0, .55556, 0, 0, .66667],
                        8746: [0, .55556, 0, 0, .66667],
                        8747: [.19444, .69444, .11111, 0, .41667],
                        8764: [-.13313, .36687, 0, 0, .77778],
                        8768: [.19444, .69444, 0, 0, .27778],
                        8771: [-.03625, .46375, 0, 0, .77778],
                        8773: [-.022, .589, 0, 0, .778],
                        8776: [-.01688, .48312, 0, 0, .77778],
                        8781: [-.03625, .46375, 0, 0, .77778],
                        8784: [-.133, .673, 0, 0, .778],
                        8801: [-.03625, .46375, 0, 0, .77778],
                        8804: [.13597, .63597, 0, 0, .77778],
                        8805: [.13597, .63597, 0, 0, .77778],
                        8810: [.0391, .5391, 0, 0, 1],
                        8811: [.0391, .5391, 0, 0, 1],
                        8826: [.0391, .5391, 0, 0, .77778],
                        8827: [.0391, .5391, 0, 0, .77778],
                        8834: [.0391, .5391, 0, 0, .77778],
                        8835: [.0391, .5391, 0, 0, .77778],
                        8838: [.13597, .63597, 0, 0, .77778],
                        8839: [.13597, .63597, 0, 0, .77778],
                        8846: [0, .55556, 0, 0, .66667],
                        8849: [.13597, .63597, 0, 0, .77778],
                        8850: [.13597, .63597, 0, 0, .77778],
                        8851: [0, .55556, 0, 0, .66667],
                        8852: [0, .55556, 0, 0, .66667],
                        8853: [.08333, .58333, 0, 0, .77778],
                        8854: [.08333, .58333, 0, 0, .77778],
                        8855: [.08333, .58333, 0, 0, .77778],
                        8856: [.08333, .58333, 0, 0, .77778],
                        8857: [.08333, .58333, 0, 0, .77778],
                        8866: [0, .69444, 0, 0, .61111],
                        8867: [0, .69444, 0, 0, .61111],
                        8868: [0, .69444, 0, 0, .77778],
                        8869: [0, .69444, 0, 0, .77778],
                        8872: [.249, .75, 0, 0, .867],
                        8900: [-.05555, .44445, 0, 0, .5],
                        8901: [-.05555, .44445, 0, 0, .27778],
                        8902: [-.03472, .46528, 0, 0, .5],
                        8904: [.005, .505, 0, 0, .9],
                        8942: [.03, .903, 0, 0, .278],
                        8943: [-.19, .313, 0, 0, 1.172],
                        8945: [-.1, .823, 0, 0, 1.282],
                        8968: [.25, .75, 0, 0, .44445],
                        8969: [.25, .75, 0, 0, .44445],
                        8970: [.25, .75, 0, 0, .44445],
                        8971: [.25, .75, 0, 0, .44445],
                        8994: [-.14236, .35764, 0, 0, 1],
                        8995: [-.14236, .35764, 0, 0, 1],
                        9136: [.244, .744, 0, 0, .412],
                        9137: [.244, .745, 0, 0, .412],
                        9651: [.19444, .69444, 0, 0, .88889],
                        9657: [-.03472, .46528, 0, 0, .5],
                        9661: [.19444, .69444, 0, 0, .88889],
                        9667: [-.03472, .46528, 0, 0, .5],
                        9711: [.19444, .69444, 0, 0, 1],
                        9824: [.12963, .69444, 0, 0, .77778],
                        9825: [.12963, .69444, 0, 0, .77778],
                        9826: [.12963, .69444, 0, 0, .77778],
                        9827: [.12963, .69444, 0, 0, .77778],
                        9837: [0, .75, 0, 0, .38889],
                        9838: [.19444, .69444, 0, 0, .38889],
                        9839: [.19444, .69444, 0, 0, .38889],
                        10216: [.25, .75, 0, 0, .38889],
                        10217: [.25, .75, 0, 0, .38889],
                        10222: [.244, .744, 0, 0, .412],
                        10223: [.244, .745, 0, 0, .412],
                        10229: [.011, .511, 0, 0, 1.609],
                        10230: [.011, .511, 0, 0, 1.638],
                        10231: [.011, .511, 0, 0, 1.859],
                        10232: [.024, .525, 0, 0, 1.609],
                        10233: [.024, .525, 0, 0, 1.638],
                        10234: [.024, .525, 0, 0, 1.858],
                        10236: [.011, .511, 0, 0, 1.638],
                        10815: [0, .68333, 0, 0, .75],
                        10927: [.13597, .63597, 0, 0, .77778],
                        10928: [.13597, .63597, 0, 0, .77778],
                        57376: [.19444, .69444, 0, 0, 0]
                    },
                    "Math-BoldItalic": {
                        32: [0, 0, 0, 0, .25],
                        48: [0, .44444, 0, 0, .575],
                        49: [0, .44444, 0, 0, .575],
                        50: [0, .44444, 0, 0, .575],
                        51: [.19444, .44444, 0, 0, .575],
                        52: [.19444, .44444, 0, 0, .575],
                        53: [.19444, .44444, 0, 0, .575],
                        54: [0, .64444, 0, 0, .575],
                        55: [.19444, .44444, 0, 0, .575],
                        56: [0, .64444, 0, 0, .575],
                        57: [.19444, .44444, 0, 0, .575],
                        65: [0, .68611, 0, 0, .86944],
                        66: [0, .68611, .04835, 0, .8664],
                        67: [0, .68611, .06979, 0, .81694],
                        68: [0, .68611, .03194, 0, .93812],
                        69: [0, .68611, .05451, 0, .81007],
                        70: [0, .68611, .15972, 0, .68889],
                        71: [0, .68611, 0, 0, .88673],
                        72: [0, .68611, .08229, 0, .98229],
                        73: [0, .68611, .07778, 0, .51111],
                        74: [0, .68611, .10069, 0, .63125],
                        75: [0, .68611, .06979, 0, .97118],
                        76: [0, .68611, 0, 0, .75555],
                        77: [0, .68611, .11424, 0, 1.14201],
                        78: [0, .68611, .11424, 0, .95034],
                        79: [0, .68611, .03194, 0, .83666],
                        80: [0, .68611, .15972, 0, .72309],
                        81: [.19444, .68611, 0, 0, .86861],
                        82: [0, .68611, .00421, 0, .87235],
                        83: [0, .68611, .05382, 0, .69271],
                        84: [0, .68611, .15972, 0, .63663],
                        85: [0, .68611, .11424, 0, .80027],
                        86: [0, .68611, .25555, 0, .67778],
                        87: [0, .68611, .15972, 0, 1.09305],
                        88: [0, .68611, .07778, 0, .94722],
                        89: [0, .68611, .25555, 0, .67458],
                        90: [0, .68611, .06979, 0, .77257],
                        97: [0, .44444, 0, 0, .63287],
                        98: [0, .69444, 0, 0, .52083],
                        99: [0, .44444, 0, 0, .51342],
                        100: [0, .69444, 0, 0, .60972],
                        101: [0, .44444, 0, 0, .55361],
                        102: [.19444, .69444, .11042, 0, .56806],
                        103: [.19444, .44444, .03704, 0, .5449],
                        104: [0, .69444, 0, 0, .66759],
                        105: [0, .69326, 0, 0, .4048],
                        106: [.19444, .69326, .0622, 0, .47083],
                        107: [0, .69444, .01852, 0, .6037],
                        108: [0, .69444, .0088, 0, .34815],
                        109: [0, .44444, 0, 0, 1.0324],
                        110: [0, .44444, 0, 0, .71296],
                        111: [0, .44444, 0, 0, .58472],
                        112: [.19444, .44444, 0, 0, .60092],
                        113: [.19444, .44444, .03704, 0, .54213],
                        114: [0, .44444, .03194, 0, .5287],
                        115: [0, .44444, 0, 0, .53125],
                        116: [0, .63492, 0, 0, .41528],
                        117: [0, .44444, 0, 0, .68102],
                        118: [0, .44444, .03704, 0, .56666],
                        119: [0, .44444, .02778, 0, .83148],
                        120: [0, .44444, 0, 0, .65903],
                        121: [.19444, .44444, .03704, 0, .59028],
                        122: [0, .44444, .04213, 0, .55509],
                        160: [0, 0, 0, 0, .25],
                        915: [0, .68611, .15972, 0, .65694],
                        916: [0, .68611, 0, 0, .95833],
                        920: [0, .68611, .03194, 0, .86722],
                        923: [0, .68611, 0, 0, .80555],
                        926: [0, .68611, .07458, 0, .84125],
                        928: [0, .68611, .08229, 0, .98229],
                        931: [0, .68611, .05451, 0, .88507],
                        933: [0, .68611, .15972, 0, .67083],
                        934: [0, .68611, 0, 0, .76666],
                        936: [0, .68611, .11653, 0, .71402],
                        937: [0, .68611, .04835, 0, .8789],
                        945: [0, .44444, 0, 0, .76064],
                        946: [.19444, .69444, .03403, 0, .65972],
                        947: [.19444, .44444, .06389, 0, .59003],
                        948: [0, .69444, .03819, 0, .52222],
                        949: [0, .44444, 0, 0, .52882],
                        950: [.19444, .69444, .06215, 0, .50833],
                        951: [.19444, .44444, .03704, 0, .6],
                        952: [0, .69444, .03194, 0, .5618],
                        953: [0, .44444, 0, 0, .41204],
                        954: [0, .44444, 0, 0, .66759],
                        955: [0, .69444, 0, 0, .67083],
                        956: [.19444, .44444, 0, 0, .70787],
                        957: [0, .44444, .06898, 0, .57685],
                        958: [.19444, .69444, .03021, 0, .50833],
                        959: [0, .44444, 0, 0, .58472],
                        960: [0, .44444, .03704, 0, .68241],
                        961: [.19444, .44444, 0, 0, .6118],
                        962: [.09722, .44444, .07917, 0, .42361],
                        963: [0, .44444, .03704, 0, .68588],
                        964: [0, .44444, .13472, 0, .52083],
                        965: [0, .44444, .03704, 0, .63055],
                        966: [.19444, .44444, 0, 0, .74722],
                        967: [.19444, .44444, 0, 0, .71805],
                        968: [.19444, .69444, .03704, 0, .75833],
                        969: [0, .44444, .03704, 0, .71782],
                        977: [0, .69444, 0, 0, .69155],
                        981: [.19444, .69444, 0, 0, .7125],
                        982: [0, .44444, .03194, 0, .975],
                        1009: [.19444, .44444, 0, 0, .6118],
                        1013: [0, .44444, 0, 0, .48333],
                        57649: [0, .44444, 0, 0, .39352],
                        57911: [.19444, .44444, 0, 0, .43889]
                    },
                    "Math-Italic": {
                        32: [0, 0, 0, 0, .25],
                        48: [0, .43056, 0, 0, .5],
                        49: [0, .43056, 0, 0, .5],
                        50: [0, .43056, 0, 0, .5],
                        51: [.19444, .43056, 0, 0, .5],
                        52: [.19444, .43056, 0, 0, .5],
                        53: [.19444, .43056, 0, 0, .5],
                        54: [0, .64444, 0, 0, .5],
                        55: [.19444, .43056, 0, 0, .5],
                        56: [0, .64444, 0, 0, .5],
                        57: [.19444, .43056, 0, 0, .5],
                        65: [0, .68333, 0, .13889, .75],
                        66: [0, .68333, .05017, .08334, .75851],
                        67: [0, .68333, .07153, .08334, .71472],
                        68: [0, .68333, .02778, .05556, .82792],
                        69: [0, .68333, .05764, .08334, .7382],
                        70: [0, .68333, .13889, .08334, .64306],
                        71: [0, .68333, 0, .08334, .78625],
                        72: [0, .68333, .08125, .05556, .83125],
                        73: [0, .68333, .07847, .11111, .43958],
                        74: [0, .68333, .09618, .16667, .55451],
                        75: [0, .68333, .07153, .05556, .84931],
                        76: [0, .68333, 0, .02778, .68056],
                        77: [0, .68333, .10903, .08334, .97014],
                        78: [0, .68333, .10903, .08334, .80347],
                        79: [0, .68333, .02778, .08334, .76278],
                        80: [0, .68333, .13889, .08334, .64201],
                        81: [.19444, .68333, 0, .08334, .79056],
                        82: [0, .68333, .00773, .08334, .75929],
                        83: [0, .68333, .05764, .08334, .6132],
                        84: [0, .68333, .13889, .08334, .58438],
                        85: [0, .68333, .10903, .02778, .68278],
                        86: [0, .68333, .22222, 0, .58333],
                        87: [0, .68333, .13889, 0, .94445],
                        88: [0, .68333, .07847, .08334, .82847],
                        89: [0, .68333, .22222, 0, .58056],
                        90: [0, .68333, .07153, .08334, .68264],
                        97: [0, .43056, 0, 0, .52859],
                        98: [0, .69444, 0, 0, .42917],
                        99: [0, .43056, 0, .05556, .43276],
                        100: [0, .69444, 0, .16667, .52049],
                        101: [0, .43056, 0, .05556, .46563],
                        102: [.19444, .69444, .10764, .16667, .48959],
                        103: [.19444, .43056, .03588, .02778, .47697],
                        104: [0, .69444, 0, 0, .57616],
                        105: [0, .65952, 0, 0, .34451],
                        106: [.19444, .65952, .05724, 0, .41181],
                        107: [0, .69444, .03148, 0, .5206],
                        108: [0, .69444, .01968, .08334, .29838],
                        109: [0, .43056, 0, 0, .87801],
                        110: [0, .43056, 0, 0, .60023],
                        111: [0, .43056, 0, .05556, .48472],
                        112: [.19444, .43056, 0, .08334, .50313],
                        113: [.19444, .43056, .03588, .08334, .44641],
                        114: [0, .43056, .02778, .05556, .45116],
                        115: [0, .43056, 0, .05556, .46875],
                        116: [0, .61508, 0, .08334, .36111],
                        117: [0, .43056, 0, .02778, .57246],
                        118: [0, .43056, .03588, .02778, .48472],
                        119: [0, .43056, .02691, .08334, .71592],
                        120: [0, .43056, 0, .02778, .57153],
                        121: [.19444, .43056, .03588, .05556, .49028],
                        122: [0, .43056, .04398, .05556, .46505],
                        160: [0, 0, 0, 0, .25],
                        915: [0, .68333, .13889, .08334, .61528],
                        916: [0, .68333, 0, .16667, .83334],
                        920: [0, .68333, .02778, .08334, .76278],
                        923: [0, .68333, 0, .16667, .69445],
                        926: [0, .68333, .07569, .08334, .74236],
                        928: [0, .68333, .08125, .05556, .83125],
                        931: [0, .68333, .05764, .08334, .77986],
                        933: [0, .68333, .13889, .05556, .58333],
                        934: [0, .68333, 0, .08334, .66667],
                        936: [0, .68333, .11, .05556, .61222],
                        937: [0, .68333, .05017, .08334, .7724],
                        945: [0, .43056, .0037, .02778, .6397],
                        946: [.19444, .69444, .05278, .08334, .56563],
                        947: [.19444, .43056, .05556, 0, .51773],
                        948: [0, .69444, .03785, .05556, .44444],
                        949: [0, .43056, 0, .08334, .46632],
                        950: [.19444, .69444, .07378, .08334, .4375],
                        951: [.19444, .43056, .03588, .05556, .49653],
                        952: [0, .69444, .02778, .08334, .46944],
                        953: [0, .43056, 0, .05556, .35394],
                        954: [0, .43056, 0, 0, .57616],
                        955: [0, .69444, 0, 0, .58334],
                        956: [.19444, .43056, 0, .02778, .60255],
                        957: [0, .43056, .06366, .02778, .49398],
                        958: [.19444, .69444, .04601, .11111, .4375],
                        959: [0, .43056, 0, .05556, .48472],
                        960: [0, .43056, .03588, 0, .57003],
                        961: [.19444, .43056, 0, .08334, .51702],
                        962: [.09722, .43056, .07986, .08334, .36285],
                        963: [0, .43056, .03588, 0, .57141],
                        964: [0, .43056, .1132, .02778, .43715],
                        965: [0, .43056, .03588, .02778, .54028],
                        966: [.19444, .43056, 0, .08334, .65417],
                        967: [.19444, .43056, 0, .05556, .62569],
                        968: [.19444, .69444, .03588, .11111, .65139],
                        969: [0, .43056, .03588, 0, .62245],
                        977: [0, .69444, 0, .08334, .59144],
                        981: [.19444, .69444, 0, .08334, .59583],
                        982: [0, .43056, .02778, 0, .82813],
                        1009: [.19444, .43056, 0, .08334, .51702],
                        1013: [0, .43056, 0, .05556, .4059],
                        57649: [0, .43056, 0, .02778, .32246],
                        57911: [.19444, .43056, 0, .08334, .38403]
                    },
                    "SansSerif-Bold": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, 0, 0, .36667],
                        34: [0, .69444, 0, 0, .55834],
                        35: [.19444, .69444, 0, 0, .91667],
                        36: [.05556, .75, 0, 0, .55],
                        37: [.05556, .75, 0, 0, 1.02912],
                        38: [0, .69444, 0, 0, .83056],
                        39: [0, .69444, 0, 0, .30556],
                        40: [.25, .75, 0, 0, .42778],
                        41: [.25, .75, 0, 0, .42778],
                        42: [0, .75, 0, 0, .55],
                        43: [.11667, .61667, 0, 0, .85556],
                        44: [.10556, .13056, 0, 0, .30556],
                        45: [0, .45833, 0, 0, .36667],
                        46: [0, .13056, 0, 0, .30556],
                        47: [.25, .75, 0, 0, .55],
                        48: [0, .69444, 0, 0, .55],
                        49: [0, .69444, 0, 0, .55],
                        50: [0, .69444, 0, 0, .55],
                        51: [0, .69444, 0, 0, .55],
                        52: [0, .69444, 0, 0, .55],
                        53: [0, .69444, 0, 0, .55],
                        54: [0, .69444, 0, 0, .55],
                        55: [0, .69444, 0, 0, .55],
                        56: [0, .69444, 0, 0, .55],
                        57: [0, .69444, 0, 0, .55],
                        58: [0, .45833, 0, 0, .30556],
                        59: [.10556, .45833, 0, 0, .30556],
                        61: [-.09375, .40625, 0, 0, .85556],
                        63: [0, .69444, 0, 0, .51945],
                        64: [0, .69444, 0, 0, .73334],
                        65: [0, .69444, 0, 0, .73334],
                        66: [0, .69444, 0, 0, .73334],
                        67: [0, .69444, 0, 0, .70278],
                        68: [0, .69444, 0, 0, .79445],
                        69: [0, .69444, 0, 0, .64167],
                        70: [0, .69444, 0, 0, .61111],
                        71: [0, .69444, 0, 0, .73334],
                        72: [0, .69444, 0, 0, .79445],
                        73: [0, .69444, 0, 0, .33056],
                        74: [0, .69444, 0, 0, .51945],
                        75: [0, .69444, 0, 0, .76389],
                        76: [0, .69444, 0, 0, .58056],
                        77: [0, .69444, 0, 0, .97778],
                        78: [0, .69444, 0, 0, .79445],
                        79: [0, .69444, 0, 0, .79445],
                        80: [0, .69444, 0, 0, .70278],
                        81: [.10556, .69444, 0, 0, .79445],
                        82: [0, .69444, 0, 0, .70278],
                        83: [0, .69444, 0, 0, .61111],
                        84: [0, .69444, 0, 0, .73334],
                        85: [0, .69444, 0, 0, .76389],
                        86: [0, .69444, .01528, 0, .73334],
                        87: [0, .69444, .01528, 0, 1.03889],
                        88: [0, .69444, 0, 0, .73334],
                        89: [0, .69444, .0275, 0, .73334],
                        90: [0, .69444, 0, 0, .67223],
                        91: [.25, .75, 0, 0, .34306],
                        93: [.25, .75, 0, 0, .34306],
                        94: [0, .69444, 0, 0, .55],
                        95: [.35, .10833, .03056, 0, .55],
                        97: [0, .45833, 0, 0, .525],
                        98: [0, .69444, 0, 0, .56111],
                        99: [0, .45833, 0, 0, .48889],
                        100: [0, .69444, 0, 0, .56111],
                        101: [0, .45833, 0, 0, .51111],
                        102: [0, .69444, .07639, 0, .33611],
                        103: [.19444, .45833, .01528, 0, .55],
                        104: [0, .69444, 0, 0, .56111],
                        105: [0, .69444, 0, 0, .25556],
                        106: [.19444, .69444, 0, 0, .28611],
                        107: [0, .69444, 0, 0, .53056],
                        108: [0, .69444, 0, 0, .25556],
                        109: [0, .45833, 0, 0, .86667],
                        110: [0, .45833, 0, 0, .56111],
                        111: [0, .45833, 0, 0, .55],
                        112: [.19444, .45833, 0, 0, .56111],
                        113: [.19444, .45833, 0, 0, .56111],
                        114: [0, .45833, .01528, 0, .37222],
                        115: [0, .45833, 0, 0, .42167],
                        116: [0, .58929, 0, 0, .40417],
                        117: [0, .45833, 0, 0, .56111],
                        118: [0, .45833, .01528, 0, .5],
                        119: [0, .45833, .01528, 0, .74445],
                        120: [0, .45833, 0, 0, .5],
                        121: [.19444, .45833, .01528, 0, .5],
                        122: [0, .45833, 0, 0, .47639],
                        126: [.35, .34444, 0, 0, .55],
                        160: [0, 0, 0, 0, .25],
                        168: [0, .69444, 0, 0, .55],
                        176: [0, .69444, 0, 0, .73334],
                        180: [0, .69444, 0, 0, .55],
                        184: [.17014, 0, 0, 0, .48889],
                        305: [0, .45833, 0, 0, .25556],
                        567: [.19444, .45833, 0, 0, .28611],
                        710: [0, .69444, 0, 0, .55],
                        711: [0, .63542, 0, 0, .55],
                        713: [0, .63778, 0, 0, .55],
                        728: [0, .69444, 0, 0, .55],
                        729: [0, .69444, 0, 0, .30556],
                        730: [0, .69444, 0, 0, .73334],
                        732: [0, .69444, 0, 0, .55],
                        733: [0, .69444, 0, 0, .55],
                        915: [0, .69444, 0, 0, .58056],
                        916: [0, .69444, 0, 0, .91667],
                        920: [0, .69444, 0, 0, .85556],
                        923: [0, .69444, 0, 0, .67223],
                        926: [0, .69444, 0, 0, .73334],
                        928: [0, .69444, 0, 0, .79445],
                        931: [0, .69444, 0, 0, .79445],
                        933: [0, .69444, 0, 0, .85556],
                        934: [0, .69444, 0, 0, .79445],
                        936: [0, .69444, 0, 0, .85556],
                        937: [0, .69444, 0, 0, .79445],
                        8211: [0, .45833, .03056, 0, .55],
                        8212: [0, .45833, .03056, 0, 1.10001],
                        8216: [0, .69444, 0, 0, .30556],
                        8217: [0, .69444, 0, 0, .30556],
                        8220: [0, .69444, 0, 0, .55834],
                        8221: [0, .69444, 0, 0, .55834]
                    },
                    "SansSerif-Italic": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, .05733, 0, .31945],
                        34: [0, .69444, .00316, 0, .5],
                        35: [.19444, .69444, .05087, 0, .83334],
                        36: [.05556, .75, .11156, 0, .5],
                        37: [.05556, .75, .03126, 0, .83334],
                        38: [0, .69444, .03058, 0, .75834],
                        39: [0, .69444, .07816, 0, .27778],
                        40: [.25, .75, .13164, 0, .38889],
                        41: [.25, .75, .02536, 0, .38889],
                        42: [0, .75, .11775, 0, .5],
                        43: [.08333, .58333, .02536, 0, .77778],
                        44: [.125, .08333, 0, 0, .27778],
                        45: [0, .44444, .01946, 0, .33333],
                        46: [0, .08333, 0, 0, .27778],
                        47: [.25, .75, .13164, 0, .5],
                        48: [0, .65556, .11156, 0, .5],
                        49: [0, .65556, .11156, 0, .5],
                        50: [0, .65556, .11156, 0, .5],
                        51: [0, .65556, .11156, 0, .5],
                        52: [0, .65556, .11156, 0, .5],
                        53: [0, .65556, .11156, 0, .5],
                        54: [0, .65556, .11156, 0, .5],
                        55: [0, .65556, .11156, 0, .5],
                        56: [0, .65556, .11156, 0, .5],
                        57: [0, .65556, .11156, 0, .5],
                        58: [0, .44444, .02502, 0, .27778],
                        59: [.125, .44444, .02502, 0, .27778],
                        61: [-.13, .37, .05087, 0, .77778],
                        63: [0, .69444, .11809, 0, .47222],
                        64: [0, .69444, .07555, 0, .66667],
                        65: [0, .69444, 0, 0, .66667],
                        66: [0, .69444, .08293, 0, .66667],
                        67: [0, .69444, .11983, 0, .63889],
                        68: [0, .69444, .07555, 0, .72223],
                        69: [0, .69444, .11983, 0, .59722],
                        70: [0, .69444, .13372, 0, .56945],
                        71: [0, .69444, .11983, 0, .66667],
                        72: [0, .69444, .08094, 0, .70834],
                        73: [0, .69444, .13372, 0, .27778],
                        74: [0, .69444, .08094, 0, .47222],
                        75: [0, .69444, .11983, 0, .69445],
                        76: [0, .69444, 0, 0, .54167],
                        77: [0, .69444, .08094, 0, .875],
                        78: [0, .69444, .08094, 0, .70834],
                        79: [0, .69444, .07555, 0, .73611],
                        80: [0, .69444, .08293, 0, .63889],
                        81: [.125, .69444, .07555, 0, .73611],
                        82: [0, .69444, .08293, 0, .64584],
                        83: [0, .69444, .09205, 0, .55556],
                        84: [0, .69444, .13372, 0, .68056],
                        85: [0, .69444, .08094, 0, .6875],
                        86: [0, .69444, .1615, 0, .66667],
                        87: [0, .69444, .1615, 0, .94445],
                        88: [0, .69444, .13372, 0, .66667],
                        89: [0, .69444, .17261, 0, .66667],
                        90: [0, .69444, .11983, 0, .61111],
                        91: [.25, .75, .15942, 0, .28889],
                        93: [.25, .75, .08719, 0, .28889],
                        94: [0, .69444, .0799, 0, .5],
                        95: [.35, .09444, .08616, 0, .5],
                        97: [0, .44444, .00981, 0, .48056],
                        98: [0, .69444, .03057, 0, .51667],
                        99: [0, .44444, .08336, 0, .44445],
                        100: [0, .69444, .09483, 0, .51667],
                        101: [0, .44444, .06778, 0, .44445],
                        102: [0, .69444, .21705, 0, .30556],
                        103: [.19444, .44444, .10836, 0, .5],
                        104: [0, .69444, .01778, 0, .51667],
                        105: [0, .67937, .09718, 0, .23889],
                        106: [.19444, .67937, .09162, 0, .26667],
                        107: [0, .69444, .08336, 0, .48889],
                        108: [0, .69444, .09483, 0, .23889],
                        109: [0, .44444, .01778, 0, .79445],
                        110: [0, .44444, .01778, 0, .51667],
                        111: [0, .44444, .06613, 0, .5],
                        112: [.19444, .44444, .0389, 0, .51667],
                        113: [.19444, .44444, .04169, 0, .51667],
                        114: [0, .44444, .10836, 0, .34167],
                        115: [0, .44444, .0778, 0, .38333],
                        116: [0, .57143, .07225, 0, .36111],
                        117: [0, .44444, .04169, 0, .51667],
                        118: [0, .44444, .10836, 0, .46111],
                        119: [0, .44444, .10836, 0, .68334],
                        120: [0, .44444, .09169, 0, .46111],
                        121: [.19444, .44444, .10836, 0, .46111],
                        122: [0, .44444, .08752, 0, .43472],
                        126: [.35, .32659, .08826, 0, .5],
                        160: [0, 0, 0, 0, .25],
                        168: [0, .67937, .06385, 0, .5],
                        176: [0, .69444, 0, 0, .73752],
                        184: [.17014, 0, 0, 0, .44445],
                        305: [0, .44444, .04169, 0, .23889],
                        567: [.19444, .44444, .04169, 0, .26667],
                        710: [0, .69444, .0799, 0, .5],
                        711: [0, .63194, .08432, 0, .5],
                        713: [0, .60889, .08776, 0, .5],
                        714: [0, .69444, .09205, 0, .5],
                        715: [0, .69444, 0, 0, .5],
                        728: [0, .69444, .09483, 0, .5],
                        729: [0, .67937, .07774, 0, .27778],
                        730: [0, .69444, 0, 0, .73752],
                        732: [0, .67659, .08826, 0, .5],
                        733: [0, .69444, .09205, 0, .5],
                        915: [0, .69444, .13372, 0, .54167],
                        916: [0, .69444, 0, 0, .83334],
                        920: [0, .69444, .07555, 0, .77778],
                        923: [0, .69444, 0, 0, .61111],
                        926: [0, .69444, .12816, 0, .66667],
                        928: [0, .69444, .08094, 0, .70834],
                        931: [0, .69444, .11983, 0, .72222],
                        933: [0, .69444, .09031, 0, .77778],
                        934: [0, .69444, .04603, 0, .72222],
                        936: [0, .69444, .09031, 0, .77778],
                        937: [0, .69444, .08293, 0, .72222],
                        8211: [0, .44444, .08616, 0, .5],
                        8212: [0, .44444, .08616, 0, 1],
                        8216: [0, .69444, .07816, 0, .27778],
                        8217: [0, .69444, .07816, 0, .27778],
                        8220: [0, .69444, .14205, 0, .5],
                        8221: [0, .69444, .00316, 0, .5]
                    },
                    "SansSerif-Regular": {
                        32: [0, 0, 0, 0, .25],
                        33: [0, .69444, 0, 0, .31945],
                        34: [0, .69444, 0, 0, .5],
                        35: [.19444, .69444, 0, 0, .83334],
                        36: [.05556, .75, 0, 0, .5],
                        37: [.05556, .75, 0, 0, .83334],
                        38: [0, .69444, 0, 0, .75834],
                        39: [0, .69444, 0, 0, .27778],
                        40: [.25, .75, 0, 0, .38889],
                        41: [.25, .75, 0, 0, .38889],
                        42: [0, .75, 0, 0, .5],
                        43: [.08333, .58333, 0, 0, .77778],
                        44: [.125, .08333, 0, 0, .27778],
                        45: [0, .44444, 0, 0, .33333],
                        46: [0, .08333, 0, 0, .27778],
                        47: [.25, .75, 0, 0, .5],
                        48: [0, .65556, 0, 0, .5],
                        49: [0, .65556, 0, 0, .5],
                        50: [0, .65556, 0, 0, .5],
                        51: [0, .65556, 0, 0, .5],
                        52: [0, .65556, 0, 0, .5],
                        53: [0, .65556, 0, 0, .5],
                        54: [0, .65556, 0, 0, .5],
                        55: [0, .65556, 0, 0, .5],
                        56: [0, .65556, 0, 0, .5],
                        57: [0, .65556, 0, 0, .5],
                        58: [0, .44444, 0, 0, .27778],
                        59: [.125, .44444, 0, 0, .27778],
                        61: [-.13, .37, 0, 0, .77778],
                        63: [0, .69444, 0, 0, .47222],
                        64: [0, .69444, 0, 0, .66667],
                        65: [0, .69444, 0, 0, .66667],
                        66: [0, .69444, 0, 0, .66667],
                        67: [0, .69444, 0, 0, .63889],
                        68: [0, .69444, 0, 0, .72223],
                        69: [0, .69444, 0, 0, .59722],
                        70: [0, .69444, 0, 0, .56945],
                        71: [0, .69444, 0, 0, .66667],
                        72: [0, .69444, 0, 0, .70834],
                        73: [0, .69444, 0, 0, .27778],
                        74: [0, .69444, 0, 0, .47222],
                        75: [0, .69444, 0, 0, .69445],
                        76: [0, .69444, 0, 0, .54167],
                        77: [0, .69444, 0, 0, .875],
                        78: [0, .69444, 0, 0, .70834],
                        79: [0, .69444, 0, 0, .73611],
                        80: [0, .69444, 0, 0, .63889],
                        81: [.125, .69444, 0, 0, .73611],
                        82: [0, .69444, 0, 0, .64584],
                        83: [0, .69444, 0, 0, .55556],
                        84: [0, .69444, 0, 0, .68056],
                        85: [0, .69444, 0, 0, .6875],
                        86: [0, .69444, .01389, 0, .66667],
                        87: [0, .69444, .01389, 0, .94445],
                        88: [0, .69444, 0, 0, .66667],
                        89: [0, .69444, .025, 0, .66667],
                        90: [0, .69444, 0, 0, .61111],
                        91: [.25, .75, 0, 0, .28889],
                        93: [.25, .75, 0, 0, .28889],
                        94: [0, .69444, 0, 0, .5],
                        95: [.35, .09444, .02778, 0, .5],
                        97: [0, .44444, 0, 0, .48056],
                        98: [0, .69444, 0, 0, .51667],
                        99: [0, .44444, 0, 0, .44445],
                        100: [0, .69444, 0, 0, .51667],
                        101: [0, .44444, 0, 0, .44445],
                        102: [0, .69444, .06944, 0, .30556],
                        103: [.19444, .44444, .01389, 0, .5],
                        104: [0, .69444, 0, 0, .51667],
                        105: [0, .67937, 0, 0, .23889],
                        106: [.19444, .67937, 0, 0, .26667],
                        107: [0, .69444, 0, 0, .48889],
                        108: [0, .69444, 0, 0, .23889],
                        109: [0, .44444, 0, 0, .79445],
                        110: [0, .44444, 0, 0, .51667],
                        111: [0, .44444, 0, 0, .5],
                        112: [.19444, .44444, 0, 0, .51667],
                        113: [.19444, .44444, 0, 0, .51667],
                        114: [0, .44444, .01389, 0, .34167],
                        115: [0, .44444, 0, 0, .38333],
                        116: [0, .57143, 0, 0, .36111],
                        117: [0, .44444, 0, 0, .51667],
                        118: [0, .44444, .01389, 0, .46111],
                        119: [0, .44444, .01389, 0, .68334],
                        120: [0, .44444, 0, 0, .46111],
                        121: [.19444, .44444, .01389, 0, .46111],
                        122: [0, .44444, 0, 0, .43472],
                        126: [.35, .32659, 0, 0, .5],
                        160: [0, 0, 0, 0, .25],
                        168: [0, .67937, 0, 0, .5],
                        176: [0, .69444, 0, 0, .66667],
                        184: [.17014, 0, 0, 0, .44445],
                        305: [0, .44444, 0, 0, .23889],
                        567: [.19444, .44444, 0, 0, .26667],
                        710: [0, .69444, 0, 0, .5],
                        711: [0, .63194, 0, 0, .5],
                        713: [0, .60889, 0, 0, .5],
                        714: [0, .69444, 0, 0, .5],
                        715: [0, .69444, 0, 0, .5],
                        728: [0, .69444, 0, 0, .5],
                        729: [0, .67937, 0, 0, .27778],
                        730: [0, .69444, 0, 0, .66667],
                        732: [0, .67659, 0, 0, .5],
                        733: [0, .69444, 0, 0, .5],
                        915: [0, .69444, 0, 0, .54167],
                        916: [0, .69444, 0, 0, .83334],
                        920: [0, .69444, 0, 0, .77778],
                        923: [0, .69444, 0, 0, .61111],
                        926: [0, .69444, 0, 0, .66667],
                        928: [0, .69444, 0, 0, .70834],
                        931: [0, .69444, 0, 0, .72222],
                        933: [0, .69444, 0, 0, .77778],
                        934: [0, .69444, 0, 0, .72222],
                        936: [0, .69444, 0, 0, .77778],
                        937: [0, .69444, 0, 0, .72222],
                        8211: [0, .44444, .02778, 0, .5],
                        8212: [0, .44444, .02778, 0, 1],
                        8216: [0, .69444, 0, 0, .27778],
                        8217: [0, .69444, 0, 0, .27778],
                        8220: [0, .69444, 0, 0, .5],
                        8221: [0, .69444, 0, 0, .5]
                    },
                    "Script-Regular": {
                        32: [0, 0, 0, 0, .25],
                        65: [0, .7, .22925, 0, .80253],
                        66: [0, .7, .04087, 0, .90757],
                        67: [0, .7, .1689, 0, .66619],
                        68: [0, .7, .09371, 0, .77443],
                        69: [0, .7, .18583, 0, .56162],
                        70: [0, .7, .13634, 0, .89544],
                        71: [0, .7, .17322, 0, .60961],
                        72: [0, .7, .29694, 0, .96919],
                        73: [0, .7, .19189, 0, .80907],
                        74: [.27778, .7, .19189, 0, 1.05159],
                        75: [0, .7, .31259, 0, .91364],
                        76: [0, .7, .19189, 0, .87373],
                        77: [0, .7, .15981, 0, 1.08031],
                        78: [0, .7, .3525, 0, .9015],
                        79: [0, .7, .08078, 0, .73787],
                        80: [0, .7, .08078, 0, 1.01262],
                        81: [0, .7, .03305, 0, .88282],
                        82: [0, .7, .06259, 0, .85],
                        83: [0, .7, .19189, 0, .86767],
                        84: [0, .7, .29087, 0, .74697],
                        85: [0, .7, .25815, 0, .79996],
                        86: [0, .7, .27523, 0, .62204],
                        87: [0, .7, .27523, 0, .80532],
                        88: [0, .7, .26006, 0, .94445],
                        89: [0, .7, .2939, 0, .70961],
                        90: [0, .7, .24037, 0, .8212],
                        160: [0, 0, 0, 0, .25]
                    },
                    "Size1-Regular": {
                        32: [0, 0, 0, 0, .25],
                        40: [.35001, .85, 0, 0, .45834],
                        41: [.35001, .85, 0, 0, .45834],
                        47: [.35001, .85, 0, 0, .57778],
                        91: [.35001, .85, 0, 0, .41667],
                        92: [.35001, .85, 0, 0, .57778],
                        93: [.35001, .85, 0, 0, .41667],
                        123: [.35001, .85, 0, 0, .58334],
                        125: [.35001, .85, 0, 0, .58334],
                        160: [0, 0, 0, 0, .25],
                        710: [0, .72222, 0, 0, .55556],
                        732: [0, .72222, 0, 0, .55556],
                        770: [0, .72222, 0, 0, .55556],
                        771: [0, .72222, 0, 0, .55556],
                        8214: [-99e-5, .601, 0, 0, .77778],
                        8593: [1e-5, .6, 0, 0, .66667],
                        8595: [1e-5, .6, 0, 0, .66667],
                        8657: [1e-5, .6, 0, 0, .77778],
                        8659: [1e-5, .6, 0, 0, .77778],
                        8719: [.25001, .75, 0, 0, .94445],
                        8720: [.25001, .75, 0, 0, .94445],
                        8721: [.25001, .75, 0, 0, 1.05556],
                        8730: [.35001, .85, 0, 0, 1],
                        8739: [-.00599, .606, 0, 0, .33333],
                        8741: [-.00599, .606, 0, 0, .55556],
                        8747: [.30612, .805, .19445, 0, .47222],
                        8748: [.306, .805, .19445, 0, .47222],
                        8749: [.306, .805, .19445, 0, .47222],
                        8750: [.30612, .805, .19445, 0, .47222],
                        8896: [.25001, .75, 0, 0, .83334],
                        8897: [.25001, .75, 0, 0, .83334],
                        8898: [.25001, .75, 0, 0, .83334],
                        8899: [.25001, .75, 0, 0, .83334],
                        8968: [.35001, .85, 0, 0, .47222],
                        8969: [.35001, .85, 0, 0, .47222],
                        8970: [.35001, .85, 0, 0, .47222],
                        8971: [.35001, .85, 0, 0, .47222],
                        9168: [-99e-5, .601, 0, 0, .66667],
                        10216: [.35001, .85, 0, 0, .47222],
                        10217: [.35001, .85, 0, 0, .47222],
                        10752: [.25001, .75, 0, 0, 1.11111],
                        10753: [.25001, .75, 0, 0, 1.11111],
                        10754: [.25001, .75, 0, 0, 1.11111],
                        10756: [.25001, .75, 0, 0, .83334],
                        10758: [.25001, .75, 0, 0, .83334]
                    },
                    "Size2-Regular": {
                        32: [0, 0, 0, 0, .25],
                        40: [.65002, 1.15, 0, 0, .59722],
                        41: [.65002, 1.15, 0, 0, .59722],
                        47: [.65002, 1.15, 0, 0, .81111],
                        91: [.65002, 1.15, 0, 0, .47222],
                        92: [.65002, 1.15, 0, 0, .81111],
                        93: [.65002, 1.15, 0, 0, .47222],
                        123: [.65002, 1.15, 0, 0, .66667],
                        125: [.65002, 1.15, 0, 0, .66667],
                        160: [0, 0, 0, 0, .25],
                        710: [0, .75, 0, 0, 1],
                        732: [0, .75, 0, 0, 1],
                        770: [0, .75, 0, 0, 1],
                        771: [0, .75, 0, 0, 1],
                        8719: [.55001, 1.05, 0, 0, 1.27778],
                        8720: [.55001, 1.05, 0, 0, 1.27778],
                        8721: [.55001, 1.05, 0, 0, 1.44445],
                        8730: [.65002, 1.15, 0, 0, 1],
                        8747: [.86225, 1.36, .44445, 0, .55556],
                        8748: [.862, 1.36, .44445, 0, .55556],
                        8749: [.862, 1.36, .44445, 0, .55556],
                        8750: [.86225, 1.36, .44445, 0, .55556],
                        8896: [.55001, 1.05, 0, 0, 1.11111],
                        8897: [.55001, 1.05, 0, 0, 1.11111],
                        8898: [.55001, 1.05, 0, 0, 1.11111],
                        8899: [.55001, 1.05, 0, 0, 1.11111],
                        8968: [.65002, 1.15, 0, 0, .52778],
                        8969: [.65002, 1.15, 0, 0, .52778],
                        8970: [.65002, 1.15, 0, 0, .52778],
                        8971: [.65002, 1.15, 0, 0, .52778],
                        10216: [.65002, 1.15, 0, 0, .61111],
                        10217: [.65002, 1.15, 0, 0, .61111],
                        10752: [.55001, 1.05, 0, 0, 1.51112],
                        10753: [.55001, 1.05, 0, 0, 1.51112],
                        10754: [.55001, 1.05, 0, 0, 1.51112],
                        10756: [.55001, 1.05, 0, 0, 1.11111],
                        10758: [.55001, 1.05, 0, 0, 1.11111]
                    },
                    "Size3-Regular": {
                        32: [0, 0, 0, 0, .25],
                        40: [.95003, 1.45, 0, 0, .73611],
                        41: [.95003, 1.45, 0, 0, .73611],
                        47: [.95003, 1.45, 0, 0, 1.04445],
                        91: [.95003, 1.45, 0, 0, .52778],
                        92: [.95003, 1.45, 0, 0, 1.04445],
                        93: [.95003, 1.45, 0, 0, .52778],
                        123: [.95003, 1.45, 0, 0, .75],
                        125: [.95003, 1.45, 0, 0, .75],
                        160: [0, 0, 0, 0, .25],
                        710: [0, .75, 0, 0, 1.44445],
                        732: [0, .75, 0, 0, 1.44445],
                        770: [0, .75, 0, 0, 1.44445],
                        771: [0, .75, 0, 0, 1.44445],
                        8730: [.95003, 1.45, 0, 0, 1],
                        8968: [.95003, 1.45, 0, 0, .58334],
                        8969: [.95003, 1.45, 0, 0, .58334],
                        8970: [.95003, 1.45, 0, 0, .58334],
                        8971: [.95003, 1.45, 0, 0, .58334],
                        10216: [.95003, 1.45, 0, 0, .75],
                        10217: [.95003, 1.45, 0, 0, .75]
                    },
                    "Size4-Regular": {
                        32: [0, 0, 0, 0, .25],
                        40: [1.25003, 1.75, 0, 0, .79167],
                        41: [1.25003, 1.75, 0, 0, .79167],
                        47: [1.25003, 1.75, 0, 0, 1.27778],
                        91: [1.25003, 1.75, 0, 0, .58334],
                        92: [1.25003, 1.75, 0, 0, 1.27778],
                        93: [1.25003, 1.75, 0, 0, .58334],
                        123: [1.25003, 1.75, 0, 0, .80556],
                        125: [1.25003, 1.75, 0, 0, .80556],
                        160: [0, 0, 0, 0, .25],
                        710: [0, .825, 0, 0, 1.8889],
                        732: [0, .825, 0, 0, 1.8889],
                        770: [0, .825, 0, 0, 1.8889],
                        771: [0, .825, 0, 0, 1.8889],
                        8730: [1.25003, 1.75, 0, 0, 1],
                        8968: [1.25003, 1.75, 0, 0, .63889],
                        8969: [1.25003, 1.75, 0, 0, .63889],
                        8970: [1.25003, 1.75, 0, 0, .63889],
                        8971: [1.25003, 1.75, 0, 0, .63889],
                        9115: [.64502, 1.155, 0, 0, .875],
                        9116: [1e-5, .6, 0, 0, .875],
                        9117: [.64502, 1.155, 0, 0, .875],
                        9118: [.64502, 1.155, 0, 0, .875],
                        9119: [1e-5, .6, 0, 0, .875],
                        9120: [.64502, 1.155, 0, 0, .875],
                        9121: [.64502, 1.155, 0, 0, .66667],
                        9122: [-99e-5, .601, 0, 0, .66667],
                        9123: [.64502, 1.155, 0, 0, .66667],
                        9124: [.64502, 1.155, 0, 0, .66667],
                        9125: [-99e-5, .601, 0, 0, .66667],
                        9126: [.64502, 1.155, 0, 0, .66667],
                        9127: [1e-5, .9, 0, 0, .88889],
                        9128: [.65002, 1.15, 0, 0, .88889],
                        9129: [.90001, 0, 0, 0, .88889],
                        9130: [0, .3, 0, 0, .88889],
                        9131: [1e-5, .9, 0, 0, .88889],
                        9132: [.65002, 1.15, 0, 0, .88889],
                        9133: [.90001, 0, 0, 0, .88889],
                        9143: [.88502, .915, 0, 0, 1.05556],
                        10216: [1.25003, 1.75, 0, 0, .80556],
                        10217: [1.25003, 1.75, 0, 0, .80556],
                        57344: [-.00499, .605, 0, 0, 1.05556],
                        57345: [-.00499, .605, 0, 0, 1.05556],
                        57680: [0, .12, 0, 0, .45],
                        57681: [0, .12, 0, 0, .45],
                        57682: [0, .12, 0, 0, .45],
                        57683: [0, .12, 0, 0, .45]
                    },
                    "Typewriter-Regular": {
                        32: [0, 0, 0, 0, .525],
                        33: [0, .61111, 0, 0, .525],
                        34: [0, .61111, 0, 0, .525],
                        35: [0, .61111, 0, 0, .525],
                        36: [.08333, .69444, 0, 0, .525],
                        37: [.08333, .69444, 0, 0, .525],
                        38: [0, .61111, 0, 0, .525],
                        39: [0, .61111, 0, 0, .525],
                        40: [.08333, .69444, 0, 0, .525],
                        41: [.08333, .69444, 0, 0, .525],
                        42: [0, .52083, 0, 0, .525],
                        43: [-.08056, .53055, 0, 0, .525],
                        44: [.13889, .125, 0, 0, .525],
                        45: [-.08056, .53055, 0, 0, .525],
                        46: [0, .125, 0, 0, .525],
                        47: [.08333, .69444, 0, 0, .525],
                        48: [0, .61111, 0, 0, .525],
                        49: [0, .61111, 0, 0, .525],
                        50: [0, .61111, 0, 0, .525],
                        51: [0, .61111, 0, 0, .525],
                        52: [0, .61111, 0, 0, .525],
                        53: [0, .61111, 0, 0, .525],
                        54: [0, .61111, 0, 0, .525],
                        55: [0, .61111, 0, 0, .525],
                        56: [0, .61111, 0, 0, .525],
                        57: [0, .61111, 0, 0, .525],
                        58: [0, .43056, 0, 0, .525],
                        59: [.13889, .43056, 0, 0, .525],
                        60: [-.05556, .55556, 0, 0, .525],
                        61: [-.19549, .41562, 0, 0, .525],
                        62: [-.05556, .55556, 0, 0, .525],
                        63: [0, .61111, 0, 0, .525],
                        64: [0, .61111, 0, 0, .525],
                        65: [0, .61111, 0, 0, .525],
                        66: [0, .61111, 0, 0, .525],
                        67: [0, .61111, 0, 0, .525],
                        68: [0, .61111, 0, 0, .525],
                        69: [0, .61111, 0, 0, .525],
                        70: [0, .61111, 0, 0, .525],
                        71: [0, .61111, 0, 0, .525],
                        72: [0, .61111, 0, 0, .525],
                        73: [0, .61111, 0, 0, .525],
                        74: [0, .61111, 0, 0, .525],
                        75: [0, .61111, 0, 0, .525],
                        76: [0, .61111, 0, 0, .525],
                        77: [0, .61111, 0, 0, .525],
                        78: [0, .61111, 0, 0, .525],
                        79: [0, .61111, 0, 0, .525],
                        80: [0, .61111, 0, 0, .525],
                        81: [.13889, .61111, 0, 0, .525],
                        82: [0, .61111, 0, 0, .525],
                        83: [0, .61111, 0, 0, .525],
                        84: [0, .61111, 0, 0, .525],
                        85: [0, .61111, 0, 0, .525],
                        86: [0, .61111, 0, 0, .525],
                        87: [0, .61111, 0, 0, .525],
                        88: [0, .61111, 0, 0, .525],
                        89: [0, .61111, 0, 0, .525],
                        90: [0, .61111, 0, 0, .525],
                        91: [.08333, .69444, 0, 0, .525],
                        92: [.08333, .69444, 0, 0, .525],
                        93: [.08333, .69444, 0, 0, .525],
                        94: [0, .61111, 0, 0, .525],
                        95: [.09514, 0, 0, 0, .525],
                        96: [0, .61111, 0, 0, .525],
                        97: [0, .43056, 0, 0, .525],
                        98: [0, .61111, 0, 0, .525],
                        99: [0, .43056, 0, 0, .525],
                        100: [0, .61111, 0, 0, .525],
                        101: [0, .43056, 0, 0, .525],
                        102: [0, .61111, 0, 0, .525],
                        103: [.22222, .43056, 0, 0, .525],
                        104: [0, .61111, 0, 0, .525],
                        105: [0, .61111, 0, 0, .525],
                        106: [.22222, .61111, 0, 0, .525],
                        107: [0, .61111, 0, 0, .525],
                        108: [0, .61111, 0, 0, .525],
                        109: [0, .43056, 0, 0, .525],
                        110: [0, .43056, 0, 0, .525],
                        111: [0, .43056, 0, 0, .525],
                        112: [.22222, .43056, 0, 0, .525],
                        113: [.22222, .43056, 0, 0, .525],
                        114: [0, .43056, 0, 0, .525],
                        115: [0, .43056, 0, 0, .525],
                        116: [0, .55358, 0, 0, .525],
                        117: [0, .43056, 0, 0, .525],
                        118: [0, .43056, 0, 0, .525],
                        119: [0, .43056, 0, 0, .525],
                        120: [0, .43056, 0, 0, .525],
                        121: [.22222, .43056, 0, 0, .525],
                        122: [0, .43056, 0, 0, .525],
                        123: [.08333, .69444, 0, 0, .525],
                        124: [.08333, .69444, 0, 0, .525],
                        125: [.08333, .69444, 0, 0, .525],
                        126: [0, .61111, 0, 0, .525],
                        127: [0, .61111, 0, 0, .525],
                        160: [0, 0, 0, 0, .525],
                        176: [0, .61111, 0, 0, .525],
                        184: [.19445, 0, 0, 0, .525],
                        305: [0, .43056, 0, 0, .525],
                        567: [.22222, .43056, 0, 0, .525],
                        711: [0, .56597, 0, 0, .525],
                        713: [0, .56555, 0, 0, .525],
                        714: [0, .61111, 0, 0, .525],
                        715: [0, .61111, 0, 0, .525],
                        728: [0, .61111, 0, 0, .525],
                        730: [0, .61111, 0, 0, .525],
                        770: [0, .61111, 0, 0, .525],
                        771: [0, .61111, 0, 0, .525],
                        776: [0, .61111, 0, 0, .525],
                        915: [0, .61111, 0, 0, .525],
                        916: [0, .61111, 0, 0, .525],
                        920: [0, .61111, 0, 0, .525],
                        923: [0, .61111, 0, 0, .525],
                        926: [0, .61111, 0, 0, .525],
                        928: [0, .61111, 0, 0, .525],
                        931: [0, .61111, 0, 0, .525],
                        933: [0, .61111, 0, 0, .525],
                        934: [0, .61111, 0, 0, .525],
                        936: [0, .61111, 0, 0, .525],
                        937: [0, .61111, 0, 0, .525],
                        8216: [0, .61111, 0, 0, .525],
                        8217: [0, .61111, 0, 0, .525],
                        8242: [0, .61111, 0, 0, .525],
                        9251: [.11111, .21944, 0, 0, .525]
                    }
                },
                em = {
                    slant: [.25, .25, .25],
                    space: [0, 0, 0],
                    stretch: [0, 0, 0],
                    shrink: [0, 0, 0],
                    xHeight: [.431, .431, .431],
                    quad: [1, 1.171, 1.472],
                    extraSpace: [0, 0, 0],
                    num1: [.677, .732, .925],
                    num2: [.394, .384, .387],
                    num3: [.444, .471, .504],
                    denom1: [.686, .752, 1.025],
                    denom2: [.345, .344, .532],
                    sup1: [.413, .503, .504],
                    sup2: [.363, .431, .404],
                    sup3: [.289, .286, .294],
                    sub1: [.15, .143, .2],
                    sub2: [.247, .286, .4],
                    supDrop: [.386, .353, .494],
                    subDrop: [.05, .071, .1],
                    delim1: [2.39, 1.7, 1.98],
                    delim2: [1.01, 1.157, 1.42],
                    axisHeight: [.25, .25, .25],
                    defaultRuleThickness: [.04, .049, .049],
                    bigOpSpacing1: [.111, .111, .111],
                    bigOpSpacing2: [.166, .166, .166],
                    bigOpSpacing3: [.2, .2, .2],
                    bigOpSpacing4: [.6, .611, .611],
                    bigOpSpacing5: [.1, .143, .143],
                    sqrtRuleThickness: [.04, .04, .04],
                    ptPerEm: [10, 10, 10],
                    doubleRuleSep: [.2, .2, .2],
                    arrayRuleWidth: [.04, .04, .04],
                    fboxsep: [.3, .3, .3],
                    fboxrule: [.04, .04, .04]
                },
                ef = {
                    Å: "A",
                    Ð: "D",
                    Þ: "o",
                    å: "a",
                    ð: "d",
                    þ: "o",
                    А: "A",
                    Б: "B",
                    В: "B",
                    Г: "F",
                    Д: "A",
                    Е: "E",
                    Ж: "K",
                    З: "3",
                    И: "N",
                    Й: "N",
                    К: "K",
                    Л: "N",
                    М: "M",
                    Н: "H",
                    О: "O",
                    П: "N",
                    Р: "P",
                    С: "C",
                    Т: "T",
                    У: "y",
                    Ф: "O",
                    Х: "X",
                    Ц: "U",
                    Ч: "h",
                    Ш: "W",
                    Щ: "W",
                    Ъ: "B",
                    Ы: "X",
                    Ь: "B",
                    Э: "3",
                    Ю: "X",
                    Я: "R",
                    а: "a",
                    б: "b",
                    в: "a",
                    г: "r",
                    д: "y",
                    е: "e",
                    ж: "m",
                    з: "e",
                    и: "n",
                    й: "n",
                    к: "n",
                    л: "n",
                    м: "m",
                    н: "n",
                    о: "o",
                    п: "n",
                    р: "p",
                    с: "c",
                    т: "o",
                    у: "y",
                    ф: "b",
                    х: "x",
                    ц: "n",
                    ч: "n",
                    ш: "w",
                    щ: "w",
                    ъ: "a",
                    ы: "m",
                    ь: "a",
                    э: "e",
                    ю: "m",
                    я: "r"
                };

            function ed(e, t, n) {
                if (!ep[t]) throw Error("Font metrics not found for font: " + t + ".");
                var r = e.charCodeAt(0),
                    i = ep[t][r];
                if (!i && e[0] in ef && (r = ef[e[0]].charCodeAt(0), i = ep[t][r]), !i && "text" === n && eo(r) && (i = ep[t][77]), i) return {
                    depth: i[0],
                    height: i[1],
                    italic: i[2],
                    skew: i[3],
                    width: i[4]
                }
            }
            var eg = {},
                ey = [
                    [1, 1, 1],
                    [2, 1, 1],
                    [3, 1, 1],
                    [4, 2, 1],
                    [5, 2, 1],
                    [6, 3, 1],
                    [7, 4, 2],
                    [8, 6, 3],
                    [9, 7, 6],
                    [10, 8, 7],
                    [11, 10, 9]
                ],
                ex = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
                eb = function(e, t) {
                    return t.size < 2 ? e : ey[e - 1][t.size - 1]
                };
            class ev {
                extend(e) {
                    var t = {
                        style: this.style,
                        size: this.size,
                        textSize: this.textSize,
                        color: this.color,
                        phantom: this.phantom,
                        font: this.font,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontShape: this.fontShape,
                        maxSize: this.maxSize,
                        minRuleThickness: this.minRuleThickness
                    };
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return new ev(t)
                }
                havingStyle(e) {
                    return this.style === e ? this : this.extend({
                        style: e,
                        size: eb(this.textSize, e)
                    })
                }
                havingCrampedStyle() {
                    return this.havingStyle(this.style.cramp())
                }
                havingSize(e) {
                    return this.size === e && this.textSize === e ? this : this.extend({
                        style: this.style.text(),
                        size: e,
                        textSize: e,
                        sizeMultiplier: ex[e - 1]
                    })
                }
                havingBaseStyle(e) {
                    e = e || this.style.text();
                    var t = eb(ev.BASESIZE, e);
                    return this.size === t && this.textSize === ev.BASESIZE && this.style === e ? this : this.extend({
                        style: e,
                        size: t
                    })
                }
                havingBaseSizing() {
                    var e;
                    switch (this.style.id) {
                        case 4:
                        case 5:
                            e = 3;
                            break;
                        case 6:
                        case 7:
                            e = 1;
                            break;
                        default:
                            e = 6
                    }
                    return this.extend({
                        style: this.style.text(),
                        size: e
                    })
                }
                withColor(e) {
                    return this.extend({
                        color: e
                    })
                }
                withPhantom() {
                    return this.extend({
                        phantom: !0
                    })
                }
                withFont(e) {
                    return this.extend({
                        font: e
                    })
                }
                withTextFontFamily(e) {
                    return this.extend({
                        fontFamily: e,
                        font: ""
                    })
                }
                withTextFontWeight(e) {
                    return this.extend({
                        fontWeight: e,
                        font: ""
                    })
                }
                withTextFontShape(e) {
                    return this.extend({
                        fontShape: e,
                        font: ""
                    })
                }
                sizingClasses(e) {
                    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
                }
                baseSizingClasses() {
                    return this.size !== ev.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + ev.BASESIZE] : []
                }
                fontMetrics() {
                    return this._fontMetrics || (this._fontMetrics = function(e) {
                        var t;
                        if (!eg[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
                            var n = eg[t] = {
                                cssEmPerMu: em.quad[t] / 18
                            };
                            for (var r in em) em.hasOwnProperty(r) && (n[r] = em[r][t])
                        }
                        return eg[t]
                    }(this.size)), this._fontMetrics
                }
                getColor() {
                    return this.phantom ? "transparent" : this.color
                }
                constructor(e) {
                    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || ev.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = ex[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0
                }
            }
            ev.BASESIZE = 6;
            var ek = {
                    pt: 1,
                    mm: 7227 / 2540,
                    cm: 7227 / 254,
                    in: 72.27,
                    bp: 1.00375,
                    pc: 12,
                    dd: 1238 / 1157,
                    cc: 14856 / 1157,
                    nd: 685 / 642,
                    nc: 1370 / 107,
                    sp: 1 / 65536,
                    px: 1.00375
                },
                ew = {
                    ex: !0,
                    em: !0,
                    mu: !0
                },
                ez = function(e) {
                    return "string" != typeof e && (e = e.unit), e in ek || e in ew || "ex" === e
                },
                eS = function(e, t) {
                    var n, r;
                    if (e.unit in ek) n = ek[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
                    else if ("mu" === e.unit) n = t.fontMetrics().cssEmPerMu;
                    else {
                        if (r = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) n = r.fontMetrics().xHeight;
                        else if ("em" === e.unit) n = r.fontMetrics().quad;
                        else throw new D("Invalid unit: '" + e.unit + "'");
                        r !== t && (n *= r.sizeMultiplier / t.sizeMultiplier)
                    }
                    return Math.min(e.number * n, t.maxSize)
                },
                eA = function(e) {
                    return +e.toFixed(4) + "em"
                },
                eT = function(e) {
                    return e.filter(e => e).join(" ")
                },
                eM = function(e, t, n) {
                    if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
                        t.style.isTight() && this.classes.push("mtight");
                        var r = t.getColor();
                        r && (this.style.color = r)
                    }
                },
                eC = function(e) {
                    var t = document.createElement(e);
                    for (var n in t.className = eT(this.classes), this.style) this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
                    for (var r in this.attributes) this.attributes.hasOwnProperty(r) && t.setAttribute(r, this.attributes[r]);
                    for (var i = 0; i < this.children.length; i++) t.appendChild(this.children[i].toNode());
                    return t
                },
                eE = /[\s"'>/=\x00-\x1f]/,
                eR = function(e) {
                    var t = "<" + e;
                    this.classes.length && (t += ' class="' + _(eT(this.classes)) + '"');
                    var n = "";
                    for (var r in this.style) this.style.hasOwnProperty(r) && (n += j(r) + ":" + this.style[r] + ";");
                    for (var i in n && (t += ' style="' + _(n) + '"'), this.attributes)
                        if (this.attributes.hasOwnProperty(i)) {
                            if (eE.test(i)) throw new D("Invalid attribute name '" + i + "'");
                            t += " " + i + '="' + _(this.attributes[i]) + '"'
                        } t += ">";
                    for (var a = 0; a < this.children.length; a++) t += this.children[a].toMarkup();
                    return t + ("</" + e + ">")
                };
            class eI {
                setAttribute(e, t) {
                    this.attributes[e] = t
                }
                hasClass(e) {
                    return this.classes.includes(e)
                }
                toNode() {
                    return eC.call(this, "span")
                }
                toMarkup() {
                    return eR.call(this, "span")
                }
                constructor(e, t, n, r) {
                    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, eM.call(this, e, n, r), this.children = t || []
                }
            }
            class eB {
                setAttribute(e, t) {
                    this.attributes[e] = t
                }
                hasClass(e) {
                    return this.classes.includes(e)
                }
                toNode() {
                    return eC.call(this, "a")
                }
                toMarkup() {
                    return eR.call(this, "a")
                }
                constructor(e, t, n, r) {
                    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, eM.call(this, t, r), this.children = n || [], this.setAttribute("href", e)
                }
            }
            class eO {
                hasClass(e) {
                    return this.classes.includes(e)
                }
                toNode() {
                    var e = document.createElement("img");
                    for (var t in e.src = this.src, e.alt = this.alt, e.className = "mord", this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
                    return e
                }
                toMarkup() {
                    var e = '<img src="' + _(this.src) + '" alt="' + _(this.alt) + '"',
                        t = "";
                    for (var n in this.style) this.style.hasOwnProperty(n) && (t += j(n) + ":" + this.style[n] + ";");
                    return t && (e += ' style="' + _(t) + '"'), e += "'/>"
                }
                constructor(e, t, n) {
                    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n
                }
            }
            var eP = {
                î: "ı̂",
                ï: "ı̈",
                í: "ı́",
                ì: "ı̀"
            };
            class eL {
                hasClass(e) {
                    return this.classes.includes(e)
                }
                toNode() {
                    var e = document.createTextNode(this.text),
                        t = null;
                    for (var n in this.italic > 0 && ((t = document.createElement("span")).style.marginRight = eA(this.italic)), this.classes.length > 0 && ((t = t || document.createElement("span")).className = eT(this.classes)), this.style) this.style.hasOwnProperty(n) && ((t = t || document.createElement("span")).style[n] = this.style[n]);
                    return t ? (t.appendChild(e), t) : e
                }
                toMarkup() {
                    var e = !1,
                        t = "<span";
                    this.classes.length && (e = !0, t += ' class="', t += _(eT(this.classes)), t += '"');
                    var n = "";
                    for (var r in this.italic > 0 && (n += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(r) && (n += j(r) + ":" + this.style[r] + ";");
                    n && (e = !0, t += ' style="' + _(n) + '"');
                    var i = _(this.text);
                    return e ? (t += ">", t += i, t += "</span>") : i
                }
                constructor(e, t, n, r, i, a, o, l) {
                    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = r || 0, this.skew = i || 0, this.width = a || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
                    var s = function(e) {
                        for (var t = 0; t < ei.length; t++)
                            for (var n = ei[t], r = 0; r < n.blocks.length; r++) {
                                var i = n.blocks[r];
                                if (e >= i[0] && e <= i[1]) return n.name
                            }
                        return null
                    }(this.text.charCodeAt(0));
                    s && this.classes.push(s + "_fallback"), /[îïíì]/.test(this.text) && (this.text = eP[this.text])
                }
            }
            class eD {
                toNode() {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                    for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
                    return e
                }
                toMarkup() {
                    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + _(this.attributes[t]) + '"');
                    e += ">";
                    for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
                    return e + "</svg>"
                }
                constructor(e, t) {
                    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {}
                }
            }
            class eN {
                toNode() {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", eu[this.pathName]), e
                }
                toMarkup() {
                    return this.alternate ? '<path d="' + _(this.alternate) + '"/>' : '<path d="' + _(eu[this.pathName]) + '"/>'
                }
                constructor(e, t) {
                    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t
                }
            }
            class eq {
                toNode() {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                    return e
                }
                toMarkup() {
                    var e = "<line";
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + _(this.attributes[t]) + '"');
                    return e + "/>"
                }
                constructor(e) {
                    this.attributes = void 0, this.attributes = e || {}
                }
            }

            function eH(e) {
                if (e instanceof eL) return e;
                throw Error("Expected symbolNode but got " + String(e) + ".")
            }
            var eF = {
                    bin: 1,
                    close: 1,
                    inner: 1,
                    open: 1,
                    punct: 1,
                    rel: 1
                },
                eU = {
                    "accent-token": 1,
                    mathord: 1,
                    "op-token": 1,
                    spacing: 1,
                    textord: 1
                },
                eV = {
                    math: {},
                    text: {}
                };

            function e_(e, t, n, r, i, a) {
                eV[e][i] = {
                    font: t,
                    group: n,
                    replace: r
                }, a && r && (eV[e][r] = eV[e][i])
            }
            var ej = "math",
                eX = "text",
                eK = "main",
                eW = "accent-token",
                eG = "close",
                eY = "inner",
                e$ = "mathord",
                eZ = "op-token",
                eQ = "open",
                eJ = "punct",
                e0 = "spacing",
                e1 = "textord";
            e_(ej, eK, "rel", "≡", "\\equiv", !0), e_(ej, eK, "rel", "≺", "\\prec", !0), e_(ej, eK, "rel", "≻", "\\succ", !0), e_(ej, eK, "rel", "∼", "\\sim", !0), e_(ej, eK, "rel", "⊥", "\\perp"), e_(ej, eK, "rel", "⪯", "\\preceq", !0), e_(ej, eK, "rel", "⪰", "\\succeq", !0), e_(ej, eK, "rel", "≃", "\\simeq", !0), e_(ej, eK, "rel", "∣", "\\mid", !0), e_(ej, eK, "rel", "≪", "\\ll", !0), e_(ej, eK, "rel", "≫", "\\gg", !0), e_(ej, eK, "rel", "≍", "\\asymp", !0), e_(ej, eK, "rel", "∥", "\\parallel"), e_(ej, eK, "rel", "⋈", "\\bowtie", !0), e_(ej, eK, "rel", "⌣", "\\smile", !0), e_(ej, eK, "rel", "⊑", "\\sqsubseteq", !0), e_(ej, eK, "rel", "⊒", "\\sqsupseteq", !0), e_(ej, eK, "rel", "≐", "\\doteq", !0), e_(ej, eK, "rel", "⌢", "\\frown", !0), e_(ej, eK, "rel", "∋", "\\ni", !0), e_(ej, eK, "rel", "∝", "\\propto", !0), e_(ej, eK, "rel", "⊢", "\\vdash", !0), e_(ej, eK, "rel", "⊣", "\\dashv", !0), e_(ej, eK, "rel", "∋", "\\owns"), e_(ej, eK, eJ, ".", "\\ldotp"), e_(ej, eK, eJ, "⋅", "\\cdotp"), e_(ej, eK, e1, "#", "\\#"), e_(eX, eK, e1, "#", "\\#"), e_(ej, eK, e1, "&", "\\&"), e_(eX, eK, e1, "&", "\\&"), e_(ej, eK, e1, "ℵ", "\\aleph", !0), e_(ej, eK, e1, "∀", "\\forall", !0), e_(ej, eK, e1, "ℏ", "\\hbar", !0), e_(ej, eK, e1, "∃", "\\exists", !0), e_(ej, eK, e1, "∇", "\\nabla", !0), e_(ej, eK, e1, "♭", "\\flat", !0), e_(ej, eK, e1, "ℓ", "\\ell", !0), e_(ej, eK, e1, "♮", "\\natural", !0), e_(ej, eK, e1, "♣", "\\clubsuit", !0), e_(ej, eK, e1, "℘", "\\wp", !0), e_(ej, eK, e1, "♯", "\\sharp", !0), e_(ej, eK, e1, "♢", "\\diamondsuit", !0), e_(ej, eK, e1, "ℜ", "\\Re", !0), e_(ej, eK, e1, "♡", "\\heartsuit", !0), e_(ej, eK, e1, "ℑ", "\\Im", !0), e_(ej, eK, e1, "♠", "\\spadesuit", !0), e_(ej, eK, e1, "\xa7", "\\S", !0), e_(eX, eK, e1, "\xa7", "\\S"), e_(ej, eK, e1, "\xb6", "\\P", !0), e_(eX, eK, e1, "\xb6", "\\P"), e_(ej, eK, e1, "†", "\\dag"), e_(eX, eK, e1, "†", "\\dag"), e_(eX, eK, e1, "†", "\\textdagger"), e_(ej, eK, e1, "‡", "\\ddag"), e_(eX, eK, e1, "‡", "\\ddag"), e_(eX, eK, e1, "‡", "\\textdaggerdbl"), e_(ej, eK, eG, "⎱", "\\rmoustache", !0), e_(ej, eK, eQ, "⎰", "\\lmoustache", !0), e_(ej, eK, eG, "⟯", "\\rgroup", !0), e_(ej, eK, eQ, "⟮", "\\lgroup", !0), e_(ej, eK, "bin", "∓", "\\mp", !0), e_(ej, eK, "bin", "⊖", "\\ominus", !0), e_(ej, eK, "bin", "⊎", "\\uplus", !0), e_(ej, eK, "bin", "⊓", "\\sqcap", !0), e_(ej, eK, "bin", "∗", "\\ast"), e_(ej, eK, "bin", "⊔", "\\sqcup", !0), e_(ej, eK, "bin", "◯", "\\bigcirc", !0), e_(ej, eK, "bin", "∙", "\\bullet", !0), e_(ej, eK, "bin", "‡", "\\ddagger"), e_(ej, eK, "bin", "≀", "\\wr", !0), e_(ej, eK, "bin", "⨿", "\\amalg"), e_(ej, eK, "bin", "&", "\\And"), e_(ej, eK, "rel", "⟵", "\\longleftarrow", !0), e_(ej, eK, "rel", "⇐", "\\Leftarrow", !0), e_(ej, eK, "rel", "⟸", "\\Longleftarrow", !0), e_(ej, eK, "rel", "⟶", "\\longrightarrow", !0), e_(ej, eK, "rel", "⇒", "\\Rightarrow", !0), e_(ej, eK, "rel", "⟹", "\\Longrightarrow", !0), e_(ej, eK, "rel", "↔", "\\leftrightarrow", !0), e_(ej, eK, "rel", "⟷", "\\longleftrightarrow", !0), e_(ej, eK, "rel", "⇔", "\\Leftrightarrow", !0), e_(ej, eK, "rel", "⟺", "\\Longleftrightarrow", !0), e_(ej, eK, "rel", "↦", "\\mapsto", !0), e_(ej, eK, "rel", "⟼", "\\longmapsto", !0), e_(ej, eK, "rel", "↗", "\\nearrow", !0), e_(ej, eK, "rel", "↩", "\\hookleftarrow", !0), e_(ej, eK, "rel", "↪", "\\hookrightarrow", !0), e_(ej, eK, "rel", "↘", "\\searrow", !0), e_(ej, eK, "rel", "↼", "\\leftharpoonup", !0), e_(ej, eK, "rel", "⇀", "\\rightharpoonup", !0), e_(ej, eK, "rel", "↙", "\\swarrow", !0), e_(ej, eK, "rel", "↽", "\\leftharpoondown", !0), e_(ej, eK, "rel", "⇁", "\\rightharpoondown", !0), e_(ej, eK, "rel", "↖", "\\nwarrow", !0), e_(ej, eK, "rel", "⇌", "\\rightleftharpoons", !0), e_(ej, "ams", "rel", "≮", "\\nless", !0), e_(ej, "ams", "rel", "", "\\@nleqslant"), e_(ej, "ams", "rel", "", "\\@nleqq"), e_(ej, "ams", "rel", "⪇", "\\lneq", !0), e_(ej, "ams", "rel", "≨", "\\lneqq", !0), e_(ej, "ams", "rel", "", "\\@lvertneqq"), e_(ej, "ams", "rel", "⋦", "\\lnsim", !0), e_(ej, "ams", "rel", "⪉", "\\lnapprox", !0), e_(ej, "ams", "rel", "⊀", "\\nprec", !0), e_(ej, "ams", "rel", "⋠", "\\npreceq", !0), e_(ej, "ams", "rel", "⋨", "\\precnsim", !0), e_(ej, "ams", "rel", "⪹", "\\precnapprox", !0), e_(ej, "ams", "rel", "≁", "\\nsim", !0), e_(ej, "ams", "rel", "", "\\@nshortmid"), e_(ej, "ams", "rel", "∤", "\\nmid", !0), e_(ej, "ams", "rel", "⊬", "\\nvdash", !0), e_(ej, "ams", "rel", "⊭", "\\nvDash", !0), e_(ej, "ams", "rel", "⋪", "\\ntriangleleft"), e_(ej, "ams", "rel", "⋬", "\\ntrianglelefteq", !0), e_(ej, "ams", "rel", "⊊", "\\subsetneq", !0), e_(ej, "ams", "rel", "", "\\@varsubsetneq"), e_(ej, "ams", "rel", "⫋", "\\subsetneqq", !0), e_(ej, "ams", "rel", "", "\\@varsubsetneqq"), e_(ej, "ams", "rel", "≯", "\\ngtr", !0), e_(ej, "ams", "rel", "", "\\@ngeqslant"), e_(ej, "ams", "rel", "", "\\@ngeqq"), e_(ej, "ams", "rel", "⪈", "\\gneq", !0), e_(ej, "ams", "rel", "≩", "\\gneqq", !0), e_(ej, "ams", "rel", "", "\\@gvertneqq"), e_(ej, "ams", "rel", "⋧", "\\gnsim", !0), e_(ej, "ams", "rel", "⪊", "\\gnapprox", !0), e_(ej, "ams", "rel", "⊁", "\\nsucc", !0), e_(ej, "ams", "rel", "⋡", "\\nsucceq", !0), e_(ej, "ams", "rel", "⋩", "\\succnsim", !0), e_(ej, "ams", "rel", "⪺", "\\succnapprox", !0), e_(ej, "ams", "rel", "≆", "\\ncong", !0), e_(ej, "ams", "rel", "", "\\@nshortparallel"), e_(ej, "ams", "rel", "∦", "\\nparallel", !0), e_(ej, "ams", "rel", "⊯", "\\nVDash", !0), e_(ej, "ams", "rel", "⋫", "\\ntriangleright"), e_(ej, "ams", "rel", "⋭", "\\ntrianglerighteq", !0), e_(ej, "ams", "rel", "", "\\@nsupseteqq"), e_(ej, "ams", "rel", "⊋", "\\supsetneq", !0), e_(ej, "ams", "rel", "", "\\@varsupsetneq"), e_(ej, "ams", "rel", "⫌", "\\supsetneqq", !0), e_(ej, "ams", "rel", "", "\\@varsupsetneqq"), e_(ej, "ams", "rel", "⊮", "\\nVdash", !0), e_(ej, "ams", "rel", "⪵", "\\precneqq", !0), e_(ej, "ams", "rel", "⪶", "\\succneqq", !0), e_(ej, "ams", "rel", "", "\\@nsubseteqq"), e_(ej, "ams", "bin", "⊴", "\\unlhd"), e_(ej, "ams", "bin", "⊵", "\\unrhd"), e_(ej, "ams", "rel", "↚", "\\nleftarrow", !0), e_(ej, "ams", "rel", "↛", "\\nrightarrow", !0), e_(ej, "ams", "rel", "⇍", "\\nLeftarrow", !0), e_(ej, "ams", "rel", "⇏", "\\nRightarrow", !0), e_(ej, "ams", "rel", "↮", "\\nleftrightarrow", !0), e_(ej, "ams", "rel", "⇎", "\\nLeftrightarrow", !0), e_(ej, "ams", "rel", "△", "\\vartriangle"), e_(ej, "ams", e1, "ℏ", "\\hslash"), e_(ej, "ams", e1, "▽", "\\triangledown"), e_(ej, "ams", e1, "◊", "\\lozenge"), e_(ej, "ams", e1, "Ⓢ", "\\circledS"), e_(ej, "ams", e1, "\xae", "\\circledR"), e_(eX, "ams", e1, "\xae", "\\circledR"), e_(ej, "ams", e1, "∡", "\\measuredangle", !0), e_(ej, "ams", e1, "∄", "\\nexists"), e_(ej, "ams", e1, "℧", "\\mho"), e_(ej, "ams", e1, "Ⅎ", "\\Finv", !0), e_(ej, "ams", e1, "⅁", "\\Game", !0), e_(ej, "ams", e1, "‵", "\\backprime"), e_(ej, "ams", e1, "▲", "\\blacktriangle"), e_(ej, "ams", e1, "▼", "\\blacktriangledown"), e_(ej, "ams", e1, "■", "\\blacksquare"), e_(ej, "ams", e1, "⧫", "\\blacklozenge"), e_(ej, "ams", e1, "★", "\\bigstar"), e_(ej, "ams", e1, "∢", "\\sphericalangle", !0), e_(ej, "ams", e1, "∁", "\\complement", !0), e_(ej, "ams", e1, "\xf0", "\\eth", !0), e_(eX, eK, e1, "\xf0", "\xf0"), e_(ej, "ams", e1, "╱", "\\diagup"), e_(ej, "ams", e1, "╲", "\\diagdown"), e_(ej, "ams", e1, "□", "\\square"), e_(ej, "ams", e1, "□", "\\Box"), e_(ej, "ams", e1, "◊", "\\Diamond"), e_(ej, "ams", e1, "\xa5", "\\yen", !0), e_(eX, "ams", e1, "\xa5", "\\yen", !0), e_(ej, "ams", e1, "✓", "\\checkmark", !0), e_(eX, "ams", e1, "✓", "\\checkmark"), e_(ej, "ams", e1, "ℶ", "\\beth", !0), e_(ej, "ams", e1, "ℸ", "\\daleth", !0), e_(ej, "ams", e1, "ℷ", "\\gimel", !0), e_(ej, "ams", e1, "ϝ", "\\digamma", !0), e_(ej, "ams", e1, "ϰ", "\\varkappa"), e_(ej, "ams", eQ, "┌", "\\@ulcorner", !0), e_(ej, "ams", eG, "┐", "\\@urcorner", !0), e_(ej, "ams", eQ, "└", "\\@llcorner", !0), e_(ej, "ams", eG, "┘", "\\@lrcorner", !0), e_(ej, "ams", "rel", "≦", "\\leqq", !0), e_(ej, "ams", "rel", "⩽", "\\leqslant", !0), e_(ej, "ams", "rel", "⪕", "\\eqslantless", !0), e_(ej, "ams", "rel", "≲", "\\lesssim", !0), e_(ej, "ams", "rel", "⪅", "\\lessapprox", !0), e_(ej, "ams", "rel", "≊", "\\approxeq", !0), e_(ej, "ams", "bin", "⋖", "\\lessdot"), e_(ej, "ams", "rel", "⋘", "\\lll", !0), e_(ej, "ams", "rel", "≶", "\\lessgtr", !0), e_(ej, "ams", "rel", "⋚", "\\lesseqgtr", !0), e_(ej, "ams", "rel", "⪋", "\\lesseqqgtr", !0), e_(ej, "ams", "rel", "≑", "\\doteqdot"), e_(ej, "ams", "rel", "≓", "\\risingdotseq", !0), e_(ej, "ams", "rel", "≒", "\\fallingdotseq", !0), e_(ej, "ams", "rel", "∽", "\\backsim", !0), e_(ej, "ams", "rel", "⋍", "\\backsimeq", !0), e_(ej, "ams", "rel", "⫅", "\\subseteqq", !0), e_(ej, "ams", "rel", "⋐", "\\Subset", !0), e_(ej, "ams", "rel", "⊏", "\\sqsubset", !0), e_(ej, "ams", "rel", "≼", "\\preccurlyeq", !0), e_(ej, "ams", "rel", "⋞", "\\curlyeqprec", !0), e_(ej, "ams", "rel", "≾", "\\precsim", !0), e_(ej, "ams", "rel", "⪷", "\\precapprox", !0), e_(ej, "ams", "rel", "⊲", "\\vartriangleleft"), e_(ej, "ams", "rel", "⊴", "\\trianglelefteq"), e_(ej, "ams", "rel", "⊨", "\\vDash", !0), e_(ej, "ams", "rel", "⊪", "\\Vvdash", !0), e_(ej, "ams", "rel", "⌣", "\\smallsmile"), e_(ej, "ams", "rel", "⌢", "\\smallfrown"), e_(ej, "ams", "rel", "≏", "\\bumpeq", !0), e_(ej, "ams", "rel", "≎", "\\Bumpeq", !0), e_(ej, "ams", "rel", "≧", "\\geqq", !0), e_(ej, "ams", "rel", "⩾", "\\geqslant", !0), e_(ej, "ams", "rel", "⪖", "\\eqslantgtr", !0), e_(ej, "ams", "rel", "≳", "\\gtrsim", !0), e_(ej, "ams", "rel", "⪆", "\\gtrapprox", !0), e_(ej, "ams", "bin", "⋗", "\\gtrdot"), e_(ej, "ams", "rel", "⋙", "\\ggg", !0), e_(ej, "ams", "rel", "≷", "\\gtrless", !0), e_(ej, "ams", "rel", "⋛", "\\gtreqless", !0), e_(ej, "ams", "rel", "⪌", "\\gtreqqless", !0), e_(ej, "ams", "rel", "≖", "\\eqcirc", !0), e_(ej, "ams", "rel", "≗", "\\circeq", !0), e_(ej, "ams", "rel", "≜", "\\triangleq", !0), e_(ej, "ams", "rel", "∼", "\\thicksim"), e_(ej, "ams", "rel", "≈", "\\thickapprox"), e_(ej, "ams", "rel", "⫆", "\\supseteqq", !0), e_(ej, "ams", "rel", "⋑", "\\Supset", !0), e_(ej, "ams", "rel", "⊐", "\\sqsupset", !0), e_(ej, "ams", "rel", "≽", "\\succcurlyeq", !0), e_(ej, "ams", "rel", "⋟", "\\curlyeqsucc", !0), e_(ej, "ams", "rel", "≿", "\\succsim", !0), e_(ej, "ams", "rel", "⪸", "\\succapprox", !0), e_(ej, "ams", "rel", "⊳", "\\vartriangleright"), e_(ej, "ams", "rel", "⊵", "\\trianglerighteq"), e_(ej, "ams", "rel", "⊩", "\\Vdash", !0), e_(ej, "ams", "rel", "∣", "\\shortmid"), e_(ej, "ams", "rel", "∥", "\\shortparallel"), e_(ej, "ams", "rel", "≬", "\\between", !0), e_(ej, "ams", "rel", "⋔", "\\pitchfork", !0), e_(ej, "ams", "rel", "∝", "\\varpropto"), e_(ej, "ams", "rel", "◀", "\\blacktriangleleft"), e_(ej, "ams", "rel", "∴", "\\therefore", !0), e_(ej, "ams", "rel", "∍", "\\backepsilon"), e_(ej, "ams", "rel", "▶", "\\blacktriangleright"), e_(ej, "ams", "rel", "∵", "\\because", !0), e_(ej, "ams", "rel", "⋘", "\\llless"), e_(ej, "ams", "rel", "⋙", "\\gggtr"), e_(ej, "ams", "bin", "⊲", "\\lhd"), e_(ej, "ams", "bin", "⊳", "\\rhd"), e_(ej, "ams", "rel", "≂", "\\eqsim", !0), e_(ej, eK, "rel", "⋈", "\\Join"), e_(ej, "ams", "rel", "≑", "\\Doteq", !0), e_(ej, "ams", "bin", "∔", "\\dotplus", !0), e_(ej, "ams", "bin", "∖", "\\smallsetminus"), e_(ej, "ams", "bin", "⋒", "\\Cap", !0), e_(ej, "ams", "bin", "⋓", "\\Cup", !0), e_(ej, "ams", "bin", "⩞", "\\doublebarwedge", !0), e_(ej, "ams", "bin", "⊟", "\\boxminus", !0), e_(ej, "ams", "bin", "⊞", "\\boxplus", !0), e_(ej, "ams", "bin", "⋇", "\\divideontimes", !0), e_(ej, "ams", "bin", "⋉", "\\ltimes", !0), e_(ej, "ams", "bin", "⋊", "\\rtimes", !0), e_(ej, "ams", "bin", "⋋", "\\leftthreetimes", !0), e_(ej, "ams", "bin", "⋌", "\\rightthreetimes", !0), e_(ej, "ams", "bin", "⋏", "\\curlywedge", !0), e_(ej, "ams", "bin", "⋎", "\\curlyvee", !0), e_(ej, "ams", "bin", "⊝", "\\circleddash", !0), e_(ej, "ams", "bin", "⊛", "\\circledast", !0), e_(ej, "ams", "bin", "⋅", "\\centerdot"), e_(ej, "ams", "bin", "⊺", "\\intercal", !0), e_(ej, "ams", "bin", "⋒", "\\doublecap"), e_(ej, "ams", "bin", "⋓", "\\doublecup"), e_(ej, "ams", "bin", "⊠", "\\boxtimes", !0), e_(ej, "ams", "rel", "⇢", "\\dashrightarrow", !0), e_(ej, "ams", "rel", "⇠", "\\dashleftarrow", !0), e_(ej, "ams", "rel", "⇇", "\\leftleftarrows", !0), e_(ej, "ams", "rel", "⇆", "\\leftrightarrows", !0), e_(ej, "ams", "rel", "⇚", "\\Lleftarrow", !0), e_(ej, "ams", "rel", "↞", "\\twoheadleftarrow", !0), e_(ej, "ams", "rel", "↢", "\\leftarrowtail", !0), e_(ej, "ams", "rel", "↫", "\\looparrowleft", !0), e_(ej, "ams", "rel", "⇋", "\\leftrightharpoons", !0), e_(ej, "ams", "rel", "↶", "\\curvearrowleft", !0), e_(ej, "ams", "rel", "↺", "\\circlearrowleft", !0), e_(ej, "ams", "rel", "↰", "\\Lsh", !0), e_(ej, "ams", "rel", "⇈", "\\upuparrows", !0), e_(ej, "ams", "rel", "↿", "\\upharpoonleft", !0), e_(ej, "ams", "rel", "⇃", "\\downharpoonleft", !0), e_(ej, eK, "rel", "⊶", "\\origof", !0), e_(ej, eK, "rel", "⊷", "\\imageof", !0), e_(ej, "ams", "rel", "⊸", "\\multimap", !0), e_(ej, "ams", "rel", "↭", "\\leftrightsquigarrow", !0), e_(ej, "ams", "rel", "⇉", "\\rightrightarrows", !0), e_(ej, "ams", "rel", "⇄", "\\rightleftarrows", !0), e_(ej, "ams", "rel", "↠", "\\twoheadrightarrow", !0), e_(ej, "ams", "rel", "↣", "\\rightarrowtail", !0), e_(ej, "ams", "rel", "↬", "\\looparrowright", !0), e_(ej, "ams", "rel", "↷", "\\curvearrowright", !0), e_(ej, "ams", "rel", "↻", "\\circlearrowright", !0), e_(ej, "ams", "rel", "↱", "\\Rsh", !0), e_(ej, "ams", "rel", "⇊", "\\downdownarrows", !0), e_(ej, "ams", "rel", "↾", "\\upharpoonright", !0), e_(ej, "ams", "rel", "⇂", "\\downharpoonright", !0), e_(ej, "ams", "rel", "⇝", "\\rightsquigarrow", !0), e_(ej, "ams", "rel", "⇝", "\\leadsto"), e_(ej, "ams", "rel", "⇛", "\\Rrightarrow", !0), e_(ej, "ams", "rel", "↾", "\\restriction"), e_(ej, eK, e1, "‘", "`"), e_(ej, eK, e1, "$", "\\$"), e_(eX, eK, e1, "$", "\\$"), e_(eX, eK, e1, "$", "\\textdollar"), e_(ej, eK, e1, "%", "\\%"), e_(eX, eK, e1, "%", "\\%"), e_(ej, eK, e1, "_", "\\_"), e_(eX, eK, e1, "_", "\\_"), e_(eX, eK, e1, "_", "\\textunderscore"), e_(ej, eK, e1, "∠", "\\angle", !0), e_(ej, eK, e1, "∞", "\\infty", !0), e_(ej, eK, e1, "′", "\\prime"), e_(ej, eK, e1, "△", "\\triangle"), e_(ej, eK, e1, "Γ", "\\Gamma", !0), e_(ej, eK, e1, "Δ", "\\Delta", !0), e_(ej, eK, e1, "Θ", "\\Theta", !0), e_(ej, eK, e1, "Λ", "\\Lambda", !0), e_(ej, eK, e1, "Ξ", "\\Xi", !0), e_(ej, eK, e1, "Π", "\\Pi", !0), e_(ej, eK, e1, "Σ", "\\Sigma", !0), e_(ej, eK, e1, "Υ", "\\Upsilon", !0), e_(ej, eK, e1, "Φ", "\\Phi", !0), e_(ej, eK, e1, "Ψ", "\\Psi", !0), e_(ej, eK, e1, "Ω", "\\Omega", !0), e_(ej, eK, e1, "A", "Α"), e_(ej, eK, e1, "B", "Β"), e_(ej, eK, e1, "E", "Ε"), e_(ej, eK, e1, "Z", "Ζ"), e_(ej, eK, e1, "H", "Η"), e_(ej, eK, e1, "I", "Ι"), e_(ej, eK, e1, "K", "Κ"), e_(ej, eK, e1, "M", "Μ"), e_(ej, eK, e1, "N", "Ν"), e_(ej, eK, e1, "O", "Ο"), e_(ej, eK, e1, "P", "Ρ"), e_(ej, eK, e1, "T", "Τ"), e_(ej, eK, e1, "X", "Χ"), e_(ej, eK, e1, "\xac", "\\neg", !0), e_(ej, eK, e1, "\xac", "\\lnot"), e_(ej, eK, e1, "⊤", "\\top"), e_(ej, eK, e1, "⊥", "\\bot"), e_(ej, eK, e1, "∅", "\\emptyset"), e_(ej, "ams", e1, "∅", "\\varnothing"), e_(ej, eK, e$, "α", "\\alpha", !0), e_(ej, eK, e$, "β", "\\beta", !0), e_(ej, eK, e$, "γ", "\\gamma", !0), e_(ej, eK, e$, "δ", "\\delta", !0), e_(ej, eK, e$, "ϵ", "\\epsilon", !0), e_(ej, eK, e$, "ζ", "\\zeta", !0), e_(ej, eK, e$, "η", "\\eta", !0), e_(ej, eK, e$, "θ", "\\theta", !0), e_(ej, eK, e$, "ι", "\\iota", !0), e_(ej, eK, e$, "κ", "\\kappa", !0), e_(ej, eK, e$, "λ", "\\lambda", !0), e_(ej, eK, e$, "μ", "\\mu", !0), e_(ej, eK, e$, "ν", "\\nu", !0), e_(ej, eK, e$, "ξ", "\\xi", !0), e_(ej, eK, e$, "ο", "\\omicron", !0), e_(ej, eK, e$, "π", "\\pi", !0), e_(ej, eK, e$, "ρ", "\\rho", !0), e_(ej, eK, e$, "σ", "\\sigma", !0), e_(ej, eK, e$, "τ", "\\tau", !0), e_(ej, eK, e$, "υ", "\\upsilon", !0), e_(ej, eK, e$, "ϕ", "\\phi", !0), e_(ej, eK, e$, "χ", "\\chi", !0), e_(ej, eK, e$, "ψ", "\\psi", !0), e_(ej, eK, e$, "ω", "\\omega", !0), e_(ej, eK, e$, "ε", "\\varepsilon", !0), e_(ej, eK, e$, "ϑ", "\\vartheta", !0), e_(ej, eK, e$, "ϖ", "\\varpi", !0), e_(ej, eK, e$, "ϱ", "\\varrho", !0), e_(ej, eK, e$, "ς", "\\varsigma", !0), e_(ej, eK, e$, "φ", "\\varphi", !0), e_(ej, eK, "bin", "∗", "*", !0), e_(ej, eK, "bin", "+", "+"), e_(ej, eK, "bin", "−", "-", !0), e_(ej, eK, "bin", "⋅", "\\cdot", !0), e_(ej, eK, "bin", "∘", "\\circ", !0), e_(ej, eK, "bin", "\xf7", "\\div", !0), e_(ej, eK, "bin", "\xb1", "\\pm", !0), e_(ej, eK, "bin", "\xd7", "\\times", !0), e_(ej, eK, "bin", "∩", "\\cap", !0), e_(ej, eK, "bin", "∪", "\\cup", !0), e_(ej, eK, "bin", "∖", "\\setminus", !0), e_(ej, eK, "bin", "∧", "\\land"), e_(ej, eK, "bin", "∨", "\\lor"), e_(ej, eK, "bin", "∧", "\\wedge", !0), e_(ej, eK, "bin", "∨", "\\vee", !0), e_(ej, eK, e1, "√", "\\surd"), e_(ej, eK, eQ, "⟨", "\\langle", !0), e_(ej, eK, eQ, "∣", "\\lvert"), e_(ej, eK, eQ, "∥", "\\lVert"), e_(ej, eK, eG, "?", "?"), e_(ej, eK, eG, "!", "!"), e_(ej, eK, eG, "⟩", "\\rangle", !0), e_(ej, eK, eG, "∣", "\\rvert"), e_(ej, eK, eG, "∥", "\\rVert"), e_(ej, eK, "rel", "=", "="), e_(ej, eK, "rel", ":", ":"), e_(ej, eK, "rel", "≈", "\\approx", !0), e_(ej, eK, "rel", "≅", "\\cong", !0), e_(ej, eK, "rel", "≥", "\\ge"), e_(ej, eK, "rel", "≥", "\\geq", !0), e_(ej, eK, "rel", "←", "\\gets"), e_(ej, eK, "rel", ">", "\\gt", !0), e_(ej, eK, "rel", "∈", "\\in", !0), e_(ej, eK, "rel", "", "\\@not"), e_(ej, eK, "rel", "⊂", "\\subset", !0), e_(ej, eK, "rel", "⊃", "\\supset", !0), e_(ej, eK, "rel", "⊆", "\\subseteq", !0), e_(ej, eK, "rel", "⊇", "\\supseteq", !0), e_(ej, "ams", "rel", "⊈", "\\nsubseteq", !0), e_(ej, "ams", "rel", "⊉", "\\nsupseteq", !0), e_(ej, eK, "rel", "⊨", "\\models"), e_(ej, eK, "rel", "←", "\\leftarrow", !0), e_(ej, eK, "rel", "≤", "\\le"), e_(ej, eK, "rel", "≤", "\\leq", !0), e_(ej, eK, "rel", "<", "\\lt", !0), e_(ej, eK, "rel", "→", "\\rightarrow", !0), e_(ej, eK, "rel", "→", "\\to"), e_(ej, "ams", "rel", "≱", "\\ngeq", !0), e_(ej, "ams", "rel", "≰", "\\nleq", !0), e_(ej, eK, e0, "\xa0", "\\ "), e_(ej, eK, e0, "\xa0", "\\space"), e_(ej, eK, e0, "\xa0", "\\nobreakspace"), e_(eX, eK, e0, "\xa0", "\\ "), e_(eX, eK, e0, "\xa0", " "), e_(eX, eK, e0, "\xa0", "\\space"), e_(eX, eK, e0, "\xa0", "\\nobreakspace"), e_(ej, eK, e0, null, "\\nobreak"), e_(ej, eK, e0, null, "\\allowbreak"), e_(ej, eK, eJ, ",", ","), e_(ej, eK, eJ, ";", ";"), e_(ej, "ams", "bin", "⊼", "\\barwedge", !0), e_(ej, "ams", "bin", "⊻", "\\veebar", !0), e_(ej, eK, "bin", "⊙", "\\odot", !0), e_(ej, eK, "bin", "⊕", "\\oplus", !0), e_(ej, eK, "bin", "⊗", "\\otimes", !0), e_(ej, eK, e1, "∂", "\\partial", !0), e_(ej, eK, "bin", "⊘", "\\oslash", !0), e_(ej, "ams", "bin", "⊚", "\\circledcirc", !0), e_(ej, "ams", "bin", "⊡", "\\boxdot", !0), e_(ej, eK, "bin", "△", "\\bigtriangleup"), e_(ej, eK, "bin", "▽", "\\bigtriangledown"), e_(ej, eK, "bin", "†", "\\dagger"), e_(ej, eK, "bin", "⋄", "\\diamond"), e_(ej, eK, "bin", "⋆", "\\star"), e_(ej, eK, "bin", "◃", "\\triangleleft"), e_(ej, eK, "bin", "▹", "\\triangleright"), e_(ej, eK, eQ, "{", "\\{"), e_(eX, eK, e1, "{", "\\{"), e_(eX, eK, e1, "{", "\\textbraceleft"), e_(ej, eK, eG, "}", "\\}"), e_(eX, eK, e1, "}", "\\}"), e_(eX, eK, e1, "}", "\\textbraceright"), e_(ej, eK, eQ, "{", "\\lbrace"), e_(ej, eK, eG, "}", "\\rbrace"), e_(ej, eK, eQ, "[", "\\lbrack", !0), e_(eX, eK, e1, "[", "\\lbrack", !0), e_(ej, eK, eG, "]", "\\rbrack", !0), e_(eX, eK, e1, "]", "\\rbrack", !0), e_(ej, eK, eQ, "(", "\\lparen", !0), e_(ej, eK, eG, ")", "\\rparen", !0), e_(eX, eK, e1, "<", "\\textless", !0), e_(eX, eK, e1, ">", "\\textgreater", !0), e_(ej, eK, eQ, "⌊", "\\lfloor", !0), e_(ej, eK, eG, "⌋", "\\rfloor", !0), e_(ej, eK, eQ, "⌈", "\\lceil", !0), e_(ej, eK, eG, "⌉", "\\rceil", !0), e_(ej, eK, e1, "\\", "\\backslash"), e_(ej, eK, e1, "∣", "|"), e_(ej, eK, e1, "∣", "\\vert"), e_(eX, eK, e1, "|", "\\textbar", !0), e_(ej, eK, e1, "∥", "\\|"), e_(ej, eK, e1, "∥", "\\Vert"), e_(eX, eK, e1, "∥", "\\textbardbl"), e_(eX, eK, e1, "~", "\\textasciitilde"), e_(eX, eK, e1, "\\", "\\textbackslash"), e_(eX, eK, e1, "^", "\\textasciicircum"), e_(ej, eK, "rel", "↑", "\\uparrow", !0), e_(ej, eK, "rel", "⇑", "\\Uparrow", !0), e_(ej, eK, "rel", "↓", "\\downarrow", !0), e_(ej, eK, "rel", "⇓", "\\Downarrow", !0), e_(ej, eK, "rel", "↕", "\\updownarrow", !0), e_(ej, eK, "rel", "⇕", "\\Updownarrow", !0), e_(ej, eK, eZ, "∐", "\\coprod"), e_(ej, eK, eZ, "⋁", "\\bigvee"), e_(ej, eK, eZ, "⋀", "\\bigwedge"), e_(ej, eK, eZ, "⨄", "\\biguplus"), e_(ej, eK, eZ, "⋂", "\\bigcap"), e_(ej, eK, eZ, "⋃", "\\bigcup"), e_(ej, eK, eZ, "∫", "\\int"), e_(ej, eK, eZ, "∫", "\\intop"), e_(ej, eK, eZ, "∬", "\\iint"), e_(ej, eK, eZ, "∭", "\\iiint"), e_(ej, eK, eZ, "∏", "\\prod"), e_(ej, eK, eZ, "∑", "\\sum"), e_(ej, eK, eZ, "⨂", "\\bigotimes"), e_(ej, eK, eZ, "⨁", "\\bigoplus"), e_(ej, eK, eZ, "⨀", "\\bigodot"), e_(ej, eK, eZ, "∮", "\\oint"), e_(ej, eK, eZ, "∯", "\\oiint"), e_(ej, eK, eZ, "∰", "\\oiiint"), e_(ej, eK, eZ, "⨆", "\\bigsqcup"), e_(ej, eK, eZ, "∫", "\\smallint"), e_(eX, eK, eY, "…", "\\textellipsis"), e_(ej, eK, eY, "…", "\\mathellipsis"), e_(eX, eK, eY, "…", "\\ldots", !0), e_(ej, eK, eY, "…", "\\ldots", !0), e_(ej, eK, eY, "⋯", "\\@cdots", !0), e_(ej, eK, eY, "⋱", "\\ddots", !0), e_(ej, eK, e1, "⋮", "\\varvdots"), e_(eX, eK, e1, "⋮", "\\varvdots"), e_(ej, eK, eW, "ˊ", "\\acute"), e_(ej, eK, eW, "ˋ", "\\grave"), e_(ej, eK, eW, "\xa8", "\\ddot"), e_(ej, eK, eW, "~", "\\tilde"), e_(ej, eK, eW, "ˉ", "\\bar"), e_(ej, eK, eW, "˘", "\\breve"), e_(ej, eK, eW, "ˇ", "\\check"), e_(ej, eK, eW, "^", "\\hat"), e_(ej, eK, eW, "⃗", "\\vec"), e_(ej, eK, eW, "˙", "\\dot"), e_(ej, eK, eW, "˚", "\\mathring"), e_(ej, eK, e$, "", "\\@imath"), e_(ej, eK, e$, "", "\\@jmath"), e_(ej, eK, e1, "ı", "ı"), e_(ej, eK, e1, "ȷ", "ȷ"), e_(eX, eK, e1, "ı", "\\i", !0), e_(eX, eK, e1, "ȷ", "\\j", !0), e_(eX, eK, e1, "\xdf", "\\ss", !0), e_(eX, eK, e1, "\xe6", "\\ae", !0), e_(eX, eK, e1, "œ", "\\oe", !0), e_(eX, eK, e1, "\xf8", "\\o", !0), e_(eX, eK, e1, "\xc6", "\\AE", !0), e_(eX, eK, e1, "Œ", "\\OE", !0), e_(eX, eK, e1, "\xd8", "\\O", !0), e_(eX, eK, eW, "ˊ", "\\'"), e_(eX, eK, eW, "ˋ", "\\`"), e_(eX, eK, eW, "ˆ", "\\^"), e_(eX, eK, eW, "˜", "\\~"), e_(eX, eK, eW, "ˉ", "\\="), e_(eX, eK, eW, "˘", "\\u"), e_(eX, eK, eW, "˙", "\\."), e_(eX, eK, eW, "\xb8", "\\c"), e_(eX, eK, eW, "˚", "\\r"), e_(eX, eK, eW, "ˇ", "\\v"), e_(eX, eK, eW, "\xa8", '\\"'), e_(eX, eK, eW, "˝", "\\H"), e_(eX, eK, eW, "◯", "\\textcircled");
            var e4 = {
                "--": !0,
                "---": !0,
                "``": !0,
                "''": !0
            };
            e_(eX, eK, e1, "–", "--", !0), e_(eX, eK, e1, "–", "\\textendash"), e_(eX, eK, e1, "—", "---", !0), e_(eX, eK, e1, "—", "\\textemdash"), e_(eX, eK, e1, "‘", "`", !0), e_(eX, eK, e1, "‘", "\\textquoteleft"), e_(eX, eK, e1, "’", "'", !0), e_(eX, eK, e1, "’", "\\textquoteright"), e_(eX, eK, e1, "“", "``", !0), e_(eX, eK, e1, "“", "\\textquotedblleft"), e_(eX, eK, e1, "”", "''", !0), e_(eX, eK, e1, "”", "\\textquotedblright"), e_(ej, eK, e1, "\xb0", "\\degree", !0), e_(eX, eK, e1, "\xb0", "\\degree"), e_(eX, eK, e1, "\xb0", "\\textdegree", !0), e_(ej, eK, e1, "\xa3", "\\pounds"), e_(ej, eK, e1, "\xa3", "\\mathsterling", !0), e_(eX, eK, e1, "\xa3", "\\pounds"), e_(eX, eK, e1, "\xa3", "\\textsterling", !0), e_(ej, "ams", e1, "✠", "\\maltese"), e_(eX, "ams", e1, "✠", "\\maltese");
            for (var e5 = '0123456789/@."', e6 = 0; e6 < e5.length; e6++) {
                var e3 = e5.charAt(e6);
                e_(ej, eK, e1, e3, e3)
            }
            for (var e7 = '0123456789!@*()-=+";:?/.,', e2 = 0; e2 < e7.length; e2++) {
                var e8 = e7.charAt(e2);
                e_(eX, eK, e1, e8, e8)
            }
            for (var e9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", te = 0; te < e9.length; te++) {
                var tt = e9.charAt(te);
                e_(ej, eK, e$, tt, tt), e_(eX, eK, e1, tt, tt)
            }
            e_(ej, "ams", e1, "C", "ℂ"), e_(eX, "ams", e1, "C", "ℂ"), e_(ej, "ams", e1, "H", "ℍ"), e_(eX, "ams", e1, "H", "ℍ"), e_(ej, "ams", e1, "N", "ℕ"), e_(eX, "ams", e1, "N", "ℕ"), e_(ej, "ams", e1, "P", "ℙ"), e_(eX, "ams", e1, "P", "ℙ"), e_(ej, "ams", e1, "Q", "ℚ"), e_(eX, "ams", e1, "Q", "ℚ"), e_(ej, "ams", e1, "R", "ℝ"), e_(eX, "ams", e1, "R", "ℝ"), e_(ej, "ams", e1, "Z", "ℤ"), e_(eX, "ams", e1, "Z", "ℤ"), e_(ej, eK, e$, "h", "ℎ"), e_(eX, eK, e$, "h", "ℎ");
            for (var tn = "", tr = 0; tr < e9.length; tr++) {
                var ti = e9.charAt(tr);
                e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56320 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56372 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56424 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56580 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56684 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56736 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56788 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56840 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56944 + tr)), e_(eX, eK, e1, ti, tn), tr < 26 && (e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56632 + tr)), e_(eX, eK, e1, ti, tn), e_(ej, eK, e$, ti, tn = String.fromCharCode(55349, 56476 + tr)), e_(eX, eK, e1, ti, tn))
            }
            e_(ej, eK, e$, "k", tn = String.fromCharCode(55349, 56668)), e_(eX, eK, e1, "k", tn);
            for (var ta = 0; ta < 10; ta++) {
                var to = ta.toString();
                e_(ej, eK, e$, to, tn = String.fromCharCode(55349, 57294 + ta)), e_(eX, eK, e1, to, tn), e_(ej, eK, e$, to, tn = String.fromCharCode(55349, 57314 + ta)), e_(eX, eK, e1, to, tn), e_(ej, eK, e$, to, tn = String.fromCharCode(55349, 57324 + ta)), e_(eX, eK, e1, to, tn), e_(ej, eK, e$, to, tn = String.fromCharCode(55349, 57334 + ta)), e_(eX, eK, e1, to, tn)
            }
            for (var tl = "\xd0\xde\xfe", ts = 0; ts < tl.length; ts++) {
                var tu = tl.charAt(ts);
                e_(ej, eK, e$, tu, tu), e_(eX, eK, e1, tu, tu)
            }
            var tc = [
                    ["mathbf", "textbf", "Main-Bold"],
                    ["mathbf", "textbf", "Main-Bold"],
                    ["mathnormal", "textit", "Math-Italic"],
                    ["mathnormal", "textit", "Math-Italic"],
                    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                    ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                    ["mathscr", "textscr", "Script-Regular"],
                    ["", "", ""],
                    ["", "", ""],
                    ["", "", ""],
                    ["mathfrak", "textfrak", "Fraktur-Regular"],
                    ["mathfrak", "textfrak", "Fraktur-Regular"],
                    ["mathbb", "textbb", "AMS-Regular"],
                    ["mathbb", "textbb", "AMS-Regular"],
                    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
                    ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathitsf", "textitsf", "SansSerif-Italic"],
                    ["mathitsf", "textitsf", "SansSerif-Italic"],
                    ["", "", ""],
                    ["", "", ""],
                    ["mathtt", "texttt", "Typewriter-Regular"],
                    ["mathtt", "texttt", "Typewriter-Regular"]
                ],
                th = [
                    ["mathbf", "textbf", "Main-Bold"],
                    ["", "", ""],
                    ["mathsf", "textsf", "SansSerif-Regular"],
                    ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                    ["mathtt", "texttt", "Typewriter-Regular"]
                ],
                tp = function(e, t) {
                    var n = (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320) + 65536,
                        r = +("math" !== t);
                    if (119808 <= n && n < 120484) {
                        var i = Math.floor((n - 119808) / 26);
                        return [tc[i][2], tc[i][r]]
                    }
                    if (120782 <= n && n <= 120831) {
                        var a = Math.floor((n - 120782) / 10);
                        return [th[a][2], th[a][r]]
                    }
                    if (120485 === n || 120486 === n) return [tc[0][2], tc[0][r]];
                    if (120486 < n && n < 120782) return ["", ""];
                    throw new D("Unsupported character: " + e)
                },
                tm = function(e, t, n) {
                    return eV[n][e] && eV[n][e].replace && (e = eV[n][e].replace), {
                        value: e,
                        metrics: ed(e, t, n)
                    }
                },
                tf = function(e, t, n, r, i) {
                    var a, o = tm(e, t, n),
                        l = o.metrics;
                    if (e = o.value, l) {
                        var s = l.italic;
                        ("text" === n || r && "mathit" === r.font) && (s = 0), a = new eL(e, l.height, l.depth, s, l.skew, l.width, i)
                    } else "undefined" != typeof console && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '") + n + "'"), a = new eL(e, 0, 0, 0, 0, 0, i);
                    if (r) {
                        a.maxFontSize = r.sizeMultiplier, r.style.isTight() && a.classes.push("mtight");
                        var u = r.getColor();
                        u && (a.style.color = u)
                    }
                    return a
                },
                td = (e, t) => {
                    if (eT(e.classes) !== eT(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1;
                    if (1 === e.classes.length) {
                        var n = e.classes[0];
                        if ("mbin" === n || "mord" === n) return !1
                    }
                    for (var r in e.style)
                        if (e.style.hasOwnProperty(r) && e.style[r] !== t.style[r]) return !1;
                    for (var i in t.style)
                        if (t.style.hasOwnProperty(i) && e.style[i] !== t.style[i]) return !1;
                    return !0
                },
                tg = function(e) {
                    for (var t = 0, n = 0, r = 0, i = 0; i < e.children.length; i++) {
                        var a = e.children[i];
                        a.height > t && (t = a.height), a.depth > n && (n = a.depth), a.maxFontSize > r && (r = a.maxFontSize)
                    }
                    e.height = t, e.depth = n, e.maxFontSize = r
                },
                ty = function(e, t, n, r) {
                    var i = new eI(e, t, n, r);
                    return tg(i), i
                },
                tx = (e, t, n, r) => new eI(e, t, n, r),
                tb = function(e) {
                    var t = new eh(e);
                    return tg(t), t
                },
                tv = function(e) {
                    if ("individualShift" === e.positionType) {
                        for (var t, n = e.children, r = [n[0]], i = -n[0].shift - n[0].elem.depth, a = i, o = 1; o < n.length; o++) {
                            var l = -n[o].shift - a - n[o].elem.depth,
                                s = l - (n[o - 1].elem.height + n[o - 1].elem.depth);
                            a += l, r.push({
                                type: "kern",
                                size: s
                            }), r.push(n[o])
                        }
                        return {
                            children: r,
                            depth: i
                        }
                    }
                    if ("top" === e.positionType) {
                        for (var u = e.positionData, c = 0; c < e.children.length; c++) {
                            var h = e.children[c];
                            u -= "kern" === h.type ? h.size : h.elem.height + h.elem.depth
                        }
                        t = u
                    } else if ("bottom" === e.positionType) t = -e.positionData;
                    else {
                        var p = e.children[0];
                        if ("elem" !== p.type) throw Error('First child must have type "elem".');
                        if ("shift" === e.positionType) t = -p.elem.depth - e.positionData;
                        else if ("firstBaseline" === e.positionType) t = -p.elem.depth;
                        else throw Error("Invalid positionType " + e.positionType + ".")
                    }
                    return {
                        children: e.children,
                        depth: t
                    }
                },
                tk = function(e, t, n) {
                    var r = "";
                    switch (e) {
                        case "amsrm":
                            r = "AMS";
                            break;
                        case "textrm":
                            r = "Main";
                            break;
                        case "textsf":
                            r = "SansSerif";
                            break;
                        case "texttt":
                            r = "Typewriter";
                            break;
                        default:
                            r = e
                    }
                    return r + "-" + ("textbf" === t && "textit" === n ? "BoldItalic" : "textbf" === t ? "Bold" : "textit" === t ? "Italic" : "Regular")
                },
                tw = {
                    mathbf: {
                        variant: "bold",
                        fontName: "Main-Bold"
                    },
                    mathrm: {
                        variant: "normal",
                        fontName: "Main-Regular"
                    },
                    textit: {
                        variant: "italic",
                        fontName: "Main-Italic"
                    },
                    mathit: {
                        variant: "italic",
                        fontName: "Main-Italic"
                    },
                    mathnormal: {
                        variant: "italic",
                        fontName: "Math-Italic"
                    },
                    mathsfit: {
                        variant: "sans-serif-italic",
                        fontName: "SansSerif-Italic"
                    },
                    mathbb: {
                        variant: "double-struck",
                        fontName: "AMS-Regular"
                    },
                    mathcal: {
                        variant: "script",
                        fontName: "Caligraphic-Regular"
                    },
                    mathfrak: {
                        variant: "fraktur",
                        fontName: "Fraktur-Regular"
                    },
                    mathscr: {
                        variant: "script",
                        fontName: "Script-Regular"
                    },
                    mathsf: {
                        variant: "sans-serif",
                        fontName: "SansSerif-Regular"
                    },
                    mathtt: {
                        variant: "monospace",
                        fontName: "Typewriter-Regular"
                    }
                },
                tz = {
                    vec: ["vec", .471, .714],
                    oiintSize1: ["oiintSize1", .957, .499],
                    oiintSize2: ["oiintSize2", 1.472, .659],
                    oiiintSize1: ["oiiintSize1", 1.304, .499],
                    oiiintSize2: ["oiiintSize2", 1.98, .659]
                },
                tS = function(e, t, n, r) {
                    return (void 0 === r && (r = []), "boldsymbol" === n.font && tm(e, "Main-Bold", t).metrics) ? tf(e, "Main-Bold", t, n, r.concat(["mathbf"])) : "\\" === e || "main" === eV[t][e].font ? tf(e, "Main-Regular", t, n, r) : tf(e, "AMS-Regular", t, n, r.concat(["amsrm"]))
                },
                tA = function(e, t, n) {
                    var r = ty([e], [], t);
                    return r.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), r.style.borderBottomWidth = eA(r.height), r.maxFontSize = 1, r
                },
                tT = function(e, t, n, r) {
                    var i = new eB(e, t, n, r);
                    return tg(i), i
                },
                tM = function(e, t) {
                    return e instanceof eh ? ty([], [e], t) : e
                },
                tC = function(e, t) {
                    for (var n, {
                            children: r,
                            depth: i
                        } = tv(e), a = 0, o = 0; o < r.length; o++) {
                        var l = r[o];
                        if ("elem" === l.type) {
                            var s = l.elem;
                            a = Math.max(a, s.maxFontSize, s.height)
                        }
                    }
                    a += 2;
                    var u = ty(["pstrut"], []);
                    u.style.height = eA(a);
                    for (var c = [], h = i, p = i, m = i, f = 0; f < r.length; f++) {
                        var d = r[f];
                        if ("kern" === d.type) m += d.size;
                        else {
                            var g = d.elem,
                                y = ty(d.wrapperClasses || [], [u, g], void 0, d.wrapperStyle || {});
                            y.style.top = eA(-a - m - g.depth), d.marginLeft && (y.style.marginLeft = d.marginLeft), d.marginRight && (y.style.marginRight = d.marginRight), c.push(y), m += g.height + g.depth
                        }
                        h = Math.min(h, m), p = Math.max(p, m)
                    }
                    var x = ty(["vlist"], c);
                    if (x.style.height = eA(p), h < 0) {
                        var b = ty([], []),
                            v = ty(["vlist"], [b]);
                        v.style.height = eA(-h);
                        var k = ty(["vlist-s"], [new eL("​")]);
                        n = [ty(["vlist-r"], [x, k]), ty(["vlist-r"], [v])]
                    } else n = [ty(["vlist-r"], [x])];
                    var w = ty(["vlist-t"], n);
                    return 2 === n.length && w.classes.push("vlist-t2"), w.height = p, w.depth = -h, w
                },
                tE = function(e, t, n) {
                    var r = e.mode,
                        i = e.text,
                        a = ["mord"],
                        o = "math" === r || "text" === r && t.font,
                        l = o ? t.font : t.fontFamily,
                        s = "",
                        u = "";
                    if (55349 === i.charCodeAt(0) && ([s, u] = tp(i, r)), s.length > 0) return tf(i, s, r, t, a.concat(u));
                    if (l) {
                        if ("boldsymbol" === l) {
                            var c, h, p = "textord" !== n && tm(i, "Math-BoldItalic", r).metrics ? {
                                fontName: "Math-BoldItalic",
                                fontClass: "boldsymbol"
                            } : {
                                fontName: "Main-Bold",
                                fontClass: "mathbf"
                            };
                            c = p.fontName, h = [p.fontClass]
                        } else o ? (c = tw[l].fontName, h = [l]) : (c = tk(l, t.fontWeight, t.fontShape), h = [l, t.fontWeight, t.fontShape]);
                        if (tm(i, c, r).metrics) return tf(i, c, r, t, a.concat(h));
                        if (e4.hasOwnProperty(i) && "Typewriter" === c.slice(0, 10)) {
                            for (var m = [], f = 0; f < i.length; f++) m.push(tf(i[f], c, r, t, a.concat(h)));
                            return tb(m)
                        }
                    }
                    if ("mathord" === n) return tf(i, "Math-Italic", r, t, a.concat(["mathnormal"]));
                    if ("textord" === n) {
                        var d = eV[r][i] && eV[r][i].font;
                        if ("ams" === d) return tf(i, tk("amsrm", t.fontWeight, t.fontShape), r, t, a.concat("amsrm", t.fontWeight, t.fontShape));
                        if ("main" === d || !d) return tf(i, tk("textrm", t.fontWeight, t.fontShape), r, t, a.concat(t.fontWeight, t.fontShape));
                        var g = tk(d, t.fontWeight, t.fontShape);
                        return tf(i, g, r, t, a.concat(g, t.fontWeight, t.fontShape))
                    }
                    throw Error("unexpected type: " + n + " in makeOrd")
                },
                tR = (e, t) => {
                    var n = ty(["mspace"], [], t),
                        r = eS(e, t);
                    return n.style.marginRight = eA(r), n
                },
                tI = function(e, t) {
                    var [n, r, i] = tz[e], a = tx(["overlay"], [new eD([new eN(n)], {
                        width: eA(r),
                        height: eA(i),
                        style: "width:" + eA(r),
                        viewBox: "0 0 " + 1e3 * r + " " + 1e3 * i,
                        preserveAspectRatio: "xMinYMin"
                    })], t);
                    return a.height = i, a.style.height = eA(i), a.style.width = eA(r), a
                },
                tB = e => {
                    for (var t = 0; t < e.length - 1; t++) {
                        var n = e[t],
                            r = e[t + 1];
                        n instanceof eL && r instanceof eL && td(n, r) && (n.text += r.text, n.height = Math.max(n.height, r.height), n.depth = Math.max(n.depth, r.depth), n.italic = r.italic, e.splice(t + 1, 1), t--)
                    }
                    return e
                },
                tO = {
                    number: 3,
                    unit: "mu"
                },
                tP = {
                    number: 4,
                    unit: "mu"
                },
                tL = {
                    number: 5,
                    unit: "mu"
                },
                tD = {
                    mord: {
                        mop: tO,
                        mbin: tP,
                        mrel: tL,
                        minner: tO
                    },
                    mop: {
                        mord: tO,
                        mop: tO,
                        mrel: tL,
                        minner: tO
                    },
                    mbin: {
                        mord: tP,
                        mop: tP,
                        mopen: tP,
                        minner: tP
                    },
                    mrel: {
                        mord: tL,
                        mop: tL,
                        mopen: tL,
                        minner: tL
                    },
                    mopen: {},
                    mclose: {
                        mop: tO,
                        mbin: tP,
                        mrel: tL,
                        minner: tO
                    },
                    mpunct: {
                        mord: tO,
                        mop: tO,
                        mrel: tL,
                        mopen: tO,
                        mclose: tO,
                        mpunct: tO,
                        minner: tO
                    },
                    minner: {
                        mord: tO,
                        mop: tO,
                        mbin: tP,
                        mrel: tL,
                        mopen: tO,
                        mpunct: tO,
                        minner: tO
                    }
                },
                tN = {
                    mord: {
                        mop: tO
                    },
                    mop: {
                        mord: tO,
                        mop: tO
                    },
                    mbin: {},
                    mrel: {},
                    mopen: {},
                    mclose: {
                        mop: tO
                    },
                    mpunct: {},
                    minner: {
                        mop: tO
                    }
                },
                tq = {},
                tH = {},
                tF = {};

            function tU(e) {
                for (var {
                        type: t,
                        names: n,
                        props: r,
                        handler: i,
                        htmlBuilder: a,
                        mathmlBuilder: o
                    } = e, l = {
                        type: t,
                        numArgs: r.numArgs,
                        argTypes: r.argTypes,
                        allowedInArgument: !!r.allowedInArgument,
                        allowedInText: !!r.allowedInText,
                        allowedInMath: void 0 === r.allowedInMath || r.allowedInMath,
                        numOptionalArgs: r.numOptionalArgs || 0,
                        infix: !!r.infix,
                        primitive: !!r.primitive,
                        handler: i
                    }, s = 0; s < n.length; ++s) tq[n[s]] = l;
                t && (a && (tH[t] = a), o && (tF[t] = o))
            }

            function tV(e) {
                var {
                    type: t,
                    htmlBuilder: n,
                    mathmlBuilder: r
                } = e;
                tU({
                    type: t,
                    names: [],
                    props: {
                        numArgs: 0
                    },
                    handler() {
                        throw Error("Should never be called.")
                    },
                    htmlBuilder: n,
                    mathmlBuilder: r
                })
            }
            var t_ = function(e) {
                    return "ordgroup" === e.type && 1 === e.body.length ? e.body[0] : e
                },
                tj = function(e) {
                    return "ordgroup" === e.type ? e.body : [e]
                },
                tX = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
                tK = ["rightmost", "mrel", "mclose", "mpunct"],
                tW = {
                    display: er.DISPLAY,
                    text: er.TEXT,
                    script: er.SCRIPT,
                    scriptscript: er.SCRIPTSCRIPT
                },
                tG = {
                    mord: "mord",
                    mop: "mop",
                    mbin: "mbin",
                    mrel: "mrel",
                    mopen: "mopen",
                    mclose: "mclose",
                    mpunct: "mpunct",
                    minner: "minner"
                },
                tY = function(e, t, n, r) {
                    void 0 === r && (r = [null, null]);
                    for (var i = [], a = 0; a < e.length; a++) {
                        var o = t1(e[a], t);
                        if (o instanceof eh) {
                            var l = o.children;
                            i.push(...l)
                        } else i.push(o)
                    }
                    if (tB(i), !n) return i;
                    var s = t;
                    if (1 === e.length) {
                        var u = e[0];
                        "sizing" === u.type ? s = t.havingSize(u.size) : "styling" === u.type && (s = t.havingStyle(tW[u.style]))
                    }
                    var c = ty([r[0] || "leftmost"], [], t),
                        h = ty([r[1] || "rightmost"], [], t),
                        p = "root" === n;
                    return t$(i, (e, t) => {
                        var n = t.classes[0],
                            r = e.classes[0];
                        "mbin" === n && tK.includes(r) ? t.classes[0] = "mord" : "mbin" === r && tX.includes(n) && (e.classes[0] = "mord")
                    }, {
                        node: c
                    }, h, p), t$(i, (e, t) => {
                        var n = tJ(t),
                            r = tJ(e),
                            i = n && r ? e.hasClass("mtight") ? tN[n][r] : tD[n][r] : null;
                        if (i) return tR(i, s)
                    }, {
                        node: c
                    }, h, p), i
                },
                t$ = function e(t, n, r, i, a) {
                    i && t.push(i);
                    for (var o = 0; o < t.length; o++) {
                        let i;
                        var l = t[o],
                            s = tZ(l);
                        if (s) {
                            e(s.children, n, r, null, a);
                            continue
                        }
                        var u = !l.hasClass("mspace");
                        if (u) {
                            var c = n(l, r.node);
                            c && (r.insertAfter ? r.insertAfter(c) : (t.unshift(c), o++))
                        }
                        u ? r.node = l : a && l.hasClass("newline") && (r.node = ty(["leftmost"])), i = o, r.insertAfter = e => {
                            t.splice(i + 1, 0, e), o++
                        }
                    }
                    i && t.pop()
                },
                tZ = function(e) {
                    return e instanceof eh || e instanceof eB || e instanceof eI && e.hasClass("enclosing") ? e : null
                },
                tQ = function e(t, n) {
                    var r = tZ(t);
                    if (r) {
                        var i = r.children;
                        if (i.length) {
                            if ("right" === n) return e(i[i.length - 1], "right");
                            else if ("left" === n) return e(i[0], "left")
                        }
                    }
                    return t
                },
                tJ = function(e, t) {
                    return e ? (t && (e = tQ(e, t)), tG[e.classes[0]] || null) : null
                },
                t0 = function(e, t) {
                    var n = ["nulldelimiter"].concat(e.baseSizingClasses());
                    return ty(t.concat(n))
                },
                t1 = function(e, t, n) {
                    if (!e) return ty();
                    if (tH[e.type]) {
                        var r = tH[e.type](e, t);
                        if (n && t.size !== n.size) {
                            r = ty(t.sizingClasses(n), [r], t);
                            var i = t.sizeMultiplier / n.sizeMultiplier;
                            r.height *= i, r.depth *= i
                        }
                        return r
                    }
                    throw new D("Got group of unknown type: '" + e.type + "'")
                };

            function t4(e, t) {
                var n = ty(["base"], e, t),
                    r = ty(["strut"]);
                return r.style.height = eA(n.height + n.depth), n.depth && (r.style.verticalAlign = eA(-n.depth)), n.children.unshift(r), n
            }

            function t5(e, t) {
                var n, r, i = null;
                1 === e.length && "tag" === e[0].type && (i = e[0].tag, e = e[0].body);
                var a = tY(e, t, "root");
                2 === a.length && a[1].hasClass("tag") && (n = a.pop());
                for (var o = [], l = [], s = 0; s < a.length; s++)
                    if (l.push(a[s]), a[s].hasClass("mbin") || a[s].hasClass("mrel") || a[s].hasClass("allowbreak")) {
                        for (var u = !1; s < a.length - 1 && a[s + 1].hasClass("mspace") && !a[s + 1].hasClass("newline");) s++, l.push(a[s]), a[s].hasClass("nobreak") && (u = !0);
                        u || (o.push(t4(l, t)), l = [])
                    } else a[s].hasClass("newline") && (l.pop(), l.length > 0 && (o.push(t4(l, t)), l = []), o.push(a[s]));
                l.length > 0 && o.push(t4(l, t)), i ? ((r = t4(tY(i, t, !0))).classes = ["tag"], o.push(r)) : n && o.push(n);
                var c = ty(["katex-html"], o);
                if (c.setAttribute("aria-hidden", "true"), r) {
                    var h = r.children[0];
                    h.style.height = eA(c.height + c.depth), c.depth && (h.style.verticalAlign = eA(-c.depth))
                }
                return c
            }

            function t6(e) {
                return new eh(e)
            }
            class t3 {
                setAttribute(e, t) {
                    this.attributes[e] = t
                }
                getAttribute(e) {
                    return this.attributes[e]
                }
                toNode() {
                    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                    this.classes.length > 0 && (e.className = eT(this.classes));
                    for (var n = 0; n < this.children.length; n++)
                        if (this.children[n] instanceof t7 && this.children[n + 1] instanceof t7) {
                            for (var r = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof t7;) r += this.children[++n].toText();
                            e.appendChild(new t7(r).toNode())
                        } else e.appendChild(this.children[n].toNode());
                    return e
                }
                toMarkup() {
                    var e = "<" + this.type;
                    for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += _(this.attributes[t]), e += '"');
                    this.classes.length > 0 && (e += ' class ="' + _(eT(this.classes)) + '"'), e += ">";
                    for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
                    return e + ("</" + this.type + ">")
                }
                toText() {
                    return this.children.map(e => e.toText()).join("")
                }
                constructor(e, t, n) {
                    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || []
                }
            }
            class t7 {
                toNode() {
                    return document.createTextNode(this.text)
                }
                toMarkup() {
                    return _(this.toText())
                }
                toText() {
                    return this.text
                }
                constructor(e) {
                    this.text = void 0, this.text = e
                }
            }
            var t2 = class {
                    toNode() {
                        if (this.character) return document.createTextNode(this.character);
                        var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                        return e.setAttribute("width", eA(this.width)), e
                    }
                    toMarkup() {
                        return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + eA(this.width) + '"/>'
                    }
                    toText() {
                        return this.character ? this.character : " "
                    }
                    constructor(e) {
                        this.width = void 0, this.character = void 0, this.width = e, e >= .05555 && e <= .05556 ? this.character = " " : e >= .1666 && e <= .1667 ? this.character = " " : e >= .2222 && e <= .2223 ? this.character = " " : e >= .2777 && e <= .2778 ? this.character = "  " : e >= -.05556 && e <= -.05555 ? this.character = " ⁣" : e >= -.1667 && e <= -.1666 ? this.character = " ⁣" : e >= -.2223 && e <= -.2222 ? this.character = " ⁣" : e >= -.2778 && e <= -.2777 ? this.character = " ⁣" : this.character = null
                    }
                },
                t8 = function(e, t, n) {
                    return eV[t][e] && eV[t][e].replace && 55349 !== e.charCodeAt(0) && !(e4.hasOwnProperty(e) && n && (n.fontFamily && "tt" === n.fontFamily.slice(4, 6) || n.font && "tt" === n.font.slice(4, 6))) && (e = eV[t][e].replace), new t7(e)
                },
                t9 = function(e) {
                    return 1 === e.length ? e[0] : new t3("mrow", e)
                },
                ne = function(e, t) {
                    if ("texttt" === t.fontFamily) return "monospace";
                    if ("textsf" === t.fontFamily)
                        if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "sans-serif-bold-italic";
                        else if ("textit" === t.fontShape) return "sans-serif-italic";
                    else if ("textbf" === t.fontWeight) return "bold-sans-serif";
                    else return "sans-serif";
                    if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "bold-italic";
                    if ("textit" === t.fontShape) return "italic";
                    if ("textbf" === t.fontWeight) return "bold";
                    var n = t.font;
                    if (!n || "mathnormal" === n) return null;
                    var r = e.mode;
                    if ("mathit" === n) return "italic";
                    if ("boldsymbol" === n) return "textord" === e.type ? "bold" : "bold-italic";
                    if ("mathbf" === n) return "bold";
                    if ("mathbb" === n) return "double-struck";
                    if ("mathsfit" === n) return "sans-serif-italic";
                    else if ("mathfrak" === n) return "fraktur";
                    else if ("mathscr" === n || "mathcal" === n) return "script";
                    else if ("mathsf" === n) return "sans-serif";
                    else if ("mathtt" === n) return "monospace";
                    var i = e.text;
                    return ["\\imath", "\\jmath"].includes(i) ? null : (eV[r][i] && eV[r][i].replace && (i = eV[r][i].replace), ed(i, tw[n].fontName, r)) ? tw[n].variant : null
                };

            function nt(e) {
                if (!e) return !1;
                if ("mi" === e.type && 1 === e.children.length) {
                    var t = e.children[0];
                    return t instanceof t7 && "." === t.text
                }
                if ("mo" !== e.type || 1 !== e.children.length || "true" !== e.getAttribute("separator") || "0em" !== e.getAttribute("lspace") || "0em" !== e.getAttribute("rspace")) return !1;
                var n = e.children[0];
                return n instanceof t7 && "," === n.text
            }
            var nn = function(e, t, n) {
                    if (1 === e.length) {
                        var r, i = ni(e[0], t);
                        return n && i instanceof t3 && "mo" === i.type && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i]
                    }
                    for (var a = [], o = 0; o < e.length; o++) {
                        var l = ni(e[o], t);
                        if (l instanceof t3 && r instanceof t3) {
                            if ("mtext" === l.type && "mtext" === r.type && l.getAttribute("mathvariant") === r.getAttribute("mathvariant")) {
                                r.children.push(...l.children);
                                continue
                            } else if ("mn" === l.type && "mn" === r.type) {
                                r.children.push(...l.children);
                                continue
                            } else if (nt(l) && "mn" === r.type) {
                                r.children.push(...l.children);
                                continue
                            } else if ("mn" === l.type && nt(r)) l.children = [...r.children, ...l.children], a.pop();
                            else if (("msup" === l.type || "msub" === l.type) && l.children.length >= 1 && ("mn" === r.type || nt(r))) {
                                var s = l.children[0];
                                s instanceof t3 && "mn" === s.type && (s.children = [...r.children, ...s.children], a.pop())
                            } else if ("mi" === r.type && 1 === r.children.length) {
                                var u = r.children[0];
                                if (u instanceof t7 && "̸" === u.text && ("mo" === l.type || "mi" === l.type || "mn" === l.type)) {
                                    var c = l.children[0];
                                    c instanceof t7 && c.text.length > 0 && (c.text = c.text.slice(0, 1) + "̸" + c.text.slice(1), a.pop())
                                }
                            }
                        }
                        a.push(l), r = l
                    }
                    return a
                },
                nr = function(e, t, n) {
                    return t9(nn(e, t, n))
                },
                ni = function(e, t) {
                    if (!e) return new t3("mrow");
                    if (tF[e.type]) return tF[e.type](e, t);
                    throw new D("Got group of unknown type: '" + e.type + "'")
                };

            function na(e, t, n, r, i) {
                var a, o = nn(e, n);
                a = 1 === o.length && o[0] instanceof t3 && ["mrow", "mtable"].includes(o[0].type) ? o[0] : new t3("mrow", o);
                var l = new t3("annotation", [new t7(t)]);
                l.setAttribute("encoding", "application/x-tex");
                var s = new t3("semantics", [a, l]),
                    u = new t3("math", [s]);
                return u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && u.setAttribute("display", "block"), ty([i ? "katex" : "katex-mathml"], [u])
            }
            var no = function(e) {
                    return new ev({
                        style: e.displayMode ? er.DISPLAY : er.TEXT,
                        maxSize: e.maxSize,
                        minRuleThickness: e.minRuleThickness
                    })
                },
                nl = function(e, t) {
                    if (t.displayMode) {
                        var n = ["katex-display"];
                        t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = ty(n, [e])
                    }
                    return e
                },
                ns = function(e, t, n) {
                    var r, i = no(n);
                    return "mathml" === n.output ? na(e, t, i, n.displayMode, !0) : nl(r = "html" === n.output ? ty(["katex"], [t5(e, i)]) : ty(["katex"], [na(e, t, i, n.displayMode, !1), t5(e, i)]), n)
                },
                nu = {
                    widehat: "^",
                    widecheck: "ˇ",
                    widetilde: "~",
                    utilde: "~",
                    overleftarrow: "←",
                    underleftarrow: "←",
                    xleftarrow: "←",
                    overrightarrow: "→",
                    underrightarrow: "→",
                    xrightarrow: "→",
                    underbrace: "⏟",
                    overbrace: "⏞",
                    overgroup: "⏠",
                    undergroup: "⏡",
                    overleftrightarrow: "↔",
                    underleftrightarrow: "↔",
                    xleftrightarrow: "↔",
                    Overrightarrow: "⇒",
                    xRightarrow: "⇒",
                    overleftharpoon: "↼",
                    xleftharpoonup: "↼",
                    overrightharpoon: "⇀",
                    xrightharpoonup: "⇀",
                    xLeftarrow: "⇐",
                    xLeftrightarrow: "⇔",
                    xhookleftarrow: "↩",
                    xhookrightarrow: "↪",
                    xmapsto: "↦",
                    xrightharpoondown: "⇁",
                    xleftharpoondown: "↽",
                    xrightleftharpoons: "⇌",
                    xleftrightharpoons: "⇋",
                    xtwoheadleftarrow: "↞",
                    xtwoheadrightarrow: "↠",
                    xlongequal: "=",
                    xtofrom: "⇄",
                    xrightleftarrows: "⇄",
                    xrightequilibrium: "⇌",
                    xleftequilibrium: "⇋",
                    "\\cdrightarrow": "→",
                    "\\cdleftarrow": "←",
                    "\\cdlongequal": "="
                },
                nc = {
                    overrightarrow: [
                        ["rightarrow"], .888, 522, "xMaxYMin"
                    ],
                    overleftarrow: [
                        ["leftarrow"], .888, 522, "xMinYMin"
                    ],
                    underrightarrow: [
                        ["rightarrow"], .888, 522, "xMaxYMin"
                    ],
                    underleftarrow: [
                        ["leftarrow"], .888, 522, "xMinYMin"
                    ],
                    xrightarrow: [
                        ["rightarrow"], 1.469, 522, "xMaxYMin"
                    ],
                    "\\cdrightarrow": [
                        ["rightarrow"], 3, 522, "xMaxYMin"
                    ],
                    xleftarrow: [
                        ["leftarrow"], 1.469, 522, "xMinYMin"
                    ],
                    "\\cdleftarrow": [
                        ["leftarrow"], 3, 522, "xMinYMin"
                    ],
                    Overrightarrow: [
                        ["doublerightarrow"], .888, 560, "xMaxYMin"
                    ],
                    xRightarrow: [
                        ["doublerightarrow"], 1.526, 560, "xMaxYMin"
                    ],
                    xLeftarrow: [
                        ["doubleleftarrow"], 1.526, 560, "xMinYMin"
                    ],
                    overleftharpoon: [
                        ["leftharpoon"], .888, 522, "xMinYMin"
                    ],
                    xleftharpoonup: [
                        ["leftharpoon"], .888, 522, "xMinYMin"
                    ],
                    xleftharpoondown: [
                        ["leftharpoondown"], .888, 522, "xMinYMin"
                    ],
                    overrightharpoon: [
                        ["rightharpoon"], .888, 522, "xMaxYMin"
                    ],
                    xrightharpoonup: [
                        ["rightharpoon"], .888, 522, "xMaxYMin"
                    ],
                    xrightharpoondown: [
                        ["rightharpoondown"], .888, 522, "xMaxYMin"
                    ],
                    xlongequal: [
                        ["longequal"], .888, 334, "xMinYMin"
                    ],
                    "\\cdlongequal": [
                        ["longequal"], 3, 334, "xMinYMin"
                    ],
                    xtwoheadleftarrow: [
                        ["twoheadleftarrow"], .888, 334, "xMinYMin"
                    ],
                    xtwoheadrightarrow: [
                        ["twoheadrightarrow"], .888, 334, "xMaxYMin"
                    ],
                    overleftrightarrow: [
                        ["leftarrow", "rightarrow"], .888, 522
                    ],
                    overbrace: [
                        ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
                    ],
                    underbrace: [
                        ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
                    ],
                    underleftrightarrow: [
                        ["leftarrow", "rightarrow"], .888, 522
                    ],
                    xleftrightarrow: [
                        ["leftarrow", "rightarrow"], 1.75, 522
                    ],
                    xLeftrightarrow: [
                        ["doubleleftarrow", "doublerightarrow"], 1.75, 560
                    ],
                    xrightleftharpoons: [
                        ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
                    ],
                    xleftrightharpoons: [
                        ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
                    ],
                    xhookleftarrow: [
                        ["leftarrow", "righthook"], 1.08, 522
                    ],
                    xhookrightarrow: [
                        ["lefthook", "rightarrow"], 1.08, 522
                    ],
                    overlinesegment: [
                        ["leftlinesegment", "rightlinesegment"], .888, 522
                    ],
                    underlinesegment: [
                        ["leftlinesegment", "rightlinesegment"], .888, 522
                    ],
                    overgroup: [
                        ["leftgroup", "rightgroup"], .888, 342
                    ],
                    undergroup: [
                        ["leftgroupunder", "rightgroupunder"], .888, 342
                    ],
                    xmapsto: [
                        ["leftmapsto", "rightarrow"], 1.5, 522
                    ],
                    xtofrom: [
                        ["leftToFrom", "rightToFrom"], 1.75, 528
                    ],
                    xrightleftarrows: [
                        ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
                    ],
                    xrightequilibrium: [
                        ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
                    ],
                    xleftequilibrium: [
                        ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
                    ]
                },
                nh = function(e, t, n, r, i) {
                    var a, o = e.height + e.depth + n + r;
                    if (/fbox|color|angl/.test(t)) {
                        if (a = ty(["stretchy", t], [], i), "fbox" === t) {
                            var l = i.color && i.getColor();
                            l && (a.style.borderColor = l)
                        }
                    } else {
                        var s = [];
                        /^[bx]cancel$/.test(t) && s.push(new eq({
                            x1: "0",
                            y1: "0",
                            x2: "100%",
                            y2: "100%",
                            "stroke-width": "0.046em"
                        })), /^x?cancel$/.test(t) && s.push(new eq({
                            x1: "0",
                            y1: "100%",
                            x2: "100%",
                            y2: "0",
                            "stroke-width": "0.046em"
                        })), a = tx([], [new eD(s, {
                            width: "100%",
                            height: eA(o)
                        })], i)
                    }
                    return a.height = o, a.style.height = eA(o), a
                },
                np = function(e) {
                    var t = new t3("mo", [new t7(nu[e.replace(/^\\/, "")])]);
                    return t.setAttribute("stretchy", "true"), t
                },
                nm = function(e, t) {
                    var {
                        span: n,
                        minWidth: r,
                        height: i
                    } = function() {
                        var n = 4e5,
                            r = e.label.slice(1);
                        if (["widehat", "widecheck", "widetilde", "utilde"].includes(r)) {
                            var i, a, o, l, s = "ordgroup" === (l = e.base).type ? l.body.length : 1;
                            if (s > 5) "widehat" === r || "widecheck" === r ? (i = 420, n = 2364, o = .42, a = r + "4") : (i = 312, n = 2340, o = .34, a = "tilde4");
                            else {
                                var u = [1, 1, 2, 2, 3, 3][s];
                                "widehat" === r || "widecheck" === r ? (n = [0, 1062, 2364, 2364, 2364][u], i = [0, 239, 300, 360, 420][u], o = [0, .24, .3, .3, .36, .42][u], a = r + u) : (n = [0, 600, 1033, 2339, 2340][u], i = [0, 260, 286, 306, 312][u], o = [0, .26, .286, .3, .306, .34][u], a = "tilde" + u)
                            }
                            return {
                                span: tx([], [new eD([new eN(a)], {
                                    width: "100%",
                                    height: eA(o),
                                    viewBox: "0 0 " + n + " " + i,
                                    preserveAspectRatio: "none"
                                })], t),
                                minWidth: 0,
                                height: o
                            }
                        }
                        var c, h, p = [],
                            m = nc[r],
                            [f, d, g] = m,
                            y = g / 1e3,
                            x = f.length;
                        if (1 === x) c = ["hide-tail"], h = [m[3]];
                        else if (2 === x) c = ["halfarrow-left", "halfarrow-right"], h = ["xMinYMin", "xMaxYMin"];
                        else if (3 === x) c = ["brace-left", "brace-center", "brace-right"], h = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                        else throw Error("Correct katexImagesData or update code here to support\n                    " + x + " children.");
                        for (var b = 0; b < x; b++) {
                            var v = new eD([new eN(f[b])], {
                                    width: "400em",
                                    height: eA(y),
                                    viewBox: "0 0 " + n + " " + g,
                                    preserveAspectRatio: h[b] + " slice"
                                }),
                                k = tx([c[b]], [v], t);
                            if (1 === x) return {
                                span: k,
                                minWidth: d,
                                height: y
                            };
                            k.style.height = eA(y), p.push(k)
                        }
                        return {
                            span: ty(["stretchy"], p, t),
                            minWidth: d,
                            height: y
                        }
                    }();
                    return n.height = i, n.style.height = eA(i), r > 0 && (n.style.minWidth = eA(r)), n
                };

            function nf(e, t) {
                if (!e || e.type !== t) throw Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
                return e
            }

            function nd(e) {
                var t = ng(e);
                if (!t) throw Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
                return t
            }

            function ng(e) {
                return e && ("atom" === e.type || eU.hasOwnProperty(e.type)) ? e : null
            }
            var ny = (e, t) => {
                    e && "supsub" === e.type ? (l = (s = nf(e.base, "accent")).base, e.base = l, u = function(e) {
                        if (e instanceof eI) return e;
                        throw Error("Expected span<HtmlDomNode> but got " + String(e) + ".")
                    }(t1(e, t)), e.base = s) : l = (s = nf(e, "accent")).base;
                    var n = t1(l, t.havingCrampedStyle()),
                        r = s.isShifty && X(l),
                        i = 0;
                    r && (i = eH(t1(F(l), t.havingCrampedStyle())).skew);
                    var a = "\\c" === s.label,
                        o = a ? n.height + n.depth : Math.min(n.height, t.fontMetrics().xHeight);
                    if (s.isStretchy) p = tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: n
                        }, {
                            type: "elem",
                            elem: p = nm(s, t),
                            wrapperClasses: ["svg-align"],
                            wrapperStyle: i > 0 ? {
                                width: "calc(100% - " + eA(2 * i) + ")",
                                marginLeft: eA(2 * i)
                            } : void 0
                        }]
                    }, t);
                    else {
                        "\\vec" === s.label ? (c = tI("vec", t), h = tz.vec[1]) : ((c = eH(c = tE({
                            mode: s.mode,
                            text: s.label
                        }, t, "textord"))).italic = 0, h = c.width, a && (o += c.depth));
                        var l, s, u, c, h, p = ty(["accent-body"], [c]),
                            m = "\\textcircled" === s.label;
                        m && (p.classes.push("accent-full"), o = n.height);
                        var f = i;
                        m || (f -= h / 2), p.style.left = eA(f), "\\textcircled" === s.label && (p.style.top = ".2em"), p = tC({
                            positionType: "firstBaseline",
                            children: [{
                                type: "elem",
                                elem: n
                            }, {
                                type: "kern",
                                size: -o
                            }, {
                                type: "elem",
                                elem: p
                            }]
                        }, t)
                    }
                    var d = ty(["mord", "accent"], [p], t);
                    return u ? (u.children[0] = d, u.height = Math.max(d.height, u.height), u.classes[0] = "mord", u) : d
                },
                nx = (e, t) => {
                    var n = e.isStretchy ? np(e.label) : new t3("mo", [t8(e.label, e.mode)]),
                        r = new t3("mover", [ni(e.base, t), n]);
                    return r.setAttribute("accent", "true"), r
                },
                nb = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(e => "\\" + e).join("|"));
            tU({
                type: "accent",
                names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
                props: {
                    numArgs: 1
                },
                handler: (e, t) => {
                    var n = t_(t[0]),
                        r = !nb.test(e.funcName),
                        i = !r || "\\widehat" === e.funcName || "\\widetilde" === e.funcName || "\\widecheck" === e.funcName;
                    return {
                        type: "accent",
                        mode: e.parser.mode,
                        label: e.funcName,
                        isStretchy: r,
                        isShifty: i,
                        base: n
                    }
                },
                htmlBuilder: ny,
                mathmlBuilder: nx
            }), tU({
                type: "accent",
                names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
                props: {
                    numArgs: 1,
                    allowedInText: !0,
                    allowedInMath: !0,
                    argTypes: ["primitive"]
                },
                handler: (e, t) => {
                    var n = t[0],
                        r = e.parser.mode;
                    return "math" === r && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), r = "text"), {
                        type: "accent",
                        mode: r,
                        label: e.funcName,
                        isStretchy: !1,
                        isShifty: !0,
                        base: n
                    }
                },
                htmlBuilder: ny,
                mathmlBuilder: nx
            }), tU({
                type: "accentUnder",
                names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
                props: {
                    numArgs: 1
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "accentUnder",
                        mode: n.mode,
                        label: r,
                        base: i
                    }
                },
                htmlBuilder: (e, t) => {
                    var n = t1(e.base, t),
                        r = nm(e, t),
                        i = .12 * ("\\utilde" === e.label);
                    return ty(["mord", "accentunder"], [tC({
                        positionType: "top",
                        positionData: n.height,
                        children: [{
                            type: "elem",
                            elem: r,
                            wrapperClasses: ["svg-align"]
                        }, {
                            type: "kern",
                            size: i
                        }, {
                            type: "elem",
                            elem: n
                        }]
                    }, t)], t)
                },
                mathmlBuilder: (e, t) => {
                    var n = np(e.label),
                        r = new t3("munder", [ni(e.base, t), n]);
                    return r.setAttribute("accentunder", "true"), r
                }
            });
            var nv = e => {
                var t = new t3("mpadded", e ? [e] : []);
                return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t
            };

            function nk(e, t) {
                var n = tY(e.body, t, !0);
                return ty([e.mclass], n, t)
            }

            function nw(e, t) {
                var n, r = nn(e.body, t);
                return "minner" === e.mclass ? n = new t3("mpadded", r) : "mord" === e.mclass ? e.isCharacterBox ? (n = r[0]).type = "mi" : n = new t3("mi", r) : (e.isCharacterBox ? (n = r[0]).type = "mo" : n = new t3("mo", r), "mbin" === e.mclass ? (n.attributes.lspace = "0.22em", n.attributes.rspace = "0.22em") : "mpunct" === e.mclass ? (n.attributes.lspace = "0em", n.attributes.rspace = "0.17em") : "mopen" === e.mclass || "mclose" === e.mclass ? (n.attributes.lspace = "0em", n.attributes.rspace = "0em") : "minner" === e.mclass && (n.attributes.lspace = "0.0556em", n.attributes.width = "+0.1111em")), n
            }
            tU({
                type: "xArrow",
                names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
                props: {
                    numArgs: 1,
                    numOptionalArgs: 1
                },
                handler(e, t, n) {
                    var {
                        parser: r,
                        funcName: i
                    } = e;
                    return {
                        type: "xArrow",
                        mode: r.mode,
                        label: i,
                        body: t[0],
                        below: n[0]
                    }
                },
                htmlBuilder(e, t) {
                    var n, r, i = t.style,
                        a = t.havingStyle(i.sup()),
                        o = tM(t1(e.body, a, t), t),
                        l = "\\x" === e.label.slice(0, 2) ? "x" : "cd";
                    o.classes.push(l + "-arrow-pad"), e.below && (a = t.havingStyle(i.sub()), (n = tM(t1(e.below, a, t), t)).classes.push(l + "-arrow-pad"));
                    var s = nm(e, t),
                        u = -t.fontMetrics().axisHeight + .5 * s.height,
                        c = -t.fontMetrics().axisHeight - .5 * s.height - .111;
                    if ((o.depth > .25 || "\\xleftequilibrium" === e.label) && (c -= o.depth), n) {
                        var h = -t.fontMetrics().axisHeight + n.height + .5 * s.height + .111;
                        r = tC({
                            positionType: "individualShift",
                            children: [{
                                type: "elem",
                                elem: o,
                                shift: c
                            }, {
                                type: "elem",
                                elem: s,
                                shift: u
                            }, {
                                type: "elem",
                                elem: n,
                                shift: h
                            }]
                        }, t)
                    } else r = tC({
                        positionType: "individualShift",
                        children: [{
                            type: "elem",
                            elem: o,
                            shift: c
                        }, {
                            type: "elem",
                            elem: s,
                            shift: u
                        }]
                    }, t);
                    return r.children[0].children[0].children[1].classes.push("svg-align"), ty(["mrel", "x-arrow"], [r], t)
                },
                mathmlBuilder(e, t) {
                    var n, r = np(e.label);
                    if (r.setAttribute("minsize", "x" === e.label.charAt(0) ? "1.75em" : "3.0em"), e.body) {
                        var i = nv(ni(e.body, t));
                        n = e.below ? new t3("munderover", [r, nv(ni(e.below, t)), i]) : new t3("mover", [r, i])
                    } else n = e.below ? new t3("munder", [r, nv(ni(e.below, t))]) : new t3("mover", [r, n = nv()]);
                    return n
                }
            }), tU({
                type: "mclass",
                names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
                props: {
                    numArgs: 1,
                    primitive: !0
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "mclass",
                        mode: n.mode,
                        mclass: "m" + r.slice(5),
                        body: tj(i),
                        isCharacterBox: X(i)
                    }
                },
                htmlBuilder: nk,
                mathmlBuilder: nw
            });
            var nz = e => {
                var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e;
                return "atom" === t.type && ("bin" === t.family || "rel" === t.family) ? "m" + t.family : "mord"
            };
            tU({
                type: "mclass",
                names: ["\\@binrel"],
                props: {
                    numArgs: 2
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "mclass",
                        mode: n.mode,
                        mclass: nz(t[0]),
                        body: tj(t[1]),
                        isCharacterBox: X(t[1])
                    }
                }
            }), tU({
                type: "mclass",
                names: ["\\stackrel", "\\overset", "\\underset"],
                props: {
                    numArgs: 2
                },
                handler(e, t) {
                    var n, {
                            parser: r,
                            funcName: i
                        } = e,
                        a = t[1],
                        o = t[0];
                    n = "\\stackrel" !== i ? nz(a) : "mrel";
                    var l = {
                            type: "op",
                            mode: a.mode,
                            limits: !0,
                            alwaysHandleSupSub: !0,
                            parentIsSupSub: !1,
                            symbol: !1,
                            suppressBaseShift: "\\stackrel" !== i,
                            body: tj(a)
                        },
                        s = {
                            type: "supsub",
                            mode: o.mode,
                            base: l,
                            sup: "\\underset" === i ? null : o,
                            sub: "\\underset" === i ? o : null
                        };
                    return {
                        type: "mclass",
                        mode: r.mode,
                        mclass: n,
                        body: [s],
                        isCharacterBox: X(s)
                    }
                },
                htmlBuilder: nk,
                mathmlBuilder: nw
            }), tU({
                type: "pmb",
                names: ["\\pmb"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "pmb",
                        mode: n.mode,
                        mclass: nz(t[0]),
                        body: tj(t[0])
                    }
                },
                htmlBuilder(e, t) {
                    var n = tY(e.body, t, !0),
                        r = ty([e.mclass], n, t);
                    return r.style.textShadow = "0.02em 0.01em 0.04px", r
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mstyle", nn(e.body, t));
                    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n
                }
            });
            var nS = {
                    ">": "\\\\cdrightarrow",
                    "<": "\\\\cdleftarrow",
                    "=": "\\\\cdlongequal",
                    A: "\\uparrow",
                    V: "\\downarrow",
                    "|": "\\Vert",
                    ".": "no arrow"
                },
                nA = () => ({
                    type: "styling",
                    body: [],
                    mode: "math",
                    style: "display"
                }),
                nT = e => "textord" === e.type && "@" === e.text,
                nM = (e, t) => ("mathord" === e.type || "atom" === e.type) && e.text === t;
            tU({
                type: "cdlabel",
                names: ["\\\\cdleft", "\\\\cdright"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e;
                    return {
                        type: "cdlabel",
                        mode: n.mode,
                        side: r.slice(4),
                        label: t[0]
                    }
                },
                htmlBuilder(e, t) {
                    var n = t.havingStyle(t.style.sup()),
                        r = tM(t1(e.label, n, t), t);
                    return r.classes.push("cd-label-" + e.side), r.style.bottom = eA(.8 - r.depth), r.height = 0, r.depth = 0, r
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mrow", [ni(e.label, t)]);
                    return (n = new t3("mpadded", [n])).setAttribute("width", "0"), "left" === e.side && n.setAttribute("lspace", "-1width"), n.setAttribute("voffset", "0.7em"), (n = new t3("mstyle", [n])).setAttribute("displaystyle", "false"), n.setAttribute("scriptlevel", "1"), n
                }
            }), tU({
                type: "cdlabelparent",
                names: ["\\\\cdparent"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "cdlabelparent",
                        mode: n.mode,
                        fragment: t[0]
                    }
                },
                htmlBuilder(e, t) {
                    var n = tM(t1(e.fragment, t), t);
                    return n.classes.push("cd-vert-arrow"), n
                },
                mathmlBuilder: (e, t) => new t3("mrow", [ni(e.fragment, t)])
            }), tU({
                type: "textord",
                names: ["\\@char"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler(e, t) {
                    for (var n, {
                            parser: r
                        } = e, i = nf(t[0], "ordgroup").body, a = "", o = 0; o < i.length; o++) a += nf(i[o], "textord").text;
                    var l = parseInt(a);
                    if (isNaN(l)) throw new D("\\@char has non-numeric argument " + a);
                    if (l < 0 || l >= 1114111) throw new D("\\@char with invalid code point " + a);
                    return l <= 65535 ? n = String.fromCharCode(l) : (l -= 65536, n = String.fromCharCode((l >> 10) + 55296, (1023 & l) + 56320)), {
                        type: "textord",
                        mode: r.mode,
                        text: n
                    }
                }
            });
            var nC = (e, t) => tb(tY(e.body, t.withColor(e.color), !1)),
                nE = (e, t) => {
                    var n = new t3("mstyle", nn(e.body, t.withColor(e.color)));
                    return n.setAttribute("mathcolor", e.color), n
                };
            tU({
                type: "color",
                names: ["\\textcolor"],
                props: {
                    numArgs: 2,
                    allowedInText: !0,
                    argTypes: ["color", "original"]
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e, r = nf(t[0], "color-token").color, i = t[1];
                    return {
                        type: "color",
                        mode: n.mode,
                        color: r,
                        body: tj(i)
                    }
                },
                htmlBuilder: nC,
                mathmlBuilder: nE
            }), tU({
                type: "color",
                names: ["\\color"],
                props: {
                    numArgs: 1,
                    allowedInText: !0,
                    argTypes: ["color"]
                },
                handler(e, t) {
                    var {
                        parser: n,
                        breakOnTokenText: r
                    } = e, i = nf(t[0], "color-token").color;
                    n.gullet.macros.set("\\current@color", i);
                    var a = n.parseExpression(!0, r);
                    return {
                        type: "color",
                        mode: n.mode,
                        color: i,
                        body: a
                    }
                },
                htmlBuilder: nC,
                mathmlBuilder: nE
            }), tU({
                type: "cr",
                names: ["\\\\"],
                props: {
                    numArgs: 0,
                    numOptionalArgs: 0,
                    allowedInText: !0
                },
                handler(e, t, n) {
                    var {
                        parser: r
                    } = e, i = "[" === r.gullet.future().text ? r.parseSizeGroup(!0) : null, a = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
                    return {
                        type: "cr",
                        mode: r.mode,
                        newLine: a,
                        size: i && nf(i, "size").value
                    }
                },
                htmlBuilder(e, t) {
                    var n = ty(["mspace"], [], t);
                    return e.newLine && (n.classes.push("newline"), e.size && (n.style.marginTop = eA(eS(e.size, t)))), n
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mspace");
                    return e.newLine && (n.setAttribute("linebreak", "newline"), e.size && n.setAttribute("height", eA(eS(e.size, t)))), n
                }
            });
            var nR = {
                    "\\global": "\\global",
                    "\\long": "\\\\globallong",
                    "\\\\globallong": "\\\\globallong",
                    "\\def": "\\gdef",
                    "\\gdef": "\\gdef",
                    "\\edef": "\\xdef",
                    "\\xdef": "\\xdef",
                    "\\let": "\\\\globallet",
                    "\\futurelet": "\\\\globalfuture"
                },
                nI = e => {
                    var t = e.text;
                    if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new D("Expected a control sequence", e);
                    return t
                },
                nB = (e, t, n, r) => {
                    var i = e.gullet.macros.get(n.text);
                    null == i && (n.noexpand = !0, i = {
                        tokens: [n],
                        numArgs: 0,
                        unexpandable: !e.gullet.isExpandable(n.text)
                    }), e.gullet.macros.set(t, i, r)
                };
            tU({
                type: "internal",
                names: ["\\global", "\\long", "\\\\globallong"],
                props: {
                    numArgs: 0,
                    allowedInText: !0
                },
                handler(e) {
                    var {
                        parser: t,
                        funcName: n
                    } = e;
                    t.consumeSpaces();
                    var r = t.fetch();
                    if (nR[r.text]) return ("\\global" === n || "\\\\globallong" === n) && (r.text = nR[r.text]), nf(t.parseFunction(), "internal");
                    throw new D("Invalid token after macro prefix", r)
                }
            }), tU({
                type: "internal",
                names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    primitive: !0
                },
                handler(e) {
                    var t, {
                            parser: n,
                            funcName: r
                        } = e,
                        i = n.gullet.popToken(),
                        a = i.text;
                    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a)) throw new D("Expected a control sequence", i);
                    for (var o = 0, l = [
                            []
                        ];
                        "{" !== n.gullet.future().text;)
                        if ("#" === (i = n.gullet.popToken()).text) {
                            if ("{" === n.gullet.future().text) {
                                t = n.gullet.future(), l[o].push("{");
                                break
                            }
                            if (i = n.gullet.popToken(), !/^[1-9]$/.test(i.text)) throw new D('Invalid argument number "' + i.text + '"');
                            if (parseInt(i.text) !== o + 1) throw new D('Argument number "' + i.text + '" out of order');
                            o++, l.push([])
                        } else if ("EOF" === i.text) throw new D("Expected a macro definition");
                    else l[o].push(i.text);
                    var {
                        tokens: s
                    } = n.gullet.consumeArg();
                    return t && s.unshift(t), ("\\edef" === r || "\\xdef" === r) && (s = n.gullet.expandTokens(s)).reverse(), n.gullet.macros.set(a, {
                        tokens: s,
                        numArgs: o,
                        delimiters: l
                    }, r === nR[r]), {
                        type: "internal",
                        mode: n.mode
                    }
                }
            }), tU({
                type: "internal",
                names: ["\\let", "\\\\globallet"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    primitive: !0
                },
                handler(e) {
                    var t, {
                            parser: n,
                            funcName: r
                        } = e,
                        i = nI(n.gullet.popToken());
                    n.gullet.consumeSpaces();
                    var a = ("=" === (t = n.gullet.popToken()).text && " " === (t = n.gullet.popToken()).text && (t = n.gullet.popToken()), t);
                    return nB(n, i, a, "\\\\globallet" === r), {
                        type: "internal",
                        mode: n.mode
                    }
                }
            }), tU({
                type: "internal",
                names: ["\\futurelet", "\\\\globalfuture"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    primitive: !0
                },
                handler(e) {
                    var {
                        parser: t,
                        funcName: n
                    } = e, r = nI(t.gullet.popToken()), i = t.gullet.popToken(), a = t.gullet.popToken();
                    return nB(t, r, a, "\\\\globalfuture" === n), t.gullet.pushToken(a), t.gullet.pushToken(i), {
                        type: "internal",
                        mode: t.mode
                    }
                }
            });
            var nO = function(e, t, n) {
                    var r = ed(eV.math[e] && eV.math[e].replace || e, t, n);
                    if (!r) throw Error("Unsupported symbol " + e + " and font size " + t + ".");
                    return r
                },
                nP = function(e, t, n, r) {
                    var i = n.havingBaseStyle(t),
                        a = ty(r.concat(i.sizingClasses(n)), [e], n),
                        o = i.sizeMultiplier / n.sizeMultiplier;
                    return a.height *= o, a.depth *= o, a.maxFontSize = i.sizeMultiplier, a
                },
                nL = function(e, t, n) {
                    var r = t.havingBaseStyle(n),
                        i = (1 - t.sizeMultiplier / r.sizeMultiplier) * t.fontMetrics().axisHeight;
                    e.classes.push("delimcenter"), e.style.top = eA(i), e.height -= i, e.depth += i
                },
                nD = function(e, t, n, r, i, a) {
                    var o = nP(tf(e, "Main-Regular", i, r), t, r, a);
                    return n && nL(o, r, t), o
                },
                nN = function(e, t, n, r, i, a) {
                    var o = tf(e, "Size" + t + "-Regular", i, r),
                        l = nP(ty(["delimsizing", "size" + t], [o], r), er.TEXT, r, a);
                    return n && nL(l, r, er.TEXT), l
                },
                nq = function(e, t, n) {
                    return {
                        type: "elem",
                        elem: ty(["delimsizinginner", "Size1-Regular" === t ? "delim-size1" : "delim-size4"], [ty([], [tf(e, t, n)])])
                    }
                },
                nH = function(e, t, n) {
                    var r = ep["Size4-Regular"][e.charCodeAt(0)] ? ep["Size4-Regular"][e.charCodeAt(0)][4] : ep["Size1-Regular"][e.charCodeAt(0)][4],
                        i = tx([], [new eD([new eN("inner", es(e, Math.round(1e3 * t)))], {
                            width: eA(r),
                            height: eA(t),
                            style: "width:" + eA(r),
                            viewBox: "0 0 " + 1e3 * r + " " + Math.round(1e3 * t),
                            preserveAspectRatio: "xMinYMin"
                        })], n);
                    return i.height = t, i.style.height = eA(t), i.style.width = eA(r), {
                        type: "elem",
                        elem: i
                    }
                },
                nF = {
                    type: "kern",
                    size: -.008
                },
                nU = ["|", "\\lvert", "\\rvert", "\\vert"],
                nV = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
                n_ = function(e, t, n, r, i, a) {
                    var o, l, s, u, c = "",
                        h = 0;
                    o = s = u = e, l = null;
                    var p = "Size1-Regular";
                    "\\uparrow" === e ? s = u = "⏐" : "\\Uparrow" === e ? s = u = "‖" : "\\downarrow" === e ? o = s = "⏐" : "\\Downarrow" === e ? o = s = "‖" : "\\updownarrow" === e ? (o = "\\uparrow", s = "⏐", u = "\\downarrow") : "\\Updownarrow" === e ? (o = "\\Uparrow", s = "‖", u = "\\Downarrow") : nU.includes(e) ? (s = "∣", c = "vert", h = 333) : nV.includes(e) ? (s = "∥", c = "doublevert", h = 556) : "[" === e || "\\lbrack" === e ? (o = "⎡", s = "⎢", u = "⎣", p = "Size4-Regular", c = "lbrack", h = 667) : "]" === e || "\\rbrack" === e ? (o = "⎤", s = "⎥", u = "⎦", p = "Size4-Regular", c = "rbrack", h = 667) : "\\lfloor" === e || "⌊" === e ? (s = o = "⎢", u = "⎣", p = "Size4-Regular", c = "lfloor", h = 667) : "\\lceil" === e || "⌈" === e ? (o = "⎡", s = u = "⎢", p = "Size4-Regular", c = "lceil", h = 667) : "\\rfloor" === e || "⌋" === e ? (s = o = "⎥", u = "⎦", p = "Size4-Regular", c = "rfloor", h = 667) : "\\rceil" === e || "⌉" === e ? (o = "⎤", s = u = "⎥", p = "Size4-Regular", c = "rceil", h = 667) : "(" === e || "\\lparen" === e ? (o = "⎛", s = "⎜", u = "⎝", p = "Size4-Regular", c = "lparen", h = 875) : ")" === e || "\\rparen" === e ? (o = "⎞", s = "⎟", u = "⎠", p = "Size4-Regular", c = "rparen", h = 875) : "\\{" === e || "\\lbrace" === e ? (o = "⎧", l = "⎨", u = "⎩", s = "⎪", p = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (o = "⎫", l = "⎬", u = "⎭", s = "⎪", p = "Size4-Regular") : "\\lgroup" === e || "⟮" === e ? (o = "⎧", u = "⎩", s = "⎪", p = "Size4-Regular") : "\\rgroup" === e || "⟯" === e ? (o = "⎫", u = "⎭", s = "⎪", p = "Size4-Regular") : "\\lmoustache" === e || "⎰" === e ? (o = "⎧", u = "⎭", s = "⎪", p = "Size4-Regular") : ("\\rmoustache" === e || "⎱" === e) && (o = "⎫", u = "⎩", s = "⎪", p = "Size4-Regular");
                    var m = nO(o, p, i),
                        f = m.height + m.depth,
                        d = nO(s, p, i),
                        g = d.height + d.depth,
                        y = nO(u, p, i),
                        x = y.height + y.depth,
                        b = 0,
                        v = 1;
                    if (null !== l) {
                        var k = nO(l, p, i);
                        b = k.height + k.depth, v = 2
                    }
                    var w = f + x + b,
                        z = Math.max(0, Math.ceil((t - w) / (v * g))),
                        S = w + z * v * g,
                        A = r.fontMetrics().axisHeight;
                    n && (A *= r.sizeMultiplier);
                    var T = S / 2 - A,
                        M = [];
                    if (c.length > 0) {
                        var C = Math.round(1e3 * S),
                            E = ec(c, Math.round(1e3 * (S - f - x))),
                            R = new eN(c, E),
                            I = (h / 1e3).toFixed(3) + "em",
                            B = (C / 1e3).toFixed(3) + "em",
                            O = tx([], [new eD([R], {
                                width: I,
                                height: B,
                                viewBox: "0 0 " + h + " " + C
                            })], r);
                        O.height = C / 1e3, O.style.width = I, O.style.height = B, M.push({
                            type: "elem",
                            elem: O
                        })
                    } else {
                        if (M.push(nq(u, p, i)), M.push(nF), null === l) M.push(nH(s, S - f - x + .016, r));
                        else {
                            var P = (S - f - x - b) / 2 + .016;
                            M.push(nH(s, P, r)), M.push(nF), M.push(nq(l, p, i)), M.push(nF), M.push(nH(s, P, r))
                        }
                        M.push(nF), M.push(nq(o, p, i))
                    }
                    var L = r.havingBaseStyle(er.TEXT);
                    return nP(ty(["delimsizing", "mult"], [tC({
                        positionType: "bottom",
                        positionData: T,
                        children: M
                    }, L)], L), er.TEXT, r, a)
                },
                nj = function(e, t, n, r, i) {
                    var a = el(e, r, n);
                    return tx(["hide-tail"], [new eD([new eN(e, a)], {
                        width: "400em",
                        height: eA(t),
                        viewBox: "0 0 400000 " + n,
                        preserveAspectRatio: "xMinYMin slice"
                    })], i)
                },
                nX = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"],
                nK = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"],
                nW = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
                nG = [0, 1.2, 1.8, 2.4, 3],
                nY = [{
                    type: "small",
                    style: er.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: er.SCRIPT
                }, {
                    type: "small",
                    style: er.TEXT
                }, {
                    type: "large",
                    size: 1
                }, {
                    type: "large",
                    size: 2
                }, {
                    type: "large",
                    size: 3
                }, {
                    type: "large",
                    size: 4
                }],
                n$ = [{
                    type: "small",
                    style: er.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: er.SCRIPT
                }, {
                    type: "small",
                    style: er.TEXT
                }, {
                    type: "stack"
                }],
                nZ = [{
                    type: "small",
                    style: er.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: er.SCRIPT
                }, {
                    type: "small",
                    style: er.TEXT
                }, {
                    type: "large",
                    size: 1
                }, {
                    type: "large",
                    size: 2
                }, {
                    type: "large",
                    size: 3
                }, {
                    type: "large",
                    size: 4
                }, {
                    type: "stack"
                }],
                nQ = function(e) {
                    if ("small" === e.type) return "Main-Regular";
                    if ("large" === e.type) return "Size" + e.size + "-Regular";
                    if ("stack" === e.type) return "Size4-Regular";
                    throw Error("Add support for delim type '" + e.type + "' here.")
                },
                nJ = function(e, t, n, r) {
                    for (var i = Math.min(2, 3 - r.style.size), a = i; a < n.length && "stack" !== n[a].type; a++) {
                        var o = nO(e, nQ(n[a]), "math"),
                            l = o.height + o.depth;
                        if ("small" === n[a].type && (l *= r.havingBaseStyle(n[a].style).sizeMultiplier), l > t) return n[a]
                    }
                    return n[n.length - 1]
                },
                n0 = function(e, t, n, r, i, a) {
                    "<" === e || "\\lt" === e || "⟨" === e ? e = "\\langle" : (">" === e || "\\gt" === e || "⟩" === e) && (e = "\\rangle");
                    var o = nW.includes(e) ? nY : nX.includes(e) ? nZ : n$,
                        l = nJ(e, t, o, r);
                    return "small" === l.type ? nD(e, l.style, n, r, i, a) : "large" === l.type ? nN(e, l.size, n, r, i, a) : n_(e, t, n, r, i, a)
                },
                n1 = function(e, t) {
                    var n, r, i = t.havingBaseSizing(),
                        a = nJ("\\surd", e * i.sizeMultiplier, nZ, i),
                        o = i.sizeMultiplier,
                        l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
                        s = 0,
                        u = 0,
                        c = 0;
                    return "small" === a.type ? (c = 1e3 + 1e3 * l + 80, e < 1 ? o = 1 : e < 1.4 && (o = .7), s = (1 + l + .08) / o, u = (1 + l) / o, (n = nj("sqrtMain", s, c, l, t)).style.minWidth = "0.853em", r = .833 / o) : "large" === a.type ? (c = 1080 * nG[a.size], u = (nG[a.size] + l) / o, s = (nG[a.size] + l + .08) / o, (n = nj("sqrtSize" + a.size, s, c, l, t)).style.minWidth = "1.02em", r = 1 / o) : (s = e + l + .08, u = e + l, (n = nj("sqrtTall", s, c = Math.floor(1e3 * e + l) + 80, l, t)).style.minWidth = "0.742em", r = 1.056), n.height = u, n.style.height = eA(s), {
                        span: n,
                        advanceWidth: r,
                        ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * o
                    }
                },
                n4 = function(e, t, n, r, i) {
                    if ("<" === e || "\\lt" === e || "⟨" === e ? e = "\\langle" : (">" === e || "\\gt" === e || "⟩" === e) && (e = "\\rangle"), nX.includes(e) || nW.includes(e)) return nN(e, t, !1, n, r, i);
                    if (nK.includes(e)) return n_(e, nG[t], !1, n, r, i);
                    throw new D("Illegal delimiter: '" + e + "'")
                },
                n5 = function(e, t, n, r, i, a) {
                    var o = r.fontMetrics().axisHeight * r.sizeMultiplier,
                        l = 5 / r.fontMetrics().ptPerEm,
                        s = Math.max(t - o, n + o);
                    return n0(e, Math.max(s / 500 * 901, 2 * s - l), !0, r, i, a)
                },
                n6 = {
                    "\\bigl": {
                        mclass: "mopen",
                        size: 1
                    },
                    "\\Bigl": {
                        mclass: "mopen",
                        size: 2
                    },
                    "\\biggl": {
                        mclass: "mopen",
                        size: 3
                    },
                    "\\Biggl": {
                        mclass: "mopen",
                        size: 4
                    },
                    "\\bigr": {
                        mclass: "mclose",
                        size: 1
                    },
                    "\\Bigr": {
                        mclass: "mclose",
                        size: 2
                    },
                    "\\biggr": {
                        mclass: "mclose",
                        size: 3
                    },
                    "\\Biggr": {
                        mclass: "mclose",
                        size: 4
                    },
                    "\\bigm": {
                        mclass: "mrel",
                        size: 1
                    },
                    "\\Bigm": {
                        mclass: "mrel",
                        size: 2
                    },
                    "\\biggm": {
                        mclass: "mrel",
                        size: 3
                    },
                    "\\Biggm": {
                        mclass: "mrel",
                        size: 4
                    },
                    "\\big": {
                        mclass: "mord",
                        size: 1
                    },
                    "\\Big": {
                        mclass: "mord",
                        size: 2
                    },
                    "\\bigg": {
                        mclass: "mord",
                        size: 3
                    },
                    "\\Bigg": {
                        mclass: "mord",
                        size: 4
                    }
                },
                n3 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

            function n7(e, t) {
                var n = ng(e);
                if (n && n3.includes(n.text)) return n;
                if (n) throw new D("Invalid delimiter '" + n.text + "' after '" + t.funcName + "'", e);
                throw new D("Invalid delimiter type '" + e.type + "'", e)
            }

            function n2(e) {
                if (!e.body) throw Error("Bug: The leftright ParseNode wasn't fully parsed.")
            }
            tU({
                type: "delimsizing",
                names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                props: {
                    numArgs: 1,
                    argTypes: ["primitive"]
                },
                handler: (e, t) => {
                    var n = n7(t[0], e);
                    return {
                        type: "delimsizing",
                        mode: e.parser.mode,
                        size: n6[e.funcName].size,
                        mclass: n6[e.funcName].mclass,
                        delim: n.text
                    }
                },
                htmlBuilder: (e, t) => "." === e.delim ? ty([e.mclass]) : n4(e.delim, e.size, t, e.mode, [e.mclass]),
                mathmlBuilder: e => {
                    var t = [];
                    "." !== e.delim && t.push(t8(e.delim, e.mode));
                    var n = new t3("mo", t);
                    "mopen" === e.mclass || "mclose" === e.mclass ? n.setAttribute("fence", "true") : n.setAttribute("fence", "false"), n.setAttribute("stretchy", "true");
                    var r = eA(nG[e.size]);
                    return n.setAttribute("minsize", r), n.setAttribute("maxsize", r), n
                }
            }), tU({
                type: "leftright-right",
                names: ["\\right"],
                props: {
                    numArgs: 1,
                    primitive: !0
                },
                handler: (e, t) => {
                    var n = e.parser.gullet.macros.get("\\current@color");
                    if (n && "string" != typeof n) throw new D("\\current@color set to non-string in \\right");
                    return {
                        type: "leftright-right",
                        mode: e.parser.mode,
                        delim: n7(t[0], e).text,
                        color: n
                    }
                }
            }), tU({
                type: "leftright",
                names: ["\\left"],
                props: {
                    numArgs: 1,
                    primitive: !0
                },
                handler: (e, t) => {
                    var n = n7(t[0], e),
                        r = e.parser;
                    ++r.leftrightDepth;
                    var i = r.parseExpression(!1);
                    --r.leftrightDepth, r.expect("\\right", !1);
                    var a = nf(r.parseFunction(), "leftright-right");
                    return {
                        type: "leftright",
                        mode: r.mode,
                        body: i,
                        left: n.text,
                        right: a.delim,
                        rightColor: a.color
                    }
                },
                htmlBuilder: (e, t) => {
                    n2(e);
                    for (var n, r, i = tY(e.body, t, !0, ["mopen", "mclose"]), a = 0, o = 0, l = !1, s = 0; s < i.length; s++) i[s].isMiddle ? l = !0 : (a = Math.max(i[s].height, a), o = Math.max(i[s].depth, o));
                    if (a *= t.sizeMultiplier, o *= t.sizeMultiplier, n = "." === e.left ? t0(t, ["mopen"]) : n5(e.left, a, o, t, e.mode, ["mopen"]), i.unshift(n), l)
                        for (var u = 1; u < i.length; u++) {
                            var c = i[u].isMiddle;
                            c && (i[u] = n5(c.delim, a, o, c.options, e.mode, []))
                        }
                    if ("." === e.right) r = t0(t, ["mclose"]);
                    else {
                        var h = e.rightColor ? t.withColor(e.rightColor) : t;
                        r = n5(e.right, a, o, h, e.mode, ["mclose"])
                    }
                    return i.push(r), ty(["minner"], i, t)
                },
                mathmlBuilder: (e, t) => {
                    n2(e);
                    var n = nn(e.body, t);
                    if ("." !== e.left) {
                        var r = new t3("mo", [t8(e.left, e.mode)]);
                        r.setAttribute("fence", "true"), n.unshift(r)
                    }
                    if ("." !== e.right) {
                        var i = new t3("mo", [t8(e.right, e.mode)]);
                        i.setAttribute("fence", "true"), e.rightColor && i.setAttribute("mathcolor", e.rightColor), n.push(i)
                    }
                    return t9(n)
                }
            }), tU({
                type: "middle",
                names: ["\\middle"],
                props: {
                    numArgs: 1,
                    primitive: !0
                },
                handler: (e, t) => {
                    var n = n7(t[0], e);
                    if (!e.parser.leftrightDepth) throw new D("\\middle without preceding \\left", n);
                    return {
                        type: "middle",
                        mode: e.parser.mode,
                        delim: n.text
                    }
                },
                htmlBuilder: (e, t) => {
                    var n;
                    if ("." === e.delim) n = t0(t, []);
                    else {
                        n = n4(e.delim, 1, t, e.mode, []);
                        var r = {
                            delim: e.delim,
                            options: t
                        };
                        n.isMiddle = r
                    }
                    return n
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mo", ["\\vert" === e.delim || "|" === e.delim ? t8("|", "text") : t8(e.delim, e.mode)]);
                    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n
                }
            });
            var n8 = (e, t) => {
                    var n, r, i = tM(t1(e.body, t), t),
                        a = e.label.slice(1),
                        o = t.sizeMultiplier,
                        l = 0,
                        s = X(e.body);
                    if ("sout" === a)(n = ty(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / o, l = -.5 * t.fontMetrics().xHeight;
                    else if ("phase" === a) {
                        var u = eS({
                                number: .6,
                                unit: "pt"
                            }, t),
                            c = eS({
                                number: .35,
                                unit: "ex"
                            }, t);
                        o /= t.havingBaseSizing().sizeMultiplier;
                        var h = i.height + i.depth + u + c;
                        i.style.paddingLeft = eA(h / 2 + u);
                        var p = Math.floor(1e3 * h * o);
                        (n = tx(["hide-tail"], [new eD([new eN("phase", "M400000 " + p + " H0 L" + p / 2 + " 0 l65 45 L145 " + (p - 80) + " H400000z")], {
                            width: "400em",
                            height: eA(p / 1e3),
                            viewBox: "0 0 400000 " + p,
                            preserveAspectRatio: "xMinYMin slice"
                        })], t)).style.height = eA(h), l = i.depth + u + c
                    } else {
                        /cancel/.test(a) ? s || i.classes.push("cancel-pad") : "angl" === a ? i.classes.push("anglpad") : i.classes.push("boxpad");
                        var m = 0,
                            f = 0,
                            d = 0;
                        /box/.test(a) ? (d = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), f = m = t.fontMetrics().fboxsep + ("colorbox" === a ? 0 : d)) : "angl" === a ? (m = 4 * (d = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness)), f = Math.max(0, .25 - i.depth)) : f = m = .2 * !!s, n = nh(i, a, m, f, t), /fbox|boxed|fcolorbox/.test(a) ? (n.style.borderStyle = "solid", n.style.borderWidth = eA(d)) : "angl" === a && .049 !== d && (n.style.borderTopWidth = eA(d), n.style.borderRightWidth = eA(d)), l = i.depth + f, e.backgroundColor && (n.style.backgroundColor = e.backgroundColor, e.borderColor && (n.style.borderColor = e.borderColor))
                    }
                    return r = e.backgroundColor ? tC({
                        positionType: "individualShift",
                        children: [{
                            type: "elem",
                            elem: n,
                            shift: l
                        }, {
                            type: "elem",
                            elem: i,
                            shift: 0
                        }]
                    }, t) : tC({
                        positionType: "individualShift",
                        children: [{
                            type: "elem",
                            elem: i,
                            shift: 0
                        }, {
                            type: "elem",
                            elem: n,
                            shift: l,
                            wrapperClasses: /cancel|phase/.test(a) ? ["svg-align"] : []
                        }]
                    }, t), (/cancel/.test(a) && (r.height = i.height, r.depth = i.depth), /cancel/.test(a) && !s) ? ty(["mord", "cancel-lap"], [r], t) : ty(["mord"], [r], t)
                },
                n9 = (e, t) => {
                    var n = 0,
                        r = new t3(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ni(e.body, t)]);
                    switch (e.label) {
                        case "\\cancel":
                            r.setAttribute("notation", "updiagonalstrike");
                            break;
                        case "\\bcancel":
                            r.setAttribute("notation", "downdiagonalstrike");
                            break;
                        case "\\phase":
                            r.setAttribute("notation", "phasorangle");
                            break;
                        case "\\sout":
                            r.setAttribute("notation", "horizontalstrike");
                            break;
                        case "\\fbox":
                            r.setAttribute("notation", "box");
                            break;
                        case "\\angl":
                            r.setAttribute("notation", "actuarial");
                            break;
                        case "\\fcolorbox":
                        case "\\colorbox":
                            if (n = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * n + "pt"), r.setAttribute("height", "+" + 2 * n + "pt"), r.setAttribute("lspace", n + "pt"), r.setAttribute("voffset", n + "pt"), "\\fcolorbox" === e.label) {
                                var i = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
                                r.setAttribute("style", "border: " + i + "em solid " + String(e.borderColor))
                            }
                            break;
                        case "\\xcancel":
                            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
                    }
                    return e.backgroundColor && r.setAttribute("mathbackground", e.backgroundColor), r
                };
            tU({
                type: "enclose",
                names: ["\\colorbox"],
                props: {
                    numArgs: 2,
                    allowedInText: !0,
                    argTypes: ["color", "text"]
                },
                handler(e, t, n) {
                    var {
                        parser: r,
                        funcName: i
                    } = e, a = nf(t[0], "color-token").color, o = t[1];
                    return {
                        type: "enclose",
                        mode: r.mode,
                        label: i,
                        backgroundColor: a,
                        body: o
                    }
                },
                htmlBuilder: n8,
                mathmlBuilder: n9
            }), tU({
                type: "enclose",
                names: ["\\fcolorbox"],
                props: {
                    numArgs: 3,
                    allowedInText: !0,
                    argTypes: ["color", "color", "text"]
                },
                handler(e, t, n) {
                    var {
                        parser: r,
                        funcName: i
                    } = e, a = nf(t[0], "color-token").color, o = nf(t[1], "color-token").color, l = t[2];
                    return {
                        type: "enclose",
                        mode: r.mode,
                        label: i,
                        backgroundColor: o,
                        borderColor: a,
                        body: l
                    }
                },
                htmlBuilder: n8,
                mathmlBuilder: n9
            }), tU({
                type: "enclose",
                names: ["\\fbox"],
                props: {
                    numArgs: 1,
                    argTypes: ["hbox"],
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "enclose",
                        mode: n.mode,
                        label: "\\fbox",
                        body: t[0]
                    }
                }
            }), tU({
                type: "enclose",
                names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "enclose",
                        mode: n.mode,
                        label: r,
                        body: i
                    }
                },
                htmlBuilder: n8,
                mathmlBuilder: n9
            }), tU({
                type: "enclose",
                names: ["\\angl"],
                props: {
                    numArgs: 1,
                    argTypes: ["hbox"],
                    allowedInText: !1
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "enclose",
                        mode: n.mode,
                        label: "\\angl",
                        body: t[0]
                    }
                }
            });
            var re = {};

            function rt(e) {
                for (var {
                        type: t,
                        names: n,
                        props: r,
                        handler: i,
                        htmlBuilder: a,
                        mathmlBuilder: o
                    } = e, l = {
                        type: t,
                        numArgs: r.numArgs || 0,
                        allowedInText: !1,
                        numOptionalArgs: 0,
                        handler: i
                    }, s = 0; s < n.length; ++s) re[n[s]] = l;
                a && (tH[t] = a), o && (tF[t] = o)
            }
            var rn = {};

            function rr(e) {
                var t = [];
                e.consumeSpaces();
                var n = e.fetch().text;
                for ("\\relax" === n && (e.consume(), e.consumeSpaces(), n = e.fetch().text);
                    "\\hline" === n || "\\hdashline" === n;) e.consume(), t.push("\\hdashline" === n), e.consumeSpaces(), n = e.fetch().text;
                return t
            }
            var ri = e => {
                if (!e.parser.settings.displayMode) throw new D("{" + e.envName + "} can be used only in display mode.")
            };

            function ra(e) {
                if (-1 === e.indexOf("ed")) return -1 === e.indexOf("*")
            }

            function ro(e, t, n) {
                var {
                    hskipBeforeAndAfter: r,
                    addJot: i,
                    cols: a,
                    arraystretch: o,
                    colSeparationType: l,
                    autoTag: s,
                    singleRow: u,
                    emptySingleRow: c,
                    maxNumCols: h,
                    leqno: p
                } = t;
                if (e.gullet.beginGroup(), u || e.gullet.macros.set("\\cr", "\\\\\\relax"), !o) {
                    var m = e.gullet.expandMacroAsText("\\arraystretch");
                    if (null == m) o = 1;
                    else if (!(o = parseFloat(m)) || o < 0) throw new D("Invalid \\arraystretch: " + m)
                }
                e.gullet.beginGroup();
                var f = [],
                    d = [f],
                    g = [],
                    y = [],
                    x = null != s ? [] : void 0;

                function b() {
                    s && e.gullet.macros.set("\\@eqnsw", "1", !0)
                }

                function v() {
                    x && (e.gullet.macros.get("\\df@tag") ? (x.push(e.subparse([new L("\\df@tag")])), e.gullet.macros.set("\\df@tag", void 0, !0)) : x.push(!!s && "1" === e.gullet.macros.get("\\@eqnsw")))
                }
                for (b(), y.push(rr(e));;) {
                    var k = e.parseExpression(!1, u ? "\\end" : "\\\\");
                    e.gullet.endGroup(), e.gullet.beginGroup(), k = {
                        type: "ordgroup",
                        mode: e.mode,
                        body: k
                    }, n && (k = {
                        type: "styling",
                        mode: e.mode,
                        style: n,
                        body: [k]
                    }), f.push(k);
                    var w = e.fetch().text;
                    if ("&" === w) {
                        if (h && f.length === h)
                            if (u || l) throw new D("Too many tab characters: &", e.nextToken);
                            else e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                        e.consume()
                    } else if ("\\end" === w) {
                        v(), 1 === f.length && "styling" === k.type && 0 === k.body[0].body.length && (d.length > 1 || !c) && d.pop(), y.length < d.length + 1 && y.push([]);
                        break
                    } else if ("\\\\" === w) {
                        e.consume();
                        var z = void 0;
                        " " !== e.gullet.future().text && (z = e.parseSizeGroup(!0)), g.push(z ? z.value : null), v(), y.push(rr(e)), f = [], d.push(f), b()
                    } else throw new D("Expected & or \\\\ or \\cr or \\end", e.nextToken)
                }
                return e.gullet.endGroup(), e.gullet.endGroup(), {
                    type: "array",
                    mode: e.mode,
                    addJot: i,
                    arraystretch: o,
                    body: d,
                    cols: a,
                    rowGaps: g,
                    hskipBeforeAndAfter: r,
                    hLinesBeforeRow: y,
                    colSeparationType: l,
                    tags: x,
                    leqno: p
                }
            }

            function rl(e) {
                return "d" === e.slice(0, 1) ? "display" : "text"
            }
            var rs = function(e, t) {
                    var n, r, i, a, o = e.body.length,
                        l = e.hLinesBeforeRow,
                        s = 0,
                        u = Array(o),
                        c = [],
                        h = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
                        p = 1 / t.fontMetrics().ptPerEm,
                        m = 5 * p;
                    e.colSeparationType && "small" === e.colSeparationType && (m = .2778 * (t.havingStyle(er.SCRIPT).sizeMultiplier / t.sizeMultiplier));
                    var f = "CD" === e.colSeparationType ? eS({
                            number: 3,
                            unit: "ex"
                        }, t) : 12 * p,
                        d = 3 * p,
                        g = e.arraystretch * f,
                        y = .7 * g,
                        x = .3 * g,
                        b = 0;

                    function v(e) {
                        for (var t = 0; t < e.length; ++t) t > 0 && (b += .25), c.push({
                            pos: b,
                            isDashed: e[t]
                        })
                    }
                    for (v(l[0]), n = 0; n < e.body.length; ++n) {
                        var k = e.body[n],
                            w = y,
                            z = x;
                        s < k.length && (s = k.length);
                        var S = Array(k.length);
                        for (r = 0; r < k.length; ++r) {
                            var A = t1(k[r], t);
                            z < A.depth && (z = A.depth), w < A.height && (w = A.height), S[r] = A
                        }
                        var T = e.rowGaps[n],
                            M = 0;
                        T && (M = eS(T, t)) > 0 && (z < (M += x) && (z = M), M = 0), e.addJot && (z += d), S.height = w, S.depth = z, S.pos = b += w, b += z + M, u[n] = S, v(l[n + 1])
                    }
                    var C = b / 2 + t.fontMetrics().axisHeight,
                        E = e.cols || [],
                        R = [],
                        I = [];
                    if (e.tags && e.tags.some(e => e))
                        for (n = 0; n < o; ++n) {
                            var B = u[n],
                                O = B.pos - C,
                                P = e.tags[n],
                                L = void 0;
                            (L = !0 === P ? ty(["eqn-num"], [], t) : !1 === P ? ty([], [], t) : ty([], tY(P, t, !0), t)).depth = B.depth, L.height = B.height, I.push({
                                type: "elem",
                                elem: L,
                                shift: O
                            })
                        }
                    for (r = 0, a = 0; r < s || a < E.length; ++r, ++a) {
                        for (var N = E[a] || {}, q = !0;
                            "separator" === N.type;) {
                            if (q || ((i = ty(["arraycolsep"], [])).style.width = eA(t.fontMetrics().doubleRuleSep), R.push(i)), "|" === N.separator || ":" === N.separator) {
                                var H = "|" === N.separator ? "solid" : "dashed",
                                    F = ty(["vertical-separator"], [], t);
                                F.style.height = eA(b), F.style.borderRightWidth = eA(h), F.style.borderRightStyle = H, F.style.margin = "0 " + eA(-h / 2);
                                var U = b - C;
                                U && (F.style.verticalAlign = eA(-U)), R.push(F)
                            } else throw new D("Invalid separator type: " + N.separator);
                            N = E[++a] || {}, q = !1
                        }
                        if (!(r >= s)) {
                            var _ = void 0;
                            (r > 0 || e.hskipBeforeAndAfter) && 0 !== (_ = V(N.pregap, m)) && ((i = ty(["arraycolsep"], [])).style.width = eA(_), R.push(i));
                            var j = [];
                            for (n = 0; n < o; ++n) {
                                var X = u[n],
                                    K = X[r];
                                if (K) {
                                    var W = X.pos - C;
                                    K.depth = X.depth, K.height = X.height, j.push({
                                        type: "elem",
                                        elem: K,
                                        shift: W
                                    })
                                }
                            }
                            j = tC({
                                positionType: "individualShift",
                                children: j
                            }, t), j = ty(["col-align-" + (N.align || "c")], [j]), R.push(j), (r < s - 1 || e.hskipBeforeAndAfter) && 0 !== (_ = V(N.postgap, m)) && ((i = ty(["arraycolsep"], [])).style.width = eA(_), R.push(i))
                        }
                    }
                    if (u = ty(["mtable"], R), c.length > 0) {
                        for (var G = tA("hline", t, h), Y = tA("hdashline", t, h), $ = [{
                                type: "elem",
                                elem: u,
                                shift: 0
                            }]; c.length > 0;) {
                            var Z = c.pop(),
                                Q = Z.pos - C;
                            Z.isDashed ? $.push({
                                type: "elem",
                                elem: Y,
                                shift: Q
                            }) : $.push({
                                type: "elem",
                                elem: G,
                                shift: Q
                            })
                        }
                        u = tC({
                            positionType: "individualShift",
                            children: $
                        }, t)
                    }
                    if (0 === I.length) return ty(["mord"], [u], t);
                    var J = tC({
                        positionType: "individualShift",
                        children: I
                    }, t);
                    return tb([u, J = ty(["tag"], [J], t)])
                },
                ru = {
                    c: "center ",
                    l: "left ",
                    r: "right "
                },
                rc = function(e, t) {
                    for (var n = [], r = new t3("mtd", [], ["mtr-glue"]), i = new t3("mtd", [], ["mml-eqn-num"]), a = 0; a < e.body.length; a++) {
                        for (var o = e.body[a], l = [], s = 0; s < o.length; s++) l.push(new t3("mtd", [ni(o[s], t)]));
                        e.tags && e.tags[a] && (l.unshift(r), l.push(r), e.leqno ? l.unshift(i) : l.push(i)), n.push(new t3("mtr", l))
                    }
                    var u = new t3("mtable", n),
                        c = .5 === e.arraystretch ? .1 : .16 + e.arraystretch - 1 + .09 * !!e.addJot;
                    u.setAttribute("rowspacing", eA(c));
                    var h = "",
                        p = "";
                    if (e.cols && e.cols.length > 0) {
                        var m = e.cols,
                            f = "",
                            d = !1,
                            g = 0,
                            y = m.length;
                        "separator" === m[0].type && (h += "top ", g = 1), "separator" === m[m.length - 1].type && (h += "bottom ", y -= 1);
                        for (var x = g; x < y; x++) "align" === m[x].type ? (p += ru[m[x].align], d && (f += "none "), d = !0) : "separator" === m[x].type && d && (f += "|" === m[x].separator ? "solid " : "dashed ", d = !1);
                        u.setAttribute("columnalign", p.trim()), /[sd]/.test(f) && u.setAttribute("columnlines", f.trim())
                    }
                    if ("align" === e.colSeparationType) {
                        for (var b = e.cols || [], v = "", k = 1; k < b.length; k++) v += k % 2 ? "0em " : "1em ";
                        u.setAttribute("columnspacing", v.trim())
                    } else "alignat" === e.colSeparationType || "gather" === e.colSeparationType ? u.setAttribute("columnspacing", "0em") : "small" === e.colSeparationType ? u.setAttribute("columnspacing", "0.2778em") : "CD" === e.colSeparationType ? u.setAttribute("columnspacing", "0.5em") : u.setAttribute("columnspacing", "1em");
                    var w = "",
                        z = e.hLinesBeforeRow;
                    h += (z[0].length > 0 ? "left " : "") + (z[z.length - 1].length > 0 ? "right " : "");
                    for (var S = 1; S < z.length - 1; S++) w += 0 === z[S].length ? "none " : z[S][0] ? "dashed " : "solid ";
                    return /[sd]/.test(w) && u.setAttribute("rowlines", w.trim()), "" !== h && (u = new t3("menclose", [u])).setAttribute("notation", h.trim()), e.arraystretch && e.arraystretch < 1 && (u = new t3("mstyle", [u])).setAttribute("scriptlevel", "1"), u
                },
                rh = function(e, t) {
                    -1 === e.envName.indexOf("ed") && ri(e);
                    var n, r = [],
                        i = e.envName.indexOf("at") > -1 ? "alignat" : "align",
                        a = "split" === e.envName,
                        o = ro(e.parser, {
                            cols: r,
                            addJot: !0,
                            autoTag: a ? void 0 : ra(e.envName),
                            emptySingleRow: !0,
                            colSeparationType: i,
                            maxNumCols: a ? 2 : void 0,
                            leqno: e.parser.settings.leqno
                        }, "display"),
                        l = 0,
                        s = {
                            type: "ordgroup",
                            mode: e.mode,
                            body: []
                        };
                    if (t[0] && "ordgroup" === t[0].type) {
                        for (var u = "", c = 0; c < t[0].body.length; c++) u += nf(t[0].body[c], "textord").text;
                        l = 2 * (n = Number(u))
                    }
                    var h = !l;
                    o.body.forEach(function(e) {
                        for (var t = 1; t < e.length; t += 2) {
                            var r = nf(e[t], "styling");
                            nf(r.body[0], "ordgroup").body.unshift(s)
                        }
                        if (h) l < e.length && (l = e.length);
                        else {
                            var i = e.length / 2;
                            if (n < i) throw new D("Too many math in a row: expected " + n + ", but got " + i, e[0])
                        }
                    });
                    for (var p = 0; p < l; ++p) {
                        var m = "r",
                            f = 0;
                        p % 2 == 1 ? m = "l" : p > 0 && h && (f = 1), r[p] = {
                            type: "align",
                            align: m,
                            pregap: f,
                            postgap: 0
                        }
                    }
                    return o.colSeparationType = h ? "align" : "alignat", o
                };
            rt({
                type: "array",
                names: ["array", "darray"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var n = (ng(t[0]) ? [t[0]] : nf(t[0], "ordgroup").body).map(function(e) {
                            var t = nd(e).text;
                            if (-1 !== "lcr".indexOf(t)) return {
                                type: "align",
                                align: t
                            };
                            if ("|" === t) return {
                                type: "separator",
                                separator: "|"
                            };
                            if (":" === t) return {
                                type: "separator",
                                separator: ":"
                            };
                            throw new D("Unknown column alignment: " + t, e)
                        }),
                        r = {
                            cols: n,
                            hskipBeforeAndAfter: !0,
                            maxNumCols: n.length
                        };
                    return ro(e.parser, r, rl(e.envName))
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    var t = {
                            matrix: null,
                            pmatrix: ["(", ")"],
                            bmatrix: ["[", "]"],
                            Bmatrix: ["\\{", "\\}"],
                            vmatrix: ["|", "|"],
                            Vmatrix: ["\\Vert", "\\Vert"]
                        } [e.envName.replace("*", "")],
                        n = "c",
                        r = {
                            hskipBeforeAndAfter: !1,
                            cols: [{
                                type: "align",
                                align: n
                            }]
                        };
                    if ("*" === e.envName.charAt(e.envName.length - 1)) {
                        var i = e.parser;
                        if (i.consumeSpaces(), "[" === i.fetch().text) {
                            if (i.consume(), i.consumeSpaces(), n = i.fetch().text, -1 === "lcr".indexOf(n)) throw new D("Expected l or c or r", i.nextToken);
                            i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), r.cols = [{
                                type: "align",
                                align: n
                            }]
                        }
                    }
                    var a = ro(e.parser, r, rl(e.envName)),
                        o = Math.max(0, ...a.body.map(e => e.length));
                    return a.cols = Array(o).fill({
                        type: "align",
                        align: n
                    }), t ? {
                        type: "leftright",
                        mode: e.mode,
                        body: [a],
                        left: t[0],
                        right: t[1],
                        rightColor: void 0
                    } : a
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["smallmatrix"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    var t = ro(e.parser, {
                        arraystretch: .5
                    }, "script");
                    return t.colSeparationType = "small", t
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["subarray"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var n = (ng(t[0]) ? [t[0]] : nf(t[0], "ordgroup").body).map(function(e) {
                        var t = nd(e).text;
                        if (-1 !== "lc".indexOf(t)) return {
                            type: "align",
                            align: t
                        };
                        throw new D("Unknown column alignment: " + t, e)
                    });
                    if (n.length > 1) throw new D("{subarray} can contain only one column");
                    var r = {
                        cols: n,
                        hskipBeforeAndAfter: !1,
                        arraystretch: .5
                    };
                    if ((r = ro(e.parser, r, "script")).body.length > 0 && r.body[0].length > 1) throw new D("{subarray} can contain only one column");
                    return r
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["cases", "dcases", "rcases", "drcases"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    var t = ro(e.parser, {
                        arraystretch: 1.2,
                        cols: [{
                            type: "align",
                            align: "l",
                            pregap: 0,
                            postgap: 1
                        }, {
                            type: "align",
                            align: "l",
                            pregap: 0,
                            postgap: 0
                        }]
                    }, rl(e.envName));
                    return {
                        type: "leftright",
                        mode: e.mode,
                        body: [t],
                        left: e.envName.indexOf("r") > -1 ? "." : "\\{",
                        right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
                        rightColor: void 0
                    }
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["align", "align*", "aligned", "split"],
                props: {
                    numArgs: 0
                },
                handler: rh,
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["gathered", "gather", "gather*"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    ["gather", "gather*"].includes(e.envName) && ri(e);
                    var t = {
                        cols: [{
                            type: "align",
                            align: "c"
                        }],
                        addJot: !0,
                        colSeparationType: "gather",
                        autoTag: ra(e.envName),
                        emptySingleRow: !0,
                        leqno: e.parser.settings.leqno
                    };
                    return ro(e.parser, t, "display")
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["alignat", "alignat*", "alignedat"],
                props: {
                    numArgs: 1
                },
                handler: rh,
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["equation", "equation*"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    ri(e);
                    var t = {
                        autoTag: ra(e.envName),
                        emptySingleRow: !0,
                        singleRow: !0,
                        maxNumCols: 1,
                        leqno: e.parser.settings.leqno
                    };
                    return ro(e.parser, t, "display")
                },
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rt({
                type: "array",
                names: ["CD"],
                props: {
                    numArgs: 0
                },
                handler: e => (ri(e), function(e) {
                    var t = [];
                    for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup();;) {
                        t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
                        var n = e.fetch().text;
                        if ("&" === n || "\\\\" === n) e.consume();
                        else if ("\\end" === n) {
                            0 === t[t.length - 1].length && t.pop();
                            break
                        } else throw new D("Expected \\\\ or \\cr or \\end", e.nextToken)
                    }
                    for (var r = [], i = [r], a = 0; a < t.length; a++) {
                        for (var o = t[a], l = nA(), s = 0; s < o.length; s++)
                            if (nT(o[s])) {
                                r.push(l);
                                var u = nd(o[s += 1]).text,
                                    c = [, , ];
                                if (c[0] = {
                                        type: "ordgroup",
                                        mode: "math",
                                        body: []
                                    }, c[1] = {
                                        type: "ordgroup",
                                        mode: "math",
                                        body: []
                                    }, "=|.".indexOf(u) > -1);
                                else if ("<>AV".indexOf(u) > -1)
                                    for (var h = 0; h < 2; h++) {
                                        for (var p = !0, m = s + 1; m < o.length; m++) {
                                            if (nM(o[m], u)) {
                                                p = !1, s = m;
                                                break
                                            }
                                            if (nT(o[m])) throw new D("Missing a " + u + " character to complete a CD arrow.", o[m]);
                                            c[h].body.push(o[m])
                                        }
                                        if (p) throw new D("Missing a " + u + " character to complete a CD arrow.", o[s])
                                    } else throw new D('Expected one of "<>AV=|." after @', o[s]);
                                var f = {
                                    type: "styling",
                                    body: [function(e, t, n) {
                                        var r = nS[e];
                                        switch (r) {
                                            case "\\\\cdrightarrow":
                                            case "\\\\cdleftarrow":
                                                return n.callFunction(r, [t[0]], [t[1]]);
                                            case "\\uparrow":
                                            case "\\downarrow":
                                                var i = n.callFunction("\\\\cdleft", [t[0]], []),
                                                    a = n.callFunction("\\Big", [{
                                                        type: "atom",
                                                        text: r,
                                                        mode: "math",
                                                        family: "rel"
                                                    }], []),
                                                    o = n.callFunction("\\\\cdright", [t[1]], []);
                                                return n.callFunction("\\\\cdparent", [{
                                                    type: "ordgroup",
                                                    mode: "math",
                                                    body: [i, a, o]
                                                }], []);
                                            case "\\\\cdlongequal":
                                                return n.callFunction("\\\\cdlongequal", [], []);
                                            case "\\Vert":
                                                return n.callFunction("\\Big", [{
                                                    type: "textord",
                                                    text: "\\Vert",
                                                    mode: "math"
                                                }], []);
                                            default:
                                                return {
                                                    type: "textord", text: " ", mode: "math"
                                                }
                                        }
                                    }(u, c, e)],
                                    mode: "math",
                                    style: "display"
                                };
                                r.push(f), l = nA()
                            } else l.body.push(o[s]);
                        a % 2 == 0 ? r.push(l) : r.shift(), r = [], i.push(r)
                    }
                    e.gullet.endGroup(), e.gullet.endGroup();
                    var d = Array(i[0].length).fill({
                        type: "align",
                        align: "c",
                        pregap: .25,
                        postgap: .25
                    });
                    return {
                        type: "array",
                        mode: "math",
                        body: i,
                        arraystretch: 1,
                        addJot: !0,
                        rowGaps: [null],
                        cols: d,
                        colSeparationType: "CD",
                        hLinesBeforeRow: Array(i.length + 1).fill([])
                    }
                }(e.parser)),
                htmlBuilder: rs,
                mathmlBuilder: rc
            }), rn["\\nonumber"] = "\\gdef\\@eqnsw{0}", rn["\\notag"] = "\\nonumber", tU({
                type: "text",
                names: ["\\hline", "\\hdashline"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    allowedInMath: !0
                },
                handler(e, t) {
                    throw new D(e.funcName + " valid only within array environment")
                }
            }), tU({
                type: "environment",
                names: ["\\begin", "\\end"],
                props: {
                    numArgs: 1,
                    argTypes: ["text"]
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    if ("ordgroup" !== i.type) throw new D("Invalid environment name", i);
                    for (var a = "", o = 0; o < i.body.length; ++o) a += nf(i.body[o], "textord").text;
                    if ("\\begin" === r) {
                        if (!re.hasOwnProperty(a)) throw new D("No such environment: " + a, i);
                        var l = re[a],
                            {
                                args: s,
                                optArgs: u
                            } = n.parseArguments("\\begin{" + a + "}", l),
                            c = {
                                mode: n.mode,
                                envName: a,
                                parser: n
                            },
                            h = l.handler(c, s, u);
                        n.expect("\\end", !1);
                        var p = n.nextToken,
                            m = nf(n.parseFunction(), "environment");
                        if (m.name !== a) throw new D("Mismatch: \\begin{" + a + "} matched by \\end{" + m.name + "}", p);
                        return h
                    }
                    return {
                        type: "environment",
                        mode: n.mode,
                        name: a,
                        nameGroup: i
                    }
                }
            });
            var rp = (e, t) => {
                    var n = e.font,
                        r = t.withFont(n);
                    return t1(e.body, r)
                },
                rm = (e, t) => {
                    var n = e.font,
                        r = t.withFont(n);
                    return ni(e.body, r)
                },
                rf = {
                    "\\Bbb": "\\mathbb",
                    "\\bold": "\\mathbf",
                    "\\frak": "\\mathfrak",
                    "\\bm": "\\boldsymbol"
                };
            tU({
                type: "font",
                names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
                props: {
                    numArgs: 1,
                    allowedInArgument: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t_(t[0]), a = r;
                    return a in rf && (a = rf[a]), {
                        type: "font",
                        mode: n.mode,
                        font: a.slice(1),
                        body: i
                    }
                },
                htmlBuilder: rp,
                mathmlBuilder: rm
            }), tU({
                type: "mclass",
                names: ["\\boldsymbol", "\\bm"],
                props: {
                    numArgs: 1
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[0], i = X(r);
                    return {
                        type: "mclass",
                        mode: n.mode,
                        mclass: nz(r),
                        body: [{
                            type: "font",
                            mode: n.mode,
                            font: "boldsymbol",
                            body: r
                        }],
                        isCharacterBox: i
                    }
                }
            }), tU({
                type: "font",
                names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                props: {
                    numArgs: 0,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r,
                        breakOnTokenText: i
                    } = e, {
                        mode: a
                    } = n, o = n.parseExpression(!0, i);
                    return {
                        type: "font",
                        mode: a,
                        font: "math" + r.slice(1),
                        body: {
                            type: "ordgroup",
                            mode: n.mode,
                            body: o
                        }
                    }
                },
                htmlBuilder: rp,
                mathmlBuilder: rm
            });
            var rd = (e, t) => {
                    var n = t;
                    return "display" === e ? n = n.id >= er.SCRIPT.id ? n.text() : er.DISPLAY : "text" === e && n.size === er.DISPLAY.size ? n = er.TEXT : "script" === e ? n = er.SCRIPT : "scriptscript" === e && (n = er.SCRIPTSCRIPT), n
                },
                rg = (e, t) => {
                    var n, r, i, a, o, l, s, u, c, h, p, m = rd(e.size, t.style),
                        f = m.fracNum(),
                        d = m.fracDen();
                    n = t.havingStyle(f);
                    var g = t1(e.numer, n, t);
                    if (e.continued) {
                        var y = 8.5 / t.fontMetrics().ptPerEm,
                            x = 3.5 / t.fontMetrics().ptPerEm;
                        g.height = g.height < y ? y : g.height, g.depth = g.depth < x ? x : g.depth
                    }
                    n = t.havingStyle(d);
                    var b = t1(e.denom, n, t);
                    if (e.hasBarLine ? (e.barSize ? (i = eS(e.barSize, t), r = tA("frac-line", t, i)) : r = tA("frac-line", t), i = r.height, a = r.height) : (r = null, i = 0, a = t.fontMetrics().defaultRuleThickness), m.size === er.DISPLAY.size || "display" === e.size ? (o = t.fontMetrics().num1, l = i > 0 ? 3 * a : 7 * a, s = t.fontMetrics().denom1) : (i > 0 ? (o = t.fontMetrics().num2, l = a) : (o = t.fontMetrics().num3, l = 3 * a), s = t.fontMetrics().denom2), r) {
                        var v = t.fontMetrics().axisHeight;
                        o - g.depth - (v + .5 * i) < l && (o += l - (o - g.depth - (v + .5 * i))), v - .5 * i - (b.height - s) < l && (s += l - (v - .5 * i - (b.height - s))), u = tC({
                            positionType: "individualShift",
                            children: [{
                                type: "elem",
                                elem: b,
                                shift: s
                            }, {
                                type: "elem",
                                elem: r,
                                shift: -(v - .5 * i)
                            }, {
                                type: "elem",
                                elem: g,
                                shift: -o
                            }]
                        }, t)
                    } else {
                        var k = o - g.depth - (b.height - s);
                        k < l && (o += .5 * (l - k), s += .5 * (l - k)), u = tC({
                            positionType: "individualShift",
                            children: [{
                                type: "elem",
                                elem: b,
                                shift: s
                            }, {
                                type: "elem",
                                elem: g,
                                shift: -o
                            }]
                        }, t)
                    }
                    return n = t.havingStyle(m), u.height *= n.sizeMultiplier / t.sizeMultiplier, u.depth *= n.sizeMultiplier / t.sizeMultiplier, c = m.size === er.DISPLAY.size ? t.fontMetrics().delim1 : m.size === er.SCRIPTSCRIPT.size ? t.havingStyle(er.SCRIPT).fontMetrics().delim2 : t.fontMetrics().delim2, h = null == e.leftDelim ? t0(t, ["mopen"]) : n0(e.leftDelim, c, !0, t.havingStyle(m), e.mode, ["mopen"]), p = e.continued ? ty([]) : null == e.rightDelim ? t0(t, ["mclose"]) : n0(e.rightDelim, c, !0, t.havingStyle(m), e.mode, ["mclose"]), ty(["mord"].concat(n.sizingClasses(t)), [h, ty(["mfrac"], [u]), p], t)
                },
                ry = (e, t) => {
                    var n = new t3("mfrac", [ni(e.numer, t), ni(e.denom, t)]);
                    if (e.hasBarLine) {
                        if (e.barSize) {
                            var r = eS(e.barSize, t);
                            n.setAttribute("linethickness", eA(r))
                        }
                    } else n.setAttribute("linethickness", "0px");
                    var i = rd(e.size, t.style);
                    if (i.size !== t.style.size) {
                        n = new t3("mstyle", [n]);
                        var a = i.size === er.DISPLAY.size ? "true" : "false";
                        n.setAttribute("displaystyle", a), n.setAttribute("scriptlevel", "0")
                    }
                    if (null != e.leftDelim || null != e.rightDelim) {
                        var o = [];
                        if (null != e.leftDelim) {
                            var l = new t3("mo", [new t7(e.leftDelim.replace("\\", ""))]);
                            l.setAttribute("fence", "true"), o.push(l)
                        }
                        if (o.push(n), null != e.rightDelim) {
                            var s = new t3("mo", [new t7(e.rightDelim.replace("\\", ""))]);
                            s.setAttribute("fence", "true"), o.push(s)
                        }
                        return t9(o)
                    }
                    return n
                };
            tU({
                type: "genfrac",
                names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
                props: {
                    numArgs: 2,
                    allowedInArgument: !0
                },
                handler: (e, t) => {
                    var n, {
                            parser: r,
                            funcName: i
                        } = e,
                        a = t[0],
                        o = t[1],
                        l = null,
                        s = null,
                        u = "auto";
                    switch (i) {
                        case "\\dfrac":
                        case "\\frac":
                        case "\\tfrac":
                            n = !0;
                            break;
                        case "\\\\atopfrac":
                            n = !1;
                            break;
                        case "\\dbinom":
                        case "\\binom":
                        case "\\tbinom":
                            n = !1, l = "(", s = ")";
                            break;
                        case "\\\\bracefrac":
                            n = !1, l = "\\{", s = "\\}";
                            break;
                        case "\\\\brackfrac":
                            n = !1, l = "[", s = "]";
                            break;
                        default:
                            throw Error("Unrecognized genfrac command")
                    }
                    switch (i) {
                        case "\\dfrac":
                        case "\\dbinom":
                            u = "display";
                            break;
                        case "\\tfrac":
                        case "\\tbinom":
                            u = "text"
                    }
                    return {
                        type: "genfrac",
                        mode: r.mode,
                        continued: !1,
                        numer: a,
                        denom: o,
                        hasBarLine: n,
                        leftDelim: l,
                        rightDelim: s,
                        size: u,
                        barSize: null
                    }
                },
                htmlBuilder: rg,
                mathmlBuilder: ry
            }), tU({
                type: "genfrac",
                names: ["\\cfrac"],
                props: {
                    numArgs: 2
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0], a = t[1];
                    return {
                        type: "genfrac",
                        mode: n.mode,
                        continued: !0,
                        numer: i,
                        denom: a,
                        hasBarLine: !0,
                        leftDelim: null,
                        rightDelim: null,
                        size: "display",
                        barSize: null
                    }
                }
            }), tU({
                type: "infix",
                names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                props: {
                    numArgs: 0,
                    infix: !0
                },
                handler(e) {
                    var t, {
                        parser: n,
                        funcName: r,
                        token: i
                    } = e;
                    switch (r) {
                        case "\\over":
                            t = "\\frac";
                            break;
                        case "\\choose":
                            t = "\\binom";
                            break;
                        case "\\atop":
                            t = "\\\\atopfrac";
                            break;
                        case "\\brace":
                            t = "\\\\bracefrac";
                            break;
                        case "\\brack":
                            t = "\\\\brackfrac";
                            break;
                        default:
                            throw Error("Unrecognized infix genfrac command")
                    }
                    return {
                        type: "infix",
                        mode: n.mode,
                        replaceWith: t,
                        token: i
                    }
                }
            });
            var rx = ["display", "text", "script", "scriptscript"],
                rb = function(e) {
                    var t = null;
                    return e.length > 0 && (t = "." === (t = e) ? null : t), t
                };
            tU({
                type: "genfrac",
                names: ["\\genfrac"],
                props: {
                    numArgs: 6,
                    allowedInArgument: !0,
                    argTypes: ["math", "math", "size", "text", "math", "math"]
                },
                handler(e, t) {
                    var n, {
                            parser: r
                        } = e,
                        i = t[4],
                        a = t[5],
                        o = t_(t[0]),
                        l = "atom" === o.type && "open" === o.family ? rb(o.text) : null,
                        s = t_(t[1]),
                        u = "atom" === s.type && "close" === s.family ? rb(s.text) : null,
                        c = nf(t[2], "size"),
                        h = null;
                    n = !!c.isBlank || (h = c.value).number > 0;
                    var p = "auto",
                        m = t[3];
                    return "ordgroup" === m.type ? m.body.length > 0 && (p = rx[Number(nf(m.body[0], "textord").text)]) : p = rx[Number((m = nf(m, "textord")).text)], {
                        type: "genfrac",
                        mode: r.mode,
                        numer: i,
                        denom: a,
                        continued: !1,
                        hasBarLine: n,
                        barSize: h,
                        leftDelim: l,
                        rightDelim: u,
                        size: p
                    }
                },
                htmlBuilder: rg,
                mathmlBuilder: ry
            }), tU({
                type: "infix",
                names: ["\\above"],
                props: {
                    numArgs: 1,
                    argTypes: ["size"],
                    infix: !0
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r,
                        token: i
                    } = e;
                    return {
                        type: "infix",
                        mode: n.mode,
                        replaceWith: "\\\\abovefrac",
                        size: nf(t[0], "size").value,
                        token: i
                    }
                }
            }), tU({
                type: "genfrac",
                names: ["\\\\abovefrac"],
                props: {
                    numArgs: 3,
                    argTypes: ["math", "size", "math"]
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0], a = U(nf(t[1], "infix").size), o = t[2], l = a.number > 0;
                    return {
                        type: "genfrac",
                        mode: n.mode,
                        numer: i,
                        denom: o,
                        continued: !1,
                        hasBarLine: l,
                        barSize: a,
                        leftDelim: null,
                        rightDelim: null,
                        size: "auto"
                    }
                },
                htmlBuilder: rg,
                mathmlBuilder: ry
            });
            var rv = (e, t) => {
                var n, r, i, a = t.style;
                "supsub" === e.type ? (n = e.sup ? t1(e.sup, t.havingStyle(a.sup()), t) : t1(e.sub, t.havingStyle(a.sub()), t), r = nf(e.base, "horizBrace")) : r = nf(e, "horizBrace");
                var o = t1(r.base, t.havingBaseStyle(er.DISPLAY)),
                    l = nm(r, t);
                if (r.isOver ? (i = tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: o
                        }, {
                            type: "kern",
                            size: .1
                        }, {
                            type: "elem",
                            elem: l
                        }]
                    }, t)).children[0].children[0].children[1].classes.push("svg-align") : (i = tC({
                        positionType: "bottom",
                        positionData: o.depth + .1 + l.height,
                        children: [{
                            type: "elem",
                            elem: l
                        }, {
                            type: "kern",
                            size: .1
                        }, {
                            type: "elem",
                            elem: o
                        }]
                    }, t)).children[0].children[0].children[0].classes.push("svg-align"), n) {
                    var s = ty(["mord", r.isOver ? "mover" : "munder"], [i], t);
                    i = r.isOver ? tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: s
                        }, {
                            type: "kern",
                            size: .2
                        }, {
                            type: "elem",
                            elem: n
                        }]
                    }, t) : tC({
                        positionType: "bottom",
                        positionData: s.depth + .2 + n.height + n.depth,
                        children: [{
                            type: "elem",
                            elem: n
                        }, {
                            type: "kern",
                            size: .2
                        }, {
                            type: "elem",
                            elem: s
                        }]
                    }, t)
                }
                return ty(["mord", r.isOver ? "mover" : "munder"], [i], t)
            };
            tU({
                type: "horizBrace",
                names: ["\\overbrace", "\\underbrace"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e;
                    return {
                        type: "horizBrace",
                        mode: n.mode,
                        label: r,
                        isOver: /^\\over/.test(r),
                        base: t[0]
                    }
                },
                htmlBuilder: rv,
                mathmlBuilder: (e, t) => {
                    var n = np(e.label);
                    return new t3(e.isOver ? "mover" : "munder", [ni(e.base, t), n])
                }
            }), tU({
                type: "href",
                names: ["\\href"],
                props: {
                    numArgs: 2,
                    argTypes: ["url", "original"],
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[1], i = nf(t[0], "url").url;
                    return n.settings.isTrusted({
                        command: "\\href",
                        url: i
                    }) ? {
                        type: "href",
                        mode: n.mode,
                        href: i,
                        body: tj(r)
                    } : n.formatUnsupportedCmd("\\href")
                },
                htmlBuilder: (e, t) => {
                    var n = tY(e.body, t, !1);
                    return tT(e.href, [], n, t)
                },
                mathmlBuilder: (e, t) => {
                    var n = nr(e.body, t);
                    return n instanceof t3 || (n = new t3("mrow", [n])), n.setAttribute("href", e.href), n
                }
            }), tU({
                type: "href",
                names: ["\\url"],
                props: {
                    numArgs: 1,
                    argTypes: ["url"],
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = nf(t[0], "url").url;
                    if (!n.settings.isTrusted({
                            command: "\\url",
                            url: r
                        })) return n.formatUnsupportedCmd("\\url");
                    for (var i = [], a = 0; a < r.length; a++) {
                        var o = r[a];
                        "~" === o && (o = "\\textasciitilde"), i.push({
                            type: "textord",
                            mode: "text",
                            text: o
                        })
                    }
                    var l = {
                        type: "text",
                        mode: n.mode,
                        font: "\\texttt",
                        body: i
                    };
                    return {
                        type: "href",
                        mode: n.mode,
                        href: r,
                        body: tj(l)
                    }
                }
            }), tU({
                type: "hbox",
                names: ["\\hbox"],
                props: {
                    numArgs: 1,
                    argTypes: ["text"],
                    allowedInText: !0,
                    primitive: !0
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "hbox",
                        mode: n.mode,
                        body: tj(t[0])
                    }
                },
                htmlBuilder: (e, t) => tb(tY(e.body, t, !1)),
                mathmlBuilder: (e, t) => new t3("mrow", nn(e.body, t))
            }), tU({
                type: "html",
                names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
                props: {
                    numArgs: 2,
                    argTypes: ["raw", "original"],
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var n, {
                            parser: r,
                            funcName: i,
                            token: a
                        } = e,
                        o = nf(t[0], "raw").string,
                        l = t[1];
                    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                    var s = {};
                    switch (i) {
                        case "\\htmlClass":
                            s.class = o, n = {
                                command: "\\htmlClass",
                                class: o
                            };
                            break;
                        case "\\htmlId":
                            s.id = o, n = {
                                command: "\\htmlId",
                                id: o
                            };
                            break;
                        case "\\htmlStyle":
                            s.style = o, n = {
                                command: "\\htmlStyle",
                                style: o
                            };
                            break;
                        case "\\htmlData":
                            for (var u = o.split(","), c = 0; c < u.length; c++) {
                                var h = u[c],
                                    p = h.indexOf("=");
                                if (p < 0) throw new D("\\htmlData key/value '" + h + "' missing equals sign");
                                var m = h.slice(0, p),
                                    f = h.slice(p + 1);
                                s["data-" + m.trim()] = f
                            }
                            n = {
                                command: "\\htmlData",
                                attributes: s
                            };
                            break;
                        default:
                            throw Error("Unrecognized html command")
                    }
                    return r.settings.isTrusted(n) ? {
                        type: "html",
                        mode: r.mode,
                        attributes: s,
                        body: tj(l)
                    } : r.formatUnsupportedCmd(i)
                },
                htmlBuilder: (e, t) => {
                    var n = tY(e.body, t, !1),
                        r = ["enclosing"];
                    e.attributes.class && r.push(...e.attributes.class.trim().split(/\s+/));
                    var i = ty(r, n, t);
                    for (var a in e.attributes) "class" !== a && e.attributes.hasOwnProperty(a) && i.setAttribute(a, e.attributes[a]);
                    return i
                },
                mathmlBuilder: (e, t) => nr(e.body, t)
            }), tU({
                type: "htmlmathml",
                names: ["\\html@mathml"],
                props: {
                    numArgs: 2,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "htmlmathml",
                        mode: n.mode,
                        html: tj(t[0]),
                        mathml: tj(t[1])
                    }
                },
                htmlBuilder: (e, t) => tb(tY(e.html, t, !1)),
                mathmlBuilder: (e, t) => nr(e.mathml, t)
            });
            var rk = function(e) {
                if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
                    number: +e,
                    unit: "bp"
                };
                var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
                if (!t) throw new D("Invalid size: '" + e + "' in \\includegraphics");
                var n = {
                    number: +(t[1] + t[2]),
                    unit: t[3]
                };
                if (!ez(n)) throw new D("Invalid unit: '" + n.unit + "' in \\includegraphics.");
                return n
            };
            tU({
                type: "includegraphics",
                names: ["\\includegraphics"],
                props: {
                    numArgs: 1,
                    numOptionalArgs: 1,
                    argTypes: ["raw", "url"],
                    allowedInText: !1
                },
                handler: (e, t, n) => {
                    var {
                        parser: r
                    } = e, i = {
                        number: 0,
                        unit: "em"
                    }, a = {
                        number: .9,
                        unit: "em"
                    }, o = {
                        number: 0,
                        unit: "em"
                    }, l = "";
                    if (n[0])
                        for (var s = nf(n[0], "raw").string.split(","), u = 0; u < s.length; u++) {
                            var c = s[u].split("=");
                            if (2 === c.length) {
                                var h = c[1].trim();
                                switch (c[0].trim()) {
                                    case "alt":
                                        l = h;
                                        break;
                                    case "width":
                                        i = rk(h);
                                        break;
                                    case "height":
                                        a = rk(h);
                                        break;
                                    case "totalheight":
                                        o = rk(h);
                                        break;
                                    default:
                                        throw new D("Invalid key: '" + c[0] + "' in \\includegraphics.")
                                }
                            }
                        }
                    var p = nf(t[0], "url").url;
                    return ("" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))), r.settings.isTrusted({
                        command: "\\includegraphics",
                        url: p
                    })) ? {
                        type: "includegraphics",
                        mode: r.mode,
                        alt: l,
                        width: i,
                        height: a,
                        totalheight: o,
                        src: p
                    } : r.formatUnsupportedCmd("\\includegraphics")
                },
                htmlBuilder: (e, t) => {
                    var n = eS(e.height, t),
                        r = 0;
                    e.totalheight.number > 0 && (r = eS(e.totalheight, t) - n);
                    var i = 0;
                    e.width.number > 0 && (i = eS(e.width, t));
                    var a = {
                        height: eA(n + r)
                    };
                    i > 0 && (a.width = eA(i)), r > 0 && (a.verticalAlign = eA(-r));
                    var o = new eO(e.src, e.alt, a);
                    return o.height = n, o.depth = r, o
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mglyph", []);
                    n.setAttribute("alt", e.alt);
                    var r = eS(e.height, t),
                        i = 0;
                    if (e.totalheight.number > 0 && (i = eS(e.totalheight, t) - r, n.setAttribute("valign", eA(-i))), n.setAttribute("height", eA(r + i)), e.width.number > 0) {
                        var a = eS(e.width, t);
                        n.setAttribute("width", eA(a))
                    }
                    return n.setAttribute("src", e.src), n
                }
            }), tU({
                type: "kern",
                names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                props: {
                    numArgs: 1,
                    argTypes: ["size"],
                    primitive: !0,
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = nf(t[0], "size");
                    if (n.settings.strict) {
                        var a = "m" === r[1],
                            o = "mu" === i.value.unit;
                        a ? (o || n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, not " + i.value.unit + " units"), "math" !== n.mode && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : o && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units")
                    }
                    return {
                        type: "kern",
                        mode: n.mode,
                        dimension: i.value
                    }
                },
                htmlBuilder: (e, t) => tR(e.dimension, t),
                mathmlBuilder: (e, t) => new t2(eS(e.dimension, t))
            }), tU({
                type: "lap",
                names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "lap",
                        mode: n.mode,
                        alignment: r.slice(5),
                        body: i
                    }
                },
                htmlBuilder: (e, t) => {
                    "clap" === e.alignment ? (n = ty([], [t1(e.body, t)]), n = ty(["inner"], [n], t)) : n = ty(["inner"], [t1(e.body, t)]);
                    var n, r = ty(["fix"], []),
                        i = ty([e.alignment], [n, r], t),
                        a = ty(["strut"]);
                    return a.style.height = eA(i.height + i.depth), i.depth && (a.style.verticalAlign = eA(-i.depth)), i.children.unshift(a), i = ty(["thinbox"], [i], t), ty(["mord", "vbox"], [i], t)
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mpadded", [ni(e.body, t)]);
                    if ("rlap" !== e.alignment) {
                        var r = "llap" === e.alignment ? "-1" : "-0.5";
                        n.setAttribute("lspace", r + "width")
                    }
                    return n.setAttribute("width", "0px"), n
                }
            }), tU({
                type: "styling",
                names: ["\\(", "$"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    allowedInMath: !1
                },
                handler(e, t) {
                    var {
                        funcName: n,
                        parser: r
                    } = e, i = r.mode;
                    r.switchMode("math");
                    var a = "\\(" === n ? "\\)" : "$",
                        o = r.parseExpression(!1, a);
                    return r.expect(a), r.switchMode(i), {
                        type: "styling",
                        mode: r.mode,
                        style: "text",
                        body: o
                    }
                }
            }), tU({
                type: "text",
                names: ["\\)", "\\]"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    allowedInMath: !1
                },
                handler(e, t) {
                    throw new D("Mismatched " + e.funcName)
                }
            });
            var rw = (e, t) => {
                switch (t.style.size) {
                    case er.DISPLAY.size:
                        return e.display;
                    case er.TEXT.size:
                        return e.text;
                    case er.SCRIPT.size:
                        return e.script;
                    case er.SCRIPTSCRIPT.size:
                        return e.scriptscript;
                    default:
                        return e.text
                }
            };
            tU({
                type: "mathchoice",
                names: ["\\mathchoice"],
                props: {
                    numArgs: 4,
                    primitive: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "mathchoice",
                        mode: n.mode,
                        display: tj(t[0]),
                        text: tj(t[1]),
                        script: tj(t[2]),
                        scriptscript: tj(t[3])
                    }
                },
                htmlBuilder: (e, t) => tb(tY(rw(e, t), t, !1)),
                mathmlBuilder: (e, t) => nr(rw(e, t), t)
            });
            var rz = (e, t, n, r, i, a, o) => {
                    e = ty([], [e]);
                    var l, s, u, c = n && X(n);
                    if (t) {
                        var h = t1(t, r.havingStyle(i.sup()), r);
                        s = {
                            elem: h,
                            kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - h.depth)
                        }
                    }
                    if (n) {
                        var p = t1(n, r.havingStyle(i.sub()), r);
                        l = {
                            elem: p,
                            kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - p.height)
                        }
                    }
                    if (s && l) u = tC({
                        positionType: "bottom",
                        positionData: r.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + e.depth + o,
                        children: [{
                            type: "kern",
                            size: r.fontMetrics().bigOpSpacing5
                        }, {
                            type: "elem",
                            elem: l.elem,
                            marginLeft: eA(-a)
                        }, {
                            type: "kern",
                            size: l.kern
                        }, {
                            type: "elem",
                            elem: e
                        }, {
                            type: "kern",
                            size: s.kern
                        }, {
                            type: "elem",
                            elem: s.elem,
                            marginLeft: eA(a)
                        }, {
                            type: "kern",
                            size: r.fontMetrics().bigOpSpacing5
                        }]
                    }, r);
                    else if (l) u = tC({
                        positionType: "top",
                        positionData: e.height - o,
                        children: [{
                            type: "kern",
                            size: r.fontMetrics().bigOpSpacing5
                        }, {
                            type: "elem",
                            elem: l.elem,
                            marginLeft: eA(-a)
                        }, {
                            type: "kern",
                            size: l.kern
                        }, {
                            type: "elem",
                            elem: e
                        }]
                    }, r);
                    else {
                        if (!s) return e;
                        u = tC({
                            positionType: "bottom",
                            positionData: e.depth + o,
                            children: [{
                                type: "elem",
                                elem: e
                            }, {
                                type: "kern",
                                size: s.kern
                            }, {
                                type: "elem",
                                elem: s.elem,
                                marginLeft: eA(a)
                            }, {
                                type: "kern",
                                size: r.fontMetrics().bigOpSpacing5
                            }]
                        }, r)
                    }
                    var m = [u];
                    if (l && 0 !== a && !c) {
                        var f = ty(["mspace"], [], r);
                        f.style.marginRight = eA(a), m.unshift(f)
                    }
                    return ty(["mop", "op-limits"], m, r)
                },
                rS = ["\\smallint"],
                rA = (e, t) => {
                    var n, r, i, a, o = !1;
                    "supsub" === e.type ? (n = e.sup, r = e.sub, i = nf(e.base, "op"), o = !0) : i = nf(e, "op");
                    var l = t.style,
                        s = !1;
                    if (l.size === er.DISPLAY.size && i.symbol && !rS.includes(i.name) && (s = !0), i.symbol) {
                        var u = s ? "Size2-Regular" : "Size1-Regular",
                            c = "";
                        if (("\\oiint" === i.name || "\\oiiint" === i.name) && (c = i.name.slice(1), i.name = "oiint" === c ? "\\iint" : "\\iiint"), a = tf(i.name, u, "math", t, ["mop", "op-symbol", s ? "large-op" : "small-op"]), c.length > 0) {
                            var h = a.italic;
                            a = tC({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: a,
                                    shift: 0
                                }, {
                                    type: "elem",
                                    elem: tI(c + "Size" + (s ? "2" : "1"), t),
                                    shift: .08 * !!s
                                }]
                            }, t), i.name = "\\" + c, a.classes.unshift("mop"), a.italic = h
                        }
                    } else if (i.body) {
                        var p = tY(i.body, t, !0);
                        1 === p.length && p[0] instanceof eL ? (a = p[0]).classes[0] = "mop" : a = ty(["mop"], p, t)
                    } else {
                        for (var m = [], f = 1; f < i.name.length; f++) m.push(tS(i.name[f], i.mode, t));
                        a = ty(["mop"], m, t)
                    }
                    var d = 0,
                        g = 0;
                    return ((a instanceof eL || "\\oiint" === i.name || "\\oiiint" === i.name) && !i.suppressBaseShift && (d = (a.height - a.depth) / 2 - t.fontMetrics().axisHeight, g = a.italic), o) ? rz(a, n, r, t, l, g, d) : (d && (a.style.position = "relative", a.style.top = eA(d)), a)
                },
                rT = (e, t) => {
                    var n;
                    if (e.symbol) n = new t3("mo", [t8(e.name, e.mode)]), rS.includes(e.name) && n.setAttribute("largeop", "false");
                    else if (e.body) n = new t3("mo", nn(e.body, t));
                    else {
                        n = new t3("mi", [new t7(e.name.slice(1))]);
                        var r = new t3("mo", [t8("⁡", "text")]);
                        n = e.parentIsSupSub ? new t3("mrow", [n, r]) : t6([n, r])
                    }
                    return n
                },
                rM = {
                    "∏": "\\prod",
                    "∐": "\\coprod",
                    "∑": "\\sum",
                    "⋀": "\\bigwedge",
                    "⋁": "\\bigvee",
                    "⋂": "\\bigcap",
                    "⋃": "\\bigcup",
                    "⨀": "\\bigodot",
                    "⨁": "\\bigoplus",
                    "⨂": "\\bigotimes",
                    "⨄": "\\biguplus",
                    "⨆": "\\bigsqcup"
                };
            tU({
                type: "op",
                names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
                props: {
                    numArgs: 0
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = r;
                    return 1 === i.length && (i = rM[i]), {
                        type: "op",
                        mode: n.mode,
                        limits: !0,
                        parentIsSupSub: !1,
                        symbol: !0,
                        name: i
                    }
                },
                htmlBuilder: rA,
                mathmlBuilder: rT
            }), tU({
                type: "op",
                names: ["\\mathop"],
                props: {
                    numArgs: 1,
                    primitive: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[0];
                    return {
                        type: "op",
                        mode: n.mode,
                        limits: !1,
                        parentIsSupSub: !1,
                        symbol: !1,
                        body: tj(r)
                    }
                },
                htmlBuilder: rA,
                mathmlBuilder: rT
            });
            var rC = {
                "∫": "\\int",
                "∬": "\\iint",
                "∭": "\\iiint",
                "∮": "\\oint",
                "∯": "\\oiint",
                "∰": "\\oiiint"
            };
            tU({
                type: "op",
                names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    var {
                        parser: t,
                        funcName: n
                    } = e;
                    return {
                        type: "op",
                        mode: t.mode,
                        limits: !1,
                        parentIsSupSub: !1,
                        symbol: !1,
                        name: n
                    }
                },
                htmlBuilder: rA,
                mathmlBuilder: rT
            }), tU({
                type: "op",
                names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
                props: {
                    numArgs: 0
                },
                handler(e) {
                    var {
                        parser: t,
                        funcName: n
                    } = e;
                    return {
                        type: "op",
                        mode: t.mode,
                        limits: !0,
                        parentIsSupSub: !1,
                        symbol: !1,
                        name: n
                    }
                },
                htmlBuilder: rA,
                mathmlBuilder: rT
            }), tU({
                type: "op",
                names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
                props: {
                    numArgs: 0,
                    allowedInArgument: !0
                },
                handler(e) {
                    var {
                        parser: t,
                        funcName: n
                    } = e, r = n;
                    return 1 === r.length && (r = rC[r]), {
                        type: "op",
                        mode: t.mode,
                        limits: !1,
                        parentIsSupSub: !1,
                        symbol: !0,
                        name: r
                    }
                },
                htmlBuilder: rA,
                mathmlBuilder: rT
            });
            var rE = (e, t) => {
                var n, r, i, a, o = !1;
                if ("supsub" === e.type ? (n = e.sup, r = e.sub, i = nf(e.base, "operatorname"), o = !0) : i = nf(e, "operatorname"), i.body.length > 0) {
                    for (var l = tY(i.body.map(e => {
                            var t = e.text;
                            return "string" == typeof t ? {
                                type: "textord",
                                mode: e.mode,
                                text: t
                            } : e
                        }), t.withFont("mathrm"), !0), s = 0; s < l.length; s++) {
                        var u = l[s];
                        u instanceof eL && (u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                    }
                    a = ty(["mop"], l, t)
                } else a = ty(["mop"], [], t);
                return o ? rz(a, n, r, t, t.style, 0, 0) : a
            };

            function rR(e, t, n) {
                for (var r = tY(e, t, !1), i = t.sizeMultiplier / n.sizeMultiplier, a = 0; a < r.length; a++) {
                    var o = r[a].classes.indexOf("sizing");
                    o < 0 ? Array.prototype.push.apply(r[a].classes, t.sizingClasses(n)) : r[a].classes[o + 1] === "reset-size" + t.size && (r[a].classes[o + 1] = "reset-size" + n.size), r[a].height *= i, r[a].depth *= i
                }
                return tb(r)
            }
            tU({
                type: "operatorname",
                names: ["\\operatorname@", "\\operatornamewithlimits"],
                props: {
                    numArgs: 1
                },
                handler: (e, t) => {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "operatorname",
                        mode: n.mode,
                        body: tj(i),
                        alwaysHandleSupSub: "\\operatornamewithlimits" === r,
                        limits: !1,
                        parentIsSupSub: !1
                    }
                },
                htmlBuilder: rE,
                mathmlBuilder: (e, t) => {
                    for (var n = nn(e.body, t.withFont("mathrm")), r = !0, i = 0; i < n.length; i++) {
                        var a = n[i];
                        if (a instanceof t2);
                        else if (a instanceof t3) switch (a.type) {
                            case "mi":
                            case "mn":
                            case "ms":
                            case "mspace":
                            case "mtext":
                                break;
                            case "mo":
                                var o = a.children[0];
                                1 === a.children.length && o instanceof t7 ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
                                break;
                            default:
                                r = !1
                        } else r = !1
                    }
                    r && (n = [new t7(n.map(e => e.toText()).join(""))]);
                    var l = new t3("mi", n);
                    l.setAttribute("mathvariant", "normal");
                    var s = new t3("mo", [t8("⁡", "text")]);
                    return e.parentIsSupSub ? new t3("mrow", [l, s]) : t6([l, s])
                }
            }), rn["\\operatorname"] = "\\@ifstar\\operatornamewithlimits\\operatorname@", tV({
                type: "ordgroup",
                htmlBuilder: (e, t) => e.semisimple ? tb(tY(e.body, t, !1)) : ty(["mord"], tY(e.body, t, !0), t),
                mathmlBuilder: (e, t) => nr(e.body, t, !0)
            }), tU({
                type: "overline",
                names: ["\\overline"],
                props: {
                    numArgs: 1
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e, r = t[0];
                    return {
                        type: "overline",
                        mode: n.mode,
                        body: r
                    }
                },
                htmlBuilder(e, t) {
                    var n = t1(e.body, t.havingCrampedStyle()),
                        r = tA("overline-line", t),
                        i = t.fontMetrics().defaultRuleThickness;
                    return ty(["mord", "overline"], [tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: n
                        }, {
                            type: "kern",
                            size: 3 * i
                        }, {
                            type: "elem",
                            elem: r
                        }, {
                            type: "kern",
                            size: i
                        }]
                    }, t)], t)
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mo", [new t7("‾")]);
                    n.setAttribute("stretchy", "true");
                    var r = new t3("mover", [ni(e.body, t), n]);
                    return r.setAttribute("accent", "true"), r
                }
            }), tU({
                type: "phantom",
                names: ["\\phantom"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[0];
                    return {
                        type: "phantom",
                        mode: n.mode,
                        body: tj(r)
                    }
                },
                htmlBuilder: (e, t) => tb(tY(e.body, t.withPhantom(), !1)),
                mathmlBuilder: (e, t) => new t3("mphantom", nn(e.body, t))
            }), tU({
                type: "hphantom",
                names: ["\\hphantom"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[0];
                    return {
                        type: "hphantom",
                        mode: n.mode,
                        body: r
                    }
                },
                htmlBuilder: (e, t) => {
                    var n = ty([], [t1(e.body, t.withPhantom())]);
                    if (n.height = 0, n.depth = 0, n.children)
                        for (var r = 0; r < n.children.length; r++) n.children[r].height = 0, n.children[r].depth = 0;
                    return ty(["mord"], [n = tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: n
                        }]
                    }, t)], t)
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mphantom", nn(tj(e.body), t)),
                        r = new t3("mpadded", [n]);
                    return r.setAttribute("height", "0px"), r.setAttribute("depth", "0px"), r
                }
            }), tU({
                type: "vphantom",
                names: ["\\vphantom"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        parser: n
                    } = e, r = t[0];
                    return {
                        type: "vphantom",
                        mode: n.mode,
                        body: r
                    }
                },
                htmlBuilder: (e, t) => {
                    var n = ty(["inner"], [t1(e.body, t.withPhantom())]),
                        r = ty(["fix"], []);
                    return ty(["mord", "rlap"], [n, r], t)
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mphantom", nn(tj(e.body), t)),
                        r = new t3("mpadded", [n]);
                    return r.setAttribute("width", "0px"), r
                }
            }), tU({
                type: "raisebox",
                names: ["\\raisebox"],
                props: {
                    numArgs: 2,
                    argTypes: ["size", "hbox"],
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e, r = nf(t[0], "size").value, i = t[1];
                    return {
                        type: "raisebox",
                        mode: n.mode,
                        dy: r,
                        body: i
                    }
                },
                htmlBuilder(e, t) {
                    var n = t1(e.body, t);
                    return tC({
                        positionType: "shift",
                        positionData: -eS(e.dy, t),
                        children: [{
                            type: "elem",
                            elem: n
                        }]
                    }, t)
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mpadded", [ni(e.body, t)]),
                        r = e.dy.number + e.dy.unit;
                    return n.setAttribute("voffset", r), n
                }
            }), tU({
                type: "internal",
                names: ["\\relax"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    allowedInArgument: !0
                },
                handler(e) {
                    var {
                        parser: t
                    } = e;
                    return {
                        type: "internal",
                        mode: t.mode
                    }
                }
            }), tU({
                type: "rule",
                names: ["\\rule"],
                props: {
                    numArgs: 2,
                    numOptionalArgs: 1,
                    allowedInText: !0,
                    allowedInMath: !0,
                    argTypes: ["size", "size", "size"]
                },
                handler(e, t, n) {
                    var {
                        parser: r
                    } = e, i = n[0], a = nf(t[0], "size"), o = nf(t[1], "size");
                    return {
                        type: "rule",
                        mode: r.mode,
                        shift: i && nf(i, "size").value,
                        width: a.value,
                        height: o.value
                    }
                },
                htmlBuilder(e, t) {
                    var n = ty(["mord", "rule"], [], t),
                        r = eS(e.width, t),
                        i = eS(e.height, t),
                        a = e.shift ? eS(e.shift, t) : 0;
                    return n.style.borderRightWidth = eA(r), n.style.borderTopWidth = eA(i), n.style.bottom = eA(a), n.width = r, n.height = i + a, n.depth = -a, n.maxFontSize = 1.125 * i * t.sizeMultiplier, n
                },
                mathmlBuilder(e, t) {
                    var n = eS(e.width, t),
                        r = eS(e.height, t),
                        i = e.shift ? eS(e.shift, t) : 0,
                        a = t.color && t.getColor() || "black",
                        o = new t3("mspace");
                    o.setAttribute("mathbackground", a), o.setAttribute("width", eA(n)), o.setAttribute("height", eA(r));
                    var l = new t3("mpadded", [o]);
                    return i >= 0 ? l.setAttribute("height", eA(i)) : (l.setAttribute("height", eA(i)), l.setAttribute("depth", eA(-i))), l.setAttribute("voffset", eA(i)), l
                }
            });
            var rI = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
            tU({
                type: "sizing",
                names: rI,
                props: {
                    numArgs: 0,
                    allowedInText: !0
                },
                handler: (e, t) => {
                    var {
                        breakOnTokenText: n,
                        funcName: r,
                        parser: i
                    } = e, a = i.parseExpression(!1, n);
                    return {
                        type: "sizing",
                        mode: i.mode,
                        size: rI.indexOf(r) + 1,
                        body: a
                    }
                },
                htmlBuilder: (e, t) => {
                    var n = t.havingSize(e.size);
                    return rR(e.body, n, t)
                },
                mathmlBuilder: (e, t) => {
                    var n = t.havingSize(e.size),
                        r = new t3("mstyle", nn(e.body, n));
                    return r.setAttribute("mathsize", eA(n.sizeMultiplier)), r
                }
            }), tU({
                type: "smash",
                names: ["\\smash"],
                props: {
                    numArgs: 1,
                    numOptionalArgs: 1,
                    allowedInText: !0
                },
                handler: (e, t, n) => {
                    var {
                        parser: r
                    } = e, i = !1, a = !1, o = n[0] && nf(n[0], "ordgroup");
                    if (o)
                        for (var l = "", s = 0; s < o.body.length; ++s)
                            if ("t" === (l = o.body[s].text)) i = !0;
                            else if ("b" === l) a = !0;
                    else {
                        i = !1, a = !1;
                        break
                    } else i = !0, a = !0;
                    var u = t[0];
                    return {
                        type: "smash",
                        mode: r.mode,
                        body: u,
                        smashHeight: i,
                        smashDepth: a
                    }
                },
                htmlBuilder: (e, t) => {
                    var n = ty([], [t1(e.body, t)]);
                    if (!e.smashHeight && !e.smashDepth) return n;
                    if (e.smashHeight && (n.height = 0, n.children))
                        for (var r = 0; r < n.children.length; r++) n.children[r].height = 0;
                    if (e.smashDepth && (n.depth = 0, n.children))
                        for (var i = 0; i < n.children.length; i++) n.children[i].depth = 0;
                    return ty(["mord"], [tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: n
                        }]
                    }, t)], t)
                },
                mathmlBuilder: (e, t) => {
                    var n = new t3("mpadded", [ni(e.body, t)]);
                    return e.smashHeight && n.setAttribute("height", "0px"), e.smashDepth && n.setAttribute("depth", "0px"), n
                }
            }), tU({
                type: "sqrt",
                names: ["\\sqrt"],
                props: {
                    numArgs: 1,
                    numOptionalArgs: 1
                },
                handler(e, t, n) {
                    var {
                        parser: r
                    } = e, i = n[0], a = t[0];
                    return {
                        type: "sqrt",
                        mode: r.mode,
                        body: a,
                        index: i
                    }
                },
                htmlBuilder(e, t) {
                    var n = t1(e.body, t.havingCrampedStyle());
                    0 === n.height && (n.height = t.fontMetrics().xHeight), n = tM(n, t);
                    var r = t.fontMetrics().defaultRuleThickness,
                        i = r;
                    t.style.id < er.TEXT.id && (i = t.fontMetrics().xHeight);
                    var a = r + i / 4,
                        {
                            span: o,
                            ruleWidth: l,
                            advanceWidth: s
                        } = n1(n.height + n.depth + a + r, t),
                        u = o.height - l;
                    u > n.height + n.depth + a && (a = (a + u - n.height - n.depth) / 2);
                    var c = o.height - n.height - a - l;
                    n.style.paddingLeft = eA(s);
                    var h = tC({
                        positionType: "firstBaseline",
                        children: [{
                            type: "elem",
                            elem: n,
                            wrapperClasses: ["svg-align"]
                        }, {
                            type: "kern",
                            size: -(n.height + c)
                        }, {
                            type: "elem",
                            elem: o
                        }, {
                            type: "kern",
                            size: l
                        }]
                    }, t);
                    if (!e.index) return ty(["mord", "sqrt"], [h], t);
                    var p = t.havingStyle(er.SCRIPTSCRIPT),
                        m = t1(e.index, p, t),
                        f = ty(["root"], [tC({
                            positionType: "shift",
                            positionData: -(.6 * (h.height - h.depth)),
                            children: [{
                                type: "elem",
                                elem: m
                            }]
                        }, t)]);
                    return ty(["mord", "sqrt"], [f, h], t)
                },
                mathmlBuilder(e, t) {
                    var {
                        body: n,
                        index: r
                    } = e;
                    return r ? new t3("mroot", [ni(n, t), ni(r, t)]) : new t3("msqrt", [ni(n, t)])
                }
            });
            var rB = {
                display: er.DISPLAY,
                text: er.TEXT,
                script: er.SCRIPT,
                scriptscript: er.SCRIPTSCRIPT
            };
            tU({
                type: "styling",
                names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
                props: {
                    numArgs: 0,
                    allowedInText: !0,
                    primitive: !0
                },
                handler(e, t) {
                    var {
                        breakOnTokenText: n,
                        funcName: r,
                        parser: i
                    } = e, a = i.parseExpression(!0, n), o = r.slice(1, r.length - 5);
                    return {
                        type: "styling",
                        mode: i.mode,
                        style: o,
                        body: a
                    }
                },
                htmlBuilder(e, t) {
                    var n = rB[e.style],
                        r = t.havingStyle(n).withFont("");
                    return rR(e.body, r, t)
                },
                mathmlBuilder(e, t) {
                    var n = rB[e.style],
                        r = t.havingStyle(n),
                        i = new t3("mstyle", nn(e.body, r)),
                        a = {
                            display: ["0", "true"],
                            text: ["0", "false"],
                            script: ["1", "false"],
                            scriptscript: ["2", "false"]
                        } [e.style];
                    return i.setAttribute("scriptlevel", a[0]), i.setAttribute("displaystyle", a[1]), i
                }
            });
            var rO = function(e, t) {
                var n = e.base;
                if (!n) return null;
                if ("op" === n.type) return n.limits && (t.style.size === er.DISPLAY.size || n.alwaysHandleSupSub) ? rA : null;
                if ("operatorname" === n.type) return n.alwaysHandleSupSub && (t.style.size === er.DISPLAY.size || n.limits) ? rE : null;
                if ("accent" === n.type) return X(n.base) ? ny : null;
                if ("horizBrace" === n.type) return !e.sub === n.isOver ? rv : null;
                else return null
            };
            tV({
                type: "supsub",
                htmlBuilder(e, t) {
                    var n, r, i, a, o = rO(e, t);
                    if (o) return o(e, t);
                    var {
                        base: l,
                        sup: s,
                        sub: u
                    } = e, c = t1(l, t), h = t.fontMetrics(), p = 0, m = 0, f = l && X(l);
                    if (s) {
                        var d = t.havingStyle(t.style.sup());
                        n = t1(s, d, t), f || (p = c.height - d.fontMetrics().supDrop * d.sizeMultiplier / t.sizeMultiplier)
                    }
                    if (u) {
                        var g = t.havingStyle(t.style.sub());
                        r = t1(u, g, t), f || (m = c.depth + g.fontMetrics().subDrop * g.sizeMultiplier / t.sizeMultiplier)
                    }
                    i = t.style === er.DISPLAY ? h.sup1 : t.style.cramped ? h.sup3 : h.sup2;
                    var y = t.sizeMultiplier,
                        x = eA(.5 / h.ptPerEm / y),
                        b = null;
                    if (r) {
                        var v = e.base && "op" === e.base.type && e.base.name && ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
                        (c instanceof eL || v) && (b = eA(-c.italic))
                    }
                    if (n && r) {
                        p = Math.max(p, i, n.depth + .25 * h.xHeight), m = Math.max(m, h.sub2);
                        var k = 4 * h.defaultRuleThickness;
                        if (p - n.depth - (r.height - m) < k) {
                            m = k - (p - n.depth) + r.height;
                            var w = .8 * h.xHeight - (p - n.depth);
                            w > 0 && (p += w, m -= w)
                        }
                        a = tC({
                            positionType: "individualShift",
                            children: [{
                                type: "elem",
                                elem: r,
                                shift: m,
                                marginRight: x,
                                marginLeft: b
                            }, {
                                type: "elem",
                                elem: n,
                                shift: -p,
                                marginRight: x
                            }]
                        }, t)
                    } else if (r) a = tC({
                        positionType: "shift",
                        positionData: m = Math.max(m, h.sub1, r.height - .8 * h.xHeight),
                        children: [{
                            type: "elem",
                            elem: r,
                            marginLeft: b,
                            marginRight: x
                        }]
                    }, t);
                    else if (n) a = tC({
                        positionType: "shift",
                        positionData: -(p = Math.max(p, i, n.depth + .25 * h.xHeight)),
                        children: [{
                            type: "elem",
                            elem: n,
                            marginRight: x
                        }]
                    }, t);
                    else throw Error("supsub must have either sup or sub.");
                    return ty([tJ(c, "right") || "mord"], [c, ty(["msupsub"], [a])], t)
                },
                mathmlBuilder(e, t) {
                    var n, r, i = !1;
                    e.base && "horizBrace" === e.base.type && !!e.sup === e.base.isOver && (i = !0, n = e.base.isOver), e.base && ("op" === e.base.type || "operatorname" === e.base.type) && (e.base.parentIsSupSub = !0);
                    var a = [ni(e.base, t)];
                    if (e.sub && a.push(ni(e.sub, t)), e.sup && a.push(ni(e.sup, t)), i) r = n ? "mover" : "munder";
                    else if (e.sub)
                        if (e.sup) {
                            var o = e.base;
                            r = o && "op" === o.type && o.limits && t.style === er.DISPLAY || o && "operatorname" === o.type && o.alwaysHandleSupSub && (t.style === er.DISPLAY || o.limits) ? "munderover" : "msubsup"
                        } else {
                            var l = e.base;
                            r = l && "op" === l.type && l.limits && (t.style === er.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || t.style === er.DISPLAY) ? "munder" : "msub"
                        }
                    else {
                        var s = e.base;
                        r = s && "op" === s.type && s.limits && (t.style === er.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || t.style === er.DISPLAY) ? "mover" : "msup"
                    }
                    return new t3(r, a)
                }
            }), tV({
                type: "atom",
                htmlBuilder: (e, t) => tS(e.text, e.mode, t, ["m" + e.family]),
                mathmlBuilder(e, t) {
                    var n = new t3("mo", [t8(e.text, e.mode)]);
                    if ("bin" === e.family) {
                        var r = ne(e, t);
                        "bold-italic" === r && n.setAttribute("mathvariant", r)
                    } else "punct" === e.family ? n.setAttribute("separator", "true") : ("open" === e.family || "close" === e.family) && n.setAttribute("stretchy", "false");
                    return n
                }
            });
            var rP = {
                mi: "italic",
                mn: "normal",
                mtext: "normal"
            };
            tV({
                type: "mathord",
                htmlBuilder: (e, t) => tE(e, t, "mathord"),
                mathmlBuilder(e, t) {
                    var n = new t3("mi", [t8(e.text, e.mode, t)]),
                        r = ne(e, t) || "italic";
                    return r !== rP[n.type] && n.setAttribute("mathvariant", r), n
                }
            }), tV({
                type: "textord",
                htmlBuilder: (e, t) => tE(e, t, "textord"),
                mathmlBuilder(e, t) {
                    var n, r = t8(e.text, e.mode, t),
                        i = ne(e, t) || "normal";
                    return i !== rP[(n = "text" === e.mode ? new t3("mtext", [r]) : /[0-9]/.test(e.text) ? new t3("mn", [r]) : "\\prime" === e.text ? new t3("mo", [r]) : new t3("mi", [r])).type] && n.setAttribute("mathvariant", i), n
                }
            });
            var rL = {
                    "\\nobreak": "nobreak",
                    "\\allowbreak": "allowbreak"
                },
                rD = {
                    " ": {},
                    "\\ ": {},
                    "~": {
                        className: "nobreak"
                    },
                    "\\space": {},
                    "\\nobreakspace": {
                        className: "nobreak"
                    }
                };
            tV({
                type: "spacing",
                htmlBuilder(e, t) {
                    if (rD.hasOwnProperty(e.text)) {
                        var n = rD[e.text].className || "";
                        if ("text" !== e.mode) return ty(["mspace", n], [tS(e.text, e.mode, t)], t);
                        var r = tE(e, t, "textord");
                        return r.classes.push(n), r
                    }
                    if (rL.hasOwnProperty(e.text)) return ty(["mspace", rL[e.text]], [], t);
                    throw new D('Unknown type of space "' + e.text + '"')
                },
                mathmlBuilder(e, t) {
                    var n;
                    if (rD.hasOwnProperty(e.text)) n = new t3("mtext", [new t7("\xa0")]);
                    else if (rL.hasOwnProperty(e.text)) return new t3("mspace");
                    else throw new D('Unknown type of space "' + e.text + '"');
                    return n
                }
            });
            var rN = () => {
                var e = new t3("mtd", []);
                return e.setAttribute("width", "50%"), e
            };
            tV({
                type: "tag",
                mathmlBuilder(e, t) {
                    var n = new t3("mtable", [new t3("mtr", [rN(), new t3("mtd", [nr(e.body, t)]), rN(), new t3("mtd", [nr(e.tag, t)])])]);
                    return n.setAttribute("width", "100%"), n
                }
            });
            var rq = {
                    "\\text": void 0,
                    "\\textrm": "textrm",
                    "\\textsf": "textsf",
                    "\\texttt": "texttt",
                    "\\textnormal": "textrm"
                },
                rH = {
                    "\\textbf": "textbf",
                    "\\textmd": "textmd"
                },
                rF = {
                    "\\textit": "textit",
                    "\\textup": "textup"
                },
                rU = (e, t) => {
                    var n = e.font;
                    return n ? rq[n] ? t.withTextFontFamily(rq[n]) : rH[n] ? t.withTextFontWeight(rH[n]) : "\\emph" === n ? "textit" === t.fontShape ? t.withTextFontShape("textup") : t.withTextFontShape("textit") : t.withTextFontShape(rF[n]) : t
                };
            tU({
                type: "text",
                names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"],
                props: {
                    numArgs: 1,
                    argTypes: ["text"],
                    allowedInArgument: !0,
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n,
                        funcName: r
                    } = e, i = t[0];
                    return {
                        type: "text",
                        mode: n.mode,
                        body: tj(i),
                        font: r
                    }
                },
                htmlBuilder(e, t) {
                    var n = rU(e, t);
                    return ty(["mord", "text"], tY(e.body, n, !0), n)
                },
                mathmlBuilder(e, t) {
                    var n = rU(e, t);
                    return nr(e.body, n)
                }
            }), tU({
                type: "underline",
                names: ["\\underline"],
                props: {
                    numArgs: 1,
                    allowedInText: !0
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "underline",
                        mode: n.mode,
                        body: t[0]
                    }
                },
                htmlBuilder(e, t) {
                    var n = t1(e.body, t),
                        r = tA("underline-line", t),
                        i = t.fontMetrics().defaultRuleThickness;
                    return ty(["mord", "underline"], [tC({
                        positionType: "top",
                        positionData: n.height,
                        children: [{
                            type: "kern",
                            size: i
                        }, {
                            type: "elem",
                            elem: r
                        }, {
                            type: "kern",
                            size: 3 * i
                        }, {
                            type: "elem",
                            elem: n
                        }]
                    }, t)], t)
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mo", [new t7("‾")]);
                    n.setAttribute("stretchy", "true");
                    var r = new t3("munder", [ni(e.body, t), n]);
                    return r.setAttribute("accentunder", "true"), r
                }
            }), tU({
                type: "vcenter",
                names: ["\\vcenter"],
                props: {
                    numArgs: 1,
                    argTypes: ["original"],
                    allowedInText: !1
                },
                handler(e, t) {
                    var {
                        parser: n
                    } = e;
                    return {
                        type: "vcenter",
                        mode: n.mode,
                        body: t[0]
                    }
                },
                htmlBuilder(e, t) {
                    var n = t1(e.body, t),
                        r = t.fontMetrics().axisHeight;
                    return tC({
                        positionType: "shift",
                        positionData: .5 * (n.height - r - (n.depth + r)),
                        children: [{
                            type: "elem",
                            elem: n
                        }]
                    }, t)
                },
                mathmlBuilder: (e, t) => new t3("mpadded", [ni(e.body, t)], ["vcenter"])
            }), tU({
                type: "verb",
                names: ["\\verb"],
                props: {
                    numArgs: 0,
                    allowedInText: !0
                },
                handler(e, t, n) {
                    throw new D("\\verb ended by end of line instead of matching delimiter")
                },
                htmlBuilder(e, t) {
                    for (var n = rV(e), r = [], i = t.havingStyle(t.style.text()), a = 0; a < n.length; a++) {
                        var o = n[a];
                        "~" === o && (o = "\\textasciitilde"), r.push(tf(o, "Typewriter-Regular", e.mode, i, ["mord", "texttt"]))
                    }
                    return ty(["mord", "text"].concat(i.sizingClasses(t)), tB(r), i)
                },
                mathmlBuilder(e, t) {
                    var n = new t3("mtext", [new t7(rV(e))]);
                    return n.setAttribute("mathvariant", "monospace"), n
                }
            });
            var rV = e => e.body.replace(/ /g, e.star ? "␣" : "\xa0"),
                r_ = "[ \r\n	]",
                rj = "[̀-ͯ]",
                rX = RegExp(rj + "+$"),
                rK = "(" + r_ + "+)|\\\\(\n|[ \r	]+\n?)[ \r	]*|([!-\\[\\]-‧‪-퟿豈-￿]" + rj + "*|[\uD800-\uDBFF][\uDC00-\uDFFF]" + rj + "*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|(\\\\[a-zA-Z@]+)" + r_ + "*|\\\\[^\uD800-\uDFFF])";
            class rW {
                setCatcode(e, t) {
                    this.catcodes[e] = t
                }
                lex() {
                    var e = this.input,
                        t = this.tokenRegex.lastIndex;
                    if (t === e.length) return new L("EOF", new P(this, t, t));
                    var n = this.tokenRegex.exec(e);
                    if (null === n || n.index !== t) throw new D("Unexpected character: '" + e[t] + "'", new L(e[t], new P(this, t, t + 1)));
                    var r = n[6] || n[3] || (n[2] ? "\\ " : " ");
                    if (14 === this.catcodes[r]) {
                        var i = e.indexOf("\n", this.tokenRegex.lastIndex);
                        return -1 === i ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex()
                    }
                    return new L(r, new P(this, t, this.tokenRegex.lastIndex))
                }
                constructor(e, t) {
                    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = RegExp(rK, "g"), this.catcodes = {
                        "%": 14,
                        "~": 13
                    }
                }
            }
            class rG {
                beginGroup() {
                    this.undefStack.push({})
                }
                endGroup() {
                    if (0 === this.undefStack.length) throw new D("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                    var e = this.undefStack.pop();
                    for (var t in e) e.hasOwnProperty(t) && (null == e[t] ? delete this.current[t] : this.current[t] = e[t])
                }
                endGroups() {
                    for (; this.undefStack.length > 0;) this.endGroup()
                }
                has(e) {
                    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e)
                }
                get(e) {
                    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e]
                }
                set(e, t, n) {
                    if (void 0 === n && (n = !1), n) {
                        for (var r = 0; r < this.undefStack.length; r++) delete this.undefStack[r][e];
                        this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t)
                    } else {
                        var i = this.undefStack[this.undefStack.length - 1];
                        i && !i.hasOwnProperty(e) && (i[e] = this.current[e])
                    }
                    null == t ? delete this.current[e] : this.current[e] = t
                }
                constructor(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = []
                }
            }
            rn["\\noexpand"] = function(e) {
                var t = e.popToken();
                return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
                    tokens: [t],
                    numArgs: 0
                }
            }, rn["\\expandafter"] = function(e) {
                var t = e.popToken();
                return e.expandOnce(!0), {
                    tokens: [t],
                    numArgs: 0
                }
            }, rn["\\@firstoftwo"] = function(e) {
                return {
                    tokens: e.consumeArgs(2)[0],
                    numArgs: 0
                }
            }, rn["\\@secondoftwo"] = function(e) {
                return {
                    tokens: e.consumeArgs(2)[1],
                    numArgs: 0
                }
            }, rn["\\@ifnextchar"] = function(e) {
                var t = e.consumeArgs(3);
                e.consumeSpaces();
                var n = e.future();
                return 1 === t[0].length && t[0][0].text === n.text ? {
                    tokens: t[1],
                    numArgs: 0
                } : {
                    tokens: t[2],
                    numArgs: 0
                }
            }, rn["\\@ifstar"] = "\\@ifnextchar *{\\@firstoftwo{#1}}", rn["\\TextOrMath"] = function(e) {
                var t = e.consumeArgs(2);
                return "text" === e.mode ? {
                    tokens: t[0],
                    numArgs: 0
                } : {
                    tokens: t[1],
                    numArgs: 0
                }
            };
            var rY = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                a: 10,
                A: 10,
                b: 11,
                B: 11,
                c: 12,
                C: 12,
                d: 13,
                D: 13,
                e: 14,
                E: 14,
                f: 15,
                F: 15
            };
            rn["\\char"] = function(e) {
                var t, n, r = e.popToken(),
                    i = "";
                if ("'" === r.text) t = 8, r = e.popToken();
                else if ('"' === r.text) t = 16, r = e.popToken();
                else if ("`" === r.text)
                    if ("\\" === (r = e.popToken()).text[0]) i = r.text.charCodeAt(1);
                    else if ("EOF" === r.text) throw new D("\\char` missing argument");
                else i = r.text.charCodeAt(0);
                else t = 10;
                if (t) {
                    if (null == (i = rY[r.text]) || i >= t) throw new D("Invalid base-" + t + " digit " + r.text);
                    for (; null != (n = rY[e.future().text]) && n < t;) i *= t, i += n, e.popToken()
                }
                return "\\@char{" + i + "}"
            };
            var r$ = (e, t, n, r) => {
                var i = e.consumeArg().tokens;
                if (1 !== i.length) throw new D("\\newcommand's first argument must be a macro name");
                var a = i[0].text,
                    o = e.isDefined(a);
                if (o && !t) throw new D("\\newcommand{" + a + "} attempting to redefine " + a + "; use \\renewcommand");
                if (!o && !n) throw new D("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
                var l = 0;
                if (1 === (i = e.consumeArg().tokens).length && "[" === i[0].text) {
                    for (var s = "", u = e.expandNextToken();
                        "]" !== u.text && "EOF" !== u.text;) s += u.text, u = e.expandNextToken();
                    if (!s.match(/^\s*[0-9]+\s*$/)) throw new D("Invalid number of arguments: " + s);
                    l = parseInt(s), i = e.consumeArg().tokens
                }
                return o && r || e.macros.set(a, {
                    tokens: i,
                    numArgs: l
                }), ""
            };
            rn["\\newcommand"] = e => r$(e, !1, !0, !1), rn["\\renewcommand"] = e => r$(e, !0, !1, !1), rn["\\providecommand"] = e => r$(e, !0, !0, !0), rn["\\message"] = e => (console.log(e.consumeArgs(1)[0].reverse().map(e => e.text).join("")), ""), rn["\\errmessage"] = e => (console.error(e.consumeArgs(1)[0].reverse().map(e => e.text).join("")), ""), rn["\\show"] = e => {
                var t = e.popToken(),
                    n = t.text;
                return console.log(t, e.macros.get(n), tq[n], eV.math[n], eV.text[n]), ""
            }, rn["\\bgroup"] = "{", rn["\\egroup"] = "}", rn["~"] = "\\nobreakspace", rn["\\lq"] = "`", rn["\\rq"] = "'", rn["\\aa"] = "\\r a", rn["\\AA"] = "\\r A", rn["\\textcopyright"] = "\\html@mathml{\\textcircled{c}}{\\char`\xa9}", rn["\\copyright"] = "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}", rn["\\textregistered"] = "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xae}", rn["ℬ"] = "\\mathscr{B}", rn["ℰ"] = "\\mathscr{E}", rn["ℱ"] = "\\mathscr{F}", rn["ℋ"] = "\\mathscr{H}", rn["ℐ"] = "\\mathscr{I}", rn["ℒ"] = "\\mathscr{L}", rn["ℳ"] = "\\mathscr{M}", rn["ℛ"] = "\\mathscr{R}", rn["ℭ"] = "\\mathfrak{C}", rn["ℌ"] = "\\mathfrak{H}", rn["ℨ"] = "\\mathfrak{Z}", rn["\\Bbbk"] = "\\Bbb{k}", rn["\xb7"] = "\\cdotp", rn["\\llap"] = "\\mathllap{\\textrm{#1}}", rn["\\rlap"] = "\\mathrlap{\\textrm{#1}}", rn["\\clap"] = "\\mathclap{\\textrm{#1}}", rn["\\mathstrut"] = "\\vphantom{(}", rn["\\underbar"] = "\\underline{\\text{#1}}", rn["\\not"] = '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}', rn["\\neq"] = "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}", rn["\\ne"] = "\\neq", rn["≠"] = "\\neq", rn["\\notin"] = "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}", rn["∉"] = "\\notin", rn["≘"] = "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}", rn["≙"] = "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}", rn["≚"] = "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}", rn["≛"] = "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}", rn["≝"] = "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}", rn["≞"] = "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}", rn["≟"] = "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}", rn["⟂"] = "\\perp", rn["‼"] = "\\mathclose{!\\mkern-0.8mu!}", rn["∌"] = "\\notni", rn["⌜"] = "\\ulcorner", rn["⌝"] = "\\urcorner", rn["⌞"] = "\\llcorner", rn["⌟"] = "\\lrcorner", rn["\xa9"] = "\\copyright", rn["\xae"] = "\\textregistered", rn["️"] = "\\textregistered", rn["\\ulcorner"] = '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}', rn["\\urcorner"] = '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}', rn["\\llcorner"] = '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}', rn["\\lrcorner"] = '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}', rn["\\vdots"] = "{\\varvdots\\rule{0pt}{15pt}}", rn["⋮"] = "\\vdots", rn["\\varGamma"] = "\\mathit{\\Gamma}", rn["\\varDelta"] = "\\mathit{\\Delta}", rn["\\varTheta"] = "\\mathit{\\Theta}", rn["\\varLambda"] = "\\mathit{\\Lambda}", rn["\\varXi"] = "\\mathit{\\Xi}", rn["\\varPi"] = "\\mathit{\\Pi}", rn["\\varSigma"] = "\\mathit{\\Sigma}", rn["\\varUpsilon"] = "\\mathit{\\Upsilon}", rn["\\varPhi"] = "\\mathit{\\Phi}", rn["\\varPsi"] = "\\mathit{\\Psi}", rn["\\varOmega"] = "\\mathit{\\Omega}", rn["\\substack"] = "\\begin{subarray}{c}#1\\end{subarray}", rn["\\colon"] = "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax", rn["\\boxed"] = "\\fbox{$\\displaystyle{#1}$}", rn["\\iff"] = "\\DOTSB\\;\\Longleftrightarrow\\;", rn["\\implies"] = "\\DOTSB\\;\\Longrightarrow\\;", rn["\\impliedby"] = "\\DOTSB\\;\\Longleftarrow\\;", rn["\\dddot"] = "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}", rn["\\ddddot"] = "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}";
            var rZ = {
                ",": "\\dotsc",
                "\\not": "\\dotsb",
                "+": "\\dotsb",
                "=": "\\dotsb",
                "<": "\\dotsb",
                ">": "\\dotsb",
                "-": "\\dotsb",
                "*": "\\dotsb",
                ":": "\\dotsb",
                "\\DOTSB": "\\dotsb",
                "\\coprod": "\\dotsb",
                "\\bigvee": "\\dotsb",
                "\\bigwedge": "\\dotsb",
                "\\biguplus": "\\dotsb",
                "\\bigcap": "\\dotsb",
                "\\bigcup": "\\dotsb",
                "\\prod": "\\dotsb",
                "\\sum": "\\dotsb",
                "\\bigotimes": "\\dotsb",
                "\\bigoplus": "\\dotsb",
                "\\bigodot": "\\dotsb",
                "\\bigsqcup": "\\dotsb",
                "\\And": "\\dotsb",
                "\\longrightarrow": "\\dotsb",
                "\\Longrightarrow": "\\dotsb",
                "\\longleftarrow": "\\dotsb",
                "\\Longleftarrow": "\\dotsb",
                "\\longleftrightarrow": "\\dotsb",
                "\\Longleftrightarrow": "\\dotsb",
                "\\mapsto": "\\dotsb",
                "\\longmapsto": "\\dotsb",
                "\\hookrightarrow": "\\dotsb",
                "\\doteq": "\\dotsb",
                "\\mathbin": "\\dotsb",
                "\\mathrel": "\\dotsb",
                "\\relbar": "\\dotsb",
                "\\Relbar": "\\dotsb",
                "\\xrightarrow": "\\dotsb",
                "\\xleftarrow": "\\dotsb",
                "\\DOTSI": "\\dotsi",
                "\\int": "\\dotsi",
                "\\oint": "\\dotsi",
                "\\iint": "\\dotsi",
                "\\iiint": "\\dotsi",
                "\\iiiint": "\\dotsi",
                "\\idotsint": "\\dotsi",
                "\\DOTSX": "\\dotsx"
            };
            rn["\\dots"] = function(e) {
                var t = "\\dotso",
                    n = e.expandAfterFuture().text;
                return n in rZ ? t = rZ[n] : "\\not" === n.slice(0, 4) ? t = "\\dotsb" : n in eV.math && ["bin", "rel"].includes(eV.math[n].group) && (t = "\\dotsb"), t
            };
            var rQ = {
                ")": !0,
                "]": !0,
                "\\rbrack": !0,
                "\\}": !0,
                "\\rbrace": !0,
                "\\rangle": !0,
                "\\rceil": !0,
                "\\rfloor": !0,
                "\\rgroup": !0,
                "\\rmoustache": !0,
                "\\right": !0,
                "\\bigr": !0,
                "\\biggr": !0,
                "\\Bigr": !0,
                "\\Biggr": !0,
                $: !0,
                ";": !0,
                ".": !0,
                ",": !0
            };
            rn["\\dotso"] = function(e) {
                return e.future().text in rQ ? "\\ldots\\," : "\\ldots"
            }, rn["\\dotsc"] = function(e) {
                var t = e.future().text;
                return t in rQ && "," !== t ? "\\ldots\\," : "\\ldots"
            }, rn["\\cdots"] = function(e) {
                return e.future().text in rQ ? "\\@cdots\\," : "\\@cdots"
            }, rn["\\dotsb"] = "\\cdots", rn["\\dotsm"] = "\\cdots", rn["\\dotsi"] = "\\!\\cdots", rn["\\dotsx"] = "\\ldots\\,", rn["\\DOTSI"] = "\\relax", rn["\\DOTSB"] = "\\relax", rn["\\DOTSX"] = "\\relax", rn["\\tmspace"] = "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax", rn["\\,"] = "\\tmspace+{3mu}{.1667em}", rn["\\thinspace"] = "\\,", rn["\\>"] = "\\mskip{4mu}", rn["\\:"] = "\\tmspace+{4mu}{.2222em}", rn["\\medspace"] = "\\:", rn["\\;"] = "\\tmspace+{5mu}{.2777em}", rn["\\thickspace"] = "\\;", rn["\\!"] = "\\tmspace-{3mu}{.1667em}", rn["\\negthinspace"] = "\\!", rn["\\negmedspace"] = "\\tmspace-{4mu}{.2222em}", rn["\\negthickspace"] = "\\tmspace-{5mu}{.277em}", rn["\\enspace"] = "\\kern.5em ", rn["\\enskip"] = "\\hskip.5em\\relax", rn["\\quad"] = "\\hskip1em\\relax", rn["\\qquad"] = "\\hskip2em\\relax", rn["\\tag"] = "\\@ifstar\\tag@literal\\tag@paren", rn["\\tag@paren"] = "\\tag@literal{({#1})}", rn["\\tag@literal"] = e => {
                if (e.macros.get("\\df@tag")) throw new D("Multiple \\tag");
                return "\\gdef\\df@tag{\\text{#1}}"
            }, rn["\\bmod"] = "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}", rn["\\pod"] = "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)", rn["\\pmod"] = "\\pod{{\\rm mod}\\mkern6mu#1}", rn["\\mod"] = "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1", rn["\\newline"] = "\\\\\\relax", rn["\\TeX"] = "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}";
            var rJ = eA(ep["Main-Regular"][84][1] - .7 * ep["Main-Regular"][65][1]);
            rn["\\LaTeX"] = "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + rJ + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}", rn["\\KaTeX"] = "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + rJ + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}", rn["\\hspace"] = "\\@ifstar\\@hspacer\\@hspace", rn["\\@hspace"] = "\\hskip #1\\relax", rn["\\@hspacer"] = "\\rule{0pt}{0pt}\\hskip #1\\relax", rn["\\ordinarycolon"] = ":", rn["\\vcentcolon"] = "\\mathrel{\\mathop\\ordinarycolon}", rn["\\dblcolon"] = '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}', rn["\\coloneqq"] = '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}', rn["\\Coloneqq"] = '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}', rn["\\coloneq"] = '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}', rn["\\Coloneq"] = '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}', rn["\\eqqcolon"] = '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}', rn["\\Eqqcolon"] = '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}', rn["\\eqcolon"] = '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}', rn["\\Eqcolon"] = '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}', rn["\\colonapprox"] = '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}', rn["\\Colonapprox"] = '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}', rn["\\colonsim"] = '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}', rn["\\Colonsim"] = '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}', rn["∷"] = "\\dblcolon", rn["∹"] = "\\eqcolon", rn["≔"] = "\\coloneqq", rn["≕"] = "\\eqqcolon", rn["⩴"] = "\\Coloneqq", rn["\\ratio"] = "\\vcentcolon", rn["\\coloncolon"] = "\\dblcolon", rn["\\colonequals"] = "\\coloneqq", rn["\\coloncolonequals"] = "\\Coloneqq", rn["\\equalscolon"] = "\\eqqcolon", rn["\\equalscoloncolon"] = "\\Eqqcolon", rn["\\colonminus"] = "\\coloneq", rn["\\coloncolonminus"] = "\\Coloneq", rn["\\minuscolon"] = "\\eqcolon", rn["\\minuscoloncolon"] = "\\Eqcolon", rn["\\coloncolonapprox"] = "\\Colonapprox", rn["\\coloncolonsim"] = "\\Colonsim", rn["\\simcolon"] = "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}", rn["\\simcoloncolon"] = "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}", rn["\\approxcolon"] = "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}", rn["\\approxcoloncolon"] = "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}", rn["\\notni"] = "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}", rn["\\limsup"] = "\\DOTSB\\operatorname*{lim\\,sup}", rn["\\liminf"] = "\\DOTSB\\operatorname*{lim\\,inf}", rn["\\injlim"] = "\\DOTSB\\operatorname*{inj\\,lim}", rn["\\projlim"] = "\\DOTSB\\operatorname*{proj\\,lim}", rn["\\varlimsup"] = "\\DOTSB\\operatorname*{\\overline{lim}}", rn["\\varliminf"] = "\\DOTSB\\operatorname*{\\underline{lim}}", rn["\\varinjlim"] = "\\DOTSB\\operatorname*{\\underrightarrow{lim}}", rn["\\varprojlim"] = "\\DOTSB\\operatorname*{\\underleftarrow{lim}}", rn["\\gvertneqq"] = "\\html@mathml{\\@gvertneqq}{≩}", rn["\\lvertneqq"] = "\\html@mathml{\\@lvertneqq}{≨}", rn["\\ngeqq"] = "\\html@mathml{\\@ngeqq}{≱}", rn["\\ngeqslant"] = "\\html@mathml{\\@ngeqslant}{≱}", rn["\\nleqq"] = "\\html@mathml{\\@nleqq}{≰}", rn["\\nleqslant"] = "\\html@mathml{\\@nleqslant}{≰}", rn["\\nshortmid"] = "\\html@mathml{\\@nshortmid}{∤}", rn["\\nshortparallel"] = "\\html@mathml{\\@nshortparallel}{∦}", rn["\\nsubseteqq"] = "\\html@mathml{\\@nsubseteqq}{⊈}", rn["\\nsupseteqq"] = "\\html@mathml{\\@nsupseteqq}{⊉}", rn["\\varsubsetneq"] = "\\html@mathml{\\@varsubsetneq}{⊊}", rn["\\varsubsetneqq"] = "\\html@mathml{\\@varsubsetneqq}{⫋}", rn["\\varsupsetneq"] = "\\html@mathml{\\@varsupsetneq}{⊋}", rn["\\varsupsetneqq"] = "\\html@mathml{\\@varsupsetneqq}{⫌}", rn["\\imath"] = "\\html@mathml{\\@imath}{ı}", rn["\\jmath"] = "\\html@mathml{\\@jmath}{ȷ}", rn["\\llbracket"] = "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}", rn["\\rrbracket"] = "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}", rn["⟦"] = "\\llbracket", rn["⟧"] = "\\rrbracket", rn["\\lBrace"] = "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}", rn["\\rBrace"] = "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}", rn["⦃"] = "\\lBrace", rn["⦄"] = "\\rBrace", rn["\\minuso"] = "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}", rn["⦵"] = "\\minuso", rn["\\darr"] = "\\downarrow", rn["\\dArr"] = "\\Downarrow", rn["\\Darr"] = "\\Downarrow", rn["\\lang"] = "\\langle", rn["\\rang"] = "\\rangle", rn["\\uarr"] = "\\uparrow", rn["\\uArr"] = "\\Uparrow", rn["\\Uarr"] = "\\Uparrow", rn["\\N"] = "\\mathbb{N}", rn["\\R"] = "\\mathbb{R}", rn["\\Z"] = "\\mathbb{Z}", rn["\\alef"] = "\\aleph", rn["\\alefsym"] = "\\aleph", rn["\\Alpha"] = "\\mathrm{A}", rn["\\Beta"] = "\\mathrm{B}", rn["\\bull"] = "\\bullet", rn["\\Chi"] = "\\mathrm{X}", rn["\\clubs"] = "\\clubsuit", rn["\\cnums"] = "\\mathbb{C}", rn["\\Complex"] = "\\mathbb{C}", rn["\\Dagger"] = "\\ddagger", rn["\\diamonds"] = "\\diamondsuit", rn["\\empty"] = "\\emptyset", rn["\\Epsilon"] = "\\mathrm{E}", rn["\\Eta"] = "\\mathrm{H}", rn["\\exist"] = "\\exists", rn["\\harr"] = "\\leftrightarrow", rn["\\hArr"] = "\\Leftrightarrow", rn["\\Harr"] = "\\Leftrightarrow", rn["\\hearts"] = "\\heartsuit", rn["\\image"] = "\\Im", rn["\\infin"] = "\\infty", rn["\\Iota"] = "\\mathrm{I}", rn["\\isin"] = "\\in", rn["\\Kappa"] = "\\mathrm{K}", rn["\\larr"] = "\\leftarrow", rn["\\lArr"] = "\\Leftarrow", rn["\\Larr"] = "\\Leftarrow", rn["\\lrarr"] = "\\leftrightarrow", rn["\\lrArr"] = "\\Leftrightarrow", rn["\\Lrarr"] = "\\Leftrightarrow", rn["\\Mu"] = "\\mathrm{M}", rn["\\natnums"] = "\\mathbb{N}", rn["\\Nu"] = "\\mathrm{N}", rn["\\Omicron"] = "\\mathrm{O}", rn["\\plusmn"] = "\\pm", rn["\\rarr"] = "\\rightarrow", rn["\\rArr"] = "\\Rightarrow", rn["\\Rarr"] = "\\Rightarrow", rn["\\real"] = "\\Re", rn["\\reals"] = "\\mathbb{R}", rn["\\Reals"] = "\\mathbb{R}", rn["\\Rho"] = "\\mathrm{P}", rn["\\sdot"] = "\\cdot", rn["\\sect"] = "\\S", rn["\\spades"] = "\\spadesuit", rn["\\sub"] = "\\subset", rn["\\sube"] = "\\subseteq", rn["\\supe"] = "\\supseteq", rn["\\Tau"] = "\\mathrm{T}", rn["\\thetasym"] = "\\vartheta", rn["\\weierp"] = "\\wp", rn["\\Zeta"] = "\\mathrm{Z}", rn["\\argmin"] = "\\DOTSB\\operatorname*{arg\\,min}", rn["\\argmax"] = "\\DOTSB\\operatorname*{arg\\,max}", rn["\\plim"] = "\\DOTSB\\mathop{\\operatorname{plim}}\\limits", rn["\\bra"] = "\\mathinner{\\langle{#1}|}", rn["\\ket"] = "\\mathinner{|{#1}\\rangle}", rn["\\braket"] = "\\mathinner{\\langle{#1}\\rangle}", rn["\\Bra"] = "\\left\\langle#1\\right|", rn["\\Ket"] = "\\left|#1\\right\\rangle";
            var r0 = e => t => {
                var n = t.consumeArg().tokens,
                    r = t.consumeArg().tokens,
                    i = t.consumeArg().tokens,
                    a = t.consumeArg().tokens,
                    o = t.macros.get("|"),
                    l = t.macros.get("\\|");
                t.macros.beginGroup();
                var s = t => n => {
                    e && (n.macros.set("|", o), i.length && n.macros.set("\\|", l));
                    var a = t;
                    return !t && i.length && "|" === n.future().text && (n.popToken(), a = !0), {
                        tokens: a ? i : r,
                        numArgs: 0
                    }
                };
                t.macros.set("|", s(!1)), i.length && t.macros.set("\\|", s(!0));
                var u = t.consumeArg().tokens,
                    c = t.expandTokens([...a, ...u, ...n]);
                return t.macros.endGroup(), {
                    tokens: c.reverse(),
                    numArgs: 0
                }
            };
            r = r0(!1), rn["\\bra@ket"] = r, i = r0(!0), rn["\\bra@set"] = i, rn["\\Braket"] = "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}", rn["\\Set"] = "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}", rn["\\set"] = "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}", rn["\\angln"] = "{\\angl n}", rn["\\blue"] = "\\textcolor{##6495ed}{#1}", rn["\\orange"] = "\\textcolor{##ffa500}{#1}", rn["\\pink"] = "\\textcolor{##ff00af}{#1}", rn["\\red"] = "\\textcolor{##df0030}{#1}", rn["\\green"] = "\\textcolor{##28ae7b}{#1}", rn["\\gray"] = "\\textcolor{gray}{#1}", rn["\\purple"] = "\\textcolor{##9d38bd}{#1}", rn["\\blueA"] = "\\textcolor{##ccfaff}{#1}", rn["\\blueB"] = "\\textcolor{##80f6ff}{#1}", rn["\\blueC"] = "\\textcolor{##63d9ea}{#1}", rn["\\blueD"] = "\\textcolor{##11accd}{#1}", rn["\\blueE"] = "\\textcolor{##0c7f99}{#1}", rn["\\tealA"] = "\\textcolor{##94fff5}{#1}", rn["\\tealB"] = "\\textcolor{##26edd5}{#1}", rn["\\tealC"] = "\\textcolor{##01d1c1}{#1}", rn["\\tealD"] = "\\textcolor{##01a995}{#1}", rn["\\tealE"] = "\\textcolor{##208170}{#1}", rn["\\greenA"] = "\\textcolor{##b6ffb0}{#1}", rn["\\greenB"] = "\\textcolor{##8af281}{#1}", rn["\\greenC"] = "\\textcolor{##74cf70}{#1}", rn["\\greenD"] = "\\textcolor{##1fab54}{#1}", rn["\\greenE"] = "\\textcolor{##0d923f}{#1}", rn["\\goldA"] = "\\textcolor{##ffd0a9}{#1}", rn["\\goldB"] = "\\textcolor{##ffbb71}{#1}", rn["\\goldC"] = "\\textcolor{##ff9c39}{#1}", rn["\\goldD"] = "\\textcolor{##e07d10}{#1}", rn["\\goldE"] = "\\textcolor{##a75a05}{#1}", rn["\\redA"] = "\\textcolor{##fca9a9}{#1}", rn["\\redB"] = "\\textcolor{##ff8482}{#1}", rn["\\redC"] = "\\textcolor{##f9685d}{#1}", rn["\\redD"] = "\\textcolor{##e84d39}{#1}", rn["\\redE"] = "\\textcolor{##bc2612}{#1}", rn["\\maroonA"] = "\\textcolor{##ffbde0}{#1}", rn["\\maroonB"] = "\\textcolor{##ff92c6}{#1}", rn["\\maroonC"] = "\\textcolor{##ed5fa6}{#1}", rn["\\maroonD"] = "\\textcolor{##ca337c}{#1}", rn["\\maroonE"] = "\\textcolor{##9e034e}{#1}", rn["\\purpleA"] = "\\textcolor{##ddd7ff}{#1}", rn["\\purpleB"] = "\\textcolor{##c6b9fc}{#1}", rn["\\purpleC"] = "\\textcolor{##aa87ff}{#1}", rn["\\purpleD"] = "\\textcolor{##7854ab}{#1}", rn["\\purpleE"] = "\\textcolor{##543b78}{#1}", rn["\\mintA"] = "\\textcolor{##f5f9e8}{#1}", rn["\\mintB"] = "\\textcolor{##edf2df}{#1}", rn["\\mintC"] = "\\textcolor{##e0e5cc}{#1}", rn["\\grayA"] = "\\textcolor{##f6f7f7}{#1}", rn["\\grayB"] = "\\textcolor{##f0f1f2}{#1}", rn["\\grayC"] = "\\textcolor{##e3e5e6}{#1}", rn["\\grayD"] = "\\textcolor{##d6d8da}{#1}", rn["\\grayE"] = "\\textcolor{##babec2}{#1}", rn["\\grayF"] = "\\textcolor{##888d93}{#1}", rn["\\grayG"] = "\\textcolor{##626569}{#1}", rn["\\grayH"] = "\\textcolor{##3b3e40}{#1}", rn["\\grayI"] = "\\textcolor{##21242c}{#1}", rn["\\kaBlue"] = "\\textcolor{##314453}{#1}", rn["\\kaGreen"] = "\\textcolor{##71B307}{#1}";
            var r1 = {
                "^": !0,
                _: !0,
                "\\limits": !0,
                "\\nolimits": !0
            };
            class r4 {
                feed(e) {
                    this.lexer = new rW(e, this.settings)
                }
                switchMode(e) {
                    this.mode = e
                }
                beginGroup() {
                    this.macros.beginGroup()
                }
                endGroup() {
                    this.macros.endGroup()
                }
                endGroups() {
                    this.macros.endGroups()
                }
                future() {
                    return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
                }
                popToken() {
                    return this.future(), this.stack.pop()
                }
                pushToken(e) {
                    this.stack.push(e)
                }
                pushTokens(e) {
                    this.stack.push(...e)
                }
                scanArgument(e) {
                    var t, n, r;
                    if (e) {
                        if (this.consumeSpaces(), "[" !== this.future().text) return null;
                        t = this.popToken(), {
                            tokens: r,
                            end: n
                        } = this.consumeArg(["]"])
                    } else({
                        tokens: r,
                        start: t,
                        end: n
                    } = this.consumeArg());
                    return this.pushToken(new L("EOF", n.loc)), this.pushTokens(r), new L("", P.range(t, n))
                }
                consumeSpaces() {
                    for (;;)
                        if (" " === this.future().text) this.stack.pop();
                        else break
                }
                consumeArg(e) {
                    var t, n = [],
                        r = e && e.length > 0;
                    r || this.consumeSpaces();
                    var i = this.future(),
                        a = 0,
                        o = 0;
                    do {
                        if (t = this.popToken(), n.push(t), "{" === t.text) ++a;
                        else if ("}" === t.text) {
                            if (-1 == --a) throw new D("Extra }", t)
                        } else if ("EOF" === t.text) throw new D("Unexpected end of input in a macro argument, expected '" + (e && r ? e[o] : "}") + "'", t);
                        if (e && r)
                            if ((0 === a || 1 === a && "{" === e[o]) && t.text === e[o]) {
                                if (++o === e.length) {
                                    n.splice(-o, o);
                                    break
                                }
                            } else o = 0
                    } while (0 !== a || r);
                    return "{" === i.text && "}" === n[n.length - 1].text && (n.pop(), n.shift()), n.reverse(), {
                        tokens: n,
                        start: i,
                        end: t
                    }
                }
                consumeArgs(e, t) {
                    if (t) {
                        if (t.length !== e + 1) throw new D("The length of delimiters doesn't match the number of args!");
                        for (var n = t[0], r = 0; r < n.length; r++) {
                            var i = this.popToken();
                            if (n[r] !== i.text) throw new D("Use of the macro doesn't match its definition", i)
                        }
                    }
                    for (var a = [], o = 0; o < e; o++) a.push(this.consumeArg(t && t[o + 1]).tokens);
                    return a
                }
                countExpansion(e) {
                    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new D("Too many expansions: infinite loop or need to increase maxExpand setting")
                }
                expandOnce(e) {
                    var t = this.popToken(),
                        n = t.text,
                        r = t.noexpand ? null : this._getExpansion(n);
                    if (null == r || e && r.unexpandable) {
                        if (e && null == r && "\\" === n[0] && !this.isDefined(n)) throw new D("Undefined control sequence: " + n);
                        return this.pushToken(t), !1
                    }
                    this.countExpansion(1);
                    var i = r.tokens,
                        a = this.consumeArgs(r.numArgs, r.delimiters);
                    if (r.numArgs) {
                        i = i.slice();
                        for (var o = i.length - 1; o >= 0; --o) {
                            var l = i[o];
                            if ("#" === l.text) {
                                if (0 === o) throw new D("Incomplete placeholder at end of macro body", l);
                                if ("#" === (l = i[--o]).text) i.splice(o + 1, 1);
                                else if (/^[1-9]$/.test(l.text)) i.splice(o, 2, ...a[l.text - 1]);
                                else throw new D("Not a valid argument number", l)
                            }
                        }
                    }
                    return this.pushTokens(i), i.length
                }
                expandAfterFuture() {
                    return this.expandOnce(), this.future()
                }
                expandNextToken() {
                    for (;;)
                        if (!1 === this.expandOnce()) {
                            var e = this.stack.pop();
                            return e.treatAsRelax && (e.text = "\\relax"), e
                        } throw Error()
                }
                expandMacro(e) {
                    return this.macros.has(e) ? this.expandTokens([new L(e)]) : void 0
                }
                expandTokens(e) {
                    var t = [],
                        n = this.stack.length;
                    for (this.pushTokens(e); this.stack.length > n;)
                        if (!1 === this.expandOnce(!0)) {
                            var r = this.stack.pop();
                            r.treatAsRelax && (r.noexpand = !1, r.treatAsRelax = !1), t.push(r)
                        } return this.countExpansion(t.length), t
                }
                expandMacroAsText(e) {
                    var t = this.expandMacro(e);
                    return t ? t.map(e => e.text).join("") : t
                }
                _getExpansion(e) {
                    var t = this.macros.get(e);
                    if (null == t) return t;
                    if (1 === e.length) {
                        var n = this.lexer.catcodes[e];
                        if (null != n && 13 !== n) return
                    }
                    var r = "function" == typeof t ? t(this) : t;
                    if ("string" == typeof r) {
                        var i = 0;
                        if (-1 !== r.indexOf("#"))
                            for (var a = r.replace(/##/g, ""); - 1 !== a.indexOf("#" + (i + 1));) ++i;
                        for (var o = new rW(r, this.settings), l = [], s = o.lex();
                            "EOF" !== s.text;) l.push(s), s = o.lex();
                        return l.reverse(), {
                            tokens: l,
                            numArgs: i
                        }
                    }
                    return r
                }
                isDefined(e) {
                    return this.macros.has(e) || tq.hasOwnProperty(e) || eV.math.hasOwnProperty(e) || eV.text.hasOwnProperty(e) || r1.hasOwnProperty(e)
                }
                isExpandable(e) {
                    var t = this.macros.get(e);
                    return null != t ? "string" == typeof t || "function" == typeof t || !t.unexpandable : tq.hasOwnProperty(e) && !tq[e].primitive
                }
                constructor(e, t, n) {
                    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new rG(rn, t.macros), this.mode = n, this.stack = []
                }
            }
            var r5 = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
                r6 = Object.freeze({
                    "₊": "+",
                    "₋": "-",
                    "₌": "=",
                    "₍": "(",
                    "₎": ")",
                    "₀": "0",
                    "₁": "1",
                    "₂": "2",
                    "₃": "3",
                    "₄": "4",
                    "₅": "5",
                    "₆": "6",
                    "₇": "7",
                    "₈": "8",
                    "₉": "9",
                    ₐ: "a",
                    ₑ: "e",
                    ₕ: "h",
                    ᵢ: "i",
                    ⱼ: "j",
                    ₖ: "k",
                    ₗ: "l",
                    ₘ: "m",
                    ₙ: "n",
                    ₒ: "o",
                    ₚ: "p",
                    ᵣ: "r",
                    ₛ: "s",
                    ₜ: "t",
                    ᵤ: "u",
                    ᵥ: "v",
                    ₓ: "x",
                    ᵦ: "β",
                    ᵧ: "γ",
                    ᵨ: "ρ",
                    ᵩ: "ϕ",
                    ᵪ: "χ",
                    "⁺": "+",
                    "⁻": "-",
                    "⁼": "=",
                    "⁽": "(",
                    "⁾": ")",
                    "⁰": "0",
                    "\xb9": "1",
                    "\xb2": "2",
                    "\xb3": "3",
                    "⁴": "4",
                    "⁵": "5",
                    "⁶": "6",
                    "⁷": "7",
                    "⁸": "8",
                    "⁹": "9",
                    ᴬ: "A",
                    ᴮ: "B",
                    ᴰ: "D",
                    ᴱ: "E",
                    ᴳ: "G",
                    ᴴ: "H",
                    ᴵ: "I",
                    ᴶ: "J",
                    ᴷ: "K",
                    ᴸ: "L",
                    ᴹ: "M",
                    ᴺ: "N",
                    ᴼ: "O",
                    ᴾ: "P",
                    ᴿ: "R",
                    ᵀ: "T",
                    ᵁ: "U",
                    ⱽ: "V",
                    ᵂ: "W",
                    ᵃ: "a",
                    ᵇ: "b",
                    ᶜ: "c",
                    ᵈ: "d",
                    ᵉ: "e",
                    ᶠ: "f",
                    ᵍ: "g",
                    ʰ: "h",
                    ⁱ: "i",
                    ʲ: "j",
                    ᵏ: "k",
                    ˡ: "l",
                    ᵐ: "m",
                    ⁿ: "n",
                    ᵒ: "o",
                    ᵖ: "p",
                    ʳ: "r",
                    ˢ: "s",
                    ᵗ: "t",
                    ᵘ: "u",
                    ᵛ: "v",
                    ʷ: "w",
                    ˣ: "x",
                    ʸ: "y",
                    ᶻ: "z",
                    ᵝ: "β",
                    ᵞ: "γ",
                    ᵟ: "δ",
                    ᵠ: "ϕ",
                    ᵡ: "χ",
                    ᶿ: "θ"
                }),
                r3 = {
                    "́": {
                        text: "\\'",
                        math: "\\acute"
                    },
                    "̀": {
                        text: "\\`",
                        math: "\\grave"
                    },
                    "̈": {
                        text: '\\"',
                        math: "\\ddot"
                    },
                    "̃": {
                        text: "\\~",
                        math: "\\tilde"
                    },
                    "̄": {
                        text: "\\=",
                        math: "\\bar"
                    },
                    "̆": {
                        text: "\\u",
                        math: "\\breve"
                    },
                    "̌": {
                        text: "\\v",
                        math: "\\check"
                    },
                    "̂": {
                        text: "\\^",
                        math: "\\hat"
                    },
                    "̇": {
                        text: "\\.",
                        math: "\\dot"
                    },
                    "̊": {
                        text: "\\r",
                        math: "\\mathring"
                    },
                    "̋": {
                        text: "\\H"
                    },
                    "̧": {
                        text: "\\c"
                    }
                },
                r7 = {
                    á: "á",
                    à: "à",
                    ä: "ä",
                    ǟ: "ǟ",
                    ã: "ã",
                    ā: "ā",
                    ă: "ă",
                    ắ: "ắ",
                    ằ: "ằ",
                    ẵ: "ẵ",
                    ǎ: "ǎ",
                    â: "â",
                    ấ: "ấ",
                    ầ: "ầ",
                    ẫ: "ẫ",
                    ȧ: "ȧ",
                    ǡ: "ǡ",
                    å: "å",
                    ǻ: "ǻ",
                    ḃ: "ḃ",
                    ć: "ć",
                    ḉ: "ḉ",
                    č: "č",
                    ĉ: "ĉ",
                    ċ: "ċ",
                    ç: "ç",
                    ď: "ď",
                    ḋ: "ḋ",
                    ḑ: "ḑ",
                    é: "é",
                    è: "è",
                    ë: "ë",
                    ẽ: "ẽ",
                    ē: "ē",
                    ḗ: "ḗ",
                    ḕ: "ḕ",
                    ĕ: "ĕ",
                    ḝ: "ḝ",
                    ě: "ě",
                    ê: "ê",
                    ế: "ế",
                    ề: "ề",
                    ễ: "ễ",
                    ė: "ė",
                    ȩ: "ȩ",
                    ḟ: "ḟ",
                    ǵ: "ǵ",
                    ḡ: "ḡ",
                    ğ: "ğ",
                    ǧ: "ǧ",
                    ĝ: "ĝ",
                    ġ: "ġ",
                    ģ: "ģ",
                    ḧ: "ḧ",
                    ȟ: "ȟ",
                    ĥ: "ĥ",
                    ḣ: "ḣ",
                    ḩ: "ḩ",
                    í: "í",
                    ì: "ì",
                    ï: "ï",
                    ḯ: "ḯ",
                    ĩ: "ĩ",
                    ī: "ī",
                    ĭ: "ĭ",
                    ǐ: "ǐ",
                    î: "î",
                    ǰ: "ǰ",
                    ĵ: "ĵ",
                    ḱ: "ḱ",
                    ǩ: "ǩ",
                    ķ: "ķ",
                    ĺ: "ĺ",
                    ľ: "ľ",
                    ļ: "ļ",
                    ḿ: "ḿ",
                    ṁ: "ṁ",
                    ń: "ń",
                    ǹ: "ǹ",
                    ñ: "ñ",
                    ň: "ň",
                    ṅ: "ṅ",
                    ņ: "ņ",
                    ó: "ó",
                    ò: "ò",
                    ö: "ö",
                    ȫ: "ȫ",
                    õ: "õ",
                    ṍ: "ṍ",
                    ṏ: "ṏ",
                    ȭ: "ȭ",
                    ō: "ō",
                    ṓ: "ṓ",
                    ṑ: "ṑ",
                    ŏ: "ŏ",
                    ǒ: "ǒ",
                    ô: "ô",
                    ố: "ố",
                    ồ: "ồ",
                    ỗ: "ỗ",
                    ȯ: "ȯ",
                    ȱ: "ȱ",
                    ő: "ő",
                    ṕ: "ṕ",
                    ṗ: "ṗ",
                    ŕ: "ŕ",
                    ř: "ř",
                    ṙ: "ṙ",
                    ŗ: "ŗ",
                    ś: "ś",
                    ṥ: "ṥ",
                    š: "š",
                    ṧ: "ṧ",
                    ŝ: "ŝ",
                    ṡ: "ṡ",
                    ş: "ş",
                    ẗ: "ẗ",
                    ť: "ť",
                    ṫ: "ṫ",
                    ţ: "ţ",
                    ú: "ú",
                    ù: "ù",
                    ü: "ü",
                    ǘ: "ǘ",
                    ǜ: "ǜ",
                    ǖ: "ǖ",
                    ǚ: "ǚ",
                    ũ: "ũ",
                    ṹ: "ṹ",
                    ū: "ū",
                    ṻ: "ṻ",
                    ŭ: "ŭ",
                    ǔ: "ǔ",
                    û: "û",
                    ů: "ů",
                    ű: "ű",
                    ṽ: "ṽ",
                    ẃ: "ẃ",
                    ẁ: "ẁ",
                    ẅ: "ẅ",
                    ŵ: "ŵ",
                    ẇ: "ẇ",
                    ẘ: "ẘ",
                    ẍ: "ẍ",
                    ẋ: "ẋ",
                    ý: "ý",
                    ỳ: "ỳ",
                    ÿ: "ÿ",
                    ỹ: "ỹ",
                    ȳ: "ȳ",
                    ŷ: "ŷ",
                    ẏ: "ẏ",
                    ẙ: "ẙ",
                    ź: "ź",
                    ž: "ž",
                    ẑ: "ẑ",
                    ż: "ż",
                    Á: "Á",
                    À: "À",
                    Ä: "Ä",
                    Ǟ: "Ǟ",
                    Ã: "Ã",
                    Ā: "Ā",
                    Ă: "Ă",
                    Ắ: "Ắ",
                    Ằ: "Ằ",
                    Ẵ: "Ẵ",
                    Ǎ: "Ǎ",
                    Â: "Â",
                    Ấ: "Ấ",
                    Ầ: "Ầ",
                    Ẫ: "Ẫ",
                    Ȧ: "Ȧ",
                    Ǡ: "Ǡ",
                    Å: "Å",
                    Ǻ: "Ǻ",
                    Ḃ: "Ḃ",
                    Ć: "Ć",
                    Ḉ: "Ḉ",
                    Č: "Č",
                    Ĉ: "Ĉ",
                    Ċ: "Ċ",
                    Ç: "Ç",
                    Ď: "Ď",
                    Ḋ: "Ḋ",
                    Ḑ: "Ḑ",
                    É: "É",
                    È: "È",
                    Ë: "Ë",
                    Ẽ: "Ẽ",
                    Ē: "Ē",
                    Ḗ: "Ḗ",
                    Ḕ: "Ḕ",
                    Ĕ: "Ĕ",
                    Ḝ: "Ḝ",
                    Ě: "Ě",
                    Ê: "Ê",
                    Ế: "Ế",
                    Ề: "Ề",
                    Ễ: "Ễ",
                    Ė: "Ė",
                    Ȩ: "Ȩ",
                    Ḟ: "Ḟ",
                    Ǵ: "Ǵ",
                    Ḡ: "Ḡ",
                    Ğ: "Ğ",
                    Ǧ: "Ǧ",
                    Ĝ: "Ĝ",
                    Ġ: "Ġ",
                    Ģ: "Ģ",
                    Ḧ: "Ḧ",
                    Ȟ: "Ȟ",
                    Ĥ: "Ĥ",
                    Ḣ: "Ḣ",
                    Ḩ: "Ḩ",
                    Í: "Í",
                    Ì: "Ì",
                    Ï: "Ï",
                    Ḯ: "Ḯ",
                    Ĩ: "Ĩ",
                    Ī: "Ī",
                    Ĭ: "Ĭ",
                    Ǐ: "Ǐ",
                    Î: "Î",
                    İ: "İ",
                    Ĵ: "Ĵ",
                    Ḱ: "Ḱ",
                    Ǩ: "Ǩ",
                    Ķ: "Ķ",
                    Ĺ: "Ĺ",
                    Ľ: "Ľ",
                    Ļ: "Ļ",
                    Ḿ: "Ḿ",
                    Ṁ: "Ṁ",
                    Ń: "Ń",
                    Ǹ: "Ǹ",
                    Ñ: "Ñ",
                    Ň: "Ň",
                    Ṅ: "Ṅ",
                    Ņ: "Ņ",
                    Ó: "Ó",
                    Ò: "Ò",
                    Ö: "Ö",
                    Ȫ: "Ȫ",
                    Õ: "Õ",
                    Ṍ: "Ṍ",
                    Ṏ: "Ṏ",
                    Ȭ: "Ȭ",
                    Ō: "Ō",
                    Ṓ: "Ṓ",
                    Ṑ: "Ṑ",
                    Ŏ: "Ŏ",
                    Ǒ: "Ǒ",
                    Ô: "Ô",
                    Ố: "Ố",
                    Ồ: "Ồ",
                    Ỗ: "Ỗ",
                    Ȯ: "Ȯ",
                    Ȱ: "Ȱ",
                    Ő: "Ő",
                    Ṕ: "Ṕ",
                    Ṗ: "Ṗ",
                    Ŕ: "Ŕ",
                    Ř: "Ř",
                    Ṙ: "Ṙ",
                    Ŗ: "Ŗ",
                    Ś: "Ś",
                    Ṥ: "Ṥ",
                    Š: "Š",
                    Ṧ: "Ṧ",
                    Ŝ: "Ŝ",
                    Ṡ: "Ṡ",
                    Ş: "Ş",
                    Ť: "Ť",
                    Ṫ: "Ṫ",
                    Ţ: "Ţ",
                    Ú: "Ú",
                    Ù: "Ù",
                    Ü: "Ü",
                    Ǘ: "Ǘ",
                    Ǜ: "Ǜ",
                    Ǖ: "Ǖ",
                    Ǚ: "Ǚ",
                    Ũ: "Ũ",
                    Ṹ: "Ṹ",
                    Ū: "Ū",
                    Ṻ: "Ṻ",
                    Ŭ: "Ŭ",
                    Ǔ: "Ǔ",
                    Û: "Û",
                    Ů: "Ů",
                    Ű: "Ű",
                    Ṽ: "Ṽ",
                    Ẃ: "Ẃ",
                    Ẁ: "Ẁ",
                    Ẅ: "Ẅ",
                    Ŵ: "Ŵ",
                    Ẇ: "Ẇ",
                    Ẍ: "Ẍ",
                    Ẋ: "Ẋ",
                    Ý: "Ý",
                    Ỳ: "Ỳ",
                    Ÿ: "Ÿ",
                    Ỹ: "Ỹ",
                    Ȳ: "Ȳ",
                    Ŷ: "Ŷ",
                    Ẏ: "Ẏ",
                    Ź: "Ź",
                    Ž: "Ž",
                    Ẑ: "Ẑ",
                    Ż: "Ż",
                    ά: "ά",
                    ὰ: "ὰ",
                    ᾱ: "ᾱ",
                    ᾰ: "ᾰ",
                    έ: "έ",
                    ὲ: "ὲ",
                    ή: "ή",
                    ὴ: "ὴ",
                    ί: "ί",
                    ὶ: "ὶ",
                    ϊ: "ϊ",
                    ΐ: "ΐ",
                    ῒ: "ῒ",
                    ῑ: "ῑ",
                    ῐ: "ῐ",
                    ό: "ό",
                    ὸ: "ὸ",
                    ύ: "ύ",
                    ὺ: "ὺ",
                    ϋ: "ϋ",
                    ΰ: "ΰ",
                    ῢ: "ῢ",
                    ῡ: "ῡ",
                    ῠ: "ῠ",
                    ώ: "ώ",
                    ὼ: "ὼ",
                    Ύ: "Ύ",
                    Ὺ: "Ὺ",
                    Ϋ: "Ϋ",
                    Ῡ: "Ῡ",
                    Ῠ: "Ῠ",
                    Ώ: "Ώ",
                    Ὼ: "Ὼ"
                };
            class r2 {
                expect(e, t) {
                    if (void 0 === t && (t = !0), this.fetch().text !== e) throw new D("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
                    t && this.consume()
                }
                consume() {
                    this.nextToken = null
                }
                fetch() {
                    return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()), this.nextToken
                }
                switchMode(e) {
                    this.mode = e, this.gullet.switchMode(e)
                }
                parse() {
                    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
                    try {
                        var e = this.parseExpression(!1);
                        return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e
                    } finally {
                        this.gullet.endGroups()
                    }
                }
                subparse(e) {
                    var t = this.nextToken;
                    this.consume(), this.gullet.pushToken(new L("}")), this.gullet.pushTokens(e);
                    var n = this.parseExpression(!1);
                    return this.expect("}"), this.nextToken = t, n
                }
                parseExpression(e, t) {
                    for (var n = [];;) {
                        "math" === this.mode && this.consumeSpaces();
                        var r = this.fetch();
                        if (-1 !== r2.endOfExpression.indexOf(r.text) || t && r.text === t || e && tq[r.text] && tq[r.text].infix) break;
                        var i = this.parseAtom(t);
                        if (i) {
                            if ("internal" === i.type) continue
                        } else break;
                        n.push(i)
                    }
                    return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
                }
                handleInfixNodes(e) {
                    for (var t = -1, n = 0; n < e.length; n++)
                        if ("infix" === e[n].type) {
                            if (-1 !== t) throw new D("only one infix operator per group", e[n].token);
                            t = n, r = e[n].replaceWith
                        } if (-1 === t || !r) return e;
                    var r, i, a, o = e.slice(0, t),
                        l = e.slice(t + 1);
                    return i = 1 === o.length && "ordgroup" === o[0].type ? o[0] : {
                        type: "ordgroup",
                        mode: this.mode,
                        body: o
                    }, a = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                        type: "ordgroup",
                        mode: this.mode,
                        body: l
                    }, ["\\\\abovefrac" === r ? this.callFunction(r, [i, e[t], a], []) : this.callFunction(r, [i, a], [])]
                }
                handleSupSubscript(e) {
                    var t, n = this.fetch(),
                        r = n.text;
                    this.consume(), this.consumeSpaces();
                    do t = this.parseGroup(e); while ((null == t ? void 0 : t.type) === "internal");
                    if (!t) throw new D("Expected group after '" + r + "'", n);
                    return t
                }
                formatUnsupportedCmd(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push({
                        type: "textord",
                        mode: "text",
                        text: e[n]
                    });
                    var r = {
                        type: "text",
                        mode: this.mode,
                        body: t
                    };
                    return {
                        type: "color",
                        mode: this.mode,
                        color: this.settings.errorColor,
                        body: [r]
                    }
                }
                parseAtom(e) {
                    var t, n, r = this.parseGroup("atom", e);
                    if ((null == r ? void 0 : r.type) === "internal" || "text" === this.mode) return r;
                    for (;;) {
                        this.consumeSpaces();
                        var i = this.fetch();
                        if ("\\limits" === i.text || "\\nolimits" === i.text) {
                            if (r && "op" === r.type) r.limits = "\\limits" === i.text, r.alwaysHandleSupSub = !0;
                            else if (r && "operatorname" === r.type) r.alwaysHandleSupSub && (r.limits = "\\limits" === i.text);
                            else throw new D("Limit controls must follow a math operator", i);
                            this.consume()
                        } else if ("^" === i.text) {
                            if (t) throw new D("Double superscript", i);
                            t = this.handleSupSubscript("superscript")
                        } else if ("_" === i.text) {
                            if (n) throw new D("Double subscript", i);
                            n = this.handleSupSubscript("subscript")
                        } else if ("'" === i.text) {
                            if (t) throw new D("Double superscript", i);
                            var a = {
                                    type: "textord",
                                    mode: this.mode,
                                    text: "\\prime"
                                },
                                o = [a];
                            for (this.consume();
                                "'" === this.fetch().text;) o.push(a), this.consume();
                            "^" === this.fetch().text && o.push(this.handleSupSubscript("superscript")), t = {
                                type: "ordgroup",
                                mode: this.mode,
                                body: o
                            }
                        } else if (r6[i.text]) {
                            var l = r5.test(i.text),
                                s = [];
                            for (s.push(new L(r6[i.text])), this.consume();;) {
                                var u = this.fetch().text;
                                if (!r6[u] || r5.test(u) !== l) break;
                                s.unshift(new L(r6[u])), this.consume()
                            }
                            var c = this.subparse(s);
                            l ? n = {
                                type: "ordgroup",
                                mode: "math",
                                body: c
                            } : t = {
                                type: "ordgroup",
                                mode: "math",
                                body: c
                            }
                        } else break
                    }
                    return t || n ? {
                        type: "supsub",
                        mode: this.mode,
                        base: r,
                        sup: t,
                        sub: n
                    } : r
                }
                parseFunction(e, t) {
                    var n = this.fetch(),
                        r = n.text,
                        i = tq[r];
                    if (!i) return null;
                    if (this.consume(), t && "atom" !== t && !i.allowedInArgument) throw new D("Got function '" + r + "' with no arguments" + (t ? " as " + t : ""), n);
                    if ("text" !== this.mode || i.allowedInText) {
                        if ("math" === this.mode && !1 === i.allowedInMath) throw new D("Can't use function '" + r + "' in math mode", n)
                    } else throw new D("Can't use function '" + r + "' in text mode", n);
                    var {
                        args: a,
                        optArgs: o
                    } = this.parseArguments(r, i);
                    return this.callFunction(r, a, o, n, e)
                }
                callFunction(e, t, n, r, i) {
                    var a = tq[e];
                    if (a && a.handler) return a.handler({
                        funcName: e,
                        parser: this,
                        token: r,
                        breakOnTokenText: i
                    }, t, n);
                    throw new D("No function handler for " + e)
                }
                parseArguments(e, t) {
                    var n = t.numArgs + t.numOptionalArgs;
                    if (0 === n) return {
                        args: [],
                        optArgs: []
                    };
                    for (var r = [], i = [], a = 0; a < n; a++) {
                        var o = t.argTypes && t.argTypes[a],
                            l = a < t.numOptionalArgs;
                        (t.primitive && null == o || "sqrt" === t.type && 1 === a && null == i[0]) && (o = "primitive");
                        var s = this.parseGroupOfType("argument to '" + e + "'", o, l);
                        if (l) i.push(s);
                        else if (null != s) r.push(s);
                        else throw new D("Null argument, please report this as a bug")
                    }
                    return {
                        args: r,
                        optArgs: i
                    }
                }
                parseGroupOfType(e, t, n) {
                    switch (t) {
                        case "color":
                            return this.parseColorGroup(n);
                        case "size":
                            return this.parseSizeGroup(n);
                        case "url":
                            return this.parseUrlGroup(n);
                        case "math":
                        case "text":
                            return this.parseArgumentGroup(n, t);
                        case "hbox":
                            var r = this.parseArgumentGroup(n, "text");
                            return null != r ? {
                                type: "styling",
                                mode: r.mode,
                                body: [r],
                                style: "text"
                            } : null;
                        case "raw":
                            var i = this.parseStringGroup("raw", n);
                            return null != i ? {
                                type: "raw",
                                mode: "text",
                                string: i.text
                            } : null;
                        case "primitive":
                            if (n) throw new D("A primitive argument cannot be optional");
                            var a = this.parseGroup(e);
                            if (null == a) throw new D("Expected group as " + e, this.fetch());
                            return a;
                        case "original":
                        case null:
                        case void 0:
                            return this.parseArgumentGroup(n);
                        default:
                            throw new D("Unknown group type as " + e, this.fetch())
                    }
                }
                consumeSpaces() {
                    for (;
                        " " === this.fetch().text;) this.consume()
                }
                parseStringGroup(e, t) {
                    var n, r = this.gullet.scanArgument(t);
                    if (null == r) return null;
                    for (var i = "";
                        "EOF" !== (n = this.fetch()).text;) i += n.text, this.consume();
                    return this.consume(), r.text = i, r
                }
                parseRegexGroup(e, t) {
                    for (var n, r = this.fetch(), i = r, a = "";
                        "EOF" !== (n = this.fetch()).text && e.test(a + n.text);) a += (i = n).text, this.consume();
                    if ("" === a) throw new D("Invalid " + t + ": '" + r.text + "'", r);
                    return r.range(i, a)
                }
                parseColorGroup(e) {
                    var t = this.parseStringGroup("color", e);
                    if (null == t) return null;
                    var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
                    if (!n) throw new D("Invalid color: '" + t.text + "'", t);
                    var r = n[0];
                    return /^[0-9a-f]{6}$/i.test(r) && (r = "#" + r), {
                        type: "color-token",
                        mode: this.mode,
                        color: r
                    }
                }
                parseSizeGroup(e) {
                    var t, n = !1;
                    if (this.gullet.consumeSpaces(), !(t = e || "{" === this.gullet.future().text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
                    e || 0 !== t.text.length || (t.text = "0pt", n = !0);
                    var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
                    if (!r) throw new D("Invalid size: '" + t.text + "'", t);
                    var i = {
                        number: +(r[1] + r[2]),
                        unit: r[3]
                    };
                    if (!ez(i)) throw new D("Invalid unit: '" + i.unit + "'", t);
                    return {
                        type: "size",
                        mode: this.mode,
                        value: i,
                        isBlank: n
                    }
                }
                parseUrlGroup(e) {
                    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
                    var t = this.parseStringGroup("url", e);
                    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), null == t) return null;
                    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
                    return {
                        type: "url",
                        mode: this.mode,
                        url: n
                    }
                }
                parseArgumentGroup(e, t) {
                    var n = this.gullet.scanArgument(e);
                    if (null == n) return null;
                    var r = this.mode;
                    t && this.switchMode(t), this.gullet.beginGroup();
                    var i = this.parseExpression(!1, "EOF");
                    this.expect("EOF"), this.gullet.endGroup();
                    var a = {
                        type: "ordgroup",
                        mode: this.mode,
                        loc: n.loc,
                        body: i
                    };
                    return t && this.switchMode(r), a
                }
                parseGroup(e, t) {
                    var n, r = this.fetch(),
                        i = r.text;
                    if ("{" === i || "\\begingroup" === i) {
                        this.consume();
                        var a = "{" === i ? "}" : "\\endgroup";
                        this.gullet.beginGroup();
                        var o = this.parseExpression(!1, a),
                            l = this.fetch();
                        this.expect(a), this.gullet.endGroup(), n = {
                            type: "ordgroup",
                            mode: this.mode,
                            loc: P.range(r, l),
                            body: o,
                            semisimple: "\\begingroup" === i || void 0
                        }
                    } else if (null == (n = this.parseFunction(t, e) || this.parseSymbol()) && "\\" === i[0] && !r1.hasOwnProperty(i)) {
                        if (this.settings.throwOnError) throw new D("Undefined control sequence: " + i, r);
                        n = this.formatUnsupportedCmd(i), this.consume()
                    }
                    return n
                }
                formLigatures(e) {
                    for (var t = e.length - 1, n = 0; n < t; ++n) {
                        var r = e[n],
                            i = r.text;
                        "-" === i && "-" === e[n + 1].text && (n + 1 < t && "-" === e[n + 2].text ? (e.splice(n, 3, {
                            type: "textord",
                            mode: "text",
                            loc: P.range(r, e[n + 2]),
                            text: "---"
                        }), t -= 2) : (e.splice(n, 2, {
                            type: "textord",
                            mode: "text",
                            loc: P.range(r, e[n + 1]),
                            text: "--"
                        }), t -= 1)), ("'" === i || "`" === i) && e[n + 1].text === i && (e.splice(n, 2, {
                            type: "textord",
                            mode: "text",
                            loc: P.range(r, e[n + 1]),
                            text: i + i
                        }), t -= 1)
                    }
                }
                parseSymbol() {
                    var e = this.fetch(),
                        t = e.text;
                    if (/^\\verb[^a-zA-Z]/.test(t)) {
                        this.consume();
                        var n = t.slice(5),
                            r = "*" === n.charAt(0);
                        if (r && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)) throw new D("\\verb assertion failed --\n                    please report what input caused this bug");
                        return {
                            type: "verb",
                            mode: "text",
                            body: n = n.slice(1, -1),
                            star: r
                        }
                    }
                    r7.hasOwnProperty(t[0]) && !eV[this.mode][t[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = r7[t[0]] + t.slice(1));
                    var i = rX.exec(t);
                    if (i && ("i" === (t = t.substring(0, i.index)) ? t = "ı" : "j" === t && (t = "ȷ")), eV[this.mode][t]) {
                        this.settings.strict && "math" === this.mode && tl.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
                        var a, o = eV[this.mode][t].group,
                            l = P.range(e);
                        a = eF.hasOwnProperty(o) ? {
                            type: "atom",
                            mode: this.mode,
                            family: o,
                            loc: l,
                            text: t
                        } : {
                            type: o,
                            mode: this.mode,
                            loc: l,
                            text: t
                        }
                    } else {
                        if (!(t.charCodeAt(0) >= 128)) return null;
                        this.settings.strict && (eo(t.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '" (' + t.charCodeAt(0) + ")", e)), a = {
                            type: "textord",
                            mode: "text",
                            loc: P.range(e),
                            text: t
                        }
                    }
                    if (this.consume(), i)
                        for (var s = 0; s < i[0].length; s++) {
                            var u = i[0][s];
                            if (!r3[u]) throw new D("Unknown accent ' " + u + "'", e);
                            var c = r3[u][this.mode] || r3[u].text;
                            if (!c) throw new D("Accent " + u + " unsupported in " + this.mode + " mode", e);
                            a = {
                                type: "accent",
                                mode: this.mode,
                                loc: P.range(e),
                                label: c,
                                isStretchy: !1,
                                isShifty: !0,
                                base: a
                            }
                        }
                    return a
                }
                constructor(e, t) {
                    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new r4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0
                }
            }
            r2.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
            var r8 = function(e, t) {
                if (!("string" == typeof e || e instanceof String)) throw TypeError("KaTeX can only parse string typed expression");
                var n = new r2(e, t);
                delete n.gullet.macros.current["\\df@tag"];
                var r = n.parse();
                if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
                    if (!t.displayMode) throw new D("\\tag works only in display equations");
                    r = [{
                        type: "tag",
                        mode: "text",
                        body: r,
                        tag: n.subparse([new L("\\df@tag")])
                    }]
                }
                return r
            };
            "undefined" != typeof document && "CSS1Compat" !== document.compatMode && "undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
            var r9 = function(e, t, n) {
                    if (n.throwOnError || !(e instanceof D)) throw e;
                    var r = ty(["katex-error"], [new eL(t)]);
                    return r.setAttribute("title", e.toString()), r.setAttribute("style", "color:" + n.errorColor), r
                },
                ie = function(e, t) {
                    var n = new G(t);
                    try {
                        var r = r8(e, n);
                        return ns(r, e, n)
                    } catch (t) {
                        return r9(t, e, n)
                    }
                },
                it = function(e, t) {
                    return ie(e, t).toMarkup()
                },
                ir = n(84964);
            let ii = {},
                ia = [];

            function io(e) {
                let t = e || ii;
                return function(e, n) {
                    (0, ir.VG)(e, "element", function(e, r) {
                        let i, a = Array.isArray(e.properties.className) ? e.properties.className : ia,
                            o = a.includes("language-math"),
                            l = a.includes("math-display"),
                            s = a.includes("math-inline"),
                            u = l;
                        if (!o && !l && !s) return;
                        let c = r[r.length - 1],
                            h = e;
                        if ("code" === e.tagName && o && c && "element" === c.type && "pre" === c.tagName && (h = c, c = r[r.length - 2], u = !0), !c) return;
                        let p = function(e, t) {
                            let n, r = "children" in e ? e.children : [],
                                i = I(e),
                                a = O(e, {
                                    whitespace: (t || {}).whitespace || "normal",
                                    breakBefore: !1,
                                    breakAfter: !1
                                }),
                                o = [];
                            ("text" === e.type || "comment" === e.type) && o.push(...B(e, {
                                whitespace: a,
                                breakBefore: !0,
                                breakAfter: !0
                            }));
                            let l = -1;
                            for (; ++l < r.length;) o.push(... function e(t, n, r) {
                                return "element" === t.type ? function(t, n, r) {
                                    let i, a, o = O(t, r),
                                        l = t.children || [],
                                        s = -1,
                                        u = [];
                                    if (R(t)) return u;
                                    for (T(t) || E(t) && v(n, t, E) ? a = "\n" : C(t) ? (i = 2, a = 2) : I(t) && (i = 1, a = 1); ++s < l.length;) u = u.concat(e(l[s], t, {
                                        whitespace: o,
                                        breakBefore: s ? void 0 : i,
                                        breakAfter: s < l.length - 1 ? T(l[s + 1]) : a
                                    }));
                                    return M(t) && v(n, t, M) && u.push("	"), i && u.unshift(i), a && u.push(a), u
                                }(t, n, r) : "text" === t.type ? "normal" === r.whitespace ? B(t, r) : [String(t.value)] : []
                            }(r[l], e, {
                                whitespace: a,
                                breakBefore: l ? void 0 : i,
                                breakAfter: l < r.length - 1 ? T(r[l + 1]) : i
                            }));
                            let s = [];
                            for (l = -1; ++l < o.length;) {
                                let e = o[l];
                                "number" == typeof e ? void 0 !== n && e > n && (n = e) : e && (void 0 !== n && n > -1 && s.push("\n".repeat(n) || " "), n = -1, s.push(e))
                            }
                            return s.join("")
                        }(h, {
                            whitespace: "pre"
                        });
                        try {
                            i = it(p, {
                                ...t,
                                displayMode: u,
                                throwOnError: !0
                            })
                        } catch (o) {
                            let a = o.name.toLowerCase();
                            n.message("Could not render math with KaTeX", {
                                ancestors: [...r, e],
                                cause: o,
                                place: e.position,
                                ruleId: a,
                                source: "rehype-katex"
                            });
                            try {
                                i = it(p, {
                                    ...t,
                                    displayMode: u,
                                    strict: "ignore",
                                    throwOnError: !1
                                })
                            } catch {
                                i = [{
                                    type: "element",
                                    tagName: "span",
                                    properties: {
                                        className: ["katex-error"],
                                        style: "color:" + (t.errorColor || "#cc0000"),
                                        title: String(o)
                                    },
                                    children: [{
                                        type: "text",
                                        value: p
                                    }]
                                }]
                            }
                        }
                        if ("string" == typeof i) {
                            var m, f;
                            let e;
                            i = (m = i, g((f = m, (e = document.createElement("template")).innerHTML = f, e.content), {}) || {
                                type: "root",
                                children: []
                            }).children
                        }
                        let d = c.children.indexOf(h);
                        return c.children.splice(d, 1, ...i), ir._Z
                    })
                }
            }
        },
        87438: function(e, t, n) {
            n.d(t, {
                A: () => m
            });
            var r = n(41472),
                i = n(58592),
                a = n(32165);
            let o = {}.hasOwnProperty;

            function l(e, t) {
                if (t && "object" == typeof t) switch ("string" == typeof t.type ? t.type : "") {
                    case "comment":
                        var n, r, i = e,
                            a = t;
                        if (i.schema.allowComments) {
                            let e = "string" == typeof a.value ? a.value : "",
                                t = e.indexOf("--\x3e"),
                                n = {
                                    type: "comment",
                                    value: t < 0 ? e : e.slice(0, t)
                                };
                            return h(n, a), n
                        }
                        return;
                    case "doctype":
                        var l = e,
                            c = t;
                        if (l.schema.allowDoctypes) {
                            let e = {
                                type: "doctype"
                            };
                            return h(e, c), e
                        }
                        return;
                    case "element":
                        return function(e, t) {
                            let n = "string" == typeof t.tagName ? t.tagName : "";
                            e.stack.push(n);
                            let r = s(e, t.children),
                                i = function(e, t) {
                                    let n, r = e.stack[e.stack.length - 1],
                                        i = e.schema.attributes,
                                        a = e.schema.required,
                                        l = i && o.call(i, r) ? i[r] : void 0,
                                        s = i && o.call(i, "*") ? i["*"] : void 0,
                                        c = t && "object" == typeof t ? t : {},
                                        h = {};
                                    for (n in c)
                                        if (o.call(c, n)) {
                                            let t = c[n],
                                                r = u(e, p(l, n), n, t);
                                            null == r && (r = u(e, p(s, n), n, t)), null != r && (h[n] = r)
                                        } if (a && o.call(a, r)) {
                                        let e = a[r];
                                        for (n in e) o.call(e, n) && !o.call(h, n) && (h[n] = e[n])
                                    }
                                    return h
                                }(e, t.properties);
                            e.stack.pop();
                            let a = !1;
                            if (n && "*" !== n && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (a = !0, e.schema.ancestors && o.call(e.schema.ancestors, n))) {
                                let t = e.schema.ancestors[n],
                                    r = -1;
                                for (a = !1; ++r < t.length;) e.stack.includes(t[r]) && (a = !0)
                            }
                            if (!a) return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
                            let l = {
                                type: "element",
                                tagName: n,
                                properties: i,
                                children: r
                            };
                            return h(l, t), l
                        }(e, t);
                    case "root":
                        let m;
                        return h(m = {
                            type: "root",
                            children: s(e, (n = t).children)
                        }, n), m;
                    case "text":
                        let f;
                        return h(f = {
                            type: "text",
                            value: "string" == typeof(r = t).value ? r.value : ""
                        }, r), f
                }
            }

            function s(e, t) {
                let n = [];
                if (Array.isArray(t)) {
                    let r = -1;
                    for (; ++r < t.length;) {
                        let i = l(e, t[r]);
                        i && (Array.isArray(i) ? n.push(...i) : n.push(i))
                    }
                }
                return n
            }

            function u(e, t, n, r) {
                return t ? Array.isArray(r) ? function(e, t, n, r) {
                    let i = -1,
                        a = [];
                    for (; ++i < r.length;) {
                        let o = c(e, t, n, r[i]);
                        ("number" == typeof o || "string" == typeof o) && a.push(o)
                    }
                    return a
                }(e, t, n, r) : c(e, t, n, r) : void 0
            }

            function c(e, t, n, r) {
                if (("boolean" == typeof r || "number" == typeof r || "string" == typeof r) && function(e, t, n) {
                        let r = e.schema.protocols && o.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
                        if (!r || 0 === r.length) return !0;
                        let i = String(n),
                            a = i.indexOf(":"),
                            l = i.indexOf("?"),
                            s = i.indexOf("#"),
                            u = i.indexOf("/");
                        if (a < 0 || u > -1 && a > u || l > -1 && a > l || s > -1 && a > s) return !0;
                        let c = -1;
                        for (; ++c < r.length;) {
                            let e = r[c];
                            if (a === e.length && i.slice(0, e.length) === e) return !0
                        }
                        return !1
                    }(e, n, r)) {
                    if ("object" == typeof t && t.length > 1) {
                        let e = !1,
                            n = 0;
                        for (; ++n < t.length;) {
                            let i = t[n];
                            if (i && "object" == typeof i && "flags" in i) {
                                if (i.test(String(r))) {
                                    e = !0;
                                    break
                                }
                            } else if (i === r) {
                                e = !0;
                                break
                            }
                        }
                        if (!e) return
                    }
                    return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r
                }
            }

            function h(e, t) {
                let n = (0, i.G1)(t);
                t.data && (e.data = (0, r.A)(t.data)), n && (e.position = n)
            }

            function p(e, t) {
                let n, r = -1;
                if (e)
                    for (; ++r < e.length;) {
                        let i = e[r],
                            a = "string" == typeof i ? i : i[0];
                        if (a === t) return i;
                        "data*" === a && (n = i)
                    }
                if (t.length > 4 && "data" === t.slice(0, 4).toLowerCase()) return n
            }

            function m(e) {
                return function(t) {
                    let n, r;
                    return n = {
                        type: "root",
                        children: []
                    }, (r = l({
                        schema: e ? {
                            ...a.j,
                            ...e
                        } : a.j,
                        stack: []
                    }, t)) && (Array.isArray(r) ? 1 === r.length ? n = r[0] : n.children = r : n = r), n
                }
            }
        },
        45612: function(e, t, n) {
            function r(e, t) {
                let n = String(e);
                if ("string" != typeof t) throw TypeError("Expected character");
                let r = 0,
                    i = n.indexOf(t);
                for (; - 1 !== i;) r++, i = n.indexOf(t, i + t.length);
                return r
            }
            n.d(t, {
                A: () => eO
            });
            var i = n(31364),
                a = n(37535),
                o = n(84964),
                l = n(55253);
            let s = "phrasing",
                u = ["autolink", "link", "image", "label"];

            function c(e) {
                this.enter({
                    type: "link",
                    title: null,
                    url: "",
                    children: []
                }, e)
            }

            function h(e) {
                this.config.enter.autolinkProtocol.call(this, e)
            }

            function p(e) {
                this.config.exit.autolinkProtocol.call(this, e)
            }

            function m(e) {
                this.config.exit.data.call(this, e);
                let t = this.stack[this.stack.length - 1];
                (0, i.ok)("link" === t.type), t.url = "http://" + this.sliceSerialize(e)
            }

            function f(e) {
                this.config.exit.autolinkEmail.call(this, e)
            }

            function d(e) {
                this.exit(e)
            }

            function g(e) {
                ! function(e, t, n) {
                    let r = (0, l.C)((n || {}).ignore || []),
                        i = function(e) {
                            let t = [];
                            if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
                            let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                                r = -1;
                            for (; ++r < n.length;) {
                                var i;
                                let e = n[r];
                                t.push(["string" == typeof(i = e[0]) ? RegExp(function(e) {
                                    if ("string" != typeof e) throw TypeError("Expected a string");
                                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                                }(i), "g") : i, function(e) {
                                    return "function" == typeof e ? e : function() {
                                        return e
                                    }
                                }(e[1])])
                            }
                            return t
                        }(t),
                        a = -1;
                    for (; ++a < i.length;)(0, o.VG)(e, "text", s);

                    function s(e, t) {
                        let n, o = -1;
                        for (; ++o < t.length;) {
                            let e = t[o],
                                i = n ? n.children : void 0;
                            if (r(e, i ? i.indexOf(e) : void 0, n)) return;
                            n = e
                        }
                        if (n) return function(e, t) {
                            let n = t[t.length - 1],
                                r = i[a][0],
                                o = i[a][1],
                                l = 0,
                                s = n.children.indexOf(e),
                                u = !1,
                                c = [];
                            r.lastIndex = 0;
                            let h = r.exec(e.value);
                            for (; h;) {
                                let n = h.index,
                                    i = {
                                        index: h.index,
                                        input: h.input,
                                        stack: [...t, e]
                                    },
                                    a = o(...h, i);
                                if ("string" == typeof a && (a = a.length > 0 ? {
                                        type: "text",
                                        value: a
                                    } : void 0), !1 === a ? r.lastIndex = n + 1 : (l !== n && c.push({
                                        type: "text",
                                        value: e.value.slice(l, n)
                                    }), Array.isArray(a) ? c.push(...a) : a && c.push(a), l = n + h[0].length, u = !0), !r.global) break;
                                h = r.exec(e.value)
                            }
                            return u ? (l < e.value.length && c.push({
                                type: "text",
                                value: e.value.slice(l)
                            }), n.children.splice(s, 1, ...c)) : c = [e], s + c.length
                        }(e, t)
                    }
                }(e, [
                    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, y],
                    [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, x]
                ], {
                    ignore: ["link", "linkReference"]
                })
            }

            function y(e, t, n, i, a) {
                let o, l = "";
                if (!b(a)) return !1;
                if (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), (o = n.split(".")).length < 2 || o[o.length - 1] && (/_/.test(o[o.length - 1]) || !/[a-zA-Z\d]/.test(o[o.length - 1])) || o[o.length - 2] && (/_/.test(o[o.length - 2]) || !/[a-zA-Z\d]/.test(o[o.length - 2]))) return !1;
                let s = function(e) {
                    let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                    if (!t) return [e, void 0];
                    e = e.slice(0, t.index);
                    let n = t[0],
                        i = n.indexOf(")"),
                        a = r(e, "("),
                        o = r(e, ")");
                    for (; - 1 !== i && a > o;) e += n.slice(0, i + 1), i = (n = n.slice(i + 1)).indexOf(")"), o++;
                    return [e, n]
                }(n + i);
                if (!s[0]) return !1;
                let u = {
                    type: "link",
                    title: null,
                    url: l + t + s[0],
                    children: [{
                        type: "text",
                        value: t + s[0]
                    }]
                };
                return s[1] ? [u, {
                    type: "text",
                    value: s[1]
                }] : u
            }

            function x(e, t, n, r) {
                return !(!b(r, !0) || /[-\d_]$/.test(n)) && {
                    type: "link",
                    title: null,
                    url: "mailto:" + t + "@" + n,
                    children: [{
                        type: "text",
                        value: t + "@" + n
                    }]
                }
            }

            function b(e, t) {
                let n = e.input.charCodeAt(e.index - 1);
                return (0 === e.index || (0, a.Ny)(n) || (0, a.es)(n)) && (!t || 47 !== n)
            }
            var v = n(15506);

            function k() {
                this.buffer()
            }

            function w(e) {
                this.enter({
                    type: "footnoteReference",
                    identifier: "",
                    label: ""
                }, e)
            }

            function z() {
                this.buffer()
            }

            function S(e) {
                this.enter({
                    type: "footnoteDefinition",
                    identifier: "",
                    label: "",
                    children: []
                }, e)
            }

            function A(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                (0, i.ok)("footnoteReference" === n.type), n.identifier = (0, v.B)(this.sliceSerialize(e)).toLowerCase(), n.label = t
            }

            function T(e) {
                this.exit(e)
            }

            function M(e) {
                let t = this.resume(),
                    n = this.stack[this.stack.length - 1];
                (0, i.ok)("footnoteDefinition" === n.type), n.identifier = (0, v.B)(this.sliceSerialize(e)).toLowerCase(), n.label = t
            }

            function C(e) {
                this.exit(e)
            }

            function E(e, t, n, r) {
                let i = n.createTracker(r),
                    a = i.move("[^"),
                    o = n.enter("footnoteReference"),
                    l = n.enter("reference");
                return a += i.move(n.safe(n.associationId(e), {
                    after: "]",
                    before: a
                })), l(), o(), a += i.move("]")
            }

            function R(e, t, n) {
                return 0 === t ? e : I(e, t, n)
            }

            function I(e, t, n) {
                return (n ? "" : "    ") + e
            }
            E.peek = function() {
                return "["
            };
            let B = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];

            function O(e) {
                this.enter({
                    type: "delete",
                    children: []
                }, e)
            }

            function P(e) {
                this.exit(e)
            }

            function L(e, t, n, r) {
                let i = n.createTracker(r),
                    a = n.enter("strikethrough"),
                    o = i.move("~~");
                return o += n.containerPhrasing(e, {
                    ...i.current(),
                    before: o,
                    after: "~"
                }), o += i.move("~~"), a(), o
            }

            function D(e) {
                return e.length
            }

            function N(e) {
                let t = "string" == typeof e ? e.codePointAt(0) : 0;
                return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 114 * (82 === t || 114 === t)
            }
            L.peek = function() {
                return "~"
            };
            n(49527);
            var q = n(39172);
            n(7250);
            n(67361);

            function H(e, t, n) {
                let r = e.value || "",
                    i = "`",
                    a = -1;
                for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
                for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
                    let e, t = n.unsafe[a],
                        i = n.compilePattern(t);
                    if (t.atBreak)
                        for (; e = i.exec(r);) {
                            let t = e.index;
                            10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--, r = r.slice(0, t) + " " + r.slice(e.index + 1)
                        }
                }
                return i + r + i
            }
            H.peek = function() {
                return "`"
            };
            (0, l.C)(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
            let F = function(e, t, n, r) {
                let i = function(e) {
                        let t = e.options.listItemIndent || "one";
                        if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                        return t
                    }(n),
                    a = n.bulletCurrent || function(e) {
                        let t = e.options.bullet || "*";
                        if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                        return t
                    }(n);
                t && "list" === t.type && t.ordered && (a = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + a);
                let o = a.length + 1;
                ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (o = 4 * Math.ceil(o / 4));
                let l = n.createTracker(r);
                l.move(a + " ".repeat(o - a.length)), l.shift(o);
                let s = n.enter("listItem"),
                    u = n.indentLines(n.containerFlow(e, l.current()), function(e, t, n) {
                        return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e
                    });
                return s(), u
            };

            function U(e) {
                let t = e._align;
                (0, i.ok)(t, "expected `_align` on table"), this.enter({
                    type: "table",
                    align: t.map(function(e) {
                        return "none" === e ? null : e
                    }),
                    children: []
                }, e), this.data.inTable = !0
            }

            function V(e) {
                this.exit(e), this.data.inTable = void 0
            }

            function _(e) {
                this.enter({
                    type: "tableRow",
                    children: []
                }, e)
            }

            function j(e) {
                this.exit(e)
            }

            function X(e) {
                this.enter({
                    type: "tableCell",
                    children: []
                }, e)
            }

            function K(e) {
                let t = this.resume();
                this.data.inTable && (t = t.replace(/\\([\\|])/g, W));
                let n = this.stack[this.stack.length - 1];
                (0, i.ok)("inlineCode" === n.type), n.value = t, this.exit(e)
            }

            function W(e, t) {
                return "|" === t ? t : e
            }

            function G(e) {
                let t = this.stack[this.stack.length - 2];
                (0, i.ok)("listItem" === t.type), t.checked = "taskListCheckValueChecked" === e.type
            }

            function Y(e) {
                let t = this.stack[this.stack.length - 2];
                if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                    let e = this.stack[this.stack.length - 1];
                    (0, i.ok)("paragraph" === e.type);
                    let n = e.children[0];
                    if (n && "text" === n.type) {
                        let r, i = t.children,
                            a = -1;
                        for (; ++a < i.length;) {
                            let e = i[a];
                            if ("paragraph" === e.type) {
                                r = e;
                                break
                            }
                        }
                        r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)))
                    }
                }
                this.exit(e)
            }

            function $(e, t, n, r) {
                let i = e.children[0],
                    a = "boolean" == typeof e.checked && i && "paragraph" === i.type,
                    o = "[" + (e.checked ? "x" : " ") + "] ",
                    l = n.createTracker(r);
                a && l.move(o);
                let s = F(e, t, n, {
                    ...r,
                    ...l.current()
                });
                return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
                    return e + o
                })), s
            }
            var Z = n(52124);
            let Q = {
                    tokenize: function(e, t, n) {
                        let r = 0;
                        return function t(a) {
                            return (87 === a || 119 === a) && r < 3 ? (r++, e.consume(a), t) : 46 === a && 3 === r ? (e.consume(a), i) : n(a)
                        };

                        function i(e) {
                            return null === e ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                J = {
                    tokenize: function(e, t, n) {
                        let r, i, o;
                        return l;

                        function l(t) {
                            return 46 === t || 95 === t ? e.check(et, u, s)(t) : null === t || (0, a.Ee)(t) || (0, a.Ny)(t) || 45 !== t && (0, a.es)(t) ? u(t) : (o = !0, e.consume(t), l)
                        }

                        function s(t) {
                            return 95 === t ? r = !0 : (i = r, r = void 0), e.consume(t), l
                        }

                        function u(e) {
                            return i || r || !o ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                ee = {
                    tokenize: function(e, t) {
                        let n = 0,
                            r = 0;
                        return i;

                        function i(l) {
                            return 40 === l ? (n++, e.consume(l), i) : 41 === l && r < n ? o(l) : 33 === l || 34 === l || 38 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 60 === l || 63 === l || 93 === l || 95 === l || 126 === l ? e.check(et, t, o)(l) : null === l || (0, a.Ee)(l) || (0, a.Ny)(l) ? t(l) : (e.consume(l), i)
                        }

                        function o(t) {
                            return 41 === t && r++, e.consume(t), i
                        }
                    },
                    partial: !0
                },
                et = {
                    tokenize: function(e, t, n) {
                        return r;

                        function r(l) {
                            return 33 === l || 34 === l || 39 === l || 41 === l || 42 === l || 44 === l || 46 === l || 58 === l || 59 === l || 63 === l || 95 === l || 126 === l ? (e.consume(l), r) : 38 === l ? (e.consume(l), o) : 93 === l ? (e.consume(l), i) : 60 === l || null === l || (0, a.Ee)(l) || (0, a.Ny)(l) ? t(l) : n(l)
                        }

                        function i(e) {
                            return null === e || 40 === e || 91 === e || (0, a.Ee)(e) || (0, a.Ny)(e) ? t(e) : r(e)
                        }

                        function o(t) {
                            return (0, a.CW)(t) ? function t(i) {
                                return 59 === i ? (e.consume(i), r) : (0, a.CW)(i) ? (e.consume(i), t) : n(i)
                            }(t) : n(t)
                        }
                    },
                    partial: !0
                },
                en = {
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.consume(t), r
                        };

                        function r(e) {
                            return (0, a.lV)(e) ? n(e) : t(e)
                        }
                    },
                    partial: !0
                },
                er = {
                    name: "wwwAutolink",
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(t) {
                            return 87 !== t && 119 !== t || !es.call(r, r.previous) || ep(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Q, e.attempt(J, e.attempt(ee, i), n), n)(t))
                        };

                        function i(n) {
                            return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: es
                },
                ei = {
                    name: "protocolAutolink",
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = "",
                            o = !1;
                        return function(t) {
                            return (72 === t || 104 === t) && eu.call(r, r.previous) && !ep(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), l) : n(t)
                        };

                        function l(t) {
                            if ((0, a.CW)(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), l;
                            if (58 === t) {
                                let n = i.toLowerCase();
                                if ("http" === n || "https" === n) return e.consume(t), s
                            }
                            return n(t)
                        }

                        function s(t) {
                            return 47 === t ? (e.consume(t), o) ? u : (o = !0, s) : n(t)
                        }

                        function u(t) {
                            return null === t || (0, a.JQ)(t) || (0, a.Ee)(t) || (0, a.Ny)(t) || (0, a.es)(t) ? n(t) : e.attempt(J, e.attempt(ee, c), n)(t)
                        }

                        function c(n) {
                            return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                        }
                    },
                    previous: eu
                },
                ea = {
                    name: "emailAutolink",
                    tokenize: function(e, t, n) {
                        let r, i, o = this;
                        return function(t) {
                            return !eh(t) || !ec.call(o, o.previous) || ep(o.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
                                return eh(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), l) : n(r)
                            }(t))
                        };

                        function l(t) {
                            return 46 === t ? e.check(en, u, s)(t) : 45 === t || 95 === t || (0, a.lV)(t) ? (i = !0, e.consume(t), l) : u(t)
                        }

                        function s(t) {
                            return e.consume(t), r = !0, l
                        }

                        function u(l) {
                            return i && r && (0, a.CW)(o.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(l)) : n(l)
                        }
                    },
                    previous: ec
                },
                eo = {},
                el = 48;
            for (; el < 123;) eo[el] = ea, 58 == ++el ? el = 65 : 91 === el && (el = 97);

            function es(e) {
                return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || (0, a.Ee)(e)
            }

            function eu(e) {
                return !(0, a.CW)(e)
            }

            function ec(e) {
                return !(47 === e || eh(e))
            }

            function eh(e) {
                return 43 === e || 45 === e || 46 === e || 95 === e || (0, a.lV)(e)
            }

            function ep(e) {
                let t = e.length,
                    n = !1;
                for (; t--;) {
                    let r = e[t][1];
                    if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                        n = !0;
                        break
                    }
                    if (r._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break
                    }
                }
                return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
            }
            eo[43] = ea, eo[45] = ea, eo[46] = ea, eo[95] = ea, eo[72] = [ea, ei], eo[104] = [ea, ei], eo[87] = [ea, er], eo[119] = [ea, er];
            var em = n(42709),
                ef = n(81416);
            let ed = {
                tokenize: function(e, t, n) {
                    let r = this;
                    return (0, ef.N)(e, function(e) {
                        let i = r.events[r.events.length - 1];
                        return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
                    }, "gfmFootnoteDefinitionIndent", 5)
                },
                partial: !0
            };

            function eg(e, t, n) {
                let r, i = this,
                    a = i.events.length,
                    o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
                for (; a--;) {
                    let e = i.events[a][1];
                    if ("labelImage" === e.type) {
                        r = e;
                        break
                    }
                    if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break
                }
                return function(a) {
                    if (!r || !r._balanced) return n(a);
                    let l = (0, v.B)(i.sliceSerialize({
                        start: r.end,
                        end: i.now()
                    }));
                    return 94 === l.codePointAt(0) && o.includes(l.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a)) : n(a)
                }
            }

            function ey(e, t) {
                let n = e.length;
                for (; n--;)
                    if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                        e[n][1];
                        break
                    } e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
                let r = {
                        type: "gfmFootnoteCall",
                        start: Object.assign({}, e[n + 3][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    },
                    i = {
                        type: "gfmFootnoteCallMarker",
                        start: Object.assign({}, e[n + 3][1].end),
                        end: Object.assign({}, e[n + 3][1].end)
                    };
                i.end.column++, i.end.offset++, i.end._bufferIndex++;
                let a = {
                        type: "gfmFootnoteCallString",
                        start: Object.assign({}, i.end),
                        end: Object.assign({}, e[e.length - 1][1].start)
                    },
                    o = {
                        type: "chunkString",
                        contentType: "string",
                        start: Object.assign({}, a.start),
                        end: Object.assign({}, a.end)
                    },
                    l = [e[n + 1], e[n + 2],
                        ["enter", r, t], e[n + 3], e[n + 4],
                        ["enter", i, t],
                        ["exit", i, t],
                        ["enter", a, t],
                        ["enter", o, t],
                        ["exit", o, t],
                        ["exit", a, t], e[e.length - 2], e[e.length - 1],
                        ["exit", r, t]
                    ];
                return e.splice(n, e.length - n + 1, ...l), e
            }

            function ex(e, t, n) {
                let r, i = this,
                    o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
                    l = 0;
                return function(t) {
                    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), s
                };

                function s(t) {
                    return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u)
                }

                function u(s) {
                    if (l > 999 || 93 === s && !r || null === s || 91 === s || (0, a.Ee)(s)) return n(s);
                    if (93 === s) {
                        e.exit("chunkString");
                        let r = e.exit("gfmFootnoteCallString");
                        return o.includes((0, v.B)(i.sliceSerialize(r))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s)
                    }
                    return (0, a.Ee)(s) || (r = !0), l++, e.consume(s), 92 === s ? c : u
                }

                function c(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t)
                }
            }

            function eb(e, t, n) {
                let r, i, o = this,
                    l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
                    s = 0;
                return function(t) {
                    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), u
                };

                function u(t) {
                    return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(t)
                }

                function c(t) {
                    if (s > 999 || 93 === t && !i || null === t || 91 === t || (0, a.Ee)(t)) return n(t);
                    if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return r = (0, v.B)(o.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p
                    }
                    return (0, a.Ee)(t) || (i = !0), s++, e.consume(t), 92 === t ? h : c
                }

                function h(t) {
                    return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, c) : c(t)
                }

                function p(t) {
                    return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), l.includes(r) || l.push(r), (0, ef.N)(e, m, "gfmFootnoteDefinitionWhitespace")) : n(t)
                }

                function m(e) {
                    return t(e)
                }
            }

            function ev(e, t, n) {
                return e.check(em.B, t, e.attempt(ed, t, n))
            }

            function ek(e) {
                e.exit("gfmFootnoteDefinition")
            }
            var ew = n(29140),
                ez = n(77276);
            class eS {
                add(e, t, n) {
                    ! function(e, t, n, r) {
                        let i = 0;
                        if (0 !== n || 0 !== r.length) {
                            for (; i < e.map.length;) {
                                if (e.map[i][0] === t) {
                                    e.map[i][1] += n, e.map[i][2].push(...r);
                                    return
                                }
                                i += 1
                            }
                            e.map.push([t, n, r])
                        }
                    }(this, e, t, n)
                }
                consume(e) {
                    if (this.map.sort(function(e, t) {
                            return e[0] - t[0]
                        }), 0 === this.map.length) return;
                    let t = this.map.length,
                        n = [];
                    for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
                    n.push(e.slice()), e.length = 0;
                    let r = n.pop();
                    for (; r;) {
                        for (let t of r) e.push(t);
                        r = n.pop()
                    }
                    this.map.length = 0
                }
                constructor() {
                    this.map = []
                }
            }

            function eA(e, t, n) {
                let r, i = this,
                    o = 0,
                    l = 0;
                return function(e) {
                    let t = i.events.length - 1;
                    for (; t > -1;) {
                        let e = i.events[t][1].type;
                        if ("lineEnding" === e || "linePrefix" === e) t--;
                        else break
                    }
                    let r = t > -1 ? i.events[t][1].type : null,
                        a = "tableHead" === r || "tableRow" === r ? b : s;
                    return a === b && i.parser.lazy[i.now().line] ? n(e) : a(e)
                };

                function s(t) {
                    var n;
                    return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (r = !0, l += 1), u(n)
                }

                function u(t) {
                    return null === t ? n(t) : (0, a.HP)(t) ? l > 1 ? (l = 0, i.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : (0, a.On)(t) ? (0, ef.N)(e, u, "whitespace")(t) : (l += 1, r && (r = !1, o += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u) : (e.enter("data"), c(t))
                }

                function c(t) {
                    return null === t || 124 === t || (0, a.Ee)(t) ? (e.exit("data"), u(t)) : (e.consume(t), 92 === t ? h : c)
                }

                function h(t) {
                    return 92 === t || 124 === t ? (e.consume(t), c) : c(t)
                }

                function p(t) {
                    return (i.interrupt = !1, i.parser.lazy[i.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), r = !1, (0, a.On)(t)) ? (0, ef.N)(e, m, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t)
                }

                function m(t) {
                    return 45 === t || 58 === t ? d(t) : 124 === t ? (r = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), f) : n(t)
                }

                function f(t) {
                    return (0, a.On)(t) ? (0, ef.N)(e, d, "whitespace")(t) : d(t)
                }

                function d(t) {
                    return 58 === t ? (l += 1, r = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), g) : 45 === t ? (l += 1, g(t)) : null === t || (0, a.HP)(t) ? x(t) : n(t)
                }

                function g(t) {
                    return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
                        return 45 === n ? (e.consume(n), t) : 58 === n ? (r = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(n))
                    }(t)) : n(t)
                }

                function y(t) {
                    return (0, a.On)(t) ? (0, ef.N)(e, x, "whitespace")(t) : x(t)
                }

                function x(i) {
                    if (124 === i) return m(i);
                    if (null === i || (0, a.HP)(i)) return r && o === l ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i)) : n(i);
                    return n(i)
                }

                function b(t) {
                    return e.enter("tableRow"), v(t)
                }

                function v(n) {
                    return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), v) : null === n || (0, a.HP)(n) ? (e.exit("tableRow"), t(n)) : (0, a.On)(n) ? (0, ef.N)(e, v, "whitespace")(n) : (e.enter("data"), k(n))
                }

                function k(t) {
                    return null === t || 124 === t || (0, a.Ee)(t) ? (e.exit("data"), v(t)) : (e.consume(t), 92 === t ? w : k)
                }

                function w(t) {
                    return 92 === t || 124 === t ? (e.consume(t), k) : k(t)
                }
            }

            function eT(e, t) {
                let n, r, i, a = -1,
                    o = !0,
                    l = 0,
                    s = [0, 0, 0, 0],
                    u = [0, 0, 0, 0],
                    c = !1,
                    h = 0,
                    p = new eS;
                for (; ++a < e.length;) {
                    let m = e[a],
                        f = m[1];
                    "enter" === m[0] ? "tableHead" === f.type ? (c = !1, 0 !== h && (eC(p, t, h, n, r), r = void 0, h = 0), n = {
                        type: "table",
                        start: Object.assign({}, f.start),
                        end: Object.assign({}, f.end)
                    }, p.add(a, 0, [
                        ["enter", n, t]
                    ])) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (o = !0, i = void 0, s = [0, 0, 0, 0], u = [0, a + 1, 0, 0], c && (c = !1, r = {
                        type: "tableBody",
                        start: Object.assign({}, f.start),
                        end: Object.assign({}, f.end)
                    }, p.add(a, 0, [
                        ["enter", r, t]
                    ])), l = "tableDelimiterRow" === f.type ? 2 : r ? 3 : 1) : l && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) ? (o = !1, 0 === u[2] && (0 !== s[1] && (u[0] = u[1], i = eM(p, t, s, l, void 0, i), s = [0, 0, 0, 0]), u[2] = a)) : "tableCellDivider" === f.type && (o ? o = !1 : (0 !== s[1] && (u[0] = u[1], i = eM(p, t, s, l, void 0, i)), u = [(s = u)[1], a, 0, 0])) : "tableHead" === f.type ? (c = !0, h = a) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (h = a, 0 !== s[1] ? (u[0] = u[1], i = eM(p, t, s, l, a, i)) : 0 !== u[1] && (i = eM(p, t, u, l, a, i)), l = 0) : l && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) && (u[3] = a)
                }
                for (0 !== h && eC(p, t, h, n, r), p.consume(t.events), a = -1; ++a < t.events.length;) {
                    let e = t.events[a];
                    "enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
                        let n = !1,
                            r = [];
                        for (; t < e.length;) {
                            let i = e[t];
                            if (n) {
                                if ("enter" === i[0]) "tableContent" === i[1].type && r.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
                                else if ("tableContent" === i[1].type) {
                                    if ("tableDelimiterMarker" === e[t - 1][1].type) {
                                        let e = r.length - 1;
                                        r[e] = "left" === r[e] ? "center" : "right"
                                    }
                                } else if ("tableDelimiterRow" === i[1].type) break
                            } else "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
                            t += 1
                        }
                        return r
                    }(t.events, a))
                }
                return e
            }

            function eM(e, t, n, r, i, a) {
                0 !== n[0] && (a.end = Object.assign({}, eE(t.events, n[0])), e.add(n[0], 0, [
                    ["exit", a, t]
                ]));
                let o = eE(t.events, n[1]);
                if (a = {
                        type: 1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData",
                        start: Object.assign({}, o),
                        end: Object.assign({}, o)
                    }, e.add(n[1], 0, [
                        ["enter", a, t]
                    ]), 0 !== n[2]) {
                    let i = eE(t.events, n[2]),
                        a = eE(t.events, n[3]),
                        o = {
                            type: "tableContent",
                            start: Object.assign({}, i),
                            end: Object.assign({}, a)
                        };
                    if (e.add(n[2], 0, [
                            ["enter", o, t]
                        ]), 2 !== r) {
                        let r = t.events[n[2]],
                            i = t.events[n[3]];
                        if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
                            let t = n[2] + 1,
                                r = n[3] - n[2] - 1;
                            e.add(t, r, [])
                        }
                    }
                    e.add(n[3] + 1, 0, [
                        ["exit", o, t]
                    ])
                }
                return void 0 !== i && (a.end = Object.assign({}, eE(t.events, i)), e.add(i, 0, [
                    ["exit", a, t]
                ]), a = void 0), a
            }

            function eC(e, t, n, r, i) {
                let a = [],
                    o = eE(t.events, n);
                i && (i.end = Object.assign({}, o), a.push(["exit", i, t])), r.end = Object.assign({}, o), a.push(["exit", r, t]), e.add(n + 1, 0, a)
            }

            function eE(e, t) {
                let n = e[t],
                    r = "enter" === n[0] ? "start" : "end";
                return n[1][r]
            }
            let eR = {
                name: "tasklistCheck",
                tokenize: function(e, t, n) {
                    let r = this;
                    return function(t) {
                        return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t)
                    };

                    function i(t) {
                        return (0, a.Ee)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t)
                    }

                    function o(t) {
                        return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(t)
                    }

                    function l(r) {
                        return (0, a.HP)(r) ? t(r) : (0, a.On)(r) ? e.check({
                            tokenize: eI
                        }, t, n)(r) : n(r)
                    }
                }
            };

            function eI(e, t, n) {
                return (0, ef.N)(e, function(e) {
                    return null === e ? n(e) : t(e)
                }, "whitespace")
            }
            let eB = {};

            function eO(e) {
                var t;
                let n, r, i, a = e || eB,
                    o = this.data(),
                    l = o.micromarkExtensions || (o.micromarkExtensions = []),
                    y = o.fromMarkdownExtensions || (o.fromMarkdownExtensions = []),
                    x = o.toMarkdownExtensions || (o.toMarkdownExtensions = []);
                l.push((t = a, (0, Z.y)([{
                    text: eo
                }, {
                    document: {
                        91: {
                            name: "gfmFootnoteDefinition",
                            tokenize: eb,
                            continuation: {
                                tokenize: ev
                            },
                            exit: ek
                        }
                    },
                    text: {
                        91: {
                            name: "gfmFootnoteCall",
                            tokenize: ex
                        },
                        93: {
                            name: "gfmPotentialFootnoteCall",
                            add: "after",
                            tokenize: eg,
                            resolveTo: ey
                        }
                    }
                }, (n = (t || {}).singleTilde, r = {
                    name: "strikethrough",
                    tokenize: function(e, t, r) {
                        let i = this.previous,
                            a = this.events,
                            o = 0;
                        return function(l) {
                            return 126 === i && "characterEscape" !== a[a.length - 1][1].type ? r(l) : (e.enter("strikethroughSequenceTemporary"), function a(l) {
                                let s = (0, q.S)(i);
                                if (126 === l) return o > 1 ? r(l) : (e.consume(l), o++, a);
                                if (o < 2 && !n) return r(l);
                                let u = e.exit("strikethroughSequenceTemporary"),
                                    c = (0, q.S)(l);
                                return u._open = !c || 2 === c && !!s, u._close = !s || 2 === s && !!c, t(l)
                            }(l))
                        }
                    },
                    resolveAll: function(e, t) {
                        let n = -1;
                        for (; ++n < e.length;)
                            if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                                let r = n;
                                for (; r--;)
                                    if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                        e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
                                        let i = {
                                                type: "strikethrough",
                                                start: Object.assign({}, e[r][1].start),
                                                end: Object.assign({}, e[n][1].end)
                                            },
                                            a = {
                                                type: "strikethroughText",
                                                start: Object.assign({}, e[r][1].end),
                                                end: Object.assign({}, e[n][1].start)
                                            },
                                            o = [
                                                ["enter", i, t],
                                                ["enter", e[r][1], t],
                                                ["exit", e[r][1], t],
                                                ["enter", a, t]
                                            ],
                                            l = t.parser.constructs.insideSpan.null;
                                        l && (0, ew.m)(o, o.length, 0, (0, ez.W)(l, e.slice(r + 1, n), t)), (0, ew.m)(o, o.length, 0, [
                                            ["exit", a, t],
                                            ["enter", e[n][1], t],
                                            ["exit", e[n][1], t],
                                            ["exit", i, t]
                                        ]), (0, ew.m)(e, r - 1, n - r + 3, o), n = r + o.length - 2;
                                        break
                                    }
                            } for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                        return e
                    }
                }, null == n && (n = !0), {
                    text: {
                        126: r
                    },
                    insideSpan: {
                        null: [r]
                    },
                    attentionMarkers: {
                        null: [126]
                    }
                }), {
                    flow: {
                        null: {
                            name: "table",
                            tokenize: eA,
                            resolveAll: eT
                        }
                    }
                }, {
                    text: {
                        91: eR
                    }
                }]))), y.push([{
                    transforms: [g],
                    enter: {
                        literalAutolink: c,
                        literalAutolinkEmail: h,
                        literalAutolinkHttp: h,
                        literalAutolinkWww: h
                    },
                    exit: {
                        literalAutolink: d,
                        literalAutolinkEmail: f,
                        literalAutolinkHttp: p,
                        literalAutolinkWww: m
                    }
                }, {
                    enter: {
                        gfmFootnoteCallString: k,
                        gfmFootnoteCall: w,
                        gfmFootnoteDefinitionLabelString: z,
                        gfmFootnoteDefinition: S
                    },
                    exit: {
                        gfmFootnoteCallString: A,
                        gfmFootnoteCall: T,
                        gfmFootnoteDefinitionLabelString: M,
                        gfmFootnoteDefinition: C
                    }
                }, {
                    canContainEols: ["delete"],
                    enter: {
                        strikethrough: O
                    },
                    exit: {
                        strikethrough: P
                    }
                }, {
                    enter: {
                        table: U,
                        tableData: X,
                        tableHeader: X,
                        tableRow: _
                    },
                    exit: {
                        codeText: K,
                        table: V,
                        tableData: j,
                        tableHeader: j,
                        tableRow: j
                    }
                }, {
                    exit: {
                        taskListCheckValueChecked: G,
                        taskListCheckValueUnchecked: G,
                        paragraph: Y
                    }
                }]), x.push({
                    extensions: [{
                        unsafe: [{
                            character: "@",
                            before: "[+\\-.\\w]",
                            after: "[\\-.\\w]",
                            inConstruct: s,
                            notInConstruct: u
                        }, {
                            character: ".",
                            before: "[Ww]",
                            after: "[\\-.\\w]",
                            inConstruct: s,
                            notInConstruct: u
                        }, {
                            character: ":",
                            before: "[ps]",
                            after: "\\/",
                            inConstruct: s,
                            notInConstruct: u
                        }]
                    }, (i = !1, a && a.firstLineBlank && (i = !0), {
                        handlers: {
                            footnoteDefinition: function(e, t, n, r) {
                                let a = n.createTracker(r),
                                    o = a.move("[^"),
                                    l = n.enter("footnoteDefinition"),
                                    s = n.enter("label");
                                return o += a.move(n.safe(n.associationId(e), {
                                    before: o,
                                    after: "]"
                                })), s(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((i ? "\n" : " ") + n.indentLines(n.containerFlow(e, a.current()), i ? I : R))), l(), o
                            },
                            footnoteReference: E
                        },
                        unsafe: [{
                            character: "[",
                            inConstruct: ["label", "phrasing", "reference"]
                        }]
                    }), {
                        unsafe: [{
                            character: "~",
                            inConstruct: "phrasing",
                            notInConstruct: B
                        }],
                        handlers: {
                            delete: L
                        }
                    }, function(e) {
                        let t = e || {},
                            n = t.tableCellPadding,
                            r = t.tablePipeAlign,
                            i = t.stringLength,
                            a = n ? " " : "|";
                        return {
                            unsafe: [{
                                character: "\r",
                                inConstruct: "tableCell"
                            }, {
                                character: "\n",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: "|",
                                after: "[	 :-]"
                            }, {
                                character: "|",
                                inConstruct: "tableCell"
                            }, {
                                atBreak: !0,
                                character: ":",
                                after: "-"
                            }, {
                                atBreak: !0,
                                character: "-",
                                after: "[:|-]"
                            }],
                            handlers: {
                                inlineCode: function(e, t, n) {
                                    let r = H(e, t, n);
                                    return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
                                },
                                table: function(e, t, n, r) {
                                    return l(function(e, t, n) {
                                        let r = e.children,
                                            i = -1,
                                            a = [],
                                            o = t.enter("table");
                                        for (; ++i < r.length;) a[i] = s(r[i], t, n);
                                        return o(), a
                                    }(e, n, r), e.align)
                                },
                                tableCell: o,
                                tableRow: function(e, t, n, r) {
                                    let i = l([s(e, n, r)]);
                                    return i.slice(0, i.indexOf("\n"))
                                }
                            }
                        };

                        function o(e, t, n, r) {
                            let i = n.enter("tableCell"),
                                o = n.enter("phrasing"),
                                l = n.containerPhrasing(e, {
                                    ...r,
                                    before: a,
                                    after: a
                                });
                            return o(), i(), l
                        }

                        function l(e, t) {
                            return function(e, t) {
                                let n = t || {},
                                    r = (n.align || []).concat(),
                                    i = n.stringLength || D,
                                    a = [],
                                    o = [],
                                    l = [],
                                    s = [],
                                    u = 0,
                                    c = -1;
                                for (; ++c < e.length;) {
                                    let t = [],
                                        r = [],
                                        a = -1;
                                    for (e[c].length > u && (u = e[c].length); ++a < e[c].length;) {
                                        var h;
                                        let o = null == (h = e[c][a]) ? "" : String(h);
                                        if (!1 !== n.alignDelimiters) {
                                            let e = i(o);
                                            r[a] = e, (void 0 === s[a] || e > s[a]) && (s[a] = e)
                                        }
                                        t.push(o)
                                    }
                                    o[c] = t, l[c] = r
                                }
                                let p = -1;
                                if ("object" == typeof r && "length" in r)
                                    for (; ++p < u;) a[p] = N(r[p]);
                                else {
                                    let e = N(r);
                                    for (; ++p < u;) a[p] = e
                                }
                                p = -1;
                                let m = [],
                                    f = [];
                                for (; ++p < u;) {
                                    let e = a[p],
                                        t = "",
                                        r = "";
                                    99 === e ? (t = ":", r = ":") : 108 === e ? t = ":" : 114 === e && (r = ":");
                                    let i = !1 === n.alignDelimiters ? 1 : Math.max(1, s[p] - t.length - r.length),
                                        o = t + "-".repeat(i) + r;
                                    !1 !== n.alignDelimiters && ((i = t.length + i + r.length) > s[p] && (s[p] = i), f[p] = i), m[p] = o
                                }
                                o.splice(1, 0, m), l.splice(1, 0, f), c = -1;
                                let d = [];
                                for (; ++c < o.length;) {
                                    let e = o[c],
                                        t = l[c];
                                    p = -1;
                                    let r = [];
                                    for (; ++p < u;) {
                                        let i = e[p] || "",
                                            o = "",
                                            l = "";
                                        if (!1 !== n.alignDelimiters) {
                                            let e = s[p] - (t[p] || 0),
                                                n = a[p];
                                            114 === n ? o = " ".repeat(e) : 99 === n ? e % 2 ? (o = " ".repeat(e / 2 + .5), l = " ".repeat(e / 2 - .5)) : l = o = " ".repeat(e / 2) : l = " ".repeat(e)
                                        }!1 === n.delimiterStart || p || r.push("|"), !1 !== n.padding && (!1 !== n.alignDelimiters || "" !== i) && (!1 !== n.delimiterStart || p) && r.push(" "), !1 !== n.alignDelimiters && r.push(o), r.push(i), !1 !== n.alignDelimiters && r.push(l), !1 !== n.padding && r.push(" "), (!1 !== n.delimiterEnd || p !== u - 1) && r.push("|")
                                    }
                                    d.push(!1 === n.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""))
                                }
                                return d.join("\n")
                            }(e, {
                                align: t,
                                alignDelimiters: r,
                                padding: n,
                                stringLength: i
                            })
                        }

                        function s(e, t, n) {
                            let r = e.children,
                                i = -1,
                                a = [],
                                l = t.enter("tableRow");
                            for (; ++i < r.length;) a[i] = o(r[i], e, t, n);
                            return l(), a
                        }
                    }(a), {
                        unsafe: [{
                            atBreak: !0,
                            character: "-",
                            after: "[:|-]"
                        }],
                        handlers: {
                            listItem: $
                        }
                    }]
                })
            }
        },
        34185: function(e, t, n) {
            n.d(t, {
                A: () => p
            });
            var r = n(31364),
                i = n(49527),
                a = n(81416),
                o = n(37535);
            let l = {
                    tokenize: function(e, t, n) {
                        let r = this,
                            i = r.events[r.events.length - 1],
                            l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0,
                            u = 0;
                        return function(t) {
                            return e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                function t(r) {
                                    return 36 === r ? (e.consume(r), u++, t) : u < 2 ? n(r) : (e.exit("mathFlowFenceSequence"), (0, a.N)(e, c, "whitespace")(r))
                                }(t)
                        };

                        function c(t) {
                            return null === t || (0, o.HP)(t) ? h(t) : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", {
                                contentType: "string"
                            }), function t(r) {
                                return null === r || (0, o.HP)(r) ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), h(r)) : 36 === r ? n(r) : (e.consume(r), t)
                            }(t))
                        }

                        function h(n) {
                            return (e.exit("mathFlowFence"), r.interrupt) ? t(n) : e.attempt(s, p, d)(n)
                        }

                        function p(t) {
                            return e.attempt({
                                tokenize: g,
                                partial: !0
                            }, d, m)(t)
                        }

                        function m(t) {
                            return (l ? (0, a.N)(e, f, "linePrefix", l + 1) : f)(t)
                        }

                        function f(t) {
                            return null === t ? d(t) : (0, o.HP)(t) ? e.attempt(s, p, d)(t) : (e.enter("mathFlowValue"), function t(n) {
                                return null === n || (0, o.HP)(n) ? (e.exit("mathFlowValue"), f(n)) : (e.consume(n), t)
                            }(t))
                        }

                        function d(n) {
                            return e.exit("mathFlow"), t(n)
                        }

                        function g(e, t, n) {
                            let i = 0;
                            return (0, a.N)(e, function(t) {
                                return e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                    function t(r) {
                                        return 36 === r ? (i++, e.consume(r), t) : i < u ? n(r) : (e.exit("mathFlowFenceSequence"), (0, a.N)(e, l, "whitespace")(r))
                                    }(t)
                            }, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                            function l(r) {
                                return null === r || (0, o.HP)(r) ? (e.exit("mathFlowFence"), t(r)) : n(r)
                            }
                        }
                    },
                    concrete: !0,
                    name: "mathFlow"
                },
                s = {
                    tokenize: function(e, t, n) {
                        let r = this;
                        return function(n) {
                            return null === n ? t(n) : (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i)
                        };

                        function i(e) {
                            return r.parser.lazy[r.now().line] ? n(e) : t(e)
                        }
                    },
                    partial: !0
                };

            function u(e) {
                let t, n, r = e.length - 4,
                    i = 3;
                if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                    for (t = i; ++t < r;)
                        if ("mathTextData" === e[t][1].type) {
                            e[r][1].type = "mathTextPadding", e[i][1].type = "mathTextPadding", i += 2, r -= 2;
                            break
                        }
                }
                for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "mathTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                return e
            }

            function c(e) {
                return 36 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
            }
            let h = {};

            function p(e) {
                let t, n = e || h,
                    a = this.data(),
                    s = a.micromarkExtensions || (a.micromarkExtensions = []),
                    p = a.fromMarkdownExtensions || (a.fromMarkdownExtensions = []),
                    m = a.toMarkdownExtensions || (a.toMarkdownExtensions = []);
                s.push({
                    flow: {
                        36: l
                    },
                    text: {
                        36: (null == (t = (n || {}).singleDollarTextMath) && (t = !0), {
                            tokenize: function(e, n, r) {
                                let i, a, l = 0;
                                return function(n) {
                                    return e.enter("mathText"), e.enter("mathTextSequence"),
                                        function n(i) {
                                            return 36 === i ? (e.consume(i), l++, n) : l < 2 && !t ? r(i) : (e.exit("mathTextSequence"), s(i))
                                        }(n)
                                };

                                function s(t) {
                                    return null === t ? r(t) : 36 === t ? (a = e.enter("mathTextSequence"), i = 0, function t(r) {
                                        return 36 === r ? (e.consume(r), i++, t) : i === l ? (e.exit("mathTextSequence"), e.exit("mathText"), n(r)) : (a.type = "mathTextData", u(r))
                                    }(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), s) : (0, o.HP)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s) : (e.enter("mathTextData"), u(t))
                                }

                                function u(t) {
                                    return null === t || 32 === t || 36 === t || (0, o.HP)(t) ? (e.exit("mathTextData"), s(t)) : (e.consume(t), u)
                                }
                            },
                            resolve: u,
                            previous: c,
                            name: "mathText"
                        })
                    }
                }), p.push(function() {
                    return {
                        enter: {
                            mathFlow: function(e) {
                                this.enter({
                                    type: "math",
                                    meta: null,
                                    value: "",
                                    data: {
                                        hName: "pre",
                                        hChildren: [{
                                            type: "element",
                                            tagName: "code",
                                            properties: {
                                                className: ["language-math", "math-display"]
                                            },
                                            children: []
                                        }]
                                    }
                                }, e)
                            },
                            mathFlowFenceMeta: function() {
                                this.buffer()
                            },
                            mathText: function(e) {
                                this.enter({
                                    type: "inlineMath",
                                    value: "",
                                    data: {
                                        hName: "code",
                                        hProperties: {
                                            className: ["language-math", "math-inline"]
                                        },
                                        hChildren: []
                                    }
                                }, e), this.buffer()
                            }
                        },
                        exit: {
                            mathFlow: function(e) {
                                let t = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                                    n = this.stack[this.stack.length - 1];
                                (0, r.ok)("math" === n.type), this.exit(e), n.value = t;
                                let i = n.data.hChildren[0];
                                (0, r.ok)("element" === i.type), (0, r.ok)("code" === i.tagName), i.children.push({
                                    type: "text",
                                    value: t
                                }), this.data.mathFlowInside = void 0
                            },
                            mathFlowFence: function() {
                                this.data.mathFlowInside || (this.buffer(), this.data.mathFlowInside = !0)
                            },
                            mathFlowFenceMeta: function() {
                                let e = this.resume(),
                                    t = this.stack[this.stack.length - 1];
                                (0, r.ok)("math" === t.type), t.meta = e
                            },
                            mathFlowValue: e,
                            mathText: function(e) {
                                let t = this.resume(),
                                    n = this.stack[this.stack.length - 1];
                                (0, r.ok)("inlineMath" === n.type), this.exit(e), n.value = t, n.data.hChildren.push({
                                    type: "text",
                                    value: t
                                })
                            },
                            mathTextData: e
                        }
                    };

                    function e(e) {
                        this.config.enter.data.call(this, e), this.config.exit.data.call(this, e)
                    }
                }()), m.push(function(e) {
                    let t = (e || {}).singleDollarTextMath;
                    return null == t && (t = !0), n.peek = function() {
                        return "$"
                    }, {
                        unsafe: [{
                            character: "\r",
                            inConstruct: "mathFlowMeta"
                        }, {
                            character: "\n",
                            inConstruct: "mathFlowMeta"
                        }, {
                            character: "$",
                            after: t ? void 0 : "\\$",
                            inConstruct: "phrasing"
                        }, {
                            character: "$",
                            inConstruct: "mathFlowMeta"
                        }, {
                            atBreak: !0,
                            character: "$",
                            after: "\\$"
                        }],
                        handlers: {
                            math: function(e, t, n, r) {
                                let a = e.value || "",
                                    o = n.createTracker(r),
                                    l = "$".repeat(Math.max((0, i.D)(a, "$") + 1, 2)),
                                    s = n.enter("mathFlow"),
                                    u = o.move(l);
                                if (e.meta) {
                                    let t = n.enter("mathFlowMeta");
                                    u += o.move(n.safe(e.meta, {
                                        after: "\n",
                                        before: u,
                                        encode: ["$"],
                                        ...o.current()
                                    })), t()
                                }
                                return u += o.move("\n"), a && (u += o.move(a + "\n")), u += o.move(l), s(), u
                            },
                            inlineMath: n
                        }
                    };

                    function n(e, n, r) {
                        let i = e.value || "",
                            a = 1;
                        for (!t && a++; RegExp("(^|[^$])" + "\\$".repeat(a) + "([^$]|$)").test(i);) a++;
                        let o = "$".repeat(a);
                        /[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^\$|\$$/.test(i)) && (i = " " + i + " ");
                        let l = -1;
                        for (; ++l < r.unsafe.length;) {
                            let e, t = r.unsafe[l];
                            if (!t.atBreak) continue;
                            let n = r.compilePattern(t);
                            for (; e = n.exec(i);) {
                                let t = e.index;
                                10 === i.codePointAt(t) && 13 === i.codePointAt(t - 1) && t--, i = i.slice(0, t) + " " + i.slice(e.index + 1)
                            }
                        }
                        return o + i + o
                    }
                }(n))
            }
        },
        2501: function(e, t, n) {
            function r(e) {
                let t = String(e || "").trim();
                return t ? t.split(/[ \t\n\r\f]+/g) : []
            }

            function i(e) {
                return e.join(" ").trim()
            }
            n.d(t, {
                A: () => i,
                q: () => r
            })
        },
        88861: function(e, t, n) {
            var r = (this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                })(n(20938)),
                i = n(4613);

            function a(e, t) {
                var n = {};
                return e && "string" == typeof e && (0, r.default)(e, function(e, r) {
                    e && r && (n[(0, i.camelCase)(e, t)] = r)
                }), n
            }
            a.default = a, e.exports = a
        },
        4613: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.camelCase = void 0;
            var n = /^--[a-zA-Z0-9_-]+$/,
                r = /-([a-z])/g,
                i = /^[^-]+$/,
                a = /^-(webkit|moz|ms|o|khtml)-/,
                o = /^-(ms)-/,
                l = function(e, t) {
                    return t.toUpperCase()
                },
                s = function(e, t) {
                    return "".concat(t, "-")
                };
            t.camelCase = function(e, t) {
                var u;
                return (void 0 === t && (t = {}), !(u = e) || i.test(u) || n.test(u)) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(o, s) : e.replace(a, s)).replace(r, l))
            }
        },
        20938: function(e, t, n) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                let n = null;
                if (!e || "string" != typeof e) return n;
                let r = (0, i.default)(e),
                    a = "function" == typeof t;
                return r.forEach(e => {
                    if ("declaration" !== e.type) return;
                    let {
                        property: r,
                        value: i
                    } = e;
                    a ? t(r, i, e) : i && ((n = n || {})[r] = i)
                }), n
            };
            let i = r(n(85215))
        },
        55253: function(e, t, n) {
            n.d(t, {
                C: () => r
            });
            let r = function(e) {
                var t, n;
                if (null == e) return a;
                if ("function" == typeof e) return i(e);
                if ("object" == typeof e) {
                    return Array.isArray(e) ? function(e) {
                        let t = [],
                            n = -1;
                        for (; ++n < e.length;) t[n] = r(e[n]);
                        return i(function() {
                            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            let i = -1;
                            for (; ++i < t.length;)
                                if (t[i].apply(this, n)) return !0;
                            return !1
                        })
                    }(e) : (t = e, i(function(e) {
                        let n;
                        for (n in t)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }))
                }
                if ("string" == typeof e) {
                    return n = e, i(function(e) {
                        return e && e.type === n
                    })
                }
                throw Error("Expected function, string, or object as test")
            };

            function i(e) {
                return function(t, n, r) {
                    return !!(function(e) {
                        return null !== e && "object" == typeof e && "type" in e
                    }(t) && e.call(this, t, "number" == typeof n ? n : void 0, r || void 0))
                }
            }

            function a() {
                return !0
            }
        },
        58592: function(e, t, n) {
            n.d(t, {
                G1: () => o,
                PW: () => i,
                Y: () => r
            });
            let r = a("end"),
                i = a("start");

            function a(e) {
                return function(t) {
                    let n = t && t.position && t.position[e] || {};
                    if ("number" == typeof n.line && n.line > 0 && "number" == typeof n.column && n.column > 0) return {
                        line: n.line,
                        column: n.column,
                        offset: "number" == typeof n.offset && n.offset > -1 ? n.offset : void 0
                    }
                }
            }

            function o(e) {
                let t = i(e),
                    n = r(e);
                if (t && n) return {
                    start: t,
                    end: n
                }
            }
        },
        84964: function(e, t, n) {
            n.d(t, {
                _Z: () => o,
                dc: () => a,
                VG: () => l
            });
            var r = n(55253);
            let i = [],
                a = !1,
                o = "skip";

            function l(e, t, n, l) {
                let s;
                "function" == typeof t && "function" != typeof n ? (l = n, n = t) : s = t;
                let u = (0, r.C)(s),
                    c = l ? -1 : 1;
                (function e(r, s, h) {
                    let p = r && "object" == typeof r ? r : {};
                    if ("string" == typeof p.type) {
                        let e = "string" == typeof p.tagName ? p.tagName : "string" == typeof p.name ? p.name : void 0;
                        Object.defineProperty(m, "name", {
                            value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")"
                        })
                    }
                    return m;

                    function m() {
                        var p;
                        let m, f, d, g = i;
                        if ((!t || u(r, s, h[h.length - 1] || void 0)) && (g = Array.isArray(p = n(r, h)) ? p : "number" == typeof p ? [!0, p] : null == p ? i : [p])[0] === a) return g;
                        if ("children" in r && r.children && r.children && g[0] !== o)
                            for (f = (l ? r.children.length : -1) + c, d = h.concat(r); f > -1 && f < r.children.length;) {
                                if ((m = e(r.children[f], f, d)())[0] === a) return m;
                                f = "number" == typeof m[1] ? m[1] : f + c
                            }
                        return g
                    }
                })(e, void 0, [])()
            }
        },
        7250: function(e, t, n) {
            n.d(t, {
                YR: () => i
            });
            var r = n(84964);

            function i(e, t, n, i) {
                let a, o, l;
                "function" == typeof t && "function" != typeof n ? (o = void 0, l = t, a = n) : (o = t, l = n, a = i), (0, r.VG)(e, o, function(e, t) {
                    let n = t[t.length - 1],
                        r = n ? n.children.indexOf(e) : void 0;
                    return l(e, r, n)
                }, a)
            }
        }
    }
]);
//# sourceMappingURL=4768.df3b5daa.js.map