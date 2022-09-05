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


const producto = [
    {nombre: "Aceite", precio: 1000, disponible: true,},
    {nombre: "Aceitunas", precio: 250, disponible: true,},
    {nombre: "Escabeches", precio: 600, disponible: true,},
    {nombre: "Salame", precio: 700, disponible: true}
]
let option = prompt(`Elija una opcion:
1: Aceite
2: Aceitunas
3: Escabeche
4: Salame
`)
switch (option) {
    case "1":
        console.log(`El producto es ${producto[0].nombre} y su precio es ${producto[0].precio}`)
        break;
    case "2":
        console.log(`El producto es ${producto[1].nombre} y su precio es ${producto[1].precio}`)
        break;
    case "3":
        console.log(`El producto es ${producto[2].nombre} y su precio es ${producto[2].precio}`)
        break;
    case "4":
        console.log(`El producto es ${producto[3].nombre} y su precio es ${producto[3].precio}`)
        break;    
    default:
        alert("No ingresaste una opcion valida")
        break;
}