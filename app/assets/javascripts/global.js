$document = $(document)

is_touch_screen = 'ontouchstart' in document.documentElement;
width = window.innerWidth;









// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
// }
//





//Colocamos los elementos del DOM para el slider en variables
var sliderCont= document.getElementById("sliderBX");
var sliderWrapper= document.getElementById("sliderBX-contenedor");
var slider= document.querySelectorAll(".sliderBXcell");
var btnNext = document.querySelector("#btnSliderNext");
var btnPrev = document.querySelector("#btnSliderPrev");
//Inicializamos variables numéricas
var contador = 0,posicionIzq = 0,espacioDerecha = 0,anchoDinamico = 0,margenIzquierda = 0,espacioDerecha, ef= 0;
var numSliders = slider.length;

//Inicio al encontrar el elemento #sliderCont
if(sliderCont){
  espacioDerecha= slider[0].offsetWidth * (slider.length);
  anchoDinamico =  slider[0].offsetWidth * (slider.length);
  sliderCont.style.width= anchoDinamico+"px";
  btnNext.addEventListener("click", sliderAvanza);
  btnPrev.addEventListener("click", sliderRetrocede);
}
function sliderAvanza(){
  espacioFinal = espacioDerecha - sliderWrapper.offsetWidth;
  if(espacioFinal>0){
    posicionIzq-=335;
    margenIzquierda = posicionIzq;
    espacioDerecha = anchoDinamico + posicionIzq

    ef = espacioDerecha-sliderWrapper.offsetWidth;
     contador++;
    if(ef<0){
      sliderCont.style.marginLeft=`${posicionIzq+Math.abs(ef)}px`;
       }else{
         sliderCont.style.marginLeft=`${posicionIzq}px`;
       }
     }
}
function sliderRetrocede(){
  if(contador >0){
   posicionIzq+=250;
   sliderCont.style.marginLeft=`${posicionIzq}px`;
    margenIzquierda = posicionIzq;
    espacioDerecha = anchoDinamico + posicionIzq
     contador--;
     }
}
