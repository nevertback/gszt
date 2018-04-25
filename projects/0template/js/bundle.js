"use strict";

(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
                }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];return o(n || r);
                }, p, p.exports, r, e, n, t);
            }return n[i].exports;
        }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
            o(t[i]);
        }return o;
    }return r;
})()({ 1: [function (require, module, exports) {
        function square() {
            console.log('test21');
        }
        module.exports = square;
    }, {}], 2: [function (require, module, exports) {
        /*
         * Gamersky 基本专题模板 js
         * v 1.0.0
         * create by MrrrTian
         */
        /*
         * 使用公共组件
         */
        var GsPopup = require('gslib/components/GsPopup');
        GsPopup.init({
            tar: '.popupBtn'
        });
        GsPopup.init({
            tar: '.popupBtn2'
        });
        /*
         * 使用当前专题组件
         */
        var test = require('./component/test.js');
        test();
    }, { "./component/test.js": 1, "gslib/components/GsPopup": 3 }], 3: [function (require, module, exports) {
        var GsPopup = {
            createDom: function createDom(opt) {
                var vDom = '';
                vDom += "<div class=\"GsPopup GsPopupClose gs-popup-mask\"></div>";
                vDom += "<div class=\"GsPopup gs-popup\"><a class=\"gs-popup-close GsPopupClose\"></a></div>";
                return vDom;
            },
            scrollEnable: function scrollEnable() {
                var $body = $('body');
                if ($body.hasClass('GsPopupScrollHide') === true) {
                    $body.removeClass('GsPopupScrollHide').css({
                        overflow: 'auto',
                        paddingRight: ''
                    });
                }
            },
            scrollDisable: function scrollDisable() {
                var $body = $('body'),
                    scrollWidth = void 0;
                function getScrollbarWidth() {
                    var oP = document.createElement('p'),
                        styles = {
                        width: '100px',
                        height: '100px'
                    },
                        i = void 0,
                        clientWidth1 = void 0,
                        clientWidth2 = void 0,
                        scrollbarWidth = void 0;
                    for (i in styles) {
                        oP.style[i] = styles[i];
                    }document.body.appendChild(oP);
                    clientWidth1 = oP.clientWidth;
                    oP.style.overflowY = 'scroll';
                    clientWidth2 = oP.clientWidth;
                    scrollbarWidth = clientWidth1 - clientWidth2;
                    if (typeof oP.remove === "undefined") {
                        oP.removeNode();
                    } else {
                        oP.remove();
                    }
                    return scrollbarWidth;
                }
                scrollWidth = getScrollbarWidth();
                $body.addClass('GsPopupScrollHide');
                $body.css({
                    overflow: 'hidden',
                    paddingRight: scrollWidth + 'px'
                });
            },
            close: function close(opt) {
                var _this = this,
                    $GsPopup = $('.GsPopup');
                $GsPopup.removeClass('cur');
                _this.scrollEnable();
                setTimeout(function () {
                    $GsPopup.remove();
                }, opt.timer.close);
            },
            show: function show(opt) {
                var _this = this;
                $('body').append(_this.createDom(opt));
                setTimeout(function () {
                    $('.GsPopup').addClass('cur');
                    _this.scrollDisable();
                }, 30);
                $('.GsPopupClose').on('click', function () {
                    _this.close(opt);
                });
            },
            bindEvent: function bindEvent(opt) {
                var _this = this;
                $(opt.tar).on('click', function () {
                    _this.show(opt);
                });
            },
            init: function init(opt) {
                var options = {
                    timer: {
                        close: 250
                    }
                };

                options = $.extend(options, opt);
                this.bindEvent(options);
            }
        };

        module.exports = GsPopup;
    }, {}] }, {}, [2]);