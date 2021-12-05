const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define(
    'PostsCategory', { postId: DataTypes.INTEGER }, { timestamps: false },
  );
  postsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postsCategory;
};

module.exports = PostsCategory;
