module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });
  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo = (models.BlogPosts, {
      foreignKey: 'postId',
    });
    PostsCategories.belongsTo = (models.Categories, {
      foreignKey: 'categoryId',
    });
  };
  return PostsCategories;
};
