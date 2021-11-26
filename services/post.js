const { Categories, BlogPosts } = require('../models');

const categoryIdsExists = async (categoryIds) => {
  const allCategories = await Categories.findAll({
    attributes: ['id'],
  });

  const categoriesIds = [];

  allCategories.forEach(({ dataValues: { id } }) => {
    categoriesIds.push(id);
  });

  if (categoryIds.every((category) => categoriesIds.includes(category))) {
    return true;
  }

  return false;
};

const createBlogPosts = async (title, content, userId) => {
  const newPost = await BlogPosts.create({ title, content, userId });

  return newPost;
};

module.exports = {
  categoryIdsExists,
  createBlogPosts,
};
