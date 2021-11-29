const Joi = require('joi');

const joiEmailSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
});

const validEmail = (req, res, next) => {
  const { email } = req.body;

  const validationResult = joiEmailSchema.validate({ email });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return res.status(400).json({ message });
  }

  next();
};

module.exports = validEmail;