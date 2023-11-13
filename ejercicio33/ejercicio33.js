/**
 *  Ejercicio 33
 * Crear un algoritmo que reciba un array de tamaño 10 y que imprima cada indice
 * junto con el valor al que corresponda. Debera retornarlo de esta forma:
 *  `El indice es X y su valor es Y`
 */

function arrayIndex(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    return `El indice es ${i} y su valor es ${array[i]}`
  }
}


module.exports = { arrayIndex };

