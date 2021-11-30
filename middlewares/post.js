const joi = require('joi');

const postDataSchema = joi.object({
  title: joi.string().required(),
  categoryIds: joi.array().items(joi.number()).required(),
  content: joi.string().required(),
});

module.exports = {
  postDataSchema,
};
