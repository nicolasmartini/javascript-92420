const user = "comprador" ;
const pass_comprador = "pass1234" ;


solicitarDatos();

/**
 * funcion que solicita datos al usuario
 */
function solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña");

    let mensaje = validarDatos(usuario,pass) ;
    if (mensaje == ""){ 


            iniciarCarrito();



    }else{


        console.log(mensaje)
        alert (mensaje);

    }



}


function iniciarCarrito(){


    let lista = "" ;
    let finalizar_carrito = false ;

    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto:") ;

        let producto = obtenerProducto(cod);

        if (producto){

            lista += "\n -" + producto ;

        }else{

            if (cod === null){

                finalizar_carrito = true ;
            }else {


                    alert("Ingrese un codigo de producto valido");
            }


        }



        if (lista != "") {
            let resp = confirm("Desea concretar la compra de "+lista);

            if (resp) {

                alert("Usted compro" + lista) ;
                alert ("Gracias por comprar en nuestra tienda") ;
                finalizar_carrito = true ;

            }


        }


    }


 

}

function obtenerProducto(codigo){


    let producto ;

    switch (codigo){

        case "1" :

            producto = "Carne" ;
            break;

        case "2" :
            producto  = "Pollo";
            break;
        
        case "3" : 
            producto = "Zapallo" ;
            break;

        case "4" : 
            producto = "Detergente"
            break;

        case "5" : 
            producto = "Jabon de Tocador" ;
            break; 

           default :
           
           producto = false ;



    }


    return producto ;


}

/**
 * 
 * @param {*} usuario 
 * @param {*} pass 
 * @returns 
 */
function validarDatos(usuario,pass){

    let mensaje = "" ;

    if (!usuario){


        mensaje = "Es necesario ingresar un usuario .";


    }

    if (!pass){


        mensaje += "\n Es necesario ingresar un password .";


    }


    if (usuario != user  || pass != pass_comprador ){


             mensaje += "\nUsuario y/o pass incorrecto";
    }

    return mensaje ;






}
