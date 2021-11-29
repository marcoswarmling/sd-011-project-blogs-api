const PostCategory = (sequelize, DataTypes) => {
  const NewPostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  });

  return NewPostCategory;
};

module.exports = PostCategory;
