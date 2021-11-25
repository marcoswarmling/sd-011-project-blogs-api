const Joi = require('joi');

const registerValidate = async (req, res, next) => {
  const schema = Joi.object({
    nameDisplay: Joi.string().required().min(8),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required().min(6),
    image: Joi.string().allow(''),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json(error.message);
  }

  next();
};

module.exports = {
  registerValidate,
};