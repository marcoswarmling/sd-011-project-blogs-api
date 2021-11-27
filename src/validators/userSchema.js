const Joi = require('joi');

const userSchema = Joi.object().keys({
  displayName: Joi.string().min(8).required().messages({
    'string.base': 'Display name must be a string',
    'string.empty': 'Display name cannot be empty',
    'string.min': '"displayName" length must be at least 8 characters long',
    'any.required': 'Display name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'string.empty': 'Email cannot be empty',
    'any.required': '"email" is required',
  }),

  password: Joi.string().min(6).required().messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password cannot be empty',
    'string.min': '"password" length must be 6 characters long',
    'any.required': '"password" is required',
  }),

  image: Joi.string().uri().messages({
    'string.uri': 'Image must be a valid URL',
    'any.required': 'Image is required',
  }),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'string.empty': '"email" is not allowed to be empty',
    'any.required': '"email" is required',
  }),
  
  password: Joi.string().required().messages({
    'string.base': 'Password must be a string',
    'string.empty': '"password" is not allowed to be empty',
    'any.required': '"password" is required',
  }),
});

module.exports = { userSchema, loginSchema };
