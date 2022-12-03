const { response, request } = require('express');

const Usuario = require('../models/usuario');

const usuariosPost = async(req, res = response) => {
    try{
        
        const { nombre, apellido, email, contraseña } = req.body;
        const nickname = apellido +  nombre;
        const usuario = new Usuario({ nombre, apellido, nickname, email, contraseña });
        console.log("Guardando usuario");
        // Guardar en BD
        await usuario.save();
    
        res.json({
            usuario,
            msg:"Usuario registrado."
        });

    }catch(e){
        console.log(e)
    }
   
}

const usuariosGet = async(req = request, res = response) => {

    const usuarios = await Usuario.find()

res.json({ usuarios });
}

const deleteUsuario =  async(req, res = response) =>{
    const { id } = req.body;
    const usuario = await Usuario.findByIdAndDelete(id);
    res.json(usuario);
}

const updateUsuario = async(req, res) => {

    const { __v,id, ...resto} = req.body;
    res.json(resto);
    const usuario = await Usuario.findByIdAndUpdate( id, resto)
}


module.exports = { 
    usuariosPost,
    usuariosGet,
    deleteUsuario,
    updateUsuario
};