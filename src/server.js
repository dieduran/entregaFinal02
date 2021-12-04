
import express from 'express'
import {routerProductos} from '../routes/routerProducto.js'
import {routerCarritos} from '../routes/routerCarrito.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** Carpeta publica */
app.use(express.static('public'));

/** Routers */
app.use('/api/productos',routerProductos)
app.use('/api/carrito',routerCarritos)

//no entro por ninguna api valida: => mensaje de error
app.use(function(req, res) {
    res.json({
        error: -2,
        descripcion: `ruta '${req.url}' metodo '${req.method}'  no implementada.`,
    });    
});    

export default app;