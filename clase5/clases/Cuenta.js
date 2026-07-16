class Cuenta {

    constructor(cbu,tipo){

        this.cbu = cbu ;
        this.tipo = tipo;
        this.saldo = 0;

    }


         /**
      * 
      * @returns 
      */
    getSaldo(){


        return this.saldo;

    }
    

    getTipo(){


        return this.tipo;

    }

    
    getDescripcion(){

        return this.cbu + " - "+ this.tipo + " - " + this.saldo ;
    }

    acreditar(monto){

        this.saldo = this.saldo + monto ;

    }

    debitar(monto){

        this.saldo = this.saldo - monto ;

    }

    tieneSaldo(monto){

        return this.saldo >= monto ;

    }






}