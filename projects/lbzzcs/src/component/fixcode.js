let fixcode = {
    fnc(){
        let fxCode = $('.fxCode'),minWidth = fxCode.data('mw'),fxCodeOft = fxCode.data('oft'),ft = fxCode.offset().top;
        function scrollFunc() {
            let $win = $(window),st = $win.scrollTop();
            if($win.width() < minWidth){
                fxCode.hide();
            }else{
                fxCode.show();
            }
            if(st >= (ft-($win.height()/2 - fxCodeOft))){
                fxCode.addClass('cur').css({'marginTop':-fxCodeOft+'px'});
            }else{
                fxCode.removeClass('cur').css({'marginTop':''});
            }
        }
        $(window).resize(scrollFunc).scroll(scrollFunc);
    },
    init(){
        this.fnc();
    }
};

module.exports = fixcode;