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



































