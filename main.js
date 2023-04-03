
// FUNCIONES

const resultado = (producto) => {
    alert(producto + ESPACIO + "añadido al carro de compras")
    console.log(producto);
}




// INICIO DE PAGINA Y COMUNICACION AL CLIENTE

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



// DESCRIPCION DE PRODUCTOS

const producto = ['PROCESADOR', 'PLACA MADRE', 'MEMORIA RAM', 'DISCO SOLIDO', 'FUENTE', 'GABINETE']

for (let index = 0; index < producto.length; index++) {
    alert(producto[index]);

}

// CLASES Y FUNCIONES DE ORDEN SUPERIOR




class Producto {
    constructor
        (id, nombre, precio) {


        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.stock = 10
    }
}

// Lista de procesadores

class Procesador {
    constructor() {
        this.listaProcesadores = []
    }


    procesadores() {
        this.listaProcesadores =
            [new Producto(1, "Ryzen 3", 23000),
            new Producto(2, "Ryzen 5", 37000),
            new Producto(3, "Ryzen 7", 53000),
            new Producto(4, "Intel I5", 36000),
            new Producto(5, "Intel I7", 55000),
            new Producto(6, "Intel I9", 72000)]
    }


    verProcesador() {
        let lista = ""
        this.listaProcesadores.forEach(producto => {
            lista += "\nid =" + " " + producto.id + ")" + " " + producto.nombre + " " + "$" + producto.precio
        })
        return lista
    }


    agregarProcesador(id) {

        return this.listaProcesadores.find(el => el.id == id)
    }

}

// LISTA PLACA MADRE

class Mother {
    constructor() {
        this.listaPlacas = []
    }


    placasMadres() {
        this.listaPlacas =
            [new Producto(1, "Mother MSI A320M-A PRO AM4", 25400),
            new Producto(2, "Mother Gigabyte GA-A320M-H AM4", 24000),
            new Producto(3, "Mother ASUS TUF B450M-PLUS II AM4", 45900),
            new Producto(4, "Mother ASUS ROG STRIX X570-E WIFI II", 157700),]
    }


    verPlacas() {
        let lista = ""
        this.listaPlacas.forEach(producto => {
            lista += "\nid =" + " " + producto.id + ")" + " " + producto.nombre + " " + "$" + producto.precio
        })
        return lista
    }


    agregarPlaca(id) {

        return this.listaPlacas.find(el => el.id == id)
    }
}

// Carro de compras
class carroCompras {
    constructor() {
        this.listaProductos = []
    }

    itemAgregado(producto) {

        this.listaProductos.push(producto)


    }

    compraTotal() {

        let lista = 0

        this.listaProductos.forEach(producto => {
            lista += producto.precio * producto.cantidad
        })

        return lista;


    }



}


// OBJETOS CONTROLADORES

const procesadorAgregado = new Procesador()
const total = new carroCompras()
const placaMadreAgregado = new Mother()
procesadorAgregado.procesadores()
placaMadreAgregado.placasMadres()



let rta = ""



// PROCESO DE AÑADIR COMPRAS

do {
    
// PROCESADORES

    alert("Seleccione el procesador que desea añadir" + procesadorAgregado.verProcesador());
    
    let id = prompt("Ingrese el id de procesador a agregar")
    
    const productos = procesadorAgregado.agregarProcesador(id)
    if (productos) {
        total.itemAgregado(productos)
    } else { alert("Procesador no añadido") }
    
    

// PLACAS MADRES
    
    alert("Seleccione la mother que desea añadir" + placaMadreAgregado.verPlacas());

    id = prompt("Ingrese el id de la mother a agregar")

    const placa = placaMadreAgregado.agregarPlaca(id)
    if (placa) {
        total.itemAgregado(placa)
    } else { alert("mother no añadido") }

    rta = prompt("Ingrese 'finalizar' para terminar su compra.\nSi desea agregar mas productos ingrese 'continuar' para agregar mas productos").toUpperCase()

} while (rta != "FINALIZAR")





let formaPago = " "

while (formaPago != "FINALIZAR") {

    let tipoPago = prompt("Su total es de $" + total.compraTotal() + "\n¿Que tipo de pago desea realizar? Efectivo obtiene un 10% de descuento en su compra\nEfectivo\nDebito\nTarjeta de Credito").toUpperCase()


    if (tipoPago == "EFECTIVO") {

        alert("Pago con efectivo seleccionado usted obtiene un 10% de descuento")


        let descuento = total.compraTotal() * 0.10

        let precioFinal = total.compraTotal() - descuento

        alert("Su nuevo total es de : $" + precioFinal)

    } else if (tipoPago == "DEBITO") {

        alert("Pago con debito seleccionado")
        alert("Su nuevo total es de: $" + total.compraTotal())

    } else if (tipoPago == "TARJETA DE CREDITO") {

        ("Pago con credito seleccionado")

        let cuota = Number(prompt("Ingrese en cuantas cuotas desea abonarlo:\n1 = precio total\n3 = 5% de recargo\n6 = 10% de recargo\n12 = 15% de recargo"))

        switch (cuota) {
            case 1:
                alert("Su nuevo total es de: $" + total.compraTotal())
                break;
            case 3:
                alert("Su nuevo total es de: $" + parseInt(total.compraTotal() * 1.05)+ "\nPago por cuota $" + parseInt(total.compraTotal() * 1.05 / 12))
                break;
            case 6:
                alert("Su nuevo total es de: $" + parseInt(total.compraTotal() * 1.10)+ "\nPago por cuota $" + parseInt(total.compraTotal() * 1.10 / 12))
                break;
            case 12:
                alert("Su nuevo total es de: $" + parseInt(total.compraTotal() * 1.15)+ "\nPago por cuota $" + parseInt(total.compraTotal() * 1.15 / 12))
                break;
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

