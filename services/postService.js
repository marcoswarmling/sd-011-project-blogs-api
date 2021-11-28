const { BlogPost, Category } = require('../models');
const validateCategories = require('../validations/categoryValidations');

const validateCategory = async (categories) => {
  const promiseCategories = categories.map((id) => Category.findByPk(id));
  const resolvedPromises = await Promise.all(promiseCategories);
  resolvedPromises.forEach((category) => {
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