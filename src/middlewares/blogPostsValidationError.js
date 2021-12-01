const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().not().empty()
  .required(),
  content: Joi.string().not().empty()
  .required(),
  categoryIds: Joi.array().not().empty()
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