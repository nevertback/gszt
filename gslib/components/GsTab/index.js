let GsTab = {
    tabOpen(tar,opt){
        let $tab = tar,
            $navs = $tab.find('.GsTabNavs'),
            $nav = $navs.find('.GsTabNav'),
            $items = $tab.find('.GsTabItems'),
            $item = $tab.find('.GsTabItem'),tabTimer;
        function eventDoBefore() {
            if(typeof opt.fnc.before === "function"){
                opt.fnc.before();
            }
        }
        function eventDo(idx) {
            $nav.add($item).removeClass('cur');
            $nav.eq(idx).add($item.eq(idx)).addClass('cur');
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