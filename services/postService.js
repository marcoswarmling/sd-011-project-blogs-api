const { User, Category, BlogPost } = require('../models');

require('dotenv').config();

const createP = async (title, content, categoryIds, id) => {
  const createdP = await Category.findAll({ where: { id: categoryIds } });
  if (!createdP || createdP.length === 0) {
    return { message: 'No categories' };
  }
  
  const createPost = await BlogPost.createP({ title, content, categoryIds, userId: id });
    return createPost;
  };

  const getAllPost = async () => {
    const posts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', atributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { atributes: [] } },
    ] });
    return posts;
  };
  
  const getPostById = async (id) => {
   const postId = await BlogPost.findOne(
     { where: { id },
    include: [
      { model: User, as: 'user', atributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { atributes: [] } },
    ] },
);
    return postId;
  };

  module.exports = { createP, getAllPost, getPostById };