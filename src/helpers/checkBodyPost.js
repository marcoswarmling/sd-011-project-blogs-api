const Joi = require('joi');

const checkBodyPost = async (title, content, categoryIds) => {
  const postData = { title, content, categoryIds };
  const schema = Joi.object().keys({
    title: Joi.string().empty().required(),
    content: Joi.string().empty().required(),
    categoryIds: Joi.required(),
  });
  const { error } = schema.validate(postData);
  if (!error) return false;
  return error;
};

module.exports = { checkBodyPost };