const { Categorie } = require('../models');

const registerCategorie = async (name) => {
  try {
    const categorie = await Categorie.create({
      name,
    });
    return categorie;
  } catch (err) {
    return err;
  }
};

const getAllCategories = async () => {
  try {
    const categories = await Categorie.findAll();
    return categories;
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerCategorie,
  getAllCategories,
};
