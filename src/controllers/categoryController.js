const statusCodes = require('../schemas/statusCodes');
const categoryService = require('../services/categoryService');

module.exports = {
  create: async (request, response, next) => {
    const { name } = request.body;

    try {
      const category = await categoryService.create(name);

      return response.status(statusCodes.created).json(category);
    } catch (error) {
      return next(error);
    }
  },
};