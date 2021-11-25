const Joi = require('joi');
const UserService = require('../services/userService');

const schemaUserPost = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  image: Joi.string().required(),
});

const UserPostValidate = async (req, res, next) => {
  const validate = schemaUserPost.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    }); 
  }
  return next();
};

const validateEmailUnique = async (req, res, next) => {
  const { email } = req.body;
  const userEmailExists = await UserService.find(email);
  if (userEmailExists) {
    return res.status(409).json({ 
      message: 'User already registered',
    });
  }
  return next();
};

module.exports = { UserPostValidate,
  validateEmailUnique }; 