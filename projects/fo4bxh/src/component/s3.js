let s3 = {
    popFnc(idx){
        let $box = $('.areaBox'),
            popDom = '',
            popData = window.teamData[idx];
        popDom += `<div class="team-pop-mask teamPop teamPopClose"></div><div class="team-pop team-pop${idx} teamPop">
                        <div class="team-logo"></div>
                        <div class="team-pop-title">
                            <span class="chs">${popData.chs}</span>
                            <span class="en">${popData.en}</span>
                        </div>
                        <div class="team-pop-des">${popData.des}</div>
                        <a class="team-pop-close teamPopClose"></a>
                   </div>`;
        $box.append(popDom);
        $('.teamPopClose').on('click',function () {
            $('.teamPop').remove();
        });
    },
    clickEvent(){
        let _this = this;
        $('.btnTeam').on('click',function () {
            let $this = $(this),
                idx = $this.data('idx');
            _this.popFnc(idx);
        })
    },
    init(){
        this.clickEvent()
    }
};

module.exports = s3;