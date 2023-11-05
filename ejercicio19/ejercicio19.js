/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

  function mediaArrayHastaMenosUno(indefinido) {
    let suma = 0;
    let count = 0;
    for (let i = 0; i < indefinido.length; i++) {
      if (indefinido[i] == -1) {
        break;
      }
      suma += indefinido[i];
      count++;
    } 
    return count == 0 ? 0: suma / count; // Es una forma abreviada de un if else
 }













// function mediaArrayHastaMenosUno(indefinido) {
//     let suma = 0;
//     let contador = 0;
    
//   for (let i = 0; i < indefinido.length; i++) {
//     if (indefinido[i] == -1) {
//      break;
//     }
//     suma += indefinido[i];
//     contador++;  
   
//   } 
//      return suma / contador;
  
//   }

// mediaArrayHastaMenosUno([6, 6, 6, 6, -1]);
module.exports = { mediaArrayHastaMenosUno };
