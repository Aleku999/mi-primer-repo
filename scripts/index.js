function paginaCargada(){
var crear = document.getElementById('crear');
var limpiar = document.getElementById('limpiar');
var imagen = document.getElementById('imagen');

function modificar(){

    
    var link= document.getElementById('link');
    var texto= document.getElementById('texto');
    var color= document.getElementById('color');
    var tamano= document.getElementById('tamano');

    console.log(link);
    console.log(texto);
    console.log(color);
    console.log(tamano);

    imagen.innerHTML = ' <div id="imagen"  style=" background-image:url('+link.value+');" class="todo__editor__imagen__resultado"  > <p id="texti"  class="todo__editor__imagen__resultado__text"  style= "font-size:'+tamano.value+'px; color:'+color.value+';">'+texto.value+'</p> </div> ';

}

function remover(){
    imagen.innerHTML=' ';
    link.value='';
    texto.value='';
    tamano.value='50';

}

limpiar.addEventListener('click',remover);
crear.addEventListener('click', modificar);

var texti= document.getElementById('texti');
function mover(movilidad){

    switch(movilidad.code){
        case "ArrowLeft":
        imagen.style.marginLeft=parseInt(imagen.style.marginLeft) + 10 + 'px';
        break;


    }


}

window.addEventListener('keydown', mover);
}
window.addEventListener('load',paginaCargada);