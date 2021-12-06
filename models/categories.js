module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
}, { timestamps: false });
      Categories.associate = (models) => {
        Categories.belongsToMany(models.BlogPosts, {
          foreignKey: 'categoryId',
          as: 'posts',
          through: models.PostCategories,
        });
  };
  return Categories;
};