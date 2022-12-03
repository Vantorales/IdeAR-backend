const { response, request } = require('express');

const Publicacion = require('../models/publicacion');
const Usuario = require('../models/usuario');

const publicacionGet = async(req = request, res = response) => {

    const publicacion = await Publicacion.find()

res.json({ publicacion });
}

const addPublicacionPost = async(req, res = response) => {
    try{
        
    const { nickname, titulo, contenido, fechaCreacion } = req.body;
    const data = await Usuario.find({nickname: nickname});
    const idUsuario = data[0]._id; 
    
    
    const publicacion = new Publicacion ({ titulo, contenido, fechaCreacion, usuario: idUsuario });

    await publicacion.save();

    res.json({
        publicacion,
        msg:"Publicacion creada"
    });
    }catch(e){
        console.log(e.message);
    }

}


module.exports = {
    publicacionGet,
    addPublicacionPost
}


