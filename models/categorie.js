const Categorie = (sequelize, DataTypes) => {
  const Categorie1 = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Categorie1;
};

module.exports = Categorie;