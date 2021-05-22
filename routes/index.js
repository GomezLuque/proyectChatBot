const routerx = require('express-promise-router');
const preguntasRouter = require('./preguntas');
const respuestasRouter = require('./respuestas')
const userRouter = require('./user')



const router = routerx();

router.use('/usuarios', userRouter);
router.use('/preguntas', preguntasRouter);
router.use('/respuestas', respuestasRouter);


module.exports = router;