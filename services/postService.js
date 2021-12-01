const { BlogPost, Category } = require('../models');

const createPost = async (categoryIds, postData) => {
  const existingCategory = categoryIds.every(async (id) => {
    console.log('catId', id);
    const exists = await Category.findOne({ where: { id } });
    return exists;
  });
  
  console.log(existingCategory);
  if (!existingCategory) return { code: 'badRequest', message: 'categoryIds not found' };

  const { dataValues: { updatedAt, createdAt, ...newPost } } = await BlogPost.create(postData);
  console.log(newPost);
  return newPost;
};

module.exports = {
  createPost,
};