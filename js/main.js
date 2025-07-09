const btnMenuMobile = document.getElementById("menu-mobile-btn");
const btnMenuMobileClose = document.getElementById("menu-mobile-close");
const menuMobile = document.getElementById("menu-mobile");

btnMenuMobile.addEventListener("click", function(){
    menuMobile.style.left = 0
})
btnMenuMobileClose.addEventListener("click", function(){
    menuMobile.style.left = "-1000px"
})

document.getElementById("defaultOpen").click();

function openFeature(evt, featureName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(featureName).style.display = "block";
  evt.currentTarget.className += " active";
}