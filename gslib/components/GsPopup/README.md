Gamersky 弹窗插件
---
1. html参数说明
> data-type：videoTx1 | videoTx2 | videoYk1 | videoYk2 | image | custom  
> data-sid: 视频地址|图片地址|自定义层选择符  
> data-w: 弹窗宽度  
> data-h: 弹窗高度

例:
```html
<a class="popupBtn" data-type="videoTx2" data-sid="w0394vtbfkt" data-w="800" data-h="452">视频弹层-腾讯2</a>
<a class="popupBtn" data-type="videoYk2" data-sid="XMzU1MDA1NTA3Mg" data-w="800" data-h="452">视频弹层-优酷2</a>
<a class="popupBtn" data-type="videoH5" data-sid="https://nie.v.netease.com/nie/sv/fans/yalisha.mp4" data-w="800" data-h="452">视频弹层-h5</a>
<a class="popupBtn" data-type="image" data-sid="//img1.gamersky.com/image2018/04/20180425_wyc_246_2/gamersky_02origin_03_201842515245A3.jpg" data-w="800" data-h="500">图片弹层</a>
<a class="popupBtn2" data-type="custom" data-sid="#customPop" data-w="800" data-h="500">自定义弹层</a>
<!-- 自定义弹层 -->
<div id="customPop" style="display: none;">
    <div style="width: 100px;height: 100px;line-height: 100px;font-size: 30px;text-align: center;color:#fff;font-weight: bold;">Test</div>
</div>
```

2. javascript开启功能说明  
例:
```javascript
opt = {
    tar:'.popupBtn', //打开弹窗按钮 
    timer:{
        close:250 //默认250ms 
    },
    fnc:{
        after(){}, //callback打开后回调函数  
        before(){} //callback打开前回调函数  
    }
}
````

```javascript
let GsPopup = require('gslib/components/GsPopup');

GsPopup.init({
    tar:'.popupBtn'
});
```

3. scss 默认样式  
例:
```scss
.gs-popup-mask{
	position: fixed;z-index: 99998;top: 0;left: 0;
	width: 100%;height: 100%;
	background:url(http://image.gamersky.com/webimg13/zhuanti/common/black80.png) 0 0 repeat;
	opacity: 0;
	visibility: hidden;
	transition: all 0.25s ease;
	&.cur{
		opacity: 1;
		visibility: visible;
	}
}
.gs-popup{
	position: fixed;
	left: 50%;
	top: 50%;
	z-index: 99999;
	transform:translate(0,20px);
	opacity: 0;
	visibility: hidden;
	transition: all 0.25s ease;
	&.gs-popup-abs{
		position: absolute;
	}
	&.cur{
		transform:translate(0,0);
		opacity: 1;
		visibility: visible;
	}
	.gs-popup-close{
		display: block;
		position: absolute;
		top: 0;
		right: -50px;
		width: 38px;
		height: 38px;
		background:url(http://image.gamersky.com/webimg13/zhuanti/common/gsPopupClose.png) 5px 5px no-repeat;
		&:hover {
			background-position: -33px 5px;
		}
	}
	.gs-popup-type-image{
		width: 100%;
		height: 100%;
		background:url(http://image.gamersky.com/webimg13/lib/icons/loading.gif) center center no-repeat;
		background-color: rgba(0,0,0,0.2);
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.gs-popup-type-video{
		position: relative;
		width: 100%;
		height: 100%;
		background:url(http://image.gamersky.com/webimg13/lib/icons/loading.gif) center center no-repeat;
		background-color: rgba(0,0,0,0.2);
		overflow: hidden;
	}
}
```
