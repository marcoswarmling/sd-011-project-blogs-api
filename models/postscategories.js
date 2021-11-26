const PostCategories = (sequelize, _DataTypes) => {
  const postCategories = sequelize.define('PostCategories', {}, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  postCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.BlogPosts, 
      { as: 'BlogPosts', foreignKey: 'postId', otherKey: 'categoryId', through: postCategories },
    );
    models.Categories.belongsToMany(
      models.Categories,
      { as: 'Categories', foreignKey: 'categoryId', otherKey: 'postId', through: postCategories },
    );
  };

  return postCategories;
};

module.exports = PostCategories;