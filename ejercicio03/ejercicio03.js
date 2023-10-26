/**
 *  Ejercicio 3
 * Algoritmo que lea tres numeros y nos retorne el mayor o que, en caso de serlo,
 * nos retornara un string que diga iguales.
 * Recuerda usar la estructura condicional If.
 */

   let num1 = 1;
   let num2 = 2;
   let num3 = 3;

function compareThreeNumbers(num1, num2, num3) {

   if (num1 == num2 && num2== num3) {
      return "iguales";
     }
     else if (num1 > num2 && num1 > num3) {
      return num1;
     }
     else if (num2 > num3) {
      return num2;
     }
     else {
      return num3;
     }
}



//npm test  ejercicio03/ejercicio03.test.js

module.exports = { compareThreeNumbers };
