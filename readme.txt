// Aqui voy a mencionar las variables
/*
let nombreAlumno = "Mateo"; // string
console .log(nombreAlumno);
let edad = 20; //number
console .log(edad);
let estudiante = true; // boolean
console .log(estudiante);


const apellido = "Prieto"; //
console.log(apellido);
*/

//diferencia entre Let y Const

//let
//pueden inicializarse vacias
//pueden ser redeclaradas
/*
let nombre;
nombre="coder"
nombre= "house"
nombre="37"
console.log(nombre)
*/

//const
//deben ser declaradas con valor
//no pueden ser redeclaradas
/*
const NOMBRE ="coder"
const NOMBRE ="house"
console.log(NOMBRE);
*/
/*
let nombre="Mateo"
let apellido="Prieto"
console.log(nombre + " " + apellido);
*/

//-
//+
// /
// *
/*
let numero1= 25
let numero2=35
let resultado = numero1 + numero2
console.log(resultado);
*/

//prompt
/*
let nombre =prompt("ingrese su nombre")
alert("Hola"+ " " + nombre)
*/
/*
let numero1 = prompt("Ingresa el primer numero")
let numero2 = prompt("Ingresa el segundo numero")

let resultado = parseInt (numero1) + parseInt(numero2) 
alert(resultado)*/
/*
if (condicion) {
    //bloque verdadero
} else{
    //bloque falso
}*/
/*
const puntaje = "1000";

if (puntaje === 1000) {
    console.log("es igual")
} else {
    console.log("no es igual")
}
*/
/*
const dinero = 300
const totalApagar= 500
const tarjeta = true

if (dinero > totalApagar) {
    console.log("podemos pagar")
} else if(tarjeta){
    console.log("tarjeta")
}else{
    console.log("no")
}
*/

