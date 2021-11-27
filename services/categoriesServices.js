const { Categorie } = require('../models');
require('dotenv').config();

const createCategorie = (name) => Categorie.create({ name });

module.exports = {
  createCategorie,
};