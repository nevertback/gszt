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
        var hero = {
            create: function create(dt) {
                var vDom = '';
                vDom += "<ul class=\"clearfix\">";
                $.each(dt.list, function (i, item) {
                    vDom += "<li><a class=\"popupPicBtn\" data-type=\"image\" data-sid=\"" + (dt.path + item[2]) + "\" data-w=\"933\" data-h=\"604\"><img class=\"hero-head\" src=\"" + (dt.path + item[0]) + "\" alt=\"" + i + "\"><img class=\"hero-head-hover\" src=\"" + (dt.path + item[1]) + "\" alt=\"" + i + "\"></a></li>";
                });
                vDom += "</ul>";
                $('#heroArea').html(vDom);
            },
            init: function init(GsPopup) {
                var heroDt = window.heroDataOri;
                this.create(heroDt);
                GsPopup.init({
                    tar: '.popupPicBtn',
                    fnc: {
                        after: function after() {
                            console.log('opened this');
                        }
                    }
                });
            }
        };

        module.exports = hero;
    }, {}], 2: [function (require, module, exports) {
        function s5fnc() {
            //图片轮播
            var carousel = function carousel(obj) {
                this.container = $(obj.container);
                this.count = obj.count;
                this.classname = obj.classname;
                this.tab = $(obj.tab);
                this.tabIndex = 0;
                this.timer = null;
            };

            carousel.prototype = {
                autoplay: function autoplay() {
                    var _this = this;
                    this.timer = setInterval(function () {
                        _this.turnRight();
                    }, 2000);
                },
                endplay: function endplay() {
                    clearInterval(this.timer);
                },
                init: function init() {
                    var _this = this;
                    $('.' + _this.classname).on('click', function (event) {
                        _this.endplay();
                        event.preventDefault();
                        var direction = $(this).attr('data-direction');
                        if (direction === 'left') {
                            _this.turnLeft();
                        } else {
                            _this.turnRight();
                        }
                    });
                    _this.autoplay();
                },
                turnLeft: function turnLeft() {
                    var _this = this;
                    this.tabIndex--;
                    this.tabIndex = this.tabIndex < 0 ? 4 : this.tabIndex;
                    this.defaultFun('left');
                },
                turnRight: function turnRight() {
                    var _this = this;
                    this.tabIndex++;
                    this.tabIndex = this.tabIndex > 4 ? 0 : this.tabIndex;
                    this.defaultFun('right');
                },
                defaultFun: function defaultFun(direction) {
                    var _this = this;
                    this.tab.find('li').removeClass('cur').eq(this.tabIndex).addClass('cur');
                    $(this.container).find('li').each(function () {
                        var old_order = $(this).attr('data-order');
                        if (direction === 'left') {
                            old_order--;
                        }
                        if (direction === 'right') {
                            old_order++;
                        }
                        if (old_order === 6) {
                            old_order = 1;
                        }
                        if (old_order === 0) {
                            old_order = 5;
                        }
                        $(this).removeClass('po-1 po-2 po-3 po-4 po-5');
                        $(this).addClass('po-' + old_order);
                        $(this).attr({ 'data-order': old_order });
                    });
                }
            };

            var ex = new carousel({
                container: '.slide-list', //绑定ID
                count: 5, //轮播图总数量
                classname: 'btn-arrow', //左右切换点的公共类
                tab: '.dot-list'
            });
            ex.init();
            $('.slide-box').mouseenter(function (event) {
                ex.endplay();
            });
            $('.slide-box').mouseleave(function (event) {
                ex.autoplay();
            });
        }

        module.exports = s5fnc;
    }, {}], 3: [function (require, module, exports) {
        var $voteArea = $('#voteArea'),
            voteId = $voteArea.data('id');
        var vote = {
            showAlert: function showAlert(txt) {
                $('.votePopMask,.votePopAlert').addClass('cur');
                $('#votePopAlertText').html(txt);
            },
            collect: function collect() {
                $('.votePopMask,.votePopEmail').addClass('cur');
            },
            writeRemoteFile: function writeRemoteFile() {
                var _this = this;
                function verifIpt(iptcon, cate) {
                    var bValidate = void 0;
                    if (cate === 'qq') {
                        bValidate = RegExp(/^[1-9][0-9]{4,20}$/).test(iptcon);
                    } else if (cate === 'telephone') {
                        bValidate = RegExp(/^1\d{10}$/).test(iptcon);
                    } else if (cate === 'email') {
                        bValidate = RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@qq\.[a-zA-Z]{2,3}$/gi).test(iptcon);
                    }
                    return bValidate;
                }
                var ztDir = 'qhmyab';
                var Folder = 'zhuanti/' + ztDir + '/',
                    fname = 'infos',
                    cookiefname = cookie(ztDir),
                    userCon = $voteArea.attr('data-selected'),
                    userNum = $('#votePopIpt').val();
                if (cookiefname !== null && cookiefname === userNum) {
                    alert("您已经提交过了");
                    return false;
                }
                if (verifIpt(userNum, 'email') === false) {
                    alert("请输入有效的QQ邮箱");
                    return false;
                }
                if ($.trim(userCon) === '') {
                    alert("请说点什么吧");
                    return false;
                }
                var content = "---邮箱：" + userNum + "---YES/NO：" + userCon + "---";
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
                $('#votePopIpt').val('');
                $('.votePop').removeClass('cur');
                _this.showAlert('提交完成');
            },
            writeCount: function writeCount(BackData) {
                $.each(BackData.items, function (i, item) {
                    var vsid = item.Id,
                        vsnum = item.TotalNumber,
                        itTar = $('.voteNum[data-vid=' + vsid + ']');
                    itTar.html(vsnum);
                });
                var calcSum = BackData.total,
                    calcAgree = BackData.items[0].TotalNumber,
                    calcBarWidth = calcAgree / calcSum * 100 + '%';
                $voteArea.find('.voteBar').css('width', calcBarWidth);
            },
            getCount: function getCount() {
                var _this = this;
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    url: "http://db2.gamersky.com/Vote/ShowVote.aspx",
                    data: {
                        json: "1",
                        id: voteId
                    },
                    success: function success(responseJson) {
                        switch (responseJson.status) {
                            case "ok":
                                _this.writeCount(responseJson);
                                break;
                            case "err":
                                alert(responseJson.message);
                                break;
                        }
                    }
                });
            },
            bindEvent: function bindEvent() {
                var _this = this;
                function SubmitData(vid, selected) {
                    $.ajax({
                        type: "GET",
                        dataType: "jsonp",
                        url: "http://db5.gamersky.com/Vote/ShowVote.aspx",
                        data: {
                            json: "2",
                            id: voteId,
                            vote: vid
                        },
                        success: function success(responseJson) {
                            switch (responseJson.status) {
                                case "ok":
                                    $voteArea.attr('data-selected', selected);
                                    _this.writeCount(responseJson);
                                    _this.collect();
                                    break;
                                case "err":
                                    alert(responseJson.message);
                                    break;
                            }
                        },
                        error: function error(XMLHttpRequest, textStatus, errorThrown) {
                            alert("投票已经关闭！");
                        }
                    });
                }
                $voteArea.find('.voteBtn').on('click', function () {
                    var $ts = $(this),
                        vid = $ts.data('vid'),
                        selected = $ts.data('type');
                    SubmitData(vid, selected);
                });
                $('.votePopClose').on('click', function () {
                    $('.votePop').removeClass('cur');
                });
                $('#votePopSmt').on('click', function () {
                    _this.writeRemoteFile();
                });
                $('#s2videoPlay').on('click', function () {
                    var $ts = $(this),
                        state = $ts.data('state'),
                        vid = $ts.data('vid');
                    if (state === 'open') {
                        $.getScript("//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js", function () {
                            var player = new Txplayer({
                                containerId: 's2video',
                                vid: vid,
                                width: '100%',
                                height: '100%',
                                autoplay: true,
                                showBullet: false,
                                showLogo: false,
                                showRecommendOnEnd: false
                            });
                        });
                    } else {
                        _this.showAlert(vid);
                    }
                });
            },
            init: function init() {
                this.bindEvent();
                this.getCount();
            }
        };

        module.exports = vote;
    }, {}], 4: [function (require, module, exports) {
        /*
         * Gamersky 基本专题模板 js
         * v 1.0.0
         * create by MrrrTian
         */
        /*
         * 使用公共组件
         */
        var GsPopup = require('gslib/components/GsPopup');
        var GsFixCell = require('gslib/components/GsFixCell');
        GsPopup.init({
            tar: '.popupBtn'
        });
        GsFixCell.init({
            minWidth: 1640
        });
        /*
         * 使用当前专题组件
         */
        var vote = require('./component/vote.js');
        var hero = require('./component/hero.js');
        var s5 = require('./component/s5.js');
        vote.init(GsPopup);
        hero.init(GsPopup);
        s5();
    }, { "./component/hero.js": 1, "./component/s5.js": 2, "./component/vote.js": 3, "gslib/components/GsFixCell": 5, "gslib/components/GsPopup": 6 }], 5: [function (require, module, exports) {
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
    }, {}] }, {}, [4]);