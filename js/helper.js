(function (window) {

    var render = function (tmpl, data, callback) {
        Handlebars.registerHelper('ex-if', function(actual,expected,result) {
            if(actual===expected){
                return result
            }
            else{
                return '';
            }

        });
        var template;
        $.get("../tmpl/" + tmpl).success(function (d) {
            template = Handlebars.compile(d);
            if (typeof data === "string") {
                $.getJSON("../data/" + data).success(function (h) {
                    /*  h = $.parseJSON(h);*/
                    var html = template(h);
                    callback(html);
                })
            }
            if(typeof data==="object"){
                var html = template(data);
                callback(html);
            }
        });

    };
    var mHelper = {
        render: render
    };
    window.mHelper = mHelper;

})(window)