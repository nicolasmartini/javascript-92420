// swal
// https://sweetalert2.github.io/

const btnSwal = document.querySelector("#btnSwal")
const btnLista = document.querySelector("#verLista")
const lista = document.querySelector("#lista")


// btnSwal.addEventListener("click", ()=>(Swal.fire({
//   title: "Auch!",
//   text: "¡No me toqués!",
//   icon: "error"
// })))
/* btnSwal.addEventListener("click", ()=>(Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
}).fire({
  icon: "success",
  title: "Producto agregado al carrito"
}))) */

// toastify
// https://apvarun.github.io/toastify-js/

const botonToastify = document.querySelector("#botonToastify")

/* botonToastify.addEventListener("click", ()=>(Toastify({
  text: "Me clickeaste",
  duration: 2000,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #e0e4e3, #cf6604)",
  },
  onClick: function(){
    Swal.fire({
      title: "Auch!",
      text: "¡No me toqués!",
      icon: "error"
    })
  } // Callback after click
}).showToast())) */


// Luxon
// https://moment.github.io/luxon/#/?id=luxon

console.log(new Date())

const DateTime = luxon.DateTime;

/* console.log(DateTime.local(2017, 5, 15, 8, 30))
console.log(DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_MED)) 
console.log(DateTime.now().toLocal().toLocaleString(DateTime.DATETIME_MED)) 
 */
// btnToast.addEventListener("click", ()=>{
//   Toastify({
//         text: DateTime.now().toFormat('MMMM dd, yyyy, hh  :mm:ss'),
//         duration: 5000,
//         newWindow: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//           background: "linear-gradient(to right, blueviolet, blue)",
//         }
//       }).showToast();
// })


/* function mostrarProductos(){
  fetch("./products.json")
  .then(rta=>rta.json())
  .then(respuesta=>{
    lista.innerHTML = ""
    respuesta.forEach(prod=>{
      const li = document.createElement("li")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const btn = document.createElement("button")

      h3.innerText = prod.name
      p.innerText = prod.price
      btn.innerText = "Comprar"

      li.appendChild(h3)
      li.appendChild(p)
      li.appendChild(btn)

      lista.appendChild(li)
    })
  })
  .catch(e=>console.warn("Loco metiste la pata:", e))
} */

/* async function mostrarProductos(){
  
  try{
    const datosJSON = await fetch("./products.json")
    const datosParseados = await datosJSON.json()
    
    lista.innerHTML = ""
    datosParseados.forEach(prod=>{
      const li = document.createElement("li")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const btn = document.createElement("button")
  
      h3.innerText = prod.name
      p.innerText = prod.price
      btn.innerText = "Comprar"
  
      li.appendChild(h3)
      li.appendChild(p)
      li.appendChild(btn)
  
      lista.appendChild(li)
    })
  }catch(error){
    console.warn("El error es:", error)
  }
}
btnLista.addEventListener("click", mostrarProductos)
*/

async function mostrarPokemon(){
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"

  try{
    const datosJSON = await fetch(url)
    const datosParseados = await datosJSON.json()
    
    lista.innerHTML = ""

    datosParseados.results.forEach(poke=>{
      const li = document.createElement("li")
      
      li.innerText = poke.name
  
      lista.appendChild(li)
    }) 
  }catch(error){
    console.warn("El error es:", error)
  }
}

btnLista.addEventListener("click", mostrarPokemon)
