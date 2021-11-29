const { checkBodyPost } = require('../helpers/checkBodyPost');
const { Category } = require('../models');

const checkBodyBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const error = await checkBodyPost(title, content, categoryIds);
  if (error.message) return res.status(400).json({ message: error.message });
  const validateCategories = await Category.findByPk(categoryIds[0]);
  if (!validateCategories) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = { checkBodyBlogPost };