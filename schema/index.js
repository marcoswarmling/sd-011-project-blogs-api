const Joi = require('joi');
// .messages custom messages error
const createUser = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'email.valid': '"email" must be a valid email',
    'email.empty': '"email" is required',
  }),
  password: Joi.string().min(6).required().messages({
    'password.min': '"password" length must be 6 characters long',
    'password.empty': '"password" is required',
  }),
});

module.exports = { createUser };