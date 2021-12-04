import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class CarritosDaoMongoDb extends ContenedorMongoDb{

//  * id
//  * timestamp(carrito)
//  * productos [{id timstamp(producto),nombre, descripcion, codigo, foto(url),precio,stock}]
 
    constructor() {
        super('carritos',{
            timestamp: {type: Date, required: true},
            productos: { type : Array , "default" : [] }
        })
    }
}

export default CarritosDaoMongoDb