//switch
/*
const metodoPago = "tarjeta"

switch (metodoPago) {
    case "Efectivo":
        console.log("Pagaste en efectivo")
        break;
    case "cheque":
        console.log("pagaste con cheque");
        break;
    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;
    default:
        console.log("metodo de paga no aceptado")
        break;
}
*/
/*
const usuario = false
const puedePagar = true

if (true && puedePagar) {
    console.log("puedes comprar")
} else if(!usuario && !puedePagar){
    console.log("no puedes comprar")
}else if(!usuario){
    console.log("no puedes comprar")
}else if(!puedePagar){
    console.log("no puedes comprar")
}
*/
/*
const efectivo = 300
const credito = 400
const disponible = efectivo + credito
const totalPagar = 600
if (
    efectivo > totalPagar || 
    credito > totalPagar || 
    disponible > totalPagar
) {
    console.log("podemos comprar")
}else {
    console.log("fondos insuficientes")
}
*/
/*
let nombreAlumno = prompt("ingresa el nombre del alumno")
let apellidoAlumno = prompt("Apellido")
console.log(nombreAlumno + " " + apellidoAlumno)

if (nombreAlumno !== "" && apellidoAlumno !==  "") {
    alert("nombre: " + nombreAlumno + " apellido " + apellidoAlumno)

}else{
    alert("no ingreso datos")
}
*/
/*
let food = prompt("Que se te anotoja?")

switch (food) {
    case "hamburguesa":
        console.log(`Pedido: ${food}, valor $1200`)
        break;
    case "pizza":
        console.log(`Pedido: ${food}, valor $900`)
        break;
    case "lomo":
        console.log(`Pedido: ${food}, valor $800`)
        break;
    default:
        console.log("Te ahorras unos pesos si no pedis")
        break;
}
*/
/*
*/
/*
let x = 0;

while (x <= 10) {
    console.log(`El valor de x es ${x}`);
    x++;
}
*/
/*
let entrada = prompt("ingrese un texto o esc para intrerrumpir")
let texto = " "

while (entrada != "esc" && entrada != "ESC"){
    texto += entrada + " "
    entrada = prompt("ingrese un texto o esc para intrerrumpir")
    
}
alert(texto)
*/
/*
let y = 0;

do {
    console.log(`El valor de Y es ${y}`)
    y++
} while (y <= 10);
*/
/*
let x = 25;

do {
    console.log(x)
    x++
} while (x < 30);
*/
/*
for (let i = 0; i < 10; i++) {
    alert(`El valor de y es ${i}`)
}
*/
/*
let numero = Number(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    alert(`${numero} x ${i} = ${resultado}`)
}
*/
/*
for (let i = 1; i <= 10; i++) {
    if (i===6) {
        break
    }
    alert(`El valor de I es ${i}`)
}
*/
/*
for (let i = 1 i <= 10; i++) {
    if(i===6){
        continu
    }
    alert(`El valor de I es ${i}`)

*/
/*
function solicitarNombre() {
    let nombre = prompt("ingrese su nombre")
    console.log(`El nombre del usuario es ${nombre}`)
}
solicitarNombre()
*/
/*
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero
    return resultado
}
console.log(sumar(1, 3))
*/
/*
let numero1 = Number (prompt ("ingrese un numero"))
let numero2 = Number (prompt ("ingrese otro numero"))

function suma(numero1, numero2) {
    return numero1 + numero2
}
let resultado = suma(numero1, numero2)
console.log(resultado)
*/
/*
function saludar (nombre = "desconocido", apellido= " "){
    console.log(`hola ${nombre} ${apellido}`)
}
saludar("coder", "house")
*/
/*
let primerNumero = Number(prompt("Ingrese el primer numero"))
let segundoNumero = Number(prompt("Ingrese el segundo numero"))
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero
            break;
            case "-":
                return primerNumero - segundoNumero
                break;
                case "*":
                    return primerNumero * segundoNumero
                    break;
                    case "/":
                        return primerNumero / segundoNumero
                        break;
                        default:
                            return 0
                            break;
                        }
                    }
console.log(calculadora(primerNumero, segundoNumero, "+"))
*/
/*
                   // variable global vs variable local
                   //variable global
let mensaje = "Mensaje de prueba"
function crearMensaje() {
}
console.log(mensaje)
//variable local
function crearMensaje() {
    let mensaje = "Mensaje de prueba"
}
console.log(mensaje)
*/
/*
iniciarApp()
function iniciarApp() {
    console.log("Iniciando app...")

    segundaFunction()
}
function segundaFunction() {
    console.log("desde la segunda funcion")

    usuarioAutenticado()
}
function usuarioAutenticado() {
    console.log("autenticando")
    console.log("usuario autenticado exitoso")
}
*/
/*
const aprendiendo = () => "jaja"

console.log(aprendiendo())
*/
/*
const saludo = function () {
    return "hola"
}

console.log(saludo())
*/
/*
let producto = function (a, b) {
    return a * b
}
let resultado = producto(3, 6)
console.log(resultado)
*/

//crud
// create - read - update - delete
const nombre = "Monitor de 24 pulgadas"
const precio = 500
const disponible = true
console.log(disponible)///////

const producto = {
    nombre : "Monitor de 24 pulgadas",
    precio : 500,
    disponible : true
}
//producto.imagen = "imagen.jpeg" //create
//delete producto.disponible //delete
//destructuring
const {nombre, precio, disponible}= producto
producto.disponible = false //update
console.log(producto) //read

//objet constructor
//importante
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio 
    this.disponible = true
}
const producto2 = new Producto ("teclado", 1000)
const producto3 = new Producto ("microfono", 2000)
console.log(producto2, producto3)
//importante
//metodos por defecto
let cadena = "HOLA ALUMNOS"
console.log(cadena.toLowerCase())
let cadena1 = "HOLA ALUMNOS"
console.log(cadena1.length)
let text = "manzana, banana, kiwi"
let newText = text.replace("manzana", "pera")
console.log(newText) 
//metodos personalizados

