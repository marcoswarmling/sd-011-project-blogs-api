const { BlogPosts, Users, Categories, PostCategories } = require('../models');
const category = require('./categoryService');

const createPostCategory = async (categoryId, postId) => {
  const response = await PostCategories.create({ categoryId, postId });
  return response;
};

const create = async (post) => {
  try {
    const { categoryIds, ...postWithoutCategories } = post;
    const data = { ...postWithoutCategories, published: Date.now(), updated: Date.now() };
    const response = await BlogPosts.create(data);
    const { id, userId, title, content } = response.dataValues;

    categoryIds.forEach(async (categoryId) => {
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
    // https://app.betrybe.com/course/back-end/arquitetura-solid-e-orm/orm-associations-gabarito/solutions/50847e35-e189-400e-a3f0-3c16ed3f2139/gabarito-dos-exercicios/339530a5-4920-43d2-b8e5-7edc7cf97253?use_case=calendar
    const response = await BlogPosts.findAll({ include:
      [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
      raw: true });
    if (!response) return null;
    return response;
  } catch (err) {
    console.log(err.message);
    return { message: err.message };
  }
};

module.exports = { create, verifyCategory, getAll };
