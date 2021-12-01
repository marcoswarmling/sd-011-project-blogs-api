const rescue = require('express-rescue');
const service = require('../services/categoryService');

const createCategory = rescue(async (req, res, next) => {
  const { name } = req.body;

  const result = await service.createCategory(name);

  return result.code
    ? next(result)
    : res.status(201).json(result);
});

module.exports = {
  createCategory,
};
