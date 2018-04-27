let GsTab = {
    tabChange(opt){
        let $GsTab = $(opt.tar)
    },
    init(opt){
        let options = {
            tar:'.GsTab',
            fnc:{
                after(){},
                before(){}
            }
        };

        options = $.extend(options,opt);

        this.tabChange(options);
    }
};

module.exports = GsTab;