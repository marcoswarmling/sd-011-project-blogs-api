// @ts-nocheck
require('dotenv').config();

const { Category } = require('../models');

const getAll = async (req, res) => {
  try {
    const category = await Category.findAll({});
    return res.status(200).json(category);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const category = await Category.create({ name });
    console.log(category);

    res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  createCategory,
  getAll,
  
  // createAdmin,
};
