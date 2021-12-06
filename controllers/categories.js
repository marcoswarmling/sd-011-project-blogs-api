const services = require('../services/categories');

const createNewCategory = async (req, res) => {
  const newCategory = req.body;
  console.log(newCategory);
  try {
    const createdCategory = await services.createNewCategory(newCategory);
    return res.status(201).json(createdCategory);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createNewCategory,
};
