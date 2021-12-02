module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {
    timestamps: false,
  });

  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'BlogPosts',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};