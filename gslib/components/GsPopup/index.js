let GsPopup = {
    createDom(opt){
        let vDom = '';
        vDom += `<div class="GsPopup GsPopupClose gs-popup-mask"></div>`;
        vDom += `<div class="GsPopup gs-popup"><a class="gs-popup-close GsPopupClose"></a></div>`;
        return vDom;
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
    close(opt){
        let _this = this,$GsPopup = $('.GsPopup');
        $GsPopup.removeClass('cur');
        _this.scrollEnable();
        setTimeout(function () {
            $GsPopup.remove();
        },opt.timer.close);
    },
    show(opt){
        let _this = this;
        $('body').append(_this.createDom(opt));
        setTimeout(function () {
            $('.GsPopup').addClass('cur');
            _this.scrollDisable();
        },30);
        $('.GsPopupClose').on('click',function () {
            _this.close(opt);
        });
    },
    bindEvent(opt){
        let _this = this;
        $(opt.tar).on('click',function () {
            _this.show(opt);
        });
    },
    init(opt) {
        let options = {
            timer:{
                close:250
            }
        };

        options = $.extend(options,opt);
        this.bindEvent(options);
    }
};

module.exports = GsPopup;