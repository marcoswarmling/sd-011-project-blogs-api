const Joi = require('joi');

// .messages custom messages error
const createUser = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'any.required': '"email" is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
    'any.required': '"password" is required',
  }),
});

const loginUser = Joi.object({
  email: Joi.string()
    .email()
    .min(1)
    .required()
    .messages({
    'any.required': '"email" is required',
    'string.min': '"email" is not allowed to be empty',
  }),
  password: Joi.string().required().messages({
    'any.required': '"password" is required',
  }),
});

const createPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array(),
});

module.exports = { createUser, loginUser, createPost };