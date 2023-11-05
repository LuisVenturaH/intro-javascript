/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

  let array = [2, 4, 6, 8, 0, 1];
  let datos = { 
    average: 2,
    max: 3,
    min: 1, 
  };
  let average = array[0];
  let max = array[0];
  let min = array[0];
function maxMinAverageUntilZero() {

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      array[i] > max;
      max += array[i];
      datos.max = max;
    }
    return datos.max;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      array[i] < min;
      min += array[i];
      datos.min = min;
    }
    return datos.min;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      average = array[i] / array.length;
      datos.average = average;
    }
  }
  return datos.average;
} 

console.log(datos);



module.exports = { maxMinAverageUntilZero };
