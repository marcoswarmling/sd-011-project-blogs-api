const Joi = require('joi');

const joiDisplayNameSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required(),
});

const validDisplayName = (req, res, _next) => {
  const { displayName } = req.body;

  console.log(`--> ${displayName}`);

  const validationResult = joiDisplayNameSchema.validate({ displayName });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return res.status(400).json({ message });
  }
};

module.exports = { 
  validDisplayName,
};