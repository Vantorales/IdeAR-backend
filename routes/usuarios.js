const { Router } = require('express');

const { usuariosPost, updateUsuario, usuariosGet, deleteUsuario, usuarioGet } = require('../controllers/usuarioController');

const router = Router();

router.post('/api/nuevoUsuario',usuariosPost );
router.put('/api/editarUsuario', updateUsuario );
router.get('/api/obtenerUsuarios', usuariosGet);
router.delete('/api/eliminarUsuario', deleteUsuario);
router.post('/api/obtenerUsuario', usuarioGet)

module.exports = router;