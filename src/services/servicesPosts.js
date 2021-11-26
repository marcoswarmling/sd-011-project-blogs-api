const { Post } = require('../../models');
const servicesCategories = require('./servicesCategories');
require('dotenv').config();

const errorMessage = 'Algo deu errado';

const createPost = async (items) => {
  try {
    console.log(Post);
    const newPost = await Post.create(items);
    if (!newPost) {
      return { message: 'erro na criação da categoria' };
    }
    const { categoryIds: _cat, ...returnPost } = newPost.dataValues;
    return returnPost;
  } catch (error) {
    console.log(error.message)
    return { message: error.message };
  }
};

const findcategories = async (categories) => {
  const allCategories = await servicesCategories.allcategories();
  const validCategories = allCategories.map(({ dataValues }) => dataValues.id);
  
  if (categories.some((el) => !validCategories.includes(el))) {
    return { message: '"categoryIds" not found' };
  }
  return false;
};

module.exports = {
  createPost,
  findcategories,
};
