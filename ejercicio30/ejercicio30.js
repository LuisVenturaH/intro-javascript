/**
 *  Ejercicio 30
 *  Escribir un algoritmo para cada apartado que retorne un triangulo como los mostrados
 *  a continuacion hasta un numero de filas introducidos por teclado. 
 * El algoritmo recibira el numero de filas por parametros.
 *  Si ponemos 4 los triangulos serán asi:
 *
 *  a) 1
 *     12
 *     123
 *     1234
 *
 * b) 1
 *    22
 *    333
 *    4444
 *
 * c) 1
 *    23
 *    456
 *    78910
 *
 *  Recuerda la concatenacion y el uso de espacios en blanco (\n)
 */

// Apartado A --------------------------------------------------------------------------

function trianguloConsola(filasA) {
  let triangulo = "";
  
  for (let i = 1; i <= filasA; i++) {
    for (let j = 1; j <= i; j++) {
    triangulo += j;
    } 
    triangulo += '\n';
   } 
  return triangulo;
 
}

// Apartado B --------------------------------------------------------------------------
function trianguloConsolaB(filasB) {
  let triangulo = "";
    for (let i = 1; i <= filasB; i++) {
      for (let j = 1; j <= i; j++){
        triangulo+= i;
      }
       triangulo += '\n'
  }
  return triangulo;
 
}

// Apartado C --------------------------------------------------------------------------
// ME DA ERROR. CORREGIR
function trianguloConsolaC(filasC) {
  let triangulo = "";
  let numero = 1;

  for (let i = 1; i <= 4; i++) {
    if (i % 2 == 0) {
      for (let j = 1; j > 0; j--){
        triangulo += numero;
        numero++
      }
    }
    else {
        for (let j = 1; j <= i; j++) {
          triangulo += numero;
          numero++;
        }
       
      } 
       triangulo += '\n';
    }
    console.log(triangulo);
      
  }
 



module.exports = { trianguloConsola, trianguloConsolaB, trianguloConsolaC };
