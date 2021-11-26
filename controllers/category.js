const Category = require('../services/category');

const createCat = async (req, res, next) => {
  const { name } = req.body;
  const cat = await Category.createCat(name);
  if (cat.err) return next(cat.err);

  return res.status(201).json(cat);
};

module.exports = {
  createCat,
};
