// Paso 0: función para verificar si una letra es mayúscula
function esMayuscula(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90);
}

// Paso 1: palabra secreta
let palabraSecreta = "";

function guardarPalabra() {
    let palabra = document.getElementById('txtSecreta').value.trim();

    // Validar que tenga 5 caracteres
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras MAYÚSCULAS");
        return;
    }

    // Validar que sean mayúsculas
    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            alert("Debe ingresar solo letras MAYÚSCULAS");
            return;
        }
    }

    palabraSecreta = palabra;
    console.log("Palabra guardada:", palabraSecreta);
    alert("Palabra guardada correctamente");
}

// Paso 2: función para mostrar letra en pantalla
function mostrarLetra(letra, posicion) {
    let divId = "div" + posicion;
    document.getElementById(divId).textContent = letra;
}

// Paso 3: función validar letra
function validar(letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
    return letrasEncontradas;
}

// Paso 4-5: función para ingresar letra
let intentos = 0;
let coincidencias = 0;
let errores = 0;

function ingresarLetra() {
    let letraInput = document.getElementById("txtLetra");
    let letra = letraInput.value.trim();

    if (letra.length !== 1) {
        alert("Ingrese solo una letra");
        return;
    }

    if (!esMayuscula(letra)) {
        alert("SOLO SE ACEPTAN MAYÚSCULAS");
        return;
    }

    intentos++;
    let letrasEncontradas = validar(letra);

    if (letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    } else {
        errores++;
        alert("La letra no es parte de la palabra");
        mostrarAhorcado();
    }

    if (coincidencias === 5) {
        document.getElementById("ahorcadoImagen").src = "ganador.gif";
        alert("🎉 ¡Ganaste!");
    }

    if (errores === 9) {
        document.getElementById("ahorcadoImagen").src = "gameOver.gif";
        alert("💀 Game Over");
    }

    letraInput.value = "";
}

// Paso 6: función para mostrar imagen del ahorcado
function mostrarAhorcado() {
    let imagen = document.getElementById("ahorcadoImagen");
    switch (errores) {
        case 1: imagen.src = "Ahorcado_01.png"; break;
        case 2: imagen.src = "Ahorcado_02.png"; break;
        case 3: imagen.src = "Ahorcado_03.png"; break;
        case 4: imagen.src = "Ahorcado_04.png"; break;
        case 5: imagen.src = "Ahorcado_05.png"; break;
        case 6: imagen.src = "Ahorcado_06.png"; break;
        case 7: imagen.src = "Ahorcado_07.png"; break;
        case 8: imagen.src = "Ahorcado_08.png"; break;
        case 9: imagen.src = "Ahorcado_09.png"; break;
    }
}

// Asociar los botones del HTML con las funciones
window.onload = function() {
    document.getElementById("btnGuardar").onclick = guardarPalabra;
    document.getElementById("btnValidar").onclick = ingresarLetra;
};
