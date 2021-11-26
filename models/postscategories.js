module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {},
    { timestamps: false, tableName: 'PostsCategories' });
  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostsCategory;
};
