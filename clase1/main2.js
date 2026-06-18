
//creo una constante del año actual
const ANIO_ACTUAL = 2026 ;
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let anio_nac = prompt("Ingrese su año de nacimiento") ;

//calculo la edad
let edad = ANIO_ACTUAL - parseInt(anio_nac) ;

if (isNaN(edad)){

    alert("NO INGRESARTE UN NUMERO");


}else{


    let mensaje = "Confirmas que tus datos son :\n"
    mensaje  = mensaje + "-nombre: " + nombre + "\n" ;
    mensaje  = mensaje + "-apellido: " + apellido +"\n";
    mensaje  = mensaje + "-edad: " + edad + "\n";
    mensaje  +=  "??? " ;


    let respuesta = confirm(mensaje);

    if (respuesta){

        alert("Bienvenido al Sistema");


    }else{

        alert("Ingresa nuevamente los datos");


    }

   

}
