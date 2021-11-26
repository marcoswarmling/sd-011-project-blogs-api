const Joi = require('joi');

const emailPattern = /^\w+@\w+\.\w+$/;

const validateCreateUser = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().required().regex(emailPattern).messages({
    'string.pattern.base': '"email" must be a valid email',
    'any.required': '"email" is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
    'any.required': '"password" is required',
  }),
});

const validateLoginUser = Joi.object({
  email: Joi.string().required().min(1).regex(emailPattern)
.messages({
    'any.required': '"email" is required',
    'string.min': '"email" is not allowed to be empty',
  }),
  password: Joi.string().required().min(1).messages({
    'any.required': '"password" is required',
    'string.min': '"email" is not allowed to be empty',
  }),
});

const validateCreatePost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array(),
});

module.exports = {
  validateCreateUser,
  validateLoginUser,
  validateCreatePost,
};
