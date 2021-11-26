const Joi = require('joi');

const validateUser = (data) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  })
    .validate(data);

  return schema;
};

module.exports = {
  validateUser,
};
