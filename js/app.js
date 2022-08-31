const suma  = (a,b) => a + b
const resta = (a,b) => a - b
let precio  = Number(prompt("ingrese precio del producto"))
let descuento = Number(prompt("ingrese el descuento"))
const iva   = precio * 0.19
let nuevoPrecio = resta(suma(precio, iva), descuento) 
console.log("El precio del producto con iva mas el descuento es:", nuevoPrecio)



























