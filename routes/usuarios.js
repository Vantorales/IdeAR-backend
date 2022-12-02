const { Router } = require('express');

const { usuariosPost, updateUsuario } = require('../controllers/usuarioController');

const router = Router();

router.post('/api/nuevo-usuario',usuariosPost );
router.get('/api/updateUsuario', updateUsuario );

module.exports = router;