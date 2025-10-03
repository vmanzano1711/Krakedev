calcularSubTotal = function (precio, cantidad) {
    return precio * cantidad;
}

calcularValorDescuento = function (subtotal, porcentaje) {
    return subtotal * (porcentaje / 100);
}

calcularIVA = function (subtotal, descuento) {
    let baseImponible = subtotal - descuento;
    return baseImponible * 0.12; 
}

calcularTotal = function (subtotal, descuento, iva) {
    return (subtotal - descuento) + iva;
}

calcularDescuentoPorVolumen = function (cantidad) {
    if (cantidad >= 10 && cantidad <= 20) {
        return 5; // 5%
    } else if (cantidad >= 21 && cantidad <= 50) {
        return 10; // 10%
    } else if (cantidad > 50) {
        return 15; // 15%
    } else {
        return 0;
    }
}

 



