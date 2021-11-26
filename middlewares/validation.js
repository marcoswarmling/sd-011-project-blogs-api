const joi = require('joi');

const validateUser = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
    image: joi.string(),
  }).validate(body);

  if(error) return res.status(400).json({ message: error.details[0].message});

  return next();
}

module.exports = {
  validateUser,
}