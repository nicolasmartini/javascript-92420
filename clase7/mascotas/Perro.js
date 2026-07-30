class Perro {


    constructor(nombre,raza,edad,genero,castrado,foto){

        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.genero = genero;
        this.castrado = castrado;
        this.foto = foto;
        this.estado = "en adopcion";

    }

       /**
     * Obtiene el estado de adopcion
     * @returns  el valor de la propiedad estado
     */

       getEstadoAdopcion(){

        return this.estado;
    }

    /**
     * funcion para setaet un nuevo estado
     * @param  nuevo_estado  el nuevo estado a setear
     */
    setEstadoAdopcion(nuevo_estado){

        this.estado = nuevo_estado;

    } 
}