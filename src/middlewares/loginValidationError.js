const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().not().empty()
  .required(),
  password: Joi.string().length(6).not().empty()
  .required(),
});

const loginValidationError = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = loginValidationError;