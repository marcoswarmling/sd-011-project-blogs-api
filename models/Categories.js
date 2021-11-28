module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {});
  Categories.associate = () => {
    // Futuras associações
  };
  return Categories;
};
