'use strict';

let Venta = require('../models/venta');
function registrarVenta(req, resp){
    
    if(req.user.rol !== 'admin'){
        resp.status(403).send({message: 'No autorizado para registrar ventas'});
    }

    let requestBody = req.body;

    if (!requestBody) {
        resp.status(400).send({message: 'Debe enviar un producto, precio y descripcion'});
    }

    else if(!requestBody.producto|| !requestBody.precio || !requestBody.descripcion){
        resp.status(400).send({message: 'Debe enviar producto, precio y descripcion'});
    }
    else if(requestBody.precio <= 0 || !requestBody.producto.trim() || !requestBody.descripcion.trim()){
        resp.status(400).send({message: 'El producto no puede ser vacio, el precio debe ser mayor a 0 y la descripcion no puede estar vacia'});
    }

    else{
        let nuevaVenta = new Venta();
        nuevaVenta.producto = requestBody.producto;
        nuevaVenta.precio = requestBody.precio;
        nuevaVenta.descripcion = requestBody.descripcion;

        nuevaVenta.save().then(
            (VentaGuardada)=>{
                resp.status(200).send({Venta: VentaGuardada});
            },
            err => {
                resp.status(500).send({message: 'Error al registrar la venta'});
            }
        );
    }
}
module.exports = {registrarVenta};