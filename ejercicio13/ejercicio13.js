/** Ejercicio 13
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    La funcion debera retornar un string que diga La superficie es de 'x' o El perimetro es de 'x'
 */

function calcularPerimetro (base, altura) {
  let perimetro = 2 * (base + altura);
  return `El perimetro es de ${perimetro}`;
}

function calcularSuperficie (base, altura) {
  let superficie = base * altura;
  return `La superficie es de ${superficie}`;
}








//     let b = 4;
//     let h = 5;
//     let superficie = b * h;
//     let perimetro = 2 * (b + h);

// function calcularPerimetro(b, h) {
//   return `El perimetro es de ${perimetro}`;
// }

// function calcularSuperficie(b, h) {
//   return `La superficie es de ${superficie}`;
// }






module.exports = { calcularPerimetro, calcularSuperficie };
