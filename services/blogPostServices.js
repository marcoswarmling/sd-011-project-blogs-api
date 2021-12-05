const { BlogPost, Category, User } = require('../models');

const createNewPost = async ({ title, content }) => {
  const newPost = await BlogPost.create({ title, content });
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
  const postById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postById;
};
module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
};