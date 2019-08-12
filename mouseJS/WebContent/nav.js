/***************************************************
					superfish
***************************************************/
jQuery.noConflict()(function ($) {

    //主导航
    $(".header").mouseenter(function () {
        $(".header").stop().animate({ "height": "230px" }, 500);
    }).mouseleave(function () {
        $(".header").stop().animate({ "height": "85px" }, 500);
    })

    var lock = false;
    $(".header .topnav .box a").click(function () {
        lock = true;
        var $this = $(this);
        $(".header .topnav .box a .flip").animate({ "margin-top": "0" }, 300, function () {
            $(".header .topnav .box a .flip").removeClass("on");
        });
        $this.children(".flip").stop().animate({ "margin-top": "-21px" }, 300, function () {
            $this.children(".flip").addClass("on");
            lock = false;
        });
    }).mouseenter(function () {
        if (!lock) {
            var $this = $(this);
            $this.children(".flip:not(.on)").stop().animate({ "margin-top": "-21px" }, 300);
            lock = false;
        }
    }).mouseleave(function () {
        if (!lock) {
            var $this = $(this);
            $this.children(".flip:not(.on)").stop().animate({ "margin-top": "0" }, 300);
            lock = false;
        }
    })

    
});