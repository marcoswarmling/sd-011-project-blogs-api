const joi = require('joi');
const { User } = require('../models');

const registerDataSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email({ minDomainSegments: 1 }).required(),
  password: joi.string().required(),
  image: joi.string().required(),
});

const validatePasswordLength = (req, res, next) => {
  const { password } = req.body;

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  
  return next();
};

const validateEmailExistence = async (req, res, next) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }

    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerDataSchema,
  validatePasswordLength,
  validateEmailExistence,
};
