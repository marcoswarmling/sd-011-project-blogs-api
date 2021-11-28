module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
  },
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.BlogPost,
      { foreignKey: 'postId', as: 'blogposts', through: PostCategory, otherKey: 'categoryId' });
    PostCategory.belongsTo(models.Category,
      { foreignKey: 'categoryId', as: 'categories', through: PostCategory, otherKey: 'postId' });
  };

  return PostCategory;
};