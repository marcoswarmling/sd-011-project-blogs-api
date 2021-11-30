module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, { timestamps: false });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'posts', through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      through: PostsCategories,
      as: 'categories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};