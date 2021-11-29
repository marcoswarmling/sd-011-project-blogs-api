const { BlogPost } = require('../models');

const createBlogPost = async (title, content, categoryIds, userId) => {
  const result = await BlogPost.create({ title, content, categoryIds, userId });

  const insert = {
    id: result.categoryIds,
    userId: result.userId,
    title: result.title,
    content: result.content,
  };
  // return console.log('terminou o caminho');
  
  return insert; 
};

module.exports = {
  createBlogPost,
};