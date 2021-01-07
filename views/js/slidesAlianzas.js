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
// var slideI = window.location.href;
// var last= slideI.slice(-1);

var slideI = window.location.href;
var last = slideI.split("/").pop();
var num2; 
switch (last) {
  case 'euroidiomas':
     num2 = 1;
    break;
    case 'cruzDelSur':
     num2 = 2;
    break;
    case 'huampani':
      num2 = 3;
     break;


  default:
    num2 = 1;
    break;
}

// if(ultimo != '/'){
//   showAlianzas(ultimo);
// }else {
//   ultimo = 1;
//   showAlianzas(1);
// }
showAlianzas(num2);

function plusDivs2(n) {
  showAlianzas((num2 += n));
}

function currentDiv2(n) {
  showAlianzas((num2 = n));
}

function showAlianzas(n) {
  var i;
  var slides = document.getElementsByClassName("alianzas--items");
  var indicators = document.getElementsByClassName("Alianzas");
  if (n > slides.length) {
    num2 = 1;
  }
  if (n < 1) {
    num2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", " ");
  }
  slides[num2 - 1].style.display = "flex";
  indicators[num2 - 1].className += " active";
}