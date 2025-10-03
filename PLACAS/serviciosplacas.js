// Determina el día de restricción a partir del último dígito
obtenerDiaRestriccion = function (ultimoDigito) {
    if (ultimoDigito === 1 || ultimoDigito === 2) {
        return "lunes";
    } else if (ultimoDigito === 3 || ultimoDigito === 4) {
        return "martes";
    } else if (ultimoDigito === 5 || ultimoDigito === 6) {
        return "miércoles";
    } else if (ultimoDigito === 7 || ultimoDigito === 8) {
        return "jueves";
    } else if (ultimoDigito === 9 || ultimoDigito === 0) {
        return "viernes";
    } else {
        return "";
    }
}

// Verificar si puede circular según el último dígito y el día ingresado
puedeCircular = function (ultimoDigito, diaSemana) {
    // Normalizar texto del día
    diaSemana = diaSemana.toLowerCase();

    if (diaSemana === "sábado" || diaSemana === "sabado" || diaSemana === "domingo") {
        return "Libre circulación (fin de semana)";
    }

    let restriccion = obtenerDiaRestriccion(ultimoDigito);

    if (diaSemana === restriccion) {
        return "NO puede circular, restricción por pico y placa";
    } else {
        return "Sí puede circular";
    }
}
