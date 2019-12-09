$(function () { //$( document ).ready(function() equivalent
    $(".dark-theme").on("click", function () {
        /* hardcoded method */
        if ( $("body").hasClass("dark-mode")) {
            $("body").removeClass("dark-mode");
            /* manually changing colors of some classes */
            $(".active").css({"border-bottom": "1px solid black"});
            $(".tabs").css({"color": "#222"});

            $(".tabs").hover(function(e) {
                $(this).css("background-color",e.type === "mouseenter"?"black":"transparent");
                $(this).css("color",e.type === "mouseenter"?"white":"#222");
                $(this).css("box-shadow",e.type === "mouseenter"?"rgba(0,0,0,0.3)":"transperent");
            });

            $(".png").css({"filter": "none"});

        } else {
            $("body").addClass("dark-mode");
            $(".active").css({"border-bottom": "1px solid #e6e6e6"});
            $(".tabs").css({"color": "#e6e6e6"});

            $(".tabs").hover(function (e) {
                $(this).css("background-color",e.type === "mouseenter"?"#e6e6e6":"transparent");
                $(this).css("color",e.type === "mouseenter"?"#222":"#e6e6e6");
                $(this).css("box-shadow",e.type === "mouseenter"?"rgba(230,230,230,0.3)":"transperent");
            });
            $(".png").css({"filter": "grayscale(1) invert(.9)"});
        }
    });
});
