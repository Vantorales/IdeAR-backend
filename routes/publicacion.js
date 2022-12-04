const { Router } = require('express');

const { addPublicacionPost, publicacionesGet, publicacionGet, publicacionDelete, publicacionUpdate } = require('../controllers/publicacionController');

const router = Router();

router.post('/api/nuevaPublicacion', addPublicacionPost);
router.get('/api/obtenerPublicaciones', publicacionesGet);
router.post('/api/obtenerPublicacion', publicacionGet);
router.delete('/api/eliminarPublicacion', publicacionDelete);
router.put('/api/editarPublicacion', publicacionUpdate);

module.exports =  router;