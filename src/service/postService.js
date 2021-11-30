const { BlogPost } = require('../models');

const createNewPost = async ({ title, content, categoryIds, id: userId }) => {
  const post = await BlogPost.create({ title, content, userId });

  await post.setCategories(categoryIds);

  return { statusCode: 201, response: post };
 };

 module.exports = {
  createNewPost,
};