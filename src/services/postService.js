const { createError } = require('../middlewares/errors');
const { BlogPosts, PostsCategories, Categories } = require('../models');
const { validatePost } = require('../validations/validations');

const areValidIds = async (arrayOfIds) => {
  const categories = await Promise.all(arrayOfIds.map((id) => Categories.findByPk(id)));
  return categories.every((category) => category !== null);
};

const createPost = async (data, userId) => {
  const { title, content, categoryIds } = data;

  if (!categoryIds) return createError('badRequest', '"categoryIds" is required');
  const areValidCategories = await areValidIds(categoryIds);
  if (!areValidCategories) return createError('badRequest', '"categoryIds" not found');

  const { error: validationError } = validatePost(data);
  if (validationError) return createError('badRequest', validationError.message);

  const user = await BlogPosts.create({ title, content, userId });
  console.log('USER', user);

  return categoryIds.forEach((category) => PostsCategories.create({ category, id: user.id }));
};

module.exports = {
  createPost,
};
