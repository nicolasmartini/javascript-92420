// 🟠 Storage 🟠
// Los distintos tipos de almacenamiento

// 🔶 JSON 🔶
// JavaScript Language Notation
// Es un formato de información que permite intercambiar datos entre distintos lenguajes
// Se pueden crear archivos de formato JSON con ".json"
// En burdo, combierte los datos en un string de manera que puedan ser interpretados
// NO SIRVE PARA FUNCIONES

// 🔸 Objeto JSON 🔸
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON
// Es el objeto con métodos que tiene Js para manipular/convertir datos relacionados a JSON


// 🔹 Stringify 🔹 
// JSON.stringify(variable)
// Convierte una variable en un string JSON

// 🔹 Parse 🔹 
// JSON.parse(variable)
// Convierte un string JSON en datos de JS

// 🟡 Los arrays paran de ser  convierten a JSON y se vuelven a Js
// ⛔ Los objetos pierden sus métodos al convertirse en JSON

// 🔶 Local Storage 🔶
// https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
// Informacion que se guarda localmente en el ordenador
// Solo maneja strings (los JSON son strings)
// El objeto es localStorage
// localStorage.setItem("Numero", 33)

// 🔸 setItem 🔸
// Guarda un valor en el localStorage
// ambos son strings
// localStorage.setItem(clave, valor)

// 🔸 getItem 🔸
// Busca un valor en el localStorage
// La clave siemrpe es uns tring
// localStorage.setItem(clave)
// retorna el string asociado a la clave
// de no encontrar la clave retorna "null"

// 🔸 clear 🔸
// Limpia el local storage
// localStorage.clear()

// 🔶 Session Storage 🔶
// https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage
// Guarda información localmente en el ordenador por la sesión actual (hasta que se cierre el ordenador)
// El objeto es sessionStorage
// Solo maneja strings (los JSON son strings)
// Tiene los mismos métodos que el localStorage


// let numero

// sabemos que si no lo encuentra es null
// null es falsey
// if(localStorage.getItem("Numero")===null||localStorage.getItem("Numero")===NaN){
//     numero = "No se ha ingresado un nro previamente"
// } else {
//     numero = localStorage.getItem("Numero")
// }

// const guardarNro = ()=>{
//     const pedirNro = prompt(`Ingrese un número.\n El nro anterior es: ${numero}`)
//     localStorage.setItem("Numero", Number(pedirNro))
// }

// guardarNro()
