// Verdulería digital
/* 
    1 mostrarle los productos al usuario
    2 saludar al usuario al ingresar por primera vez
    3 despedirme del usuario cuando para de comprar
    4 calcular una canasta con todos los prod que eligio
*/

// Lista productos
const productos = [
    {nombre:"Manzana",precio:3},
    {nombre:"Pera",precio:5},
    {nombre:"Tomate",precio:10},
]

const carrito = []

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
        } else if (prod>productos.length || prod<0){
            alert(`El id es un número entero entre 0 y ${productos.length-1}`)
        } else {
            carrito.push(productos[prod])
        }
        ciclo = confirm("¿Desea agregar otro producto a su carrito?")
    }

    //calcular total
    for(const productoCarrito of carrito){
        total += productoCarrito.precio
    }

    alert(`Su carrito es un total de $${total}.`)
}

function app(){
    alert("Bienvenido a Verdura Online")

    comprarProducto()

    alert("¡Gracias por visitar nuestro sitio!")
}

// Código ejecutado

app()