//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//// paso cero en mayusculas
esMayuscula=funtion(caracter) {
    let codigo = caracter.charCodeAt(0);
    return (codigo >= 65 && codigo <= 90);
}
/// paso 1 palabra secreta 
let palabraSecreta = "";

guardarPalabra=function() {
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

mostrarLetra = funtion(letra, posicion) {
    let divId = "div" + posicion;
    document.getElementById(divId).textContent = letra;
}

//// paso 3 funcion validad 
validad = funtion(letra){
    let letrasEcontradas = 0;
    For(let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta(i) === letra) {
            mostrarLetra(letra, i);
            letrasEcontradas++;
        }
    }
    return letrasEcontradas;
}

//////paso 4 - 5 funcion ingresar letra 
    let intentos=0;
    let coincidencias=0;
    let errores=0;

    ingresarLetra=function(){
        let letraInput=document.getElementById("txtLetra");
        let letra=letraInput.value;

        if (!esMayuscula(letra)){
            alert("SOLO SE ACEPTAN MAYUSCULAS");
            return
        }
        intentos++;
        let letrasEcontradas=validar(letra);
        if (letrasEcontradas >0 ){
            coincidencias +=letrasEcontradas;
        } else {
            errores++;
            alert("la letra no es parte de la palabra");
            mostrarAhorcado();

        }
        if (coincidencias===5){
            document.getElementById("imagenAhorcada"),src="ganador.gif";
        }
        if (coincidencias===10){
            document.getElementById("imageAhorcado"), src="gameOver.gif";
        }
        
        letraInput.value="";

    }

    ////////paso 6 funcion mostrar ahoracado 

    mostrarAhorcado=funtion(){
        let imagen=document.getElementById("ahorcadoImagen");
        switch(errores){
            case 1:
            imagen.src="Ahorcado_01.png";
            break;
            case 2:
            imagen.src="Ahorcado_02.png";
            break;
            case 3:
            imagen.src="Ahorcado_03.png";
            break;
            case 4:
            imagen.src="Ahorcado_04.png";
            break;
            case 5:
            imagen.src="Ahorcado_05.png";
            break;
            case 6:
            imagen.src="Ahorcado_06.png";
            break;
            case 7:
            imagen.src="Ahorcado_07.png";
            break;
            case 8:
            imagen.src="Ahorcado_08.png";
            break;
            case 9:
            imagen.src="Ahorcado_09.png";
            break;

        }
    }

