calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("ERROR");
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("ERROR");
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("ERROR");
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }

    }
}

/////revisio 
calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        mostrarTexto("lblError1", "debe ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError1", "");
    }
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
        mostrarTexto("lblError2", "debe ingresar un numero");
        existeError = true;
    } else {
        mostrarTexto("lblError2", "");
        nota3 = recuperarFloat("txtNota3");
        if (isNaN(nota3)) {
            mostrarTexto("lblError3", "debe ingresar un numero");
            existeError = true;
        } else {
            mostrarTexto("lblError3", "");
        }
        if (existeError == false) {
            resultado = calcularPromedio(nota1, nota2, nota3);
            resultadoFormato = resultado.toFixed(2);
            mostrarTexto("lblResultado", resultadoFormato);

        }
    }

}

///3 metodo mas corto 
calcular = function () {
    let nota1, nota2, nota3, resultado, resultadoFormato;

    nota1 = recuperarFloat("txtNota1");
    esNotaValida(nota1, "lblError1");
    nota2 = recuperarFloat("txtNota2");
    esNotaValida(nota2, "lblError2");
    nota3 = recuperarFloat("txtNota3");
    esNotaValida(nota3, "lblError3");
    if (esNotaValida(nota1, "lblError1") && esNotaValida(nota2, "lblError2") && esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }
}

esNotaValida = function (nota, idComponenteError) {
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "debe ingresar un numero");
        hayErrores = true;

    } else {
        if (nota < 0 && nota > 10) {
            mostrarTexto(idComponenteError, "");
            hayErrores = true;

        }
        if (hayErrores == false) {
            mostrarTexto(idComponenteError, "debe ingresar numero 0 Y 10");
        }

        return !hayErrores;

    }

}