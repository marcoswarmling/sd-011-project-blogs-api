const Joi = require('joi');
const { getAllCategories } = require('../services/categoriesService');

const postSchema = Joi.object({
  title:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"title" is not allowed to be empty',
      'any.required': '"title" is required',
    }),
  content:
    Joi.string()
    .empty()
    .required()
    .messages({
      'string.empty': '"content" is not allowed to be empty',
      'any.required': '"content" is required',
    }),
  categoryIds:
    Joi.array()
    .items(Joi.number())
    .required()
    .messages({
      'any.required': '"categoryIds" is required',
    }),
});

const validatePostFields = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateExistingCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await getAllCategories();
  const checkForExistingCategories = categories.map((i) => i.id);
  const check = categoryIds.every((i) => checkForExistingCategories.includes(i));
  if (!check) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validatePostFields,
  validateExistingCategories,
};