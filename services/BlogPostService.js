const { BlogPosts } = require('../models');

const createBlogPost = async (title, content, categoryIds, userId) => {
  const result = await BlogPosts.create({ title, content, userId });

  const insert = {
    id: result.id,
    userId,
    title: result.title,
    content: result.content,
  };
  // return console.log('terminou o caminho');
  
  return insert; 
};

module.exports = {
  createBlogPost,
};