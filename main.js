
class NuestrosProductos {
  constructor() {
    this.listaProductos = []
    this.listaProductosProcesadores = []
    this.listaProductosPlacas = []
    this.listaProductosRam = []
  }

  async levantarProcesadores(gestionarCarrito) {
    const resp = await fetch("productos.json")
    this.listaProductos = await resp.json()
    this.listaProductosProcesadores = this.listaProductos.filter(t => t.type === "procesador")

    this.mostrarDomProcesador()
    this.darEventoClickProcesador(gestionarCarrito)
  }

  async levantarMother(gestionarCarrito) {
    const resp = await fetch("productos.json")
    this.listaProductos = await resp.json()
    this.listaProductosPlacas = this.listaProductos.filter(t => t.type === "mother")

    this.mostrarDomPlaca()
    this.darEventoClickMother(gestionarCarrito)
  }

  async levantarRam(gestionarCarrito) {
    const resp = await fetch("productos.json")
    this.listaProductos = await resp.json()
    this.listaProductosRam = this.listaProductos.filter(t => t.type === "ram")

    this.mostrarDomRam()
    this.darEventoClickRam(gestionarCarrito)
  }

  mostrarDomProcesador() {
    this.listaProductosProcesadores.forEach(Producto => (
      procesador.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title text-center">${Producto.nombre}</h5>
       <p class="card-text text-center">$${Producto.precio}</p>
       <a id="agregar-${Producto.id}" class="btn btn_producto btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }

  mostrarDomPlaca() {
    this.listaProductosPlacas.forEach(Producto => (
      mother.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title text-center">${Producto.nombre}</h5>
       <p class="card-text text-center">$${Producto.precio}</p>
       <a id="agregar-${Producto.id}" class="btn btn_producto btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }


  mostrarDomRam() {
    this.listaProductosRam.forEach(Producto => (
      ram.innerHTML += `<div class="card d-flex  mt-2" style="width: 18rem;">
     <img src="${Producto.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title text-center">${Producto.nombre}</h5>
       <p class="card-text text-center">$${Producto.precio}</p>
       <a id="agregar-${Producto.id}" class="btn btn_producto btn-primary">Añadir al carro</a>
     </div>
    </div>`
    ))
  }

  darEventoClickProcesador(gestionarCarrito) {
    this.listaProductosProcesadores.forEach(producto => {

      const btnCarro = document.getElementById(`agregar-${producto.id}`)

      btnCarro.addEventListener("click", () => {

        gestionarCarrito.agregar(producto)
        gestionarCarrito.guardarEnStorage()
        gestionarCarrito.mostrarCompra(productos_carro)

        Toastify({
          text: `${producto.nombre} añadido!`,
          duration: 3000,
          
          gravity: "bottom",
          position: "right",
  
          style: {
              background: "linear-gradient(to right, #b02f00, #b2c93d)",
          }
      }).showToast();


      })
    })
  }


  darEventoClickMother(gestionarCarrito) {
    this.listaProductosPlacas.forEach(producto => {

      const btnCarro = document.getElementById(`agregar-${producto.id}`)

      btnCarro.addEventListener("click", () => {

        gestionarCarrito.agregar(producto)
        gestionarCarrito.guardarEnStorage()
        gestionarCarrito.mostrarCompra(productos_carro)

        Toastify({
          text: `${producto.nombre} añadido!`,
          duration: 3000,
          
          gravity: "bottom",
          position: "right",
  
          style: {
              background: "linear-gradient(to right, #b02f00, #b2c93d)",
          }
      }).showToast();

      })
    })
  }

  darEventoClickRam(gestionarCarrito) {
    this.listaProductosRam.forEach(producto => {

      const btnCarro = document.getElementById(`agregar-${producto.id}`)

      btnCarro.addEventListener("click", () => {

        gestionarCarrito.agregar(producto)
        gestionarCarrito.guardarEnStorage()
        gestionarCarrito.mostrarCompra(productos_carro)

        Toastify({
          text: `${producto.nombre} añadido!`,
          duration: 3000,
          
          gravity: "bottom",
          position: "right",
  
          style: {
              background: "linear-gradient(to right, #b02f00, #b2c93d)",
          }
      }).showToast();
      })
    })
  }
}

class CarritoDeCompras {
  constructor() {
    this.listaCarro = []
    this.productos_carro = document.getElementById("productos_carro")
    this.total = document.getElementById("precio_total")
  }



  comprobarSiExisteProducto(producto) {
    return this.listaCarro.find((elproducto) => elproducto.id == producto.id)
  }

  agregar(producto) {

    let objeto = this.comprobarSiExisteProducto(producto)

    if (objeto) {
      objeto.cantidad += 1;
    } else {
      {
        this.listaCarro.push(producto)
      }
    }
  }



  guardarEnStorage() {
    let listaCarroJSON = JSON.stringify(this.listaCarro)
    localStorage.setItem("listaCarro", listaCarroJSON)
  }


  levantarDeStorage() {
    this.listaCarro = JSON.parse(localStorage.getItem('listaCarro')) || []
    if (this.listaCarro.length > 0) {
      this.mostrarCompra()
    }
  }

  limpiarCarroStorage() {
    localStorage.removeItem("listaCarro")
  }

  limpiarCarro() {
    this.productos_carro.innerHTML = ""
    this.total.innerHTML = ""
  }


  borrar(producto) {
    let posicion = this.listaCarro.findIndex(miProducto => producto.id == miProducto.id)

    !(posicion == -1) && this.listaCarro.splice(posicion, 1) 
  }

  mostrarCompra() {

    this.limpiarCarro()
    this.listaCarro.forEach(producto => {
      productos_carro.innerHTML += `
      <div class="card card_carro mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${producto.img}" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center">Precio : $${producto.precio}</p>
            <p class="card-text text-center">cantidad : ${producto.cantidad}</p>
            <button class="btn btn-dark" id="borrar-${producto.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>`
    })

    this.listaCarro.forEach(producto => {
      const btnBorrar = document.getElementById(`borrar-${producto.id}`)

      btnBorrar.addEventListener("click", () => {
        this.borrar(producto)
        this.guardarEnStorage()
        this.mostrarCompra()
      })
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
const gestionarCarrito = new CarritoDeCompras()
gestionarProcesadores.levantarProcesadores(gestionarCarrito)
const gestionarMother = new NuestrosProductos()
gestionarMother.levantarMother(gestionarCarrito)
const gestionarRam = new NuestrosProductos()
gestionarRam.levantarRam(gestionarCarrito)


// DOM

const catalogo = document.getElementById("catalogo")
gestionarProcesadores.mostrarDomProcesador()
gestionarMother.mostrarDomPlaca()
gestionarRam.mostrarDomRam()


//VERIFICO SI CARROCOMPRAS EXISTE EN DOM

gestionarCarrito.levantarDeStorage()


const finalizar_compra = document.getElementById("finalizar_compra")
finalizar_compra.addEventListener("click", () => {

  if(gestionarCarrito.listaCarro.length > 0) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Compra finalizada con exito',
    showConfirmButton: false,
    timer: 1500
  })}

  gestionarCarrito.limpiarCarro()

  gestionarCarrito.limpiarCarroStorage()

  gestionarCarrito.listaCarro = []
})