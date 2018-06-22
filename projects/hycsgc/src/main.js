/*
 * Gamersky 基本专题模板 js
 * v 1.0.0
 * create by MrrrTian
 */
/*
 * 使用公共组件
 */
let GsForbiddenIE = require('gslib/components/GsForbiddenIE');
let GsFixCell = require('gslib/components/GsFixCell');
GsForbiddenIE.init({
    ver:9,
    fallback:{
        name:'谷歌&nbsp;Chrome',
        url:'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
    }
});
GsFixCell.init({
   minWidth:1450
});
/*
 * 使用当前专题组件
 */
let s4 = require('./component/s4.js');
s4.init();

