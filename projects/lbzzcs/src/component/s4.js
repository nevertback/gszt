let s4 = {
    tx(){
        function ZoomPic ()
        {
            this.initialize.apply(this, arguments)
        }
        ZoomPic.prototype =
            {
                initialize : function (id, li, prev, next, p, btnId, btna, btnclass, isAuto){
                    this.options = [
                        {width:446, height:250, top:35, left:0, zIndex:1, opacity:0.35},
                        {width:543, height:305, top:0, left:200, zIndex:3, opacity:1},
                        {width:446, height:250, top:35, left:538, zIndex:1, opacity:0.35}
                    ];
                    this.arr = [];
                    this.t = 0;
                    this.p = p;
                    this.btnId = btnId;
                    this.btnclass = btnclass;
                    this.btna = btna;
                    this.wrap = $('#'+id).find(li);
                    this.video = $('#'+id).find('video');
                    this.img = $('#'+id).find('img');
                    for(var i = 0;i<this.wrap.length;i++){
                        this.arr.splice(i,0,i);
                    }
                    this.arr.unshift(this.arr.pop());
                    this.addClassFun();
                    this.clickImg();
                    this.btnsClick();
                    var that = this;
                    $('.'+prev).on('click',function(){
                        that.doPrev();
                    });
                    $('.'+next).on('click',function(){
                        that.doNext();
                    });
                    if(isAuto){
                        this.auto = setInterval(function(){
                            that.doNext();
                        },5000);
                        this.wrap.on('mouseover',function(){
                            clearInterval(that.auto);
                        });
                        this.wrap.on('mouseout',function(){
                            that.auto = setInterval(function(){
                                that.doNext();
                            },5000);
                        });
                    }
                },
                doPrev:function(){
                    this.arr.unshift(this.arr.pop());
                    this.addClassFun();
                },
                doNext:function(){
                    this.arr.push(this.arr.shift());
                    this.addClassFun();
                },
                addClassFun:function(){
                    var that = this;
                    for(var i = 0;i<this.arr.length;i++){
                        if(i == 1){
                            this.t = this.arr[i] + 1;
                            if(this.t>=this.arr.length){
                                this.t = 0;
                            }
                            this.wrap.eq( this.arr[i] ).find(this.p).css('display','block');
                            $('#'+this.btnId).find(this.btna).eq(this.t).addClass(this.btnclass).siblings().removeClass(this.btnclass);
                        }else{
                            this.wrap.eq( this.arr[i] ).find(this.p).css('display','none');
                        }

                        this.wrap.eq(this.arr[i]).animate({
                            'width':that.options[i]['width'],
                            'height':that.options[i]['height'],
                            'top':that.options[i]['top'],
                            'left':that.options[i]['left'],
                            'z-index':that.options[i]['zIndex']
                        },200);
                        this.wrap.eq(this.arr[i]).find('img') .animate({
                            'z-index':that.options[i]['zIndex'],
                            'opacity':that.options[i]['opacity']
                        },200);
                        this.wrap.eq(this.arr[i]).find('video') .animate({
                            'z-index':that.options[i]['zIndex'],
                            'opacity':that.options[i]['opacity']
                        },200);

                    }
                },
                clickImg:function(){
                    var that = this;
                    this.wrap.each(function(i){
                        $(this).on('click',function(){
                            if( parseInt( $(this).css('left') ) == that.options[0]['left'] ){
                                that.doPrev();
                            }
                            if(parseInt( $(this).css('left') ) == that.options[2]['left']){
                                that.doNext();
                            }
                        });
                    });
                },
                btnsClick:function(){
                    var that = this;
                    $('#'+this.btnId).find(this.btna).each(function(n){
                        $(this).click(function(){
                            $(that).addClass(that.btnclass).siblings().removeClass(that.btnclass);
                            for(var i = 1;i<that.arr.length;i++){
                                if(that.arr[i] != n){
                                    that.arr.unshift(that.arr.pop());
                                }else{
                                    continue;
                                }
                            }
                            that.addClassFun();
                        });
                    });
                }
            };
        window.onload = function () {
            new ZoomPic("box", "li", "prev", "next", "p", "btns_spOther", "a", "active", true);
        }
    },
    init(){
        this.tx()
    }
};

module.exports = s4;