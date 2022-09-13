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
        "Muchas gracias por elegirnos" + text.toUpperCase() +", en la brevedad nos pondremos en contacto con usted hasta pronto"
    );
}
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


const producto = [
    {nombre: "Aceite", precio: 1000, disponible: true,},
    {nombre: "Aceitunas", precio: 250, disponible: true,},
    {nombre: "Escabeches", precio: 600, disponible: true,},
    {nombre: "Salame", precio: 700, disponible: true}
]
const carrito = []
if (producto) {
    let menu = prompt(
        `Ingrese una opción: 
        1: Aceites
        2: Aceitunas
        3: Escabeches
        4: Salame 
        0: Terminar`
        );
    while (menu !== "0") {
        if (menu === "9") {
            menu = prompt(
                `Ingrese una opción: 
                1: Aceites
                2: Aceitunas
                3: Escabeches
                4: Salame 
                5: Terminar y pagar
                0: Terminar sin comprar nada`
            );
        }
        if (menu === "1") {
            comprarProducto();
        }
        if (menu === "2") {
            
        }
        if (menu === "3") {
            cargarPedido(carrito);
            mostrarProductos(carrito);
            menu = "9";
        }
        if (menu === "4") {
            finalizarCompra(carrito);
            opcion = "9";
        }
        if (menu === "5") {
            metodoPago = prompt(
                "¿Con que método desea pagar? \n 1: Tarjeta \n 2: Efectivo 15% Off"
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
    alert("Debe ingresar por lo menos un nombre");
}
despedir()

/*

let option = prompt(`Elija una opcion:
1: Aceite
2: Aceitunas
3: Escabeche
4: Salame
`)
switch (option) {
    case "1":
        console.log(`Su producto es ${producto[0].nombre} y el  precio del mismo es ${producto[0].precio}`)
        carrito.push(producto[0].nombre)
        break;
    case "2":
        console.log(`Su producto es ${producto[1].nombre} y el  precio del mismo es ${producto[1].precio}`)
        carrito.push(producto[1].nombre)
        break;
    case "3":
        console.log(`Su producto es ${producto[2].nombre} y el precio del mismo es ${producto[2].precio}`)
        carrito.push(producto[2].nombre)
        break;
    case "4":
        console.log(`Su producto es ${producto[3].nombre} y el  precio del mismo es ${producto[3].precio}`)
        carrito.push(producto[3].nombre)
        break;    
    default:
        alert("No ingresaste una opcion valida")
        break;
}
alert(carrito.join("\n"))


// DESAFIO ENTREGABLE 1
class Producto {
  constructor(nombre, precio, aderezo) {
    this.nombre = nombre;
    this.precio = precio;
    this.aderezo = aderezo;
  }
}
// declaro las funciones
function mostrarPrecios() {
  const show = [];
  productos.map((productos) => {
    const item = `\n${productos.nombre} ${productos.precio}`;
    show.push(item);
  });
  alert("PRECIOS: en PESOS" + show);
}

function encuesta() {
alert("Ha continuacion le realizaremos una breve encuesta de satisfaccion");
let option = prompt(`¿Como fue su experiencia en Hamburguesas Tuttita?
1: Mala
2: Regular
3: Buena
4: Muy Buena
5: Excelente
`);
switch (option) {
    case "1":
        console.log("Malo");
        break;
    case "2":
        console.log("Regular");
        break;
    case "3":
        console.log("Bueno");
        break;
    case "4":
        console.log("Muy Bueno");
        break;
    case "5":
        console.log("Excelente");
        break;
    default:
        console.log("No has ingresado una opción válida");
        break;
    }
}
if (nombre !== "") {
  // declaro las variables
    let carrito = [];
    let producto;
    let adicion;
    let metodoPago;

    saludar();
  let opcion = prompt(
    "Ingrese una opción \n 1: Comprar Especialidades \n 2: Finalizar Compra Especialidades \n 3: Arma tu Combo \n 4: Finalizar Compra Combo \n 8: Precios \n 0: Terminar"
  );

  function cargarPedido(carrito) {
    let nombre = prompt("ingrese nombre");
    let precio = Number(prompt("ingrese precio"));
    let aderezo = prompt("Ingrese aderezo");
    const newProduct = new Producto(nombre, precio, aderezo);
    carrito.push(newProduct);
    console.log(carrito);
  }

  function mostrarProductos() {
    carrito.forEach((producto) => {
      console.log(
        `Usted eligió ${producto.nombre} con ${producto.aderezo} por un precio de ${producto.precio}`
      );
    });
  }

  function comprarProducto() {
    producto = prompt(
      "Elija una de nuestras delicias: \n 1: Hamburguesa Clásica \n 2: Xtreme Bacon \n 3: Tuttita Triple"
    );
    adicion = prompt(
      "¿Desea agregar Papas Fritas a su Pedido? \n 1: Si \n 2: No"
    );
    if (producto === "1" && adicion === "1") {
      alert(
        `Elegiste Hamburguesa Simple con Papas para la compra, monto total: ${
          productos[0].precio + productos[3].precio
        } pesos`
      );
    } else if (producto === "1" && adicion === "2") {
      alert(
        `Elegiste hamburguesa Simple para tu compra, monto total: ${productos[0].precio} pesos`
      );
    } else if (producto === "2" && adicion === "1") {
      alert(
        "Elegiste Hamburguesa Doble con Papas para tu compra, monto total: " +
          (productos[1].precio + productos[3].precio) +
          " pesos"
      );
    } else if (producto === "2" && adicion === "2") {
      alert(
        "Elegiste Hamburguesa Doble para tu compra, monto total: " +
          productos[1].precio +
          " pesos"
      );
    } else if (producto === "3" && adicion === "1") {
      alert(
        "Elegiste Hamburguesa Completa con Papas para tu compra, monto total: " +
          (productos[2].precio + productos[3].precio) +
          " pesos"
      );
    } else if (producto === "3" && adicion === "2") {
      alert(
        "Elegiste Hamburguesa Completa para tu compra, monto total: " +
          productos[2].precio +
          " pesos"
      );
    } else if (producto > "3") {
      alert("ERROR");
    }
    opcion = prompt(
      "Vuelve a ingresar una opción \n 2: Finalizar Compra \n 9: Terminar"
    );
  }

  function finalizarCompra() {
    let resultado = carrito.reduce((accum, producto)=>{
      return accum + producto.precio;
  }, 0)
  
  console.log(`Total del Carrito: ${resultado} Pesos`);
  }
  // ciclo while para que el cliente decida sobre si quiere comprar o finalizar
  while (opcion !== "0") {
    if (opcion === "1") {
      comprarProducto();
    }
    if (opcion === "2") {
      metodoPago = prompt(
        "¿Con que método desea pagar? \n 1: Tarjeta \n 2: Efectivo 15% Off"
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
      alert(
        "Su pedido esta siendo preparado y será entregado a la brevedad!!!"
      );
      opcion = "0";
    }
    if (opcion === "3") {
      cargarPedido(carrito);
      mostrarProductos(carrito);

      opcion = "9";
    }
    if (opcion === "4") {
      finalizarCompra(carrito);
      opcion = "9";
    }
    if (opcion === "9") {
      opcion = prompt(
        "Ingrese una opción \n 1: Comprar Especialidades \n 2: Finalizar Compra Especialidades \n 3: Arma tu Combo \n 4: Finalizar Compra Combo \n 8: Precios \n 0: Terminar"
      );
    }
    if (opcion === "8") {
      mostrarPrecios();
      // luego de mostrar los precios, genero la opcion "9" para darle ingreso de nuevo al usuario con las opciones principales
      opcion = "9";
    }
  }

  // una breve encuesta para saber la satisfacción del cliente
  encuesta();
  // saludo de despedida
  despedir();
} else {
  alert("Debe ingresar por lo menos un nombre");
}
*/