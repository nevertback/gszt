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
/*
 * 使用当前专题组件
 */
let s4 = require('./component/s4.js');
let s3 = require('./component/s3.js');
s4.init();
s3.init();

