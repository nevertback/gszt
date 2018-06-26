let s4timer1,s4timer2,s4 = {
    createSld(dt,tar){
        let that = this,vDom = '',vDomLi = '';
        $.each(dt,function (i,item) {
            vDomLi += `<li><img src="//image.gamersky.com/webimg13/zhuanti/common/blank.png" data-src="${item}" alt="pic${i}"></li>`;
        });
        vDom += `<div class="zt-sld-wrap ztSldWrap" id="ztSld4"><div class="zt-sld ztSld"><ul class="zt-sld-con ztSldCon">${vDomLi}</ul></div><div class="zt-sld-nav ztSldNav"></div><a class="zt-sld-arr zt-sld-arr-prev ztSldArrPrev"></a><a class="zt-sld-arr zt-sld-arr-next ztSldArrNext"></a></div>`;
        function sld(sldId){
            let $sldId = $(sldId),
                $sldNav = $sldId.find('.ztSldNav'),
                $sldCon = $sldId.find('.ztSldCon'),
                $sldPrev = $sldId.find('.ztSldArrPrev'),
                $sldNext = $sldId.find('.ztSldArrNext');
            $sldId.find('.ztSld').slide({
                titCell:$sldNav,
                titOnClassName:'cur',
                mainCell:$sldCon,
                effect:'leftLoop',//leftLoop
                delayTime:250,
                switchLoad:'data-src',
                prevCell:$sldPrev,
                nextCell:$sldNext,
                autoPage:'<a></a>'
            });
        }
        clearTimeout(s4timer1);
        clearTimeout(s4timer2);
        tar.removeClass('cur');
        s4timer1 = setTimeout(function () {
            tar.html(vDom);
            sld('#ztSld4');
            s4timer2 = setTimeout(function () {
                tar.addClass('cur');
            },10);
        },250);
    },
    createTabLev2(dt,tar){
        let that = this,vDom = '',vDomNav = '';
        $.each(dt,function (i,item) {
            vDomNav += `<a data-idx="${i}">${item.name}</a>`;
        });
        vDom += `<div class="multi-tab-lev2 mtTabLev2">
                    <div class="clearfix mt-nav-lev2 mtTabLev2Nav">${vDomNav}</div>
                    <div class="mt-box-lev2 mtTabLev2Box"></div>
                 </div>`;
        tar.html(vDom);
        let $tab = $('.mtTabLev2');
        function selectTab(idx){
            $('.mtTabNav').find('a.cur').attr('data-sel',idx);
            $tab.find('.mtTabLev2Nav').find('a').removeClass('cur').eq(idx).addClass('cur');
            that.createSld(dt[idx].pics,$tab.find('.mtTabLev2Box'));
        }
        function eventOpen(){
            let msTimer;
            $tab.find('.mtTabLev2Nav').find('a').on({
                mouseover(){
                    let idx = $(this).data('idx');
                    msTimer = setTimeout(function () {
                        selectTab(idx);
                    },120);
                },
                mouseout(){
                    clearTimeout(msTimer);
                }
            });
        }
        eventOpen();

        let selIdx = $('.mtTabNav').find('a.cur').attr('data-sel');
        if(!selIdx){
            selIdx = 0;
        }
        selectTab(selIdx);
    },
    createTab(dt){
        let that = this,vDom = '',
            vDomNav = '',
            $mtTab = $('#multiTab');
        $.each(dt,function (i,item) {
            vDomNav += `<a data-idx="${i}"><i class="arr-l"></i><i class="arr-r"></i><i class="line"></i>${item.name}</a>`;
        });
        vDom += `<div class="multi-tab mtTab">
                    <div class="clearfix mt-nav-lev1 mtTabNav">${vDomNav}</div>
                    <div class="mt-box-lev1 mtTabBox"></div>
                 </div>`;
        $mtTab.html(vDom);
        let $tab = $('.mtTab');
        function selectTab(idx){
            $tab.find('.mtTabNav').find('a').removeClass('cur').eq(idx).addClass('cur');
            that.createTabLev2(dt[idx].list,$tab.find('.mtTabBox'))
        }
        function eventOpen(){
            $tab.find('.mtTabNav').find('a').on('click',function () {
                let idx = $(this).data('idx');
                selectTab(idx);
            });
        }

        selectTab(0);
        eventOpen();
    },
    init(){
        let tabData = multiTabData;
        this.createTab(tabData);
    }
};
module.exports = s4;