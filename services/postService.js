require('dotenv').config();

const { BlogPosts, Categories, PostCategories } = require('../models');

const { 
  validateTitleExists,
  validateContentExists,
  validaCategoryIdExists,
} = require('./utils/validators');

const validateCategoryNameExistsOnDB = async (categoryIds) => {
  const allCategories = await Categories.findAll({ where: { id: categoryIds } });  

  console.log(allCategories);

  if (allCategories.length === 0) {
    return { message: '"categoryIds" not found' };
  }

  return null;
};

const validate = (title, content, categoryIds) => {
  const titleExists = validateTitleExists(title);
  const contentExists = validateContentExists(content);
  const categoryId = validaCategoryIdExists(categoryIds);

  if (titleExists) {
    return titleExists;
  }

  if (contentExists) {
    return contentExists;
  }

  if (categoryId) {
    return categoryId;
  }

  return null;
};

const createPost = async (userId, title, content, categoryIds) => {
  const validateFields = validate(title, content, categoryIds);

  if (validateFields) {
    return validateFields;
  }

  const validateNameCategory = await validateCategoryNameExistsOnDB(categoryIds);

  if (validateNameCategory) {
    return validateNameCategory;
  }

  const post = await BlogPosts.create({ userId, title, content, categoryIds });

  const { id } = post;

  await categoryIds.forEach(async (categoryId) => {
    await PostCategories.create({
      categoryId,
      postId: id,
    });
  });

  return post;
};

module.exports = { createPost };
