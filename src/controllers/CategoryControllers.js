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
};
