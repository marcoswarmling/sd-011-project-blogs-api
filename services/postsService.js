const jwt = require('jsonwebtoken');
const { BlogPost } = require('../models');

const secretKey = process.env.JWT_SECRET;

const createPost = async (token, title, content) => {
  const decodedToken = jwt.verify(token, secretKey);
  const userId = decodedToken.data.id;
  const createdPost = await BlogPost.create({ title, content, userId });
  return createdPost;
};

module.exports = {
  createPost,
};