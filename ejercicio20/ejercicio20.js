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


function adivinarContrasena(array, password) {
 
  // let intentos = 1;

  // while (intentos <= 3) {
  //   if (array == password) {
  //     console.log("Contraseña correcta, bienvenido");
  //     return; // Para salir del programa
  //   } else {
  //     console.log("Contraseña incorrecta, intentelo de nuevo");
  //     intentos++;
  //   }
  //   console.log("Has agotado tus intentos");
  //   return; // Para salir del programa
  // }


  // CON BUCLE FOR (REPARAR, ME DA ERROR)
  for (let i = 0; i < array.length; i++) {
    if (array[i] != password){
      console.log("Contraseña incorrecta, intentelo de nuevo");
    } 
    else  {
      console.log("Contraseña correcta, bienvenido");
      return; // Sale del programa
    }  
       console.log("Has agotado tus intentos");
       return;
    }
  } 

module.exports = { adivinarContrasena };
