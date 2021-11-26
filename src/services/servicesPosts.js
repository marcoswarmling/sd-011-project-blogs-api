const { BlogPost } = require('../../models');
const servicesCategories = require('./servicesCategories');
require('dotenv').config();

// const errorMessage = 'Algo deu errado';

const createPost = async (items) => {
  try {
    const { categoryIds, ...item } = items;
    const newPost = await BlogPost.create(item);
    if (!newPost) {
      return { message: 'erro na criação da categoria' };
    }
    const { categoryIds: _cat, ...returnPost } = newPost.dataValues;
    return returnPost;
  } catch (error) {
    console.log(error);
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
