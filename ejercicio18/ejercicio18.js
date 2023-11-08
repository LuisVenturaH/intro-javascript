/**
 *  Ejercicio 18
 *  Se pide representar un algoritmo que nos calcule la suma de los N primeros numeros
 *  pares a partir de N, recibida en los parametros de la funcion. Es decir,
 *  si le pasamos 5 a la funcion, nos hara la suma de 6+8+10+12+14.
 *
 *  La funcion retornara la suma
 */

function sumaNPrimerosNumerosPares(N) {
let suma = 0;
let count = 0;
for (let i = N; count < N; i++ ) {
  if (i % 2 == 0) {
    suma += i;
    count++;
  }
}
return suma;
}

/* OPCION DE LUCAS
function sumaNPrimerosNumerosPares(n) {
  let suma = 0;
  let contador = 0;
  let i = n;
  while (contador < n) {
    if (i % 2 == 0) {
      suma += i;
      contador++;
    }
    i++;
    //return `contador es ${contador}, i es ${i} y suma es ${suma}`
  }
  return suma;
}
*/ 

/*

OPCION ISRAEL
  const N 10 11;
 let suma = 0;
 
 for (let i=0; i <N; i++) {
 suma += N + (N % 2) + (i * 2);
}
 
 */


module.exports = { sumaNPrimerosNumerosPares };
