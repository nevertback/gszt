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
        var s4 = {
            formNie: function formNie() {
                if ($(".gallery_container").length > 0) {
                    Gallery.create({
                        galleryContainer: ".gallery_container",
                        slidesPerView: 3,
                        gallery_prev: ".gallery_prev",
                        gallery_next: ".gallery_next",
                        stretch: -150,
                        autoPlay: !1,
                        rotate: 0,
                        depth: 600
                    });
                }
            },
            init: function init() {
                this.formNie();
            }
        };
        module.exports = s4;
    }, {}], 2: [function (require, module, exports) {
        /*
         * Gamersky 基本专题模板 js
         * v 1.0.0
         * create by MrrrTian
         */
        /*
         * 使用公共组件
         */
        var GsForbiddenIE = require('gslib/components/GsForbiddenIE');
        var GsFixCell = require('gslib/components/GsFixCell');
        GsForbiddenIE.init({
            ver: 9,
            fallback: {
                name: '谷歌&nbsp;Chrome',
                url: 'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
            }
        });
        GsFixCell.init({
            minWidth: 1450
        });
        /*
         * 使用当前专题组件
         */
        var s4 = require('./component/s4.js');
        s4.init();
    }, { "./component/s4.js": 1, "gslib/components/GsFixCell": 3, "gslib/components/GsForbiddenIE": 4 }], 3: [function (require, module, exports) {
        var GsFixCell = {
            fixCellAction: function fixCellAction(opt) {
                var $fixCell = $('.GsFixCell'),
                    minWidth = opt.minWidth,
                    fixCellHalf = void 0,
                    fcTop = $fixCell.offset().top,
                    openScroll = false;
                if (typeof opt.halfSize === "undefined") {
                    fixCellHalf = $fixCell.height() / 2;
                } else {
                    fixCellHalf = opt.halfSize;
                }
                function scrollFunc() {
                    var $win = $(window),
                        $html = $('html'),
                        st = $html.scrollTop();
                    st = st === 0 ? $('body').scrollTop() : $html.scrollTop();
                    if (st >= fcTop - ($win.height() / 2 - fixCellHalf)) {
                        $fixCell.addClass('cur').css({ 'marginTop': -fixCellHalf + 'px' });
                    } else {
                        $fixCell.removeClass('cur').css({ 'marginTop': '' });
                    }
                }
                function resizeFnc() {
                    var $win = $(window);
                    if ($win.width() < minWidth) {
                        $fixCell.hide();
                        openScroll = false;
                    } else {
                        $fixCell.show();
                        openScroll = true;
                        scrollFunc();
                    }
                }
                resizeFnc();
                scrollFunc();
                $(window).resize(resizeFnc).scroll(function () {
                    if (openScroll === true) {
                        scrollFunc();
                    }
                });
            },
            init: function init(opt) {
                var defaultOption = {
                    minWidth: 1280
                };
                defaultOption = $.extend(defaultOption, opt);
                this.fixCellAction(defaultOption);
            }
        };

        module.exports = GsFixCell;
    }, {}], 4: [function (require, module, exports) {
        var GsForbiddenIE = {
            fbFnc: function fbFnc(opt) {
                var sbie = $.browser.msie,
                    ver = parseInt($.browser.version),
                    ieWarning = '';
                ieWarning += "<div id=\"gs-warning-tips\" style=\"display: none;font-size: 14px; height: 97px; width: 100%; border-bottom: #e22200 3px solid; position: fixed; text-align: center; left: 0px; z-index: 10000000; line-height: 100px; bottom: 0px; background-color: #262626\"><img style=\"width: auto; vertical-align: auto; position: relative; display: inline; top: 2px\" src=\"http://image.gamersky.com/webimg13/zhuanti/common/warning.png\"> <span style=\"font-size: 18px; color: black;color: #e5e5e5;\">&nbsp;\u60A8\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u60A8\u6D4F\u89C8\u672C\u9875\u9762\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u60A8\u7684\u6D4F\u89C8\u5668\uFF1A&nbsp;&nbsp;</span> <a style=\"font-size: 18px; text-decoration: none; height: 60px; width: 180px; color: #fff; text-align: center; display: inline-block; line-height: 60px; background-color: #e22200\" href=\"" + opt.fallback.url + "\" target=\"_balnk\">" + opt.fallback.name + "</a> </div>";
                ieWarning += '<div id="gs-warning-bg" style="height: 100%; width: 100%; position: fixed; left: 0px; filter: alpha(opacity=65); z-index: 99999; top: 0px; background-color: black; opacity: 0.65"></div>';
                ieWarning += "<div id=\"gs-warning-dialog\" style=\"font-size: 14px; border-top: #e22200 3px solid; height: 190px; width: 400px; position: fixed; padding-bottom: 40px; padding-top: 40px; padding-left: 60px; left: 50%; margin: -132px 0px 0px -260px; z-index: 10000000; top: 50%; padding-right: 60px; background-color: #262626\"><p style=\"font-size: 18px; color: black; line-height: 30px;color: #e5e5e5;\">\u60A8\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u60A8\u6D4F\u89C8\u672C\u9875\u9762\uFF0C\u5EFA\u8BAE\u5347\u7EA7\u60A8\u7684\u6D4F\u89C8\u5668\uFF1A</p><a style=\"font-size: 18px; text-decoration: none; height: 60px; width: 180px; margin-top: 20px; color: #fff; text-align: center; display: inline-block; line-height: 60px; background-color: #e22200\" href=\"" + opt.fallback.url + "\" target=\"_balnk\">" + opt.fallback.name + "</a>";
                ieWarning += '<p style="width: 100%; text-align: right"><img style="width: auto" alt="" src="http://image.gamersky.com/webimg15/logo/chang/160x53.png"></p><a style="font-size: 20px; text-decoration: none; height: 60px; width: 60px; right: -60px; position: absolute; font-weight: bolder; color: #fff; text-align: center; display: block; line-height: 60px; top: -3px; background-color: #e22200" onclick="document.getElementById(\'gs-warning-dialog\').style.display=\'none\';document.getElementById(\'gs-warning-bg\').style.display=\'none\';document.getElementById(\'gs-warning-tips\').style.display=\'block\'" href="javascript:void(0)">×</a></div>';
                if (sbie === true && ver <= opt.ver) {
                    $('body').append(ieWarning);
                }
            },
            init: function init(opt) {
                var _this = this,
                    options = {
                    ver: 7,
                    fallback: {
                        name: '火狐&nbsp;Firefox',
                        url: 'http://www.firefox.com.cn/'
                    }
                };
                options = $.extend(options, opt);
                _this.fbFnc(options);
            }
        };

        module.exports = GsForbiddenIE;
    }, {}] }, {}, [2]);