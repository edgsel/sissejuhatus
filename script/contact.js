$(function(){  // $(document).ready shorthand
    function showContacts() {
        if($(".hiden").css("opacity") == 0) {
            console.log("hi");
            $(".hiden").animate({opacity: 1});
        }
    }
    setTimeout(showContacts, 300);
});