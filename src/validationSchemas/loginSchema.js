const Joi = require('joi');

module.exports = {
  loginSchema: Joi.object({
    email: Joi.string()
      .required()
      .trim()
      .empty(),
    password: Joi.string()
      .required()
      .trim()
      .empty(),
  }),
};
