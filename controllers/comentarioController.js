const { response, request } = require('express');

const Comentario = require('../models/comentario');
const Publicacion = require('../models/publicacion');
const Usuario = require('../models/usuario');


const addComentarioPost = async(req = request, res = response) => {


    const {idUsuario, idPublicacion, contenido, fechaCreacion} = req.body
    const comentario = new Comentario({idUsuario: idUsuario, idPublicacion: idPublicacion, contenido, fechaCreacion});

    await comentario.save();

    res.json({
        comentario,
        msg: "Comentario creado"
    });

}

const comentariosGet = async (req, res = response) => {
    console.log("entro");
    const { idPublicacion } = req.body;
    console.log(idPublicacion);
    await Comentario.find({idPublicacion: idPublicacion}).populate('idUsuario').populate( 'idPublicacion').exec((err, comentarios)=>{
       console.log("entro populate");
        if(err){
            console.log(err);
            return res.status(500).json({
                msg:"Se produjo un error al intentar buscar la publicacion"
            });
        }
        res.status(200).json({ comentarios });
    });

}

const comentarioDelete = async ( req, res = response) => {

    const { id } = req.body;
    const comentario = await Comentario.findByIdAndDelete(id);
    res.json({
        comentario,
        msg:"Comentario eliminada"
    });

}

const comentarioUpdate = async ( req, res = response ) => {

    const { id, fechaCreacion, idPublicacion, idUsuario, ...cuerpoComentario} = req.body;
    const comentario = await Comentario.findByIdAndUpdate( id, cuerpoComentario);
    res.json({
        comentario,
        msg: "Comentario editado"
    });

}

module.exports = {

    addComentarioPost,
    comentariosGet,
    comentarioDelete,
    comentarioUpdate
}