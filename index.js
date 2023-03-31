// JQEURY/JS COMMON TO EVERY PAGE
const skill = window.matchMedia("(max-width:1030px)");

if (skill.matches) {
    console.log("Reached");
    $(".skilldescription").slideUp();
    $(".iconshead").slideDown();
    function openSkillDescription() {
        $(".skilldescription").slideToggle();
        $(".iconshead").slideToggle();
        $(".heading button").toggleClass("background2");
    }
}

// JAVA SCRIPT FOR LOADER COMMON TO EVERY WEBPAGE

$(document).ready(function () {
    // a = $("body").attr("id");
    // whichpage(a);    
    $(".onloadShow").removeClass("visibilityNone");
    $(".one").addClass("animate");
    setTimeout(function () {
        $(".two").addClass("animate");
        setTimeout(function () {
            $(".three").addClass("animate");
        }, 100);
    }, 100);
    setTimeout(function () {
        $(".onloadShow").addClass("visibilityNone");
        $(".totalContainer").removeClass("visibilityNone");

    }, 500);
});


// MINIMUM NAVIGATION BAR TOGGLING CLASSES 

$(".hb").click(function () {
    $(".skillContainer").toggleClass("visibilityNone");
    $(".Name").toggleClass("visibilityNone");
    $(".socialSection").toggleClass("visibilityNone");
    $("#About").toggleClass("visibilityNone");
    $(".totalContainer").toggleClass("background");
    $(".hamBurger").toggleClass("visibilityNone");
    $(".hamBurgerClose").toggleClass("visibilityNone");
    $("#NavBar ul").toggleClass("slide-out");
    $(".hamBurgerClose").toggleClass("slide-out");
});

// HOME PAGE JQUERY


// ANIMATION TO SHOW A HOVER OVER THE MAIN TEXT IN HOME PAGE

for (var i = 0; i < 19; i++) {
    $(".doin")[i].addEventListener('mouseover', myFunc);
}

function myFunc(e) {
    $(this).addClass("textinc");
    console.log(this.innerHTML);
    setTimeout(function () {
        console.log(this.innerHTML);
        $(".textinc").removeClass("textinc");
    }, 2500);
}

// FIXING THE TEXT LENGTH FOR MOBILE DEVICES

const about = window.matchMedia("(max-width: 700px)");
if (about.matches) {
    $(".azeem").html("I'M AZEEM");
    $(".am p").html("Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi pariatur quos! Tempore, reiciendis placeat repudiandae quo quisquam deleniti magnam esse. Ad alias explicabo vitae ");
}
// CONTACT FORM DISPLAYING

$(".contact").slideUp();

$(".closeForm").click(function () {
    $(".contact").slideUp();
    setTimeout(function () {
        $(".totalContainer").toggleClass("visibilityNone");
    }, 500);
});
function showForm() {
    $(".contact").css("visibility", "visible");
    $(".contact").removeClass("visibilityNone");
    $(".totalContainer").addClass("visibilityNone");
    $(".contact").slideDown();
}





// SKILLS PAGE JQUERY

// SHOWING THE SKILL DESCRIPTION ACCORDING TO THE WIDTH


// AUTO FILL WHEN CLICKED THE SKILL ICON
$(".iconImages").click(function () {
    var a = $(this).attr("id");
    console.log(a);
    $('.' + a).removeClass("ratingFill");
    setTimeout(() => {
        $("." + a).addClass("ratingFill");
    }, 100);
});





// ABOUT SECTION JQUERY

// BUILDING A ROAD FOR THE ABOUT SECTION

function aboutAzeem(button) {
    var a = button.getAttribute("context");
    console.log(a);
    $(".startAbout").addClass("visibilityNone");
    $(".education").addClass("visibilityNone");
    $(".favourites").addClass("visibilityNone");
    $(".hobbies").addClass("visibilityNone");
    $(".menmyself").addClass("visibilityNone");
    if (a == 'education') {
        $(".education").removeClass("visibilityNone");
        $(".alian").removeClass("moveleft moveright movebottom moveup");
        $(".alian").addClass("moveleft");
    }
    else if (a == 'menmyself') {
        $(".alian").removeClass("moveleft moveright movebottom moveup");
        $(".menmyself").removeClass("visibilityNone");
        $(".alian").addClass("moveright");
    }
    else if (a == 'favourites') {
        $(".alian").removeClass("moveleft moveright movebottom moveup");
        $(".favourites").removeClass("visibilityNone");
        $(".alian").addClass("movebottom");
    }
    else {
        $(".alian").removeClass("moveleft moveright movebottom moveup");
        $(".hobbies").removeClass("visibilityNone");
    }
    // $(".alian").addClass("movedown");
    // $("alian").addClass("moveright");
    // $("alian").addClass("moveup");
    // $(".startAbout").addClass("visibilityNone");
    // $(".education").addClass("visibilityNone");
    // $(".favourites").addClass("visibilityNone");
    // $(".hobbies").addClass("visibilityNone");
    // $(".menmyself").addClass("visibilityNone");
    // $("."+a).removeClass("visibilityNone");
    // $("#About").removeClass("fillborder1");
    // $("#About").removeClass("fillborder2");
    // $("#About").removeClass("fillborder3");
    // $("#About").removeClass("fillborder4");
    // if(a == 'education'){
    //     $("#About").addClass("fillborder1");
    // }
    // else if(a == 'favourites'){
    //     $("#About").addClass("fillborder2");
    // }
    // else if(a == 'menmyself')
    // {
    //     $("#About").addClass("fillborder4");
    // }
    // else{
    //     $("#About").addClass("fillborder3");
    // }
    // console.log(a);
}












// const skills = window.matchMedia("(max-width:500px)");
// if(skills.matches){
//     $(".skillSet p").html("LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus repellendus harum labore voluptate numquam obcaecati eveniet amet perferendis, incidunt necessitatibus facilis quia! Estaccusamus ea aliquam earum perspiciatis cumque! Lorem ipsum dolor")
// }






