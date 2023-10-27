/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.

             *  Ejercicio 6
             *  Crea un algoritmo que reciba un numero y determine si,
             *  el numero es 0, el numero es par o el numero es impar.
             */


let numero = 3;

function parImparNulo(numero) {

while (numero == 0) {
  return "Introduce otro numero";
}
  if (numero % 2) {
      return "El numero es impar";}
  else {
    return "El numero es par";
 }
}

module.exports = { parImparNulo };


