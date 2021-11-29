const statusCodes = require('../schemas/statusCodesSchema');
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

  getById: async (request, response, next) => {
    const { id } = request.params;

    try {
      const post = await postService.getById(id);

      return response.status(statusCodes.ok).json(post);
    } catch (error) {
      return next(error);
    }
  },

  update: async (request, response, next) => {
    const { params, body } = request;
    const { id } = params;
    const { title, content } = body;

    try {
      const updatedPost = await postService.update(id, { title, content });

      return response.status(statusCodes.ok).json(updatedPost);
    } catch (error) {
      return next(error);
    }
  },

  delete: async (request, response, next) => {
    const { id } = request.params;

    try {
      await postService.delete(id);

      return response.status(statusCodes.noContent).send();
    } catch (error) {
      return next(error);
    }
  },

  search: async (request, response, next) => {
    const { q } = request.query;

    try {
      const posts = await postService.search(q);

      return response.status(statusCodes.ok).json(posts);
    } catch (error) {
      return next(error);
    }
  },
};
