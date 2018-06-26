/*
 * Gamersky 基本专题模板 js
 * v 1.0.0
 * create by MrrrTian
 */
/*
 * 使用公共组件
 */
let GsPopup = require('gslib/components/GsPopup');
let GsTab = require('gslib/components/GsTab');
let GsForbiddenIE = require('gslib/components/GsForbiddenIE');
GsForbiddenIE.init({
    ver:9,
    fallback:{
        name:'谷歌&nbsp;Chrome',
        url:'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
    }
});
GsPopup.init({
    tar:'.popupBtn'
});
GsTab.init({
    lazyimg:true
});
/*
 * 使用当前专题组件
 */
let s4 = require('./component/s4.js');
s4.init();