function clientes(nombre, edad, domicilio) {
    this.nombre = nombre
    this.edad = edad
    this.domicilio = domicilio 
    this.saludar = function () {
        console.log("Saludos " + this.nombre +" "+ this.edad)
    }
}
const cliente1 = new clientes("coder",26,"marcelo t alvear")
const cliente2 = new clientes("mateo",20,"marcelo t alvear")

cliente1.saludar()
cliente2.saludar()
//declaraciones de clases

class Cliente{
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
}
const coderhouse = new Cliente("coder", "accepted")
console.log(coderhouse)
//metodos
class usuario{
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
    mostrarinfodeacceso(){
        return `usuario ${this.nombre}, tu acceso es ${this.acceso}`
    }
}
const coderhouse = new usuario ("mateo", "aceptada")
console.log(coderhouse.mostrarinfodeacceso())
*/
/*
let numero = Number(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++) {
    let tabla = numero ** i
    alert(`${numero} x ${i} = ${tabla}`)
}
//crud
// create - read - update - delete
const nombre = "Monitor de 24 pulgadas"
const precio = 500
const disponible = true
console.log(disponible)///////

const producto = {
    nombre : "Monitor de 24 pulgadas",
    precio : 500,
    disponible : true
}
//producto.imagen = "imagen.jpeg" //create
//delete producto.disponible //delete
//destructuring
const {nombre, precio, disponible}= producto
producto.disponible = false //update
console.log(producto) //read

//objet constructor
//importante
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio 
    this.disponible = true
}
const producto2 = new Producto ("teclado", 1000)
const producto3 = new Producto ("microfono", 2000)
console.log(producto2, producto3)
//importante
//metodos por defecto
let cadena = "HOLA ALUMNOS"
console.log(cadena.toLowerCase())
let cadena1 = "HOLA ALUMNOS"
console.log(cadena1.length)
let text = "manzana, banana, kiwi"
let newText = text.replace("manzana", "pera")
console.log(newText) 
//metodos personalizados

function clientes(nombre, edad, domicilio) {
    this.nombre = nombre
    this.edad = edad
    this.domicilio = domicilio 
    this.saludar = function () {
        console.log("Saludos " + this.nombre +" "+ this.edad)
    }
}
const cliente1 = new clientes("coder",26,"marcelo t alvear")
const cliente2 = new clientes("mateo",20,"marcelo t alvear")

cliente1.saludar()
cliente2.saludar()
//declaraciones de clases

class Cliente{
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
}
const coderhouse = new Cliente("coder", "accepted")
console.log(coderhouse)
//metodos
class usuario{
    constructor(nombre, acceso){
        this.nombre = nombre
        this.acceso = acceso
    }
    mostrarinfodeacceso(){
        return `usuario ${this.nombre}, tu acceso es ${this.acceso}`
    }
}
const coderhouse = new usuario ("mateo", "aceptada")
console.log(coderhouse.mostrarinfodeacceso())
*/
//Arrays
/*
const numero = [1, 2, 3, 4, 5, 6]
for (let i = 0; i <5; i++) {
    alert(numero[i])
}
console.log(arrayA.length)
const arrayA = ["marca", 3, "palabra"]
//Metodos
//Agregar valores
arrayA.push("otro elemento")
//AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY
arrayA.unshift("otro elemento mas")
console.log(arrayA)

//Eliminar elementos
const nombre = ["mateo","laura"]
//nombre.pop() elimina el ultimo
//nombre.shift() elmina el primero
console.log(nombre)

//splice
const nombre = ["mateo", "coder", "laura", "fernando"]
nombre.splice(0, 3)
console.log(nombre)

//concat
const alumnos = ["ale", "sala", "cristian"]
const tutores = ["dario", "rodrigo"]
const presentes = alumnos.concat(tutores)
console.log(presentes)

//join
const alumnos = ["ale", "sala", "cristian"]
const presentes = alumnos.join("++")
console.log(presentes)

//slice
const nombres = ["ale", "sala", "cristian", "mateo", "cesar"]
const masculinos = nombres.slice(1, 3)
console.log(masculinos)

//indexOf
const nombres = ["ale", "sala", "laura", "mateo", "maria"]
console.log(nombres.indexOf("laura"))
console.log(nombres.indexOf("roberto")) //no existe -1

//Includes
const nombres = ["ale", "sala", "laura", "mateo", "maria"]
console.log(nombres.includes("mateo"))

//Revers
const nombres = ["ale", "sala", "laura", "mateo", "maria"]
nombres.reverse()
console.log(nombres)


//Ejemplos cargar datos y almacenar en un array
const listaNombres = []
let cantidad = 5
do {
    let entrada = prompt("ingrese el nombre")
    listaNombres.push(entrada.toUpperCase())
    console.log(listaNombres.length)
} while (listaNombres.length != cantidad);
const nuevaLista = listaNombres.concat(["ANA", "EMA"])
alert(nuevaLista.join("\n"))



//eliminar datos de un array
const nombres = ["ale", "sala", "laura", "mateo", "maria"]
const eliminar = (nombre) => {
    let i = nombres.indexOf(nombre)
    if(i != -1){
        nombres.splice(i, 1)
    }
}
eliminar("laura")
console.log(nombres)

//
const objeto1 = {id: 1, producto: "arroz"}
const array = [objeto1, {id:2, producto:"fideos"}]
array.push({id: 3, producto: "pan"})
console.log(array)

//
const productos = [
    {id: 1, producto: "arroz", precio: 50},
    {id: 2, producto: "fideos", precio:100},
    {id: 3, producto: "pan", precio:200},
]
for(const producto of productos){
    console.log(producto.id)
    console.log(producto.producto)
    console.log(producto.precio)
}
*/










