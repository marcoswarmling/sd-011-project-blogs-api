const Joi = require('joi');
const loginServices = require('../services/loginServices');

const loginSchema = Joi.object({
  email:
    Joi.string()
    .required()
    .min(1)
    .messages({
      'string.min': '"email" is not allowed to be empty',
      'any.required': '"email" is required',
    }),
  password:
    Joi.string()
    .required()
    .min(1)
    .messages({
      'string.min': '"password" is not allowed to be empty',
      'any.required': '"password" is required',
    }),
});

const loginValidations = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const userEmailVerify = async (req, res, next) => {
  const { email, password } = req.body;
  const getUserByEmail = await loginServices.getUserByEmail(email);
  if (!getUserByEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const passwordFromDB = getUserByEmail.dataValues.password;
  if (password !== passwordFromDB) { 
    return res.status(400).json({ message: 'Invalid fields' });
  } 
  next();
};

module.exports = {
  loginValidations,
  userEmailVerify,
};