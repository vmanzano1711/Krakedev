// orden.js
// Creamos un arreglo con algunas personas
let personas = [
  { nombre: "Marcos", edad: 18 },
  { nombre: "Roberto", edad: 15 },
  { nombre: "Kate", edad: 25 },
  { nombre: "Diana", edad: 12 },
  { nombre: "Benja", edad: 5 }
];
paso 2

function mostrarTabla() {
  // Buscamos el cuerpo de la tabla
  let cuerpo = document.querySelector('#tablaPersonas tbody');
  cuerpo.innerHTML = ""; // Limpiamos

  // Recorremos el arreglo de personas
  for (let i = 0; i < personas.length; i++) {
    let fila = "<tr><td>" + i + "</td><td>" + personas[i].nombre + "</td><td>" + personas[i].edad + "</td></tr>";
    cuerpo.innerHTML += fila;
  }
}
paso 3
function validar(nombre, edad) {
  let esValido = true;

  limpiarErrores(); // Borramos errores anteriores

  // Validar nombre
  if (nombre.trim() === "") {
    mostrarError('errorNombre', "El nombre no puede estar vacío");
    esValido = false;
  } else if (nombre.length < 3) {
    mostrarError('errorNombre', "El nombre debe tener al menos 3 letras");
    esValido = false;
  }

  // Validar edad
  if (edad === "" || isNaN(edad)) {
    mostrarError('errorEdad', "Debe ingresar un número");
    esValido = false;
  } else if (edad < 0 || edad > 100) {
    mostrarError('errorEdad', "La edad debe estar entre 0 y 100");
    esValido = false;
  }

  return esValido;
}
    