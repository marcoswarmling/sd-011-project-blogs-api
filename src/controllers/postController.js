const statusCodes = require('../schemas/statusCodesSchema');
const postService = require('../services/postService');

module.exports = {
  create: async (request, response, next) => {
    const { title, content, categoryIds } = request.body;

    try {
      const post = await postService.create({ title, content, categoryIds });

      return response.status(statusCodes.created).json(post);
    } catch (error) {
      return next(error);
    }
  },
};
