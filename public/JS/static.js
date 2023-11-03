// JQEURY/JS COMMON TO EVERY PAGE

// JAVA SCRIPT FOR LOADER COMMON TO EVERY WEBPAGE


$(document).ready(async function () {

    $(".fillBottom").addClass("fill"); //Border bottom line of the Navigation Bar.

    var a = $("body").attr("id");

    $("." + a + " a").css({ "transform": "translateY(-5px)", "transition": "1s ease", "color": "#f6d334" }); //Adding translate for the present page navigation button.

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


    $(".hey").addClass("down");
    $(".azeem").addClass("down");
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

    // var count = 0;

    // setInterval(() => {
    //     if (count > 6) {
    //         setTimeout(() => {
    //             for (var v = 0; v < 6; v++) {
    //                 document.querySelectorAll(".shaik .doin")[i].classList.remove("textinc");
    //             }
    //         }, 500);
    //         count = 0;
    //     }
    //     document.querySelectorAll(".shaik .doin")[count].classList.add("textinc");
    //     count++;
    // }, 200);


    // for (var i = 0; i < 19; i++) {
    //     $(".doin")[i].addEventListener('mouseover', myFunc);
    // }

    function myFunc(e) {
        $("this").css({ "font-size": "3em" });
        $(this).addClass("textinc");
        setTimeout(function () {
            $(".doin").removeClass("textinc");
        }, 3000);
    }

    // $(".doin").on("mouseover", () => {
    //     document.querySelector(this);
    //     $(".doin").css({ "tranform": "translateY(-10px)" });
    // });


    //Guy with a laptop image parallax movement

    var x_value, y_value;

    const element = document.querySelector("#Home");

    element.addEventListener("mouseover", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const boy = document.querySelector(".boyImage");
        boy.style.transform = `translate3d(${-(x / 70) * 0.5}px, ${-(y / 70) * 0.5}px,0)`;
    })

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

    var x_value, y_value;

    const element = document.querySelector("#ProjectPage");

    element.addEventListener("mouseover", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const projectPhoto1 = document.querySelector(".lp1 img");
        const projectPhoto2 = document.querySelector(".lp2 img");
        const projectPhoto3 = document.querySelector(".lp3 img");
        projectPhoto1.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
        projectPhoto2.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
        projectPhoto3.style.transform = `translate3d(${-(x / 60)}px, ${-(y / 60)}px,0)`;
    });



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
}