const Joi = require('joi');

const joiPasswordSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .required(),
});

const validPassword = (req, res, next) => {
  const { password } = req.body;

  const validationResult = joiPasswordSchema.validate({ password });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return res.status(400).json({ message });
  }

  next();
};

module.exports = {
  validPassword,
};