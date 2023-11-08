/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */


function mediaArrayHastaMenosUno (array) {
  let media = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == -1) {
      break;
    }
    media += array[i];
    count++
  }
  return count == 0 ? 0: media / count;
}
module.exports = { mediaArrayHastaMenosUno };
