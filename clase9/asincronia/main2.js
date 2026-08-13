let data = [

    {"message":"https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_4879.jpg","status":"success"},
    {"message":"https:\/\/images.dog.ceo\/breeds\/rottweiler\/n02106550_4150.jpg","status":"success"},
    {"message":"https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_4819.jpg","status":"success"}

]




const getDogImg = () =>{


return new Promise((resolve,reject)=>{

    setTimeout(()=>{

        let numero = Math.floor(Math.random()*6) ;
        console.log("salio el numero "+numero);

        if (numero > 3) {

            reject("No se encontro la imagen");

        }else{

            resolve(data[numero]) ;

        }



    },3000);


})


}


let imgCtn = document.getElementById("imgCtn");


getDogImg().then(objeto =>{


    let dogImg = document.createElement("img");
    dogImg.src = objeto.message ;
    dogImg.style.width = "300px";

    imgCtn.appendChild(dogImg) ;


}).catch(err =>{


    console.log("error a lcargar imagen ",err) ;


})