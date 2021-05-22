const bcrypt = require('bcryptjs');
const request  = require('express');
const models = require('../models');
//const tokenService = require('../services/token')

//Para hacer el login
exports.login = async (req, res, next) => {
    try{
        const user = await models.User.findOne({where:{email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password); //Validamos que el usuario existe y comparamos la contraseña
            if(passwordIsValid){
                res.status(200).send({
                    auth: true,
                    user: user,
                    //user: user
                }); //Se manda el código porque es correcto
            }else{
                res.status(401).json({
                    error:'Contraseña Incorrecta'
            })}
        }else{
            res.status(404).json({
                error:'Usuario Incorrecto'
            })
        }
    }catch(error){
        res.status(500).send({
            message: 'Error->' + error
        })
        next(error); //Necesario para que no se bloquee la página
    }
};

//Para registrar
exports.register = async (req, res, next) => {
    try {
        const user = await models.User.findOne({where: {email: req.body.email}});
        if(user){
            res.status(409).send({
                user: user,
                re: req.body,
                message: 'Este email ya esta en uso'
            })
        }else{
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const user = await models.User.create(req.body);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error ->',
            re: req.body,
        })
        next(error);
    }
};

//Para listar
exports.listar = async (req, res, next) => {
    try {
        const user = await models.User.findAll();
         if(user){
             res.status(200).json(user);
         }else{
             res.status(404).send({message:'There is not user in the system'});
         }
     } catch (error) {
         res.status(500).send({
             message: 'Error!!'
        });
         next(error);
    }
};
