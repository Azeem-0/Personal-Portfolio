


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

// FIXING THE TEXT LENGTH FOR MOBILE DEVICES

const about = window.matchMedia("(max-width: 700px)");
if (about.matches) {
    $(".azeem").html("I'M AZEEM");
    $(".am p").html("Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi pariatur quos! Tempore, reiciendis placeat repudiandae quo quisquam deleniti magnam esse. Ad alias explicabo vitae ");
}













// const skills = window.matchMedia("(max-width:500px)");
// if(skills.matches){
//     $(".skillSet p").html("LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus repellendus harum labore voluptate numquam obcaecati eveniet amet perferendis, incidunt necessitatibus facilis quia! Estaccusamus ea aliquam earum perspiciatis cumque! Lorem ipsum dolor")
// }






