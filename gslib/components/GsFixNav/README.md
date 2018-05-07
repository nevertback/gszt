Gamersky 浮动导航插件
---
* js开启示例
```javascript
/*
 * selectOffset 滚动位置判断偏移 > 默认-100
 * show.top 开始显示导航滚动条位置 > 默认 0
 * show.width 隐藏浮动导航的最小宽度 > 默认 1280
 * list 导航按钮列表
 * list.tar 定位元素
 * list.nav 导航按钮结构
 * list.offset 滚动到定位元素位置偏移
 */
let GsFixNav = require('gslib/components/GsFixNav');
GsFixNav.init({
    selectOffset:-300,
    show:{
        top:200,
        width:1400
    },
    list:[
        {
            tar:'#section1',
            nav:'<a><span>TOP</span></a>',
            offset:-50
        },
        {
            tar:'#s2pos',
            nav:'<a><span>第一部分</span></a>',
            offset:-50
        },
        {
            tar:'#s3pos',
            nav:'<a><span>第二部分</span></a>',
            offset:-50
        }
    ]
});
```