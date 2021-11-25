const { createToken } = require('../helpers/jwt');
const statusCodes = require('../schemas/statusCodesSchema');
const userService = require('../services/userService');

module.exports = {
  signin: async (request, response, next) => {
    const { email, password } = request.body;

    try {
      const user = await userService.signin({ email, password });

      const { displayName } = user;

      const token = createToken({ displayName, email });

      return response.status(statusCodes.ok).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};
