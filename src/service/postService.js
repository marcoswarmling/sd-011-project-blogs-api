const { BlogPost } = require('../../models');

const createPost = async (title, content, userId) => {
  const newUser = await BlogPost.create({ title, content, userId });

  return newUser;
};

module.exports = {
  createPost,
};
