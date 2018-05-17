let $voteArea = $('#voteArea'),voteId = $voteArea.data('id');
let vote = {
    showAlert(txt){
        $('.votePopMask,.votePopAlert').addClass('cur');
        $('#votePopAlertText').html(txt);
    },
    collect(){
        $('.votePopMask,.votePopEmail').addClass('cur');
    },
    writeRemoteFile(){
        let _this = this;
        function verifIpt(iptcon,cate) {
            let bValidate;
            if(cate === 'qq'){
                bValidate = RegExp(/^[1-9][0-9]{4,20}$/).test(iptcon);
            }else if(cate === 'telephone'){
                bValidate = RegExp(/^1\d{10}$/).test(iptcon);
            }else if(cate === 'email'){
                bValidate = RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@qq\.[a-zA-Z]{2,3}$/gi).test(iptcon);
            }
            return bValidate;
        }
        let ztDir = 'qhmyab';
        let Folder = 'zhuanti/'+ztDir+'/',fname = 'infos',
            cookiefname = cookie(ztDir),
            userCon = $voteArea.attr('data-selected'),
            userNum = $('#votePopIpt').val();
        if (cookiefname !== null && cookiefname === userNum) {
            alert("您已经提交过了");
            return false;
        }
        if (verifIpt(userNum,'email') === false) {
            alert("请输入有效的QQ邮箱");
            return false;
        }
        if ($.trim(userCon) === '') {
            alert("请说点什么吧");
            return false;
        }
        let content = "---邮箱：" + userNum + "---YES/NO：" + userCon + "---";
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
        $('#votePopIpt').val('');
        $('.votePop').removeClass('cur');
        _this.showAlert('提交完成');
    },
    writeCount(BackData){
        $.each(BackData.items,function (i,item) {
            let vsid = item.Id,vsnum = item.TotalNumber,
                itTar = $('.voteNum[data-vid='+vsid+']');
            itTar.html(vsnum);
        });
        let calcSum = BackData.total,
            calcAgree = BackData.items[0].TotalNumber,
            calcBarWidth = calcAgree/calcSum*100+'%';
        $voteArea.find('.voteBar').css('width',calcBarWidth);
    },
    getCount(){
        let _this = this;
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "http://db2.gamersky.com/Vote/ShowVote.aspx",
            data: {
                json: "1",
                id: voteId
            },
            success: function(responseJson) {
                switch (responseJson.status) {
                    case "ok":
                        _this.writeCount(responseJson);
                        break;
                    case "err":
                        alert(responseJson.message);
                        break;
                }
            }
        });
    },
    bindEvent(){
        let _this = this;
        function SubmitData(vid,selected){
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://db5.gamersky.com/Vote/ShowVote.aspx",
                data: {
                    json: "2",
                    id: voteId,
                    vote: vid
                },
                success: function(responseJson) {
                    switch (responseJson.status) {
                        case "ok":
                            $voteArea.attr('data-selected',selected);
                            _this.writeCount(responseJson);
                            _this.collect();
                            break;
                        case "err":
                            alert(responseJson.message);
                            break;
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("投票已经关闭！");
                }
            });
        }
        $voteArea.find('.voteBtn').on('click',function () {
            let $ts = $(this),vid = $ts.data('vid'),selected = $ts.data('type');
            SubmitData(vid,selected);
        });
        $('.votePopClose').on('click',function () {
            $('.votePop').removeClass('cur');
        });
        $('#votePopSmt').on('click',function () {
            _this.writeRemoteFile();
        });
        $('#s2videoPlay').on('click',function () {
            let $ts = $(this),state = $ts.data('state'),vid = $ts.data('vid');
            if(state === 'open'){
                $.getScript("//vm.gtimg.cn/tencentvideo/txp/js/txplayer.js",function(){
                    let player = new Txplayer({
                        containerId: 's2video',
                        vid: vid,
                        width: '100%',
                        height: '100%',
                        autoplay:true,
                        showBullet:false,
                        showLogo: false,
                        showRecommendOnEnd:false
                    });
                });
            }else{
                _this.showAlert(vid);
            }
        });
    },
    init(){
        this.bindEvent();
        this.getCount();
    }
};

module.exports = vote;