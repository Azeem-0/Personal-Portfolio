// JQEURY/JS COMMON TO EVERY PAGE

// JAVA SCRIPT FOR LOADER COMMON TO EVERY WEBPAGE


$(document).ready(async function () {

    $(".fillBottom").addClass("fill"); //Border bottom line of the Navigation Bar.

    var a = $("body").attr("id");

    $("." + a + " a").css({ "transition": "1s ease", 'border-top': '2px solid #f6d334', 'padding': '2px' }); //Adding translate for the present page navigation button.

    $("." + a).css({ "pointer-events": "none" });

    $(".onloadShow").removeClass("displayNone");   //showing the three dots.
    $(".one").addClass("onLoadAnimate");       //adding the Animation class to the three dots sequentially.

    setTimeout(function () {
        $(".two").addClass("onLoadAnimate");
        setTimeout(function () {
            $(".three").addClass("onLoadAnimate");
        }, 100);
    }, 100);

    setTimeout(function () {
        $(".onloadShow").addClass("displayNone");    //removing the three dots.
        $(".totalContainer").removeClass("displayNone");   //showing the document after loading the three dots animation.
        $(".totalContainer").addClass("opacityOnLoad");
        $(".mouseHead").removeClass("displayNone");
        $(".footer").addClass("footerUp");
        $(".skilldescription").addClass("skillDescriptionSlide");
        $(".heading button").addClass("skillButtonSlide");
    }, 500);

    $(".contactMe").addClass("contactslide");
    $(".socialSection").addClass("socialSectionSliding");
});



// CUSTOM MOUSE JAVASCRIPT  

const cursorOut = document.querySelector('.mouseOut');
const cursorDot = document.querySelector('.mouseDot');
const moveCursor = (e) => {
    const MouseMoveY = e.clientY - 45;
    const MouseMoveX = e.clientX - 40;
    cursorOut.style.transform = `translate3d(${MouseMoveX}px, ${MouseMoveY}px, 0)`;
    cursorDot.style.transform = `translate3d(${MouseMoveX}px, ${MouseMoveY}px, 0)`;
}
window.addEventListener('mousemove', moveCursor);

// MINIMUM NAVIGATION BAR TOGGLING CLASSES 


function togglingClasses() {
    $("#Skills").toggleClass("displayNone");
    $("#AboutMe").toggleClass("displayNone");
    $(".projects").toggleClass("displayNone");
    $(".socialSection").toggleClass("displayNone");
    $(".Name").toggleClass("displayNone");
    $(".totalContainer").toggleClass("background");
    $(".hamBurger").toggleClass("displayNone");
    $(".hamBurgerClose").toggleClass("displayNone");

}

$(".hamBurger").click(function () {
    togglingClasses();
    $(".boyImage").css({ "opacity": "1" });
    $("#NavBar ul").addClass("navSlide-out");
    $(".hamBurgerClose").addClass("navSlide-out");
    $("#NavBar ul").removeClass("navSlide-in");
    $(".hamBurgerClose").removeClass("navSlide-in");
});

$(".hamBurgerClose").click(function () {
    $(".boyImage").css({ "opacity": "0.7" });
    $("#NavBar ul").removeClass("navSlide-out");
    $(".hamBurgerClose").removeClass("navSlide-out");
    $("#NavBar ul").addClass("navSlide-in");
    $(".hamBurgerClose").addClass("navSlide-in");
    setTimeout(() => {
        togglingClasses();
    }, 400);
});


// JQUERY CODE FOR INDIVIDUAL PAGE SEPARATELY

if (window.location.pathname.includes("/index") || (!window.location.pathname.includes("/projects") && !window.location.pathname.includes("/about") && !window.location.pathname.includes("/skills"))) {

    // HOME PAGE JQUERY


    // ANIMATION TO SHOW A HOVER OVER THE MAIN TEXT IN HOME PAGE

    const myFunc = (e) => {
        const element = e.toElement;
        console.log(element);
        let tl = gsap.timeline();

        tl.to(element, { scale: 1.3, duration: 0.25, ease: 'none', stagger: 0.3 });
        tl.to(element, { scale: 1, duration: 0.2, ease: 'none', stagger: 0.3 });
    }

    for (var i = 0; i < 19; i++) {
        $(".doin")[i].addEventListener('mouseover', myFunc);
    }

    function showText() {
        gsap.fromTo('.doin', { y: 35, opacity: 0, duration: 0, ease: 'elastic.out' }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.2, ease: 'elastic.out' });
    }
    showText();

    //Guy with a laptop image parallax movement

    const slidingAnimation = (e) => {
        const boyImage = document.querySelector('.boyImage');
        gsap.to(boyImage, { x: e.x / 50, y: e.y / 50 });
    }
    window.addEventListener("mousemove", slidingAnimation);

    // FIXING THE TEXT LENGTH FOR MOBILE DEVICES

    const am = window.matchMedia("(max-width: 700px)");
    if (am.matches) {
        $(".azeem").html("<div class='doin'>I'M&nbsp;<l1>AZEEM.</l1></div>");
        $(".slidingButton").removeClass("contactZooming");
    }

    // CONTACT FORM DISPLAYING

    $(".closeForm").click(function () {
        $("body").toggleClass("bgimage");
        $(".contact").css({ "transform": "translate(-50%,150%)" });
    });
    function showForm() {
        $(".contact").css("visibility", "visible");
        $(".contact").removeClass("displayNone");
        $(".contact").css({ "transform": "translate(-50%,-50%)" });
    }


}


