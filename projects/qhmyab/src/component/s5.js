function s5fnc() {
    //图片轮播
    let carousel = function(obj) {
        this.container = $(obj.container);
        this.count = obj.count;
        this.classname = obj.classname;
        this.tab = $(obj.tab);
        this.tabIndex = 0;
        this.timer = null;
    };

    carousel.prototype = {
        autoplay: function() {
            let _this = this;
            this.timer = setInterval(function() {
                _this.turnRight();
            }, 2000);

        },
        endplay: function() {
            clearInterval(this.timer);
        },
        init: function() {
            let _this = this;
            $('.' + _this.classname).on('click', function(event) {
                _this.endplay();
                event.preventDefault();
                let direction = $(this).attr('data-direction');
                if (direction === 'left') {
                    _this.turnLeft()
                } else {
                    _this.turnRight()
                }
            });
            _this.autoplay();
        },
        turnLeft: function() {
            let _this = this;
            this.tabIndex--;
            this.tabIndex = this.tabIndex < 0 ? 4 : this.tabIndex;
            this.defaultFun('left')
        },
        turnRight: function() {
            let _this = this;
            this.tabIndex++;
            this.tabIndex = this.tabIndex > 4 ? 0 : this.tabIndex;
            this.defaultFun('right')
        },
        defaultFun: function(direction) {
            let _this = this;
            this.tab.find('li').removeClass('cur').eq(this.tabIndex).addClass('cur');
            $(this.container).find('li').each(function() {
                let old_order = $(this).attr('data-order');
                if (direction === 'left') { old_order--; }
                if (direction === 'right') { old_order++; }
                if (old_order === 6) { old_order = 1; }
                if (old_order === 0) { old_order = 5; }
                $(this).removeClass('po-1 po-2 po-3 po-4 po-5')
                $(this).addClass('po-' + old_order);
                $(this).attr({ 'data-order': old_order });
            })
        }
    };

    let ex = new carousel({
        container: '.slide-list', //绑定ID
        count: 5, //轮播图总数量
        classname: 'btn-arrow', //左右切换点的公共类
        tab: '.dot-list'
    });
    ex.init();
    $('.slide-box').mouseenter(function(event) {
        ex.endplay();
    });
    $('.slide-box').mouseleave(function(event) {
        ex.autoplay();
    });
}

module.exports = s5fnc;