const Categorie = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return CategorieTable;
};

module.exports = Categorie;