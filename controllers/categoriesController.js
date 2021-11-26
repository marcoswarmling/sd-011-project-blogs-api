const CategoriesService = require('../services/categoriesService');

const createCategoy = async (req, res) => {
  const { name } = req.body;

  const user = await CategoriesService.createCategory(name);

  if (user.message) {
    return res.status(400).json(user);
  }

  return res.status(201).json(user);
};

module.exports = {
  createCategoy,
};
