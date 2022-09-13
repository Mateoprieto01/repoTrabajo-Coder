const formMensaje = document.querySelector("#mensaje");
formMensaje.addEventListener("input", (e) => {
    console.log(e.target.value);
});
const formName = document.querySelector("#nombre");
formName.addEventListener("input", (e) => {
    console.log(e.target.value);
});
const formMail = document.querySelector("#email");
formMail.addEventListener("input", (e) => {
    console.log(e.target.value);
});
const formNumero = document.querySelector("#numero");
formNumero.addEventListener("input", (e) => {
    console.log(e.target.value);
});
/*-----------------------------function--------------------------------------------*/ 
function aplicacion() {
    console.log("Iniciando aplicacion...")
}
function usuarioAutenticado() {
    console.log("autenticando")
    console.log("usuario autenticado exitoso")
}
function saludar() {
    alert("Bienvenido " + texto.toUpperCase() + " Gracias por elegirnos, a continuación te mostraremos nuestros productos");
}
function despedir() {
    alert(
        "Muchas gracias por elegirnos" + texto.toUpperCase() +", en la brevedad nos pondremos en contacto con usted hasta pronto"
    );
}

function comprarAceites() {
    producto = prompt(
        "Elija una de nuestros aceites: \n 1: Aceite premium \n 2: Aceite tradicional \n 3: Aceite suave"
    );
    if (producto === "1") {
        let productoAceite_premium = prompt(`¿Que botella le gustaria del Aceite premium? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);

        switch (productoAceite_premium) {
            case "1":
                console.log(`Su producto es ${tipoAceite_premium[0].nombre} y el  precio del mismo es ${tipoAceite_premium[0].precio}`);
                break;
            case "2":
                console.log(`Su producto es ${tipoAceite_premium[1].nombre} y el  precio del mismo es ${tipoAceite_premium[1].precio}`);
                break;
            case "3":
                console.log(`Su producto es ${tipoAceite_premium[2].nombre} y el  precio del mismo es ${tipoAceite_premium[2].precio}`);
                break;
            case "4":
                console.log(`Su producto es ${tipoAceite_premium[3].nombre} y el  precio del mismo es ${tipoAceite_premium[3].precio}`);
                break;
            case "5":
                console.log(`Su producto es ${tipoAceite_premium[4].nombre} y el  precio del mismo es ${tipoAceite_premium[4].precio}`);
                break;
            default:
                console.log("No has ingresado una opción válida");
                break;
            }
        }
    if (producto === "2") {
        let productoAceite_tradicional = prompt(`¿Que botella le gustaria del Aceite tradicional? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);

        switch (productoAceite_tradicional) {
            case "1":
                console.log(`Su producto es ${tipoAceite_tradicional[0].nombre} y el  precio del mismo es ${tipoAceite_tradicional[0].precio}`);
                break;
            case "2":
                console.log(`Su producto es ${tipoAceite_tradicional[1].nombre} y el  precio del mismo es ${tipoAceite_tradicional[1].precio}`);
                break;
            case "3":
                console.log(`Su producto es ${tipoAceite_tradicional[2].nombre} y el  precio del mismo es ${tipoAceite_tradicional[2].precio}`);
                break;
            case "4":
                console.log(`Su producto es ${tipoAceite_tradicional[3].nombre} y el  precio del mismo es ${tipoAceite_tradicional[3].precio}`);
                break;
            case "5":
                console.log(`Su producto es ${tipoAceite_tradicional[4].nombre} y el  precio del mismo es ${tipoAceite_tradicional[4].precio}`);
                break;
            default:
                console.log("No has ingresado una opción válida");
                break;
            }
    } if (producto === "3") {
            let productoAceite_suave = prompt(`¿Que botella le gustaria del Aceite suave? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);

            switch (productoAceite_suave) {
                case "1":
                    console.log(`Su producto es ${tipoAceite_suave[0].nombre} y el  precio del mismo es ${tipoAceite_suave[0].precio}`);
                    break;
                case "2":
                    console.log(`Su producto es ${tipoAceite_suave[1].nombre} y el  precio del mismo es ${tipoAceite_suave[1].precio}`);
                    break;
                case "3":
                    console.log(`Su producto es ${tipoAceite_suave[2].nombre} y el  precio del mismo es ${tipoAceite_suave[2].precio}`);
                    break;
                case "4":
                    console.log(`Su producto es ${tipoAceite_suave[3].nombre} y el  precio del mismo es ${tipoAceite_suave[3].precio}`);
                    break;
                case "5":
                    console.log(`Su producto es ${tipoAceite_suave[4].nombre} y el  precio del mismo es ${tipoAceite_suave[4].precio}`);
                    break;
                default:
                    console.log("No has ingresado una opción válida");
                    break;
                }
    } if (producto > "3") {
    alert("ERROR");
    comprarAceites()
    }}


    function comprarAceitunas() {
        producto = prompt(
            "Elija una de nuestros aceitunas: \n 1: Aceitunas medio kilo \n 2: Aceitunas de kilo \n 3: Aceitunas de 5 kilos"
        );
        if (producto === "1") {
            let productoAceitunas_medio = prompt(`¿Que botella le gustaria del Aceite premium? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);
    
            switch (productoAceitunas_medio) {
                case "1":
                    console.log(`Su producto es ${tipoAceitunas[0].nombre} y el  precio del mismo es ${tipoAceitunas[0].precio}`);
                    break;
                case "2":
                    console.log(`Su producto es ${tipoAceitunas[1].nombre} y el  precio del mismo es ${tipoAceitunas[1].precio}`);
                    break;
                case "3":
                    console.log(`Su producto es ${tipoAceitunas[2].nombre} y el  precio del mismo es ${tipoAceitunas[2].precio}`);
                    break;
                case "4":
                    console.log(`Su producto es ${tipoAceitunas[3].nombre} y el  precio del mismo es ${tipoAceitunas[3].precio}`);
                    break;
                case "5":
                    console.log(`Su producto es ${tipoAceitunas[4].nombre} y el  precio del mismo es ${tipoAceitunasm[4].precio}`);
                    break;
                default:
                    console.log("No has ingresado una opción válida");
                    break;
                }
            }
        if (producto === "2") {
            let productoAceitunas_kilo = prompt(`¿Que botella le gustaria del Aceite tradicional? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);
    
            switch (productoAceitunas_kilo) {
                case "1":
                    console.log(`Su producto es ${tipoAceitunas[0].nombre} y el  precio del mismo es ${tipoAceitunas[0].precio}`);
                    break;
                case "2":
                    console.log(`Su producto es ${tipoAceitunas[1].nombre} y el  precio del mismo es ${tipoAceitunas[1].precio}`);
                    break;
                case "3":
                    console.log(`Su producto es ${tipoAceitunas[2].nombre} y el  precio del mismo es ${tipoAceitunas[2].precio}`);
                    break;
                case "4":
                    console.log(`Su producto es ${tipoAceitunas[3].nombre} y el  precio del mismo es ${tipoAceitunas[3].precio}`);
                    break;
                case "5":
                    console.log(`Su producto es ${tipoAceitunas[4].nombre} y el  precio del mismo es ${tipoAceitunasm[4].precio}`);
                    break;
                default:
                    console.log("No has ingresado una opción válida");
                    break;
                }
        } if (producto === "3") {
                let productoAceitunas_5kilo = prompt(`¿Que botella le gustaria del Aceite suave? \n 1: 500 ml \n 2: 1 lt \n 3: 2 lt \n 4: 3 lt \n 5: 5 lt`);
    
                switch (productoAceitunas_5kilo) {
                    case "1":
                    console.log(`Su producto es ${tipoAceitunas[0].nombre} y el  precio del mismo es ${tipoAceitunas[0].precio}`);
                    break;
                case "2":
                    console.log(`Su producto es ${tipoAceitunas[1].nombre} y el  precio del mismo es ${tipoAceitunas[1].precio}`);
                    break;
                case "3":
                    console.log(`Su producto es ${tipoAceitunas[2].nombre} y el  precio del mismo es ${tipoAceitunas[2].precio}`);
                    break;
                case "4":
                    console.log(`Su producto es ${tipoAceitunas[3].nombre} y el  precio del mismo es ${tipoAceitunas[3].precio}`);
                    break;
                case "5":
                    console.log(`Su producto es ${tipoAceitunas[4].nombre} y el  precio del mismo es ${tipoAceitunasm[4].precio}`);
                    break;
                default:
                        console.log("No has ingresado una opción válida");
                        break;
                    }
        } if (producto > "3") {
        alert("ERROR");
        comprarAceitunas()
        }}
/*--------------------------------------------------------------------------------*/

aplicacion()
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
alert(texto + texto1);
console.log(texto1)
usuarioAutenticado()
saludar()
/*-----------------------------------------------------------------------------*/


const tipoAceite_premium = [
    {nombre: "Aceite Premium 500 ml", precio: 500, disponible: true,},
    {nombre: "Aceite Premium 1 lt", precio: 700, disponible: true,},
    {nombre: "Aceite Premium 2 lt", precio: 1000, disponible: true,},
    {nombre: "Aceite Premium 3 lt", precio: 1200, disponible: true,},
    {nombre: "Aceite Premium 5 lt", precio: 4000, disponible: true,},
]
const tipoAceite_tradicional = [
    {nombre: "Aceite Tradicional 500 ml", precio: 500, disponible: true,},
    {nombre: "Aceite Tradicional 1 lt", precio: 700, disponible: true,},
    {nombre: "Aceite Tradicional 2 lt", precio: 1000, disponible: true,},
    {nombre: "Aceite Tradicional 3 lt", precio: 1200, disponible: true,},
    {nombre: "Aceite Tradicional 5 lt", precio: 4000, disponible: true,},
]
const tipoAceite_suave = [
    {nombre: "Aceite Suave 500 ml", precio: 500, disponible: true,},
    {nombre: "Aceite Suave 1 lt", precio: 700, disponible: true,},
    {nombre: "Aceite Suave 2 lt", precio: 1000, disponible: true,},
    {nombre: "Aceite Suave 3 lt", precio: 1200, disponible: true,},
    {nombre: "Aceite Suave 5 lt", precio: 4000, disponible: true,},
]
const tipoAceitunas = [
    {nombre: "Aceitunas1", precio: 250, disponible: true,},
    {nombre: "Aceitunas2", precio: 250, disponible: true,},
    {nombre: "Aceitunas3", precio: 250, disponible: true,},
    {nombre: "Aceitunas4", precio: 250, disponible: true,},
    {nombre: "Aceitunas5", precio: 250, disponible: true,},
    {nombre: "Aceitunas6", precio: 250, disponible: true,},
    {nombre: "Aceitunas7", precio: 250, disponible: true,},
    {nombre: "Aceitunas8", precio: 250, disponible: true,},
    {nombre: "Aceitunas9", precio: 250, disponible: true,},
    {nombre: "Aceitunas10", precio: 250, disponible: true,},
    {nombre: "Aceitunas11", precio: 250, disponible: true,},
    {nombre: "Aceitunas12", precio: 250, disponible: true,},
    {nombre: "Aceitunas13", precio: 250, disponible: true,},
    {nombre: "Aceitunas14", precio: 250, disponible: true,},
    {nombre: "Aceitunas15", precio: 250, disponible: true,},
]
const tipoEscabeche = [
    {nombre: "Escabeches1", precio: 600, disponible: true,},
    {nombre: "Escabeches2", precio: 600, disponible: true,},
    {nombre: "Escabeches3", precio: 600, disponible: true,},
    {nombre: "Escabeches4", precio: 600, disponible: true,},
    {nombre: "Escabeches5", precio: 600, disponible: true,},
    {nombre: "Escabeches6", precio: 600, disponible: true,},
]
const tipoSalame = [
    {nombre: "Salame1", precio: 700, disponible: true},
    {nombre: "Salame2", precio: 700, disponible: true},
    {nombre: "Salame3", precio: 700, disponible: true},
    {nombre: "Salame4", precio: 700, disponible: true},
    {nombre: "Salame5", precio: 700, disponible: true},
    {nombre: "Salame6", precio: 700, disponible: true},
    {nombre: "Salame7", precio: 700, disponible: true},
    {nombre: "Salame8", precio: 700, disponible: true},
]
const carrito = []
let menu = prompt(
    `Ingrese una opción: 
    1: Aceites
    2: Aceitunas
    3: Escabeches
    4: Salame 
    0: Terminar`
    );
if (menu) {
    while (menu !== "0") {
        if (menu === "9") {
            menu = prompt(
                `Ingrese una opción: 
                1: Aceites
                2: Aceitunas
                3: Escabeches
                4: Salames
                5: Terminar y pagar
                0: Terminar sin comprar nada`
            );
        }
        if (menu === "1") {
            comprarAceites();
            menu = "9"
        }
        if (menu === "2") {
            comprarAceitunas()
            menu = "9"
        }
        if (menu === "3") {
            comprarAceites();
            menu = "9";
        }
        if (menu === "4") {
            comprarAceitunas()
            opcion = "9";
        }
        if (menu === "5") {
            metodoPago = prompt(
                "¿Con que método desea pagar? \n 1: Tarjeta \n 2: Efectivo 20% Off"
            );
            switch (metodoPago) {
                case "1":
                    alert("Paga con Tarjeta");
                    break;
                case "2":
                    alert("Paga en Efectivo");
                    break;
                default:
                    console.log("No ha ingresado metodo de pago");
                    break;
            }
            alert("Su pedido esta siendo preparado y será entregado a la brevedad!!!");
            menu = "0";
        }
    }
} else {
    alert("Debe ingresar por lo menos un numero");
}
despedir()
