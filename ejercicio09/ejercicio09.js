/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */
  
let nota1 = 5;
let nota2 = 5;
let nota3 = 5;
let nota4 = "f";
let nota5 = 5;



function notaMedia(nota1, nota2, nota3, nota4, nota5) {
let promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
    return "Debes introducir solo numeros. Intentalo de nuevo";
} 
  if (promedio >= 5) {
    return `${promedio} aprobado`;
  }
    else {
    return `${promedio} suspenso`;  
}
} 

module.exports = { notaMedia };
