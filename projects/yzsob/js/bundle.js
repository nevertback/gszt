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
        var sec3 = {
            createDom: function createDom() {
                var secData = GsZtSection3tab,
                    $sec = $('#GsTab3'),
                    vDom = '',
                    vDomNav = '',
                    vDomItem = '';
                vDomNav += "<div class=\"gs-tab-navs GsTabNavs\">";
                vDomItem += "<div class=\"gs-tab-items GsTabItems\">";
                $.each(secData.tab, function (i, item) {
                    vDomNav += "<a class=\"gs-tab-nav GsTabNav\"><i class=\"nav nav" + item.id + "\"></i><i class=\"bd bd" + item.id + "\"></i></a>";
                    vDomItem += "<div class=\"gs-tab-item GsTabItem\">\n                <img class=\"pic\" src=\"//image.gamersky.com/webimg13/zhuanti/common/blank.png\" data-src=\"" + item.bg + "\" alt=\"pic\">\n                <div class=\"info\">\n                    <a class=\"play popupBtn2\" data-type=\"videoH5\" data-sid=\"" + item.vid + "\" data-w=\"800\" data-h=\"452\"><img src=\"//image.gamersky.com/webimg13/zhuanti/common/blank.png\" data-src=\"" + item.vd + "\" alt=\"vd\"></a>\n                    <div class=\"info-cv\">" + item.cv + "</div>\n                    <div class=\"info-des\">" + item.des + "</div>\n                </div>\n            </div>";
                });
                vDomNav += "</div>";
                vDomItem += "</div>";
                vDom += vDomItem;
                vDom += vDomNav;
                $sec.html(vDom);
            },
            init: function init(callback) {
                this.createDom();
                callback();
            }
        };

        module.exports = sec3;
    }, {}], 2: [function (require, module, exports) {
        var sec7 = {
            formNie: function formNie() {
                if ($(".gallery_container").length > 0) {
                    Gallery.create({
                        galleryContainer: ".gallery_container",
                        slidesPerView: 3,
                        gallery_prev: ".gallery_prev",
                        gallery_next: ".gallery_next",
                        stretch: -440,
                        autoPlay: !1,
                        rotate: 40,
                        depth: 280
                    });
                }
            },
            init: function init() {
                this.formNie();
            }
        };

        module.exports = sec7;
    }, {}], 3: [function (require, module, exports) {
        /*
         * Gamersky 基本专题模板 js
         * v 1.0.0
         * create by MrrrTian
         */
        /*
         * 使用公共组件
         */
        //弹窗
        var GsPopup = require('gslib/components/GsPopup');
        //tab切换
        var GsTab = require('gslib/components/GsTab');
        var GsFixNav = require('gslib/components/GsFixNav');
        var GsForbiddenIE = require('gslib/components/GsForbiddenIE');
        GsPopup.init({
            tar: '.popupBtn'
        });
        GsForbiddenIE.init({
            ver: 9,
            fallback: {
                name: '谷歌&nbsp;Chrome',
                url: 'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
            }
        });
        /*
         * 使用当前专题组件
         */
        var sec3 = require('./component/sec3');
        var sec7 = require('./component/sec7');
        sec3.init(function () {
            GsTab.init({
                tar: '#GsTab3',
                lazyimg: true
            });
            GsPopup.init({
                tar: '.popupBtn2'
            });
        });
        GsTab.init({
            tar: '#GsTab4',
            lazyimg: true
        });
        sec7.init();
        var GsFixOffsetTop = -50;
        GsFixNav.init({
            selectOffset: -300,
            show: {
                top: 200,
                width: 1400
            },
            list: [{
                tar: '#section1',
                nav: '<a><i></i><span>TOP</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s2pos',
                nav: '<a><i></i><span>世界观</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s3pos',
                nav: '<a><i></i><span>主角介绍</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s4pos',
                nav: '<a><i></i><span>专属皮肤</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s5pos',
                nav: '<a><i></i><span>竞技玩法</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s6pos',
                nav: '<a><i></i><span>卡牌介绍</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s7pos',
                nav: '<a><i></i><span>游戏特色</span></a>',
                offset: GsFixOffsetTop
            }, {
                tar: '#s8pos',
                nav: '<a><i></i><span>玩家讨论</span></a>',
                offset: GsFixOffsetTop
            }]
        });
    }, { "./component/sec3": 1, "./component/sec7": 2, "gslib/components/GsFixNav": 4, "gslib/components/GsForbiddenIE": 5, "gslib/components/GsPopup": 6, "gslib/components/GsTab": 7 }], 4: [function (require, module, exports) {
        var GsFixNav = {
            createNav: function createNav(opt) {
                var vDom = '';
                vDom += "<div class=\"gs-fix-nav GsFixNav\"><div class=\"gs-fix-nav-list\">";
                $.each(opt.list, function (i, item) {
                    vDom += "<div class=\"gs-fix-nav-btn GsFixNavBtn\" data-idx=\"" + i + "\">" + item.nav + "</div>";
                });
                vDom += "</div></div>";
                return vDom;
            },
            resizeEvent: function resizeEvent(opt) {
                var $FixNav = $('.GsFixNav'),
                    $winWidth = $(window).width();
                if ($winWidth < opt.show.width) {
                    $FixNav.addClass('hideImp');
                } else {
                    $FixNav.removeClass('hideImp');
                }
            },
            scrollEvent: function scrollEvent(opt) {
                var $FixNav = $('.GsFixNav'),
                    scrollTopNow = $('html').scrollTop();
                scrollTopNow = scrollTopNow === 0 ? $('body').scrollTop() : scrollTopNow;
                if (scrollTopNow >= opt.show.top) {
                    $FixNav.addClass('cur');
                } else {
                    $FixNav.removeClass('cur');
                }
                var offsetTopArr = [];
                $.each(opt.list, function (i, item) {
                    if (scrollTopNow >= $(item.tar).offset().top + opt.selectOffset) {
                        $('.GsFixNavBtn').removeClass('cur').eq(i).addClass('cur');
                    }
                });
            },
            bindEvent: function bindEvent(opt) {
                $('.GsFixNavBtn').on('click', function () {
                    var $ts = $(this),
                        tarDt = opt.list[$ts.attr('data-idx')],
                        $tar = $(tarDt.tar),
                        tarTopDtc = void 0;
                    if (typeof tarDt.offset !== "undefined") {
                        tarTopDtc = $tar.offset().top + tarDt.offset;
                    } else {
                        tarTopDtc = $tar.offset().top;
                    }
                    $('html,body').animate({ scrollTop: tarTopDtc }, opt.speed);
                });
            },
            insertNav: function insertNav(opt) {
                var _this = this;
                $('body').append(_this.createNav(opt));
                _this.bindEvent(opt);
                _this.scrollEvent(opt);
                _this.resizeEvent(opt);
                $(window).scroll(function () {
                    _this.scrollEvent(opt);
                }).resize(function () {
                    _this.resizeEvent(opt);
                });
            },
            init: function init(opt) {
                var options = {
                    selectOffset: -100,
                    speed: 200,
                    show: {
                        top: 0,
                        width: 1280
                    }
                };
                options = $.extend(options, opt);
                this.insertNav(options);
            }
        };

        module.exports = GsFixNav;
    }, {}], 5: [function (require, module, exports) {
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
    }, {}], 6: [function (require, module, exports) {
        /*
         * Gamersky 弹窗插件
         * create by MrrrTian
         * v 1.0.0
         */
        var GsPopup = {
            config: {
                hideScroll: true
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
            close: function close(opt, diyOpt) {
                var _this = this,
                    $GsPopup = $('.GsPopup');
                _this.closeVideo(opt, diyOpt);
                $GsPopup.removeClass('cur');
                setTimeout(function () {
                    $GsPopup.remove();
                    _this.scrollEnable();
                }, opt.timer.close);
            },
            playVideo: function playVideo(opt, diyOpt) {
                if (diyOpt.type === 'videoTx2') {
                    $.getScript("//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js", function () {
                        var player = new Txplayer({
                            containerId: 'GsPopupVideoArea',
                            vid: diyOpt.sid,
                            width: '100%',
                            height: '100%',
                            autoplay: true,
                            showBullet: false,
                            showLogo: false,
                            showRecommendOnEnd: false
                        });
                    });
                } else if (diyOpt.type === 'videoYk2') {
                    $.getScript("//player.youku.com/jsapi", function () {
                        var player = new YKU.Player('GsPopupVideoArea', {
                            styleid: '0',
                            client_id: '6bfe5b183f11e7d9',
                            vid: diyOpt.sid,
                            newPlayer: true,
                            show_related: false,
                            autoplay: true
                        });
                    });
                } else if (diyOpt.type === 'videoH5') {
                    var h5Video = document.getElementById('GsPopupVideoAreaH5');
                    h5Video.play();
                }
            },
            closeVideo: function closeVideo(opt, diyOpt) {
                if (diyOpt.type === 'videoH5') {
                    var h5VideoDad = document.getElementById('GsPopupVideoArea'),
                        h5Video = document.getElementById('GsPopupVideoAreaH5');
                    h5Video.pause();
                    h5VideoDad.removeChild(h5Video);
                }
            },
            addContext: function addContext(opt, diyOpt) {
                var vDom = '';
                switch (diyOpt.type) {
                    case 'image':
                        vDom = "<div class=\"gs-popup-type-image\"><img src=\"" + diyOpt.sid + "\" alt=\"GsPopupImage\"></div>";
                        break;
                    case 'videoTx1':
                        vDom = "<embed wmode=\"direct\" flashvars=\"vid=" + diyOpt.sid + "&amp;tpid=0&amp;showend=1&amp;showcfg=1&amp;searchbar=1&amp;skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&amp;shownext=1&amp;list=2&amp;autoplay=1\" src=\"http://imgcache.qq.com/tencentvideo_v1/player/TPout.swf?max_age=86400&amp;v=20140714\" quality=\"high\" name=\"tenvideo_flash_player_1492679771297\" id=\"tenvideo_flash_player_1492679771297\" bgcolor=\"#000000\" width=\"100%\" height=\"100%\" align=\"middle\" allowscriptaccess=\"always\" allowfullscreen=\"true\" type=\"application/x-shockwave-flash\" pluginspage=\"http://get.adobe.com/cn/flashplayer/\">";
                        break;
                    case 'videoTx2':
                        vDom = "<div class=\"gs-popup-type-video\" id=\"GsPopupVideoArea\"></div>";
                        break;
                    case 'videoYk1':
                        vDom = "<embed height=\"100%\" flashvars=\"isAutoPlay=true\" allowscriptaccess=\"sameDomain\" width=\"100%\" align=\"middle\" quality=\"high\" invokeurls=\"false\" src=\"http://player.youku.com/player.php/sid/" + diyOpt.sid + "/v.swf\" type=\"application/x-shockwave-flash\" wmode=\"transparent\">";
                        break;
                    case 'videoYk2':
                        vDom = "<div class=\"gs-popup-type-video\" id=\"GsPopupVideoArea\"></div>";
                        break;
                    case 'videoH5':
                        vDom = "<div class=\"gs-popup-type-video\" id=\"GsPopupVideoArea\"><video id=\"GsPopupVideoAreaH5\" src=\"" + diyOpt.sid + "\" width=\"100%\" height=\"100%\" controls></video></div>";
                        break;
                    case 'custom':
                        vDom = "<div class=\"gs-popup-type-custom\">" + $(diyOpt.sid).html() + "</div>";
                        break;

                }
                return vDom;
            },
            createDom: function createDom(opt, diyOpt) {
                var _this = this,
                    vDom = '',
                    sty = {
                    dad: "margin:" + -diyOpt.size.h / 2 + "px 0 0 " + -diyOpt.size.w / 2 + "px;width:" + diyOpt.size.w + "px;height:" + diyOpt.size.h + "px;"
                },
                    wh = $(window).height();
                if (diyOpt.size.h > wh) {
                    sty.dad += "position:absolute;margin-top:0;top:" + diyOpt.bindBtn.offset().top + "px";
                    _this.config.hideScroll = false;
                } else {
                    _this.config.hideScroll = true;
                }
                vDom += "<div class=\"GsPopup GsPopupClose gs-popup-mask\"></div>";
                vDom += "<div class=\"GsPopup gs-popup\" style=\"" + sty.dad + "\">" + _this.addContext(opt, diyOpt) + "<a class=\"gs-popup-close GsPopupClose\"></a></div>";
                return vDom;
            },
            show: function show(opt, diyOpt) {
                var _this = this;
                $('body').append(_this.createDom(opt, diyOpt));
                _this.playVideo(opt, diyOpt);
                setTimeout(function () {
                    $('.GsPopup').addClass('cur');
                    if (_this.config.hideScroll === true) {
                        _this.scrollDisable();
                    }
                }, 30);
                $('.GsPopupClose').on('click', function () {
                    _this.close(opt, diyOpt);
                });
            },
            bindEvent: function bindEvent(opt) {
                var _this = this,
                    diyOpt = {};
                $(opt.tar).on('click', function () {
                    var $ts = $(this);
                    diyOpt.sid = $ts.data('sid');
                    diyOpt.type = $ts.data('type');
                    diyOpt.bindBtn = $ts;
                    diyOpt.size = {
                        w: $ts.data('w'),
                        h: $ts.data('h')
                    };
                    if (typeof opt.fnc.before === "function") {
                        opt.fnc.before();
                    }
                    _this.show(opt, diyOpt);
                    if (typeof opt.fnc.after === "function") {
                        opt.fnc.after();
                    }
                });
            },
            init: function init(opt) {
                var options = {
                    timer: {
                        close: 250
                    },
                    fnc: {
                        after: function after() {},
                        before: function before() {}
                    }
                };

                options = $.extend(options, opt);
                this.bindEvent(options);
            }
        };

        module.exports = GsPopup;
    }, {}], 7: [function (require, module, exports) {
        var GsTab = {
            tabOpen: function tabOpen(tar, opt) {
                var $tab = tar,
                    $navs = $tab.find('.GsTabNavs'),
                    $nav = $navs.find('.GsTabNav'),
                    $items = $tab.find('.GsTabItems'),
                    $item = $tab.find('.GsTabItem'),
                    tabTimer = void 0;
                function loadLazyImg(imgs) {
                    imgs.each(function () {
                        var $ts = $(this),
                            isload = $ts.attr('data-isload'),
                            realSrc = $ts.attr('data-src');
                        if (isload !== 'ok') {
                            $ts.attr({
                                'data-isload': 'ok',
                                'src': realSrc
                            });
                        }
                    });
                }
                function eventDoBefore() {
                    if (typeof opt.fnc.before === "function") {
                        opt.fnc.before();
                    }
                }
                function eventDo(idx) {
                    $nav.add($item).removeClass('cur');
                    $nav.eq(idx).add($item.eq(idx)).addClass('cur');
                    if (opt.lazyimg === true) {
                        loadLazyImg($item.eq(idx).find('img'));
                    }
                    if (typeof opt.fnc.after === "function") {
                        opt.fnc.after();
                    }
                }
                function bindEventMouseover() {
                    $nav.on({
                        mouseover: function mouseover() {
                            var $ts = $(this),
                                idx = $ts.attr('data-GsTabKey');
                            eventDoBefore();
                            tabTimer = setTimeout(function () {
                                eventDo(idx);
                            }, opt.timer.delay);
                        },
                        mouseout: function mouseout() {
                            clearTimeout(tabTimer);
                        }
                    });
                }
                function bindEventClick() {
                    $nav.on({
                        click: function click() {
                            var $ts = $(this),
                                idx = $ts.attr('data-GsTabKey');
                            eventDoBefore();
                            eventDo(idx);
                        }
                    });
                }
                function setTabState() {
                    if (opt.lazyimg === true) {
                        loadLazyImg($item.eq(0).find('img'));
                    }
                    $nav.eq(0).add($item.eq(0)).addClass('cur');
                    $nav.each(function (i) {
                        $(this).attr('data-GsTabKey', i);
                    });
                    if (opt.changeEvent === 'mouseover') {
                        bindEventMouseover();
                    } else {
                        bindEventClick();
                    }
                }
                setTabState();
            },
            init: function init(opt) {
                var _this = this,
                    options = {
                    tar: '.GsTab',
                    timer: {
                        delay: 120
                    },
                    lazyimg: false,
                    changeEvent: 'mouseover', //mouseover | click
                    fnc: {
                        after: function after() {},
                        before: function before() {}
                    }
                };

                options = $.extend(options, opt);

                $(options.tar).each(function () {
                    _this.tabOpen($(this), options);
                });
            }
        };

        module.exports = GsTab;
    }, {}] }, {}, [3]);