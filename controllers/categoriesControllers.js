const categoriesServices = require('../services/categoriesServices');

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
  createCategories,
};
