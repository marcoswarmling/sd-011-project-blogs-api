const { BlogPost } = require('../models');
const { Category } = require('../models');
const { User } = require('../models');
const blogPostService = require('../services/blogPostService');

const createCategory = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const allCategoriesData = await Category.findAll({});

  const validations = await blogPostService.validateTitle(title)
  || await blogPostService.validateContent(content)
  || await blogPostService.validateId(categoryIds, allCategoriesData);

  if (validations) {
    return res.status(validations.status).json({ message: validations.message });
  }

  const { id } = await User.findOne({ where: { email: req.decryptedData } });

  const createdCategory = await BlogPost.create({ title, content, userId: id });

  console.log('TESSSSSTE JWTTTTTT', req.decryptedData);

  return res.status(201).json(createdCategory);
};

module.exports = {
  createCategory,
};