const joi = require('joi');

const validateUser = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
    image: joi.string(),
  }).validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

const validateLogin = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    email: joi.string().email().required(),
    password: joi.string().length(6).required(),
  }).validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

const validateCategory = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    name: joi.string().required(),
  }).validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

const validatePost = (req, res, next) => {
  const { body } = req;

  const { error } = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    categoryIds: joi.array().required(),
  }).validate(body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
}

module.exports = {
  validateUser,
  validateLogin,
  validateCategory,
  validatePost,
};