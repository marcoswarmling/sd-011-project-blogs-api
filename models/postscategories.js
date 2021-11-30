module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo(models.BlogPosts, { foreignKey: 'postId' });
  };
  PostsCategories.associate = (models) => {
    PostsCategories.belongsTo(models.Categories, { foreignKey: 'categoryId' });
  };
  PostsCategories.removeAttribute('id');
  return PostsCategories;
};
