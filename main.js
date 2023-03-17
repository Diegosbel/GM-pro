
const resultado = (producto) => {
    alert(producto + ESPACIO + "añadido al carro de compras")
    console.log(producto);
}


alert("Bienvenido a GMpro!\nA continuacion ingresa tus datos para empezar")

let nombre = prompt("Ingresa tu nombre")

console.log(nombre)

let apellido = prompt("ingresa tu apellido")

console.log(apellido)

let email = prompt("ingresa tu email")

console.log(email)

const ESPACIO = " "

alert("Hola" + ESPACIO + nombre + ESPACIO + apellido + ESPACIO + "ya validamos tu email (" + email + ") y podes empezar con la compra")

alert("Estos son nuestros productos")

const producto = ['PROCESADOR', 'PLACA MADRE', 'MEMORIA RAM', 'DISCO SOLIDO', 'FUENTE', 'GABINETE']

for (let index = 0; index < producto.length; index++) {
    alert(producto[index]);

}

console.log("Productos añadidos:")


let rta = " "


do {


    let producto = prompt("Ingrese el producto que desea añadir al carro de compras : \nProcesador $25,000 \nPlaca madre $18.000 \nMemoria ram $11.000 \nDisco solido $15.000\nFuente $9.000\nGabinete $19.000").toUpperCase()



    switch (producto) {
        case "PROCESADOR":
            resultado("Procesador")
            alert("$25000 añadido a la cuenta")
            break;

        case "PLACA MADRE":
            resultado("Placa madre")
            break;

        case "MEMORIA RAM":
            resultado("Memoria ram")
            break;

        case "DISCO SOLIDO":
            resultado("Disco solido")
            break;

        case "FUENTE":
            resultado("Fuente")
            break;

        case "GABINETE":
            resultado("Gabinete")
            break;

        default:
            alert("Usted no ingreso un producto valido")
            break;
    }

    rta = prompt("Desea añadir un nuevo producto?\nDe lo contrario escriba ESC para salir").toUpperCase()

} while (rta != "ESC") {

alert("Lo estamos reedireccionando al carro de compras")

}



let formaPago = " "

while (formaPago != "FINALIZAR") {

    let tipoPago = prompt("¿Que tipo de pago desea realizar? Efectivo obtiene un 10% de descuento en su compra\nEfectivo\nDebito\nTarjeta de Credito").toUpperCase()

    let total = Number(prompt("Ingrese su total"))



    if (tipoPago == "EFECTIVO") {

        alert("Pago con efectivo seleccionado usted obtiene un 10% de descuento")


        let descuento = total * 0.10

        let precioFinal = total - descuento

        alert("Su nuevo total es de : $" + precioFinal)

    } else if (tipoPago == "DEBITO") {

        alert("Pago con debito seleccionado")
        alert("Su nuevo total es de: $" + total)

    } else if (tipoPago == "TARJETA DE CREDITO") {

        ("Pago con credito seleccionado")

        let cuota = Number(prompt("Ingrese en cuantas cuotas desea abonarlo:\n1 = precio total\n3 = 5% de recargo\n6 = 10% de recargo\n12 = 15% de recargo"))

        switch (cuota) {
            case 1:
                alert("Su nuevo total es de: $" + total)
                break;
            case 3:
                alert("Su nuevo total es de: $" + parseInt(total * 1.05))
                break;
            case 6:
                alert("Su nuevo total es de: $" + parseInt(total * 1.10))
                break;
            case 12:
                alert("Su nuevo total es de: $" + parseInt(total * 1.15))
            default:
                alert("Ingrese un valor de cuota correcto")
                break;
        }

    } else {
        alert("Ingrese un dato correcto")
    }

    formaPago = prompt("Para terminar compra escriba FINALIZAR").toUpperCase()

}

alert("Gracias por su compra!")



