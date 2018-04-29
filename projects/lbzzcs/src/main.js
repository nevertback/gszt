/*
 * Gamersky 基本专题模板 js
 * v 1.0.0
 * create by MrrrTian
 */
/*
 * 使用公共组件
 */
let GsPopup = require('gslib/components/GsPopup');
GsPopup.init({
    tar:'.popupBtn'
});
GsPopup.init({
    tar:'.popupBtnTxt'
});
/*
 * 使用当前专题组件
 */
let s2 = require('./component/s2.js'),
    s4 = require('./component/s4.js'),
    s5 = require('./component/s5.js'),
    fixcode = require('./component/fixcode.js');
s2.init();
s5.init();
s4.init();
fixcode.init();

