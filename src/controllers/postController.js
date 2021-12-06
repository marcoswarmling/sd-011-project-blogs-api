const statusCodes = require('../schemas/statusCodes');
const postService = require('../services/postService');
const { createPostsCategories } = require('../helpers/postCategoryHelper');

module.exports = {
  create: async (request, response, next) => {
    const { user, body } = request;
    const { title, content, categoryIds } = body;

    try {
      const post = await postService.create({ title, content, categoryIds, userId: user.id });

      await createPostsCategories(post.id, categoryIds);
      
      return response.status(statusCodes.created).json(post);
    } catch (error) {
      return next(error);
    }
  },

  getAll: async (_request, response, next) => {
    try {
      const posts = await postService.getAll();

      return response.status(statusCodes.ok).json(posts);
    } catch (error) {
      return next(error);
    }
  },
};