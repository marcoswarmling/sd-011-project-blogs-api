const Joi = require('joi');

const validateUser = (userData) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).not().empty(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(userData);

  if (!error) {
    return null;
  }

  return error;
};

const handleValidationError = (validation, data, res) => {
  const error = validation(data);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
};

module.exports = {
  validateUser,
  handleValidationError,
};