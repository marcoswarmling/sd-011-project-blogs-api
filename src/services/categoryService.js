const { Category, PostsCategory } = require('../models');

const checkCategories = async (categoryIds) => {
  const check = categoryIds.map(async (categoryId) => {
    const category = await Category.findByPk(categoryId);
    return category !== null;
  });
  const result = await Promise.all(check);
  return result.every(Boolean);
};

const createPostCategories = async ({ id, categoryIds }) => {
  const create = await categoryIds.map(async (categoryId) => {
    await PostsCategory.create({ categoryId, postId: id });
  });

  const result = await Promise.all(create);
  return result;
};

module.exports = {
  checkCategories,
  createPostCategories,
};
