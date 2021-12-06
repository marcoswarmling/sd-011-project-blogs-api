const { BlogPosts, Categories } = require('../models');
const { verifyToken } = require('../api/auth/jwt');

const validCategory = async (categoryIds) => {
    const categories = await Categories.findAll();
    const arrayOfCategories = categories.map((category) => category.id);
    const verifyIds = categoryIds.every((ids) => arrayOfCategories.includes(ids));
    
    if (verifyIds) return verifyIds;
    
    return { message: '"categoryIds" not found' };
};

const createPost = async (title, content, token) => {
  try {
    verifyToken(token);
    const post = await BlogPosts.create({ title, content, userId: 1 });
    return post;
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};

module.exports = {
  createPost,
  validCategory,
};