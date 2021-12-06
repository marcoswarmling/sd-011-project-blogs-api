const { createToken } = require('../helpers/jwt');
const userService = require('../services/userService');
const statusCodes = require('../schemas/statusCodes');

module.exports = {
  create: async (request, response, next) => {
    const { displayName, email, password, image } = request.body;

    try {
      await userService.create({ displayName, email, password, image });

      const token = createToken({ displayName, email });

      return response.status(statusCodes.created).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};