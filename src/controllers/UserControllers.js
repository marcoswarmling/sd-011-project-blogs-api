const UserServices = require('../services/UserServices');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { displayName, email, password, image } = req.body;
      const userInfo = { displayName, email, password, image };

      const { token, error } = await UserServices.create(userInfo);

      if (error) return next(error);

      return res.status(201).json({ token });
    } catch (err) {
      return next(err);
    }
  },
};
