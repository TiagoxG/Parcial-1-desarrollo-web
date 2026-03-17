'use strict';
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let VentaSchema = Schema(
    {
        producto: String,
        precio: Number,
        descripcion: String,
    }
);
module.exports = mongoose.model('Venta', VentaSchema);  