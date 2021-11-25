const CategoryServices = require('../services/CategoryServices');

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
  
      const { category, error } = await CategoryServices.create(name);

      if (error) return next(error);

      return res.status(201).json(category);
    } catch (error) {
      return next(error);
    }
  },
  index: async (_req, res, next) => {
    try {
      const { users, error } = await CategoryServices.index();

      if (error) return next(error);

      return res.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  },
};
