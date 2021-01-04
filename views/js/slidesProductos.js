var slideI2 = 1;
showProductos(slideI2);

function plusDivs3(n) {
  showProductos((slideI2 += n));
}

function currentDiv3(n) {
  showProductos((slideI2 = n));
}

function showProductos(n) {
  var i;
  var slides = document.getElementsByClassName("pyme");
  var indicators = document.getElementsByClassName("Productos");
  if (n > slides.length) {
    slideI2 = 1;
  }
  if (n < 1) {
    slideI2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", " ");
  }
  slides[slideI2 - 1].style.display = "flex";
  indicators[slideI2 - 1].className += " active";
}