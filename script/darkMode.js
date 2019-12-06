$(".dark-theme").on("click", function () {
    console.log("click");
    if ( $("body").hasClass("dark-mode")) {
        $("body").removeClass("dark-mode");
    } else {
        $("body").addClass("dark-mode");
    }
});