const PostsCategory = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory',
    {},
    { timestamps: false });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'posts',
      through: PostCategory,
    });

    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      through: PostCategory,
    });
  };

  return PostCategory;
};

module.exports = PostsCategory;