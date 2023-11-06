/**
 *  Ejercicio 25
 *  Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.
 *  Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
 *  Ejemplo, para lado = 4 escribiría:
 *  * * * *
 *  *     *
 *  *     *
 *  * * * *
 *  Recuerda la estructura repetitiva For.
 *
 *  La funcion debera retornar cada linea + un espacio en blanco '\n';
 */


function crearCuadrado(lado) {
  if (lado <= 0) {
    return;
  }

  for (let i = 1; i <= lado; i++) {
    let linea = "";
    for (let j = 1; j <= lado; j++) {
      if (i == 1 || i == lado || j == 1 || j == lado) {
        linea = "* ";
      }
      else {
        linea += " ";
      }
    }
    console.log(linea);
  }

}


module.exports = { crearCuadrado };
