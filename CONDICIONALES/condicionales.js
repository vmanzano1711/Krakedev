// 1. Función darPermiso
// El hijo puede salir si saca más de 90 en Matemática o Física o Geometría
function darPermiso(notaMatematica, notaFisica, notaGeometria) {
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    return true;
  } else {
    return false;
  }
}

// 2. Función otorgarPermiso
// El hijo puede salir si saca más de 90 en Matemática o Física Y más de 80 en Geometría
function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
  if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
    return true;
  } else {
    return false;
  }
}

// 3. Función dejarSalir
// Puede salir si tiene más de 90 en alguna materia Y Física es mayor a Matemática
function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
  if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90)
      && notaFisica > notaMatematica) {
    return true;
  } else {
    return false;
  }
}

// 4. Función calcularTasaInteres
// Devuelve la tasa de interés según los ingresos anuales
function calcularTasaInteres(ingresoAnual) {
  if (ingresoAnual < 300000) {
    return 0.16;
  } else if (ingresoAnual < 500000) {
    return 0.15;
  } else if (ingresoAnual < 1000000) {
    return 0.14;
  } else if (ingresoAnual < 2000000) {
    return 0.13;
  } else {
    return 0.12;
  }
}

// 5. Función calcularCapacidadPago
// Si edad > 50 paga 30% del sobrante, sino paga 40%
function calcularCapacidadPago(edad, ingresos, egresos) {
  let sobrante = ingresos - egresos;
  if (edad > 50) {
    return sobrante * 0.30;
  } else {
    return sobrante * 0.40;
  }
}

// 6. Función calcularDescuento
// Aplica descuentos según la cantidad de productos
function calcularDescuento(precio, cantidad) {
  let descuento = 0;

  if (cantidad >= 3 && cantidad <= 5) {
    descuento = 0.02;
  } else if (cantidad >= 6 && cantidad <= 11) {
    descuento = 0.03;
  } else if (cantidad >= 12) {
    descuento = 0.04;
  }

  let total = precio * cantidad;
  let totalConDescuento = total - (total * descuento);

  return totalConDescuento;
}

// 7. Función determinarColesterolLDL
// Devuelve la categoría del colesterol según el nivel
function determinarColesterolLDL(nivelColesterol) {
  if (nivelColesterol < 100) {
    return "Óptimo";
  } else if (nivelColesterol < 130) {
    return "Casi óptimo";
  } else if (nivelColesterol < 160) {
    return "Límite alto";
  } else if (nivelColesterol < 190) {
    return "Alto";
  } else {
    return "Muy alto";
  }
}

// 8. Función validarClave
// La clave es válida si tiene entre 8 y 16 caracteres
function validarClave(clave) {
  if (clave.length >= 8 && clave.length <= 16) {
    return true;
  } else {
    return false;
  }
}

// ===========================
// PRUEBAS
// ===========================
console.log("---- PRUEBAS ----");
console.log("darPermiso(95, 70, 80) →", darPermiso(95, 70, 80)); // true
console.log("otorgarPermiso(91, 60, 85) →", otorgarPermiso(91, 60, 85)); // true
console.log("dejarSalir(92, 93, 70) →", dejarSalir(92, 93, 70)); // true
console.log("calcularTasaInteres(250000) →", calcularTasaInteres(250000)); // 0.16
console.log("calcularCapacidadPago(55, 2000, 500) →", calcularCapacidadPago(55, 2000, 500)); // 450
console.log("calcularDescuento(100, 6) →", calcularDescuento(100, 6)); // 582
console.log("determinarColesterolLDL(120) →", determinarColesterolLDL(120)); // Casi óptimo
console.log("validarClave('miClave123') →", validarClave("miClave123")); // true


  