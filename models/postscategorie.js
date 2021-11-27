const PostCategory = (sequelize, _DataTypes) => {
  const newPostCategory = sequelize.define('PostsCategory',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  newPostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: newPostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: newPostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return newPostCategory;
};

module.exports = PostCategory;