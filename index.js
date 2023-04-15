$(document).ready(function () {

    $(".onloadShow").removeClass("visibilityNone");  //showing the three dots.


    $(".one").addClass("animate"); //adding the animate class to the three dots sequentially.
    setTimeout(function () {
        $(".two").addClass("animate");
        setTimeout(function () {
            $(".three").addClass("animate");
        }, 100);
    }, 100);
    setTimeout(function () {
        $(".onloadShow").addClass("visibilityNone"); //removing the three dots.
        $(".totalContainer").removeClass("visibilityNone"); //showing the document after loading the three dots animation.
        $(".totalContainer").addClass("opacityOnLoad");
        $(".footer").addClass("footerUp");
    }, 500);

    $(".hey").addClass("down");
    $(".azeem").addClass("down");
    $(".contactMe").addClass("contactslide");
});



function togglingClasses() {
    $(".Name").toggleClass("visibilityNone");
    $(".socialSection").toggleClass("visibilityNone");
    $(".totalContainer").toggleClass("background");
    $(".hamBurger").toggleClass("visibilityNone");
    $(".hamBurgerClose").toggleClass("visibilityNone");

}
$(".hamBurger").click(function () {
    togglingClasses();
    $("#NavBar ul").addClass("slide-out");
    $(".hamBurgerClose").addClass("slide-out");
    $("#NavBar ul").removeClass("slide-in");
    $(".hamBurgerClose").removeClass("slide-in");
});
$(".hamBurgerClose").click(function () {
    $("#NavBar ul").removeClass("slide-out");
    $(".hamBurgerClose").removeClass("slide-out");
    $("#NavBar ul").addClass("slide-in");
    $(".hamBurgerClose").addClass("slide-in");
    setTimeout(() => {
        togglingClasses();
    }, 400);
});


if (window.location.pathname.includes("/index.html") || (!window.location.pathname.includes("/projects.html") && !window.location.pathname.includes("/about.html") && !window.location.pathname.includes("/skills.html"))) {

    // HOME PAGE JQUERY


    // FIXING THE TEXT LENGTH FOR MOBILE DEVICES
    const about = window.matchMedia("(max-width: 700px)");
    if (about.matches) {
        $(".azeem").html("I'M AZEEM");
        // $(".am p").html("Welcome to my digital home! As a computer science student, I am excited to share my passion for creating innovative digital solutions with you");
    }
}
