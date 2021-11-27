const { BlogPost } = require('../../models');

const createPost = async (title, content, userId) => {
  const newUser = await BlogPost.create({ title, content, userId });

  return newUser;
};

const getAllPosts = async () => {
  const allPosts = await await BlogPost.findAll({ include: [{ all: true }] });
  console.log(allPosts);

  return allPosts;
};

module.exports = {
  createPost,
  getAllPosts,
};
