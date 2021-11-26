const Joi = require('joi');

const userValidations = (data) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).require(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).require(),
    image: Joi.string(),
  })
    .validate(data);

  return schema;
};

module.exports = {
  userValidations,
};
