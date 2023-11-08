/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */



function maxMinAverageUntilZero(array) {
  let nuevoArray = [];
  let suma = 0;
  let maximo = -Infinity;
  let minimo = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      break;
    }
    nuevoArray.push(array[i]);
    suma += array[i];
      if (array[i] > maximo) {
        maximo = array[i];
      }
      if (array[i] < minimo) {
        minimo = array[i];
      }
    }
    const media = suma / nuevoArray.length;
    
      const objeto = {
        average: media,
        max: maximo,
        min: minimo,
    }
    
    return objeto;

}


module.exports = { maxMinAverageUntilZero };
