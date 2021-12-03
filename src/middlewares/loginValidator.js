const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);

const loginSchema = Joi.object({
  email: Joi.string()
    .min(2)
    .required()
    .messages({
      'string.min': '"email" is required',
      'any.required': '"email" is required',
    }),
  password: Joi.string()
    .min(6)
    .max(6)
    .required()
    .messages({
      'string.min': '"password" is required',
      'any.required': '"password" is required',
    }),
});

module.exports = {
  loginSchema,
};
