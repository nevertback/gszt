let GsFixNav = {
    createNav(opt){
        let vDom = '';
        vDom += `<div class="gs-fix-nav GsFixNav"><div class="gs-fix-nav-list">`;
        $.each(opt.list,function (i,item) {
            vDom += `<div class="gs-fix-nav-btn GsFixNavBtn" data-idx="${i}">${item.nav}</div>`;
        });
        vDom += `</div></div>`;
        return vDom;
    },
    resizeEvent(opt){
        let $FixNav = $('.GsFixNav'),$winWidth = $(window).width();
        if($winWidth < opt.show.width){
            $FixNav.addClass('hideImp');
        }else{
            $FixNav.removeClass('hideImp');
        }
    },
    scrollEvent(opt){
        let $FixNav = $('.GsFixNav'),scrollTopNow = $('html').scrollTop();
        scrollTopNow = scrollTopNow===0?$('body').scrollTop():scrollTopNow;
        if(scrollTopNow >= opt.show.top){
            $FixNav.addClass('cur');
        }else{
            $FixNav.removeClass('cur');
        }
        let offsetTopArr = [];
        $.each(opt.list,function (i,item) {
            if(scrollTopNow >= $(item.tar).offset().top + opt.selectOffset){
                $('.GsFixNavBtn').removeClass('cur').eq(i).addClass('cur');
            }
        });
    },
    bindEvent(opt){
        $('.GsFixNavBtn').on('click',function () {
            let $ts = $(this),
                tarDt = opt.list[$ts.attr('data-idx')],
                $tar = $(tarDt.tar),
                tarTopDtc;
            if(typeof tarDt.offset !== "undefined"){
                tarTopDtc = $tar.offset().top + tarDt.offset;
            }else{
                tarTopDtc = $tar.offset().top;
            }
            $('html,body').animate({scrollTop:tarTopDtc},opt.speed)
        })
    },
    insertNav(opt){
        let _this = this;
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
    init(opt){
        let options = {
            selectOffset:-100,
            speed:200,
            show:{
                top:0,
                width:1280
            }
        };
        options = $.extend(options,opt);
        this.insertNav(options)
    }
};

module.exports = GsFixNav;