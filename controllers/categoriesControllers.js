const categoriesServices = require('../services/categoriesServices');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesServices.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

const createCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const nameCategory = await categoriesServices.createCategories(name);
    return res.status(201).json(nameCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

module.exports = {
  getAllCategories,
  createCategories,
};
