const { createError } = require('../middlewares/errors');
const { BlogPost, PostCategory, Category, User } = require('../models');
const { validatePost, validateContentToUpdatePost } = require('../validations/validations');

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

const getAll = async () => {
  const allPosts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'postCategory' } },
    ] },
  );

  return allPosts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'postCategory' } },
    ], 
  });

  if (!post) return createError('notFound', 'Post does not exist');
  return post;
};

const findPost = async (id) => BlogPost.findOne({ 
    where: { id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'postCategory' } },
    ], 
  });

const updateById = async (...params) => {
  const [id, content, title, categoryIds] = params;

  if (categoryIds) return createError('badRequest', 'Categories cannot be edited');
  
  const { error: validationError } = validateContentToUpdatePost({ content, title });
  if (validationError) return createError('badRequest', validationError.message);

  const post = await findPost(id);
  if (!post) return createError('notFound', 'Post does not exist');
  
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updatedPost = await findPost(id);

  return updatedPost;
};

module.exports = {
  createPost,
  getAll,
  getById,
  updateById,
  findPost,
};
