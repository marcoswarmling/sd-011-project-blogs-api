const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {}, {
    timestamp: false,
  });

  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Categories',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'postId',
    });
  };

  return postsCategory;
};

module.exports = PostsCategory;