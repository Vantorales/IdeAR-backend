const { response, request } = require('express');

const Publicacion = require('../models/publicacion');

const publicacionPost = async(req, res = response) => {

    const { idUsuario, titulo, contenido, fechaCreacion } = req.body;
    const publicacion = new Publicacion ({ idUsuario, titulo, contenido, fechaCreacion });

    await publicacion.save();

    res.json({
        publicacion,
        msg:"Publicacion creada"
    });
}