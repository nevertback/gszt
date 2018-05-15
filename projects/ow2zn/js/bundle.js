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
        var comm = {
            getComm: function getComm() {
                $('#commAreaSmt').on('click', function () {
                    var ztDir = 'ow2zn';
                    var Folder = 'zhuanti/' + ztDir + '/',
                        fname = 'comm',
                        cookiefname = cookie(ztDir + fname),
                        userCon = $('#commAreaIpt').val();
                    if (cookiefname !== null && cookiefname === userCon) {
                        alert("您已经提交过了");
                        return false;
                    }
                    if ($.trim(userCon) === '') {
                        alert("请说点什么吧");
                        return false;
                    }
                    var content = "---祝福：" + userCon + "---";
                    $.ajax({
                        type: "GET",
                        dataType: "jsonp",
                        url: "http://www3.gamersky.com:81/cfile.asp",
                        data: {
                            Submit: "Submit",
                            Folder: Folder,
                            Fname: fname,
                            Content: content
                        },
                        success: function success(Jsons) {}
                    });
                    cookie(ztDir + fname, userCon, {
                        path: '/'
                    });
                    $('#commAreaIpt').val('');
                    alert('提交成功');
                });
            },
            showScreen: function showScreen() {
                var $commArea = $('#commAreaSreenMain');
                function createDM(dt) {
                    var fkDt = dt,
                        groupArr = [],
                        groupNum = Math.floor(fkDt.length / 13) + 1;
                    for (var i = 0, len = fkDt.length; i < len; i += groupNum) {
                        groupArr.push(fkDt.slice(i, i + groupNum));
                    }
                    var vDom = "";
                    for (var gi = 0; gi < groupArr.length; gi++) {
                        var vDomLine = '';
                        for (var gj = 0; gj < groupArr[gi].length; gj++) {
                            vDomLine += "<span class=\"commAreaR" + gi + "\" style=\"margin-right:" + (Math.random() * 300 + 100) + "px\">" + groupArr[gi][gj] + "</span>";
                        }
                        vDom += "<div class=\"comm-area-row comm-area-row" + gi + " commAreaRow\" data-nums=\"" + groupArr[gi].length + "\">";
                        vDom += vDomLine;
                        vDom += "</div>";
                    }
                    $commArea.html(vDom);
                    $('.commAreaRow').each(function () {
                        var $ts = $(this),
                            tsw = $ts.width(),
                            tsnum = $ts.attr('data-nums');
                        function startAnim() {
                            $ts.animate({
                                'left': -(tsw + 860)
                            }, Math.random() * 30000 + 3000 * tsnum, 'linear', function () {
                                startAnim();
                                $ts.css('left', '100%');
                            });
                        }
                        startAnim();
                    });
                }
                $.getScript('//j.gamersky.com/zhuanti/ow2zn/fkdt.js', function () {
                    createDM(window.owfkdt);
                });
            },
            init: function init() {
                this.showScreen();
                this.getComm();
            }
        };
        module.exports = comm;
    }, {}], 2: [function (require, module, exports) {
        var GsPopup = require('gslib/components/GsPopup');
        var heroData = window.heroDataOri;
        var heroBulid = {
            createList: function createList() {
                function verifIpt(iptcon, cate) {
                    var bValidate = void 0;
                    if (cate === 'qq') {
                        bValidate = RegExp(/^[1-9][0-9]{4,20}$/).test(iptcon);
                    } else if (cate === 'telephone') {
                        bValidate = RegExp(/^1\d{10}$/).test(iptcon);
                    } else if (cate === 'email') {
                        bValidate = RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(iptcon);
                    }
                    return bValidate;
                }
                var vDom = '',
                    popid = 'GsPopupJsCustom';
                vDom += "<ul class=\"clearfix\">";
                $.each(heroData.list, function (i, item) {
                    vDom += "<li><a class=\"heroPopBtn\" data-herokey=\"" + i + "\" data-type=\"jsCustom\" data-jscid=\"" + popid + "\" data-w=\"873\" data-h=\"376\" data-sid=\"" + i + "\"><img src=\"" + (heroData.path + (i + 1)) + ".png\" alt=\"" + item.name + "\"><i></i></a></li>";
                });
                vDom += "</ul>";
                $('#heroArea').html(vDom);
                GsPopup.init({
                    tar: '.heroPopBtn',
                    fnc: {
                        after: function after() {
                            var $pop = $('#' + popid),
                                popKey = $pop.data('sid'),
                                popDt = heroData.list[popKey],
                                popVdom = '';
                            popVdom += "";
                            popVdom += "<div class=\"hero-pop\">";
                            popVdom += "<img class=\"hero-pop-head\" src=\"" + (heroData.path + (parseInt(popKey) + 1)) + "b.png\" alt=\"" + popDt.name + "\">";
                            popVdom += "<div class=\"hero-pop-top\"><div class=\"hero-pop-info\"><h5>" + popDt.name + "<span class=\"hero-pop-role\"><i class=\"hero-pop-role-" + popDt.id + "\"></i>" + popDt.role + "</span></h5><p>\u4F60\u60F3\u5BF9\u4ED6/\u5979\u8BF4\u4E9B\u4EC0\u4E48\uFF1F\u82F1\u96C4\u5728\u7B49\u5F85\u4F60\u7684\u56DE\u5E94\u3002</p></div>";
                            popVdom += "<div class=\"hero-pop-textarea\"><textarea name=\"heroFormText\" id=\"heroFormText\" placeholder=\"\u5BF9\u4ED6/\u5979\u8BF4\u70B9\u4EC0\u4E48\u5427\uFF0C\u82F1\u96C4\u5728\u7B49\u5F85\u4F60\u7684\u56DE\u5E94\uFF0C\u70B9\u51FB\u8F93\u5165\u3002\n\u5982\uFF1A\u4F60\u4E3A\u4EC0\u4E48\u559C\u6B22\u5979/\u4ED6\uFF0C\u4ED6/\u5979\u5982\u4F55\u8BA9\u4F60\u611F\u52A8\u4E86\uFF1F\u66F4\u6216\u8005\u662F\u4F60\u9001\u4E0A\u5BF9\u4ED6/\u5979\u7684\u795D\u798F\u4E5F\u53EF\u4EE5\u54E6\u3002\"></textarea></div>";
                            popVdom += "</div>";
                            popVdom += "<div class=\"hero-pop-bot\"><div class=\"clearfix hero-pop-row\"><label for=\"heroFormIpt\">\u60A8\u7684\u90AE\u7BB1:</label><div class=\"hero-pop-ipt\"><input type=\"text\" id=\"heroFormIpt\" name=\"heroFormIpt\" placeholder=\"example@example.com\"></div></div></div>";
                            popVdom += "<a class=\"hero-pop-smt\" id=\"heroFormSmt\">\u786E\u8BA4\u63D0\u4EA4</a></div>";
                            $pop.html(popVdom);
                            function showAlert(state) {
                                var popAlertVdom = "";
                                popAlertVdom += "<div class=\"GsPopup gs-popup-alert cur\"><p>" + state + "</p><a class=\"gs-popup-alert-close GsPopupClose\"></a></div>";
                                $('body').append(popAlertVdom);
                                $('.gs-popup').removeClass('cur');
                            }
                            $('#heroFormSmt').on('click', function () {
                                var popAlertState = ['英雄已经收到你的来信，请继续下面的活动哦。', '英雄已经收到过你的来信，请不要重复提交哦。'];
                                var ztDir = 'ow2zn';
                                var Folder = 'zhuanti/' + ztDir + '/',
                                    fname = 'infos',
                                    cookiefname = cookie(ztDir),
                                    userCon = $('#heroFormText').val(),
                                    userNum = $('#heroFormIpt').val();
                                if (cookiefname !== null && cookiefname === userNum) {
                                    alert("您已经提交过了");
                                    return false;
                                }
                                if (verifIpt(userNum, 'email') === false) {
                                    alert("请输入有效的邮箱");
                                    return false;
                                }
                                if ($.trim(userCon) === '') {
                                    alert("请说点什么吧");
                                    return false;
                                }
                                var content = "---邮箱：" + userNum + "---祝福：" + userCon + "---";
                                $.ajax({
                                    type: "GET",
                                    dataType: "jsonp",
                                    url: "http://www3.gamersky.com:81/cfile.asp",
                                    data: {
                                        Submit: "Submit",
                                        Folder: Folder,
                                        Fname: fname,
                                        Content: content
                                    },
                                    success: function success(Jsons) {}
                                });
                                cookie(ztDir, userNum, {
                                    path: '/'
                                });
                                showAlert(popAlertState[0]);
                            });
                        }
                    }
                });
            },
            init: function init() {
                this.createList();
            }
        };
        module.exports = heroBulid;
    }, { "gslib/components/GsPopup": 4 }], 3: [function (require, module, exports) {
        /*
         * Gamersky 基本专题模板 js
         * v 1.0.0
         * create by MrrrTian
         */
        /*
         * 使用公共组件
         */
        /*
         * 使用当前专题组件
         */
        var heroBulid = require('./component/herobuild.js');
        var comm = require('./component/comm.js');
        heroBulid.init();
        comm.init();
    }, { "./component/comm.js": 1, "./component/herobuild.js": 2 }], 4: [function (require, module, exports) {
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
                    case 'jsCustom':
                        vDom = "<div class=\"gs-popup-type-jscustom\" id=\"" + diyOpt.jscid + "\" data-sid=\"" + diyOpt.sid + "\"></div>";
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
                vDom += "<div class=\"GsPopup gs-popup\" style=\"" + sty.dad + "\">" + _this.addContext(opt, diyOpt) + "<a class=\"gs-popup-close gs-popup-close-" + diyOpt.type + " GsPopupClose\"></a></div>";
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
                $('body').on('click', '.GsPopupClose', function () {
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
                    diyOpt.jscid = $ts.data('jscid');
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
    }, {}] }, {}, [3]);