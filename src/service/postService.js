const { BlogPost } = require('../models');

const createNewPost = async ({ title, content, categoryIds, id }) => {
  const userId = id;
  const post = await BlogPost.create({ title, content, categoryIds, userId });

  return { statusCode: 200, response: post };
 };

 module.exports = {
  createNewPost,
};