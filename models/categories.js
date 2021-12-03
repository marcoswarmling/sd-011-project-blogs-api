module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
  });

  return Categories;
};
