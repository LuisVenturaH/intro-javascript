/**
 *  Ejercicio 32
 * El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
 * capaz de leer el numero de unidades consumidas de cada alimento ordenado y
 * calcular la cuenta total. Vamos a suponer que los precios son fijos, es decir,
 * que son constantes.
 *
 * Bocadillo de jamon: 1,5e
 * Refresco 1,05e
 * Cerveza: 0,75e
 * Pan: 2e
 *
 * Debera retornar un string que diga lo siguiente: `El precio total es de X`
 */

function menuRestaurante(bocadillo, refresco, cerveza, pan) {

let precioBocadillo = 1.5;
let cantidadBocadillo = bocadillo * precioBocadillo;
let precioRefresco = 1.05;
let cantidadRefresco = refresco * precioRefresco;
let precioCerveza = 0.75;
let cantidadCerveza = cerveza * precioCerveza;
let precioPan = 2;
let cantidadPan = pan * precioPan;
let precioTotal = cantidadBocadillo + cantidadRefresco + cantidadCerveza + cantidadPan;

return `El precio total es de ${precioTotal}`;
}

module.exports = { menuRestaurante };

