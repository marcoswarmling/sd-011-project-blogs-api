const Joi = require('joi');
const { User } = require('../models');

const schema = {
  validateUser: Joi.object({
    displayName: Joi.string()
      .min(8)
      .required()
      .label('"displayName" length must be at least 8 characters long'),
    email: Joi.string()
      .required()
      .regex(/^\w+@\w+\.\w+$/)
      .label('"email" must be a valid email'),
    password: Joi.string()
      .min(6)
      .required()
      .label('"password" length must be 6 characters long'),
  }),
};

const message = {
  email: '"email" is required',
  password: '"password" is required',
  emailExists: 'User already registered',
};

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const { error } = schema.validateUser.validate({
    displayName,
    email,
    password,
  });

  if (!email) return res.status(400).json({ message: message.email });

  if (!password) {
    return res.status(400).json({ message: message.password });
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) return res.status(409).json({ message: message.emailExists });

  if (error) {
    return res.status(400).json({ message: error.details[0].context.label });
  }

  next();
};

module.exports = {
  validateUser,
};
