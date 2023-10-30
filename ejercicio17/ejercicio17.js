/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */


function calcularSumaNumerosNaturales (n) {
  let suma = 0;
  for (i = 0; i <= n; i++) {
    suma += i;
  }
  return suma;
}

calcularSumaNumerosNaturales(5);
module.exports = { calcularSumaNumerosNaturales };
