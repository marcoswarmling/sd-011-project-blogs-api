const { Categorie } = require('../models');
require('dotenv').config();

const createNewCategorie = async (name) => Categorie.create({ name });

const getAllCategories = async () => {
const categories = await Categorie.findAll();
return categories.sort((a, b) => a.dataValues.id - b.dataValues.id);
};
const getCategorieById = async (id) => Categorie.findByPk(id);

module.exports = {
  createNewCategorie,
  getAllCategories,
  getCategorieById,
};