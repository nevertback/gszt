let comm = {
    getComm(){
        $('#commAreaSmt').on('click',function () {
            let ztDir = 'ow2zn';
            let Folder = 'zhuanti/'+ztDir+'/',fname = 'comm',
                cookiefname = cookie(ztDir+fname),
                userCon = $('#commAreaIpt').val();
            if (cookiefname !== null && cookiefname === userCon) {
                alert("您已经提交过了");
                return false;
            }
            if ($.trim(userCon) === '') {
                alert("请说点什么吧");
                return false;
            }
            let content = "---祝福：" + userCon + "---";
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
            cookie(ztDir+fname, userCon, {
                path: '/'
            });
            $('#commAreaIpt').val('');
            alert('提交成功');
        })

    },
    showScreen(){
        let $commArea = $('#commAreaSreenMain');
        function createDM(dt){
            let fkDt = dt,groupArr = [],groupNum = Math.floor(fkDt.length/13)+1;
            for(let i=0,len=fkDt.length;i<len;i+=groupNum){
                groupArr.push(fkDt.slice(i,i+groupNum));
            }
            let vDom = ``;
            for(let gi = 0;gi<groupArr.length;gi++){
                let vDomLine = '';
                for(let gj = 0;gj<groupArr[gi].length;gj++){
                    vDomLine += `<span class="commAreaR${gi}" style="margin-right:${Math.random()*300+100}px">${groupArr[gi][gj]}</span>`;
                }
                vDom += `<div class="comm-area-row comm-area-row${gi} commAreaRow" data-nums="${groupArr[gi].length}">`;
                vDom += vDomLine;
                vDom += `</div>`;
            }
            $commArea.html(vDom);
            $('.commAreaRow').each(function () {
                let $ts = $(this),tsw = $ts.width(),tsnum = $ts.attr('data-nums');
                function startAnim(){
                    $ts.animate({
                        'left':-(tsw+860)
                    },Math.random()*30000+3000*tsnum,'linear',function () {
                        startAnim();
                        $ts.css('left','100%');
                    });
                }
                startAnim();
            });
        }
        $.getScript('//j.gamersky.com/zhuanti/ow2zn/fkdt.js',function () {
            createDM(window.owfkdt);
        });
    },
    init(){
        this.showScreen();
        this.getComm();
    }
};
module.exports = comm;