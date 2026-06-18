
//datos del usuario a validar
const usuarioCorrecto  = "admin" ;
const claveCorrecta = "1234" ;

/*

Se solicta datos al usuario

*/
let usuarioIngresado = prompt("Ingrese su usuario"); 
let pass = prompt("Ingrese su contaseña");


console.log("Tipo de dato de usuario: ",typeof usuarioIngresado);
console.log("Tipo de dato de usuario: ",typeof pass);



if ((usuarioCorrecto == usuarioIngresado) && (claveCorrecta == pass)){   
    alert("¡Inicio de sesión exitoso! Bienvenido.");
}else{
   alert("Error: Usuario o contraseña incorrectos.");
}





