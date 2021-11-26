const { BlogPost, PostsCategory, Category, User } = require('../models');
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

const getAll = async () => {
  const getAllResponse = await BlogPost.findAll({ 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { type: 'success', payload: getAllResponse };
};

module.exports = {
  createPost,
  getAll,
};