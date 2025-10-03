verificarCirculacion = function () {
    // 1. Recuperar valores
    let placa = document.getElementById("txtPlaca").value;
    let dia = document.getElementById("txtDia").value.toLowerCase().trim();

    if (placa.length === 0 || dia.length === 0) {
        document.getElementById("lblResultado").innerText = "Debe ingresar placa y día.";
        return;
    }

    // 2. Tomar el último dígito de la placa
    let ultimoCaracter = placa.charAt(placa.length - 1);
    let ultimoDigito = parseInt(ultimoCaracter);

    if (isNaN(ultimoDigito)) {
        document.getElementById("lblResultado").innerText = "La placa debe terminar en un número.";
        return;
    }

    // 3. Definir restricción
    let restriccion = "";
    if (ultimoDigito === 1 || ultimoDigito === 2) {
        restriccion = "lunes";
    } else if (ultimoDigito === 3 || ultimoDigito === 4) {
        restriccion = "martes";
    } else if (ultimoDigito === 5 || ultimoDigito === 6) {
        restriccion = "miércoles";
    } else if (ultimoDigito === 7 || ultimoDigito === 8) {
        restriccion = "jueves";
    } else if (ultimoDigito === 9 || ultimoDigito === 0) {
        restriccion = "viernes";
    }

    // 4. Verificar si puede circular
    let mensaje = "";
    if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
        mensaje = "Libre circulación (fin de semana).";
    } else if (dia === restriccion) {
        mensaje = "NO puede circular, restricción por pico y placa.";
    } else {
        mensaje = "Sí puede circular.";
    }

    // 5. Mostrar resultado
    document.getElementById("lblResultado").innerText = mensaje;
}

limpiar = function () {
    document.getElementById("txtPlaca").value = "";
    document.getElementById("txtDia").value = "";
    document.getElementById("lblResultado").innerText = "---";
}
