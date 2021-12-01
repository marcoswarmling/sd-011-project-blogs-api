const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const registerNewPost = async (title, content, categoryIds, userId) => {
  const result = await BlogPost.create({ userId, title, content });
  await result.setCategories(categoryIds);

  return result;
};

const searchAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return result;
};

module.exports = {
  registerNewPost,
  searchAllPosts,
};