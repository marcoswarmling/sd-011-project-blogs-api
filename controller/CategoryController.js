const db = require('../models');

const getAllCategories = async (_req, res) => {
  try {
    const response = await db.Categories.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createCategory = async (req, res) => {
  const category = req.body;

  try {
    const createdCategory = await db.Categories.create(category);
    return res.status(201).json(createdCategory);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
