/**
 *  Ejercicio 27
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */



function tablaNumero(numero) {
  let multiplicar = 0;
  numero = 5;
  for (let i = 0; i <= 10; i++) {
    multiplicar = numero * i;
    
  } return multiplicar;
}
 
module.exports = { tablaNumero };
