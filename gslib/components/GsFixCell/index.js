let GsFixCell = {
    fixCellAction(opt){
        let $fixCell = $('.GsFixCell'),
            minWidth = opt.minWidth,
            fixCellHalf,
            fcTop = $fixCell.offset().top,openScroll = false;
        if(typeof opt.halfSize === "undefined"){
            fixCellHalf = $fixCell.height()/2;
        }else{
            fixCellHalf = opt.halfSize;
        }
        function scrollFunc() {
            let $win = $(window),$html = $('html'),st = $html.scrollTop();
            st = st===0?$('body').scrollTop():$html.scrollTop();
            if(st >= (fcTop-($win.height()/2 - fixCellHalf))){
                $fixCell.addClass('cur').css({'marginTop':-fixCellHalf+'px'});
            }else{
                $fixCell.removeClass('cur').css({'marginTop':''});
            }
        }
        function resizeFnc() {
            let $win = $(window);
            if($win.width() < minWidth){
                $fixCell.hide();
                openScroll = false;
            }else{
                $fixCell.show();
                openScroll = true;
                scrollFunc();
            }
        }
        resizeFnc();
        scrollFunc();
        $(window).resize(resizeFnc).scroll(function () {
            if(openScroll === true){
                scrollFunc();
            }
        });
    },
    init(opt){
        let defaultOption = {
            minWidth:1280
        };
        defaultOption = $.extend(defaultOption,opt);
        this.fixCellAction(defaultOption);
    }
};

module.exports = GsFixCell;