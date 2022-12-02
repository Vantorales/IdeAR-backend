const { Router } = require('express');

const { usuariosPost } = require('../controllers/usuarioController');

const router = Router();

router.post('/api/nuevo-usuario',usuariosPost );

module.exports = router;