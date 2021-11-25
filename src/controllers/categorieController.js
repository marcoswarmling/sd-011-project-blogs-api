const categorieService = require('../services/categorieService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategorie = await categorieService.categorieRegister(name);
    return res.status(201).json(newCategorie);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const allCategories = await categorieService.getAllCategories();
    return res.status(200).json(allCategories);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

module.exports = {
  create,
  getAllCategories,
};