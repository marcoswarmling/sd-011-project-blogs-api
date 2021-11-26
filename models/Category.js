const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, 
  {
    tableName: 'Categories',
  });

  return Category;
};

module.exports = CategoryModel;