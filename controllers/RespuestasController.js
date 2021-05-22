const models = require('../models');

exports.listar = async (req, res, next) => {
    try {
        const respuesta = await models.respuestas.findAll();
         if(respuesta){
             res.status(200).json(respuesta);
         }else{
             res.status(404).send({message:'no hay respuestas en base de datos'});
         }
     } catch (error) {
         res.status(500).send({
             message: 'Error!!'
        });
         next(error);
    }
};
