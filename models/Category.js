module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timstamps: false,
    tableName: 'Categories',
  });

  return Category;
};