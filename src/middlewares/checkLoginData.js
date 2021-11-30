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

const checkLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const error = await checkBodyLogin(email, password);
  if (error.message) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { checkLogin };