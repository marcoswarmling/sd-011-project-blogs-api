const Joi = require('joi');

const { getUserByCredentials } = require('../services/loginServices');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/im;

const loginSchema = Joi.object({
  email: 
    Joi.string()
    .empty()
    .regex(emailRegex)
    .required()
    .messages({
      'string.empty': '"email" is not allowed to be empty',
      'string.pattern.base': '"email" must be a valid email',
      'any.required': '"email" is required',
    }),
  password: 
    Joi.string()
    .empty()
    .min(6)
    .max(6)
    .required()
    .messages({
      'string.empty': '"password" is not allowed to be empty',
      'string.min': '"password" length must be 6 characters long',
      'string.max': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),
});

const loginDataValidate = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const checkLoginCredentials = async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await getUserByCredentials(email, password);
  if (!findUser) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

module.exports = {
  loginDataValidate,
  checkLoginCredentials,
};