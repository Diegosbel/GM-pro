const listaProcesadores = [
  { id: 1, nombre: "AMD Ryzen 3 4100", precio: 32450, cantidad: 1,Stock: 8, type: "procesador", img: "./assets/procesadores/ryzen3.jpg" },
  { id: 2, nombre: "AMD Ryzen 5 3600 4.2GHz Turbo AM4", precio: 54990, cantidad: 1, Stock: 10, type: "procesador", img: "./assets/procesadores/ryzen5.jpg" },
  { id: 3, nombre: "AMD Ryzen 7 7700 5.3GHz Turbo AM5", precio: 160400, cantidad: 1, Stock: 6, type: "procesador", img: "./assets/procesadores/ryzen7.jpg" },
  { id: 4, nombre: "Intel Core i3 10100F 4.3GHz", precio: 28950, cantidad: 1, Stock: 10, type: "procesador", img: "./assets/procesadores/inteli3.jpg" },
  { id: 5, nombre: "Intel Core i5 10400F 4.3GHz", precio: 62000, cantidad: 1, Stock: 10, type: "procesador", img: "./assets/procesadores/inteli5.jpg" },
  { id: 6, nombre: "Intel Core i7 10700F 4.8GHz", precio: 113990, cantidad: 1, Stock: 6, type: "procesador", img: "./assets/procesadores/inteli7.jpg" }
]

const listaPlacas = [
  { id: 7, nombre: "Mother MSI A320M-A PRO AM4", precio: 25400, cantidad: 1, Stock: 10, type: "mother", img: "./assets/mother/msi-a320.jpg" },
  { id: 8, nombre: "Mother Gigabyte GA-A320M-H AM4", precio: 24000, cantidad: 1, Stock: 5, type: "mother", img: "./assets/mother/gigabyte-a320.jpg" },
  { id: 9, nombre: "Mother ASUS TUF B450M-PLUS II AM4", precio: 45900, cantidad: 1, Stock: 5, type: "mother", img: "./assets/mother/asus-plus.jpg" },
  { id: 10, nombre: "Mother ASUS ROG STRIX X570-E WIFI II", precio: 157700, cantidad: 1, Stock: 6, type: "mother", img: "./assets/mother/asus-rog.jpg" }
]

const listaRam = [
  { id: 11, nombre: "Memoria Crucial DDR4 4GB 2666MHz Value", precio: 10230, cantidad: 1, Stock: 18, type: "ram", img: "./assets/ram/crucial-ddr4.jpg" },
  { id: 12, nombre: "Memoria Team DDR4 4GB 2400MHz Elite Plus Red", precio: 11650, cantidad: 1, Stock: 22, type: "ram", img: "./assets/ram/team-ddr4.jpg" },
  { id: 13, nombre: "Memoria Kingston DDR4 8GB 3200MHz Fury Beast CL16", precio: 17430, cantidad: 1, Stock: 22, type: "ram", img: "./assets/ram/fury-ddr4.jpg" },
  { id: 14, nombre: "Memoria Team DDR4 8GB 2666MHz T-Force Vulcan Z Gray", precio: 18550, cantidad: 1, Stock: 14, type: "ram", img: "./assets/ram/vulcan-ddr4.jpg" },
  { id: 15, nombre: "Memoria Team DDR4 8GB 3200MHz Elite Red", precio: 18800, cantidad: 1, Stock: 24, type: "ram", img: "./assets/ram/elite-ddr4.jpg" },
  { id: 16, nombre: "Memoria Patriot Viper DDR4 8GB 3200MHz Steel RGB", precio: 20150, cantidad: 1, Stock: 20, type: "ram", img: "./assets/ram/viper-ddr4.jpg" }
]

class NuestrosProductos {
  constructor() {
    this.listaProductosProcesadores = listaProcesadores
    this.listaProductosPlacas = listaPlacas
    this.listaProductosRam = listaRam

  }





