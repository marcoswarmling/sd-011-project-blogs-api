require('dotenv').config();

const { BlogPosts, Categories, PostsCategories, Users } = require('../models');

const { 
  validateTitleExists,
  validateContentExists,
  validaCategoryIdExists,
} = require('./utils/validators');

const validateCategoryNameExistsOnDB = async (categoryIds) => {
  const allCategories = await Categories.findAll({ where: { id: categoryIds } });

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
    await PostsCategories.create({
      categoryId,
      postId: id,
    });
  });

  return post;
};

const getPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [{ model: Users, as: 'user' }, { model: Categories, as: 'categories' }],
  });

  return posts;
};

module.exports = { createPost, getPosts };
