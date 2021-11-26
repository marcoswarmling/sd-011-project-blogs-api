const { BlogPost, PostsCategory, Category } = require('../models');
const { verifyIfCategoriesExists, validatePostData } = require('../validators/postValidators');

const createPost = async (title, content, categoryId, userId) => {
  if (validatePostData(title, content, categoryId).type === 'error') {
    return validatePostData(title, content, categoryId);
  }
  const allCategories = await Category.findAll({ raw: true });
  const areValidCategories = verifyIfCategoriesExists(categoryId, allCategories);
  if (areValidCategories.type === 'error') return areValidCategories;
  const createPostResponse = await BlogPost.create({ title, content, userId });
  categoryId.forEach(async (id) => {
    await PostsCategory.create({ postId: createPostResponse.id, categoryId: id });
  });
  return { type: 'success', payload: { id: createPostResponse.id, userId, title, content } };
};

module.exports = {
  createPost,
};