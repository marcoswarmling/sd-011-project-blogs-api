const Joi = require('joi');

const validateCreateUser = (req, _res, next) => {
  const sizeName = 8;
  const sizePassword = 6;
  const { error } = Joi.object({
    displayName: Joi.string().min(sizeName).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(sizePassword).required(),
    image: Joi.string(),
  }).validate(req.body);
  if (error) return next(error);
  next();
};

const validateLogin = (req, _res, next) => {
  const sizePassword = 6;

  const { error } = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(sizePassword).required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  validateCreateUser,
  validateLogin,
};