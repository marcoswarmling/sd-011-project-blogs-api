const Categorie = (sequelize, DataTypes) => {
  const CategorieModel = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return CategorieModel;
};

module.exports = Categorie;
