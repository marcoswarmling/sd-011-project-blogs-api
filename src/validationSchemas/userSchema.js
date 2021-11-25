const Joi = require('joi');

const emailRegex = /^[a-z][.a-z\d_-]+[^-]@[a-z-]{2,12}\.[a-z]{2,3}(\.[a-z]{2})?$/i;

const userSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required(),
  email: Joi.string()
    .pattern(emailRegex)
    .message('"email" must be a valid email')
    .trim()
    .required(),
  password: Joi.string()
    .length(6)
    .required(),
  image: Joi.string(),
});

module.exports = {
  userSchema,
};
