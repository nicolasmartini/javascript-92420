


class GestionarProductos {

    iniciar() {



        fetch( url )

        .then( respuesta => respuesta.json())
        .then( resultado => {

            productos     = resultado.productos;

                    // Solo quiero mostrar los articulos destacados.
        let productosDestacados = productos.filter( prod => prod.destacado == 1 );

        this.cargarProductos( productosDestacados );

    })  

    /*
        //Arreglo de productos
        productos = [

            {
                "id": 1,
                "nombre": "Intel Pentium Gold G7400",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 8858,
                "stock": 50,
                "img": "pentiumGold.png",
                "destacado": 0
            },
            {
                "id": 2,
                "nombre": "Intel Celeron G6900 3.5GHz",
                "descripcion": "12th Generación. Socket S1700",
                "precio": 5907,
                "stock": 50,
                "img": "celeron.png",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Intel i3 12100F",
                "descripcion": "12th Generación. Sin video. Socket S1700",
                "precio": 8858,
                "stock": 50,
                "img": "i3.png",
                "destacado": 0
            },
            {
                "id": 4,
                "nombre": "Intel i3 12100",
                "descripcion": "12th Generación. Video integrado. Socket S1700",
                "precio": 23371,
                "stock": 50,
                "img": "i3.png",
                "destacado": 1
            }
        ]

        */


        
        this.mostrarCarrito();
        
        this.actualizarContador();
             
    }


    // Funcion encargada de cargar los productos en la pagina
    cargarProductos( productos ) { 
        
        const divProductos    = document.querySelector('#productos');
        divProductos.innerHTML = '';

        if( productos.length === 0 ) {

            this.mostrarHeader('No se han encontrado productos para su búsqueda');
            return false;
        } 
        else {          

            productos.forEach( (producto) => {
    
                let prod = document.createElement('div');
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.setAttribute('id', 'row_'+producto.id);    
               
        
                prod.innerHTML = `      <div class="w-20">
                                            <img src="./assets/img/${producto.img}" alt="" width="150" height="150" >
                                        </div>
    
                                        <div class="p-3 d-flex flex-column w-60 h-150">
                                            <h3>${producto.nombre}</h3>                                            
                                            <p>${producto.descripcion.substring(0,120)}</p>
                                        </div>
    
                                        <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                            <p class="precio">$${producto.precio}</p>
                                            <a href="javascript:addCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</a>
                                        </div>
                                        `;
    
                divProductos.appendChild( prod );
    
            } )    
        }
    }

  


    


    //Muestra un detalle de lo mostrado en pantalla
    mostrarHeader( msg ) { 
        const headerProductos = document.querySelector('#headerProductos');
        headerProductos.innerHTML = msg;
    }





}

