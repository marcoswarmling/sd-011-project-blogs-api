const Joi = require('joi');

const { User } = require('../models');
const err = require('./errors');

const joiEmailSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
});

const validEmail = (req, res, next) => {
  const { email } = req.body;

  const validationResult = joiEmailSchema.validate({ email });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return res.status(400).json({ message });
  }

  next();
};

const emailAlredyExists = async (req, res, next) => {
  const { email } = req.body;

  const query = await User.findAll({
    attributes: ['email'],
    where: { email },
  });

  if (query.length !== 0) return res.status(409).json(err.userAlreadyRegistered);

  next();
};

module.exports = {
  validEmail,
  emailAlredyExists,
};