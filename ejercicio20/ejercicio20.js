/**
 *  Ejercicio 20
 *  Teniendo en cuenta que la clave es 'eureka, escribir un algoritmo
 *  que nos pida un array de claves por parametros y una contrasena.
 *
 *  Solo tendremos 3 intentos
 *  para aceptar, si fallamos, nos mostrara un mensaje por consola indicandonos que hemos agotado esos
 *  3 intentos. Si acertamos la clave, nos mostrara un mensaje por consola y saldra del programa. Si agotaramos
 *  los 3 intentos sin acertar, tambien nos mostrara un mensaje por consola y saldra
 *  del programa.
 */

// function adivinarContrasena(array, password) {
 
//   let intentos = 0;

//   while (intentos < 3) {
//     if (array == password) {
//       console.log("Contraseña correcta, bienvenido");
//       console.log(intentos);
//     } 
//       else {
//       console.log("Contraseña incorrecta, intentelo de nuevo");
//       intentos++;
//       console.log(intentos);
//     }
//     console.log("Has agotado tus intentos");
//     console.log(intentos);
//   }
// }

  // CON BUCLE FOR (TAMBIEN ME DA ERROR)
  function adivinarContrasena(array, password) { 
    
  for (let i = 0; i < array.length; i++) {
    if (array[i] == password){
      console.log("Contraseña correcta, bienvenido");
      return; // Sale del programa
    } 
    else  {
      console.log("Contraseña incorrecta, intentelo de nuevo");
    }
    }  
       console.log("Has agotado tus intentos");

  }
module.exports = { adivinarContrasena };

