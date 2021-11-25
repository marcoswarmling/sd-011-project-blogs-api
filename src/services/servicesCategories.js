const { Categorie } = require('../../models');
require('dotenv').config();

const errorMessage = 'Algo deu errado';

const createCategories = async (items) => {
  try {
    const newCategorie = await Categorie.create(items);
    if (!newCategorie) {
      return { message: 'erro na criação da categoria' };
    }
    return newCategorie;
  } catch (error) {
    return { errorMessage };
  }
};

const allcategories = async () => {
  try {
    const categories = await Categorie.findAll();
    if (!categories) {
      return { message: 'erro na busca das categories' };
    }
    console.log(categories);
    return categories;
  } catch (error) {
    console.log(error.message);
    return { errorMessage };
  }
};

module.exports = {
  createCategories,
  allcategories,
};
