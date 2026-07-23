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


const productos = [
    new Producto("Manzana", 3, 0),
    new Producto("pera", 5, 1),
    new Producto("Tomate", 10, 2),
]

const carrito = {
    contenido: [],
    agregarProducto: function(prod, cantidad){
        const elementoCarrito = {nombre:prod.nombre, precio:prod.precio, id:prod.id, cantidad:cantidad}
        let indice = -1
        if(this.contenido.some((ele, index)=>{
            console.log(index)
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
    },
    calcularTotal:function(){
        return this.contenido.reduce((acumulador, e)=>acumulador + e.precio * e.cantidad, 0)
    }
}

function listaProductos(){
    // Hace un texto con todos los productos
    let texto = "Los productos que tenemos son:"
    for(let i=0;i<productos.length;i++){
        texto += `\n [${i}] ${productos[i].nombre} - $${productos[i].precio}`
    }
    return texto
}

function comprarProducto(){
    // función que permite agregar productos al carrito y calcula el total
    let texto = listaProductos() + "\nIngrese el id del producto que desea comprar."
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
    alert("Bienvenido a Verdura Online")

    comprarProducto()

    alert("¡Gracias por visitar nuestro sitio!")
}

// Código ejecutado

app()