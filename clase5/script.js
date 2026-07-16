/*const current_year = 2026 ;

let auto = {


    type: "Fiat",
    model: "Uno" ,
    year : 2011 ,
    color: "gray",
    driving_years : function () {

        return current_year - this.year ;

    } ,

    cambiar_color : function (color) {

        this.color = color ;

    }

}

console.log(auto) ;

console.log("La antiguedad de este auto es: "+auto.driving_years());

console.log(auto.color);

auto.cambiar_color("yellow") ;
console.log(auto.color) ;

*/


class Auto {



    constructor(type,model,y,color){


        this.type= type ;
        this.model = model;
        this.year = y ;
        this.color = color ; 


    }


    getSaleInfo(){


        //return this.type  + " - " ; 

        return `${this.type} - ${this.model} - ${this.color}` ;
    }



}

let auto1 = new Auto ("Peugeot","206",2013,"Blanco");
let auto2 = new Auto ("Ford","KA",2026,"Rojo");

console.log(auto2.getSaleInfo());
console.log(auto1.getSaleInfo());

let array = new Array() ;
array.push(auto1);
array.push(auto2);

console.log(array);


let marca = prompt("Ingrese una marca");
let modelo = prompt("Ingrese modelo");
let anio = parseInt(prompt("Ingrese año"));
let color = prompt("Ingrese color");


let auto3 = new Auto (marca,modelo,anio,color);
auto3.getSaleInfo();


