const joi = require('joi');

const postCategorieSchema = joi.object({
  name: joi.string().required(),
});

module.exports = {
  postCategorieSchema,
};