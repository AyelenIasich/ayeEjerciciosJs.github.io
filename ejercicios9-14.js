//9.Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
//convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
// Mostrar el resultado  elemento de html.

var dolar = 300;

function mostrar(clase) {
  let div = document.getElementById(clase);
  div.style.display = "";
}

function convertirDolarAPeso() {
  var valor = parseInt(document.getElementById("montoIngresado").value);
  var resultado = 0;
  resultado = valor * dolar;
  var text = "El cambio de dolar a pesos argentino es de: $" + resultado;
  mostrar("alert-peso");
  document.getElementById("resultado").innerHTML = text;
}

// 10.Generar la inversa del ejercicio anterior (de pesos a dólares).

function convertirPesoADolar() {
  var valorIngresado = parseInt(
    document.getElementById("dolarIngresado").value
  );
  var resultadoDolar = (valorIngresado / dolar).toFixed(4);
  var textMostrar =
    "El cambio de pesos argentino a dolares es de: $" + resultadoDolar;
  mostrar("alert-dolar");
  document.getElementById("resultadoDolar").innerHTML = textMostrar;
}

// Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberá multiplicar.
//  por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.

function centrigradosAFahrenheit() {
  let valor = parseInt(document.getElementById("centigrados").value);
  let resultado = (valor * 9) / 5 + 32;
  let text = valor + " centigrados equivale a " + resultado + " Faherenheit.";
  mostrar("alert-fa");
  document.getElementById("resultadoFahrenheit").innerHTML = text;
}

// 13. A través de un formulario, el usuario debe introducir un número secreto que estará entre 0 y 5.
// El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el juego.
// Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.

let generarNumeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let numeroAleatorioJuego = generarNumeroAleatorio(0, 5);

const intentos = document.querySelector(".intentos");
const resultado = document.querySelector(".resultado");
const numeroRandom = document.querySelector(".numero-random");

const enviarRespuesta = document.querySelector(".enviarRespuesta");
const adivinarCampo = document.querySelector(".adivinarCampo");

let contadorIntentos = 1;
const resetButton = document.querySelector(".resetButton");

function adivinarNumero() {
  let usuarioIntento = Number(adivinarCampo.value);
  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += usuarioIntento + " - ";

  if (usuarioIntento === numeroAleatorioJuego) {
    resultado.textContent =
      "¡Felicitaciones sos super crack!, adivinaste el numero";
    resultado.style.backgroundColor = "#5dc460";
    setGameOver();
  } else if (contadorIntentos === 3) {
    resultado.textContent = "Lo siento, perdiste";    
    numeroRandom.textContent = "El número correcto es: " + numeroAleatorioJuego;
    setGameOver();
  } else {
    resultado.textContent = "¡Incorrecto!, intentalo de nuevo";
    resultado.style.backgroundColor = "#e2504c";
  }
  contadorIntentos++;
  usuarioIntento.value = "";
  usuarioIntento.focus();
}

function setGameOver() {
  enviarRespuesta.disabled = true;
  enviarRespuesta.disabled = true;
  resetButton.disabled = false;
}

function resetGame() {
  contadorIntentos = 1;

  const resetResultados = document.querySelectorAll(".resultados p");
  for (let i = 0; i < resetResultados.length; i++) {
    resetResultados[i].textContent = "";
  }
  resetButton.disabled = true;
  adivinarCampo.disabled = false;
  enviarRespuesta.disabled = false;
  adivinarCampo.value = "";
  adivinarCampo.focus();

  resultado.style.backgroundColor = "white";

  numeroAleatorioJuego = generarNumeroAleatorio(0, 5);
}

// ==================Formulario de envio de caja ==========================

const respuesta = document.querySelector(".respuesta");


var validarNombre = function (e) {
  if (formulario.nombre.value == 0) {
    alert("El nombre es requerido");
    e.preventDefault();
  }
};

var validarRadio = function (e) {
  if (
    formulario.dimensiones[0].checked == true ||
    formulario.dimensiones[1].checked == true ||
    formulario.dimensiones[2].checked == true
  ) {
  } else {
    alert("Selecciona un tipo de dimension para la caja");
    e.preventDefault();
  }
};

var validarTextArea = function (e) {
  if (formulario.comentario.value == 0) {
    alert("El comentario es un campo requerido");
    e.preventDefault();
  }
};
var validar = function (e) {
  validarNombre(e);
  validarRadio(e);
  validarTextArea(e);
};

function obtenerDatos() {

  validar();

  var formulario = document.getElementById("formulario");
  var nombre = formulario.nombre.value;
  var material = formulario.material.value;
  var dimensiones = formulario.dimensiones.value;
  var comentario = formulario.comentario.value;

  respuesta.textContent =
    nombre +
    " ha pedido una caja de " +
    material +
    " con una dimensión " +
    dimensiones +
    ". " +
    comentario;
}


//14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista desordenada a medida que se agregan.
// Lista de nombres 

const nombre =  document.getElementById('listaNombre');
const btnNombre = document.querySelector('.btn-nombre');
const ul = document.querySelector("ul");

function validarListaNombre(e){ 
    if (nombre.value == 0) {
      alert("El nombre es requerido");
      e.preventDefault();
    } 
};

btnNombre.addEventListener("click",(e) => { 
  validarListaNombre();
  e.preventDefault();
  const nombreIngresado = nombre.value;
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = nombreIngresado;
  li.appendChild(p);
  ul.appendChild(li);
})