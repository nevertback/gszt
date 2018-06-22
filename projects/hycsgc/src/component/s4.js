let s4 = {
    formNie(){
        if($(".gallery_container").length > 0) {
            Gallery.create({
                galleryContainer: ".gallery_container",
                slidesPerView: 3,
                gallery_prev: ".gallery_prev",
                gallery_next: ".gallery_next",
                stretch: -150,
                autoPlay: !1,
                rotate: 0,
                depth: 600
            });
        }
    },
    init(){
        this.formNie();
    }
};
module.exports = s4;