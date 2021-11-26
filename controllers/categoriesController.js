const CategoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    
    const newCategory = await CategoriesService.create({ name });
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const categories = await CategoriesService.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
};

module.exports = {
  create,
  findAll,
}; 