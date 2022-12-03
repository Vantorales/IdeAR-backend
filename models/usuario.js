const { Schema, model, mongoose } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    nickname: {
        type: String,
        required: [true, 'El nickname es obligatorio'],
        unique: true
    },
    areaInteres: {
        type: String,
    },
    github: {
        type: String
    },
    fechaNacimiento: {
        type: Date
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    contraseña:{
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    ubicacion: {
        type: String
    },
    paginaWeb: {
        type: String
    },
    //falta foto de perfil
    reputacion: {
        type: Number
    },
    publicaciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Publicaciones'
    }]
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, contraseña, ...usuario } = this.toObject();
    return usuario
}

module.exports = mongoose.model('Usuario', UsuarioSchema);