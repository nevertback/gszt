/*
 * Gamersky 弹窗插件
 * create by MrrrTian
 * v 1.0.0
 */
let GsPopup = {
    config:{
        hideScroll:true
    },
    scrollEnable(){
        let $body = $('body');
        if($body.hasClass('GsPopupScrollHide') === true){
            $body.removeClass('GsPopupScrollHide').css({
                overflow:'auto',
                paddingRight:''
            });
        }
    },
    scrollDisable(){
        let $body = $('body'),scrollWidth;
        function getScrollbarWidth() {
            let oP = document.createElement('p'),
                styles = {
                    width: '100px',
                    height: '100px'
                }, i, clientWidth1, clientWidth2, scrollbarWidth;
            for (i in styles) oP.style[i] = styles[i];
            document.body.appendChild(oP);
            clientWidth1 = oP.clientWidth;
            oP.style.overflowY = 'scroll';
            clientWidth2 = oP.clientWidth;
            scrollbarWidth = clientWidth1 - clientWidth2;
            if(typeof oP.remove === "undefined"){
                oP.removeNode();
            }else{
                oP.remove();
            }
            return scrollbarWidth;
        }
        scrollWidth = getScrollbarWidth();
        $body.addClass('GsPopupScrollHide');
        $body.css({
            overflow:'hidden',
            paddingRight:scrollWidth+'px'
        });
    },
    close(opt,diyOpt){
        let _this = this,$GsPopup = $('.GsPopup');
        _this.closeVideo(opt,diyOpt);
        $GsPopup.removeClass('cur');
        setTimeout(function () {
            $GsPopup.remove();
            _this.scrollEnable();
        },opt.timer.close);
    },
    playVideo(opt,diyOpt){
        if(diyOpt.type === 'videoTx2'){
            $.getScript("//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js",function(){
                let player = new Txplayer({
                    containerId: 'GsPopupVideoArea',
                    vid: diyOpt.sid,
                    width: '100%',
                    height: '100%',
                    autoplay:true,
                    showBullet:false,
                    showLogo: false,
                    showRecommendOnEnd:false
                });
            });
        }else if(diyOpt.type === 'videoYk2'){
            $.getScript("//player.youku.com/jsapi",function(){
                let player = new YKU.Player('GsPopupVideoArea',{
                    styleid: '0',
                    client_id: '6bfe5b183f11e7d9',
                    vid: diyOpt.sid,
                    newPlayer: true,
                    show_related: false,
                    autoplay: true
                });
            });
        }else if(diyOpt.type === 'videoH5'){
            let h5Video = document.getElementById('GsPopupVideoAreaH5');
            h5Video.play();
        }
    },
    closeVideo(opt,diyOpt){
        if(diyOpt.type === 'videoH5'){
            let h5VideoDad = document.getElementById('GsPopupVideoArea'),
                h5Video = document.getElementById('GsPopupVideoAreaH5');
            h5Video.pause();
            h5VideoDad.removeChild(h5Video);
        }
    },
    addContext(opt,diyOpt){
        let vDom = '';
        switch (diyOpt.type){
            case 'image':
                vDom = `<div class="gs-popup-type-image"><img src="${diyOpt.sid}" alt="GsPopupImage"></div>`;
                break;
            case 'videoTx1':
                vDom = `<embed wmode="direct" flashvars="vid=${diyOpt.sid}&amp;tpid=0&amp;showend=1&amp;showcfg=1&amp;searchbar=1&amp;skin=http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf&amp;shownext=1&amp;list=2&amp;autoplay=1" src="http://imgcache.qq.com/tencentvideo_v1/player/TPout.swf?max_age=86400&amp;v=20140714" quality="high" name="tenvideo_flash_player_1492679771297" id="tenvideo_flash_player_1492679771297" bgcolor="#000000" width="100%" height="100%" align="middle" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash" pluginspage="http://get.adobe.com/cn/flashplayer/">`;
                break;
            case 'videoTx2':
                vDom = `<div class="gs-popup-type-video" id="GsPopupVideoArea"></div>`;
                break;
            case 'videoYk1':
                vDom = `<embed height="100%" flashvars="isAutoPlay=true" allowscriptaccess="sameDomain" width="100%" align="middle" quality="high" invokeurls="false" src="http://player.youku.com/player.php/sid/${diyOpt.sid}/v.swf" type="application/x-shockwave-flash" wmode="transparent">`;
                break;
            case 'videoYk2':
                vDom = `<div class="gs-popup-type-video" id="GsPopupVideoArea"></div>`;
                break;
            case 'videoH5':
                vDom = `<div class="gs-popup-type-video" id="GsPopupVideoArea"><video id="GsPopupVideoAreaH5" src="${diyOpt.sid}" width="100%" height="100%" controls></video></div>`;
                break;
            case 'custom':
                vDom = `<div class="gs-popup-type-custom">${$(diyOpt.sid).html()}</div>`;
                break;
            case 'jsCustom':
                vDom = `<div class="gs-popup-type-jscustom" id="${diyOpt.jscid}" data-sid="${diyOpt.sid}"></div>`;
                break;

        }
        return vDom
    },
    createDom(opt,diyOpt){
        let _this = this,vDom = '',sty = {
            dad:`margin:${-diyOpt.size.h/2}px 0 0 ${-diyOpt.size.w/2}px;width:${diyOpt.size.w}px;height:${diyOpt.size.h}px;`
        },wh = $(window).height();
        if(diyOpt.size.h>wh){
            sty.dad += `position:absolute;margin-top:0;top:${diyOpt.bindBtn.offset().top}px`;
            _this.config.hideScroll = false;
        }else{
            _this.config.hideScroll = true;
        }
        vDom += `<div class="GsPopup GsPopupClose gs-popup-mask"></div>`;
        vDom += `<div class="GsPopup gs-popup" style="${sty.dad}">${_this.addContext(opt,diyOpt)}<a class="gs-popup-close gs-popup-close-${diyOpt.type} GsPopupClose"></a></div>`;
        return vDom;
    },
    show(opt,diyOpt){
        let _this = this;
        $('body').append(_this.createDom(opt,diyOpt));
        _this.playVideo(opt,diyOpt);
        setTimeout(function () {
            $('.GsPopup').addClass('cur');
            if(_this.config.hideScroll === true){
                _this.scrollDisable();
            }
        },30);
        $('body').on('click','.GsPopupClose',function () {
            _this.close(opt,diyOpt);
        });
    },
    bindEvent(opt){
        let _this = this,diyOpt = {};
        $(opt.tar).on('click',function () {
            let $ts = $(this);
            diyOpt.sid = $ts.data('sid');
            diyOpt.type = $ts.data('type');
            diyOpt.jscid = $ts.data('jscid');
            diyOpt.bindBtn = $ts;
            diyOpt.size = {
                w:$ts.data('w'),
                h:$ts.data('h')
            };
            if(typeof opt.fnc.before === "function"){
                opt.fnc.before();
            }
            _this.show(opt,diyOpt);
            if(typeof opt.fnc.after === "function"){
                opt.fnc.after();
            }
        });
    },
    init(opt) {
        let options = {
            timer:{
                close:250
            },
            fnc:{
                after(){},
                before(){}
            }
        };

        options = $.extend(options,opt);
        this.bindEvent(options);
    }
};

module.exports = GsPopup;