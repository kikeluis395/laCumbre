var lastScrollTop = 0;
var top_navbar = document.getElementById("top_navbar");
var menu_navbar = document.getElementById("menu_navbar");
var logo = document.getElementById("logo_white");

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        top_navbar.style.display = "none";
        logo.style.display = "block";
    } else {
        top_navbar.style.display = "flex";
        logo.style.display = "none";
    }
    lastScrollTop = scrollTop;
});