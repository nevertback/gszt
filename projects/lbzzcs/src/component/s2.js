let s2 = {
    createQues(){
        let $queBoxs = $('#quesBoxs'),quesDt = quesData,vDom = '';
        $.each(quesDt,function (i,item) {
            vDom += `<div class="ques-box quesBox"><h5>${item.tit}</h5><div class="ques-list">`;
            $.each(item.lists,function (j,jtem) {
                vDom += `<a class="ques-sel quesSel" data-q="${i}" data-l="${j}" data-type="${item.sel}"><i class="ques-sel-${item.sel}"></i>${jtem}</a>`;
            });
            vDom += '</div></div>';
        });
        $queBoxs.html(vDom);
    },
    fnc(){
        function checkQues(){
            let quesResult={
                checkResult:true,
                ans:[]
            };
            $('.GsPopup').find('.quesBox').each(function (i) {
                let tmpArr = {
                    qid:i,
                    ls:[]
                };
                $(this).find('.cur').each(function (j) {
                    let $ts = $(this),
                        $q = $ts.data('q'),
                        $l = $ts.data('l');
                    tmpArr.ls.push($l);
                });
                quesResult.ans.push(tmpArr);

                if($(this).find('.cur').length<1){
                    quesResult.checkResult = false;
                }
            });
            return quesResult;
        }
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
        $(document).on('click','.quesSmt',function () {
            let userAns = checkQues();
            if(userAns.checkResult === false){
                alert('每题至少选择一项');
                return false;
            }
            let $ipt = $('.GsPopup').find('.quesIpt'),ztDir = 'lbzzcs';
            let Folder = 'zhuanti/'+ztDir+'/',fname = 'infos',
                cookiefname = cookie(ztDir),
                userCon = JSON.stringify(userAns.ans),
                userNum = $ipt.val();
            if (cookiefname !== null && cookiefname === userNum) {
                alert("您已经提交过了");
                return false;
            }
            if (verifIpt(userNum,'email') === false) {
                alert("请输入有效的邮箱");
                return false;
            }
            let content = "---邮箱：" + userNum + "---问卷：" + userCon + "---";
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
            alert("提交完成！");
            $('.GsPopupClose').trigger('click');
        });
        $(document).on('click','.quesSel',function () {
            let $ts = $(this),$type = $ts.data('type');
            if($type === 'sig'){
                $ts.closest('.quesBox').find('.quesSel').removeClass('cur');
                $ts.addClass('cur');
            }else if($type === 'mut'){
                if($ts.hasClass('cur') === true){
                    $ts.removeClass('cur');
                }else{
                    $ts.addClass('cur');
                }
                if($ts.closest('.quesBox').find('.cur').length > 3){
                    if($ts.closest('.quesBox').find('.cur').eq(0).data('l') === $ts.data('l')){
                        $ts.closest('.quesBox').find('.cur').eq(-1).removeClass('cur');
                    }else{
                        $ts.closest('.quesBox').find('.cur').eq(0).removeClass('cur');
                    }
                }
            }
        });
    },
    init(){
        this.createQues();
        this.fnc();
    }
};

module.exports = s2;