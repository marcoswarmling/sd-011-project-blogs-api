const Joi = require('joi');

const checkBodyLogin = async (email, password) => {
  const loginData = { email, password };
  const schema = Joi.object().keys({
    email: Joi.string().empty().email().required(),
    password: Joi.string().empty().length(6).required(),
  });
  const { error } = schema.validate(loginData);
  if (!error) return false;
  return error;
};

module.exports = { checkBodyLogin };