
import {carritosDao} from '../daos/carritos/index.js'
/**
 * id
 * timestamp(carrito)
 * productos [{id timstamp(producto),nombre, descripcion, codigo, foto(url),precio,stock}]
 */

const nuevoCarrito= async (req, res) => {
    const {timestamp=Date.now(), productos= [] }= req.body
    const id= await carritosDao.save({timestamp, productos})
    res.json({id})
}


const eliminarCarrito =async(req, res) => {
    const id=parseInt(req.params.id)
    let salida=  await carritosDao.getById(id)
    if(!salida){
        return res.json({ error : 'carrito no encontrado' })
    }
    await carritosDao.deleteById(id)
    return res.json(salida);
}

const todosProductosCarrito= async(req, res) => {
    const idCarro=parseInt(req.params.id)
    let salida=  await carritosDao.getDetailProductoById(idCarro)
    if(!salida){
        return res.json({ error : 'carro no actualizado' })
    }
    return res.json(salida);
}

const agregarProductoCarroId =  async(req, res) => {
    const idCarro=parseInt(req.params.id)
    const {id,timestamp=Date.now(),nombre='',descripcion='', codigo='', foto='',precio=0,stock=0}= req.body
    const nuevoDetalleProducto= { id, timestamp, nombre, descripcion, codigo, foto, precio, stock}
    let salida=  await carritosDao.updateDetailProductoById(idCarro,nuevoDetalleProducto)
    if(!salida){
        return res.json({ error : 'carro no actualizado' })
    }
    return res.json(salida);
}

const eliminarProductoCarrito =async(req, res) => {
    const id=parseInt(req.params.id)
    const id_prod=parseInt(req.params.id_prod)
    let salida=  await carritosDao.getById(id)
    if(!salida){
        /* ahora borramos el item */
        return res.json({ error : 'carro no encontrado' })
    }
    await carritosDao.deleteDetailProductoById(id,id_prod)
    return res.json(salida);
}

//module.exports={ nuevoCarrito,eliminarCarrito,todosProductosCarrito, agregarProductoCarroId, eliminarProductoCarrito}
export { nuevoCarrito,eliminarCarrito,todosProductosCarrito, agregarProductoCarroId, eliminarProductoCarrito}