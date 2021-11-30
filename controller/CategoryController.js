const db = require('../models');

const createCategory = async (req, res) => {
  const category = req.body;

  try {
    const createdCategory = await db.Category.create(category);
    return res.status(201).json(createdCategory);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
};
