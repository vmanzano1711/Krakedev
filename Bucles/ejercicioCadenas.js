ejecutarPrueba1 = function() {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function() {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    cadenaInvertida(mensaje);
}

recorrerCadena = function(cadena) {
    // Ejemplo: "Juan" → posiciones 0,1,2,3
    let caracter;

    // Primer recorrido
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    // Segundo recorrido (equivalente al anterior)
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
}

cadenaInvertida = function(cadena) {
   
    // Ejemplo: "Sofy" > posiciones 3,2,1,0
    let caracter;

    // Primer recorrido
    for (let posicion = cadena.length -1 ; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }

    
}
