const { BlogPosts } = require('../models');
const category = require('./categoryService');

const create = async (title, content, categoryIds, userId) => {
  try {
    const data = {
      title, content, categoryIds, userId, published: Date.now(), updated: Date.now(),
    };
    const response = await BlogPosts.create(data);
    console.log(response);
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const verifyCategory = async (postCategories) => {
  try {
    const categories = await category.getAll();
    postCategories.forEach(((cat) => {
      const check = categories.some(({ id }) => id === cat);
      if (!check) return false;
    }));
    return true;
  } catch (err) {
    return { message: err.message };
  }
};

const getAll = async () => {
  try {
    const response = await BlogPosts.findAll({ raw: true });
    if (!response) return null;
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { create, verifyCategory, getAll };
