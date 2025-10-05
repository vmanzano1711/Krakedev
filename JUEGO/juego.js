
let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    // 1️⃣ Generar la elección del computador
    let eleccionComputador = generarElemento();

    // 2️⃣ Mostrar imagen elegida por el computador
    let rutaComputador = generarRuta(eleccionComputador);
    mostrarImagen("imgComputador", rutaComputador);

    // 3️⃣ Determinar el ganador
    let resultado = determinarGanador(seleccionado, eleccionComputador);

    // 4️⃣ Mostrar mensaje y actualizar puntajes
    if (resultado === 0) {
        mostrarTexto("lblResultado", "EMPATE ");
    } else if (resultado === 1) {
        mostrarTexto("lblResultado", "¡GANASTE ESTA PARTIDA! ");
        puntosUsuario++;
    } else {
        mostrarTexto("lblResultado", "PERDISTE ESTA PARTIDA ");
        puntosComputador++;
    }

    // 5️⃣ Mostrar puntajes
    mostrarTexto("lblPuntosUsuario", puntosUsuario);
    mostrarTexto("lblPuntosComputador", puntosComputador);

    // 6️⃣ Validar si alguien llegó a 5 puntos
    if (puntosUsuario === 5) {
        alert(" HAS GANADO EL JUEGO ");
    } else if (puntosComputador === 5) {
        alert(" EL COMPUTADOR TE HA VENCIDO ");
    }
}

// 🔁 Reiniciar juego
nuevaPartida = function () {
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("lblPuntosUsuario", "0");
    mostrarTexto("lblPuntosComputador", "0");
    mostrarTexto("lblResultado", "Esperando tu jugada...");
    mostrarImagen("imgComputador", "./imagenes/Piedra.png");
}
