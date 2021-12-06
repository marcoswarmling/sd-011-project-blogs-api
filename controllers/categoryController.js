const Category = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Category.createCategory({ name });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCategories = async (req, res) => {
  try {
    const categoriesData = await Category.getCategories();
    if (categoriesData.err) {
      return res.status(categoriesData.err.code).json(categoriesData.err.message); 
    }
     return res.status(200).json(categoriesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createCategory, getCategories };
