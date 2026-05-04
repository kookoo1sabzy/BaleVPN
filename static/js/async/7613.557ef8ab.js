/*! For license information please see 7613.557ef8ab.js.LICENSE.txt */
try {
    ! function() {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "35f56e1c-963f-4729-b0fb-d9441141a66c", t._sentryDebugIdIdentifier = "sentry-dbid-35f56e1c-963f-4729-b0fb-d9441141a66c")
    }()
} catch (t) {}
try {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
        id: "web@4.17.0+151668"
    }
} catch (t) {}(self.webpackChunkweb = self.webpackChunkweb || []).push([
    ["7613"], {
        39202: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => m
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r),
                a = i(90136),
                l = i.n(a),
                h = new URL(i(21605), i.b),
                d = new URL(i(24734), i.b),
                u = new URL(i(51355), i.b),
                c = s()(o()),
                p = l()(h),
                f = l()(d),
                _ = l()(u);
            c.push([t.id, `.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;top:0;left:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:0 0}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{-webkit-transform-origin:0 0;width:1600px;height:1600px}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{width:auto;padding:0;max-width:none!important;max-height:none!important}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{box-sizing:border-box;z-index:800;width:0;height:0}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{z-index:800;pointer-events:visiblePainted;pointer-events:auto;position:relative}.leaflet-top,.leaflet-bottom{z-index:1000;pointer-events:none;position:absolute}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{outline-offset:1px;background:#ddd}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{background:rgba(255,255,255,.5);border:2px dotted #38f}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:.75rem;line-height:1.5}.leaflet-bar{border-radius:4px;box-shadow:0 1px 5px rgba(0,0,0,.65)}.leaflet-bar a{text-align:center;color:#000;background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;text-decoration:none;display:block}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom:none;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.leaflet-bar a.leaflet-disabled{cursor:default;color:#bbb;background-color:#f4f4f4}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{text-indent:1px;font:700 18px Lucida Console,Monaco,monospace}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{background:#fff;border-radius:5px;box-shadow:0 1px 5px rgba(0,0,0,.4)}.leaflet-control-layers-toggle{background-image:url(${p});width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(${f});background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{color:#333;background:#fff;padding:6px 10px 6px 6px}.leaflet-control-layers-scrollbar{padding-right:5px;overflow:hidden scroll}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{font-size:1.08333em;display:block}.leaflet-control-layers-separator{border-top:1px solid #ddd;height:0;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(${_})}.leaflet-container .leaflet-control-attribution{background:rgba(255,255,255,.8);margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{color:#333;padding:0 5px;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{width:1em;height:.6669em;vertical-align:baseline!important;display:inline!important}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{white-space:nowrap;box-sizing:border-box;text-shadow:1px 1px #fff;background:rgba(255,255,255,.8);border:2px solid #777;border-top:none;padding:2px 5px 1px;line-height:1.1}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{background-clip:padding-box;border:2px solid rgba(0,0,0,.2)}.leaflet-popup{text-align:center;margin-bottom:20px;position:absolute}.leaflet-popup-content-wrapper{text-align:left;border-radius:12px;padding:1px}.leaflet-popup-content{min-height:1px;margin:13px 24px 13px 20px;font-size:1.08333em;line-height:1.3}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{pointer-events:none;width:40px;height:20px;margin-top:-1px;margin-left:-20px;position:absolute;left:50%;overflow:hidden}.leaflet-popup-tip{pointer-events:auto;width:17px;height:17px;margin:-10px auto 0;padding:1px;transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{color:#333;background:#fff;box-shadow:0 3px 14px rgba(0,0,0,.4)}.leaflet-container a.leaflet-popup-close-button{text-align:center;color:#757575;background:0 0;border:none;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;text-decoration:none;position:absolute;top:0;right:0}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";width:24px;filter:progid:DXImageTransform.Microsoft.Matrix(M11=.707107,M12=.707107,M21=-.707107,M22=.707107);margin:0 auto}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{color:#222;white-space:nowrap;-webkit-user-select:none;user-select:none;pointer-events:none;background-color:#fff;border:1px solid #fff;border-radius:3px;padding:6px;position:absolute;box-shadow:0 1px 3px rgba(0,0,0,.4)}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{pointer-events:none;content:"";background:0 0;border:6px solid transparent;position:absolute}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{margin-left:-6px;left:50%}.leaflet-tooltip-top:before{border-top-color:#fff;margin-bottom:-12px;bottom:0}.leaflet-tooltip-bottom:before{border-bottom-color:#fff;margin-top:-12px;margin-left:-6px;top:0}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{margin-top:-6px;top:50%}.leaflet-tooltip-left:before{border-left-color:#fff;margin-right:-12px;right:0}.leaflet-tooltip-right:before{border-right-color:#fff;margin-left:-12px;left:0}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`, ""]);
            let m = c
        },
        17945: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => a
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r)()(o());
            s.push([t.id, ':root{--rc-drag-handle-size:12px;--rc-drag-handle-mobile-size:24px;--rc-drag-handle-bg-colour:rgba(0,0,0,.2);--rc-drag-bar-size:6px;--rc-border-color:rgba(255,255,255,.7);--rc-focus-color:#08f}.ReactCrop{cursor:crosshair;max-width:100%;display:inline-block;position:relative}.ReactCrop *,.ReactCrop :before,.ReactCrop :after{box-sizing:border-box}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__child-wrapper{max-height:inherit;overflow:hidden}.ReactCrop__child-wrapper>img,.ReactCrop__child-wrapper>video{max-width:100%;max-height:inherit;display:block}.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>img,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__child-wrapper>video,.ReactCrop:not(.ReactCrop--disabled) .ReactCrop__crop-selection{touch-action:none}.ReactCrop__crop-mask{pointer-events:none;position:absolute;inset:0}.ReactCrop__crop-selection{cursor:move;position:absolute;top:0;left:0;transform:translateZ(0)}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop--circular-crop .ReactCrop__crop-selection{border-radius:50%}.ReactCrop--circular-crop .ReactCrop__crop-selection:after{pointer-events:none;content:"";border:1px solid var(--rc-border-color);opacity:.3;position:absolute;inset:-1px}.ReactCrop--no-animate .ReactCrop__crop-selection{outline:1px dashed #fff}.ReactCrop__crop-selection:not(.ReactCrop--no-animate .ReactCrop__crop-selection){color:#fff;background-image:linear-gradient(90deg,#fff 50%,#444 50%),linear-gradient(90deg,#fff 50%,#444 50%),linear-gradient(#fff 50%,#444 50%),linear-gradient(#fff 50%,#444 50%);background-position:0 0,0 100%,0 0,100% 0;background-repeat:repeat-x,repeat-x,repeat-y,repeat-y;background-size:10px 1px,10px 1px,1px 10px,1px 10px;animation:1s linear infinite marching-ants}@keyframes marching-ants{0%{background-position:0 0,0 100%,0 0,100% 0}to{background-position:20px 0,-20px 100%,0 -20px,100% 20px}}.ReactCrop__crop-selection:focus{outline:2px solid var(--rc-focus-color);outline-offset:-1px}.ReactCrop--invisible-crop .ReactCrop__crop-mask,.ReactCrop--invisible-crop .ReactCrop__crop-selection{display:none}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after,.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{content:"";background-color:rgba(255,255,255,.4);display:block;position:absolute}.ReactCrop__rule-of-thirds-vt:before,.ReactCrop__rule-of-thirds-vt:after{width:1px;height:100%}.ReactCrop__rule-of-thirds-vt:before{left:33.3333%}.ReactCrop__rule-of-thirds-vt:after{left:66.6667%}.ReactCrop__rule-of-thirds-hz:before,.ReactCrop__rule-of-thirds-hz:after{width:100%;height:1px}.ReactCrop__rule-of-thirds-hz:before{top:33.3333%}.ReactCrop__rule-of-thirds-hz:after{top:66.6667%}.ReactCrop__drag-handle{width:var(--rc-drag-handle-size);height:var(--rc-drag-handle-size);background-color:var(--rc-drag-handle-bg-colour);border:1px solid var(--rc-border-color);position:absolute}.ReactCrop__drag-handle:focus{background:var(--rc-focus-color)}.ReactCrop .ord-nw{cursor:nw-resize;top:0;left:0;transform:translate(-50%,-50%)}.ReactCrop .ord-n{cursor:n-resize;top:0;left:50%;transform:translate(-50%,-50%)}.ReactCrop .ord-ne{cursor:ne-resize;top:0;right:0;transform:translate(50%,-50%)}.ReactCrop .ord-e{cursor:e-resize;top:50%;right:0;transform:translate(50%,-50%)}.ReactCrop .ord-se{cursor:se-resize;bottom:0;right:0;transform:translate(50%,50%)}.ReactCrop .ord-s{cursor:s-resize;bottom:0;left:50%;transform:translate(-50%,50%)}.ReactCrop .ord-sw{cursor:sw-resize;bottom:0;left:0;transform:translate(-50%,50%)}.ReactCrop .ord-w{cursor:w-resize;top:50%;left:0;transform:translate(-50%,-50%)}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{width:100%;height:var(--rc-drag-bar-size);top:0;left:0;transform:translateY(-50%)}.ReactCrop__drag-bar.ord-e{width:var(--rc-drag-bar-size);height:100%;top:0;right:0;transform:translate(50%)}.ReactCrop__drag-bar.ord-s{width:100%;height:var(--rc-drag-bar-size);bottom:0;left:0;transform:translateY(50%)}.ReactCrop__drag-bar.ord-w{width:var(--rc-drag-bar-size);height:100%;top:0;left:0;transform:translate(-50%)}.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle,.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w{display:none}@media (pointer:coarse){.ReactCrop .ord-n,.ReactCrop .ord-e,.ReactCrop .ord-s,.ReactCrop .ord-w{display:none}.ReactCrop__drag-handle{width:var(--rc-drag-handle-mobile-size);height:var(--rc-drag-handle-mobile-size)}}', ""]);
            let a = s
        },
        99400: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => a
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r)()(o());
            s.push([t.id, ".swiper-lazy-preloader{z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-top-color:transparent;border-radius:50%;width:42px;height:42px;margin-top:-21px;margin-left:-21px;position:absolute;top:50%;left:50%}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:1s linear infinite swiper-preloader-spin}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}", ""]);
            let a = s
        },
        84820: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => a
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r)()(o());
            s.push([t.id, ':root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/2));z-index:10;cursor:pointer;color:var(--swiper-navigation-color,var(--swiper-theme-color));justify-content:center;align-items:center;display:flex;position:absolute;top:50%}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);letter-spacing:0;font-variant:initial;line-height:1;text-transform:none!important}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}', ""]);
            let a = s
        },
        49394: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => a
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r)()(o());
            s.push([t.id, "", ""]);
            let a = s
        },
        76089: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: () => c
            });
            var n = i(46756),
                o = i.n(n),
                r = i(5421),
                s = i.n(r),
                a = i(90136),
                l = i.n(a),
                h = new URL(i(56085), i.b),
                d = s()(o()),
                u = l()(h);
            d.push([t.id, `@font-face{font-family:swiper-icons;src:url(${u});font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{z-index:1;margin-left:auto;margin-right:auto;padding:0;list-style:none;position:relative;overflow:hidden}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{z-index:1;box-sizing:content-box;width:100%;height:100%;transition-property:transform;display:flex;position:relative}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate(0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;transition-property:transform;position:relative}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0)}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{pointer-events:none;z-index:10;width:100%;height:100%;position:absolute;top:0;left:0}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(transparent,rgba(0,0,0,.5))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(rgba(0,0,0,.5),transparent)}.swiper-css-mode>.swiper-wrapper{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}`, ""]);
            let c = d
        },
        35364: function(t, e, i) {
            "use strict";
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(39202),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m), _.A && _.A.locals && _.A.locals
        },
        68679: function(t, e, i) {
            "use strict";
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(17945),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m), _.A && _.A.locals && _.A.locals
        },
        80422: function(t, e, i) {
            "use strict";
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(99400),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m), _.A && _.A.locals && _.A.locals
        },
        72418: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: () => g
            });
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(84820),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m);
            let g = _.A && _.A.locals ? _.A.locals : void 0
        },
        40456: function(t, e, i) {
            "use strict";
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(49394),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m), _.A && _.A.locals && _.A.locals
        },
        93879: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: () => g
            });
            var n = i(53321),
                o = i.n(n),
                r = i(23518),
                s = i.n(r),
                a = i(14182),
                l = i.n(a),
                h = i(5033),
                d = i.n(h),
                u = i(77141),
                c = i.n(u),
                p = i(66338),
                f = i.n(p),
                _ = i(76089),
                m = {};
            m.styleTagTransform = f(), m.setAttributes = d(), m.insert = l().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = c(), o()(_.A, m);
            let g = _.A && _.A.locals ? _.A.locals : void 0
        },
        24734: function(t, e, i) {
            "use strict";
            t.exports = i.p + "static/image/layers-2x.9859cd12.png"
        },
        21605: function(t, e, i) {
            "use strict";
            t.exports = i.p + "static/image/layers.ef6db872.png"
        },
        51355: function(t, e, i) {
            "use strict";
            t.exports = i.p + "static/image/marker-icon.d577052a.png"
        },
        72521: function(t, e, i) {
            "use strict";
            i.d(e, {
                U$: () => a,
                fB: () => o,
                hL: () => s
            });
            var n = i(58191);

            function o(t) {
                return Object.freeze({
                    __version: 1,
                    map: t
                })
            }
            let r = (0, n.createContext)(null),
                s = r.Provider;

            function a() {
                let t = (0, n.useContext)(r);
                if (null == t) throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
                return t
            }
        },
        83426: function(t, e) {
            (function(t) {
                "use strict";

                function e(t) {
                    var e, i, n, o;
                    for (i = 1, n = arguments.length; i < n; i++)
                        for (e in o = arguments[i]) t[e] = o[e];
                    return t
                }
                var i, n, o, r, s, a, l, h, d, u, c = Object.create || function() {
                    function t() {}
                    return function(e) {
                        return t.prototype = e, new t
                    }
                }();

                function p(t, e) {
                    var i = Array.prototype.slice;
                    if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
                    var n = i.call(arguments, 2);
                    return function() {
                        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
                    }
                }
                var f = 0;

                function _(t) {
                    return "_leaflet_id" in t || (t._leaflet_id = ++f), t._leaflet_id
                }

                function m(t, e, i) {
                    var n, o, r, s;
                    return s = function() {
                        n = !1, o && (r.apply(i, o), o = !1)
                    }, r = function() {
                        n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0)
                    }
                }

                function g(t, e, i) {
                    var n = e[1],
                        o = e[0],
                        r = n - o;
                    return t === n && i ? t : ((t - o) % r + r) % r + o
                }

                function v() {
                    return !1
                }

                function y(t, e) {
                    if (!1 === e) return t;
                    var i = Math.pow(10, void 0 === e ? 6 : e);
                    return Math.round(t * i) / i
                }

                function x(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }

                function w(t) {
                    return x(t).split(/\s+/)
                }

                function b(t, e) {
                    for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? c(t.options) : {}), e) t.options[i] = e[i];
                    return t.options
                }

                function C(t, e, i) {
                    var n = [];
                    for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                    return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                }
                var T = /\{ *([\w_ -]+) *\}/g;

                function P(t, e) {
                    return t.replace(T, function(t, i) {
                        var n = e[i];
                        if (void 0 === n) throw Error("No value provided for variable " + t);
                        return "function" == typeof n && (n = n(e)), n
                    })
                }
                var I = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };

                function z(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e) return i;
                    return -1
                }
                var S = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

                function M(t) {
                    return window["webkit" + t] || window["moz" + t] || window["ms" + t]
                }
                var E = 0;

                function k(t) {
                    var e = +new Date,
                        i = Math.max(0, 16 - (e - E));
                    return E = e + i, window.setTimeout(t, i)
                }
                var A = window.requestAnimationFrame || M("RequestAnimationFrame") || k,
                    R = window.cancelAnimationFrame || M("CancelAnimationFrame") || M("CancelRequestAnimationFrame") || function(t) {
                        window.clearTimeout(t)
                    };

                function N(t, e, i) {
                    if (!i || A !== k) return A.call(window, p(t, e));
                    t.call(e)
                }

                function O(t) {
                    t && R.call(window, t)
                }

                function Z() {}
                Z.extend = function(t) {
                    var i = function() {
                            b(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                        },
                        n = i.__super__ = this.prototype,
                        o = c(n);
                    for (var r in o.constructor = i, i.prototype = o, this) Object.prototype.hasOwnProperty.call(this, r) && "prototype" !== r && "__super__" !== r && (i[r] = this[r]);
                    return t.statics && e(i, t.statics), t.includes && (function(t) {
                        if ("undefined" != typeof L && L && L.Mixin) {
                            t = I(t) ? t : [t];
                            for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", Error().stack)
                        }
                    }(t.includes), e.apply(null, [o].concat(t.includes))), e(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? c(n.options) : {}, e(o.options, t.options)), o._initHooks = [], o.callInitHooks = function() {
                        if (!this._initHooksCalled) {
                            n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this)
                        }
                    }, i
                }, Z.include = function(t) {
                    var i = this.prototype.options;
                    return e(this.prototype, t), t.options && (this.prototype.options = i, this.mergeOptions(t.options)), this
                }, Z.mergeOptions = function(t) {
                    return e(this.prototype.options, t), this
                }, Z.addInitHook = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        i = "function" == typeof t ? t : function() {
                            this[t].apply(this, e)
                        };
                    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
                };
                var D = {
                    on: function(t, e, i) {
                        if ("object" == typeof t)
                            for (var n in t) this._on(n, t[n], e);
                        else {
                            t = w(t);
                            for (var o = 0, r = t.length; o < r; o++) this._on(t[o], e, i)
                        }
                        return this
                    },
                    off: function(t, e, i) {
                        if (arguments.length)
                            if ("object" == typeof t)
                                for (var n in t) this._off(n, t[n], e);
                            else {
                                t = w(t);
                                for (var o = 1 == arguments.length, r = 0, s = t.length; r < s; r++) o ? this._off(t[r]) : this._off(t[r], e, i)
                            }
                        else delete this._events;
                        return this
                    },
                    _on: function(t, e, i, n) {
                        if ("function" != typeof e) return void console.warn("wrong listener type: " + typeof e);
                        if (!1 === this._listens(t, e, i)) {
                            i === this && (i = void 0);
                            var o = {
                                fn: e,
                                ctx: i
                            };
                            n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o)
                        }
                    },
                    _off: function(t, e, i) {
                        if (this._events && (n = this._events[t])) {
                            if (1 == arguments.length) {
                                if (this._firingCount)
                                    for (o = 0, r = n.length; o < r; o++) n[o].fn = v;
                                delete this._events[t];
                                return
                            }
                            if ("function" != typeof e) return void console.warn("wrong listener type: " + typeof e);
                            var n, o, r, s = this._listens(t, e, i);
                            if (!1 !== s) {
                                var a = n[s];
                                this._firingCount && (a.fn = v, this._events[t] = n = n.slice()), n.splice(s, 1)
                            }
                        }
                    },
                    fire: function(t, i, n) {
                        if (!this.listens(t, n)) return this;
                        var o = e({}, i, {
                            type: t,
                            target: this,
                            sourceTarget: i && i.sourceTarget || this
                        });
                        if (this._events) {
                            var r = this._events[t];
                            if (r) {
                                this._firingCount = this._firingCount + 1 || 1;
                                for (var s = 0, a = r.length; s < a; s++) {
                                    var l = r[s],
                                        h = l.fn;
                                    l.once && this.off(t, h, l.ctx), h.call(l.ctx || this, o)
                                }
                                this._firingCount--
                            }
                        }
                        return n && this._propagateEvent(o), this
                    },
                    listens: function(t, e, i, n) {
                        "string" != typeof t && console.warn('"string" type argument expected');
                        var o = e;
                        "function" != typeof e && (n = !!e, o = void 0, i = void 0);
                        var r = this._events && this._events[t];
                        if (r && r.length && !1 !== this._listens(t, o, i)) return !0;
                        if (n) {
                            for (var s in this._eventParents)
                                if (this._eventParents[s].listens(t, e, i, n)) return !0
                        }
                        return !1
                    },
                    _listens: function(t, e, i) {
                        if (!this._events) return !1;
                        var n = this._events[t] || [];
                        if (!e) return !!n.length;
                        i === this && (i = void 0);
                        for (var o = 0, r = n.length; o < r; o++)
                            if (n[o].fn === e && n[o].ctx === i) return o;
                        return !1
                    },
                    once: function(t, e, i) {
                        if ("object" == typeof t)
                            for (var n in t) this._on(n, t[n], e, !0);
                        else {
                            t = w(t);
                            for (var o = 0, r = t.length; o < r; o++) this._on(t[o], e, i, !0)
                        }
                        return this
                    },
                    addEventParent: function(t) {
                        return this._eventParents = this._eventParents || {}, this._eventParents[_(t)] = t, this
                    },
                    removeEventParent: function(t) {
                        return this._eventParents && delete this._eventParents[_(t)], this
                    },
                    _propagateEvent: function(t) {
                        for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({
                            layer: t.target,
                            propagatedFrom: t.target
                        }, t), !0)
                    }
                };
                D.addEventListener = D.on, D.removeEventListener = D.clearAllEventListeners = D.off, D.addOneTimeEventListener = D.once, D.fireEvent = D.fire, D.hasEventListeners = D.listens;
                var B = Z.extend(D);

                function j(t, e, i) {
                    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                }
                var H = Math.trunc || function(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                };

                function F(t, e, i) {
                    return t instanceof j ? t : I(t) ? new j(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new j(t.x, t.y) : new j(t, e, i)
                }

                function W(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                }

                function U(t, e) {
                    return !t || t instanceof W ? t : new W(t, e)
                }

                function K(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                }

                function V(t, e) {
                    return t instanceof K ? t : new K(t, e)
                }

                function X(t, e, i) {
                    if (isNaN(t) || isNaN(e)) throw Error("Invalid LatLng object: (" + t + ", " + e + ")");
                    this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
                }

                function Y(t, e, i) {
                    return t instanceof X ? t : I(t) && "object" != typeof t[0] ? 3 === t.length ? new X(t[0], t[1], t[2]) : 2 === t.length ? new X(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new X(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new X(t, e, i)
                }
                j.prototype = {
                    clone: function() {
                        return new j(this.x, this.y)
                    },
                    add: function(t) {
                        return this.clone()._add(F(t))
                    },
                    _add: function(t) {
                        return this.x += t.x, this.y += t.y, this
                    },
                    subtract: function(t) {
                        return this.clone()._subtract(F(t))
                    },
                    _subtract: function(t) {
                        return this.x -= t.x, this.y -= t.y, this
                    },
                    divideBy: function(t) {
                        return this.clone()._divideBy(t)
                    },
                    _divideBy: function(t) {
                        return this.x /= t, this.y /= t, this
                    },
                    multiplyBy: function(t) {
                        return this.clone()._multiplyBy(t)
                    },
                    _multiplyBy: function(t) {
                        return this.x *= t, this.y *= t, this
                    },
                    scaleBy: function(t) {
                        return new j(this.x * t.x, this.y * t.y)
                    },
                    unscaleBy: function(t) {
                        return new j(this.x / t.x, this.y / t.y)
                    },
                    round: function() {
                        return this.clone()._round()
                    },
                    _round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    },
                    floor: function() {
                        return this.clone()._floor()
                    },
                    _floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                    },
                    ceil: function() {
                        return this.clone()._ceil()
                    },
                    _ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                    },
                    trunc: function() {
                        return this.clone()._trunc()
                    },
                    _trunc: function() {
                        return this.x = H(this.x), this.y = H(this.y), this
                    },
                    distanceTo: function(t) {
                        var e = (t = F(t)).x - this.x,
                            i = t.y - this.y;
                        return Math.sqrt(e * e + i * i)
                    },
                    equals: function(t) {
                        return (t = F(t)).x === this.x && t.y === this.y
                    },
                    contains: function(t) {
                        return Math.abs((t = F(t)).x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                    },
                    toString: function() {
                        return "Point(" + y(this.x) + ", " + y(this.y) + ")"
                    }
                }, W.prototype = {
                    extend: function(t) {
                        var e, i;
                        if (!t) return this;
                        if (t instanceof j || "number" == typeof t[0] || "x" in t) e = i = F(t);
                        else if (e = (t = U(t)).min, i = t.max, !e || !i) return this;
                        return this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(), this.max = i.clone()), this
                    },
                    getCenter: function(t) {
                        return F((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                    },
                    getBottomLeft: function() {
                        return F(this.min.x, this.max.y)
                    },
                    getTopRight: function() {
                        return F(this.max.x, this.min.y)
                    },
                    getTopLeft: function() {
                        return this.min
                    },
                    getBottomRight: function() {
                        return this.max
                    },
                    getSize: function() {
                        return this.max.subtract(this.min)
                    },
                    contains: function(t) {
                        var e, i;
                        return (t = "number" == typeof t[0] || t instanceof j ? F(t) : U(t)) instanceof W ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                    },
                    intersects: function(t) {
                        t = U(t);
                        var e = this.min,
                            i = this.max,
                            n = t.min,
                            o = t.max,
                            r = o.x >= e.x && n.x <= i.x,
                            s = o.y >= e.y && n.y <= i.y;
                        return r && s
                    },
                    overlaps: function(t) {
                        t = U(t);
                        var e = this.min,
                            i = this.max,
                            n = t.min,
                            o = t.max,
                            r = o.x > e.x && n.x < i.x,
                            s = o.y > e.y && n.y < i.y;
                        return r && s
                    },
                    isValid: function() {
                        return !!(this.min && this.max)
                    },
                    pad: function(t) {
                        var e = this.min,
                            i = this.max,
                            n = Math.abs(e.x - i.x) * t,
                            o = Math.abs(e.y - i.y) * t;
                        return U(F(e.x - n, e.y - o), F(i.x + n, i.y + o))
                    },
                    equals: function(t) {
                        return !!t && (t = U(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
                    }
                }, K.prototype = {
                    extend: function(t) {
                        var e, i, n = this._southWest,
                            o = this._northEast;
                        if (t instanceof X) e = t, i = t;
                        else if (!(t instanceof K)) return t ? this.extend(Y(t) || V(t)) : this;
                        else if (e = t._southWest, i = t._northEast, !e || !i) return this;
                        return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new X(e.lat, e.lng), this._northEast = new X(i.lat, i.lng)), this
                    },
                    pad: function(t) {
                        var e = this._southWest,
                            i = this._northEast,
                            n = Math.abs(e.lat - i.lat) * t,
                            o = Math.abs(e.lng - i.lng) * t;
                        return new K(new X(e.lat - n, e.lng - o), new X(i.lat + n, i.lng + o))
                    },
                    getCenter: function() {
                        return new X((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                    },
                    getSouthWest: function() {
                        return this._southWest
                    },
                    getNorthEast: function() {
                        return this._northEast
                    },
                    getNorthWest: function() {
                        return new X(this.getNorth(), this.getWest())
                    },
                    getSouthEast: function() {
                        return new X(this.getSouth(), this.getEast())
                    },
                    getWest: function() {
                        return this._southWest.lng
                    },
                    getSouth: function() {
                        return this._southWest.lat
                    },
                    getEast: function() {
                        return this._northEast.lng
                    },
                    getNorth: function() {
                        return this._northEast.lat
                    },
                    contains: function(t) {
                        t = "number" == typeof t[0] || t instanceof X || "lat" in t ? Y(t) : V(t);
                        var e, i, n = this._southWest,
                            o = this._northEast;
                        return t instanceof K ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                    },
                    intersects: function(t) {
                        t = V(t);
                        var e = this._southWest,
                            i = this._northEast,
                            n = t.getSouthWest(),
                            o = t.getNorthEast(),
                            r = o.lat >= e.lat && n.lat <= i.lat,
                            s = o.lng >= e.lng && n.lng <= i.lng;
                        return r && s
                    },
                    overlaps: function(t) {
                        t = V(t);
                        var e = this._southWest,
                            i = this._northEast,
                            n = t.getSouthWest(),
                            o = t.getNorthEast(),
                            r = o.lat > e.lat && n.lat < i.lat,
                            s = o.lng > e.lng && n.lng < i.lng;
                        return r && s
                    },
                    toBBoxString: function() {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                    },
                    equals: function(t, e) {
                        return !!t && (t = V(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                    },
                    isValid: function() {
                        return !!(this._southWest && this._northEast)
                    }
                }, X.prototype = {
                    equals: function(t, e) {
                        return !!t && (t = Y(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                    },
                    toString: function(t) {
                        return "LatLng(" + y(this.lat, t) + ", " + y(this.lng, t) + ")"
                    },
                    distanceTo: function(t) {
                        return G.distance(this, Y(t))
                    },
                    wrap: function() {
                        return G.wrapLatLng(this)
                    },
                    toBounds: function(t) {
                        var e = 180 * t / 0x2637f09,
                            i = e / Math.cos(Math.PI / 180 * this.lat);
                        return V([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                    },
                    clone: function() {
                        return new X(this.lat, this.lng, this.alt)
                    }
                };
                var q = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        unproject: function(t) {
                            return this.projection.unproject(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t / 256) / Math.LN2
                        },
                        getProjectedBounds: function(t) {
                            if (this.infinite) return null;
                            var e = this.projection.bounds,
                                i = this.scale(t);
                            return new W(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
                        },
                        infinite: !1,
                        wrapLatLng: function(t) {
                            var e = this.wrapLng ? g(t.lng, this.wrapLng, !0) : t.lng;
                            return new X(this.wrapLat ? g(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
                        },
                        wrapLatLngBounds: function(t) {
                            var e = t.getCenter(),
                                i = this.wrapLatLng(e),
                                n = e.lat - i.lat,
                                o = e.lng - i.lng;
                            if (0 === n && 0 === o) return t;
                            var r = t.getSouthWest(),
                                s = t.getNorthEast();
                            return new K(new X(r.lat - n, r.lng - o), new X(s.lat - n, s.lng - o))
                        }
                    },
                    G = e({}, q, {
                        wrapLng: [-180, 180],
                        R: 6371e3,
                        distance: function(t, e) {
                            var i = Math.PI / 180,
                                n = t.lat * i,
                                o = e.lat * i,
                                r = Math.sin((e.lat - t.lat) * i / 2),
                                s = Math.sin((e.lng - t.lng) * i / 2),
                                a = r * r + Math.cos(n) * Math.cos(o) * s * s,
                                l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                            return this.R * l
                        }
                    }),
                    $ = {
                        R: 6378137,
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = Math.PI / 180,
                                i = this.MAX_LATITUDE,
                                n = Math.sin(Math.max(Math.min(i, t.lat), -i) * e);
                            return new j(this.R * t.lng * e, this.R * Math.log((1 + n) / (1 - n)) / 2)
                        },
                        unproject: function(t) {
                            var e = 180 / Math.PI;
                            return new X((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                        },
                        bounds: new W([-(l = 6378137 * Math.PI), -l], [l, l])
                    };

                function J(t, e, i, n) {
                    if (I(t)) {
                        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
                        return
                    }
                    this._a = t, this._b = e, this._c = i, this._d = n
                }

                function Q(t, e, i, n) {
                    return new J(t, e, i, n)
                }
                J.prototype = {
                    transform: function(t, e) {
                        return this._transform(t.clone(), e)
                    },
                    _transform: function(t, e) {
                        return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                    },
                    untransform: function(t, e) {
                        return e = e || 1, new j((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                    }
                };
                var tt = e({}, G, {
                        code: "EPSG:3857",
                        projection: $,
                        transformation: Q(h = .5 / (Math.PI * $.R), .5, -h, .5)
                    }),
                    te = e({}, tt, {
                        code: "EPSG:900913"
                    });

                function ti(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t)
                }

                function tn(t, e) {
                    var i, n, o, r, s, a, l = "";
                    for (i = 0, o = t.length; i < o; i++) {
                        for (n = 0, r = (s = t[i]).length; n < r; n++) a = s[n], l += (n ? "L" : "M") + a.x + " " + a.y;
                        l += e ? tO.svg ? "z" : "x" : ""
                    }
                    return l || "M0 0"
                }
                var to = document.documentElement.style,
                    tr = "ActiveXObject" in window,
                    ts = tr && !document.addEventListener,
                    ta = "msLaunchUri" in navigator && !("documentMode" in document),
                    tl = tN("webkit"),
                    th = tN("android"),
                    td = tN("android 2") || tN("android 3"),
                    tu = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                    tc = th && tN("Google") && tu < 537 && !("AudioNode" in window),
                    tp = !!window.opera,
                    tf = !ta && tN("chrome"),
                    t_ = tN("gecko") && !tl && !tp && !tr,
                    tm = !tf && tN("safari"),
                    tg = tN("phantom"),
                    tv = "OTransition" in to,
                    ty = 0 === navigator.platform.indexOf("Win"),
                    tx = tr && "transition" in to,
                    tw = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !td,
                    tb = "MozPerspective" in to,
                    tC = !window.L_DISABLE_3D && (tx || tw || tb) && !tv && !tg,
                    tT = "undefined" != typeof orientation || tN("mobile"),
                    tP = !window.PointerEvent && window.MSPointerEvent,
                    tL = !!(window.PointerEvent || tP),
                    tI = "ontouchstart" in window || !!window.TouchEvent,
                    tz = !window.L_NO_TOUCH && (tI || tL),
                    tS = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                    tM = function() {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                            window.addEventListener("testPassiveEventSupport", v, e), window.removeEventListener("testPassiveEventSupport", v, e)
                        } catch (t) {}
                        return t
                    }(),
                    tE = !!document.createElement("canvas").getContext,
                    tk = !!(document.createElementNS && ti("svg").createSVGRect),
                    tA = !!tk && ((d = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (d.firstChild && d.firstChild.namespaceURI)),
                    tR = !tk && function() {
                        try {
                            var t = document.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                        } catch (t) {
                            return !1
                        }
                    }();

                function tN(t) {
                    return navigator.userAgent.toLowerCase().indexOf(t) >= 0
                }
                var tO = {
                        ie: tr,
                        ielt9: ts,
                        edge: ta,
                        webkit: tl,
                        android: th,
                        android23: td,
                        androidStock: tc,
                        opera: tp,
                        chrome: tf,
                        gecko: t_,
                        safari: tm,
                        phantom: tg,
                        opera12: tv,
                        win: ty,
                        ie3d: tx,
                        webkit3d: tw,
                        gecko3d: tb,
                        any3d: tC,
                        mobile: tT,
                        mobileWebkit: tT && tl,
                        mobileWebkit3d: tT && tw,
                        msPointer: tP,
                        pointer: tL,
                        touch: tz,
                        touchNative: tI,
                        mobileOpera: tT && tp,
                        mobileGecko: tT && t_,
                        retina: tS,
                        passiveEvents: tM,
                        canvas: tE,
                        svg: tk,
                        vml: tR,
                        inlineSvg: tA,
                        mac: 0 === navigator.platform.indexOf("Mac"),
                        linux: 0 === navigator.platform.indexOf("Linux")
                    },
                    tZ = tO.msPointer ? "MSPointerDown" : "pointerdown",
                    tD = tO.msPointer ? "MSPointerMove" : "pointermove",
                    tB = tO.msPointer ? "MSPointerUp" : "pointerup",
                    tj = tO.msPointer ? "MSPointerCancel" : "pointercancel",
                    tH = {
                        touchstart: tZ,
                        touchmove: tD,
                        touchend: tB,
                        touchcancel: tj
                    },
                    tF = {
                        touchstart: function(t, e) {
                            e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && eb(e), tY(t, e)
                        },
                        touchmove: tY,
                        touchend: tY,
                        touchcancel: tY
                    },
                    tW = {},
                    tU = !1;

                function tK(t) {
                    tW[t.pointerId] = t
                }

                function tV(t) {
                    tW[t.pointerId] && (tW[t.pointerId] = t)
                }

                function tX(t) {
                    delete tW[t.pointerId]
                }

                function tY(t, e) {
                    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                        for (var i in e.touches = [], tW) e.touches.push(tW[i]);
                        e.changedTouches = [e], t(e)
                    }
                }
                var tq = ee(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                    tG = ee(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                    t$ = "webkitTransition" === tG || "OTransition" === tG ? tG + "End" : "transitionend";

                function tJ(t) {
                    return "string" == typeof t ? document.getElementById(t) : t
                }

                function tQ(t, e) {
                    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                    if ((!i || "auto" === i) && document.defaultView) {
                        var n = document.defaultView.getComputedStyle(t, null);
                        i = n ? n[e] : null
                    }
                    return "auto" === i ? null : i
                }

                function t0(t, e, i) {
                    var n = document.createElement(t);
                    return n.className = e || "", i && i.appendChild(n), n
                }

                function t1(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t)
                }

                function t2(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }

                function t5(t) {
                    var e = t.parentNode;
                    e && e.lastChild !== t && e.appendChild(t)
                }

                function t3(t) {
                    var e = t.parentNode;
                    e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
                }

                function t4(t, e) {
                    if (void 0 !== t.classList) return t.classList.contains(e);
                    var i = t9(t);
                    return i.length > 0 && RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                }

                function t6(t, e) {
                    if (void 0 !== t.classList)
                        for (var i = w(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
                    else if (!t4(t, e)) {
                        var r = t9(t);
                        t8(t, (r ? r + " " : "") + e)
                    }
                }

                function t7(t, e) {
                    void 0 !== t.classList ? t.classList.remove(e) : t8(t, x((" " + t9(t) + " ").replace(" " + e + " ", " ")))
                }

                function t8(t, e) {
                    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
                }

                function t9(t) {
                    return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
                }

                function et(t, e) {
                    "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) {
                        var i = !1,
                            n = "DXImageTransform.Microsoft.Alpha";
                        try {
                            i = t.filters.item(n)
                        } catch (t) {
                            if (1 === e) return
                        }
                        e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                    }(t, e)
                }

                function ee(t) {
                    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                        if (t[i] in e) return t[i];
                    return !1
                }

                function ei(t, e, i) {
                    var n = e || new j(0, 0);
                    t.style[tq] = (tO.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
                }

                function en(t, e) {
                    t._leaflet_pos = e, tO.any3d ? ei(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                }

                function eo(t) {
                    return t._leaflet_pos || new j(0, 0)
                }
                if ("onselectstart" in document) i = function() {
                    ec(window, "selectstart", eb)
                }, n = function() {
                    ef(window, "selectstart", eb)
                };
                else {
                    var er = ee(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                    i = function() {
                        if (er) {
                            var t = document.documentElement.style;
                            o = t[er], t[er] = "none"
                        }
                    }, n = function() {
                        er && (document.documentElement.style[er] = o, o = void 0)
                    }
                }

                function es() {
                    ec(window, "dragstart", eb)
                }

                function ea() {
                    ef(window, "dragstart", eb)
                }

                function el(t) {
                    for (; - 1 === t.tabIndex;) t = t.parentNode;
                    t.style && (eh(), r = t, s = t.style.outlineStyle, t.style.outlineStyle = "none", ec(window, "keydown", eh))
                }

                function eh() {
                    r && (r.style.outlineStyle = s, r = void 0, s = void 0, ef(window, "keydown", eh))
                }

                function ed(t) {
                    do t = t.parentNode; while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
                    return t
                }

                function eu(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        x: e.width / t.offsetWidth || 1,
                        y: e.height / t.offsetHeight || 1,
                        boundingClientRect: e
                    }
                }

                function ec(t, e, i, n) {
                    if (e && "object" == typeof e)
                        for (var o in e) eg(t, o, e[o], i);
                    else {
                        e = w(e);
                        for (var r = 0, s = e.length; r < s; r++) eg(t, e[r], i, n)
                    }
                    return this
                }
                var ep = "_leaflet_events";

                function ef(t, e, i, n) {
                    if (1 == arguments.length) e_(t), delete t[ep];
                    else if (e && "object" == typeof e)
                        for (var o in e) ev(t, o, e[o], i);
                    else if (e = w(e), 2 == arguments.length) e_(t, function(t) {
                        return -1 !== z(e, t)
                    });
                    else
                        for (var r = 0, s = e.length; r < s; r++) ev(t, e[r], i, n);
                    return this
                }

                function e_(t, e) {
                    for (var i in t[ep]) {
                        var n = i.split(/\d/)[0];
                        (!e || e(n)) && ev(t, n, null, null, i)
                    }
                }
                var em = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    wheel: !("onwheel" in window) && "mousewheel"
                };

                function eg(t, e, i, n) {
                    var o = e + _(i) + (n ? "_" + _(n) : "");
                    if (t[ep] && t[ep][o]) return this;
                    var r = function(e) {
                            return i.call(n || t, e || window.event)
                        },
                        s = r;
                    !tO.touchNative && tO.pointer && 0 === e.indexOf("touch") ? r = function(t, e, i) {
                        return ("touchstart" === e && (tU || (document.addEventListener(tZ, tK, !0), document.addEventListener(tD, tV, !0), document.addEventListener(tB, tX, !0), document.addEventListener(tj, tX, !0), tU = !0)), tF[e]) ? (i = tF[e].bind(this, i), t.addEventListener(tH[e], i, !1), i) : (console.warn("wrong event specified:", e), v)
                    }(t, e, r) : tO.touch && "dblclick" === e ? r = function(t, e) {
                        t.addEventListener("dblclick", e);
                        var i, n = 0;

                        function o(t) {
                            if (1 !== t.detail) {
                                i = t.detail;
                                return
                            }
                            if ("mouse" !== t.pointerType && (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)) {
                                var o = eT(t);
                                if (!o.some(function(t) {
                                        return t instanceof HTMLLabelElement && t.attributes.for
                                    }) || o.some(function(t) {
                                        return t instanceof HTMLInputElement || t instanceof HTMLSelectElement
                                    })) {
                                    var r = Date.now();
                                    r - n <= 200 ? 2 == ++i && e(function(t) {
                                        var e, i, n = {};
                                        for (i in t) e = t[i], n[i] = e && e.bind ? e.bind(t) : e;
                                        return t = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n
                                    }(t)) : i = 1, n = r
                                }
                            }
                        }
                        return t.addEventListener("click", o), {
                            dblclick: e,
                            simDblclick: o
                        }
                    }(t, r) : "addEventListener" in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(em[e] || e, r, !!tO.passiveEvents && {
                        passive: !1
                    }) : "mouseenter" === e || "mouseleave" === e ? (r = function(e) {
                        ez(t, e = e || window.event) && s(e)
                    }, t.addEventListener(em[e], r, !1)) : t.addEventListener(e, s, !1) : t.attachEvent("on" + e, r), t[ep] = t[ep] || {}, t[ep][o] = r
                }

                function ev(t, e, i, n, o) {
                    o = o || e + _(i) + (n ? "_" + _(n) : "");
                    var r = t[ep] && t[ep][o];
                    if (!r) return this;
                    !tO.touchNative && tO.pointer && 0 === e.indexOf("touch") ? tH[e] ? t.removeEventListener(tH[e], r, !1) : console.warn("wrong event specified:", e) : tO.touch && "dblclick" === e ? (t.removeEventListener("dblclick", r.dblclick), t.removeEventListener("click", r.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(em[e] || e, r, !1) : t.detachEvent("on" + e, r), t[ep][o] = null
                }

                function ey(t) {
                    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this
                }

                function ex(t) {
                    return eg(t, "wheel", ey), this
                }

                function ew(t) {
                    return ec(t, "mousedown touchstart dblclick contextmenu", ey), t._leaflet_disable_click = !0, this
                }

                function eb(t) {
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                }

                function eC(t) {
                    return eb(t), ey(t), this
                }

                function eT(t) {
                    if (t.composedPath) return t.composedPath();
                    for (var e = [], i = t.target; i;) e.push(i), i = i.parentNode;
                    return e
                }

                function eP(t, e) {
                    if (!e) return new j(t.clientX, t.clientY);
                    var i = eu(e),
                        n = i.boundingClientRect;
                    return new j((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)
                }
                var eL = tO.linux && tO.chrome ? window.devicePixelRatio : tO.mac ? 3 * window.devicePixelRatio : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;

                function eI(t) {
                    return tO.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / eL : t.deltaY && 1 === t.deltaMode ? -(20 * t.deltaY) : t.deltaY && 2 === t.deltaMode ? -(60 * t.deltaY) : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && 32765 > Math.abs(t.detail) ? -(20 * t.detail) : t.detail ? -(60 * (t.detail / 32765)) : 0
                }

                function ez(t, e) {
                    var i = e.relatedTarget;
                    if (!i) return !0;
                    try {
                        for (; i && i !== t;) i = i.parentNode
                    } catch (t) {
                        return !1
                    }
                    return i !== t
                }
                var eS = B.extend({
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = eo(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                        },
                        stop: function() {
                            this._inProgress && (this._step(!0), this._complete())
                        },
                        _animate: function() {
                            this._animId = N(this._animate, this), this._step()
                        },
                        _step: function(t) {
                            var e = new Date - this._startTime,
                                i = 1e3 * this._duration;
                            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
                        },
                        _runFrame: function(t, e) {
                            var i = this._startPos.add(this._offset.multiplyBy(t));
                            e && i._round(), en(this._el, i), this.fire("step")
                        },
                        _complete: function() {
                            O(this._animId), this._inProgress = !1, this.fire("end")
                        },
                        _easeOut: function(t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower)
                        }
                    }),
                    eM = B.extend({
                        options: {
                            crs: tt,
                            center: void 0,
                            zoom: void 0,
                            minZoom: void 0,
                            maxZoom: void 0,
                            layers: [],
                            maxBounds: void 0,
                            renderer: void 0,
                            zoomAnimation: !0,
                            zoomAnimationThreshold: 4,
                            fadeAnimation: !0,
                            markerZoomAnimation: !0,
                            transform3DLimit: 8388608,
                            zoomSnap: 1,
                            zoomDelta: 1,
                            trackResize: !0
                        },
                        initialize: function(t, e) {
                            e = b(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(Y(e.center), e.zoom, {
                                reset: !0
                            }), this.callInitHooks(), this._zoomAnimated = tG && tO.any3d && !tO.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), ec(this._proxy, t$, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                        },
                        setView: function(t, i, n) {
                            return (i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(Y(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({
                                animate: n.animate
                            }, n.zoom), n.pan = e({
                                animate: n.animate,
                                duration: n.duration
                            }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan))) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i, n.pan && n.pan.noMoveStart), this)
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = t, this)
                        },
                        zoomIn: function(t, e) {
                            return t = t || (tO.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
                        },
                        zoomOut: function(t, e) {
                            return t = t || (tO.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                r = (t instanceof j ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                                s = this.containerPointToLatLng(o.add(r));
                            return this.setView(s, e, {
                                zoom: i
                            })
                        },
                        _getBoundsCenterZoom: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : V(t);
                            var i = F(e.paddingTopLeft || e.padding || [0, 0]),
                                n = F(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                                center: t.getCenter(),
                                zoom: o
                            };
                            var r = n.subtract(i).divideBy(2),
                                s = this.project(t.getSouthWest(), o),
                                a = this.project(t.getNorthEast(), o);
                            return {
                                center: this.unproject(s.add(a).divideBy(2).add(r), o),
                                zoom: o
                            }
                        },
                        fitBounds: function(t, e) {
                            if (!(t = V(t)).isValid()) throw Error("Bounds are not valid.");
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.setView(i.center, i.zoom, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t, e) {
                            if (t = F(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
                            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                            if (this._panAnim || (this._panAnim = new eS, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                                t6(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t).round();
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        flyTo: function(t, e, i) {
                            if (!1 === (i = i || {}).animate || !tO.any3d) return this.setView(t, e, i);
                            this._stop();
                            var n = this.project(this.getCenter()),
                                o = this.project(t),
                                r = this.getSize(),
                                s = this._zoom;
                            t = Y(t), e = void 0 === e ? s : e;
                            var a = Math.max(r.x, r.y),
                                l = a * this.getZoomScale(s, e),
                                h = o.distanceTo(n) || 1;

                            function d(t) {
                                var e = (l * l - a * a + (t ? -1 : 1) * 4.0658689599999995 * h * h) / (2 * (t ? l : a) * 2.0164 * h),
                                    i = Math.sqrt(e * e + 1) - e;
                                return i < 1e-9 ? -18 : Math.log(i)
                            }

                            function u(t) {
                                return (Math.exp(t) - Math.exp(-t)) / 2
                            }

                            function c(t) {
                                return (Math.exp(t) + Math.exp(-t)) / 2
                            }
                            var p = d(0),
                                f = Date.now(),
                                _ = (d(1) - p) / 1.42,
                                m = i.duration ? 1e3 * i.duration : 1e3 * _ * .8;

                            function g() {
                                var i, r = (Date.now() - f) / m,
                                    l = (1 - Math.pow(1 - r, 1.5)) * _;
                                r <= 1 ? (this._flyToFrame = N(g, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(a * (c(p) * (u(i = p + 1.42 * l) / c(i)) - u(p)) / 2.0164 / h)), s), this.getScaleZoom(a / (a * (c(p) / c(p + 1.42 * l))), s), {
                                    flyTo: !0
                                })) : this._move(t, e)._moveEnd(!0)
                            }
                            return this._moveStart(!0, i.noMoveStart), g.call(this), this
                        },
                        flyToBounds: function(t, e) {
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.flyTo(i.center, i.zoom, e)
                        },
                        setMaxBounds: function(t) {
                            return (t = V(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid()) ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this)
                        },
                        setMinZoom: function(t) {
                            var e = this.options.minZoom;
                            return (this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)) ? this.setZoom(t) : this
                        },
                        setMaxZoom: function(t) {
                            var e = this.options.maxZoom;
                            return (this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)) ? this.setZoom(t) : this
                        },
                        panInsideBounds: function(t, e) {
                            this._enforcingBounds = !0;
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, V(t));
                            return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
                        },
                        panInside: function(t, e) {
                            var i = F((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                                n = F(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.project(this.getCenter()),
                                r = this.project(t),
                                s = this.getPixelBounds(),
                                a = U([s.min.add(i), s.max.subtract(n)]),
                                l = a.getSize();
                            if (!a.contains(r)) {
                                this._enforcingBounds = !0;
                                var h = r.subtract(a.getCenter()),
                                    d = a.extend(r).getSize().subtract(l);
                                o.x += h.x < 0 ? -d.x : d.x, o.y += h.y < 0 ? -d.y : d.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1
                            }
                            return this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = e({
                                animate: !1,
                                pan: !0
                            }, !0 === t ? {
                                animate: !0
                            } : t);
                            var i = this.getSize();
                            this._sizeChanged = !0, this._lastCenter = null;
                            var n = this.getSize(),
                                o = i.divideBy(2).round(),
                                r = n.divideBy(2).round(),
                                s = o.subtract(r);
                            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: i,
                                newSize: n
                            })) : this
                        },
                        stop: function() {
                            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = e({
                                    timeout: 1e4,
                                    watch: !1
                                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var i = p(this._handleGeolocationResponse, this),
                                n = p(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, n, t) : navigator.geolocation.getCurrentPosition(i, n, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            if (this._container._leaflet_id) {
                                var e = t.code,
                                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                    code: e,
                                    message: "Geolocation error: " + i + "."
                                })
                            }
                        },
                        _handleGeolocationResponse: function(t) {
                            if (this._container._leaflet_id) {
                                var e = new X(t.coords.latitude, t.coords.longitude),
                                    i = e.toBounds(2 * t.coords.accuracy),
                                    n = this._locateOptions;
                                if (n.setView) {
                                    var o = this.getBoundsZoom(i);
                                    this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                                }
                                var r = {
                                    latlng: e,
                                    bounds: i,
                                    timestamp: t.timestamp
                                };
                                for (var s in t.coords) "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
                                this.fire("locationfound", r)
                            }
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            var t;
                            if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw Error("Map container is being reused by another instance");
                            try {
                                delete this._container._leaflet_id, delete this._containerId
                            } catch (t) {
                                this._container._leaflet_id = void 0, this._containerId = void 0
                            }
                            for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), t1(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (O(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                            for (t in this._panes) t1(this._panes[t]);
                            return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                        },
                        createPane: function(t, e) {
                            var i = t0("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                            return t && (this._panes[t] = i), i
                        },
                        getCenter: function() {
                            return (this._checkIfLoaded(), this._lastCenter && !this._moved()) ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds();
                            return new K(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                        },
                        getMinZoom: function() {
                            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = V(t), i = F(i || [0, 0]);
                            var n = this.getZoom() || 0,
                                o = this.getMinZoom(),
                                r = this.getMaxZoom(),
                                s = t.getNorthWest(),
                                a = t.getSouthEast(),
                                l = this.getSize().subtract(i),
                                h = U(this.project(a, n), this.project(s, n)).getSize(),
                                d = tO.any3d ? this.options.zoomSnap : 1,
                                u = l.x / h.x,
                                c = l.y / h.y,
                                p = e ? Math.max(u, c) : Math.min(u, c);
                            return n = this.getScaleZoom(p, n), d && (n = d / 100 * Math.round(n / (d / 100)), n = e ? Math.ceil(n / d) * d : Math.floor(n / d) * d), Math.max(o, Math.min(r, n))
                        },
                        getSize: function() {
                            return (!this._size || this._sizeChanged) && (this._size = new j(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function(t, e) {
                            var i = this._getTopLeftPoint(t, e);
                            return new W(i, i.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._pixelOrigin
                        },
                        getPixelWorldBounds: function(t) {
                            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                        },
                        getPane: function(t) {
                            return "string" == typeof t ? this._panes[t] : t
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t, e) {
                            var i = this.options.crs;
                            return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
                        },
                        getScaleZoom: function(t, e) {
                            var i = this.options.crs;
                            e = void 0 === e ? this._zoom : e;
                            var n = i.zoom(t * i.scale(e));
                            return isNaN(n) ? 1 / 0 : n
                        },
                        project: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(Y(t), e)
                        },
                        unproject: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(F(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = F(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            return this.project(Y(t))._round()._subtract(this.getPixelOrigin())
                        },
                        wrapLatLng: function(t) {
                            return this.options.crs.wrapLatLng(Y(t))
                        },
                        wrapLatLngBounds: function(t) {
                            return this.options.crs.wrapLatLngBounds(V(t))
                        },
                        distance: function(t, e) {
                            return this.options.crs.distance(Y(t), Y(e))
                        },
                        containerPointToLayerPoint: function(t) {
                            return F(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return F(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(F(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return eP(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = tJ(t);
                            if (e) {
                                if (e._leaflet_id) throw Error("Map container is already initialized.")
                            } else throw Error("Map container not found.");
                            ec(e, "scroll", this._onScroll, this), this._containerId = _(e)
                        },
                        _initLayout: function() {
                            var t = this._container;
                            this._fadeAnimated = this.options.fadeAnimation && tO.any3d, t6(t, "leaflet-container" + (tO.touch ? " leaflet-touch" : "") + (tO.retina ? " leaflet-retina" : "") + (tO.ielt9 ? " leaflet-oldie" : "") + (tO.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                            var e = tQ(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), en(this._mapPane, new j(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (t6(t.markerPane, "leaflet-zoom-hide"), t6(t.shadowPane, "leaflet-zoom-hide"))
                        },
                        _resetView: function(t, e, i) {
                            en(this._mapPane, new j(0, 0));
                            var n = !this._loaded;
                            this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                            var o = this._zoom !== e;
                            this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load")
                        },
                        _moveStart: function(t, e) {
                            return t && this.fire("zoomstart"), e || this.fire("movestart"), this
                        },
                        _move: function(t, e, i, n) {
                            void 0 === e && (e = this._zoom);
                            var o = this._zoom !== e;
                            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this
                        },
                        _moveEnd: function(t) {
                            return t && this.fire("zoomend"), this.fire("moveend")
                        },
                        _stop: function() {
                            return O(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                        },
                        _rawPanBy: function(t) {
                            en(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _panInsideMaxBounds: function() {
                            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            this._targets = {}, this._targets[_(this._container)] = this;
                            var e = t ? ef : ec;
                            e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), tO.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                        },
                        _onResize: function() {
                            O(this._resizeRequest), this._resizeRequest = N(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this)
                        },
                        _onScroll: function() {
                            this._container.scrollTop = 0, this._container.scrollLeft = 0
                        },
                        _onMoveEnd: function() {
                            var t = this._getMapPanePos();
                            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                        },
                        _findEventTargets: function(t, e) {
                            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, s = !1; r;) {
                                if ((i = this._targets[_(r)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
                                    s = !0;
                                    break
                                }
                                if (i && i.listens(e, !0) && (o && !ez(r, t) || (n.push(i), o))) break;
                                if (r === this._container) break;
                                r = r.parentNode
                            }
                            return !n.length && !s && !o && this.listens(e, !0) && (n = [this]), n
                        },
                        _isClickDisabled: function(t) {
                            for (; t && t !== this._container;) {
                                if (t._leaflet_disable_click) return !0;
                                t = t.parentNode
                            }
                        },
                        _handleDOMEvent: function(t) {
                            var e = t.target || t.srcElement;
                            if (!(!this._loaded || e._leaflet_disable_events || "click" === t.type && this._isClickDisabled(e))) {
                                var i = t.type;
                                "mousedown" === i && el(e), this._fireDOMEvent(t, i)
                            }
                        },
                        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                        _fireDOMEvent: function(t, i, n) {
                            if ("click" === t.type) {
                                var o = e({}, t);
                                o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                            }
                            var r = this._findEventTargets(t, i);
                            if (n) {
                                for (var s = [], a = 0; a < n.length; a++) n[a].listens(i, !0) && s.push(n[a]);
                                r = s.concat(r)
                            }
                            if (r.length) {
                                "contextmenu" === i && eb(t);
                                var l = r[0],
                                    h = {
                                        originalEvent: t
                                    };
                                if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                                    var d = l.getLatLng && (!l._radius || l._radius <= 10);
                                    h.containerPoint = d ? this.latLngToContainerPoint(l.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = d ? l.getLatLng() : this.layerPointToLatLng(h.layerPoint)
                                }
                                for (a = 0; a < r.length; a++)
                                    if (r[a].fire(i, h, !0), h.originalEvent._stopped || !1 === r[a].options.bubblingMouseEvents && -1 !== z(this._mouseEvents, i)) return
                            }
                        },
                        _draggableMoved: function(t) {
                            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, {
                                target: this
                            }) : this.on("load", t, e), this
                        },
                        _getMapPanePos: function() {
                            return eo(this._mapPane) || new j(0, 0)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function(t, e) {
                            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                        },
                        _getNewPixelOrigin: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return this.project(t, e)._subtract(n)
                        },
                        _latLngBoundsToNewLayerBounds: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return U([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                r = new W(n.subtract(o), n.add(o)),
                                s = this._getBoundsOffset(r, i, e);
                            return 1 >= Math.abs(s.x) && 1 >= Math.abs(s.y) ? t : this.unproject(n.add(s), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new W(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = U(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                                o = n.min.subtract(t.min),
                                r = n.max.subtract(t.max);
                            return new j(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y))
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom(),
                                n = tO.any3d ? this.options.zoomSnap : 1;
                            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move")
                        },
                        _onPanTransitionEnd: function() {
                            t7(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._trunc();
                            return (!0 === (e && e.animate) || !!this.getSize().contains(i)) && (this.panBy(i, e), !0)
                        },
                        _createAnimProxy: function() {
                            var t = this._proxy = t0("div", "leaflet-proxy leaflet-zoom-animated");
                            this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                                var e = this._proxy.style[tq];
                                ei(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[tq] && this._animatingZoom && this._onZoomTransitionEnd()
                            }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
                        },
                        _destroyAnimProxy: function() {
                            t1(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
                        },
                        _animMoveEnd: function() {
                            var t = this.getCenter(),
                                e = this.getZoom();
                            ei(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                        },
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                            return (!0 === i.animate || !!this.getSize().contains(o)) && (N(function() {
                                this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0)
                            }, this), !0)
                        },
                        _animateZoom: function(t, e, i, n) {
                            this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, t6(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                                center: t,
                                zoom: e,
                                noUpdate: n
                            }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(p(this._onZoomTransitionEnd, this), 250))
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom && (this._mapPane && t7(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0))
                        }
                    }),
                    eE = Z.extend({
                        options: {
                            position: "topright"
                        },
                        initialize: function(t) {
                            b(this, t)
                        },
                        getPosition: function() {
                            return this.options.position
                        },
                        setPosition: function(t) {
                            var e = this._map;
                            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        addTo: function(t) {
                            this.remove(), this._map = t;
                            var e = this._container = this.onAdd(t),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return t6(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this
                        },
                        remove: function() {
                            return this._map && (t1(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this
                        },
                        _refocusOnMap: function(t) {
                            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                        }
                    }),
                    ek = function(t) {
                        return new eE(t)
                    };
                eM.include({
                    addControl: function(t) {
                        return t.addTo(this), this
                    },
                    removeControl: function(t) {
                        return t.remove(), this
                    },
                    _initControlPos: function() {
                        var t = this._controlCorners = {},
                            e = "leaflet-",
                            i = this._controlContainer = t0("div", e + "control-container", this._container);

                        function n(n, o) {
                            t[n + o] = t0("div", e + n + " " + e + o, i)
                        }
                        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
                    },
                    _clearControlPos: function() {
                        for (var t in this._controlCorners) t1(this._controlCorners[t]);
                        t1(this._controlContainer), delete this._controlCorners, delete this._controlContainer
                    }
                });
                var eA = eE.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0,
                            hideSingleBase: !1,
                            sortLayers: !1,
                            sortFunction: function(t, e, i, n) {
                                return i < n ? -1 : +(n < i)
                            }
                        },
                        initialize: function(t, e, i) {
                            for (var n in b(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0)
                        },
                        onAdd: function(t) {
                            this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                            return this._container
                        },
                        addTo: function(t) {
                            return eE.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                        },
                        onRemove: function() {
                            this._map.off("zoomend", this._checkDisabledLayers, this);
                            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                        },
                        addBaseLayer: function(t, e) {
                            return this._addLayer(t, e), this._map ? this._update() : this
                        },
                        addOverlay: function(t, e) {
                            return this._addLayer(t, e, !0), this._map ? this._update() : this
                        },
                        removeLayer: function(t) {
                            t.off("add remove", this._onLayerChange, this);
                            var e = this._getLayer(_(t));
                            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                        },
                        expand: function() {
                            t6(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                            var t = this._map.getSize().y - (this._container.offsetTop + 50);
                            return t < this._section.clientHeight ? (t6(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : t7(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                        },
                        collapse: function() {
                            return t7(this._container, "leaflet-control-layers-expanded"), this
                        },
                        _initLayout: function() {
                            var t = "leaflet-control-layers",
                                e = this._container = t0("div", t),
                                i = this.options.collapsed;
                            e.setAttribute("aria-haspopup", !0), ew(e), ex(e);
                            var n = this._section = t0("section", t + "-list");
                            i && (this._map.on("click", this.collapse, this), ec(e, {
                                mouseenter: this._expandSafely,
                                mouseleave: this.collapse
                            }, this));
                            var o = this._layersLink = t0("a", t + "-toggle", e);
                            o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), ec(o, {
                                keydown: function(t) {
                                    13 === t.keyCode && this._expandSafely()
                                },
                                click: function(t) {
                                    eb(t), this._expandSafely()
                                }
                            }, this), i || this.expand(), this._baseLayersList = t0("div", t + "-base", n), this._separator = t0("div", t + "-separator", n), this._overlaysList = t0("div", t + "-overlays", n), e.appendChild(n)
                        },
                        _getLayer: function(t) {
                            for (var e = 0; e < this._layers.length; e++)
                                if (this._layers[e] && _(this._layers[e].layer) === t) return this._layers[e]
                        },
                        _addLayer: function(t, e, i) {
                            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                                layer: t,
                                name: e,
                                overlay: i
                            }), this.options.sortLayers && this._layers.sort(p(function(t, e) {
                                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                            }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                        },
                        _update: function() {
                            if (!this._container) return this;
                            t2(this._baseLayersList), t2(this._overlaysList), this._layerControlInputs = [];
                            var t, e, i, n, o = 0;
                            for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += +!n.overlay;
                            return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                        },
                        _onLayerChange: function(t) {
                            this._handlingClick || this._update();
                            var e = this._getLayer(_(t.target)),
                                i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                            i && this._map.fire(i, e)
                        },
                        _createRadioElement: function(t, e) {
                            var i = document.createElement("div");
                            return i.innerHTML = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", i.firstChild
                        },
                        _addItem: function(t) {
                            var e, i = document.createElement("label"),
                                n = this._map.hasLayer(t.layer);
                            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + _(this), n), this._layerControlInputs.push(e), e.layerId = _(t.layer), ec(e, "click", this._onInputClick, this);
                            var o = document.createElement("span");
                            o.innerHTML = " " + t.name;
                            var r = document.createElement("span");
                            return i.appendChild(r), r.appendChild(e), r.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
                        },
                        _onInputClick: function() {
                            if (!this._preventClick) {
                                var t, e, i = this._layerControlInputs,
                                    n = [],
                                    o = [];
                                this._handlingClick = !0;
                                for (var r = i.length - 1; r >= 0; r--) t = i[r], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                                for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                                for (r = 0; r < n.length; r++) this._map.hasLayer(n[r]) || this._map.addLayer(n[r]);
                                this._handlingClick = !1, this._refocusOnMap()
                            }
                        },
                        _checkDisabledLayers: function() {
                            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
                        },
                        _expandIfNotCollapsed: function() {
                            return this._map && !this.options.collapsed && this.expand(), this
                        },
                        _expandSafely: function() {
                            var t = this._section;
                            this._preventClick = !0, ec(t, "click", eb), this.expand();
                            var e = this;
                            setTimeout(function() {
                                ef(t, "click", eb), e._preventClick = !1
                            })
                        }
                    }),
                    eR = eE.extend({
                        options: {
                            position: "topleft",
                            zoomInText: '<span aria-hidden="true">+</span>',
                            zoomInTitle: "Zoom in",
                            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                            zoomOutTitle: "Zoom out"
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-zoom",
                                i = t0("div", e + " leaflet-bar"),
                                n = this.options;
                            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                        },
                        onRemove: function(t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                        },
                        disable: function() {
                            return this._disabled = !0, this._updateDisabled(), this
                        },
                        enable: function() {
                            return this._disabled = !1, this._updateDisabled(), this
                        },
                        _zoomIn: function(t) {
                            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                        },
                        _zoomOut: function(t) {
                            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                        },
                        _createButton: function(t, e, i, n, o) {
                            var r = t0("a", i, n);
                            return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), ew(r), ec(r, "click", eC), ec(r, "click", o, this), ec(r, "click", this._refocusOnMap, this), r
                        },
                        _updateDisabled: function() {
                            var t = this._map,
                                e = "leaflet-disabled";
                            t7(this._zoomInButton, e), t7(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (t6(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (t6(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"))
                        }
                    });
                eM.mergeOptions({
                    zoomControl: !0
                }), eM.addInitHook(function() {
                    this.options.zoomControl && (this.zoomControl = new eR, this.addControl(this.zoomControl))
                });
                var eN = eE.extend({
                        options: {
                            position: "bottomleft",
                            maxWidth: 100,
                            metric: !0,
                            imperial: !0
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-scale",
                                i = t0("div", e),
                                n = this.options;
                            return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                        },
                        onRemove: function(t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                        },
                        _addScales: function(t, e, i) {
                            t.metric && (this._mScale = t0("div", e, i)), t.imperial && (this._iScale = t0("div", e, i))
                        },
                        _update: function() {
                            var t = this._map,
                                e = t.getSize().y / 2,
                                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                            this._updateScales(i)
                        },
                        _updateScales: function(t) {
                            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                        },
                        _updateMetric: function(t) {
                            var e = this._getRoundNum(t);
                            this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
                        },
                        _updateImperial: function(t) {
                            var e, i, n, o = 3.2808399 * t;
                            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                        },
                        _updateScale: function(t, e, i) {
                            t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
                        },
                        _getRoundNum: function(t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                        }
                    }),
                    eO = eE.extend({
                        options: {
                            position: "bottomright",
                            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (tO.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
                        },
                        initialize: function(t) {
                            b(this, t), this._attributions = {}
                        },
                        onAdd: function(t) {
                            for (var e in t.attributionControl = this, this._container = t0("div", "leaflet-control-attribution"), ew(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return this._update(), t.on("layeradd", this._addAttribution, this), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._addAttribution, this)
                        },
                        _addAttribution: function(t) {
                            t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
                                this.removeAttribution(t.layer.getAttribution())
                            }, this))
                        },
                        setPrefix: function(t) {
                            return this.options.prefix = t, this._update(), this
                        },
                        addAttribution: function(t) {
                            return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
                        },
                        removeAttribution: function(t) {
                            return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
                        },
                        _update: function() {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ')
                            }
                        }
                    });
                eM.mergeOptions({
                    attributionControl: !0
                }), eM.addInitHook(function() {
                    this.options.attributionControl && new eO().addTo(this)
                }), eE.Layers = eA, eE.Zoom = eR, eE.Scale = eN, eE.Attribution = eO, ek.layers = function(t, e, i) {
                    return new eA(t, e, i)
                }, ek.zoom = function(t) {
                    return new eR(t)
                }, ek.scale = function(t) {
                    return new eN(t)
                }, ek.attribution = function(t) {
                    return new eO(t)
                };
                var eZ = Z.extend({
                    initialize: function(t) {
                        this._map = t
                    },
                    enable: function() {
                        return this._enabled || (this._enabled = !0, this.addHooks()), this
                    },
                    disable: function() {
                        return this._enabled && (this._enabled = !1, this.removeHooks()), this
                    },
                    enabled: function() {
                        return !!this._enabled
                    }
                });
                eZ.addTo = function(t, e) {
                    return t.addHandler(e, this), this
                };
                var eD = tO.touch ? "touchstart mousedown" : "mousedown",
                    eB = B.extend({
                        options: {
                            clickTolerance: 3
                        },
                        initialize: function(t, e, i, n) {
                            b(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
                        },
                        enable: function() {
                            this._enabled || (ec(this._dragStartTarget, eD, this._onDown, this), this._enabled = !0)
                        },
                        disable: function() {
                            this._enabled && (eB._dragging === this && this.finishDrag(!0), ef(this._dragStartTarget, eD, this._onDown, this), this._enabled = !1, this._moved = !1)
                        },
                        _onDown: function(t) {
                            if (!(!this._enabled || (this._moved = !1, t4(this._element, "leaflet-zoom-anim")))) {
                                if (t.touches && 1 !== t.touches.length) {
                                    eB._dragging === this && this.finishDrag();
                                    return
                                }
                                if (!eB._dragging && !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (eB._dragging = this, this._preventOutline && el(this._element), es(), i(), !this._moving)) {
                                    this.fire("down");
                                    var e = t.touches ? t.touches[0] : t,
                                        n = ed(this._element);
                                    this._startPoint = new j(e.clientX, e.clientY), this._startPos = eo(this._element), this._parentScale = eu(n);
                                    var o = "mousedown" === t.type;
                                    ec(document, o ? "mousemove" : "touchmove", this._onMove, this), ec(document, o ? "mouseup" : "touchend touchcancel", this._onUp, this)
                                }
                            }
                        },
                        _onMove: function(t) {
                            if (this._enabled) {
                                if (t.touches && t.touches.length > 1) {
                                    this._moved = !0;
                                    return
                                }
                                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                    i = new j(e.clientX, e.clientY)._subtract(this._startPoint);
                                (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, eb(t), this._moved || (this.fire("dragstart"), this._moved = !0, t6(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), t6(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition()))
                            }
                        },
                        _updatePosition: function() {
                            var t = {
                                originalEvent: this._lastEvent
                            };
                            this.fire("predrag", t), en(this._element, this._newPos), this.fire("drag", t)
                        },
                        _onUp: function() {
                            this._enabled && this.finishDrag()
                        },
                        finishDrag: function(t) {
                            t7(document.body, "leaflet-dragging"), this._lastTarget && (t7(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ef(document, "mousemove touchmove", this._onMove, this), ef(document, "mouseup touchend touchcancel", this._onUp, this), ea(), n();
                            var e = this._moved && this._moving;
                            this._moving = !1, eB._dragging = !1, e && this.fire("dragend", {
                                noInertia: t,
                                distance: this._newPos.distanceTo(this._startPos)
                            })
                        }
                    });

                function ej(t, e, i) {
                    var n, o, r, s, a, l, h, d, u, c = [1, 4, 2, 8];
                    for (o = 0, h = t.length; o < h; o++) t[o]._code = eX(t[o], e);
                    for (s = 0; s < 4; s++) {
                        for (o = 0, d = c[s], n = [], r = (h = t.length) - 1; o < h; r = o++) a = t[o], l = t[r], a._code & d ? l._code & d || ((u = eV(l, a, d, e, i))._code = eX(u, e), n.push(u)) : (l._code & d && ((u = eV(l, a, d, e, i))._code = eX(u, e), n.push(u)), n.push(a));
                        t = n
                    }
                    return t
                }

                function eH(t, e) {
                    if (!t || 0 === t.length) throw Error("latlngs not passed");
                    eq(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
                    var i, n, o, r, s, a, l, h, d, u = Y([0, 0]),
                        c = V(t);
                    c.getNorthWest().distanceTo(c.getSouthWest()) * c.getNorthEast().distanceTo(c.getNorthWest()) < 1700 && (u = eF(t));
                    var p = t.length,
                        f = [];
                    for (i = 0; i < p; i++) {
                        var _ = Y(t[i]);
                        f.push(e.project(Y([_.lat - u.lat, _.lng - u.lng])))
                    }
                    for (i = 0, a = l = h = 0, n = p - 1; i < p; n = i++) o = f[i], r = f[n], s = o.y * r.x - r.y * o.x, l += (o.x + r.x) * s, h += (o.y + r.y) * s, a += 3 * s;
                    d = 0 === a ? f[0] : [l / a, h / a];
                    var m = e.unproject(F(d));
                    return Y([m.lat + u.lat, m.lng + u.lng])
                }

                function eF(t) {
                    for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
                        var r = Y(t[o]);
                        e += r.lat, i += r.lng, n++
                    }
                    return Y([e / n, i / n])
                }

                function eW(t, e) {
                    if (!e || !t.length) return t.slice();
                    var i = e * e;
                    return function(t, e) {
                        var i = t.length,
                            n = new("undefined" != typeof Uint8Array ? Uint8Array : Array)(i);
                        n[0] = n[i - 1] = 1,
                            function t(e, i, n, o, r) {
                                var s, a, l, h = 0;
                                for (a = o + 1; a <= r - 1; a++)(l = eY(e[a], e[o], e[r], !0)) > h && (s = a, h = l);
                                h > n && (i[s] = 1, t(e, i, n, o, s), t(e, i, n, s, r))
                            }(t, n, e, 0, i - 1);
                        var o, r = [];
                        for (o = 0; o < i; o++) n[o] && r.push(t[o]);
                        return r
                    }(t = function(t, e) {
                        for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++)(function(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n
                        })(t[n], t[o]) > e && (i.push(t[n]), o = n);
                        return o < r - 1 && i.push(t[r - 1]), i
                    }(t, i), i)
                }

                function eU(t, e, i) {
                    return Math.sqrt(eY(t, e, i, !0))
                }

                function eK(t, e, i, n, o) {
                    var r, s, l, h = n ? a : eX(t, i),
                        d = eX(e, i);
                    for (a = d;;) {
                        if (!(h | d)) return [t, e];
                        if (h & d) return !1;
                        l = eX(s = eV(t, e, r = h || d, i, o), i), r === h ? (t = s, h = l) : (e = s, d = l)
                    }
                }

                function eV(t, e, i, n, o) {
                    var r, s, a = e.x - t.x,
                        l = e.y - t.y,
                        h = n.min,
                        d = n.max;
                    return 8 & i ? (r = t.x + a * (d.y - t.y) / l, s = d.y) : 4 & i ? (r = t.x + a * (h.y - t.y) / l, s = h.y) : 2 & i ? (r = d.x, s = t.y + l * (d.x - t.x) / a) : 1 & i && (r = h.x, s = t.y + l * (h.x - t.x) / a), new j(r, s, o)
                }

                function eX(t, e) {
                    var i = 0;
                    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                }

                function eY(t, e, i, n) {
                    var o, r = e.x,
                        s = e.y,
                        a = i.x - r,
                        l = i.y - s,
                        h = a * a + l * l;
                    return h > 0 && ((o = ((t.x - r) * a + (t.y - s) * l) / h) > 1 ? (r = i.x, s = i.y) : o > 0 && (r += a * o, s += l * o)), a = t.x - r, l = t.y - s, n ? a * a + l * l : new j(r, s)
                }

                function eq(t) {
                    return !I(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
                }

                function eG(t) {
                    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), eq(t)
                }

                function e$(t, e) {
                    if (!t || 0 === t.length) throw Error("latlngs not passed");
                    eq(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
                    var i, n, o, r, s, a, l, h, d = Y([0, 0]),
                        u = V(t);
                    u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (d = eF(t));
                    var c = t.length,
                        p = [];
                    for (i = 0; i < c; i++) {
                        var f = Y(t[i]);
                        p.push(e.project(Y([f.lat - d.lat, f.lng - d.lng])))
                    }
                    for (i = 0, n = 0; i < c - 1; i++) n += p[i].distanceTo(p[i + 1]) / 2;
                    if (0 === n) h = p[0];
                    else
                        for (i = 0, r = 0; i < c - 1; i++)
                            if (s = p[i], a = p[i + 1], (r += o = s.distanceTo(a)) > n) {
                                l = (r - n) / o, h = [a.x - l * (a.x - s.x), a.y - l * (a.y - s.y)];
                                break
                            } var _ = e.unproject(F(h));
                    return Y([_.lat + d.lat, _.lng + d.lng])
                }
                var eJ = {
                        project: function(t) {
                            return new j(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new X(t.y, t.x)
                        },
                        bounds: new W([-180, -90], [180, 90])
                    },
                    eQ = {
                        R: 6378137,
                        R_MINOR: 6356752.314245179,
                        bounds: new W([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                        project: function(t) {
                            var e = Math.PI / 180,
                                i = this.R,
                                n = t.lat * e,
                                o = this.R_MINOR / i,
                                r = Math.sqrt(1 - o * o),
                                s = r * Math.sin(n);
                            return n = -i * Math.log(Math.max(Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), r / 2), 1e-10)), new j(t.lng * e * i, n)
                        },
                        unproject: function(t) {
                            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, r = Math.sqrt(1 - o * o), s = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(s), l = 0, h = .1; l < 15 && Math.abs(h) > 1e-7; l++) h = Math.PI / 2 - 2 * Math.atan(s * (e = Math.pow((1 - (e = r * Math.sin(a))) / (1 + e), r / 2))) - a, a += h;
                            return new X(a * i, t.x * i / n)
                        }
                    },
                    e0 = e({}, G, {
                        code: "EPSG:3395",
                        projection: eQ,
                        transformation: Q(u = .5 / (Math.PI * eQ.R), .5, -u, .5)
                    }),
                    e1 = e({}, G, {
                        code: "EPSG:4326",
                        projection: eJ,
                        transformation: Q(1 / 180, 1, -1 / 180, .5)
                    }),
                    e2 = e({}, q, {
                        projection: eJ,
                        transformation: Q(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t) / Math.LN2
                        },
                        distance: function(t, e) {
                            var i = e.lng - t.lng,
                                n = e.lat - t.lat;
                            return Math.sqrt(i * i + n * n)
                        },
                        infinite: !0
                    });
                q.Earth = G, q.EPSG3395 = e0, q.EPSG3857 = tt, q.EPSG900913 = te, q.EPSG4326 = e1, q.Simple = e2;
                var e5 = B.extend({
                    options: {
                        pane: "overlayPane",
                        attribution: null,
                        bubblingMouseEvents: !0
                    },
                    addTo: function(t) {
                        return t.addLayer(this), this
                    },
                    remove: function() {
                        return this.removeFrom(this._map || this._mapToAdd)
                    },
                    removeFrom: function(t) {
                        return t && t.removeLayer(this), this
                    },
                    getPane: function(t) {
                        return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                    },
                    addInteractiveTarget: function(t) {
                        return this._map._targets[_(t)] = this, this
                    },
                    removeInteractiveTarget: function(t) {
                        return delete this._map._targets[_(t)], this
                    },
                    getAttribution: function() {
                        return this.options.attribution
                    },
                    _layerAdd: function(t) {
                        var e = t.target;
                        if (e.hasLayer(this)) {
                            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                                var i = this.getEvents();
                                e.on(i, this), this.once("remove", function() {
                                    e.off(i, this)
                                }, this)
                            }
                            this.onAdd(e), this.fire("add"), e.fire("layeradd", {
                                layer: this
                            })
                        }
                    }
                });
                eM.include({
                    addLayer: function(t) {
                        if (!t._layerAdd) throw Error("The provided object is not a Layer.");
                        var e = _(t);
                        return this._layers[e] || (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
                    },
                    removeLayer: function(t) {
                        var e = _(t);
                        return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                            layer: t
                        }), t.fire("remove")), t._map = t._mapToAdd = null), this
                    },
                    hasLayer: function(t) {
                        return _(t) in this._layers
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this
                    },
                    _addLayers: function(t) {
                        t = t ? I(t) ? t : [t] : [];
                        for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
                    },
                    _addZoomLimit: function(t) {
                        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[_(t)] = t, this._updateZoomLevels())
                    },
                    _removeZoomLimit: function(t) {
                        var e = _(t);
                        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
                    },
                    _updateZoomLevels: function() {
                        var t = 1 / 0,
                            e = -1 / 0,
                            i = this._getZoomSpan();
                        for (var n in this._zoomBoundLayers) {
                            var o = this._zoomBoundLayers[n].options;
                            t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                        }
                        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                    }
                });
                var e3 = e5.extend({
                        initialize: function(t, e) {
                            var i, n;
                            if (b(this, e), this._layers = {}, t)
                                for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
                        },
                        addLayer: function(t) {
                            var e = this.getLayerId(t);
                            return this._layers[e] = t, this._map && this._map.addLayer(t), this
                        },
                        removeLayer: function(t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                        },
                        hasLayer: function(t) {
                            return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
                        },
                        clearLayers: function() {
                            return this.eachLayer(this.removeLayer, this)
                        },
                        invoke: function(t) {
                            var e, i, n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                            return this
                        },
                        onAdd: function(t) {
                            this.eachLayer(t.addLayer, t)
                        },
                        onRemove: function(t) {
                            this.eachLayer(t.removeLayer, t)
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        getLayer: function(t) {
                            return this._layers[t]
                        },
                        getLayers: function() {
                            var t = [];
                            return this.eachLayer(t.push, t), t
                        },
                        setZIndex: function(t) {
                            return this.invoke("setZIndex", t)
                        },
                        getLayerId: function(t) {
                            return _(t)
                        }
                    }),
                    e4 = e3.extend({
                        addLayer: function(t) {
                            return this.hasLayer(t) ? this : (t.addEventParent(this), e3.prototype.addLayer.call(this, t), this.fire("layeradd", {
                                layer: t
                            }))
                        },
                        removeLayer: function(t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), e3.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                                layer: t
                            })) : this
                        },
                        setStyle: function(t) {
                            return this.invoke("setStyle", t)
                        },
                        bringToFront: function() {
                            return this.invoke("bringToFront")
                        },
                        bringToBack: function() {
                            return this.invoke("bringToBack")
                        },
                        getBounds: function() {
                            var t = new K;
                            for (var e in this._layers) {
                                var i = this._layers[e];
                                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                            }
                            return t
                        }
                    }),
                    e6 = Z.extend({
                        options: {
                            popupAnchor: [0, 0],
                            tooltipAnchor: [0, 0],
                            crossOrigin: !1
                        },
                        initialize: function(t) {
                            b(this, t)
                        },
                        createIcon: function(t) {
                            return this._createIcon("icon", t)
                        },
                        createShadow: function(t) {
                            return this._createIcon("shadow", t)
                        },
                        _createIcon: function(t, e) {
                            var i = this._getIconUrl(t);
                            if (!i) {
                                if ("icon" === t) throw Error("iconUrl not set in Icon options (see the docs).");
                                return null
                            }
                            var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                            return this._setIconStyles(n, t), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n
                        },
                        _setIconStyles: function(t, e) {
                            var i = this.options,
                                n = i[e + "Size"];
                            "number" == typeof n && (n = [n, n]);
                            var o = F(n),
                                r = F("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                            t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                        },
                        _createImg: function(t, e) {
                            return (e = e || document.createElement("img")).src = t, e
                        },
                        _getIconUrl: function(t) {
                            return tO.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                        }
                    }),
                    e7 = e6.extend({
                        options: {
                            iconUrl: "marker-icon.png",
                            iconRetinaUrl: "marker-icon-2x.png",
                            shadowUrl: "marker-shadow.png",
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            tooltipAnchor: [16, -28],
                            shadowSize: [41, 41]
                        },
                        _getIconUrl: function(t) {
                            return "string" != typeof e7.imagePath && (e7.imagePath = this._detectIconPath()), (this.options.imagePath || e7.imagePath) + e6.prototype._getIconUrl.call(this, t)
                        },
                        _stripUrl: function(t) {
                            var e = function(t, e, i) {
                                var n = e.exec(t);
                                return n && n[i]
                            };
                            return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1)
                        },
                        _detectIconPath: function() {
                            var t = t0("div", "leaflet-default-icon-path", document.body),
                                e = tQ(t, "background-image") || tQ(t, "backgroundImage");
                            if (document.body.removeChild(t), e = this._stripUrl(e)) return e;
                            var i = document.querySelector('link[href$="leaflet.css"]');
                            return i ? i.href.substring(0, i.href.length - 11 - 1) : ""
                        }
                    }),
                    e8 = eZ.extend({
                        initialize: function(t) {
                            this._marker = t
                        },
                        addHooks: function() {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new eB(t, t, !0)), this._draggable.on({
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this).enable(), t6(t, "leaflet-marker-draggable")
                        },
                        removeHooks: function() {
                            this._draggable.off({
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this).disable(), this._marker._icon && t7(this._marker._icon, "leaflet-marker-draggable")
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _adjustPan: function(t) {
                            var e = this._marker,
                                i = e._map,
                                n = this._marker.options.autoPanSpeed,
                                o = this._marker.options.autoPanPadding,
                                r = eo(e._icon),
                                s = i.getPixelBounds(),
                                a = i.getPixelOrigin(),
                                l = U(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
                            if (!l.contains(r)) {
                                var h = F((Math.max(l.max.x, r.x) - l.max.x) / (s.max.x - l.max.x) - (Math.min(l.min.x, r.x) - l.min.x) / (s.min.x - l.min.x), (Math.max(l.max.y, r.y) - l.max.y) / (s.max.y - l.max.y) - (Math.min(l.min.y, r.y) - l.min.y) / (s.min.y - l.min.y)).multiplyBy(n);
                                i.panBy(h, {
                                    animate: !1
                                }), this._draggable._newPos._add(h), this._draggable._startPos._add(h), en(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = N(this._adjustPan.bind(this, t))
                            }
                        },
                        _onDragStart: function() {
                            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
                        },
                        _onPreDrag: function(t) {
                            this._marker.options.autoPan && (O(this._panRequest), this._panRequest = N(this._adjustPan.bind(this, t)))
                        },
                        _onDrag: function(t) {
                            var e = this._marker,
                                i = e._shadow,
                                n = eo(e._icon),
                                o = e._map.layerPointToLatLng(n);
                            i && en(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                        },
                        _onDragEnd: function(t) {
                            O(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                        }
                    }),
                    e9 = e5.extend({
                        options: {
                            icon: new e7,
                            interactive: !0,
                            keyboard: !0,
                            title: "",
                            alt: "Marker",
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250,
                            pane: "markerPane",
                            shadowPane: "shadowPane",
                            bubblingMouseEvents: !1,
                            autoPanOnFocus: !0,
                            draggable: !1,
                            autoPan: !1,
                            autoPanPadding: [50, 50],
                            autoPanSpeed: 10
                        },
                        initialize: function(t, e) {
                            b(this, e), this._latlng = Y(t)
                        },
                        onAdd: function(t) {
                            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                        },
                        onRemove: function(t) {
                            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                        },
                        getEvents: function() {
                            return {
                                zoom: this.update,
                                viewreset: this.update
                            }
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            var e = this._latlng;
                            return this._latlng = Y(t), this.update(), this.fire("move", {
                                oldLatLng: e,
                                latlng: this._latlng
                            })
                        },
                        setZIndexOffset: function(t) {
                            return this.options.zIndexOffset = t, this.update()
                        },
                        getIcon: function() {
                            return this.options.icon
                        },
                        setIcon: function(t) {
                            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                        },
                        getElement: function() {
                            return this._icon
                        },
                        update: function() {
                            if (this._icon && this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng).round();
                                this._setPos(t)
                            }
                            return this
                        },
                        _initIcon: function() {
                            var t = this.options,
                                e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                                i = t.icon.createIcon(this._icon),
                                n = !1;
                            i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), t6(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
                                mouseover: this._bringToFront,
                                mouseout: this._resetZIndex
                            }), this.options.autoPanOnFocus && ec(i, "focus", this._panOnFocus, this);
                            var o = t.icon.createShadow(this._shadow),
                                r = !1;
                            o !== this._shadow && (this._removeShadow(), r = !0), o && (t6(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane(t.shadowPane).appendChild(this._shadow)
                        },
                        _removeIcon: function() {
                            this.options.riseOnHover && this.off({
                                mouseover: this._bringToFront,
                                mouseout: this._resetZIndex
                            }), this.options.autoPanOnFocus && ef(this._icon, "focus", this._panOnFocus, this), t1(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                        },
                        _removeShadow: function() {
                            this._shadow && t1(this._shadow), this._shadow = null
                        },
                        _setPos: function(t) {
                            this._icon && en(this._icon, t), this._shadow && en(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                        },
                        _updateZIndex: function(t) {
                            this._icon && (this._icon.style.zIndex = this._zIndex + t)
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e)
                        },
                        _initInteraction: function() {
                            if (this.options.interactive && (t6(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), e8)) {
                                var t = this.options.draggable;
                                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new e8(this), t && this.dragging.enable()
                            }
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        _updateOpacity: function() {
                            var t = this.options.opacity;
                            this._icon && et(this._icon, t), this._shadow && et(this._shadow, t)
                        },
                        _bringToFront: function() {
                            this._updateZIndex(this.options.riseOffset)
                        },
                        _resetZIndex: function() {
                            this._updateZIndex(0)
                        },
                        _panOnFocus: function() {
                            var t = this._map;
                            if (t) {
                                var e = this.options.icon.options,
                                    i = e.iconSize ? F(e.iconSize) : F(0, 0),
                                    n = e.iconAnchor ? F(e.iconAnchor) : F(0, 0);
                                t.panInside(this._latlng, {
                                    paddingTopLeft: n,
                                    paddingBottomRight: i.subtract(n)
                                })
                            }
                        },
                        _getPopupAnchor: function() {
                            return this.options.icon.options.popupAnchor
                        },
                        _getTooltipAnchor: function() {
                            return this.options.icon.options.tooltipAnchor
                        }
                    }),
                    it = e5.extend({
                        options: {
                            stroke: !0,
                            color: "#3388ff",
                            weight: 3,
                            opacity: 1,
                            lineCap: "round",
                            lineJoin: "round",
                            dashArray: null,
                            dashOffset: null,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: .2,
                            fillRule: "evenodd",
                            interactive: !0,
                            bubblingMouseEvents: !0
                        },
                        beforeAdd: function(t) {
                            this._renderer = t.getRenderer(this)
                        },
                        onAdd: function() {
                            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                        },
                        onRemove: function() {
                            this._renderer._removePath(this)
                        },
                        redraw: function() {
                            return this._map && this._renderer._updatePath(this), this
                        },
                        setStyle: function(t) {
                            return b(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
                        },
                        bringToFront: function() {
                            return this._renderer && this._renderer._bringToFront(this), this
                        },
                        bringToBack: function() {
                            return this._renderer && this._renderer._bringToBack(this), this
                        },
                        getElement: function() {
                            return this._path
                        },
                        _reset: function() {
                            this._project(), this._update()
                        },
                        _clickTolerance: function() {
                            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
                        }
                    }),
                    ie = it.extend({
                        options: {
                            fill: !0,
                            radius: 10
                        },
                        initialize: function(t, e) {
                            b(this, e), this._latlng = Y(t), this._radius = this.options.radius
                        },
                        setLatLng: function(t) {
                            var e = this._latlng;
                            return this._latlng = Y(t), this.redraw(), this.fire("move", {
                                oldLatLng: e,
                                latlng: this._latlng
                            })
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setRadius: function(t) {
                            return this.options.radius = this._radius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._radius
                        },
                        setStyle: function(t) {
                            var e = t && t.radius || this._radius;
                            return it.prototype.setStyle.call(this, t), this.setRadius(e), this
                        },
                        _project: function() {
                            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                        },
                        _updateBounds: function() {
                            var t = this._radius,
                                e = this._radiusY || t,
                                i = this._clickTolerance(),
                                n = [t + i, e + i];
                            this._pxBounds = new W(this._point.subtract(n), this._point.add(n))
                        },
                        _update: function() {
                            this._map && this._updatePath()
                        },
                        _updatePath: function() {
                            this._renderer._updateCircle(this)
                        },
                        _empty: function() {
                            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                        },
                        _containsPoint: function(t) {
                            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                        }
                    }),
                    ii = ie.extend({
                        initialize: function(t, i, n) {
                            if ("number" == typeof i && (i = e({}, n, {
                                    radius: i
                                })), b(this, i), this._latlng = Y(t), isNaN(this.options.radius)) throw Error("Circle radius cannot be NaN");
                            this._mRadius = this.options.radius
                        },
                        setRadius: function(t) {
                            return this._mRadius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._mRadius
                        },
                        getBounds: function() {
                            var t = [this._radius, this._radiusY || this._radius];
                            return new K(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                        },
                        setStyle: it.prototype.setStyle,
                        _project: function() {
                            var t = this._latlng.lng,
                                e = this._latlng.lat,
                                i = this._map,
                                n = i.options.crs;
                            if (n.distance === G.distance) {
                                var o = Math.PI / 180,
                                    r = this._mRadius / G.R / o,
                                    s = i.project([e + r, t]),
                                    a = i.project([e - r, t]),
                                    l = s.add(a).divideBy(2),
                                    h = i.unproject(l).lat,
                                    d = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(h * o)) / (Math.cos(e * o) * Math.cos(h * o))) / o;
                                (isNaN(d) || 0 === d) && (d = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()), this._radius = isNaN(d) ? 0 : l.x - i.project([h, t - d]).x, this._radiusY = l.y - s.y
                            } else {
                                var u = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                                this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(u).x
                            }
                            this._updateBounds()
                        }
                    }),
                    io = it.extend({
                        options: {
                            smoothFactor: 1,
                            noClip: !1
                        },
                        initialize: function(t, e) {
                            b(this, e), this._setLatLngs(t)
                        },
                        getLatLngs: function() {
                            return this._latlngs
                        },
                        setLatLngs: function(t) {
                            return this._setLatLngs(t), this.redraw()
                        },
                        isEmpty: function() {
                            return !this._latlngs.length
                        },
                        closestLayerPoint: function(t) {
                            for (var e, i, n = 1 / 0, o = null, r = eY, s = 0, a = this._parts.length; s < a; s++)
                                for (var l = this._parts[s], h = 1, d = l.length; h < d; h++) {
                                    var u = r(t, e = l[h - 1], i = l[h], !0);
                                    u < n && (n = u, o = r(t, e, i))
                                }
                            return o && (o.distance = Math.sqrt(n)), o
                        },
                        getCenter: function() {
                            if (!this._map) throw Error("Must add layer to map before using getCenter()");
                            return e$(this._defaultShape(), this._map.options.crs)
                        },
                        getBounds: function() {
                            return this._bounds
                        },
                        addLatLng: function(t, e) {
                            return e = e || this._defaultShape(), t = Y(t), e.push(t), this._bounds.extend(t), this.redraw()
                        },
                        _setLatLngs: function(t) {
                            this._bounds = new K, this._latlngs = this._convertLatLngs(t)
                        },
                        _defaultShape: function() {
                            return eq(this._latlngs) ? this._latlngs : this._latlngs[0]
                        },
                        _convertLatLngs: function(t) {
                            for (var e = [], i = eq(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = Y(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                            return e
                        },
                        _project: function() {
                            var t = new W;
                            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
                        },
                        _updateBounds: function() {
                            var t = this._clickTolerance(),
                                e = new j(t, t);
                            this._rawPxBounds && (this._pxBounds = new W([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]))
                        },
                        _projectLatlngs: function(t, e, i) {
                            var n, o, r = t[0] instanceof X,
                                s = t.length;
                            if (r) {
                                for (n = 0, o = []; n < s; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                                e.push(o)
                            } else
                                for (n = 0; n < s; n++) this._projectLatlngs(t[n], e, i)
                        },
                        _clipPoints: function() {
                            var t = this._renderer._bounds;
                            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                                if (this.options.noClip) {
                                    this._parts = this._rings;
                                    return
                                }
                                var e, i, n, o, r, s, a, l = this._parts;
                                for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                                    for (i = 0, r = (a = this._rings[e]).length; i < r - 1; i++)(s = eK(a[i], a[i + 1], t, i, !0)) && (l[n] = l[n] || [], l[n].push(s[0]), (s[1] !== a[i + 1] || i === r - 2) && (l[n].push(s[1]), n++))
                            }
                        },
                        _simplifyPoints: function() {
                            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = eW(t[i], e)
                        },
                        _update: function() {
                            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                        },
                        _updatePath: function() {
                            this._renderer._updatePoly(this)
                        },
                        _containsPoint: function(t, e) {
                            var i, n, o, r, s, a, l = this._clickTolerance();
                            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                            for (i = 0, r = this._parts.length; i < r; i++)
                                for (n = 0, o = (s = (a = this._parts[i]).length) - 1; n < s; o = n++)
                                    if ((e || 0 !== n) && eU(t, a[o], a[n]) <= l) return !0;
                            return !1
                        }
                    });
                io._flat = eG;
                var ir = io.extend({
                        options: {
                            fill: !0
                        },
                        isEmpty: function() {
                            return !this._latlngs.length || !this._latlngs[0].length
                        },
                        getCenter: function() {
                            if (!this._map) throw Error("Must add layer to map before using getCenter()");
                            return eH(this._defaultShape(), this._map.options.crs)
                        },
                        _convertLatLngs: function(t) {
                            var e = io.prototype._convertLatLngs.call(this, t),
                                i = e.length;
                            return i >= 2 && e[0] instanceof X && e[0].equals(e[i - 1]) && e.pop(), e
                        },
                        _setLatLngs: function(t) {
                            io.prototype._setLatLngs.call(this, t), eq(this._latlngs) && (this._latlngs = [this._latlngs])
                        },
                        _defaultShape: function() {
                            return eq(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                        },
                        _clipPoints: function() {
                            var t = this._renderer._bounds,
                                e = this.options.weight,
                                i = new j(e, e);
                            if (t = new W(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                                if (this.options.noClip) {
                                    this._parts = this._rings;
                                    return
                                }
                                for (var n, o = 0, r = this._rings.length; o < r; o++)(n = ej(this._rings[o], t, !0)).length && this._parts.push(n)
                            }
                        },
                        _updatePath: function() {
                            this._renderer._updatePoly(this, !0)
                        },
                        _containsPoint: function(t) {
                            var e, i, n, o, r, s, a, l, h = !1;
                            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                            for (o = 0, a = this._parts.length; o < a; o++)
                                for (r = 0, s = (l = (e = this._parts[o]).length) - 1; r < l; s = r++) i = e[r], n = e[s], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (h = !h);
                            return h || io.prototype._containsPoint.call(this, t, !0)
                        }
                    }),
                    is = e4.extend({
                        initialize: function(t, e) {
                            b(this, e), this._layers = {}, t && this.addData(t)
                        },
                        addData: function(t) {
                            var e, i, n, o = I(t) ? t : t.features;
                            if (o) {
                                for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                                return this
                            }
                            var r = this.options;
                            if (r.filter && !r.filter(t)) return this;
                            var s = ia(t, r);
                            return s ? (s.feature = i_(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this
                        },
                        resetStyle: function(t) {
                            return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
                        },
                        setStyle: function(t) {
                            return this.eachLayer(function(e) {
                                this._setLayerStyle(e, t)
                            }, this)
                        },
                        _setLayerStyle: function(t, e) {
                            t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
                        }
                    });

                function ia(t, e) {
                    var i, n, o, r = "Feature" === t.type ? t.geometry : t,
                        s = r ? r.coordinates : null,
                        a = [],
                        l = e && e.pointToLayer,
                        h = e && e.coordsToLatLng || ih;
                    if (!s && !r) return null;
                    switch (r.type) {
                        case "Point":
                            return il(l, t, i = h(s), e);
                        case "MultiPoint":
                            for (n = 0, o = s.length; n < o; n++) i = h(s[n]), a.push(il(l, t, i, e));
                            return new e4(a);
                        case "LineString":
                        case "MultiLineString":
                            return new io(id(s, +("LineString" !== r.type), h), e);
                        case "Polygon":
                        case "MultiPolygon":
                            return new ir(id(s, "Polygon" === r.type ? 1 : 2, h), e);
                        case "GeometryCollection":
                            for (n = 0, o = r.geometries.length; n < o; n++) {
                                var d = ia({
                                    geometry: r.geometries[n],
                                    type: "Feature",
                                    properties: t.properties
                                }, e);
                                d && a.push(d)
                            }
                            return new e4(a);
                        case "FeatureCollection":
                            for (n = 0, o = r.features.length; n < o; n++) {
                                var u = ia(r.features[n], e);
                                u && a.push(u)
                            }
                            return new e4(a);
                        default:
                            throw Error("Invalid GeoJSON object.")
                    }
                }

                function il(t, e, i, n) {
                    return t ? t(e, i) : new e9(i, n && n.markersInheritOptions && n)
                }

                function ih(t) {
                    return new X(t[1], t[0], t[2])
                }

                function id(t, e, i) {
                    for (var n = [], o = 0, r = t.length; o < r; o++) n.push(e ? id(t[o], e - 1, i) : (i || ih)(t[o]));
                    return n
                }

                function iu(t, e) {
                    return void 0 !== (t = Y(t)).alt ? [y(t.lng, e), y(t.lat, e), y(t.alt, e)] : [y(t.lng, e), y(t.lat, e)]
                }

                function ic(t, e, i, n) {
                    for (var o = [], r = 0, s = t.length; r < s; r++) o.push(e ? ic(t[r], eq(t[r]) ? 0 : e - 1, i, n) : iu(t[r], n));
                    return !e && i && o.length > 0 && o.push(o[0].slice()), o
                }

                function ip(t, i) {
                    return t.feature ? e({}, t.feature, {
                        geometry: i
                    }) : i_(i)
                }

                function i_(t) {
                    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                        type: "Feature",
                        properties: {},
                        geometry: t
                    }
                }
                var im = {
                    toGeoJSON: function(t) {
                        return ip(this, {
                            type: "Point",
                            coordinates: iu(this.getLatLng(), t)
                        })
                    }
                };

                function ig(t, e) {
                    return new is(t, e)
                }
                e9.include(im), ii.include(im), ie.include(im), io.include({
                    toGeoJSON: function(t) {
                        var e = !eq(this._latlngs),
                            i = ic(this._latlngs, +!!e, !1, t);
                        return ip(this, {
                            type: (e ? "Multi" : "") + "LineString",
                            coordinates: i
                        })
                    }
                }), ir.include({
                    toGeoJSON: function(t) {
                        var e = !eq(this._latlngs),
                            i = e && !eq(this._latlngs[0]),
                            n = ic(this._latlngs, i ? 2 : +!!e, !0, t);
                        return e || (n = [n]), ip(this, {
                            type: (i ? "Multi" : "") + "Polygon",
                            coordinates: n
                        })
                    }
                }), e3.include({
                    toMultiPoint: function(t) {
                        var e = [];
                        return this.eachLayer(function(i) {
                            e.push(i.toGeoJSON(t).geometry.coordinates)
                        }), ip(this, {
                            type: "MultiPoint",
                            coordinates: e
                        })
                    },
                    toGeoJSON: function(t) {
                        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                        if ("MultiPoint" === e) return this.toMultiPoint(t);
                        var i = "GeometryCollection" === e,
                            n = [];
                        return (this.eachLayer(function(e) {
                            if (e.toGeoJSON) {
                                var o = e.toGeoJSON(t);
                                if (i) n.push(o.geometry);
                                else {
                                    var r = i_(o);
                                    "FeatureCollection" === r.type ? n.push.apply(n, r.features) : n.push(r)
                                }
                            }
                        }), i) ? ip(this, {
                            geometries: n,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: n
                        }
                    }
                });
                var iv = e5.extend({
                        options: {
                            opacity: 1,
                            alt: "",
                            interactive: !1,
                            crossOrigin: !1,
                            errorOverlayUrl: "",
                            zIndex: 1,
                            className: ""
                        },
                        initialize: function(t, e, i) {
                            this._url = t, this._bounds = V(e), b(this, i)
                        },
                        onAdd: function() {
                            !this._image && (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (t6(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                        },
                        onRemove: function() {
                            t1(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._image && this._updateOpacity(), this
                        },
                        setStyle: function(t) {
                            return t.opacity && this.setOpacity(t.opacity), this
                        },
                        bringToFront: function() {
                            return this._map && t5(this._image), this
                        },
                        bringToBack: function() {
                            return this._map && t3(this._image), this
                        },
                        setUrl: function(t) {
                            return this._url = t, this._image && (this._image.src = t), this
                        },
                        setBounds: function(t) {
                            return this._bounds = V(t), this._map && this._reset(), this
                        },
                        getEvents: function() {
                            var t = {
                                zoom: this._reset,
                                viewreset: this._reset
                            };
                            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        getBounds: function() {
                            return this._bounds
                        },
                        getElement: function() {
                            return this._image
                        },
                        _initImage: function() {
                            var t = "IMG" === this._url.tagName,
                                e = this._image = t ? this._url : t0("img");
                            if (t6(e, "leaflet-image-layer"), this._zoomAnimated && t6(e, "leaflet-zoom-animated"), this.options.className && t6(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onload = p(this.fire, this, "load"), e.onerror = p(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
                                this._url = e.src;
                                return
                            }
                            e.src = this._url, e.alt = this.options.alt
                        },
                        _animateZoom: function(t) {
                            var e = this._map.getZoomScale(t.zoom),
                                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                            ei(this._image, i, e)
                        },
                        _reset: function() {
                            var t = this._image,
                                e = new W(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                                i = e.getSize();
                            en(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
                        },
                        _updateOpacity: function() {
                            et(this._image, this.options.opacity)
                        },
                        _updateZIndex: function() {
                            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                        },
                        _overlayOnError: function() {
                            this.fire("error");
                            var t = this.options.errorOverlayUrl;
                            t && this._url !== t && (this._url = t, this._image.src = t)
                        },
                        getCenter: function() {
                            return this._bounds.getCenter()
                        }
                    }),
                    iy = iv.extend({
                        options: {
                            autoplay: !0,
                            loop: !0,
                            keepAspectRatio: !0,
                            muted: !1,
                            playsInline: !0
                        },
                        _initImage: function() {
                            var t = "VIDEO" === this._url.tagName,
                                e = this._image = t ? this._url : t0("video");
                            if (t6(e, "leaflet-image-layer"), this._zoomAnimated && t6(e, "leaflet-zoom-animated"), this.options.className && t6(e, this.options.className), e.onselectstart = v, e.onmousemove = v, e.onloadeddata = p(this.fire, this, "load"), t) {
                                for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
                                this._url = i.length > 0 ? n : [e.src];
                                return
                            }
                            I(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
                            for (var r = 0; r < this._url.length; r++) {
                                var s = t0("source");
                                s.src = this._url[r], e.appendChild(s)
                            }
                        }
                    }),
                    ix = iv.extend({
                        _initImage: function() {
                            var t = this._image = this._url;
                            t6(t, "leaflet-image-layer"), this._zoomAnimated && t6(t, "leaflet-zoom-animated"), this.options.className && t6(t, this.options.className), t.onselectstart = v, t.onmousemove = v
                        }
                    }),
                    iw = e5.extend({
                        options: {
                            interactive: !1,
                            offset: [0, 0],
                            className: "",
                            pane: void 0,
                            content: ""
                        },
                        initialize: function(t, e) {
                            t && (t instanceof X || I(t)) ? (this._latlng = Y(t), b(this, e)) : (b(this, t), this._source = e), this.options.content && (this._content = this.options.content)
                        },
                        openOn: function(t) {
                            return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this
                        },
                        close: function() {
                            return this._map && this._map.removeLayer(this), this
                        },
                        toggle: function(t) {
                            return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this
                        },
                        onAdd: function(t) {
                            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && et(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && et(this._container, 1), this.bringToFront(), this.options.interactive && (t6(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container))
                        },
                        onRemove: function(t) {
                            t._fadeAnimated ? (et(this._container, 0), this._removeTimeout = setTimeout(p(t1, void 0, this._container), 200)) : t1(this._container), this.options.interactive && (t7(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container))
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = Y(t), this._map && (this._updatePosition(), this._adjustPan()), this
                        },
                        getContent: function() {
                            return this._content
                        },
                        setContent: function(t) {
                            return this._content = t, this.update(), this
                        },
                        getElement: function() {
                            return this._container
                        },
                        update: function() {
                            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                        },
                        getEvents: function() {
                            var t = {
                                zoom: this._updatePosition,
                                viewreset: this._updatePosition
                            };
                            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        isOpen: function() {
                            return !!this._map && this._map.hasLayer(this)
                        },
                        bringToFront: function() {
                            return this._map && t5(this._container), this
                        },
                        bringToBack: function() {
                            return this._map && t3(this._container), this
                        },
                        _prepareOpen: function(t) {
                            var e = this._source;
                            if (!e._map) return !1;
                            if (e instanceof e4) {
                                e = null;
                                var i = this._source._layers;
                                for (var n in i)
                                    if (i[n]._map) {
                                        e = i[n];
                                        break
                                    } if (!e) return !1;
                                this._source = e
                            }
                            if (!t)
                                if (e.getCenter) t = e.getCenter();
                                else if (e.getLatLng) t = e.getLatLng();
                            else if (e.getBounds) t = e.getBounds().getCenter();
                            else throw Error("Unable to get source layer LatLng.");
                            return this.setLatLng(t), this._map && this.update(), !0
                        },
                        _updateContent: function() {
                            if (this._content) {
                                var t = this._contentNode,
                                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                                if ("string" == typeof e) t.innerHTML = e;
                                else {
                                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                                    t.appendChild(e)
                                }
                                this.fire("contentupdate")
                            }
                        },
                        _updatePosition: function() {
                            if (this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng),
                                    e = F(this.options.offset),
                                    i = this._getAnchor();
                                this._zoomAnimated ? en(this._container, t.add(i)) : e = e.add(t).add(i);
                                var n = this._containerBottom = -e.y,
                                    o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                                this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                            }
                        },
                        _getAnchor: function() {
                            return [0, 0]
                        }
                    });
                eM.include({
                    _initOverlay: function(t, e, i, n) {
                        var o = e;
                        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o
                    }
                }), e5.include({
                    _initOverlay: function(t, e, i, n) {
                        var o = i;
                        return o instanceof t ? (b(o, n), o._source = this) : (o = e && !n ? e : new t(n, this)).setContent(i), o
                    }
                });
                var ib = iw.extend({
                    options: {
                        pane: "popupPane",
                        offset: [0, 7],
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        closeOnEscapeKey: !0,
                        className: ""
                    },
                    openOn: function(t) {
                        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, iw.prototype.openOn.call(this, t)
                    },
                    onAdd: function(t) {
                        iw.prototype.onAdd.call(this, t), t.fire("popupopen", {
                            popup: this
                        }), this._source && (this._source.fire("popupopen", {
                            popup: this
                        }, !0), this._source instanceof it || this._source.on("preclick", ey))
                    },
                    onRemove: function(t) {
                        iw.prototype.onRemove.call(this, t), t.fire("popupclose", {
                            popup: this
                        }), this._source && (this._source.fire("popupclose", {
                            popup: this
                        }, !0), this._source instanceof it || this._source.off("preclick", ey))
                    },
                    getEvents: function() {
                        var t = iw.prototype.getEvents.call(this);
                        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t
                    },
                    _initLayout: function() {
                        var t = "leaflet-popup",
                            e = this._container = t0("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                            i = this._wrapper = t0("div", t + "-content-wrapper", e);
                        if (this._contentNode = t0("div", t + "-content", i), ew(e), ex(this._contentNode), ec(e, "contextmenu", ey), this._tipContainer = t0("div", t + "-tip-container", e), this._tip = t0("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                            var n = this._closeButton = t0("a", t + "-close-button", e);
                            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', ec(n, "click", function(t) {
                                eb(t), this.close()
                            }, this)
                        }
                    },
                    _updateLayout: function() {
                        var t = this._contentNode,
                            e = t.style;
                        e.width = "", e.whiteSpace = "nowrap";
                        var i = t.offsetWidth;
                        e.width = (i = Math.max(i = Math.min(i, this.options.maxWidth), this.options.minWidth)) + 1 + "px", e.whiteSpace = "", e.height = "";
                        var n = t.offsetHeight,
                            o = this.options.maxHeight,
                            r = "leaflet-popup-scrolled";
                        o && n > o ? (e.height = o + "px", t6(t, r)) : t7(t, r), this._containerWidth = this._container.offsetWidth
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                            i = this._getAnchor();
                        en(this._container, e.add(i))
                    },
                    _adjustPan: function() {
                        if (this.options.autoPan) {
                            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
                                this._autopanning = !1;
                                return
                            }
                            var t = this._map,
                                e = parseInt(tQ(this._container, "marginBottom"), 10) || 0,
                                i = this._container.offsetHeight + e,
                                n = this._containerWidth,
                                o = new j(this._containerLeft, -i - this._containerBottom);
                            o._add(eo(this._container));
                            var r = t.layerPointToContainerPoint(o),
                                s = F(this.options.autoPanPadding),
                                a = F(this.options.autoPanPaddingTopLeft || s),
                                l = F(this.options.autoPanPaddingBottomRight || s),
                                h = t.getSize(),
                                d = 0,
                                u = 0;
                            r.x + n + l.x > h.x && (d = r.x + n - h.x + l.x), r.x - d - a.x < 0 && (d = r.x - a.x), r.y + i + l.y > h.y && (u = r.y + i - h.y + l.y), r.y - u - a.y < 0 && (u = r.y - a.y), (d || u) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([d, u]))
                        }
                    },
                    _getAnchor: function() {
                        return F(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                    }
                });
                eM.mergeOptions({
                    closePopupOnClick: !0
                }), eM.include({
                    openPopup: function(t, e, i) {
                        return this._initOverlay(ib, t, e, i).openOn(this), this
                    },
                    closePopup: function(t) {
                        return t = arguments.length ? t : this._popup, t && t.close(), this
                    }
                }), e5.include({
                    bindPopup: function(t, e) {
                        return this._popup = this._initOverlay(ib, this._popup, t, e), this._popupHandlersAdded || (this.on({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !0), this
                    },
                    unbindPopup: function() {
                        return this._popup && (this.off({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !1, this._popup = null), this
                    },
                    openPopup: function(t) {
                        return this._popup && (this instanceof e4 || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this
                    },
                    closePopup: function() {
                        return this._popup && this._popup.close(), this
                    },
                    togglePopup: function() {
                        return this._popup && this._popup.toggle(this), this
                    },
                    isPopupOpen: function() {
                        return !!this._popup && this._popup.isOpen()
                    },
                    setPopupContent: function(t) {
                        return this._popup && this._popup.setContent(t), this
                    },
                    getPopup: function() {
                        return this._popup
                    },
                    _openPopup: function(t) {
                        if (this._popup && this._map) {
                            eC(t);
                            var e = t.layer || t.target;
                            if (this._popup._source === e && !(e instanceof it)) return void(this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
                            this._popup._source = e, this.openPopup(t.latlng)
                        }
                    },
                    _movePopup: function(t) {
                        this._popup.setLatLng(t.latlng)
                    },
                    _onKeyPress: function(t) {
                        13 === t.originalEvent.keyCode && this._openPopup(t)
                    }
                });
                var iC = iw.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [0, 0],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        iw.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                            tooltip: this
                        }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0))
                    },
                    onRemove: function(t) {
                        iw.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                            tooltip: this
                        }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0))
                    },
                    getEvents: function() {
                        var t = iw.prototype.getEvents.call(this);
                        return this.options.permanent || (t.preclick = this.close), t
                    },
                    _initLayout: function() {
                        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                        this._contentNode = this._container = t0("div", t), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + _(this))
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var e, i, n = this._map,
                            o = this._container,
                            r = n.latLngToContainerPoint(n.getCenter()),
                            s = n.layerPointToContainerPoint(t),
                            a = this.options.direction,
                            l = o.offsetWidth,
                            h = o.offsetHeight,
                            d = F(this.options.offset),
                            u = this._getAnchor();
                        "top" === a ? (e = l / 2, i = h) : "bottom" === a ? (e = l / 2, i = 0) : ("center" === a ? e = l / 2 : "right" === a ? e = 0 : "left" === a ? e = l : s.x < r.x ? (a = "right", e = 0) : (a = "left", e = l + (d.x + u.x) * 2), i = h / 2), t = t.subtract(F(e, i, !0)).add(d).add(u), t7(o, "leaflet-tooltip-right"), t7(o, "leaflet-tooltip-left"), t7(o, "leaflet-tooltip-top"), t7(o, "leaflet-tooltip-bottom"), t6(o, "leaflet-tooltip-" + a), en(o, t)
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t)
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t, this._container && et(this._container, t)
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(e)
                    },
                    _getAnchor: function() {
                        return F(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                    }
                });
                eM.include({
                    openTooltip: function(t, e, i) {
                        return this._initOverlay(iC, t, e, i).openOn(this), this
                    },
                    closeTooltip: function(t) {
                        return t.close(), this
                    }
                }), e5.include({
                    bindTooltip: function(t, e) {
                        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(iC, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                    },
                    unbindTooltip: function() {
                        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                    },
                    _initTooltipInteractions: function(t) {
                        if (t || !this._tooltipHandlersAdded) {
                            var e = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip
                            };
                            this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, e.click = this._openTooltip, this._map ? this._addFocusListeners() : e.add = this._addFocusListeners), this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), this[t ? "off" : "on"](e), this._tooltipHandlersAdded = !t
                        }
                    },
                    openTooltip: function(t) {
                        return this._tooltip && (this instanceof e4 || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this
                    },
                    closeTooltip: function() {
                        if (this._tooltip) return this._tooltip.close()
                    },
                    toggleTooltip: function() {
                        return this._tooltip && this._tooltip.toggle(this), this
                    },
                    isTooltipOpen: function() {
                        return this._tooltip.isOpen()
                    },
                    setTooltipContent: function(t) {
                        return this._tooltip && this._tooltip.setContent(t), this
                    },
                    getTooltip: function() {
                        return this._tooltip
                    },
                    _addFocusListeners: function() {
                        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
                    },
                    _addFocusListenersOnLayer: function(t) {
                        var e = "function" == typeof t.getElement && t.getElement();
                        e && (ec(e, "focus", function() {
                            this._tooltip._source = t, this.openTooltip()
                        }, this), ec(e, "blur", this.closeTooltip, this))
                    },
                    _setAriaDescribedByOnLayer: function(t) {
                        var e = "function" == typeof t.getElement && t.getElement();
                        e && e.setAttribute("aria-describedby", this._tooltip._container.id)
                    },
                    _openTooltip: function(t) {
                        if (this._tooltip && this._map) {
                            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                                this._openOnceFlag = !0;
                                var e = this;
                                this._map.once("moveend", function() {
                                    e._openOnceFlag = !1, e._openTooltip(t)
                                });
                                return
                            }
                            this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)
                        }
                    },
                    _moveTooltip: function(t) {
                        var e, i, n = t.latlng;
                        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
                    }
                });
                var iT = e6.extend({
                    options: {
                        iconSize: [12, 12],
                        html: !1,
                        bgPos: null,
                        className: "leaflet-div-icon"
                    },
                    createIcon: function(t) {
                        var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                            i = this.options;
                        if (i.html instanceof Element ? (t2(e), e.appendChild(i.html)) : e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                            var n = F(i.bgPos);
                            e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                        }
                        return this._setIconStyles(e, "icon"), e
                    },
                    createShadow: function() {
                        return null
                    }
                });
                e6.Default = e7;
                var iP = e5.extend({
                        options: {
                            tileSize: 256,
                            opacity: 1,
                            updateWhenIdle: tO.mobile,
                            updateWhenZooming: !0,
                            updateInterval: 200,
                            zIndex: 1,
                            bounds: null,
                            minZoom: 0,
                            maxZoom: void 0,
                            maxNativeZoom: void 0,
                            minNativeZoom: void 0,
                            noWrap: !1,
                            pane: "tilePane",
                            className: "",
                            keepBuffer: 2
                        },
                        initialize: function(t) {
                            b(this, t)
                        },
                        onAdd: function() {
                            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView()
                        },
                        beforeAdd: function(t) {
                            t._addZoomLimit(this)
                        },
                        onRemove: function(t) {
                            this._removeAllTiles(), t1(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
                        },
                        bringToFront: function() {
                            return this._map && (t5(this._container), this._setAutoZIndex(Math.max)), this
                        },
                        bringToBack: function() {
                            return this._map && (t3(this._container), this._setAutoZIndex(Math.min)), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._updateOpacity(), this
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        isLoading: function() {
                            return this._loading
                        },
                        redraw: function() {
                            if (this._map) {
                                this._removeAllTiles();
                                var t = this._clampZoom(this._map.getZoom());
                                t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()
                            }
                            return this
                        },
                        getEvents: function() {
                            var t = {
                                viewprereset: this._invalidateAll,
                                viewreset: this._resetView,
                                zoom: this._resetView,
                                moveend: this._onMoveEnd
                            };
                            return this.options.updateWhenIdle || (this._onMove || (this._onMove = m(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        createTile: function() {
                            return document.createElement("div")
                        },
                        getTileSize: function() {
                            var t = this.options.tileSize;
                            return t instanceof j ? t : new j(t, t)
                        },
                        _updateZIndex: function() {
                            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                        },
                        _setAutoZIndex: function(t) {
                            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, r = i.length; o < r; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
                        },
                        _updateOpacity: function() {
                            if (this._map && !tO.ielt9) {
                                et(this._container, this.options.opacity);
                                var t = +new Date,
                                    e = !1,
                                    i = !1;
                                for (var n in this._tiles) {
                                    var o = this._tiles[n];
                                    if (o.current && o.loaded) {
                                        var r = Math.min(1, (t - o.loaded) / 200);
                                        et(o.el, r), r < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                                    }
                                }
                                i && !this._noPrune && this._pruneTiles(), e && (O(this._fadeFrame), this._fadeFrame = N(this._updateOpacity, this))
                            }
                        },
                        _onOpaqueTile: v,
                        _initContainer: function() {
                            this._container || (this._container = t0("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                        },
                        _updateLevels: function() {
                            var t = this._tileZoom,
                                e = this.options.maxZoom;
                            if (void 0 !== t) {
                                for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (t1(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                                var n = this._levels[t],
                                    o = this._map;
                                return n || ((n = this._levels[t] = {}).el = t0("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), v(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n
                            }
                        },
                        _onUpdateLevel: v,
                        _onRemoveLevel: v,
                        _onCreateLevel: v,
                        _pruneTiles: function() {
                            if (this._map) {
                                var t, e, i = this._map.getZoom();
                                if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();
                                for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                                for (t in this._tiles)
                                    if ((e = this._tiles[t]).current && !e.active) {
                                        var n = e.coords;
                                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                    } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                            }
                        },
                        _removeTilesAtZoom: function(t) {
                            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
                        },
                        _removeAllTiles: function() {
                            for (var t in this._tiles) this._removeTile(t)
                        },
                        _invalidateAll: function() {
                            for (var t in this._levels) t1(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                            this._removeAllTiles(), this._tileZoom = void 0
                        },
                        _retainParent: function(t, e, i, n) {
                            var o = Math.floor(t / 2),
                                r = Math.floor(e / 2),
                                s = i - 1,
                                a = new j(+o, +r);
                            a.z = +s;
                            var l = this._tileCoordsToKey(a),
                                h = this._tiles[l];
                            return h && h.active ? (h.retain = !0, !0) : (h && h.loaded && (h.retain = !0), s > n && this._retainParent(o, r, s, n))
                        },
                        _retainChildren: function(t, e, i, n) {
                            for (var o = 2 * t; o < 2 * t + 2; o++)
                                for (var r = 2 * e; r < 2 * e + 2; r++) {
                                    var s = new j(o, r);
                                    s.z = i + 1;
                                    var a = this._tileCoordsToKey(s),
                                        l = this._tiles[a];
                                    if (l && l.active) {
                                        l.retain = !0;
                                        continue
                                    }
                                    l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(o, r, i + 1, n)
                                }
                        },
                        _resetView: function(t) {
                            var e = t && (t.pinch || t.flyTo);
                            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                        },
                        _animateZoom: function(t) {
                            this._setView(t.center, t.zoom, !0, t.noUpdate)
                        },
                        _clampZoom: function(t) {
                            var e = this.options;
                            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                        },
                        _setView: function(t, e, i, n) {
                            var o = Math.round(e);
                            o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o);
                            var r = this.options.updateWhenZooming && o !== this._tileZoom;
                            (!n || r) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
                        },
                        _setZoomTransforms: function(t, e) {
                            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
                        },
                        _setZoomTransform: function(t, e, i) {
                            var n = this._map.getZoomScale(i, t.zoom),
                                o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                            tO.any3d ? ei(t.el, o, n) : en(t.el, o)
                        },
                        _resetGrid: function() {
                            var t = this._map,
                                e = t.options.crs,
                                i = this._tileSize = this.getTileSize(),
                                n = this._tileZoom,
                                o = this._map.getPixelWorldBounds(this._tileZoom);
                            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
                        },
                        _onMoveEnd: function() {
                            this._map && !this._map._animatingZoom && this._update()
                        },
                        _getTiledPixelBounds: function(t) {
                            var e = this._map,
                                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                                n = e.getZoomScale(i, this._tileZoom),
                                o = e.project(t, this._tileZoom).floor(),
                                r = e.getSize().divideBy(2 * n);
                            return new W(o.subtract(r), o.add(r))
                        },
                        _update: function(t) {
                            var e = this._map;
                            if (e) {
                                var i = this._clampZoom(e.getZoom());
                                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                                    var n = this._getTiledPixelBounds(t),
                                        o = this._pxBoundsToTileRange(n),
                                        r = o.getCenter(),
                                        s = [],
                                        a = this.options.keepBuffer,
                                        l = new W(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw Error("Attempted to load an infinite number of tiles");
                                    for (var h in this._tiles) {
                                        var d = this._tiles[h].coords;
                                        d.z === this._tileZoom && l.contains(new j(d.x, d.y)) || (this._tiles[h].current = !1)
                                    }
                                    if (Math.abs(i - this._tileZoom) > 1) return void this._setView(t, i);
                                    for (var u = o.min.y; u <= o.max.y; u++)
                                        for (var c = o.min.x; c <= o.max.x; c++) {
                                            var p = new j(c, u);
                                            if (p.z = this._tileZoom, this._isValidTile(p)) {
                                                var f = this._tiles[this._tileCoordsToKey(p)];
                                                f ? f.current = !0 : s.push(p)
                                            }
                                        }
                                    if (s.sort(function(t, e) {
                                            return t.distanceTo(r) - e.distanceTo(r)
                                        }), 0 !== s.length) {
                                        this._loading || (this._loading = !0, this.fire("loading"));
                                        var _ = document.createDocumentFragment();
                                        for (c = 0; c < s.length; c++) this._addTile(s[c], _);
                                        this._level.el.appendChild(_)
                                    }
                                }
                            }
                        },
                        _isValidTile: function(t) {
                            var e = this._map.options.crs;
                            if (!e.infinite) {
                                var i = this._globalTileRange;
                                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                            }
                            if (!this.options.bounds) return !0;
                            var n = this._tileCoordsToBounds(t);
                            return V(this.options.bounds).overlaps(n)
                        },
                        _keyToBounds: function(t) {
                            return this._tileCoordsToBounds(this._keyToTileCoords(t))
                        },
                        _tileCoordsToNwSe: function(t) {
                            var e = this._map,
                                i = this.getTileSize(),
                                n = t.scaleBy(i),
                                o = n.add(i);
                            return [e.unproject(n, t.z), e.unproject(o, t.z)]
                        },
                        _tileCoordsToBounds: function(t) {
                            var e = this._tileCoordsToNwSe(t),
                                i = new K(e[0], e[1]);
                            return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
                        },
                        _tileCoordsToKey: function(t) {
                            return t.x + ":" + t.y + ":" + t.z
                        },
                        _keyToTileCoords: function(t) {
                            var e = t.split(":"),
                                i = new j(+e[0], +e[1]);
                            return i.z = +e[2], i
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            e && (t1(e.el), delete this._tiles[t], this.fire("tileunload", {
                                tile: e.el,
                                coords: this._keyToTileCoords(t)
                            }))
                        },
                        _initTile: function(t) {
                            t6(t, "leaflet-tile");
                            var e = this.getTileSize();
                            t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = v, t.onmousemove = v, tO.ielt9 && this.options.opacity < 1 && et(t, this.options.opacity)
                        },
                        _addTile: function(t, e) {
                            var i = this._getTilePos(t),
                                n = this._tileCoordsToKey(t),
                                o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
                            this._initTile(o), this.createTile.length < 2 && N(p(this._tileReady, this, t, null, o)), en(o, i), this._tiles[n] = {
                                el: o,
                                coords: t,
                                current: !0
                            }, e.appendChild(o), this.fire("tileloadstart", {
                                tile: o,
                                coords: t
                            })
                        },
                        _tileReady: function(t, e, i) {
                            e && this.fire("tileerror", {
                                error: e,
                                tile: i,
                                coords: t
                            });
                            var n = this._tileCoordsToKey(t);
                            (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (et(i.el, 0), O(this._fadeFrame), this._fadeFrame = N(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (t6(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                                tile: i.el,
                                coords: t
                            })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), tO.ielt9 || !this._map._fadeAnimated ? N(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)))
                        },
                        _getTilePos: function(t) {
                            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                        },
                        _wrapCoords: function(t) {
                            var e = new j(this._wrapX ? g(t.x, this._wrapX) : t.x, this._wrapY ? g(t.y, this._wrapY) : t.y);
                            return e.z = t.z, e
                        },
                        _pxBoundsToTileRange: function(t) {
                            var e = this.getTileSize();
                            return new W(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
                        },
                        _noTilesToLoad: function() {
                            for (var t in this._tiles)
                                if (!this._tiles[t].loaded) return !1;
                            return !0
                        }
                    }),
                    iL = iP.extend({
                        options: {
                            minZoom: 0,
                            maxZoom: 18,
                            subdomains: "abc",
                            errorTileUrl: "",
                            zoomOffset: 0,
                            tms: !1,
                            zoomReverse: !1,
                            detectRetina: !1,
                            crossOrigin: !1,
                            referrerPolicy: !1
                        },
                        initialize: function(t, e) {
                            this._url = t, (e = b(this, e)).detectRetina && tO.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove)
                        },
                        setUrl: function(t, e) {
                            return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
                        },
                        createTile: function(t, e) {
                            var i = document.createElement("img");
                            return ec(i, "load", p(this._tileOnLoad, this, e, i)), ec(i, "error", p(this._tileOnError, this, e, i)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i
                        },
                        getTileUrl: function(t) {
                            var i = {
                                r: tO.retina ? "@2x" : "",
                                s: this._getSubdomain(t),
                                x: t.x,
                                y: t.y,
                                z: this._getZoomForUrl()
                            };
                            if (this._map && !this._map.options.crs.infinite) {
                                var n = this._globalTileRange.max.y - t.y;
                                this.options.tms && (i.y = n), i["-y"] = n
                            }
                            return P(this._url, e(i, this.options))
                        },
                        _tileOnLoad: function(t, e) {
                            tO.ielt9 ? setTimeout(p(t, this, null, e), 0) : t(null, e)
                        },
                        _tileOnError: function(t, e, i) {
                            var n = this.options.errorTileUrl;
                            n && e.getAttribute("src") !== n && (e.src = n), t(i, e)
                        },
                        _onTileRemove: function(t) {
                            t.tile.onload = null
                        },
                        _getZoomForUrl: function() {
                            var t = this._tileZoom,
                                e = this.options.maxZoom,
                                i = this.options.zoomReverse,
                                n = this.options.zoomOffset;
                            return i && (t = e - t), t + n
                        },
                        _getSubdomain: function(t) {
                            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                            return this.options.subdomains[e]
                        },
                        _abortLoading: function() {
                            var t, e;
                            for (t in this._tiles)
                                if (this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = v, e.onerror = v, !e.complete)) {
                                    e.src = S;
                                    var i = this._tiles[t].coords;
                                    t1(e), delete this._tiles[t], this.fire("tileabort", {
                                        tile: e,
                                        coords: i
                                    })
                                }
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            if (e) return e.el.setAttribute("src", S), iP.prototype._removeTile.call(this, t)
                        },
                        _tileReady: function(t, e, i) {
                            if (this._map && (!i || i.getAttribute("src") !== S)) return iP.prototype._tileReady.call(this, t, e, i)
                        }
                    });

                function iI(t, e) {
                    return new iL(t, e)
                }
                var iz = iL.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, i) {
                        this._url = t;
                        var n = e({}, this.defaultWmsParams);
                        for (var o in i) o in this.options || (n[o] = i[o]);
                        var r = (i = b(this, i)).detectRetina && tO.retina ? 2 : 1,
                            s = this.getTileSize();
                        n.width = s.x * r, n.height = s.y * r, this.wmsParams = n
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[e] = this._crs.code, iL.prototype.onAdd.call(this, t)
                    },
                    getTileUrl: function(t) {
                        var e = this._tileCoordsToNwSe(t),
                            i = this._crs,
                            n = U(i.project(e[0]), i.project(e[1])),
                            o = n.min,
                            r = n.max,
                            s = (this._wmsVersion >= 1.3 && this._crs === e1 ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","),
                            a = iL.prototype.getTileUrl.call(this, t);
                        return a + C(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
                    },
                    setParams: function(t, i) {
                        return e(this.wmsParams, t), i || this.redraw(), this
                    }
                });
                iL.WMS = iz, iI.wms = function(t, e) {
                    return new iz(t, e)
                };
                var iS = e5.extend({
                        options: {
                            padding: .1
                        },
                        initialize: function(t) {
                            b(this, t), _(this), this._layers = this._layers || {}
                        },
                        onAdd: function() {
                            this._container || (this._initContainer(), t6(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                        },
                        onRemove: function() {
                            this.off("update", this._updatePaths, this), this._destroyContainer()
                        },
                        getEvents: function() {
                            var t = {
                                viewreset: this._reset,
                                zoom: this._onZoom,
                                moveend: this._update,
                                zoomend: this._onZoomEnd
                            };
                            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                        },
                        _onAnimZoom: function(t) {
                            this._updateTransform(t.center, t.zoom)
                        },
                        _onZoom: function() {
                            this._updateTransform(this._map.getCenter(), this._map.getZoom())
                        },
                        _updateTransform: function(t, e) {
                            var i = this._map.getZoomScale(e, this._zoom),
                                n = this._map.getSize().multiplyBy(.5 + this.options.padding),
                                o = this._map.project(this._center, e),
                                r = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
                            tO.any3d ? ei(this._container, r, i) : en(this._container, r)
                        },
                        _reset: function() {
                            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                        },
                        _onZoomEnd: function() {
                            for (var t in this._layers) this._layers[t]._project()
                        },
                        _updatePaths: function() {
                            for (var t in this._layers) this._layers[t]._update()
                        },
                        _update: function() {
                            var t = this.options.padding,
                                e = this._map.getSize(),
                                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                            this._bounds = new W(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                        }
                    }),
                    iM = iS.extend({
                        options: {
                            tolerance: 0
                        },
                        getEvents: function() {
                            var t = iS.prototype.getEvents.call(this);
                            return t.viewprereset = this._onViewPreReset, t
                        },
                        _onViewPreReset: function() {
                            this._postponeUpdatePaths = !0
                        },
                        onAdd: function() {
                            iS.prototype.onAdd.call(this), this._draw()
                        },
                        _initContainer: function() {
                            var t = this._container = document.createElement("canvas");
                            ec(t, "mousemove", this._onMouseMove, this), ec(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), ec(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d")
                        },
                        _destroyContainer: function() {
                            O(this._redrawRequest), delete this._ctx, t1(this._container), ef(this._container), delete this._container
                        },
                        _updatePaths: function() {
                            if (!this._postponeUpdatePaths) {
                                for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                                this._redraw()
                            }
                        },
                        _update: function() {
                            if (!this._map._animatingZoom || !this._bounds) {
                                iS.prototype._update.call(this);
                                var t = this._bounds,
                                    e = this._container,
                                    i = t.getSize(),
                                    n = tO.retina ? 2 : 1;
                                en(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", tO.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                            }
                        },
                        _reset: function() {
                            iS.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                        },
                        _initPath: function(t) {
                            this._updateDashArray(t), this._layers[_(t)] = t;
                            var e = t._order = {
                                layer: t,
                                prev: this._drawLast,
                                next: null
                            };
                            this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                        },
                        _addPath: function(t) {
                            this._requestRedraw(t)
                        },
                        _removePath: function(t) {
                            var e = t._order,
                                i = e.next,
                                n = e.prev;
                            i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[_(t)], this._requestRedraw(t)
                        },
                        _updatePath: function(t) {
                            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                        },
                        _updateStyle: function(t) {
                            this._updateDashArray(t), this._requestRedraw(t)
                        },
                        _updateDashArray: function(t) {
                            if ("string" == typeof t.options.dashArray) {
                                var e, i, n = t.options.dashArray.split(/[, ]+/),
                                    o = [];
                                for (i = 0; i < n.length; i++) {
                                    if (isNaN(e = Number(n[i]))) return;
                                    o.push(e)
                                }
                                t.options._dashArray = o
                            } else t.options._dashArray = t.options.dashArray
                        },
                        _requestRedraw: function(t) {
                            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || N(this._redraw, this))
                        },
                        _extendRedrawBounds: function(t) {
                            if (t._pxBounds) {
                                var e = (t.options.weight || 0) + 1;
                                this._redrawBounds = this._redrawBounds || new W, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                            }
                        },
                        _redraw: function() {
                            this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                        },
                        _clear: function() {
                            var t = this._redrawBounds;
                            if (t) {
                                var e = t.getSize();
                                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                            } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()
                        },
                        _draw: function() {
                            var t, e = this._redrawBounds;
                            if (this._ctx.save(), e) {
                                var i = e.getSize();
                                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                            }
                            this._drawing = !0;
                            for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                            this._drawing = !1, this._ctx.restore()
                        },
                        _updatePoly: function(t, e) {
                            if (this._drawing) {
                                var i, n, o, r, s = t._parts,
                                    a = s.length,
                                    l = this._ctx;
                                if (a) {
                                    for (l.beginPath(), i = 0; i < a; i++) {
                                        for (n = 0, o = s[i].length; n < o; n++) r = s[i][n], l[n ? "lineTo" : "moveTo"](r.x, r.y);
                                        e && l.closePath()
                                    }
                                    this._fillStroke(l, t)
                                }
                            }
                        },
                        _updateCircle: function(t) {
                            if (!(!this._drawing || t._empty())) {
                                var e = t._point,
                                    i = this._ctx,
                                    n = Math.max(Math.round(t._radius), 1),
                                    o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                                1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                            }
                        },
                        _fillStroke: function(t, e) {
                            var i = e.options;
                            i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
                        },
                        _onClick: function(t) {
                            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && ("click" !== t.type && "preclick" !== t.type || !this._map._draggableMoved(e)) && (i = e);
                            this._fireEvent(!!i && [i], t)
                        },
                        _onMouseMove: function(t) {
                            if (!(!this._map || this._map.dragging.moving()) && !this._map._animatingZoom) {
                                var e = this._map.mouseEventToLayerPoint(t);
                                this._handleMouseHover(t, e)
                            }
                        },
                        _handleMouseOut: function(t) {
                            var e = this._hoveredLayer;
                            e && (t7(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
                        },
                        _handleMouseHover: function(t, e) {
                            if (!this._mouseHoverThrottled) {
                                for (var i, n, o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (t6(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(p(function() {
                                    this._mouseHoverThrottled = !1
                                }, this), 32)
                            }
                        },
                        _fireEvent: function(t, e, i) {
                            this._map._fireDOMEvent(e, i || e.type, t)
                        },
                        _bringToFront: function(t) {
                            var e = t._order;
                            if (e) {
                                var i = e.next,
                                    n = e.prev;
                                if (!i) return;
                                i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t)
                            }
                        },
                        _bringToBack: function(t) {
                            var e = t._order;
                            if (e) {
                                var i = e.next,
                                    n = e.prev;
                                if (!n) return;
                                n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t)
                            }
                        }
                    });

                function iE(t) {
                    return tO.canvas ? new iM(t) : null
                }
                var ik = function() {
                        try {
                            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                function(t) {
                                    return document.createElement("<lvml:" + t + ' class="lvml">')
                                }
                        } catch (t) {}
                        return function(t) {
                            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                        }
                    }(),
                    iA = tO.vml ? ik : ti,
                    iR = iS.extend({
                        _initContainer: function() {
                            this._container = iA("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = iA("g"), this._container.appendChild(this._rootGroup)
                        },
                        _destroyContainer: function() {
                            t1(this._container), ef(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                        },
                        _update: function() {
                            if (!this._map._animatingZoom || !this._bounds) {
                                iS.prototype._update.call(this);
                                var t = this._bounds,
                                    e = t.getSize(),
                                    i = this._container;
                                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), en(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                            }
                        },
                        _initPath: function(t) {
                            var e = t._path = iA("path");
                            t.options.className && t6(e, t.options.className), t.options.interactive && t6(e, "leaflet-interactive"), this._updateStyle(t), this._layers[_(t)] = t
                        },
                        _addPath: function(t) {
                            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                        },
                        _removePath: function(t) {
                            t1(t._path), t.removeInteractiveTarget(t._path), delete this._layers[_(t)]
                        },
                        _updatePath: function(t) {
                            t._project(), t._update()
                        },
                        _updateStyle: function(t) {
                            var e = t._path,
                                i = t.options;
                            e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                        },
                        _updatePoly: function(t, e) {
                            this._setPath(t, tn(t._parts, e))
                        },
                        _updateCircle: function(t) {
                            var e = t._point,
                                i = Math.max(Math.round(t._radius), 1),
                                n = Math.max(Math.round(t._radiusY), 1) || i,
                                o = "a" + i + "," + n + " 0 1,0 ",
                                r = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + -(2 * i) + ",0 ";
                            this._setPath(t, r)
                        },
                        _setPath: function(t, e) {
                            t._path.setAttribute("d", e)
                        },
                        _bringToFront: function(t) {
                            t5(t._path)
                        },
                        _bringToBack: function(t) {
                            t3(t._path)
                        }
                    });

                function iN(t) {
                    return tO.svg || tO.vml ? new iR(t) : null
                }
                tO.vml && iR.include({
                    _initContainer: function() {
                        this._container = t0("div", "leaflet-vml-container")
                    },
                    _update: function() {
                        this._map._animatingZoom || (iS.prototype._update.call(this), this.fire("update"))
                    },
                    _initPath: function(t) {
                        var e = t._container = ik("shape");
                        t6(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ik("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[_(t)] = t
                    },
                    _addPath: function(t) {
                        var e = t._container;
                        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                    },
                    _removePath: function(t) {
                        var e = t._container;
                        t1(e), t.removeInteractiveTarget(e), delete this._layers[_(t)]
                    },
                    _updateStyle: function(t) {
                        var e = t._stroke,
                            i = t._fill,
                            n = t.options,
                            o = t._container;
                        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = ik("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = I(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = ik("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
                    },
                    _updateCircle: function(t) {
                        var e = t._point.round(),
                            i = Math.round(t._radius),
                            n = Math.round(t._radiusY || i);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
                    },
                    _setPath: function(t, e) {
                        t._path.v = e
                    },
                    _bringToFront: function(t) {
                        t5(t._container)
                    },
                    _bringToBack: function(t) {
                        t3(t._container)
                    }
                }), eM.include({
                    getRenderer: function(t) {
                        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
                    },
                    _getPaneRenderer: function(t) {
                        if ("overlayPane" === t || void 0 === t) return !1;
                        var e = this._paneRenderers[t];
                        return void 0 === e && (e = this._createRenderer({
                            pane: t
                        }), this._paneRenderers[t] = e), e
                    },
                    _createRenderer: function(t) {
                        return this.options.preferCanvas && iE(t) || iN(t)
                    }
                });
                var iO = ir.extend({
                    initialize: function(t, e) {
                        ir.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                    },
                    setBounds: function(t) {
                        return this.setLatLngs(this._boundsToLatLngs(t))
                    },
                    _boundsToLatLngs: function(t) {
                        return [(t = V(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                    }
                });
                iR.create = iA, iR.pointsToPath = tn, is.geometryToLayer = ia, is.coordsToLatLng = ih, is.coordsToLatLngs = id, is.latLngToCoords = iu, is.latLngsToCoords = ic, is.getFeature = ip, is.asFeature = i_, eM.mergeOptions({
                    boxZoom: !0
                });
                var iZ = eZ.extend({
                    initialize: function(t) {
                        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
                    },
                    addHooks: function() {
                        ec(this._container, "mousedown", this._onMouseDown, this)
                    },
                    removeHooks: function() {
                        ef(this._container, "mousedown", this._onMouseDown, this)
                    },
                    moved: function() {
                        return this._moved
                    },
                    _destroy: function() {
                        t1(this._pane), delete this._pane
                    },
                    _resetState: function() {
                        this._resetStateTimeout = 0, this._moved = !1
                    },
                    _clearDeferredResetState: function() {
                        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
                    },
                    _onMouseDown: function(t) {
                        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                        this._clearDeferredResetState(), this._resetState(), i(), es(), this._startPoint = this._map.mouseEventToContainerPoint(t), ec(document, {
                            contextmenu: eC,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseMove: function(t) {
                        this._moved || (this._moved = !0, this._box = t0("div", "leaflet-zoom-box", this._container), t6(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                        var e = new W(this._point, this._startPoint),
                            i = e.getSize();
                        en(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
                    },
                    _finish: function() {
                        this._moved && (t1(this._box), t7(this._container, "leaflet-crosshair")), n(), ea(), ef(document, {
                            contextmenu: eC,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseUp: function(t) {
                        if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
                            var e = new K(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                            this._map.fitBounds(e).fire("boxzoomend", {
                                boxZoomBounds: e
                            })
                        }
                    },
                    _onKeyDown: function(t) {
                        27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState())
                    }
                });
                eM.addInitHook("addHandler", "boxZoom", iZ), eM.mergeOptions({
                    doubleClickZoom: !0
                });
                var iD = eZ.extend({
                    addHooks: function() {
                        this._map.on("dblclick", this._onDoubleClick, this)
                    },
                    removeHooks: function() {
                        this._map.off("dblclick", this._onDoubleClick, this)
                    },
                    _onDoubleClick: function(t) {
                        var e = this._map,
                            i = e.getZoom(),
                            n = e.options.zoomDelta,
                            o = t.originalEvent.shiftKey ? i - n : i + n;
                        "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
                    }
                });
                eM.addInitHook("addHandler", "doubleClickZoom", iD), eM.mergeOptions({
                    dragging: !0,
                    inertia: !0,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: .2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0
                });
                var iB = eZ.extend({
                    addHooks: function() {
                        if (!this._draggable) {
                            var t = this._map;
                            this._draggable = new eB(t._mapPane, t._container), this._draggable.on({
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                        }
                        t6(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                    },
                    removeHooks: function() {
                        t7(this._map._container, "leaflet-grab"), t7(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    moving: function() {
                        return this._draggable && this._draggable._moving
                    },
                    _onDragStart: function() {
                        var t = this._map;
                        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                            var e = V(this._map.options.maxBounds);
                            this._offsetLimit = U(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                        } else this._offsetLimit = null;
                        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                    },
                    _onDrag: function(t) {
                        if (this._map.options.inertia) {
                            var e = this._lastTime = +new Date,
                                i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                            this._positions.push(i), this._times.push(e), this._prunePositions(e)
                        }
                        this._map.fire("move", t).fire("drag", t)
                    },
                    _prunePositions: function(t) {
                        for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
                    },
                    _onZoomEnd: function() {
                        var t = this._map.getSize().divideBy(2),
                            e = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                    },
                    _viscousLimit: function(t, e) {
                        return t - (t - e) * this._viscosity
                    },
                    _onPreDragLimit: function() {
                        if (this._viscosity && this._offsetLimit) {
                            var t = this._draggable._newPos.subtract(this._draggable._startPos),
                                e = this._offsetLimit;
                            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                        }
                    },
                    _onPreDragWrap: function() {
                        var t = this._worldWidth,
                            e = Math.round(t / 2),
                            i = this._initialWorldOffset,
                            n = this._draggable._newPos.x,
                            o = (n - e + i) % t + e - i,
                            r = (n + e + i) % t - e - i,
                            s = Math.abs(o + i) < Math.abs(r + i) ? o : r;
                        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = s
                    },
                    _onDragEnd: function(t) {
                        var e = this._map,
                            i = e.options,
                            n = !i.inertia || t.noInertia || this._times.length < 2;
                        if (e.fire("dragend", t), n) e.fire("moveend");
                        else {
                            this._prunePositions(+new Date);
                            var o = this._lastPos.subtract(this._positions[0]),
                                r = (this._lastTime - this._times[0]) / 1e3,
                                s = i.easeLinearity,
                                a = o.multiplyBy(s / r),
                                l = a.distanceTo([0, 0]),
                                h = Math.min(i.inertiaMaxSpeed, l),
                                d = a.multiplyBy(h / l),
                                u = h / (i.inertiaDeceleration * s),
                                c = d.multiplyBy(-u / 2).round();
                            c.x || c.y ? (c = e._limitOffset(c, e.options.maxBounds), N(function() {
                                e.panBy(c, {
                                    duration: u,
                                    easeLinearity: s,
                                    noMoveStart: !0,
                                    animate: !0
                                })
                            })) : e.fire("moveend")
                        }
                    }
                });
                eM.addInitHook("addHandler", "dragging", iB), eM.mergeOptions({
                    keyboard: !0,
                    keyboardPanDelta: 80
                });
                var ij = eZ.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 54, 173]
                    },
                    initialize: function(t) {
                        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
                    },
                    addHooks: function() {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"), ec(t, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.on({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    removeHooks: function() {
                        this._removeHooks(), ef(this._map._container, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.off({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    _onMouseDown: function() {
                        if (!this._focused) {
                            var t = document.body,
                                e = document.documentElement,
                                i = t.scrollTop || e.scrollTop,
                                n = t.scrollLeft || e.scrollLeft;
                            this._map._container.focus(), window.scrollTo(n, i)
                        }
                    },
                    _onFocus: function() {
                        this._focused = !0, this._map.fire("focus")
                    },
                    _onBlur: function() {
                        this._focused = !1, this._map.fire("blur")
                    },
                    _setPanDelta: function(t) {
                        var e, i, n = this._panKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                        for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                        for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                        for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
                    },
                    _setZoomDelta: function(t) {
                        var e, i, n = this._zoomKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                        for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
                    },
                    _addHooks: function() {
                        ec(document, "keydown", this._onKeyDown, this)
                    },
                    _removeHooks: function() {
                        ef(document, "keydown", this._onKeyDown, this)
                    },
                    _onKeyDown: function(t) {
                        if (!t.altKey && !t.ctrlKey && !t.metaKey) {
                            var e, i = t.keyCode,
                                n = this._map;
                            if (i in this._panKeys) {
                                if (!n._panAnim || !n._panAnim._inProgress)
                                    if (e = this._panKeys[i], t.shiftKey && (e = F(e).multiplyBy(3)), n.options.maxBounds && (e = n._limitOffset(F(e), n.options.maxBounds)), n.options.worldCopyJump) {
                                        var o = n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));
                                        n.panTo(o)
                                    } else n.panBy(e)
                            } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                            else {
                                if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                                n.closePopup()
                            }
                            eC(t)
                        }
                    }
                });
                eM.addInitHook("addHandler", "keyboard", ij), eM.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60
                });
                var iH = eZ.extend({
                    addHooks: function() {
                        ec(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
                    },
                    removeHooks: function() {
                        ef(this._map._container, "wheel", this._onWheelScroll, this)
                    },
                    _onWheelScroll: function(t) {
                        var e = eI(t),
                            i = this._map.options.wheelDebounceTime;
                        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                        var n = Math.max(i - (new Date - this._startTime), 0);
                        clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), eC(t)
                    },
                    _performZoom: function() {
                        var t = this._map,
                            e = t.getZoom(),
                            i = this._map.options.zoomSnap || 0;
                        t._stop();
                        var n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(this._delta / (4 * this._map.options.wheelPxPerZoomLevel))))) / Math.LN2,
                            o = i ? Math.ceil(n / i) * i : n,
                            r = t._limitZoom(e + (this._delta > 0 ? o : -o)) - e;
                        this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
                    }
                });
                eM.addInitHook("addHandler", "scrollWheelZoom", iH), eM.mergeOptions({
                    tapHold: tO.touchNative && tO.safari && tO.mobile,
                    tapTolerance: 15
                });
                var iF = eZ.extend({
                    addHooks: function() {
                        ec(this._map._container, "touchstart", this._onDown, this)
                    },
                    removeHooks: function() {
                        ef(this._map._container, "touchstart", this._onDown, this)
                    },
                    _onDown: function(t) {
                        if (clearTimeout(this._holdTimeout), 1 === t.touches.length) {
                            var e = t.touches[0];
                            this._startPos = this._newPos = new j(e.clientX, e.clientY), this._holdTimeout = setTimeout(p(function() {
                                this._cancel(), this._isTapValid() && (ec(document, "touchend", eb), ec(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e))
                            }, this), 600), ec(document, "touchend touchcancel contextmenu", this._cancel, this), ec(document, "touchmove", this._onMove, this)
                        }
                    },
                    _cancelClickPrevent: function t() {
                        ef(document, "touchend", eb), ef(document, "touchend touchcancel", t)
                    },
                    _cancel: function() {
                        clearTimeout(this._holdTimeout), ef(document, "touchend touchcancel contextmenu", this._cancel, this), ef(document, "touchmove", this._onMove, this)
                    },
                    _onMove: function(t) {
                        var e = t.touches[0];
                        this._newPos = new j(e.clientX, e.clientY)
                    },
                    _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                    },
                    _simulateEvent: function(t, e) {
                        var i = new MouseEvent(t, {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: e.screenX,
                            screenY: e.screenY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        });
                        i._simulated = !0, e.target.dispatchEvent(i)
                    }
                });
                eM.addInitHook("addHandler", "tapHold", iF), eM.mergeOptions({
                    touchZoom: tO.touch,
                    bounceAtZoomLimits: !0
                });
                var iW = eZ.extend({
                    addHooks: function() {
                        t6(this._map._container, "leaflet-touch-zoom"), ec(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    removeHooks: function() {
                        t7(this._map._container, "leaflet-touch-zoom"), ef(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    _onTouchStart: function(t) {
                        var e = this._map;
                        if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                            var i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]);
                            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), ec(document, "touchmove", this._onTouchMove, this), ec(document, "touchend touchcancel", this._onTouchEnd, this), eb(t)
                        }
                    },
                    _onTouchMove: function(t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map,
                                i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]),
                                o = i.distanceTo(n) / this._startDist;
                            if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                                if (this._center = this._startLatLng, 1 === o) return
                            } else {
                                var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                                if (1 === o && 0 === r.x && 0 === r.y) return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                            }
                            this._moved || (e._moveStart(!0, !1), this._moved = !0), O(this._animRequest);
                            var s = p(e._move, e, this._center, this._zoom, {
                                pinch: !0,
                                round: !1
                            }, void 0);
                            this._animRequest = N(s, this, !0), eb(t)
                        }
                    },
                    _onTouchEnd: function() {
                        if (!this._moved || !this._zooming) {
                            this._zooming = !1;
                            return
                        }
                        this._zooming = !1, O(this._animRequest), ef(document, "touchmove", this._onTouchMove, this), ef(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))
                    }
                });
                eM.addInitHook("addHandler", "touchZoom", iW), eM.BoxZoom = iZ, eM.DoubleClickZoom = iD, eM.Drag = iB, eM.Keyboard = ij, eM.ScrollWheelZoom = iH, eM.TapHold = iF, eM.TouchZoom = iW, t.Bounds = W, t.Browser = tO, t.CRS = q, t.Canvas = iM, t.Circle = ii, t.CircleMarker = ie, t.Class = Z, t.Control = eE, t.DivIcon = iT, t.DivOverlay = iw, t.DomEvent = {
                    __proto__: null,
                    on: ec,
                    off: ef,
                    stopPropagation: ey,
                    disableScrollPropagation: ex,
                    disableClickPropagation: ew,
                    preventDefault: eb,
                    stop: eC,
                    getPropagationPath: eT,
                    getMousePosition: eP,
                    getWheelDelta: eI,
                    isExternalTarget: ez,
                    addListener: ec,
                    removeListener: ef
                }, t.DomUtil = {
                    __proto__: null,
                    TRANSFORM: tq,
                    TRANSITION: tG,
                    TRANSITION_END: t$,
                    get: tJ,
                    getStyle: tQ,
                    create: t0,
                    remove: t1,
                    empty: t2,
                    toFront: t5,
                    toBack: t3,
                    hasClass: t4,
                    addClass: t6,
                    removeClass: t7,
                    setClass: t8,
                    getClass: t9,
                    setOpacity: et,
                    testProp: ee,
                    setTransform: ei,
                    setPosition: en,
                    getPosition: eo,
                    get disableTextSelection() {
                        return i
                    },
                    get enableTextSelection() {
                        return n
                    },
                    disableImageDrag: es,
                    enableImageDrag: ea,
                    preventOutline: el,
                    restoreOutline: eh,
                    getSizedParentNode: ed,
                    getScale: eu
                }, t.Draggable = eB, t.Evented = B, t.FeatureGroup = e4, t.GeoJSON = is, t.GridLayer = iP, t.Handler = eZ, t.Icon = e6, t.ImageOverlay = iv, t.LatLng = X, t.LatLngBounds = K, t.Layer = e5, t.LayerGroup = e3, t.LineUtil = {
                    __proto__: null,
                    simplify: eW,
                    pointToSegmentDistance: eU,
                    closestPointOnSegment: function(t, e, i) {
                        return eY(t, e, i)
                    },
                    clipSegment: eK,
                    _getEdgeIntersection: eV,
                    _getBitCode: eX,
                    _sqClosestPointOnSegment: eY,
                    isFlat: eq,
                    _flat: eG,
                    polylineCenter: e$
                }, t.Map = eM, t.Marker = e9, t.Mixin = {
                    Events: D
                }, t.Path = it, t.Point = j, t.PolyUtil = {
                    __proto__: null,
                    clipPolygon: ej,
                    polygonCenter: eH,
                    centroid: eF
                }, t.Polygon = ir, t.Polyline = io, t.Popup = ib, t.PosAnimation = eS, t.Projection = {
                    __proto__: null,
                    LonLat: eJ,
                    Mercator: eQ,
                    SphericalMercator: $
                }, t.Rectangle = iO, t.Renderer = iS, t.SVG = iR, t.SVGOverlay = ix, t.TileLayer = iL, t.Tooltip = iC, t.Transformation = J, t.Util = {
                    __proto__: null,
                    extend: e,
                    create: c,
                    bind: p,
                    get lastId() {
                        return f
                    },
                    stamp: _,
                    throttle: m,
                    wrapNum: g,
                    falseFn: v,
                    formatNum: y,
                    trim: x,
                    splitWords: w,
                    setOptions: b,
                    getParamString: C,
                    template: P,
                    isArray: I,
                    indexOf: z,
                    emptyImageUrl: S,
                    requestFn: A,
                    cancelFn: R,
                    requestAnimFrame: N,
                    cancelAnimFrame: O
                }, t.VideoOverlay = iy, t.bind = p, t.bounds = U, t.canvas = iE, t.circle = function(t, e, i) {
                    return new ii(t, e, i)
                }, t.circleMarker = function(t, e) {
                    return new ie(t, e)
                }, t.control = ek, t.divIcon = function(t) {
                    return new iT(t)
                }, t.extend = e, t.featureGroup = function(t, e) {
                    return new e4(t, e)
                }, t.geoJSON = ig, t.geoJson = ig, t.gridLayer = function(t) {
                    return new iP(t)
                }, t.icon = function(t) {
                    return new e6(t)
                }, t.imageOverlay = function(t, e, i) {
                    return new iv(t, e, i)
                }, t.latLng = Y, t.latLngBounds = V, t.layerGroup = function(t, e) {
                    return new e3(t, e)
                }, t.map = function(t, e) {
                    return new eM(t, e)
                }, t.marker = function(t, e) {
                    return new e9(t, e)
                }, t.point = F, t.polygon = function(t, e) {
                    return new ir(t, e)
                }, t.polyline = function(t, e) {
                    return new io(t, e)
                }, t.popup = function(t, e) {
                    return new ib(t, e)
                }, t.rectangle = function(t, e) {
                    return new iO(t, e)
                }, t.setOptions = b, t.stamp = _, t.svg = iN, t.svgOverlay = function(t, e, i) {
                    return new ix(t, e, i)
                }, t.tileLayer = iI, t.tooltip = function(t, e) {
                    return new iC(t, e)
                }, t.transformation = Q, t.version = "1.9.4", t.videoOverlay = function(t, e, i) {
                    return new iy(t, e, i)
                };
                var iU = window.L;
                t.noConflict = function() {
                    return window.L = iU, this
                }, window.L = t
            })(e)
        },
        95899: function(t, e, i) {
            "use strict";
            i.d(e, {
                kI: () => _
            });
            var n = i(58191),
                o = i.n(n);
            let r = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    unit: "px"
                },
                s = (t, e, i) => Math.min(Math.max(t, e), i),
                a = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return e.filter(t => t && "string" == typeof t).join(" ")
                },
                l = (t, e) => t === e || t.width === e.width && t.height === e.height && t.x === e.x && t.y === e.y && t.unit === e.unit;

            function h(t, e, i) {
                return "%" === t.unit ? {
                    ...r,
                    ...t,
                    unit: "%"
                } : {
                    unit: "%",
                    x: t.x ? t.x / e * 100 : 0,
                    y: t.y ? t.y / i * 100 : 0,
                    width: t.width ? t.width / e * 100 : 0,
                    height: t.height ? t.height / i * 100 : 0
                }
            }

            function d(t, e, i) {
                return t.unit ? "px" === t.unit ? {
                    ...r,
                    ...t,
                    unit: "px"
                } : {
                    unit: "px",
                    x: t.x ? t.x * e / 100 : 0,
                    y: t.y ? t.y * i / 100 : 0,
                    width: t.width ? t.width * e / 100 : 0,
                    height: t.height ? t.height * i / 100 : 0
                } : {
                    ...r,
                    ...t,
                    unit: "px"
                }
            }

            function u(t, e, i, n, o) {
                let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : n,
                    l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : o,
                    h = {
                        ...t
                    },
                    d = Math.min(r, n),
                    u = Math.min(s, o),
                    c = Math.min(a, n),
                    p = Math.min(l, o);
                e && (e > 1 ? (u = (d = s ? s * e : d) / e, c = a * e) : (d = (u = r ? r / e : u) * e, p = l / e)), h.y < 0 && (h.height = Math.max(h.height + h.y, u), h.y = 0), h.x < 0 && (h.width = Math.max(h.width + h.x, d), h.x = 0);
                let f = n - (h.x + h.width);
                f < 0 && (h.x = Math.min(h.x, n - d), h.width += f);
                let _ = o - (h.y + h.height);
                if (_ < 0 && (h.y = Math.min(h.y, o - u), h.height += _), h.width < d && (("sw" === i || "nw" == i) && (h.x -= d - h.width), h.width = d), h.height < u && (("nw" === i || "ne" == i) && (h.y -= u - h.height), h.height = u), h.width > c && (("sw" === i || "nw" == i) && (h.x -= c - h.width), h.width = c), h.height > p && (("nw" === i || "ne" == i) && (h.y -= p - h.height), h.height = p), e) {
                    let t = h.width / h.height;
                    if (t < e) {
                        let t = Math.max(h.width / e, u);
                        ("nw" === i || "ne" == i) && (h.y -= t - h.height), h.height = t
                    } else if (t > e) {
                        let t = Math.max(h.height * e, d);
                        ("sw" === i || "nw" == i) && (h.x -= t - h.width), h.width = t
                    }
                }
                return h
            }
            let c = {
                    capture: !0,
                    passive: !1
                },
                p = 0,
                f = class t extends n.PureComponent {
                    get document() {
                        return document
                    }
                    getBox() {
                        let t = this.mediaRef.current;
                        if (!t) return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        let {
                            x: e,
                            y: i,
                            width: n,
                            height: o
                        } = t.getBoundingClientRect();
                        return {
                            x: e,
                            y: i,
                            width: n,
                            height: o
                        }
                    }
                    componentDidUpdate(t) {
                        let {
                            crop: e,
                            onComplete: i
                        } = this.props;
                        if (i && !t.crop && e) {
                            let {
                                width: t,
                                height: n
                            } = this.getBox();
                            t && n && i(d(e, t, n), h(e, t, n))
                        }
                    }
                    componentWillUnmount() {
                        this.resizeObserver && this.resizeObserver.disconnect()
                    }
                    bindDocMove() {
                        this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, c), this.document.addEventListener("pointerup", this.onDocPointerDone, c), this.document.addEventListener("pointercancel", this.onDocPointerDone, c), this.docMoveBound = !0)
                    }
                    unbindDocMove() {
                        this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, c), this.document.removeEventListener("pointerup", this.onDocPointerDone, c), this.document.removeEventListener("pointercancel", this.onDocPointerDone, c), this.docMoveBound = !1)
                    }
                    getCropStyle() {
                        let {
                            crop: t
                        } = this.props;
                        if (t) return {
                            top: `${t.y}${t.unit}`,
                            left: `${t.x}${t.unit}`,
                            width: `${t.width}${t.unit}`,
                            height: `${t.height}${t.unit}`
                        }
                    }
                    dragCrop() {
                        let {
                            evData: t
                        } = this, e = this.getBox(), i = this.makePixelCrop(e), n = t.clientX - t.startClientX, o = t.clientY - t.startClientY;
                        return i.x = s(t.startCropX + n, 0, e.width - i.width), i.y = s(t.startCropY + o, 0, e.height - i.height), i
                    }
                    getPointRegion(t, e, i, n) {
                        let o, {
                                evData: r
                            } = this,
                            s = r.clientX - t.x,
                            a = r.clientY - t.y;
                        return o = n && e ? "nw" === e || "n" === e || "ne" === e : a < r.startCropY, (i && e ? "nw" === e || "w" === e || "sw" === e : s < r.startCropX) ? o ? "nw" : "sw" : o ? "ne" : "se"
                    }
                    resolveMinDimensions(t, e) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            o = Math.min(i, t.width),
                            r = Math.min(n, t.height);
                        return e && (o || r) ? e > 1 ? o ? [o, o / e] : [r * e, r] : r ? [r * e, r] : [o, o / e] : [o, r]
                    }
                    resizeCrop() {
                        let {
                            evData: e
                        } = this, {
                            aspect: i = 0,
                            maxWidth: n,
                            maxHeight: o
                        } = this.props, r = this.getBox(), [a, l] = this.resolveMinDimensions(r, i, this.props.minWidth, this.props.minHeight), h = this.makePixelCrop(r), d = this.getPointRegion(r, e.ord, a, l), c = e.ord || d, p = e.clientX - e.startClientX, f = e.clientY - e.startClientY;
                        (a && "nw" === c || "w" === c || "sw" === c) && (p = Math.min(p, -a)), (l && "nw" === c || "n" === c || "ne" === c) && (f = Math.min(f, -l));
                        let _ = {
                            unit: "px",
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        "ne" === d ? (_.x = e.startCropX, _.width = p, i ? _.height = _.width / i : _.height = Math.abs(f), _.y = e.startCropY - _.height) : "se" === d ? (_.x = e.startCropX, _.y = e.startCropY, _.width = p, i ? _.height = _.width / i : _.height = f) : "sw" === d ? (_.x = e.startCropX + p, _.y = e.startCropY, _.width = Math.abs(p), i ? _.height = _.width / i : _.height = f) : "nw" === d && (_.x = e.startCropX + p, _.width = Math.abs(p), i ? (_.height = _.width / i, _.y = e.startCropY - _.height) : (_.height = Math.abs(f), _.y = e.startCropY + f));
                        let m = u(_, i, d, r.width, r.height, a, l, n, o);
                        return i || t.xyOrds.indexOf(c) > -1 ? h = m : t.xOrds.indexOf(c) > -1 ? (h.x = m.x, h.width = m.width) : t.yOrds.indexOf(c) > -1 && (h.y = m.y, h.height = m.height), h.x = s(h.x, 0, r.width - h.width), h.y = s(h.y, 0, r.height - h.height), h
                    }
                    renderCropSelection() {
                        let {
                            ariaLabels: e = t.defaultProps.ariaLabels,
                            disabled: i,
                            locked: n,
                            renderSelectionAddon: r,
                            ruleOfThirds: s,
                            crop: a
                        } = this.props, l = this.getCropStyle();
                        if (a) return o().createElement("div", {
                            style: l,
                            className: "ReactCrop__crop-selection",
                            onPointerDown: this.onCropPointerDown,
                            "aria-label": e.cropArea,
                            tabIndex: 0,
                            onKeyDown: this.onComponentKeyDown,
                            role: "group"
                        }, !i && !n && o().createElement("div", {
                            className: "ReactCrop__drag-elements",
                            onFocus: this.onDragFocus
                        }, o().createElement("div", {
                            className: "ReactCrop__drag-bar ord-n",
                            "data-ord": "n"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-bar ord-e",
                            "data-ord": "e"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-bar ord-s",
                            "data-ord": "s"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-bar ord-w",
                            "data-ord": "w"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-nw",
                            "data-ord": "nw",
                            tabIndex: 0,
                            "aria-label": e.nwDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "nw"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-n",
                            "data-ord": "n",
                            tabIndex: 0,
                            "aria-label": e.nDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "n"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-ne",
                            "data-ord": "ne",
                            tabIndex: 0,
                            "aria-label": e.neDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "ne"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-e",
                            "data-ord": "e",
                            tabIndex: 0,
                            "aria-label": e.eDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "e"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-se",
                            "data-ord": "se",
                            tabIndex: 0,
                            "aria-label": e.seDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "se"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-s",
                            "data-ord": "s",
                            tabIndex: 0,
                            "aria-label": e.sDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "s"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-sw",
                            "data-ord": "sw",
                            tabIndex: 0,
                            "aria-label": e.swDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "sw"),
                            role: "button"
                        }), o().createElement("div", {
                            className: "ReactCrop__drag-handle ord-w",
                            "data-ord": "w",
                            tabIndex: 0,
                            "aria-label": e.wDragHandle,
                            onKeyDown: t => this.onHandlerKeyDown(t, "w"),
                            role: "button"
                        })), r && o().createElement("div", {
                            className: "ReactCrop__selection-addon",
                            onPointerDown: t => t.stopPropagation()
                        }, r(this.state)), s && o().createElement(o().Fragment, null, o().createElement("div", {
                            className: "ReactCrop__rule-of-thirds-hz"
                        }), o().createElement("div", {
                            className: "ReactCrop__rule-of-thirds-vt"
                        })))
                    }
                    makePixelCrop(t) {
                        return d({
                            ...r,
                            ...this.props.crop || {}
                        }, t.width, t.height)
                    }
                    render() {
                        let {
                            aspect: t,
                            children: e,
                            circularCrop: i,
                            className: n,
                            crop: r,
                            disabled: s,
                            locked: l,
                            style: h,
                            ruleOfThirds: d
                        } = this.props, {
                            cropIsActive: u,
                            newCropIsBeingDrawn: c
                        } = this.state, p = r ? this.renderCropSelection() : null, f = a("ReactCrop", n, u && "ReactCrop--active", s && "ReactCrop--disabled", l && "ReactCrop--locked", c && "ReactCrop--new-crop", r && t && "ReactCrop--fixed-aspect", r && i && "ReactCrop--circular-crop", r && d && "ReactCrop--rule-of-thirds", !this.dragStarted && r && !r.width && !r.height && "ReactCrop--invisible-crop", i && "ReactCrop--no-animate");
                        return o().createElement("div", {
                            ref: this.componentRef,
                            className: f,
                            style: h
                        }, o().createElement("div", {
                            ref: this.mediaRef,
                            className: "ReactCrop__child-wrapper",
                            onPointerDown: this.onComponentPointerDown
                        }, e), r ? o().createElement("svg", {
                            className: "ReactCrop__crop-mask",
                            width: "100%",
                            height: "100%"
                        }, o().createElement("defs", null, o().createElement("mask", {
                            id: `hole-${this.instanceId}`
                        }, o().createElement("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "white"
                        }), i ? o().createElement("ellipse", {
                            cx: `${r.x+r.width/2}${r.unit}`,
                            cy: `${r.y+r.height/2}${r.unit}`,
                            rx: `${r.width/2}${r.unit}`,
                            ry: `${r.height/2}${r.unit}`,
                            fill: "black"
                        }) : o().createElement("rect", {
                            x: `${r.x}${r.unit}`,
                            y: `${r.y}${r.unit}`,
                            width: `${r.width}${r.unit}`,
                            height: `${r.height}${r.unit}`,
                            fill: "black"
                        }))), o().createElement("rect", {
                            fill: "black",
                            fillOpacity: .5,
                            width: "100%",
                            height: "100%",
                            mask: `url(#hole-${this.instanceId})`
                        })) : void 0, p)
                    }
                    constructor() {
                        super(...arguments), this.docMoveBound = !1, this.mouseDownOnCrop = !1, this.dragStarted = !1, this.evData = {
                            startClientX: 0,
                            startClientY: 0,
                            startCropX: 0,
                            startCropY: 0,
                            clientX: 0,
                            clientY: 0,
                            isResize: !0
                        }, this.componentRef = (0, n.createRef)(), this.mediaRef = (0, n.createRef)(), this.initChangeCalled = !1, this.instanceId = `rc-${p++}`, this.state = {
                            cropIsActive: !1,
                            newCropIsBeingDrawn: !1
                        }, this.onCropPointerDown = t => {
                            let {
                                crop: e,
                                disabled: i
                            } = this.props, n = this.getBox();
                            if (!e) return;
                            let o = d(e, n.width, n.height);
                            if (i) return;
                            t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            let r = t.target.dataset.ord,
                                s = t.clientX,
                                a = t.clientY,
                                l = o.x,
                                h = o.y;
                            if (r) {
                                let e = t.clientX - n.x,
                                    i = t.clientY - n.y,
                                    d = 0,
                                    u = 0;
                                "ne" === r || "e" == r ? (d = e - (o.x + o.width), u = i - o.y, l = o.x, h = o.y + o.height) : "se" === r || "s" === r ? (d = e - (o.x + o.width), u = i - (o.y + o.height), l = o.x, h = o.y) : "sw" === r || "w" == r ? (d = e - o.x, u = i - (o.y + o.height), l = o.x + o.width, h = o.y) : ("nw" === r || "n" == r) && (d = e - o.x, u = i - o.y, l = o.x + o.width, h = o.y + o.height), s = l + n.x + d, a = h + n.y + u
                            }
                            this.evData = {
                                startClientX: s,
                                startClientY: a,
                                startCropX: l,
                                startCropY: h,
                                clientX: t.clientX,
                                clientY: t.clientY,
                                isResize: !!r,
                                ord: r
                            }, this.mouseDownOnCrop = !0, this.setState({
                                cropIsActive: !0
                            })
                        }, this.onComponentPointerDown = t => {
                            let {
                                crop: e,
                                disabled: i,
                                locked: n,
                                keepSelection: o,
                                onChange: r
                            } = this.props, s = this.getBox();
                            if (i || n || o && e) return;
                            t.cancelable && t.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            let a = t.clientX - s.x,
                                l = t.clientY - s.y,
                                u = {
                                    unit: "px",
                                    x: a,
                                    y: l,
                                    width: 0,
                                    height: 0
                                };
                            this.evData = {
                                startClientX: t.clientX,
                                startClientY: t.clientY,
                                startCropX: a,
                                startCropY: l,
                                clientX: t.clientX,
                                clientY: t.clientY,
                                isResize: !0
                            }, this.mouseDownOnCrop = !0, r(d(u, s.width, s.height), h(u, s.width, s.height)), this.setState({
                                cropIsActive: !0,
                                newCropIsBeingDrawn: !0
                            })
                        }, this.onDocPointerMove = t => {
                            let e, {
                                    crop: i,
                                    disabled: n,
                                    onChange: o,
                                    onDragStart: r
                                } = this.props,
                                s = this.getBox();
                            if (n || !i || !this.mouseDownOnCrop) return;
                            t.cancelable && t.preventDefault(), this.dragStarted || (this.dragStarted = !0, r && r(t));
                            let {
                                evData: a
                            } = this;
                            a.clientX = t.clientX, a.clientY = t.clientY, l(i, e = a.isResize ? this.resizeCrop() : this.dragCrop()) || o(d(e, s.width, s.height), h(e, s.width, s.height))
                        }, this.onComponentKeyDown = e => {
                            let {
                                crop: i,
                                disabled: n,
                                onChange: o,
                                onComplete: r
                            } = this.props;
                            if (n) return;
                            let a = e.key,
                                l = !1;
                            if (!i) return;
                            let u = this.getBox(),
                                c = this.makePixelCrop(u),
                                p = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? t.nudgeStepLarge : e.shiftKey ? t.nudgeStepMedium : t.nudgeStep;
                            if ("ArrowLeft" === a ? (c.x -= p, l = !0) : "ArrowRight" === a ? (c.x += p, l = !0) : "ArrowUp" === a ? (c.y -= p, l = !0) : "ArrowDown" === a && (c.y += p, l = !0), l) {
                                e.cancelable && e.preventDefault(), c.x = s(c.x, 0, u.width - c.width), c.y = s(c.y, 0, u.height - c.height);
                                let t = d(c, u.width, u.height),
                                    i = h(c, u.width, u.height);
                                o(t, i), r && r(t, i)
                            }
                        }, this.onHandlerKeyDown = (e, i) => {
                            var n, o;
                            let r, {
                                    aspect: s = 0,
                                    crop: a,
                                    disabled: c,
                                    minWidth: p = 0,
                                    minHeight: f = 0,
                                    maxWidth: _,
                                    maxHeight: m,
                                    onChange: g,
                                    onComplete: v
                                } = this.props,
                                y = this.getBox();
                            if (c || !a || "ArrowUp" !== e.key && "ArrowDown" !== e.key && "ArrowLeft" !== e.key && "ArrowRight" !== e.key) return;
                            e.stopPropagation(), e.preventDefault();
                            let x = (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) ? t.nudgeStepLarge : e.shiftKey ? t.nudgeStepMedium : t.nudgeStep,
                                w = u((n = d(a, y.width, y.height), o = e.key, r = {
                                    ...n
                                }, "ArrowLeft" === o ? "nw" === i ? (r.x -= x, r.y -= x, r.width += x, r.height += x) : "w" === i ? (r.x -= x, r.width += x) : "sw" === i ? (r.x -= x, r.width += x, r.height += x) : "ne" === i ? (r.y += x, r.width -= x, r.height -= x) : "e" === i ? r.width -= x : "se" === i && (r.width -= x, r.height -= x) : "ArrowRight" === o && ("nw" === i ? (r.x += x, r.y += x, r.width -= x, r.height -= x) : "w" === i ? (r.x += x, r.width -= x) : "sw" === i ? (r.x += x, r.width -= x, r.height -= x) : "ne" === i ? (r.y -= x, r.width += x, r.height += x) : "e" === i ? r.width += x : "se" === i && (r.width += x, r.height += x)), "ArrowUp" === o ? "nw" === i ? (r.x -= x, r.y -= x, r.width += x, r.height += x) : "n" === i ? (r.y -= x, r.height += x) : "ne" === i ? (r.y -= x, r.width += x, r.height += x) : "sw" === i ? (r.x += x, r.width -= x, r.height -= x) : "s" === i ? r.height -= x : "se" === i && (r.width -= x, r.height -= x) : "ArrowDown" === o && ("nw" === i ? (r.x += x, r.y += x, r.width -= x, r.height -= x) : "n" === i ? (r.y += x, r.height -= x) : "ne" === i ? (r.y += x, r.width -= x, r.height -= x) : "sw" === i ? (r.x -= x, r.width += x, r.height += x) : "s" === i ? r.height += x : "se" === i && (r.width += x, r.height += x)), r), s, i, y.width, y.height, p, f, _, m);
                            if (!l(a, w)) {
                                let t = h(w, y.width, y.height);
                                g(w, t), v && v(w, t)
                            }
                        }, this.onDocPointerDone = t => {
                            let {
                                crop: e,
                                disabled: i,
                                onComplete: n,
                                onDragEnd: o
                            } = this.props, r = this.getBox();
                            this.unbindDocMove(), !(i || !e) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, o && o(t), n && n(d(e, r.width, r.height), h(e, r.width, r.height)), this.setState({
                                cropIsActive: !1,
                                newCropIsBeingDrawn: !1
                            }))
                        }, this.onDragFocus = () => {
                            var t;
                            null == (t = this.componentRef.current) || t.scrollTo(0, 0)
                        }
                    }
                };
            f.xOrds = ["e", "w"], f.yOrds = ["n", "s"], f.xyOrds = ["nw", "ne", "se", "sw"], f.nudgeStep = 1, f.nudgeStepMedium = 10, f.nudgeStepLarge = 100, f.defaultProps = {
                ariaLabels: {
                    cropArea: "Use the arrow keys to move the crop selection area",
                    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
                    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
                    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
                    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
                    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
                    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
                    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
                    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
                }
            };
            let _ = f
        },
        4297: function(t, e, i) {
            "use strict";
            i.d(e, {
                W: () => l
            });
            var n = i(72521),
                o = i(83426),
                r = i(58191),
                s = i.n(r);

            function a() {
                return (a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            let l = (0, r.forwardRef)(function(t, e) {
                let {
                    bounds: i,
                    boundsOptions: l,
                    center: h,
                    children: d,
                    className: u,
                    id: c,
                    placeholder: p,
                    style: f,
                    whenReady: _,
                    zoom: m,
                    ...g
                } = t, [v] = (0, r.useState)({
                    className: u,
                    id: c,
                    style: f
                }), [y, x] = (0, r.useState)(null);
                (0, r.useImperativeHandle)(e, () => (null == y ? void 0 : y.map) ?? null, [y]);
                let w = (0, r.useCallback)(t => {
                    if (null !== t && null === y) {
                        let e = new o.Map(t, g);
                        null != h && null != m ? e.setView(h, m) : null != i && e.fitBounds(i, l), null != _ && e.whenReady(_), x((0, n.fB)(e))
                    }
                }, []);
                (0, r.useEffect)(() => () => {
                    null == y || y.map.remove()
                }, [y]);
                let b = y ? s().createElement(n.hL, {
                    value: y
                }, d) : p ?? null;
                return s().createElement("div", a({}, v, {
                    ref: w
                }), b)
            })
        },
        63780: function(t, e, i) {
            "use strict";
            i.d(e, {
                e: () => u
            });
            var n, o, r, s, a = i(58191);
            i(17727);
            var l = i(72521);

            function h(t, e) {
                let i = t.pane ?? e.pane;
                return i ? {
                    ...t,
                    pane: i
                } : t
            }
            var d = i(83426);
            let u = (n = function(t, e) {
                let {
                    url: i,
                    ...n
                } = t;
                return Object.freeze({
                    instance: new d.TileLayer(i, h(n, e)),
                    context: e,
                    container: void 0
                })
            }, r = (o = function(t, e, i) {
                ! function(t, e, i) {
                    let {
                        opacity: n,
                        zIndex: o
                    } = e;
                    null != n && n !== i.opacity && t.setOpacity(n), null != o && o !== i.zIndex && t.setZIndex(o)
                }(t, e, i);
                let {
                    url: n
                } = e;
                null != n && n !== i.url && t.setUrl(n)
            }, function(t, e) {
                let i = (0, a.useRef)();
                i.current || (i.current = n(t, e));
                let r = (0, a.useRef)(t),
                    {
                        instance: s
                    } = i.current;
                return (0, a.useEffect)(function() {
                    r.current !== t && (o(s, t, r.current), r.current = t)
                }, [s, t, e]), i
            }), s = function(t) {
                var e, i, n, o, s;
                let d, u, c = (0, l.U$)(),
                    p = r(h(t, c), c);
                return e = c.map, i = t.attribution, d = (0, a.useRef)(i), (0, a.useEffect)(function() {
                    i !== d.current && null != e.attributionControl && (null != d.current && e.attributionControl.removeAttribution(d.current), null != i && e.attributionControl.addAttribution(i)), d.current = i
                }, [e, i]), n = p.current, o = t.eventHandlers, u = (0, a.useRef)(), (0, a.useEffect)(function() {
                    return null != o && n.instance.on(o), u.current = o,
                        function() {
                            null != u.current && n.instance.off(u.current), u.current = null
                        }
                }, [n, o]), s = p.current, (0, a.useEffect)(function() {
                    return (c.layerContainer ?? c.map).addLayer(s.instance),
                        function() {
                            var t;
                            null == (t = c.layerContainer) || t.removeLayer(s.instance), c.map.removeLayer(s.instance)
                        }
                }, [c, s]), p
            }, (0, a.forwardRef)(function(t, e) {
                let {
                    instance: i
                } = s(t).current;
                return (0, a.useImperativeHandle)(e, () => i), null
            }))
        },
        10150: function(t, e, i) {
            "use strict";
            i.d(e, {
                ko: () => o
            });
            var n = i(72521);

            function o() {
                return (0, n.U$)().map
            }
            i(58191)
        },
        26407: function(t, e, i) {
            "use strict";
            i.d(e, {
                nz: () => F,
                er: () => U,
                q9: () => W
            });
            var n = i(36878),
                o = i(42625),
                r = i(58191),
                s = i.n(r);
            let a = "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes("firefox"),
                l = "Backspace";
            var h = i(51116);
            class d {
                static fromDescriptor(t) {
                    throw Error("not implemented")
                }
                getIndex() {
                    return this.nodeIndex
                }
                getType() {
                    return this.type
                }
                getKey() {
                    throw Error("not implemented")
                }
                render(t) {
                    throw Error("not implemented")
                }
                getChildLength() {
                    throw Error("not implemented")
                }
                toDescriptor() {
                    throw Error("not implemented")
                }
                isTextNode() {
                    return ["text", "mention"].includes(this.getType())
                }
                getChildren() {
                    throw Error("not implemented")
                }
                clone() {
                    throw Error("not implemented")
                }
                constructor(t) {
                    (0, h._)(this, "nodeIndex", void 0), (0, h._)(this, "type", void 0), (0, h._)(this, "style", void 0), this.nodeIndex = t, this.type = "text", this.style = []
                }
            }
            class u extends d {
                getKey() {
                    return `emoji-${this.getIndex()}`
                }
                getChildLength() {
                    return this.emoji.length
                }
                getChildren() {
                    return this.emoji
                }
                clone() {
                    return new u(this.nodeIndex, this.emoji, this.renderEmoji)
                }
                render() {
                    let t = this.renderEmoji(this.emoji);
                    return (0, n.jsx)("span", {
                        "data-node-index": this.getIndex(),
                        className: "theodore_emojiNode",
                        children: t
                    }, this.getKey())
                }
                constructor(t, e, i) {
                    super(t), (0, h._)(this, "emoji", void 0), (0, h._)(this, "renderEmoji", void 0), this.emoji = e, this.renderEmoji = i, this.type = "emoji"
                }
            }
            class c extends d {
                getKey() {
                    return `br-${this.getIndex()}`
                }
                getChildren() {
                    return ""
                }
                clone() {
                    return new c(this.nodeIndex)
                }
                render(t, e) {
                    return (0, n.jsx)("p", {
                        dir: e,
                        "data-node-index": this.getIndex(),
                        className: "theodore_paragraphNode",
                        children: t ?? (0, n.jsx)("br", {})
                    }, this.getKey())
                }
                constructor(t) {
                    super(t), this.type = "paragraph"
                }
            }
            class p extends d {
                static fromDescriptor(t) {
                    let e = new p(t.nodeIndex);
                    return null != t.text && e.setChild(t.text), e
                }
                insertText(t, e) {
                    var i, n;
                    this.children = ((null == (i = this.children) ? void 0 : i.substring(0, e)) ?? "") + t + ((null == (n = this.children) ? void 0 : n.substring(e)) ?? "")
                }
                setChild(t) {
                    this.children = t
                }
                getKey() {
                    return `p-${this.getIndex()}`
                }
                getChildren() {
                    return this.children
                }
                getChildLength() {
                    var t;
                    return (null == (t = this.children) ? void 0 : t.length) ?? 0
                }
                clone() {
                    let t = new p(this.nodeIndex);
                    return null != this.children && this.setChild(this.children), t
                }
                render() {
                    if (null == this.children) return (0, n.jsx)("p", {});
                    let t = this.children;
                    return (0, n.jsx)("span", {
                        "data-node-index": this.getIndex(),
                        className: "theodore_textNode",
                        children: t
                    }, this.getKey())
                }
                toDescriptor() {
                    return {
                        type: "text",
                        text: this.children,
                        nodeIndex: this.getIndex()
                    }
                }
                constructor(t) {
                    super(t), (0, h._)(this, "children", null), this.type = "text"
                }
            }
            var f = i(11790),
                _ = i.n(f);
            let m = {
                    nodeIndex: 1,
                    offset: 0
                },
                g = (t, e) => {
                    let i = t.findIndex(t => t.find(t => t.getIndex() == e));
                    if (-1 == i) return [-1, -1];
                    let n = t[i].findIndex(t => t.getIndex() == e);
                    return [i, n]
                },
                v = (t, e) => {
                    let [i] = g(t, e);
                    return i
                },
                y = (t, e) => {
                    if (void 0 == e) return null;
                    let [i, n] = g(t, e);
                    return -1 == i || -1 == n ? null : n + 1 < t[i].length ? t[i][n + 1] : i + 1 < t.length ? t[i + 1][0] : null
                },
                x = (t, e) => {
                    if (void 0 == e) return null;
                    let [i, n] = g(t, e);
                    return -1 == i || -1 == n ? null : n - 1 >= 0 ? t[i][n - 1] : t.length > 1 ? t[i - 1][t[i - 1].length - 1] : null
                },
                w = t => {
                    var e;
                    return null == (e = document.querySelectorAll(`[data-node-index="${t}"]`)) ? void 0 : e[0]
                },
                b = (t, e) => {
                    let [i, n] = g(t, e), o = [...t];
                    return o[i] = [...t[i].slice(0, n), ...t[i].slice(n + 1)], o
                },
                C = (t, e) => {
                    let i = x(t, e);
                    return i ? i.isTextNode() ? {
                        nodeIndex: i.getIndex(),
                        offset: i.getChildLength()
                    } : {
                        nodeIndex: i.getIndex(),
                        offset: 0
                    } : m
                },
                T = t => !!t && 0 !== t.length && /\p{Extended_Pictographic}/u.test(t),
                P = (t, e, i, n) => {
                    let [o, r] = g(t, i), [s, a] = g(t, n);
                    if (-1 == r) return t;
                    let l = t.slice(0, o),
                        h = t[o].slice(0, r + 1),
                        d = !1;
                    for (let t of e)
                        if (Array.isArray(t)) {
                            if (0 == t.length) continue;
                            "paragraph" == t[0].getType() ? (d || (l.push(h), d = !0), l.push(t)) : h.push(...t)
                        } else "paragraph" == t.getType() ? (d || (l.push(h), d = !0), l.push([t])) : d ? l[l.length - 1].push(t) : h.push(t);
                    if (d || l.push(h), -1 != a) {
                        let e = t[s].slice(a),
                            i = e.length > 0 ? e[0] : null;
                        null != i && "paragraph" == i.getType() ? l.push(e) : l[l.length - 1].push(...e), l.push(...t.slice(s + 1))
                    }
                    return l
                },
                I = t => {
                    var e;
                    let i, n = (null == (i = t.childNodes[0]) ? void 0 : i.nodeType) == Node.ELEMENT_NODE && (null == (e = i.childNodes[0]) ? void 0 : e.nodeType) == Node.TEXT_NODE ? i.childNodes[0] : i;
                    return (null == n ? void 0 : n.nodeType) == Node.TEXT_NODE ? n : t
                };

            function z(t, e) {
                for (let i of Array.from(t.childNodes))
                    if (i.nodeType === Node.TEXT_NODE) {
                        if (i.length >= e) {
                            let t = document.createRange(),
                                n = window.getSelection();
                            return t.setStart(i, e), t.collapse(!0), n.removeAllRanges(), n.addRange(t), -1
                        }
                        e -= "length" in i ? i.length : 0
                    } else if (-1 === (e = z(i, e))) return -1;
                if (0 == t.childNodes.length) {
                    let e = document.createRange(),
                        i = window.getSelection();
                    return e.setStart(t, 0), e.collapse(), null == i || i.removeAllRanges(), null == i || i.addRange(e), -1
                }
                return e
            }
            let S = (t, e) => {
                    var i, n, o, r, s, a, l, h;
                    let d = t,
                        u = e;
                    if (d.nodeType != Node.TEXT_NODE && (null == d || null == (i = d.dataset) ? void 0 : i.nodeIndex) == void 0) {
                        let i = Array.from(t.childNodes);
                        if (0 == e) {
                            let t = null == (a = i[0]) || null == (s = a.dataset) ? void 0 : s.nodeIndex;
                            return null == t ? null : {
                                nodeIndex: Number(t),
                                offset: 0
                            }
                        }
                        let l = i[u - 1],
                            h = null == l || null == (n = l.dataset) ? void 0 : n.nodeIndex,
                            d = Array.from(l.childNodes),
                            c = d[d.length - 1];
                        if ("BR" == c.nodeName) return void 0 != h ? {
                            nodeIndex: Number(h),
                            offset: 0
                        } : null;
                        let p = null == c || null == (o = c.dataset) ? void 0 : o.nodeIndex;
                        if (null == p) return null;
                        let f = c.childNodes[0];
                        return void 0 != f && f.nodeType == Node.TEXT_NODE ? {
                            nodeIndex: Number(p),
                            offset: (null == (r = f.textContent) ? void 0 : r.length) ?? 0
                        } : {
                            nodeIndex: Number(p),
                            offset: 0
                        }
                    }
                    if (d.nodeType == Node.ELEMENT_NODE) {
                        let i = ((t, e) => {
                            let i, n = t,
                                o = e;
                            if (n.nodeType == Node.TEXT_NODE && null != n.parentNode) {
                                let t = n.parentNode,
                                    e = t.parentNode;
                                return null != e && (o = Array.from(e.childNodes).findIndex(e => e == t) + 1), {
                                    node: e,
                                    offset: o
                                }
                            }
                            if ((i = n).nodeType !== Node.ELEMENT_NODE || "P" !== i.tagName) {
                                let i = Array.from((n = n.parentNode).childNodes).findIndex(e => e === t);
                                0 == i && (o = e), o = 1 == e ? i + 1 : i
                            }
                            return {
                                node: n,
                                offset: o
                            }
                        })(t, e);
                        if (d = i.node, u = i.offset, (t => {
                                if (t.nodeType != Node.ELEMENT_NODE) return !1;
                                if ("BR" == t.nodeName) return !0;
                                let e = Array.from(t.childNodes);
                                return !(e.length > 1) && "BR" == e[0].nodeName
                            })(d) || 0 == u) {
                            let t = d.dataset.nodeIndex;
                            return void 0 != t ? {
                                nodeIndex: Number(t),
                                offset: 0
                            } : null
                        }
                        let n = d.childNodes[u - 1];
                        for (; n.nodeType != Node.TEXT_NODE && n.childNodes.length > 0;) {
                            let t = n.childNodes[0],
                                e = null == t || null == (l = t.dataset) ? void 0 : l.nodeIndex,
                                i = n.dataset.nodeIndex;
                            if (void 0 == e && void 0 != i) {
                                let e = 0;
                                return t.nodeType == Node.TEXT_NODE && (e = (null == (h = t.textContent) ? void 0 : h.length) ?? u), {
                                    nodeIndex: Number(i),
                                    offset: e
                                }
                            }
                        }
                        return null
                    }
                    if (d.nodeType == Node.TEXT_NODE) {
                        let t = d.parentNode,
                            e = null == t ? void 0 : t.dataset.nodeIndex;
                        if (null != e) return {
                            nodeIndex: Number(e),
                            offset: u
                        }
                    }
                    return null
                },
                M = "COMMAND_INSERT_TEXT",
                E = "COMMAND_INSERT_EMOJI",
                k = "COMMAND_INSERT_PARAGRAPH",
                A = "COMMAND_REMOVE_NODE",
                R = "COMMAND_INSERT_PARAGRAPH_AFTER",
                N = "COMMAND_REPLACE_TEXT",
                O = "COMMAND_REPLACE_PARAGRAPH";
            class Z {
                setSelection(t, e) {
                    var i;
                    this.startSelection = t, void 0 != e ? this.endSelection = e : this.endSelection = t, null == (i = this.onSelectionChange) || i.call(this, void 0 != this.startSelection && void 0 != this.endSelection ? {
                        startSelection: {
                            ...this.startSelection
                        },
                        endSelection: {
                            ...this.endSelection
                        }
                    } : null)
                }
                getSelection() {
                    return null != this.startSelection && null != this.endSelection ? {
                        startSelection: {
                            ...this.startSelection
                        },
                        endSelection: {
                            ...this.endSelection
                        }
                    } : null
                }
                clone() {
                    return new Z(this.startSelection, this.onSelectionChange)
                }
                constructor(t, e) {
                    (0, h._)(this, "onSelectionChange", void 0), (0, h._)(this, "startSelection", void 0), (0, h._)(this, "endSelection", void 0), this.onSelectionChange = e, this.startSelection = t, this.endSelection = t
                }
            }
            let D = t => {
                    if (null == t) return !1;
                    let {
                        startSelection: e,
                        endSelection: i
                    } = t;
                    return e.nodeIndex == i.nodeIndex && e.offset == i.offset
                },
                B = (t, e) => null == t && null == e || (null != t || null == e) && (null == t || null != e) && (null == t ? void 0 : t.nodeIndex) == (null == e ? void 0 : e.nodeIndex) && (null == t ? void 0 : t.offset) == (null == e ? void 0 : e.offset);
            class j {
                assignTransactionId() {
                    return this.transactionId
                }
                commit() {
                    this.transactionId += 1
                }
                pop() {
                    return this.stack.pop()
                }
                push(t) {
                    let e = this.assignTransactionId();
                    this.stack.push(...t.map(t => ({
                        ...t,
                        transactionId: e,
                        selection: void 0 != t.selection ? t.selection : this.getSelection()
                    })))
                }
                pushAndCommit(t) {
                    this.push(t), this.commit()
                }
                top() {
                    return this.stack[this.stack.length - 1]
                }
                setHistoryStack(t) {
                    this.stack = t
                }
                getHistoryStack() {
                    return this.stack
                }
                setTransactionId(t) {
                    this.transactionId = t
                }
                clone() {
                    let t = new j(this.getSelection);
                    return t.setHistoryStack([...this.stack]), t.setTransactionId(this.transactionId), t
                }
                constructor(t) {
                    (0, h._)(this, "getSelection", void 0), (0, h._)(this, "stack", void 0), (0, h._)(this, "transactionId", void 0), this.getSelection = t, this.stack = [], this.transactionId = 0
                }
            }
            let H = [
                [1424, 1535],
                [1536, 1791],
                [1872, 1919],
                [2208, 2303],
                [1792, 1871],
                [1920, 1983],
                [1984, 2047],
                [64336, 65023],
                [65136, 65279],
                [126464, 126719]
            ];
            var F = s().forwardRef((t, e) => {
                    let {
                        className: i,
                        renderEmoji: h,
                        onSelectionChange: d,
                        editorState: f,
                        placeholder: Z,
                        wrapperClassName: j,
                        placeholderClassName: F,
                        maxLines: W,
                        defaultDirection: U = "ltr",
                        style: K,
                        theodoreRef: V,
                        shouldSuppressFocus: X,
                        ...Y
                    } = t, {
                        tree: q
                    } = f, G = 0 === q.length || 1 === q.length && q[0].length <= 1, $ = (0, r.useRef)(null), [J, Q] = s().useState(null), {
                        insertEmoji: tt,
                        insertNewParagraph: te,
                        handleKeyDown: ti,
                        handleOnBeforeInput: tn,
                        handleSelectionChange: to,
                        handlePaste: tr,
                        handleCut: ts,
                        clearAndSetContent: ta
                    } = ((t, e, i) => {
                        let {
                            selectionHandle: n,
                            historyHandle: o,
                            assignNodeIndex: s,
                            tree: h,
                            setTree: d
                        } = i, {
                            getSelection: f,
                            setSelection: Z
                        } = n, {
                            history: j
                        } = o, H = (t, e) => {
                            var i, n;
                            if (t.length <= 1 && (null == (n = t[0]) || null == (i = n[0]) ? void 0 : i.getIndex()) == 0) return t;
                            if (e.command == A) return [...P(t, e.prevState, e.prevNodeIndexInTree, e.nextNodeIndexInTree)];
                            if (e.command == R) {
                                if (null == e.prevState) return t;
                                if (void 0 == e.prevNodeIndexInTree) return [e.prevState, ...t];
                                let i = v(t, e.prevNodeIndexInTree),
                                    n = t.slice(0, i + 1);
                                return n.push(e.prevState), n.push(...t.slice(i + 1)), n
                            }
                            return t.map(t => {
                                let i = t[0];
                                if (i.getIndex() == e.nodeIndex && e.command == O) {
                                    if (null != e.prevState) return e.prevState
                                } else if (i.getIndex() == e.nodeIndex && e.command == k) return [];
                                return t.map(t => {
                                    if (t.getIndex() != e.nodeIndex) return t;
                                    if (e.command == M) return null != e.prevState && t.isTextNode() ? (t.setChild(e.prevState), t) : null;
                                    if (e.command != N || null == e.prevState) return null;
                                    {
                                        let i = p.fromDescriptor(e.prevState).getChildren();
                                        return null != i && t.setChild(i), t
                                    }
                                }).filter(t => null != t)
                            }).filter(t => t.length > 0)
                        }, F = e => {
                            var i, n, o;
                            let r = Y(),
                                a = ((t, e) => {
                                    let i = t.flat().find(t => t.getIndex() == e);
                                    if (null != i && "paragraph" == i.getType()) {
                                        let e = y(t, i.getIndex());
                                        if (null != e && "text" == e.getType()) return e
                                    }
                                    return i
                                })(r, null == (i = f()) ? void 0 : i.startSelection.nodeIndex);
                            if (null == a || "text" != a.getType()) {
                                let t = new p(s());
                                t.setChild(e);
                                let i = f(),
                                    [n, o] = g(r, null == a ? void 0 : a.getIndex()),
                                    l = [...r];
                                if (-1 == n || null == i) {
                                    let e = [l[0][0], t, ...l[0].slice(1)];
                                    return l[0] = e, l
                                }
                                let h = l[n],
                                    u = [...h.slice(0, o + 1), t, ...h.slice(o + 1)];
                                l[n] = u, d(l), j.pushAndCommit([{
                                    command: M,
                                    nodeIndex: t.getIndex(),
                                    prevState: null
                                }]), Z({
                                    nodeIndex: t.getIndex(),
                                    offset: t.getChildLength()
                                })
                            } else if ("text" == a.getType()) {
                                let t = a.getChildren(),
                                    i = null == (n = f()) ? void 0 : n.startSelection.nodeIndex;
                                if (null == i) return;
                                let s = (null == (o = f()) ? void 0 : o.startSelection.offset) ?? 0;
                                a.insertText(e, s);
                                let l = v(r, i),
                                    h = [...r];
                                h[l] = [...r[l]], d(h), j.pushAndCommit([{
                                    command: M,
                                    nodeIndex: a.getIndex(),
                                    prevState: t
                                }]), Z({
                                    nodeIndex: a.getIndex(),
                                    offset: s + e.length
                                })
                            }
                            requestAnimationFrame(() => {
                                if (null != t.current) {
                                    let t = f();
                                    null != t && function(t) {
                                        if (null == t) return;
                                        let e = w(t.nodeIndex);
                                        null != e && z(e, t.offset ?? 0)
                                    }(t.startSelection)
                                }
                            })
                        }, W = t => {
                            let e = f();
                            if (null == e) return;
                            let i = Y(!0);
                            if (!D(e)) {
                                d(i), j.commit();
                                return
                            }
                            let n = $();
                            if (null == n) return;
                            let {
                                startNode: o
                            } = n;
                            if (null == o) return;
                            let r = t == l;
                            if (o.isTextNode()) {
                                if (r && 0 == e.startSelection.offset || !r && o.getChildLength() == e.startSelection.offset) {
                                    V(i, r, o), j.commit();
                                    return
                                }
                                let t = o.getChildren() ?? "",
                                    n = r ? t.slice(0, e.startSelection.offset - 1) + t.slice(e.startSelection.offset) : t.slice(0, e.startSelection.offset) + t.slice(e.startSelection.offset + 1);
                                if (n.length > 0) j.pushAndCommit([{
                                    command: N,
                                    nodeIndex: o.getIndex(),
                                    prevState: o.toDescriptor()
                                }]), o.setChild(n), d(Q(i)), Z({
                                    nodeIndex: o.getIndex(),
                                    offset: r ? e.startSelection.offset - 1 : e.startSelection.offset
                                });
                                else {
                                    let t = x(i, o.getIndex()),
                                        e = y(i, o.getIndex());
                                    d(Q(i = b(i, o.getIndex()))), j.pushAndCommit([{
                                        command: A,
                                        nodeIndex: -1,
                                        prevState: [o],
                                        prevNodeIndexInTree: null == t ? void 0 : t.getIndex(),
                                        nextNodeIndexInTree: null == e ? void 0 : e.getIndex()
                                    }]), Z(C(h, o.getIndex()))
                                }
                            } else if ("emoji" == o.getType()) {
                                let t = x(i, o.getIndex()),
                                    e = y(i, o.getIndex());
                                r ? (d(Q(i = b(i, o.getIndex()))), j.pushAndCommit([{
                                    command: A,
                                    nodeIndex: -1,
                                    prevState: [o],
                                    prevNodeIndexInTree: null == t ? void 0 : t.getIndex(),
                                    nextNodeIndexInTree: null == e ? void 0 : e.getIndex()
                                }]), Z(C(h, o.getIndex()))) : (V(i, !1, o), j.commit())
                            } else "paragraph" == o.getType() && (r ? d(Q(i = X(i, o.getIndex(), r))) : V(i, r, o), j.commit())
                        }, U = t => {
                            let e = Y(),
                                i = K(t),
                                n = i.flat(),
                                o = f();
                            if (null == o) return;
                            let r = o.startSelection.nodeIndex,
                                s = y(e, r);
                            e = P(e, i, r, null == s ? void 0 : s.getIndex());
                            let a = [];
                            for (let t of n) t.isTextNode() ? a.push({
                                command: M,
                                nodeIndex: t.getIndex(),
                                prevState: null
                            }) : "emoji" == t.getType() ? a.push({
                                command: E,
                                nodeIndex: t.getIndex(),
                                prevState: null
                            }) : "paragraph" == t.getType() && a.push({
                                command: k,
                                nodeIndex: t.getIndex(),
                                prevState: null
                            });
                            a.length > 0 && j.pushAndCommit(a);
                            let l = n[n.length - 1];
                            Z({
                                nodeIndex: l.getIndex(),
                                offset: l.isTextNode() ? l.getChildLength() : 0
                            }), d(e)
                        }, K = t => {
                            let i = "function" == typeof Intl.Segmenter ? [...new Intl.Segmenter(void 0, {
                                    granularity: "grapheme"
                                }).segment(t)].map(t => t.segment) : new(_())().splitGraphemes(t),
                                n = [];
                            for (let t of i) {
                                let i = n[n.length - 1];
                                if (T(t)) {
                                    let o = new u(s(), t, e);
                                    void 0 != i && Array.isArray(i) ? i.push(o) : n.push(o)
                                } else if ("\n" == t) {
                                    let t = new c(s());
                                    n.push([t])
                                } else {
                                    let e, o = n;
                                    if (Array.isArray(i) ? (e = i[i.length - 1], o = i) : e = i, void 0 != e && e.isTextNode()) {
                                        let i = e.getChildren();
                                        e.setChild(i + t)
                                    } else {
                                        let e = new p(s());
                                        e.setChild(t), o.push(e)
                                    }
                                }
                            }
                            return n
                        }, V = (t, e, i) => {
                            let n = [...t],
                                o = e ? x(n, i.getIndex()) : y(n, i.getIndex());
                            if (o)
                                if (o.isTextNode() && o.getChildLength() > 1) {
                                    let t = o.getChildren() ?? "",
                                        i = e ? t.slice(0, t.length - 1) : t.slice(1);
                                    i.length, j.push([{
                                        command: N,
                                        nodeIndex: o.getIndex(),
                                        prevState: o.toDescriptor()
                                    }]), d(Q(n)), o.setChild(i), e && Z({
                                        nodeIndex: o.getIndex(),
                                        offset: i.length
                                    })
                                } else if ("paragraph" == o.getType()) {
                                let [t] = g(n, i.getIndex()), o = n[t][0];
                                n = X(n, o.getIndex(), e), j.commit(), d(Q(n))
                            } else {
                                let t = x(n, o.getIndex()),
                                    e = y(n, o.getIndex());
                                d(Q(n = b(n, o.getIndex()))), j.push([{
                                    command: A,
                                    nodeIndex: -1,
                                    prevState: [o],
                                    prevNodeIndexInTree: null == t ? void 0 : t.getIndex(),
                                    nextNodeIndexInTree: null == e ? void 0 : e.getIndex()
                                }])
                            }
                        }, X = (t, e, i) => {
                            let [n] = g(t, e);
                            if (0 == n && i || n == t.length - 1 && !i) return [...t];
                            let o = i ? x(t, e) : y(t, e),
                                r = i ? -1 : 0,
                                s = t.slice(0, n + r),
                                a = [...t[n + r + 1]],
                                l = t[n + r + 1].slice(1),
                                h = [...t[n + r]],
                                d = t[n + r].concat(l);
                            s.push(d), s.push(...t.slice(n + r + 2));
                            let u = x(t, a[0].getIndex()),
                                c = u ? v(t, null == u ? void 0 : u.getIndex()) : void 0,
                                p = void 0 != c ? t[c][0] : null;
                            return j.push([{
                                command: R,
                                nodeIndex: -1,
                                prevState: a,
                                prevNodeIndexInTree: p ? p.getIndex() : void 0
                            }]), j.push([{
                                command: O,
                                nodeIndex: h[0].getIndex(),
                                prevState: h
                            }]), i && o && Z({
                                nodeIndex: o.getIndex(),
                                offset: o.isTextNode() ? o.getChildLength() : 0
                            }), s
                        }, Y = t => {
                            var e, i, n, o, r, s;
                            let a = f(),
                                l = $(),
                                d = D(a),
                                u = d ? [...h] : [];
                            if (d || null == a || null == l) return u;
                            let {
                                startNode: c,
                                endNode: p
                            } = l, {
                                startSelection: _,
                                endSelection: v
                            } = a, [w, T] = g(h, null == c ? void 0 : c.getIndex()), [P, I] = g(h, null == p ? void 0 : p.getIndex());
                            if (w == P) {
                                if (T == I) {
                                    if (null == c ? void 0 : c.isTextNode()) {
                                        let e = c.getChildren() ?? "",
                                            i = e.slice(0, _.offset) + e.slice(v.offset),
                                            n = c.toDescriptor();
                                        t && 0 == i.length ? (u.push(...b(h, c.getIndex())), j.push([{
                                            command: A,
                                            nodeIndex: c.getIndex(),
                                            prevState: [c],
                                            prevNodeIndexInTree: null == (r = x(h, c.getIndex())) ? void 0 : r.getIndex(),
                                            nextNodeIndexInTree: null == (s = y(h, c.getIndex())) ? void 0 : s.getIndex()
                                        }]), Z(C(h, c.getIndex()))) : (c.setChild(i), u.push(...h), j.push([{
                                            command: N,
                                            nodeIndex: c.getIndex(),
                                            prevState: n
                                        }]), Z({
                                            nodeIndex: c.getIndex(),
                                            offset: _.offset
                                        }))
                                    } else if (0) throw Error("impossible case and start end indices are equal only when selected node is text node or selection is collapsed.");
                                    return Q(u)
                                }
                                u.push(...h.slice(0, w));
                                let e = [...h[w].slice(0, T)],
                                    i = [];
                                if (c)
                                    if (c.isTextNode()) {
                                        let n = c.getChildren() ?? "",
                                            o = n.slice(0, a.startSelection.offset);
                                        if (t && 0 == o.length) i.push(c);
                                        else {
                                            if (n != o) {
                                                let t = c.toDescriptor();
                                                j.push([{
                                                    command: N,
                                                    nodeIndex: c.getIndex(),
                                                    prevState: t
                                                }]), c.setChild(o)
                                            }
                                            e.push(c)
                                        }
                                    } else e.push(c);
                                for (let t = T + 1; t < I; t++) i.push(h[w][t]);
                                if ((null == p ? void 0 : p.getType()) == "emoji" && i.push(p), p && p.isTextNode()) {
                                    let n = p.getChildren() ?? "",
                                        o = p.toDescriptor(),
                                        r = n.slice(a.endSelection.offset);
                                    t && 0 == r.length ? i.push(p) : n != r && (j.push([{
                                        command: N,
                                        nodeIndex: p.getIndex(),
                                        prevState: o
                                    }]), p.setChild(r), e.push(p))
                                }
                                return i.length > 0 && j.push([{
                                    command: A,
                                    nodeIndex: -1,
                                    prevState: i,
                                    prevNodeIndexInTree: null == (n = x(h, i[0].getIndex())) ? void 0 : n.getIndex(),
                                    nextNodeIndexInTree: null == (o = y(h, i[i.length - 1].getIndex())) ? void 0 : o.getIndex()
                                }]), e.push(...h[w].slice(I + 1)), u.push(e), u.push(...h.slice(P + 1)), c ? void 0 != i.find(t => t.getIndex() == (null == c ? void 0 : c.getIndex())) ? Z(C(h, c.getIndex())) : Z({
                                    nodeIndex: c.getIndex(),
                                    offset: _.offset
                                }) : Z(m), Q(u)
                            }
                            u.push(...h.slice(0, w));
                            let z = [...h[w].slice(0, T)],
                                S = [];
                            if (null == c ? void 0 : c.isTextNode()) {
                                let e = c.getChildren() ?? "",
                                    i = e.slice(0, a.startSelection.offset);
                                if (t && 0 == i.length) S.push(c);
                                else {
                                    if (e != i) {
                                        let t = c.toDescriptor();
                                        j.push([{
                                            command: N,
                                            nodeIndex: c.getIndex(),
                                            prevState: t
                                        }]), c.setChild(i)
                                    }
                                    z.push(c)
                                }
                            } else null != c && z.push(c);
                            let M = h[w].slice(T + 1);
                            M.length > 0 && S.push(...M);
                            for (let t = w + 1; t < P; ++t) S.push(...h[t]);
                            let E = h[P].slice(0, I);
                            E.length > 0 && S.push(...E);
                            let k = [];
                            if (p && p.isTextNode()) {
                                let e = p.getChildren() ?? "",
                                    i = p.toDescriptor(),
                                    n = e.slice(a.endSelection.offset);
                                t && 0 == n.length ? S.push(p) : e != n && (j.push([{
                                    command: N,
                                    nodeIndex: p.getIndex(),
                                    prevState: i
                                }]), p.setChild(n), k.push(p))
                            }
                            k.push(...h[P].slice(I + 1)), !p || (null == p ? void 0 : p.isTextNode()) || S.push(p);
                            let R = Array.isArray(S[0]) ? S[0][0] : S[0],
                                O = S.length - 1,
                                B = Array.isArray(S[O]) ? S[O][0] : S[O];
                            return j.push([{
                                command: A,
                                prevState: S,
                                nodeIndex: -1,
                                prevNodeIndexInTree: null == (e = x(h, R.getIndex())) ? void 0 : e.getIndex(),
                                nextNodeIndexInTree: null == (i = y(h, B.getIndex())) ? void 0 : i.getIndex()
                            }]), z.push(...k), u.push(z), u.push(...h.slice(P + 1)), c ? void 0 != S.flat().find(t => t.getIndex() == (null == c ? void 0 : c.getIndex())) ? Z(C(h, c.getIndex())) : Z({
                                nodeIndex: c.getIndex(),
                                offset: _.offset
                            }) : Z(m), Q(u)
                        }, q = () => {
                            var t;
                            let e = Y(!0),
                                i = new c(s()),
                                n = null == (t = f()) ? void 0 : t.startSelection;
                            if (null == n) return;
                            let o = $(),
                                r = null == o ? void 0 : o.startNode;
                            if (null == r) return;
                            let [a, l] = g(e, r.getIndex()), h = [...e[a]], u = h[0], _ = h[h.length - 1], m = i.getIndex();
                            if (null == r ? void 0 : r.isTextNode()) {
                                let t = r.getChildren(),
                                    o = 0 == n.offset,
                                    c = n.nodeIndex == _.getIndex() && ("text" != _.getType() || n.offset == _.getChildLength());
                                if (o || c) {
                                    let t = o ? l : l + 1,
                                        n = e[a].slice(0, t),
                                        r = [i, ...e[a].slice(t)];
                                    d([...e.slice(0, a), n, r, ...e.slice(a + 1)]), o && (null != r[1] && "text" == r[1].getType() && (m = r[1].getIndex()), j.push([{
                                        command: O,
                                        nodeIndex: u.getIndex(),
                                        prevState: h
                                    }]))
                                } else if (null != t) {
                                    let o = e[a].slice(0, l),
                                        r = [i],
                                        c = t.slice(0, n.offset),
                                        f = t.slice(n.offset);
                                    if (c.length > 0) {
                                        let t = new p(s());
                                        t.setChild(c), o.push(t)
                                    }
                                    if (f.length > 0) {
                                        let t = new p(s());
                                        t.setChild(f), r.push(t)
                                    }
                                    r.push(...e[a].slice(l + 1)), null != r[1] && "text" == r[1].getType() && (m = r[1].getIndex()), d([...e.slice(0, a), o, r, ...e.slice(a + 1)]), j.push([{
                                        command: O,
                                        nodeIndex: u.getIndex(),
                                        prevState: h
                                    }])
                                } else throw Error("tries to insert paragraph at a text node with null content")
                            } else {
                                let t = e[a].slice(0, l + 1),
                                    n = [i, ...e[a].slice(l + 1)];
                                d([...e.slice(0, a), t, n, ...e.slice(a + 1)]), j.push([{
                                    command: O,
                                    nodeIndex: u.getIndex(),
                                    prevState: h
                                }])
                            }
                            j.pushAndCommit([{
                                command: k,
                                nodeIndex: i.getIndex(),
                                prevState: null
                            }]), Z({
                                nodeIndex: m,
                                offset: 0
                            })
                        }, G = i => {
                            (e => {
                                var i, n, o;
                                let r = Y(!0),
                                    a = $(),
                                    l = (null == (n = f()) || null == (i = n.startSelection) ? void 0 : i.offset) ?? 0;
                                if ((null == a ? void 0 : a.startNode) != null) {
                                    let t = null == a ? void 0 : a.startNode,
                                        [i, n] = g(r, t.getIndex()),
                                        o = "text" == t.getType() && (l == t.getChildLength() || 0 == l);
                                    if ("text" != t.getType() || o) {
                                        let o = +("text" != t.getType() || 0 != l),
                                            s = r[i],
                                            a = [...s.slice(0, n + o), e, ...s.slice(n + o)];
                                        r[i] = a, d(r)
                                    } else {
                                        let o = t.getChildren();
                                        if (null != o) {
                                            let [a, h] = [o.slice(0, l), o.slice(l)], u = new p(s());
                                            u.setChild(h), t.setChild(a);
                                            let c = r[i],
                                                f = [...c.slice(0, n), t, e, u, ...c.slice(n + 1)];
                                            r[i] = f, d(r), j.push([{
                                                command: M,
                                                nodeIndex: u.getIndex(),
                                                prevState: null
                                            }, {
                                                command: M,
                                                nodeIndex: t.getIndex(),
                                                prevState: o
                                            }])
                                        } else throw Error("tries to insert emoji at a text node with null content")
                                    }
                                } else r[0] = [r[0][0], e, ...r[0].slice(1)], d(r);
                                j.pushAndCommit([{
                                    command: E,
                                    nodeIndex: e.getIndex(),
                                    prevState: null
                                }]), Z({
                                    nodeIndex: e.getIndex(),
                                    offset: 0
                                }), null == (o = t.current) || o.focus()
                            })(new u(s(), i, e))
                        }, $ = () => {
                            let t = f();
                            return null == t ? null : {
                                startNode: J(t.startSelection.nodeIndex),
                                endNode: J(t.endSelection.nodeIndex)
                            }
                        }, J = t => void 0 == t ? null : h.flat().find(e => e.getIndex() == t) ?? null, Q = t => 0 == t.length ? (Z(m), [
                            [new c(1)]
                        ]) : [...t];
                        return (0, r.useLayoutEffect)(() => {
                            var e, i;
                            let n = f(),
                                o = $(),
                                r = (null == o ? void 0 : o.startNode) != null ? function(t, e) {
                                    if (null == t) return null;
                                    let i = -1,
                                        n = -1;
                                    for (let o = 0; o < t.length; o++) {
                                        let r = t[o];
                                        for (let t = 0; t < r.length; t++)
                                            if (r[t].getIndex() == e.getIndex()) {
                                                i = o, n = t;
                                                break
                                            } if (-1 != i && -1 != n) break
                                    }
                                    return n + 1 < t[i].length ? t[i][n + 1] : i + 1 < t.length ? t[i + 1][0] : e
                                }(h, null == o ? void 0 : o.startNode) : null;
                            if ((null == o || null == (e = o.startNode) ? void 0 : e.getType()) == "emoji" && (null == r ? void 0 : r.getType()) == "text" && Z({
                                    nodeIndex: r.getIndex(),
                                    offset: 0
                                }), null == (n = f())) return;
                            let {
                                startSelection: s,
                                endSelection: a
                            } = n;
                            if (D(n)) {
                                let e = s.nodeIndex,
                                    n = $(),
                                    o = w(e);
                                if (null == o) return;
                                if (((t, e) => {
                                        let i = e.getBoundingClientRect(),
                                            n = !1;
                                        if (null != t) {
                                            let e = t.getBoundingClientRect();
                                            n = i.top < e.top || i.bottom > e.bottom || i.left < e.left || i.right > e.right
                                        } else {
                                            let t = window.innerHeight || document.documentElement.clientHeight;
                                            n = i.top < 0 || i.bottom > t
                                        }
                                        return n
                                    })(null == t ? void 0 : t.current, o) && o.scrollIntoView({
                                        block: "nearest",
                                        inline: "nearest"
                                    }), null == n || null == (i = n.startNode) ? void 0 : i.isTextNode()) z(o, s.offset);
                                else {
                                    let t = document.getSelection();
                                    if (null != t) {
                                        var l = document.createRange();
                                        "P" == o.nodeName ? l.setStart(o, 0) : l.setStartAfter(o), l.collapse(!0), t.removeAllRanges(), t.addRange(l)
                                    }
                                }
                            } else {
                                let t = $(),
                                    e = null == t ? void 0 : t.startNode,
                                    i = null == t ? void 0 : t.endNode;
                                if (null == e || null == i) return;
                                ! function(t, e, i, n) {
                                    let o = w(t.getIndex()),
                                        r = w(i.getIndex());
                                    if (null == o || null == r) return;
                                    let s = document.createRange();
                                    if (t.isTextNode()) {
                                        let t = I(o);
                                        s.setStart(t, e)
                                    } else "P" == o.tagName ? s.setStart(o, 0) : s.setStartAfter(o);
                                    if (i.isTextNode()) {
                                        let t = I(r);
                                        s.setEnd(t, n)
                                    } else "P" == r.tagName ? s.setEnd(r, 0) : s.setEndAfter(r);
                                    let a = window.getSelection();
                                    null == a || a.removeAllRanges(), null == a || a.addRange(s)
                                }(e, s.offset, i, a.offset)
                            }
                        }, [h]), {
                            insertEmoji: G,
                            insertNewParagraph: q,
                            handleKeyDown: t => {
                                let e = t.key,
                                    i = !1;
                                if ((t.metaKey || t.ctrlKey) && "KeyZ" === t.code && !t.shiftKey) {
                                    t.preventDefault(), (() => {
                                        var t, e, i;
                                        let n;
                                        if (null != h)
                                            do {
                                                let t = j.pop();
                                                if (null == t) return;
                                                void 0 == n && (n = t.transactionId), d(H(h, t)), null != t.selection && Z(null == (e = t.selection) ? void 0 : e.startSelection, null == (i = t.selection) ? void 0 : i.endSelection)
                                            } while (n == (null == (t = j.top()) ? void 0 : t.transactionId))
                                    })();
                                    return
                                }
                                if (!t.ctrlKey && !t.metaKey || "KeyX" !== t.code) {
                                    if (t.ctrlKey && ("KeyB" === t.code || "KeyI" === t.code || "KeyU" === t.code)) return void t.preventDefault();
                                    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e) ? i = !0 : "Enter" == e ? q() : e == l || "Delete" == e ? W(e) : " " == e ? F(e) : "Tab" == e ? F("	") : i = !0, i || t.preventDefault()
                                }
                            },
                            handleOnBeforeInput: t => {
                                if (t.preventDefault(), "insertText" == t.inputType || "insertFromComposition" == t.inputType) {
                                    let i = null == t ? void 0 : t.data;
                                    if (i)
                                        if (T(i)) {
                                            var e;
                                            let t = (null == (e = i.match(/\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?(?:\u200D\p{Extended_Pictographic}(?:\uFE0F|\uFE0E)?)*|[\u{1F1E6}-\u{1F1FF}]{2}/u)) ? void 0 : e[0]) ?? null;
                                            null != t && G(t)
                                        } else F(i)
                                } else "deleteContentBackward" == t.inputType && W(l)
                            },
                            handleSelectionChange: () => {
                                var e;
                                let i = document.getSelection();
                                if (null == i) return;
                                let n = i.getRangeAt(0);
                                if (!(null == (e = t.current) ? void 0 : e.contains(n.commonAncestorContainer))) return;
                                let o = S(n.startContainer, n.startOffset),
                                    r = S(n.endContainer, n.endOffset);
                                if (null == o) return;
                                let s = f();
                                null == s ? Z({
                                    ...o,
                                    ...r
                                }) : B(s.startSelection, o) && B(s.endSelection, r) || Z({
                                    ...o
                                }, void 0 != r ? {
                                    ...r
                                } : void 0)
                            },
                            handlePaste: t => {
                                t.preventDefault(), U(t.clipboardData.getData("text/plain"))
                            },
                            handleCut: () => {
                                if (!a) {
                                    let t = function() {
                                        let t = document.getSelection();
                                        if (!t || 0 === t.rangeCount) return;
                                        let e = [];
                                        for (let i = 0; i < t.rangeCount; i++) {
                                            let n = t.getRangeAt(i).cloneContents(),
                                                o = document.createElement("div");
                                            o.appendChild(n), o.querySelectorAll("img").forEach(t => {
                                                let e = t.getAttribute("alt") || "",
                                                    i = document.createTextNode(e);
                                                t.replaceWith(i)
                                            });
                                            let r = o.querySelectorAll("p");
                                            Array.from(r).slice(0, r.length - 1).forEach(t => {
                                                (t.textContent && t.textContent.trim().length > 0 || t.querySelector("br")) && t.appendChild(document.createTextNode("\n"))
                                            });
                                            let s = o.textContent || "";
                                            e.push(s)
                                        }
                                        return e.join("")
                                    }();
                                    t && (t => {
                                        if ("undefined" == typeof window || "undefined" == typeof document) return;
                                        if (navigator.clipboard && "function" == typeof navigator.clipboard.writeText) try {
                                            navigator.clipboard.writeText(t);
                                            return
                                        } catch {}
                                        let e = document.createElement("textarea");
                                        e.value = t, e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px";
                                        let i = document.getSelection(),
                                            n = i && i.rangeCount > 0 ? i.getRangeAt(0) : null;
                                        document.body.appendChild(e), e.select();
                                        try {
                                            document.execCommand("copy")
                                        } finally {
                                            document.body.removeChild(e), n && i && (i.removeAllRanges(), i.addRange(n))
                                        }
                                    })(t)
                                }
                                let t = Y(!0);
                                j.commit(), d(t)
                            },
                            clearAndSetContent: t => {
                                let e = i.tree,
                                    n = e[0][0],
                                    o = e[e.length - 1][e[e.length - 1].length - 1];
                                Z({
                                    nodeIndex: n.getIndex(),
                                    offset: 0
                                }, o ? {
                                    nodeIndex: o.getIndex(),
                                    offset: o.isTextNode() ? o.getChildLength() : 0
                                } : void 0), U(t)
                            }
                        }
                    })($, h, f);
                    (0, r.useImperativeHandle)(V, () => ({
                        insertEmoji: t => {
                            tt(t)
                        },
                        insertNewParagraph: () => {
                            te()
                        },
                        setContent: t => {
                            ta(t)
                        }
                    }), [tt, te]), (0, r.useEffect)(() => (document.addEventListener("selectionchange", to), () => document.removeEventListener("selectionchange", to)), [to]), (0, r.useEffect)(() => {
                        var t;
                        return null == (t = $.current) || t.addEventListener("beforeinput", tn), () => {
                            var t;
                            return null == (t = $.current) ? void 0 : t.removeEventListener("beforeinput", tn)
                        }
                    }, [tn]), (0, r.useEffect)(() => {
                        if (null == W || W <= 0) return;
                        let t = $.current;
                        if (!t) return;
                        let e = function(t) {
                            let e = t.lineHeight,
                                i = parseFloat(t.fontSize || ""),
                                n = Number.isFinite(i);
                            if (!e) return null;
                            if ("normal" === e) return n ? Math.ceil(1.4 * i) : null;
                            let o = parseFloat(e);
                            if (!Number.isFinite(o)) return null;
                            let r = e.trim();
                            return r.endsWith("px") ? o : r.endsWith("%") ? n ? o / 100 * i : null : n ? o * i : o
                        }(window.getComputedStyle(t));
                        Q(null != e && Number.isFinite(e) ? e * W : null)
                    }, [W]), (0, r.useEffect)(() => {
                        let t = $.current;

                        function e() {
                            t.blur()
                        }
                        return X && t.addEventListener("focus", e), () => {
                            t.removeEventListener("focus", e)
                        }
                    }, [X]);
                    let tl = s().useCallback(t => {
                        $.current = t, "function" == typeof e ? e(t) : e && (e.current = t)
                    }, [e]);
                    return (0, r.useLayoutEffect)(() => {
                        var t, e;
                        Y.autoFocus ? null == (t = $.current) || t.focus() : null == (e = $.current) || e.blur()
                    }, [Y.autoFocus]), (0, n.jsxs)("div", {
                        className: (0, o.A)("theodore_wrapper", j),
                        children: [(0, n.jsx)("div", {
                            className: `theodore_contentEditable ${i??""}`,
                            contentEditable: "true",
                            onKeyDown: ti,
                            onPaste: tr,
                            onCut: ts,
                            ref: tl,
                            onInput: t => t.preventDefault(),
                            autoCorrect: "off",
                            spellCheck: "false",
                            style: {
                                ...null != J ? {
                                    maxHeight: `${J}px`
                                } : {},
                                ...K
                            },
                            ...Y,
                            suppressContentEditableWarning: !0,
                            children: null == q ? void 0 : q.map(t => {
                                var e;
                                if (0 == t.length) throw Error("Subtree is empty");
                                let i = t[0],
                                    o = t.slice(1),
                                    r = 0 == o.length ? "rtl" == U : o[0].isTextNode() && null != o[0].getChildren() ? function(t, e) {
                                        if ("" == t) return "rtl" == e;
                                        let i = t.charCodeAt(0);
                                        return H.some(t => {
                                            let [e, n] = t;
                                            return i >= e && i <= n
                                        })
                                    }((null == (e = o[0].getChildren()) ? void 0 : e.slice(0, 1)) ?? "", U) : "rtl" == U;
                                return i.render(0 == o.length ? void 0 : n.jsx(n.Fragment, {
                                    children: o.map(t => t.render())
                                }), r ? "rtl" : "ltr")
                            })
                        }), void 0 != Z ? "string" == typeof Z ? (0, n.jsx)("div", {
                            className: (0, o.A)("theodore_placeholder", {
                                theodore_hiddenPlaceholder: !G
                            }, F),
                            children: Z
                        }) : G ? Z : null : null]
                    })
                }),
                W = t => {
                    let e = "";
                    for (let i = 0; i < t.length; ++i) {
                        let n = t[i];
                        for (let o = 0; o < t[i].length; ++o) e += n[o].getChildren() ?? "";
                        e += "\n"
                    }
                    return e
                },
                U = t => {
                    var e;
                    let i, n, o = (0, r.useRef)(1),
                        s = (i = (0, r.useRef)(new Z(m, t)), {
                            clone: () => i.current.clone(),
                            getSelection: () => i.current.getSelection(),
                            setSelection: (t, e) => i.current.setSelection(t, e)
                        }),
                        a = (e = s.getSelection, {
                            clone: () => n.current.clone(),
                            history: (n = (0, r.useRef)(new j(e))).current
                        }),
                        [l, h] = (0, r.useState)([
                            [new c(1)]
                        ]);
                    return {
                        tree: l,
                        setTree: h,
                        assignNodeIndex: () => (++o.current, o.current),
                        historyHandle: a,
                        selectionHandle: s
                    }
                }
        }
    }
]);
//# sourceMappingURL=7613.557ef8ab.js.map