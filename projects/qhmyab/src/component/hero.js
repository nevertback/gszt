let hero = {
    create(dt){
        let vDom = '';
        vDom += `<ul class="clearfix">`;
        $.each(dt.list,function (i,item) {
            vDom += `<li><a class="popupPicBtn" data-type="image" data-sid="${dt.path+item[2]}" data-w="933" data-h="604"><img class="hero-head" src="${dt.path+item[0]}" alt="${i}"><img class="hero-head-hover" src="${dt.path+item[1]}" alt="${i}"></a></li>`;
        });
        vDom += `</ul>`;
        $('#heroArea').html(vDom);
    },
    init(GsPopup){
        let heroDt = window.heroDataOri;
        this.create(heroDt);
        GsPopup.init({
            tar:'.popupPicBtn',
            fnc:{
                after(){
                }
            }
        });
    }
};

module.exports = hero;