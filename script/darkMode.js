
function nightModeOff() {
    $("body").removeClass("dark-mode");
    /* manually changing colors of some classes */
    $(".active").css({"border-bottom": "1px solid black"});
    $(".tabs").css({"color": "#222"});
    $(".letters").css({"color": "#222"});
    $(".png").css({"filter": "none"});
    $("article").removeClass("white-shadow");
    $("article").addClass("shadow");
    $(".profile").css({"border" : "0.5px solid black"});
    $(".blurred").css({"background": "#f3f0f0"});

    $(".tabs").hover(function(e) {
        $(this).css("background-color",e.type === "mouseenter"?"black":"transparent");
        $(this).css("color",e.type === "mouseenter"?"white":"#222");
    });
}

function nightModeOn() {
    $("body").addClass("dark-mode");
    $(".active").css({"border-bottom": "1px solid #e6e6e6"});
    $(".tabs").css({"color": "#e6e6e6"});
    $(".letters").css({"color": "#e6e6e6"});
    $(".png").css({"filter": "grayscale(1) invert(.9)"});
    $("article").removeClass("shadow");
    $("article").addClass("white-shadow");
    $(".profile").css({"border" : "0.5px solid #e6e6e6"});
    $(".blurred").css({"background": "#1d1d1d"});

    $(".tabs").hover(function (e) {
        $(this).css("background-color",e.type === "mouseenter"?"#e6e6e6":"transparent");
        $(this).css("color",e.type === "mouseenter"?"#222":"#e6e6e6");
    });
}

$(function () { //$( document ).ready(function() equivalent

    $(document).scroll(function () {

        let $nav = $(".div");

        if ( $("body").hasClass("dark-mode")) {
            $(".blurred").css({"background": "#1d1d1d"});
        } else {
            $(".blurred").css({"background": "#f3f0f0"});
        }
        $(".div").stop();
        $nav.toggleClass('blurred', $(this).scrollTop() > $nav.height());
    });
    /* load theme according to local storage value */
    if (localStorage.getItem('isDarkMode') == 1) {
        nightModeOn();
        console.log("on");
        localStorage.setItem("isDarkMode", 1);
        console.log(localStorage.getItem('isDarkMode'));

    } else {
        nightModeOff();
        console.log("off");
        localStorage.setItem("isDarkMode", 0);
        console.log(localStorage.getItem('isDarkMode'));
    }

    $(".dark-theme").on("click", function () {

        if ( $("body").hasClass("dark-mode")) {
            nightModeOff();
            /* Change local storage value for saving theme */
            localStorage.setItem("isDarkMode", 0);

        } else if (!$("body").hasClass("dark-mode")) {
            nightModeOn();
            localStorage.setItem("isDarkMode", 1);
        }
    });
});
