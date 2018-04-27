/*
 * Gamersky 基本专题模板 js
 * v 1.0.0
 * create by MrrrTian
 */
/*
 * 使用公共组件
 */
//弹窗
let GsPopup = require('gslib/components/GsPopup');
GsPopup.init({
    tar:'.popupBtn'
});
GsPopup.init({
    tar:'.popupBtn2',
    fnc:{
        after(){
            console.log('opened this')
        }
    }
});

//tab切换
let GsTab = require('gslib/components/GsTab');
GsTab.init();
/*
 * 使用当前专题组件
 */
let test = require('./component/test');

