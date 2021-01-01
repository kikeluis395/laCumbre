let slider = document.querySelector(".hero__img-container")
let sliderIndividual = document.querySelectorAll(".hero__img")
let contador = 1;
let intervalo = 3000;
let width = sliderIndividual[0].clientWidth;
window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

  setInterval(function(){
      slides();
  },intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}