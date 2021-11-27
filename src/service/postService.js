const { BlogPost } = require('../../models');

const createPost = async (title, content, userId) => {
  const newUser = await BlogPost.create({ title, content, userId });

  return newUser;
};

const getAllPosts = async () => {
  const allPosts = await await BlogPost.findAll({ include: [{ all: true }] });

  return allPosts;
};

const getPostById = async (id) => {
  const allPosts = await await BlogPost.findOne({ where: { id }, include: [{ all: true }] });

  if (!allPosts) return { message: 'Post does not exist' };

  return allPosts;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};