else if (window.location.pathname.includes("/skills")) {

    const skill = window.matchMedia("(max-width:1030px)");

    if (skill.matches) {

        $(".iconshead").addClass("skillDescriptionSlide");
        $(".skilldescription").addClass("displayNone");
        function openSkillDescription() {
            $(".heading button").toggleClass("background2");
            $(".skilldescription").toggleClass("displayNone");
            $(".iconshead").toggleClass("displayNone");
            $(".iconshead").toggleClass("skillDescriptionSlide");
        }
    }


    // AUTO FILL WHEN CLICKED THE SKILL ICON
    $(".iconImages").click(function () {
        var a = $(this).attr("id");
        $('.' + a).removeClass("ratingFill");
        setTimeout(() => {
            $("." + a).addClass("ratingFill");
        }, 100);
    });


}
else if (window.location.pathname.includes("/projects")) {
    // JQUERY FOR PROJECT PAGE

    var start = 1;
    ShowProject(start);

    function ShowProject(count) {
        var showing = $(".project" + count).removeClass("displayNone");
    }


    function restartAnimation(addend, next) {
        for (var i = 1; i < 4; i++) {
            $(".project" + i).addClass("displayNone");
            $(".corouselDots .dot" + i).removeClass("active");
            $(".project" + i).removeClass("slideDown");
            $(".project" + i).removeClass("slideUp");
        }
        if (addend == -1) {
            $(".project" + next).addClass("slideDown");
        }
        else {
            $(".project" + next).addClass("slideUp");
        }
    }

    function makeProjectActive(dotNumber) {
        restartAnimation();
        $(".project" + dotNumber).removeClass("displayNone");
        $(".corouselDots .dot" + dotNumber).addClass("active");
    }

    function moveProject(addend) {
        start = start + addend;
        if (start > 3) {
            start = 1;
        }
        if (start < 1) {
            start = 3;
        }
        restartAnimation(addend, start);
        $(".corouselDots .dot" + start).addClass("active");
        ShowProject(start);
    }

    // ANIMATING PROJECT IMAGE

    const animateProjects = (e) => {
        console.log(e.x, e.y);
        const projectPhoto1 = document.querySelector("#project-image1");
        const projectPhoto2 = document.querySelector("#project-image2");
        const projectPhoto3 = document.querySelector("#project-image3");
        gsap.to(projectPhoto1, { x: e.x / 100, y: e.y / 100, delay: 0.1 });
        gsap.to(projectPhoto2, { x: e.x / 100, y: e.y / 100, delay: 0.1 });
        gsap.to(projectPhoto3, { x: e.x / 100, y: e.y / 100, delay: 0.1 });
    }
    window.addEventListener('mousemove', animateProjects);



    //TO BLUR IMAGES BEFORE LOADING (LAZY LOAD IMAGES)

    const blurImages = document.querySelectorAll(".p-image-blur img");
    const blurDiv = document.querySelectorAll(".p-image-blur");

    const showImageProjects = (image) => {
        image.classList.add("loaded-image");
        blurDiv.forEach((ele, ind) => {
            if (blurImages[ind] === image) {
                ele.classList.add("unload-image-blur");
            }
        });
    }

    blurImages.forEach((image) => {
        if (image.complete) {
            showImageProjects(image);
        }
        else {
            image.addEventListener("load", () => {
                image.classList.add("loaded-image");
                blurDiv.forEach((ele, ind) => {
                    if (blurImages[ind] === image) {
                        ele.classList.add("unload-image-blur");
                    }
                });
            });
        }
    })
}
else if (window.location.pathname.includes("/about")) {
    const image = document.querySelector(".blur-image img");
    const blurredImage = document.querySelector(".blur-image");
    const showImage = () => {
        image.classList.add("loaded-image");
        blurredImage.classList.add("unload-blur-image");
    }
    if (image.complete) {
        showImage();
    }
    else {
        image.addEventListener("load", showImage);
    }


    const heyThere = () => {
        gsap.fromTo('.about-text', { y: 35, opacity: 0, duration: 2, ease: 'elastic.out' }, { y: 0, opacity: 1, stagger: .15, duration: 2, ease: 'elastic.out' });
    }
    heyThere();
}

