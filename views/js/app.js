/** HIDE/SHOW HEADER */

window.onscroll = function () {
  scrollFunction();
};

var top_navbar = document.getElementById("top_navbar");
var menu_navbar = document.getElementById("menu_navbar");
var logo = document.getElementById("logo_white");

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    top_navbar.style.display = "none";
    logo.style.display = "block";
    menu_navbar.style.justifyContent="space-between";
  } else {
    top_navbar.style.display = "flex";
    logo.style.display = "none";
    menu_navbar.style.justifyContent="flex-end";
  }
}

/** FIN HIDE/SHOW HEADER */

// SLIDER HERO

let slider1 = document.querySelector(".slide--container")
let slider2 = document.querySelector(".slide--container2")
let slider3 = document.querySelector(".slide--container3")
let slider4 = document.querySelector(".hero__img-container")

let sliderIndividual1 = document.querySelectorAll(".slide")
let sliderIndividual2 = document.querySelectorAll(".slide2")
let sliderIndividual3 = document.querySelectorAll(".slide3")
let sliderIndividual4 = document.querySelectorAll(".hero__img")

let contador = 1;
let intervalo = 3000;

function sliderHero() {
  let width2 = sliderIndividual4[0].clientWidth;
  window.addEventListener("resize", function(){
      width2 = sliderIndividual4[0].clientWidth;
  })
  
  setInterval(function(){
      slides(slider4,sliderIndividual4,width2);
  },intervalo);
}
  let width = sliderIndividual1[0].clientWidth;
  window.addEventListener("resize", function(){
      width = sliderIndividual1[0].clientWidth;
  })
  
  setInterval(function(){
      slides();
  },intervalo);

function slides(){
    slider1.style.transform = "translate("+(-width*contador)+"px)";
    slider1.style.transition = "transform .8s";

    slider2.style.transform = "translate("+(-width*contador)+"px)";
    slider2.style.transition = "transform .8s";

    slider3.style.transform = "translate("+(-width*contador)+"px)";
    slider3.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual1.length){
        setTimeout(function(){
            slider1.style.transform = "translate(0px)";
            slider1.style.transition = "transform 0s";

            slider2.style.transform = "translate(0px)";
            slider2.style.transition = "transform 0s";

            slider3.style.transform = "translate(0px)";
            slider3.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

// MENU RESPONSIVE
  var menu_icon = document.getElementById('menu--icon')

  menu_icon.addEventListener('click', function() {

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
var newIndex = 0;
autoPlay();

function autoPlay() {
  var i;
  var slides = document.getElementsByClassName("servicios");
  var indicators = document.getElementsByClassName("indicator");
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

/**FIN SLIDER SERVICIOS */