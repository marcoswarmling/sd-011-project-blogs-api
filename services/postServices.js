const { BlogPost } = require('../models');
const categoriesServices = require('./categoriesServices');

const createPost = async (title, content, userId) => BlogPost.create({
  content, 
  userId,
  title, 
});

const findCategories = async (categories) => {
  const allCategories = await categoriesServices.getAllCategories();
  const validCategories = allCategories.map(({ dataValues }) => dataValues.id);

  if (categories.some((el) => !validCategories.includes(el))) {
    return { message: '"categoryIds" not found' };
  }
  return false;
};

const getAllPosts = () => BlogPost.findAll({ include: [{ all: true }] });

module.exports = {
  createPost,
  getAllPosts,
  findCategories,
};