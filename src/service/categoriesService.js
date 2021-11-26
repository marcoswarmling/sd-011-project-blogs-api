const { Categorie } = require('../models');

const createNewCategorie = async ({ name }) => {
  const categorie = await Categorie.findOne({ where: { name } });

  if (categorie) return { statusCode: 409, response: { message: 'Categorie already registered' } };

  await Categorie.create({ name });

  return { statusCode: 201, response: { name } };
 };

 module.exports = {
  createNewCategorie,
};