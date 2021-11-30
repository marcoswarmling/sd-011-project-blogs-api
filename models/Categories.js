module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {});
  Categories.associate = (models) => {
    Categories.belongsToMany(models.BlogPosts, {
      foreignKey: 'categoryId',
      as: 'posts',
      through: models.PostsCategories,
    });
  };
  return Categories;
};
