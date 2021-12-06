module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {
    postId: DataTypes.NUMBER,
    categoryId: DataTypes.NUMBER
  });
  return PostsCategories;
};
