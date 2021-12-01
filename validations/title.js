const Joi = require('joi');

const joiTitleSchema = Joi.object({
  title: Joi.string()
    .min(6)
    .max(70)
    .required(),
});

const validTitle = (req) => {
  const { title } = req.body;

  const validationResult = joiTitleSchema.validate({ title });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return { message };
  }
};

module.exports = { 
  validTitle,
};