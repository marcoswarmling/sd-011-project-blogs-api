const categoriesService = require('../service/categoriesService');

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const categorie = await categoriesService.createNewCategorie({ name });
    return res.status(categorie.statusCode).json(categorie.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const categories = await categoriesService.getAllCategories();
    return res.status(categories.statusCode).json(categories.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createCategorie,
  getAllCategories,
};