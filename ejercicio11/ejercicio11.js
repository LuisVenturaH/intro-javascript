/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */

function descuentoCompra(monto) {
  if (monto < 500) {
    return monto;
  }
  else if (monto > 500.01 && monto <= 1000) {
    monto = monto * 0.95;
    return monto;
  }
  else if (monto > 1000.01 && monto <= 7000) {
    monto = monto * 0.90;
    return monto;
  }
  else if (monto > 7000.01 && monto <=15000){
    monto = monto * 0.80;
    return monto;
  }
  else {
    monto = monto * 0.75;
    return monto;
  }
}

module.exports = { descuentoCompra };
