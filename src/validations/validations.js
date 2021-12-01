const Joi = require('joi');

const validateUser = (data) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).message('"password" length must be 6 characters long').required(),
    image: Joi.string(),
  })
    .validate(data);

  return schema;
};

const validateCategory = (data) => {
  const schema = Joi.object({ name: Joi.string().required() }).validate(data);

  return schema;
};

const validatePost = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  })
    .validate(data);

  return schema;
};

const validateCredentials = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).message('"password" length must be 6 characters long').required(),
  })
    .validate(data);

  return schema;
};

const validateContentToUpdatePost = (data) => {
  const schema = Joi.object({
    content: Joi.string().required(),
    title: Joi.string().required(),
  })
    .validate(data);

  return schema; 
};

module.exports = {
  validateUser,
  validateCredentials,
  validateCategory,
  validatePost,
  validateContentToUpdatePost,
};
