calcularValorTotal = function () {
    // Recuperar valores
    let nombreProducto = recuperarTexto("txtProducto").trim();
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    let porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    // Validaciones básicas
    if (isNaN(precioProducto) || isNaN(cantidad)) {
        alert("Debes ingresar cantidad y precio válidos");
        return;
    }

    // Descuento por volumen (reglas de la hoja)
    let descuentoVolumen = calcularDescuentoPorVolumen(cantidad);

    // Descuento total = manual + volumen
    let porcentajeFinalDescuento = porcentajeDescuento + descuentoVolumen;

    // Calcular resultados
    let valorSubtotal = calcularSubTotal(precioProducto, cantidad);
    let valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeFinalDescuento);
    let valorIVA = calcularIVA(valorSubtotal, valorDescuento);
    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

    // Mostrar resultados
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
    mostrarTexto("lblTotal", valorTotal.toFixed(2));

    // Resumen
    let resumen = `Valor a pagar por ${cantidad} ${nombreProducto} con ${porcentajeFinalDescuento}% de descuento (incluye ${descuentoVolumen}% por volumen): USD ${valorTotal.toFixed(2)}`;
    mostrarTexto("lblResumen", resumen);
}

limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}
