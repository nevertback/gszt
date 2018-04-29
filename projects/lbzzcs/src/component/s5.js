let s5 = {
    sld(sldId){
        let $sldId = $(sldId),
            $sldCon = $sldId.find('.ztSldCon'),
            $sldPrev = $sldId.find('.ztSldArrPrev'),
            $sldNext = $sldId.find('.ztSldArrNext');
        $sldId.find('.ztSld').slide({
            mainCell:$sldCon,
            effect:'fade',//leftLoop
            delayTime:250,
            switchLoad:'data-src',
            prevCell:$sldPrev,
            nextCell:$sldNext
        });
    },
    init(){
        this.sld('#ztSld5')
    }
};

module.exports = s5;