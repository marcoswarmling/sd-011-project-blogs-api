const PostsCategories = (sequelize, _DataTypes) => {
  const postscategories = sequelize.define('PostsCategories', {}, {
    timestamps: false,
  });

  postscategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { foreignKey: 'postId', as: 'categories', otherKey: 'categoryId', through: postscategories },
    );
    models.Categories.belongsToMany(
      models.BlogPosts,
      { foreignKey: 'categoryId', as: 'blogPosts', otherKey: 'postId', through: postscategories },
    );
  };
  return postscategories;
};

module.exports = PostsCategories;