// Verdulería digital
/* 
    1 mostrarle los productos al usuario
    2 saludar al usuario al ingresar por primera vez
    3 despedirme del usuario cuando para de comprar
    4 calcular una canasta con todos los prod que eligio
*/

// Lista productos

class Producto{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

const listaProd = document.getElementById("productos")
const carritoHTML = document.getElementById("carrito")
const totalHTML = document.getElementById("total")

const productos = [
    new Producto("Manzana", 3, 0),
    new Producto("pera", 5, 1),
    new Producto("Tomate", 10, 2),
]


const carrito = {
    contenido: [],
    calcularTotal:function(){
        return this.contenido.reduce((acumulador, e)=>acumulador + e.precio * e.cantidad, 0)
    },
    mostrarCarrito:function(){
        carritoHTML.innerHTML = ""
        this.contenido.forEach(e=>{
            const li = document.createElement("li")
            li.innerText = `${e.nombre} $${e.precio} x ${e.cantidad}`

            carritoHTML.appendChild(li)
        })
        totalHTML.innerText = "Total: $" + this.calcularTotal()
    },
    agregarProducto: function(prod, cantidad){
        const {nombre, precio, id} = prod
        const elementoCarrito = {nombre:nombre, precio:precio, id:id, cantidad:cantidad}
        let indice = -1
        if(this.contenido.some((ele, index)=>{
            if(prod.id===ele.id){
                indice = index
                return true
            } else {
                return false
            }
        })){
            this.contenido[indice].cantidad += cantidad
        } else {
            this.contenido.push(elementoCarrito)
        }
        this.mostrarCarrito()
    }
}

function listaProductos(){
    // Hace un texto con todos los productos
    listaProd.innerHTML = ""
    productos.forEach(p=>{
        const li = document.createElement("li")
        const div = document.createElement("div")
        const nombre = document.createElement("h4")
        const desc = document.createElement("p")
        const btn = document.createElement("button")

        nombre.innerText = p.nombre
        desc.innerText= "$"+p.precio
        btn.innerHTML="Agregar"

        btn.addEventListener("click", ()=>{
            carrito.agregarProducto(p, 1)
        })

        div.appendChild(nombre)
        div.appendChild(desc)
        div.appendChild(btn)

        li.appendChild(div)

        listaProd.appendChild(li)
    })
}

function comprarProducto(){
    // función que permite agregar productos al carrito y calcula el total
    listaProductos()
    let ciclo = true
    let total = 0

    // agregar productos al carrito
    while(ciclo){
        let prod = parseInt(prompt(texto))
        if(isNaN(prod)){
            alert("Ingreso un id incorrecto. Por favor ingrese un número.")
        } else if (prod>productos.length-1 || prod<0){
            alert(`El id es un número entero entre 0 y ${productos.length-1}`)
        } else {
            carrito.agregarProducto(productos[prod], 1)
        }
        ciclo = confirm("¿Desea agregar otro producto a su carrito?")
    }

    //calcular total
    total = carrito.calcularTotal()

    alert(`Su carrito es un total de $${total}.`)
}

function app(){
    listaProductos()
}

// Código ejecutado

app()