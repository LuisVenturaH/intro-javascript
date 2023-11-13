function adivinarContrasena(array, password) { 
  let count = 1;
  password = "eureka";
  array = ["hola", "hola", "eureka"];
for (let i = 0; i < array.length; i++) {
  if (array[i] == password){
    console.log("Contraseña correcta, bienvenido");
    console.log(count);
    return; // Sale del programa
  } 
  else  {
    console.log("Contraseña incorrecta, intentelo de nuevo");
    console.log(count);
    count++;
  }  
     console.log("Has agotado tus intentos");
     console.log(count);
     break;
  }
}