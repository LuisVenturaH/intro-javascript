/**
 *  Ejercicio 6
 *  Crea un algoritmo que reciba un numero y determine si,
 *  el numero es 0, el numero es par o el numero es impar.
 *  Pista: para determinar el resto de una división, se usa la operación módulo %.
 */

let numero = 3;

function parImparNulo(numero) {
   if (numero % 2) {
      return "El numero es impar";
   }
   else if (numero == 0) {
    return "El numero es 0";
 }
 else {
    return "El numero es par";
 }
}

module.exports = { parImparNulo };
