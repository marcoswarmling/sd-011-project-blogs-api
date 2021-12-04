const Joi = require('joi');
const { Categories } = require('../models/index');

const schemaBlogPosts = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const validateBlogPostJoi = async (req, res, next) => {
  const validate = schemaBlogPosts.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  next();
};

const checkCategoriesExists = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categorie = await Categories.findAll();
  const checkIdCategorieExists = categoryIds.every((cat, i) => cat === categorie[i].id);
  if (!checkIdCategorieExists) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

const checkParamBlogPost = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    if (title && content) {
      return { title, content };
    }
  } catch (error) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  next();
};

module.exports = {
  validateBlogPostJoi,
  checkCategoriesExists,
  checkParamBlogPost,
};