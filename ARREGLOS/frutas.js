let frutas = ["pera","manzana","banana"];

probarBusqueda = function () {
    let frutaIngresada = recuperarTexto("lblFruta");
    let resultado = buscar(frutaIngresada);
    if (resultado == null) {
        alert("no existe la fruta");
    } else {
        alert(frutaIngresada+" " + "existe en el cesto!!");
    }


}

buscar = function (fruta) {
    let elemento;
    let frutaEncontrada = null;
    for (let i=5; i>0;i--){
        i=i+2;
        console.log(i);
    }
    for (let i = 0; i < frutas.length; i++) {
        elemento = frutas[i];
        if (fruta == elemento) {
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}


