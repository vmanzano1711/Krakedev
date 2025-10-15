probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("noesta vivo ");
    } else {
        console.log("si esta vivo");
    }
}

crearProducto = function () {
    // Crear el primer producto
    let producto1 = {
        nombre: "Camiseta",
        precio: 19.99,
        stock: 50
    }

    // Crear el segundo producto
    let producto2 = {
        nombre: "Pantalón",
        precio: 29.99,
        stock: 30
    }

    // Imprimir el nombre del producto1
    console.log("Nombre del producto 1:", producto1.nombre);

    // 4️Imprimir el precio del producto2
    console.log("Precio del producto 2:", producto2.precio);

    // Comparar el stock
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}

modificarAtributos = function () {
    let cuenta = {
        numero: "0502722580",
        saldo: 0.0
    }
    cuenta.saldo = 100,
        cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "1714975198",
        nombre: "Vladimir"
    }
    let cliente1 = {};
    cliente1.nombre = "vladimir";
    cliente1.apellido = "Manzano";
    cliente1.cedula = "1714975198";
    console.log(cliente.nombre + " " + cliente.cedula);
    alert(cliente.nombre);
}

probarIncrementoSaldo = function () {
    let cuenta = { numero: "7682", saldo: 10000 }
    incrementarSaldo(cuenta,77777);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function () {
    let per1 = {nombre:"Luciana",edad:11};
    let per2 = {nombre: "Eliana", edad: 18};
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es " + mayor.nombre +" "+ mayor.edad +" "+ "Anos");
    }
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}

