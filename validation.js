//Validation
const Joi = require('@hapi/joi');


//Registration validation
const registrationValidation = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});


//Login validation
const loginValidation = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
});


module.exports.registerValidation = registrationValidation
module.exports.loginValidation = loginValidation