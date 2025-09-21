calcularValorTotal = function () {
    //1. Recuperar el nombre del producto como String
    let nombreProducto = recuperarTexto("txtProducto");

    //2. Recuperar el precio como float
    let precioProducto = recuperarFloat("txtPrecio");

    //3. Recuperar cantidad como int
    let cantidad = recuperarInt("txtCantidad");

    //4. Recuperar el porcentaje de descuento como int
    let porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

   calcularSubTotal = function (precio, cantidad) {
    return precio * cantidad;
}

calcularValorDescuento = function (subtotal, porcentajeDescuento) {
    return subtotal * (porcentajeDescuento / 100);
}

calcularIVA = function (subtotal, descuento) {
    let baseImponible = subtotal - descuento;
    return baseImponible * 0.12; // IVA 15%
}

calcularTotal = function (subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

}

 



