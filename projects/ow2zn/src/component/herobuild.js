let GsPopup = require('gslib/components/GsPopup');
let heroData = window.heroDataOri;
let heroBulid = {
    createList(){
        function verifIpt(iptcon,cate) {
            let bValidate;
            if(cate === 'qq'){
                bValidate = RegExp(/^[1-9][0-9]{4,20}$/).test(iptcon);
            }else if(cate === 'telephone'){
                bValidate = RegExp(/^1\d{10}$/).test(iptcon);
            }else if(cate === 'email'){
                bValidate = RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(iptcon);
            }
            return bValidate;
        }
        let vDom = '',popid = 'GsPopupJsCustom';
        vDom += `<ul class="clearfix">`;
        $.each(heroData.list,function (i,item) {
            vDom += `<li><a class="heroPopBtn" data-herokey="${i}" data-type="jsCustom" data-jscid="${popid}" data-w="873" data-h="376" data-sid="${i}"><img src="${heroData.path+(i+1)}.png" alt="${item.name}"><i></i></a></li>`;
        });
        vDom += `</ul>`;
        $('#heroArea').html(vDom);
        GsPopup.init({
            tar:'.heroPopBtn',
            fnc:{
                after(){
                    let $pop = $('#'+popid),
                        popKey = $pop.data('sid'),
                        popDt = heroData.list[popKey],
                        popVdom = '';
                    popVdom += ``;
                    popVdom += `<div class="hero-pop">`;
                    popVdom += `<img class="hero-pop-head" src="${heroData.path+(parseInt(popKey)+1)}b.png" alt="${popDt.name}">`;
                    popVdom += `<div class="hero-pop-top"><div class="hero-pop-info"><h5>${popDt.name}<span class="hero-pop-role"><i class="hero-pop-role-${popDt.id}"></i>${popDt.role}</span></h5><p>你想对他/她说些什么？英雄在等待你的回应。</p></div>`;
                    popVdom += `<div class="hero-pop-textarea"><textarea name="heroFormText" id="heroFormText" placeholder="对他/她说点什么吧，英雄在等待你的回应，点击输入。\n如：你为什么喜欢她/他，他/她如何让你感动了？更或者是你送上对他/她的祝福也可以哦。"></textarea></div>`;
                    popVdom += `</div>`;
                    popVdom += `<div class="hero-pop-bot"><div class="clearfix hero-pop-row"><label for="heroFormIpt">您的邮箱:</label><div class="hero-pop-ipt"><input type="text" id="heroFormIpt" name="heroFormIpt" placeholder="example@example.com"></div></div></div>`;
                    popVdom += `<a class="hero-pop-smt" id="heroFormSmt">确认提交</a></div>`;
                    $pop.html(popVdom);
                    function showAlert(state){
                        let popAlertVdom = ``;
                        popAlertVdom += `<div class="GsPopup gs-popup-alert cur"><p>${state}</p><a class="gs-popup-alert-close GsPopupClose"></a></div>`;
                        $('body').append(popAlertVdom);
                        $('.gs-popup').removeClass('cur');
                    }
                    $('#heroFormSmt').on('click',function () {
                        let popAlertState = [
                            '英雄已经收到你的来信，请继续下面的活动哦。',
                            '英雄已经收到过你的来信，请不要重复提交哦。'
                        ];
                        let ztDir = 'ow2zn';
                        let Folder = 'zhuanti/'+ztDir+'/',fname = 'infos',
                            cookiefname = cookie(ztDir),
                            userCon = $('#heroFormText').val(),
                            userNum = $('#heroFormIpt').val();
                        if (cookiefname !== null && cookiefname === userNum) {
                            alert("您已经提交过了");
                            return false;
                        }
                        if (verifIpt(userNum,'email') === false) {
                            alert("请输入有效的邮箱");
                            return false;
                        }
                        if ($.trim(userCon) === '') {
                            alert("请说点什么吧");
                            return false;
                        }
                        let content = "---邮箱：" + userNum + "---祝福：" + userCon + "---";
                        $.ajax({
                            type: "GET",
                            dataType: "jsonp",
                            url: "http://www3.gamersky.com:81/cfile.asp",
                            data: {
                                Submit: "Submit",
                                Folder:Folder,
                                Fname: fname,
                                Content: content
                            },
                            success: function(Jsons) {}
                        });
                        cookie(ztDir, userNum, {
                            path: '/'
                        });
                        showAlert(popAlertState[0]);
                    });
                }
            }
        });
    },
    init(){
        this.createList();
    }
};
module.exports = heroBulid;