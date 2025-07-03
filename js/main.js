const btnMenuMobile = document.getElementById("menu-mobile-btn");
const btnMenuMobileClose = document.getElementById("menu-mobile-close");
const menuMobile = document.getElementById("menu-mobile");

btnMenuMobile.addEventListener("click", function(){
    menuMobile.style.left = 0
})
btnMenuMobileClose.addEventListener("click", function(){
    menuMobile.style.left = "-1000px"
})