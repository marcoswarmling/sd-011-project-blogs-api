const categoriesServices = require('../services/categoriesServices');

const ERROR_MESSAGE = { message: 'error interno' };

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategorie = await categoriesServices.createCategorie(name);
    return res.status(201).json(newCategorie);
  } catch (err) {
    return res.status(500).json(ERROR_MESSAGE);
  }
};

module.exports = {
  createCategorie,
};