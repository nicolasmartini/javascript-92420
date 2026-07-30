

/** devuelve solo una componenete si existe*/
let parWithId = document.getElementById("parWithId");

parWithId.style.textTransform = 'uppercase';

console.log(parWithId.innerHTML)


/**
 * devuelve una coleccion de componenetes que son de una tipo en particular
 */
let paragraph  = document.getElementsByTagName("p");

for (let i = 0 ; i < paragraph.length ;i++){

    paragraph[i].style.color = "red";

}

console.log(paragraph);

/**
 * devuelve una coleccion de componenetes que son de una clase en particular
 */
let parWithClass = document.getElementsByClassName("parWithClass");

for (let i = 0 ; i < parWithClass.length ;i++){

    parWithClass[i].style.textDecoration = "underline";
  //  parWithClass[i].style.color = "yellow";

}


let parQuery = document.querySelector("p #parSpan");
parQuery.style.backgroundColor = '#5a5ada';
parQuery.style.color = '#fff';



let imgWithAtt = document.getElementById('imgWithAtt');
console.log("-attributes de un elemento: ");
console.log(imgWithAtt.attributes);


let imgToChangeAtt = document.getElementById('imgToChangeAtt');
imgToChangeAtt.setAttribute("src","https://dummyimage.com/200x120/5a5ada/aaa");
//imgToChangeAtt.src="https://dummyimage.com/200x120/5a5ada/aaa";






