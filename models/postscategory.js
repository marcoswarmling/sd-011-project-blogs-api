const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
  });

  return postsCategory;
};

module.exports = PostsCategory;