const models = require('../models');

const createNewPost = async ({ title, content, userId }) => 
  models.BlogPosts.create({ title, content, userId });

module.exports = {
  createNewPost,
};
