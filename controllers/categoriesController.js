const db = require('../models');

const createCategories = async (req, res) => {
  const categories = req.body;
  try {
    const categoriesCreated = await db.Categories.create(categories);
    return res.status(201).json(categoriesCreated); 
  } catch (error) {
    return res.status(400).json(error.message);
  }   
};

module.exports = {
  createCategories,
};