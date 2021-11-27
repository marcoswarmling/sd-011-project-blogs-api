const Joi = require('joi');

const schemaUser = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  image: Joi.string().required(),
});

const validateUserJoi = async (req, res, next) => {
  const validate = schemaUser.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  next();
};

module.exports = {
  validateUserJoi,
};