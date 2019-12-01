$(function(){  // $(document).ready shorthand
    function showHint() {
        if($(".hint-to-scroll-down").css("opacity") == 0) {$(".hint-to-scroll-down").fadeTo(500,1)}
    }

    function showArrow() {
        if($(".arrow").css("opacity") == 0) {$(".arrow").fadeTo(500,1)}
    }

    setTimeout(showHint, 1600);
    setTimeout(showArrow, 2000)
});

$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".hideme").each(function() {
            /* Check the location of each desired element */
            var objectTop = $(this).offset().top;

            /* If the element is completely within bounds of the window, fade it in */
            if (objectTop < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    setTimeout(() => { $(this).animate({opacity: 1}) }, 400);
                }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

