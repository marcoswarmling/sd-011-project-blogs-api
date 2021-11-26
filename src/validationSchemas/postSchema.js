const Joi = require('joi');

module.exports = {
  postSchema: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
    userId: Joi.number().required(),
  }),
};
