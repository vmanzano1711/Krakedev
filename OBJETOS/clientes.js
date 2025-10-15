let clientes = [
    { cedula: "1714975198", nombre: "Vladimir", edad: 43 },
    { cedula: "0502722580", nombre: "Sofia", edad: 38 },
    { cedula: "171254890", nombre: "Eliana", edad: 18 },
];

guardarCambios=function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    
    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad= valorEdad;
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if (clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if (cliente == null) {
        alert("Cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}


crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente = function (clientes) {
    let resultado;
    resultado = buscarCliente(clientes.cedula);
    if (resultado == null) {
        clientes.push(clientes);
        alert("clienteAgregado" + clientes.nombre);
    } else {
        alert("ya existe el cliente con la cedula:" + clientes.cedula);
    }

}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienEncontrado = null;
    for (let i = 0; i <clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienEncontrado = elementoCliente;
            break;
        }

    }
    return clienEncontrado;
}

mostrarCliente = function () {
    let cmpTabla = document.getElementById("tableClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>"
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}