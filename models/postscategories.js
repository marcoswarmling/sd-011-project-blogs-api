const PostsCategories = (sequelize, _DataTypes) => {
  const createPostCategory = sequelize.define('PostsCategory',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  createPostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: createPostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: createPostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return createPostCategory;
};

module.exports = PostsCategories; 