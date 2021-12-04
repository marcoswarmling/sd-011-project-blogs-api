module.exports = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });
  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostsCategory',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostsCategory',
    });
  };

  return postsCategory;
};