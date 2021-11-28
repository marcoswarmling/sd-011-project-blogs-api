const Categorie = (sequelize, DataTypes) => {
  const newCategorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  });

  return newCategorie;
};

module.exports = Categorie;