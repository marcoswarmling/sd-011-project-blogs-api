const statusCodes = require('../schemas/statusCodesSchema');
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

  getAll: async (_request, response, next) => {
    try {
      const categories = await categoryService.getAll();

      return response.status(statusCodes.ok).json(categories);
    } catch (error) {
      return next(error);
    }
  },
};
