const Joi = require('joi');

const schema = Joi.object().keys({
  displayName: Joi.string().min(8).not().empty()
  .required(),
  email: Joi.string().not().empty().email()  
  .required(),
  password: Joi.string().length(6).not().empty()
  .required(),
  image: Joi.string(),
});

const userValidation = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = userValidation;