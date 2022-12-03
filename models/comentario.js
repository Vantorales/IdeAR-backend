const { Schema, model, moongose } = require('mongoose');

const Usuario = model('Usuario');
const Publicacion = model('Publicacion');

const ComentarioSchema = Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    idPublicacion: {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion'
    },
    contenido:{
        type: String,
        required: [true, 'El comentario no puede estar vacio']
    },
    fechaCreacion: {
        type: String
    }
});

module.exports =  model ('Comentario', ComentarioSchema);