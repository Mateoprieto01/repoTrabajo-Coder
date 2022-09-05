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
        console.log(producto1)
        break;
    case "2":
        console.log(producto2)
        break;
    case "3":
        console.log(producto3)
        break;
    case "4":
        console.log(producto4)
        break;    
    default:
        alert("No ingresaste una opcion valida")
        break;
}







/* const producto1 = {
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
}; */






















