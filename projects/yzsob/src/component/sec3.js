let sec3 = {
    createDom(){
        let secData = GsZtSection3tab,$sec = $('#GsTab3'),
            vDom = '',vDomNav = '',vDomItem='';
        vDomNav += `<div class="gs-tab-navs GsTabNavs">`;
        vDomItem += `<div class="gs-tab-items GsTabItems">`;
        $.each(secData.tab,function (i,item) {
            vDomNav += `<a class="gs-tab-nav GsTabNav"><i class="nav nav${item.id}"></i><i class="bd bd${item.id}"></i></a>`;
            vDomItem += `<div class="gs-tab-item GsTabItem">
                <img class="pic" src="//image.gamersky.com/webimg13/zhuanti/common/blank.png" data-src="${item.bg}" alt="pic">
                <div class="info">
                    <a class="play popupBtn2" data-type="videoH5" data-sid="${item.vid}" data-w="800" data-h="452"><img src="//image.gamersky.com/webimg13/zhuanti/common/blank.png" data-src="${item.vd}" alt="vd"></a>
                    <div class="info-cv">${item.cv}</div>
                    <div class="info-des">${item.des}</div>
                </div>
            </div>`;
        });
        vDomNav += `</div>`;
        vDomItem += `</div>`;
        vDom += vDomItem;
        vDom += vDomNav;
        $sec.html(vDom);
    },
    init(callback){
        this.createDom();
        callback();
    }
};

module.exports = sec3;