let empleados = [ 
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
];

// Muestra divEmpleado, oculta divRol y divResumen
function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
}

// Muestra divRol, oculta divEmpleado y divResumen
function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

// Muestra divResumen, oculta divEmpleado y divRol
function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// ===== EVENTO ONLOAD =====
// Al cargar la página, debe mostrarse el divEmpleado
window.onload = function() {
    mostrarOpcionEmpleado();
}
