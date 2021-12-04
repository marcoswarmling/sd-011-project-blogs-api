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

module.exports = {
  createPost,
  getAllPosts,
};
