const { BlogPost, Category } = require('../models');

const createPost = async (categoryIds, postData) => {
  const existingCategory = await Category.findOne({ where: { id: categoryIds } });

  if (!existingCategory) return { code: 'badRequest', message: '"categoryIds" not found' };

  const { dataValues: { createdAt, updatedAt, ...newPost } } = await BlogPost.create(postData);

  return newPost;
};

module.exports = {
  createPost,
};