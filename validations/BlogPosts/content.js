const Joi = require('joi');

const joiContentSchema = Joi.object({
  content: Joi.string()
    .min(4)
    .max(3000)
    .required(),
});

const validContent = (req) => {
  const { content } = req.body;

  const validationResult = joiContentSchema.validate({ content });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return { message };
  }
};

module.exports = { 
  validContent,
};