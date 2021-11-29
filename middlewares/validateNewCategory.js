const Joi = require('joi');
const CategoriesServices = require('../services/categoriesServices');

const validateCreateCategoryBody = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);
  
  next();
};

const validateRegisteredCategory = async (req, res, next) => {
  const { name } = req.body;

  const findCategory = await CategoriesServices.findCategoryByName(name);

  if (findCategory) return res.status(409).json({ message: 'Category already registered' });

  next();
};

module.exports = {
  validateCreateCategoryBody,
  validateRegisteredCategory,
};
