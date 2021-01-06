/** HIDE/SHOW HEADER */


window.onscroll = function () {
  scrollFunction();
};

const top_navbar = document.getElementById("top_navbar");
const menu_navbar = document.getElementById("menu_navbar");
const logo = document.getElementById("logo_white");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if (top_navbar) {
      top_navbar.style.display = "none";
      logo.style.display = "block";
    }
    menu_navbar.style.justifyContent="space-between";
  } else {
    if (top_navbar) {
      top_navbar.style.display = "flex";
      logo.style.display = "none";
    }
    menu_navbar.style.justifyContent="flex-end";
  }
}

/** FIN HIDE/SHOW HEADER */

// MENU RESPONSIVE
var menu_icon = document.getElementById("menu--icon");

menu_icon.addEventListener("click", function () {});
// FIN DEL MENU RESPONSIVE

/** SLIDER SERVICIOS */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("servicios");
  var indicators = document.getElementsByClassName("indicator");
  if(slides.length != 0){
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
      indicators[i].className = indicators[i].className.replace(" active", " ");
    }
    slides[slideIndex - 1].style.display = "grid";
    indicators[slideIndex - 1].className += " active";
  }
}
var newIndex = 0;
autoPlay();

function autoPlay() {
  var i;
  var slides = document.getElementsByClassName("servicios");
  var indicators = document.getElementsByClassName("indicator");
  if(slides.length != 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      indicators[i].className = indicators[i].className.replace(" active", " ");
    }
    newIndex++;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    slides[newIndex - 1].style.display = "grid";
    indicators[newIndex - 1].className += " active";
    setTimeout(autoPlay, 5000);
  }
}

/**FIN SLIDER SERVICIOS */

/* MODAL/POPUP CONTÁCTANOS */

  const btnOpen = document.getElementById("btnOpen");
  const popup = document.getElementById("modal-container");
  const btnClose = document.getElementById("modal-close");

  btnOpen.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  btnClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

/* FIN MODAL/POPUP CONTÁCTANOS */

/* MODAL/POPUP SERVICIOS */

  var popupService = document.getElementById("modal-container-service");
  var btnCloseService = document.getElementById("modal-close-service");

function terminosCondiciones() {
  popupService.style.display = "flex";
}

  btnCloseService.addEventListener("click", () => {
    popupService.style.display = "none";
  });

/* FIN MODAL/POPUP SERVICIOS */

/* MODAL/POPUP NOTICIAS */

  const botones = document.querySelector(".entradas");
  const btnNotice = document.querySelectorAll(".entradas__img");
  const popupNotice = document.getElementById("container-modal-notice");
  const btnCloseNotice = document.getElementById("modal-notice-close");

  for (let i = 0; i < btnNotice.length; i++) {
    btnNotice[i].addEventListener("click", function () {
      popupNotice.style.display = "flex";
    });
  }

  btnCloseNotice.addEventListener("click", () => {
    popupNotice.style.display = "none";
  });

/* FIN MODAL/POPUP NOTICIAS */
