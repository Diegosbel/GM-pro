
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

const producto = ['PROCESADOR', 'PLACA MADRE', 'MEMORIA RAM']

for (let index = 0; index < producto.length; index++) {
    alert(producto[index]);

}

// CLASES Y FUNCIONES DE ORDEN SUPERIOR

alert("Ingresa los productos que quisieras agregar a la compra")


class Producto {
    constructor(id, nombre, precio) {
        
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
}


// AÑADIDO DE LISTA DE LOS PRODUCTOS


class lista {
    constructor() {
        this.listaProcesadores = [];
        this.listaMother = [];
        this.ram = [];
    }



    // LISTA DE PROCESADORES


    procesadores() {
        this.listaProcesadores =
            [new Producto(1, "AMD Ryzen 3 4100", 32450),
            new Producto(2, "AMD Ryzen 5 3600 4.2GHz Turbo AM4", 54990),
            new Producto(3, "AMD Ryzen 7 7700 5.3GHz Turbo AM5", 160400),
            new Producto(4, "Intel Core i3 10100F 4.3GHz", 28950),
            new Producto(5, "Intel Core i5 10400F 4.3GHz", 62000),
            new Producto(6, "Intel Core i7 10700F 4.8GHz", 113990)]
    }




    verProcesador() {
        let lista = ""
        this.listaProcesadores.forEach(producto => {
            lista += "\nid =" + " " + producto.id + ")" + " " + producto.nombre + " " + "$" + producto.precio
        })
        return lista
    }



    anadirProcesador(id) {

        return this.listaProcesadores.find(el => el.id == id)
    }




    // LISTA DE MOTHER



    mother() {
        this.listaMother =
            [new Producto(1, "Mother MSI A320M-A PRO AM4", 25400),
            new Producto(2, "Mother Gigabyte GA-A320M-H AM4", 24000),
            new Producto(3, "Mother ASUS TUF B450M-PLUS II AM4", 45900),
            new Producto(4, "Mother ASUS ROG STRIX X570-E WIFI II", 157700),]
    }




    verMother() {
        let lista = ""
        this.listaMother.forEach(producto => {
            lista += "\nid =" + " " + producto.id + ")" + " " + producto.nombre + " " + "$" + producto.precio
        })
        return lista
    }


    anadirMother(id) {

        return this.listaMother.find(el => el.id == id)
    }



    // LISTA DE MEMORIA RAM


    memoriaRam() {
        this.listaRam =
        [new Producto(1, "Memoria Crucial DDR4 4GB 2666MHz Value", 10230),
        new Producto(2, "Memoria Team DDR4 4GB 2400MHz Elite Plus Red", 11650),
        new Producto(3, "Memoria Kingston DDR4 8GB 3200MHz Fury Beast CL16", 17430),
        new Producto(4, "Memoria Team DDR4 8GB 2666MHz T-Force Vulcan Z Gray", 18550),
        new Producto(5, "Memoria Team DDR4 8GB 3200MHz Elite Red", 18800),
        new Producto(6, "Memoria Patriot Viper DDR4 8GB 3200MHz Steel RGB", 20150)]
    }


    verRam() {
        let lista = ""
        this.listaRam.forEach(producto => {
            lista += "\nid =" + " " + producto.id + ")" + " " + producto.nombre + " " + "$" + producto.precio
        })
        return lista
    }


    anadirRam(id) {

        return this.listaRam.find(el => el.id == id)
    }


}



// CARRITO DE COMPRAS


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


// INSTANCIAR CLASES

const agregarProducto = new lista()
const total = new carroCompras()

agregarProducto.procesadores()
agregarProducto.mother()
agregarProducto.memoriaRam()
total.compraTotal()


let rta = ""

do {

    // PROCESADORES

    alert("Seleccione el procesador que desea añadir" + agregarProducto.verProcesador());

    let id = prompt("Ingrese el id de procesador a agregar")

    const productos = agregarProducto.anadirProcesador(id)
    if (productos) {
        total.itemAgregado(productos)
    } else { alert("Procesador no añadido") }



    // PLACAS MADRES

    alert("Seleccione la mother que desea añadir" + agregarProducto.verMother());

    id = prompt("Ingrese el id de la mother a agregar")

    const placa = agregarProducto.anadirMother(id)
    if (placa) {
        total.itemAgregado(placa)
    } else { alert("mother no añadido") }





    // MEMORIA RAM


    alert("Seleccione la memoria ram que desea añadir" + agregarProducto.verRam());

    id = prompt("Ingrese el id de la memoria ram a agregar")

    const ram = agregarProducto.anadirRam(id)
    if (ram) {
        total.itemAgregado(ram)
    } else { alert("memoria ram no añadido") }

    rta = prompt("Ingrese 'finalizar' para terminar su compra.\nSi desea agregar mas productos ingrese 'continuar' para agregar mas productos").toUpperCase()

} while (rta != "FINALIZAR")


// INSTANCIA DE PAGO

let formaPago = " "

while (formaPago != "FINALIZAR") {

    let tipoPago = prompt("Su total es de $" + total.compraTotal() + "\n¿Que tipo de pago desea realizar? Efectivo obtiene un 10% de descuento en su compra\nEfectivo\nDebito\nCredito").toUpperCase()


    if (tipoPago == "EFECTIVO") {

        alert("Pago con efectivo seleccionado usted obtiene un 10% de descuento")


        let descuento = total.compraTotal() * 0.10

        let precioFinal = total.compraTotal() - descuento

        alert("Su nuevo total es de : $" + precioFinal)

    } else if (tipoPago == "DEBITO") {

        alert("Pago con debito seleccionado")
        alert("Su nuevo total es de: $" + total.compraTotal())

    } else if (tipoPago == "CREDITO") {

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

