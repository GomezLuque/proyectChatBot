const routerx = require('express-promise-router');
const preguntasController = require('../controllers/PreguntasController');

const router = routerx();

router.get('/list', preguntasController.listar);
router.get('/list/:preguntaId', preguntasController.listar2 )

module.exports = router;