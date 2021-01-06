let slider1 = document.querySelector(".slide--container")
let slider2 = document.querySelector(".slide--container2")
let slider3 = document.querySelector(".slide--container3")


let sliderIndividual1 = document.querySelectorAll(".slide")
let sliderIndividual2 = document.querySelectorAll(".slide2")
let sliderIndividual3 = document.querySelectorAll(".slide3")


let contador = 1;
let intervalo = 3000;

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
var slideI = 1;
showAlianzas(slideI);

function plusDivs2(n) {
  showAlianzas((slideI += n));
}

function currentDiv2(n) {
  showAlianzas((slideI = n));
}

function showAlianzas(n) {
  var i;
  var slides = document.getElementsByClassName("alianzas--items");
  var indicators = document.getElementsByClassName("Alianzas");
  if (n > slides.length) {
    slideI = 1;
  }
  if (n < 1) {
    slideI = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", " ");
  }
  slides[slideI - 1].style.display = "flex";
  indicators[slideI - 1].className += " active";
}