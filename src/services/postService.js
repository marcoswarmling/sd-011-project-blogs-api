const { BlogPost } = require('../models');
const { hasCategories } = require('../helpers/categoryHelper');
const errors = require('../schemas/errorsSchema');

const create = async (post) => {
  const validCategories = await hasCategories(post.categoryIds);

  if (!validCategories) throw errors.post.categoryNotFound;

  const newPost = await BlogPost.create(post);

  return newPost;
};

module.exports = { create };
