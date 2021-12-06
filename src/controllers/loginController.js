const statusCodes = require('../schemas/statusCodes');
const userService = require('../services/userService');

module.exports = {
  signin: async (request, response, next) => {
    const { email, password } = request.body;

    try {
      const token = await userService.signin({ email, password });

      return response.status(statusCodes.ok).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};