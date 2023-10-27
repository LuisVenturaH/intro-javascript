/**
 *  Ejercicio 16
 *  Desarrollar un algoritmo que nos calcule el cuadrado de los 9
 *  primeros numeros naturales. La funcion debera retornar un array
 *  con el resultado de estos nueve numeros ([1,4,9...])
 */


function cuadraroNumerosNaturales() {
  let numerosNat = [];             // Creo una variable para almacenar los elementos del array
  for (let i=0; i <= 9; i++) {    // Creo un bucle for para recorrer los numeros del 0 al 9. Incio en 0 y termino en 9 inlcusive
    let cuadrado = i * i;         // Creo una varable para almacenar los cuadrados del for
    numerosNat.push(cuadrado);     // Agreago los numeros del cuadrado dentro del array con el metodo push, que sirve para 
}                                 // incluir elementos dentro de un array

return numerosNat;
  
}

module.exports = { cuadraroNumerosNaturales };
