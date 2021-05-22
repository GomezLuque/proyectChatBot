const models = require('../models');

exports.listar = async (req, res, next) => {
    try {
        const pregunta = await models.preguntas.findAll({
            include: [{
                model: models.respuestas,
                as: 'respuestas',                
            }]
        });
         if(pregunta){
             res.status(200).json(pregunta);
         }else{
             res.status(404).send({message:'no hay preguntas en base de datos'});
         }
     } catch (error) {
         res.status(500).send({
             message: 'Error!!'
        });
         next(error);
    }
};

exports.listar2 = async (req, res, next) => {
    try {
        const pregunta = await models.preguntas.findAll({
            include: [{
                model: models.respuestas,
                as: 'respuestas',                
            }],            
            where:{
                id: req.params.preguntaId
            }
        });
         if(pregunta){
             res.status(200).json(pregunta);
         }else{
             res.status(404).send({message:'no hay preguntas en base de datos'});
         }
     } catch (error) {
         res.status(500).send({
             message: 'Error!!'
        });
         next(error);
    }
};
