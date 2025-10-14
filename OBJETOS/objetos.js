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

crearProducto=function() {
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
