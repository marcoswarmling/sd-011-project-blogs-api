module.exports = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });
  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: postsCategory,
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: postsCategory,
    });
  };

  return postsCategory;
};