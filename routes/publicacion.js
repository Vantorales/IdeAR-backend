const { Router } = require('express');

const { addPublicacionPost, publicacionGet } = require('../controllers/publicacionController');

const router = Router();

router.post('/api/nuevaPublicacion', addPublicacionPost);
router.get('/api/obtenerPublicacion', publicacionGet);

module.exports =  router;