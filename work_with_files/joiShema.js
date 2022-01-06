const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),

    pass: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),

    year: Joi.number()
        .integer()
        .min(1900)
        .max(2013)
        .required(),

    id: Joi.number()
    .integer()
    .min(1)
    .required(),
})

module.exports =  schema