const { response, request } = require('express');

const Publicacion = require('../models/publicacion');
const Usuario = require('../models/usuario');

const publicacionesGet = async(req = request, res = response) => {

    const publicaciones = await Publicacion.find()

    res.json({ publicaciones });
}

const publicacionGet = async(req, res =  response) => {

    const { id } = req.body;
    const publicacion = await Publicacion.find({_id: id });
    console.log(publicacion);

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

const publicacionDelete = async(req, res = response ) => {

    const { id } = req.body;
    const publicacion = await Publicacion.findByIdAndDelete(id);
    res.json({
        publicacion,
        msg:"Publicacion eliminada"
    });
}

const publicacionUpdate = async(req, res = response ) => {

    const { id, fechaCreacion, usuario, ...cuerpoPublicacion} = req.body;
    const publicacion = await Publicacion.findByIdAndUpdate( id, cuerpoPublicacion);
    res.json({
        publicacion,
        msg: "Publicacion editada"
    });

}

module.exports = {
    publicacionGet,
    addPublicacionPost,
    publicacionesGet,
    publicacionDelete,
    publicacionUpdate
}


