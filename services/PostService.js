const { Post, User, Category } = require('../models');
const { getCategoryById } = require('./CategoryService');

const validatePost = async (content, categoriesIds) => {
  if (!content) {
    return { message: '"content" is required', status: 400 };
  }
  if (!categoriesIds) {
    return { message: '"categoryIds" is required', status: 400 };
  }
  const ve = await categoriesIds.map(async (id) => {
    const response = await getCategoryById(id);
    if (!response) return { message: '"categoryIds" not', status: 400 };
    return false;
  });
  if (await ve[0] !== false) return { message: '"categoryIds" not found', status: 400 };
  return false;
};

const verifyTitle = (title) => {
  if (!title) {
    return { message: '"title" is required', status: 400 };
  }
  return false;
};

const create = async (title, content, categoriesIds, userId) => {
  if (await validatePost(content, categoriesIds)) {
    const response = await validatePost(content, categoriesIds);
    return response;
  }
  if (verifyTitle(title)) return verifyTitle(title);
  const response = await Post.create({ title, content, userId });
  return response;
};

const getAll = async () => {
  const response = await Post.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return response;
};

module.exports = {
  create,
  getAll,
};
