const { Schema, model, mongoose } = require('mongoose');

const Usuario = mongoose.model('Usuario');

const PublicacionSchema = Schema({    
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    contenido: {
        type: String,
        required: [true, 'El contenido es obligatorio']
    },
    fechaCreacion: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

module.exports =  mongoose.model ('Publicacion', PublicacionSchema);