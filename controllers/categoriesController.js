const categoriesService = require('../services/categoriesService');

async function createCategories(req, res) {
  const { name } = req.body;
  try {
    const result = await categoriesService.createCategories(name);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'not found' });
  }
}

async function getAllCategories(req, res) {
  try {
    const result = await categoriesService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'not found' });
  }
}

module.exports = {
  createCategories,
  getAllCategories,
};
