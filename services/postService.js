const { BlogPosts, Users, Categories, PostsCategories } = require('../models');
const category = require('./categoryService');

const createPostCategory = async (categoryId, postId) => {
  const response = await PostsCategories.create({ categoryId, postId });
  return response;
};

const create = async (post) => {
  try {
    const { categoryIds, ...postWithoutCategories } = post;
    const data = { ...postWithoutCategories, published: Date.now(), updated: Date.now() };
    const response = await BlogPosts.create(data);
    const { id, userId, title, content } = response.dataValues;

    await categoryIds.forEach(async (categoryId) => {
      await createPostCategory(categoryId, id);
    });
    return { id, userId, title, content };
  } catch (err) {
    return { message: err.message };
  }
};

const verifyCategory = async (categories) => {
  try {
    const allCategories = await category.getAll();
    let response = true;
    categories.forEach(((cat) => {
      const check = allCategories.some((item) => item.id === cat);
      if (!check) {
        response = false;
      }
    }));
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const getAll = async () => {
  try {
    const response = await BlogPosts.findAll({ include:
      [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ] });
    console.log(response);
    if (!response) return null;
    return response;
  } catch (err) {
    console.log(err.message);
    return { message: err.message };
  }
};

module.exports = { create, verifyCategory, getAll };
