
function mostrarImagen(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

function mostrarTexto(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

function mostrarTextoEnCaja(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

function recuperarInt(idComponente){
   let valorCaja = recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

function recuperarFloat(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

// =====================
//  NUEVAS FUNCIONES PARA DIV
// =====================

function recuperarTextoDiv(idComponente){
    let componente;
    componente = document.getElementById(idComponente);
    return componente.textContent;
}

function recuperarIntDiv(idComponente){
   let valorDiv = recuperarTextoDiv(idComponente);
   let valorEntero = parseInt(valorDiv);
   return valorEntero;
}

function recuperarFloatDiv(idComponente){
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorDiv);
    return valorFlotante;
}

function mostrarComponente(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

function ocultarComponente(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

function deshabilitarComponente(idComponente){
    document.getElementById(idComponente).disabled = true;
}

function habilitarComponente(idComponente){
    document.getElementById(idComponente).disabled = false;
}