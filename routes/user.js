const routerx = require('express-promise-router');
const UserController = require('../controllers/UserController');
//const auth = require('../middlewares/auth');

const router = routerx();

router.get('/list', UserController.listar);
router.post('/add', UserController.register);
router.post('/login',  UserController.login);

module.exports = router;