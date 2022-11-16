// 1.Crea un array que contenga el nombre de cinco colores escritos como strings.

let colores = ["rojo", "verde", "azul", "violeta", "naranja"];

// 2.Guarda en una variable el tercer elemento del array del ejercicio anterior.

let color = colores[2];

// 3.Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.

console.log(colores[0].charAt(0));

// 4.Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().

// Esta funcion genera numero aleatorio entre 1 a 99 pero retorna un numero flotante pero si usamos floor() podemos redondearlos
function generarNumeroAleatorio(min, max) {
  var numeroAleatorio = Math.random() * (max - min) + min;
  return numeroAleatorio;
}
console.log(generarNumeroAleatorio(1, 99));
console.log(Math.random(5));

// Arrow function
let numeroAleatorio = (min, max) => Math.random() * (max - min) + min;
console.log(numeroAleatorio(1, 99));

// Esta devuelve numeros enteros

function devolverNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(devolverNumeroAleatorio(1, 99));

// Arrow Function
let getNumeroAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
console.log(getNumeroAleatorio(1, 99));

// 5.Rellena un array con los números del 1 al 10. Muéstralo por la consola.

let numeros1al10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros1al10);

// Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.

let NumerosAleatorios = [];
for (var i = 0; i <= 9; ++i) {
  NumerosAleatorios.push(getNumeroAleatorio(1, 99));
}

console.log('Array NumerosAleatorios: ', NumerosAleatorios);

// Función para ingresar que permitirme ingresar determinado numero de numeros aleatorios a un array seleccionado.
let NumerosAleatorios3 = [];

function ingresarNumerosAleatorios(numero, array) {
  for (var i = 0; i <= numero - 1; ++i) {
    array.push(getNumeroAleatorio(1, 99));
  }
}

ingresarNumerosAleatorios(10, NumerosAleatorios3);
console.log("Array NumerosAleatorios3: ", NumerosAleatorios3);

// Arrow function
let NumerosAleatorios4 = [];
let ingresarNumerosAleatorios2 = (numero, array) => {
  for (var i = 0; i <= numero - 1; ++i) {
    array.push(getNumeroAleatorio(1, 99));
  }
};

ingresarNumerosAleatorios2(20, NumerosAleatorios4);
console.log("Array NumerosAleatorios4: ", NumerosAleatorios4);


// 7.Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.

let copiaNumerosAleatorios = NumerosAleatorios.slice();

console.log("Copia del array de NumerosAleatorios: ", copiaNumerosAleatorios);

let segundaCopiaNumerosAleatorios = [].concat(NumerosAleatorios);
console.log("Segunda copia del array de NumerosAleatorios: ", segundaCopiaNumerosAleatorios);

//8.Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con 
//“cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad,
// pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.


//8.Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con 
//“cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad,
// pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio.

    // VERSION 1 !!!!!

    // var cadenaString = "";
    // do {   
    //     var stringIngresado = prompt("Introduce una string"); 
    //     if (cadenaString == "") {  
    //         cadenaString =  cadenaString + stringIngresado;
    //     }
    //     if (stringIngresado == "cancelar"){
    //         break;
    //     }
    //     else {     
    //         cadenaString = cadenaString + "-" + stringIngresado;
    //     }  
    // } while (confirm("Desea seguir?"));

    // document.write(cadenaString);


// VERSION 2 CON ARRAY  !!!!!!!!

    // var conjuntoString = [];

    // do {   
    //     var string = prompt("Introduce una string");    
    //     if (string == "cancelar"){
    //         break;
    //     }
    //     else {     
    //         conjuntoString.push(string);
    //     }  
    // } while (confirm("Desea seguir?"));

    // for (x =0 ; x<conjuntoString.length; x++){
    //     document.write(conjuntoString[x].toString() + "-");
    // }






