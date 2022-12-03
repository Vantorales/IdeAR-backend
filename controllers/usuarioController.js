const { response, request } = require('express');

const Usuario = require('../models/usuario');

const usuariosPost = async(req, res = response) => {
    try{
        
        const { nombre, apellido,nickname, email, contraseña } = req.body;
        console.log(req.body);
        // const nickname = apellido +  nombre;
        const usuario = new Usuario({ nombre, apellido, nickname, email, contraseña });
        console.log("Guardando usuario");
        // Guardar en BD
        await usuario.save();
    
        res.json({
            creacionCorrecta:"true"
        });

    }catch(e){
        console.log(e)
    }
   
}

const usuariosGet = async(req = request, res = response) => {

    const usuarios = await Usuario.find()

res.json({ usuarios });
}

const usuarioGet = async(req, res =  response) => {

    const { id } = req.body;
    const usuario = await Usuario.find({_id: id });
    console.log(usuario);

    res.json({ usuario });
}

const deleteUsuario =  async(req, res = response) =>{
    const { id } = req.body;
    const usuario = await Usuario.findByIdAndDelete(id);
    res.json({
        usuario,
        msg:"Usuario eliminado"
    });
}

const updateUsuario = async(req, res) => {

    const {id, nombre, apellido, email, ...resto} = req.body;
    const usuario = await Usuario.findByIdAndUpdate( id, resto);
    res.json({
        usuario,
        msg: "Usuario editado"
    });
}


module.exports = { 
    usuariosPost,
    usuariosGet,
    deleteUsuario,
    updateUsuario,
    usuarioGet
};