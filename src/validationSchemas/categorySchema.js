const Joi = require('joi');

module.exports = {
  categorySchema: Joi.object({
    name: Joi
      .string()
      .required(),
  }),
};
