/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */
  
function notaMedia (a, b, c, d, e) {
  let promedio = ((a + b + c + d + e)/5);

  if (isNaN(promedio)) {
    return "Debes introducir solo numeros. Intentalo de nuevo";
  }
  else if (promedio >= 5) {
    return `${promedio} aprobado`;
  }
  else {
    return `${promedio} suspenso`;
  }
}

module.exports = { notaMedia };
