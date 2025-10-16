mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText= mensaje;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value= mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;

}
recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;

}
// utilitarios.js

// Esta función muestra un mensaje de error debajo del campo
mostrarError=function(idElemento, mensaje) {
  document.getElementById(idElemento).textContent = mensaje;
}

// Esta función limpia todos los mensajes de error
limpiarErrores=function() {
  mostrarError('errorNombre', '');
  mostrarError('errorEdad', '');
  document.getElementById('resultado').textContent = '';
}
