const Joi = require('joi');

const loginSchema = Joi.object({
  email:
    Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password:
    Joi.string()
    .required()
    .length(6),
});

const loginValidations = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  loginValidations,
};