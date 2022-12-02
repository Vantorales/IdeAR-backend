const { Schema, model } = require('mongoose');

const ComentarioSchema = Schema({
    idUsuario: {
        type: Schema.ObjectId, ref: "Usuario" 
    },
    idPublicacion: {
        type: Schema.ObjectId, ref: "Publicacion"
    },
    contenido:{
        type: String,
        required: [true, 'El comentario no puede estar vacio']
    },
    fechaCreacion: {
        type: new ISODate()
    }
});

module.exports =  model ('Comentario', ComentarioSchema);