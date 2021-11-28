const PostCategory = (sequelize, DataTypes) => {
  const PostCategory1 = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
  });

  return PostCategory1;
};

module.exports = PostCategory;