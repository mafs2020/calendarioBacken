const { Router } = require('express');
const router = Router();
const EventoController = require('../controller/eventos');

router.get('/', EventoController.get);
router.post('/', EventoController.post);

module.exports = router;