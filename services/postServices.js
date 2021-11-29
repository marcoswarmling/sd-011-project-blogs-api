const { Category, BlogPost, User } = require('../models');
const { CATEGORY_ID_NOT_FOUND } = require('../utils/errorMessages');

require('dotenv').config();

const create = async (title, content, categoryIds, id) => {
  const searchCategory = await Category.findAll({ where: { id: categoryIds } });
  console.log(searchCategory);
  if (!searchCategory || searchCategory.length === 0) {
    return { message: CATEGORY_ID_NOT_FOUND };
  }

  const createPost = await BlogPost.create({ title, content, categoryIds, userId: id });
  return createPost;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
    ] });
  return posts;
};

const getPostById = async (id) => {
  const postById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
    ] });
  return postById;
};

module.exports = { create, getAllPosts, getPostById };
