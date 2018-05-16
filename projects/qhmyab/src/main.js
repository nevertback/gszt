/*
 * Gamersky 基本专题模板 js
 * v 1.0.0
 * create by MrrrTian
 */
/*
 * 使用公共组件
 */
let GsPopup = require('gslib/components/GsPopup');
let GsFixCell = require('gslib/components/GsFixCell');
GsPopup.init({
    tar:'.popupBtn'
});
GsFixCell.init({
    minWidth:1640
});
/*
 * 使用当前专题组件
 */
let vote = require('./component/vote.js');
let hero = require('./component/hero.js');
let s5 = require('./component/s5.js');
vote.init(GsPopup);
hero.init(GsPopup);
s5();

