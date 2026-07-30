
let coleccion_perros = new Array();

let avisos = document.getElementById("avisos");

let btn_crear = document.getElementById("btn_crear");

btn_crear.addEventListener("click",() =>{


    if (validar_formulario()){

        generarPerro();

    }

})


function generarPerro(){

    let nombre = document.getElementById("nombre").value;
    let raza = document.getElementById("raza").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let castrado = document.getElementById("castrado").checked;
    let foto = document.getElementById("ruta_foto").value;

    let perro = new Perro(nombre,raza,edad,genero,castrado,foto);
    coleccion_perros.push(perro);

    generar_card_perro(perro);

}


function generar_card_perro(perro){

    let new_div = document.createElement("div");
    let new_h2 = document.createElement("h2");
    new_h2.textContent = perro.nombre ;

    let new_img = document.createElement("img");
    new_img.src = perro.foto;

    new_div.appendChild(new_h2);
    
    new_div.appendChild(new_img);
    let contenedor = document.getElementById("perroCtn");


    contenedor.appendChild(new_div);

    new_img.addEventListener("click",()=>{


        alert("clickeaste");

    })



}


function validar_formulario (){

    avisos.innerHTML = "";

    let input_nombre  = document.getElementById("nombre").value ;
    let input_raza = document.getElementById("raza").value;
    let input_edad = document.getElementById("edad").value;
    let input_ruta_foto = document.getElementById("ruta_foto").value;
    let input_genero = (document.getElementById("genero").value).toLowerCase();


    let arreglos_mensaje = new Array();

    if (!input_nombre){

        arreglos_mensaje.push("Ingrese nombre");
    }

        if (!input_raza ){
            arreglos_mensaje.push("Ingrese raza");           

        }

        if (!input_edad || input_edad <= 0  ){
            arreglos_mensaje.push("Ingrese una edad correcta. Deber ser un numero mayor a 0");       

        }


        if (!input_genero ){
            arreglos_mensaje.push("Ingrese genero: debe ser H o M");       

        }

        if (!input_ruta_foto ){
            arreglos_mensaje.push("Ingrese la ruta de la imagen");        

        }

        if (arreglos_mensaje.length > 0 ){

            let lista = document.createElement("li");
            lista.textContent = "No es posible cargar los datos: ";
            arreglos_mensaje.forEach(element =>{

                lista.appendChild(crear_li(element));
            })

            avisos.appendChild(lista);
            return false ;

        }else {


            return true;
        }




}


function crear_li(elemento){

    let li = document.createElement("li");
    li.textContent = elemento;
    return li ;
}