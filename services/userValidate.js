const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
  image: Joi.allow(''),
});

const verifyUserSchema = async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = {
  verifyUserSchema,
};
