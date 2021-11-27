const { Categorie } = require('../models');
require('dotenv').config();

const createCategorie = (name) => Categorie.create({ name });

const getAllCategories = () => Categorie.findAll();

module.exports = {
  getAllCategories,
  createCategorie,
};