const { BlogPost, Category } = require('../models');
const checkExistingCategories = require('../utils/checkExistingCategories');
const { postError } = require('../utils/errorSchema');

const createPost = async (post) => {
  const allCategories = await Category.findAll();

  const existingCategories = checkExistingCategories(post.categoryIds, allCategories);
  if (!existingCategories) throw postError.unexistingCategory;

  const newPost = await BlogPost.create(post);
  
  return newPost;
};

module.exports = {
  createPost,
};
