// Recuperar el valor de un input de texto
recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    return componente.value.trim();
}

// Mostrar texto en un span o div
mostrarTexto = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

// Mostrar texto dentro de una caja de texto
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

// Obtener último carácter de una cadena
obtenerUltimoCaracter = function (cadena) {
    if (cadena.length === 0) {
        return "";
    }
    return cadena.charAt(cadena.length - 1);
}

// Verificar si un carácter es un dígito numérico
esDigito = function (caracter) {
    return !isNaN(caracter) && caracter !== " ";
}
