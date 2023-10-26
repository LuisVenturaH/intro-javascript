/**
 *  Ejercicio 4
 *  Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 *  es negativo, retorne el producto de los 3, si no lo es, retornara
 *  la suma. Si no se introducen tres numeros validos, retornara un string
 *  que diga Has introducido uno o varios caracteres no validos
 */
let num1 = 5;
let num2 = "lk";
let num3 = 1;

function sumOrMultiply(num1, num2, num3) {
 if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    return "Has introducido uno o varios caracteres no validos";
 } 
    else if (num1 < 0) {
    return num1 * num2 * num3;
 }
 else {
 return num1 + num2 + num3;
  }
    
}

module.exports = { sumOrMultiply };
