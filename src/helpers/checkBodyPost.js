const Joi = require('joi');

const checkBodyPost = async (title, content, categoryIds) => {
  const postData = { title, content, categoryIds };
  const schema = Joi.object().keys({
    title: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  });
  const { error } = schema.validate(postData);
  if (!error) return false;
  return error;
};

module.exports = { checkBodyPost };