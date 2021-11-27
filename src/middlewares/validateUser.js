const Joi = require('joi');
const servicesUser = require('../services/user');

const schemaUser = Joi.object({
  displayName: Joi.string()
    .min(8)
    .max(30)
    .required(),
  email: Joi.string().required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
  image: Joi.allow(''),
});

const schemaLogin = Joi.object({
  email: Joi.string().required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
});

const verifyUserFields = async (req, res, next) => {
  const { error } = schemaUser.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const { email } = req.body;
  const validEmail = await servicesUser.emailExists(email);

  if (validEmail.message) {
    return res.status(500).json({ message: validEmail.message });
  } if (validEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};

const verifyLoginFields = async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { email } = req.body;

  const validEmail = await servicesUser.emailExists(email);

  if (validEmail.message) {
    return res.status(500).json({ message: validEmail.message });
  } if (!validEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return next();
};

module.exports = {
  verifyUserFields,
  verifyLoginFields,
};