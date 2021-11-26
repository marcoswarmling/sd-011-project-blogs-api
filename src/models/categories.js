const Categories = (sequelize, DataTypes) => {
  const sequelizeCategories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  });

  return sequelizeCategories;
};

module.exports = Categories;