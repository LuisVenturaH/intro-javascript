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
 
function obtenerNombreMes (numero) {
  let nombreMes;  
switch (numero) {
    case 1:
      nombreMes = "enero";
    case 2:
      nombreMes ="febrero";
    case 3:
      nombreMes = "marzo";
    case 4:
      nombreMes = "abril";
    case 5:
      nombreMes = "mayo";
    case 6:
      nombreMes = "junio";
    case 7:
      nombreMes = "julio";
    case 8:
      nombreMes = "agosto";
    case 9:
      nombreMes = "septiembre";
    case 10:
      nombreMes = "octubre";
    case 11:
      nombreMes = "noviembre";
    case 12:
      nombreMes = "diciembre";    
} 
    return nombreMes;
}

const mes = obtenerNombreMes(numero);

function fechaIntroducida(dia, mes, ano) {
dia = 0;
ano = 0;
mes = 0;


if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano <= 0) {
    return "Has introducido mal alguna parte de la fecha";
} if (mes == 2) {
    if (ano % 4 == 0 & ano % 100 != 0 || ano % 400 == 0) { 
    return dia <= 29;
    } else { 
    dia <=28;
}
    }
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    return dia <= 30;
  }
    return `${dia} de ${nombreMes} del ${ano}`;
}



module.exports = { fechaIntroducida };
