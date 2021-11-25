const Joi = require('joi');

const registerValidate = async (req, res, next) => {
  const schema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().length(6),
    image: Joi.allow(''),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  registerValidate,
};