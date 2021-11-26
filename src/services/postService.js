const { BlogPost } = require('../models');
const { hasCategories } = require('../helpers/categoryHelper');
const errors = require('../schemas/errorsSchema');

module.exports = {
  create: async (post) => {
    const validCategories = await hasCategories(post.categoryIds);

    if (!validCategories) throw errors.post.categoryNotFound;

    const newPost = await BlogPost.create(post);

    return newPost;
  },

  getAll: async () => {
    const posts = BlogPost.findAll();

    return posts;
  },
};
