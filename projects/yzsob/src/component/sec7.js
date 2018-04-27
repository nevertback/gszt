let sec7 = {
    formNie(){
        if($(".gallery_container").length > 0) {
            Gallery.create({
                galleryContainer: ".gallery_container",
                slidesPerView: 3,
                gallery_prev: ".gallery_prev",
                gallery_next: ".gallery_next",
                stretch: -440,
                autoPlay: !1,
                rotate: 40,
                depth: 280
            });
        }
    },
    init(){
        this.formNie();
    }
};

module.exports = sec7;