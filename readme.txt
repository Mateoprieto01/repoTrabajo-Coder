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
let option = prompt(`Elija una opcion:
1: Garra
2: Batman
3: Spiderman
4: MoonFall
`)


switch (option) {
    case "1":
        console.log("Garra")
        break;
    case "2":
        console.log("Batman")
        break;
    case "3":
        console.log("Spiderman")
        break;
    case "4":
        console.log("MoonFall")
        break;    
    default:
        console.log("No ingresaste una opcion valida")
        break;
}
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

