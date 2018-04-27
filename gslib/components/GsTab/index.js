let GsTab = {
    tabOpen(tar,opt){
        let $tab = tar,
            $navs = $tab.find('.GsTabNavs'),
            $nav = $navs.find('.GsTabNav'),
            $items = $tab.find('.GsTabItems'),
            $item = $tab.find('.GsTabItem'),tabTimer;
        function loadLazyImg(imgs) {
            imgs.each(function () {
                let $ts = $(this),isload = $ts.attr('data-isload'),realSrc = $ts.attr('data-src');
                if(isload !== 'ok'){
                    $ts.attr({
                        'data-isload':'ok',
                        'src':realSrc
                    });
                }
            });
        }
        function eventDoBefore() {
            if(typeof opt.fnc.before === "function"){
                opt.fnc.before();
            }
        }
        function eventDo(idx) {
            $nav.add($item).removeClass('cur');
            $nav.eq(idx).add($item.eq(idx)).addClass('cur');
            if(opt.lazyimg === true){
                loadLazyImg($item.eq(idx).find('img'));
            }
            if(typeof opt.fnc.after === "function"){
                opt.fnc.after();
            }
        }
        function bindEventMouseover(){
            $nav.on({
                mouseover:function () {
                    let $ts = $(this),idx = $ts.attr('data-GsTabKey');
                    eventDoBefore();
                    tabTimer = setTimeout(function () {
                        eventDo(idx);
                    },opt.timer.delay);
                },
                mouseout:function () {
                    clearTimeout(tabTimer);
                }
            })
        }
        function bindEventClick(){
            $nav.on({
                click:function () {
                    let $ts = $(this),idx = $ts.attr('data-GsTabKey');
                    eventDoBefore();
                    eventDo(idx);
                }
            })
        }
        function setTabState(){
            if(opt.lazyimg === true){
                loadLazyImg($item.eq(0).find('img'));
            }
            $nav.eq(0).add($item.eq(0)).addClass('cur');
            $nav.each(function (i) {
                $(this).attr('data-GsTabKey',i);
            });
            if(opt.changeEvent === 'mouseover'){
                bindEventMouseover();
            }else{
                bindEventClick();
            }
        }
        setTabState();
    },
    init(opt){
        let _this = this,options = {
            tar:'.GsTab',
            timer:{
                delay:120
            },
            lazyimg:false,
            changeEvent:'mouseover', //mouseover | click
            fnc:{
                after(){},
                before(){}
            }
        };

        options = $.extend(options,opt);

        $(options.tar).each(function () {
            _this.tabOpen($(this),options);
        });
    }
};

module.exports = GsTab;