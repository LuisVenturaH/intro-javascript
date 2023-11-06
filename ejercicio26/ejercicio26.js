/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

let array = [1, 2, 3, 4, 5];
let cubo = 0;
function cuboNumerosArray() {
  for (let i = 0; i < array.length; i++) {
    cubo = array[i] * array[i] * array[i];
    return `El cubo de ${array[i]} es ${cubo}`
  }
  
}

module.exports = { cuboNumerosArray };
