calcularPromedioNotas = function() {
    // a) Recuperar valores COMO FLOAT
    var n1 = recuperarFlotante('txtN1');
    var n2 = recuperarFlotante('txtN2');
    var n3 = recuperarFlotante('txtN3');

    // Validación de notas entre 0 y 10
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || 
        n1 < 0 || n1 > 10 || 
        n2 < 0 || n2 > 10 || 
        n3 < 0 || n3 > 10) {
        cambiarTexto('lblPromedio', 'DATOS INCORRECTOS');
        cambiarImagen('imgEstado', 'img/datos-incorrectos.gif');
        return;
    }

    // b) Invocar a calcularPromedio y guardar en "promedio"
    var promedio = calcularPromedio(n1, n2, n3);

    // c) Mostrar en pantalla con 2 decimales
    cambiarTexto('lblPromedio', promedio.toFixed(2),);

    // Mostrar mensaje e imagen según el promedio
    if (promedio > 0 && promedio < 5) {
        cambiarTexto('lblMensaje','REPROBADO');
        cambiarImagen('imgEstado', 'img/reprobado.gif');
    } else if (promedio >= 5 && promedio <= 8) {
        cambiarTexto('lblMensaje', 'BUEN TRABAJO');
        cambiarImagen('imgEstado', 'img/buen-trabajo.gif');
    } else if (promedio > 8 && promedio <= 10) {
       cambiarTexto('lblMensaje','EXCELENTE');
        cambiarImagen('imgEstado', 'img/excelente.gif');
    } else {
        cambiarTexto('lblMensaje', 'DATOS INCORRECTOS');
        cambiarImagen('imgEstado', 'img/datos-incorrectos.gif');
    }
}