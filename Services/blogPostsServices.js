const { BlogPosts } = require('../models/index');

const createPosts = async (data, title, content) => {
  const create = await BlogPosts.create({ title, content, userId: data.id });
  const modelOfPost = {
      id: create.id,
      userId: create.userId,
      title,
      content,
    };
  return modelOfPost;
};

const getPost = async () => {
  const blogPosts = await BlogPosts.findAll({ include: {
    model: 'Users',
    as: 'users',
  } });
  return blogPosts;
};

module.exports = {
  createPosts,
  getPost,
};
