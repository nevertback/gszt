let GsForbiddenIE = {
    fbFnc(opt){
        let sbie = $.browser.msie,
            ver = parseInt($.browser.version),ieWarning = '';
        ieWarning += `<div id="gs-warning-tips" style="display: none;font-size: 14px; height: 97px; width: 100%; border-bottom: #e22200 3px solid; position: fixed; text-align: center; left: 0px; z-index: 10000000; line-height: 100px; bottom: 0px; background-color: #262626"><img style="width: auto; vertical-align: auto; position: relative; display: inline; top: 2px" src="//image.gamersky.com/webimg13/zhuanti/common/warning.png"> <span style="font-size: 18px; color: black;color: #e5e5e5;">&nbsp;您使用的浏览器版本过低，可能会影响到您浏览本页面，建议升级您的浏览器：&nbsp;&nbsp;</span> <a style="font-size: 18px; text-decoration: none; height: 60px; width: 180px; color: #fff; text-align: center; display: inline-block; line-height: 60px; background-color: #e22200" href="${opt.fallback.url}" target="_balnk">${opt.fallback.name}</a> </div>`;
        ieWarning += '<div id="gs-warning-bg" style="height: 100%; width: 100%; position: fixed; left: 0px; filter: alpha(opacity=65); z-index: 99999; top: 0px; background-color: black; opacity: 0.65"></div>';
        ieWarning += `<div id="gs-warning-dialog" style="font-size: 14px; border-top: #e22200 3px solid; height: 190px; width: 400px; position: fixed; padding-bottom: 40px; padding-top: 40px; padding-left: 60px; left: 50%; margin: -132px 0px 0px -260px; z-index: 10000000; top: 50%; padding-right: 60px; background-color: #262626"><p style="font-size: 18px; color: black; line-height: 30px;color: #e5e5e5;">您使用的浏览器版本过低，可能会影响到您浏览本页面，建议升级您的浏览器：</p><a style="font-size: 18px; text-decoration: none; height: 60px; width: 180px; margin-top: 20px; color: #fff; text-align: center; display: inline-block; line-height: 60px; background-color: #e22200" href="${opt.fallback.url}" target="_balnk">${opt.fallback.name}</a>`;
        ieWarning += '<p style="width: 100%; text-align: right"><img style="width: auto" alt="" src="//image.gamersky.com/webimg15/logo/chang/160x53.png"></p><a style="font-size: 20px; text-decoration: none; height: 60px; width: 60px; right: -60px; position: absolute; font-weight: bolder; color: #fff; text-align: center; display: block; line-height: 60px; top: -3px; background-color: #e22200" onclick="document.getElementById(\'gs-warning-dialog\').style.display=\'none\';document.getElementById(\'gs-warning-bg\').style.display=\'none\';document.getElementById(\'gs-warning-tips\').style.display=\'block\'" href="javascript:void(0)">×</a></div>';
        if(sbie === true && ver <= opt.ver){
            $('body').append(ieWarning);
        }
    },
    init(opt){
        let _this = this,options = {
            ver:7,
            fallback:{
                name:'火狐&nbsp;Firefox',
                url:'//www.firefox.com.cn/'
            }
        };
        options = $.extend(options,opt);
        _this.fbFnc(options);
    }
};

module.exports = GsForbiddenIE;