const routerx = require('express-promise-router');
const respuestasController = require('../controllers/RespuestasController');

const router = routerx();

router.get('/list', respuestasController.listar);

module.exports = router;