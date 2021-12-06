const statusCodes = require('../schemas/statusCodes');
const postService = require('../services/postService');

module.exports = {
  create: async (request, response, next) => {
    const { user, body } = request;
    const { title, content, categoryIds } = body;

    try {
      const post = await postService.create({ title, content, categoryIds, userId: user.id });

      return response.status(statusCodes.created).json(post);
    } catch (error) {
      return next(error);
    }
  },
};