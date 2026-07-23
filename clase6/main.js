// !5 = 5*4*3*2*1
/* 
let nro = 5
let factorial = 1
for(let i=1;i<=nro;i++){
    factorial*=i
}
console.log(factorial)
*/

/* function calcularFactorial(nro){
    // funcion que calcula factorial de nro
    nro = parseInt(nro)
    if(isNaN(nro)){
        return NaN
    } else if(nro <=1){
        return 1
    }

    return nro * calcularFactorial(nro-1)

}

console.log("función", calcularFactorial(5))

function dx(caras){
    return ()=> 1 + Math.floor(caras * Math.random())
}

const d6 = dx(6)

console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())

const d20 = dx(20)

console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20()) */




const productos = [
    {nombre:"Manzana",precio:3,id:0},
    {nombre:"Pera",precio:5,id:1},
    {nombre:"Tomate",precio:10,id:2},
    {nombre:"Papa",precio:1,id:3},
    {nombre:"Frambuesa",precio:15,id:4},
]

const aplicarFuncion = (funcion, arreglo)=>{
    // aplica una funcion a cada elemento del arreglod ado
    for(let i=0;i<arreglo.length;i++){
        funcion(arreglo[i])
    }
}

/* aplicarFuncion(console.log,productos) */

const predecirPrecioInflacion = function(producto, inflacion=1.5){
    console.log(`El precio de ${producto.nombre} aumentaría de ${producto.precio} con una inflación de %${(inflacion-1)*100} a un valor de ${producto.precio*inflacion}`)
}
/* 
aplicarFuncion(predecirPrecioInflacion, productos) */

/* productos.forEach((elemento)=>{
    predecirPrecioInflacion(elemento,1.17)
}) */

/* console.log(productos.find(function(elemento){
    const validacion = elemento.id === 3
    console.log(validacion)
    return validacion
})) */

/* const buscarId = (id)=>{
    return productos.find(prod=>prod.id === id)
}

console.log(buscarId(1))


console.log("Qué productos salen menos de 7?", productos.filter(prod=>prod.precio<7))

console.log("Puedo comprar algo con 5?", productos.some(function(producto){
    return producto.precio <= 5 
}))


console.log(productos.map(e=>e.nombre))


console.log("Qué productos salen menos de 7?", productos.filter(prod=>prod.precio<7).map(prod=>prod.nombre)) */
console.log("original",productos)

const productosTesteo = productos.map(e=>{
    // eviten pasar objetos por referencia
    const nuevoProd = {nombre:e.nombre,precio:e.precio,id:e.id}
    nuevoProd.precio *= 1.2
    return nuevoProd 
})

/* console.log("original",productos) */
console.log("testeo", productosTesteo)


const carrito = [
    {nombre:"Manzana",precio:3,id:0, cantidad:3},
    {nombre:"Pera",precio:5,id:1, cantidad:2},
    {nombre:"Tomate",precio:10,id:2, cantidad:0},
    {nombre:"Papa",precio:1,id:3, cantidad:1},
    {nombre:"Frambuesa",precio:15,id:4, cantidad:10},
]

/* let total = 0

const precioPorProducto = carrito.map(e=>e.precio*e.cantidad)
console.log(precioPorProducto)
for(const monto of precioPorProducto){
    total += monto
}

console.log(total) */


// calcular total
const total = carrito.reduce(function(acumulador, elemento){
    return acumulador + elemento.precio * elemento.cantidad
}, 0)

console.log(total)

// mostrar carrito
const stringCarrito = carrito.reduce((acumulador, prod)=>{
    const texto = acumulador + `\n ${prod.cantidad} ${prod.nombre}${prod.cantidad===1?"":"s"} a $${prod.precio} c/u : $${prod.precio * prod.cantidad}`
    return texto
}, "En este carrito hay:")

console.log(stringCarrito)

function ordenarMenorMayor (){
    productos.sort((primer, segundo)=>{
        const diferenciaPrecio = primer.precio - segundo.precio
        return diferenciaPrecio
    })
}

function ordenarMayorMenor (){
    productos.sort((primer, segundo)=>{
        const diferenciaPrecio = segundo.precio - primer.precio
        return diferenciaPrecio
    })
}

function idParImpar (){
    productos.sort((primer, segundo)=>{
        let primerId = primer.id %2
        let segundoId = segundo.id %2
        let diferencia = primerId - segundoId

        return diferencia
    })
}

console.table(productos)

//ordenarMenorMayor()
//ordenarMayorMenor()
idParImpar()

console.table(productos)