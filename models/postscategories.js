const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {}, {
    tableName: 'PostsCategories',
    timestamps: false,
  });

  postsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: postsCategories },
    );
      models.Categories.belongsToMany(
      models.BlogPosts, 
      { as: 'blogPosts', foreignKey: 'categoryId', otherKey: 'postId', through: postsCategories },
    );
  };

  return postsCategories;
};

module.exports = PostsCategories;