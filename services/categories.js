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

module.exports = {
  registerCategorie,
};
