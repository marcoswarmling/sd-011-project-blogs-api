const Categories = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return categorie;
};

module.exports = Categories;