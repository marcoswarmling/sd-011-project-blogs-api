const joi = require('joi');

const loginDataSchema = joi.object({
  email: joi.string().email({ minDomainSegments: 1 }).required(),
  password: joi.string().required(),
});

module.exports = {
  loginDataSchema,
};
