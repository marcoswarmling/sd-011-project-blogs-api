const { BlogPosts } = require('../models');

const createBlogPost = async (title, content, userId) => {
  const result = await BlogPosts.create({ userId, title, content });
  console.log(result);

  // const insert = {
  //   userId,
  //   id: result.id,
  //   title: result.title,
  //   content: result.content,
  // };

  return result; 
};

module.exports = {
  createBlogPost,
};