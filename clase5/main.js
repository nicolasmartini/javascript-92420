//Cliente 1
let cliente1 = new Cliente(1,"Jorge","Apellido");
let cuenta1 = new Cuenta(11111,"$");
cuenta1.acreditar(1000);

cliente1.setCuentaPesos(cuenta1);
cliente1.setCuentaDolares(new Cuenta(22222,"U$D"));

//Cliente 2
let cliente2 =  new Cliente(2,"Maria","Jimenez");
cliente2.setCuentaPesos(new Cuenta(33333,"$"));
cliente2.setCuentaDolares(new Cuenta(44444,"U$D"));



let mensaje = "Bienvenido al sistema de tranferencias";
mensaje +="\nInfo de clientes:";
mensaje +="\n"+cliente1.getDatos();
mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
mensaje +="\n--------------------------";
mensaje +="\n"+cliente2.getDatos();
mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
alert(mensaje);


let tranferencia = true ;

while (tranferencia){


    let cliente1 = getCliente();

    if (cliente1){

        let cliente1_cuenta = getCuentaCliente(true,cliente1);

         if (cliente1_cuenta){

              let cliente2_cuenta = getCuentaCliente(false,cliente2);
                  if (cliente2_cuenta){

                       let monto = parseFloat(prompt("Ingrese el monto a transferir"));
                       if (monto){

                            mensaje = "antes de la tranferencia";
                            mensaje +="\n"+cliente1.getDatos();
                            mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
                            mensaje +="\n"+cliente2.getDatos();
                            mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
                            console.log(mensaje);

                            transferir(monto,cliente1_cuenta,cliente2_cuenta);

                            mensaje = "despues de la tranferencia";
                            mensaje +="\n"+cliente1.getDatos();
                            mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
                            mensaje +="\n"+cliente2.getDatos();
                            mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
                            console.log(mensaje);




                       }else{

                            alert("No se indico un monto valido")
                        }

                  }else{
                    
                    alert("No se indico cuenta destino")

                  }

         }else{

              alert("No se indico cuenta origen")

         }



   }else{

        alert("No se indico un cliente correcto")


    }

      tranferencia = confirm("Desea realizar otra transferencia ?");



}


function transferir(monto,cuenta_origen,cuenta_destino){

   if (cuenta_origen && cuenta_destino) {

       if (cuenta_destino.getTipo() === cuenta_destino.getTipo()){

         if (cuenta_origen.tieneSaldo(monto)){

            cuenta_origen.debitar(monto);
            cuenta_destino.acreditar(monto);
            alert("Tranferecnia exitosa");

         } else{


                alert("No es posible tranferir. Saldo insuficiente.") ;


         }

 
       }else{

            alert("las cuuentas no son del mismo tipo");

       }


   }   else{
    
        alert("NO se encontro cuenta origen y/o destino ");
    }



}

function getCliente(){

    let nro_cliente = prompt("Indique nro de cliente");

    if (nro_cliente == cliente1.nro_cliente) {

        return cliente1 ;

    }

    else if (nro_cliente == cliente2.nro_cliente){

        return cliente2

    }

    return null ;


}


function getCuentaCliente(origen,cliente){
    let mensaje = "Indique cuenta";
    if (origen) {
       
        mensaje += " origen:"

    }else {

        mensaje += " destino:"


    }

    mensaje+= "\n 1) "+cliente.getCuentaPesos().getDescripcion() ;
    mensaje+= "\n 2) "+cliente.getCuentaDolares().getDescripcion() ;

    let resp = prompt(mensaje);
    if (resp == 1 ){


        return cliente.getCuentaPesos();

    }

    if (resp == 2 ){


        return cliente.getCuentaDolares();

    }


    return false ;


}









