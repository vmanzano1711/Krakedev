let empleados = [ 
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1758946123",nombre:"Carlos",apellido:"Mendoza",sueldo:750.0} // nuevo empleado agregado
];

// =====================
//  FUNCIONES DE MENÚ
// =====================

// Muestra divEmpleado, oculta los demás
function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados(); // 👈 se llama aquí para mostrar la tabla al entrar
}

// Muestra divRol
function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

// Muestra divResumen
function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// =====================
//  FUNCION mostrarEmpleados
// =====================
function mostrarEmpleados() {
    // 1. Seleccionamos el div donde se insertará la tabla
    let contenedor = document.getElementById("tablaEmpleados");

    // 2. Empezamos a construir el HTML de la tabla
    let tabla = "<table border='1' class='tablaEmpleados'>";
    tabla += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

    // 3. Recorremos el arreglo de empleados
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        tabla += "<tr>";
        tabla += "<td>" + emp.cedula + "</td>";
        tabla += "<td>" + emp.nombre + "</td>";
        tabla += "<td>" + emp.apellido + "</td>";
        tabla += "<td>" + emp.sueldo.toFixed(2) + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    // 4. Insertamos el contenido HTML en el div
    contenedor.innerHTML = tabla;
}

// =====================
//  AL CARGAR LA PÁGINA
// =====================
window.onload = function() {
    mostrarOpcionEmpleado();
};
