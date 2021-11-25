const Categories = (sequelize, DataTypes) => {
  const newCategorie = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
    underscored: false,
  });

  return newCategorie;
};

module.exports = Categories;