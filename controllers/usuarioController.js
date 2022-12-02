const { response, request } = require('express');

const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

    const Usuarios = await Usuario.find()

res.json({ Usuarios });
}

const usuariosPost = async(req, res = response) => {
    
    const { nombre, apellido, nickname, areaInteres, email, contraseña } = req.body;
    const usuario = new Usuario({ nombre, apellido, nickname, areaInteres, email, contraseña });

    // Guardar en BD
    await usuario.save();

    res.json({
        usuario,
        msg:"Usuario registrado."
    });
}

module.exports = { usuariosPost };