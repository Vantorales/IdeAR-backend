const { Router } = require('express');

const { healthIdear } = require('../controllers/healthIdearController');

const router = Router();

router.post('/api/healthIdear',healthIdear );


module.exports = router;