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
        var fixcode = {
            fnc: function fnc() {
                var fxCode = $('.fxCode'),
                    minWidth = fxCode.data('mw'),
                    fxCodeOft = fxCode.data('oft'),
                    ft = fxCode.offset().top;
                function scrollFunc() {
                    var $win = $(window),
                        st = $win.scrollTop();
                    if ($win.width() < minWidth) {
                        fxCode.hide();
                    } else {
                        fxCode.show();
                    }
                    if (st >= ft - ($win.height() / 2 - fxCodeOft)) {
                        fxCode.addClass('cur').css({ 'marginTop': -fxCodeOft + 'px' });
                    } else {
                        fxCode.removeClass('cur').css({ 'marginTop': '' });
                    }
                }
                $(window).resize(scrollFunc).scroll(scrollFunc);
            },
            init: function init() {
                this.fnc();
            }
        };

        module.exports = fixcode;
    }, {}], 2: [function (require, module, exports) {
        var s2 = {
            createQues: function createQues() {
                var $queBoxs = $('#quesBoxs'),
                    quesDt = quesData,
                    vDom = '';
                $.each(quesDt, function (i, item) {
                    vDom += "<div class=\"ques-box quesBox\"><h5>" + item.tit + "</h5><div class=\"ques-list\">";
                    $.each(item.lists, function (j, jtem) {
                        vDom += "<a class=\"ques-sel quesSel\" data-q=\"" + i + "\" data-l=\"" + j + "\" data-type=\"" + item.sel + "\"><i class=\"ques-sel-" + item.sel + "\"></i>" + jtem + "</a>";
                    });
                    vDom += '</div></div>';
                });
                $queBoxs.html(vDom);
            },
            fnc: function fnc() {
                function checkQues() {
                    var quesResult = {
                        checkResult: true,
                        ans: []
                    };
                    $('.GsPopup').find('.quesBox').each(function (i) {
                        var tmpArr = {
                            qid: i,
                            ls: []
                        };
                        $(this).find('.cur').each(function (j) {
                            var $ts = $(this),
                                $q = $ts.data('q'),
                                $l = $ts.data('l');
                            tmpArr.ls.push($l);
                        });
                        quesResult.ans.push(tmpArr);

                        if ($(this).find('.cur').length < 1) {
                            quesResult.checkResult = false;
                        }
                    });
                    return quesResult;
                }
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
                $(document).on('click', '.quesSmt', function () {
                    var userAns = checkQues();
                    if (userAns.checkResult === false) {
                        alert('每题至少选择一项');
                        return false;
                    }
                    var $ipt = $('.GsPopup').find('.quesIpt'),
                        ztDir = 'lbzzcs';
                    var Folder = 'zhuanti/' + ztDir + '/',
                        fname = 'infos',
                        cookiefname = cookie(ztDir),
                        userCon = JSON.stringify(userAns.ans),
                        userNum = $ipt.val();
                    if (cookiefname !== null && cookiefname === userNum) {
                        alert("您已经提交过了");
                        return false;
                    }
                    if (verifIpt(userNum, 'email') === false) {
                        alert("请输入有效的邮箱");
                        return false;
                    }
                    var content = "---邮箱：" + userNum + "---问卷：" + userCon + "---";
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
                    alert("提交完成！");
                    $('.GsPopupClose').trigger('click');
                });
                $(document).on('click', '.quesSel', function () {
                    var $ts = $(this),
                        $type = $ts.data('type');
                    if ($type === 'sig') {
                        $ts.closest('.quesBox').find('.quesSel').removeClass('cur');
                        $ts.addClass('cur');
                    } else if ($type === 'mut') {
                        if ($ts.hasClass('cur') === true) {
                            $ts.removeClass('cur');
                        } else {
                            $ts.addClass('cur');
                        }
                        if ($ts.closest('.quesBox').find('.cur').length > 3) {
                            if ($ts.closest('.quesBox').find('.cur').eq(0).data('l') === $ts.data('l')) {
                                $ts.closest('.quesBox').find('.cur').eq(-1).removeClass('cur');
                            } else {
                                $ts.closest('.quesBox').find('.cur').eq(0).removeClass('cur');
                            }
                        }
                    }
                });
            },
            init: function init() {
                this.createQues();
                this.fnc();
            }
        };

        module.exports = s2;
    }, {}], 3: [function (require, module, exports) {
        var s4 = {
            tx: function tx() {
                function ZoomPic() {
                    this.initialize.apply(this, arguments);
                }
                ZoomPic.prototype = {
                    initialize: function initialize(id, li, prev, next, p, btnId, btna, btnclass, isAuto) {
                        this.options = [{ width: 446, height: 250, top: 35, left: 0, zIndex: 1, opacity: 0.35 }, { width: 543, height: 305, top: 0, left: 200, zIndex: 3, opacity: 1 }, { width: 446, height: 250, top: 35, left: 538, zIndex: 1, opacity: 0.35 }];
                        this.arr = [];
                        this.t = 0;
                        this.p = p;
                        this.btnId = btnId;
                        this.btnclass = btnclass;
                        this.btna = btna;
                        this.wrap = $('#' + id).find(li);
                        this.video = $('#' + id).find('video');
                        this.img = $('#' + id).find('img');
                        for (var i = 0; i < this.wrap.length; i++) {
                            this.arr.splice(i, 0, i);
                        }
                        this.arr.unshift(this.arr.pop());
                        this.addClassFun();
                        this.clickImg();
                        this.btnsClick();
                        var that = this;
                        $('.' + prev).on('click', function () {
                            that.doPrev();
                        });
                        $('.' + next).on('click', function () {
                            that.doNext();
                        });
                        if (isAuto) {
                            this.auto = setInterval(function () {
                                that.doNext();
                            }, 5000);
                            this.wrap.on('mouseover', function () {
                                clearInterval(that.auto);
                            });
                            this.wrap.on('mouseout', function () {
                                that.auto = setInterval(function () {
                                    that.doNext();
                                }, 5000);
                            });
                        }
                    },
                    doPrev: function doPrev() {
                        this.arr.unshift(this.arr.pop());
                        this.addClassFun();
                    },
                    doNext: function doNext() {
                        this.arr.push(this.arr.shift());
                        this.addClassFun();
                    },
                    addClassFun: function addClassFun() {
                        var that = this;
                        for (var i = 0; i < this.arr.length; i++) {
                            if (i == 1) {
                                this.t = this.arr[i] + 1;
                                if (this.t >= this.arr.length) {
                                    this.t = 0;
                                }
                                this.wrap.eq(this.arr[i]).find(this.p).css('display', 'block');
                                $('#' + this.btnId).find(this.btna).eq(this.t).addClass(this.btnclass).siblings().removeClass(this.btnclass);
                            } else {
                                this.wrap.eq(this.arr[i]).find(this.p).css('display', 'none');
                            }

                            this.wrap.eq(this.arr[i]).animate({
                                'width': that.options[i]['width'],
                                'height': that.options[i]['height'],
                                'top': that.options[i]['top'],
                                'left': that.options[i]['left'],
                                'z-index': that.options[i]['zIndex']
                            }, 200);
                            this.wrap.eq(this.arr[i]).find('img').animate({
                                'z-index': that.options[i]['zIndex'],
                                'opacity': that.options[i]['opacity']
                            }, 200);
                            this.wrap.eq(this.arr[i]).find('video').animate({
                                'z-index': that.options[i]['zIndex'],
                                'opacity': that.options[i]['opacity']
                            }, 200);
                        }
                    },
                    clickImg: function clickImg() {
                        var that = this;
                        this.wrap.each(function (i) {
                            $(this).on('click', function () {
                                if (parseInt($(this).css('left')) == that.options[0]['left']) {
                                    that.doPrev();
                                }
                                if (parseInt($(this).css('left')) == that.options[2]['left']) {
                                    that.doNext();
                                }
                            });
                        });
                    },
                    btnsClick: function btnsClick() {
                        var that = this;
                        $('#' + this.btnId).find(this.btna).each(function (n) {
                            $(this).click(function () {
                                $(that).addClass(that.btnclass).siblings().removeClass(that.btnclass);
                                for (var i = 1; i < that.arr.length; i++) {
                                    if (that.arr[i] != n) {
                                        that.arr.unshift(that.arr.pop());
                                    } else {
                                        continue;
                                    }
                                }
                                that.addClassFun();
                            });
                        });
                    }
                };
                window.onload = function () {
                    new ZoomPic("box", "li", "prev", "next", "p", "btns_spOther", "a", "active", true);
                };
            },
            init: function init() {
                this.tx();
            }
        };

        module.exports = s4;
    }, {}], 4: [function (require, module, exports) {
        var s5 = {
            sld: function sld(sldId) {
                var $sldId = $(sldId),
                    $sldCon = $sldId.find('.ztSldCon'),
                    $sldPrev = $sldId.find('.ztSldArrPrev'),
                    $sldNext = $sldId.find('.ztSldArrNext');
                $sldId.find('.ztSld').slide({
                    mainCell: $sldCon,
                    effect: 'fade', //leftLoop
                    delayTime: 250,
                    switchLoad: 'data-src',
                    prevCell: $sldPrev,
                    nextCell: $sldNext
                });
            },
            init: function init() {
                this.sld('#ztSld5');
            }
        };

        module.exports = s5;
    }, {}], 5: [function (require, module, exports) {
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
            tar: '.popupBtnTxt'
        });
        /*
         * 使用当前专题组件
         */
        var s2 = require('./component/s2.js'),
            s4 = require('./component/s4.js'),
            s5 = require('./component/s4.js'),
            fixcode = require('./component/fixcode.js');
        s2.init();
        s5.init();
        s4.init();
        fixcode.init();
    }, { "./component/fixcode.js": 1, "./component/s2.js": 2, "./component/s4.js": 3, "./component/s5.js": 4, "gslib/components/GsPopup": 6 }], 6: [function (require, module, exports) {
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
    }, {}] }, {}, [5]);