const Joi = require('joi');

const usersSchema = Joi.object({
  title: Joi.string().not().empty()
    .required(),
  content: Joi.string().not().empty()
    .required(),
  categoryIds: Joi.array().required(),
});

module.exports = usersSchema;