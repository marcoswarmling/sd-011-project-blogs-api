const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .trim()
    .empty(),
  password: Joi.string()
    .required()
    .trim()
    .empty(),
});

module.exports = {
  loginSchema,
};
