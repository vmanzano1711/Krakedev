let empleados = [ 
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1758946123",nombre:"Carlos",apellido:"Mendoza",sueldo:750.0}
];

let esNuevo = false;

// =====================
//  FUNCIONES DE MENÚ
// =====================

function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

function mostrarOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

// =====================
//  FUNCION mostrarEmpleados
// =====================
function mostrarEmpleados() {
    let contenedor = document.getElementById("tablaEmpleados");
    let tabla = "<table border='1' class='tablaEmpleados'>";
    tabla += "<tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";

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
    contenedor.innerHTML = tabla;
}

// =====================
//  FUNCIONES PARA MANEJAR EMPLEADOS
// =====================

function deshabilitarCampos() {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

function habilitarCampos() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

function ejecutarNuevo() {
    habilitarCampos();
    esNuevo = true;
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

function buscarEmpleado(cedula) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === cedula) {
            return empleados[i];
        }
    }
    return null;
}

function agregarEmpleado(empleado) {
    if (buscarEmpleado(empleado.cedula) === null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

function ejecutarBusqueda() {
    let cedulaBusqueda = recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);
    
    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo.toFixed(2));
        
        // Habilitar solo nombre, apellido y sueldo, mantener cédula deshabilitada
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        
        esNuevo = false;
    }
}

function guardar() {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre").toUpperCase();
    let apellido = recuperarTexto("txtApellido").toUpperCase();
    let sueldoTexto = recuperarTexto("txtSueldo");

    let cedulaValida = /^\d{10}$/.test(cedula);
    let nombreValido = /^[A-Z]{3,}$/.test(nombre);
    let apellidoValido = /^[A-Z]{3,}$/.test(apellido);
    let sueldoValido = /^\d+(\.\d+)?$/.test(sueldoTexto);
    let sueldoNumero = parseFloat(sueldoTexto);
    if (sueldoValido) {
        sueldoValido = sueldoNumero >= 400 && sueldoNumero <= 5000;
    }

    mostrarTexto("lblErrorCedula", cedulaValida ? "" : "Cédula debe tener 10 dígitos");
    mostrarTexto("lblErrorNombre", nombreValido ? "" : "Nombre debe tener al menos 3 letras mayúsculas");
    mostrarTexto("lblErrorApellido", apellidoValido ? "" : "Apellido debe tener al menos 3 letras mayúsculas");
    mostrarTexto("lblErrorSueldo", sueldoValido ? "" : "Sueldo debe ser un número entre 400 y 5000");

    if (cedulaValida && nombreValido && apellidoValido && sueldoValido) {
        if (esNuevo) {
            // CREAR NUEVO EMPLEADO
            let nuevoEmpleado = {
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                sueldo: sueldoNumero
            };

            if (agregarEmpleado(nuevoEmpleado)) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCampos();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
            }
        } else {
            // MODIFICAR EMPLEADO EXISTENTE
            let empleadoModificar = buscarEmpleado(cedula);
            if (empleadoModificar !== null) {
                empleadoModificar.nombre = nombre;
                empleadoModificar.apellido = apellido;
                empleadoModificar.sueldo = sueldoNumero;
                
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados();
                deshabilitarCampos();
                esNuevo = false;
            }
        }
    }
}

function limpiar() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    mostrarTextoEnCaja("txtBusquedaCedula", "");
    
    // Limpiar mensajes de error
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
    mostrarTexto("lblErrorBusqueda", "");
    
    esNuevo = false;
    deshabilitarCampos();
}

// =====================
//  AL CARGAR LA PÁGINA
// =====================
window.onload = function() {
    mostrarOpcionEmpleado();
    deshabilitarCampos();
};