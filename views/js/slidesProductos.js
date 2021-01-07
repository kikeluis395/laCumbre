

var slideI2 = window.location.href;
var ultimo = slideI2.split("/").pop();
var num; 
switch (ultimo) {
  case 'ahorros':
     num = 1;
    break;
    case 'creditosPersonales':
      num = 2;
     break;
     case 'creditoPyme':
      num = 3;
     break;
     case 'creditoConGarantia':
      num = 4;
     break;

  default:
    num = 1;
    break;
}


// if(ultimo != '/'){
//   showProductos(ultimo);
// }else {
//   ultimo = 1;
// }
showProductos(num);

function plusDivs3(n) {
  showProductos((num += n));
}

function currentDiv3(n) {
  showProductos((num = n));
}

function showProductos(n) {
  var i;
  var slides = document.getElementsByClassName("pyme");
  var indicators = document.getElementsByClassName("Productos");
  if (n > slides.length) {
    num = 1;
  }
  if (n < 1) {
    num = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", " ");
  }
  slides[num - 1].style.display = "grid";
  indicators[num - 1].className += " active";
}