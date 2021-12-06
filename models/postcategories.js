module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories',
    {},
    { timestamps: false });
  PostCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogposts',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostCategories;
};