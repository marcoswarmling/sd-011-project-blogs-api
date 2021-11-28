module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.BlogPost,
      { foreignKey: 'postId', as: 'blogposts' });
    PostCategory.belongsTo(models.Category,
      { foreignKey: 'categoryId', as: 'categories' });
  };

  return PostCategory;
};