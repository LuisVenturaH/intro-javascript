/**
 *  Ejercicio 15
 *  Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
 *  la funcion te vuelva a pedir que introduzcas otro numero.

             *  Ejercicio 6
             *  Crea un algoritmo que reciba un numero y determine si,
             *  el numero es 0, el numero es par o el numero es impar.
             */


function parImparNulo (a) {
  while (a == 0) {
    return "Introduce otro numero";
  }
    if (a % 2 == 0) {
      return "El numero es par";
    }
    else {
      return "El numero es impar";
    }
}

module.exports = { parImparNulo };


