const { Schema, model } = require('mongoose');

const PublicacionSchema = Schema({
    idUsuario: {
        type: Schema.ObjectId, ref: "Usuario" 
    },
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    contenido: {
        type: String,
        required: [true, 'El contenido es obligatorio']
    },
    fechaCreacion: {
        type: Date
    }
});

module.exports =  model ('Publicacion', PublicacionSchema);