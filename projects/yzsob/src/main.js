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
//tab切换
let GsTab = require('gslib/components/GsTab');
let GsFixNav = require('gslib/components/GsFixNav');
let GsForbiddenIE = require('gslib/components/GsForbiddenIE');
GsPopup.init({
    tar:'.popupBtn'
});
GsForbiddenIE.init({
    ver:9,
    fallback:{
        name:'谷歌&nbsp;Chrome',
        url:'https://www.google.cn/intl/zh-CN/chrome/browser/desktop/'
    }
});
/*
 * 使用当前专题组件
 */
let sec3 = require('./component/sec3');
let sec7 = require('./component/sec7');
sec3.init(function () {
    GsTab.init({
        tar:'#GsTab3',
        lazyimg:true
    });
    GsPopup.init({
        tar:'.popupBtn2'
    });
});
GsTab.init({
    tar:'#GsTab4',
    lazyimg:true
});
sec7.init();
let GsFixOffsetTop = -50;
GsFixNav.init({
    selectOffset:-300,
    show:{
        top:200,
        width:1400
    },
    list:[
        {
            tar:'#section1',
            nav:'<a><i></i><span>TOP</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s2pos',
            nav:'<a><i></i><span>世界观</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s3pos',
            nav:'<a><i></i><span>主角介绍</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s4pos',
            nav:'<a><i></i><span>专属皮肤</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s5pos',
            nav:'<a><i></i><span>竞技玩法</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s6pos',
            nav:'<a><i></i><span>卡牌介绍</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s7pos',
            nav:'<a><i></i><span>游戏特色</span></a>',
            offset:GsFixOffsetTop
        },
        {
            tar:'#s8pos',
            nav:'<a><i></i><span>玩家讨论</span></a>',
            offset:GsFixOffsetTop
        }
    ]
});

