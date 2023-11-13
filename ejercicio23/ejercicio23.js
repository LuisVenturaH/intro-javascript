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
 

function fechaIntroducida (dia, mes, ano) {

  if (ano <= 0 || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    console.log('Has introducido mal alguna parte de la fecha');
    return;
  } 

  let nombreMes = ""; 
  switch (mes) {
    case 1:
      nombreMes = "enero"; break;
    case 2:
      nombreMes ="febrero"; 
      if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        return `${dia} de ${nombreMes} del ${ano}`;
      } else {
        return dia <=28 ? `${dia} de ${nombreMes} del ${ano}` : 'Has introducido mal alguna parte de la fecha';
      }    
    case 3:
      nombreMes = "marzo"; break;
    case 4:
      nombreMes = "abril"; break;
    case 5:
      nombreMes = "mayo"; break;
    case 6:
      nombreMes = "junio"; break;
    case 7:
      nombreMes = "julio"; break;
    case 8:
      nombreMes = "agosto"; break;
    case 9:
      nombreMes = "septiembre"; break;
    case 10:
      nombreMes = "octubre"; break;
    case 11:
      nombreMes = "noviembre"; break;
    case 12:
      nombreMes = "diciembre";   break; 
    default:
      console.log('Has introducido mal alguna parte de la fecha');
      return;
} 

    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
      console.log("Has introducido mal alguna parte de la fecha");
      return;
    }

    return `${dia} de ${nombreMes} del ${ano}`
}

module.exports = { fechaIntroducida };
