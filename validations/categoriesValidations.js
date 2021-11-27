const Joi = require('joi');

const loginSchema = Joi.object({
  name:
    Joi.string()
    .required(),
});

const categoriesValidations = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  categoriesValidations,
};