/*
function Formulario() {
    console.log("Iniciando formulario...")
}
function usuarioAutenticado() {
    console.log("autenticando")
    console.log("usuario autenticado exitoso")
}
Formulario()
let nombre = prompt("Ingrese su nombre o poner ESC para interrumpir");
let texto = " ";
while (nombre != "ESC" && nombre != "esc") {
    texto += nombre + " ";
    nombre = prompt("Ingrese un nombre o poner ESC para interrumpir");
}
alert(texto);
console.log(texto)

let edad = prompt("Ingrese su edad y domicilio o poner ESC para interrumpir");
let texto1 = " ";
while (edad != "ESC" && edad != "esc") {
    texto1 += edad + " ";
    edad = prompt("Ingrese su edad y domicilio o poner ESC para interrumpir");
}
alert(texto + " " +texto1);
console.log(texto1)

usuarioAutenticado()
*/

/*

const producto1 = {
    nombre: "Aceite",
    precio: 1000,
    disponible: true,
};
const producto2 = {
    nombre: "Aceitunas",
    precio: 250,
    disponible: true,
};
const producto3 = {
    nombre: "Escabeches",
    precio: 600,
    disponible: true,
};
const producto4 = {
    nombre: "Salame",
    precio: 700,
    disponible: true,
};

const producto = [producto1, producto2, producto3, producto4]
let option = prompt(`Elija una opcion:
1: Aceite
2: Aceitunas
3: Escabeche
4: Salame
`)
switch (option) {
    case "1":
        console.log(`El producto es ${producto1.nombre} y su precio es ${producto1.precio}`)
        break;
    case "2":
        console.log(`El producto es ${producto2.nombre} y su precio es ${producto2.precio}`)
        break;
    case "3":
        console.log(`El producto es ${producto3.nombre} y su precio es ${producto3.precio}`)
        break;
    case "4":
        console.log(`El producto es ${producto4.nombre} y su precio es ${producto4.precio}`)
        break;    
    default:
        alert("No ingresaste una opcion valida")
        break;
}



















