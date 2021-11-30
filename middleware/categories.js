const Joi = require('joi');

const checkCategories = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) res.status(400).json({ message: error.message });

  console.log('chegou aqui', error);
  
  next();
};

module.exports = { checkCategories };