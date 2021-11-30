module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
  {},
  {
    tableName: 'PostsCategories',
    timestamps: false,
  });
  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo(models.BlogPosts, {
      foreignKey: 'postId',
    });
    PostsCategories.belongsTo(models.Categories, {
      foreignKey: 'categoryId',
    });
  };
  PostsCategories.removeAttribute('id');
  return PostsCategories;
};
