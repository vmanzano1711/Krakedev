mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

 calcularSubTotal = function (precio, cantidad) {
    return precio * cantidad;
}

calcularValorDescuento=function(subtotal,porcentaje){
    return subtotal* (porcentaje/100);
}

calcularIVA = function (subtotal, descuento) {
    let baseImponible = subtotal - descuento;
    return baseImponible * 0.12; 
}
calcularTotal = function (subtotal, descuento, iva) {
    return (subtotal - descuento) + iva;
}
limpiar = function () {
    // Vaciar cajas de texto
    mostrarTextoenCaja("txtProducto", "");
    mostrarTextoenCaja("txtPrecio", "");
    mostrarTextoenCaja("txtCantidad","");
    mostrarTextoenCaja("txtPorcentajeDescuento","");

    // Reiniciar resultados
    mostrarTexto("lblSubtotal", "");
    mostrarTexto("lblDescuento", "");
    mostrarTexto("lblValorIVA", "");
    mostrarTexto("lblTotal", "");
    mostrarTexto("lblResumen", "");
}

