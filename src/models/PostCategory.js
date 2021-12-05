module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {}, {
    postId: { type: DataTypes.INTEGER, foreignkey: true },
    categoryId: { type: DataTypes.INTEGER, foreignkey: true },
  }, {
    timestamps: false,
  });
  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      through: 'PostsCategories', as: 'categories', foreignKey: 'categoryId', otherKey: 'postId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      through: 'PostsCategories', as: 'posts', foreignKey: 'postId', otherKey: 'categoryId',
    });
  };
  return PostCategory;
};