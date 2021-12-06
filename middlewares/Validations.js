const Joi = require('joi');

const validateUser = (userData) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).not().empty(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(userData);

  if (!error) {
    return null;
  }

  return error;
};

const validateCategorie = (data) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(data);

  if (!error) {
    return null;
  }

  return error;
};

const validatePost = (postData) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).validate(postData);

  if (!error) {
    return null;
  }

  return error;
};

module.exports = {
  validateUser,
  validateCategorie,
  validatePost,
};