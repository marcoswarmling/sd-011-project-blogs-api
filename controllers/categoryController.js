// const jwt = require('jsonwebtoken');
const { Category } = require('../models');

// const somethingIsWrong = 'Something is wrong!';

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const createdCategory = await Category.create({ name });

    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createCategory,
};
