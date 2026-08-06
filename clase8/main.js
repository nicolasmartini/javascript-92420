/* 
const saludos = document.getElementById("saludos")

const datosCargados = true

//const datos = null

const datos = {nombre: "Andrés"}

function ternario(booleano){
    if(booleano){
        return datos?.nombre
    } else {
        return "inversor"
    }
}

function saludar(){
    const nombre = ternario(datosCargados)
    //const nombre = datosCargados ? datos?.nombre : "inversor"
    saludos.innerText = `Bienvenido a mi página ${nombre}`
}

saludar()
*/




/* const clientes = {
    empresa1:["Juan", "Carlos"],
    empresa2:["Pedro"],
    empresa3:["Mariana", "Julieta"],
}

const formularioCliente = document.getElementById("formularioClientes")
const selectCliente = document.getElementById("clientes")
const listaCliente = document.getElementById("listaClientes")

formularioCliente.addEventListener("change", (e)=>{
    e.preventDefault()
    const valorClientes = selectCliente.value
    console.log(valorClientes)
    const clientesMostrar = valorClientes != "0" ? clientes["empresa"+valorClientes] : [...clientes.empresa1, ...clientes.empresa2, ...clientes.empresa3]

    listaCliente.innerHTML = ""
    clientesMostrar.forEach(cliente=>{
        console.log(cliente)
        const li = document.createElement("li")
        li.innerHTML = cliente

        listaCliente.appendChild(li)
    })
    
})

console.log(clientes["empresa1"]) */

/* function gritoTodo(primer,...gritame){
    console.log(primer)
    console.log(gritame)
    gritame.forEach(e=>{
        console.log(e.toUpperCase())
    })
}

gritoTodo("Hola", "me llamo Andrés", "saludos a todos")

 */


/* class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

class elementoCarrito {
    constructor(nombre, precio, id, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.cantidad = cantidad
    }
}


const carrito = {
    contenido: [],
    agregarProducto: function(producto, cantidad){
    //const nombre = producto.nombre
    //const precio = producto.precio
    //const id = producto.id
    const {nombre, precio, id} = producto
    console.log(nombre)
    console.log(id)
    this.contenido.push(new elementoCarrito(nombre, precio, id, cantidad))

    }
}

const productos = [
    new Producto("Manzana", 3, 0),
    new Producto("pera", 5, 1),
    new Producto("Tomate", 10, 2),
] 

carrito.agregarProducto(productos[1], 5)

console.log(carrito.contenido) */

//const dato = 4556

//console.log(typeof dato, dato)

//const datoGuardado = localStorage.getItem("numero")
//const datoParseado = Number(datoGuardado)

////console.log(typeof datoGuardado, datoGuardado)
//console.log(typeof datoParseado, datoParseado)

class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    prueba= function(){console.log("prueba")}
}

const productos = [
    new Producto("Manzana", 3, 0),
    new Producto("pera", 5, 1),
    new Producto("Tomate", 10, 2),
] 

function guardarProductos(){
    const productosJSON = JSON.stringify(productos)
    console.log(productosJSON)

    localStorage.setItem("productos", productosJSON)
}

const traerProductos = ()=>{
    const productosStorage = localStorage.getItem("productos")
    const productosParseados = JSON.parse(productosStorage)

    //console.log(typeof productosStorage,productosStorage)
    console.log(typeof productosParseados,productosParseados)

    const productosClase = productosParseados.map(p=>{
        return new Producto(p.nombre, p.precio, p.id)
    })
    console.log(typeof productosClase,productosClase)
    productosClase[0].prueba()
}

//traerProductos()


