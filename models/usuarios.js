'use strict'

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsuarioSchema = Schema(
    {
        email: String,
        password: String,
        rol: {
            type: String,
            default: 'standard'
        }
    }
);
module.exports = mongoose.model('Usuario', UsuarioSchema);