/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */
let sueldo = 1000;
let categoria = 0;
// let cat1 = sueldo;
// let cat2 = sueldo;
// let cat3 = sueldo;
// let cat4 = sueldo;

function nuevoSalario(sueldo, categoria) {
  
 if (categoria == 1) {
    return sueldo * 1.15;
  }
  else if (categoria == 2) {
    return sueldo * 1.10;
  }
  else if (categoria == 3) {
    return sueldo * 1.06;
  }
  else if (categoria == 4) {
    return sueldo * 1.03;
  }
  else {
    return sueldo;
  }
}

module.exports = { nuevoSalario };
