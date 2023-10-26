/**
 *  Ejercicio 5
 *  Construir un algoritmo que reciba un numero entero y retorne
 *  un string que nos indique si es positivo, negativo o nulo.
 *  Debes tener en cuenta la opcion de que no se introduzca un
 *  numero.
 */
let numero = 50;

function determinarTipoNumero(numero) {
if (numero > 0) {
      return "El numero es positivo";
   }
 else if (isNaN(numero)) {
    return "No has introducido un numero";
 }
 else if (numero == null) {
   return "El numero es nulo";
}
else {
    return "El numero es negativo";
 }
}

module.exports = { determinarTipoNumero };
