

let promesa1 = new Promise((resolve,reject)=>{


    setTimeout(function(){

        resolve("promesa resuelta");

    },1500);


    setTimeout(function(){


        reject("promesa rechazada");

    },2500);



});


promesa1.then((succesMessage)=>{


    console.log("Resultado de la promesa 1: "+succesMessage);

}).catch((errorMessagge) =>{

    console.log("Error de promesa 1: "+errorMessagge);


})



