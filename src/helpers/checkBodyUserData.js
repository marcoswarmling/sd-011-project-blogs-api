const Joi = require('joi');

const checkBodyUserData = async (displayName, email, password, image) => {
  const userData = { displayName, email, password, image };
  const schema = Joi.object().keys({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  });
  const { error } = schema.validate(userData);
  if (!error) return false;
  return error;
};

module.exports = { checkBodyUserData };