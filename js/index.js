$(function () {
    var viewPlaceHolder = $("#view");
    var SetPage = function (url, data) {
        mHelper.render(url, data, function (html) {
            viewPlaceHolder.html(html);

        });
    };
    var SetContentPage = function (data) {
        SetPage("contentpage.html", data);
    }
    hashRouter({
        '': function () {
            SetPage("index.html", {});
        },
        'people-group': function () {
            mHelper.render("people-group.tmpl", "data-people.json", function (html) {
                viewPlaceHolder.html(html);
            });
        },
        'gongsigaikuo': function () {
            SetContentPage("gongsigaikuo.json");
        }, 'qiyewenhua': function () {
            SetContentPage("qiyewenhua.json");
        }, 'qiyezhanlve': function () {
            SetContentPage("qiyezhanlve.json");
        }, 'qiyezhaopin': function () {
            SetContentPage("qiyezhaopin.json");
        }, 'yewulingyu': function () {
            SetContentPage("yewulingyu.json");
        }, 'yingxiaowangluo': function () {
            SetContentPage("yingxiaowangluo.json");
        }, 'yuanjingshiming': function () {
            SetContentPage("yuanjingshiming.json");
        }

    })

    /*
     mHelper.render("menu.tmpl", "menu.json", function (html) {
     $("#m-menus").html(html);
     });
     */

})