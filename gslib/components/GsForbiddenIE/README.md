Gamersky IE友好提示插件
---
默认IE7以下显示提示，浏览器推荐为火狐  

* javascript 代码示例
```javascript
let GsForbiddenIE = require('gslib/components/GsForbiddenIE');
GsForbiddenIE.init();
```
```javascript
//自定义屏蔽
GsForbiddenIE.init({
    ver:9,
    fallback:{
        name:'谷歌&nbsp;Chrome',
        url:'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
    }
});
```