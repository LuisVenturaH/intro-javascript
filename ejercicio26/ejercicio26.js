/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */


function cuboNumerosArray(array) {
  let cubo = 0;
  for (let i = 0; i < array.length; i++) {
    cubo = array[i] ** 3; // Es lo mismo que array[i] * array[i] * array[i];
    return `El cubo de ${array[i]} es ${cubo}`
  }

}

module.exports = { cuboNumerosArray };
