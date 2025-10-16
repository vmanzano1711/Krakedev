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
////paso 3
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
////paso 4
function agregarPersona() {
  // Obtener los valores del formulario
  let nombre = document.getElementById('txtNombre').value;
  let edad = parseInt(document.getElementById('txtEdad').value);

  // Validar datos
  if (!validar(nombre, edad)) {
    return; // Si hay error, no sigue
  }

  // Crear objeto persona
  let nuevaPersona = { nombre: nombre, edad: edad };

  // Agregar al arreglo
  personas.push(nuevaPersona);

  // Limpiar campos
  document.getElementById('txtNombre').value = "";
  document.getElementById('txtEdad').value = "";

  // Actualizar tabla
  mostrarTabla();

  document.getElementById('resultado').textContent = "Persona agregada correctamente.";
}
//////////paso 5

function encontrarMayor() {
  // Empezamos suponiendo que la primera persona es la mayor
  let personaMayor = personas[0];

  // Recorremos el resto del arreglo
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > personaMayor.edad) {
      personaMayor = personas[i];
    }
  }

  return personaMayor;
}
/////parte 6

function determinarMayor() {
  let mayor = encontrarMayor();
  document.getElementById('resultado').textContent =
    "La persona mayor es: " + mayor.nombre + " con " + mayor.edad + " años.";
}
