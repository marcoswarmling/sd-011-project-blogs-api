const { BlogPost, Category, User } = require('../models');
const checkExistingCategories = require('../utils/checkExistingCategories');
const { postError } = require('../utils/errorSchema');

const createPost = async (post) => {
  const allCategories = await Category.findAll();

  const existingCategories = checkExistingCategories(post.categoryIds, allCategories);
  if (!existingCategories) throw postError.unexistingCategory;

  const newPost = await BlogPost.create(post);
  
  return newPost;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) throw postError.unexistingPost;

  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
