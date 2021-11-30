const Joi = require('joi');

const joiDisplayNameSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required(),
});

const validDisplayName = (req) => {
  const { displayName } = req.body;

  const validationResult = joiDisplayNameSchema.validate({ displayName });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return { message };
  }
};

module.exports = { 
  validDisplayName,
};