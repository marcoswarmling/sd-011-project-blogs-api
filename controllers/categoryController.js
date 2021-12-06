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

module.exports = { createCategory };