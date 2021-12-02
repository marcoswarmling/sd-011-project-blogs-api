const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
  image: Joi.allow(''),
});

const loginSchema = Joi.object({
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
});

const verifyUserSchema = async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

const verifyLoginSchema = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = {
  verifyUserSchema,
  verifyLoginSchema,
};
