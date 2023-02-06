/* Nav Bar mobile*/
const menu = document.querySelector("#mobile-menu");
const menuLinks= document.querySelector(".nav-menu");

menu.addEventListener("click", function(){
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    
})

/* Nav Bar switch*/
const nav = document.querySelector(".nav-container");
const sectionTwo = document.querySelector(".banner-container");

const sectionTwoOptions= {};

const sectionTwoObserver = new IntersectionObserver(function(
    entries,
    sectionTwoObserver
     ){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                nav.classList.add("navbar-scrolled");
            }
        });

}, sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);



