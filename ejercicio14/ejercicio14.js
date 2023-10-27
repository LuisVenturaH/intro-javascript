/**
 *  Ejercicio 14
 *  Construir un algoritmo que resuelva el problema que tienen unos surtidores
 *  de gasolina, que registran lo que surten en galones, pero el precio de la
 *  gasolina se fija en litros. El algoritmo debe calcular y retornar el precio
 *  que hay q cobrarle al cliente.
 *
 *  Precio gasolina = 1.333 euros / litro
 *  1 galon = 3,78541 litros
 */

let LitroGas = 1.333;
let galonGas = 1.333*3.78541; 
let suministro = 40;

function precioEnLitros(suministro) {
  let aCobrar = galonGas * suministro;
  return aCobrar;
  
}

module.exports = { precioEnLitros };
