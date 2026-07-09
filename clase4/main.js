// Objetos literales

const gatito = {
    nombre: "michifus",
    edadAnios: 2,
    maullar: function(){
        console.log("miau")
    }
};

/* console.log(gatito)
console.log(gatito.nombre)
gatito.maullar()
 */
// Arrays

const nombres = ["andrés", "nicolás", "nicolás", "adrian", "gabriel", "mathias"]


/* console.log(nombres)
console.log(nombres.length)
console.log(nombres[2])

console.log(nombres)


// nombres[7] = "enzo"
nombres[0] = "enzo"

console.log(nombres)
*/






// console.table(nombres)

/* for(let i=0; i<nombres.length;i++){
    console.log(`#${i} - ${nombres[i]}`)
    } */

for(const nombre of nombres){
    console.log(nombre)
}


const numeros = [2,44,32,11,5]

/* console.log(numeros)
console.log(numeros.sort())
console.log(numeros) */
/* 
for(let i=0;i<numeros.length;i++){
    console.log(`$${numeros[i]} => $${numeros[i]*1.1}`)
    }
    */
const prod = [
    {nombre:"manzana",precio:3},
    {nombre:"pera",precio:5},
    {nombre:"tomate",precio:10},
]
    
    // console.log(prod)
    // console.table(prod)
    
/* for(let i=0;i<prod.length;i++){
console.log(`${prod[i].nombre}: $${prod[i].precio} => $${prod[i].precio*1.1}`)
} */
console.log(nombres)
// console.log(nombres.unshift("enzo"))
// console.log(nombres.push("enzo"))
// console.log(nombres.shift())
// console.log(nombres.pop())
// console.log(nombres.join())
// console.log(nombres.join("; "))
// console.log(nombres.includes("nicolás"))
// console.log(nombres.includes("javier"))
// console.log(nombres.sort())
// console.log(nombres.reverse())
console.log(nombres.sort().reverse())
// console.log(nombres.unshift("juan").reverse())
console.log(nombres)


function repetido(array, elementoEvaluar){
    const primero = array.indexOf(elementoEvaluar)
    const segundo = array.lastIndexOf(elementoEvaluar)

    let rta = ""
    if(primero === -1){
        rta = "No existe ese elemento"
    } else if(primero === segundo){
        rta = "No se repite"
    } else {
        rta = "Se repite"
    }
    return rta
}

/* console.log(repetido(nombres, "andrés"))
console.log(repetido(nombres, "enzo"))
console.log(repetido(nombres, "nicolás")) */

/* function cuantosHay(array, elementoEvaluar){
    let cantidad = 0
    for(let i = 0; i<array.length;i++){
        if(array[i] === elementoEvaluar){
            cantidad++
            // return "freno"
        }
    }
    return `El elemento ${elementoEvaluar} aparece ${cantidad} vez/veces`
} */

function cuantosHay(array, elementoEvaluar){
    let cantidad = 0

    for(const elemento of array){
        if(elemento === elementoEvaluar){
            cantidad++
        }
    }
    return `El elemento ${elementoEvaluar} aparece ${cantidad} vez/veces`
}

/* console.log(cuantosHay(nombres, "andrés"))
console.log(cuantosHay(nombres, "enzo"))
console.log(cuantosHay(nombres, "nicolás")) */


/* let paso1 = numeros.sort()
let paso2 = paso1.reverse() */

/* const trabajarNombres = []

for(nombre of nombres){
    trabajarNombres.push(nombre)
} */