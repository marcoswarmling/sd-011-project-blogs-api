const Joi = require('joi');

const joiPasswordSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
    }),
});

const validPassword = (req, res, _next) => {
  const { password } = req.body;

  const validationResult = joiPasswordSchema.validate({ password });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return res.status(400).json({ message });
  }
};

module.exports = {
  validPassword,
};