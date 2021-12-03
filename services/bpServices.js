const { BlogPost, User, Category } = require('../models');
const ctgService = require('./categoryServices');
const pcService = require('./pcServices');

const createBlogPost = async ({ title, categoryIds, content, userId }) => {
  const newPost = await BlogPost.create({ title, categoryIds, content, userId });
  const categories = await ctgService.getCategoryIds(categoryIds);

  if (categories.length !== 0) {
    const categoryId = categories[0].dataValues.id;
    const postId = newPost.id;
    await pcService.createPC({ postId, categoryId });
  }

  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = {
  createBlogPost,
  getAll,
};