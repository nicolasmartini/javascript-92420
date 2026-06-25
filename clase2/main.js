// console.log( !true || false && true )

/* console.log(2 < 3)
console.log(2 < 2)
console.log(2 < 1)

console.log(2 <= 3)
console.log(2 <= 2)
console.log(2 <= 1) */

/* console.log(1 === 1)
console.log(1 === "1")
console.log(1 === 1n) */

/* console.log(1 !== 1)
console.log(1 !== "1")
console.log(1 !== 1n) */

/* console.log(1 == 1)
console.log(1 == "1")
console.log(1 == 1n)

console.log(1 == true)
console.log(0 == false)
console.log(0 == true) */


/* const edad = parseInt(prompt("Cuantos años tenes?"))

console.log(edad) */

/* if(edad >= 18){
    alert("sos mayor de edad")
} else {
    alert("sos menor de edad")
} */

/* if(edad > 17){
    alert("sos mayor de edad")
} */

/* if(isNaN(edad)){
    alert("dato incorrecto")
} else if(edad >= 18){
    alert("sos mayor de edad")
    if(edad>=70){
        alert("estas viejo/a")
    }
} else {
    alert("sos menor de edad")
} */

// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir

/* 
-Andrés 1a 
-Diana 1b
-Jaime 2a
-Juan 2a
-Laura 2b
-matilda 3
*/



/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
    case "andres":
        alert("1A")
        break
    case "diana":
        alert("1B")
        break
    case "jaime":
        alert("Hola Jaime buen día")
    case "juan":
        alert("2A")
        break
    case "laura":
        alert("2B")
        break
    case "matilda":
        alert("3")
        break
    default:
        alert("Usted no vive aqui")
}  */

// for(let i=0; i<=3; i=i+1 ){
// for(let i=0; i<=3; i+=1 ){
/* for(let i=0; i<=3; i++ ){
    console.log(i)
} */

// !5 = 1*2*3*4*5 = 120


/* const factorial = parseInt(prompt("Ingrese el numero a calcular el factorial:"))

let resultado = 1

for(i=1;i<=factorial;i++){
    // resultado = resulado * i
    resultado *= i
}

console.log("resultado", resultado) */

/* 
for(let i=0; i<=3; i++ ){
    console.log(i)
}
*/

let numero = 0

/* while(numero<=3){
    console.log(numero)
    // numero++
    numero = numero + 1
} */

/* while(numero<=3){
    console.log(numero++)
} */
/* while(numero<=3){
    console.log(++numero)
} */

/* let saludo = false
let despedida = false


while(saludo){
    alert("¡HOLA!😀")
    saludo = confirm("¿Otro saludo?")
}

do{
    alert("¡Chau!😥")
    despedida = confirm("¿Otra despedida?")
} while(despedida)  */

/* const usuarioCorrecto  = "admin" ;
const claveCorrecta = "1234" ;

let usuario = prompt("ingrese su usuario");
let clave = prompt("ingrese su clave");

while(usuario !== usuarioCorrecto || clave !== claveCorrecta){
    alert("Ingresó datos erróneos, intente nuevamente.");
    usuario = prompt("ingrese su usuario nuevamente:");
    clave = prompt("ingrese su clave nuevamente:");
}; */


// Validación de usuario y contraseña
// variable a ser evaluada
/* let validado = false

do{
    // Datos del sistema
    const usuarioCorrecto  = "admin" ;
    const claveCorrecta = "1234" ;

    // Datos ingresados
    let usuario = prompt("ingrese su usuario");
    let clave = prompt("ingrese su clave");

    // Validación
    validado = usuario === usuarioCorrecto && clave === claveCorrecta;

    // Indicar al usuario el resultado de validación
    if(validado){
        alert("Puede ingresar");
    } else {
        alert("Ingresó datos erróneos, pruebe nuevamente...");
    }
}while(!validado); */



// Ejemplo feo con ciclo while true, está mal
do{
    let validado = false
    // Datos del sistema
    const usuarioCorrecto  = "admin" ;
    const claveCorrecta = "1234" ;

    // Datos ingresados
    let usuario = prompt("ingrese su usuario");
    let clave = prompt("ingrese su clave");

    // Validación
    validado = usuario === usuarioCorrecto && clave === claveCorrecta;

    // Indicar al usuario el resultado de validación
    if(validado){
        alert("Puede ingresar");
        break; // El break frena el ciclo, pero está mal
    } else {
        alert("Ingresó datos erróneos, pruebe nuevamente...");
    }
}while(true);