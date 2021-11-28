const joi = require('joi');

function validateLogin(req, res, next) {
  const { body } = req;

  const { error } = joi.object({
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
  }).validate(body);

  if (error) {
    console.log(error);
    const errorMessage = error.details[0].message;
    return res.status(400).json({ message: errorMessage });
  }
  return next();
}

module.exports = {
  validateLogin,
};