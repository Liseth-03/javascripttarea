let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSliders(indice+=n);
}
function posicionSlide(n){
    muestraSlides(indice=n);
}
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');
}
    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length();
    }
    for(i = 0; i < slides.length; i++){
        barras[i].classname = barras[i].classname.replace("active");
    }

    slides.[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
}