  mostrarDomProcesador() {
    this.listaProductosProcesadores.forEach(Producto => (
      procesador.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${Producto.nombre}</h5>
       <p class="card-text">$${Producto.precio}</p>
       <a href="#" id="agregar-${Producto.id}" class="btn btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }

  mostrarDomPlaca() {
    this.listaProductosPlacas.forEach(Producto => (
      mother.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${Producto.nombre}</h5>
       <p class="card-text">$${Producto.precio}</p>
       <a href="#" id="agregar-${Producto.id}" class="btn btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }


  mostrarDomRam() {
    this.listaProductosRam.forEach(Producto => (
      ram.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${Producto.nombre}</h5>
       <p class="card-text">$${Producto.precio}</p>
       <a href="#" id="agregar-${Producto.id}" class="btn btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }

}

class carritoDeCompras {
  constructor() {
    this.listaCarro = []
    this.total = document.getElementById("precio_total")
  }



  agregarCompra(producto) {
    this.listaCarro.push(producto)
  }



  guardarEnStorage() {
    let listaCarroJSON = JSON.stringify(this.listaCarro)
    localStorage.setItem("listaCarro", listaCarroJSON)
  }


  levantarDeStorage() {
    this.listaCarro = JSON.parse(localStorage.getItem("listaCarro")) || []
  }

  limpiarCarro(productos_carro) {
    productos_carro.innerHTML = ""
  }


  mostrarCompra(productos_carro) {

    this.limpiarCarro(productos_carro)
    this.listaCarro.forEach(producto => {
      productos_carro.innerHTML += `
      <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${producto.img}" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio : $${producto.precio}</p>
            <p class="card-text">cantidad : ${producto.cantidad}</p>
          </div>
        </div>
      </div>
    </div>`
    })

    this.mostrarTotalEnDom()
  }


  calcularTotal() {

    let total = 0
    this.listaCarro.forEach(producto => {
      total += producto.precio * producto.cantidad
    })

    return total;
  }

  mostrarTotalEnDom() {
    this.total.innerHTML = `El total de su compra es $${this.calcularTotal()}`
  }
}



const gestionarProcesadores = new NuestrosProductos()
gestionarProcesadores.listaProductosProcesadores
const gestionarMother = new NuestrosProductos()
gestionarMother.listaProductosPlacas
const gestionarRam = new NuestrosProductos()
gestionarRam.listaProductosRam
const gestionarCarrito = new carritoDeCompras()


// DOM

const catalogo = document.getElementById("catalogo")
const productos_carro = document.getElementById("productos_carro")
gestionarProcesadores.mostrarDomProcesador()
gestionarMother.mostrarDomPlaca()
gestionarRam.mostrarDomRam()
//VERIFICO SI CARROCOMPRAS EXISTE EN DOM

if (localStorage.getItem("listaCarro")) {
  gestionarCarrito.levantarDeStorage()
  gestionarCarrito.mostrarCompra(productos_carro)
} else {
  listaCarro = []
}



// DAR EVENTOS
gestionarProcesadores.listaProductosProcesadores.forEach(producto => {

  const btnCarro = document.getElementById(`agregar-${producto.id}`)

  btnCarro.addEventListener("click", () => {

    gestionarCarrito.agregarCompra(producto)
    gestionarCarrito.guardarEnStorage()
    gestionarCarrito.mostrarCompra(productos_carro)

  })
})



gestionarMother.listaProductosPlacas.forEach(producto => {

  const btnCarro = document.getElementById(`agregar-${producto.id}`)

  btnCarro.addEventListener("click", () => {

    gestionarCarrito.agregarCompra(producto)
    gestionarCarrito.guardarEnStorage()
    gestionarCarrito.mostrarCompra(productos_carro)

  })
})



gestionarRam.listaProductosRam.forEach(producto => {

  const btnCarro = document.getElementById(`agregar-${producto.id}`)

  btnCarro.addEventListener("click", () => {

    gestionarCarrito.agregarCompra(producto)
    gestionarCarrito.guardarEnStorage()
    gestionarCarrito.mostrarCompra(productos_carro)

  })
})

