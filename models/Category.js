module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamp: false,
    tableName: 'Categories',
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostsCategory, {
      foreignKey: 'categoryId',
      as: 'Categories',
    });
  };

  return Category;
};