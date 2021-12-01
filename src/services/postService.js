const { createError } = require('../middlewares/errors');
const { BlogPost, PostCategory, Category } = require('../models');
const { validatePost } = require('../validations/validations');

const areValidIds = async (arrayOfIds) => {
  const categories = await Promise.all(arrayOfIds.map((id) => Category.findByPk(id)));
  return categories.every((category) => category !== null);
};

const createPost = async (data, userId) => {
  const { title, content, categoryIds } = data;

  if (!categoryIds) return createError('badRequest', '"categoryIds" is required');
  const areValidCategories = await areValidIds(categoryIds);
  if (!areValidCategories) return createError('badRequest', '"categoryIds" not found');

  const { error: validationError } = validatePost(data);
  if (validationError) return createError('badRequest', validationError.message);

  const newPost = await BlogPost.create({ title, content, userId });

  await categoryIds.forEach((categoryId) => PostCategory.create(
    { categoryId, postId: newPost.dataValues.id },
  ));
  return newPost;
};

module.exports = {
  createPost,
};
