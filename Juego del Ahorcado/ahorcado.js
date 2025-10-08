//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//// paso cero en mayusculas
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90);
}
/// paso 1 palabra secreta 
let palabraSecreta = "";

function guardarPalabra() {
    let palabra = document.getElementById('txtSecreta').value;
    
    // Validar que tenga 5 caracteres
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }
    
    // Validar que sean mayúsculas
    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }
    
    palabraSecreta = palabra;
    console.log("Palabra guardada:", palabraSecreta);
}

////PASO 2 FUNCION MOSTRAR LETRA 

mostrarLetra=funtion(letra, posicion) {
    let divId = "div" + posicion;
    document.getElementById(divId).textContent = letra;
}