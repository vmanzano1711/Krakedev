mostrarImagen = function (idComponente, rutaImagen) {
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}

mostrarTexto = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    return componente.value;
}

recuperarInt = function (idComponente) {
    return parseInt(recuperarTexto(idComponente));
}

recuperarFloat = function (idComponente) {
    return parseFloat(recuperarTexto(idComponente));
}
