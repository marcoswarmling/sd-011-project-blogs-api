const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      'any.required': '"title" is required',
    }),
  content: Joi.string()
    .required()
    .messages({
      'any.required': '"content" is required',
    }),
});

module.exports = {
  postSchema,
};
