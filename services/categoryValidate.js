const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const validateCategory = async (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = {
  validateCategory,
};
