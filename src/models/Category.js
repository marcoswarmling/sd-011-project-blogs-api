module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });
<<<<<<< HEAD
=======

  Category.associate = (models) => {
    Category.hasMany(
      models.PostCategory, {
        foreignKey: 'categoryId', as: 'categories',
      },
    );
  };

>>>>>>> 71741190d5f2a6695c0cc8e682e7b2659f5f7ca9
  return Category;
};