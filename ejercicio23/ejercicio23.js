/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */
 
let dia = 0;
let mes = 0;
let ano = 0;
function fechaIntroducida(dia, mes, ano) {
  
if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano <= 0) {
    return "Has introducido mal alguna parte de la fecha";
}
if (mes == 2) {
    if (ano % 4 == 0 & ano % 100 != 0 || ano % 400 == 0) { 
    return dia <= 29;
} 
    else { 
    dia <=28;
}
}
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    return dia <= 30;
  }
    return "Has introducido mal alguna parte de la fecha";
}

function nombreMes () {
switch (mes) {
    case 1:
      return "enero";
    case 2:
      return "febrero";
    case 3:
      return "marzo";
    case 4:
      return "abril";
    case 5:
      return "mayo";
    case 6:
      return "junio";
    case 7:
      return "julio";
    case 8:
      return "agosto";
    case 9:
      return "septiembre";
    case 10:
      return "octubre";
    case 11:
      return "noviembre";
    case 12:
      return "diciembre";
    default:
      return "Has introducido mal alguna parte de la fecha";      
}

}



module.exports = { fechaIntroducida };
