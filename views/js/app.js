/** HIDE/SHOW HEADER */


window.onscroll = function () {
  scrollFunction();
};

var top_navbar = document.getElementById("top_navbar");
var menu_navbar = document.getElementById("menu_navbar");
var logo = document.getElementById("logo_white");
var particles = document.getElementById('particles-js');

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if (top_navbar) {
      top_navbar.style.display = "none";
      logo.style.display = "block";
      particles.style.margin = '55px 0 0 0';
    }
    menu_navbar.style.justifyContent="space-between";
  } else {
    if (top_navbar) {
      top_navbar.style.display = "flex";
      logo.style.display = "none";
      particles.style.margin = '120px 0 0 0';
    }
    menu_navbar.style.justifyContent="flex-end";
  }
}

/** FIN HIDE/SHOW HEADER */

// MENU RESPONSIVE
var menu_icon = document.getElementById("menu--icon");
var menu = document.getElementById('menu_navbar');
var menu_responsive = document.getElementById('menu--main');
var menu_item = document.querySelectorAll('.menuSubmenu');
var arrow = document.querySelectorAll('#submenu--icon');
var submenu = document.querySelectorAll('.submenu');
var pantalla = document.getElementById('pantalla');
var tamaño = pantalla.clientWidth;

window.addEventListener("resize", function () {
  tamaño = pantalla.clientWidth;
});

if(tamaño >= 900) {
  var mostrar = (i) => {
    menu_item[i].addEventListener('mouseover', () => {
      submenu[i].style.display= 'block';
    })
    menu_item[i].addEventListener('mouseout', () => {
      submenu[i].style.display= 'none';
    })
  }
  for(i=0; i<menu_item.length; i++) {
    mostrar(i);
  }
}

mostrarSubmenu = index => {
  submenu[index].classList.toggle('showSubmenu');
  arrow[index].classList.toggle('rotate');
  menu_item[index].classList.toggle('mostrarSubmenu');
}

menu_icon.addEventListener("click", function () {
  menu.classList.toggle('show');
  menu_responsive.classList.toggle('showMenu');
  menu_icon.classList.toggle("fa-times");
});
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

  var btnOpen = document.getElementById("btnOpen");
  var popup = document.getElementById("modal-container");
  var btnClose = document.getElementById("modal-close");

  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    btnClose.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

/* FIN MODAL/POPUP CONTÁCTANOS */

/* MODAL/POPUP SERVICIOS */

  var popupService = document.getElementById("modal-container-service");
  var btnCloseService = document.getElementById("modal-close-service");

  if (popupService) {
    function terminosCondiciones() {
      popupService.style.display = "flex";
    }

    btnCloseService.addEventListener("click", () => {
      popupService.style.display = "none";
    });
  }

/* FIN MODAL/POPUP SERVICIOS */

/* MODAL/POPUP NOTICIAS */

  var botones = document.querySelector(".entradas");
  var btnNotice = document.querySelectorAll(".entradas__img");
  var popupNotice = document.getElementById("container-modal-notice");
  var btnCloseNotice = document.getElementById("modal-notice-close");

  if (btnCloseNotice) {
    for (let i = 0; i < btnNotice.length; i++) {
      btnNotice[i].addEventListener("click", function () {
        popupNotice.style.display = "flex";
      });
    }

    btnCloseNotice.addEventListener("click", () => {
      popupNotice.style.display = "none";
    });
  }

/* FIN MODAL/POPUP NOTICIAS */
// MODAL INICIO
var modalInicio = document.getElementById('container-modal-inicio');
var modalInicioClose = document.getElementById('modal-inicio-close');
setTimeout(() => {
  modalInicio.style.display= 'flex';
}, 5000);
modalInicioClose.addEventListener('click', () => {
  modalInicio.style.display= 'none';
});