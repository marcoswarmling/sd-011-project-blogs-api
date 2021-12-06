const { Categories } = require('../models');

const validateCategoriesIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  const getAllCategories = await Categories.findAll();
  const findId = getAllCategories.map((category) => category.id);
  // A função map retorna o id de category e a função every testa se o id esta sendo passado, esta incluso no categoriIds.
  const getAllIds = categoryIds.every((id) => findId.includes(id));
  
  if (!getAllIds) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateCategoriesIds,
};