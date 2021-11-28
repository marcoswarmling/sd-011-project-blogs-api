const { BlogPost, Category } = require('../models');
const validateCategories = require('../validations/categoryValidations');

const getAllCategoriesById = async (categories) => {
  const promiseCategories = categories.map((id) => Category.findByPk(id));
  return Promise.all(promiseCategories);
};

const validateCategory = async (categories) => {
  const resolvedCategories = await getAllCategoriesById(categories);
  resolvedCategories.forEach((category) => {
    validateCategories.categoryExists(category);
  });
};

const newPost = async (payload) => {
  await validateCategory(payload.categoryIds);
  return BlogPost.create(payload);
};

module.exports = {
  newPost,
};