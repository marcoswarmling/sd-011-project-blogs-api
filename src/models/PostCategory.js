module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {}, {
    postId: { type: DataTypes.INTEGER, foreignkey: true },
    categoryId: { type: DataTypes.INTEGER, foreignkey: true },
  }, {
    timestamps: false,
  });
  PostCategory.associate = (models) => {
<<<<<<< HEAD
    models.BlogPosts.belongsToMany(models.Categories, {
      through: 'PostsCategories', as: 'categories', foreignKey: 'categoryId', otherKey: 'postId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      through: 'PostsCategories', as: 'posts', foreignKey: 'postId', otherKey: 'categoryId',
=======
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId',
>>>>>>> 71741190d5f2a6695c0cc8e682e7b2659f5f7ca9
    });
  };
  return PostCategory;
};