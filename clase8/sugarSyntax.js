// 🔶 Ternarios 🔶
/* 
Un ternario es un algoritmo que combina en una sola línea un if...else con un return.

condición ? siVerdadero : siFalso

if(condinción){
    return siVerdadero
} else {
    return siFalso
}

Si la condición dada es verdadera, hace un return del valor de siVerdadero, si es falsa, da un return del siFalso

*/

// 🔶 Optional Chaining 🔶

/*

Se fija si existe el objeto antes de acceder a la propiedad 

*/

// 🔶 Spread Operator 🔶
/* 
El spread operator "..." al utilizarce separa un iterable en sus elementos. Los esparce. Es muy útil para combinar arrays y objetos.

const a = ["a", "b", "c"]
const b = [...a, "d", "e", "f"]

console.log(b) // ["a", "b", "c", "d", "e", "f"]

*/

// 🔶 Rest parameters 🔶
/* 
El rest parameters utiliza el operator spread "..." al utilizarce antes de un parámetro iterable, permite que se pongan 0 o más argumentos combinandolos en un array.

funcion verParametro(...parametroIterable){
    return parametroIterable
}

console.log(verParametro(1,2,3,4)) // [1,2,3,4]
*/


// 🔶 Destructuring 🔶

/* 
La desestructuración permite asignar valores a elementos o propiedades de arrays y objetos para llamarlos individualmente y manipularlos.

const gato = {nombre:"muichifus", anios:2}

const {nombre, edad} = gato

console.log(edad) // 2

Es muy importante el tener en cuenta el orden de los elementos.

*/