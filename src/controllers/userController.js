const { JWT } = require('../helppers/jwt');
const status = require('../schemas/errorCodes');
const userService = require('../services/userService');

module.exports = {
  create: async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    try {
      await userService.create({ displayName, email, password, image });

      const token = JWT({ displayName, email });

      return res.status(status.created).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};