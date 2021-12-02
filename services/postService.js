const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const err = require('../helpers/errors');

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

const searchById = async (id) => {
  const result = await BlogPost.findByPk(id, { include: [{ all: true }] });

  if (result === null) return { error: err.nonExistentPost };

  return result;
};

module.exports = {
  registerNewPost,
  searchAllPosts,
  searchById,
};