// 1. Función que retorna un número aleatorio entero entre 1 y 100
generarNumeroAleatorio = function() {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}

// 2. Función principal que genera el arreglo de números aleatorios
generarAleatorios = function() {
    let aleatorios = [];
    let cantidad = recuperarInt("txtCantidad");

    // Validar que el número esté entre 5 y 20
    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Por favor, ingrese un número entre 5 y 20.");
        return;
    }

    // Recorremos desde 0 hasta cantidad (excluido)
    for (let i = 0; i < cantidad; i++) {
        console.log("Índice: " + i);
        let numero = generarNumeroAleatorio();
        aleatorios.push(numero);
    }

    // Mostrar el resultado al final del for
    mostrarResultados(aleatorios);
}

// 3. Función que recibe un arreglo y genera una tabla dinámica en pantalla
mostrarResultados = function(arregloNumeros) {
    // Limpiar contenido previo
    let contenedor = document.getElementById("divResultados");
    contenedor.innerHTML = "";

    // Crear tabla
    let tabla = document.createElement("table");
    tabla.border = "1";
    tabla.style.borderCollapse = "collapse";
    tabla.style.marginTop = "10px";

    // Crear una fila
    let fila = document.createElement("tr");

    // Recorrer el arreglo para crear celdas
    for (let i = 0; i < arregloNumeros.length; i++) {
        let celda = document.createElement("td");
        celda.style.padding = "5px 10px";
        celda.innerText = arregloNumeros[i];
        fila.appendChild(celda);
    }

    // Agregar fila a la tabla
    tabla.appendChild(fila);
    contenedor.appendChild(tabla);
}
