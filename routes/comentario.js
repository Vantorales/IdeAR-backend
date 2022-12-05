const { Router } = require('express');

const { addComentarioPost, comentariosGet, comentarioDelete, comentarioUpdate } = require('../controllers/comentarioController');

const router = Router();

router.post('/api/nuevoComentario', addComentarioPost);
router.post('/api/obtenerComentarios', comentariosGet);
router.delete('/api/eliminarComentario', comentarioDelete);
router.put('/api/editarComentario', comentarioUpdate);

module.exports = router;