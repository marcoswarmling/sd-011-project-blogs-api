const Joi = require('joi');

const checkBodyUpdate = async (title, content) => {
  const updateData = { title, content };
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  });
  const { error } = schema.validate(updateData);
  if (!error) return false;
  return error;
};

module.exports = { checkBodyUpdate };