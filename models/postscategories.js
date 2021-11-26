module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {},
    { timestamps: false, tableName: 'PostsCategories' });
  PostsCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'post',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'category',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategory;
};
