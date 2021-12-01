const Joi = require('joi');

const checkCategories = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) return res.status(400).json({ message: error.message });
  
  next();
};

module.exports = { checkCategories };