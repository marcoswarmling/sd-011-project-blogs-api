const Joi = require('joi');
const { Category } = require('../models');

const checkBodyPost = async (title, content, categoryIds) => {
  const postData = { title, content, categoryIds };
  const schema = Joi.object().keys({
    title: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
  });
  const { error } = schema.validate(postData);
  if (!error) return false;
  return error;
};

const categoriesExists = async (categoryIds) => {
  const categories = await Category.findAll();
  const mapCategories = categories.map((cat) => cat.id);
  const existCategories = categoryIds.every((id) => mapCategories.includes(id));
  return existCategories;
};

const checkBodyBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const error = await checkBodyPost(title, content, categoryIds);
  if (error.message) return res.status(400).json({ message: error.message });
  const validateCategories = await categoriesExists(categoryIds);
  if (!validateCategories) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = { checkBodyBlogPost };