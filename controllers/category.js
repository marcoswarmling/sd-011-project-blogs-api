const Category = require('../services/category');

const createCat = async (req, res, next) => {
  const { name } = req.body;
  const cat = await Category.createCat(name);
  if (cat.err) return next(cat.err);

  return res.status(201).json(cat);
};

const getAllCats = async (_req, res, _next) => {
  const cats = await Category.getAllCats();

  return res.status(200).json(cats);
};

module.exports = {
  createCat,
  getAllCats,
};
