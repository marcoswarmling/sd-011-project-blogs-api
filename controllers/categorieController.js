const {
  categorieValidate,
  getCategories,
} = require('../services/categorieService');

const categorieCreate = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategorie = await categorieValidate(name);
    if (newCategorie.message) {
      return res.status(400).json(newCategorie);
    }
    return res.status(201).json(newCategorie);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Something is wrong' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await getCategories();
    if (categories.message) {
      return res.status(401).json(categories);
    }
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  categorieCreate,
  getAllCategories,
};