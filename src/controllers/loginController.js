const { JWT } = require('../helppers/jwt');
const status = require('../schemas/errorCodes');
const loginService = require('../services/loginService');

module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      await loginService.login({ email, password });

      const token = JWT({ email, password });

      return res.status(status.ok).json({ token });
    } catch (error) {
      return next(error);
    }
  },
};