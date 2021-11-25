const Categorie = (sequelize, DataTypes) => {
  const newCategorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  return newCategorie;
};

module.exports = Categorie;