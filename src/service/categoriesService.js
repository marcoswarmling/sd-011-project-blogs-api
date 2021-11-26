const { Categorie } = require('../models');

const createNewCategorie = async ({ name }) => {
  const categorie = await Categorie.findOne({ where: { name } });

  if (categorie) return { statusCode: 409, response: { message: 'Categorie already registered' } };

  const returnCategorieCreate = await Categorie.create({ name });

  return { statusCode: 201, response: returnCategorieCreate };
 };

 const getAllCategories = async () => {
  const categories = await Categorie.findAll();

  return { statusCode: 200, response: categories };
};

 module.exports = {
  createNewCategorie,
  getAllCategories,
};