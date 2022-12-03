const { Router } = require('express');

const { usuariosPost, updateUsuario } = require('../controllers/usuarioController');

const router = Router();

router.post('/api/nuevoUsuario',usuariosPost );
router.put('/api/updateUsuario', updateUsuario );

module.exports = router;