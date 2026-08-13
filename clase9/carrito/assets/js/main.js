// Variables Globales
let carrito       = [];
let productos     = [];

let gestor;
const DateTime = luxon.DateTime
const key_actualizacion = "ultima_actualizacion";
const key_carrito = "carrito";


const url = './assets/js/db.json';


// Evento que se dispara cuadno se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

   
    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    carrito = JSON.parse( localStorage.getItem(key_carrito) ) || [];

    let ingreso = localStorage.getItem(key_actualizacion);

    ingreso ? console.log("Ultimo ingreso" + ingreso) : console.log("no esta registrado el ultimo ingreso");

    gestor = new GestionarProductos();
    gestor.iniciar();
})








