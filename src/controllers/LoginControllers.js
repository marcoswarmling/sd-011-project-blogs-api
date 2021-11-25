const LoginServices = require('../services/LoginServices');

module.exports = {
  logIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const { token, error } = await LoginServices.logIn({ email, password });

      if (error) return next(error);

      res.status(200).json({ token });
    } catch (err) {
      return next(err);
    }
  },
};
